import { CourseDemonstration } from "@/types";

export const gestaoProjetosCourseData: CourseDemonstration = {
  id: "c-gestao-de-projetos",
  slug: "gestao-de-projetos-industriais-paradas-fabrica",
  title: {
    "pt-BR": "Gestão de Projetos Industriais & Paradas de Manutenção",
    "en": "Industrial Project Management & Plant Shutdowns",
    "es": "Gestión de Proyectos Industriales y Paradas de Planta",
  },
  description: {
    "pt-BR": "Curso prático e estratégico de gerenciamento de projetos aplicado à realidade industrial e prestação de serviços da RSS3: ciclo de vida do projeto, Termo de Abertura (TAP), Estrutura Analítica do Projeto (EAP/WBS), cronograma físico-financeiro, matriz de riscos operacionais, mobilização de frentes de trabalho, gestão de mudanças de escopo e consolidação de lições aprendidas em paradas de fábrica.",
    "en": "Comprehensive industrial project management course for RSS3 operations: project lifecycle, Project Charter (TAP), Work Breakdown Structure (WBS), schedules, risk matrices, shutdown mobilization, scope change management, and lessons learned.",
    "es": "Curso integral de gestión de proyectos industriales: ciclo de vida, Acta de Constitución (TAP), EDT/WBS, cronograma, riesgos operacionales, control de cambios y lecciones aprendidas.",
  },
  longDescription: {
    "pt-BR": "O treinamento de Gestão de Projetos Industriais & Paradas de Manutenção da RSS3 Treinamentos foi desenvolvido para capacitar gestores de contrato, engenheiros de planejamento, supervisores de frente e encarregados técnicos na condução estruturada de intervenções industriais de alta criticidade. Desde a iniciação formal e alinhamento de premissas com o cliente, passando pela decomposição do escopo em entregáveis tangíveis (EAP), definição de caminho crítico, alocação de recursos e orçamentos, até a comunicação transparente em campo, mitigação preditiva de riscos de segurança e atrasos, controle rígido de pleitos/mudanças e fechamento formal com aceite técnico e lições aprendidas.",
    "en": "Tailored for site managers, planning engineers, and craft supervisors handling shutdown interventions and multi-disciplinary industrial contracts. Covers PMI/IPMA-aligned methodologies adapted to high-hazard industrial settings: scope baseline, critical path method, contingency reserves, shutdown safety governance, and project closeout.",
    "es": "Capacitación práctica en gestión de proyectos industriales para líderes de parada de planta y supervisores de contrato. Planificación, ruta crítica, gestión de riesgos en campo, control de cambios y cierre formal.",
  },
  schoolId: "gestao-lideranca",
  schoolName: {
    "pt-BR": "Gestão Industrial, Tecnologia e Produtividade",
    "en": "Industrial Management, Technology & Productivity",
    "es": "Gestión Industrial, Tecnología y Productividad",
  },
  workloadHours: 40,
  level: "intermediate",
  modality: "online",
  isMandatory: false,
  mandatoryFor: [
    "Gerente de Contrato",
    "Engenheiro de Planejamento",
    "Coordenador Operacional",
    "Supervisor de Parada",
    "Encarregado Geral",
    "Técnico de Segurança do Trabalho",
  ],
  targetAudience: {
    "pt-BR": "Engenheiros, planejadores, coordenadores de contratos, supervisores de hidrojateamento, pintura e montagem de andaimes, e líderes técnicos responsáveis por cronogramas e entregas da RSS3.",
    "en": "Project engineers, maintenance planners, contract managers, and field supervisors overseeing industrial schedules and turnkey shutdown execution at RSS3.",
    "es": "Ingenieros de proyecto, planificadores, supervisores de obra y coordinadores técnicos de RSS3 Soluciones Industriales.",
  },
  prerequisites: {
    "pt-BR": "Conhecimentos básicos de rotinas industriais, leitura de relatórios de campo ou atuação em liderança técnica.",
    "en": "Foundational understanding of industrial maintenance routines, site logs, or frontline team leadership.",
    "es": "Conocimientos básicos de mantenimiento industrial y seguimiento de cronogramas.",
  },
  modulesCount: 5,
  lessonsCount: 18,
  thumbnailGradient: "from-blue-950 via-cyan-950 to-slate-950",
  coverImage: "/images/courses/gestao-projetos.jpg",
  categories: ["gestao-produtividade","conhecimento-operacional","qualidade-processos"],
  badgeCode: "PM-RSS3",
  updatedAtDate: "2026-10-16",
  modules: [
    {
      id: "mod-gpj-1",
      order: 1,
      title: {
        "pt-BR": "Módulo 1: Fundamentos, Ciclo de Vida e os 7 Passos do Gerenciamento (Aulas 01 a 03)",
        "en": "Module 1: Foundations, Project Lifecycle & 7 Practical Steps (Lessons 01 to 03)",
        "es": "Módulo 1: Fundamentos, Ciclo de Vida y los 7 Pasos Prácticos (Clases 01 a 03)",
      },
      description: {
        "pt-BR": "Definição de projeto versus operação contínua, tipologia de projetos industriais e o método estruturado em 7 passos para gerenciamento de qualquer empreendimento.",
        "en": "Projects versus routine operations, industrial project taxonomy, and the practical 7-step management framework.",
        "es": "Diferencia entre proyecto y operación continua, tipología de proyectos y metodología en 7 pasos.",
      },
      lessons: [
        {
          id: "les-gpj-1-1",
          order: 1,
          title: {
            "pt-BR": "Aula 01: Gestão de Projetos — Introdução e Conceitos Fundamentais",
            "en": "Lesson 01: Project Management — Introduction & Core Concepts",
            "es": "Clase 01: Gestión de Proyectos — Introducción y Conceptos Fundamentales",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "trhDHOC3xGw",
          contentDetail: {
            objective: {
              "pt-BR": "Diferenciar projetos de rotinas operacionais contínuas e compreender a tríplice restrição (escopo, tempo e custo) na indústria.",
              "en": "Distinguish temporary projects from recurring plant operations and grasp the triple constraint (scope, time, cost).",
              "es": "Diferenciar proyectos de operaciones continuas y comprender la triple restricción en planta.",
            },
            summaryPoints: [
              {
                "pt-BR": "Conceito de projeto: esforço temporário empreendido para criar um produto, serviço ou resultado exclusivo.",
                "en": "Project definition: temporary endeavor undertaken to deliver a unique product, service, or outcome.",
                "es": "Definición de proyecto: esfuerzo temporal para crear un resultado o servicio único.",
              },
              {
                "pt-BR": "A tríplice restrição tradicional e sua expansão moderna para segurança operacional e qualidade técnica.",
                "en": "The classic triple constraint expanded to encompass zero-harm safety and technical quality.",
                "es": "La triple restricción tradicional integrada con seguridad industrial y calidad.",
              },
            ],
          },
        },
        {
          id: "les-gpj-1-2",
          order: 2,
          title: {
            "pt-BR": "Aula 02: Tipos de Projetos — O que são e como funcionam",
            "en": "Lesson 02: Project Categories — Classification & Dynamics",
            "es": "Clase 02: Tipos de Proyectos — Clasificación y Dinámica",
          },
          durationMinutes: 16,
          contentType: "video",
          videoUrl: "ClqOPQ2iVk4",
          contentDetail: {
            objective: {
              "pt-BR": "Classificar os tipos de projetos industriais: melhorias de planta (Capex), paradas gerais de manutenção (Opex) e mobilizações de novos contratos.",
              "en": "Categorize industrial projects: Capex expansions, general turnaround shutdowns (Opex), and new site mobilizations.",
              "es": "Clasificar proyectos industriales: inversiones de capital, paradas de planta y contratos nuevos.",
            },
            summaryPoints: [
              {
                "pt-BR": "Projetos preditivos (cascata) versus abordagens ágeis e híbridas em paradas de fábrica.",
                "en": "Predictive waterfall versus agile and hybrid workflows in industrial turnarounds.",
                "es": "Proyectos predictivos (cascada) frente a enfoques ágiles e híbridos en paradas.",
              },
              {
                "pt-BR": "Características de projetos de alta criticidade: janelas rígidas de tempo e interdependência de equipes.",
                "en": "High-hazard project traits: rigid execution windows and cross-functional crew interdependencies.",
                "es": "Características de proyectos críticos: plazos estrictos y coordinación multidisciplinaria.",
              },
            ],
          },
        },
        {
          id: "les-gpj-1-3",
          order: 3,
          title: {
            "pt-BR": "Aula 03: Como Gerenciar Qualquer Projeto em 7 Passos Práticos",
            "en": "Lesson 03: How to Manage Any Project in 7 Practical Steps",
            "es": "Clase 03: Cómo Gestionar Cualquier Proyecto en 7 Pasos Prácticos",
          },
          durationMinutes: 20,
          contentType: "video",
          videoUrl: "7KTrsOu_jJw",
          contentDetail: {
            objective: {
              "pt-BR": "Aplicar o roteiro estruturado de 7 etapas para planejamento, execução, monitoramento e encerramento de frentes industriais.",
              "en": "Apply the 7-step structured roadmap to initiate, plan, execute, monitor, and close industrial jobsite tasks.",
              "es": "Aplicar la guía de 7 pasos para planificar, ejecutar, controlar y cerrar frentes de trabajo.",
            },
            summaryPoints: [
              {
                "pt-BR": "Os 7 passos: Definição do objetivo, alinhamento de partes interessadas, escopo, cronograma, recursos, monitoramento e lições aprendidas.",
                "en": "The 7 steps: objective, stakeholder buy-in, scope baseline, schedule, resources, control, and closeout.",
                "es": "Los 7 pasos: objetivo, interesados, alcance, cronograma, recursos, control y cierre.",
              },
              {
                "pt-BR": "Como manter simplicidade e foco na entrega sem burocracia excessiva no canteiro de obras.",
                "en": "Keeping execution lean and focused on field delivery without administrative bloat.",
                "es": "Mantener agilidad y foco en el campo sin exceso de burocracia.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-gpj-2",
      order: 2,
      title: {
        "pt-BR": "Módulo 2: Iniciação e Elaboração do Termo de Abertura (Aulas 04 a 06)",
        "en": "Module 2: Project Initiation & Project Charter Formulation (Lessons 04 to 06)",
        "es": "Módulo 2: Iniciación y Acta de Constitución del Proyecto (Clases 04 a 06)",
      },
      description: {
        "pt-BR": "Guia de iniciação formal de projetos, componentes essenciais do Termo de Abertura (TAP) e análise de um caso prático completo.",
        "en": "Formal initiation protocols, core elements of a Project Charter (TAP), and end-to-end practical walkthrough.",
        "es": "Protocolos de iniciación, elementos del Acta de Constitución (TAP) y caso práctico aplicado.",
      },
      lessons: [
        {
          id: "les-gpj-2-1",
          order: 1,
          title: {
            "pt-BR": "Aula 04: Iniciação do Projeto — Guia para Novos Empreendimentos",
            "en": "Lesson 04: Project Initiation — Playbook for New Ventures",
            "es": "Clase 04: Iniciación del Proyecto — Guía para Nuevos Emprendimientos",
          },
          durationMinutes: 19,
          contentType: "video",
          videoUrl: "Pz544vVPUho",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender o processo de autorização formal de projetos, identificação de stakeholders e alinhamento de expectativas de contrato.",
              "en": "Master project authorization, stakeholder mapping, and contract expectation alignment.",
              "es": "Comprender la autorización formal de proyectos y el mapeo de partes interesadas.",
            },
            summaryPoints: [
              {
                "pt-BR": "O papel do patrocinador (sponsor) e a delegação formal de autoridade ao gerente/líder do projeto.",
                "en": "Sponsor governance and formally delegating site authority to the project leader.",
                "es": "El rol del patrocinador y la delegación de autoridad al líder de proyecto.",
              },
              {
                "pt-BR": "Mapeamento das partes interessadas (cliente industrial, fiscalização, equipe de campo e subcontratados).",
                "en": "Stakeholder matrix: plant client, site inspectors, frontline crews, and subcontractors.",
                "es": "Mapeo de interesados: cliente de planta, fiscalización de seguridad y frentes de trabajo.",
              },
            ],
          },
        },
        {
          id: "les-gpj-2-2",
          order: 2,
          title: {
            "pt-BR": "Aula 05: Como Elaborar um Termo de Abertura de Projeto (TAP)",
            "en": "Lesson 05: How to Draft a Robust Project Charter (TAP)",
            "es": "Clase 05: Cómo Elaborar un Acta de Constitución de Proyecto (TAP)",
          },
          durationMinutes: 21,
          contentType: "video",
          videoUrl: "tSvpTjbIFcs",
          contentDetail: {
            objective: {
              "pt-BR": "Redigir as seções estruturais de um Termo de Abertura: justificativa, objetivos SMART, limites do escopo, premissas e restrições.",
              "en": "Draft core Project Charter sections: business case, SMART goals, boundaries, assumptions, and constraints.",
              "es": "Redactar las secciones del TAP: justificación, metas SMART, supuestos y restricciones.",
            },
            summaryPoints: [
              {
                "pt-BR": "Diferença crucial entre premissas (o que assumimos como verdade) e restrições (limitações impostas como prazo ou orçamento).",
                "en": "Distinguishing assumptions (working truths) from constraints (hard limits on dates or budget).",
                "es": "Diferencia entre supuestos (premisas asumidas) y restricciones (límites de plazo o costo).",
              },
              {
                "pt-BR": "Critérios de sucesso mensuráveis para validação técnica ao final da parada.",
                "en": "Measurable acceptance criteria for technical closeout upon shutdown completion.",
                "es": "Criterios de éxito medibles para la recepción final de la obra.",
              },
            ],
          },
        },
        {
          id: "les-gpj-2-3",
          order: 3,
          title: {
            "pt-BR": "Aula 06: Estudo de Caso Prático — Termo de Abertura Passo a Passo",
            "en": "Lesson 06: Practical Case Study — Project Charter Step by Step",
            "es": "Clase 06: Caso Práctico — Acta de Constitución Paso a Paso",
          },
          durationMinutes: 22,
          contentType: "video",
          videoUrl: "0-uI65ahGYc",
          contentDetail: {
            objective: {
              "pt-BR": "Analisar um exemplo real de TAP preenchido para intervenção técnica, identificando pontos de atenção e aprovação formal.",
              "en": "Analyze an authentic industrial Project Charter walkthrough, identifying approval gates and critical milestones.",
              "es": "Analizar un caso real de TAP para intervención industrial con hitos y aprobaciones.",
            },
            summaryPoints: [
              {
                "pt-BR": "Leitura analítica de um TAP para mobilização de hidrojateamento e pintura anticorrosiva.",
                "en": "Analytical review of a Project Charter for hydroblasting and protective coatings mobilization.",
                "es": "Revisión analítica de un TAP para movilización de hidrojet y pintura industrial.",
              },
              {
                "pt-BR": "Importância da assinatura conjunta entre cliente e contratada antes do início de campo.",
                "en": "Necessity of sign-off between plant owner and contractor prior to mobilizing iron.",
                "es": "Importancia de la firma conjunta entre cliente y contratista antes de movilizar campo.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-gpj-3",
      order: 3,
      title: {
        "pt-BR": "Módulo 3: Planejamento — Escopo (EAP), Requisitos, Cronograma e Orçamento (Aulas 07 a 10)",
        "en": "Module 3: Planning — Scope (WBS), Requirements, Schedule & Cost (Lessons 07 to 10)",
        "es": "Módulo 3: Planificación — Alcance (EDT/WBS), Requisitos, Cronograma y Costos (Clases 07 a 10)",
      },
      description: {
        "pt-BR": "Decomposição hierárquica do trabalho em EAP/WBS, levantamento de requisitos operacionais, elaboração do cronograma físico e dimensionamento de recursos e custos.",
        "en": "Hierarchical scope decomposition via WBS, technical requirement engineering, schedule development, and resource costing.",
        "es": "Descomposición jerárquica del trabajo en EDT/WBS, requisitos, cronograma y presupuesto.",
      },
      lessons: [
        {
          id: "les-gpj-3-1",
          order: 1,
          title: {
            "pt-BR": "Aula 07: Estrutura Analítica do Projeto (EAP/WBS) e Escopo",
            "en": "Lesson 07: Work Breakdown Structure (WBS) & Scope Baseline",
            "es": "Clase 07: Estructura de Desglose del Trabajo (EDT/WBS) y Alcance",
          },
          durationMinutes: 23,
          contentType: "video",
          videoUrl: "LBq6wA9MOek",
          contentDetail: {
            objective: {
              "pt-BR": "Construir a EAP do projeto, dividindo o escopo total em pacotes de trabalho gerenciáveis orientados a entregas.",
              "en": "Construct a project WBS, breaking down total scope into deliverable-oriented work packages.",
              "es": "Construir la EDT/WBS dividiendo el alcance en paquetes de trabajo manejables.",
            },
            summaryPoints: [
              {
                "pt-BR": "Regra dos 100%: a EAP deve conter 100% do trabalho acordado, sem esquecimentos e sem tarefas fora do contrato.",
                "en": "The 100% rule: the WBS must capture 100% of contract scope with zero out-of-scope work.",
                "es": "Regla del 100%: la EDT debe contemplar la totalidad del alcance acordado.",
              },
              {
                "pt-BR": "Níveis da EAP industrial: Projeto > Sistemas/Áreas > Disciplinas (Andaimes, Jateamento, Pintura) > Pacotes de Trabalho.",
                "en": "Industrial WBS hierarchy: Project > Systems > Crafts (Scaffolding, Blasting, Coating) > Work Packages.",
                "es": "Niveles de la EDT: Proyecto > Áreas > Especialidades (Andamios, Hidrojet, Pintura) > Paquetes.",
              },
            ],
          },
        },
        {
          id: "les-gpj-3-2",
          order: 2,
          title: {
            "pt-BR": "Aula 08: Como Definir Requisitos Técnicos de Projetos",
            "en": "Lesson 08: Engineering Technical Requirements for Projects",
            "es": "Clase 08: Cómo Definir Requisitos Técnicos en Proyectos",
          },
          durationMinutes: 19,
          contentType: "video",
          videoUrl: "qsYJ3i4L7YQ",
          contentDetail: {
            objective: {
              "pt-BR": "Identificar e documentar requisitos funcionais, regulamentares, de qualidade e de segurança da planta industrial.",
              "en": "Elicit and document technical, regulatory, quality, and plant safety requirements.",
              "es": "Documentar requisitos técnicos, normativos y de seguridad industrial.",
            },
            summaryPoints: [
              {
                "pt-BR": "Matriz de rastreabilidade de requisitos: ligando a especificação do cliente às medições de campo.",
                "en": "Requirements traceability matrix: connecting client specs to jobsite QA/QC inspections.",
                "es": "Matriz de trazabilidad: vinculando especificaciones técnicas con inspecciones de campo.",
              },
              {
                "pt-BR": "Evitar o escopo fantasma (scope creep) garantindo que todo requisito tenha aprovação prévia.",
                "en": "Preventing scope creep by ensuring every new demand receives formal approval.",
                "es": "Evitar la corrupción del alcance mediante aprobaciones formales previas.",
              },
            ],
          },
        },
        {
          id: "les-gpj-3-3",
          order: 3,
          title: {
            "pt-BR": "Aula 09: Como Definir Tarefas e Elaborar o Cronograma do Projeto",
            "en": "Lesson 09: Sequencing Tasks & Developing the Project Schedule",
            "es": "Clase 09: Secuenciamiento de Tareas y Desarrollo del Cronograma",
          },
          durationMinutes: 24,
          contentType: "video",
          videoUrl: "dtd9FC7hL84",
          contentDetail: {
            objective: {
              "pt-BR": "Mapear dependências entre tarefas, estimar durações e identificar o Caminho Crítico (CPM) da parada.",
              "en": "Sequence task logic, estimate durations, and calculate the Critical Path Method (CPM) in turnarounds.",
              "es": "Mapear dependencias, estimar duraciones e identificar la Ruta Crítica (CPM).",
            },
            summaryPoints: [
              {
                "pt-BR": "Caminho Crítico (CPM): a sequência de tarefas sem folga que determina a duração total da parada.",
                "en": "Critical Path Method: the zero-float sequence dictating plant recommissioning deadlines.",
                "es": "Ruta Crítica (CPM): la secuencia de tareas que determina la duración total de la parada.",
              },
              {
                "pt-BR": "Gráficos de Gantt e dependências lógicas (Término-Início, Início-Início com atraso de cura de tinta).",
                "en": "Gantt charts and predecessor relationships (Finish-to-Start, Start-to-Start with coating cure lag).",
                "es": "Diagramas de Gantt y dependencias lógicas entre actividades secuenciales.",
              },
            ],
          },
        },
        {
          id: "les-gpj-3-4",
          order: 4,
          title: {
            "pt-BR": "Aula 10: Dimensionamento de Recursos e Orçamento do Projeto",
            "en": "Lesson 10: Resource Allocation & Project Cost Baseline",
            "es": "Clase 10: Asignación de Recursos y Presupuesto del Proyecto",
          },
          durationMinutes: 21,
          contentType: "video",
          videoUrl: "SPAWtr4c6ds",
          contentDetail: {
            objective: {
              "pt-BR": "Dimensionar mão de obra direta, equipamentos pesados (caminhões vácuo, ultra-pressão) e estruturar o fluxo orçamentário.",
              "en": "Staff direct craft labor, deploy heavy equipment (vacuum trucks, pumps), and structure cash flows.",
              "es": "Dimensionar mano de obra directa, maquinaria pesada y estructurar el flujo de costos.",
            },
            summaryPoints: [
              {
                "pt-BR": "Histograma de mão de obra e nivelamento de recursos para evitar ociosidade ou sobrecarga na parada.",
                "en": "Staffing histograms and resource leveling to prevent idle bottlenecks or peak overwork.",
                "es": "Histograma de personal y nivelación de recursos para evitar sobrecostos.",
              },
              {
                "pt-BR": "Composição de custos diretos, indiretos e reserva de contingência para imprevistos técnicos.",
                "en": "Direct vs indirect cost modeling and contingency reserves for site unknowns.",
                "es": "Costos directos, indirectos y reservas de contingencia para imprevistos.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-gpj-4",
      order: 4,
      title: {
        "pt-BR": "Módulo 4: Comunicação, Riscos, Mobilização e Execução em Campo (Aulas 11 a 14)",
        "en": "Module 4: Communications, Risk Management & Field Execution (Lessons 11 to 14)",
        "es": "Módulo 4: Comunicación, Riesgos y Ejecución Operativa en Campo (Clases 11 a 14)",
      },
      description: {
        "pt-BR": "Matriz de comunicação com a contratante, identificação e contingenciamento de riscos operacionais, mobilização ágil e boas práticas de execução.",
        "en": "Stakeholder communication plans, operational risk mitigation, turnkey crew mobilization, and execution excellence.",
        "es": "Plan de comunicaciones, matriz de riesgos operacionales, movilización y ejecución en campo.",
      },
      lessons: [
        {
          id: "les-gpj-4-1",
          order: 1,
          title: {
            "pt-BR": "Aula 11: Como Planejar as Comunicações em Projetos Industriais",
            "en": "Lesson 11: Structuring Industrial Project Communications",
            "es": "Clase 11: Planificación de las Comunicaciones en Proyectos Industriais",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "ujTFSEmQkkk",
          contentDetail: {
            objective: {
              "pt-BR": "Estruturar a matriz de comunicação: DDS diários, relatórios diários de obra (RDO) e reuniões de alinhamento com a diretoria do cliente.",
              "en": "Establish communication plans: daily safety briefings, daily work logs (RDO), and client review calls.",
              "es": "Estructurar la matriz de comunicación: DDS diario, reporte de obra (RDO) y comités de parada.",
            },
            summaryPoints: [
              {
                "pt-BR": "O Relatório Diário de Obra (RDO) como documento contratual de registro de produtividade e impedimentos.",
                "en": "The Daily Work Log (RDO) as a legal record of daily output and site bottlenecks.",
                "es": "El Reporte Diario de Obra (RDO) como registro contractual de avance y desvíos.",
              },
              {
                "pt-BR": "Comunicação clara e assertiva entre fiscais de contrato da fábrica e encarregados da RSS3.",
                "en": "Clear, objective communication between client inspectors and RSS3 field supervisors.",
                "es": "Comunicación asertiva entre supervisores de planta y líderes de contrato.",
              },
            ],
          },
        },
        {
          id: "les-gpj-4-2",
          order: 2,
          title: {
            "pt-BR": "Aula 12: Identificando e Planejando os Riscos do Projeto",
            "en": "Lesson 12: Identifying & Mitigating Project Operational Risks",
            "es": "Clase 12: Identificación y Gestión de Riesgos en el Proyecto",
          },
          durationMinutes: 22,
          contentType: "video",
          videoUrl: "CTMksIdo1so",
          contentDetail: {
            objective: {
              "pt-BR": "Mapear riscos técnicos, climáticos e de segurança operacional através de matriz de probabilidade e impacto.",
              "en": "Map technical, environmental, and site safety hazards using probability-impact matrices.",
              "es": "Mapear riesgos técnicos, climáticos y de seguridad con matrices de probabilidad e impacto.",
            },
            summaryPoints: [
              {
                "pt-BR": "Matriz de Riscos: classificação em severidade e definição de respostas (mitigar, transferir, evitar ou aceitar).",
                "en": "Risk register: scoring severity and defining response strategies (mitigate, transfer, avoid, accept).",
                "es": "Matriz de riesgos: priorización de severidad y planes de respuesta operacional.",
              },
              {
                "pt-BR": "Planos de contingência para chuva em serviços de pintura e quebra de unidades de hidrojato de alta pressão.",
                "en": "Contingency actions for rain delays in painting and mechanical downtime in blasting pumps.",
                "es": "Planes de contingencia ante lluvia en pintura o averías en bombas de alta presión.",
              },
            ],
          },
        },
        {
          id: "les-gpj-4-3",
          order: 3,
          title: {
            "pt-BR": "Aula 13: Execução de Projetos, Mobilização de Equipes e Aquisições",
            "en": "Lesson 13: Project Execution, Crew Mobilization & Field Procurement",
            "es": "Clase 13: Ejecución de Proyectos, Movilización de Personal y Compras",
          },
          durationMinutes: 20,
          contentType: "video",
          videoUrl: "6CmKmjD8b_8",
          contentDetail: {
            objective: {
              "pt-BR": "Gerenciar a fase de mobilização física de equipamentos e pessoas, suprimentos críticos e coordenação diária de frentes.",
              "en": "Manage mobilization logistics, critical site consumables, and synchronized multi-crew execution.",
              "es": "Gestionar la movilización logística de maquinaria, insumos y cuadrillas de trabajo.",
            },
            summaryPoints: [
              {
                "pt-BR": "Checklist de mobilização: liberação de crachás, integração de segurança e inspeção veicular prévia.",
                "en": "Mobilization checklist: gate passes, plant safety badges, and heavy machinery inspections.",
                "es": "Checklist de movilización: pases de ingreso, inducción de planta e inspección técnica.",
              },
              {
                "pt-BR": "Gestão de suprimentos de campo: abrasivos, bicos de hidrojato, tintas e componentes de andaime sem desabastecimento.",
                "en": "Field consumables procurement: abrasives, nozzle tips, paints, and scaffold locks.",
                "es": "Gestión de abastecimiento: boquillas de jateo, pinturas y componentes de andamio.",
              },
            ],
          },
        },
        {
          id: "les-gpj-4-4",
          order: 4,
          title: {
            "pt-BR": "Aula 14: Dicas Práticas de Sucesso na Gestão de Projetos de Campo",
            "en": "Lesson 14: Proven Best Practices for Field Project Success",
            "es": "Clase 14: Claves Prácticas de Éxito en Proyectos de Campo",
          },
          durationMinutes: 17,
          contentType: "video",
          videoUrl: "p_AcSOegORQ",
          contentDetail: {
            objective: {
              "pt-BR": "Aplicar estratégias de liderança de canteiro, resolução rápida de conflitos e manutenção da disciplina de segurança.",
              "en": "Apply frontline site leadership tactics, fast conflict resolution, and unrelenting safety discipline.",
              "es": "Aplicar liderazgo de terreno, resolución rápida de problemas y apego a normas de seguridad.",
            },
            summaryPoints: [
              {
                "pt-BR": "Presença do líder no campo (Gemba Walk) para verificar condições reais de trabalho e apoio imediato à equipe.",
                "en": "Field Gemba Walks to observe live operations and eliminate immediate craft bottlenecks.",
                "es": "Caminatas de campo (Gemba) para verificar el avance real y remover interferencias.",
              },
              {
                "pt-BR": "A disciplina em segurança como requisito inegociável para o sucesso técnico do projeto.",
                "en": "Safety compliance as an uncompromising cornerstone of operational success.",
                "es": "La seguridad laboral como pilar innegociable del éxito de la obra.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-gpj-5",
      order: 5,
      title: {
        "pt-BR": "Módulo 5: Monitoramento, Controle de Mudanças, Aceite e Lições Aprendidas (Aulas 15 a 18)",
        "en": "Module 5: Monitoring, Change Control, Acceptance & Lessons Learned (Lessons 15 to 18)",
        "es": "Módulo 5: Control, Gestión de Cambios, Recepción y Lecciones Aprendidas (Clases 15 a 18)",
      },
      description: {
        "pt-BR": "Técnicas de monitoramento com Curva S e Valor Agregado, gestão formal de mudanças de escopo, rito de encerramento e registro de lições aprendidas.",
        "en": "S-Curve and Earned Value tracking, change order governance, formal acceptance sign-off, and institutional lessons learned.",
        "es": "Seguimiento con Curva S, control formal de cambios, recepción técnica y lecciones aprendidas.",
      },
      lessons: [
        {
          id: "les-gpj-5-1",
          order: 1,
          title: {
            "pt-BR": "Aula 15: Como Monitorar e Controlar o Projeto em Execução",
            "en": "Lesson 15: Monitoring & Controlling Active Project Progress",
            "es": "Clase 15: Cómo Monitorear y Controlar el Avance del Proyecto",
          },
          durationMinutes: 21,
          contentType: "video",
          videoUrl: "Nei3nOdRTOM",
          contentDetail: {
            objective: {
              "pt-BR": "Monitorar desvios de prazo e custo utilizando curvas de avanço físico (Curva S) e indicadores de medição.",
              "en": "Track schedule and cost variances using S-Curves and physical progress metrics.",
              "es": "Monitorear desvíos de plazo y costo mediante Curvas S y mediciones de avance.",
            },
            summaryPoints: [
              {
                "pt-BR": "Curva S: comparativo entre o planejado e o realizado para detecção precoce de atrasos.",
                "en": "S-Curve analysis: baseline vs actual physical progression to spot delays early.",
                "es": "Curva S: comparación entre avance planificado y real para detectar desvíos a tiempo.",
              },
              {
                "pt-BR": "Medição física de serviços (m² jateados, toneladas montadas) vinculada à liberação de faturamento.",
                "en": "Physical progress milestones (m² blasted, tons erected) driving billing milestones.",
                "es": "Medición de avance físico (m² de pintura, toneladas de andamio) para facturación.",
              },
            ],
          },
        },
        {
          id: "les-gpj-5-2",
          order: 2,
          title: {
            "pt-BR": "Aula 16: Gerenciando Mudanças de Escopo e Pleitos em Projetos",
            "en": "Lesson 16: Managing Scope Changes & Field Variation Orders",
            "es": "Clase 16: Gestión de Cambios de Alcance y Adicionales de Obra",
          },
          durationMinutes: 22,
          contentType: "video",
          videoUrl: "H4eCbynW6Po",
          contentDetail: {
            objective: {
              "pt-BR": "Processar solicitações de mudança de escopo (ordens de variação/aditivos), avaliando impactos em prazo e custos.",
              "en": "Process scope change requests and change orders, pricing time and cost impacts formally.",
              "es": "Tramitar solicitudes de cambio y adicionales evaluando impactos en plazo y costo.",
            },
            summaryPoints: [
              {
                "pt-BR": "Fluxo de aprovação de aditivos contratuais: registro da solicitação, impacto orçamentário e anuência prévia.",
                "en": "Change order lifecycle: logging request, costing impact, and obtaining written sign-off.",
                "es": "Flujo de aditivos contractuales: solicitud formal, costeo y aprobación escrita del cliente.",
              },
              {
                "pt-BR": "Como evitar trabalho adicional não remunerado no canteiro sem autorização formal do fiscal.",
                "en": "Preventing performing unapproved site work without guaranteed financial coverage.",
                "es": "Evitar ejecutar trabajos extras no autorizados formalmente por la supervisión.",
              },
            ],
          },
        },
        {
          id: "les-gpj-5-3",
          order: 3,
          title: {
            "pt-BR": "Aula 17: Como Obter Aceitação Formal e Encerrar o Projeto",
            "en": "Lesson 17: Obtaining Client Acceptance & Formal Project Closeout",
            "es": "Clase 17: Cómo Obtener la Aceptación Formal y Cerrar el Proyecto",
          },
          durationMinutes: 19,
          contentType: "video",
          videoUrl: "sWdYBOwiaVg",
          contentDetail: {
            objective: {
              "pt-BR": "Conduzir inspeções finais (punch-list), desmobilização ordenada de recursos e obtenção do Termo de Aceite Definitivo.",
              "en": "Execute punch-list closeout, safe crew demobilization, and secure formal client handover sign-off.",
              "es": "Conducir inspecciones finales (punch-list), desmovilización y firma del Acta de Recepción.",
            },
            summaryPoints: [
              {
                "pt-BR": "Punch-list ou lista de pendências: levantamento e saneamento rápido antes da entrega final.",
                "en": "Punch-list rectification: identifying and resolving minor punch items before handover.",
                "es": "Lista de pendientes (punch-list): resolución rápida antes del cierre definitivo.",
              },
              {
                "pt-BR": "Desmobilização segura: devolução de EPIs, descarte ambiental de resíduos e limpeza do canteiro.",
                "en": "Safe demobilization: equipment repatriation, certified waste disposal, and site housekeeping.",
                "es": "Desmovilización segura: retiro de equipos, gestión ambiental de residuos y limpieza.",
              },
            ],
          },
        },
        {
          id: "les-gpj-5-4",
          order: 4,
          title: {
            "pt-BR": "Aula 18: Como Preparar e Documentar as Lições Aprendidas",
            "en": "Lesson 18: Capturing & Documenting Project Lessons Learned",
            "es": "Clase 18: Cómo Registrar y Documentar las Lecciones Aprendidas",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "AnUuy-GFa3M",
          contentDetail: {
            objective: {
              "pt-BR": "Registrar o que funcionou bem e oportunidades de melhoria para retroalimentar orçamentos futuros da RSS3.",
              "en": "Document operational successes and improvement opportunities to refine future RSS3 tenders.",
              "es": "Documentar aciertos y desvíos para enriquecer futuros presupuestos y contratos de RSS3.",
            },
            summaryPoints: [
              {
                "pt-BR": "Reunião de post-mortem com os líderes de frente: análise de produtividade real versus planejada.",
                "en": "Post-project review with site leads: benchmarking actual vs estimated productivity.",
                "es": "Reunión de cierre con supervisores: análisis de rendimientos reales vs cotizados.",
              },
              {
                "pt-BR": "Alimentação da base de conhecimento da RSS3 Treinamentos para capacitação contínua das equipes.",
                "en": "Feeding field insights into RSS3 Treinamentos to continuously upskill future teams.",
                "es": "Alimentar la base de conocimiento de RSS3 Treinamentos para capacitar a nuevas cuadrillas.",
              },
            ],
          },
        },
      ],
    },
  ],
  finalAssessment: {
    id: "exam-gestao-de-projetos",
    order: 19,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 50,
    questionsCount: 10,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação final sobre os conceitos e práticas de Gestão de Projetos Industriais & Paradas de Manutenção. Nota mínima de 70% para emissão do certificado.",
      "en": "Final examination on industrial project management and shutdown workflows. 70% passing score.",
      "es": "Evaluación final de gestión de proyectos industriales y paradas de planta. Calificación mínima de 70%.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência — Gestão de Projetos Industriais",
      "en": "Final Competency Exam — Industrial Project Management",
      "es": "Evaluación Final de Competencias — Gestión de Proyectos Industriales",
    },
    description: {
      "pt-BR": "Validação de domínio em Estrutura Analítica do Projeto (EAP), Método do Caminho Crítico (CPM), Gestão de Valor Agregado (EVM), controle de mudanças e aditivos, curva S, matriz de riscos e ritos de encerramento contratual.",
      "en": "Validates proficiency in WBS/EAP, Critical Path Method (CPM), Earned Value Management (EVM), change order governance, S-Curves, risk matrices, and contract closeout protocols.",
      "es": "Valida competencias en EDT/WBS, Ruta Crítica (CPM), Gestión del Valor Ganado (EVM), control de cambios y aditivos, curva S, matriz de riesgos y cierre contractual.",
    },
    questions: [
      {
        id: "q-gpj-1",
        order: 1,
        question: {
          "pt-BR": "Cenário Operacional: Durante a estruturação da Estrutura Analítica do Projeto (EAP/WBS) para uma parada geral de manutenção em digestores e caldeiras industriais pela RSS3, o coordenador de planejamento deve aplicar a 'Regra dos 100%'. Qual é a definição exata e o desdobramento prático dessa regra na gestão do escopo?",
          "en": "Operational Scenario: Structuring the Work Breakdown Structure (WBS) for a major industrial boiler and digester turnaround at RSS3, the planning lead must apply the '100% Rule'. What is the exact definition and practical consequence in scope governance?",
          "es": "Escenario Operativo: Al diseñar la Estructura de Desglose del Trabajo (EDT/WBS) para una parada de mantenimiento en digestores y calderas en RSS3, el coordinador debe aplicar la 'Regla del 100%'. ¿Cuál es la definición exacta y el impacto práctico?",
        },
        options: [
          {
            id: "opt-gpj-1-a",
            text: {
              "pt-BR": "Garantir que todos os colaboradores trabalhem 100% das horas em regime extraordinário durante toda a parada de fábrica.",
              "en": "Ensuring all crew members work 100% of their hours on overtime throughout the shutdown.",
              "es": "Asegurar que todo el personal trabaje el 100% de las horas en turnos extras durante la parada.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A regra dos 100% refere-se à cobertura exaustiva do escopo de entregas, não a regimes de jornada de trabalho.",
              "en": "Incorrect. The 100% rule governs scope deliverables coverage, not overtime shifts.",
              "es": "Incorrecto. Se refiere a la cobertura completa del alcance, no a horas extras.",
            },
          },
          {
            id: "opt-gpj-1-b",
            text: {
              "pt-BR": "A EAP deve englobar 100% do trabalho definido pelo escopo do projeto e todas as suas entregas internas e externas contratuais; a soma do trabalho nos níveis inferiores deve totalizar exatamente 100% do trabalho representado pelo nível superior, sem omissões nem adição de tarefas fora do contrato.",
              "en": "The WBS must encompass 100% of work defined by project scope including all internal and client deliverables; the sum of work at lower child levels must equal exactly 100% of the parent deliverable, with neither omissions nor gold-plating.",
              "es": "La EDT debe abarcar el 100% del trabajo y entregables contractuales; la suma de los paquetes hijos debe totalizar exactamente el 100% del elemento padre, sin omitir tareas ni agregar trabajos no acordados.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A regra dos 100% do PMI assegura que nada essencial seja esquecido no planejamento e impede a inclusão de escopo não remunerado (gold plating).",
              "en": "Correct! The PMI 100% rule ensures no deliverable is missed while preventing unapproved scope creep.",
              "es": "¡Correcto! Asegura la integridad total del alcance sin omisiones ni trabajos no reconocidos.",
            },
          },
          {
            id: "opt-gpj-1-c",
            text: {
              "pt-BR": "Exigir que o cliente pague 100% do valor do contrato adiantado antes de mobilizar os equipamentos de hidrojato na portaria.",
              "en": "Demanding 100% advance cash payment from the client prior to dispatching hydroblasting trucks.",
              "es": "Exigir al cliente el 100% del pago por adelantado antes de ingresar con los equipos a planta.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Trata-se de uma regra de decomposição hierárquica de escopo, não de cláusula de fluxo de caixa comercial.",
              "en": "Incorrect. This is a scope decomposition standard, not a billing milestone.",
              "es": "Incorrecto. Es un principio de alcance, no una condición comercial de pago.",
            },
          },
          {
            id: "opt-gpj-1-d",
            text: {
              "pt-BR": "Decompor o projeto até que cada tarefa dure exatamente 100 minutos em campo, independentemente da complexidade.",
              "en": "Decomposing the project until every site task lasts exactly 100 minutes regardless of complexity.",
              "es": "Descomponer el proyecto hasta que cada tarea dure exactamente 100 minutos en campo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A granularidade da EAP baseia-se em pacotes de trabalho mensuráveis e gerenciáveis, não em duração arbitrária de 100 minutos.",
              "en": "Incorrect. WBS work package granularity is dictated by management control, not arbitrary minute limits.",
              "es": "Incorrecto. La granularidad de la EDT se define por entregables gestionables, no por minutos arbitrarios.",
            },
          },
        ],
      },
      {
        id: "q-gpj-2",
        order: 2,
        question: {
          "pt-BR": "Cenário Operacional: No cronograma detalhado em rede de uma parada crítica, a atividade de montagem de andaime na torre de recuperação está no Caminho Crítico (CPM) com duração estimada de 3 dias e Folga Total (Total Float) igual a zero. Paralelamente, a montagem da passarela de acesso do almoxarifado possui Folga Total de 4 dias. Qual é a correta interpretação técnica para o gerenciamento das duas atividades?",
          "en": "Operational Scenario: In a critical path network schedule for a mill shutdown, scaffolding erection in the recovery boiler is on the Critical Path (CPM) with a 3-day duration and Total Float = 0. Concurrently, walkway access scaffolding shows Total Float = 4 days. What is the correct management interpretation?",
          "es": "Escenario Operativo: En el cronograma CPM de parada, el armado de andamio en caldera está en la Ruta Crítica con duración de 3 días y Holgura Total = 0. En paralelo, la pasarela de almacén tiene Holgura Total = 4 días. ¿Cuál es la interpretación correcta?",
        },
        options: [
          {
            id: "opt-gpj-2-a",
            text: {
              "pt-BR": "Qualquer atraso de 1 dia na montagem do andaime da caldeira postergará diretamente a data final de entrega e religamento da fábrica; já a passarela pode atrasar até 4 dias sem impactar o prazo final do projeto.",
              "en": "Any 1-day slip in boiler scaffolding will directly push back the final plant recommissioning date; whereas the access walkway can be delayed up to 4 days without delaying project completion.",
              "es": "Cualquier atraso de 1 día en el andamio de caldera retrasará directamente la entrega final de la planta; la pasarela puede retrasarse hasta 4 días sin afectar el plazo final del proyecto.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Atividades no Caminho Crítico possuem folga zero e determinam a duração mínima do projeto. Desvios nelas atrasam o encerramento do contrato.",
              "en": "Correct! Critical path tasks have zero total float and dictate completion dates. Slippages immediately delay handover.",
              "es": "¡Correcto! Las actividades de ruta crítica tienen holgura cero; cualquier desvío retrasa todo el proyecto.",
            },
          },
          {
            id: "opt-gpj-2-b",
            text: {
              "pt-BR": "A atividade com folga zero pode ser esquecida pelos encarregados pois seu prazo já está 100% garantido matematicamente.",
              "en": "The zero-float activity can be neglected by supervisors since its completion is mathematically guaranteed.",
              "es": "La actividad con holgura cero no requiere supervisión ya que su plazo está matemáticamente asegurado.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Pelo contrário: atividades de folga zero exigem monitoramento contínuo e prioritário de recursos.",
              "en": "Incorrect. Zero-float activities require the tightest oversight and immediate resource allocation.",
              "es": "Incorrecto. Requieren máxima prioridad y seguimiento intensivo.",
            },
          },
          {
            id: "opt-gpj-2-c",
            text: {
              "pt-BR": "Ambas as tarefas possuem a mesma criticidade, devendo os recursos serem divididos exatamente em partes iguais em caso de chuva.",
              "en": "Both activities share identical criticality, requiring resources to be split 50/50 during adverse weather.",
              "es": "Ambas tareas tienen igual criticidad y los recursos deben dividirse por mitades ante imprevistos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Em contingências, recursos devem ser concentrados nas atividades críticas para proteger a data marco.",
              "en": "Incorrect. Contingency resources must be funneled to critical path activities to protect milestones.",
              "es": "Incorrecto. Los recursos de contingencia deben priorizar la ruta crítica.",
            },
          },
          {
            id: "opt-gpj-2-d",
            text: {
              "pt-BR": "A atividade da caldeira pode atrasar até 10 dias porque o cliente sempre concede prorrogações sem penalidades contratuais.",
              "en": "The boiler task can slip up to 10 days because industrial clients always grant penalty-free deadline extensions.",
              "es": "La tarea de la caldera puede retrasarse 10 días porque los clientes siempre otorgan prórrogas sin multas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Atrasos em paradas industriais geram perdas de milhões ao cliente e multas contratuais pesadas à contratada.",
              "en": "Incorrect. Shutdown delays cost millions in lost production and trigger severe liquidated damages.",
              "es": "Incorrecto. Los retrasos en paradas industriales generan cuantiosas pérdidas y penalizaciones contractuales.",
            },
          },
        ],
      },
      {
        id: "q-gpj-3",
        order: 3,
        question: {
          "pt-BR": "Cenário Operacional: Na medição do 15º dia de uma obra industrial com orçamento total (BAC) de R$ 1.000.000,00, a equipe de planejamento da RSS3 apurou os seguintes dados de Análise de Valor Agregado (EVM): Valor Planejado (PV) = R$ 500.000,00; Valor Agregado (EV) = R$ 400.000,00; Custo Real (AC) = R$ 450.000,00. Calculando o Índice de Desempenho de Prazos (SPI = EV / PV) e o Índice de Desempenho de Custos (CPI = EV / AC), qual é a situação real do projeto?",
          "en": "Operational Scenario: On day 15 of an industrial turnaround with Budget at Completion (BAC) = R$ 1,000,000, EVM metrics show: Planned Value (PV) = R$ 500,000; Earned Value (EV) = R$ 400,000; Actual Cost (AC) = R$ 450,000. Calculating Schedule Performance Index (SPI = EV/PV) and Cost Performance Index (CPI = EV/AC), what is the true project status?",
          "es": "Escenario Operativo: Al día 15 de una obra con BAC = R$ 1.000.000, los datos de EVM son: PV = R$ 500.000; EV = R$ 400.000; AC = R$ 450.000. Calculando el SPI (EV/PV) y el CPI (EV/AC), ¿cuál es el estado real del proyecto?",
        },
        options: [
          {
            id: "opt-gpj-3-a",
            text: {
              "pt-BR": "SPI = 1,25 e CPI = 1,12; o projeto está adiantado no cronograma e abaixo do custo orçado.",
              "en": "SPI = 1.25 and CPI = 1.12; the project is ahead of schedule and running under budget.",
              "es": "SPI = 1,25 y CPI = 1,12; el proyecto está adelantado en plazo y por debajo del costo previsto.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A relação calculada inverteu os numeradores e denominadores.",
              "en": "Incorrect. Mathematical calculation inverted numerators and denominators.",
              "es": "Incorrecto. Se invirtieron numeradores y denominadores en la fórmula.",
            },
          },
          {
            id: "opt-gpj-3-b",
            text: {
              "pt-BR": "SPI = 0,80 (400k/500k) e CPI = 0,89 (400k/450k); o projeto está atrasado em relação ao cronograma planejado e operando com sobrecusto financeiro (estouro de orçamento).",
              "en": "SPI = 0.80 (400k/500k) and CPI = 0.89 (400k/450k); the project is running behind schedule and over budget.",
              "es": "SPI = 0,80 (400k/500k) y CPI = 0,89 (400k/450k); el proyecto está retrasado respecto al cronograma y con sobrecosto respecto al presupuesto.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Ambos os índices são menores que 1,00: entregou-se apenas 80% do avanço físico previsto (atraso) gastando R$ 1,12 para cada R$ 1,00 de valor agregado (sobrecusto).",
              "en": "Correct! Both indexes are below 1.00: producing only 80% of scheduled progress while spending R$ 1.12 for every R$ 1.00 of earned value.",
              "es": "¡Correcto! Ambos índices son inferiores a 1,00: avance físico al 80% de lo previsto y sobrecosto financiero.",
            },
          },
          {
            id: "opt-gpj-3-c",
            text: {
              "pt-BR": "SPI = 1,00 e CPI = 1,00; o projeto está perfeitamente alinhado às metas sem qualquer desvio.",
              "en": "SPI = 1.00 and CPI = 1.00; the project perfectly matches initial baseline targets.",
              "es": "SPI = 1,00 y CPI = 1,00; el proyecto avanza exactamente como fue planeado.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Os valores realizados diferem substancialmente das metas planejadas.",
              "en": "Incorrect. Actual earned and cost figures deviate substantially from baseline.",
              "es": "Incorrecto. Las cifras reales difieren significativamente de la línea base.",
            },
          },
          {
            id: "opt-gpj-3-d",
            text: {
              "pt-BR": "A análise EVM não é aplicável a serviços de manutenção industrial e pintura.",
              "en": "EVM analysis cannot be applied to industrial maintenance and coating contracts.",
              "es": "El método EVM no es aplicable a obras de mantenimiento industrial.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O EVM é amplamente consagrado no controle físico-financeiro de grandes paradas e contratos de engenharia.",
              "en": "Incorrect. EVM is the global standard for progress and financial governance in heavy industrial shutdowns.",
              "es": "Incorrecto. EVM es el estándar internacional para control físico-financiero en paradas industriales.",
            },
          },
        ],
      },
      {
        id: "q-gpj-4",
        order: 4,
        question: {
          "pt-BR": "Cenário Operacional: Em campo, durante a execução de hidrojato em um tanque, o fiscal do cliente solicita verbalmente que a equipe da RSS3 realize a limpeza e pintura de um duto secundário de 40 metros que não consta no escopo contratual original nem na EAP aprovada. Como a gerência de projetos deve proceder formalmente?",
          "en": "Operational Scenario: On site, while hydroblasting a tank, the client inspector verbally instructs the RSS3 crew to blast and paint a secondary 40-meter duct not included in the signed scope or approved WBS. How must the project lead formally proceed?",
          "es": "Escenario Operativo: Durante el hidrojet en un estanque, la supervisión del cliente solicita verbalmente limpiar y pintar un conducto de 40 metros no contemplado en el contrato ni en la EDT. ¿Cómo debe proceder formalmente el jefe de proyecto?",
        },
        options: [
          {
            id: "opt-gpj-4-a",
            text: {
              "pt-BR": "Executar o serviço imediatamente sem nada registrar no Relatório Diário de Obra (RDO) para agradar verbalmente a fiscalização.",
              "en": "Immediately execute the work without logging it in daily reports to keep the inspector verbally pleased.",
              "es": "Ejecutar el servicio de inmediato sin anotar nada en el reporte diario para complacer al inspector.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e lesivo. Executar serviços fora de escopo sem autorização formal gera despesas não faturáveis e compromete o prazo contratado.",
              "en": "Incorrect. Performing unauthorized out-of-scope work generates unrecoverable costs and jeopardizes core deadlines.",
              "es": "Incorrecto. Realizar trabajos fuera de contrato sin respaldo genera sobrecostos no reconocidos.",
            },
          },
          {
            id: "opt-gpj-4-b",
            text: {
              "pt-BR": "Paralisar imediatamente toda a fábrica e ajuizar rescisão contratual contra o cliente.",
              "en": "Immediately shut down all site work and file for immediate contract termination against the client.",
              "es": "Paralizar todas las actividades del contrato y demandar la rescisión judicial.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e desproporcional. Solicitações de alteração de escopo fazem parte da rotina e são tratadas pelo rito de gestão de mudanças.",
              "en": "Incorrect and disproportionate. Scope changes are standard occurrences governed through change control workflows.",
              "es": "Incorrecto y desmedido. Los cambios de alcance se tramitan mediante el proceso formal de gestión de cambios.",
            },
          },
          {
            id: "opt-gpj-4-c",
            text: {
              "pt-BR": "Emitir uma Solicitação de Mudança de Escopo (Change Request/Aditivo), precificar o impacto em custo e prazo, obter a aprovação formal escrita do gestor do contrato do cliente e aditar o cronograma e orçamento antes de mobilizar recursos na tarefa extra.",
              "en": "Issue a formal Change Request / Variation Order, quantify cost and schedule impact, secure signed approval from the client's contract manager, and amend the baseline before mobilizing resources for the extra task.",
              "es": "Emitir una Solicitud de Cambio de Alcance (Aditivo/Orden de Variación), cuantificar el impacto en costo y plazo, obtener aprobación escrita del cliente y actualizar la línea base antes de movilizar cuadrillas.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A governança de mudanças protege o equilíbrio econômico-financeiro do contrato e assegura que prazos e custos adicionais sejam reconhecidos e remunerados.",
              "en": "Correct! Formal change governance protects project margin, guarantees billing rights, and incorporates necessary schedule extensions.",
              "es": "¡Correcto! El control formal de cambios salvaguarda el margen económico y garantiza el cobro de adicionales.",
            },
          },
          {
            id: "opt-gpj-4-d",
            text: {
              "pt-BR": "Repassar a tarefa verbal para uma empresa concorrente executar sem que ninguém saiba.",
              "en": "Subcontract the verbal task off-the-books to a local competitor without documentation.",
              "es": "Transferir la tarea verbalmente a otra empresa competidora de forma clandestina.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e antiético. Viola cláusulas de confidencialidade e regras contratuais da RSS3.",
              "en": "Incorrect and unethical. Breaches contractual confidentiality and vendor liability covenants.",
              "es": "Incorrecto e inaceptable. Viola acuerdos contractuales y normas de ética.",
            },
          },
        ],
      },
      {
        id: "q-gpj-5",
        order: 5,
        question: {
          "pt-BR": "Cenário Operacional: Na gestão de riscos de um contrato industrial em área classificada (atmosfera potencialmente inflamável), a equipe identifica o risco: 'Presença de vapores inflamáveis durante jateamento com geração de centelha estática'. Sendo a probabilidade avaliada em Média (3) e o impacto em Crítico/Catastrófico (5), qual estratégia e ação de resposta a riscos devem ser adotadas no plano de gerenciamento?",
          "en": "Operational Scenario: In risk planning for a classified hazardous zone contract (flammable atmosphere), the team identifies: 'Accumulation of flammable vapors during blasting sparking static discharge'. With Probability = Medium (3) and Impact = Catastrophic (5), which risk response strategy and countermeasure must be implemented?",
          "es": "Escenario Operativo: En la gestión de riesgos en atmósfera inflamable, se detecta: 'Vapores inflamables durante granallado con descarga de chispa estática'. Probabilidad = Media (3) e Impacto = Catastrófico (5). ¿Qué estrategia y medida preventiva deben aplicarse?",
        },
        options: [
          {
            id: "opt-gpj-5-a",
            text: {
              "pt-BR": "Aceitar passivamente o risco sem nenhuma ação preventiva, torcendo para que não ocorra nenhuma ignição durante o turno.",
              "en": "Passively accept the risk taking zero preventive steps, hoping ignition does not happen.",
              "es": "Aceptar pasivamente el riesgo sin implementar medidas, esperando que no ocurra ignición.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e criminoso. Riscos de severidade catastrófica não podem ser tolerados nem aceitos passivamente na indústria pesada.",
              "en": "Incorrect. Catastrophic risks cannot be passively accepted in industrial environments.",
              "es": "Incorrecto y negligente. Riesgos catastróficos nunca pueden ser aceptados pasivamente.",
            },
          },
          {
            id: "opt-gpj-5-b",
            text: {
              "pt-BR": "Adotar estratégia de 'Mitigação/Prevenção Ativa': exigir monitoramento contínuo de gases inflamáveis (explosímetro calibrado), aterramento eletrostático certificado de bicos e mangueiras condutivas, Permissão de Trabalho Especial para Quente e ventilação forçada anti-fagulha.",
              "en": "Adopt 'Active Mitigation/Prevention': enforce continuous explosive gas monitoring (calibrated explosimeter), certified static grounding on conductive hoses and nozzles, Hot Work Permits, and explosion-proof forced ventilation.",
              "es": "Aplicar estrategia de 'Mitigación/Prevención Activa': monitoreo continuo de gases (explosímetro calibrado), puesta a tierra de mangueras y boquillas antiestáticas, Permiso de Trabajo en Caliente y ventilación forzada antiexplosiva.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Riscos de alto impacto (severidade 5) exigem barreiras duras de engenharia e procedimentos de mitigação preventiva para reduzir a probabilidade de ocorrência a níveis aceitáveis.",
              "en": "Correct! High-consequence risks (severity 5) demand engineered barriers and mandatory procedural safeguards to bring likelihood down to As Low As Reasonably Practicable (ALARP).",
              "es": "¡Correcto! Riesgos de severidad catastrófica exigen barreras duras de ingeniería y monitoreo continuo.",
            },
          },
          {
            id: "opt-gpj-5-c",
            text: {
              "pt-BR": "Comprar uma apólice de seguro de vida e dispensar o aterramento dos equipamentos.",
              "en": "Buying an extra life insurance policy while dispensing with equipment electrical grounding.",
              "es": "Contratar un seguro de vida adicional y omitir la puesta a tierra de los equipos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Seguros transferem risco financeiro, mas não protegem a vida dos colaboradores em campo.",
              "en": "Incorrect. Insurance transfers financial liability but fails to prevent fatal physical incidents.",
              "es": "Incorrecto. Los seguros financieros no previenen muertes ni sustituyen las barreras de seguridad.",
            },
          },
          {
            id: "opt-gpj-5-d",
            text: {
              "pt-BR": "Acelerar o serviço para trabalhar no escuro sem ligar os exaustores de segurança.",
              "en": "Speeding up the job to work in total darkness without switching on safety exhaust fans.",
              "es": "Acelerar el trabajo a oscuras sin encender los sistemas de extracción de gases.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e perigoso. Viola diretamente as normas de segurança em áreas confinadas e inflamáveis.",
              "en": "Incorrect and reckless. Violates confined space and hazardous zone safety standards.",
              "es": "Incorrecto y temerario. Viola los protocolos de seguridad en espacios confinados y clasificados.",
            },
          },
        ],
      },
      {
        id: "q-gpj-6",
        order: 6,
        question: {
          "pt-BR": "Cenário Operacional: Durante reuniões de acompanhamento diário com a fiscalização do cliente, a equipe de engenharia da RSS3 utiliza a 'Curva S' física e financeira. Quando a linha do realizado físico se descola para baixo da linha da linha de base planejada, o que essa representação gráfica diagnostica?",
          "en": "Operational Scenario: In daily progress alignment meetings with client representatives, RSS3 engineering reviews the physical and financial 'S-Curve'. When the actual progress curve dips below the planned baseline curve, what does this graphical trend diagnose?",
          "es": "Escenario Operativo: En las reuniones de seguimiento diario con el cliente, el equipo de RSS3 analiza la 'Curva S'. Si la curva de avance real cae por debajo de la línea base planificada, ¿qué diagnostica esta tendencia gráfica?",
        },
        options: [
          {
            id: "opt-gpj-6-a",
            text: {
              "pt-BR": "Que o projeto concluiu todas as tarefas antes do tempo previsto.",
              "en": "That the project finished all tasks ahead of estimated schedule.",
              "es": "Que el proyecto finalizó todas las tareas antes del tiempo previsto.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Estar abaixo da linha de base indica atraso na produção física planejada.",
              "en": "Incorrect. Running below baseline signifies schedule delay and volume deficit.",
              "es": "Incorrecto. Estar por debajo de la línea base indica retraso en la producción física.",
            },
          },
          {
            id: "opt-gpj-6-b",
            text: {
              "pt-BR": "Diagnostica atraso físico acumulado (desvio negativo de avanço), sinalizando que o ritmo de produção em campo está inferior à taxa planejada e exigirá ações de recuperação (como revisão de frentes de trabalho ou turnos adicionais) para evitar o descumprimento do marco final.",
              "en": "It diagnoses accumulated physical delay (negative schedule variance), indicating site production throughput is lagging baseline velocity and requiring recovery plans (such as resequencing crews or adding shifts) to avert missing milestones.",
              "es": "Diagnostica un atraso físico acumulado (desvío negativo), indicando que el ritmo de avance en campo es inferior al planificado y requerirá planes de recuperación (reorganización de cuadrillas o turnos) para no incumplir la fecha de entrega.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A inclinação e a posição da Curva S evidenciam visualmente a desaceleração do avanço, permitindo atuar antes que o atraso se torne irreversível.",
              "en": "Correct! The S-Curve slope and variance visually expose velocity drops early, enabling corrective recovery actions before deadlines expire.",
              "es": "¡Correcto! La Curva S alerta oportunamente sobre la pérdida de rendimiento para tomar acciones correctivas inmediatas.",
            },
          },
          {
            id: "opt-gpj-6-c",
            text: {
              "pt-BR": "Que o valor do contrato foi cancelado automaticamente pelo banco central.",
              "en": "That the contract was automatically canceled by the central bank.",
              "es": "Que el contrato fue revocado de manera automática por el banco central.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A curva S é uma ferramenta de engenharia e gestão de projetos, não um índice bancário.",
              "en": "Incorrect. The S-Curve is a project scheduling tool, not a central bank metric.",
              "es": "Incorrecto. Es una herramienta de seguimiento de obra, no una orden bancaria.",
            },
          },
          {
            id: "opt-gpj-6-d",
            text: {
              "pt-BR": "Que a quantidade de chuva foi menor do que a média histórica dos últimos 10 anos.",
              "en": "That rainfall was lower than the historical 10-year rolling average.",
              "es": "Que las lluvias registradas fueron menores al promedio de la última década.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Embora o clima possa afetar a produção, a curva S afere o avanço físico acumulado das entregas de engenharia.",
              "en": "Incorrect. Weather may cause delays, but the S-Curve directly charts cumulative engineered progress.",
              "es": "Incorrecto. La curva S mide el avance físico de los entregables del contrato.",
            },
          },
        ],
      },
      {
        id: "q-gpj-7",
        order: 7,
        question: {
          "pt-BR": "Cenário Operacional: O Relatório Diário de Obra (RDO) é o documento jurídico e técnico primário preenchido ao final de cada turno pelos líderes de frente da RSS3. Em caso de paralisação dos serviços de pintura devido a vazamento de vapor provocado por outra empreiteira contratada diretamente pelo cliente, qual informação é indispensável registrar no RDO para resguardar a empresa?",
          "en": "Operational Scenario: The Daily Site Log (RDO) is the primary legal and technical record filled at shift end by RSS3 leads. If coating works are halted due to a high-pressure steam leak caused by a third-party contractor hired by the client, what detail is critical to log in the RDO?",
          "es": "Escenario Operativo: El Reporte Diario de Obra (RDO) es el documento contractual clave al cierre del turno en RSS3. Ante una paralización de pintura por fuga de vapor originada por otra contratista del cliente, ¿qué dato es indispensable registrar?",
        },
        options: [
          {
            id: "opt-gpj-7-a",
            text: {
              "pt-BR": "Registrar detalhadamente o horário de início e fim da paralisação, local exato, motivo da interferência de terceiros, equipamentos ociosos, colaboradores mobilizados sem frente de serviço e colher o ciente/assinatura do fiscal do cliente no mesmo dia.",
              "en": "Log exact start and end times, specific location, third-party interference cause, standby equipment, mobilized crew on downtime, and secure client inspector's countersignature on the same day.",
              "es": "Registrar hora exacta de inicio y fin, ubicación, causa de la interferencia ajena, equipos parados, operarios sin frente de trabajo y firma de conformidad de la supervisión del cliente en el mismo día.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O registro contemporâneo e assinado no RDO comprova impedimento imputável ao cliente/terceiro, respaldando pleitos legítimos de ressarcimento de ociosidade e prorrogação de prazo contratual.",
              "en": "Correct! Contemporaneous, signed RDO entries prove third-party site delays, creating solid legal basis for downtime compensation and schedule relief.",
              "es": "¡Correcto! El RDO firmado respalda técnicamente reclamos por horas improductivas y ampliación de plazos por causas ajenas.",
            },
          },
          {
            id: "opt-gpj-7-b",
            text: {
              "pt-BR": "Deixar o RDO em branco e enviar apenas uma mensagem de áudio informal pelo aplicativo no final de semana seguinte.",
              "en": "Leaving the RDO blank and merely sending an informal voice note the following weekend.",
              "es": "Dejar el RDO en blanco y enviar solo un mensaje de audio informal la semana siguiente.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Mensagens informais não constituem prova documental robusta perante a administração de contratos industriais.",
              "en": "Incorrect. Informal chat audio fails to constitute admissible contract evidence in heavy industry disputes.",
              "es": "Incorrecto. La comunicación informal carece de validez probatoria contractual.",
            },
          },
          {
            id: "opt-gpj-7-c",
            text: {
              "pt-BR": "Registrar que a equipe da RSS3 foi a única responsável pelo vazamento de vapor para evitar discussões com o fiscal.",
              "en": "Falsely logging that RSS3 caused the steam leak to avoid arguing with the client.",
              "es": "Anotar falsamente que RSS3 causó la fuga para evitar discusiones con el supervisor.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e desastroso. Assumir culpa por eventos de terceiros gera multas, glosas e responsabilidade civil injustificada.",
              "en": "Incorrect and disastrous. Assuming third-party blame creates severe unwarranted financial and legal liabilities.",
              "es": "Incorrecto y perjudicial. Asumir responsabilidades ajenas acarrea penalizaciones y pérdidas indebidas.",
            },
          },
          {
            id: "opt-gpj-7-d",
            text: {
              "pt-BR": "Descartar os relatórios de campo do mês inteiro para não expor desvios operacionais.",
              "en": "Destroying the entire month of field reports to conceal site occurrences.",
              "es": "Romper y desechar las hojas de reporte del mes para no mostrar atrasos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal. Viola as diretrizes de governança e integridade documental permanente da RSS3.",
              "en": "Incorrect and illegal. Breaches corporate governance and recordkeeping compliance standards.",
              "es": "Incorrecto e ilegal. Viola las políticas de integridad documental de la empresa.",
            },
          },
        ],
      },
      {
        id: "q-gpj-8",
        order: 8,
        question: {
          "pt-BR": "Cenário Operacional: Na fase de encerramento de um grande projeto industrial, a contratada conclui os serviços de campo e realiza a vistoria conjunta com o cliente para emissão da lista de pendências ('Punch List'). Qual critério técnico caracteriza os itens admissíveis em uma 'Punch List' antes da emissão do Termo de Aceite Provisório?",
          "en": "Operational Scenario: In project closeout, field works wrap up and joint inspection with the client produces the 'Punch List'. Which technical standard defines acceptable punch list items prior to issuing the Provisional Acceptance Certificate?",
          "es": "Escenario Operativo: En el cierre de un proyecto industrial, se realiza la inspección conjunta para elaborar la lista de pendientes ('Punch List'). ¿Qué criterio técnico define los ítems aceptables en una Punch List antes del Acta de Recepción Provisoria?",
        },
        options: [
          {
            id: "opt-gpj-8-a",
            text: {
              "pt-BR": "Exigir a construção de um prédio administrativo novo de 3 andares que nunca foi contratado na proposta comercial.",
              "en": "Demanding construction of a new 3-story office building never included in the contract tender.",
              "es": "Exigir la construcción de un nuevo edificio de oficinas no estipulado en la propuesta comercial.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Punch list não serve para adicionar escopo novo não contratado.",
              "en": "Incorrect. A punch list cannot be weaponized to introduce uncontracted scope.",
              "es": "Incorrecto. La lista de pendientes no puede incluir obras nuevas no contratadas.",
            },
          },
          {
            id: "opt-gpj-8-b",
            text: {
              "pt-BR": "Apenas itens de retrabalho com risco iminente de explosão e com o sistema totalmente inoperante.",
              "en": "Only rework items presenting imminent explosion hazards and rendering the plant fully inoperable.",
              "es": "Únicamente fallas graves con riesgo inminente de explosión y planta totalmente parada.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Se houver risco iminente de colapso, o sistema sequer pode receber aceite ou partida provisória.",
              "en": "Incorrect. Major safety-critical failures prevent any form of provisional turnover or system startup.",
              "es": "Incorrecto. Riesgos críticos de colapso impiden cualquier recepción provisional.",
            },
          },
          {
            id: "opt-gpj-8-c",
            text: {
              "pt-BR": "Pequenas pendências de acabamento, retoques de pintura, identificação de tags, limpeza final de canteiro e entrega de documentação as-built (dataview/certificados), que não comprometam a segurança nem a operação industrial do ativo.",
              "en": "Minor cosmetic touch-ups, coating retouches, component tagging, site housekeeping, and as-built documentation / data books that do not compromise life-safety or active plant production.",
              "es": "Pequeños detalles de acabado, retoques de pintura, rotulación de tags, limpieza de obra y entrega de documentación conforme a obra (data book) que no comprometan la seguridad ni la operación.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A Punch List reúne pendências menores não impeditivas (lista B), que podem ser sanadas em prazo acordado sem inviabilizar a partida e o aceite do cliente.",
              "en": "Correct! A standard punch list gathers non-critical minor punch items that can be cleared within an agreed window without stopping facility startup.",
              "es": "¡Correcto! La Punch List agrupa pendientes menores no impeditivos a resolver en un plazo acordado.",
            },
          },
          {
            id: "opt-gpj-8-d",
            text: {
              "pt-BR": "A punch list deve ser destruída no mesmo dia para impedir que qualquer pendência seja conhecida pela liderança.",
              "en": "The punch list must be shredded immediately to conceal punch items from corporate management.",
              "es": "La lista de pendientes debe eliminarse para ocultar los detalles pendientes a la gerencia.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A punch list é um instrumento indispensável de garantia técnica e controle da entrega.",
              "en": "Incorrect. The punch list is an essential quality assurance tool for formal contractual handover.",
              "es": "Incorrecto. Es un instrumento de control de calidad esencial para la recepción formal.",
            },
          },
        ],
      },
      {
        id: "q-gpj-9",
        order: 9,
        question: {
          "pt-BR": "Cenário Operacional: Na reunião formal de encerramento do contrato (Post-Mortem), o gerente de projetos da RSS3 reúne a equipe de campo e suprimentos para registrar as 'Lições Aprendidas'. Qual é o objetivo primário dessa prática e como ela impacta as próximas operações da empresa?",
          "en": "Operational Scenario: In the project closeout review (Post-Mortem), RSS3 leadership gathers field supervisors and procurement to document 'Lessons Learned'. What is the primary objective of this process and its impact on subsequent operations?",
          "es": "Escenario Operativo: En la reunión de cierre del contrato (Post-Mortem), el jefe de proyecto de RSS3 documenta las 'Lecciones Aprendidas'. ¿Cuál es el propósito fundamental y cómo impacta en futuros contratos?",
        },
        options: [
          {
            id: "opt-gpj-9-a",
            text: {
              "pt-BR": "Identificar os colaboradores que cometeram erros para publicar uma lista pública de demissões exemplares na empresa.",
              "en": "Identifying employees who made mistakes to publish a public termination roster as a warning.",
              "es": "Identificar operarios que fallaron para publicar una lista de despidos ejemplarizantes.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A reunião de lições aprendidas não é caça às bruxas, mas análise de processos e melhoria contínua.",
              "en": "Incorrect. Lessons learned meetings are blameless process reviews focused on systemic improvement, not punishment.",
              "es": "Incorrecto. Se enfoca en procesos y mejora sistémica, nunca en buscar culpables.",
            },
          },
          {
            id: "opt-gpj-9-b",
            text: {
              "pt-BR": "Transformar a vivência de campo em inteligência corporativa: registrar o que funcionou com excelência, o que desviou e por quê, calibrando os coeficientes de produtividade para novos orçamentos e atualizando POPs na RSS3 Treinamentos para que desvios não se repitam.",
              "en": "Converting field experience into organizational capital: logging what succeeded, what deviated and root causes, calibrating productivity rates for tenders, and updating SOPs on RSS3 Treinamentos to prevent recurring issues.",
              "es": "Transformar la experiencia de obra en inteligencia institucional: documentar aciertos, causas de desvíos, calibrar rendimientos para nuevas licitaciones y actualizar procedimientos en RSS3 Treinamentos para no repetir fallas.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O registro estruturado de lições aprendidas retroalimenta a engenharia de custos, aprimora os treinamentos internos e garante a melhoria contínua da RSS3.",
              "en": "Correct! Structured lessons learned feed estimating accuracy, upgrade workforce training modules, and cement organizational continuous improvement.",
              "es": "¡Correcto! Las lecciones aprendidas fortalecen presupuestos futuros, capacitan al personal y aseguran la excelencia operativa.",
            },
          },
          {
            id: "opt-gpj-9-c",
            text: {
              "pt-BR": "Descartar todos os arquivos da obra para liberar espaço no disco rígido sem salvar nenhum dado.",
              "en": "Deleting all contract files to free hard drive space without retaining any records.",
              "es": "Borrar todos los archivos de la obra para liberar espacio en disco sin respaldar nada.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A perda de memória técnica impede o aprendizado organizacional e viola regras de governança.",
              "en": "Incorrect. Destroying operational history cripples institutional memory and breaches compliance.",
              "es": "Incorrecto. Eliminar la memoria técnica impide el crecimiento y viola estándares de gestión.",
            },
          },
          {
            id: "opt-gpj-9-d",
            text: {
              "pt-BR": "Fazer uma festa de comemoração e fingir que nenhum atraso ou imprevisto ocorreu durante o projeto.",
              "en": "Holding a party while pretending no schedule delays or site issues ever took place.",
              "es": "Hacer un festejo simulando que no ocurrió ningún desvío ni problema en la obra.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Ignorar desvios passados garante que as mesmas falhas ocorram nas próximas paradas de fábrica.",
              "en": "Incorrect. Ignoring past challenges guarantees that identical failures will plague future contracts.",
              "es": "Incorrecto. Ignorar desvíos pasados condena a la empresa a cometer los mismos errores.",
            },
          },
        ],
      },
      {
        id: "q-gpj-10",
        order: 10,
        question: {
          "pt-BR": "Diretrizes Permanentes RSS3 e Conformidade Regulatória: Ao ser aprovado nesta Avaliação Final de Gestão de Projetos Industriais pela plataforma RSS3 Treinamentos na modalidade EAD, qual é o alcance e a natureza do certificado emitido?",
          "en": "RSS3 Permanent Guidelines & Regulatory Compliance: Upon passing this Final Exam in Industrial Project Management on the RSS3 Treinamentos EAD platform, what is the exact nature and reach of the issued certificate?",
          "es": "Directrices Permanentes de RSS3 y Cumplimiento Normativo: Al aprobar esta Evaluación Final de Gestión de Proyectos Industriales en modalidad EAD en RSS3 Treinamentos, ¿cuál es el alcance y la naturaleza del certificado?",
        },
        options: [
          {
            id: "opt-gpj-10-a",
            text: {
              "pt-BR": "O certificado de conclusão de curso EAD atesta a assimilação de conhecimentos teóricos e metodológicos de gestão, não conferindo habilitação legal privativa de engenharia (como ART/CREA) nem dispensando treinamentos presenciais práticos de segurança ou comprovação de ASO ocupacional para atuação em áreas industriais de risco.",
              "en": "The EAD completion certificate validates theoretical and methodological management competency only; it confers no statutory engineering licensing (such as CREA/PE stamp) nor does it waive mandatory hands-on safety training or valid occupational medical clearance (ASO) for entry into hazardous operational areas.",
              "es": "El certificado EAD acredita conocimientos teóricos y metodológicos de gestión; no otorga habilitación profesional colegiada de ingeniería ni exime de capacitaciones prácticas de seguridad presenciales o apto médico (ASO) para áreas industriales de riesgo.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Conforme a Seção 3 das Diretrizes Permanentes (AGENTS.md), o LMS diferencia rigorosamente formação teórica EAD de habilitação prática formal e requisitos de saúde ocupacional vigentes.",
              "en": "Correct! As per Section 3 of AGENTS.md, the LMS rigorously differentiates EAD theoretical learning from formal professional licensure and statutory medical fit-for-work status.",
              "es": "¡Correcto! Conforme a la Sección 3 de AGENTS.md, se distingue formalmente la formación teórica EAD de habilitaciones profesionales colegiadas y aptitud médica.",
            },
          },
          {
            id: "opt-gpj-10-b",
            text: {
              "pt-BR": "O certificado confere automaticamente o título de Engenheiro Chefe de Obras com poder de assinar projetos estruturais sem registro no conselho profissional.",
              "en": "The certificate automatically grants the title of Chief Civil Engineer with statutory rights to sign blueprints without professional registration.",
              "es": "El certificado otorga automáticamente el título de Ingeniero Civil Jefe con potestad de firmar planos estructurales sin registro colegiado.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal. Exercício privativo de engenharia exige diploma universitário e registro ativo no CREA/CONFEA.",
              "en": "Incorrect and illegal. Engineering practice strictly requires accredited university degrees and active statutory board licensure.",
              "es": "Incorrecto e ilegal. La ingeniería profesional exige título universitario y colegiatura legal.",
            },
          },
          {
            id: "opt-gpj-10-c",
            text: {
              "pt-BR": "O certificado substitui todas as licenças ambientais emitidas pelos órgãos de fiscalização do Estado.",
              "en": "The certificate supersedes all environmental permits issued by state environmental agencies.",
              "es": "El certificado reemplaza las licencias ambientales expedidas por organismos estatales.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Licenças ambientais são emitidas pelo poder público após rigorosos estudos de impacto.",
              "en": "Incorrect. Environmental operating permits are issued exclusively by statutory authorities.",
              "es": "Incorrecto. Las licencias ambientales son expedidas por entes públicos reguladores.",
            },
          },
          {
            id: "opt-gpj-10-d",
            text: {
              "pt-BR": "O certificado isenta a empresa contratada de recolher impostos e encargos trabalhistas sobre a folha de pagamento.",
              "en": "The certificate exempts the contractor from paying statutory payroll and social security taxes.",
              "es": "El certificado exonera a la empresa de tributos y cargas sociales de los trabajadores.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Cursos de gestão não alteram obrigações tributárias ou previdenciárias de nenhuma natureza.",
              "en": "Incorrect. Training credentials have no bearing on statutory tax or labor liabilities.",
              "es": "Incorrecto. Las capacitaciones no tienen incidencia sobre obligaciones fiscales o previsionales.",
            },
          },
        ],
      },
    ],
  },
};
