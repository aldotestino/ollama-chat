import { ChatRequestOptions } from 'ai';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ChangeEvent, FormEvent } from 'react';

function Prompt({
  input,
  handleInputChange,
  handleSubmit
}: {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
}) {
  return (
    <form className="py-4 flex gap-4" onSubmit={handleSubmit}>
      <Input placeholder="Type a message..." value={input} onChange={handleInputChange} />
      <Button type='submit'>Send</Button>
    </form>
  );
}

export default Prompt;