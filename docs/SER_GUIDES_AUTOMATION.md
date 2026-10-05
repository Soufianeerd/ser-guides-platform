# SER Guides — Shopify ↔ Neon automation

This branch contains the source of the production delivery function before it is deployed over the existing `serdelivery` Neon Function.

## What it does

1. Shopify sends `ORDERS_PAID` to `/webhooks/orders-paid`.
2. The function validates the Shopify HMAC using the app client secret.
3. It detects purchased SKUs matching `SER-XX`.
4. It emails signed buyer links through Resend.
5. `/access?token=...` resolves the current `SER-XX` HTML directly from the GitHub `main` tree, so a buyer always opens the latest committed guide without redeploying Shopify or `sersync`.
6. `/setup-shopify` exchanges the Shopify Client ID/Secret using the client-credentials grant and registers the webhook once.

## Required environment variables

Do **not** commit any values.

- `SHOPIFY_SHOP=umb7ub-wt.myshopify.com`
- `SHOPIFY_CLIENT_ID`
- `SHOPIFY_CLIENT_SECRET`
- `GUIDE_SIGNING_SECRET` — long random secret; keep stable or old buyer links will break.
- `RESEND_API_KEY`
- `RESEND_FROM` — verified sender, for example `SER Guides <guides@serguides.fr>`.
- `PUBLIC_BASE_URL` — production invocation URL of `serdelivery`, without a trailing slash.
- `SETUP_SECRET` — long random secret used only for `POST /setup-shopify`.
- Optional: `GUIDES_GITHUB_REPO` (defaults to `Soufianeerd/ser-guides-platform`).
- Optional: `GUIDES_GITHUB_BRANCH` (defaults to `main`).
- Optional: `GITHUB_TOKEN` if the repository becomes private later.

## Routes

- `GET /health`
- `POST /setup-shopify` with header `x-setup-secret`
- `POST /webhooks/orders-paid` — Shopify only
- `GET /access?token=...` — buyer access

## Deployment safety

The existing production function must not be replaced until all environment variables above are configured. Keep this work on `automation/shopify-neon` until the health check and webhook setup succeed.

The deployment source is:

```
functions/serdelivery/index.mjs
```

Neon Console currently shows the production invocation URL as:

```
https://br-withered-band-b2nj5p9x-serdelivery.compute.c-6.eu-central-1.aws.neon.tech/
```

Use that value for `PUBLIC_BASE_URL` unless a custom domain is configured later.
