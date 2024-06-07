import React from 'react';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import { createChat } from '@/server/actions';
import { useAction } from 'next-safe-action/hooks';
import Spinner from './ui/spinner';

function TryModelButton({
  model
}: {
  model: string;
}) {
  
  const { execute, isExecuting } = useAction(createChat);

  return (
    <Button size="sm" variant="outline" className='space-x-2' onClick={() => execute({ model })}>
      {isExecuting ? <Spinner className="w-4 h-4" /> : <MessageCircle className='w-4 h-4' />}
      <span>Try</span>
    </Button>
  );
}

export default TryModelButton;