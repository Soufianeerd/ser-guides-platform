import crypto from "node:crypto";

const JSON_HEADERS = { "content-type": "application/json; charset=utf-8" };

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function shopDomain() {
  const raw = required("SHOPIFY_SHOP").trim().replace(/^https?:\/\//, "").replace(/\/$/, "");
  return raw.endsWith(".myshopify.com") ? raw : `${raw}.myshopify.com`;
}

function safeEqual(a, b) {
  const ba = Buffer.from(a || "");
  const bb = Buffer.from(b || "");
  return ba.length === bb.length && crypto.timingSafeEqual(ba, bb);
}

function verifyShopifyHmac(rawBody, received) {
  const expected = crypto
    .createHmac("sha256", required("SHOPIFY_CLIENT_SECRET"))
    .update(rawBody, "utf8")
    .digest("base64");
  return safeEqual(expected, received || "");
}

function b64url(input) {
  return Buffer.from(input).toString("base64url");
}

function signAccess(payload) {
  const encoded = b64url(JSON.stringify(payload));
  const signature = crypto
    .createHmac("sha256", required("GUIDE_SIGNING_SECRET"))
    .update(encoded)
    .digest("base64url");
  return `${encoded}.${signature}`;
}

function verifyAccess(token) {
  if (!token || !token.includes(".")) return null;
  const [encoded, signature] = token.split(".");
  const expected = crypto
    .createHmac("sha256", required("GUIDE_SIGNING_SECRET"))
    .update(encoded)
    .digest("base64url");
  if (!safeEqual(expected, signature)) return null;
  try {
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8"));
    if (!payload?.sku || !/^SER-\d{2}$/i.test(payload.sku)) return null;
    return payload;
  } catch {
    return null;
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function getAdminAccessToken() {
  const response = await fetch(`https://${shopDomain()}/admin/oauth/access_token`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: required("SHOPIFY_CLIENT_ID"),
      client_secret: required("SHOPIFY_CLIENT_SECRET"),
    }),
  });
  const data = await response.json();
  if (!response.ok || !data.access_token) {
    throw new Error(`Shopify token exchange failed: ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

async function shopifyGraphql(query, variables = {}) {
  const token = await getAdminAccessToken();
  const response = await fetch(`https://${shopDomain()}/admin/api/2026-10/graphql.json`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-shopify-access-token": token,
    },
    body: JSON.stringify({ query, variables }),
  });
  const data = await response.json();
  if (!response.ok || data.errors) {
    throw new Error(`Shopify GraphQL failed: ${JSON.stringify(data)}`);
  }
  return data.data;
}

async function ensureOrdersPaidWebhook(uri) {
  const existing = await shopifyGraphql(
    `query ExistingWebhooks {
      webhookSubscriptions(first: 50, topics: [ORDERS_PAID]) {
        nodes { id topic uri }
      }
    }`
  );
  const found = existing.webhookSubscriptions.nodes.find((node) => node.uri === uri);
  if (found) return { created: false, webhook: found };

  const data = await shopifyGraphql(
    `mutation CreateOrdersPaid($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
      webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
        webhookSubscription { id topic uri }
        userErrors { field message }
      }
    }`,
    {
      topic: "ORDERS_PAID",
      webhookSubscription: { uri },
    }
  );
  const result = data.webhookSubscriptionCreate;
  if (result.userErrors?.length) {
    throw new Error(`Webhook creation failed: ${JSON.stringify(result.userErrors)}`);
  }
  return { created: true, webhook: result.webhookSubscription };
}

