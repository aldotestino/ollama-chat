import { relations, sql } from 'drizzle-orm';
import { text, sqliteTable } from 'drizzle-orm/sqlite-core';

const chat = sqliteTable('chats', {
  id: text('id'),
  model: text('model'),
  createdAt: text('timestamp').default(sql`(CURRENT_TIMESTAMP)`)
});

const message = sqliteTable('messages', {
  id: text('id'),
  chatId: text('chat_id').references(() => chat.id),
  text: text('text'),
  createdAt: text('timestamp').default(sql`(CURRENT_TIMESTAMP)`)
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