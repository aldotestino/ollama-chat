import { getChats, getModels } from '@/server/queries';
import ChatList, { LoadingChatList } from './chat-list';
import { DrawerDialog } from './drawer-dialog';
import NewChatButton from './new-chat-button';
import NewChatForm from './new-chat-form';
import { Separator } from './ui/separator';

async function ChatListLoader() {
  
  const chatsData = getChats();
  const modelsData = getModels();

  const [chats, models] = await Promise.all([chatsData, modelsData]);

  return (
    <div className='h-full grid grid-rows-[auto,1fr] overflow-y-hidden'>
      <div className='p-4 pb-0 space-y-4'>
        <DrawerDialog 
          title='New Chat' 
          description='Select a model and start chatting.' 
          button={<NewChatButton />}
        >
          <NewChatForm models={models} />
        </DrawerDialog>
        <Separator />
      </div>
      <ChatList chatList={chats} />
    </div>
  );
}

export function LoadingChatListLoader() {
  return (
    <div className='w-80 border-r grid grid-rows-[auto,1fr]'>
      <div className='p-4'>
        <NewChatButton disabled />
        <Separator />
      </div>
      <LoadingChatList />
    </div>
  );
}

export default ChatListLoader;