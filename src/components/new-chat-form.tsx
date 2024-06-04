import React from 'react';
import { Label } from './ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { createChat } from '@/server/actions';

function NewChatForm({ models }: {
  models: Record<string, string[]>;
}) {

  return (
    <form className="space-y-4" action={createChat}>
      <div className='space-y-2'>
        <Label htmlFor="model" className="text-right">
          Model
        </Label>
        <Select required name='model'>
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
      </div>
      <Button type="submit" className='w-full'>Create</Button>
    </form>
  );
}

export default NewChatForm;