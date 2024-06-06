'use client';

import PullModelbutton from '@/components/pull-model-button';
import { Badge } from '@/components/ui/badge';
import { Model } from '@/lib/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Model>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const pulled = row.original.pulled;
      const model = row.original.name;
      
      if(pulled) {
        return (
          <div className='text-center'>
            <Badge>Pulled</Badge>
          </div>
        );
      }

      return (
        <PullModelbutton model={model} />
      );
    }
  }
];
