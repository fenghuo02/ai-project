import Link from "next/link";
import { signOut } from "@/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function AppTopbar({
  user,
  plan,
}: {
  user: { name?: string | null; email?: string | null; image?: string | null };
  plan: "free" | "pro" | "team";
}) {
  const initial =
    (user.name ?? user.email ?? "U").trim().charAt(0).toUpperCase() || "U";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/5 bg-background/60 px-4 backdrop-blur-xl md:px-8">
      <div className="flex items-center gap-3">
        <Badge variant={plan === "free" ? "secondary" : "success"}>
          {plan === "free" ? "Free plan" : `${plan === "pro" ? "Pro" : "Team"} plan`}
        </Badge>
        {plan === "free" && (
          <Link
            href="/pricing"
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Upgrade →
          </Link>
        )}
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden text-right text-xs md:block">
          <p className="text-foreground">{user.name ?? user.email}</p>
          {user.name && (
            <p className="text-muted-foreground">{user.email}</p>
          )}
        </div>
        <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-sm font-semibold text-white ring-1 ring-white/10">
          {user.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={user.image} alt="" className="h-full w-full object-cover" />
          ) : (
            initial
          )}
        </div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <Button type="submit" variant="outline" size="sm">
            Sign out
          </Button>
        </form>
      </div>
    </header>
  );
}
