import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Lumen AI";

export const metadata: Metadata = {
  title: {
    default: `${appName} — AI that ships with you`,
    template: `%s · ${appName}`,
  },
  description:
    "A premium AI SaaS starter: Next.js 14, NextAuth, Stripe subscriptions, Prisma, and a carefully-crafted dark UI.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  ),
  openGraph: {
    title: `${appName} — AI that ships with you`,
    description:
      "A premium AI SaaS starter: Next.js 14, NextAuth, Stripe subscriptions, Prisma, and a carefully-crafted dark UI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-app min-h-screen font-sans">
        <Providers>
          <div className="relative flex min-h-screen flex-col">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
