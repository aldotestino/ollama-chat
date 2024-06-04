import { getChats, getModels } from '@/server/queries';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import ChatList, { LoadingChatList } from './chat-list';
import { NewChatDialog } from './new-chat-dialog';
import NewChatForm from './new-chat-form';

async function ChatListLoader() {
  
  const chatsData = getChats();
  const modelsData = getModels();

  const [chats, models] = await Promise.all([chatsData, modelsData]);

  return (
    <div className='h-full grid grid-rows-[auto,1fr] overflow-y-hidden'>
      <div className='p-4'>
        <NewChatDialog>
          <NewChatForm models={models} />
        </NewChatDialog>
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