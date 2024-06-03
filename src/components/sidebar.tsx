import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './ui/button';

import { MessageCircle } from 'lucide-react';

function Sidebar() {

  return (
    <div className='w-80 border-r bg-muted overflow-y-hidden grid grid-rows-[auto,1fr]'>
      <div className='p-4'>
        <Button className='w-full space-x-2'>
          <MessageCircle size={24} />
          <span>New Chat</span>
        </Button>
      </div>
      <div className='p-4 overflow-y-auto'>
        {
          Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={cn('p-4 rounded-md', i === 0 && 'bg-background shadow-sm')}>
              <p className={cn('text-lg font-semibold text-muted-foreground min-w-0 truncate', i === 0 && 'text-foreground')}>
              How to code a chat bot with nextjs
              </p>
              <p className='text-muted-foreground min-w-0 truncate'>llama3</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Sidebar;