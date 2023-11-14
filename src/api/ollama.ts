import { client } from '.';

export class OllamaApi {
  static async generate(prompt: string) {
    const { data } = await client.post('/generate', {
      model: 'llama2',
      prompt,
      stream: false
    });

    return data.response as string;
  }
}