# ollama-chat

This project uses [ollama](https://ollama.ai)

## How to start
1. Build
   ```sh
   docker compose build
   ```
2. Run
   ```sh
   docker compose up -d
   ```
3. Pull `llama2`
   ```sh
   docker exec -it ollama ollama pull mistral
   ```
4. App will be ready at [localhost](http://localhost:3000)
