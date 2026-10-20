import { CourseDemonstration } from "@/types";

export const gestaoPessoasCourseData: CourseDemonstration = {
  id: "c-gestao-de-pessoas",
  slug: "gestao-de-pessoas-lideranca-operacional",
  title: {
    "pt-BR": "Gestão Estratégica de Pessoas & Liderança Operacional",
    "en": "Strategic People Management & Frontline Leadership",
    "es": "Gestión Estratégica de Personas y Liderazgo Operacional",
  },
  description: {
    "pt-BR": "Curso completo de gestão de pessoas voltado ao contexto industrial e corporativo da RSS3: atração e recrutamento técnico, processos seletivos criteriosos, mercado de trabalho, avaliação e controle de desempenho, programas de treinamento e capacitação contínua, e políticas de remuneração e cargos.",
    "en": "Comprehensive people management course for RSS3 industrial operations: technical talent attraction, recruitment, screening, job market dynamics, performance evaluation, training systems, and compensation policies.",
    "es": "Curso integral de gestión de personas para operaciones industriales: atracción y reclutamiento de talentos, selección por competencias, evaluación de desempeño, capacitación y compensación.",
  },
  longDescription: {
    "pt-BR": "O treinamento de Gestão Estratégica de Pessoas & Liderança Operacional da RSS3 Treinamentos foi estruturado para capacitar supervisores de campo, coordenadores de contrato, analistas de RH e lideranças técnicas a gerir equipes industriais com foco em produtividade, segurança, engajamento e retenção de talentos. O conteúdo aborda os pilares modernos de Recursos Humanos: desde a identificação da necessidade de vagas e comparação estratégica entre recrutamento interno e externo, técnicas de triagem e entrevistas por competências técnicas e comportamentais, leitura de mercado de trabalho, estruturação de matrizes de capacitação operacional e integração (onboarding), até sistemas de avaliação contínua de desempenho, indicadores de controle (turnover e absenteísmo) e políticas justas de remuneração fixa e variável em frentes industriais de alta criticidade.",
    "en": "Structured for field supervisors, project managers, HR professionals, and technical leaders. Covers modern human capital management: requisition planning, internal vs. external recruitment strategies, competency-based interviews, onboarding and jobsite skill matrices, KPI tracking, and competitive compensation models.",
    "es": "Diseñado para líderes de obra, supervisores y profesionales de RRHH. Desarrolla competencias en selección técnica, retención de talentos, matrices de polivalencia, capacitación en seguridad y administración salarial.",
  },
  schoolId: "gestao-lideranca",
  schoolName: {
    "pt-BR": "Gestão Industrial, Tecnologia e Produtividade",
    "en": "Industrial Management, Technology & Productivity",
    "es": "Gestión Industrial, Tecnología y Productividad",
  },
  workloadHours: 30,
  level: "intermediate",
  modality: "online",
  isMandatory: false,
  mandatoryFor: [
    "Coordenador Operacional",
    "Encarregado Geral",
    "Supervisor de Frente",
    "Líder de Contrato",
    "Analista de Recursos Humanos",
    "Técnico de Segurança do Trabalho",
  ],
  targetAudience: {
    "pt-BR": "Líderes de equipe, encarregados, supervisores industriais, engenheiros de campo, coordenadores de contratos e profissionais de gestão de pessoas da RSS3 Soluções Industriais.",
    "en": "Team leads, foremen, industrial supervisors, project engineers, contract coordinators, and HR professionals at RSS3 Industrial Solutions.",
    "es": "Jefes de equipo, supervisores industriales, ingenieros de campo y líderes de contrato de RSS3 Soluciones Industriales.",
  },
  prerequisites: {
    "pt-BR": "Atuação ou interesse em liderança de equipes, coordenação de projetos ou rotinas de gestão de pessoas.",
    "en": "Current leadership role or interest in frontline management and personnel coordination.",
    "es": "Experiencia o interés en liderazgo de equipos y gestión de personas.",
  },
  modulesCount: 4,
  lessonsCount: 15,
  thumbnailGradient: "from-blue-900 via-indigo-900 to-slate-950",
  coverImage: "/images/courses/gestao-pessoas.jpg",
  categories: ["gestao-produtividade","qualidade-processos"],
  badgeCode: "GP-RSS3",
  updatedAtDate: "2026-10-16",
  modules: [
    {
      id: "mod-gp-1",
      order: 1,
      title: {
        "pt-BR": "Módulo 1: Fundamentos e Estratégias de Recrutamento (Aulas 00 a 04)",
        "en": "Module 1: People Management Foundations & Recruitment Strategies",
        "es": "Módulo 1: Fundamentos de Gestión de Personas y Estrategias de Reclutamiento",
      },
      description: {
        "pt-BR": "Introdução à gestão de pessoas, conceito e relevância do recrutamento de talentos, análise comparativa entre recrutamento interno e externo e fluxo operacional de captação.",
        "en": "Introduction to people management, recruitment relevance, internal vs external talent search, and step-by-step requisition workflows.",
        "es": "Introducción a la gestión de personas, captación de talentos, reclutamiento interno vs externo y flujo operativo.",
      },
      lessons: [
        {
          id: "les-gp-1-0",
          order: 1,
          title: {
            "pt-BR": "Aula 00: Introdução à Gestão de Pessoas na Indústria Moderna",
            "en": "Lesson 00: Introduction to People Management in Modern Industry",
            "es": "Clase 00: Introducción a la Gestión de Personas en la Industria Moderna",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "xQeu08NOVEM",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender a evolução da gestão de recursos humanos e seu papel estratégico no desempenho operacional e na segurança da RSS3.",
              "en": "Understand the evolution of HR management and its strategic role in operational performance and site safety.",
              "es": "Comprender la evolución de la gestión humana y su rol estratégico en el desempeño operativo y la seguridad.",
            },
            summaryPoints: [
              {
                "pt-BR": "Transição do departamento de pessoal burocrático para uma gestão de pessoas como parceira de negócio.",
                "en": "Transition from administrative personnel processing to strategic people partnerships.",
                "es": "Transición del departamento de personal a una gestión de talentos estratégica.",
              },
              {
                "pt-BR": "O colaborador como elemento central da cultura de prevenção de acidentes e excelência operacional.",
                "en": "The worker as the focal point of safety prevention and operating excellence.",
                "es": "El trabajador como centro de la cultura de prevención y excelencia operativa.",
              },
            ],
          },
        },
        {
          id: "les-gp-1-1",
          order: 2,
          title: {
            "pt-BR": "Aula 01: O que é Recrutamento de Pessoas e seus Objetivos",
            "en": "Lesson 01: What is Recruitment and its Core Objectives",
            "es": "Clase 01: Qué es el Reclutamiento de Personas y sus Objetivos",
          },
          durationMinutes: 16,
          contentType: "video",
          videoUrl: "QghLOL86VwY",
          contentDetail: {
            objective: {
              "pt-BR": "Definir os princípios do recrutamento como ferramenta de atração e conexão entre a empresa e os profissionais do mercado.",
              "en": "Define recruitment principles as a tool to attract and connect top craft talent with industrial needs.",
              "es": "Definir los principios de reclutamiento para conectar candidatos con necesidades operacionales.",
            },
            summaryPoints: [
              {
                "pt-BR": "Conceito de recrutamento: divulgação das oportunidades e atração de perfis aderentes.",
                "en": "Recruitment concept: job broadcasting and sourcing matching candidate profiles.",
                "es": "Concepto de reclutamiento: difusión de oportunidades y atracción de candidatos.",
              },
              {
                "pt-BR": "Alinhamento prévio entre a liderança de campo e o RH sobre as competências e exigências do cargo.",
                "en": "Upfront alignment between site leaders and HR on role-specific requirements.",
                "es": "Alineación entre supervisores de campo y RRHH sobre requerimientos técnicos.",
              },
            ],
          },
        },
        {
          id: "les-gp-1-2",
          order: 3,
          title: {
            "pt-BR": "Aula 02: A Importância Estratégica do Recrutamento (Parte 01)",
            "en": "Lesson 02: The Strategic Importance of Recruitment (Part 01)",
            "es": "Clase 02: La Importancia Estratégica del Reclutamiento (Parte 01)",
          },
          durationMinutes: 15,
          contentType: "video",
          videoUrl: "GhtE5rShzkg",
          contentDetail: {
            objective: {
              "pt-BR": "Identificar os impactos econômicos e operacionais de contratações assertivas na mitigação de turnover.",
              "en": "Analyze economic and operational benefits of precise hiring on lowering field turnover.",
              "es": "Identificar impactos económicos y operativos de contrataciones asertivas.",
            },
            summaryPoints: [
              {
                "pt-BR": "Custos diretos e indiretos de contratações erradas em contratos industriais de alta criticidade.",
                "en": "Direct and indirect costs of mismatched hires on mission-critical industrial contracts.",
                "es": "Costos de contrataciones erróneas en contratos industriales de alta criticidad.",
              },
              {
                "pt-BR": "Como a atração de perfis compatíveis reduz o tempo de integração e acelera a entrega de metas de parada.",
                "en": "How targeted attraction reduces onboarding time and accelerates shutdown milestones.",
                "es": "Cómo la atracción adecuada agiliza la inducción y el cumplimiento de metas.",
              },
            ],
          },
        },
        {
          id: "les-gp-1-3",
          order: 4,
          title: {
            "pt-BR": "Aula 02 (Cont.): A Importância Estratégica do Recrutamento (Parte 02)",
            "en": "Lesson 02 (Cont.): The Strategic Importance of Recruitment (Part 02)",
            "es": "Clase 02 (Cont.): La Importancia Estratégica del Reclutamiento (Parte 02)",
          },
          durationMinutes: 14,
          contentType: "video",
          videoUrl: "kncD7HZLz-8",
          contentDetail: {
            objective: {
              "pt-BR": "Construir e gerenciar bancos de talentos técnicos para mobilizações ágeis de frentes de trabalho.",
              "en": "Build and manage technical talent pipelines for rapid industrial crew mobilization.",
              "es": "Construir bancos de talentos técnicos para movilizaciones inmediatas.",
            },
            summaryPoints: [
              {
                "pt-BR": "Manutenção de cadastros pré-qualificados com cursos de NRs e ASOs mapeados.",
                "en": "Maintaining pre-screened databases with valid safety certifications.",
                "es": "Mantenimiento de bases de datos con certificaciones normativas vigentes.",
              },
              {
                "pt-BR": "Garantia de prontidão operacional sem comprometer o rigor da triagem técnica.",
                "en": "Ensuring staffing readiness without compromising technical screening standards.",
                "es": "Asegurar rapidez operativa sin descuidar el rigor del filtro técnico.",
              },
            ],
          },
        },
        {
          id: "les-gp-1-4",
          order: 5,
          title: {
            "pt-BR": "Aula 03: Recrutamento Interno versus Recrutamento Externo",
            "en": "Lesson 03: Internal vs External Recruitment",
            "es": "Clase 03: Reclutamiento Interno vs Externo",
          },
          durationMinutes: 20,
          contentType: "video",
          videoUrl: "7vdpV-Tk9DY",
          contentDetail: {
            objective: {
              "pt-BR": "Avaliar criticamente quando optar por mobilidade interna ou buscar novos talentos no mercado.",
              "en": "Critically assess when to promote from within versus sourcing external market talent.",
              "es": "Evaluar cuándo optar por movilidad interna o buscar talentos externos.",
            },
            summaryPoints: [
              {
                "pt-BR": "Vantagens do recrutamento interno: valorização do colaborador, motivação e baixo risco de adaptação cultural.",
                "en": "Internal search pros: career progression, employee morale, and minimal culture shock.",
                "es": "Ventajas del reclutamiento interno: retención, motivación y rápida adaptación cultural.",
              },
              {
                "pt-BR": "Vantagens do recrutamento externo: oxigenação da equipe com novas ideias e conhecimentos de outras plantas.",
                "en": "External search pros: fresh industry ideas and new specialized expertise.",
                "es": "Ventajas del reclutamiento externo: nuevas técnicas y experiencias de otras plantas.",
              },
            ],
          },
        },
        {
          id: "les-gp-1-5",
          order: 6,
          title: {
            "pt-BR": "Aula 04: Passo a Passo do Processo de Recrutamento Operacional",
            "en": "Lesson 04: Step-by-Step Operational Recruitment Workflow",
            "es": "Clase 04: Paso a Paso del Flujo de Reclutamiento Operativo",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "PAK4R9Qd7pk",
          contentDetail: {
            objective: {
              "pt-BR": "Executar o fluxo completo de contratação: da requisição formal de pessoal até a convocação para seleção.",
              "en": "Execute the end-to-end recruitment cycle: from requisition to candidate invitations.",
              "es": "Ejecutar el ciclo completo de reclutamiento: desde la requisición formal hasta la convocatoria.",
            },
            summaryPoints: [
              {
                "pt-BR": "Elaboração da Requisição de Pessoal (RP) com descritivo detalhado do perfil operacional exigido.",
                "en": "Crafting job requisitions with comprehensive operational role descriptions.",
                "es": "Elaboración de requisiciones de personal con perfil de puesto claro.",
              },
              {
                "pt-BR": "Canais assertivos de atração: redes profissionais, indicações internas e parceiros locais de formação.",
                "en": "Effective sourcing channels: professional networks, employee referrals, and technical schools.",
                "es": "Canales de difusión: redes profesionales, referidos y escuelas técnicas.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-gp-2",
      order: 2,
      title: {
        "pt-BR": "Módulo 2: Mercado de Trabalho, Dinâmica de Oferta e Seleção de Talentos (Aulas 05 e 06)",
        "en": "Module 2: Labor Market Dynamics & Talent Selection Techniques",
        "es": "Módulo 2: Mercado Laboral y Técnicas de Selección de Talentos",
      },
      description: {
        "pt-BR": "Comportamento da oferta e demanda no mercado industrial e técnicas estruturadas de seleção por competências.",
        "en": "Supply and demand dynamics in industrial labor markets and competency-based interview and testing methodologies.",
        "es": "Oferta y demanda en el mercado industrial y técnicas estructuradas de selección por competencias.",
      },
      lessons: [
        {
          id: "les-gp-2-1",
          order: 1,
          title: {
            "pt-BR": "Aula 05: Análise do Mercado de Trabalho e de Recursos Humanos",
            "en": "Lesson 05: Analysis of the Labor and HR Market",
            "es": "Clase 05: Análisis del Mercado Laboral y de Recursos Humanos",
          },
          durationMinutes: 17,
          contentType: "video",
          videoUrl: "GqaynXRIwEY",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender a dinâmica de escassez e abundância de mão de obra técnica e seu impacto no planejamento de paradas.",
              "en": "Understand talent scarcity vs abundance dynamics and its influence on shutdown planning.",
              "es": "Comprender la oferta y demanda laboral técnica y su impacto en paradas de planta.",
            },
            summaryPoints: [
              {
                "pt-BR": "Diferença entre mercado de trabalho em oferta (muitas vagas) e mercado em procura (poucas vagas).",
                "en": "Contrasting candidate-driven versus employer-driven labor market conditions.",
                "es": "Diferencia entre mercado con escasez o abundancia de mano de obra.",
              },
              {
                "pt-BR": "Estratégias de atratividade da marca empregadora RSS3 em regiões de polos industriais e celulose.",
                "en": "RSS3 employer branding tactics in industrial hubs and pulp/paper operational clusters.",
                "es": "Estrategias de marca empleadora para atraer personal especializado en plantas de celulosa.",
              },
            ],
          },
        },
        {
          id: "les-gp-2-2",
          order: 2,
          title: {
            "pt-BR": "Aula 06: Seleção de Pessoas — Métodos e Dinâmicas (Parte 01)",
            "en": "Lesson 06: Personnel Selection — Methods & Dynamics (Part 01)",
            "es": "Clase 06: Selección de Personal — Métodos y Dinámicas (Parte 01)",
          },
          durationMinutes: 19,
          contentType: "video",
          videoUrl: "CXA9jJhsKog",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar as etapas de seleção de candidatos, triagem curricular e condução de entrevistas comportamentais.",
              "en": "Master screening workflows, resume vetting, and competency-based interview execution.",
              "es": "Dominar etapas de selección, filtro curricular y entrevistas por competencias.",
            },
            summaryPoints: [
              {
                "pt-BR": "A seleção como processo de escolha e decisão com base no perfil ideal da vaga.",
                "en": "Selection as an objective comparison against ideal role benchmarks.",
                "es": "La selección como proceso de decisión frente al perfil del puesto.",
              },
              {
                "pt-BR": "Método STAR (Situação, Tarefa, Ação e Resultado) para investigar histórico profissional real.",
                "en": "The STAR technique (Situation, Task, Action, Result) for evaluating real past performance.",
                "es": "Método STAR para evaluar situaciones reales del pasado laboral.",
              },
            ],
          },
        },
        {
          id: "les-gp-2-3",
          order: 3,
          title: {
            "pt-BR": "Aula 06 (Cont.): Seleção de Pessoas — Testes Práticos e Decisão Final (Parte 02)",
            "en": "Lesson 06 (Cont.): Personnel Selection — Practical Tests & Decision (Part 02)",
            "es": "Clase 06 (Cont.): Selección de Personal — Pruebas Prácticas y Decisión (Parte 02)",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "uvNtFfARhFg",
          contentDetail: {
            objective: {
              "pt-BR": "Aplicar testes práticos de bancada e alinhar a decisão de contratação entre a liderança de campo e o RH.",
              "en": "Apply hands-on trade testing and harmonize final hiring decisions between site leads and HR.",
              "es": "Aplicar pruebas prácticas de oficio y consensuar la decisión de contratación.",
            },
            summaryPoints: [
              {
                "pt-BR": "Testes práticos de habilidade: montagem controlada, inspeção de mangueiras de hidrojato e ensaios de pintura.",
                "en": "Controlled trade skill trials: hydroblasting hose checks and scaffolding mockups.",
                "es": "Pruebas prácticas de habilidad en ambientes controlados y seguros.",
              },
              {
                "pt-BR": "Decisão compartilhada: o líder técnico valida a aptidão funcional e o RH avalia o fit cultural e disciplinar.",
                "en": "Consensus hiring: site leads validate mechanical skill; HR ensures behavioral and cultural fit.",
                "es": "Decisión compartida: el líder valida la destreza y RRHH valida la actitud y valores.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-gp-3",
      order: 3,
      title: {
        "pt-BR": "Módulo 3: Avaliação de Desempenho, Indicadores de Controle e Treinamento Contínuo (Aulas 07 e 08)",
        "en": "Module 3: Performance Management, KPI Control & Continual Training Systems",
        "es": "Módulo 3: Evaluación de Desempeño, Indicadores de Control y Capacitación Continua",
      },
      description: {
        "pt-BR": "Métricas de avaliação e controle de equipes industriais, rotinas de feedback e arquitetura de programas de treinamento corporativo.",
        "en": "Performance evaluation matrices, operational HR KPIs, constructive feedback, and corporate training architecture.",
        "es": "Métricas de evaluación, KPIs de control operativo, rutinas de feedback y programas de capacitación continua.",
      },
      lessons: [
        {
          id: "les-gp-3-1",
          order: 1,
          title: {
            "pt-BR": "Aula 07: Avaliação de Desempenho e Controle de Gestão",
            "en": "Lesson 07: Performance Evaluation & Management Control",
            "es": "Clase 07: Evaluación de Desempeño y Control de Gestión",
          },
          durationMinutes: 21,
          contentType: "video",
          videoUrl: "EFBDlkxZijk",
          contentDetail: {
            objective: {
              "pt-BR": "Estruturar sistemas de avaliação de desempenho operacional, acompanhamento de indicadores e reuniões periódicas de alinhamento.",
              "en": "Structure field performance appraisal systems, KPI tracking, and recurring alignment reviews.",
              "es": "Estructurar evaluaciones de desempeño, seguimiento de metas y reuniones de retroalimentación.",
            },
            summaryPoints: [
              {
                "pt-BR": "Critérios objetivos: assiduidade, segurança comportamental, qualidade do serviço e cooperação em equipe.",
                "en": "Objective metrics: attendance, proactive safety behavior, quality standards, and team collaboration.",
                "es": "Criterios objetivos: puntualidad, seguridad, calidad y compañerismo.",
              },
              {
                "pt-BR": "Como realizar o ciclo de feedback construtivo individual em local reservado, focado em fatos observados.",
                "en": "Conducting constructive one-on-one feedback in private, grounded in observable facts.",
                "es": "Cómo brindar retroalimentación constructiva individual basada en hechos concretos.",
              },
            ],
          },
        },
        {
          id: "les-gp-3-2",
          order: 2,
          title: {
            "pt-BR": "Aula 08: Treinamento e Desenvolvimento — Diagnóstico e LNT (Parte 01)",
            "en": "Lesson 08: Training & Development — Needs Assessment & LNT (Part 01)",
            "es": "Clase 08: Capacitación y Desarrollo — Diagnóstico y LNT (Parte 01)",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "9UrLLFrZIpE",
          contentDetail: {
            objective: {
              "pt-BR": "Realizar o Levantamento de Necessidades de Treinamento (LNT) focado em matrizes de polivalência e normas regulamentadoras.",
              "en": "Execute Training Needs Assessments (LNT) centered on operational polyvalence and safety standards.",
              "es": "Realizar el diagnóstico de necesidades de capacitación enfocado en polivalencia y normas.",
            },
            summaryPoints: [
              {
                "pt-BR": "Identificação de gaps de capacitação antes que se transformem em paradas de serviço ou acidentes.",
                "en": "Detecting skill gaps proactively before they cause downtime or safety incidents.",
                "es": "Identificación de brechas de capacitación antes de que generen fallas o accidentes.",
              },
              {
                "pt-BR": "Matriz de treinamento regulamentar da RSS3: controle de validades de NR-35, NR-33, NR-10 e NR-11.",
                "en": "RSS3 regulatory training matrix: tracking compliance expirations across all sites.",
                "es": "Matriz de capacitación normativa: control de vencimientos de normas de seguridad.",
              },
            ],
          },
        },
        {
          id: "les-gp-3-3",
          order: 3,
          title: {
            "pt-BR": "Aula 08 (Cont.): Treinamento e Desenvolvimento — Desenho e Execução (Parte 02)",
            "en": "Lesson 08 (Cont.): Training & Development — Instructional Design & Execution (Part 02)",
            "es": "Clase 08 (Cont.): Capacitación y Desarrollo — Diseño y Ejecución (Parte 02)",
          },
          durationMinutes: 17,
          contentType: "video",
          videoUrl: "7QuAIcXH_rQ",
          contentDetail: {
            objective: {
              "pt-BR": "Desenhar ações formativas baseadas em princípios andragógicos para adultos da indústria, unindo teoria e prática.",
              "en": "Design adult learning interventions tailored to industrial craftspersons combining theory with field practice.",
              "es": "Diseñar capacitaciones para adultos en la industria combinando teoría y práctica.",
            },
            summaryPoints: [
              {
                "pt-BR": "Princípios de andragogia: ensino prático, focado na resolução de problemas reais de parada industrial.",
                "en": "Andragogy principles: practical, problem-solving-oriented training for industrial turnarounds.",
                "es": "Principios de andragogía: aprendizaje práctico enfocado en resolver problemas reales de obra.",
              },
              {
                "pt-BR": "Uso de tecnologias digitais e simulações seguras no LMS da RSS3 Treinamentos.",
                "en": "Leveraging digital LMS modules and hands-on practice in RSS3 Treinamentos.",
                "es": "Uso de plataformas LMS y simulaciones prácticas en RSS3 Treinamentos.",
              },
            ],
          },
        },
        {
          id: "les-gp-3-4",
          order: 4,
          title: {
            "pt-BR": "Aula 08 (Cont.): Treinamento e Desenvolvimento — Avaliação de Eficácia (Parte 03)",
            "en": "Lesson 08 (Cont.): Training & Development — Impact & ROI Evaluation (Part 03)",
            "es": "Clase 08 (Cont.): Capacitación y Desarrollo — Evaluación de Eficacia (Parte 03)",
          },
          durationMinutes: 16,
          contentType: "video",
          videoUrl: "L8wHx7m2p-I",
          contentDetail: {
            objective: {
              "pt-BR": "Mensurar o retorno e a efetividade das capacitações através dos quatro níveis de Kirkpatrick aplicados à indústria.",
              "en": "Measure training effectiveness and ROI across Kirkpatrick's four levels adapted for heavy industry.",
              "es": "Medir el impacto de la capacitación mediante los cuatro niveles de Kirkpatrick aplicados a planta.",
            },
            summaryPoints: [
              {
                "pt-BR": "Avaliação de reação e aprendizado imediato versus avaliação comportamental e de resultados em campo.",
                "en": "Comparing immediate knowledge tests with long-term on-the-job behavioral audits.",
                "es": "Evaluación inmediata de aprendizaje vs auditoría de conducta y resultados en campo.",
              },
              {
                "pt-BR": "Indicadores de impacto: redução de retrabalho em pintura, menos desvios operacionais e zero acidentes.",
                "en": "Impact KPIs: lower coating rework, fewer safety non-conformances, zero lost-time incidents.",
                "es": "KPIs de impacto: menor retrabajo, cero desvíos críticos y cero accidentes.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-gp-4",
      order: 4,
      title: {
        "pt-BR": "Módulo 4: Remuneração Estratégica, Benefícios e Política Salarial (Aulas 09 e 10)",
        "en": "Module 4: Strategic Compensation, Benefits & Wage Policies",
        "es": "Módulo 4: Remuneración Estratégica, Beneficios y Política Salarial",
      },
      description: {
        "pt-BR": "Composição de remuneração total, incentivos alinhados a metas operacionais de segurança e estruturação de políticas salariais competitivas.",
        "en": "Total compensation frameworks, safety-linked operational incentives, and equitable, competitive wage policies.",
        "es": "Composición de remuneración total, incentivos por seguridad y diseño de políticas salariales equitativas.",
      },
      lessons: [
        {
          id: "les-gp-4-1",
          order: 1,
          title: {
            "pt-BR": "Aula 09: Composição da Remuneração Total na Indústria",
            "en": "Lesson 09: Total Compensation Architecture in Industry",
            "es": "Clase 09: Composición de la Remuneración Total en la Industria",
          },
          durationMinutes: 19,
          contentType: "video",
          videoUrl: "gjNeZpgJlPQ",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender os componentes da remuneração direta e indireta e seus reflexos na atração e motivação de equipes.",
              "en": "Understand direct and indirect compensation components and their influence on team motivation.",
              "es": "Comprender la remuneración directa e indirecta y su efecto en la atracción y retención.",
            },
            summaryPoints: [
              {
                "pt-BR": "Salário contratual fixo e adicionais obrigatórios da atividade (insalubridade, periculosidade e horas extraordinárias).",
                "en": "Base salary combined with hazard premiums, shift differentials, and overtime rules.",
                "es": "Salario base y adicionales legales por riesgos, nocturnidad y horas extras.",
              },
              {
                "pt-BR": "Benefícios corporativos essenciais: alimentação, transporte seguro, saúde ocupacional e incentivos de segurança.",
                "en": "Key operational benefits: meals, safe transport, occupational healthcare, and safety rewards.",
                "es": "Beneficios clave: transporte seguro, alimentación y cobertura médica ocupacional.",
              },
            ],
          },
        },
        {
          id: "les-gp-4-2",
          order: 2,
          title: {
            "pt-BR": "Aula 10: Estruturação de Políticas Salariais e Planos de Cargos",
            "en": "Lesson 10: Structuring Wage Policies & Job Leveling Systems",
            "es": "Clase 10: Estructuración de Políticas Salariales y Planes de Cargos",
          },
          durationMinutes: 22,
          contentType: "video",
          videoUrl: "xzPMPiM0VGc",
          contentDetail: {
            objective: {
              "pt-BR": "Desenvolver políticas de remuneração transparentes que equilibrem justiça interna com competitividade regional de mercado.",
              "en": "Build transparent compensation structures that balance internal equity with regional market benchmarks.",
              "es": "Desarrollar políticas salariales que equilibren equidad interna con competitividad regional.",
            },
            summaryPoints: [
              {
                "pt-BR": "Equidade interna: valorização proporcional à complexidade e responsabilidade técnica de cada função.",
                "en": "Internal equity: pay scales reflecting role complexity, hazard level, and supervisory scope.",
                "es": "Equidad interna: remuneración proporcional a la complejidad y riesgo de cada puesto.",
              },
              {
                "pt-BR": "Competitividade externa: pesquisas salariais periódicas para evitar fuga de talentos qualificados.",
                "en": "External competitiveness: market surveys to prevent turnover of certified technicians.",
                "es": "Competitividad externa: encuestas salariales para retener profesionales clave.",
              },
            ],
          },
        },
      ],
    },
  ],
  finalAssessment: {
    id: "exam-gestao-de-pessoas",
    order: 16,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 50,
    questionsCount: 10,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação teórica e prática sobre os fundamentos de Gestão Estratégica de Pessoas & Liderança Operacional. Nota mínima de 70% para emissão do certificado.",
      "en": "Theoretical and practical assessment on people management and field leadership. 70% passing score.",
      "es": "Evaluación final de gestión estratégica de personas y liderazgo operativo. Nota mínima de 70%.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência — Gestão Estratégica de Pessoas",
      "en": "Final Competency Exam — Strategic People Management",
      "es": "Evaluación Final de Competencias — Gestión Estratégica de Personas",
    },
    description: {
      "pt-BR": "Validação de domínio em recrutamento e seleção técnica, metodologia STAR, matriz LNT, avaliação de desempenho, políticas salariais, clima, turnover, liderança situacional e governança regulatória.",
      "en": "Validates proficiency in recruitment, STAR interviewing, training needs (LNT), performance appraisals, wage policies, turnover analytics, situational leadership, and compliance.",
      "es": "Valida competencias en selección técnica, método STAR, diagnóstico LNT, evaluación del desempeño, escalas salariales, rotación, liderazgo y cumplimiento normativo.",
    },
    questions: [
      {
        id: "q-gp-1",
        order: 1,
        question: {
          "pt-BR": "Cenário Operacional: Em preparação para uma grande parada de manutenção de 28 dias na planta de celulose, a gerência de operações da RSS3 precisa mobilizar 60 profissionais entre encarregados, montadores de andaime e jatistas. Analisando as opções entre recrutamento interno e externo sob a ótica de riscos operacionais e custos de integração, qual é a conduta técnica recomendada?",
          "en": "Operational Scenario: In preparation for a 28-day turnaround at a pulp facility, RSS3 management must mobilize 60 workers including foremen, scaffolders, and hydroblasters. Analyzing internal vs external recruitment regarding operational risk and onboarding cost, what is the recommended practice?",
          "es": "Escenario Operativo: Ante una parada de planta de celulosa de 28 días, RSS3 debe movilizar 60 trabajadores entre supervisores, andamieros e hidrojetistas. Analizando reclutamiento interno vs externo bajo riesgo operativo y costos, ¿cuál es la conducta recomendada?",
        },
        options: [
          {
            id: "opt-gp-1-a",
            text: {
              "pt-BR": "Contratar 100% da equipe através de agências de trabalho temporário sem qualquer vínculo anterior, dispensando a realização de integração de segurança ou testes práticos para reduzir custos de mobilização.",
              "en": "Hiring 100% of the crew through temporary staffing agencies with no previous company history, skipping safety induction and trade testing to save money.",
              "es": "Contratar el 100% mediante agencias temporales sin historial previo, obviando inducciones y pruebas prácticas para ahorrar costos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Contratar sem triagem técnica ou integração de segurança gera altíssimo risco de acidentes graves e paralisação dos serviços.",
              "en": "Incorrect. Hiring without technical vetting or safety induction drastically increases accident risks.",
              "es": "Incorrecto. Contratar sin filtro técnico ni inducción genera alto riesgo de accidentes.",
            },
          },
          {
            id: "opt-gp-1-b",
            text: {
              "pt-BR": "Priorizar o recrutamento interno para postos críticos de liderança e supervisão aproveitando a cultura consolidada de segurança e procedimentos da RSS3, complementando as frentes de execução com recrutamento externo rigorosamente filtrado por provas de ofício e integração de segurança.",
              "en": "Prioritizing internal recruitment for key supervisory roles leveraging proven RSS3 safety culture and SOP mastery, while supplementing field crews via external recruiting rigorously filtered through trade trials and safety inductions.",
              "es": "Priorizar la selección interna para supervisión y puestos críticos aprovechando la cultura de seguridad consolidada de RSS3, y complementar cuadrillas con reclutamiento externo filtrado por pruebas de oficio e inducción.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A liderança interna preserva os padrões de segurança e produtividade da empresa, reduzindo drasticamente o tempo de curva de aprendizagem e o risco operacional na planta.",
              "en": "Correct! Internal leadership retains core safety standards and operational cadence, shortening learning curves during high-risk shutdowns.",
              "es": "¡Correcto! La supervisión interna mantiene el estándar de seguridad y mitiga el riesgo de adaptación en parada.",
            },
          },
          {
            id: "opt-gp-1-c",
            text: {
              "pt-BR": "Promover compulsoriamente apenas os colaboradores mais antigos de casa para a liderança, independentemente do histórico de acidentes ou de sua capacidade de gestão de pessoas.",
              "en": "Compulsorily promoting solely the most senior workers to leadership regardless of safety records or soft skills.",
              "es": "Ascender obligatoriamente a los operarios más antiguos a líderes, sin evaluar su historial de seguridad ni habilidades humanas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Antiguidade sem competência técnica comprovada e liderança comportamental em segurança pode comprometer toda a equipe.",
              "en": "Incorrect. Seniority alone without demonstrated leadership and safety track record compromises operational safety.",
              "es": "Incorrecto. La antigüedad por sí sola no garantiza liderazgo ni competencia preventiva.",
            },
          },
          {
            id: "opt-gp-1-d",
            text: {
              "pt-BR": "Substituir todos os líderes veteranos por profissionais recém-formados sem vivência em ambiente de fábrica pesada para cortar a folha salarial.",
              "en": "Replacing all veteran foremen with inexperienced recent graduates to cut base payroll costs.",
              "es": "Reemplazar a todos los supervisores veteranos por personal sin experiencia en planta para reducir costos salariales.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Paradas de alta criticidade exigem liderança experiente em condições de risco e interferências mútuas.",
              "en": "Incorrect. High-hazard turnarounds demand seasoned leadership with real industrial crisis exposure.",
              "es": "Incorrecto. Paradas complejas requieren experiencia comprobada en frentes de trabajo.",
            },
          },
        ],
      },
      {
        id: "q-gp-2",
        order: 2,
        question: {
          "pt-BR": "Cenário Operacional: Durante a seleção de novos operadores de hidrojateamento de ultra-alta pressão (UAP) para uma operação crítica, o gestor de RH e o engenheiro de campo utilizam a metodologia STAR para conduzir a entrevista por competências comportamentais. Qual formulação de pergunta reflete com fidelidade a técnica STAR?",
          "en": "Operational Scenario: While selecting UHP hydroblasting operators for critical operations, the HR lead and site engineer deploy the STAR methodology for behavioral competency interviews. Which question phrasing faithfully represents the STAR technique?",
          "es": "Escenario Operativo: Durante la selección de operadores de hidrojet de ultra alta presión (UAP), RRHH y el ingeniero aplican el método STAR en entrevistas por competencias. ¿Qué pregunta refleja fielmente la técnica STAR?",
        },
        options: [
          {
            id: "opt-gp-2-a",
            text: {
              "pt-BR": "'Você se considera uma pessoa pontual, trabalhadora e que sempre usa os óculos de proteção quando alguém está olhando?'",
              "en": "'Do you consider yourself a punctual, hardworking person who always wears safety glasses whenever watched?'",
              "es": "'¿Se considera una persona puntual y que siempre usa gafas de seguridad cuando lo observan?'",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Trata-se de pergunta indutiva e fechada que não gera evidências comportamentais confiáveis.",
              "en": "Incorrect. Leading, closed question that provides zero objective behavioral evidence.",
              "es": "Incorrecto. Pregunta capciosa y cerrada que no aporta evidencia de conducta real.",
            },
          },
          {
            id: "opt-gp-2-b",
            text: {
              "pt-BR": "'Descreva uma situação real em que você identificou uma mangueira pressurizada com desgaste ou defeito durante uma intervenção com prazo apertado: qual era o seu papel (Tarefa), que atitude você tomou (Ação) e qual foi o desfecho operacional perante a equipe e o cliente (Resultado)?'",
              "en": "'Describe an authentic past situation where you spotted a worn or damaged pressurized hose during a tight-deadline job: what was your exact role (Task), what concrete action did you take (Action), and what was the operational outcome with the crew and client (Result)?'",
              "es": "'Describa una situación real donde identificó una manguera presurizada con desgaste en un trabajo con plazo ajustado: ¿cuál era su rol (Tarea), qué decisión tomó (Acción) y cuál fue el resultado operativo con el cliente (Resultado)?'",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O método STAR (Situação, Tarefa, Ação e Resultado) investiga comportamentos pretéritos concretos, que são os melhores preditores de desempenho e compromisso com a segurança em campo.",
              "en": "Correct! The STAR framework (Situation, Task, Action, Result) probes past verifiable behavior, the strongest predictor of frontline safety discipline.",
              "es": "¡Correcto! El método STAR explora comportamientos pasados verificables para predecir el actuar preventivo en obra.",
            },
          },
          {
            id: "opt-gp-2-c",
            text: {
              "pt-BR": "'Você teria coragem de assinar um termo se responsabilizando sozinho caso ocorra o rompimento de um bico de hidrojato?'",
              "en": "'Would you sign a waiver taking sole personal blame if a hydroblast nozzle bursts?'",
              "es": "'¿Aceptaría firmar un documento haciéndose el único responsable si falla una boquilla de hidrojet?'",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A segurança é sistêmica e perguntas punitivas ou juridicamente nulas não avaliam competência técnica.",
              "en": "Incorrect. Safety is systemic and coercive questions have no diagnostic validity.",
              "es": "Incorrecto. Preguntas coactivas no aportan valor diagnóstico ni legal.",
            },
          },
          {
            id: "opt-gp-2-d",
            text: {
              "pt-BR": "'Qual é a fórmula matemática exata para o cálculo de perda de carga distribuída em tubulações industriais pelo método de Darcy-Weisbach?'",
              "en": "'What is the exact Darcy-Weisbach friction loss formula for turbulent pipe flow?'",
              "es": "'¿Cuál es la fórmula de Darcy-Weisbach para pérdida de carga en tuberías?'",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Isso é um teste de memorização de engenharia hidráulica teórica, não uma investigação comportamental STAR para operadores operacionais.",
              "en": "Incorrect. Memorizing hydraulic engineering formulas is not an operational behavioral assessment.",
              "es": "Incorrecto. Evalúa memorización teórica de ingeniería, no competencias conductuales STAR.",
            },
          },
        ],
      },
      {
        id: "q-gp-3",
        order: 3,
        question: {
          "pt-BR": "Cenário Operacional: No planejamento anual de T&D da RSS3, o setor de Gestão de Pessoas coordena o Levantamento de Necessidades de Treinamento (LNT). Ao cruzar a Matriz de Polivalência das bases operacionais com os requisitos contratuais de grandes clientes industriais, qual critério técnico deve nortear a priorização do plano de treinamentos?",
          "en": "Operational Scenario: In RSS3's annual workforce planning, HR executes a Training Needs Assessment (LNT). Crossing the multi-skill competency matrix with industrial client contracts, which criterion must govern training prioritization?",
          "es": "Escenario Operativo: En el plan anual de capacitación de RSS3, RRHH realiza el Diagnóstico de Necesidades de Capacitación (LNT). Al cruzar la Matriz de Polivalencia con los contratos de clientes, ¿qué criterio debe orientar la priorización?",
        },
        options: [
          {
            id: "opt-gp-3-a",
            text: {
              "pt-BR": "Agendar apenas cursos com certificados de baixo custo ou gratuitos na internet, independente de atenderem aos requisitos legais das Normas Regulamentadoras (NRs).",
              "en": "Scheduling only low-cost or free internet webinars regardless of statutory compliance with regulatory safety standards.",
              "es": "Programar solo cursos gratuitos en internet sin considerar los requisitos legales de las Normas de Seguridad.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O treinamento industrial requer aderência estrita às NRs e validade jurídica dos instrutores e cargas horárias.",
              "en": "Incorrect. Heavy industry training demands strict legal compliance with statutory syllabi and qualified instructors.",
              "es": "Incorrecto. La capacitación técnica debe cumplir estrictamente las normas legales y horas exigidas.",
            },
          },
          {
            id: "opt-gp-3-b",
            text: {
              "pt-BR": "Treinar prioritariamente apenas a equipe administrativa da sede para melhorar o clima de escritório, suspendendo os treinamentos de campo.",
              "en": "Prioritizing head office administrative staff exclusively to boost office morale while freezing field training.",
              "es": "Capacitar solo al personal administrativo de oficina y suspender la capacitación del personal de campo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A operação industrial de campo concentra os riscos críticos à integridade física e à continuidade dos contratos.",
              "en": "Incorrect. Operational field teams concentrate critical life-safety risks and contract performance obligations.",
              "es": "Incorrecto. Las operaciones de campo concentran los riesgos críticos de seguridad y productividad.",
            },
          },
          {
            id: "opt-gp-3-c",
            text: {
              "pt-BR": "Mapear lacunas que combinam validade mandatória de NRs (NR-33, NR-35, NR-10, NR-11), riscos críticos das frentes de serviço e demandas de polivalência para cobrir absenteísmo e variações de escala em paradas.",
              "en": "Mapping gaps that combine statutory certifications (NR-33, NR-35, NR-10, NR-11), high-risk task requirements, and multi-skilling demands to cover absenteeism and shift changes during turnarounds.",
              "es": "Mapear brechas que combinan vencimiento de normas obligatorias (NR-33, NR-35, NR-10, NR-11), riesgos críticos y polivalencia para cubrir ausencias y turnos en paradas.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O LNT estratégico assegura 100% de conformidade legal mandatória e constrói redundância técnica e operacional para absorver imprevistos nas frentes de trabalho.",
              "en": "Correct! Strategic LNT guarantees full statutory compliance while building team resilience to manage unexpected site demands.",
              "es": "¡Correcto! El LNT estratégico asegura el cumplimiento legal y genera flexibilidad operativa en frentes de trabajo.",
            },
          },
          {
            id: "opt-gp-3-d",
            text: {
              "pt-BR": "Aguardar a fiscalização do Ministério do Trabalho emitir uma notificação ou multa antes de iniciar qualquer ação de capacitação de campo.",
              "en": "Waiting until labor ministry inspectors issue penalties or stop-work orders before scheduling field training.",
              "es": "Esperar a que una inspección del Ministerio de Trabajo multe a la empresa antes de iniciar capacitaciones.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A gestão de pessoas em segurança deve ser preventiva e pró-ativa, nunca reativa a sanções ou sinistros.",
              "en": "Incorrect. Safety training management must be proactive and preventive, never reactive to fines or accidents.",
              "es": "Incorrecto. La gestión preventiva debe anticiparse a las auditorías e inspecciones.",
            },
          },
        ],
      },
      {
        id: "q-gp-4",
        order: 4,
        question: {
          "pt-BR": "Cenário Operacional: Em um contrato de longo prazo de manutenção e montagem de andaimes, a taxa de turnover (rotatividade) no primeiro trimestre atingiu 14% ao mês, acompanhada de um índice de absenteísmo de 9%. Ao analisar essas métricas para propor um plano de ação à diretoria, qual interpretação técnica e desdobramento são corretos?",
          "en": "Operational Scenario: In a multi-year scaffolding contract, first-quarter turnover spiked to 14% per month alongside an absenteeism rate of 9%. Analyzing these KPIs to propose action to the board, what is the technically sound interpretation and mitigation?",
          "es": "Escenario Operativo: En un contrato de montaje de andamios, la rotación mensual del primer trimestre alcanzó el 14% con un ausentismo del 9%. Al analizar estos indicadores para presentar un plan a la dirección, ¿cuál es la interpretación técnica correcta?",
        },
        options: [
          {
            id: "opt-gp-4-a",
            text: {
              "pt-BR": "Trata-se de índice normal para a construção civil pesada, não sendo necessária qualquer investigação ou intervenção da liderança.",
              "en": "This is normal benchmark churn for heavy industry, requiring no investigation or management intervention.",
              "es": "Son tasas normales para la industria pesada y no requieren ninguna intervención de la supervisión.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. 14% ao mês de turnover e 9% de absenteísmo indicam séria instabilidade, aumento expressivo de custos de admissão/demissão e risco elevado de segurança.",
              "en": "Incorrect. A 14% monthly turnover and 9% absenteeism signal extreme instability, runaway overhead, and severe safety exposure.",
              "es": "Incorrecto. Niveles de rotación y ausentismo tan elevados encarecen la operación y comprometen la seguridad.",
            },
          },
          {
            id: "opt-gp-4-b",
            text: {
              "pt-BR": "Descontar compulsoriamente os salários de toda a equipe restante e proibir atestados médicos para estancar o absenteísmo imediatamente.",
              "en": "Docking wages across all remaining crew members and barring sick leaves to immediately halt absenteeism.",
              "es": "Descontar salario a toda la cuadrilla y rechazar certificados médicos para frenar el ausentismo de inmediato.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal. Viola a legislação trabalhista e agrava ainda mais o clima e a desmotivação.",
              "en": "Incorrect and illegal. Violates labor laws and escalates workplace grievances.",
              "es": "Incorrecto e ilegal. Viola la legislación y deteriora críticamente el clima laboral.",
            },
          },
          {
            id: "opt-gp-4-c",
            text: {
              "pt-BR": "Ignorar o absenteísmo e simplesmente dobrar a contratação de diaristas sem registro formal para compensar os faltantes na obra.",
              "en": "Ignoring absenteeism and hiring informal off-the-books day laborers to replace absent crew on site.",
              "es": "Ignorar el ausentismo y contratar peones informales sin registro para cubrir los puestos vacantes.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal. Colocar pessoal sem registro formal e sem integração em planta industrial viola normas contratuais e regulatórias.",
              "en": "Incorrect and illegal. Deploying unregistered, unvetted personnel violates client agreements and statutory mandates.",
              "es": "Incorrecto e ilegal. Personal no registrado en planta genera pasivos legales y riesgos graves.",
            },
          },
          {
            id: "opt-gp-4-d",
            text: {
              "pt-BR": "Investigar as causas-raiz através de entrevistas de desligamento, mapeamento ergonômico e climático, revisão de condições de transporte e alimentação, ajustando a política de incentivos e o diálogo diário de liderança.",
              "en": "Investigate root causes via exit interviews, ergonomic and climate surveys, auditing food and transport logistics, while recalibrating incentive schemes and daily leadership touchpoints.",
              "es": "Investigar causas raíz mediante entrevistas de salida, evaluación ergonómica y de clima, auditoría de transporte y alimentación, ajustando incentivos y liderazgo de campo.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Índices elevados decorrem frequentemente de sobrecarga física, transporte inadequado, falhas de liderança imediata ou disparidade salarial local, exigindo ação corretiva sistêmica.",
              "en": "Correct! High turnover/absenteeism stems from physical fatigue, poor logistics, weak supervisory rapport, or pay friction, requiring systemic remedies.",
              "es": "¡Correcto! Rotación y ausentismo elevados exigen investigar factores ergonómicos, logísticos y de liderazgo para estabilizar el equipo.",
            },
          },
        ],
      },
      {
        id: "q-gp-5",
        order: 5,
        question: {
          "pt-BR": "Cenário Operacional: Um encarregado de montagem de andaimes com alta competência técnica está apresentando dificuldades de relacionamento com sua equipe: ele delega tarefas de forma ríspida, não escuta apontamentos de riscos feitos pelos ajudantes e tem centralizado todas as decisões de liberação. Sob o modelo de Liderança Situacional (Hersey & Blanchard), como a gerência da RSS3 deve intervir?",
          "en": "Operational Scenario: A technically brilliant scaffolding foreman is struggling with team relations: he barks orders, disregards helper risk concerns, and bottlenecks all handover sign-offs. Under Situational Leadership (Hersey & Blanchard), how should RSS3 management intervene?",
          "es": "Escenario Operativo: Un supervisor de andamios con gran destreza técnica muestra fallas de liderazgo: da órdenes de forma brusca, desoye advertencias de riesgo de los ayudantes y centraliza todo. Según el Liderazgo Situacional, ¿cómo debe actuar la gerencia?",
        },
        options: [
          {
            id: "opt-gp-5-a",
            text: {
              "pt-BR": "Adotar um estilo de 'Apoio/Coaching' focado no desenvolvimento de inteligência emocional, escuta ativa e liderança pelo exemplo, mantendo acompanhamento próximo até que ele demonstre maturidade relacional com a equipe.",
              "en": "Deploying a 'Supporting/Coaching' style focused on emotional intelligence, active listening, and leading by example, maintaining structured mentoring until interpersonal maturity is attained.",
              "es": "Aplicar un estilo de 'Apoyo/Coaching' enfocado en inteligencia emocional, escucha activa y liderazgo ejemplar, con mentoría cercana hasta consolidar madurez relacional.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O profissional possui alta prontidão técnica (saber fazer), mas baixa prontidão comportamental/relacional (saber liderar). O apoio e coaching fortalecem a liderança participativa e a escuta em segurança.",
              "en": "Correct! The foreman has high technical readiness but low interpersonal readiness. Coaching bridges the gap to build psychologically safe communication on site.",
              "es": "¡Correcto! El líder tiene alto dominio técnico pero baja madurez relacional. El coaching desarrolla la escucha activa y la seguridad participativa.",
            },
          },
          {
            id: "opt-gp-5-b",
            text: {
              "pt-BR": "Demitir imediatamente o encarregado por justa causa sem qualquer tentativa de alinhamento ou desenvolvimento profissional.",
              "en": "Immediately terminating the foreman with cause without attempting any alignment or coaching.",
              "es": "Despedir de inmediato al supervisor sin darle oportunidad de retroalimentación o desarrollo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A demissão sumária sem processo de feedback ou coaching desperdiça a competência técnica e desestabiliza o contrato.",
              "en": "Incorrect. Immediate firing without feedback squanders technical talent and disrupts frontline operations.",
              "es": "Incorrecto. Despedir sin retroalimentación previa destruye valor técnico y desestabiliza el servicio.",
            },
          },
          {
            id: "opt-gp-5-c",
            text: {
              "pt-BR": "Incentivar o encarregado a ser ainda mais autoritário e punir qualquer colaborador que faça apontamentos sobre segurança do trabalho.",
              "en": "Encouraging the foreman to be even more aggressive and penalizing anyone who raises safety concerns.",
              "es": "Alentar al supervisor a ser más autoritario y sancionar a quien advierta sobre condiciones inseguras.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e inaceitável. Reprimir relatos de segurança viola as diretrizes permanentes da RSS3 e causa acidentes graves.",
              "en": "Incorrect and unacceptable. Suppressing safety concerns breaches RSS3 core policies and directly invites catastrophe.",
              "es": "Incorrecto e inaceptable. Silenciar reportes de seguridad provoca accidentes graves.",
            },
          },
          {
            id: "opt-gp-5-d",
            text: {
              "pt-BR": "Afastar-se totalmente e deixar que a equipe resolva suas desavenças por conta própria em discussões no canteiro.",
              "en": "Completely stepping away to let the team sort out tensions on their own during site arguments.",
              "es": "Desentenderse por completo y dejar que el conflicto se resuelva en discusiones entre los operarios.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A omissão gerencial agrava os conflitos, compromete o foco operacional e destrói o clima de segurança.",
              "en": "Incorrect. Managerial neglect escalates friction, degrades focus, and shatters safety culture.",
              "es": "Incorrecto. La omisión del líder escala los conflictos y perjudica la seguridad.",
            },
          },
        ],
      },
      {
        id: "q-gp-6",
        order: 6,
        question: {
          "pt-BR": "Cenário Operacional: Na estruturação de um plano de cargos e salários para operações industriais, a gerência de RH busca harmonizar a 'Equidade Interna' com a 'Competitividade Externa'. Qual método técnico garante essa harmonia de forma sustentável para a organização?",
          "en": "Operational Scenario: In building a compensation and job architecture framework for plant contracts, HR must reconcile 'Internal Equity' with 'External Competitiveness'. Which technical approach sustainably achieves this balance?",
          "es": "Escenario Operativo: Al diseñar un plan de cargos y salarios para operaciones industriales, RRHH busca articular la 'Equidad Interna' con la 'Competitividad Externa'. ¿Qué método técnico asegura este equilibrio?",
        },
        options: [
          {
            id: "opt-gp-6-a",
            text: {
              "pt-BR": "Fixar salários idênticos para todos os cargos da empresa, desde ajudantes gerais até engenheiros coordenadores.",
              "en": "Paying an identical flat rate to all company roles from entry-level helpers to lead engineers.",
              "es": "Fijar un sueldo idéntico para todos los cargos, desde ayudantes hasta ingenieros jefes.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Desconsidera responsabilidades técnicas, riscos, qualificações e complexidade funcional.",
              "en": "Incorrect. Ignores differences in legal accountability, risk exposure, and qualification levels.",
              "es": "Incorrecto. Desconoce las diferencias de responsabilidad, riesgo y nivel de cualificación.",
            },
          },
          {
            id: "opt-gp-6-b",
            text: {
              "pt-BR": "Pagar sempre o menor valor do piso sindical e proibir o fornecimento de benefícios de alimentação ou saúde.",
              "en": "Paying strictly minimum union baseline while eliminating meal and healthcare benefits.",
              "es": "Pagar siempre el salario mínimo sindical eliminando beneficios de salud y alimentación.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Essa postura eleva a perda de pessoal qualificado e inviabiliza a atração em praças concorridas.",
              "en": "Incorrect. Destroys retention of skilled craftspeople and cripples recruiting in competitive hubs.",
              "es": "Incorrecto. Provoca fuga de talentos e impide contratar personal calificado en plazas competitivas.",
            },
          },
          {
            id: "opt-gp-6-c",
            text: {
              "pt-BR": "Realizar avaliação e classificação de cargos (por pontos ou fatores) para garantir coerência hierárquica interna, aliada a pesquisas salariais periódicas no mercado industrial regional para calibrar faixas salariais competitivas.",
              "en": "Executing point-factor job evaluation to ensure coherent internal tiering, paired with periodic regional industrial salary benchmarks to calibrate competitive wage bands.",
              "es": "Efectuar valuación y clasificación de puestos (por puntos o factores) para asegurar consistencia interna, junto a encuestas salariales periódicas en el mercado regional para calibrar bandas competitivas.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A avaliação de cargos por fatores assegura justiça interna e transparência, enquanto as pesquisas de mercado mantêm a atratividade contra a concorrência local.",
              "en": "Correct! Factor-based job evaluation assures fair internal pay geometry, while market surveys safeguard external talent retention.",
              "es": "¡Correcto! La valuación por factores da coherencia interna y las encuestas de mercado garantizan competitividad para retener al personal.",
            },
          },
          {
            id: "opt-gp-6-d",
            text: {
              "pt-BR": "Definir os salários com base exclusivamente no parentesco ou preferência pessoal do encarregado de campo.",
              "en": "Setting wage rates exclusively based on kinship or personal favors from the site foreman.",
              "es": "Definir salarios basándose en favoritismo o lazos familiares con la supervisión de campo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e antiético. Viola as diretrizes de governança corporativa e gera passivos trabalhistas de equiparação salarial.",
              "en": "Incorrect and unethical. Breaches corporate governance and triggers statutory equal-pay liabilities.",
              "es": "Incorrecto e inmoral. Viola la gobernanza corporativa y genera contingencias laborales por discriminación salarial.",
            },
          },
        ],
      },
      {
        id: "q-gp-7",
        order: 7,
        question: {
          "pt-BR": "Cenário Operacional: Na aplicação do Modelo dos 4 Níveis de Avaliação de Treinamento de Donald Kirkpatrick adaptado às operações da RSS3, uma equipe de pintura e hidrojato concluiu o treinamento teórico e prático. Qual indicador e instrumento representam a avaliação de Nível 3 (Comportamento na Função)?",
          "en": "Operational Scenario: Applying Donald Kirkpatrick's 4-Level Training Evaluation Model to RSS3 field operations, a painting and hydroblasting crew completed training. Which KPI and tool represent Level 3 (Behavior on the Job) evaluation?",
          "es": "Escenario Operativo: Aplicando el Modelo de Kirkpatrick a operaciones de RSS3, una cuadrilla de pintura e hidrojet finalizó su capacitación. ¿Qué indicador e instrumento representan la evaluación de Nivel 3 (Conducta en el Puesto)?",
        },
        options: [
          {
            id: "opt-gp-7-a",
            text: {
              "pt-BR": "O formulário de pesquisa de satisfação preenchido pelos alunos ao final da aula avaliando o café servido e a temperatura da sala.",
              "en": "The end-of-class reaction survey rating the classroom temperature and catering.",
              "es": "La encuesta de satisfacción al final del curso evaluando el salón y el refrigerio.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Pesquisa de satisfação imediata mede Reação (Nível 1 de Kirkpatrick).",
              "en": "Incorrect. Immediate reaction sheets measure Level 1 (Reaction).",
              "es": "Incorrecto. Mide únicamente la Reacción inmediata (Nivel 1 de Kirkpatrick).",
            },
          },
          {
            id: "opt-gp-7-b",
            text: {
              "pt-BR": "A nota obtida pelo colaborador na prova de múltipla escolha realizada no mesmo dia do curso.",
              "en": "The written score achieved on the multiple-choice exam taken right after class.",
              "es": "La calificación obtenida en el examen teórico inmediatamente al terminar la clase.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Testes de conhecimento medem Aprendizado (Nível 2 de Kirkpatrick).",
              "en": "Incorrect. Written post-tests evaluate Level 2 (Learning).",
              "es": "Incorrecto. Las pruebas teóricas evalúan Aprendizaje (Nivel 2 de Kirkpatrick).",
            },
          },
          {
            id: "opt-gp-7-c",
            text: {
              "pt-BR": "Auditorias comportamentais de campo realizadas 30 a 60 dias após o curso, verificando se os colaboradores aplicam na rotina de trabalho os checklists pré-operacionais e as técnicas de segurança ensinadas.",
              "en": "Field behavioral audits conducted 30 to 60 days post-training, verifying whether craftspeople consistently execute pre-use checklists and safety protocols during real plant turnarounds.",
              "es": "Auditorías de conducta en campo realizadas 30 a 60 días después de la clase, verificando si aplican los checklists preoperacionales y las técnicas de seguridad en su rutina diaria.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O Nível 3 (Comportamento) afere a transferência real do aprendizado para o dia a dia da operação, verificando se a conduta de risco foi efetivamente eliminada.",
              "en": "Correct! Level 3 (Behavior) evaluates the transfer of learning into daily field operations, ensuring safe work routines are practiced on the job.",
              "es": "¡Correcto! El Nivel 3 mide la transferencia real del conocimiento a la práctica diaria en los frentes de trabajo.",
            },
          },
          {
            id: "opt-gp-7-d",
            text: {
              "pt-BR": "O balanço patrimonial consolidado anual auditado pelos contadores da empresa.",
              "en": "The consolidated annual financial balance sheet audited by corporate CPAs.",
              "es": "El balance financiero anual consolidado auditado por contadores externos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O balanço patrimonial não isola nem diagnostica comportamento de segurança no trabalho.",
              "en": "Incorrect. Corporate balance sheets do not track jobsite behavioral safety habits.",
              "es": "Incorrecto. Los balances financieros no diagnostican hábitos de conducta en obra.",
            },
          },
        ],
      },
      {
        id: "q-gp-8",
        order: 8,
        question: {
          "pt-BR": "Cenário Operacional: Um colaborador de hidrojato experiente cometeu um desvio de segurança ao iniciar o teste de pressurização sem isolar o raio de segurança de 10 metros com fita zebrada. O encarregado precisa conduzir uma reunião de feedback corretivo. Qual procedimento assegura eficácia pedagógica e respeito às diretrizes de gestão de pessoas da RSS3?",
          "en": "Operational Scenario: An experienced hydroblast operator committed a safety deviation by initiating pressure testing without cordoning off the 10-meter exclusion zone. The foreman must hold a corrective feedback meeting. Which protocol ensures behavioral improvement while upholding RSS3 leadership standards?",
          "es": "Escenario Operativo: Un operador de hidrojet presurizó la línea sin delimitar el radio de seguridad de 10 metros con cinta de peligro. El supervisor debe brindar retroalimentación correctiva. ¿Qué procedimiento asegura eficacia y respeto a las pautas de RSS3?",
        },
        options: [
          {
            id: "opt-gp-8-a",
            text: {
              "pt-BR": "Chamar o colaborador para uma conversa reservada, apresentar os fatos concretos observados sem julgamentos pessoais, reforçar o risco de fatalidade com o rompimento da linha, ouvir as razões do operador e construir em conjunto um compromisso formal de cumprimento do procedimento.",
              "en": "Pulling the operator into a private room, presenting observable facts without personal attacks, reiterating fatal line-burst risks, listening to his rationale, and co-creating a commitment to procedural compliance.",
              "es": "Llamar al colaborador a una reunión privada, presentar los hechos objetivos sin ataques personales, enfatizar el riesgo mortal por rotura de línea, escuchar sus motivos y acordar un plan de acción formal de cumplimiento.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O feedback corretivo eficaz é feito em particular, fundamentado em evidências, com escuta ativa e foco na preservação da vida e no compromisso com o procedimento operacional padrão (POP).",
              "en": "Correct! Effective constructive feedback is private, fact-based, actively listens, and builds mutual commitment to life-safety SOPs.",
              "es": "¡Correcto! El feedback constructivo debe ser privado, basado en hechos, con escucha activa y orientado a la protección de la vida.",
            },
          },
          {
            id: "opt-gp-8-b",
            text: {
              "pt-BR": "Gritar com o colaborador no rádio geral da obra na frente de todas as equipes e do fiscal do cliente para que todos vejam o que acontece com quem erra.",
              "en": "Berating the operator over the public site radio channel in front of client reps to set a public example.",
              "es": "Gritarle al operario por la radio general de la obra frente a todos para que sirva de escarmiento público.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e abusivo. O assédio moral e a humilhação pública geram revolta, medo, omissão de desvios e passivos trabalhistas graves.",
              "en": "Incorrect and abusive. Public humiliation creates fear, drives incident concealment, and constitutes illegal workplace harassment.",
              "es": "Incorrecto e inaceptable. La humillación pública genera descontento, ocultamiento de fallas y demandas por acoso.",
            },
          },
          {
            id: "opt-gp-8-c",
            text: {
              "pt-BR": "Fingir que não viu o desvio para não estragar o clima de amizade com o operador de hidrojato.",
              "en": "Pretending not to see the hazard to keep a friendly relationship with the operator.",
              "es": "Hacerse el desentendido para no incomodar ni perder la simpatía del operador.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e perigoso. A complacência da liderança com desvios operacionais em alta pressão é a causa primária de acidentes fatais.",
              "en": "Incorrect and dangerous. Supervisory complacency regarding high-pressure hazards is the primary precursor to fatal events.",
              "es": "Incorrecto y negligente. Tolerar desvíos en operaciones de alta presión termina en accidentes fatales.",
            },
          },
          {
            id: "opt-gp-8-d",
            text: {
              "pt-BR": "Suspender o fornecimento de água potável no canteiro durante todo o turno como castigo disciplinar para o grupo.",
              "en": "Cutting off drinking water supplies on site for the entire shift as a collective punishment.",
              "es": "Cortar el suministro de agua potable en obra durante el turno como castigo colectivo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto, desumano e ilegal. Punições coletivas e privação de condições básicas de saúde são gravíssimas infrações.",
              "en": "Incorrect and inhumane. Collective deprivation of water violates core human rights and occupational health laws.",
              "es": "Incorrecto e ilegal. La privación de agua potable es una violación grave a la dignidad y normativas laborales.",
            },
          },
        ],
      },
      {
        id: "q-gp-9",
        order: 9,
        question: {
          "pt-BR": "Cenário Operacional: Em avaliações de desempenho 360 graus implantadas para a coordenação de obras e frentes operacionais, múltiplos avaliadores participam do processo (pares, liderados, gestor imediato e autoavaliação). Qual é a principal precaução metodológica que a Gestão de Pessoas da RSS3 deve garantir para preservar a legitimidade e o efeito construtivo do processo?",
          "en": "Operational Scenario: In 360-degree performance reviews deployed for site coordinators, multiple raters participate (peers, direct reports, supervisors, self-appraisal). What primary methodological safeguard must RSS3 HR guarantee to preserve legitimacy and constructive impact?",
          "es": "Escenario Operativo: En evaluaciones 360 implementadas para coordinadores de obra, participan múltiples evaluadores (pares, subordinados, jefes y autoevaluación). ¿Qué precaución metodológica fundamental debe garantizar RRHH de RSS3?",
        },
        options: [
          {
            id: "opt-gp-9-a",
            text: {
              "pt-BR": "Publicar todas as notas e comentários individuais em um mural público com o nome completo de quem avaliou quem.",
              "en": "Publishing all scores and raw comments on a public bulletin board showing names of who rated whom.",
              "es": "Publicar todos los puntajes y comentarios en un panel público indicando los nombres de evaluadores y evaluados.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A exposição pública quebra a confidencialidade e estimula retaliações no ambiente de trabalho.",
              "en": "Incorrect. Exposing individual rater identities breaks confidentiality and sparks workplace retaliation.",
              "es": "Incorrecto. Romper la confidencialidad desata represalias y destruye la confianza del equipo.",
            },
          },
          {
            id: "opt-gp-9-b",
            text: {
              "pt-BR": "Descartar sem análise todas as avaliações feitas pelos liderados de campo, considerando apenas o que a alta diretoria pensa.",
              "en": "Discarding all feedback from field direct reports, taking into account only executive opinions.",
              "es": "Descartar los comentarios del personal de campo y considerar únicamente la opinión de la alta gerencia.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Descaracteriza o modelo 360 graus e anula a percepção de quem está diretamente exposto à liderança de campo.",
              "en": "Incorrect. Voids the 360-degree architecture by ignoring frontline subordinate feedback.",
              "es": "Incorrecto. Desvirtúa la evaluación 360 al ignorar a los colaboradores que viven el día a día.",
            },
          },
          {
            id: "opt-gp-9-c",
            text: {
              "pt-BR": "Garantir o anonimato das respostas dos liderados e pares, utilizar critérios objetivos vinculados às competências corporativas e preparar os líderes para que o feedback seja orientado a planos de desenvolvimento individual (PDI), e não a punições.",
              "en": "Ensuring anonymity for peers and direct reports, anchoring criteria to corporate competency frameworks, and training leaders to channel feedback into Individual Development Plans (IDP) rather than disciplinary sanctions.",
              "es": "Garantizar el anonimato de las respuestas de subordinados y pares, utilizar criterios objetivos vinculados a competencias y capacitar a líderes para orientar el feedback a Planes de Desarrollo Individual (PDI) y no a castigos.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O sigilo dos avaliadores e o foco no desenvolvimento através do PDI eliminam o receio de retaliações e transformam a avaliação em uma alavanca real de evolução da liderança.",
              "en": "Correct! Respondent anonymity and development-oriented IDP planning eliminate fear of reprisal, turning 360 appraisals into authentic leadership growth engines.",
              "es": "¡Correcto! El anonimato y el enfoque en el desarrollo mediante PDI evitan temores y potencian el crecimiento del liderazgo.",
            },
          },
          {
            id: "opt-gp-9-d",
            text: {
              "pt-BR": "Utilizar a avaliação exclusivamente para demitir automaticamente os 20% com menor pontuação a cada mês, independentemente das condições operacionais.",
              "en": "Using the review exclusively to fire the bottom 20% of workers every single month regardless of context.",
              "es": "Usar la evaluación para despedir automáticamente al 20% con menor puntaje cada mes sin analizar el contexto.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A prática de 'rank and yank' forçado gera canibalismo interno, medo e colapso da cooperação em segurança industrial.",
              "en": "Incorrect. Forced ranking creates toxic infighting, fear, and shatters field safety cooperation.",
              "es": "Incorrecto. Las curvas forzadas de despido destruyen el compañerismo y la cultura de seguridad.",
            },
          },
        ],
      },
      {
        id: "q-gp-10",
        order: 10,
        question: {
          "pt-BR": "Diretrizes Permanentes RSS3 e Conformidade Regulatória: Ao concluir com aproveitamento este curso de Gestão de Pessoas na modalidade EAD na plataforma RSS3 Treinamentos, qual é o alcance legal do certificado emitido e sua relação com a atuação em campo?",
          "en": "RSS3 Permanent Guidelines & Regulatory Compliance: Upon passing this Distance Learning (EAD) People Management course on the RSS3 Treinamentos platform, what is the legal validity of the certificate regarding site operations?",
          "es": "Directrices Permanentes de RSS3 y Cumplimiento Normativo: Al aprobar este curso de Gestión de Personas en modalidad EAD en la plataforma RSS3 Treinamentos, ¿cuál es el alcance legal del certificado y su aplicación en obra?",
        },
        options: [
          {
            id: "opt-gp-10-a",
            text: {
              "pt-BR": "O certificado de conclusão em plataforma EAD comprova exclusivamente a qualificação teórica do profissional no conteúdo curricular, não substituindo treinamentos práticos presenciais obrigatórios, atestados de saúde ocupacional (ASO) vigentes nem a autorização formal da empresa para funções regulamentadas.",
              "en": "The EAD completion certificate certifies solely theoretical knowledge of the syllabus, never replacing mandatory in-person practical training, current occupational medical clearance (ASO), or formal employer operational authorization for statutory duties.",
              "es": "El certificado EAD acredita exclusivamente la formación teórica cursada, no reemplazando la capacitación práctica presencial obligatoria, el apto médico (ASO) vigente ni la autorización formal de la empresa para funciones normadas.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Conforme a Seção 3 das Diretrizes Permanentes (AGENTS.md), nenhum curso EAD confere habilitação prática para atividades regulamentadas sem o treinamento prático presencial validado por instrutor habilitado e ASO vigente.",
              "en": "Correct! As per Section 3 of AGENTS.md, online courses certify theoretical mastery only and cannot substitute required hands-on training or medical fit-for-work clearance.",
              "es": "¡Correcto! Según la Sección 3 de AGENTS.md, la teoría EAD no reemplaza la habilitación práctica presencial ni la aptitud médica ocupacional.",
            },
          },
          {
            id: "opt-gp-10-b",
            text: {
              "pt-BR": "O certificado digital dispensa permanentemente a necessidade de realizar exame médico admissional ou periódico (ASO).",
              "en": "The digital certificate permanently waives the need for occupational medical exams (ASO).",
              "es": "El certificado digital exime definitivamente de realizar exámenes médicos ocupacionales.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. ASO é exigência inegociável da NR-7 e de ordem médica legal.",
              "en": "Incorrect. Medical clearances under NR-7 are legally non-negotiable.",
              "es": "Incorrecto. El examen médico es obligatorio por ley según la NR-7.",
            },
          },
          {
            id: "opt-gp-10-c",
            text: {
              "pt-BR": "O certificado autoriza o colaborador a emitir e assinar laudos periciais de insalubridade e periculosidade em nome da Justiça do Trabalho.",
              "en": "The certificate authorizes the employee to issue official court forensic expert reports on statutory hazards.",
              "es": "El certificado autoriza al operario a firmar peritajes judiciales de insalubridad y peligrosidad.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Laudos periciais exigem habilitação profissional específica (Engenheiro de Segurança ou Médico do Trabalho com registro no conselho).",
              "en": "Incorrect. Forensic hazard reports require certified occupational physicians or safety engineers with statutory credentials.",
              "es": "Incorrecto. Los peritajes judiciales requieren títulos profesionales específicos de ingeniería o medicina del trabajo.",
            },
          },
          {
            id: "opt-gp-10-d",
            text: {
              "pt-BR": "O curso autoriza automaticamente a operar guindastes e empilhadeiras pesadas em qualquer planta industrial sem treinamento prático.",
              "en": "The course automatically authorizes operating heavy cranes and forklifts on any site without practical seat time.",
              "es": "El curso autoriza automáticamente a operar grúas pesadas y autoelevadores sin práctica de manejo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e perigoso. A operação de equipamentos pesados requer capacitação prática obrigatória conforme NR-11.",
              "en": "Incorrect. Operating heavy mobile equipment strictly requires dedicated hands-on machinery training per NR-11.",
              "es": "Incorrecto. Manejar maquinaria pesada exige capacitación práctica obligatoria según la NR-11.",
            },
          },
        ],
      },
    ],
  },
};
