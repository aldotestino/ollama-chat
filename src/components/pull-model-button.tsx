import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

function PullModelbutton({
  model
}: {
  model: string
}) {

  function handleOnPull() {
    console.log(`Pulling model ${model}`);
  }

  return (
    <Button variant="outline" size="sm" onClick={handleOnPull}>
      <Download className='w-4 h-4 mr-2' />
      <span>Pull</span>
    </Button>
  );
}

export default PullModelbutton;