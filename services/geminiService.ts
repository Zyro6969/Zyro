import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getFoodRecommendation = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my brain is offline (Missing API Key). But our menu looks delicious!";
  }

  const menuContext = MENU_ITEMS.map(item => 
    `${item.name} (${item.category}): ${item.description} - $${item.price}`
  ).join('\n');

  const systemInstruction = `
    You are Zyro, a witty and helpful culinary concierge for a food ordering app called 'Zyro Eats'.
    Your goal is to recommend items from the menu based on the user's mood, craving, or dietary preferences.
    
    Here is the current menu:
    ${menuContext}

    Rules:
    1. Only recommend items that are on the menu.
    2. Be concise and engaging. Use emojis.
    3. If the user asks for something we don't have, politely suggest the closest alternative from the menu.
    4. Mention the price if relevant.
    5. Keep responses under 100 words.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't find a perfect match, but have you tried our Truffle Burger?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the kitchen AI right now. Please browse the menu manually!";
  }
};
