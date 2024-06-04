import { getChats } from '@/server/query';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import ChatList, { LoadingChatList } from './chat-list';

async function ChatListLoader() {
  
  const chats = await getChats();

  return (
    <div className='sm:grid h-full grid-rows-[auto,1fr] overflow-y-hidden'>
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

export function LoadingChatListLoader() {
  return (
    <div className='w-80 border-r bg-muted grid grid-rows-[auto,1fr]'>
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

export default ChatListLoader;