import { NextRequest, NextResponse } from "next/server";
import { getLocalAIResponse } from "@/lib/ai-assistant-data";
import { DEMO_COURSES, DEMO_MBAS, DEMO_SCHOOLS } from "@/lib/mock-data";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history, locale = "pt-BR", memoryNotes = [] } = body;

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

    // Resumo dos cursos e MBAs disponíveis na plataforma para o Copiloto consultar na hora
    const coursesSummary = DEMO_COURSES.map(
      (c) => `• [Curso] ${c.title["pt-BR"] || c.title.en} (Carga: ${c.workloadHours}h, Módulos: ${c.modulesCount}, Aulas: ${c.lessonsCount}, ID: ${c.id}) - ${c.description["pt-BR"] || c.description.en}`
    ).join("\n");

    const mbasSummary = DEMO_MBAS.map(
      (m) => `• [MBA / Formação] ${m.title["pt-BR"] || m.title.en} (Carga: ${m.totalHours}h, Slug: ${m.slug}) - ${m.description["pt-BR"] || m.description.en}`
    ).join("\n");

    const schoolsSummary = DEMO_SCHOOLS.map(
      (s) => `• [Escola] ${s.name["pt-BR"] || s.name.en}: ${s.description["pt-BR"] || s.description.en}`
    ).join("\n");

    // Formata o que a IA já aprendeu sobre o usuário em conversas anteriores
    const userMemorySection = Array.isArray(memoryNotes) && memoryNotes.length > 0
      ? `\nMEMÓRIA CONTÍNUA APRENDIDA SOBRE ESTE USUÁRIO:\n${memoryNotes.map((n: string) => `* ${n}`).join("\n")}\nUtilize essas informações naturalmente na conversa sempre que fizer sentido, sem parecer invasivo.\n`
      : "";

    // Se houver GEMINI_API_KEY configurada, podemos chamar o modelo Gemini
    if (geminiApiKey) {
      try {
        const systemPrompt = `Você é o Copiloto inteligente da plataforma "RSS3 Treinamentos" (RSS3 Soluções Industriais).

IDIOMA OBRIGATÓRIO:
- Você DEVE responder no idioma: ${targetLanguage}.
- Adapte-se com naturalidade para ${targetLanguage} em qualquer situação.
${userMemorySection}
APRENDIZADO CONTÍNUO (MEMÓRIA PERMANENTE):
- Você aprende continuamente com o usuário ao longo do tempo. Se ele compartilhar detalhes pessoais ou preferências úteis (ex: nome, cargo/função, onde trabalha, temas ou cursos preferidos, preferências de resposta curta ou detalhada), você registra isso com precisão.
- Se você detectar um novo fato duradouro e relevante sobre o usuário nesta mensagem (ex: nome dele, profissão, etc.), anexe no final absoluto da sua resposta uma linha no formato:
[MEMORIA: O usuário se chama X e atua como Y / prefere Z]
(Obs: Não inclua essa tag para conversas triviais, apenas para informações reais do usuário).

ENVIO DE CARDS INTERATIVOS NO CHAT:
- Quando o usuário pedir ou você recomendar um curso, MBA, certificado, prova ou desafio, você PODE anexar cards clicáveis no chat!
- Para mandar um card para o usuário, inclua no final da mensagem uma tag no formato:
  * Para curso: [CARD: curso:id_do_curso] (Ex: [CARD: curso:c-hidrojato-seguranca] ou [CARD: curso:c-nr12] ou [CARD: curso:c-nr35])
  * Para MBA: [CARD: mba:id_do_mba] (Ex: [CARD: mba:mba-gestao-manutencao])
  * Para Certificados: [CARD: certificado:meus-certificados]
  * Para Provas/Desafios: [CARD: prova:desafios-geral]
- Você pode enviar 1 ou até 2 cards quando fizer sentido. Eles aparecerão como cards visuais clicáveis embaixo da sua resposta.

CONHECIMENTO EM TEMPO REAL DO PRÓPRIO SITE / PLATAFORMA:
Você tem acesso completo aos dados do site atual. Quando o usuário perguntar sobre o que tem no site, cursos, escolas, certificados ou MBAs, você sabe exatamente o que existe:
ESCOLAS DO SITE:
${schoolsSummary}

CURSOS DISPONÍVEIS NO CATÁLOGO:
${coursesSummary}

FORMAÇÕES & MBAS:
${mbasSummary}

FUNCIONALIDADES DO SITE:
- Catálogo de Cursos (/catalogo): Onde o usuário se inscreve e assiste às aulas.
- Meu Painel (/dashboard): Visualiza progresso, horas acumuladas, cursos em andamento e pontuação XP.
- Desafios & Provas (/desafios): Simulados práticos de campo com cenários reais para fixação e pontuação.
- Certificados (/certificados): Emissão e download de certificados em PDF com autenticação em duas camadas (hash canônico e QR Code).
- Validação Pública (/validar): Qualquer auditor pode conferir o certificado digitando o código canônico (RSS3-XXXX-XXXX-XXXX).
- Modo Offline: Permite aos colaboradores salvar aulas e guias técnicos para consulta em áreas sem internet.

CAPACIDADE DE PESQUISA E CONHECIMENTO GERAL (INTERNET & MUNDO):
- Você possui vasto conhecimento de mundo, ciência, tecnologia, notícias, cultura, matemática, história e segurança do trabalho.
- Leia a mensagem do usuário com atenção total e crie a resposta NA HORA, personalizada exclusivamente para o que ele escreveu.
- Se ele perguntar sobre o site, use o conhecimento interno acima.
- Se ele perguntar sobre coisas da internet, normas técnicas (NRs brasileiras, OSHA, ISO, ABNT), engenharia, química, programação, dicas de estudo ou vida cotidiana, use todo o seu conhecimento global e responda com precisão.

REGRA DE OURO — RESPONDA EXATAMENTE O QUE O USUÁRIO PERGUNTOU:
- Se for uma saudação curta ("bom dia", "oi", "e aí"), responda de volta com simpatia e pergunte como pode ajudar. NÃO empurre cursos se ele não pediu.
- Se for uma pergunta específica (técnica, curiosidade, ajuda no site ou conversa aleatória), responda DIRETAMENTE com clareza e naturalidade.

PERSONALIDADE:
- Amigável, inteligente, humano e direto ao ponto, no estilo do ChatGPT ou Claude.
- Sem respostas engessadas ou panfletos repetitivos.
- Compreensão total de gírias, erros de digitação e internetês. Nunca critique o usuário.`;

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
          let candidateText =
            geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (candidateText) {
            let learnedFact: string | null = null;
            const memoryMatch = candidateText.match(/\[MEMORIA:\s*(.*?)\]/i);
            if (memoryMatch) {
              learnedFact = memoryMatch[1].trim();
              candidateText = candidateText.replace(/\[MEMORIA:\s*(.*?)\]/i, "").trim();
            }

            // Extrai tags de cards [CARD: tipo:id]
            const cardRequests: { type: string; id: string }[] = [];
            const cardRegex = /\[CARD:\s*([a-zA-Z0-9_-]+):([a-zA-Z0-9_-]+)\]/gi;
            let match: RegExpExecArray | null;
            while ((match = cardRegex.exec(candidateText)) !== null) {
              cardRequests.push({ type: match[1].toLowerCase(), id: match[2] });
            }
            candidateText = candidateText.replace(/\[CARD:\s*[a-zA-Z0-9_-]+:[a-zA-Z0-9_-]+\]/gi, "").trim();

            return NextResponse.json({
              reply: candidateText,
              learnedFact,
              cardRequests,
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
