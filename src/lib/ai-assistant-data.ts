export interface AICardAttachment {
  type: "course" | "mba" | "exam" | "certificate";
  id: string;
  title: string;
  description?: string;
  badge?: string;
  href: string;
  meta?: string;
}

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
  attachments?: AICardAttachment[];
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
  responses: string[];
  suggestedActions?: { label: string; href?: string; query?: string }[];
}

export const AI_KNOWLEDGE_BASE: KnowledgeSnippet[] = [
  {
    keywords: ["certificado", "certificados", "diploma", "validação", "validar", "hash", "autenticidade"],
    responses: [
      "Assim que você conclui as aulas teóricas de um curso, seu certificado fica disponível automaticamente na aba **Certificados**. Ele tem validação digital auditável com código exclusivo. Lembrando que em NRs regulamentadas, a habilitação de campo exige também o treinamento prático presencial com o instrutor!",
      "Você pode consultar e baixar seus certificados em PDF direto na aba **Certificados** do menu superior! Eles contam com verificação pública e código criptografado seguro. Precisa de ajuda com algum curso específico?",
    ],
    suggestedActions: [
      { label: "Ver Meus Certificados", href: "/certificados" },
      { label: "Validar Autenticidade", href: "/validar" },
    ],
  },
  {
    keywords: ["nr", "norma", "regulamentadora", "nr-35", "nr 35", "nr-33", "nr 33", "nr-10", "nr 10", "nr-12", "nr 12", "altura", "confinado", "eletricidade", "máquinas", "prática", "presencial", "habilitação"],
    responses: [
      "As Normas Regulamentadoras são a base de tudo na segurança industrial: NR-35 cuida de trabalho em altura, NR-33 de espaços confinados, NR-12 de máquinas e bloqueios, e NR-10 de parte elétrica. Aqui na plataforma você faz toda a formação teórica e, para atuar na prática em campo, realiza o treinamento prático com os instrutores e ASO vigente. Qual NR você precisa aprender hoje?",
      "Trabalhamos forte com as principais NRs (NR-35, NR-33, NR-10, NR-12, NR-20). O conteúdo teórico online te prepara com excelência, e a validação prática presencial garante a conformidade operacional de campo. Quer que eu te indique um curso específico de segurança?",
    ],
    suggestedActions: [
      { label: "Explorar Cursos de NRs", href: "/catalogo" },
      { label: "Consultar Desafios Técnicos", href: "/desafios" },
    ],
  },
  {
    keywords: ["offline", "sem internet", "área", "campo", "sinal", "baixar", "salvar"],
    responses: [
      "A plataforma funciona muito bem no campo sem internet! Você pode abrir e salvar os guias técnicos ou cursos, e mesmo que o sinal caia, seu progresso fica salvo no aparelho e sincroniza sozinho assim que a rede voltar. Bem prático pra quem tá na frente de serviço!",
    ],
    suggestedActions: [
      { label: "Ir para Catálogo", href: "/catalogo" },
      { label: "Ver Meu Painel", href: "/dashboard" },
    ],
  },
  {
    keywords: ["5s", "senso", "seiri", "seiton", "seiso", "seiketsu", "shitsuke", "organização", "qualidade", "lean"],
    responses: [
      "O 5S é a chave da organização: descartar o que não presta, colocar cada coisa no seu lugar demarcado, manter a área limpa inspecionando ferramentas, padronizar as regras visuais e manter a disciplina contínua todo dia. Quer dicas de como aplicar na sua bancada ou oficina?",
    ],
    suggestedActions: [
      { label: "Acessar Curso de 5S", href: "/catalogo" },
      { label: "Testar no Módulo de Desafios", href: "/desafios" },
    ],
  },
  {
    keywords: ["como usar", "navegar", "funciona o site", "onde clico", "como comeco", "primeiro acesso", "o que fazer"],
    responses: [
      "Opa! Mexer aqui é bem tranquilo. Você pode ir em **Cursos** para ver todas as aulas disponíveis, no **Meu Painel** para acompanhar suas horas e progresso, e em **Desafios** para treinar com simulados. Se concluir os módulos teóricos, seus certificados ficam salvos na aba **Certificados**. O que você tá querendo fazer primeiro?",
      "É bem simples! O menu principal te leva para tudo: nos **Cursos** você escolhe o que quer aprender, no **Meu Painel** vê seu progresso e notas, e na aba **Certificados** você baixa seus comprovantes assim que terminar as matérias. Tem alguma área que você queira achar agora?",
    ],
  },
  {
    keywords: ["oi", "ola", "eai", "opa", "fala", "salve", "hey", "hello"],
    responses: [
      "Fala aí! Tudo na paz? Como posso te ajudar hoje?",
      "Opa! Tudo bem por aí? No que posso te dar uma força agora?",
      "Olá! Tudo tranquilo? Me conta, o que você tá precisando hoje?",
      "E aí, beleza? Estou por aqui! Pode mandar sua dúvida ou o que quiser trocar de ideia.",
    ],
  },
  {
    keywords: ["tudo bem", "como vai", "tudo bom", "como voce esta", "beleza"],
    responses: [
      "Tudo ótimo por aqui, e com você? Espero que o dia esteja sendo produtivo! No que posso te ajudar hoje?",
      "Comigo tá tudo certo! Pronto pra te ajudar nos estudos ou tirar qualquer dúvida. E por aí, tudo bem?",
      "100%! Valeu por perguntar. Como posso te dar uma mão hoje?",
    ],
  },
  {
    keywords: ["bom dia"],
    responses: [
      "Bom dia! Tudo bem? Como posso te ajudar hoje?",
      "Bom dia! Tudo certo por aí? Quer saber ou tirar dúvida sobre algo?",
      "Bom dia! Tudo na paz? Em que posso te dar uma mão hoje?",
    ],
  },
  {
    keywords: ["boa tarde"],
    responses: [
      "Boa tarde! Tudo bem? Como posso te ajudar hoje?",
      "Boa tarde! Tudo tranquilo por aí? Em que posso te dar uma força?",
    ],
  },
  {
    keywords: ["boa noite"],
    responses: [
      "Boa noite! Tudo bem? Precisa de ajuda com alguma coisa hoje?",
      "Boa noite! Tudo tranquilo? Quer saber sobre algo em que eu possa ajudar?",
    ],
  },
  {
    keywords: ["obrigado", "valeu", "vlw", "obrigada", "agradecido", "tks", "thanks", "gracias"],
    responses: [
      "Imagina, tamo junto! Se precisar de mais alguma coisa, só mandar aqui! 👊",
      "Por nada! Qualquer outra dúvida é só chamar. Bons estudos e bom trabalho! 🚀",
      "De nada! Fico feliz em ajudar. Se pintar qualquer dúvida, estou por aqui! 😊",
    ],
  },
  {
    keywords: ["loto", "bloqueio", "etiquetagem", "energia zero", "lockout", "tagout"],
    responses: [
      "O LOTO (Lockout/Tagout) é aquele procedimento vital da NR-12: antes de mexer na máquina, você desliga, isola a energia (disjuntor ou válvula), põe seu cadeado individual e sua etiqueta, alivia qualquer pressão ou carga residual e testa se ela realmente não liga (energia zero). Nunca mexa sem seu cadeado próprio!",
      "Bloqueio e etiquetagem é segurança máxima! A regra de ouro é: cada profissional com seu próprio cadeado físico e etiqueta com foto/nome, garantindo energia zero antes de colocar a mão em qualquer equipamento mecânico ou elétrico.",
    ],
  },
  {
    keywords: ["espaco confinado", "confinado", "nr33", "nr-33", "pet", "vigia", "gas", "oxigenio"],
    responses: [
      "Espaço Confinado (NR-33) é assunto sério: só se entra com a PET (Permissão de Entrada e Trabalho) assinada, medição contínua dos gases (oxigênio, inflamabilidade e tóxicos), ventilação ligada e o vigia posicionado do lado de fora o tempo inteiro. Jamais entre sem autorização formal!",
      "Na NR-33 não tem jeitinho: vigia dedicado do lado de fora, teste atmosférico aprovado, PET emitida e equipe de resgate de prontidão. A segurança de quem entra depende 100% desse rigor.",
    ],
  },
  {
    keywords: ["altura", "nr35", "nr-35", "cinto", "talabarte", "queda", "ancoragem"],
    responses: [
      "Trabalho em Altura (NR-35) vale a partir de 2 metros de desnível com risco de queda. Cinto tipo paraquedista inspecionado, talabarte duplo ou trava-quedas ancorado em ponto seguro e aprovado, e a APR assinada pela equipe. Se sentir qualquer insegurança no equipamento, interrompa a subida!",
      "Na altura, cada detalhe importa: conferir costuras do cinto, travas dos mosquetões e ponto de ancoragem antes de subir. E lembre: para atuar em campo precisa do treinamento prático presencial e ASO em dia!",
    ],
  },
  {
    keywords: ["hidrojato", "hidrojateamento", "alta pressao", "bico", "pistola"],
    responses: [
      "Hidrojato de alta pressão exige respeito total: isolamento da área com cones e fita, mangueiras presas com cabos de segurança (whipcheck) contra chicoteamento, válvula de alívio rápido (dump valve) na pistola e EPI de kevlar reforçado com botina de biqueira de aço. Segurança em primeiro lugar sempre!",
    ],
  },
  {
    keywords: ["pintura", "industrial", "jateamento", "rugosidade", "tinta", "orvalho"],
    responses: [
      "Na pintura industrial, além dos EPIs para vapores químicos, tem o cuidado técnico: preparar o metal (grau Sa 2½ ou Sa 3), respeitar o ponto de orvalho (a chapa deve estar pelo menos 3°C acima) e medir as espessuras úmida e seca da película. O que você gostaria de saber com mais detalhe?",
    ],
  },
  {
    keywords: ["5s", "senso", "seiri", "seiton", "seiso", "seiketsu", "shitsuke"],
    responses: [
      "O 5S transforma o dia a dia na indústria: 1. Descartar o que não usa; 2. Organizar cada coisa no seu lugar demarcado; 3. Limpar inspecionando máquinas; 4. Padronizar as regras visuais; 5. Manter a disciplina contínua. Quer ajuda para aplicar em algum setor específico?",
    ],
  },
  {
    keywords: ["apr", "analise preliminar", "permissao de trabalho", "pt", "risco"],
    responses: [
      "A APR é o escudo da equipe antes da tarefa: você divide a atividade em etapas, prevê o que pode dar errado (energia, queda, ruído, químicos), define as barreiras de proteção e todo mundo que vai atuar assina e se alinha junto antes de começar.",
    ],
  },
  {
    keywords: ["certificado", "diploma", "como emitir", "onde vejo meu certificado"],
    responses: [
      "Assim que você conclui as aulas teóricas de um curso, seu certificado fica disponível automaticamente na aba **Certificados**. Você pode baixar o PDF oficial com código canônico de validação e QR Code. Quer que eu te oriente sobre algum curso específico?",
      "Seus certificados teóricos ficam salvos na área **Certificados** do menu. Eles possuem validação digital auditável com código único. Lembrando que em NRs práticas, a habilitação de campo depende do treino presencial com o instrutor!",
    ],
  },
  {
    keywords: ["quem e voce", "quem e tu", "o que voce faz", "o que vc faz", "seu nome", "copiloto"],
    responses: [
      "Sou o Copiloto da RSS3 Treinamentos! Estou aqui pra tirar suas dúvidas sobre a plataforma, explicar normas de segurança, trocar uma ideia sobre sua rotina industrial ou te dar dicas de cursos e carreira. Pode perguntar à vontade!",
    ],
  },
  {
    keywords: ["ajuda", "socorro", "me ajuda", "duvida"],
    responses: [
      "Claro, manda aqui! O que tá pegando? Pode ser dúvida sobre um curso, uma norma técnica ou qualquer funcionalidade do site que eu te ajudo agora mesmo.",
      "Com certeza! Me conta qual é a sua dúvida ou no que você tá com dificuldade que a gente resolve junto.",
    ],
  },
];

