'use client';

import Link from 'next/link';
import Logo from './logo';
import ThemeButton from './theme-button';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu';

function Header({
  children,
}: {
  children?: React.ReactNode; // to accept a server component
}) {

  const pathname = usePathname();

  return (
    <header className="w-full flex items-center justify-between py-4 px-4 border-b">
      <div className='flex items-center gap-4'>
        <div className={cn(pathname === '/models' && 'hidden', 'md:hidden')}>
          {children}
        </div>
        <Link href='/'>
          <Logo className='w-6 h-auto fill-current' />
        </Link>
        <h1 className='text-2xl font-semibold hidden md:block'>OllamaChat</h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/chat" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Chat
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/models" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Models
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <ThemeButton />
    </header>
  );
}

export default Header;