import { client } from '.';

export class OllamaApi {
  static async generate(prompt: string) {
    const { data } = await client.post('/generate', {
      model: 'mistral',
      prompt,
      stream: false
    });

    return data.response as string;
  }
}