import React, { Suspense } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import ChatListLoader, { LoadingChatListLoader } from './chat-list-loader';

function HeaderDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className='h-6 w-6' />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className='p-0 w-80 bg-muted overflow-y-hidden'>
        <SheetHeader className='p-4 sm:text-center'>
          <SheetTitle>ollama-chat</SheetTitle>
        </SheetHeader>
        <Suspense fallback={<LoadingChatListLoader />}>
          <ChatListLoader />
        </Suspense>
      </SheetContent>
    </Sheet>
  );
}

export default HeaderDrawer;