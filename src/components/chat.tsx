import { Message } from 'ai';
import MessageItem from './message-item';
import { useEffect, useRef } from 'react';

function Chat({
  messages
}: {
  messages: Message[]
}) {

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col gap-2 p-4 overflow-y-auto" ref={chatRef}>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
}

export default Chat;