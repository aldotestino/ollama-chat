'use server';

import { db } from '@/db';
import { chat } from '@/db/schema';
import { actionClient } from '@/lib/safe-action';
import { createChatSchema, deleteChatSchama, pullModelSchema } from '@/lib/validators';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const pullModel = actionClient
  .schema(pullModelSchema)
  .action(async ({ parsedInput: { model } }) => {
    const res = await fetch('http://127.0.0.1:11434/api/pull', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: model, stream: false })
    });
    const data = await res.json();

    revalidatePath('/(header)', 'layout');

    return data;
  });

export const createChat = actionClient
  .schema(createChatSchema)
  .action(async ({ parsedInput: { model } }) => {

    const newChat = await db.insert(chat).values({
      model
    }).returning();

    revalidatePath('/chat');
    redirect(`/chat/${newChat[0].id.toString()}`);
  });

export const deleteChat = actionClient
  .schema(deleteChatSchama)
  .action(async ({ parsedInput: { id } }) => {

    await db.delete(chat).where(eq(chat.id, id));
    revalidatePath('/chat');

    const referer = headers().get('Referer');
    if (referer) {
      const refererChatId = referer.split('/').pop();
      if (refererChatId === id.toString()) {
        redirect('/chat');
      }
    }
  });