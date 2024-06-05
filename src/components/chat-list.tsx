'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import ChatListItem from './chat-list-item';
import { Skeleton } from './ui/skeleton';
import { Inbox } from 'lucide-react';
import { Chat } from '@/lib/types';

function ChatList({ chatList }: {chatList: Chat[]}) {

  const pathname = usePathname();
  const chatId = useMemo(() => pathname.split('/').pop(), [pathname]);

  if(chatList.length === 0) {
    return (
      <div className='p-4 h-full flex flex-col gap-1 items-center justify-center'>
        <Inbox className='text-muted-foreground w-10 h-10' />
        <p className='text-md font-semibold text-muted-foreground text-center'>No chats found</p>
      </div>
    );
  }

  return (
    <div className='p-4 h-full flex flex-col gap-1 overflow-y-auto'>
      {
        chatList.map((c) => <ChatListItem key={c.id} {...c} active={chatId === c.id.toString()} />)
      }
    </div>
  );
}

export function LoadingChatList() {
  return (
    <div className='p-4 flex flex-col gap-1'>
      {Array.from({ length: 5 }).map((_, i) => (
        <div className="space-y-2 p-4" key={i}>
          <Skeleton className="h-6 w-[250px] bg-background" />
          <Skeleton className="h-4 w-[200px] bg-background" />
        </div>
      ))}
    </div>
  );
}

export default ChatList;