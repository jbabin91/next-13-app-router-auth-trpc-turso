import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const frameworks = sqliteTable('frameworks', {
  id: integer('id').primaryKey(),
  language: text('language').notNull(),
  name: text('name').notNull().unique(),
  stars: integer('stars').notNull(),
  url: text('url').notNull().unique(),
});
export const insertFrameworkSchema = createInsertSchema(frameworks);
export const selectFrameworkSchema = createSelectSchema(frameworks);
