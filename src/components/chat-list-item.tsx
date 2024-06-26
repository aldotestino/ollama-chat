'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Ellipsis, Trash2 } from 'lucide-react';
import { deleteChat } from '@/server/actions';
import { useAction } from 'next-safe-action/hooks';
import Spinner from './ui/spinner';

function ChatListItem({ id, title, model, active }: {
  id: string;
  title: string;
  model: string;
  active: boolean;
}) {

  const { execute, isExecuting } = useAction(deleteChat);

  function onDelete(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    execute({ id });
  }

  return (
    <Link key={id} href={`/chat/${id}`}>
      <div className={cn('p-4 rounded-md', !active && 'hover:bg-background/80 dark:hover:bg-muted/80', active && 'bg-background dark:bg-muted shadow-sm')}>
        <div className='flex items-start gap-2 justify-between'>
          <p className={cn('text-lg font-semibold text-muted-foreground min-w-0 truncate flex-1', active && 'text-foreground')}>
            {title}
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Ellipsis className="w-4 h-4 hover:text-foreground/90 transition-colors" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={onDelete}>
                {!isExecuting ? 
                  <Trash2 className="h-4 h4 mr-2" /> : 
                  <Spinner className="w-4 h-4 mr-2" />
                }
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className='text-muted-foreground min-w-0 truncate'>{model}</p>
      </div>
    </Link>
  );
}

export default ChatListItem;