async function sendDeliveryEmail({ email, orderNumber, guides, webhookId }) {
  const from = required("RESEND_FROM");
  const baseUrl = required("PUBLIC_BASE_URL").replace(/\/$/, "");
  const items = guides
    .map((g) => {
      const token = signAccess({
        sku: g.sku.toUpperCase(),
        orderId: String(g.orderId),
        webhookId: String(webhookId || ""),
        issuedAt: new Date().toISOString(),
      });
      const href = `${baseUrl}/access?token=${encodeURIComponent(token)}`;
      return {
        ...g,
        href,
        html: `<li style="margin:0 0 18px">
          <strong>${escapeHtml(g.title)}</strong><br>
          <a href="${escapeHtml(href)}" style="display:inline-block;margin-top:8px;background:#0f172a;color:#fff;text-decoration:none;padding:12px 18px;border-radius:8px;font-weight:700">Ouvrir mon guide</a>
        </li>`,
      };
    });

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${required("RESEND_API_KEY")}`,
      "content-type": "application/json",
      ...(webhookId ? { "idempotency-key": `ser-guides-${webhookId}` } : {}),
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: `Vos SER Guides — commande #${orderNumber || ""}`.trim(),
      html: `<!doctype html>
      <html><body style="font-family:Arial,sans-serif;color:#0f172a;background:#f8fafc;padding:24px">
        <div style="max-width:620px;margin:auto;background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:28px">
          <h1 style="margin-top:0;font-size:26px">Vos SER Guides sont disponibles</h1>
          <p style="line-height:1.6;color:#475569">Merci pour votre commande. Les boutons ci-dessous ouvrent toujours la dernière version publiée de vos guides.</p>
          <ul style="padding-left:20px">${items.map((x) => x.html).join("")}</ul>
          <p style="font-size:12px;color:#64748b;margin-bottom:0">Conservez cet email : vos liens restent associés à votre achat.</p>
        </div>
      </body></html>`,
    }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(`Resend failed: ${JSON.stringify(data)}`);
  return { emailId: data.id, links: items.map(({ sku, href }) => ({ sku, href })) };
}

async function handleOrdersPaid(request) {
  const rawBody = await request.text();
  const hmac = request.headers.get("x-shopify-hmac-sha256");
  if (!verifyShopifyHmac(rawBody, hmac)) return json({ ok: false, error: "invalid_hmac" }, 401);

  const order = JSON.parse(rawBody);
  const email = order.email || order.contact_email || order.customer?.email;
  const webhookId = request.headers.get("x-shopify-webhook-id") || order.id;
  const lineItems = Array.isArray(order.line_items) ? order.line_items : [];

  const bySku = new Map();
  for (const item of lineItems) {
    const sku = String(item.sku || "").trim().toUpperCase();
    if (!/^SER-\d{2}$/.test(sku)) continue;
    if (!bySku.has(sku)) {
      bySku.set(sku, {
        sku,
        title: item.title || item.name || sku,
        orderId: order.id,
      });
    }
  }

  const guides = [...bySku.values()];
  if (!guides.length) return json({ ok: true, ignored: "no_ser_guides" });
  if (!email) return json({ ok: true, ignored: "no_customer_email", guides: guides.map((g) => g.sku) });

  const delivery = await sendDeliveryEmail({
    email,
    orderNumber: order.order_number || order.name || order.id,
    guides,
    webhookId,
  });

  return json({ ok: true, delivered: guides.map((g) => g.sku), emailId: delivery.emailId });
}

const GUIDE_TREE_TTL_MS = 5 * 60 * 1000;
let guideTreeCache = { at: 0, map: new Map() };

