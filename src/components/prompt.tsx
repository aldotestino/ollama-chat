import { ChatRequestOptions } from 'ai';
import { Button } from './ui/button';
import { ChangeEvent, FormEvent } from 'react';
import Spinner from './ui/spinner';
import { ArrowUp, Send } from 'lucide-react';
import { Textarea } from './ui/textarea';

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
    <form className="p-4 w-full max-w-screen-md mx-auto" onSubmit={handleSubmit}>
      <div className='relative w-full'>
        <Textarea disabled={isLoading} placeholder='Write a message to OllamaChat' className='text-md resize-none pr-14' value={input} onChange={handleInputChange} />
        <Button type="submit" disabled={isLoading} size="icon" className='absolute bottom-2 right-2 rounded-full'>
          {isLoading ? <Spinner className='w-4 h-4' /> : <ArrowUp className='w-6 h-6' />}
        </Button>
      </div>
    </form>
  );
}

export default Prompt;