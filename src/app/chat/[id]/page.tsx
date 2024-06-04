import Chat from '@/components/chat';

function ChatPage({ params }: {params: {id: string}}) {

  return (
    <Chat initialMessages={[]} />
  );
}

export default ChatPage;