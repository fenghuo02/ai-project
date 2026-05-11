import { auth } from "@/auth";
import { ChatUI } from "@/components/chat-ui";
import { prisma } from "@/lib/db";
import { getUserSubscription } from "@/lib/subscription";

export const metadata = { title: "AI Chat" };

export default async function ChatPage() {
  const session = await auth();
  if (!session?.user) return null;

  const [sub, history] = await Promise.all([
    getUserSubscription(session.user.id),
    prisma.chatMessage.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "asc" },
      take: 40,
    }),
  ]);

  return (
    <ChatUI
      plan={sub.plan}
      initialMessages={history.map((m) => ({
        id: m.id,
        role: m.role as "user" | "assistant",
        content: m.content,
      }))}
    />
  );
}
