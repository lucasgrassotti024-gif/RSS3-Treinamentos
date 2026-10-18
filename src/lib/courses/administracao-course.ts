import { CourseDemonstration } from "@/types";

export const administracaoCourseData: CourseDemonstration = {
  id: "c-fundamentos-administracao-gestao",
  slug: "fundamentos-de-administracao-e-gestao-empresarial",
  title: {
    "pt-BR": "Fundamentos de Administração & Gestão Estratégica Empresarial",
    "en": "Fundamentals of Management & Strategic Business Administration",
    "es": "Fundamentos de Administración y Gestión Empresarial Estratégica",
  },
  description: {
    "pt-BR": "Capacitação completa em administração empresarial: evolução do pensamento administrativo (Taylor, Fayol, Ford e Weber), funções essenciais da gestão (Planejamento, Organização, Direção e Controle - PODC), tomada de decisão, liderança, cultura organizacional e governança corporativa.",
    "en": "Comprehensive business administration training: evolution of management theories (Taylor, Fayol, Ford, Weber), core managerial functions (Planning, Organizing, Leading, Controlling - POLC), strategic decision-making, organizational culture, and corporate governance.",
    "es": "Capacitación en administración y gestión empresarial: evolución de las teorías administrativas, funciones gerenciales (Planificar, Organizar, Dirigir y Controlar), liderazgo y cultura organizacional.",
  },
  longDescription: {
    "pt-BR": "O curso de Fundamentos de Administração & Gestão Estratégica da RSS3 Treinamentos foi estruturado para desenvolver visão holística e competências executivas em líderes de contrato, assistentes administrativos, planejadores de manutenção, engenheiros e encarregados operacionais. O programa cobre as 3 grandes unidades da ciência da administração: desde as origens industriais e teorias clássicas da administração científica, passando pelo desenho de estruturas organizacionais, departamentalização, delegação e liderança comportamental, até os modernos sistemas de governança, estratégia corporativa, matriz SWOT, controle de indicadores e tomada de decisão fundamentada em dados.",
    "en": "The RSS3 Fundamentals of Business Management course develops executive acumen for site contract managers, project controllers, maintenance planners, and operational leads. Covers classical management theory, organizational structural design, departmentalization, delegation, behavioral leadership models, SWOT analysis, KPI performance monitoring, and governance.",
    "es": "Capacitación directiva para supervisores, jefes de contrato y planificadores de RSS3. Desarrolla competencias en estructura organizacional, liderazgo, control de gestión y toma de decisiones estratégicas.",
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
    "Líder de Frente Operacional",
    "Assistente Administrativo",
    "Planejador de Manutenção",
    "Analista de PCM",
    "Supervisor de Operações",
    "Engenheiro de Produção",
  ],
  targetAudience: {
    "pt-BR": "Líderes de contrato, supervisores industriais, coordenadores de equipe, assistentes de faturamento, planejadores e colaboradores que buscam ascensão na carreira de gestão industrial.",
    "en": "Contract managers, plant supervisors, team leads, project controllers, and craft personnel aspiring to leadership roles.",
    "es": "Jefes de faena, administradores de obra, supervisores y técnicos que buscan proyectarse en roles gerenciales.",
  },
  prerequisites: {
    "pt-BR": "Ensino médio completo e noções básicas de rotinas corporativas ou industriais.",
    "en": "High school education and basic familiarity with business or industrial plant routines.",
    "es": "Enseñanza media completa y nociones de operaciones de empresa.",
  },
  modulesCount: 3,
  lessonsCount: 12,
  thumbnailGradient: "from-blue-950 via-slate-900 to-indigo-950",
  coverImage: "/images/courses/administracao.jpg",
  categories: ["gestao-produtividade", "qualidade-processos"],
  badgeCode: "ADM-RSS3",
  updatedAtDate: "2026-10-17",
  modules: [
    {
      id: "mod-adm-1",
      order: 1,
      title: {
        "pt-BR": "Unidade 1: Evolução Histórica da Administração e Teorias Clássicas",
        "en": "Unit 1: Historical Evolution of Management & Classical Theories",
        "es": "Unidad 1: Evolución Histórica de la Administración y Teorías Clásicas",
      },
      description: {
        "pt-BR": "As origens da administração moderna, a Revolução Industrial, a Administração Científica de Taylor, a Teoria Clássica de Fayol e a Burocracia de Max Weber.",
        "en": "Origins of modern management, the Industrial Revolution, Taylor's Scientific Management, Fayol's Classical Theory, and Weber's Bureaucracy.",
        "es": "Orígenes de la administración moderna, Taylorismo, Fayol y la Burocracia de Weber.",
      },
      lessons: [
        {
          id: "les-adm-1-1",
          order: 1,
          title: {
            "pt-BR": "Fundamentos de Administração — A Revolução Industrial e o Surgimento da Gestão (Aula 01)",
            "en": "Management Fundamentals — Industrial Revolution & Emergence of Management (Lesson 01)",
            "es": "Fundamentos de Administración — Revolución Industrial y Origen de la Gestión (Clase 01)",
          },
          durationMinutes: 15,
          contentType: "video",
          videoUrl: "pnACtXLCAsY",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender o contexto socioeconômico da Revolução Industrial que impulsionou o surgimento da administração como ciência formal.",
              "en": "Understand the socio-economic context of the Industrial Revolution driving management as a formal science.",
              "es": "Comprender el contexto histórico que dio origen a la administración científica.",
            },
            summaryPoints: [
              {
                "pt-BR": "Transição da manufatura artesanal para o sistema fabril mecanizado: a necessidade de coordenação de grandes contingentes humanos e máquinas.",
                "en": "Shift from artisanal craft to mechanized factory systems: coordinating large workforces and capital assets.",
                "es": "Transición del taller artesanal a la fábrica mecanizada a gran escala.",
              },
              {
                "pt-BR": "Conceito de empresa e seus recursos fundamentais: humanos, financeiros, materiais, mercadológicos e tecnológicos.",
                "en": "Enterprise concepts and core resources: human, financial, physical, market, and technological capital.",
                "es": "Recursos de la empresa: humanos, materiales, financieros y tecnológicos.",
              },
              {
                "pt-BR": "A busca permanente pela eficiência (fazer certo as coisas) e eficácia (atingir os resultados certos).",
                "en": "The ongoing pursuit of efficiency (doing things right) and effectiveness (doing the right things).",
                "es": "Diferencia entre eficiencia (uso de recursos) y eficacia (logro de objetivos).",
              },
            ],
          },
        },
        {
          id: "les-adm-1-2",
          order: 2,
          title: {
            "pt-BR": "Fundamentos de Administração — Administração Científica de Taylor e Ford (Aula 02)",
            "en": "Management Fundamentals — Taylor's Scientific Management & Ford (Lesson 02)",
            "es": "Fundamentos de Administración — Administración Científica de Taylor y Ford (Clase 02)",
          },
          durationMinutes: 16,
          contentType: "video",
          videoUrl: "-vIXhrXvtQY",
          contentDetail: {
            objective: {
              "pt-BR": "Analisar a ênfase nas tarefas de Frederick Taylor e a linha de produção em massa de Henry Ford.",
              "en": "Analyze Taylor's task-level scientific management and Henry Ford's assembly line principles.",
              "es": "Analizar la administración científica de Taylor y las líneas de montaje de Ford.",
            },
            summaryPoints: [
              {
                "pt-BR": "Estudo de tempos e movimentos: padronização das tarefas operacionais para eliminar desperdícios de energia e tempo.",
                "en": "Time and motion studies: standardizing operational tasks to eradicate wasted motion.",
                "es": "Estudio de tiempos y movimientos para maximizar la productividad del operario.",
              },
              {
                "pt-BR": "Princípios de Ford: intensificação do ritmo, economicidade e produtividade em escala com a linha de montagem móvel.",
                "en": "Ford principles: intensification, economy of scale, and high-volume flow assembly lines.",
                "es": "Principios fordistas: producción en serie, especialización y reducción de costos.",
              },
              {
                "pt-BR": "Legado na indústria moderna: procedimentos operacionais padrão (POP) utilizados nas frentes de hidrojato e manutenção.",
                "en": "Modern industrial legacy: Standard Operating Procedures (SOPs) widely used in industrial maintenance and shutdowns.",
                "es": "Base histórica de los Procedimientos Operativos Estandarizados (POE).",
              },
            ],
          },
        },
        {
          id: "les-adm-1-3",
          order: 3,
          title: {
            "pt-BR": "Fundamentos de Administração — Teoria Clássica de Fayol e Funções da Empresa (Aula 03)",
            "en": "Management Fundamentals — Fayol's Classical Theory & Business Functions (Lesson 03)",
            "es": "Fundamentos de Administración — Teoría Clásica de Fayol y Funciones de la Empresa (Clase 03)",
          },
          durationMinutes: 14,
          contentType: "video",
          videoUrl: "uEB9ErF8fDc",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender a visão de Henri Fayol sobre a estrutura organizacional e as funções administrativas universais.",
              "en": "Master Henri Fayol's top-down structural perspective and universal managerial functions.",
              "es": "Dominar la perspectiva de Fayol sobre funciones administrativas universales.",
            },
            summaryPoints: [
              {
                "pt-BR": "As 6 funções básicas da empresa segundo Fayol: Técnica, Comercial, Financeira, Segurança, Contábil e Administrativa.",
                "en": "Fayol's 6 enterprise functions: Technical, Commercial, Financial, Security, Accounting, and Managerial.",
                "es": "Las 6 funciones de la empresa: técnicas, comerciales, financieras, de seguridad, contables y administrativas.",
              },
              {
                "pt-BR": "O processo administrativo clássico (POCCC): Prever, Organizar, Comandar, Coordenar e Controlar.",
                "en": "Classical managerial process: Forecast, Organize, Command, Coordinate, and Control.",
                "es": "Proceso administrativo clásico: prever, organizar, dirigir, coordinar y controlar.",
              },
              {
                "pt-BR": "Princípios gerais da administração: Unidade de Comando, Hierarquia (Cadeia Escalar), Divisão do Trabalho e Disciplina.",
                "en": "Key principles: Unity of command, Scalar chain, Division of labor, and Authority.",
                "es": "Principios fundamentales: unidad de mando, jerarquía clara y división del trabajo.",
              },
            ],
          },
        },
        {
          id: "les-adm-1-4",
          order: 4,
          title: {
            "pt-BR": "Fundamentos de Administração — Teoria da Burocracia de Max Weber (Aula 04)",
            "en": "Management Fundamentals — Max Weber's Theory of Bureaucracy (Lesson 04)",
            "es": "Fundamentos de Administración — Teoría de la Burocracia de Max Weber (Clase 04)",
          },
          durationMinutes: 15,
          contentType: "video",
          videoUrl: "T9uRc1D-Y8c",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender o modelo burocrático de Weber focado na racionalidade legal, impessoalidade e meritocracia profissional.",
              "en": "Understand Weber's bureaucratic model emphasizing legal rationality, impersonality, and meritocracy.",
              "es": "Comprender el modelo burocrático de Weber, racionalidad legal y meritocracia.",
            },
            summaryPoints: [
              {
                "pt-BR": "Características da Burocracia: normas e regulamentos escritos, comunicação formal padronizada e divisão racional do trabalho.",
                "en": "Bureaucratic characteristics: codified written rules, standardized communication, and rational labor division.",
                "es": "Reglamentos escritos, procedimientos estandarizados y división racional del trabajo.",
              },
              {
                "pt-BR": "Impessoalidade nas relações de poder e seleção baseada em competência técnica e mérito profissional.",
                "en": "Impersonality in hierarchical relations and competence-based meritocratic hiring/promotion.",
                "es": "Trato impersonal y selección basada en idoneidad técnica demostrada.",
              },
              {
                "pt-BR": "Disfunções da burocracia no mundo contemporâneo: apego excessivo a regras e rigidez frente a imprevistos operacionais.",
                "en": "Bureaucratic dysfunctions: excessive red tape, ritualism, and sluggish adaptability to unexpected field crises.",
                "es": "Disfunciones burocráticas: rigidez normativa y lentitud de respuesta ante cambios operativos.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-adm-2",
      order: 2,
      title: {
        "pt-BR": "Unidade 2: Funções da Administração (PODC): Planejamento e Organização",
        "en": "Unit 2: Managerial Functions: Planning & Organizational Design",
        "es": "Unidad 2: Funciones Administrativas: Planificación y Organización",
      },
      description: {
        "pt-BR": "Os pilares centrais da gestão contemporânea: Planejamento estratégico, tático e operacional, formulação de metas (SMART), estruturas organizacionais e departamentalização.",
        "en": "Pillars of contemporary management: Strategic, tactical, and operational planning, SMART goals, structural design, and departmentalization.",
        "es": "Planificación estratégica, táctica y operativa, diseño organizacional y departamentalización.",
      },
      lessons: [
        {
          id: "les-adm-2-1",
          order: 1,
          title: {
            "pt-BR": "Funções Administrativas — Planejamento: Níveis Estratégico, Tático e Operacional (Aula 05)",
            "en": "Managerial Functions — Planning: Strategic, Tactical & Operational Levels (Lesson 05)",
            "es": "Funciones Administrativas — Planificación: Estratégica, Táctica y Operativa (Clase 05)",
          },
          durationMinutes: 16,
          contentType: "video",
          videoUrl: "AvmD8N2AfCg",
          contentDetail: {
            objective: {
              "pt-BR": "Distinguir com clareza os 3 níveis de planejamento organizacional e sua aplicação em contratos industriais.",
              "en": "Clearly differentiate the 3 levels of organizational planning and their execution in industrial contracts.",
              "es": "Diferenciar los 3 niveles de planificación en contratos y operaciones de planta.",
            },
            summaryPoints: [
              {
                "pt-BR": "Planejamento Estratégico (Longo Prazo): alta direção, visão de futuro, metas globais e análise de mercado.",
                "en": "Strategic Planning (Long term): board level, enterprise vision, market positioning, and macro resource allocation.",
                "es": "Planificación estratégica: alta dirección, metas a largo plazo y visión corporativa.",
              },
              {
                "pt-BR": "Planejamento Tático (Médio Prazo): gerências e coordenações, desdobramento por departamentos (engenharia, RH, operações, suprimentos).",
                "en": "Tactical Planning (Medium term): departmental heads, translating strategy into operational roadmaps.",
                "es": "Planificación táctica: nivel gerencial, asignación departamental y presupuestaria.",
              },
              {
                "pt-BR": "Planejamento Operacional (Curto Prazo): encarregados e líderes de frente, cronogramas semanais e diários de trabalho (backlog e paradas).",
                "en": "Operational Planning (Short term): frontline foremen, daily job packages, shift schedules, and safety plans.",
                "es": "Planificación operativa: supervisores de terreno, cuadrillas y cronogramas diarios de trabajo.",
              },
            ],
          },
        },
        {
          id: "les-adm-2-2",
          order: 2,
          title: {
            "pt-BR": "Funções Administrativas — Formulação de Objetivos e Estratégia Empresarial (Aula 06)",
            "en": "Managerial Functions — Objective Setting & Enterprise Strategy (Lesson 06)",
            "es": "Funciones Administrativas — Definición de Objetivos y Estrategia Empresarial (Clase 06)",
          },
          durationMinutes: 15,
          contentType: "video",
          videoUrl: "LUVTLEjm9So",
          contentDetail: {
            objective: {
              "pt-BR": "Aplicar métodos científicos de formulação de metas (Metas SMART) e ferramentas analíticas estratégicas (Matriz SWOT).",
              "en": "Deploy goal formulation frameworks (SMART goals) and strategic matrix analysis (SWOT analysis).",
              "es": "Formular metas SMART y aplicar análisis FODA/SWOT en operaciones industriales.",
            },
            summaryPoints: [
              {
                "pt-BR": "Critérios SMART: Metas específicas (Specific), mensuráveis (Measurable), atingíveis (Achievable), relevantes (Relevant) e temporais (Time-bound).",
                "en": "SMART criteria: Specific, Measurable, Achievable, Relevant, and Time-bound performance targets.",
                "es": "Metas SMART: específicas, medibles, alcanzables, relevantes y con plazo definido.",
              },
              {
                "pt-BR": "Análise SWOT/FOFA: Forças (Strengths), Oportunidades (Opportunities), Fraquezas (Weaknesses) e Ameaças (Threats).",
                "en": "SWOT Matrix: mapping internal strengths/weaknesses against external market opportunities/threats.",
                "es": "Matriz FODA: diagnóstico interno (fortalezas/debilidades) y externo (oportunidades/amenazas).",
              },
              {
                "pt-BR": "Alinhamento com o cliente de alta criticidade (ex: CMPC): conformidade de SST, zero acidentes e cumprimento de prazo.",
                "en": "Client strategic alignment in heavy industry: zero-harm safety records and on-time turnaround completion.",
                "es": "Alineación estratégica con clientes de alta criticidad: seguridad y cero desvíos de plazo.",
              },
            ],
          },
        },
        {
          id: "les-adm-2-3",
          order: 3,
          title: {
            "pt-BR": "Funções Administrativas — Organização: Estrutura, Organogramas e Níveis Hierárquicos (Aula 07)",
            "en": "Managerial Functions — Organizing: Structure, Hierarchy & Organigrams (Lesson 07)",
            "es": "Funciones Administrativas — Organización: Estructura, Jerarquía y Organigramas (Clase 07)",
          },
          durationMinutes: 14,
          contentType: "video",
          videoUrl: "ycIlD8g-K60",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender o desenho de estruturas organizacionais, amplitude de controle administrativo e delegação de autoridade.",
              "en": "Understand organizational design, spans of control, and delegation of managerial authority.",
              "es": "Comprender el diseño de organigramas, tramos de control y delegación de autoridad.",
            },
            summaryPoints: [
              {
                "pt-BR": "Estrutura formal representada no Organograma: canais oficiais de comunicação e linhas de subordinação direta.",
                "en": "Formal organization depicted via organigrams: official communication pathways and accountability lines.",
                "es": "Organigrama formal: líneas jerárquicas y canales oficiales de reporte.",
              },
              {
                "pt-BR": "Amplitude de controle: número de subordinados diretos sob a responsabilidade de um único líder/supervisor.",
                "en": "Span of control: number of direct reports reporting effectively to a single leader.",
                "es": "Tramo de control: número de colaboradores a cargo de un único supervisor.",
              },
              {
                "pt-BR": "Centralização vs. Descentralização: vantagens da tomada de decisão ágil delegada para as lideranças na frente de obra.",
                "en": "Centralization vs Decentralization: benefits of delegating rapid decision-making to frontline site leaders.",
                "es": "Centralización vs Descentralización: agilidad en la toma de decisiones en el frente de trabajo.",
              },
            ],
          },
        },
        {
          id: "les-adm-2-4",
          order: 4,
          title: {
            "pt-BR": "Funções Administrativas — Departamentalização e Tipos de Estruturas (Aula 08)",
            "en": "Managerial Functions — Departmentalization & Structural Archetypes (Lesson 08)",
            "es": "Funciones Administrativas — Departamentalización y Tipos de Estructura (Clase 08)",
          },
          durationMinutes: 15,
          contentType: "video",
          videoUrl: "riDnnP0m_FY",
          contentDetail: {
            objective: {
              "pt-BR": "Diferenciar modelos de departamentalização: funcional, por projetos, por clientes, geográfica e matricial.",
              "en": "Differentiate departmentalization models: functional, project-based, customer, geographic, and matrix structures.",
              "es": "Analizar estructuras por función, por proyecto, geográfica y matricial.",
            },
            summaryPoints: [
              {
                "pt-BR": "Departamentalização Funcional: agrupamento por especialidade técnica (Engenharia, Segurança, Mecânica, Pintura).",
                "en": "Functional departmentalization: grouped by craft expertise (Engineering, HSE, Mechanics, Painting).",
                "es": "Estructura funcional: agrupación por especialidades técnicas.",
              },
              {
                "pt-BR": "Departamentalização por Projetos/Contratos: equipes dedicadas exclusivamente a uma planta ou parada de fábrica.",
                "en": "Project/Contract structure: multidisciplinary teams dedicated to a specific industrial turnaround.",
                "es": "Estructura por proyectos: equipos dedicados a una parada de planta específica.",
              },
              {
                "pt-BR": "Estrutura Matricial: combinação ágil que une liderança funcional com liderança de projeto/frente.",
                "en": "Matrix structure: combining functional discipline oversight with agile project delivery accountability.",
                "es": "Estructura matricial: doble reporte que combina disciplina técnica y cumplimiento de obra.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-adm-3",
      order: 3,
      title: {
        "pt-BR": "Unidade 3: Funções da Administração (PODC): Direção, Controle e Governança",
        "en": "Unit 3: Managerial Functions: Leading, Controlling & Corporate Governance",
        "es": "Unidad 3: Funciones Administrativas: Dirección, Control y Gobernanza",
      },
      description: {
        "pt-BR": "A condução de pessoas: estilos de liderança, teorias motivacionais, comunicação interpessoal, sistemas de controle, KPIs e governança corporativa.",
        "en": "Leading people: leadership styles, motivational theories, interpersonal communication, control systems, KPIs, and corporate governance.",
        "es": "Liderazgo, motivación, sistemas de control de gestión, indicadores y gobierno corporativo.",
      },
      lessons: [
        {
          id: "les-adm-3-1",
          order: 1,
          title: {
            "pt-BR": "Funções Administrativas — Direção: Liderança, Poder e Estilos de Gestão (Aula 09)",
            "en": "Managerial Functions — Leading: Power, Influence & Leadership Styles (Lesson 09)",
            "es": "Funciones Administrativas — Dirección: Liderazgo y Estilos de Gestión (Clase 09)",
          },
          durationMinutes: 16,
          contentType: "video",
          videoUrl: "OsHvyZLyMUQ",
          contentDetail: {
            objective: {
              "pt-BR": "Distinguir chefia de liderança genuína e avaliar os estilos de liderança (autocrática, democrática e situacional).",
              "en": "Distinguish formal authority from genuine leadership and assess autocratic, democratic, and situational styles.",
              "es": "Diferenciar autoridad formal de liderazgo real y estilos de conducción de equipos.",
            },
            summaryPoints: [
              {
                "pt-BR": "A autoridade decorre do cargo no organograma; a liderança decorre da capacidade de influenciar, inspirar e guiar as pessoas.",
                "en": "Authority comes from rank in the organigram; leadership stems from the ability to inspire and mobilize people.",
                "es": "La autoridad emana del cargo; el liderazgo emana de la capacidad de inspirar y generar compromiso.",
              },
              {
                "pt-BR": "Liderança Situacional: o estilo ideal varia de acordo com a maturidade e a criticidade técnica da tarefa.",
                "en": "Situational Leadership: adjusting leadership posture according to team technical competence and risk level.",
                "es": "Liderazgo situacional: adaptar el estilo según la madurez del equipo y el riesgo operacional.",
              },
              {
                "pt-BR": "Liderança com foco em Segurança do Trabalho: o exemplo visível do líder em campo consolida a cultura preventiva.",
                "en": "Safety leadership: visible felt leadership on the plant floor establishes authentic safety culture.",
                "es": "Liderazgo en seguridad: el ejemplo visible del supervisor afianza la cultura de prevención de riesgos.",
              },
            ],
          },
        },
        {
          id: "les-adm-3-2",
          order: 2,
          title: {
            "pt-BR": "Funções Administrativas — Direção: Motivação Humana e Comportamento Organizacional (Aula 10)",
            "en": "Managerial Functions — Leading: Human Motivation & Organizational Behavior (Lesson 10)",
            "es": "Funciones Administrativas — Dirección: Motivación y Clima Laboral (Clase 10)",
          },
          durationMinutes: 15,
          contentType: "video",
          videoUrl: "VqGCbrMfNJg",
          contentDetail: {
            objective: {
              "pt-BR": "Analisar as principais teorias de motivação (Hierarquia de Maslow e Teoria dos Dois Fatores de Herzberg) aplicadas ao ambiente de trabalho.",
              "en": "Analyze motivation theories (Maslow's Hierarchy & Herzberg's Two-Factor Theory) in industrial workplaces.",
              "es": "Aplicar teorías de Maslow y Herzberg para motivar cuadrillas de trabajo industrial.",
            },
            summaryPoints: [
              {
                "pt-BR": "Pirâmide de Maslow: necessidades fisiológicas, de segurança, sociais, estima e autorrealização.",
                "en": "Maslow's Hierarchy: physiological, safety/security, social belonging, esteem, and self-actualization.",
                "es": "Pirámide de Maslow: necesidades básicas, seguridad, pertenencia y reconocimiento.",
              },
              {
                "pt-BR": "Teoria Bifatorial de Herzberg: Fatores Higiênicos (salário, condições físicas - evitam insatisfação) vs. Fatores Motivacionais (reconhecimento, autonomia - geram motivação real).",
                "en": "Herzberg's Two Factors: Hygiene factors prevent dissatisfaction, while Motivators drive genuine engagement.",
                "es": "Factores higiénicos (previenen insatisfacción) vs factores motivacionales (generan compromiso genuino).",
              },
              {
                "pt-BR": "Engajamento das equipes de canteiro: reconhecimento do mérito técnico e valorização do trabalho bem executado.",
                "en": "Field crew engagement: recognizing technical craft excellence and fostering teamwork pride.",
                "es": "Reconocimiento del mérito técnico para elevar la productividad en paradas.",
              },
            ],
          },
        },
        {
          id: "les-adm-3-3",
          order: 3,
          title: {
            "pt-BR": "Funções Administrativas — Controle: Padrões de Desempenho, Indicadores e Feedback (Aula 11)",
            "en": "Managerial Functions — Controlling: Performance Benchmarks, KPIs & Feedback (Lesson 11)",
            "es": "Funciones Administrativas — Control: Estándares, Indicadores Clave y Retroalimentación (Clase 11)",
          },
          durationMinutes: 17,
          contentType: "video",
          videoUrl: "iviPCW-II8M",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar as 4 etapas do processo de controle administrativo: estabelecer padrões, medir desempenho, comparar e agir corretivamente.",
              "en": "Master the 4 stages of managerial control: establish standards, measure output, compare against targets, and take corrective action.",
              "es": "Dominar las 4 etapas del control: estándares, medición, comparación y acción correctiva.",
            },
            summaryPoints: [
              {
                "pt-BR": "O Ciclo de Controle: sem medição não há gestão; o controle fecha o ciclo do planejamento garantindo que o planejado seja cumprido.",
                "en": "The Control Loop: what cannot be measured cannot be managed; control ensures operational adherence to planned goals.",
                "es": "El ciclo de control: lo que no se mide no se puede gestionar.",
              },
              {
                "pt-BR": "Indicadores-chave de Desempenho (KPIs): cumprimento de prazos contratuais, taxa de retrabalho, horas extras e conformidade ambiental.",
                "en": "Key Performance Indicators (KPIs): schedule variance, rework rates, overtime labor ratio, and environmental compliance.",
                "es": "Indicadores clave (KPIs): cumplimiento de cronograma, costos, calidad y seguridad.",
              },
              {
                "pt-BR": "Ação Corretiva Gerencial: atuar na causa-raiz de desvios operacionais antes que gerem multas contratuais.",
                "en": "Managerial corrective actions: resolving root causes of field variances prior to contractual penalties.",
                "es": "Acciones correctivas para resolver desviaciones antes de que generen sobrecostos.",
              },
            ],
          },
        },
        {
          id: "les-adm-3-4",
          order: 4,
          title: {
            "pt-BR": "Governança Corporativa, Ética Empresarial e Sustentabilidade Organizacional (Aula 12)",
            "en": "Corporate Governance, Business Ethics & Organizational Sustainability (Lesson 12)",
            "es": "Gobierno Corporativo, Ética y Sostenibilidad Organizacional (Clase 12)",
          },
          durationMinutes: 16,
          contentType: "video",
          videoUrl: "f8OiI-hFB8A",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender os princípios de governança corporativa (transparência, equidade, prestação de contas e responsabilidade corporativa) e ética empresarial.",
              "en": "Understand corporate governance principles (transparency, fairness, accountability, corporate responsibility) and business ethics.",
              "es": "Comprender la gobernanza corporativa, ética empresarial y gestión ESG.",
            },
            summaryPoints: [
              {
                "pt-BR": "Os 4 pilares da Governança Corporativa: Transparência (Disclosure), Equidade (Fairness), Prestação de Contas (Accountability) e Responsabilidade Corporativa.",
                "en": "The 4 Pillars of Governance: Transparency, Fairness, Accountability, and Corporate Responsibility.",
                "es": "Los 4 pilares del gobierno corporativo: transparencia, equidad, rendición de cuentas y responsabilidad.",
              },
              {
                "pt-BR": "Ética nas relações comerciais: conformidade legal absoluta, integridade documental e respeito à legislação trabalhista e ambiental.",
                "en": "Business ethics: strict statutory compliance, documentation integrity, and labor/environmental law adherence.",
                "es": "Ética en contratos: integridad documental, legalidad y cumplimiento riguroso de normativas.",
              },
              {
                "pt-BR": "Práticas ESG (Environmental, Social and Governance) em indústrias pesadas: descarte correto de efluentes de hidrojato e valorização das comunidades locais.",
                "en": "ESG practices in heavy industry: responsible hydroblast wastewater management and community development.",
                "es": "Criterios ESG aplicados: gestión de efluentes industriales y relaciones comunitarias sostenibles.",
              },
            ],
          },
        },
      ],
    },
  ],
  finalAssessment: {
    id: "exam-administracao-gestao",
    order: 13,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 25,
    questionsCount: 5,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação teórica com 5 questões abrangendo teorias administrativas clássicas, planejamento estratégico, organização, liderança e controle gerencial. Nota mínima de 70% para emissão do certificado.",
      "en": "Theoretical assessment covering management theories, strategic planning, organizing, leadership, and control. 70% passing score.",
      "es": "Evaluación teórica sobre teorías administrativas, planificación, liderazgo y control de gestión. Aprobación mínima del 70%.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência — Fundamentos de Administração",
      "en": "Final Competency Exam — Fundamentals of Management",
      "es": "Evaluación Final de Competencias — Fundamentos de Administración",
    },
    description: {
      "pt-BR": "Validação de conhecimentos em evolução da administração, processo administrativo (PODC), desenho estrutural e governança corporativa.",
      "en": "Validation of mastery in management evolution, managerial functions (POLC), structural design, and corporate governance.",
      "es": "Validación de conocimientos en proceso administrativo, liderazgo y gobierno corporativo.",
    },
    questions: [
      {
        id: "q-adm-1",
        order: 1,
        question: {
          "pt-BR": "1. Qual é a principal diferença de abordagem entre a Administração Científica de Frederick Taylor e a Teoria Clássica de Henri Fayol?",
          "en": "1. What is the key distinction between Taylor's Scientific Management and Fayol's Classical Theory?",
          "es": "1. ¿Cuál es la principal diferencia entre la Administración Científica de Taylor y la Teoría Clásica de Fayol?",
        },
        options: [
          {
            id: "q1-a",
            text: {
              "pt-BR": "Taylor focou de baixo para cima nas tarefas operacionais e no chão de fábrica (estudo de tempos e movimentos); Fayol focou de cima para baixo na estrutura da empresa e nas funções do administrador.",
              "en": "Taylor focused bottom-up on frontline tasks and shop-floor efficiency; Fayol focused top-down on organizational structure and universal managerial functions.",
              "es": "Taylor enfocó de abajo hacia arriba en las tareas operativas del taller; Fayol enfocó de arriba hacia abajo en la estructura y funciones directivas.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Enquanto Taylor analisou o operário e a eliminação de desperdícios no posto de trabalho, Fayol sistematizou a empresa globalmente e as funções da gerência.",
              "en": "Correct! Taylor targeted task efficiency, whereas Fayol synthesized organizational architecture and executive responsibilities.",
              "es": "¡Correcto! Taylor analizó el puesto de trabajo del operario y Fayol la estructura y dirección general.",
            },
          },
          {
            id: "q1-b",
            text: {
              "pt-BR": "Taylor defendia o fim de todas as máquinas e Fayol defendia o fechamento das fábricas.",
              "en": "Taylor opposed machines and Fayol wanted to close factories.",
              "es": "Taylor prohibía el uso de máquinas y Fayol cerraba fábricas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q1-c",
            text: {
              "pt-BR": "Ambos defendiam que as empresas não deveriam ter chefes nem regras escritas.",
              "en": "Both advocated no supervisors or written rules.",
              "es": "Ambos rechazaban la existencia de supervisores.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-adm-2",
        order: 2,
        question: {
          "pt-BR": "2. Quais são as quatro funções fundamentais que compõem o Processo Administrativo contemporâneo (conhecidas pela sigla PODC)?",
          "en": "2. What are the four core functions of the contemporary managerial process (known as POLC)?",
          "es": "2. ¿Cuáles son las cuatro funciones fundamentales del proceso administrativo contemporáneo (PODC)?",
        },
        options: [
          {
            id: "q2-a",
            text: {
              "pt-BR": "Planejar, Organizar, Dirigir (Liderar) e Controlar.",
              "en": "Planning, Organizing, Leading (Directing), and Controlling.",
              "es": "Planificar, Organizar, Dirigir (Liderar) y Controlar.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O PODC constitui o ciclo permanente da boa gestão: definir metas, estruturar recursos, guiar as pessoas e monitorar os resultados.",
              "en": "Correct! POLC constitutes the iterative management loop: setting targets, marshaling resources, guiding staff, and evaluating performance.",
              "es": "¡Correcto! Las cuatro funciones universales de la gestión moderna.",
            },
          },
          {
            id: "q2-b",
            text: {
              "pt-BR": "Pagar, Operar, Desmontar e Comprar.",
              "en": "Paying, Operating, Dismantling, and Purchasing.",
              "es": "Pagar, Operar, Desarmar y Comprar.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q2-c",
            text: {
              "pt-BR": "Procurar, Observar, Delegar e Cancelar.",
              "en": "Searching, Observing, Delegating, and Canceling.",
              "es": "Buscar, Observar, Delegar y Cancelar.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-adm-3",
        order: 3,
        question: {
          "pt-BR": "3. Na metodologia de formulação de objetivos, o que significa estabelecer uma meta de acordo com o padrão SMART?",
          "en": "3. In goal setting methodology, what does establishing a target according to the SMART framework mean?",
          "es": "3. En la metodología de fijación de objetivos, ¿qué significa establecer una meta bajo el estándar SMART?",
        },
        options: [
          {
            id: "q3-a",
            text: {
              "pt-BR": "A meta deve ser Específica (Specific), Mensurável (Measurable), Atingível (Achievable), Relevante (Relevant) e Temporal (Time-bound com prazo definido).",
              "en": "The goal must be Specific, Measurable, Achievable, Relevant, and Time-bound.",
              "es": "La meta debe ser Específica, Medible, Alcanzable, Relevante y con Plazo definido.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O acrônimo SMART garante que a meta não seja vaga (ex: 'melhorar'), mas mensurável e com prazo determinado (ex: 'reduzir paradas em 15% até dezembro').",
              "en": "Correct! SMART eliminates ambiguity, transforming vague desires into measurable, accountable commitments.",
              "es": "¡Correcto! Define metas claras, verificables y con fechas límite precisas.",
            },
          },
          {
            id: "q3-b",
            text: {
              "pt-BR": "Significa que a meta só pode ser entendida por computadores.",
              "en": "Means the goal is only machine-readable.",
              "es": "Significa que solo aplica a software.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q3-c",
            text: {
              "pt-BR": "Significa que a meta não pode ter prazo de conclusão.",
              "en": "Means the goal must have no deadline.",
              "es": "Significa que la meta no tiene fecha de vencimiento.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Ter prazo delimitado é requisito mandatório.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-adm-4",
        order: 4,
        question: {
          "pt-BR": "4. Segundo a Teoria dos Dois Fatores de Frederick Herzberg, qual é a diferença entre Fatores Higiênicos e Fatores Motivacionais no ambiente de trabalho?",
          "en": "4. Under Herzberg's Two-Factor Theory, what is the difference between Hygiene factors and Motivator factors?",
          "es": "4. Según la Teoría Bifactorial de Herzberg, ¿cuál es la diferencia entre Factores Higiénicos y Factores Motivacionales?",
        },
        options: [
          {
            id: "q4-a",
            text: {
              "pt-BR": "Fatores Higiênicos (salário, condições físicas e políticas) evitam a insatisfação quando atendidos, mas não geram motivação duradoura; Fatores Motivacionais (reconhecimento, autonomia e desafios) geram engajamento genuíno.",
              "en": "Hygiene factors (salary, physical working conditions) prevent dissatisfaction when adequate, but do not spark motivation; Motivators (recognition, responsibility, challenge) ignite genuine engagement.",
              "es": "Los factores higiénicos (sueldo, condiciones ambientales) evitan la insatisfacción pero no motivan; los factores motivacionales (reconocimiento, desafíos) generan compromiso real.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Salário em dia e banheiros limpos são básicos (higiênicos); o que realmente motiva o colaborador a dar o seu melhor é o reconhecimento, o aprendizado e a valorização.",
              "en": "Correct! Baseline pay and fair conditions prevent anger; genuine motivation arises from autonomy, mastery, and praise.",
              "es": "¡Correcto! Las condiciones higiénicas evitan quejas, pero el reconocimiento y el crecimiento generan motivación real.",
            },
          },
          {
            id: "q4-b",
            text: {
              "pt-BR": "Fatores higiênicos referem-se apenas ao uso de sabonete e desinfetante nas oficinas.",
              "en": "Hygiene factors only refer to soap and detergent in workshops.",
              "es": "Los factores higiénicos se limitan al aseo personal.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Na teoria administrativa, fatores higiênicos representam o ambiente extrínseco do trabalho.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q4-c",
            text: {
              "pt-BR": "Fatores motivacionais são aplicáveis apenas para gerentes executivos.",
              "en": "Motivators only apply to executives.",
              "es": "La motivación solo aplica a la alta dirección.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Aplica-se a todos os níveis operacionais.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-adm-5",
        order: 5,
        question: {
          "pt-BR": "5. Quais são os quatro princípios fundamentais da Governança Corporativa adotados por empresas de excelência?",
          "en": "5. What are the four fundamental principles of Corporate Governance adopted by leading companies?",
          "es": "5. ¿Cuáles son los cuatro principios fundamentales del Gobierno Corporativo?",
        },
        options: [
          {
            id: "q5-a",
            text: {
              "pt-BR": "Transparência (Disclosure), Equidade (Fairness), Prestação de Contas (Accountability) e Responsabilidade Corporativa.",
              "en": "Transparency (Disclosure), Fairness (Equity), Accountability, and Corporate Responsibility.",
              "es": "Transparencia (Disclosure), Equidad (Fairness), Rendición de Cuentas (Accountability) y Responsabilidad Corporativa.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Esses 4 pilares asseguram que a empresa opere com ética, sustentabilidade e integridade perante clientes, acionistas, colaboradores e sociedade.",
              "en": "Correct! These 4 pillars ensure ethical operations, sustainability, and transparency towards clients, shareholders, and workers.",
              "es": "¡Correcto! Son los 4 pilares internacionales de gobernanza corporativa e integridad empresarial.",
            },
          },
          {
            id: "q5-b",
            text: {
              "pt-BR": "Segredo comercial absoluto, sonegação fiscal, autoritarismo e corte de benefícios.",
              "en": "Secrecy, tax avoidance, authoritarianism, and slashing benefits.",
              "es": "Secreto comercial, autoritarismo y corte de beneficios.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q5-c",
            text: {
              "pt-BR": "Centralização total das decisões em uma única pessoa sem prestar contas a ninguém.",
              "en": "Total centralization without accountability.",
              "es": "Concentración total del poder sin rendir cuentas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Contradiz totalmente a prestação de contas (accountability).",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
    ],
  },
};
