import Chat from '@/components/Chat';
import Header from '@/components/Header';

function App() {

  return (
    <div className='py-4 px-2 sm:px-0 max-w-lg mx-auto flex flex-col gap-4 items-center h-screen'>
      <Header />
      <Chat />
    </div>
  );
}

export default App;
