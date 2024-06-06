import { forwardRef } from 'react';
import { Button, ButtonIconProps, ButtonProps } from './ui/button';
import { BotMessageSquare } from 'lucide-react';

const NewModelButton = forwardRef<HTMLButtonElement, ButtonProps & ButtonIconProps>((props, ref) => {
  return (
    <Button ref={ref} className='w-full space-x-2' {...props}>
      <BotMessageSquare className='w-4 h-4 mr-2' />
      <span>Create Model</span>
    </Button>
  );
});

NewModelButton.displayName = 'NewModelButton';

export default NewModelButton;