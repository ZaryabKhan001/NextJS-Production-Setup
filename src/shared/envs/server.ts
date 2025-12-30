import 'server-only';

import { z } from 'zod';

const serverEnvironmentSchema = z.object({
  port: z.string(),
  database_url: z.string().url(),
  sentry_token: z.string().optional(),
});

export const serverEnvironment = serverEnvironmentSchema.parse({
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  sentry_token: process.env.SENTRY_TOKEN || '',
});
