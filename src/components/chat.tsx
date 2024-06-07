'use client';

import MessageItem from './message-item';
import { Fragment, useEffect, useRef } from 'react';
import Prompt, { LaodingPrompt } from './prompt';
import { useChat } from 'ai/react';
import { Message } from '@/lib/types';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';
import { useToast } from './ui/use-toast';

function Chat({
  chatId,
  model,
  initialMessages
}: {
  chatId: string,
  model: string,
  initialMessages: Message[]
}) {

  const { toast } = useToast();
  const { input, messages, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages,
    body: {
      chatId,
      model
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    }
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

export function LoadingChat() {
  return (
    <div className='h-full grid grid-rows-[1fr,auto] overflow-y-hidden'>
      <div className='overflow-y-auto'>
        <div className='w-full max-w-screen-md px-4 pt-4 mx-auto flex flex-col gap-8'>
          {Array.from({ length: 4 }).map((_, i) => (
            <Fragment key={i}>
              {
                i % 2 === 0 ? (
                  <Skeleton className={cn('h-20 w-2/3 self-end')} />
                ) : (
                  <div key={i} className='w-full sm:grid grid-cols-[auto,1fr] gap-2'>
                    <Skeleton className='hidden sm:block h-10 w-10 rounded-full' />
                    <Skeleton className='h-40 w-full' />
                  </div>
                )
              }
            </Fragment>
          ))}
        </div>
      </div>
      <LaodingPrompt />
    </div>
  );
}

export default Chat;