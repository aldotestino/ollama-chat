'use client';

import { Message } from 'ai';
import MessageItem from './message-item';
import { useEffect, useRef } from 'react';
import Prompt from './prompt';
import { useChat } from 'ai/react';

function Chat({
  initialMessages
}: {
  initialMessages: Message[]
}) {

  const { input, messages, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className='h-full grid grid-rows-[1fr,auto] overflow-y-hidden'>
      <div ref={scrollRef} className='overflow-y-auto'>
        <div className='w-full max-w-screen-md px-4 pt-4 mx-auto flex flex-col gap-8'>
          {messages.map((message, index) => (
            <MessageItem key={index} message={message} />
          ))}
        </div>
      </div>
      <Prompt input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}

export default Chat;