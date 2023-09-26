import { createClient } from '@libsql/client/web';
import { drizzle } from 'drizzle-orm/libsql';

import * as schema from './schema';

const url = process.env.DB_URL?.trim();
if (url === undefined) {
  throw new Error('DB_URL is not defined');
}

const authToken = process.env.DB_AUTH_TOKEN?.trim();
if (authToken === undefined) {
  throw new Error('DB_AUTH_TOKEN is not defined');
}

const client = createClient({
  authToken: process.env.DB_AUTH_TOKEN,
  url: process.env.DB_URL || '',
});

const db = drizzle(client, { schema });

export default db;
