import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL || "postgresql://neondb_owner:npg_5tCghBlUWs3x@ep-icy-band-accrrsdg-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require";

// Reuse pool across module reloads (prevents too many clients in dev/serverless)
let pool;
if (!globalThis.__pgPool) {
  globalThis.__pgPool = new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });
}

pool = globalThis.__pgPool;

export default pool;