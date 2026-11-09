export interface AIMessage {
  id: string;
  sender: "user" | "assistant" | "system";
  text: string;
  timestamp: string;
  suggestedActions?: {
    label: string;
    href?: string;
    query?: string;
  }[];
  topic?: "platform" | "safety" | "courses" | "general";
}

export interface QuickPrompt {
  id: string;
  title: string;
  prompt: string;
  category: "platform" | "safety" | "courses" | "certification";
  iconName: string;
}

export const AI_QUICK_PROMPTS: QuickPrompt[] = [
  {
    id: "how-certificates-work",
    title: "Como funcionam os Certificados?",
    prompt: "Como funciona a emissão e validação de certificados de conclusão teórica na plataforma RSS3 Treinamentos?",
    category: "certification",
    iconName: "Award",
  },
  {
    id: "nr-requirements",
    title: "Normas Regulamentadoras e Prática",
    prompt: "Qual a diferença entre a conclusão de cursos de NRs (como NR-35 ou NR-33) no portal e a habilitação prática presencial?",
    category: "safety",
    iconName: "ShieldAlert",
  },
  {
    id: "how-to-start",
    title: "Como navegar e assistir às aulas?",
    prompt: "Como utilizo o portal para escolher um curso, assistir às aulas e acompanhar meu progresso?",
    category: "platform",
    iconName: "Compass",
  },
  {
    id: "offline-mode",
    title: "Modo Offline e Campo",
    prompt: "Como funciona o modo offline para equipes em áreas operacionais ou frentes de trabalho externas?",
    category: "platform",
    iconName: "WifiOff",
  },
  {
    id: "5s-methodology",
    title: "Metodologia 5S e Produtividade",
    prompt: "Pode me explicar os 5 sensos da metodologia 5S e como aplicar na rotina industrial?",
    category: "courses",
    iconName: "Layers",
  },
  {
    id: "nr12-lockout",
    title: "Segurança em Máquinas (NR-12 / LOTO)",
    prompt: "O que é bloqueio e etiquetagem (Lockout/Tagout - LOTO) e por que é fundamental na NR-12?",
    category: "safety",
    iconName: "Lock",
  },
];

interface KnowledgeSnippet {
  keywords: string[];
  response: string;
  suggestedActions?: { label: string; href?: string; query?: string }[];
}

