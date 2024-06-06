'use client';

import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import DotPattern from '@/components/magicui/dot-pattern';
import {  buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {  MessageCircle, SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className='z-10 h-full container w-full max-w-screen-md flex flex-col gap-6 items-center justify-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800',
          )}
        >
          <AnimatedShinyText className="inline-flex text-sm items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ A new way to use LLMs</span>
          </AnimatedShinyText>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem] text-transparent bg-clip-text bg-gradient-to-b from-black to-neutral-500 dark:from-neutral-200 dark:to-neutral-600">
          OllamaChat
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-center font-semibold text-muted-foreground w-full max-w-prose'>
          OllamaChat is a chat application that uses Large Language Models (LLMs) to generate responses to messages. It&apos;s a fun way to interact with AI and see how well it can understand and generate text.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex flex-col sm:flex-row gap-2'>
          <Link href="https://github.com/aldotestino/ollama-chat" target='_blank' className={buttonVariants({ size: 'lg', variant: 'outline', className: 'space-x-2' })}>
            <SquareArrowOutUpRight className='w-4 h-4' />
            <span>Support on GitHub</span>
          </Link>
          <Link href="/chat" className={buttonVariants({ size: 'lg', variant: 'shine', className: 'space-x-2' })}>
            <MessageCircle className='w-4 h-4' />
            <span>Start Chatting</span>
          </Link>
        </motion.div>
      </div>
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
        )}
      />
    </div>
  );
}

export default Home;