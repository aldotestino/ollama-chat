import Link from 'next/link';
import { columns } from './columns';
import { DataTable } from './data-table';
import { getAllModels, getModels } from '@/server/queries';
import { Button } from '@/components/ui/button';
import { DrawerDialog } from '@/components/drawer-dialog';
import NewModelButton from '@/components/new-model-button';
import NewModelForm from '@/components/new-model-form';

async function ModelsPage({ searchParams }: {
  searchParams: {
    page: string;
  }
}) {

  const modelsInfoData = getAllModels(Number(searchParams.page) || 1);
  const modelsData = getModels();

  const [modelsInfo, models] = await Promise.all([modelsInfoData, modelsData]);

  return (
    <div className='h-full overflow-y-auto'>
      <div className='container max-w-screen-lg py-10 space-y-4 '>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-semibold'>Models</h1>
          <DrawerDialog
            title='New Model'
            description='Create a new model to start chatting.'
            button={<NewModelButton className='w-fit' />}
          >
            <NewModelForm models={models}/>
          </DrawerDialog>
        </div>
        <DataTable columns={columns} data={modelsInfo.models} />
        <div className='text-right space-x-2'>
          <Link href={`/models?page=${modelsInfo.prevPage}`} passHref legacyBehavior>
            <Button variant="outline" disabled={!modelsInfo.prevPage}>
              Previous
            </Button>
          </Link>
          <Link href={`/models?page=${modelsInfo.nextPage}`} passHref legacyBehavior>
            <Button variant="outline" disabled={!modelsInfo.nextPage}>
              Next
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ModelsPage;