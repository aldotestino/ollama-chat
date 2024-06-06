import { forwardRef } from 'react';
import { Button, ButtonIconProps, ButtonProps } from './ui/button';
import { MessageCircle } from 'lucide-react';

const NewChatButton = forwardRef<HTMLButtonElement, ButtonProps & ButtonIconProps>((props, ref) => {
  return (
    <Button ref={ref} className='w-full space-x-2' {...props}>
      <MessageCircle className='w-4 h-4' />
      <span>New Chat</span>
    </Button>
  );
});

NewChatButton.displayName = 'NewChatButton';

export default NewChatButton;