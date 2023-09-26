import { eq, or } from 'drizzle-orm';
import { type NextRequest, NextResponse } from 'next/server';
import type { z } from 'zod';

import db from '@/lib/db';
import type { insertFrameworkSchema } from '@/lib/db/schema';
import { frameworks } from '@/lib/db/schema';
import type { Framework } from '@/lib/types';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const { name, language, url, stars } = Object.fromEntries(formData);

  if (!name || !language || !url || !stars) {
    throw new Error('Fill in all fields!');
  }
  if (
    typeof name !== 'string' ||
    typeof language !== 'string' ||
    typeof url !== 'string' ||
    typeof stars !== 'string'
  ) {
    throw new TypeError('Wrong Types');
  }
  const githubUrlRgx =
    /((?:https?:)?\/\/)?(www\.)?((?:github\.com))(\/[\w-]+)(\/[\w-]+)(\/)?/gi;
  if (!githubUrlRgx.test(url)) {
    throw new Error('Provide a valid GitHub url!');
  }
  if (typeof Number.parseInt(stars) !== 'number') {
    throw new TypeError('Enter a valid number for stars');
  }

  const frameworkExists = await getFramework(name as string, url as string);

  if (frameworkExists !== null) {
    throw new Error('Framework already exists');
  }

  await insertFramework({ language, name, stars: Number.parseInt(stars), url });

  return NextResponse.json({ message: 'Framework added!' });
}

/**
 * @description Gets framework from the database by filtering the name and url columns
 * @param name Name of the framework being fetched
 * @param url Github url of the framework being fetched
 * @returns {Promise<Framework|null>}
 */
async function getFramework(
  name: string,
  url: string,
): Promise<Framework | null> {
  const response = await db
    .select()
    .from(frameworks)
    .where(or(eq(frameworks.url, url), eq(frameworks.name, name)));

  if (response.length > 0) {
    return response[0] as unknown as Framework;
  }

  return null;
}

type InsertFramework = z.infer<typeof insertFrameworkSchema>;

async function insertFramework(framework: InsertFramework) {
  return db.insert(frameworks).values(framework);
}
