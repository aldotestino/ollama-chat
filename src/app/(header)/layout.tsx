import Header from '@/components/header';
import HeaderDrawer from '@/components/header-drawer';
import React from 'react';

function HeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen grid grid-rows-[auto,1fr] overflow-y-hidden'>
      <Header>
        <HeaderDrawer />
      </Header>
      {children}
    </div>
  );
}

export default HeaderLayout;