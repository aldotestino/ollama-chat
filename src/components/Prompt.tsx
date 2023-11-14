import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { PromptSchema, propmptSchema } from '@/lib/validators';
import { Form, FormField, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

type PromptProps = {
  onSubmit: (data: PromptSchema) => Promise<void>;
}

function Prompt({ onSubmit }: PromptProps) {

  const form = useForm<PromptSchema>({
    resolver: zodResolver(propmptSchema),
    defaultValues: {
      prompt: '',
    }
  });

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset();
    }
  }, [form.formState, form.reset]);


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-2'>
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormControl>
              <Input {...field} placeholder='Ask me something...' />
            </FormControl>
          )}
        />
        <Button type="submit">
          <PaperAirplaneIcon className='w-5' />
        </Button>
      </form>
    </Form>
  );
}

export default Prompt;