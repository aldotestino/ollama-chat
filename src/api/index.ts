import axios from 'axios';
import { QueryClient } from 'react-query';

const client = axios.create({
  baseURL: `${import.meta.env.VITE_OLLAMA_API_URL}/api`,
});

const queryClient = new QueryClient();

export { client, queryClient };