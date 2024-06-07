import { DrawerDialog } from '@/components/drawer-dialog';
import NewModelButton from '@/components/new-model-button';
import NewModelForm from '@/components/new-model-form';
import { getLocalModels, getOllamaModels } from '@/server/queries';
import ModelsTabs from './models-tabs';
import { LocalModel } from '@/lib/types';


async function ModelsPage({ searchParams }: {
  searchParams: {
    page: string;
  }
}) {

  const allModelsInfoPromise = getOllamaModels(Number(searchParams.page) || 1);
  const localModelsPromise = getLocalModels();

  const [allModelsInfo, localModels] = await Promise.all([allModelsInfoPromise, localModelsPromise]);

  const formattedLocalModels =  Object.entries(localModels).reduce((acc, [family, names]) => {
    const familyNames = names.map(name => ({ family, name }));
    return acc.concat(familyNames);
  }, [] as LocalModel[]);

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
            <NewModelForm models={localModels}/>
          </DrawerDialog>
        </div>
        <ModelsTabs 
          allModels={allModelsInfo.models} 
          prevPage={allModelsInfo.prevPage} 
          nextPage={allModelsInfo.nextPage} 
          localModels={formattedLocalModels} 
        />
      </div>
    </div>
  );
}

export default ModelsPage;