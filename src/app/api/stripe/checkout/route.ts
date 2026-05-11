import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { stripe, STRIPE_PLANS, type StripePlanKey } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const bodySchema = z.object({
  plan: z.enum(["pro", "team"]),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const parsed = bodySchema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid plan." }, { status: 400 });
  }
  const plan: StripePlanKey = parsed.data.plan;
  const priceId = STRIPE_PLANS[plan].priceId;

  if (!priceId) {
    return NextResponse.json(
      {
        error:
          "Stripe price ID is not configured. Set NEXT_PUBLIC_STRIPE_*_PRICE_ID in your env.",
      },
      { status: 500 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      stripeCustomerId: true,
      stripeSubscriptionId: true,
      email: true,
    },
  });

  // If user already has an active subscription, send them to the portal instead.
  if (user?.stripeSubscriptionId && user.stripeCustomerId) {
    const portal = await stripe.billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: absoluteUrl("/billing"),
    });
    return NextResponse.json({ url: portal.url });
  }

  const checkout = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    customer_email: user?.stripeCustomerId ? undefined : session.user.email,
    customer: user?.stripeCustomerId ?? undefined,
    line_items: [{ price: priceId, quantity: 1 }],
    subscription_data: {
      metadata: { userId: session.user.id, plan },
    },
    metadata: { userId: session.user.id, plan },
    success_url: absoluteUrl(`/billing?success=1`),
    cancel_url: absoluteUrl(`/pricing?canceled=1`),
    allow_promotion_codes: true,
  });

  return NextResponse.json({ url: checkout.url });
}
