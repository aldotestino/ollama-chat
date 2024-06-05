'use server';

import { db } from '@/db';
import { chat } from '@/db/schema';
import { desc } from 'drizzle-orm';

export async function getChats() {
  const chats = await db.query.chat.findMany({
    orderBy: desc(chat.createdAt),
    with: {
      messages: {
        limit: 1,
        columns: {
          text: true
        }
      }
    }
  });

  return chats.map(c => ({
    id: c.id,
    model: c.model,
    createdAt: c.createdAt,
    title: c.messages[0]?.text || 'No messages'
  }));
}

export async function getModels() {
  const result = await fetch('http://127.0.0.1:11434/api/tags');
  const data = await result.json();

  return data.models.reduce((acc: any, model: any) => {
    acc[model.details.family] = [...(acc[model.details.family] || []), model.name.split(':')[0]];
    return acc;
  }, {} as Record<string, string[]>) as Record<string, string[]>;
}