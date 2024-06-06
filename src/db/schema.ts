import { relations } from 'drizzle-orm';
import { pgTable, uuid, text, timestamp, } from 'drizzle-orm/pg-core';

const chat = pgTable('chats', {
  id: uuid('id').defaultRandom().notNull().primaryKey(),
  model: text('model').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
});

const message = pgTable('messages', {
  id: uuid('id').defaultRandom().notNull().primaryKey(),
  chatId: uuid('chat_id').references(() => chat.id, { onDelete: 'cascade' }).notNull(),
  content: text('text').notNull(),
  role: text('role', { enum: ['system', 'user', 'assistant', 'function', 'data', 'tool'] }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
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