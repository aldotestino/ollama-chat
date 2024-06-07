import { useToast } from '@/components/ui/use-toast';
import { removeModel } from '@/server/actions';
import { Trash2 } from 'lucide-react';
import { useAction } from 'next-safe-action/hooks';
import { Button } from './ui/button';
import Spinner from './ui/spinner';

function RemoveModelButton({
  model
}: {
  model: string
}) {

  const { toast } = useToast();

  const { execute, isExecuting } = useAction(removeModel, {
    onError: () => {
      toast({
        title: 'Error',
        description: `Failed to remove model ${model}`,
        variant: 'destructive'
      });
    },
    onSuccess: () => {
      toast({
        title: 'Sucess',
        description: `Model ${model} removed successfully`
      });
    }
  });

  async function handleOnRemove() {
    await execute({ model });
  }

  return (
    <Button variant="outline" size="sm" onClick={handleOnRemove} className='space-x-2' disabled={isExecuting}>
      {isExecuting ? <Spinner className='w-4 h-4' /> : <Trash2 className='w-4 h-4' />}
      {isExecuting ? <span>Removing</span> : <span>Remove</span>}
    </Button>
  );
}

export default RemoveModelButton;