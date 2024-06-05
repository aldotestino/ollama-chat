CREATE TABLE `chats` (
	`id` text,
	`model` text,
	`timestamp` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE TABLE `messages` (
	`id` text,
	`chat_id` text,
	`text` text,
	`timestamp` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`chat_id`) REFERENCES `chats`(`id`) ON UPDATE no action ON DELETE no action
);
