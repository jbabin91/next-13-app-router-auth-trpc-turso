import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

dotenv.config();

export default {
  breakpoints: true,
  dbCredentials: {
    authToken: process.env.DB_AUTH_TOKEN,
    url: process.env.DB_URL as string,
  },
  driver: 'turso',
  out: './drizzle/migrations',
  schema: './src/lib/db/schema',
} satisfies Config;
