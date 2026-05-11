"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CreditCard, LayoutDashboard, MessageSquare, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/chat", label: "AI Chat", icon: MessageSquare },
  { href: "/billing", label: "Billing", icon: CreditCard },
];

export function AppSidebar() {
  const pathname = usePathname();
  const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Lumen AI";

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-white/5 bg-background/60 backdrop-blur-xl md:flex md:flex-col">
      <Link href="/" className="flex h-16 items-center gap-2 border-b border-white/5 px-6">
        <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 shadow-lg shadow-primary/30">
          <Sparkles className="h-4 w-4 text-white" />
        </span>
        <span className="text-sm font-semibold tracking-tight">{appName}</span>
      </Link>
      <nav className="flex-1 px-3 py-4">
        {items.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "mb-1 flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-white/5 text-foreground ring-1 ring-inset ring-white/10"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="m-3 rounded-lg border border-white/5 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-3 text-xs text-muted-foreground">
        <p className="font-medium text-foreground">Tip</p>
        <p className="mt-1">
          Press <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]">↵</kbd>{" "}
          in chat to send, <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px]">Shift+↵</kbd>{" "}
          for a new line.
        </p>
      </div>
    </aside>
  );
}
