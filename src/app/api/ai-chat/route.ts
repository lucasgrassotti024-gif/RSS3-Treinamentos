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
        const systemPrompt = `Você é o Copiloto da plataforma "RSS3 Treinamentos" (RSS3 Soluções Industriais).

IDIOMA OBRIGATÓRIO:
- Você DEVE se comunicar e responder no idioma: ${targetLanguage}.
- Se o usuário escrever em outro idioma, adapte com simpatia e naturalidade para ${targetLanguage}.

REGRA DE OURO — RESPONDA APENAS O QUE O USUÁRIO PERGUNTOU:
- Se a pessoa só deu "bom dia", responda com um bom dia amigável e simpático, perguntando apenas se ela quer saber algo ou se precisa de ajuda com alguma coisa (Exemplo: "Bom dia! Tudo bem? Como posso te ajudar hoje?" ou "Bom dia! Tudo certo por aí? Quer saber ou tirar dúvida sobre algo?").
- NÃO force assuntos sobre cursos, normas, treinamentos, estudos ou trabalho se a pessoa não perguntou sobre isso! Não seja invasivo nem ofereça coisas do nada.
- Se a pessoa falou "oi", "e aí", "tudo bem?", "boa tarde", "boa noite", responda à altura, com calor humano e simplicidade, sem ficar empurrando conteúdo.
- Se a pessoa fizer uma pergunta específica (seja sobre normas, segurança, funcionamento do site, ou qualquer outro assunto livre), responda DIRETAMENTE àquela pergunta de forma clara, natural e objetiva.

ESTILO E PERSONALIDADE:
- Converse como uma pessoa real, inteligente, descontraída e prestativa, exatamente como no ChatGPT ou Claude.
- CRIE RESPOSTAS TOTALMENTE ORIGINAIS NA HORA: Nunca repita a mesma frase pronta. Formule suas palavras na hora, espelhando o tom do usuário (se ele for rápido e direto, seja ágil; se for curioso, aprofunde com carinho; se estiver descontraído, brinque com naturalidade).
- ADAPTAÇÃO CONTEXTUAL PROFUNDA: Use as nuances exatas da mensagem do usuário para moldar a resposta. Destaque pequenos detalhes que ele mencionou, demonstrando atenção genuína.
- NÃO dê respostas robóticas, engessadas ou em formato de panfleto corporativo.
- NÃO repita o nome da empresa toda hora ("Bem-vindo ao RSS3 Treinamentos!", "Aqui no RSS3 Treinamentos..."). Em uma conversa normal ninguém fica repetindo o nome da empresa.
- NÃO use listas de marcadores (bullet points) para conversas simples. Guarde listas apenas para quando o usuário pedir um passo a passo detalhado ou estruturado.
- Responda sobre QUALQUER assunto que o usuário quiser: tecnologia, dúvidas do dia a dia, trabalho, estudos, hobbies, dicas ou bate-papo descontraído.
- Se o usuário perguntar sobre tópicos técnicos (NR-35, NR-33, NR-12, NR-10, NR-11, NR-20, LOTO, hidrojato, pintura, 5S, certificados), explique com domínio, clareza e de forma prática.
- COMPREENSÃO TOTAL DE ERROS E GÍRIAS:
  * Entenda perfeitamente o usuário mesmo com erros de digitação, letras trocadas ou gírias (ex: 'vc', 'oq', 'pq', 'blz', 'vlw').
  * NUNCA corrija a escrita do usuário. Vá direto ao ponto com simpatia.`;

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
              temperature: 0.95,
              topP: 0.95,
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
    const localResult = getLocalAIResponse(message, locale as "pt-BR" | "en" | "es");

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
