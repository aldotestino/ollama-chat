import * as z from 'zod';

export const propmptSchema = z.object({
  prompt: z.string().min(1)
});

export type PromptSchema = z.infer<typeof propmptSchema>;


export const test = 'ciao';