import { Button } from './ui/button';
import { Download } from 'lucide-react';
import { pullModel } from '@/server/actions';
import { useAction } from 'next-safe-action/hooks';
import Spinner from './ui/spinner';
import { useToast } from '@/components/ui/use-toast';

function PullModelbutton({
  model
}: {
  model: string
}) {

  const { toast } = useToast();

  const { execute, isExecuting } = useAction(pullModel, {
    onError: () => {
      toast({
        title: 'Error',
        description: `Failed to pull model ${model}`,
        variant: 'destructive'
      });
    },
    onSuccess: () => {
      toast({
        title: 'Sucess',
        description: `Model ${model} pulled successfully`
      });
    }
  });

  async function handleOnPull() {
    await execute({ model });
  }

  return (
    <Button variant="outline" size="sm" onClick={handleOnPull} className='space-x-2' disabled={isExecuting}>
      {isExecuting ? <Spinner className='w-4 h-4' /> : <Download className='w-4 h-4' />}
      {isExecuting ? <span>Pulling</span> : <span>Pull</span>}
    </Button>
  );
}

export default PullModelbutton;