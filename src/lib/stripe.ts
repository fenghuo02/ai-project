import Stripe from "stripe";

// Lazily instantiate the Stripe client so missing env vars at build time don't
// crash page-data collection. Throws only when a route actually tries to use it.
let _stripe: Stripe | null = null;

function getStripe(): Stripe {
  if (_stripe) return _stripe;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it to your environment to enable billing."
    );
  }
  _stripe = new Stripe(key, {
    apiVersion: "2025-02-24.acacia",
    typescript: true,
    appInfo: { name: "Lumen AI", version: "0.1.0" },
  });
  return _stripe;
}

// Proxy so existing `import { stripe } from "@/lib/stripe"` keeps working.
export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    const s = getStripe();
    // @ts-expect-error — dynamic proxy access
    const value = s[prop];
    return typeof value === "function" ? value.bind(s) : value;
  },
});

export const STRIPE_PLANS = {
  pro: {
    name: "Pro",
    description: "For individuals who want more power.",
    price: 19,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID,
    features: [
      "Unlimited AI chats",
      "GPT-4o class model",
      "Priority response time",
      "Chat history sync",
    ],
  },
  team: {
    name: "Team",
    description: "For teams shipping faster together.",
    price: 49,
    priceId: process.env.NEXT_PUBLIC_STRIPE_TEAM_PRICE_ID,
    features: [
      "Everything in Pro",
      "Seats for up to 5 members",
      "Shared knowledge base",
      "Premium support",
    ],
  },
} as const;

export type StripePlanKey = keyof typeof STRIPE_PLANS;
