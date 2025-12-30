'use client';
import { z } from 'zod';

const clientEnvironmentSchema = z.object({
  env: z.enum(['development', 'test', 'production']),
});

export const clientEnvironment = clientEnvironmentSchema.parse({
  env: process.env.NEXT_PUBLIC_ENV,
});
