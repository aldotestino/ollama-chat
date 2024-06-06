import * as z from 'zod';

export const createChatSchema = z.object({
  model: z.string().min(1, { message: 'Model is required.' }),
});

export const deleteChatSchama = z.object({
  id: z.string().uuid(),
});

export type CreateChatInput = z.infer<typeof createChatSchema>;