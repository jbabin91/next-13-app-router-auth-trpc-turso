CREATE TABLE `frameworks` (
	`id` integer PRIMARY KEY NOT NULL,
	`language` text NOT NULL,
	`name` text NOT NULL,
	`stars` integer NOT NULL,
	`url` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `posts` (
	`author_id` integer NOT NULL,
	`body` text NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s', 'now')),
	FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`email` text NOT NULL,
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `frameworks_name_unique` ON `frameworks` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `frameworks_url_unique` ON `frameworks` (`url`);