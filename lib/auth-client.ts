import { createAuthClient } from "better-auth/react";

export const neonAuthUrl = process.env.NEXT_PUBLIC_NEON_AUTH_URL ?? "";
export const authClient = neonAuthUrl
  ? createAuthClient({ baseURL: neonAuthUrl })
  : null;
