import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { createChat } from '@/server/actions';
import Spinner from './ui/spinner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateChatInput, createChatSchema } from '@/lib/validators';
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from './ui/form';

function NewChatForm({ models, closeDialog }: {
  models: Record<string, string[]>;
  closeDialog: () => void;
}) {

  const form = useForm<CreateChatInput>({
    resolver: zodResolver(createChatSchema),
    defaultValues: {
      model: '',
    },
  });
 
  async function onSubmit(values: CreateChatInput) {
    await createChat(values);
    closeDialog();
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(models).map(([family, models]) => (
                      <SelectGroup key={family}>
                        <SelectLabel>{family}</SelectLabel>
                        {models.map((model) => (
                          <SelectItem key={model} value={model}>
                            {model}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full' disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && <Spinner className='mr-2' />}
          <span>Create</span>
        </Button>
      </form>
    </Form>
  );
}

export default NewChatForm;