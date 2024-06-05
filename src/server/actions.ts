'use server';

import { db } from '@/db';
import { chat } from '@/db/schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createChat(formData: FormData) {
  const newChat = await db.insert(chat).values({
    model: formData.get('model') as string,
  }).returning();

  revalidatePath('/');
  redirect(`/chat/${newChat[0].id}}`);
}