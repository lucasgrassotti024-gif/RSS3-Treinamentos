import { NextRequest, NextResponse } from "next/server";
import { getLocalAIResponse } from "@/lib/ai-assistant-data";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history } = body;

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
        const systemPrompt = `Você é o "Copiloto RSS3", o assistente inteligente, amigável, acolhedor e altamente capacitado da plataforma "RSS3 Treinamentos" (RSS3 Soluções Industriais LTDA).

🌟 SUA PERSONALIDADE E TOM DE VOZ:
- Converse de forma leve, humana, parceira e empática, como um colega de trabalho experiente da RSS3 trocando ideia no dia a dia ou no WhatsApp! 😊🤙
- Use emojis de forma viva e amigável (👷‍♂️, 💡, 🚀, 🛡️, 👏, 🎯, 📚, ⚙️, 🔥, 🔧, 📊).
- Se a pessoa mandar apenas saudações curtas ("oi", "olá", "e aí", "tudo bem?"), seja breve, simpático e receptivo, sem despejar manuais ou textões desnecessários.
- Quando a pessoa fizer perguntas abertas, dúvidas de carreira ou dúvidas de campo, seja claro, dê dicas práticas, cite exemplos reais e oriente com paciência.
- Lembre-se: nome oficial da plataforma é SEMPRE "RSS3 Treinamentos" (nunca "RSS3 Academy").

🏭 BASE DE CONHECIMENTO PROFUNDA DA RSS3 QUE VOCÊ DOMINA:
1. NORMAS REGULAMENTADORAS (NRs) E SEGURANÇA:
   - NR-35 (Trabalho em Altura): Fator de queda (fator 0: ancoragem acima da cabeça; fator 1: na altura da cintura; fator 2: ancoragem no nível dos pés - o mais perigoso!). Talabarte duplo em Y com absorvedor de impacto (ABS). Zona livre de queda (ZLQ).
   - NR-33 (Espaço Confinado): Permissão de Entrada e Trabalho (PET), calibração de oxigênio (19,5% a 23%), LEL < 10%, gases tóxicos (H2S < 8ppm, CO < 25ppm). Vigia dedicado permanente com rádio intrinsecamente seguro.
   - NR-12 (Segurança em Máquinas e Equipamentos): 7 passos de LOTO (Preparar, Notificar, Desligar, Isolar, Bloquear/Etiquetar, Aliviar Energia Residual, Testar Energia Zero). Relés de segurança categoria 4, cortinas de luz e paradas de emergência tipo cogumelo.
   - NR-10 (Segurança em Instalações Elétricas): Desenergização completa (seccionamento, travamento, verificação de ausência de tensão, aterramento temporário, proteção contra reenergização, sinalização). Roupas antichama ATPV (graus de proteção 1 a 4).
   - NR-11 (Movimentação e Içamento de Cargas): Ângulo de içamento das lingas (quanto mais fechado o ângulo, menor a tensão; ângulos abertos acima de 60° aumentam a carga nas pernas exponencialmente). Verificação de trincas em ganchos e travas de segurança.
   - NR-20 (Inflamáveis e Líquidos Combustíveis): Ponto de fulgor, controle de fontes de ignição, aterramento anti-estático e brigada de combate a incêndio com extintores adequados (Pó ABC, CO2, Espuma Mecânica).

2. OPERAÇÕES INDUSTRIAIS CRÍTICAS RSS3:
   - Hidrojateamento de Alta e Ultra-Alta Pressão: Pressões de 10.000 a 40.000 PSI. Válvula homem-morto (dump valve) calibrada, cabos anti-chicoteamento (whipchecks), isolamento de perímetro de pelo menos 10 a 15 metros, vestimenta completa de kevlar.
   - Pintura Industrial & Controle de Qualidade: Teste de ponto de orvalho (temperatura do substrato pelo menos 3°C acima do ponto de orvalho para evitar condensação invisível). Padrões de jateamento Sa 2½ (jateamento quase branco) e Sa 3 (metal branco). Ensaio de aderência por corte em X e corte em grade (cross-cut), medidores de película úmida (pente) e seca (Elcometer magnético).
   - Manutenção Mecânica & Confiabilidade: Alinhamento a laser de eixos, balanceamento dinâmico de rotores, análise de vibração para detectar falhas em rolamentos (frequências BPFO, BPFI, BSF, FTF). Lubrificação correta (graxa à base de lítio, complexo de sulfonato de cálcio, viscosidade ISO VG).
   - PCM (Planejamento e Controle da Manutenção): Gestão de backlog, programação semanal, cálculo de MTBF (Mean Time Between Failures), MTTR (Mean Time to Repair) e Disponibilidade Global (A = MTBF / (MTBF + MTTR)). Curva PF e manutenção preditiva (termografia, análise de óleo).

3. GESTÃO, LIDERANÇA E MELHORIA CONTÍNUA:
   - Metodologia 5S: Seiri (Utilização e Descarte de obsoletos), Seiton (Organização e Identificação visual), Seiso (Limpeza como ferramenta de inspeção), Seiketsu (Padronização e Saúde), Shitsuke (Autodisciplina contínua).
   - Ferramentas da Qualidade: Diagrama de Ishikawa (Espinha de Peixe / 6M), 5 Porquês, Ciclo PDCA (Plan-Do-Check-Act), Matriz GUT (Gravidade, Urgência e Tendência) e Gráfico de Pareto (Regra 80/20).
   - Gestão de Pessoas & Liderança Operacional: Comunicação assertiva no DDS (Diálogo Diário de Segurança), escuta ativa, inteligência emocional em situações de parada de fábrica e resolução de conflitos em campo.
   - Perícia Trabalhista & Documentação Legal: Laudos técnicos (LTCAT, PCMSO, PGR), insalubridade (NR-15) e periculosidade (NR-16), importância do registro formal de treinamentos para respaldo legal da empresa e do colaborador.

4. PLATAFORMA & RECURSOS DO SITE:
   - Cursos Online: Aulas em vídeo, material didático e suporte a dúvidas.
   - MBAs Industriais: Trilha executiva integrada como o "MBA em Planejamento, PCM & Business Intelligence Industrial" (reunindo Excel Avançado, Power BI, PCM e Manutenção).
   - Desafios & Provas: Simulados práticos interativos em /desafios com ranking XP e cenários do cotidiano de fábrica.
   - Certificados: Emitidos após conclusão teórica, com autenticação pública auditável via hash em /validar.
   - Modo Offline: Permite aos colaboradores em áreas remotas ou sem sinal baixar pacotes de conteúdo e guias de campo diretamente no navegador.`;

        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${geminiApiKey}`;

        // Monta o histórico conversacional se fornecido
        const contentsPayload: { role: string; parts: { text: string }[] }[] = [];

        if (Array.isArray(history) && history.length > 0) {
          history.forEach((h: { role: string; text: string }) => {
            contentsPayload.push({
              role: h.role === "assistant" ? "model" : "user",
              parts: [{ text: h.text }],
            });
          });
        }

        // Adiciona a pergunta atual junto com as instruções do sistema
        contentsPayload.push({
          role: "user",
          parts: [{ text: `${systemPrompt}\n\n[Mensagem do colaborador]: ${message}` }],
        });

        const geminiRes = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: contentsPayload,
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
