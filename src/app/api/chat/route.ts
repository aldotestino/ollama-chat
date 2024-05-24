import { OpenAI } from 'openai';
import { StreamingTextResponse, OpenAIStream } from 'ai';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const openai = new OpenAI({
  baseURL: 'http://127.0.0.1:11434/v1',
  apiKey: 'ollama',
});

export async function POST(request: Request) {
  const { messages } = await request.json();

  const response = await openai.chat.completions.create({
    model: 'llama3',
    stream: true,
    messages,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}