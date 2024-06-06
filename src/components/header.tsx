import Link from 'next/link';
import HeaderDrawer from './header-drawer';
import Logo from './logo';
import ThemeButton from './theme-button';

function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-4 border-b">
      <div className='flex items-center gap-4'>
        <div className='md:hidden'>
          <HeaderDrawer />
        </div>
        <Link href='/'>
          <Logo className='w-6 h-auto fill-current' />
        </Link>
        <h1 className='text-2xl font-semibold hidden md:block'>OllamaChat</h1>
      </div>
      <ThemeButton />
    </header>
  );
}

export default Header;