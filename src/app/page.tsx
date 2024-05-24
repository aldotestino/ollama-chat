'use client';
import Header from '@/components/header';
import Chat from '@/components/chat';
import Prompt from '@/components/prompt';
import { useChat } from 'ai/react';

export default function Home() {

  const { input, messages, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className="h-screen w-full max-w-screen-md grid grid-rows-[auto,1fr,auto] mx-auto">
      <Header />
      <Chat messages={messages} />
      <Prompt input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}
