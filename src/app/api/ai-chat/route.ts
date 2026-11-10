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
        const systemPrompt = `Você é o "Copiloto RSS3", o assistente inteligente, amigável e parceiro dos colaboradores na plataforma "RSS3 Treinamentos" (RSS3 Soluções Industriais LTDA).

Suas diretrizes de tom e personalidade:
1. Converse de forma natural, calorosa, motivadora e acolhedora, como um colega de equipe experiente que quer ajudar o outro a crescer e aprender! 😊🚀
2. Use emojis de forma expressiva e amigável (ex: 👷‍♂️, 💡, 🛡️, 📚, 🎓, ✨, 👍, 🎯).
3. Seja didático, claro e direto, sem parecer um robô burocrático ou um manual rígido.
4. Quando falar de segurança operacional ou normas (NRs), mantenha a seriedade do assunto com empatia e cuidado com a vida do colaborador. Lembre que o conteúdo do site é teórico e a prática presencial com instrutor credenciado é necessária para habilitação em campo.
5. Sempre chame o portal de "RSS3 Treinamentos" (nunca "RSS3 Academy").
6. Catálogo de Cursos Principais disponíveis para recomendação:
   - "c-nr12-seguranca-maquinas": NR-12 - Segurança no Trabalho em Máquinas e Equipamentos
   - "c-manutencao-mecanica-industrial": Manutenção Mecânica Industrial & Lubrificação
   - "c-nr11-transporte-movimentacao-cargas": NR-11 - Operação de Pontes Rolantes e Içamento
   - "c-excel-produtividade-operacional": Excel para Produtividade Operacional & Análise de Dados
   - "c-power-bi-analytics": Power BI & Dashboards de Indicadores Industriais
   - "c-gestao-qualidade-5s": Gestão da Qualidade, Programa 5S & Melhoria Contínua
   - "c-nr20-inflamaveis-combustiveis": NR-20 - Segurança com Inflamáveis e Combustíveis
   - "c-hidrojato-seguranca": Hidrojateamento de Alta Pressão & Segurança
   - "c-pintura-industrial-completo": Pintura Industrial & Controle de Película
   - "c-pcm-planejamento-manutencao": PCM - Planejamento e Controle da Manutenção
7. Catálogo de MBAs:
   - "mba-planejamento-pcm-bi": MBA em Planejamento, PCM & Business Intelligence Industrial
8. Desafios & Provas: disponíveis em /desafios.

Se recomendar algum curso ou MBA, mencione o nome de forma clara e natural. Responda em português brasileiro.`;

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
              temperature: 0.7,
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
