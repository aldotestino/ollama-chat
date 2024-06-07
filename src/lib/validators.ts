import * as z from 'zod';

export const createChatSchema = z.object({
  model: z.string().min(1, { message: 'Model is required.' }),
});

export const pullModelSchema = z.object({
  model: z.string().min(1, { message: 'Model is required.' }),
});

export const removeModelSchema = z.object({
  model: z.string().min(1, { message: 'Model is required.' }),
});

export const createModelSchema = z.object({
  baseModel: z.string().min(1, { message: 'Base model is required.' }),
  modelName: z.string().min(1, { message: 'Model name is required.' }),
  systemPrompt: z.string().min(1, { message: 'System prompt is required.' }),
});

export const deleteChatSchama = z.object({
  id: z.string().uuid(),
});

export type CreateChatSchema = z.infer<typeof createChatSchema>;
export type CreateModelSchema = z.infer<typeof createModelSchema>;