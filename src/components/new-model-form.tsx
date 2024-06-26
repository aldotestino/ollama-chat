'use client';

import { CreateModelSchema, createModelSchema } from '@/lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import Spinner from './ui/spinner';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { createModel } from '@/server/actions';
import { useToast } from './ui/use-toast';
import { useAction } from 'next-safe-action/hooks';

function NewModelForm({ models }: {
  models: Record<string, string[]>;
}) {

  const { toast } = useToast();
  const form = useForm<CreateModelSchema>({
    resolver: zodResolver(createModelSchema),
    defaultValues: {
      modelName: '',
      baseModel: '',
      systemPrompt: '',
    },
  });

  const { execute, isExecuting } = useAction(createModel, {
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    },
    onSuccess: async ({ data }) => {

      console.log(data);

      const first = data.at(0);

      if(first.error) {
        toast({
          title: 'Error',
          description: first.error,
          variant: 'destructive'
        });
      }
    }
  
  });
  
  async function onSubmit(values: CreateModelSchema) {
    await execute(values);
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="modelName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Mario' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="baseModel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Base Model</FormLabel>
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
        <FormField
          control={form.control}
          name="systemPrompt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>System prompt</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder='You are mario from Super Mario Bros.' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full' disabled={isExecuting}>
          {isExecuting && <Spinner className='mr-2' />}
          <span>Create</span>
        </Button>
      </form>
    </Form>
  );
}

export default NewModelForm;