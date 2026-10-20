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
    order: 14,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 50,
    questionsCount: 10,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação final sobre conceitos e ferramentas de Gestão da Qualidade Total, 5S e Melhoria Contínua. Nota mínima de 70% para emissão do certificado.",
      "en": "Final examination on Total Quality Management, 5S frameworks, and continuous improvement. 70% passing score.",
      "es": "Evaluación final de gestión de calidad total, metodología 5S y mejora continua. Calificación mínima de 70%.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência — Gestão da Qualidade Industrial",
      "en": "Final Competency Exam — Industrial Quality Management",
      "es": "Evaluación Final de Competencias — Gestión de la Calidad Industrial",
    },
    description: {
      "pt-BR": "Validação de domínio em Ciclo PDCA, Diagrama de Ishikawa (6M), Análise de Pareto (80/20), Auditoria e Sensos do 5S, Controle Estatístico de Processo (Cp/Cpk), Análise FMEA (RPN), Não Conformidades e Ações Corretivas (ISO 9001) e governança regulatória.",
      "en": "Validates proficiency in PDCA Cycles, Ishikawa 6M root cause, Pareto 80/20 analysis, 5S audits, Statistical Process Control (Cp/Cpk), FMEA risk scoring (RPN), ISO 9001 corrective actions, and compliance.",
      "es": "Valida competencias en Ciclo PDCA, Diagrama de Ishikawa 6M, Pareto 80/20, auditorías 5S, Control Estadístico (Cp/Cpk), matriz FMEA (NPR), no conformidades ISO 9001 y cumplimiento normativo.",
    },
    questions: [
      {
        id: "q-gq-1",
        order: 1,
        question: {
          "pt-BR": "Cenário Operacional: Na aplicação do Ciclo PDCA (Plan-Do-Check-Act) para solucionar um surto de bolhas e desplacamento prematuro na pintura de tanques industriais, a equipe identificou a causa-raiz e testou um novo método de controle de umidade relativa antes da aplicação. A etapa 'Check' (Verificar) confirmou que o índice de aderência atingiu 100% de conformidade técnica. Qual deve ser a conduta obrigatória na etapa 'Act' (Agir/Atuar Corretivamente)?",
          "en": "Operational Scenario: Applying the PDCA cycle to resolve blistering and premature detachment on tank coatings, the team identified root cause and piloted a humidity monitoring protocol prior to spraying. The 'Check' stage confirmed 100% adhesion compliance. What is the mandatory protocol during 'Act'?",
          "es": "Escenario Operativo: Aplicando el ciclo PDCA para eliminar ampollas y desprendimiento prematuro de pintura en estanques, el equipo identificó la causa y probó un control de humedad relativa previo a la aplicación. 'Check' confirmó 100% de adherencia. ¿Cuál es la acción obligatoria en 'Act' (Actuar)?",
        },
        options: [
          {
            id: "opt-gq-1-a",
            text: {
              "pt-BR": "Apagar os registros de teste e voltar a aplicar a tinta no método antigo para economizar tempo de preparo.",
              "en": "Discard testing data and revert to the old spraying method to save surface prep time.",
              "es": "Borrar los registros de prueba y volver al método antiguo para ahorrar tiempo de preparación.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O PDCA visa à melhoria contínua e à sustentação de ganhos, nunca ao retrocesso.",
              "en": "Incorrect. PDCA locks in operational gains, never permitting regression.",
              "es": "Incorrecto. El PDCA busca consolidar mejoras, nunca retroceder a prácticas deficientes.",
            },
          },
          {
            id: "opt-gq-1-b",
            text: {
              "pt-BR": "Padronizar o novo procedimento através da revisão formal do Procedimento Operacional Padrão (POP), atualizar as folhas de inspeção de pintura (FIP) e treinar 100% dos pintores e inspetores na RSS3 Treinamentos para consolidar o novo padrão e impedir a reincidência da falha.",
              "en": "Standardize the successful method by revising the Standard Operating Procedure (SOP), updating Coating Inspection Reports (CIR), and training 100% of painters and QC inspectors in RSS3 Treinamentos to lock in the baseline and prevent recurrence.",
              "es": "Estandarizar el método mediante la actualización formal del Procedimiento Operativo (POP), modificar las hojas de inspección de pintura y capacitar al 100% de los pintores e inspectores en RSS3 Treinamentos para asegurar que la falla no vuelva a repetirse.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Na fase 'Act', a padronização e o treinamento são as únicas ferramentas que sustentam o ganho de qualidade e evitam que a equipe retorne aos hábitos antigos.",
              "en": "Correct! During 'Act', documentation updates and crew training lock in standard operating baselines, preventing backsliding.",
              "es": "¡Correcto! Estandarizar y capacitar al personal en 'Act' asegura que el nuevo estándar se mantenga en el tiempo.",
            },
          },
          {
            id: "opt-gq-1-c",
            text: {
              "pt-BR": "Aguardar que o cliente reclame formalmente antes de alterar qualquer documento ou folha de processo.",
              "en": "Wait until the client files a formal commercial dispute before amending any work instruction.",
              "es": "Esperar a que el cliente presente un reclamo formal antes de modificar cualquier procedimiento.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A gestão da qualidade ISO 9001 é proativa e preventiva, não reativa a reclamações de clientes.",
              "en": "Incorrect. ISO 9001 quality management is proactive and preventive, not passively reactive.",
              "es": "Incorrecto. La calidad preventiva actúa antes de la inconformidad del cliente.",
            },
          },
          {
            id: "opt-gq-1-d",
            text: {
              "pt-BR": "Comprar imediatamente novos compressores importados de alto custo sem alterar a rotina de trabalho.",
              "en": "Immediately purchase expensive imported compressors without modifying frontline operational routines.",
              "es": "Comprar compresores importados costosos de inmediato sin ajustar la rutina operativa.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O problema identificado era metodológico/ambiental, não carência de novos compressores.",
              "en": "Incorrect. The verified root cause was procedural and climatic, not lack of machinery.",
              "es": "Incorrecto. La causa era procedimental y climática, no falta de maquinaria.",
            },
          },
        ],
      },
      {
        id: "q-gq-2",
        order: 2,
        question: {
          "pt-BR": "Cenário Operacional: Em uma auditoria de qualidade na frente de hidrojateamento, constatou-se que a produtividade caiu 35% e ocorreram 4 vazamentos de mangueira no turno. Para investigar as causas, a liderança elabora um Diagrama de Causa e Efeito (Ishikawa / 6M). Em qual categoria do '6M' deve ser classificado o fato de que 'os operadores estavam utilizando mangueiras com malha de aço com prazo de teste hidrostático vencido há 60 dias'?",
          "en": "Operational Scenario: In a hydroblasting quality audit, throughput dropped 35% with 4 hose leaks in one shift. To investigate causes, leadership builds a Fishbone (Ishikawa 6M) diagram. Under which '6M' category should 'operators were using steel-braided hoses with hydrostatic pressure testing expired by 60 days' be categorized?",
          "es": "Escenario Operativo: En una auditoría de hidrojet, el rendimiento cayó 35% y hubo 4 fugas en mangueras. Al elaborar un Diagrama de Ishikawa 6M, ¿en qué categoría debe registrarse que 'los operadores utilizaban mangueras con prueba hidrostática vencida hace 60 días'?",
        },
        options: [
          {
            id: "opt-gq-2-a",
            text: {
              "pt-BR": "Meio Ambiente (condições climáticas de temperatura e vento na planta).",
              "en": "Environment (atmospheric temperature and wind conditions at the plant).",
              "es": "Medio Ambiente (condiciones climáticas y ambientales de la planta).",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Refere-se a equipamento/ferramenta de trabalho com manutenção preventiva atrasada.",
              "en": "Incorrect. This directly involves pressurized tooling with overdue preventive maintenance.",
              "es": "Incorrecto. Se refiere a herramientas y equipos de trabajo con mantenimiento vencido.",
            },
          },
          {
            id: "opt-gq-2-b",
            text: {
              "pt-BR": "Máquina / Equipamento (ferramentas, maquinários e componentes pressurizados utilizados na operação).",
              "en": "Machine / Equipment (pressurized tools, machinery, and operational components deployed on the job).",
              "es": "Máquina / Equipo (herramientas, maquinaria y componentes presurizados utilizados en la tarea).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Mangueiras de ultra-alta pressão são componentes mecânicos da máquina/ferramenta de hidrojato, cuja integridade física e testes hidrostáticos periódicos enquadram-se na dimensão Máquina/Equipamento.",
              "en": "Correct! High-pressure hoses are machine hardware components whose physical integrity falls under the Machine category of the 6M.",
              "es": "¡Correcto! Las mangueras presurizadas forman parte de los equipos y componentes de trabajo.",
            },
          },
          {
            id: "opt-gq-2-c",
            text: {
              "pt-BR": "Medida (instrumentos calibrados de leitura de espessura de filme seco).",
              "en": "Measurement (calibrated gauges used for measuring dry film thickness).",
              "es": "Medición (instrumentos de calibración y verificación de película seca).",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Medida envolve instrumentos de aferição e metrologia (manômetros, micrômetros, etc.).",
              "en": "Incorrect. Measurement involves inspection gauges and metrology tools.",
              "es": "Incorrecto. Medición se refiere a instrumentos de metrología.",
            },
          },
          {
            id: "opt-gq-2-d",
            text: {
              "pt-BR": "Matéria-Prima (qualidade da água pura e abrasivos minerais fornecidos pelo cliente).",
              "en": "Materials (quality of water supply and mineral abrasives provided by client).",
              "es": "Materia Prima (calidad del agua y abrasivos provistos por el cliente).",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Mangueira flexível é ferramental durável de trabalho, não insumo consumível de processo.",
              "en": "Incorrect. Hoses are capital equipment tools, not consumable raw materials.",
              "es": "Incorrecto. La manguera es un equipo duradero, no un insumo consumible.",
            },
          },
        ],
      },
      {
        id: "q-gq-3",
        order: 3,
        question: {
          "pt-BR": "Cenário Operacional: Em um projeto de pintura industrial na RSS3, foram registrados 200 apontamentos de retrabalho no mês. O setor de qualidade compilou a frequência dos defeitos e aplicou o Princípio de Pareto (Regra 80/20). Os dados mostraram: Escorridos de tinta = 110 casos (55%); Casca de laranja = 50 casos (25%); Contaminação por poeira = 20 casos (10%); Porosidade/Pinholes = 12 casos (6%); Outros = 8 casos (4%). Qual decisão gerencial deve ser tomada prioritariamente com base no gráfico de Pareto?",
          "en": "Operational Scenario: In an industrial coating project, 200 rework defects were logged in one month. Quality compiled defect frequencies and applied the Pareto Principle (80/20 Rule): Sags & Runs = 110 (55%); Orange Peel = 50 (25%); Dust Contamination = 20 (10%); Pinholes = 12 (6%); Others = 8 (4%). What management decision must be prioritized based on Pareto?",
          "es": "Escenario Operativo: En un proyecto de pintura, se registraron 200 retrabajos en el mes. Aplicando Pareto (80/20): Chorreo de pintura = 110 (55%); Piel de naranja = 50 (25%); Polvo = 20 (10%); Poros = 12 (6%); Otros = 8 (4%). ¿Qué decisión prioritaria debe tomarse según Pareto?",
        },
        options: [
          {
            id: "opt-gq-3-a",
            text: {
              "pt-BR": "Concentrar os esforços imediatos de engenharia, ajuste de diluição e treinamento dos pintores nas causas de 'Escorridos' e 'Casca de Laranja', pois esses dois problemas sozinhos somam 80% de todo o retrabalho da obra.",
              "en": "Focus immediate engineering efforts, thinning adjustment, and gun technique training on 'Sags/Runs' and 'Orange Peel', since these two defect types represent 80% of all site rework.",
              "es": "Concentrar esfuerzos de ingeniería, ajuste de dilución y técnica de aplicación en 'Chorreos' y 'Piel de Naranja', ya que ambos suman el 80% de todos los retrabajos de la obra.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O Gráfico de Pareto prioriza os 'poucos vitais' frente aos 'muitos triviais': solucionar os dois primeiros itens (80% dos defeitos) produz o maior impacto com o menor consumo de recursos.",
              "en": "Correct! The Pareto Chart separates the 'vital few' from the 'trivial many': fixing the top two defect types (80% total) yields maximum quality return with optimized effort.",
              "es": "¡Correcto! Pareto enfoca en los 'pocos vitales': atacar los 2 primeros ítems elimina el 80% de los problemas.",
            },
          },
          {
            id: "opt-gq-3-b",
            text: {
              "pt-BR": "Paralisar a obra inteira por 3 semanas para focar exclusivamente na categoria 'Outros' que representa apenas 4% dos casos.",
              "en": "Shut down site operations for 3 weeks to focus exclusively on 'Others' which accounts for only 4% of issues.",
              "es": "Paralizar la obra 3 semanas para investigar únicamente la categoría 'Otros' que representa solo el 4%.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Focar nos 'muitos triviais' consome tempo e recursos sem resolver a raiz dos problemas volumosos.",
              "en": "Incorrect. Chasing trivial outliers consumes heavy resources while leaving major cost drivers unaddressed.",
              "es": "Incorrecto. Dedicar recursos a problemas marginales desatiende el grueso de las no conformidades.",
            },
          },
          {
            id: "opt-gq-3-c",
            text: {
              "pt-BR": "Demir imediatamente todos os pintores e fechar o departamento de qualidade.",
              "en": "Immediately fire all painters and dismantle the site quality department.",
              "es": "Despedir a todos los pintores y disolver el departamento de calidad.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo. Qualidade gerencia processos e competências técnicas.",
              "en": "Incorrect and absurd. Quality management centers on process stability and workforce development.",
              "es": "Incorrecto y destructivo. La calidad se construye mejorando procesos y entrenando cuadrillas.",
            },
          },
          {
            id: "opt-gq-3-d",
            text: {
              "pt-BR": "Ignorar os dados estatísticos porque medições de espessura de tinta não interferem no custo da obra.",
              "en": "Ignore statistical data under the belief that paint thickness variations do not impact contract costs.",
              "es": "Ignorar los datos porque el espesor de pintura no tiene impacto en los costos de obra.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Retrabalho em pintura gera despesas vultosas com lixamento, consumo excessivo de tinta e atraso no cronograma.",
              "en": "Incorrect. Coating rework generates severe expenses in blasting, paint overconsumption, and schedule delay.",
              "es": "Incorrecto. El retrabajo genera sobrecostos directos en mano de obra y materiales.",
            },
          },
        ],
      },
      {
        id: "q-gq-4",
        order: 4,
        question: {
          "pt-BR": "Cenário Operacional: Na implantação do Programa 5S em uma base operacional de montagem de andaimes e manutenção da RSS3, o auditor encontra tubos enferrujados misturados com tubos novos, braçadeiras com rosca espanada armazenadas junto a braçadeiras novas, e ferramentas de medição sem calibrar espalhadas pelo chão. Qual dos sensos do 5S deve ser aplicado imediatamente para sanar esse problema primário?",
          "en": "Operational Scenario: In a 5S audit at an RSS3 scaffolding and maintenance yard, the auditor spots corroded tubes mixed with brand-new stock, stripped clamps stored together with certified clamps, and uncalibrated gauges strewn on the floor. Which 5S pillar must be deployed first to resolve this?",
          "es": "Escenario Operativo: En una auditoría 5S en el patio de andamios de RSS3, el auditor encuentra tubos oxidados mezclados con tubos nuevos, abrazaderas dañadas junto a piezas certificadas y herramientas tiradas en el piso. ¿Qué pilar del 5S debe aplicarse de inmediato?",
        },
        options: [
          {
            id: "opt-gq-4-a",
            text: {
              "pt-BR": "Seiri (Senso de Utilização / Descarte): separar o que é útil do que é inútil ou defeituoso, descartando ou enviando para sucata/reforma imediata as peças sem condições seguras de uso e liberando espaço.",
              "en": "Seiri (Sort / Clearing): separate useful items from unneeded or damaged materials, red-tagging and scrapping or quarantining defective clamps and corroded tubes to reclaim space and ensure site safety.",
              "es": "Seiri (Sentido de Utilización / Descarte): separar lo útil de lo inútil o dañado, desechando o enviando a reparación/chatarra los materiales no aptos y despejando el área de trabajo.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O primeiro senso (Seiri) elimina o que é desnecessário ou perigoso. Manter braçadeiras defeituosas misturadas com peças boas é causa direta de acidentes graves em montagem de andaime.",
              "en": "Correct! Seiri (Sorting) eliminates hazards and clutter. Mixing stripped clamps with certified hardware is a direct cause of scaffold collapse.",
              "es": "¡Correcto! Seiri elimina lo inservible y peligroso, evitando que se utilicen piezas defectuosas en armados de altura.",
            },
          },
          {
            id: "opt-gq-4-b",
            text: {
              "pt-BR": "Pintar todas as peças defeituosas com tinta brilhante para esconder a ferrugem sem descartar nada.",
              "en": "Paint all defective items with glossy paint to conceal corrosion without discarding anything.",
              "es": "Pintar las piezas oxidadas para disimular el desgaste sin descartar ningún componente.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e criminoso. Esconder defeitos estruturais em componentes de andaime compromete a integridade física de trabalhadores em altura.",
              "en": "Incorrect and criminal. Camouflaging structural defects in scaffolding components directly jeopardizes life.",
              "es": "Incorrecto y peligroso. Ocultar fallas estructurales compromete la vida de los trabajadores en altura.",
            },
          },
          {
            id: "opt-gq-4-c",
            text: {
              "pt-BR": "Shitsuke (Disciplina): apenas pedir aos funcionários que rezem antes de iniciar a jornada de trabalho.",
              "en": "Shitsuke (Discipline): simply asking workers to meditate before clocking in.",
              "es": "Shitsuke (Disciplina): pedir al personal que medite antes de comenzar el turno.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A disciplina no 5S refere-se à manutenção contínua e ao respeito aos padrões operacionais estabelecidos.",
              "en": "Incorrect. Shitsuke requires upholding and auditing established operational standards.",
              "es": "Incorrecto. La autodisciplina consiste en cumplir rigurosamente los estándares establecidos.",
            },
          },
          {
            id: "opt-gq-4-d",
            text: {
              "pt-BR": "Comprar mais 500 braçadeiras defeituosas no mercado paralelo porque são mais baratas.",
              "en": "Procuring 500 more defective clamps on the secondary market because they are cheaper.",
              "es": "Comprar más abrazaderas usadas sin certificación porque son más económicas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e proibido pelas diretrizes de suprimentos e segurança da RSS3.",
              "en": "Incorrect. Directly violates RSS3 safety and quality procurement mandates.",
              "es": "Incorrecto. Viola los estándares de calidad y seguridad de RSS3.",
            },
          },
        ],
      },
      {
        id: "q-gq-5",
        order: 5,
        question: {
          "pt-BR": "Cenário Operacional: No Controle Estatístico de Processo (CEP) aplicado à espessura de película seca (EPS) em pintura industrial especificada em 250 µm ± 20 µm (Limite Superior de Especificação LSE = 270 µm; Limite Inferior LIE = 230 µm), os cálculos de amostragem resultaram em uma capacidade de processo com Cpk = 0,65. O que esse índice Cpk revela sobre a qualidade do processo de pintura da equipe?",
          "en": "Operational Scenario: In Statistical Process Control (SPC) for dry film thickness (DFT) specified at 250 µm ± 20 µm (USL = 270 µm; LSL = 230 µm), sampling analysis calculates Cpk = 0.65. What does a Cpk of 0.65 reveal regarding the team's coating process capability?",
          "es": "Escenario Operativo: En el Control Estadístico de Procesos (CEP) de espesor de pintura especificado en 250 µm ± 20 µm (LSE = 270 µm; LIE = 230 µm), los cálculos arrojan un Cpk = 0,65. ¿Qué indica este valor sobre la capacidad del proceso?",
        },
        options: [
          {
            id: "opt-gq-5-a",
            text: {
              "pt-BR": "O processo é de classe mundial e produz zero defeitos por milhão de oportunidades (Six Sigma).",
              "en": "The process is world-class producing near-zero defects per million opportunities (Six Sigma level).",
              "es": "El proceso es de clase mundial con cero defectos por millón de oportunidades (Six Sigma).",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Processos classe mundial exigem Cpk maior ou igual a 1,33 (ou 1,67).",
              "en": "Incorrect. Capable world-class processes require Cpk >= 1.33 (or >= 1.67).",
              "es": "Incorrecto. Procesos capaces requieren Cpk >= 1,33.",
            },
          },
          {
            id: "opt-gq-5-b",
            text: {
              "pt-BR": "O processo é considerado 'Incapaz' (Cpk < 1,00); a dispersão das espessuras ultrapassa os limites de tolerância ou o processo está descentralizado, gerando alta probabilidade de peças fora de especificação (espessura insuficiente ou sobrecamada excessiva com risco de trincas).",
              "en": "The process is deemed 'Incapable' (Cpk < 1.00); thickness dispersion exceeds tolerance limits or is off-center, producing high likelihood of non-conforming product (under-thickness corrosion or over-thickness mudcracking).",
              "es": "El proceso se considera 'Incapaz' (Cpk < 1,00); la dispersión de espesores supera los límites de tolerancia o está descentrado, generando alta probabilidad de piezas no conformes (falta de espesor o exceso con agrietamiento).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Um Cpk abaixo de 1,00 indica que a variação natural do processo excede a largura da especificação ou a média está deslocada para próximo dos limites, exigindo ações corretivas imediatas.",
              "en": "Correct! A Cpk < 1.00 indicates process variation exceeds specification limits or the mean is dangerously shifted, demanding immediate root-cause correction.",
              "es": "¡Correcto! Cpk < 1,00 significa que el proceso genera defectos y no cumple los límites de especificación del cliente.",
            },
          },
          {
            id: "opt-gq-5-c",
            text: {
              "pt-BR": "Significa que a equipe de pintura pode desligar todos os medidores magnéticos de espessura.",
              "en": "It means the painting crew can turn off all magnetic dry film thickness gauges.",
              "es": "Significa que la cuadrilla de pintura puede dejar de medir espesores magnéticos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Processo incapaz exige aumento imediato da frequência de inspeção e controle rigoroso.",
              "en": "Incorrect. An incapable process demands tightened inspection frequency and intensive controls.",
              "es": "Incorrecto. Un proceso incapaz exige intensificar el control e inspección.",
            },
          },
          {
            id: "opt-gq-5-d",
            text: {
              "pt-BR": "O valor de Cpk não possui nenhuma relação com a qualidade ou espessura da pintura.",
              "en": "Cpk has no statistical connection to quality or coating thickness.",
              "es": "El Cpk no tiene ninguna relación con la calidad del recubrimiento.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O Cpk é o indicador estatístico universal de capacidade e conformidade em processos industriais.",
              "en": "Incorrect. Cpk is the global statistical metric for process capability and conformance.",
              "es": "Incorrecto. Es el indicador universal de capacidad de procesos industriales.",
            },
          },
        ],
      },
      {
        id: "q-gq-6",
        order: 6,
        question: {
          "pt-BR": "Cenário Operacional: Na metodologia FMEA (Análise de Modos de Falha e Efeitos) aplicada à operação de hidrojato de alta pressão, o grupo de trabalho avaliou o modo de falha 'Rompimento de mangueira pressurizada': Severidade (S) = 9 (risco de lesão grave por injeção fluida); Ocorrência (O) = 4 (moderada, histórico de 1 evento a cada 6 meses); Detecção (D) = 5 (probabilidade moderada de detecção antes da falha em inspeção visual diária). Qual é o Número de Prioridade de Risco (RPN / NPR = S × O × D) e a diretriz técnica de ação?",
          "en": "Operational Scenario: In FMEA applied to high-pressure hydroblasting, the team evaluates the failure mode 'Bursting of high-pressure hose': Severity (S) = 9 (severe fluid injection injury risk); Occurrence (O) = 4 (moderate, 1 incident per 6 months); Detection (D) = 5 (moderate pre-failure detectability via visual inspection). What is the Risk Priority Number (RPN = S × O × D) and the resulting technical priority?",
          "es": "Escenario Operativo: En un análisis FMEA aplicado a hidrojet, se evalúa la falla 'Rotura de manguera presurizada': Severidad (S) = 9 (lesión grave por inyección de fluido); Ocurrencia (O) = 4 (moderada); Detección (D) = 5 (detección visual moderada). ¿Cuál es el Número de Prioridad de Riesgo (NPR = S × O × D) y la acción requerida?",
        },
        options: [
          {
            id: "opt-gq-6-a",
            text: {
              "pt-BR": "RPN = 18; risco insignificante que não exige nenhuma medida preventiva.",
              "en": "RPN = 18; negligible risk requiring zero preventive action.",
              "es": "NPR = 18; riesgo insignificante que no requiere medidas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O cálculo de RPN é multiplicativo: 9 × 4 × 5 = 180, não 18.",
              "en": "Incorrect. RPN is multiplicative: 9 × 4 × 5 = 180, not 18.",
              "es": "Incorrecto. El cálculo es multiplicativo: 9 × 4 × 5 = 180.",
            },
          },
          {
            id: "opt-gq-6-b",
            text: {
              "pt-BR": "RPN = 180 (9 × 4 × 5); trata-se de um risco crítico de alta prioridade devido à severidade extrema (9), exigindo implementação imediata de barreiras preventivas (como camisas de contenção anti-chicoteamento, controle rígido de horas de pressurização e ensaios hidrostáticos periódicos) para reduzir a Ocorrência e melhorar a Detecção.",
              "en": "RPN = 180 (9 × 4 × 5); this represents a critical high-priority risk driven by severe consequences (9), demanding immediate preventive barriers (such as whip-check containment sleeves, strict operational hour logging, and periodic hydrostatic proofs) to reduce Occurrence and improve Detection.",
              "es": "NPR = 180 (9 × 4 × 5); representa un riesgo crítico de alta prioridad por su extrema severidad (9), requiriendo medidas preventivas inmediatas (fundas de contención anti-latigazo, control de horas de uso y pruebas hidrostáticas periódicas) para reducir Ocurrencia y mejorar Detección.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! RPN de 180 com Severidade 9 exige plano de ação prioritário com barreiras duras de engenharia para evitar incidentes fatais com injeção sob alta pressão.",
              "en": "Correct! An RPN of 180 with Severity 9 mandates prioritized action plans with engineered controls to prevent catastrophic fluid injection injuries.",
              "es": "¡Correcto! Un NPR de 180 con severidad 9 exige acciones prioritarias inmediatas y controles de ingeniería.",
            },
          },
          {
            id: "opt-gq-6-c",
            text: {
              "pt-BR": "RPN = 945; basta colar fita adesiva em volta da mangueira para solucionar.",
              "en": "RPN = 945; wrapping electrical tape around the hose is sufficient.",
              "es": "NPR = 945; envolver cinta adhesiva en la manguera es suficiente.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto matematicamente e absurdo operacionalmente. Fita adesiva não suporta alta pressão e a matemática está errada.",
              "en": "Incorrect. Mathematically flawed and tape cannot contain high-pressure fluids.",
              "es": "Incorrecto y peligroso. La cinta adhesiva no contiene presiones industriales.",
            },
          },
          {
            id: "opt-gq-6-d",
            text: {
              "pt-BR": "O FMEA só se aplica à indústria aeroespacial, não tendo validade em serviços operacionais industriais.",
              "en": "FMEA only applies to aerospace manufacturing and has no utility in industrial field services.",
              "es": "El FMEA solo se aplica a la industria aeroespacial y no sirve en mantenimiento industrial.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O FMEA é amplamente empregado na confiabilidade e segurança de operações industriais de alto risco.",
              "en": "Incorrect. FMEA is universally applied across heavy industrial maintenance and high-risk field operations.",
              "es": "Incorrecto. FMEA es una herramienta estándar de gestión de riesgos y calidad en plantas industriales.",
            },
          },
        ],
      },
      {
        id: "q-gq-7",
        order: 7,
        question: {
          "pt-BR": "Cenário Operacional: Em conformidade com a norma ABNT NBR ISO 9001 (Sistemas de Gestão da Qualidade), quando um inspetor de qualidade da RSS3 identifica uma 'Não Conformidade' (NC) grave na preparação de superfície de uma estrutura metálica (rugosidade inferior ao padrão contratual), qual é a sequência correta e mandatória de tratamento?",
          "en": "Operational Scenario: Under ISO 9001 quality management standards, when an RSS3 quality inspector detects a major Non-Conformance (NC) in surface preparation (profile roughness below contractual spec), what is the mandatory sequence of resolution?",
          "es": "Escenario Operativo: Bajo la norma ISO 9001, cuando un inspector de calidad de RSS3 detecta una No Conformidad (NC) grave en la preparación superficial (rugosidad por debajo de norma), ¿cuál es la secuencia obligatoria de resolución?",
        },
        options: [
          {
            id: "opt-gq-7-a",
            text: {
              "pt-BR": "Identificar e segregar/bloquear o produto/área não conforme; emitir o Relatório de Não Conformidade (RNC); executar a Ação Imediata (disposição/correção, ex: rejateamento); investigar a causa-raiz (usando 5 Porquês ou Ishikawa); definir e implementar a Ação Corretiva sistêmica; e realizar a verificação da eficácia após prazo determinado.",
              "en": "Identify and quarantine/block non-conforming product/area; issue Non-Conformance Report (NCR); execute immediate correction (containment, e.g. re-blasting); investigate root cause (5 Whys/Ishikawa); implement systemic Corrective Action; and verify effectiveness after set operational period.",
              "es": "Identificar y bloquear el área/producto no conforme; emitir el Reporte de No Conformidad (RNC); ejecutar la corrección inmediata (ej: re-granallado); investigar causa raíz (5 Porqués/Ishikawa); implementar Acción Correctiva sistémica; y verificar eficacia tras un plazo establecido.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Esse é o rito formal da ISO 9001: conter imediatamente para não propagar o erro, tratar a peça defeituosa, eliminar a causa-raiz para que não se repita e comprovar a eficácia da ação corretiva.",
              "en": "Correct! This is the standard ISO 9001 lifecycle: containment, correction, root cause elimination via corrective action, and subsequent verification of effectiveness.",
              "es": "¡Correcto! Es el ciclo exigido por ISO 9001: contención, corrección, eliminación de causa raíz y verificación de eficacia.",
            },
          },
          {
            id: "opt-gq-7-b",
            text: {
              "pt-BR": "Pintar por cima da superfície defeituosa o mais rápido possível antes que o cliente perceba o problema.",
              "en": "Coat over the defective surface as fast as possible before the client inspector notices.",
              "es": "Pintar rápidamente sobre la superficie deficiente antes de que el cliente inspeccione.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto, antiético e contrário às diretrizes da RSS3. Ocupa o topo das causas de falha catastrófica de pintura.",
              "en": "Incorrect, unethical, and breaches RSS3 core policy. Leading cause of premature coating detachment.",
              "es": "Incorrecto y contrario a la ética de RSS3. Provoca desprendimiento total de pintura y reclamos contractuales.",
            },
          },
          {
            id: "opt-gq-7-c",
            text: {
              "pt-BR": "Rasgar o relatório de inspeção e ameaçar o inspetor de qualidade com demissão se ele registrar a falha.",
              "en": "Tear up the inspection sheet and threaten the QC inspector with termination if logged.",
              "es": "Destruir el informe de inspección y amenazar al inspector para que no reporte la falla.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal. Viola as regras de integridade corporativa e governança da RSS3.",
              "en": "Incorrect and illegal. Severely violates corporate compliance and whistleblower protection standards.",
              "es": "Incorrecto e inaceptable. Viola la política de integridad de RSS3.",
            },
          },
          {
            id: "opt-gq-7-d",
            text: {
              "pt-BR": "Substituir o fiscal do cliente por um colaborador da própria empresa sem conhecimento do contratante.",
              "en": "Replace the client inspector with an internal company worker without the client's knowledge.",
              "es": "Sustituir a la supervisión del cliente por un operario propio de forma clandestina.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo contratualmente.",
              "en": "Incorrect and contractually impermissible.",
              "es": "Incorrecto y contractualmente inadmisible.",
            },
          },
        ],
      },
      {
        id: "q-gq-8",
        order: 8,
        question: {
          "pt-BR": "Cenário Operacional: Na metodologia Kaizen de melhoria contínua aplicada no canteiro de obras e frentes de hidrojato e pintura da RSS3, qual é a premissa central que orienta a atuação dos encarregados e colaboradores operacionais?",
          "en": "Operational Scenario: In Kaizen continuous improvement methodology applied to site work, scaffolding, and hydroblasting at RSS3, what is the core premise guiding field supervisors and craftspersons?",
          "es": "Escenario Operativo: En la metodología Kaizen de mejora continua aplicada a obras y frentes de trabajo de RSS3, ¿cuál es la premisa central que orienta a líderes y operarios?",
        },
        options: [
          {
            id: "opt-gq-8-a",
            text: {
              "pt-BR": "Promover melhorias graduais, pequenas e contínuas todos os dias no posto de trabalho, com envolvimento de toda a equipe operacional, focando na eliminação de desperdícios (Muda) e ganho de segurança sem depender de grandes investimentos financeiros.",
              "en": "Drive gradual, incremental, daily improvements on the job involving all crew members, focusing on waste elimination (Muda) and safety enhancements without relying on massive capital investment.",
              "es": "Fomentar mejoras graduales, pequeñas y continuas cada día en el puesto de trabajo, con participación de toda la cuadrilla, enfocadas en eliminar desperdicios (Muda) y elevar la seguridad sin grandes inversiones financieras.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Kaizen ('mudar para melhor') valoriza a inteligência coletiva de quem está na linha de frente para aperfeiçoar processos e eliminar desperdícios diariamente com baixo custo.",
              "en": "Correct! Kaizen harnesses frontline crew ingenuity to incrementally optimize workflows and reduce waste on a daily basis with minimal capital outlay.",
              "es": "¡Correcto! Kaizen impulsa el compromiso diario de la cuadrilla para perfeccionar su propio trabajo y eliminar desperdicios.",
            },
          },
          {
            id: "opt-gq-8-b",
            text: {
              "pt-BR": "Contratar consultorias internacionais caríssimas e proibir que os operadores de campo deem sugestões de melhoria.",
              "en": "Hire exorbitant external consultants and forbid frontline craftspersons from suggesting improvements.",
              "es": "Contratar consultoras externas costosas y prohibir que los operarios sugieran mejoras.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O Kaizen é exatamente o oposto: baseia-se no protagonismo e nas sugestões práticas de quem executa o trabalho.",
              "en": "Incorrect. Kaizen centers directly on empowering frontline workers to improve their own tasks.",
              "es": "Incorrecto. Kaizen empodera al operario de campo para optimizar su puesto.",
            },
          },
          {
            id: "opt-gq-8-c",
            text: {
              "pt-BR": "Paralisar os serviços durante 6 meses para redesenhar toda a engenharia da fábrica.",
              "en": "Halt all company operations for 6 months to re-engineer plant architecture from scratch.",
              "es": "Parar la empresa durante 6 meses para rediseñar toda la ingeniería de planta.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Kaizen atua no fluxo produtivo em andamento através de pequenas melhorias contínuas.",
              "en": "Incorrect. Kaizen operates on active production streams through steady incremental upgrades.",
              "es": "Incorrecto. Kaizen actúa sobre la rutina productiva mediante cambios progresivos.",
            },
          },
          {
            id: "opt-gq-8-d",
            text: {
              "pt-BR": "Substituir todas as ferramentas elétricas por ferramentas manuais antigas para reduzir o consumo de energia.",
              "en": "Replace all powered tools with primitive manual tools to minimize energy bills.",
              "es": "Reemplazar herramientas eléctricas por herramientas manuales antiguas para ahorrar energía.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Reduz drasticamente a produtividade e aumenta riscos ergonômicos para os colaboradores.",
              "en": "Incorrect. Crushes productivity and introduces severe ergonomic strain.",
              "es": "Incorrecto. Reduce la productividad y eleva la fatiga muscular.",
            },
          },
        ],
      },
      {
        id: "q-gq-9",
        order: 9,
        question: {
          "pt-BR": "Cenário Operacional: Em mapeamento de processos industriais na RSS3, a coordenação de qualidade utiliza a ferramenta SIPOC (Suppliers, Inputs, Process, Outputs, Customers). Ao mapear a atividade de 'Jateamento e Pintura Anticorrosiva de Tanques', qual elemento representa o 'Output' (Saída) do processo?",
          "en": "Operational Scenario: In process mapping at RSS3, quality coordination utilizes the SIPOC framework (Suppliers, Inputs, Process, Outputs, Customers). When mapping 'Tank Grit Blasting and Anticorrosion Coating', which element represents the 'Output' of the process?",
          "es": "Escenario Operativo: Al mapear procesos en RSS3 mediante la matriz SIPOC (Proveedores, Entradas, Proceso, Salidas, Clientes), en la actividad de 'Granallado y Pintura Anticorrosiva de Estanques', ¿qué elemento representa el 'Output' (Salida)?",
        },
        options: [
          {
            id: "opt-gq-9-a",
            text: {
              "pt-BR": "O fabricante que forneceu as latas de tinta epóxi e o solvente no almoxarifado.",
              "en": "The chemical vendor who supplied the epoxy paint cans and thinner to the warehouse.",
              "es": "El fabricante que suministró los tarros de pintura epóxica y diluyente al almacén.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O fabricante é o Supplier (Fornecedor) no SIPOC.",
              "en": "Incorrect. The vendor is the Supplier in SIPOC.",
              "es": "Incorrecto. El fabricante es el Proveedor (Supplier).",
            },
          },
          {
            id: "opt-gq-9-b",
            text: {
              "pt-BR": "A superfície metálica do tanque protegida contra corrosão dentro dos padrões contratuais de rugosidade e espessura, inspecionada e liberada com respectivo Databook/Laudo de Qualidade.",
              "en": "The tank steel surface protected against corrosion adhering to contract roughness and DFT specs, inspected and signed off with accompanying Quality Databook/Certificate.",
              "es": "La superficie metálica del estanque protegida contra la corrosión según especificaciones de rugosidad y espesor, inspeccionada y aprobada con su respectivo Databook/Informe de Calidad.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O Output (Saída) é o produto ou serviço acabado resultante da transformação realizada pelo processo, acompanhado de sua garantia técnica formal.",
              "en": "Correct! The Output is the finished deliverable resulting from process transformation, backed by quality certification.",
              "es": "¡Correcto! La Salida (Output) es el entregable terminado y conforme con su respaldo documental.",
            },
          },
          {
            id: "opt-gq-9-c",
            text: {
              "pt-BR": "O ar comprimido seco e a granalha de aço virgem carregada na máquina de jateamento.",
              "en": "Dry compressed air and virgin steel grit loaded into the blasting pot.",
              "es": "El aire comprimido seco y la granalla de acero cargada en la tolva.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O ar comprimido e o abrasivo constituem os Inputs (Entradas/Insumos) do processo.",
              "en": "Incorrect. Air and abrasive are Inputs in SIPOC.",
              "es": "Incorrecto. Constituyen las Entradas (Inputs) del proceso.",
            },
          },
          {
            id: "opt-gq-9-d",
            text: {
              "pt-BR": "O fiscal de manutenção do cliente que recebe a estrutura pintada.",
              "en": "The client maintenance engineer who inspects the finished structure.",
              "es": "El inspector de mantenimiento del cliente que recibe la obra.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O fiscal do cliente é o Customer (Cliente) no modelo SIPOC.",
              "en": "Incorrect. The client rep is the Customer in SIPOC.",
              "es": "Incorrecto. El cliente es el Customer receptor del servicio.",
            },
          },
        ],
      },
      {
        id: "q-gq-10",
        order: 10,
        question: {
          "pt-BR": "Diretrizes Permanentes RSS3 e Conformidade Regulatória: Ao ser aprovado nesta Avaliação Final de Gestão da Qualidade Industrial pela plataforma RSS3 Treinamentos, qual é o alcance do certificado emitido frente às normas regulamentadoras e inspeções em campo?",
          "en": "RSS3 Permanent Guidelines & Regulatory Compliance: Upon passing this Final Exam in Industrial Quality Management on RSS3 Treinamentos, what is the valid scope of the certificate regarding regulatory standards and field inspections?",
          "es": "Directrices Permanentes de RSS3 y Cumplimiento Normativo: Al aprobar esta Evaluación Final de Gestión de la Calidad Industrial en RSS3 Treinamentos, ¿cuál es el alcance legal del certificado respecto a normas e inspecciones en obra?",
        },
        options: [
          {
            id: "opt-gq-10-a",
            text: {
              "pt-BR": "O certificado comprova a proficiência teórica nos fundamentos de Gestão da Qualidade, 5S e ferramentas analíticas, não conferindo credencial de Inspetor Qualificado Nível 1 ou 2 (SNQC/ABRACO/NACE/FROSIO) nem dispensando treinamentos práticos presenciais e ASO vigente para acesso a áreas industriais.",
              "en": "The certificate validates theoretical proficiency in Quality Management, 5S, and analytical toolsets; it confers neither certified coating inspector credentials (SNQC/ABRACO/NACE/AMPP/FROSIO) nor waives hands-on safety training or medical fitness clearance (ASO) for site access.",
              "es": "El certificado acredita competencia teórica en Gestión de Calidad, 5S y herramientas analíticas; no otorga acreditación formal de Inspector de Pintura Nivel 1 o 2 (SNQC/ABRACO/NACE/AMPP) ni exime de capacitaciones prácticas de seguridad presenciales o ASO vigente.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Conforme a Seção 3 das Diretrizes Permanentes (AGENTS.md), o LMS distingue formalmente certificações de conteúdo teórico EAD de qualificações profissionais formais com órgãos acreditadores e aptidão médica ocupacional.",
              "en": "Correct! As per Section 3 of AGENTS.md, EAD course completion certifies theoretical knowledge only and cannot replace certified inspector credentials or medical fit-for-work status.",
              "es": "¡Correcto! Según la Sección 3 de AGENTS.md, se distingue categóricamente la formación teórica EAD de acreditaciones formales de inspección y aptitud médica.",
            },
          },
          {
            id: "opt-gq-10-b",
            text: {
              "pt-BR": "O certificado concede credencial de auditor líder internacional da ISO 9001 com poder de emitir selos oficiais em nome de órgãos certificadores.",
              "en": "The certificate confers ISO 9001 Lead Auditor credentials with statutory authority to issue accreditation seals.",
              "es": "El certificado otorga credencial de auditor líder ISO 9001 con potestad de emitir sellos oficiales de certificación.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A formação de auditor líder exige cursos acreditados específicos pelo IRCA e exames presenciais supervisionados.",
              "en": "Incorrect. Lead auditor certification requires accredited IRCA programs and supervised examinations.",
              "es": "Incorrecto. La acreditación de auditor líder exige formación acreditada IRCA.",
            },
          },
          {
            id: "opt-gq-10-c",
            text: {
              "pt-BR": "O certificado dispensa a realização de testes de aderência ou medição de espessura de película seca em qualquer contrato de pintura.",
              "en": "The certificate permanently exempts field crews from conducting adhesion tests or dry film thickness checks.",
              "es": "El certificado exime de realizar ensayos de adherencia o medición de espesores en cualquier contrato de pintura.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo. Ensaios de controle de qualidade são mandatórios em normas técnicas (ABNT/SSPC/ISO).",
              "en": "Incorrect. Quality inspections and tests are mandatory contractual requirements under technical codes.",
              "es": "Incorrecto. Las pruebas de control de calidad son obligatorias por norma técnica.",
            },
          },
          {
            id: "opt-gq-10-d",
            text: {
              "pt-BR": "O certificado autoriza a empresa a operar sem cumprir nenhuma das Normas Regulamentadoras do Ministério do Trabalho.",
              "en": "The certificate authorizes operating without complying with any statutory Ministry of Labor safety standards.",
              "es": "El certificado permite operar sin cumplir las Normas de Seguridad del Ministerio de Trabajo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal. O cumprimento das Normas Regulamentadoras é indeclinável para todas as empresas no país.",
              "en": "Incorrect. Compliance with statutory safety regulations is mandatory and legally non-negotiable.",
              "es": "Incorrecto e ilegal. El cumplimiento de las normas laborales es obligatorio por ley.",
            },
          },
        ],
      },
    ],
  },
};
