"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UpgradeButton({
  plan,
  isSignedIn,
  currentPlan,
}: {
  plan: "pro" | "team";
  isSignedIn: boolean;
  currentPlan: "free" | "pro" | "team";
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [, startTransition] = useTransition();

  async function onClick() {
    if (!isSignedIn) {
      startTransition(() => {
        router.push(`/login?callbackUrl=/pricing`);
      });
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert(data?.error ?? "Something went wrong, please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  if (currentPlan === plan) {
    return (
      <Button variant="secondary" disabled className="w-full">
        Current plan
      </Button>
    );
  }

  const isUpgrade = currentPlan === "free" || (currentPlan === "pro" && plan === "team");
  return (
    <Button
      onClick={onClick}
      disabled={loading}
      variant={plan === "pro" ? "gradient" : "default"}
      className="w-full"
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : null}
      {isUpgrade ? `Upgrade to ${plan === "pro" ? "Pro" : "Team"}` : "Switch plan"}
    </Button>
  );
}
