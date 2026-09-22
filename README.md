# SER Guides Platform

Plateforme centrale SER Guides : landing page, catalogue, fiches produits et futur espace client.

## État
- Tunnel Stripe → webhook Neon → Resend validé séparément en environnement de test.
- Landing/catalogue initialisés.
- Guide 01 : Micro-entreprise 2026, 12,99 €.

## Lancer
`npm install && npm run dev`

Copier `.env.example` vers `.env.local` et renseigner uniquement les variables localement / dans l’hébergeur. Ne jamais committer de secrets.

## Prochaines intégrations
1. URL Checkout Stripe LIVE dans `NEXT_PUBLIC_GUIDE_01_CHECKOUT_URL`.
2. Authentification espace client.
3. Tables `products`, `orders`, `entitlements`.
4. Webhook idempotent.
5. URL de téléchargement signée à la demande.
6. Analytics conversion et UTM.
