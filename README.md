# Nexura Monorepo

A high-performance monorepo powered by [Turborepo](https://turbo.build/) and [Next.js](https://nextjs.org/), optimized for [Cloudflare Pages](https://pages.cloudflare.com/).

## Structure

- `apps/web`: The main consumer-facing application.
- `apps/admin`: The internal administration dashboard.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Monorepo Tooling**: Turborepo
- **Package Manager**: npm
- **Deployment**: Cloudflare Pages via `@opennextjs/cloudflare`
- **Styling**: Vanilla CSS / Inline Styles (Premium Design)

## Development

To start all applications in development mode:

```bash
npm run dev
```

To build all applications:

```bash
npm run build
```

## Cloudflare Deployment

Both applications are configured to use `@opennextjs/cloudflare` for deployment.

### Local Preview

To preview the Cloudflare build locally:

```bash
# For web
npm run preview -w web

# For admin
npm run preview -w admin
```

### Manual Deployment

1. Install Wrangler globally: `npm install -g wrangler`
2. Build the app: `npm run build -w web`
3. Deploy: `npx wrangler pages deploy apps/web/.open-next/assets --branch main` (Note: adjust path based on OpenNext output)

Actually, with Cloudflare Pages Git integration, you just need to:
1. Connect your repo.
2. Select the framework (Next.js or Custom).
3. Set Build Command: `npm run build`
4. Set Build Output Directory: `.open-next/assets` (or as per OpenNext documentation)
5. Root directory: `apps/web` or `apps/admin`
