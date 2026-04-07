const requiredPublicEnvVars = ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY"] as const;
const requiredServerEnvVars = ["SUPABASE_SERVICE_ROLE_KEY", "APP_BASE_URL"] as const;

export type PublicEnvKey = (typeof requiredPublicEnvVars)[number];
export type ServerEnvKey = (typeof requiredServerEnvVars)[number];

export const publicEnvKeys = requiredPublicEnvVars;
export const serverEnvKeys = requiredServerEnvVars;

export function getOptionalEnv(key: string) {
  return process.env[key];
}
