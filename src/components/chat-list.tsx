'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import ChatListItem from './chat-list-item';
import { Skeleton } from './ui/skeleton';

function ChatList({ chatList }: {chatList: {
  id: number;
  title: string;
  model: string;
}[]}) {

  const pathname = usePathname();
  const chatId = useMemo(() => pathname.split('/').pop(), [pathname]);

  return (
    <div className='p-4 flex flex-col gap-1 overflow-y-auto'>
      {
        chatList.map((c) => <ChatListItem key={c.id} {...c} active={c.id.toString() === chatId} />)
      }
    </div>
  );
}

export function LoadingChatList() {
  return (
    <div className='p-4 flex flex-col gap-1 overflow-y-auto'>
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