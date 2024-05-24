import { cn, formatDate } from '@/lib/utils';
import { Message } from 'ai';
import React from 'react';
import Markdown from 'react-markdown';

function MessageItem({
  message
}: {
  message: Message
}) {
  return (
    <div className={cn('flex gap-1 flex-col w-fit max-w-xs', message.role === 'user' ? 'self-end items-end' : 'self-start items-start')}>
      <div className={cn('prose prose-slate dark:prose-invert p-2 rounded-xl w-fit', message.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-secondary text-secondary-foreground rounded-bl-none')}>
        <Markdown>{message.content}</Markdown>
      </div>
      <small className="text-muted-foreground">{formatDate(message.createdAt!)}</small>
    </div>
  );
}

export default MessageItem;