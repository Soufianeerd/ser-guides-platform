-- SER Guides customer library / purchase entitlements
-- Prepared for Neon Postgres. Apply only after review.

create table if not exists ser_orders (
  stripe_session_id text primary key,
  buyer_email text not null,
  guide_slug text not null,
  amount_total integer not null,
  currency text not null default 'eur',
  payment_status text not null,
  created_at timestamptz not null default now()
);

create table if not exists ser_entitlements (
  id bigserial primary key,
  user_email text not null,
  guide_slug text not null,
  stripe_session_id text unique,
  granted_at timestamptz not null default now(),
  revoked_at timestamptz,
  unique (user_email, guide_slug)
);

create table if not exists ser_benefits (
  id bigserial primary key,
  user_email text not null,
  benefit_code text not null,
  source_guide_slug text,
  status text not null default 'active',
  granted_at timestamptz not null default now(),
  used_at timestamptz,
  unique (user_email, benefit_code)
);

create index if not exists ser_orders_email_idx on ser_orders (lower(buyer_email));
create index if not exists ser_entitlements_email_idx on ser_entitlements (lower(user_email));
create index if not exists ser_benefits_email_idx on ser_benefits (lower(user_email));
