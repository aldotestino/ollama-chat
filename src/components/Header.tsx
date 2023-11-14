import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

function Header() {
  return (
    <header className="w-full flex items-center justify-between p-2">
      <div className='flex items-center gap-2'>
        <Logo className='w-6 h-auto fill-current' />
        <h1 className='text-2xl font-semibold'>ollama-chat</h1>
      </div>
      <ThemeSwitcher />
    </header>
  );
}

export default Header;