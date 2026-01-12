import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";

const globalForPrisma = global as unknown as { 
  prisma: PrismaClient;
  pool: Pool;
};

// Create PostgreSQL connection pool
const pool = globalForPrisma.pool || new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create Prisma adapter with the pool
const adapter = new PrismaPg(pool);

// Create Prisma client with the adapter
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
  globalForPrisma.pool = pool;
}
