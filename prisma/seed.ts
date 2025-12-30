import { exit } from 'node:process';

import dotenv from 'dotenv';

// Load environment variables before creating any server-side clients
dotenv.config({ path: '.env.local' });

import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from '../generated/prisma/client';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('Missing DATABASE_URL in environment variables');
  exit(1);
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const prettyPrint = (object: any) =>
  console.log(JSON.stringify(object, undefined, 2));

async function seed() {
  const user = await prisma.userProfile.create({
    data: {
      email: 'jan@reactsquad.io',
      name: 'Jan Hesters',
      acceptedTermsAndConditions: true,
    },
  });

  console.log('========= 🌱 result of seed: =========');
  prettyPrint({ user });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async error => {
    console.error(error);
    await prisma.$disconnect();
    exit(1);
  });
