
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are Flora, the expert botanist AI assistant for Verdant Haven Nursery. 
Your goal is to provide helpful, friendly, and expert advice on plant care, including:
- Watering schedules
- Sunlight requirements
- Soil types and fertilization
- Pest control
- Identifying plant issues
- Recommendations for specific home/office environments

Always be encouraging to new plant parents. Use plant-related emojis occasionally. 
Keep your responses concise and well-structured.
`;

export async function chatWithFlora(messages: Message[]) {
  const model = 'gemini-3-flash-preview';
  
  // Format history for Gemini chat
  const history = messages.slice(0, -1).map(m => ({
    role: m.role,
    parts: [{ text: m.text }]
  }));

  const chat = ai.chats.create({
    model,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
    // We send history if it exists, otherwise it starts fresh
  });

  const lastMessage = messages[messages.length - 1].text;
  
  try {
    const result = await chat.sendMessageStream({ message: lastMessage });
    return result;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
