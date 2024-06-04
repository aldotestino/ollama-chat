import { Button } from './ui/button';

import { MessageCircle } from 'lucide-react';
import { getChats } from '@/server/query';
import ChatList, { LoadingChatList } from './chat-list';

async function Sidebar() {

  const chats = await getChats();

  return (
    <div className='w-80 border-r bg-muted overflow-y-hidden grid grid-rows-[auto,1fr]'>
      <div className='p-4'>
        <Button className='w-full space-x-2'>
          <MessageCircle size={24} />
          <span>New Chat</span>
        </Button>
      </div>
      <ChatList chatList={chats} />
    </div>
  );
}

export function LoadingSidebar() {

  return (
    <div className='w-80 border-r bg-muted overflow-y-hidden grid grid-rows-[auto,1fr]'>
      <div className='p-4'>
        <Button className='w-full space-x-2' disabled>
          <MessageCircle size={24} />
          <span>New Chat</span>
        </Button>
      </div>
      <LoadingChatList />
    </div>
  );
}


export default Sidebar;