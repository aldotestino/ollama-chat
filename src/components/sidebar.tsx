import { Suspense } from 'react';
import ChatListLoader, { LoadingChatListLoader } from './chat-list-loader';

async function Sidebar() {

  return (
    <div className='hidden md:block h-full w-80 border-r bg-muted dark:bg-background overflow-y-hidden'>
      <Suspense fallback={<LoadingChatListLoader />}>
        <ChatListLoader />
      </Suspense>
    </div>
  );
}


export default Sidebar;