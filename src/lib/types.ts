export type LocalModel = {
  name: string
  family: string
}

export type Model = {
  id: string
  featPosition: string
  name: string
  url: string
  description: string
  pulls: string
  lastUpdate: string
  family: string
  system: string
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