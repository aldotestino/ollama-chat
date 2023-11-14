import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/lib/themeProvider';

function ThemeSwitcher() {

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme}/>
  );
}

export default ThemeSwitcher;