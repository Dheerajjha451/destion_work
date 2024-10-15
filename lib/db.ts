import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (typeof globalThis.prisma === 'undefined') {
  prisma = new PrismaClient();
  if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
} else {
  prisma = globalThis.prisma;
}

export const db = prisma;