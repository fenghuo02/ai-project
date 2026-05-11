import { prisma } from "@/lib/db";

const DAY_IN_MS = 1000 * 60 * 60 * 24;

export type SubscriptionStatus = {
  isPro: boolean;
  plan: "free" | "pro" | "team";
  currentPeriodEnd: Date | null;
  priceId: string | null;
};

export async function getUserSubscription(
  userId: string
): Promise<SubscriptionStatus> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      stripePriceId: true,
      stripeCurrentPeriodEnd: true,
      stripeSubscriptionId: true,
    },
  });

  if (!user || !user.stripePriceId || !user.stripeCurrentPeriodEnd) {
    return {
      isPro: false,
      plan: "free",
      currentPeriodEnd: null,
      priceId: null,
    };
  }

  const active =
    user.stripeCurrentPeriodEnd.getTime() + DAY_IN_MS > Date.now();

  const plan =
    user.stripePriceId === process.env.NEXT_PUBLIC_STRIPE_TEAM_PRICE_ID
      ? "team"
      : "pro";

  return {
    isPro: active,
    plan: active ? plan : "free",
    currentPeriodEnd: user.stripeCurrentPeriodEnd,
    priceId: user.stripePriceId,
  };
}