export function getLocalAIResponse(userText: string, locale: "pt-BR" | "en" | "es" = "pt-BR"): {
  text: string;
  suggestedActions?: { label: string; href?: string; query?: string }[];
  topic?: "platform" | "safety" | "courses" | "general";
} {
  const normalized = userText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Busca melhor correspondência na base de conhecimento local
  let bestMatch: (typeof AI_KNOWLEDGE_BASE)[0] | null = null;
  let maxScore = 0;

  for (const item of AI_KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of item.keywords) {
      const normKw = kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (normalized.includes(normKw)) {
        score += normKw.length > 3 ? 3 : 1;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && maxScore > 0 && bestMatch.responses.length > 0) {
    // Escolhe aleatoriamente uma resposta entre as opções disponíveis para ter variedade!
    const randomIndex = Math.floor(Math.random() * bestMatch.responses.length);
    const chosenResponse = bestMatch.responses[randomIndex];

    return {
      text: chosenResponse,
      suggestedActions: [
        { label: "Ver Cursos", href: "/catalogo" },
        { label: "Meu Painel", href: "/dashboard" },
      ],
      topic: "general",
    };
  }

  // Respostas de fallback naturais e variadas
  const naturalFallbacksPt = [
    "Fala aí! Entendi o que você disse. Como posso te dar uma mão com isso hoje? Se quiser explorar cursos, tirar dúvidas de segurança ou ver seu progresso, só falar!",
    "Opa, estou por aqui! Me conta mais sobre o que você precisa. Posso te ajudar com treinamentos, normas industriais, certificados ou o que você quiser saber.",
    "Beleza! Estou à disposição. Pode mandar sua dúvida de boa, seja sobre segurança no trabalho, rotina de campo ou como usar a plataforma.",
    "Legal! Como posso te ajudar a resolver isso hoje? Fique à vontade pra perguntar qualquer coisa!",
  ];

  const naturalFallbacksEn = [
    "Hey there! I got your message. How can I give you a hand today? Feel free to ask anything about safety regulations, courses, or your progress!",
    "Hello! I'm here to help. Tell me a bit more about what you're looking for, and we'll figure it out together.",
    "Hey! Anything you need regarding training, platform features or safety guidelines, just let me know!",
  ];

  const naturalFallbacksEs = [
    "¡Hola! Te entiendo perfectamente. ¿En qué te puedo dar una mano hoy? Si necesitas ayuda con cursos, normas de seguridad o certificados, ¡aquí estoy!",
    "¡Buenas! Estoy a tu disposición. Cuéntame con confianza qué duda tienes y lo resolvemos juntos.",
    "¡Hola! Cualquier consulta sobre capacitaciones, seguridad industrial o la plataforma, dime y con gusto te ayudo.",
  ];

  const fallbacks =
    locale === "en" ? naturalFallbacksEn : locale === "es" ? naturalFallbacksEs : naturalFallbacksPt;

  const chosen = fallbacks[Math.floor(Math.random() * fallbacks.length)];

  return {
    text: chosen,
    suggestedActions: [
      { label: "Ver Cursos", href: "/catalogo" },
      { label: "Meu Painel", href: "/dashboard" },
      { label: "Desafios & Provas", href: "/desafios" },
    ],
    topic: "general",
  };
}

