export type Chat = {
  id: number;
  title: string;
  model: string;
  createdAt: string;
};

export type Message = {
  id: number;
  chatId: string;
  text: string;
  role: string;
  createdAt: string;
};