async function getGuideMap() {
  if (Date.now() - guideTreeCache.at < GUIDE_TREE_TTL_MS && guideTreeCache.map.size) {
    return guideTreeCache.map;
  }

  const repo = process.env.GUIDES_GITHUB_REPO || "Soufianeerd/ser-guides-platform";
  const branch = process.env.GUIDES_GITHUB_BRANCH || "main";
  const headers = {
    accept: "application/vnd.github+json",
    "user-agent": "ser-guides-automation",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(
    `https://api.github.com/repos/${repo}/git/trees/${encodeURIComponent(branch)}?recursive=1`,
    { headers }
  );
  if (!response.ok) {
    throw new Error(`GitHub tree lookup failed: ${response.status}`);
  }

  const data = await response.json();
  const map = new Map();

  for (const node of data.tree || []) {
    if (node.type !== "blob" || !node.path?.endsWith(".html")) continue;
    const match = node.path.match(
      /^content\/guides\/ser-(\d{2})-[^/]+\/contenu\/([^/]+\.html)$/i
    );
    if (!match) continue;
    map.set(`SER-${match[1]}`, node.path);
  }

  guideTreeCache = { at: Date.now(), map };
  return map;
}

async function fetchLatestGuideHtml(sku) {
  const map = await getGuideMap();
  const path = map.get(sku.toUpperCase());
  if (!path) return null;

  const repo = process.env.GUIDES_GITHUB_REPO || "Soufianeerd/ser-guides-platform";
  const branch = process.env.GUIDES_GITHUB_BRANCH || "main";
  const rawUrl =
    `https://raw.githubusercontent.com/${repo}/${encodeURIComponent(branch)}/${path}`;

  const headers = { accept: "text/html" };
  if (process.env.GITHUB_TOKEN) {
    headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(rawUrl, {
    headers,
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Guide fetch failed for ${sku}: ${response.status}`);
  }
  return response;
}

async function handleAccess(request) {
  const url = new URL(request.url);
  const payload = verifyAccess(url.searchParams.get("token"));
  if (!payload) return new Response("Lien invalide.", { status: 401 });

  const response = await fetchLatestGuideHtml(payload.sku.toUpperCase());
  if (!response) return new Response("Guide introuvable.", { status: 404 });

  const html = await response.text();
  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "private, no-store, max-age=0",
      "x-robots-tag": "noindex, nofollow, noarchive",
    },
  });
}

async function handleSetup(request) {
  const received = request.headers.get("x-setup-secret");
  if (!safeEqual(received, required("SETUP_SECRET"))) return json({ ok: false }, 401);

  const origin = required("PUBLIC_BASE_URL").replace(/\/$/, "");
  const webhookUri = `${origin}/webhooks/orders-paid`;
  const result = await ensureOrdersPaidWebhook(webhookUri);
  return json({ ok: true, webhookUri, ...result });
}

export default {
  async fetch(request) {
    try {
      const url = new URL(request.url);
      if (request.method === "GET" && url.pathname === "/health") {
        const checks = {
          shopifyShop: Boolean(process.env.SHOPIFY_SHOP),
          shopifyClientId: Boolean(process.env.SHOPIFY_CLIENT_ID),
          shopifyClientSecret: Boolean(process.env.SHOPIFY_CLIENT_SECRET),
          resendApiKey: Boolean(process.env.RESEND_API_KEY),
          resendFrom: Boolean(process.env.RESEND_FROM),
          signingSecret: Boolean(process.env.GUIDE_SIGNING_SECRET),
          setupSecret: Boolean(process.env.SETUP_SECRET),
          publicBaseUrl: Boolean(process.env.PUBLIC_BASE_URL),
          guidesGithubRepo: Boolean(process.env.GUIDES_GITHUB_REPO || "Soufianeerd/ser-guides-platform"),
          guidesGithubBranch: Boolean(process.env.GUIDES_GITHUB_BRANCH || "main"),
        };
        return json({
          ok: Object.values(checks).every(Boolean),
          service: "serdelivery",
          version: 2,
          checks,
        });
      }
      if (request.method === "POST" && url.pathname === "/setup-shopify") {
        return await handleSetup(request);
      }
      if (request.method === "POST" && url.pathname === "/webhooks/orders-paid") {
        return await handleOrdersPaid(request);
      }
      if (request.method === "GET" && url.pathname === "/access") {
        return await handleAccess(request);
      }
      return json({ ok: false, error: "not_found" }, 404);
    } catch (error) {
      console.error(error);
      return json({ ok: false, error: "internal_error" }, 500);
    }
  },
};
