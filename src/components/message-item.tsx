import { formatDate } from '@/lib/utils';
import { Message } from 'ai';
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Logo from './logo';

function MessageItem({
  message
}: {
  message: Message
}) {

  if(message.role === 'user'){
    return (
      <div className='self-end'>
        <div className="flex gap-1 flex-col w-fit max-w-md self-end items-end">
          <div className="prose prose-slate dark:prose-invert prose-a:text-primary hover:prose-a:text-primary/80 p-2 rounded-xl w-fit bg-muted rounded-br-none">
            <Markdown remarkPlugins={[remarkGfm]}>{message.content}</Markdown>
          </div>
          <small className="text-muted-foreground">{formatDate(message.createdAt!)}</small>
        </div>
      </div>
    );
  } else {
    return (
      <div className='grid grid-cols-[auto,1fr] gap-2'>
        <div className='hidden sm:flex h-10 w-10 items-center justify-center bg-primary rounded-full'>
          <Logo className='w-6 h-6 fill-primary-foreground' />
        </div>
        <div className="prose prose-slate dark:prose-invert prose-a:text-primary hover:prose-a:text-primary/80">
          <Markdown remarkPlugins={[remarkGfm]}>{message.content}</Markdown>
        </div>
      </div>
    );
  }
}

export default MessageItem;