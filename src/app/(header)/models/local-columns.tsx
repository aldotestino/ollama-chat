'use client';

import RemoveModelButton from '@/components/remove-model-button';
import TryModelButton from '@/components/try-model-button';
import { LocalModel } from '@/lib/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<LocalModel>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'family',
    header: 'Family',
  },
  {
    id: 'actions',
    cell: ({ row }) => {

      const model = row.original.name;

      return (
        <div className='flex items-center justify-center gap-2'>
          <TryModelButton model={model} />
          <RemoveModelButton model={model} />
        </div>
      );
    }
  }
];
