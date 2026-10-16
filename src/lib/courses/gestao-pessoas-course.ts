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
    estimatedMinutes: 25,
    questionsCount: 5,
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
      "pt-BR": "Validação de domínio em recrutamento e seleção técnica, análise de mercado, avaliação e controle de desempenho, levantamento de necessidades de treinamento (LNT) e políticas salariais.",
      "en": "Validates proficiency in recruitment, selection, labor market dynamics, performance appraisal, training needs assessment, and compensation models.",
      "es": "Valida competencias en reclutamiento, selección técnica, evaluación de desempeño, diagnóstico de capacitación y compensaciones.",
    },
    questions: [
      {
        id: "q-gp-1",
        order: 1,
        question: {
          "pt-BR": "1. Qual a principal vantagem estratégica do recrutamento interno na mobilização de equipes operacionais para paradas de fábrica na RSS3?",
          "en": "1. What is the primary strategic benefit of internal recruitment when mobilizing industrial turnaround crews at RSS3?",
          "es": "1. ¿Cuál es la principal ventaja estratégica del reclutamiento interno en la movilización de paradas de planta?",
        },
        options: [
          {
            id: "opt-gp-1-a",
            text: {
              "pt-BR": "Aproveita profissionais já integrados à cultura de segurança e aos procedimentos operacionais da empresa, reduzindo tempo de adaptação e custos de integração.",
              "en": "Leverages personnel already familiar with company safety protocols and jobsite standards, minimizing onboarding overhead.",
              "es": "Aprovecha personal familiarizado con los procedimientos y la cultura de seguridad de la empresa, reduciendo tiempos.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O recrutamento interno valoriza os colaboradores, acelera o preenchimento de postos críticos e mantém altos padrões de segurança já consolidados.",
              "en": "Correct! Internal mobility retains verified safety culture and speeds up critical staffing.",
              "es": "¡Correcto! La promoción interna mantiene los estándares de seguridad ya arraigados.",
            },
          },
          {
            id: "opt-gp-1-b",
            text: {
              "pt-BR": "Elimina totalmente a necessidade de verificar atestados de saúde ocupacional (ASO) ou certificações regulamentares.",
              "en": "Eliminates the requirement to verify medical clearances or regulatory credentials.",
              "es": "Elimina la necesidad de revisar exámenes médicos ocupacionales o credenciales regulatorias.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. ASO e certificações de NRs devem ser checados e mantidos rigorosamente válidos para qualquer função.",
              "en": "Incorrect. Medical clearances and safety credentials must always remain fully compliant.",
              "es": "Incorrecto. Los certificados médicos y normativos son obligatorios siempre.",
            },
          },
          {
            id: "opt-gp-1-c",
            text: {
              "pt-BR": "Permite contratar profissionais sem qualquer histórico de experiência prévia em serviços industriais.",
              "en": "Allows hiring workers with zero prior experience in industrial tasks.",
              "es": "Permite contratar trabajadores sin experiencia previa en tareas industriales.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O recrutamento interno baseia-se exatamente no histórico e nas competências demonstradas na organização.",
              "en": "Incorrect. Internal recruitment relies specifically on proven track record and demonstrated competencies.",
              "es": "Incorrecto. El reclutamiento interno se basa justamente en el historial de desempeño.",
            },
          },
        ],
      },
      {
        id: "q-gp-2",
        order: 2,
        question: {
          "pt-BR": "2. No processo de seleção por competências de um operador de hidrojato ou montador de andaime, o que caracteriza a técnica de entrevista situacional/comportamental?",
          "en": "2. In competency-based interviews for industrial craftspersons, what characterizes situational/behavioral inquiry?",
          "es": "2. En la entrevista por competencias para personal industrial, ¿qué caracteriza el enfoque conductual/situacional?",
        },
        options: [
          {
            id: "opt-gp-2-a",
            text: {
              "pt-BR": "Fazer perguntas teóricas genéricas que exigem apenas respostas do tipo 'sim' ou 'não'.",
              "en": "Asking generic theoretical questions requiring only yes-or-no answers.",
              "es": "Formular preguntas teóricas genéricas que solo admiten respuestas de sí o no.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Respostas fechadas não revelam a postura real do candidato em campo.",
              "en": "Incorrect. Binary questions do not reveal actual situational behavior.",
              "es": "Incorrecto. Preguntas cerradas no revelan el comportamiento real en campo.",
            },
          },
          {
            id: "opt-gp-2-b",
            text: {
              "pt-BR": "Solicitar que o candidato descreva situações reais vividas no passado (contexto, ação tomada e resultado obtido) envolvendo pressão, riscos e trabalho em equipe.",
              "en": "Requesting candidates to recount concrete past experiences (situation, task, action, result) handling site hazards and teamwork.",
              "es": "Solicitar que el candidato describa situaciones reales pasadas (contexto, acción y resultado) con manejo de riesgos y trabajo en equipo.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O comportamento passado em situações reais de campo é o melhor preditor do desempenho futuro e da maturidade em segurança.",
              "en": "Correct! Past behavior in authentic field environments is the best predictor of future safety performance.",
              "es": "¡Correcto! El comportamiento pasado en obra predice con mayor fidelidad el rendimiento futuro.",
            },
          },
          {
            id: "opt-gp-2-c",
            text: {
              "pt-BR": "Avaliar o candidato exclusivamente pela sua pontuação em provas manuscritas de ortografia e caligrafia.",
              "en": "Evaluating candidates solely on handwriting and spelling tests.",
              "es": "Evaluar al candidato exclusivamente por su caligrafía y ortografía.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A avaliação operacional foca em competências técnicas, segurança e histórico profissional.",
              "en": "Incorrect. Operational assessment emphasizes technical competence and safety adherence.",
              "es": "Incorrecto. La evaluación operativa se enfoca en destreza técnica y seguridad.",
            },
          },
        ],
      },
      {
        id: "q-gp-3",
        order: 3,
        question: {
          "pt-BR": "3. O que representa o Levantamento de Necessidades de Treinamento (LNT) na gestão de capacitação da RSS3?",
          "en": "3. What is the role of a Training Needs Assessment (LNT) in RSS3 workforce development?",
          "es": "3. ¿Qué representa el Diagnóstico de Necesidades de Capacitación (LNT) en RSS3?",
        },
        options: [
          {
            id: "opt-gp-3-a",
            text: {
              "pt-BR": "O diagnóstico estruturado que identifica lacunas entre as competências atuais dos colaboradores e as exigências técnicas, regulamentares e contratuais da operação.",
              "en": "A structured assessment identifying gaps between current worker competencies and regulatory, technical, and project requirements.",
              "es": "El diagnóstico estructurado que identifica brechas entre competencias actuales y los requisitos técnicos y regulatorios de la obra.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O LNT garante que os treinamentos atendam a necessidades reais de campo, evitando desperdício de recursos e garantindo conformidade legal.",
              "en": "Correct! LNT ensures training programs address verified frontline gaps, avoiding waste and ensuring compliance.",
              "es": "¡Correcto! El LNT asegura que las capacitaciones resuelvan necesidades reales del frente de trabajo.",
            },
          },
          {
            id: "opt-gp-3-b",
            text: {
              "pt-BR": "A lista de preços dos cursos oferecidos por instituições externas para arquivamento financeiro.",
              "en": "A vendor price catalog for external training programs.",
              "es": "La lista de precios de proveedores externos de cursos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O LNT é um diagnóstico de competências humanas e operacionais, não um orçamento comercial.",
              "en": "Incorrect. LNT is a competency diagnosis, not a purchasing catalog.",
              "es": "Incorrecto. El LNT es un diagnóstico de competencias operativas.",
            },
          },
          {
            id: "opt-gp-3-c",
            text: {
              "pt-BR": "Um documento assinado pelo colaborador dispensando a empresa de realizar reciclagens obrigatórias de NRs.",
              "en": "A waiver signed by employees releasing the employer from mandatory safety refreshers.",
              "es": "Un documento donde el empleado renuncia a capacitaciones obligatorias de seguridad.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal. Reciclagens de NRs são mandatórias e indeclináveis.",
              "en": "Incorrect and illegal. Regulatory safety training is legally non-negotiable.",
              "es": "Incorrecto e ilegal. La capacitación normativa no es renunciable.",
            },
          },
        ],
      },
      {
        id: "q-gp-4",
        order: 4,
        question: {
          "pt-BR": "4. Ao estruturar uma reunião de feedback de desempenho com um colaborador operacional de campo, qual conduta a liderança deve adotar?",
          "en": "4. When conducting a performance feedback meeting with an operational team member, which practice should leaders follow?",
          "es": "4. Al realizar una sesión de retroalimentación con un trabajador operativo, ¿qué conducta debe adoptar el líder?",
        },
        options: [
          {
            id: "opt-gp-4-a",
            text: {
              "pt-BR": "Realizar o feedback em público na frente de toda a equipe para expor erros cometidos e intimidar desvios.",
              "en": "Delivering critical feedback publicly in front of peers to deter deviations.",
              "es": "Hacer la crítica en público ante todo el equipo para disuadir desvíos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e danoso. Elogios podem ser públicos, mas correções e feedbacks individuais devem ocorrer em ambiente privado e respeitoso.",
              "en": "Incorrect. Recognition may be public, but constructive critique must always be private and professional.",
              "es": "Incorrecto. Las correcciones individuales deben ser siempre privadas y respetuosas.",
            },
          },
          {
            id: "opt-gp-4-b",
            text: {
              "pt-BR": "Ser pontual, basear-se em fatos e ocorrências observadas, ouvir o ponto de vista do colaborador e construir um plano de ação conjunto para melhoria.",
              "en": "Be timely, rely on objective observed facts, listen to the employee's input, and jointly develop an action plan for progress.",
              "es": "Ser puntual, basarse en hechos objetivos observados, escuchar al colaborador y definir un plan de acción conjunto.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O feedback construtivo foca em dados objetivos e parceria de desenvolvimento, fortalecendo a relação de confiança entre líder e liderado.",
              "en": "Correct! Constructive feedback relies on objective data and mutual accountability.",
              "es": "¡Correcto! El feedback constructivo se apoya en hechos y fortalece el compromiso mutuo.",
            },
          },
          {
            id: "opt-gp-4-c",
            text: {
              "pt-BR": "Focar apenas em opiniões subjetivas de terceiros sem apresentar exemplos práticos ou critérios claros de avaliação.",
              "en": "Rely solely on subjective hearsay without concrete examples or objective evaluation criteria.",
              "es": "Basarse en rumores subjetivos sin presentar ejemplos concretos de trabajo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O feedback deve ser fundamentado em evidências tangíveis de desempenho e segurança.",
              "en": "Incorrect. Feedback must be rooted in tangible operational and safety evidence.",
              "es": "Incorrecto. La retroalimentación debe fundamentarse en datos objetivos.",
            },
          },
        ],
      },
      {
        id: "q-gp-5",
        order: 5,
        question: {
          "pt-BR": "5. Em uma política salarial industrial moderna, qual o objetivo de equilibrar a 'equidade interna' com a 'competitividade externa'?",
          "en": "5. In a modern industrial compensation policy, what is the goal of balancing 'internal equity' with 'external competitiveness'?",
          "es": "5. En una política salarial industrial moderna, ¿cuál es el objetivo de equilibrar 'equidad interna' y 'competitividad externa'?",
        },
        options: [
          {
            id: "opt-gp-5-a",
            text: {
              "pt-BR": "Garantir justiça e coerência na remuneração de diferentes funções dentro da empresa, mantendo atratividade frente aos valores pagos pelo mercado para reter talentos técnicos.",
              "en": "Ensure fairness across internal job tiers while offering market-competitive packages to attract and retain specialized craft talent.",
              "es": "Garantizar equidad y coherencia interna en los puestos, manteniéndose competitivo frente al mercado para retener técnicos calificados.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A equidade interna evita sentimentos de injustiça na equipe, e a competitividade externa protege a empresa contra a perda de talentos para concorrentes.",
              "en": "Correct! Internal equity maintains team cohesion, while external competitiveness prevents turnover to competing firms.",
              "es": "¡Correcto! La equidad interna previene descontento y la competitividad externa retiene al talento frente a la competencia.",
            },
          },
          {
            id: "opt-gp-5-b",
            text: {
              "pt-BR": "Fixar todos os salários no mesmo valor exato para todas as funções, independentemente de riscos, responsabilidade técnica ou nível de qualificação.",
              "en": "Paying an identical salary across all roles regardless of technical responsibility or hazard level.",
              "es": "Pagar exactamente el mismo salario en todos los cargos sin importar nivel de riesgo o especialización.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A política salarial deve refletir a complexidade, responsabilidade e risco de cada atribuição funcional.",
              "en": "Incorrect. Compensation policies must reflect job complexity, accountability, and specific hazard requirements.",
              "es": "Incorrecto. La política salarial debe reflejar complejidad, responsabilidades y riesgos de cada puesto.",
            },
          },
          {
            id: "opt-gp-5-c",
            text: {
              "pt-BR": "Eliminar o pagamento de benefícios e focar apenas no menor valor de salário possível no mercado.",
              "en": "Eliminating all benefits to strictly target bottom-of-market base wages.",
              "es": "Eliminar beneficios para pagar el menor salario posible del mercado.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Essa conduta gera alto turnover, desmotivação e riscos graves de acidentes em frentes industriais.",
              "en": "Incorrect. This leads to high turnover, low morale, and elevated site accident risks.",
              "es": "Incorrecto. Genera alta rotación y compromete la calidad y seguridad en las operaciones.",
            },
          },
        ],
      },
    ],
  },
};
