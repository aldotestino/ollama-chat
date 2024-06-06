import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import React from 'react';

function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen grid grid-rows-[auto,1fr] overflow-y-hidden'>
      <Header />

      <div className='md:grid grid-cols-[auto,1fr] overflow-y-hidden'>
        <Sidebar />
        {children}
      </div>

    </div>
  );
}

export default ChatLayout;