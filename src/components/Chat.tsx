import { useState } from 'react';
import { PromptSchema } from '@/lib/validators';
import { type ChatMessage } from '@/lib/types';
import Prompt from './Prompt';
import Message from './Message';
import { useMutation } from 'react-query';
import { OllamaApi } from '@/api/ollama';

function Chat() {

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const generate = useMutation({
    mutationFn: OllamaApi.generate,
    onSuccess: (data) => {
      setMessages(prevMessages => [...prevMessages, { content: data, sender: 'bot' }]);
    }
  });

  async function onSubmit(data: PromptSchema) {
    setMessages(prevMessages => [...prevMessages, { content: data.prompt, sender: 'me' }]);
    await generate.mutateAsync(data.prompt);
  }

  return (
    <main className='flex h-full flex-col gap-4 w-full overflow-y-hidden p-2'>
      <section className='w-full flex-1 height-0 overflow-y-scroll border-2 border-input rounded-lg'>
        {messages.map((message, i) => (
          <Message key={i} {...message} />
        ))}
        {generate.isLoading && 
        <div className='mt-4 flex items-center gap-2 justify-center text-slate-500'>
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p>Generating a response...</p>
        </div>
        }
      </section>
      <Prompt onSubmit={onSubmit} />
    </main>
  );
}

export default Chat;