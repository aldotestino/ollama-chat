import { ChatRequestOptions } from 'ai';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ChangeEvent, FormEvent } from 'react';
import Spinner from './ui/spinner';
import { Send } from 'lucide-react';

function Prompt({
  input,
  handleInputChange,
  handleSubmit,
  isLoading
}: {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
  isLoading: boolean;
}) {
  return (
    <form className="p-4 flex gap-4" onSubmit={handleSubmit}>
      <Input placeholder="Type a message..." value={input} onChange={handleInputChange} />
      <Button type='submit' className="space-x-2" disabled={isLoading}>
        <span>Send</span>
        {isLoading ? <Spinner className="w-5 h-5" /> :<Send className="w-5 h-5" />}
      </Button>
    </form>
  );
}

export default Prompt;