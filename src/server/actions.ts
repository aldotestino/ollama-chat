'use server';

import { db } from '@/db';
import { chat } from '@/db/schema';
import { actionClient } from '@/lib/safe-action';
import { createChatSchema, createModelSchema, deleteChatSchama, pullModelSchema } from '@/lib/validators';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const createModel = actionClient
  .schema(createModelSchema)
  .action(async ({ parsedInput: { baseModel, modelName, systemPrompt } }) => {
    const res = await fetch('http://localhost:11434/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: modelName,
        modelfile: `FROM ${baseModel}\nSYSTEM ${systemPrompt}`,
      })
    });


    if (!res.body) {
      throw new Error(`Failed to create model ${modelName}`);
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let text = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      const decodedValue = decoder.decode(value, { stream: true }).replaceAll('\n', '');
      text += decodedValue;
    }


    const jsonObjects = text.match(/({[^}]+})/g);
    if (!jsonObjects) {
      throw new Error('Failed to parse response from server');
    }

    const data = jsonObjects.map(jsonStr => JSON.parse(jsonStr));

    revalidatePath('/(header)', 'layout');
    return data;
  });

export const removeModel = actionClient
  .schema(pullModelSchema)
  .action(async ({ parsedInput: { model } }) => {
    const res = await fetch('http://localhost:11434/api/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: model })
    });

    revalidatePath('/(header)', 'layout');
  });

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