import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { auth } from "@/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { STRIPE_PLANS } from "@/lib/stripe";
import { getUserSubscription } from "@/lib/subscription";
import { UpgradeButton } from "@/components/upgrade-button";

export const metadata = {
  title: "Pricing",
};

const freeFeatures = [
  "20 chat messages / day",
  "Standard response model",
  "Community support",
  "Single seat",
];

export default async function PricingPage() {
  const session = await auth();
  const sub = session?.user
    ? await getUserSubscription(session.user.id)
    : null;

  return (
    <section className="container py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Badge>
          <Sparkles className="mr-1 h-3 w-3" /> Simple, transparent pricing
        </Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          Pick a plan. <span className="text-gradient">Upgrade anytime.</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Start free, upgrade when you hit your limits. Taxes calculated at
          checkout.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
        {/* Free */}
        <Card className="flex flex-col p-6">
          <CardContent className="flex flex-1 flex-col p-0">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Free</h3>
              <p className="text-sm text-muted-foreground">
                Kick the tires, build something small.
              </p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-semibold">$0</span>
              <span className="ml-1 text-sm text-muted-foreground">/month</span>
            </div>
            <ul className="mb-8 space-y-2 text-sm">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-auto w-full">
              <Link href={session ? "/chat" : "/register"}>
                {session ? "Open app" : "Get started"}
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Pro (highlighted) */}
        <Card className="relative flex flex-col p-6 glow-border">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge>Most popular</Badge>
          </div>
          <CardContent className="flex flex-1 flex-col p-0">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">{STRIPE_PLANS.pro.name}</h3>
              <p className="text-sm text-muted-foreground">
                {STRIPE_PLANS.pro.description}
              </p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-semibold">
                ${STRIPE_PLANS.pro.price}
              </span>
              <span className="ml-1 text-sm text-muted-foreground">/month</span>
            </div>
            <ul className="mb-8 space-y-2 text-sm">
              {STRIPE_PLANS.pro.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <UpgradeButton
              plan="pro"
              isSignedIn={!!session}
              currentPlan={sub?.plan ?? "free"}
            />
          </CardContent>
        </Card>

        {/* Team */}
        <Card className="flex flex-col p-6">
          <CardContent className="flex flex-1 flex-col p-0">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">
                {STRIPE_PLANS.team.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {STRIPE_PLANS.team.description}
              </p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-semibold">
                ${STRIPE_PLANS.team.price}
              </span>
              <span className="ml-1 text-sm text-muted-foreground">/month</span>
            </div>
            <ul className="mb-8 space-y-2 text-sm">
              {STRIPE_PLANS.team.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <UpgradeButton
              plan="team"
              isSignedIn={!!session}
              currentPlan={sub?.plan ?? "free"}
            />
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Prices in USD. Subscriptions are managed through Stripe&apos;s hosted
        checkout and customer portal.
      </p>
    </section>
  );
}
