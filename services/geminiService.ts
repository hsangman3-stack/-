
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getHealthConsultation = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `당신은 '강대근 한의원'의 AI 건강 도우미입니다. 
        환자가 증상을 말하면 한의학적 관점에서 친절하게 조언하고, 
        한의원 방문을 권유하되 의학적 진단은 실제 진료를 통해 이루어져야 함을 명시하세요.
        답변은 따뜻하고 신뢰감 있는 말투(경어체)를 사용하세요. 
        한의학의 장점(근본 치료, 체질 개선)을 부각시키세요.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "죄송합니다. 현재 상담이 어렵습니다. 한의원으로 직접 전화를 주시면 친절히 안내해 드리겠습니다.";
  }
};
