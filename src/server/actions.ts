'use server';

import { db } from '@/db';
import { chat } from '@/db/schema';
import { actionClient } from '@/lib/safe-action';
import { createChatSchema, deleteChatSchama } from '@/lib/validators';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

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