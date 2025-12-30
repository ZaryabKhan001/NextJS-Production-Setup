import { serverEnvironment } from '@envs/server';
import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from '../../../generated/prisma/client';

const connectionString = serverEnvironment.DATABASE_URL;

const adapter = new PrismaPg({ connectionString });

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log:
      serverEnvironment.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });

if (serverEnvironment.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
