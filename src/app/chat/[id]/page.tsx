import Chat from '@/components/chat';
import { getChatById } from '@/server/queries';

async function ChatPage({ params }: {params: {id: string}}) {

  const chat = await getChatById(params.id);

  return (
    <Chat initialMessages={chat.messages} />
  );
}

export default ChatPage;