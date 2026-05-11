import Link from "next/link";
import { Check, CreditCard } from "lucide-react";
import { auth } from "@/auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getUserSubscription } from "@/lib/subscription";
import { formatDate } from "@/lib/utils";
import { ManageBillingButton } from "@/components/manage-billing-button";

export const metadata = { title: "Billing" };

export default async function BillingPage() {
  const session = await auth();
  if (!session?.user) return null;
  const sub = await getUserSubscription(session.user.id);

  return (
    <section className="container max-w-3xl py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Billing</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Manage your subscription, invoices and payment methods.
      </p>

      <Card className="mt-8">
        <CardContent className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Current plan</p>
              <div className="mt-1 flex items-center gap-2">
                <h2 className="text-2xl font-semibold">
                  {sub.plan === "free"
                    ? "Free"
                    : sub.plan === "pro"
                    ? "Pro"
                    : "Team"}
                </h2>
                <Badge variant={sub.isPro ? "success" : "secondary"}>
                  {sub.isPro ? "Active" : "No subscription"}
                </Badge>
              </div>
              {sub.currentPeriodEnd && (
                <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-emerald-400" />
                  Renews on {formatDate(sub.currentPeriodEnd)}
                </p>
              )}
            </div>
            {sub.isPro ? (
              <ManageBillingButton />
            ) : (
              <Button asChild variant="gradient">
                <Link href="/pricing">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Choose a plan
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <p className="mt-6 text-xs text-muted-foreground">
        Payments are processed securely by Stripe. We never store your card
        details.
      </p>
    </section>
  );
}
