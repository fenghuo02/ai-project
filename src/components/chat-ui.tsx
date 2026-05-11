"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUp, Bot, Loader2, Sparkles, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ChatRole = "user" | "assistant";
type ChatMessage = { id: string; role: ChatRole; content: string };

const SUGGESTIONS = [
  "Draft a launch tweet for our new AI feature",
  "Explain Next.js App Router like I'm 5",
  "Write a SQL query to find churned customers last month",
  "Outline a landing page for a fintech startup",
];

export function ChatUI({
  plan,
  initialMessages,
}: {
  plan: "free" | "pro" | "team";
  initialMessages: ChatMessage[];
}) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function send(prompt?: string) {
    const content = (prompt ?? input).trim();
    if (!content || loading) return;
    setError(null);
    setInput("");
    const userMsg: ChatMessage = {
      id: `tmp-${Date.now()}`,
      role: "user",
      content,
    };
    const next = [...messages, userMsg];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Something went wrong.");
        setLoading(false);
        return;
      }

      // Read streaming text
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      const assistantId = `a-${Date.now()}`;
      let acc = "";
      setMessages((m) => [
        ...m,
        { id: assistantId, role: "assistant", content: "" },
      ]);
      if (!reader) {
        setLoading(false);
        return;
      }
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) =>
          m.map((msg) =>
            msg.id === assistantId ? { ...msg, content: acc } : msg
          )
        );
      }
    } catch (e) {
      console.error(e);
      setError("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  const empty = messages.length === 0;

  return (
    <div className="relative flex h-[calc(100vh-4rem)] flex-col">
      <div ref={listRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-3xl px-4 py-10">
          {empty ? (
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 shadow-lg shadow-primary/30">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h1 className="mt-4 text-2xl font-semibold">
                What can I help with today?
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Ask anything — drafts, analysis, code, ideas. Your chats are
                stored privately in your workspace.
              </p>
              <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-2 md:grid-cols-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-lg border border-white/5 bg-white/[0.02] p-3 text-left text-sm text-muted-foreground transition hover:border-white/10 hover:bg-white/[0.04] hover:text-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <ul className="space-y-6">
              {messages.map((m) => (
                <li key={m.id} className="flex items-start gap-3">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 ring-white/10 ${
                      m.role === "user"
                        ? "bg-white/5 text-muted-foreground"
                        : "bg-gradient-to-br from-violet-500 to-cyan-500 text-white"
                    }`}
                  >
                    {m.role === "user" ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div
                    className={`flex-1 rounded-xl border px-4 py-3 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "border-white/5 bg-white/[0.03]"
                        : "border-white/5 bg-gradient-to-br from-violet-500/[0.06] to-cyan-500/[0.04]"
                    }`}
                  >
                    <p className="mb-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {m.role === "user" ? "You" : "Lumen"}
                    </p>
                    <div className="whitespace-pre-wrap">{m.content || "…"}</div>
                  </div>
                </li>
              ))}
              {loading && (
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-white ring-1 ring-white/10">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Loader2 className="h-3 w-3 animate-spin" />
                    Thinking…
                  </div>
                </li>
              )}
            </ul>
          )}

          {error && (
            <div className="mx-auto mt-6 max-w-2xl rounded-md border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
              {error}
              {error.toLowerCase().includes("limit") && (
                <>
                  {" "}
                  <Link
                    href="/pricing"
                    className="underline underline-offset-4"
                  >
                    Upgrade your plan
                  </Link>{" "}
                  to continue.
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/5 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-3xl p-4">
          <div className="glass relative rounded-2xl p-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              rows={2}
              placeholder="Message Lumen…"
              className="max-h-40 w-full resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
            />
            <div className="flex items-center justify-between px-2 pb-1">
              <Badge variant={plan === "free" ? "secondary" : "success"}>
                {plan === "free"
                  ? "Free · 20/day"
                  : plan === "pro"
                  ? "Pro · unlimited"
                  : "Team · unlimited"}
              </Badge>
              <Button
                onClick={() => send()}
                disabled={loading || !input.trim()}
                size="sm"
                variant="gradient"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <ArrowUp className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          <p className="mt-2 text-center text-[11px] text-muted-foreground">
            Lumen can make mistakes. Consider verifying important information.
          </p>
        </div>
      </div>
    </div>
  );
}
