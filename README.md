# Lumen AI — Next.js SaaS Starter

A production-ready **AI SaaS** starter built with:

- **Next.js 14** (App Router, Server Actions, RSC)
- **NextAuth v5** — GitHub + Email/password credentials
- **Prisma** — SQLite for dev, Postgres for prod
- **Stripe** — Checkout, Customer Portal, webhook-synced subscriptions
- **OpenAI** — Streaming chat with plan-aware rate limiting
- **Tailwind CSS** + Radix UI + a carefully-tuned **dark UI** (glass, glow borders, grid backdrop)

## Pages

| Path | Description |
| --- | --- |
| `/` | Marketing landing page with hero, features, FAQ, CTA |
| `/pricing` | Free / Pro / Team plans with Stripe Checkout |
| `/login`, `/register` | Email + GitHub auth |
| `/dashboard` | Stats, plan info, recent activity |
| `/chat` | Streaming AI chat |
| `/billing` | Stripe Customer Portal entry point |

---

## 1. Local setup

```bash
# Install
npm install

# Configure env
cp .env.example .env
# then edit .env — at minimum set AUTH_SECRET (openssl rand -base64 32)

# Initialize the SQLite dev database
npx prisma db push

# Run it
npm run dev
```

Open <http://localhost:3000>.

### Minimal env to try it locally

```
NEXTAUTH_URL=http://localhost:3000
AUTH_SECRET=<some long random string>
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

With just these, you can sign up with email/password and try the chat in **demo
mode** (no OpenAI key required — responses are a placeholder). Add
`OPENAI_API_KEY` to enable real streaming responses.

---

## 2. Stripe setup

1. Create **two recurring Products** in the [Stripe dashboard](https://dashboard.stripe.com/):
   - **Pro** — `$19 / month`
   - **Team** — `$49 / month`
2. Copy their **Price IDs** into your env:

   ```
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=price_...
   NEXT_PUBLIC_STRIPE_TEAM_PRICE_ID=price_...
   ```

3. Enable the **Customer Portal** in Stripe settings.
4. For local webhook testing:

   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   # copy the whsec_... value into STRIPE_WEBHOOK_SECRET
   ```

5. In production, add an endpoint in Stripe pointing to
   `https://your-domain.com/api/stripe/webhook` and listening to:
   - `checkout.session.completed`
   - `invoice.payment_succeeded`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

---

## 3. Deploy to Vercel

### One-click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffenghuo02%2Fai-project&project-name=lumen-ai&repository-name=lumen-ai&env=AUTH_SECRET,DATABASE_URL,STRIPE_SECRET_KEY,STRIPE_WEBHOOK_SECRET,NEXT_PUBLIC_STRIPE_PRO_PRICE_ID,NEXT_PUBLIC_STRIPE_TEAM_PRICE_ID,OPENAI_API_KEY&envDescription=See+the+README+for+details&envLink=https%3A%2F%2Fgithub.com%2Ffenghuo02%2Fai-project%23local-setup)

### Manual

1. Click **Import Project** on Vercel and pick this repo.
2. Add a Postgres database (Vercel Postgres / Neon / Supabase). Put the URL
   into `DATABASE_URL` in Vercel env.
3. In `prisma/schema.prisma`, change the provider to `postgresql` before your
   first prod deploy:

   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

4. Set all env vars from `.env.example` in Vercel Project Settings → Environment
   Variables.
5. Deploy. On first deploy run `npx prisma db push` against your production
   database (or use `prisma migrate deploy` with a migration).

---

## Project structure

```
src/
  app/
    (marketing)/            # Landing + pricing (public)
    (auth)/login, register  # Auth pages
    (app)/dashboard, chat, billing
    api/
      auth/[...nextauth]    # NextAuth handler
      register              # Email signup
      chat                  # Streaming OpenAI chat
      stripe/checkout       # Create Checkout session
      stripe/portal         # Create Customer Portal session
      stripe/webhook        # Stripe -> Prisma sync
  components/               # UI + app shell
  lib/
    db.ts                   # Prisma client
    stripe.ts               # Stripe client + plans
    subscription.ts         # Plan helpers
  auth.ts                   # NextAuth config
  middleware.ts             # Protects /dashboard /chat /billing
prisma/schema.prisma
```

## License

MIT
