import { NextRequest, NextResponse } from "next/server";
import { getLocalAIResponse } from "@/lib/ai-assistant-data";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Mensagem inválida." },
        { status: 400 }
      );
    }

    const geminiApiKey = process.env.GEMINI_API_KEY;

    // Se houver GEMINI_API_KEY configurada, podemos chamar o modelo Gemini
    if (geminiApiKey) {
      try {
        const systemPrompt = `Você é o "Copiloto RSS3", o assistente oficial de inteligência artificial da plataforma "RSS3 Treinamentos" (RSS3 Soluções Industriais LTDA).
Suas diretrizes fundamentais:
1. Nome oficial: "RSS3 Treinamentos" (nunca "RSS3 Academy").
2. Seu tom é profissional, técnico, didático, focado em segurança do trabalho e conformidade industrial (NR-35, NR-33, NR-12, NR-10, 5S, Lockout/Tagout).
3. Ressalte sempre que os treinamentos online cobrem a base teórica; a habilitação prática regulamentada exige treinamento presencial e validação de SST.
4. Responda em português claro, organizado com tópicos e formatação Markdown concisa.`;

        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${geminiApiKey}`;

        const geminiRes = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: `${systemPrompt}\n\nPergunta do colaborador: ${message}` }],
              },
            ],
            generationConfig: {
              temperature: 0.4,
              maxOutputTokens: 1000,
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
