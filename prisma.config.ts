import dotenv from 'dotenv';

// Load .env.local first (commonly used in Next.js) and fall back to .env
dotenv.config({ path: '.env.local' });
dotenv.config();

import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
});
