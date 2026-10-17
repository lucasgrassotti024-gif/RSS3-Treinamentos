import { CourseDemonstration } from "@/types";

export const gestaoQualidadeCourseData: CourseDemonstration = {
  id: "c-gestao-da-qualidade",
  slug: "gestao-da-qualidade-melhoria-continua-pdca",
  title: {
    "pt-BR": "Gestão da Qualidade Industrial & Melhoria Contínua (PDCA)",
    "en": "Industrial Quality Management & Continuous Improvement (PDCA)",
    "es": "Gestión de la Calidad Industrial y Mejora Continua (PDCA)",
  },
  description: {
    "pt-BR": "Curso fundamental de Gestão da Qualidade aplicado a serviços industriais e manutenção pesada da RSS3: evolução histórica (da inspeção à Qualidade Total), ensinamentos dos grandes mestres (Deming, Juran, Ishikawa, Crosby, Feigenbaum), ferramentas de melhoria contínua, governança de terceirização e aplicação rigorosa do Ciclo PDCA.",
    "en": "Core Industrial Quality Management course for RSS3 operations: historical evolution (from inspection to TQM), quality gurus (Deming, Juran, Ishikawa, Crosby, Feigenbaum), continuous improvement tools, lean subcontracting, and rigorous PDCA cycle deployment.",
    "es": "Curso fundamental de Gestión de la Calidad Industrial: evolución histórica, gurús de la calidad, mejora continua, control de contratistas y metodología del Ciclo PDCA.",
  },
  longDescription: {
    "pt-BR": "O treinamento de Gestão da Qualidade Industrial & Melhoria Contínua da RSS3 Treinamentos capacita inspetores de pintura, encarregados de hidrojateamento, técnicos de qualidade (QA/QC) e gestores de contrato a implementar o padrão de zero defeitos em operações fabris de alta severidade. O conteúdo cobre as quatro eras da qualidade, as contribuições dos mestres que transformaram a indústria global (Deming e os 14 princípios, Juran e a trilogia da qualidade, Ishikawa e o diagrama espinha de peixe, Crosby e o zero defeito, Garvin e as dimensões da qualidade), as metodologias de análise e solução de problemas (MASP), enxugamento de processos e a aplicação sistemática do Ciclo PDCA para garantir conformidade em auditorias e satisfação máxima do cliente.",
    "en": "Empowers QA/QC inspectors, coating supervisors, and contract managers to achieve zero defects in mission-critical industrial maintenance. Covers the 4 quality eras, philosophies of global quality pioneers (Deming, Juran, Ishikawa, Crosby, Feigenbaum), root-cause analysis tools, lean supplier governance, and the iterative PDCA methodology.",
    "es": "Capacitación en control y aseguramiento de calidad (QA/QC) para supervisores y técnicos industriales. Evolución de la calidad, gurús internacionales, análisis de causa raíz, cero defectos y ciclo PDCA aplicado a campo.",
  },
  schoolId: "gestao-lideranca",
  schoolName: {
    "pt-BR": "Gestão Industrial, Tecnologia e Produtividade",
    "en": "Industrial Management, Technology & Productivity",
    "es": "Gestión Industrial, Tecnología y Productividad",
  },
  workloadHours: 24,
  level: "basic",
  modality: "online",
  isMandatory: false,
  mandatoryFor: [
    "Inspetor de Qualidade (QA/QC)",
    "Inspetor de Pintura Industrial",
    "Encarregado Operacional",
    "Supervisor de Hidrojato",
    "Líder de Contrato",
    "Técnico de Segurança do Trabalho",
  ],
  targetAudience: {
    "pt-BR": "Inspetores de qualidade, encarregados de frente, supervisores industriais, operadores qualificados e líderes técnicos da RSS3 envolvidos na entrega de serviços sem retrabalho.",
    "en": "QA/QC inspectors, blasting/coating leads, industrial supervisors, and certified technicians focused on first-time-right execution.",
    "es": "Inspectores de calidad, supervisores de pintura y chorreado, y líderes técnicos de RSS3.",
  },
  prerequisites: {
    "pt-BR": "Interesse ou atuação em procedimentos de inspeção técnica, medição de serviços ou liderança operacional.",
    "en": "Experience or interest in technical inspection protocols, jobsite QA/QC, or craft leadership.",
    "es": "Interés o experiencia en inspección técnica, control de calidad o supervisión operativa.",
  },
  modulesCount: 3,
  lessonsCount: 9,
  thumbnailGradient: "from-amber-900 via-orange-950 to-slate-950",
  coverImage: "/images/courses/gestao-qualidade.jpg",
  categories: ["qualidade-processos","gestao-produtividade"],
  badgeCode: "GQ-RSS3",
  updatedAtDate: "2026-10-16",
  modules: [
    {
      id: "mod-gq-1",
      order: 1,
      title: {
        "pt-BR": "Módulo 1: Conceitos, Evolução Histórica e as Quatro Eras da Qualidade (Aulas 01 a 03)",
        "en": "Module 1: Concepts, Historical Evolution & The Four Quality Eras (Lessons 01 to 03)",
        "es": "Módulo 1: Conceptos, Evolución Histórica y las Cuatro Eras de la Calidad (Clases 01 a 03)",
      },
      description: {
        "pt-BR": "Definições fundamentais de qualidade, a transição da era da inspeção visual para o controle estatístico e a consolidação da Gestão da Qualidade Total (TQM).",
        "en": "Core quality definitions, shifting from reactive sorting to statistical process control and Total Quality Management (TQM).",
        "es": "Definiciones fundamentales, paso de la inspección reactiva al control estadístico y Calidad Total (TQM).",
      },
      lessons: [
        {
          id: "les-gq-1-1",
          order: 1,
          title: {
            "pt-BR": "Aula 01: Gestão de Qualidade — Conceitos Fundamentais e Dimensões",
            "en": "Lesson 01: Quality Management — Fundamental Concepts & Dimensions",
            "es": "Clase 01: Gestión de Calidad — Conceptos Fundamentales y Dimensiones",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "tEMlgYvM07Q",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender os múltiplos conceitos de qualidade: conformidade com especificações, adequação ao uso e superação das expectativas do cliente industrial.",
              "en": "Understand multifaceted quality definitions: conformance to specs, fitness for use, and exceeding plant owner expectations.",
              "es": "Comprender los conceptos de calidad: conformidad con especificaciones, adecuación al uso y satisfacción del cliente.",
            },
            summaryPoints: [
              {
                "pt-BR": "Qualidade como diferencial competitivo e sobrevivência operacional em contratos de alta exigência técnica.",
                "en": "Quality as an operational differentiator and survival necessity in heavy industrial contracts.",
                "es": "La calidad como diferenciador competitivo en contratos industriales exigentes.",
              },
              {
                "pt-BR": "O custo da não-qualidade: retrabalho, perda de matéria-prima (tintas), horas ociosas e desgaste da imagem da empresa.",
                "en": "The cost of poor quality: rework, coating material waste, idle standby time, and reputational damage.",
                "es": "El costo de la no-calidad: retrabajo, desperdicio de insumos y daño reputacional.",
              },
            ],
          },
        },
        {
          id: "les-gq-1-2",
          order: 2,
          title: {
            "pt-BR": "Aula 02: As Eras da Inspeção e do Controle Estatístico de Processo",
            "en": "Lesson 02: The Inspection and Statistical Process Control Eras",
            "es": "Clase 02: Las Eras de la Inspección y del Control Estadístico de Procesos",
          },
          durationMinutes: 20,
          contentType: "video",
          videoUrl: "Zx2q-0U3Mio",
          contentDetail: {
            objective: {
              "pt-BR": "Analisar as duas primeiras fases históricas: a separação de produtos defeituosos no final da linha e a introdução de cartas de controle de Shewhart.",
              "en": "Analyze the first two quality eras: end-of-pipe sorting versus Shewhart's statistical process control charts.",
              "es": "Analizar la inspección final reactiva versus el control estadístico de procesos de Shewhart.",
            },
            summaryPoints: [
              {
                "pt-BR": "Era da Inspeção: foco reativo no produto acabado, gerando desperdício e alto custo de refugo.",
                "en": "Inspection Era: reactive post-production sorting yielding high scrap rates and wasted labor.",
                "es": "Era de la Inspección: enfoque reactivo al final del proceso con alto costo de descarte.",
              },
              {
                "pt-BR": "Era do Controle Estatístico: amostragem, monitoramento durante a execução e redução de variabilidade do processo.",
                "en": "Statistical Era: sampling, in-process variance monitoring, and statistical tolerances.",
                "es": "Era Estadística: muestreo, control de variación durante el proceso y límites de tolerancia.",
              },
            ],
          },
        },
        {
          id: "les-gq-1-3",
          order: 3,
          title: {
            "pt-BR": "Aula 03: Garantia da Qualidade e Gestão da Qualidade Total (TQM)",
            "en": "Lesson 03: Quality Assurance & Total Quality Management (TQM)",
            "es": "Clase 03: Aseguramiento de la Calidad y Gestión de la Calidad Total (TQM)",
          },
          durationMinutes: 22,
          contentType: "video",
          videoUrl: "IYhGKQI6zbA",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender a evolução para os sistemas de garantia da qualidade (normas ISO 9001) e o engajamento de todos os setores na Qualidade Total.",
              "en": "Understand the emergence of Quality Assurance (ISO 9001 systems) and company-wide Total Quality engagement.",
              "es": "Comprender los sistemas de aseguramiento de calidad (ISO 9001) y el compromiso integral de Calidad Total.",
            },
            summaryPoints: [
              {
                "pt-BR": "Garantia da Qualidade: foco em procedimentos padronizados, auditorias preventivas e confiabilidade do sistema.",
                "en": "Quality Assurance: standardized operating procedures, preventive audits, and process reliability.",
                "es": "Aseguramiento: procedimientos estandarizados, auditorías y prevención de fallas.",
              },
              {
                "pt-BR": "Qualidade Total (TQM): envolvimento de toda a organização — do ajudante de pátio à alta diretoria — com foco no cliente.",
                "en": "Total Quality Management: all-hands cultural commitment from apprentice to executive.",
                "es": "Calidad Total: compromiso de todo el personal enfocado en la satisfacción del cliente.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-gq-2",
      order: 2,
      title: {
        "pt-BR": "Módulo 2: Os Grandes Mestres da Qualidade e suas Filosofias (Aulas 04 a 06)",
        "en": "Module 2: The Global Quality Gurus & Core Philosophies (Lessons 04 to 06)",
        "es": "Módulo 2: Los Grandes Gurús de la Calidad y sus Doctrinas (Clases 04 a 06)",
      },
      description: {
        "pt-BR": "Estudo aprofundado dos princípios de Deming, Trilogia de Juran, Diagrama e Círculos de Ishikawa, o conceito de Zero Defeito de Crosby e o Controle da Qualidade Total de Feigenbaum.",
        "en": "In-depth study of Deming's 14 points, Juran's Trilogy, Ishikawa's Cause & Effect diagrams, Crosby's Zero Defects, and Feigenbaum's TQC.",
        "es": "Principios de Deming, Trilogía de Juran, Diagrama de Ishikawa, Cero Defectos de Crosby y control total de Feigenbaum.",
      },
      lessons: [
        {
          id: "les-gq-2-1",
          order: 1,
          title: {
            "pt-BR": "Aula 04: Os Mestres da Qualidade — Deming e os 14 Princípios (Parte I)",
            "en": "Lesson 04: The Quality Masters — Deming & The 14 Points (Part I)",
            "es": "Clase 04: Los Maestros de la Calidad — Deming y los 14 Principios (Parte I)",
          },
          durationMinutes: 21,
          contentType: "video",
          videoUrl: "Qrb3Rkmz-hQ",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar os 14 princípios de Edward Deming e entender a importância de eliminar o medo, banir metas numéricas arbitrárias e instituir liderança.",
              "en": "Master Deming's 14 principles: driving out fear, discarding arbitrary numerical quotas, and instituting leadership.",
              "es": "Dominar los 14 principios de Deming: eliminar el miedo, descartar metas numéricas arbitrarias y liderar.",
            },
            summaryPoints: [
              {
                "pt-BR": "Constância de propósito na melhoria contínua de produtos e serviços para garantir competitividade.",
                "en": "Constancy of purpose toward continual improvement of product and service.",
                "es": "Constancia en el propósito de mejorar productos y servicios para ser competitivos.",
              },
              {
                "pt-BR": "A maior parte dos desvios (85-94%) é causada pelo sistema/processo e não por má vontade dos colaboradores de campo.",
                "en": "Most quality defects stem from system failures rather than worker malice.",
                "es": "La mayoría de las fallas proviene del sistema y procesos, no de la mala voluntad del trabajador.",
              },
            ],
          },
        },
        {
          id: "les-gq-2-2",
          order: 2,
          title: {
            "pt-BR": "Aula 05: Os Mestres da Qualidade — Juran e Ishikawa (Parte II)",
            "en": "Lesson 05: The Quality Masters — Juran & Ishikawa (Part II)",
            "es": "Clase 05: Los Maestros de la Calidad — Juran e Ishikawa (Parte II)",
          },
          durationMinutes: 23,
          contentType: "video",
          videoUrl: "mdFfHVA8ABc",
          contentDetail: {
            objective: {
              "pt-BR": "Aplicar a Trilogia de Juran (Planejamento, Controle e Melhoria) e o Diagrama de Causa e Efeito (Espinha de Peixe 6M) de Kaoru Ishikawa.",
              "en": "Apply Juran's Trilogy (Planning, Control, Improvement) and Ishikawa's 6M Cause and Effect (Fishbone) diagram.",
              "es": "Aplicar la Trilogía de Juran y el Diagrama de Causa y Efecto (Espina de Pescado 6M) de Ishikawa.",
            },
            summaryPoints: [
              {
                "pt-BR": "Trilogia de Juran: planejar a qualidade para operar sob controle e buscar melhorias estruturadas que rompam patamares de perdas.",
                "en": "Juran's Trilogy: engineering quality upstream to control baseline and achieve breakthrough gains.",
                "es": "Trilogía de Juran: planificar, controlar y lograr mejoras que reduzcan pérdidas crónicas.",
              },
              {
                "pt-BR": "O Diagrama de Ishikawa (6M): Método, Máquina, Medida, Meio Ambiente, Mão de Obra e Material na investigação de falhas industriais.",
                "en": "Ishikawa 6M framework: Method, Machine, Measurement, Milieu, Manpower, Material for root-cause RCA.",
                "es": "El Diagrama 6M de Ishikawa: Método, Máquina, Medición, Medio Ambiente, Mano de Obra y Material.",
              },
            ],
          },
        },
        {
          id: "les-gq-2-3",
          order: 3,
          title: {
            "pt-BR": "Aula 06: Os Mestres da Qualidade — Crosby, Feigenbaum e Garvin (Parte III)",
            "en": "Lesson 06: The Quality Masters — Crosby, Feigenbaum & Garvin (Part III)",
            "es": "Clase 06: Los Maestros de la Calidad — Crosby, Feigenbaum y Garvin (Parte III)",
          },
          durationMinutes: 20,
          contentType: "video",
          videoUrl: "njNjlxLjUok",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender os 4 absolutos da qualidade de Philip Crosby ('Zero Defeito' e 'Fazer Certo da Primeira Vez') e a abordagem de Feigenbaum.",
              "en": "Internalize Crosby's four absolutes ('Zero Defects' & 'Right First Time') and Feigenbaum's holistic quality costs.",
              "es": "Comprender el concepto de 'Cero Defectos' de Crosby y el control total de calidad de Feigenbaum.",
            },
            summaryPoints: [
              {
                "pt-BR": "Philip Crosby: qualidade é conformidade com requisitos; o padrão de desempenho deve ser zero defeitos e a medida da qualidade é o preço da não-conformidade.",
                "en": "Crosby: quality means conformance; the performance benchmark is zero defects; metric is cost of non-conformance.",
                "es": "Crosby: calidad es conformidad; el estándar es cero defectos y se mide por el costo de la no conformidad.",
              },
              {
                "pt-BR": "Feigenbaum: a qualidade deve ser construída desde o projeto inicial até a entrega pós-venda, envolvendo toda a cadeia.",
                "en": "Feigenbaum: quality must be designed in from cradle to grave, encompassing supply chain integration.",
                "es": "Feigenbaum: la calidad debe integrarse en toda la cadena de valor.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-gq-3",
      order: 3,
      title: {
        "pt-BR": "Módulo 3: Melhoria Contínua, Terceirização Enxuta e o Ciclo PDCA na Prática (Aulas 07 a 10)",
        "en": "Module 3: Continuous Improvement, Lean Sourcing & PDCA in Practice (Lessons 07 to 10)",
        "es": "Módulo 3: Mejora Continua, Tercerización Esbelta y el Ciclo PDCA en la Práctica (Clases 07 a 10)",
      },
      description: {
        "pt-BR": "Metodologias de melhoria contínua (Kaizen), gestão e qualificação de fornecedores/terceiros e a aplicação prática do Ciclo PDCA em campo.",
        "en": "Continuous improvement frameworks (Kaizen), subcontractor quality assurance, and hands-on jobsite PDCA execution.",
        "es": "Metodología Kaizen de mejora continua, aseguramiento de contratistas y aplicación práctica del Ciclo PDCA.",
      },
      lessons: [
        {
          id: "les-gq-3-1",
          order: 1,
          title: {
            "pt-BR": "Aula 07: Melhoria Contínua — Filosofia Kaizen e Ferramentas Práticas",
            "en": "Lesson 07: Continuous Improvement — Kaizen Philosophy & Practical Tools",
            "es": "Clase 07: Mejora Continua — Filosofía Kaizen y Herramientas Prácticas",
          },
          durationMinutes: 19,
          contentType: "video",
          videoUrl: "xdG9sh0DpxY",
          contentDetail: {
            objective: {
              "pt-BR": "Aplicar a filosofia Kaizen (hoje melhor que ontem, amanhã melhor que hoje) para pequenas melhorias diárias com baixo investimento.",
              "en": "Apply Kaizen principles (today better than yesterday, tomorrow better than today) for daily incremental site enhancements.",
              "es": "Aplicar la filosofía Kaizen para pequeñas mejoras diarias continuas en el frente de trabajo.",
            },
            summaryPoints: [
              {
                "pt-BR": "Diferença entre inovação radical (alto custo, saltos espaçados) e melhoria contínua Kaizen (constante, gradual e participativa).",
                "en": "Contrasting breakthrough innovation with steady, grass-roots Kaizen problem solving.",
                "es": "Diferencia entre innovación disruptiva costosa y mejora continua gradual participativa.",
              },
              {
                "pt-BR": "Combate aos desperdícios industriais: tempo de espera por liberação de área, movimentação desnecessária e retrabalho de jato.",
                "en": "Eliminating industrial mudas: permit-to-work wait times, excessive travel, and blasting rework.",
                "es": "Eliminación de desperdicios en planta: esperas por permisos de trabajo y movimientos innecesarios.",
              },
            ],
          },
        },
        {
          id: "les-gq-3-2",
          order: 2,
          title: {
            "pt-BR": "Aula 08: Enxugamento e Gestão da Qualidade de Terceiros e Fornecedores",
            "en": "Lesson 08: Lean Operations & Subcontractor Quality Assurance",
            "es": "Clase 08: Operaciones Esbeltas y Gestión de Calidad de Terceros",
          },
          durationMinutes: 21,
          contentType: "video",
          videoUrl: "lw4WlAyZD1o",
          contentDetail: {
            objective: {
              "pt-BR": "Garantir que subcontratados e fornecedores de insumos críticos atendam aos mesmos padrões de qualidade e segurança da RSS3.",
              "en": "Ensure critical material suppliers and craft subcontractors meet uncompromising RSS3 QA/QC standards.",
              "es": "Asegurar que subcontratistas y proveedores cumplan con los mismos estándares de calidad de RSS3.",
            },
            summaryPoints: [
              {
                "pt-BR": "Qualificação técnica e homologação prévia de fornecedores de abrasivos de jateamento e sistemas de pintura.",
                "en": "Technical vetting and qualification of abrasive media vendors and industrial coating suppliers.",
                "es": "Homologación previa de proveedores de abrasivos de hidrojet y recubrimientos.",
              },
              {
                "pt-BR": "Auditorias de campo e responsabilidade solidária: o cliente enxerga a RSS3 como garantidora da qualidade final de toda a frente.",
                "en": "Site audits and joint liability: plant owners hold RSS3 accountable for turnkey excellence.",
                "es": "Auditorías de campo: el cliente evalúa a RSS3 por la calidad total de la intervención.",
              },
            ],
          },
        },
        {
          id: "les-gq-3-3",
          order: 3,
          title: {
            "pt-BR": "Aula 10: O Ciclo PDCA Aplicado à Resolução de Problemas Industriais",
            "en": "Lesson 10: The PDCA Cycle Applied to Industrial Problem Solving",
            "es": "Clase 10: El Ciclo PDCA Aplicado a la Resolución de Problemas Industriales",
          },
          durationMinutes: 24,
          contentType: "video",
          videoUrl: "b0aen6d4sDQ",
          contentDetail: {
            objective: {
              "pt-BR": "Executar as 4 etapas do Ciclo PDCA (Plan, Do, Check, Act) para diagnosticar causas de não-conformidade e padronizar soluções definitivas.",
              "en": "Deploy the 4 stages of PDCA (Plan, Do, Check, Act) to isolate non-conformance root causes and standardize permanent fixes.",
              "es": "Ejecutar las 4 etapas del Ciclo PDCA (Planificar, Hacer, Verificar, Actuar) para resolver desvíos y estandarizar.",
            },
            summaryPoints: [
              {
                "pt-BR": "Plan (Planejar): identificar o desvio, analisar o fenômeno, descobrir a causa raiz com 5 Porquês e criar o plano 5W2H.",
                "en": "Plan: isolate deviation, investigate root cause via 5 Whys, and formulate a 5W2H action plan.",
                "es": "Planificar: identificar el desvío, analizar causa raíz con los 5 Porqués y diseñar el plan 5W2H.",
              },
              {
                "pt-BR": "Do (Executar), Check (Verificar resultados nas medições de campo) e Act (Padronizar procedimento operacional para não reincidir).",
                "en": "Do (Execute), Check (Verify against field gauges), Act (Standardize SOPs to block recurrence).",
                "es": "Hacer (ejecutar), Verificar (comprobar resultados en campo) y Actuar (estandarizar para evitar recurrencia).",
              },
            ],
          },
        },
      ],
    },
  ],
  finalAssessment: {
    id: "exam-gestao-da-qualidade",
    order: 10,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 25,
    questionsCount: 5,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação teórica e prática sobre os princípios de Gestão da Qualidade Industrial e Ciclo PDCA. Nota mínima de 70% para emissão do certificado.",
      "en": "Final examination on industrial quality management and PDCA deployment. 70% passing score.",
      "es": "Evaluación final de gestión de la calidad industrial y ciclo PDCA. Nota mínima de 70%.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência — Gestão da Qualidade Industrial",
      "en": "Final Competency Exam — Industrial Quality Management",
      "es": "Evaluación Final de Competencias — Gestión de la Calidad Industrial",
    },
    description: {
      "pt-BR": "Validação de domínio em conceitos fundamentais de qualidade, eras históricas, ensinamentos de Deming, Ishikawa (6M), Crosby (Zero Defeito) e Ciclo PDCA.",
      "en": "Validates proficiency in quality eras, Deming principles, Ishikawa 6M analysis, Crosby's Zero Defects, and practical PDCA.",
      "es": "Valida competencias en eras de la calidad, principios de Deming, diagrama 6M, Cero Defectos y ciclo PDCA.",
    },
    questions: [
      {
        id: "q-gq-1",
        order: 1,
        question: {
          "pt-BR": "1. Qual a diferença fundamental entre a 'Era da Inspeção' e a 'Era da Garantia da Qualidade' na evolução industrial?",
          "en": "1. What is the fundamental difference between the 'Inspection Era' and the 'Quality Assurance Era'?",
          "es": "1. ¿Cuál es la diferencia fundamental entre la 'Era de la Inspección' y la 'Era del Aseguramiento de la Calidad'?",
        },
        options: [
          {
            id: "opt-gq-1-a",
            text: {
              "pt-BR": "A inspeção é reativa e foca apenas em descartar produtos defeituosos no final da linha, enquanto a garantia da qualidade é preventiva e foca na padronização de processos para evitar que os defeitos ocorram.",
              "en": "Inspection is reactive, sorting defective items at the end of the line, whereas quality assurance is preventive, standardizing processes to prevent defects upstream.",
              "es": "La inspección es reactiva y descarta defectos al final del proceso, mientras que el aseguramiento es preventivo y estandariza procesos para evitar fallas.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A garantia da qualidade previne a geração de não-conformidades através de processos robustos e auditáveis.",
              "en": "Correct! Quality assurance focuses on process prevention rather than reactive sorting.",
              "es": "¡Correcto! El aseguramiento de calidad previene fallas mediante estandarización y control preventivo.",
            },
          },
          {
            id: "opt-gq-1-b",
            text: {
              "pt-BR": "A inspeção utiliza inteligência artificial, enquanto a garantia da qualidade depende exclusivamente de avaliações manuais de operários.",
              "en": "Inspection uses artificial intelligence, whereas quality assurance relies solely on manual worker checks.",
              "es": "La inspección utiliza inteligencia artificial y el aseguramiento depende de chequeos manuales.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A inspeção foi a primeira fase histórica fabril, anterior à automação.",
              "en": "Incorrect. The inspection era was the earliest historical manufacturing stage.",
              "es": "Incorrecto. La inspección fue la fase histórica más temprana.",
            },
          },
          {
            id: "opt-gq-1-c",
            text: {
              "pt-BR": "Não há diferença; ambos os termos significam exatamente a mesma coisa na gestão industrial.",
              "en": "There is no difference; both terms are completely synonymous.",
              "es": "No hay diferencia; ambos términos significan exactamente lo mismo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Representam paradigmas completamente distintos de controle e prevenção.",
              "en": "Incorrect. They represent radically different quality management paradigms.",
              "es": "Incorrecto. Representan etapas y filosofías muy distintas.",
            },
          },
        ],
      },
      {
        id: "q-gq-2",
        order: 2,
        question: {
          "pt-BR": "2. No Diagrama de Causa e Efeito de Kaoru Ishikawa (Diagrama 6M), quais são as 6 categorias utilizadas para investigar a raiz de um problema operacional?",
          "en": "2. In Ishikawa's Cause & Effect Diagram (6M), what are the 6 categories used to isolate operational root causes?",
          "es": "2. En el Diagrama de Causa y Efecto de Ishikawa (6M), ¿cuáles son las 6 categorías para investigar fallas?",
        },
        options: [
          {
            id: "opt-gq-2-a",
            text: {
              "pt-BR": "Método, Máquina, Medida, Meio Ambiente, Mão de Obra e Material.",
              "en": "Method, Machine, Measurement, Milieu (Environment), Manpower, and Material.",
              "es": "Método, Máquina, Medición, Medio Ambiente, Mano de Obra y Material.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Os 6Ms cobrem todas as fontes possíveis de variação em um processo industrial.",
              "en": "Correct! The 6Ms systematically cover all potential sources of industrial process variance.",
              "es": "¡Correcto! Los 6Ms agrupan todas las posibles causas de variación en la industria.",
            },
          },
          {
            id: "opt-gq-2-b",
            text: {
              "pt-BR": "Marketing, Mercado, Monetização, Margem, Mídia e Motivação.",
              "en": "Marketing, Market, Monetization, Margin, Media, and Motivation.",
              "es": "Marketing, Mercado, Monetización, Margen, Medios y Motivación.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Esses termos pertencem ao marketing comercial, não à qualidade de engenharia industrial.",
              "en": "Incorrect. These are commercial marketing terms, not manufacturing quality categories.",
              "es": "Incorrecto. Son conceptos comerciales ajenos al control de procesos de ingeniería.",
            },
          },
          {
            id: "opt-gq-2-c",
            text: {
              "pt-BR": "Manutenção, Mecânica, Montagem, Motores, Metros e Minutos.",
              "en": "Maintenance, Mechanics, Mounting, Motors, Meters, and Minutes.",
              "es": "Mantenimiento, Mecánica, Montaje, Motores, Metros y Minutos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A estrutura clássica de Ishikawa estabelecida mundialmente é Método, Máquina, Medida, Meio Ambiente, Mão de Obra e Material.",
              "en": "Incorrect. The classic Ishikawa categories are Method, Machine, Measurement, Environment, Manpower, Material.",
              "es": "Incorrecto. La clasificación formal es Método, Máquina, Medición, Medio Ambiente, Mano de Obra y Material.",
            },
          },
        ],
      },
      {
        id: "q-gq-3",
        order: 3,
        question: {
          "pt-BR": "3. Qual é a essência do princípio de 'Zero Defeito' proposto por Philip Crosby para a prestação de serviços e manutenção industrial?",
          "en": "3. What is the core essence of Philip Crosby's 'Zero Defects' philosophy in industrial maintenance?",
          "es": "3. ¿Cuál es la esencia del concepto de 'Cero Defectos' propuesto por Philip Crosby?",
        },
        options: [
          {
            id: "opt-gq-3-a",
            text: {
              "pt-BR": "Fazer certo da primeira vez: a empresa não deve aceitar uma margem estatística de tolerância para o erro como algo natural, mas sim perseguir a conformidade total com os requisitos acordados.",
              "en": "Do it right the first time: organizations should reject comfortable scrap margins and relentlessly pursue total conformance to requirements.",
              "es": "Hacerlo bien a la primera: la organización no debe aceptar márgenes cómodos de error, sino perseguir la conformidad total con los requisitos.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Crosby demonstrou que aceitar uma porcentagem de erros induz a equipe ao desleixo, enquanto o padrão de zero defeitos eleva a cultura técnica.",
              "en": "Correct! Crosby argued that accepting defect tolerances breeds complacency, while zero defects elevates technical culture.",
              "es": "¡Correcto! Tolerar defectos fomenta el descuido; el estándar de cero defectos promueve la excelencia.",
            },
          },
          {
            id: "opt-gq-3-b",
            text: {
              "pt-BR": "Ocultar os relatórios de não-conformidade do fiscal da obra para que a pontuação do contrato pareça perfeita.",
              "en": "Concealing non-conformance reports from the plant inspector to make scores appear flawless.",
              "es": "Ocultar las no conformidades a la supervisión para simular un contrato perfecto.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e antiético. Zero defeito é conquistado na prática pelo processo, nunca pela omissão de dados.",
              "en": "Incorrect and unethical. Zero defects is achieved through process rigor, never data tampering.",
              "es": "Incorrecto y contrario a la ética profesional de RSS3.",
            },
          },
          {
            id: "opt-gq-3-c",
            text: {
              "pt-BR": "Apenas produzir peças descartáveis que não necessitem de nenhuma vistoria técnica.",
              "en": "Exclusively manufacturing disposable parts that require zero technical oversight.",
              "es": "Fabricar únicamente piezas descartables que no requieran inspección.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Aplica-se a serviços de alta responsabilidade técnica e segurança.",
              "en": "Incorrect. The philosophy applies to mission-critical engineering services.",
              "es": "Incorrecto. Se aplica a servicios industriales de alta criticidad.",
            },
          },
        ],
      },
      {
        id: "q-gq-4",
        order: 4,
        question: {
          "pt-BR": "4. No que consiste a filosofia Kaizen de melhoria contínua aplicada no canteiro de obras e frentes de hidrojateamento e pintura?",
          "en": "4. What constitutes the Kaizen philosophy when deployed on site during hydroblasting and painting operations?",
          "es": "4. ¿En qué consiste la filosofía Kaizen de mejora continua aplicada en obras y paradas de planta?",
        },
        options: [
          {
            id: "opt-gq-4-a",
            text: {
              "pt-BR": "Pequenas melhorias diárias, graduais e contínuas, envolvendo a participação ativa de todos os colaboradores, eliminando desperdícios sem grandes aportes de capital.",
              "en": "Small, incremental, daily enhancements involving all craftspersons to eliminate operational waste with minimal capital investment.",
              "es": "Pequeñas mejoras diarias y continuas con participación de todo el equipo, eliminando desperdicios con baja inversión.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O Kaizen valoriza a inteligência coletiva da equipe de campo para otimizar processos continuamente.",
              "en": "Correct! Kaizen harnesses frontline crew insights to incrementally optimize procedures.",
              "es": "¡Correcto! Kaizen fomenta el compromiso diario del personal para optimizar su propio trabajo.",
            },
          },
          {
            id: "opt-gq-4-b",
            text: {
              "pt-BR": "Comprar equipamentos importados caríssimos a cada 6 meses e descartar os antigos sem capacitar a equipe.",
              "en": "Purchasing expensive imported machinery every 6 months while discarding old units without training.",
              "es": "Comprar maquinaria importada costosa cada 6 meses descartando la anterior sin capacitar.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Kaizen prioriza melhoria de processos, organização e conhecimento humano antes de gastos vultosos.",
              "en": "Incorrect. Kaizen focuses on process refinement and human ingenuity before capital expenditure.",
              "es": "Incorrecto. Kaizen prioriza procesos y destreza humana antes que gastos excesivos.",
            },
          },
          {
            id: "opt-gq-4-c",
            text: {
              "pt-BR": "Trabalhar sem nenhuma regra ou procedimento para testar a criatividade dos operadores em áreas de risco.",
              "en": "Working without safety rules or SOPs to test worker creativity in hazardous areas.",
              "es": "Operar sin procedimientos para probar la creatividad de los trabajadores en áreas de riesgo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e perigoso. O Kaizen parte sempre de um padrão estável para então aprimorá-lo de forma segura.",
              "en": "Incorrect and dangerous. Kaizen strictly requires a stable standard baseline to improve upon.",
              "es": "Incorrecto y peligroso. La mejora continua exige estándares estables de seguridad.",
            },
          },
        ],
      },
      {
        id: "q-gq-5",
        order: 5,
        question: {
          "pt-BR": "5. No Ciclo PDCA, qual é a ação primordial da etapa 'Act' (Agir/Atuar Corretivamente) quando a verificação ('Check') confirma que o novo método reduziu com sucesso os desvios operacionais?",
          "en": "5. In the PDCA Cycle, what is the primary objective of 'Act' when 'Check' confirms the new method successfully reduced variances?",
          "es": "5. En el Ciclo PDCA, ¿cuál es la acción fundamental de 'Act' (Actuar) cuando 'Check' valida que el nuevo método eliminó el desvío?",
        },
        options: [
          {
            id: "opt-gq-5-a",
            text: {
              "pt-BR": "Padronizar o procedimento operacional (criar/atualizar POP e treinar todas as equipes), transformando a melhoria no novo padrão oficial da empresa para que o problema não volte a ocorrer.",
              "en": "Standardize the SOP (update operating procedures and train all crews), locking in the improvement as the official company baseline.",
              "es": "Estandarizar el procedimiento (actualizar el POP y capacitar a todas las cuadrillas), convirtiendo la mejora en la nueva norma.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Sem a padronização e o treinamento na fase 'Act', o processo retrocede ao estado anterior com o passar do tempo.",
              "en": "Correct! Without standardizing and training during 'Act', processes inevitably backslide into past bad habits.",
              "es": "¡Correcto! Estandarizar consolida el nuevo nivel de desempeño y evita recaídas.",
            },
          },
          {
            id: "opt-gq-5-b",
            text: {
              "pt-BR": "Apagar todas as anotações e retornar ao método antigo que causava retrabalho.",
              "en": "Discard all notes and revert to the former failure-prone method.",
              "es": "Borrar los registros y volver al método antiguo que causaba retrabajo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A finalidade do PDCA é a evolução contínua, nunca o retrocesso.",
              "en": "Incorrect. PDCA drives forward progress, never backward regression.",
              "es": "Incorrecto. El propósito del PDCA es avanzar, nunca retroceder.",
            },
          },
          {
            id: "opt-gq-5-c",
            text: {
              "pt-BR": "Ignorar o resultado e esperar que um novo acidente aconteça para iniciar outro ciclo.",
              "en": "Ignore findings and wait for another incident before starting a new cycle.",
              "es": "Ignorar el resultado y esperar a que ocurra otro incidente.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A etapa 'Act' consolida o ganho obtido no processo.",
              "en": "Incorrect. 'Act' cements and institutionalizes verified operational gains.",
              "es": "Incorrecto. La etapa Act consolida la mejora en la rutina diaria.",
            },
          },
        ],
      },
    ],
  },
};
