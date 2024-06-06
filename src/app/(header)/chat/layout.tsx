import Sidebar from '@/components/sidebar';
import React from 'react';

function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='md:grid grid-cols-[auto,1fr] overflow-y-hidden'>
      <Sidebar />
      {children}
    </div>
  );
}

export default ChatLayout;