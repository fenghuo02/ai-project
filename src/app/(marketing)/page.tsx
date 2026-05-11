import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Cpu,
  Gauge,
  Layers,
  Lock,
  Sparkles,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "Best-in-class models",
    description:
      "Swap seamlessly between GPT, Claude, and open-source models. Ship with the model that best fits your use case.",
  },
  {
    icon: Zap,
    title: "Streaming by default",
    description:
      "Every response streams token by token for a conversational, realtime feel across every surface.",
  },
  {
    icon: Lock,
    title: "Enterprise-grade auth",
    description:
      "NextAuth with credentials, GitHub, and SSO-ready providers. Sessions, CSRF and RBAC baked in.",
  },
  {
    icon: Layers,
    title: "Batteries included",
    description:
      "Prisma, Stripe billing, Radix UI, and Tailwind — tuned for production, not a toy demo.",
  },
  {
    icon: Gauge,
    title: "Fast where it matters",
    description:
      "Edge-ready middleware, server actions and React Server Components keep TTFB low and UX snappy.",
  },
  {
    icon: Cpu,
    title: "Extensible by design",
    description:
      "Clean domain separation for auth, billing, chat and data. Add your own tools and agents in minutes.",
  },
];

const faq = [
  {
    q: "Is this a real working product, or just a template?",
    a: "Both. The template ships a real AI chat experience backed by OpenAI, a subscription gating layer, webhook-synced billing, and a dark UI tuned for production. Swap branding and ship.",
  },
  {
    q: "How are subscriptions handled?",
    a: "We use Stripe Checkout for upgrades and the Customer Portal for self-serve cancellations. A webhook keeps the Prisma record in sync with the Stripe source of truth.",
  },
  {
    q: "Can I host this anywhere?",
    a: "Yes. Optimized for Vercel with zero config, but any Node.js host works. Use SQLite locally and Postgres (Neon, Supabase, Vercel Postgres) in production.",
  },
  {
    q: "Can I bring my own auth provider?",
    a: "Absolutely. NextAuth v5 is configured, so adding Google, Okta, or any OIDC provider is a few lines of code.",
  },
];

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-bg" />
        <div className="container py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <Badge variant="default" className="mb-6">
              <Sparkles className="mr-1 h-3 w-3" />
              Now with streaming GPT-4o class responses
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              The AI copilot your{" "}
              <span className="text-gradient">product deserves</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
              A production-ready Next.js SaaS starter with auth, subscriptions,
              a polished dark UI, and a real AI chat experience. Focus on your
              idea — the boring parts are already done.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="gradient">
                <Link href="/register">
                  Start free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <span>No credit card required</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span>Cancel any time</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span>Open-source-friendly</span>
            </div>
          </div>

          {/* Mock product preview */}
          <div className="relative mx-auto mt-20 max-w-5xl animate-fade-up">
            <div className="glow-border rounded-2xl">
              <div className="glass rounded-2xl p-2">
                <div className="rounded-xl border border-white/5 bg-black/40 p-4 md:p-6">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-3 text-xs text-muted-foreground">
                      lumen.ai / chat
                    </span>
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-[240px_1fr]">
                    <div className="hidden rounded-lg border border-white/5 bg-white/[0.02] p-3 text-sm md:block">
                      <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                        Threads
                      </div>
                      {[
                        "Ship changelog draft",
                        "Summarize Q3 metrics",
                        "Refactor auth middleware",
                        "Customer churn analysis",
                      ].map((t, i) => (
                        <div
                          key={t}
                          className={`mb-1 rounded-md px-2 py-2 ${
                            i === 0
                              ? "bg-white/5 text-foreground"
                              : "text-muted-foreground hover:bg-white/5"
                          }`}
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-white/[0.03] p-4 text-sm">
                        <p className="mb-1 text-xs text-muted-foreground">
                          You
                        </p>
                        Draft a changelog entry for our new streaming chat
                        feature, casual but crisp.
                      </div>
                      <div className="rounded-lg border border-white/5 bg-gradient-to-br from-violet-500/[0.08] to-cyan-500/[0.06] p-4 text-sm">
                        <p className="mb-1 text-xs text-muted-foreground">
                          Lumen
                        </p>
                        <p>
                          <b>v1.4 — Streaming chat</b> is live. Responses now
                          arrive token-by-token, so you can start reading (and
                          interrupting) before the AI finishes thinking. We
                          also shaved 180ms off first-token latency. Enjoy.
                        </p>
                      </div>
                      <div className="rounded-md border border-dashed border-white/10 p-3 text-xs text-muted-foreground">
                        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />{" "}
                        Lumen is typing…
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Opinionated defaults, production-grade primitives, and a design
            system that feels expensive out of the box.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="p-6">
              <CardContent className="p-0">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 ring-1 ring-inset ring-white/10">
                  <f.icon className="h-5 w-5 text-violet-200" />
                </div>
                <h3 className="mb-1 text-base font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-white/5 bg-white/[0.01] py-10">
        <div className="container flex flex-wrap items-center justify-center gap-10 opacity-60">
          {["Acme", "Globex", "Initech", "Soylent", "Umbrella", "Vandelay"].map(
            (c) => (
              <span
                key={c}
                className="text-sm font-semibold tracking-widest text-muted-foreground"
              >
                {c.toUpperCase()}
              </span>
            )
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Frequently asked
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4">
          {faq.map((item) => (
            <Card key={item.q}>
              <CardContent className="p-6">
                <h3 className="text-base font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="glow-border mx-auto max-w-4xl rounded-2xl">
          <div className="glass rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-semibold md:text-3xl">
              Ready to ship?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Start with the free tier, upgrade when you&apos;re ready. Your
              users will thank you for the UI.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" variant="gradient">
                <Link href="/register">
                  Create an account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">Compare plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
