'use client';

import PullModelbutton from '@/components/pull-model-button';
import { Badge } from '@/components/ui/badge';
import { ModelWithInfo } from '@/lib/types';
import { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

export const columns: ColumnDef<ModelWithInfo>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      return <Link href={row.original.url} target='_blanck' className='hover:underline'>{row.original.name}</Link>;
    }
  },
  {
    accessorKey: 'family',
    header: 'Family',
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
        <div className='text-center'>
          <PullModelbutton model={model} />
        </div>
      );
    }
  }
];
