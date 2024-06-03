import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import ThemeProvider from '@/components/theme-provider';
import Header from '@/components/header';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Ollama Chat',
  description: 'A simple chat-bot made with Ollama and vercel AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={cn(
          'bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className='h-screen grid grid-rows-[auto,1fr]'>
            <Header />

            <div className='overflow-y-hidden'>
              {children}
            </div>

          </div>
        </ThemeProvider>
      </body>
      
    </html>
  );
}
