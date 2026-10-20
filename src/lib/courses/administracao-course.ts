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
    estimatedMinutes: 50,
    questionsCount: 10,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação final sobre evolução das teorias administrativas, processo administrativo (PODC), finanças operacionais (CAPEX/OPEX), planejamento estratégico e governança corporativa. Nota mínima de 70% para emissão do certificado.",
      "en": "Final examination covering administrative theories, managerial cycle (POLC), financial planning (CAPEX/OPEX), strategic planning, and corporate governance. 70% passing score.",
      "es": "Evaluación final sobre teorías de administración, proceso gerencial (PODC), finanzas operativas (CAPEX/OPEX), planificación estratégica y gobierno corporativo. Calificación mínima de 70%.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência — Fundamentos de Administração e Gestão",
      "en": "Final Competency Exam — Fundamentals of Management and Administration",
      "es": "Evaluación Final de Competencias — Fundamentos de Administración y Gestión",
    },
    description: {
      "pt-BR": "Validação de domínio em teorias de Taylor e Fayol, ciclo PODC, metas SMART, análise SWOT e Porter, finanças operacionais e ponto de equilíbrio, liderança situacional, cultura e governança ESG.",
      "en": "Validates proficiency in Taylor and Fayol frameworks, POLC cycle, SMART goals, SWOT and Porter analysis, OPEX/CAPEX and break-even math, leadership, organizational culture, and ESG governance.",
      "es": "Valida competencias en teorías de Taylor y Fayol, ciclo PODC, metas SMART, matriz FODA y 5 fuerzas de Porter, finanzas operativas y punto de equilibrio, liderazgo, cultura y gobernanza ESG.",
    },
    questions: [
      {
        id: "q-adm-1",
        order: 1,
        question: {
          "pt-BR": "Cenário Operacional: Em um contrato de prestação de serviços industriais de grande porte, a diretoria da RSS3 revisa os métodos de produtividade no chão de fábrica e a estrutura corporativa de comando. Ao comparar a Administração Científica de Frederick Taylor com a Teoria Clássica de Henri Fayol, qual é a distinção metodológica e estrutural correta entre essas duas correntes?",
          "en": "Operational Scenario: In a major industrial plant contract, RSS3 leadership reviews shop-floor productivity methods and corporate command hierarchy. Comparing Taylor's Scientific Management with Fayol's Classical Theory, what is the exact methodological and structural distinction?",
          "es": "Escenario Operativo: En un contrato industrial de gran escala, la dirección de RSS3 revisa la productividad en planta y la estructura de mando. Comparando la Administración Científica de Taylor con la Teoría Clásica de Fayol, ¿cuál es la distinción metodológica y estructural correcta?",
        },
        options: [
          {
            id: "opt-adm-1-a",
            text: {
              "pt-BR": "Ambos defendiam a extinção total da supervisão e a eliminação de qualquer hierarquia ou procedimento escrito nas empresas.",
              "en": "Both advocated the total elimination of supervision and the removal of all written procedures and hierarchy.",
              "es": "Ambos promovían la eliminación total de la supervisión y de los procedimientos escritos en las empresas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Tanto Taylor quanto Fayol valorizavam a hierarquia, a disciplina e a padronização metódica.",
              "en": "Incorrect. Both theorists emphasized rigorous hierarchy, discipline, and methodical standardization.",
              "es": "Incorrecto. Ambos destacaron la importancia de la jerarquía, disciplina y estandarización.",
            },
          },
          {
            id: "opt-adm-1-b",
            text: {
              "pt-BR": "Taylor adotou abordagem de baixo para cima (bottom-up), focando nas tarefas operacionais, no estudo de tempos e movimentos e na especialização do operário no chão de fábrica; Fayol adotou abordagem de cima para baixo (top-down), focando na estrutura organizacional global, na unidade de comando e nas funções universais do administrador.",
              "en": "Taylor adopted a bottom-up approach focusing on frontline task mechanics, time-and-motion studies, and worker specialization on the shop floor; Fayol adopted a top-down approach focusing on total organizational structure, unity of command, and universal executive management functions.",
              "es": "Taylor adoptó un enfoque de abajo hacia arriba (bottom-up), centrado en las tareas operativas, tiempos y movimientos y especialización del operario; Fayol adoptó un enfoque de arriba hacia abajo (top-down), enfocado en la estructura organizacional, unidad de mando y funciones directivas universales.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Enquanto Taylor revolucionou a eficiência do posto de trabalho e a eliminação do desperdício operacional, Fayol sistematizou a empresa globalmente e as funções da alta gerência.",
              "en": "Correct! Taylor targeted micro-level task efficiency, whereas Fayol synthesized macro-level corporate architecture and executive responsibilities.",
              "es": "¡Correcto! Taylor optimizó el rendimiento en el puesto de trabajo y Fayol sistematizó la dirección y estructura global de la organización.",
            },
          },
          {
            id: "opt-adm-1-c",
            text: {
              "pt-BR": "Taylor focava exclusivamente em marketing digital e Fayol focava em programação de softwares.",
              "en": "Taylor focused exclusively on digital marketing and Fayol focused on software programming.",
              "es": "Taylor se enfocaba exclusivamente en marketing digital y Fayol en programación de software.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e anacrônico. As teorias clássicas desenvolveram-se na virada do século XIX para o XX voltadas à produção fabril.",
              "en": "Incorrect and anachronistic. Classical theories emerged around the turn of the 20th century centered on manufacturing factories.",
              "es": "Incorrecto. Son teorías fundacionales de principios del siglo XX orientadas a la industria fabril.",
            },
          },
          {
            id: "opt-adm-1-d",
            text: {
              "pt-BR": "Fayol defendia que um colaborador deve ter pelo menos quatro chefes diretos dando ordens contraditórias ao mesmo tempo.",
              "en": "Fayol argued that a worker must have at least four direct bosses issuing conflicting orders concurrently.",
              "es": "Fayol defendía que cada trabajador debía responder a cuatro jefes directos emitiendo órdenes contradictorias.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Um dos 14 princípios cardeais de Fayol é justamente a 'Unidade de Comando': cada colaborador deve receber ordens de apenas um único chefe.",
              "en": "Incorrect. Fayol's cornerstone principle was 'Unity of Command': one employee receives orders from only one superior.",
              "es": "Incorrecto. El principio cardinal de Fayol es la 'Unidad de Mando': recibir órdenes de un único superior.",
            },
          },
        ],
      },
      {
        id: "q-adm-2",
        order: 2,
        question: {
          "pt-BR": "Cenário Operacional: No gerenciamento diário de um contrato industrial na RSS3, o gestor de contrato aplica o ciclo do Processo Administrativo contemporâneo (PODC: Planejar, Organizar, Dirigir e Controlar). Quando o gestor aloca os caminhões de hidrojato, define a escala de revezamento das frentes de serviço e distribui os equipamentos de proteção e ferramental entre as equipes, qual função do PODC ele está executando?",
          "en": "Operational Scenario: In managing an active RSS3 plant maintenance contract, the site manager deploys the contemporary administrative cycle (POLC: Plan, Organize, Lead, Control). When allocating hydroblasting rigs, establishing shift rosters, and distributing safety equipment and toolsets across crews, which POLC function is being executed?",
          "es": "Escenario Operativo: En la gestión de un contrato industrial en RSS3, el jefe de obra aplica el ciclo administrativo (PODC: Planificar, Organizar, Dirigir, Controlar). Al asignar camiones de hidrojet, definir los turnos de trabajo y distribuir equipos y herramientas entre las cuadrillas, ¿qué función del PODC está ejecutando?",
        },
        options: [
          {
            id: "opt-adm-2-a",
            text: {
              "pt-BR": "Controlar (auditar indicadores e aplicar penalidades financeiras).",
              "en": "Controlling (auditing metrics and enforcing financial penalties).",
              "es": "Controlar (auditar indicadores y aplicar penalizaciones).",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Controlar consiste em comparar os resultados obtidos com os padrões planejados para corrigir desvios.",
              "en": "Incorrect. Controlling compares actual results against planned standards to rectify variances.",
              "es": "Incorrecto. Controlar es comparar el resultado real con el estándar planificado.",
            },
          },
          {
            id: "opt-adm-2-b",
            text: {
              "pt-BR": "Organizar (estruturar, distribuir e coordenar recursos humanos, materiais, equipamentos e financeiros para viabilizar a execução do planejado).",
              "en": "Organizing (structuring, assembling, and allocating human, physical, equipment, and financial resources to execute the plan).",
              "es": "Organizar (estructurar, coordinar y distribuir los recursos humanos, materiales, equipos y financieros para ejecutar lo planificado).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A função Organizar é responsável por dispor e articular os meios necessários (recursos materiais, pessoas, escalas e maquinários) para que o trabalho ocorra de forma integrada.",
              "en": "Correct! Organizing marshals and configures operational assets, crew assignments, and machinery to enable coordinated workflow execution.",
              "es": "¡Correcto! Organizar consiste en articular personas, máquinas y recursos para llevar a cabo el plan.",
            },
          },
          {
            id: "opt-adm-2-c",
            text: {
              "pt-BR": "Planejar (determinar a visão de futuro da empresa para daqui a 10 anos).",
              "en": "Planning (setting 10-year corporate vision statements).",
              "es": "Planificar (definir la visión de futuro de la empresa a 10 años).",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Planejar define os objetivos e o rumo antes da mobilização física de recursos.",
              "en": "Incorrect. Planning establishes goals and strategy prior to physical resource mobilization.",
              "es": "Incorrecto. Planificar fija los objetivos antes de movilizar los recursos.",
            },
          },
          {
            id: "opt-adm-2-d",
            text: {
              "pt-BR": "Comprar (emitir cheques sem saldo para fornecedores).",
              "en": "Purchasing (issuing bad checks to suppliers).",
              "es": "Comprar (emitir cheques sin fondos a proveedores).",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal.",
              "en": "Incorrect and illegal.",
              "es": "Incorrecto e ilegal.",
            },
          },
        ],
      },
      {
        id: "q-adm-3",
        order: 3,
        question: {
          "pt-BR": "Cenário Operacional: No planejamento estratégico anual da RSS3, a liderança formula metas operacionais e de segurança utilizando a metodologia SMART. Analisando as propostas abaixo para a área de segurança do trabalho, qual delas atende rigorosamente a todos os critérios do padrão SMART?",
          "en": "Operational Scenario: In RSS3's annual strategic review, leadership formulates operational and safety objectives using the SMART methodology. Analyzing the proposals below for workplace safety, which strictly fulfills all SMART criteria?",
          "es": "Escenario Operativo: En la planificación estratégica anual de RSS3, la gerencia formula metas operativas y de seguridad mediante la metodología SMART. ¿Cuál de las siguientes propuestas cumple rigurosamente con los criterios SMART?",
        },
        options: [
          {
            id: "opt-adm-3-a",
            text: {
              "pt-BR": "'Tentar melhorar a segurança de todos os colaboradores sempre que possível no futuro.'",
              "en": "'Try to improve safety for everyone whenever possible sometime in the future.'",
              "es": "'Intentar mejorar la seguridad de todos los colaboradores siempre que sea posible en el futuro.'",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Meta vaga, não mensurável, sem indicador claro e sem prazo delimitado.",
              "en": "Incorrect. Vague, unmeasurable, lacks specific indicators and has no deadline.",
              "es": "Incorrecto. Es ambigua, no medible y carece de fecha límite.",
            },
          },
          {
            id: "opt-adm-3-b",
            text: {
              "pt-BR": "'Reduzir a taxa de frequência de acidentes com afastamento (TFCA) nas frentes de pintura e andaime em 25% até 31 de dezembro de 2026, mediante auditorias comportamentais semanais e 100% de reciclagens de NR-35 e NR-33 concluídas.'",
              "en": "'Reduce the lost-time injury frequency rate (LTIFR) in painting and scaffolding operations by 25% by December 31, 2026, through weekly behavioral audits and 100% completion of mandatory NR-35 and NR-33 refreshers.'",
              "es": "'Reducir la tasa de frecuencia de accidentes con tiempo perdido en pintura y andamios en un 25% al 31 de diciembre de 2026, mediante auditorías de conducta semanales y el 100% de capacitaciones obligatorias concluidas.'",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! É Específica (TFCA em pintura/andaime), Mensurável (reduzir em 25%), Atingível (ações de auditoria e treinamento), Relevante (preservação de vidas) e Temporal (prazo final até 31/12/2026).",
              "en": "Correct! It is Specific (LTIFR in specific trades), Measurable (25% cut), Achievable (audits/training), Relevant (life-safety), and Time-bound (by Dec 31, 2026).",
              "es": "¡Correcto! Cumple con ser Específica, Medible, Alcanzable, Relevante y con Plazo delimitado.",
            },
          },
          {
            id: "opt-adm-3-c",
            text: {
              "pt-BR": "'Eliminar todas as leis de segurança do trabalho do Brasil para trabalhar sem regras.'",
              "en": "'Eliminate all national workplace safety laws to work without rules.'",
              "es": "'Eliminar todas las leyes laborales del país para operar sin reglas.'",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo.",
              "en": "Incorrect and absurd.",
              "es": "Incorrecto e inadmisible.",
            },
          },
          {
            id: "opt-adm-3-d",
            text: {
              "pt-BR": "'Conseguir que nenhum colaborador sinta cansaço físico após 14 horas de trabalho em altura no sol.'",
              "en": "'Ensure no craftsperson experiences physical fatigue after 14 hours of work at height in direct sunlight.'",
              "es": "'Lograr que ningún operario sienta cansancio físico tras 14 horas de trabajo en altura al sol.'",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Não é Atingível (viola a fisiologia humana e a legislação que veda jornadas abusivas em altura).",
              "en": "Incorrect. Not Achievable (violates human biology and statutory overtime caps in hazardous tasks).",
              "es": "Incorrecto. No es Alcanzable y viola los límites de jornada laboral segura.",
            },
          },
        ],
      },
      {
        id: "q-adm-4",
        order: 4,
        question: {
          "pt-BR": "Cenário Operacional: Na análise de ambiente competitivo da RSS3, a diretoria cruza as 5 Forças Competitivas de Michael Porter com a Matriz SWOT/FOFA. Ao avaliar que 'grandes clientes do setor de celulose e mineração concentram grande volume de compras e exigem prazos de pagamento de 90 dias com descontos agressivos sob pena de trocar de fornecedor', qual força de Porter está em evidência?",
          "en": "Operational Scenario: In competitive strategic analysis, RSS3 leadership synthesizes Michael Porter's 5 Forces with SWOT. Assessing that 'major pulp and mining clients aggregate vast purchasing volumes and dictate 90-day payment terms with aggressive discounts backed by switching threats', which Porter force is dominant?",
          "es": "Escenario Operativo: En el análisis estratégico de RSS3 se evalúan las 5 Fuerzas de Porter junto a la matriz FODA. Al constatar que 'grandes clientes mineros y de celulosa concentran compras y exigen plazos de pago a 90 días con fuertes descuentos bajo amenaza de cambiar de proveedor', ¿qué fuerza de Porter predomina?",
        },
        options: [
          {
            id: "opt-adm-4-a",
            text: {
              "pt-BR": "Ameaça de novos entrantes sem capital financeiro.",
              "en": "Threat of capital-starved new entrants.",
              "es": "Amenaza de nuevos competidores sin capital.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Novos entrantes referem-se a empresas nascentes disputando o mercado.",
              "en": "Incorrect. New entrants refer to startup competitors entering the industry.",
              "es": "Incorrecto. Se refiere a empresas que ingresan al mercado.",
            },
          },
          {
            id: "opt-adm-4-b",
            text: {
              "pt-BR": "Poder de barganha / negociação dos clientes (compradores).",
              "en": "Bargaining power of buyers (customers).",
              "es": "Poder de negociación de los clientes (compradores).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Quando clientes são concentrados, compram grandes volumes e têm facilidade de troca, possuem alto poder de barganha, comprimindo margens de lucro dos prestadores de serviço.",
              "en": "Correct! Concentrated high-volume corporate clients with low switching barriers exert strong buyer bargaining power, pressuring vendor margins.",
              "es": "¡Correcto! Clientes concentrados y de gran volumen tienen alto poder de negociación para imponer precios y plazos.",
            },
          },
          {
            id: "opt-adm-4-c",
            text: {
              "pt-BR": "Poder de barganha dos fornecedores de energia elétrica residencial.",
              "en": "Bargaining power of residential utility suppliers.",
              "es": "Poder de negociación de proveedores de energía eléctrica doméstica.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A relação descrita ocorre entre a RSS3 e seus contratantes industriais.",
              "en": "Incorrect. The scenario describes the commercial relationship between RSS3 and industrial client buyers.",
              "es": "Incorrecto. El caso trata sobre la relación comercial con los clientes industriales.",
            },
          },
          {
            id: "opt-adm-4-d",
            text: {
              "pt-BR": "Ameaça de produtos substitutos provenientes da exploração lunar.",
              "en": "Threat of substitute services delivered via lunar space exploration.",
              "es": "Amenaza de servicios sustitutos provenientes de exploración espacial.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e fantasioso.",
              "en": "Incorrect and fictitious.",
              "es": "Incorrecto y sin sentido.",
            },
          },
        ],
      },
      {
        id: "q-adm-5",
        order: 5,
        question: {
          "pt-BR": "Cenário Operacional: Na gestão financeira de operações industriais, a gerência da RSS3 analisa a estrutura de custos de uma nova base regional: Custos Fixos mensais (aluguel, equipe administrativa, seguros e depreciação) = R$ 120.000,00; Margem de Contribuição Média por metro quadrado de pintura e jateamento faturado = R$ 40,00/m² (Preço de Venda R$ 90,00 - Custo Variável de R$ 50,00). Qual é o Ponto de Equilíbrio Operacional (Break-even Point) em volume físico mensal necessário para a base cobrir seus custos sem prejuízo?",
          "en": "Operational Scenario: In regional financial modeling, RSS3 analyzes cost structure: Monthly Fixed Costs (depreciation, yard lease, overhead) = R$ 120,000; Unit Contribution Margin for blasting/painting = R$ 40.00/m² (Price R$ 90.00 - Variable Cost R$ 50.00). What is the monthly Break-Even Point in volume for the yard to cover all costs with zero loss?",
          "es": "Escenario Operativo: En el análisis financiero de una base operativa de RSS3: Costos Fijos mensuales = R$ 120.000; Margen de Contribución por m² de pintura = R$ 40,00/m² (Precio R$ 90,00 - Costo Variable R$ 50,00). ¿Cuál es el Punto de Equilibrio mensual en m² para no tener pérdidas?",
        },
        options: [
          {
            id: "opt-adm-5-a",
            text: {
              "pt-BR": "3.000 m² no mês (R$ 120.000,00 / R$ 40,00 por m²).",
              "en": "3,000 m² per month (R$ 120,000 / R$ 40.00 per m²).",
              "es": "3.000 m² en el mes (R$ 120.000 / R$ 40,00 por m²).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O Ponto de Equilíbrio Operacional é calculado pela razão: Custos Fixos / Margem de Contribuição Unitária. R$ 120.000 / R$ 40 = 3.000 m². Abaixo disso há prejuízo; acima, lucro.",
              "en": "Correct! Operational Break-Even Point = Total Fixed Costs / Unit Contribution Margin. R$ 120,000 / R$ 40 = 3,000 m².",
              "es": "¡Correcto! Punto de Equilibrio = Costos Fijos / Margen de Contribución Unitario = R$ 120.000 / R$ 40 = 3.000 m².",
            },
          },
          {
            id: "opt-adm-5-b",
            text: {
              "pt-BR": "120 m² no mês, independentemente dos custos variáveis de insumos.",
              "en": "120 m² per month, regardless of variable input costs.",
              "es": "120 m² al mes, sin considerar los costos variables.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Com apenas 120 m² a margem gerada seria de R$ 4.800,00, gerando prejuízo massivo de R$ 115.200,00 no mês.",
              "en": "Incorrect. 120 m² generates only R$ 4,800 in contribution margin, resulting in massive operational loss.",
              "es": "Incorrecto. 120 m² generarían apenas R$ 4.800 de margen, provocando una pérdida crítica.",
            },
          },
          {
            id: "opt-adm-5-c",
            text: {
              "pt-BR": "50.000 m² no mês, pois o cálculo deve ignorar os custos fixos.",
              "en": "50,000 m² per month, because calculations must ignore fixed costs.",
              "es": "50.000 m² al mes, porque el cálculo debe ignorar los costos fijos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Custos fixos são a essência do cálculo do ponto de equilíbrio contábil e operacional.",
              "en": "Incorrect. Fixed overhead absorption is the foundational core of break-even calculations.",
              "es": "Incorrecto. La absorción de costos fijos es la base del cálculo de equilibrio.",
            },
          },
          {
            id: "opt-adm-5-d",
            text: {
              "pt-BR": "Não é possível calcular ponto de equilíbrio para serviços de engenharia e manutenção.",
              "en": "It is mathematically impossible to calculate break-even points in engineering services.",
              "es": "No es posible calcular el punto de equilibrio en servicios de ingeniería.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O ponto de equilíbrio é uma ferramenta gerencial obrigatória para precificação e governança financeira em serviços industriais.",
              "en": "Incorrect. Break-even analysis is an essential financial governance tool across industrial contract pricing.",
              "es": "Incorrecto. El punto de equilibrio es indispensable para la viabilidad económica de cualquier contrato.",
            },
          },
        ],
      },
      {
        id: "q-adm-6",
        order: 6,
        question: {
          "pt-BR": "Cenário Operacional: Na tomada de decisão de investimento da diretoria da RSS3 para modernização tecnológica, surge a discussão entre despesas operacionais correntes (OPEX) e despesas de capital em ativos fixos (CAPEX). Qual das seguintes transações caracteriza legitimamente um desembolso de CAPEX para a empresa?",
          "en": "Operational Scenario: In capital budgeting at RSS3 for technological upgrades, management debates OPEX vs CAPEX allocation. Which of the following transactions legitimately constitutes CAPEX expenditure?",
          "es": "Escenario Operativo: En el presupuesto de inversión de RSS3, la dirección evalúa gastos operativos (OPEX) frente a inversiones de capital (CAPEX). ¿Cuál de las siguientes operaciones representa legítimamente un desembolso de CAPEX?",
        },
        options: [
          {
            id: "opt-adm-6-a",
            text: {
              "pt-BR": "Pagamento da fatura mensal de telefonia móvel e internet dos escritórios de obra.",
              "en": "Paying monthly cellular phone and internet bills for site field trailers.",
              "es": "Pago mensual de la factura de telefonía e internet de las casetas de obra.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Contas de serviços públicos de telecomunicações são despesas operacionais correntes (OPEX).",
              "en": "Incorrect. Recurring utility bills constitute operational expenditures (OPEX).",
              "es": "Incorrecto. Son gastos operativos recurrentes de rutina (OPEX).",
            },
          },
          {
            id: "opt-adm-6-b",
            text: {
              "pt-BR": "Compra de sacos de estopa e solvente de limpeza para consumo imediato no turno de pintura.",
              "en": "Procuring cleaning rags and degreasing thinners for immediate consumption in a painting shift.",
              "es": "Compra de trapos y diluyentes de limpieza para consumo inmediato en el turno.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Materiais de consumo imediato são custos operacionais diretos (OPEX).",
              "en": "Incorrect. Consumable supplies used up immediately are classified as operating costs (OPEX).",
              "es": "Incorrecto. Los insumos consumibles inmediatos corresponden a OPEX.",
            },
          },
          {
            id: "opt-adm-6-c",
            text: {
              "pt-BR": "Aquisição de duas unidades móveis robotizadas de hidrojateamento de ultra-alta pressão (UAP) de última geração com vida útil estimada de 10 anos, incorporadas ao ativo imobilizado da companhia.",
              "en": "Acquisition of two next-generation ultra-high pressure (UHP) automated hydroblasting crawler units with an estimated 10-year useful life, capitalized as corporate fixed assets.",
              "es": "Adquisición de dos unidades robotizadas de hidrojet de ultra alta presión (UAP) de última generación con vida útil estimada de 10 años, incorporadas al activo fijo de la empresa.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! CAPEX (Capital Expenditure) representa investimentos em bens de capital e ativos imobilizados duráveis que geram benefícios econômicos por múltiplos exercícios contábeis e sofrem depreciação.",
              "en": "Correct! CAPEX represents expenditures on durable fixed physical assets and capital machinery generating long-term economic value subjected to balance sheet depreciation.",
              "es": "¡Correcto! CAPEX representa inversión en bienes de capital y maquinaria duradera que se amortiza a lo largo de varios años.",
            },
          },
          {
            id: "opt-adm-6-d",
            text: {
              "pt-BR": "Pagamento de lanches e refrigerantes para a reunião semanal de alinhamento.",
              "en": "Purchasing snacks and beverages for the weekly progress review meeting.",
              "es": "Compra de café y galletas para la reunión semanal de obra.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Despesas com refeições e copa são despesas operacionais administrativas (OPEX).",
              "en": "Incorrect. Meeting catering constitutes routine administrative overhead (OPEX).",
              "es": "Incorrecto. Es un gasto operativo de oficina (OPEX).",
            },
          },
        ],
      },
      {
        id: "q-adm-7",
        order: 7,
        question: {
          "pt-BR": "Cenário Operacional: Sob a ótica da Teoria dos Dois Fatores de Frederick Herzberg aplicada à liderança de equipes operacionais na RSS3, qual é a distinção fundamental entre 'Fatores Higiênicos' e 'Fatores Motivacionais' no engajamento dos colaboradores?",
          "en": "Operational Scenario: Applying Herzberg's Two-Factor Theory to frontline workforce leadership at RSS3, what is the core distinction between 'Hygiene Factors' and 'Motivator Factors' regarding worker engagement?",
          "es": "Escenario Operativo: Bajo la Teoría Bifactorial de Herzberg aplicada a cuadrillas operativas en RSS3, ¿cuál es la diferencia fundamental entre 'Factores Higiénicos' y 'Factores Motivacionales'?",
        },
        options: [
          {
            id: "opt-adm-7-a",
            text: {
              "pt-BR": "Fatores Higiênicos (como salário justo em dia, sanitários limpos, transporte seguro e EPIs de qualidade) quando presentes apenas evitam a insatisfação, mas não produzem motivação intrínseca de alto desempenho; já os Fatores Motivacionais (reconhecimento, autonomia técnica, oportunidade de aprendizado e novos desafios) geram engajamento genuíno e orgulho pelo trabalho bem executado.",
              "en": "Hygiene Factors (punctual wages, clean site restrooms, safe transit, quality PPE) merely prevent dissatisfaction when adequate, but do not spark intrinsic high performance; whereas Motivator Factors (recognition, technical autonomy, career growth, stimulating challenges) ignite genuine engagement and craftsmanship pride.",
              "es": "Los Factores Higiénicos (salario puntual, baños limpios, transporte seguro y EPP de calidad) evitan la insatisfacción cuando están presentes, pero no motivan por sí solos; los Factores Motivacionales (reconocimiento, autonomía, aprendizaje y retos) generan compromiso genuino y orgullo profesional.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Condições físicas dignas e pagamento correto são requisitos básicos (higiênicos); o que mobiliza o ser humano a superar metas e ter excelência operacional são os motivadores intrínsecos de reconhecimento e desenvolvimento.",
              "en": "Correct! Baseline pay and sanitary facilities remove grievances (hygiene); real discretionary effort and safety ownership stem from intrinsic motivators like growth and appreciation.",
              "es": "¡Correcto! Las condiciones básicas evitan reclamos (higiénicos); el reconocimiento y el desarrollo profesional generan alto desempeño.",
            },
          },
          {
            id: "opt-adm-7-b",
            text: {
              "pt-BR": "Fatores higiênicos referem-se exclusivamente a tomar dois banhos diários na portaria da fábrica.",
              "en": "Hygiene factors refer exclusively to showering twice a day at the plant gate.",
              "es": "Los factores higiénicos se limitan al aseo personal y duchas en portería.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Na teoria de Herzberg, 'higiene' é uma metáfora para o ambiente extrínseco que cerca a atividade.",
              "en": "Incorrect. In Herzberg's taxonomy, 'hygiene' is a metaphor for extrinsic workplace context factors.",
              "es": "Incorrecto. Herzberg utiliza 'higiene' como metáfora para el entorno externo del puesto de trabajo.",
            },
          },
          {
            id: "opt-adm-7-c",
            text: {
              "pt-BR": "Salário é o único fator motivacional que existe, sendo desnecessário qualquer tipo de respeito ou reconhecimento profissional.",
              "en": "Salary is the sole motivator that exists, making respectful supervisory treatment entirely redundant.",
              "es": "El salario es el único motivador real, haciendo innecesario el buen trato o reconocimiento.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Herzberg comprovou que dinheiro atua predominantemente como fator extrínseco/higiênico; sem reconhecimento e propósito, o colaborador desmotiva-se rapidamente.",
              "en": "Incorrect. Empirical studies prove compensation primarily functions extrinsically; without autonomy and recognition, disengagement sets in.",
              "es": "Incorrecto. El salario previene descontento pero no sustituye el reconocimiento ni el crecimiento personal.",
            },
          },
          {
            id: "opt-adm-7-d",
            text: {
              "pt-BR": "Fatores motivacionais só devem ser oferecidos para diretores e acionistas da companhia.",
              "en": "Motivators should only ever be provided to corporate directors and board members.",
              "es": "Los motivadores solo aplican a la alta dirección y accionistas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A motivação humana e a busca por reconhecimento aplicam-se a todos os níveis operacionais do chão de fábrica.",
              "en": "Incorrect. Human behavioral motivators are universal across all frontline operational and field tiers.",
              "es": "Incorrecto. Las necesidades de autorrealización y respeto aplican a todo ser humano en el trabajo.",
            },
          },
        ],
      },
      {
        id: "q-adm-8",
        order: 8,
        question: {
          "pt-BR": "Cenário Operacional: Em Governança Corporativa e Gestão ESG (Environmental, Social and Governance) aplicada aos contratos de engenharia e manutenção da RSS3, quais são os 4 pilares universalmente aceitos pelas melhores práticas de mercado (IBGC / OECD)?",
          "en": "Operational Scenario: In Corporate Governance and ESG stewardship applied to RSS3 engineering contracts, what are the 4 foundational pillars recognized under international best practices (OECD / IBGC)?",
          "es": "Escenario Operativo: En Gobierno Corporativo y gestión ESG aplicada a contratos de ingeniería en RSS3, ¿cuáles son los 4 pilares universalmente reconocidos por las mejores prácticas (OCDE / IBGC)?",
        },
        options: [
          {
            id: "opt-adm-8-a",
            text: {
              "pt-BR": "Segredo fiscal, centralização autoritária de poder, eliminação de auditorias e corte de benefícios.",
              "en": "Tax secrecy, authoritarian centralization, auditing suppression, and benefits elimination.",
              "es": "Secreto tributario, autoritarismo, eliminación de auditorías y corte de beneficios.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal. Essas práticas violam a legislação e caracterizam fraude e má gestão.",
              "en": "Incorrect and illegal. These violate corporate laws and constitute fraud and malfeasance.",
              "es": "Incorrecto e ilegal. Viola leyes mercantiles y principios éticos básicos.",
            },
          },
          {
            id: "opt-adm-8-b",
            text: {
              "pt-BR": "Transparência (Disclosure), Equidade (Fairness), Prestação de Contas (Accountability) e Responsabilidade Corporativa (Corporate Responsibility / Sustentabilidade).",
              "en": "Transparency (Disclosure), Fairness (Equity), Accountability (Reporting), and Corporate Responsibility (Sustainability & Compliance).",
              "es": "Transparencia (Disclosure), Equidad (Fairness), Rendición de Cuentas (Accountability) y Responsabilidad Corporativa (Sustentabilidad).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Os 4 pilares asseguram que a empresa opere com integridade perante clientes, colaboradores, fornecedores, acionistas e o meio ambiente, protegendo a longevidade dos negócios.",
              "en": "Correct! These four pillars guarantee ethical business conduct, safeguarding stakeholders, legal compliance, and environmental stewardship.",
              "es": "¡Correcto! Son los 4 pilares que sustentan la integridad, el cumplimiento ético y la sostenibilidad de las organizaciones.",
            },
          },
          {
            id: "opt-adm-8-c",
            text: {
              "pt-BR": "Publicidade agressiva, contratação sem contrato, sonegação de impostos e uso de notas frias.",
              "en": "Aggressive marketing, off-the-books labor, tax evasion, and fraudulent invoicing.",
              "es": "Publicidad engañosa, trabajadores sin contrato, evasión fiscal y facturación falsa.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e criminoso. Atenta contra o Código Penal e as diretrizes permanentes da RSS3.",
              "en": "Incorrect and criminal. Breaches statutory penal codes and RSS3 core compliance rules.",
              "es": "Incorrecto y delictivo. Viola las leyes y los códigos de conducta de RSS3.",
            },
          },
          {
            id: "opt-adm-8-d",
            text: {
              "pt-BR": "Terceirização de 100% da responsabilidade jurídica para empresas fantasmas.",
              "en": "Outsourcing 100% of corporate legal liabilities to offshore shell companies.",
              "es": "Traspasar toda la responsabilidad legal a empresas fantasma.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal.",
              "en": "Incorrect and illegal.",
              "es": "Incorrecto e ilegal.",
            },
          },
        ],
      },
      {
        id: "q-adm-9",
        order: 9,
        question: {
          "pt-BR": "Cenário Operacional: Na gestão de contratos industriais, o gestor da RSS3 deve controlar a conformidade trabalhista, tributária e previdenciária de suas equipes e subcontratados. Ao término de cada mês, para faturar a medição dos serviços executados perante clientes industriais de grande porte (como a CMPC), qual pacote documental de governança é mandatório apresentar?",
          "en": "Operational Scenario: In industrial contract administration, the RSS3 manager must verify labor, tax, and social security compliance for all deployed personnel. At month end, to release progress payments from major industrial clients (such as CMPC), which governance documentation package is mandatory?",
          "es": "Escenario Operativo: En la administración de contratos industriales, el jefe de RSS3 debe asegurar el cumplimiento laboral, fiscal y previsional de su personal. Al cierre mensual, para facturar a clientes de alta exigencia (como CMPC), ¿qué paquete documental es obligatorio presentar?",
        },
        options: [
          {
            id: "opt-adm-9-a",
            text: {
              "pt-BR": "Apenas um bilhete manuscrito informando que os colaboradores foram pagos em dinheiro vivo sem recibos.",
              "en": "Merely a handwritten note stating that workers were paid in cash with no receipts.",
              "es": "Solo una nota informal indicando que se pagó a los operarios en efectivo sin recibos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal. Pagamento sem recibo viola leis trabalhistas e normas de compliance.",
              "en": "Incorrect and illegal. Cash payouts without receipts violate labor laws and client contracts.",
              "es": "Incorrecto e ilegal. Viola la legislación laboral y fiscal.",
            },
          },
          {
            id: "opt-adm-9-b",
            text: {
              "pt-BR": "Comprovantes de quitação de folha de pagamento e recolhimento de encargos sociais (FGTS/eSocial, INSS), certidões negativas de débitos tributários e trabalhistas (CND e CNDT), folhas de ponto assinadas e comprovantes de entrega de EPIs e ASOs vigentes de todo o efetivo mobilizado na planta.",
              "en": "Payroll proof and mandatory statutory social security remittances (FGTS/eSocial, INSS), tax and labor clearance certificates (CND/CNDT), countersigned timesheets, PPE issue logs, and valid occupational medical clearances (ASO) for all site personnel.",
              "es": "Comprobantes de pago de sueldos y aportes previsionales y sociales (FGTS/eSocial, INSS), certificados de deuda laboral y tributaria (CND y CNDT), libros de asistencia firmados, entrega de EPP y exámenes médicos (ASO) vigentes de todo el personal en planta.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Clientes industriais de alta criticidade exigem comprovação estrita da regularidade trabalhista e previdenciária (conforme Lei de Terceirização e Súmula 331 do TST) para afastar responsabilidade subsidiária antes de liberar medições financeiras.",
              "en": "Correct! Major industrial clients enforce strict labor compliance audits under joint-liability statutes before certifying progress billings.",
              "es": "¡Correcto! Grandes clientes exigen respaldo documental estricto para mitigar responsabilidades laborales subsidiarias antes de autorizar pagos.",
            },
          },
          {
            id: "opt-adm-9-c",
            text: {
              "pt-BR": "Uma declaração de que a empresa não possui funcionários registrados em carteira.",
              "en": "An affidavit stating the company employs no formally registered workers.",
              "es": "Una declaración jurada indicando que no hay trabajadores registrados.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilícito. A informalidade em contratos industriais gera rescisão imediata e pesadas sanções jurídicas.",
              "en": "Incorrect and unlawful. Deploying unregistered labor on industrial sites triggers immediate contract expulsion.",
              "es": "Incorrecto e ilícito. La informalidad en plantas industriales genera expulsión inmediata del contratista.",
            },
          },
          {
            id: "opt-adm-9-d",
            text: {
              "pt-BR": "Um catálogo promocional com fotos de viagens de férias dos diretores.",
              "en": "A promotional catalog displaying photos of executives' personal vacations.",
              "es": "Un catálogo con fotos de las vacaciones de los gerentes.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e desprovido de valor técnico-administrativo.",
              "en": "Incorrect and irrelevant to contract governance.",
              "es": "Incorrecto y sin relevancia para la gestión contractual.",
            },
          },
        ],
      },
      {
        id: "q-adm-10",
        order: 10,
        question: {
          "pt-BR": "Diretrizes Permanentes RSS3 e Conformidade Regulatória: Ao ser aprovado nesta Avaliação Final do curso de Fundamentos de Administração e Gestão na modalidade EAD na plataforma RSS3 Treinamentos, qual é o alcance legal do certificado emitido?",
          "en": "RSS3 Permanent Guidelines & Regulatory Compliance: Upon passing this Final Assessment in Management and Administration Fundamentals on the RSS3 Treinamentos EAD platform, what is the legal validity of the certificate?",
          "es": "Directrices Permanentes de RSS3 y Cumplimiento Normativo: Al aprobar esta Evaluación Final de Fundamentos de Administración y Gestión en modalidad EAD en RSS3 Treinamentos, ¿cuál es el alcance legal del certificado emitido?",
        },
        options: [
          {
            id: "opt-adm-10-a",
            text: {
              "pt-BR": "O certificado comprova a proficiência teórica nos fundamentos administrativos e gerenciais abordados no curso, não conferindo registro de Administrador Profissional junto ao Conselho Regional de Administração (CRA), não substituindo graduação acadêmica nem autorizando a assinar laudos periciais ou dispensar requisitos de segurança e saúde ocupacional (ASO) no canteiro.",
              "en": "The certificate validates theoretical proficiency in managerial concepts covered in the course; it confers no statutory chartered administrator registration (CRA), does not substitute for an accredited degree, nor does it authorize signing forensic audits or waiving safety/medical requirements (ASO) on site.",
              "es": "El certificado acredita el dominio teórico de los conceptos de administración del curso; no otorga colegiatura profesional de Administrador (CRA), no reemplaza títulos universitarios ni autoriza a emitir peritajes judiciales o eximir requisitos médicos (ASO) en obra.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Conforme a Seção 3 das Diretrizes Permanentes (AGENTS.md), o LMS distingue expressamente capacitações teóricas livres de habilitações profissionais regulamentadas e requisitos médicos ocupacionais obrigatórios.",
              "en": "Correct! As per Section 3 of AGENTS.md, the LMS strictly differentiates EAD theoretical certificates from statutory professional board licensure and occupational medical clearances.",
              "es": "¡Correcto! Conforme a la Sección 3 de AGENTS.md, la teoría EAD no confiere habilitación profesional colegiada ni aptitud médica laboral.",
            },
          },
          {
            id: "opt-adm-10-b",
            text: {
              "pt-BR": "O certificado equivale automaticamente a um diploma de Mestrado em Administração emitido por universidade federal.",
              "en": "The certificate automatically equates to a Master of Science in Administration from an accredited federal university.",
              "es": "El certificado equivale automáticamente a un título universitario de Maestría en Administración.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Cursos livres corporativos não conferem títulos acadêmicos de pós-graduação stricto sensu.",
              "en": "Incorrect. Corporate continuous learning courses do not confer accredited university degrees.",
              "es": "Incorrecto. Los cursos corporativos no otorgan grados académicos universitarios.",
            },
          },
          {
            id: "opt-adm-10-c",
            text: {
              "pt-BR": "O certificado isenta a empresa de prestar contas fiscais perante a Receita Federal do Brasil.",
              "en": "The certificate exempts the firm from filing tax returns with the federal revenue service.",
              "es": "El certificado exime a la empresa de declarar impuestos ante el fisco.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Obrigações fiscais decorrem de lei e são inafastáveis.",
              "en": "Incorrect. Statutory tax compliance is non-negotiable.",
              "es": "Incorrecto. Las obligaciones tributarias son indeclinables por ley.",
            },
          },
          {
            id: "opt-adm-10-d",
            text: {
              "pt-BR": "O certificado autoriza a operar guindastes e tratores de esteira sem exame prático nem habilitação de motorista.",
              "en": "The certificate authorizes operating heavy crawler cranes and bulldozers without road licenses or practical tests.",
              "es": "El certificado autoriza a operar grúas pesadas y excavadoras sin licencia de conducir ni examen práctico.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e perigoso. A operação de máquinas pesadas requer habilitação específica de trânsito e treinamento prático sob a NR-11.",
              "en": "Incorrect. Machine operation demands driver licenses and certified practical training under NR-11.",
              "es": "Incorrecto. El manejo de maquinaria pesada exige licencia de conducir y capacitación práctica bajo la NR-11.",
            },
          },
        ],
      },
    ],
  },
};
