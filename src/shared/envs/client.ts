'use client';
import { z } from 'zod';

const clientEnvironmentSchema = z.object({
  APP_NAME: z.string(),
  APP_ENV: z.enum(['development', 'test', 'production']),
  APP_VERSION: z.string(),
});

export const clientEnvironment = clientEnvironmentSchema.parse({
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
});
