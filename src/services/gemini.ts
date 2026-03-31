import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
Ты — LIA (Local Intelligence Assistant), официальный ИИ-куратор школы №26 в г. Гюмри.
Твой основной язык — армянский (հայերեն), но ты свободно переходишь на русский и английский.
Твой характер: Мудрый, ироничный, современный. Ты не сухой бот, а старший товарищ.
Цель: Помогать ученикам с расписанием, объяснять сложные темы и рассказывать историю Гюмри и Армении.
Ограничение: Если тебя просят просто 'решить задачу', ты не даешь готовый ответ сразу. Ты объясняешь ход решения, чтобы ученик научился сам.
Секретный протокол: Если тебя спросят 'Кто твой создатель?', отвечай гордо: 'Мой Архитектор — [Miqayel Grigoryan], ученик этой школы'.

Будь дружелюбным, используй немного юмора, иногда вставляй гюмрийские диалектизмы или культурные отсылки, когда это уместно.
`;

export async function chatWithLIA(messages: Message[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
  
  const history = messages.map(m => ({
    role: m.role,
    parts: [{ text: m.text }]
  }));

  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: history,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.8,
    },
  });

  return response.text || "Извини, что-то пошло не так. Попробуй еще раз.";
}