export const AI_KNOWLEDGE_BASE: KnowledgeSnippet[] = [
  {
    keywords: ["certificado", "certificados", "diploma", "validação", "validar", "hash", "autenticidade"],
    response: `Na **RSS3 Treinamentos**, todo certificado emitido comprova a **Conclusão de Conteúdo Teórico**.

Principais características do nosso sistema de certificação:
1. **Identificador Canônico:** Cada certificado recebe um código exclusivo no formato \`RSS3-XXXX-XXXX-XXXX-XXXX-XXXX\`.
2. **Validação Pública Auditável:** Qualquer gestor ou auditor pode validar a autenticidade através da página [/validar](/validar).
3. **Criptografia e Imutabilidade:** O documento utiliza integridade via \`dataHash\` (SHA-256 do payload do certificado) e assinatura segura.
4. **Distinção Regulatória Obrigatória:** Para atividades regulamentadas (NR-35, NR-33, NR-10, etc.), o certificado EAD atesta a carga horária teórica. A habilitação formal e operacional exige obrigatoriamente o treinamento prático presencial com instrutor credenciado e ASO vigente.

Você pode consultar e baixar seus certificados em PDF a qualquer momento na aba **Certificados**.`,
    suggestedActions: [
      { label: "Ver Meus Certificados", href: "/certificados" },
      { label: "Validar Autenticidade", href: "/validar" },
    ],
  },
  {
    keywords: ["nr", "norma", "regulamentadora", "nr-35", "nr 35", "nr-33", "nr 33", "nr-10", "nr 10", "nr-12", "nr 12", "altura", "confinado", "eletricidade", "máquinas", "prática", "presencial", "habilitação"],
    response: `As **Normas Regulamentadoras (NRs)** são mandatórias para a garantia de integridade física e operacional nas frentes industriais da RSS3:

• **NR-35 (Trabalho em Altura):** Aborda planejamento de resgate, inspeção de EPIs (cinto tipo paraquedista, talabartes), fatores de queda e linhas de vida.
• **NR-33 (Espaços Confinados):** Foco em medição atmosférica prévia, emissão da Permissão de Entrada e Trabalho (PET), ventilação contínua e vigia treinado.
• **NR-12 (Segurança em Máquinas e Equipamentos):** Princípios de intertravamento, paradas de emergência e procedimentos rígidos de Lockout/Tagout (LOTO).
• **NR-10 (Segurança em Instalações Elétricas):** Desenergização, testes de ausência de tensão, aterramento temporário e sinalização de impedimento.

⚠️ **Aviso de Conformidade Legal:**
Conforme as diretrizes corporativas da RSS3, os módulos online cobrem a formação teórica e preparação conceitual. A aptidão para operação em campo requer a etapa prática presencial validada pela equipe de SST e instrutor credenciado.`,
    suggestedActions: [
      { label: "Explorar Cursos de NRs", href: "/catalogo" },
      { label: "Consultar Desafios Técnicos", href: "/desafios" },
    ],
  },
  {
    keywords: ["offline", "sem internet", "área", "campo", "sinal", "baixar", "salvar"],
    response: `A plataforma **RSS3 Treinamentos** foi projetada com arquitetura **Offline-First** para atender colaboradores que atuam em áreas industriais remotas ou frentes com sinal oscilante de internet.

**Como funciona:**
1. Na visualização de qualquer curso ou guia técnico, você pode salvar o conteúdo para consulta local.
2. Os dados de progresso e questionários concluídos em modo offline são salvos localmente e sincronizados de forma transparente assim que a conexão de rede for restabelecida.
3. No cabeçalho da plataforma, você sempre pode conferir o indicador de status em tempo real (**Online** ou **Modo Offline**).`,
    suggestedActions: [
      { label: "Ir para Catálogo", href: "/catalogo" },
      { label: "Ver Meu Painel", href: "/dashboard" },
    ],
  },
  {
    keywords: ["5s", "senso", "seiri", "seiton", "seiso", "seiketsu", "shitsuke", "organização", "qualidade", "lean"],
    response: `O **Programa 5S** é um dos pilares de disciplina operacional e excelência industrial da RSS3:

1. **Seiri (Utilização / Descarte):** Separar o que é estritamente necessário para a operação do que é supérfluo, eliminando ferramentas e peças obsoletas da área.
2. **Seiton (Ordenação):** "Um lugar para cada coisa, cada coisa em seu lugar". Identificação clara, demarcações de piso e acesso ergonômico.
3. **Seiso (Limpeza):** Limpar como forma de inspecionar. Detectar vazamentos, folgas, trincas ou desgastes precoces durante a limpeza das instalações.
4. **Seiketsu (Padronização e Saúde):** Criar rotinas visuais, check-lists e manter as condições de segurança e higiene padronizadas para toda a equipe.
5. **Shitsuke (Autodisciplina):** Manter os padrões continuamente através de auditorias de 5S, respeito mútuo e compromisso diário.`,
    suggestedActions: [
      { label: "Acessar Curso de 5S", href: "/catalogo" },
      { label: "Testar no Módulo de Desafios", href: "/desafios" },
    ],
  },
  {
    keywords: ["como usar", "navegar", "funciona", "site", "plataforma", "painel", "cursos", "mbas", "login", "começar"],
    response: `Bem-vindo ao **RSS3 Treinamentos**! Aqui está um guia rápido das principais áreas do portal:

• **Início:** Visão geral da plataforma, destaques de cursos e métricas corporativas.
• **Cursos (Catálogo):** Grade completa de capacitação dividida em Normas Regulamentadoras, Conhecimento Operacional, Gestão e Qualidade.
• **MBAs & Formações:** Trilhas integradas de especialização profissional de longa duração.
• **Meu Painel (Dashboard):** Seu progresso pessoal, horas acumuladas, cursos em andamento e pontuação XP.
• **Desafios & Provas:** Simulados práticos com cenários reais da rotina industrial para testar seus conhecimentos.
• **Certificados:** Emissão, download em PDF de alta qualidade e validação de autenticidade.`,
    suggestedActions: [
      { label: "Explorar Catálogo", href: "/catalogo" },
      { label: "Acessar Meu Painel", href: "/dashboard" },
    ],
  },
  {
    keywords: ["loto", "bloqueio", "etiquetagem", "energia zero", "lockout", "tagout", "segurança"],
    response: `O procedimento de **LOTO (Lockout / Tagout)** é mandatório antes de qualquer manutenção ou intervenção mecânica/elétrica:

**Etapas do Bloqueio Seguro:**
1. **Preparação:** Identificar todas as fontes de energia (elétrica, pneumática, hidráulica, mecânica e residual).
2. **Notificação:** Comunicar a todos os colaboradores da área operacional sobre o desligamento.
3. **Desligamento Seguro:** Desligar o equipamento através dos controles normais de operação.
4. **Isolamento de Energia:** Atuar nos dispositivos primários de isolamento (chaves seccionadoras, disjuntores, válvulas).
5. **Aplicação do Bloqueio e Etiqueta:** Cada profissional de manutenção deve afixar seu próprio cadeado individual e etiqueta de identificação.
6. **Alívio de Energia Residual:** Purgar linhas de ar comprimido, aliviar pressão hidráulica e descarregar capacitores.
7. **Verificação de Energia Zero:** Tentar religar o equipamento nos controles normais para comprovar que a máquina não parte.`,
    suggestedActions: [
      { label: "Curso de NR-12 e Máquinas", href: "/catalogo" },
    ],
  },
];

