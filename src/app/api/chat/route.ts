import { OpenAI } from 'openai';
import { StreamingTextResponse, OpenAIStream } from 'ai';
import db from '@/db';
import { message } from '@/db/schema';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const openai = new OpenAI({
  baseURL: 'http://127.0.0.1:11434/v1',
  apiKey: 'ollama',
});

type RequestBody = {
  messages: any[];
  chatId: string;
  model: string;
};

export async function POST(request: Request) {
  const { messages, chatId, model }: RequestBody = await request.json();

  const sentMessage = messages.at(-1);
  await db.insert(message).values({
    chatId,
    role: 'user',
    content: sentMessage!.content,
  });

  const response = await openai.chat.completions.create({
    model,
    messages,
    stream: true,
  });

  const stream = OpenAIStream(response, {
    onCompletion: async (completion) => {
      await db.insert(message).values({
        chatId,
        role: 'assistant',
        content: completion
      });
    }
  });

  return new StreamingTextResponse(stream);
}