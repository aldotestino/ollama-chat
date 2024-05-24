import { Button } from './ui/button';
import { Input, InputProps } from './ui/input';

function Prompt(props: InputProps) {
  return (
    <div className="py-4 flex gap-4">
      <Input placeholder="Type a message..." {...props} />
      <Button>Send</Button>
    </div>
  );
}

export default Prompt;