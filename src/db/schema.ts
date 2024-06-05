import { relations, sql } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

const chat = pgTable('chats', {
  id: serial('id').notNull().primaryKey(),
  model: text('model').notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow()
});

const message = pgTable('messages', {
  id: serial('id').notNull().primaryKey(),
  chatId: integer('chat_id').references(() => chat.id, { onDelete: 'cascade' }).notNull(),
  text: text('text').notNull(),
  role: text('role').notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow()
});

const chatRelations = relations(chat, ({ many }) => ({
  messages: many(message)
}));

const messageRelations = relations(message, ({ one }) => ({
  chat: one(chat, {
    fields: [message.chatId],
    references: [chat.id]
  })
}));

export {
  chat,
  chatRelations,
  message,
  messageRelations
};