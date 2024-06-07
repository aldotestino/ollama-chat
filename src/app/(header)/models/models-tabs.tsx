'use client';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { columns as allColumns } from './all-columns';
import { columns as localColumns } from './local-columns';
import { DataTable } from './data-table';
import { LocalModel, Model, ModelWithInfo } from '@/lib/types';
import Link from 'next/link';
import { useMemo } from 'react';

function ModelsTabs({
  allModels,
  prevPage,
  nextPage,
  localModels
}: {
  allModels: Model[];
  prevPage: number | null;
  nextPage: number | null;
  localModels: LocalModel[];
}) {

  const allModelsWithInfo = useMemo(
    () => 
      allModels.map(model => ({ ...model, pulled: localModels.some(lm => lm.name === model.name) })), 
    [allModels, localModels]
  ) as ModelWithInfo[];

  return (
    <Tabs defaultValue='all'>
      <TabsList>
        <TabsTrigger value='all'>All Models</TabsTrigger>
        <TabsTrigger value='local'>Local Models</TabsTrigger>
      </TabsList>
      <TabsContent value='all'>
        <DataTable columns={allColumns} data={allModelsWithInfo} />
        <div className='text-right space-x-2 pt-2'>
          <Link href={`/models?page=${prevPage}`} passHref legacyBehavior>
            <Button variant="outline" disabled={!prevPage}>
              Previous
            </Button>
          </Link>
          <Link href={`/models?page=${nextPage}`} passHref legacyBehavior>
            <Button variant="outline" disabled={!nextPage}>
              Next
            </Button>
          </Link>
        </div>
      </TabsContent>
      <TabsContent value='local'>
        <DataTable columns={localColumns} data={localModels} 
        />
      </TabsContent>
    </Tabs>
  );
}

export default ModelsTabs;