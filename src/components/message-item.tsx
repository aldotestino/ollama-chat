import { cn, formatDate } from '@/lib/utils';
import { Message } from 'ai';
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function MessageItem({
  message
}: {
  message: Message
}) {
  return (
    <div className={cn('flex gap-1 flex-col w-fit max-w-md', message.role === 'user' ? 'self-end items-end' : 'self-start items-start')}>
      <div className={cn('prose prose-slate dark:prose-invert prose-a:text-primary hover:prose-a:text-primary/80 p-2 rounded-xl w-fit', message.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-secondary text-secondary-foreground rounded-bl-none')}>
        <Markdown remarkPlugins={[remarkGfm]}>{message.content}</Markdown>
      </div>
      <small className="text-muted-foreground">{formatDate(new Date(message.createdAt!))}</small>
    </div>
  );
}

export default MessageItem;