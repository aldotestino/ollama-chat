import { relations, sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

const chat = sqliteTable('chats', {
  id: integer('id').notNull().primaryKey(),
  model: text('model').notNull(),
  createdAt: text('timestamp').default(sql`(CURRENT_TIMESTAMP)`).notNull()
});

const message = sqliteTable('messages', {
  id: integer('id').notNull().primaryKey(),
  chatId: text('chat_id').references(() => chat.id).notNull(),
  text: text('text').notNull(),
  role: text('role').notNull(),
  createdAt: text('timestamp').default(sql`(CURRENT_TIMESTAMP)`).notNull()
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