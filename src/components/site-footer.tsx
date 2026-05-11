import Link from "next/link";

export function SiteFooter() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Lumen AI";
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {appName}. Crafted with care.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/pricing" className="hover:text-foreground">
            Pricing
          </Link>
          <Link href="/login" className="hover:text-foreground">
            Sign in
          </Link>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            Powered by Vercel
          </a>
        </div>
      </div>
    </footer>
  );
}
