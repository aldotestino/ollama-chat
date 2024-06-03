'use client';

import Chat from '@/components/chat';
import Prompt from '@/components/prompt';
import { useChat } from 'ai/react';

export default function Home() {

  const { input, messages, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className='h-full grid grid-rows-[1fr,auto]'>
      <div className='overflow-y-auto'>
        <div className='w-full max-w-screen-md px-4 pt-4 mx-auto'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </div>
      </div>
      <Prompt input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}
