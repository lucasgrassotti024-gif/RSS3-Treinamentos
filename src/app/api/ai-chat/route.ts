import { NextRequest, NextResponse } from "next/server";
import { getLocalAIResponse } from "@/lib/ai-assistant-data";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history, locale = "pt-BR" } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Mensagem inválida." },
        { status: 400 }
      );
    }

    const geminiApiKey = process.env.GEMINI_API_KEY;

    // Define o idioma de resposta exigido
    const targetLanguage =
      locale === "en"
        ? "English"
        : locale === "es"
        ? "Spanish (Español)"
        : "Brazilian Portuguese (Português do Brasil)";

    // Se houver GEMINI_API_KEY configurada, podemos chamar o modelo Gemini
    if (geminiApiKey) {
      try {
        const systemPrompt = `You are the AI Copilot of the "RSS3 Treinamentos" platform (RSS3 Soluções Industriais).

LANGUAGE REQUIREMENT (MANDATORY):
- You MUST answer and communicate ENTIRELY in ${targetLanguage}.
- Even if the user writes in another language, adapt your response naturally to ${targetLanguage}.

How you act:
- You are an advanced, natural, friendly, and smart conversational AI, exactly like ChatGPT.
- COMPREHENSION OF TYPOS AND SLANG:
  * Perfectly understand the user's intent even if they type with spelling errors, missing letters, mobile typos, or slang.
  * NEVER correct the user's spelling or point out mistakes. Just address their question directly with warmth and ease.
- Converse fluidly about any topic the user brings up: work, safety, technology, studies, day-to-day doubts, friendly chat, or career advice. Do not force corporate jargon.
- Be friendly, direct, smart, and human. Use emojis appropriately.
- If asked about courses, safety regulations (NR-35, NR-33, NR-12, NR-10, NR-11, NR-20), maintenance, high-pressure hydrojetting, industrial painting, or 5S methodology, you master the topic with excellence.
- The official name of the company's training platform is ALWAYS "RSS3 Treinamentos".`;

        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${geminiApiKey}`;

        // Monta o histórico conversacional
        const contentsPayload: { role: string; parts: { text: string }[] }[] = [];

        if (Array.isArray(history) && history.length > 0) {
          history.forEach((h: { role: string; text: string }) => {
            contentsPayload.push({
              role: h.role === "assistant" ? "model" : "user",
              parts: [{ text: h.text }],
            });
          });
        }

        // Mensagem atual do usuário
        contentsPayload.push({
          role: "user",
          parts: [{ text: message }],
        });

        const geminiRes = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: systemPrompt }],
            },
            contents: contentsPayload,
            generationConfig: {
              temperature: 0.8,
              maxOutputTokens: 1200,
            },
          }),
        });

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const candidateText =
            geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (candidateText) {
            return NextResponse.json({
              reply: candidateText,
              source: "gemini-live",
            });
          }
        }
      } catch {
        // Fallback para o motor local caso a requisição externa falhe
      }
    }

    // Processamento com a Base de Conhecimento Local Especializada (Zero Dependências)
    const localResult = getLocalAIResponse(message);

    return NextResponse.json({
      reply: localResult.text,
      suggestedActions: localResult.suggestedActions,
      topic: localResult.topic,
      source: "local-knowledge-engine",
    });
  } catch {
    return NextResponse.json(
      { error: "Ocorreu um erro ao processar a resposta da IA." },
      { status: 500 }
    );
  }
}
