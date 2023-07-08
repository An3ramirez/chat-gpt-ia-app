import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Le decimos a Vercel dónde queremos ejecutar
// este endpoint
export const runtime = "edge";

// -> edge tiene mejor rendimiento
// y soporta streaming de datos

// Crear el cliente de OpenIA
const config = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openia = new OpenAIApi(config);

export async function POST(request: any) {
  const { messages } = await request.json();
  const response = await openia.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
    /* messages: [
      {
        role: "system",
        content: "Compórtate como si fueses mi abuela.",
      },
      {
        role: "user",
        content: "Abuela, no me encuetro muy bien.",
      },
    ], */
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  // transformar la respuesta de OpenAI en un text-stream
  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
