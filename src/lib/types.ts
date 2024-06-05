export type Chat = {
  id: number;
  title: string;
  model: string;
  createdAt: string;
};

export type Message = {
  id: string;
  content: string;
  role: 'system' | 'user' | 'assistant' | 'function' | 'data' | 'tool';
  createdAt: Date;
};