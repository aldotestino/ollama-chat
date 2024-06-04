import Chat from '@/components/chat';
import React from 'react';

function ChatPage({ params }: {params: {id: string}}) {

  console.log(params.id);

  return (
    <Chat initialMessages={[]} />
  );
}

export default ChatPage;