export function getLocalAIResponse(userText: string): {
  text: string;
  suggestedActions?: { label: string; href?: string; query?: string }[];
  topic?: "platform" | "safety" | "courses" | "general";
} {
  const normalized = userText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Busca melhor correspondência na base de conhecimento
  let bestMatch: KnowledgeSnippet | null = null;
  let maxScore = 0;

  for (const item of AI_KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of item.keywords) {
      const normKw = kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (normalized.includes(normKw)) {
        score += normKw.length > 4 ? 2 : 1;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && maxScore > 0) {
    return {
      text: bestMatch.response,
      suggestedActions: bestMatch.suggestedActions,
      topic: "safety",
    };
  }

  // Resposta padrão caso nenhuma palavra-chave específica seja encontrada
  return {
    text: `Olá! Sou o **Copiloto RSS3**, assistente inteligente de capacitação técnica e apoio operacional da RSS3 Soluções Industriais.

Posso esclarecer dúvidas sobre:
• **Normas Regulamentadoras:** Procedimentos de NR-35 (Altura), NR-33 (Confinados), NR-12 (Máquinas/LOTO) e NR-10 (Elétrica).
• **Funcionamento da Plataforma:** Como iniciar cursos, salvar módulos offline, acompanhar seu progresso e validar certificados teóricos.
• **Práticas de Campo e Metodologias:** Diretrizes de 5S, manutenção preventiva/corretiva e segurança operacional.

Selecione um dos atalhos rápidos ou digite sua pergunta específica!`,
    suggestedActions: [
      { label: "Ver Cursos Disponíveis", href: "/catalogo" },
      { label: "Como Funciona a Validação?", href: "/validar" },
      { label: "Ir para Meus Desafios", href: "/desafios" },
    ],
    topic: "general",
  };
}
