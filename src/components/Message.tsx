import { ChatMessage } from '@/lib/types';
import { cn } from '@/lib/utils';

function Message({ content, sender }: ChatMessage) {
  return (
    <div className='border-b-2 first:border-t-0 border-input p-2 even:bg-slate-50 even:dark:bg-slate-900'>
      <p className={cn(sender === 'me' ? 'text-right' : 'text-left')}>{content}</p>
    </div>
  );
}

export default Message;