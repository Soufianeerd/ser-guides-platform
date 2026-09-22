import crypto from "node:crypto";

const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET ?? "";
const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const FROM = process.env.RESEND_FROM ?? "SER Guides <guides@mail.serguides.fr>";
const GUIDE_ATTACHMENT_URL = process.env.GUIDE_ATTACHMENT_URL ?? "";

function verifyStripeSignature(payload: string, signatureHeader: string, secret: string) {
  if (!secret || !signatureHeader) return false;

  const parts = signatureHeader.split(",").map((p) => p.trim());
  const timestampPart = parts.find((p) => p.startsWith("t="));
  const signatures = parts.filter((p) => p.startsWith("v1=")).map((p) => p.slice(3));
  if (!timestampPart || signatures.length === 0) return false;

  const timestamp = timestampPart.slice(2);
  const signedPayload = `${timestamp}.${payload}`;
  const expected = crypto.createHmac("sha256", secret).update(signedPayload).digest("hex");

  return signatures.some((sig) => {
    try {
      return crypto.timingSafeEqual(Buffer.from(sig, "hex"), Buffer.from(expected, "hex"));
    } catch {
      return false;
    }
  });
}

async function sendDeliveryEmail(to: string) {
  const attachments = GUIDE_ATTACHMENT_URL
    ? [
        {
          filename: "SER-Guide-01-Micro-entreprise-2026.html",
          path: GUIDE_ATTACHMENT_URL,
        },
      ]
    : [];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [to],
      subject: "Votre SER Guide 01 — Micro-entreprise 2026",
      html: "<p>Merci pour votre achat. Votre paiement de 12,99 € a bien été confirmé.</p><p>Votre SER Guide 01 — Micro-entreprise 2026 est joint à cet e-mail.</p>",
      text: "Merci pour votre achat. Votre paiement de 12,99 € a bien été confirmé. Votre SER Guide 01 — Micro-entreprise 2026 est joint à cet e-mail.",
      attachments,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend error ${res.status}: ${body}`);
  }
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const payload = await request.text();
  const signature = request.headers.get("stripe-signature") ?? "";

  if (!verifyStripeSignature(payload, signature, STRIPE_WEBHOOK_SECRET)) {
    return new Response("Invalid signature", { status: 400 });
  }

  const event = JSON.parse(payload);

  if (event.type !== "checkout.session.completed") {
    return new Response("ignored", { status: 200 });
  }

  const session = event.data?.object;
  const email = session?.customer_details?.email || session?.customer_email;
  const amountTotal = session?.amount_total;
  const currency = session?.currency;

  if (!email) {
    return new Response("Missing customer email", { status: 400 });
  }

  if (amountTotal !== 1299 || currency !== "eur") {
    return new Response("Unexpected amount or currency", { status: 400 });
  }

  await sendDeliveryEmail(email);

  return Response.json({ ok: true });
}
