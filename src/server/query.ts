export async function getChats() {

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    title: 'How to code a chat bot with nextjs',
    model: 'llama3',
  }));
}