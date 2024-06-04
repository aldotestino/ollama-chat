import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

function ChatListItem({ id, title, model, active }: {
  id: number;
  title: string;
  model: string;
  active: boolean;
}) {
  return (
    <Link key={id} href={`/chat/${id}`}>
      <div className={cn('p-4 rounded-md cursor-pointer hover:bg-background', active && 'bg-background shadow-sm')}>
        <p className={cn('text-lg font-semibold text-muted-foreground min-w-0 truncate', active && 'text-foreground')}>
          {title}
        </p>
        <p className='text-muted-foreground min-w-0 truncate'>{model}</p>
      </div>
    </Link>
  );
}

export default ChatListItem;