export type LocalModel = {
  name: string
  family: string
}

export type Model = {
  name: string
  description: string
}

export type ModelWithInfo = Model & {
  pulled: boolean
}

export type Chat = {
  id: string;
  title: string;
  model: string;
  createdAt: Date;
};

export type Message = {
  id: string;
  content: string;
  role: 'system' | 'user' | 'assistant' | 'function' | 'data' | 'tool';
  createdAt: Date;
};