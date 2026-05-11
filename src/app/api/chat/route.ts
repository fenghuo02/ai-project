import { NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";

import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { getUserSubscription } from "@/lib/subscription";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const bodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant", "system"]),
        content: z.string().min(1).max(8000),
      })
    )
    .min(1)
    .max(40),
});

const FREE_DAILY_LIMIT = 20;

const SYSTEM_PROMPT = `You are Lumen, a friendly and concise AI assistant embedded in a SaaS product.
- Prefer clear, short, well-structured answers with sensible formatting.
- Use code blocks for code. Explain reasoning when helpful, but don't ramble.
- If the user asks for anything harmful or disallowed, politely decline.`;

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const parsed = bodySchema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }
  const { messages } = parsed.data;

  const sub = await getUserSubscription(session.user.id);

  // Rate-limit free users at FREE_DAILY_LIMIT messages per day.
  if (!sub.isPro) {
    const since = new Date();
    since.setHours(0, 0, 0, 0);
    const todayCount = await prisma.chatMessage.count({
      where: {
        userId: session.user.id,
        role: "user",
        createdAt: { gte: since },
      },
    });
    if (todayCount >= FREE_DAILY_LIMIT) {
      return NextResponse.json(
        {
          error:
            "Daily free limit reached. Upgrade your plan to continue chatting.",
        },
        { status: 402 }
      );
    }
  }

  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (lastUser) {
    await prisma.chatMessage.create({
      data: {
        userId: session.user.id,
        role: "user",
        content: lastUser.content,
      },
    });
  }

  // If no OpenAI key, degrade gracefully with an echo-style response so the UI
  // still works end-to-end in local/dev/demo mode.
  if (!process.env.OPENAI_API_KEY) {
    const demo = `I'm Lumen (demo mode — no OPENAI_API_KEY configured).\n\nYou asked:\n> ${lastUser?.content ?? ""}\n\nThis is a placeholder response so you can verify the UI, auth and billing flows locally. Set OPENAI_API_KEY to enable real responses.`;
    await prisma.chatMessage.create({
      data: {
        userId: session.user.id,
        role: "assistant",
        content: demo,
      },
    });
    return new Response(demo, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const model =
    process.env.OPENAI_MODEL ?? (sub.isPro ? "gpt-4o" : "gpt-4o-mini");

  const stream = await openai.chat.completions.create({
    model,
    stream: true,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.map((m) => ({ role: m.role, content: m.content })),
    ],
    temperature: 0.7,
  });

  const encoder = new TextEncoder();
  let full = "";
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          const delta = chunk.choices?.[0]?.delta?.content ?? "";
          if (delta) {
            full += delta;
            controller.enqueue(encoder.encode(delta));
          }
        }
      } catch (err) {
        console.error("OpenAI stream error", err);
      } finally {
        controller.close();
        if (full) {
          try {
            await prisma.chatMessage.create({
              data: {
                userId: session.user.id,
                role: "assistant",
                content: full,
              },
            });
          } catch (err) {
            console.error("Failed to persist assistant message", err);
          }
        }
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
