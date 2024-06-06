'use server';

import { db } from '@/db';
import { chat } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';
import { notFound } from 'next/navigation';

export async function getChatById(id: string) {
  const selectedChat = await db.query.chat.findFirst({
    where: eq(chat.id, id),
    with: {
      messages: {
        columns: {
          id: true,
          content: true,
          createdAt: true,
          role: true,
        },
      }
    }
  });

  if (!selectedChat) {
    notFound();
  }

  return selectedChat;
}

export async function getChats() {
  const chats = await db.query.chat.findMany({
    orderBy: desc(chat.createdAt),
    with: {
      messages: {
        limit: 1,
        columns: {
          content: true
        }
      }
    }
  });

  return chats.map(c => ({
    id: c.id,
    model: c.model,
    createdAt: c.createdAt,
    title: c.messages[0]?.content || 'No messages'
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