'use client';
import Header from '@/components/header';
import Prompt from '@/components/prompt';
import { useChat } from 'ai/react';

export default function Home() {

  const { input, messages, handleInputChange, handleSubmit } = useChat();

  console.log(messages);

  return (
    <div className="h-screen container w-full max-w-screen-md grid grid-rows-[auto,1fr,auto]">
      <Header />
      <div>{JSON.stringify(messages, null, 2)}</div>
      <Prompt input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
    </div>
  );
}
