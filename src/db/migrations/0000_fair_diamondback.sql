CREATE TABLE `chats` (
	`id` integer PRIMARY KEY NOT NULL,
	`model` text NOT NULL,
	`timestamp` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `messages` (
	`id` integer PRIMARY KEY NOT NULL,
	`chat_id` text NOT NULL,
	`text` text NOT NULL,
	`role` text NOT NULL,
	`timestamp` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`chat_id`) REFERENCES `chats`(`id`) ON UPDATE no action ON DELETE no action
);
