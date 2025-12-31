import 'server-only';

import { z } from 'zod';

const serverEnvironmentSchema = z.object({
  PORT: z.string(),
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
  SENTRY_AUTH_TOKEN: z.string().optional(),
});

export const serverEnvironment = serverEnvironmentSchema.parse({
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
});
