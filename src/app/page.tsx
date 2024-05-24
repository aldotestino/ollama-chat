import Header from '@/components/header';
import Prompt from '@/components/prompt';

export default function Home() {
  return (
    <div className="h-screen container w-full max-w-screen-md grid grid-rows-[auto,1fr,auto]">
      <Header />
      <div>chat</div>
      <Prompt />
    </div>
  );
}
