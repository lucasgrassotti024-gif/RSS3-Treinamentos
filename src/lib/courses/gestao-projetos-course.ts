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
    estimatedMinutes: 30,
    questionsCount: 5,
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
      "pt-BR": "Validação de domínio em Estrutura Analítica do Projeto (EAP), Caminho Crítico (CPM), Termo de Abertura (TAP), matriz de riscos e encerramento com lições aprendidas.",
      "en": "Validates proficiency in WBS breakdown, Critical Path Method, Project Charter, risk matrices, and closeout protocols.",
      "es": "Valida competencias en EDT/WBS, Ruta Crítica, Acta de Constitución, matriz de riesgos y lecciones aprendidas.",
    },
    questions: [
      {
        id: "q-gpj-1",
        order: 1,
        question: {
          "pt-BR": "1. O que representa a 'Regra dos 100%' na elaboração da Estrutura Analítica do Projeto (EAP/WBS) para uma parada de manutenção na RSS3?",
          "en": "1. What does the '100% Rule' signify when creating a Work Breakdown Structure (WBS) for an RSS3 plant shutdown?",
          "es": "1. ¿Qué representa la 'Regla del 100%' en la elaboración de la EDT/WBS para una parada de mantenimiento en RSS3?",
        },
        options: [
          {
            id: "opt-gpj-1-a",
            text: {
              "pt-BR": "A EAP deve englobar 100% do escopo definido pelo projeto e pelas entregas contratuais, não omitindo tarefas necessárias nem incluindo trabalhos fora do escopo acordado.",
              "en": "The WBS must encompass 100% of defined project scope and contract deliverables, neither omitting work nor including out-of-scope tasks.",
              "es": "La EDT debe abarcar el 100% del alcance y entregables contractuales, sin omitir tareas necesarias ni incluir trabajos no acordados.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A regra dos 100% garante integridade total do escopo em todos os níveis hierárquicos da EAP.",
              "en": "Correct! The 100% rule ensures complete scope integrity across all WBS levels.",
              "es": "¡Correcto! La regla del 100% asegura la integridad total del alcance sin omisiones.",
            },
          },
          {
            id: "opt-gpj-1-b",
            text: {
              "pt-BR": "Que todas as tarefas devem ser executadas com 100% de horas extras pelos colaboradores de campo.",
              "en": "That all tasks must be executed with 100% overtime by field personnel.",
              "es": "Que todas las tareas deben ejecutarse con 100% de horas extras por los operarios.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A regra dos 100% refere-se à cobertura completa do escopo e entregas, não a regimes de jornada de trabalho.",
              "en": "Incorrect. The rule refers to scope completeness, not overtime.",
              "es": "Incorrecto. Se refiere al alcance completo, no a horas extras.",
            },
          },
          {
            id: "opt-gpj-1-c",
            text: {
              "pt-BR": "Que o cliente deve antecipar 100% do pagamento financeiro antes da assinatura do Termo de Abertura.",
              "en": "That the client must prepay 100% of funds before Project Charter approval.",
              "es": "Que el cliente debe pagar el 100% del contrato por adelantado.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Trata-se de uma regra de planejamento de escopo, não de cláusula de adiantamento financeiro.",
              "en": "Incorrect. This is a scope planning principle, not a payment milestone.",
              "es": "Incorrecto. Es un principio de planificación de alcance.",
            },
          },
        ],
      },
      {
        id: "q-gpj-2",
        order: 2,
        question: {
          "pt-BR": "2. Em um cronograma de parada de fábrica, o que caracteriza as atividades que compõem o 'Caminho Crítico' (CPM)?",
          "en": "2. In a turnaround schedule, what defines activities belonging to the 'Critical Path' (CPM)?",
          "es": "2. En el cronograma de una parada de planta, ¿qué caracteriza a las actividades de la 'Ruta Crítica' (CPM)?",
        },
        options: [
          {
            id: "opt-gpj-2-a",
            text: {
              "pt-BR": "São tarefas secundárias que possuem grande folga de tempo e podem ser adiadas sem impacto na entrega.",
              "en": "Non-essential tasks with large float that can be postponed without affecting delivery.",
              "es": "Tareas secundarias que tienen holgura y pueden postergarse sin impactar la entrega.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Tarefas no caminho crítico não possuem folga.",
              "en": "Incorrect. Critical path tasks have zero float.",
              "es": "Incorrecto. Las actividades críticas no tienen holgura.",
            },
          },
          {
            id: "opt-gpj-2-b",
            text: {
              "pt-BR": "É a sequência de atividades com folga zero cuja duração total determina o prazo final de término da intervenção; qualquer atraso nelas atrasa o projeto inteiro.",
              "en": "The sequence of zero-float activities dictating overall project duration; any delay directly delays final recommissioning.",
              "es": "Es la secuencia de actividades con holgura cero que determina la duración total; cualquier atraso en ellas demora todo el proyecto.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O Caminho Crítico exige monitoramento diário rigoroso pois não tolera desvios de tempo sem postergar o religamento da fábrica.",
              "en": "Correct! The Critical Path requires rigorous daily oversight since float is zero.",
              "es": "¡Correcto! La ruta crítica no admite holgura sin retrasar la entrega final.",
            },
          },
          {
            id: "opt-gpj-2-c",
            text: {
              "pt-BR": "São apenas as compras de suprimentos de escritório realizadas pelo departamento administrativo.",
              "en": "Administrative office supplies purchasing tasks exclusively.",
              "es": "Son únicamente las compras de papelería de oficina.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O caminho crítico abrange atividades operacionais determinantes do fluxo de obra.",
              "en": "Incorrect. Critical path relates to workflow-limiting operational dependencies.",
              "es": "Incorrecto. Se refiere a las actividades operativas clave de campo.",
            },
          },
        ],
      },
      {
        id: "q-gpj-3",
        order: 3,
        question: {
          "pt-BR": "3. Durante a execução de um serviço de hidrojateamento, o fiscal do cliente solicita verbalmente que a equipe limpe uma tubulação adicional não prevista no escopo original. Como a liderança da RSS3 deve proceder?",
          "en": "3. During hydroblasting, the client inspector verbally requests cleaning an extra pipe not in original scope. How should RSS3 leadership act?",
          "es": "3. Durante la ejecución de hidrojet, el cliente pide verbalmente limpiar una cañería extra no prevista en el contrato. ¿Cómo debe proceder el líder de RSS3?",
        },
        options: [
          {
            id: "opt-gpj-3-a",
            text: {
              "pt-BR": "Registrar a solicitação formalmente no fluxo de controle de mudanças (aditivo/pleito), avaliar impactos de tempo e custo e aguardar autorização formal antes de mobilizar recursos adicionais.",
              "en": "Log request in change control workflow, evaluate cost and schedule impact, and obtain formal sign-off before allocating resources.",
              "es": "Registrar la solicitud en el control de cambios (aditivo), evaluar impacto en costo y plazo, y esperar aprobación formal antes de ejecutar.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Alterações de escopo devem ser documentadas e precificadas formalmente para evitar prejuízos financeiros e conflitos contratuais.",
              "en": "Correct! Scope additions must be evaluated and authorized formally to protect budget and delivery.",
              "es": "¡Correcto! Las variaciones de alcance deben documentarse y aprobarse formalmente.",
            },
          },
          {
            id: "opt-gpj-3-b",
            text: {
              "pt-BR": "Executar o serviço imediatamente sem qualquer registro no RDO ou comunicação com a gestão do contrato.",
              "en": "Execute immediately without logging in daily reports or informing contract leadership.",
              "es": "Ejecutar el servicio de inmediato sin anotar nada en el reporte diario de obra.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e arriscado. Pode gerar glosas, custos não recuperáveis e atrasar o caminho crítico contratado.",
              "en": "Incorrect. Leads to unbilled costs and jeopardizes core critical path deadlines.",
              "es": "Incorrecto. Genera sobrecostos no reconocidos y desvíos en el cronograma.",
            },
          },
          {
            id: "opt-gpj-3-c",
            text: {
              "pt-BR": "Paralisar imediatamente toda a fábrica e cancelar o contrato por desacordo comercial.",
              "en": "Immediately halt all site work and cancel contract due to commercial disagreement.",
              "es": "Paralizar todas las obras de la planta y cancelar el contrato de inmediato.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e desproporcional. Mudanças de escopo são comuns e devem ser tratadas com maturidade através da gestão de mudanças.",
              "en": "Incorrect. Scope modifications are routine and handled via standard change governance.",
              "es": "Incorrecto. Los cambios de alcance se gestionan mediante procedimientos formales.",
            },
          },
        ],
      },
      {
        id: "q-gpj-4",
        order: 4,
        question: {
          "pt-BR": "4. O que é o Relatório Diário de Obra (RDO) e qual a sua importância estratégica na gestão de contratos industriais?",
          "en": "4. What is the Daily Work Log (RDO) and what is its strategic value in industrial contract management?",
          "es": "4. ¿Qué es el Reporte Diario de Obra (RDO) y cuál es su valor estratégico en la gestión de contratos?",
        },
        options: [
          {
            id: "opt-gpj-4-a",
            text: {
              "pt-BR": "Um documento legal e operacional que registra diariamente o efetivo em campo, equipamentos ativos, serviços executados, condições climáticas e eventuais impedimentos ou interferências de terceiros.",
              "en": "A formal operational record logging daily headcount, equipment hours, executed output, weather, and third-party site delays.",
              "es": "Un documento legal y operativo que registra el personal en campo, equipos, avance diario, clima e interferencias de terceros.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O RDO é a memória técnica e jurídica do contrato, respaldando medições financeiras e justificativas de prorrogações ou pleitos.",
              "en": "Correct! The RDO provides legal and technical evidence for progress billing and delay justifications.",
              "es": "¡Correcto! El RDO es el respaldo técnico y contractual de los avances e interferencias.",
            },
          },
          {
            id: "opt-gpj-4-b",
            text: {
              "pt-BR": "Um panfleto promocional entregue aos visitantes da portaria da fábrica.",
              "en": "A marketing flyer distributed to visitors at the plant reception gate.",
              "es": "Un folleto publicitario para entregar a las visitas en portería.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O RDO é um instrumento formal de governança operacional e jurídica.",
              "en": "Incorrect. The RDO is a formal site governance instrument.",
              "es": "Incorrecto. Es un instrumento contractual formal.",
            },
          },
          {
            id: "opt-gpj-4-c",
            text: {
              "pt-BR": "Um documento exclusivo do almoxarifado contendo apenas notas fiscais de compra de parafusos.",
              "en": "An inventory sheet exclusively logging receipts for nuts and bolts.",
              "es": "Un documento exclusivo de almacén para archivar facturas de ferretería.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O RDO engloba todas as dimensões de produtividade, segurança e interferências da frente de trabalho.",
              "en": "Incorrect. The RDO encompasses manpower, progress, safety, and site conditions.",
              "es": "Incorrecto. Registra el conjunto de actividades del contrato.",
            },
          },
        ],
      },
      {
        id: "q-gpj-5",
        order: 5,
        question: {
          "pt-BR": "5. Por que o registro e a análise de 'Lições Aprendidas' ao final de um projeto são fundamentais para a RSS3 Soluções Industriais?",
          "en": "5. Why is capturing and analyzing 'Lessons Learned' upon project closeout vital for RSS3 Industrial Solutions?",
          "es": "5. ¿Por qué el registro y análisis de 'Lecciones Aprendidas' al cierre del proyecto es fundamental para RSS3?",
        },
        options: [
          {
            id: "opt-gpj-5-a",
            text: {
              "pt-BR": "Permite transformar a experiência de campo em conhecimento corporativo, evitando a repetição de falhas, refinando estimativas orçamentárias e aprimorando continuamente a produtividade e a segurança em intervenções futuras.",
              "en": "Converts jobsite experience into corporate knowledge, preventing error recurrence, refining tenders, and continually boosting future safety and efficiency.",
              "es": "Permite transformar la experiencia de campo en conocimiento institucional, evitando errores repetidos y mejorando presupuestos y seguridad futura.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O aprendizado institucional consolida a melhoria contínua e a excelência operacional da RSS3.",
              "en": "Correct! Institutional learning drives continuous improvement and operational excellence.",
              "es": "¡Correcto! Las lecciones aprendidas impulsan la mejora continua de la empresa.",
            },
          },
          {
            id: "opt-gpj-5-b",
            text: {
              "pt-BR": "Serve unicamente para identificar culpados por desvios e aplicar penalidades disciplinares na equipe.",
              "en": "Serves exclusively to assign blame for variances and punish field workers.",
              "es": "Sirve únicamente para culpar a operarios y aplicar sanciones disciplinarias.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Lições aprendidas têm foco no processo e no aprimoramento da organização, nunca em caça às bruxas.",
              "en": "Incorrect. Lessons learned focus on systemic and process improvement, never blaming individuals.",
              "es": "Incorrecto. Se enfoca en mejorar procesos y sistemas, no en buscar culpables.",
            },
          },
          {
            id: "opt-gpj-5-c",
            text: {
              "pt-BR": "É um relatório burocrático descartado imediatamente após a desmobilização da equipe de campo.",
              "en": "A bureaucratic memo discarded right after crew demobilization.",
              "es": "Un informe de rutina que se descarta tras la desmovilización de la obra.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O registro de lições aprendidas alimenta o banco de dados permanente da empresa.",
              "en": "Incorrect. It feeds the long-term organizational knowledge repository.",
              "es": "Incorrecto. Alimenta el banco de conocimiento permanente de la organización.",
            },
          },
        ],
      },
    ],
  },
};
