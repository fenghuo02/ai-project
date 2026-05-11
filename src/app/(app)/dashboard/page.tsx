import Link from "next/link";
import { ArrowRight, CreditCard, MessageSquare, Sparkles } from "lucide-react";
import { auth } from "@/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { prisma } from "@/lib/db";
import { getUserSubscription } from "@/lib/subscription";
import { formatDate } from "@/lib/utils";

export const metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) return null;

  const [sub, messageCount, recent] = await Promise.all([
    getUserSubscription(session.user.id),
    prisma.chatMessage.count({ where: { userId: session.user.id } }),
    prisma.chatMessage.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]);

  return (
    <section className="container py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">
            Welcome back{session.user.name ? `, ${session.user.name.split(" ")[0]}` : ""} 👋
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight">
            Your workspace
          </h1>
        </div>
        <Button asChild variant="gradient">
          <Link href="/chat">
            Open AI Chat
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Current plan</p>
              <Badge variant={sub.plan === "free" ? "secondary" : "success"}>
                {sub.plan.toUpperCase()}
              </Badge>
            </div>
            <p className="mt-3 text-3xl font-semibold">
              {sub.plan === "free"
                ? "Free"
                : sub.plan === "pro"
                ? "$19/mo"
                : "$49/mo"}
            </p>
            {sub.currentPeriodEnd && (
              <p className="mt-1 text-xs text-muted-foreground">
                Renews on {formatDate(sub.currentPeriodEnd)}
              </p>
            )}
            <div className="mt-4">
              <Button asChild size="sm" variant="outline">
                <Link href="/billing">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Manage billing
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Messages sent</p>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="mt-3 text-3xl font-semibold">{messageCount}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Total across your account
            </p>
            <div className="mt-4">
              <Button asChild size="sm" variant="outline">
                <Link href="/chat">Start a new chat</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glow-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Model</p>
              <Sparkles className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="mt-3 text-xl font-semibold">
              {sub.isPro ? "GPT-4o class" : "GPT-4o mini"}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {sub.isPro
                ? "Unlocked with your subscription"
                : "Upgrade for higher quality and priority throughput"}
            </p>
            <div className="mt-4">
              {sub.isPro ? (
                <Button asChild size="sm" variant="outline">
                  <Link href="/chat">Try it now</Link>
                </Button>
              ) : (
                <Button asChild size="sm" variant="gradient">
                  <Link href="/pricing">Upgrade</Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-lg font-semibold">Recent activity</h2>
        <Card>
          <CardContent className="p-0">
            {recent.length === 0 ? (
              <div className="p-10 text-center text-sm text-muted-foreground">
                No messages yet. Your chat history will appear here.
              </div>
            ) : (
              <ul className="divide-y divide-white/5">
                {recent.map((m) => (
                  <li
                    key={m.id}
                    className="flex items-start justify-between gap-4 p-4"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {m.role}
                      </p>
                      <p className="mt-1 line-clamp-2 text-sm">{m.content}</p>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {formatDate(m.createdAt)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
