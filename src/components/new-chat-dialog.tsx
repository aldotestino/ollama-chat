'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { useMediaQuery } from '@/lib/hooks/use-media-query';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';

export function NewChatDialog({
  children: form
}: {
  children: React.ReactNode;
}) {

  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className='w-full space-x-2'>
            <MessageCircle size={24} />
            <span>New Chat</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New Chat</DialogTitle>
            <DialogDescription>
            Select a model and start chatting.
            </DialogDescription>
          </DialogHeader>
          {form}
        </DialogContent>
      </Dialog>
    );
  }
 
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className='w-full space-x-2'>
          <MessageCircle size={24} />
          <span>New Chat</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>New Chat</DrawerTitle>
          <DrawerDescription>
            Select a model and start chatting.
          </DrawerDescription>
        </DrawerHeader>
        <div className='px-4 pb-20'>
          {form}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
