import { CourseDemonstration } from "@/types";

export const nr20CourseData: CourseDemonstration = {
  id: "c-nr20-inflamaveis-combustiveis",
  slug: "nr-20-seguranca-e-saude-no-trabalho-com-inflamaveis-e-combustiveis",
  title: {
    "pt-BR": "NR-20: Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis",
    "en": "NR-20: Occupational Safety & Health with Flammables and Combustibles",
    "es": "NR-20: Seguridad y Salud en el Trabajo con Inflamables y Combustibles",
  },
  description: {
    "pt-BR": "Capacitação completa em NR-20: propriedades físico-químicas de líquidos e gases inflamáveis, pontos de fulgor e ignição, controle de fontes de ignição e eletricidade estática, sistemas de proteção contra incêndio, análise de riscos industriais, permissão para trabalho (PT), segurança de processo, gestão de mudanças e plano de resposta a emergências.",
    "en": "Comprehensive NR-20 training: physicochemical properties of flammable liquids and gases, flash point and ignition hazards, static electricity control, fire protection systems, industrial hazard analysis methodologies, work permits (PT), process safety management, change management, and emergency response planning.",
    "es": "Capacitación en NR-20: propiedades físico-químicas de inflamables y combustibles, puntos de inflamación, control de fuentes de ignición, protección contra incendios, análisis de riesgos, permisos de trabajo (PT), seguridad de procesos y emergencias.",
  },
  longDescription: {
    "pt-BR": "O treinamento de NR-20 da RSS3 Soluções Industriais estabelece os requisitos mínimos de gestão de segurança e saúde no trabalho contra os fatores de risco de acidentes provenientes das atividades de extração, produção, armazenamento, transferência, manuseio e manipulação de inflamáveis e líquidos combustíveis. Desenvolvido para operações de alto rigor em plantas fabris críticas (como a CMPC) e frentes de hidrojato e pintura industrial, o curso detalha os conceitos termodinâmicos do fogo (flash point, fire point e auto-ignição), controle rigoroso de atmosferas explosivas (áreas classificadas), sistemas preventivos de aterramento e equalização de potencial, metodologias estruturadas de análise de riscos (APR, HAZOP e What-If), emissão e fiscalização de Permissões para Trabalho (PT), diretrizes de Segurança de Processo da Instalação (SPI), Gerenciamento de Mudanças (MOC) e planos táticos de resposta a vazamentos e incêndios.",
    "en": "The RSS3 NR-20 training defines mandatory occupational safety standards for handling, storing, and transferring flammable and combustible liquids across critical industrial sites. Covers thermodynamic ignition physics, classified hazardous area management, electrostatic bonding, risk assessment methodologies (JHA, HAZOP), hot work permit issuance, Process Safety Management (PSM), Management of Change (MOC), and emergency spill response plans.",
    "es": "El curso de NR-20 de RSS3 establece las directrices de seguridad para manipulación, trasvase y almacenamiento de inflamables en plantas industriales. Comprende termodinámica del fuego, áreas clasificadas, control de estática, metodologías de análisis de riesgo, permisos de trabajo en caliente y planes de emergencia.",
  },
  schoolId: "seguranca-epi",
  schoolName: {
    "pt-BR": "Segurança do Trabalho e Equipamentos de Proteção",
    "en": "Occupational Safety & Personal Protective Equipment",
    "es": "Seguridad Laboral y Equipos de Protección",
  },
  workloadHours: 20,
  level: "intermediate",
  modality: "hybrid",
  isMandatory: true,
  mandatoryFor: [
    "Operador de Hidrojato",
    "Pintor Industrial",
    "Mecânico de Manutenção",
    "Técnico de Segurança do Trabalho",
    "Líder de Frente Operacional",
    "Operador de Utilidades",
    "Brigadista de Emergência",
  ],
  targetAudience: {
    "pt-BR": "Operadores industriais, lanceiros de hidrojateamento, pintores industriais, mecânicos, soldadores, supervisores de área, brigadistas e técnicos de SST que atuam em áreas com presença ou armazenamento de combustíveis e solventes.",
    "en": "Plant operators, hydroblasting technicians, industrial painters, maintenance mechanics, welders, frontline supervisors, and safety personnel.",
    "es": "Operadores de planta, pintores industriales, mecánicos, soldadores y prevencionistas de riesgos.",
  },
  prerequisites: {
    "pt-BR": "Maioridade (18+ anos), Atestado de Saúde Ocupacional (ASO) apto para atividade industrial e treinamento de integração de segurança da RSS3.",
    "en": "18+ years of age, valid medical clearance (ASO), and RSS3 site safety induction.",
    "es": "Mayoría de edad (18+), aptitud médica certificada en el ASO e inducción de seguridad.",
  },
  modulesCount: 4,
  lessonsCount: 15,
  thumbnailGradient: "from-amber-700 via-orange-800 to-stone-950",
  coverImage: "/images/courses/nr20.jpg",
  categories: ["nr-regulamentar", "conhecimento-operacional"],
  badgeCode: "NR-20",
  updatedAtDate: "2026-10-18",
  modules: [
    {
      id: "mod-nr20-1",
      order: 1,
      title: {
        "pt-BR": "Módulo 1: Fundamentos Termodinâmicos, Propriedades e Riscos dos Inflamáveis",
        "en": "Module 1: Thermodynamic Fundamentals, Properties & Flammability Hazards",
        "es": "Módulo 1: Fundamentos Termodinámicos, Propiedades y Riesgos de Inflamables",
      },
      description: {
        "pt-BR": "Conceitos científicos de ponto de fulgor, combustão e ignição, limites de inflamabilidade (LIE e LSE), características físicas e perigos associados a vapores inflamáveis.",
        "en": "Flash point, fire point, and auto-ignition scientific concepts, explosive limits (LEL/UEL), physical properties, and vapor hazards.",
        "es": "Punto de inflamación, combustión y autoignición, límites de explosividad (LEL/UEL) y peligros de vapores inflamables.",
      },
      lessons: [
        {
          id: "les-nr20-1-1",
          order: 1,
          title: {
            "pt-BR": "NR20: Introdução, Ponto de Fulgor, Ponto de Combustão e Ponto de Ignição",
            "en": "NR-20: Introduction, Flash Point, Fire Point, and Auto-Ignition Point",
            "es": "NR-20: Introducción, Punto de Inflamación, Combustión y Autoignición",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "6Tk0NPljK-A",
          contentDetail: {
            objective: {
              "pt-BR": "Diferenciar com precisão técnica as temperaturas críticas de inflamabilidade e combustão que regem o comportamento de solventes e combustíveis.",
              "en": "Distinguish between flash point, fire point, and auto-ignition temperature governing fuel and solvent behavior.",
              "es": "Diferenciar técnicamente punto de inflamación, combustión y temperatura de autoignición.",
            },
            summaryPoints: [
              {
                "pt-BR": "Ponto de Fulgor (Flash Point): menor temperatura em que o líquido libera vapores em quantidade suficiente para inflamar com fonte externa, sem manter a chama.",
                "en": "Flash Point: lowest temperature at which liquid releases sufficient vapors to flash upon ignition, without sustaining fire.",
                "es": "Punto de inflamación: temperatura mínima a la que el líquido emite vapores inflamables momentáneos.",
              },
              {
                "pt-BR": "Ponto de Combustão (Fire Point) e Ponto de Ignição (Auto-Ignition): queima contínua e ignição espontânea sem centelha externa.",
                "en": "Fire Point and Auto-ignition: sustained burning and spontaneous thermal ignition without external spark.",
                "es": "Punto de combustión y autoignición: combustión autosostenida e ignición espontánea.",
              },
              {
                "pt-BR": "Classificação da NR-20: líquidos inflamáveis (ponto de fulgor ≤ 60 ºC) e líquidos combustíveis (> 60 ºC e ≤ 93 ºC).",
                "en": "NR-20 classification: flammable liquids (flash point ≤ 60 ºC) and combustible liquids (> 60 ºC and ≤ 93 ºC).",
                "es": "Clasificación NR-20: líquidos inflamables (≤ 60 ºC) y líquidos combustibles (> 60 ºC y ≤ 93 ºC).",
              },
            ],
          },
        },
        {
          id: "les-nr20-1-2",
          order: 2,
          title: {
            "pt-BR": "NR20: Características, Propriedades, Perigos e Riscos (Parte 1)",
            "en": "NR-20: Characteristics, Physical Properties, Hazards & Risks (Part 1)",
            "es": "NR-20: Características, Propiedades, Peligros y Riesgos (Parte 1)",
          },
          durationMinutes: 11,
          contentType: "video",
          videoUrl: "cRVCEiKZ35c",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender as grandezas físicas dos produtos químicos perigosos, como densidade de vapor, volatilidade e pressão de vapor.",
              "en": "Understand physical variables of hazardous chemicals: vapor density, volatility, and vapor pressure.",
              "es": "Comprender densidade de vapor, volatilidad y presión de vapor en sustancias peligrosas.",
            },
            summaryPoints: [
              {
                "pt-BR": "Densidade do vapor em relação ao ar: vapores mais pesados que o ar se acumulam em canaletas, bueiros e pontos baixos.",
                "en": "Vapor density relative to air: heavy vapors settle in drainage pits, trenches, and low confined spaces.",
                "es": "Densidad de vapor: vapores pesados descienden y se acumulan en zanjas y sótanos.",
              },
              {
                "pt-BR": "Pressão de vapor e taxa de evaporação: risco ampliado em ambientes confinados ou sob temperaturas elevadas.",
                "en": "Vapor pressure and evaporation rate: increased atmospheric hazard in hot or enclosed spaces.",
                "es": "Presión de vapor y evaporación en ambientes confinados o con altas temperaturas.",
              },
              {
                "pt-BR": "Efeitos toxicológicos da inalação de vapores de hidrocarbonetos e solventes aromáticos.",
                "en": "Toxicological effects of breathing aromatic hydrocarbon vapors and volatile organic solvents.",
                "es": "Efectos toxicológicos por inhalación de vapores de hidrocarburos.",
              },
            ],
          },
        },
        {
          id: "les-nr20-1-3",
          order: 3,
          title: {
            "pt-BR": "NR20: Características, Propriedades, Perigos e Riscos (Parte 2)",
            "en": "NR-20: Characteristics, Physical Properties, Hazards & Risks (Part 2)",
            "es": "NR-20: Características, Propiedades, Peligros y Riesgos (Parte 2)",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "amfEhhiCI3I",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar os limites de inflamabilidade e explosividade (LIE / LSE) e o comportamento da faixa de queima.",
              "en": "Master lower and upper explosive limits (LEL/UEL) and flammable range atmospheric dynamics.",
              "es": "Dominar los límites inferior y superior de inflamabilidad/explosividad (LIE y LSE).",
            },
            summaryPoints: [
              {
                "pt-BR": "Limite Inferior de Explosividade (LIE): mistura pobre em combustível onde não há queima por falta de vapores.",
                "en": "Lower Explosive Limit (LEL): lean mixture below which fuel vapor concentration is insufficient to ignite.",
                "es": "Límite Inferior de Explosividad (LIE): mezcla demasiado pobre para propagar llama.",
              },
              {
                "pt-BR": "Limite Superior de Explosividade (LSE): mistura rica onde não há combustão por carência de comburente (oxigênio).",
                "en": "Upper Explosive Limit (UEL): rich mixture where oxygen is depleted preventing flame propagation.",
                "es": "Límite Superior de Explosividad (LSE): mezcla demasiado rica en vapor.",
              },
              {
                "pt-BR": "Zona inflamável e uso de explosímetros para monitoramento contínuo da atmosfera (regras para trabalho a quente: 0% LIE).",
                "en": "Flammable range and continuous explosimeter monitoring (hot work threshold: 0% LEL).",
                "es": "Zona explosiva y monitoreo con explosímetro (requisito 0% LIE para trabajos en caliente).",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-nr20-2",
      order: 2,
      title: {
        "pt-BR": "Módulo 2: Controle de Fontes de Ignição, Proteção Contra Incêndio e Emergências",
        "en": "Module 2: Ignition Source Control, Fire Protection & Emergency Response",
        "es": "Módulo 2: Control de Fuentes de Ignición, Protección contra Incendios y Emergencias",
      },
      description: {
        "pt-BR": "Eliminação de fontes de ignição térmica e mecânica, aterramento e descarga eletrostática, agentes extintores adequados para classe B e condutas de emergência.",
        "en": "Mitigating thermal and mechanical ignition sources, electrostatic bonding and grounding, Class B fire extinguishing agents, and emergency actions.",
        "es": "Eliminación de fuentes de ignición, control de electricidad estática, agentes extintores clase B y protocolos de emergencia.",
      },
      lessons: [
        {
          id: "les-nr20-2-1",
          order: 1,
          title: {
            "pt-BR": "NR20: Fontes de Ignição e Seu Controle (Parte 2)",
            "en": "NR-20: Ignition Sources & Mitigation Engineering Controls (Part 2)",
            "es": "NR-20: Fuentes de Ignición y su Control de Ingeniería (Parte 2)",
          },
          durationMinutes: 11,
          contentType: "video",
          videoUrl: "Jv-U3iKXiOY",
          contentDetail: {
            objective: {
              "pt-BR": "Mapear as fontes potenciais de ignição em áreas industriais e aplicar métodos de blindagem e aterramento eletrostático.",
              "en": "Map potential ignition sources in plants and apply grounding, bonding, and explosion-proof equipment standards.",
              "es": "Identificar fuentes de ignición e implementar equipotencialización y puesta a tierra.",
            },
            summaryPoints: [
              {
                "pt-BR": "Eletricidade estática gerada pelo atrito do fluxo de líquidos em tubulações e mangotes de transferência.",
                "en": "Static electricity buildup from liquid shear flow in pipes and transfer hoses.",
                "es": "Generación de electricidad estática por flujo y fricción de líquidos en mangueras.",
              },
              {
                "pt-BR": "Aterramento e equipotencialização obrigatória entre caminhão-tanque, tambor, bico injetor e estrutura metálica.",
                "en": "Mandatory electrostatic bonding and grounding between tank trucks, drums, nozzles, and structural steel.",
                "es": "Puesta a tierra y cables de continuidad entre camión cisterna, tambor y boquilla.",
              },
              {
                "pt-BR": "Equipamentos elétricos com certificação Ex (à prova de explosão) e ferramentas antichispas (bronze/berílio).",
                "en": "Explosion-proof (Ex) certified electrical apparatus and non-sparking hand tools.",
                "es": "Equipos eléctricos con certificación Ex y herramientas antichispa de bronce-berilio.",
              },
            ],
          },
        },
        {
          id: "les-nr20-2-2",
          order: 2,
          title: {
            "pt-BR": "NR20: Proteção Contra Incêndio com Inflamáveis",
            "en": "NR-20: Fire Protection Systems for Flammable Liquids & Gases",
            "es": "NR-20: Protección Contra Incendios en Instalaciones con Inflamables",
          },
          durationMinutes: 13,
          contentType: "video",
          videoUrl: "cUHwO24grJM",
          contentDetail: {
            objective: {
              "pt-BR": "Conhecer os sistemas fixos e portáteis de combate a incêndio classe B (espuma mecânica, pó químico e CO2) e bacias de contenção.",
              "en": "Master portable and fixed fire suppression systems for Class B hazards (AFFF foam, dry chemical, CO2) and containment dikes.",
              "es": "Conocer sistemas fijos y portátiles para fuego clase B (espuma mecánica, polvo químico seco) y cubetos de retención.",
            },
            summaryPoints: [
              {
                "pt-BR": "Agentes extintores indicados para classe B: Espuma Mecânica (abafamento e resfriamento) e Pó Químico Seco (PQS).",
                "en": "Recommended Class B fire suppression: Mechanical Aqueous Film-Forming Foam (AFFF) and Dry Chemical Powder.",
                "es": "Extintores para clase B: Espuma mecánica (AFFF) para formar película flotante y Polvo Químico Seco.",
              },
              {
                "pt-BR": "Bacias de contenção de tanques e diques de segurança para impedir o espalhamento de líquido em chamas.",
                "en": "Secondary containment dikes and spill bunds to prevent spread of burning liquid pools.",
                "es": "Cubetos y diques de contención secundaria para evitar la propagación del derrame.",
              },
              {
                "pt-BR": "Sistemas de resfriamento por dilúvio de água para proteção estrutural contra bleve ou colapso térmico.",
                "en": "Deluge water spray cooling systems preventing BLEVE hazards and thermal structural collapse.",
                "es": "Sistemas de rociadores y diluvio para refrigeración de recipientes a presión.",
              },
            ],
          },
        },
        {
          id: "les-nr20-2-3",
          order: 3,
          title: {
            "pt-BR": "NR20: Procedimentos em Situações de Emergência com Inflamáveis",
            "en": "NR-20: Emergency Procedures for Flammable Leaks & Spill Incidents",
            "es": "NR-20: Procedimientos de Emergencia ante Fugas y Derrames de Inflamables",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "g2NLpW1Jjj8",
          contentDetail: {
            objective: {
              "pt-BR": "Adotar as ações imediatas de isolamento, contenção e evacuação em casos de vazamento de inflamáveis ou princípio de incêndio.",
              "en": "Execute rapid containment, isolation, and site evacuation protocols for chemical leaks and early-stage fires.",
              "es": "Aplicar medidas inmediatas de aislamiento, contención y evacuación ante fugas de inflamables.",
            },
            summaryPoints: [
              {
                "pt-BR": "Acionamento de alarme geral e corte imediato do fornecimento através de válvulas de bloqueio de emergência (SDV).",
                "en": "Plant-wide alarm activation and immediate fuel cutoff via emergency shutdown valves (SDVs).",
                "es": "Activación de alarma general y cierre de válvulas de corte de emergencia (SDV).",
              },
              {
                "pt-BR": "Uso de kits de mitigação ambiental (mantas absorventes, barreiras de contenção e turfa orgânica).",
                "en": "Deploying environmental spill kits: absorbent pads, containment booms, and organic neutralizing peat.",
                "es": "Uso de kits para control de derrames: mantas absorbentes y barreras flotantes.",
              },
              {
                "pt-BR": "Evacuação segura contra a direção do vento (upwind) e conferência de equipe no ponto de encontro.",
                "en": "Evacuating upwind perpendicular to vapor dispersion towards designated muster points.",
                "es": "Evacuación hacia puntos de encuentro contra la dirección del viento (upwind).",
              },
            ],
          },
        },
        {
          id: "les-nr20-2-4",
          order: 4,
          title: {
            "pt-BR": "NR20: Planejamento de Resposta a Emergências com Inflamáveis",
            "en": "NR-20: Emergency Response Planning & Scenario Simulations",
            "es": "NR-20: Planificación de Respuesta a Emergencias con Inflamables",
          },
          durationMinutes: 14,
          contentType: "video",
          videoUrl: "S0r3kQRLN1E",
          contentDetail: {
            objective: {
              "pt-BR": "Estruturar o Plano de Resposta a Emergências (PRE) em conformidade com a NR-20 e realizar simulados periódicos.",
              "en": "Structure the Emergency Response Plan (ERP) per NR-20 and conduct periodic drill scenarios.",
              "es": "Estructurar el Plan de Respuesta a Emergencias (PRE) y ejecutar simulacros de campo.",
            },
            summaryPoints: [
              {
                "pt-BR": "Mapeamento prévio dos piores cenários acidentais: vazamento sem fogo, pool fire, jet fire, flash fire e explosão de vapor (VCE).",
                "en": "Worst-case scenario modeling: unignited vapor release, pool fire, jet fire, flash fire, and vapor cloud explosion (VCE).",
                "es": "Modelación de escenarios de riesgo: derrame sin ignición, fuego en charco, dardo de fuego y nube de vapor.",
              },
              {
                "pt-BR": "Articulação entre brigada interna de incêndio, SAMU, Corpo de Bombeiros Militar e PAM (Plano de Auxílio Mútuo).",
                "en": "Coordinating internal fire brigade, public EMS, military fire department, and mutual aid networks.",
                "es": "Integración de brigada interna con bomberos oficiales y plan de ayuda mutua (PAM).",
              },
              {
                "pt-BR": "Cronograma de exercícios simulados com debriefing e implementação de melhorias contínuas.",
                "en": "Annual drill simulation schedules followed by structured operational debriefing.",
                "es": "Calendario de simulacros con análisis de tiempos de respuesta y lecciones aprendidas.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-nr20-3",
      order: 3,
      title: {
        "pt-BR": "Módulo 3: Requisitos Regulamentares, Análise de Riscos e Permissão de Trabalho (PT)",
        "en": "Module 3: Regulatory Scope, Risk Methodologies & Work Permits (PT)",
        "es": "Módulo 3: Marco Regulatorio, Análisis de Riesgos y Permiso de Trabajo (PT)",
      },
      description: {
        "pt-BR": "Classificação das instalações (Classes I, II e III), metodologias de análise de risco (APR, HAZOP), emissão rigorosa de Permissão para Trabalho com Inflamáveis e EPI/EPC.",
        "en": "Facility classification (Classes I, II, III), hazard identification methods (JHA, HAZOP), Work Permits for Flammable Zones, and PPE/collective controls.",
        "es": "Clasificación de instalaciones industriales, metodologías de riesgo (APR, HAZOP), emisión de PT y controles colectivos/individuales.",
      },
      lessons: [
        {
          id: "les-nr20-3-1",
          order: 1,
          title: {
            "pt-BR": "NR20: Estudo da Norma Regulamentadora Nº 20",
            "en": "NR-20: Comprehensive Study of Regulatory Standard NR-20",
            "es": "NR-20: Estudio de la Norma Regulamentadora Nº 20",
          },
          durationMinutes: 15,
          contentType: "video",
          videoUrl: "-N0ddse3Gw8",
          contentDetail: {
            objective: {
              "pt-BR": "Entender o enquadramento das plantas industriais nas Classes I, II e III e os níveis de capacitação exigidos (Básico, Intermediário, Avançado e Específico).",
              "en": "Understand facility classification into Classes I, II, and III, and training tier matrices (Basic, Intermediate, Advanced, Specific).",
              "es": "Conocer la clasificación de plantas en Clases I, II y III y las matrices de capacitación obligatorias.",
            },
            summaryPoints: [
              {
                "pt-BR": "Critérios de enquadramento: volume de armazenamento, atividade exercida e classe de risco da instalação.",
                "en": "Classification criteria: stored volume, operational activity, and facility risk category.",
                "es": "Criterios: volumen almacenado, tipo de actividad y nivel de riesgo de la instalación.",
              },
              {
                "pt-BR": "Prontuário da Instalação: arquivo documental obrigatório contendo plantas, laudos elétricos Ex e procedimentos operacionais.",
                "en": "Facility Dossier (Prontuário): mandatory engineering repository containing classified area drawings, Ex audit reports, and procedures.",
                "es": "Expediente de la Instalación: archivo obligatorio con planos Ex, memorias de cálculo y procedimientos.",
              },
              {
                "pt-BR": "Inspeção e manutenção periódica em tubulações, bombas, flanges e válvulas de alívio.",
                "en": "Periodic integrity inspection and maintenance of piping, pumps, flanges, and pressure safety relief valves.",
                "es": "Mantenimiento preventivo e inspección de integridad mecánica de tuberías y válvulas.",
              },
            ],
          },
        },
        {
          id: "les-nr20-3-2",
          order: 2,
          title: {
            "pt-BR": "NR20: Metodologias de Análise de Riscos — Conceitos",
            "en": "NR-20: Risk Assessment Methodologies & Concepts",
            "es": "NR-20: Metodologías de Análisis de Riesgos — Conceptos",
          },
          durationMinutes: 13,
          contentType: "video",
          videoUrl: "cjvXohbg15w",
          contentDetail: {
            objective: {
              "pt-BR": "Aplicar ferramentas de identificação de perigos como Análise Preliminar de Perigos (APP/APR), What-If e HAZOP em sistemas com inflamáveis.",
              "en": "Apply hazard identification tools such as PHA/JHA, What-If, and HAZOP to flammable chemical piping and processes.",
              "es": "Aplicar técnicas de análisis de riesgos (APR, What-If, HAZOP) en sistemas de inflamables.",
            },
            summaryPoints: [
              {
                "pt-BR": "Análise Preliminar de Risco (APR): identificação de causas, consequências, salvaguardas existentes e recomendações de controle.",
                "en": "Preliminary Hazard Analysis (PHA): mapping causes, consequences, existing barriers, and mitigation actions.",
                "es": "Análisis Preliminar de Riesgos (APR): identificación de causas, eventos y salvaguardas.",
              },
              {
                "pt-BR": "Metodologia What-If / Checklist para manutenções e intervenções operacionais rotineiras.",
                "en": "What-If / Checklist methodology for field operations and routine turnaround tasks.",
                "es": "Técnica What-If (¿Qué pasa si?) para tareas de mantenimiento y paradas de planta.",
              },
              {
                "pt-BR": "HAZOP (Estudo de Perigos e Operabilidade) para análise sistemática de desvios em variáveis de processo (pressão, vazão e temperatura).",
                "en": "HAZOP (Hazard and Operability Study) for systematic deviations in process variables (pressure, flow, temperature).",
                "es": "HAZOP para desvíos de variables operacionales en sistemas de tuberías críticas.",
              },
            ],
          },
        },
        {
          id: "les-nr20-3-3",
          order: 3,
          title: {
            "pt-BR": "NR20: Permissão para Trabalho com Inflamáveis",
            "en": "NR-20: Work Permit for Flammable & Hazardous Environments",
            "es": "NR-20: Permiso para Trabajo en Caliente e Inflamables",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "upgkfZFfQ1A",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar os procedimentos de emissão, checagem prévia e liberação formal da Permissão para Trabalho (PT) em áreas classificadas e tanques.",
              "en": "Master work permit authorization, gas-free verification, and field checklist execution in classified zones.",
              "es": "Dominar la emisión y validación del Permiso de Trabajo (PT) en zonas con riesgo de explosión.",
            },
            summaryPoints: [
              {
                "pt-BR": "Obrigatoriedade de PT para atividades a quente (solda, lixamento, oxicorte) em áreas de armazenamento ou trânsito de inflamáveis.",
                "en": "Mandatory hot work permits for welding, grinding, and torch cutting near flammable equipment.",
                "es": "Obligatoriedad de PT para trabajos en caliente cerca de tanques y líneas de combustible.",
              },
              {
                "pt-BR": "Testes de atmosfera: teste de explosividade (LIE 0%), dosagem de oxigênio (19,5% a 23%) e gases tóxicos antes de iniciar o serviço.",
                "en": "Atmospheric testing: 0% LEL, safe oxygen levels (19.5% - 23%), and toxic gas clearance before striking arcs.",
                "es": "Medición de atmósfera: 0% de gases inflamables y verificación de oxígeno antes de iniciar.",
              },
              {
                "pt-BR": "Função do vigia de fogo (fire watch) com extintor pressurizado durante e após a conclusão da atividade.",
                "en": "Dedicated fire watch duties with charged extinguisher during work and 30-minute post-job cool-down check.",
                "es": "Rol del vigía de fuego con extintor a mano durante la tarea y control térmico posterior.",
              },
            ],
          },
        },
        {
          id: "les-nr20-3-4",
          order: 4,
          title: {
            "pt-BR": "NR20: Controles Coletivo e Individual para Trabalhos com Inflamáveis",
            "en": "NR-20: Collective Engineering & Personal Protective Controls",
            "es": "NR-20: Controles Colectivos e Individuales para Trabajos con Inflamables",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "W0Vdhq-G2qQ",
          contentDetail: {
            objective: {
              "pt-BR": "Definir os equipamentos de proteção coletiva (EPC) e equipamentos de proteção individual (EPI) mandatórios para o manuseio de inflamáveis.",
              "en": "Specify collective engineering controls and personal protective equipment for hazardous fluid management.",
              "es": "Especificar medidas de ingeniería y equipos de protección personal para manejo de inflamables.",
            },
            summaryPoints: [
              {
                "pt-BR": "Sistemas de exaustão e ventilação forçada em áreas enclausuradas com motores à prova de explosão.",
                "en": "Forced ventilation and vapor extraction systems fitted with explosion-proof motors.",
                "es": "Sistemas de ventilación forzada a prueba de explosión en salas de mezclas.",
              },
              {
                "pt-BR": "Vestimentas de proteção antichama (NR-10 / NFPA 2112) de algodão tratado, sem componentes sintéticos que possam derreter.",
                "en": "Flame-resistant cotton workwear (NFPA 2112 certified), avoiding meltable synthetic fabrics.",
                "es": "Ropa de trabajo ignífuga 100% algodón tratada, sin fibras sintéticas fusibles.",
              },
              {
                "pt-BR": "Proteção respiratória com filtros de vapores orgânicos (VO) e calçados com solado antiestático dissipativo.",
                "en": "Organic vapor respiratory cartridges and certified antistatic dissipative footwear.",
                "es": "Protección respiratoria para vapores orgánicos y calzado disipativo antiestático.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-nr20-4",
      order: 4,
      title: {
        "pt-BR": "Módulo 4: Segurança de Processo, Gestão de Mudanças e Lições de Acidentes",
        "en": "Module 4: Process Safety, Management of Change & Accident Case Studies",
        "es": "Módulo 4: Seguridad de Procesos, Gestión de Cambios y Lecciones de Accidentes",
      },
      description: {
        "pt-BR": "Diretrizes de Segurança de Processo da Instalação (SPI), sistemática de Gestão de Mudanças (MOC), análise de causas-raiz de explosões históricas e simulado de fixação.",
        "en": "Facility Process Safety guidelines, Management of Change (MOC) workflows, root-cause analyses of major explosions, and competency drills.",
        "es": "Seguridad de procesos en la planta, gestión del cambio (MOC), análisis de accidentes con inflamables y ejercicios prácticos.",
      },
      lessons: [
        {
          id: "les-nr20-4-1",
          order: 1,
          title: {
            "pt-BR": "NR20: Noções Básicas de Segurança de Processo da Instalação",
            "en": "NR-20: Fundamentals of Installation Process Safety Management (PSM)",
            "es": "NR-20: Nociones Básicas de Seguridad de Procesos en la Instalación",
          },
          durationMinutes: 13,
          contentType: "video",
          videoUrl: "9K9hNn8yVGM",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender os pilares da Segurança de Processo para prevenção de perdas de contenção de grande escala e eventos catastróficos.",
              "en": "Understand process safety pillars preventing large-scale loss of primary containment and catastrophic incidents.",
              "es": "Comprender los principios de seguridad de procesos para evitar pérdidas de contención masivas.",
            },
            summaryPoints: [
              {
                "pt-BR": "Diferença entre Segurança Ocupacional (escorregões, quedas) e Segurança de Processo (vazamentos de tubulações, BLEVE, explosões).",
                "en": "Occupational safety (personal injuries) vs Process safety (containment loss, toxic releases, major fires).",
                "es": "Diferencia entre seguridad personal (accidentes comunes) y seguridad de procesos (fugas, explosiones).",
              },
              {
                "pt-BR": "Conceito de barreiras de proteção (Modelo do Queijo Suíço de James Reason): hardware, procedimentos e pessoas.",
                "en": "Barrier protection models (Reason's Swiss Cheese model): hardware reliability, procedural discipline, human vigilance.",
                "es": "Modelo de barreras de seguridad: confiabilidad mecánica, procedimientos y disciplina operativa.",
              },
              {
                "pt-BR": "Monitoramento de indicadores de segurança de processo (Tier 1 e Tier 2 / API RP 754).",
                "en": "Process safety leading and lagging metrics tracking (Tier 1 and Tier 2 per API RP 754).",
                "es": "Indicadores de fugas y pérdidas de contención para control de integridad de planta.",
              },
            ],
          },
        },
        {
          id: "les-nr20-4-2",
          order: 2,
          title: {
            "pt-BR": "NR20: Noções Básicas de Gestão de Mudanças",
            "en": "NR-20: Fundamentals of Management of Change (MOC)",
            "es": "NR-20: Nociones Básicas de Gestión del Cambio (MOC)",
          },
          durationMinutes: 11,
          contentType: "video",
          videoUrl: "-tJYf3MDdkc",
          contentDetail: {
            objective: {
              "pt-BR": "Aplicar a metodologia de Gestão de Mudanças (MOC) antes de qualquer alteração física, operacional, de processo ou de pessoal.",
              "en": "Apply Management of Change (MOC) workflows before implementing mechanical, operational, or personnel modifications.",
              "es": "Aplicar el procedimiento de Gestión del Cambio antes de modificar instalaciones o procesos con inflamables.",
            },
            summaryPoints: [
              {
                "pt-BR": "O que constitui uma mudança: substituição de fluidos químicos, alteração de pressão/temperatura de projeto e bypass provisório.",
                "en": "What qualifies as change: solvent substitution, operating pressure/temp shifts, temporary bypass lines.",
                "es": "Qué es un cambio: sustitución de sustancias químicas, alteración de tuberías o puentes provisorios.",
              },
              {
                "pt-BR": "Fluxo formal de aprovação: análise prévia multidisciplinar de riscos antes da implementação.",
                "en": "Formal review workflow: multidisciplinary risk screening before field commissioning.",
                "es": "Flujo de aprobación multidisciplinaria antes de ejecutar cualquier modificación en planta.",
              },
              {
                "pt-BR": "Treinamento compulsório da equipe de campo e atualização das plantas e manuais antes do start-up.",
                "en": "Mandatory retraining of operators and updating P&ID drawings prior to system restart.",
                "es": "Capacitación obligatoria y actualización de diagramas P&ID antes de la puesta en marcha.",
              },
            ],
          },
        },
        {
          id: "les-nr20-4-3",
          order: 3,
          title: {
            "pt-BR": "NR20: Acidentes com Inflamáveis — Análise de Causas e Medidas Preventivas",
            "en": "NR-20: Flammable Incidents — Root Cause Analysis & Preventive Lessons",
            "es": "NR-20: Accidentes con Inflamables — Análisis de Causas y Lecciones Aprendidas",
          },
          durationMinutes: 14,
          contentType: "video",
          videoUrl: "zTybjQicQMo",
          contentDetail: {
            objective: {
              "pt-BR": "Analisar acidentes industriais históricos envolvendo combustíveis para identificar falhas de integridade mecânica e procedimentos.",
              "en": "Examine major industrial fires to identify mechanical integrity breakdowns and procedural lapses.",
              "es": "Analizar accidentes reales con hidrocarburos para identificar fallas en barreras de protección.",
            },
            summaryPoints: [
              {
                "pt-BR": "Estudos de caso reais: explosão em carregamento de caminhão por falta de aterramento e corte a quente sobre tubulações sem purga.",
                "en": "Real incident analyses: tanker truck loading explosion from static spark; hot work over unpurged lines.",
                "es": "Casos reales: explosión por descarga estática en llenado de camiones y trabajos en tuberías sin purgar.",
              },
              {
                "pt-BR": "A importância da purga com gás inerte (nitrogênio / vapor) antes de qualquer corte ou manutenção em vasos de pressão.",
                "en": "Mandatory nitrogen/steam purging of vessels and pipelines prior to maintenance intervention.",
                "es": "Purga obligatoria con nitrógeno o vapor de tanques antes de aplicar calor.",
              },
              {
                "pt-BR": "Cultura de reporte de desvios e quase acidentes para impedir a ocorrência de sinistros graves.",
                "en": "Fostering near-miss reporting culture to catch precursors to catastrophic loss of containment.",
                "es": "Cultura de reporte preventivo de casi-accidentes en plantas industriales.",
              },
            ],
          },
        },
        {
          id: "les-nr20-4-4",
          order: 4,
          title: {
            "pt-BR": "NR20: Questionário de Revisão e Fixação Conceitual",
            "en": "NR-20: Review Quiz & Practical Conceptual Consolidation",
            "es": "NR-20: Cuestionario de Revisión y Consolidación Conceptual",
          },
          durationMinutes: 11,
          contentType: "video",
          videoUrl: "ilnZ5JO8eHE",
          contentDetail: {
            objective: {
              "pt-BR": "Consolidar o aprendizado em todos os tópicos da norma através da resolução guiada de questões práticas operacionais.",
              "en": "Consolidate learning across all regulatory modules through guided review of field scenarios.",
              "es": "Repasar los conceptos clave de la norma mediante preguntas guiadas de aplicación práctica.",
            },
            summaryPoints: [
              {
                "pt-BR": "Revisão dos pontos de fulgor e classes de inflamabilidade dos solventes mais comuns na manutenção industrial.",
                "en": "Recap of flash points and flammability classes for solvents commonly used in plant maintenance.",
                "es": "Repaso de puntos de inflamación de solventes y combustibles industriales habituales.",
              },
              {
                "pt-BR": "Checagem de requisitos mandatórios para liberação de Permissão de Trabalho (PT).",
                "en": "Verification of core sign-off checklists on hot work permits in classified areas.",
                "es": "Checklist de verificación de requisitos para liberar permisos de trabajo en caliente.",
              },
              {
                "pt-BR": "Preparação técnica para o exame formal de certificação teórica da RSS3 Treinamentos.",
                "en": "Technical readiness for the RSS3 certified theoretical evaluation.",
                "es": "Preparación para la evaluación teórica final de certificación en RSS3.",
              },
            ],
          },
        },
      ],
    },
  ],
finalAssessment: {
    id: "exam-nr20-inflamaveis-combustiveis",
    order: 16,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 50,
    questionsCount: 10,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Estudo de Caso & Avaliação Prática Avançada de Segurança com Inflamáveis e Combustíveis (NR-20). Abrange classificação de instalações Classe I/II/III, inertização por nitrogênio (N2) com monitoramento estequiométrico de O2, fenômeno BLEVE e raio de radiação térmica, sensibilidade cruzada de explosímetros (LIE) e aterramento antiestático em hidrovácuo. Exige 70% de aproveitamento para certificação teórica.",
      "en": "Advanced Flammables & Combustibles Process Safety Assessment (NR-20). Covers Class I/II/III facility categorization, nitrogen inerting with oxygen stoichiometry, BLEVE mechanics and thermal radiation zones, explosimeter LEL cross-sensitivity, and static grounding during vacuum operations. 70% passing score.",
      "es": "Estudio de Caso y Evaluación Práctica Avanzada en Inflamables y Combustibles (NR-20). Clasificación de plantas Clase I/II/III, inertización con N2, fenómeno BLEVE, explosímetros y control electrostático en camión de vacío. 70% mínimo.",
    },
    title: {
      "pt-BR": "Estudo de Caso & Avaliação Técnica — Segurança de Processo em Inflamáveis (NR-20)",
      "en": "Case Study & Technical Assessment — Flammables Process Safety (NR-20)",
      "es": "Estudio de Caso y Evaluación Técnica — Seguridad de Procesos en Inflamables (NR-20)",
    },
    description: {
      "pt-BR": "Cenário de Engenharia de Processo na CMPC: Operação de limpeza por hidrovácuo e desgaseificação de tanque de armazenamento de metanol e condensado sulfuroso. Análise de atmosferas inflamáveis, purga por N2, teste de explosividade e mitigação de ignição eletrostática.",
      "en": "Process Safety Scenario at CMPC: Vacuum truck cleaning and degassing of a methanol and foul condensate storage tank. Flammable atmosphere testing, N2 purging, explosimeter verification, and electrostatic ignition mitigation.",
      "es": "Caso de Procesos en CMPC: Limpieza por hidrovacío y desgasificación de tanque de metanol. Atmósferas inflamables, purga con N2 y control de electricidad estática.",
    },
    questions: [
      {
        id: "q-nr20-1",
        order: 1,
        question: {
          "pt-BR": "CENÁRIO 1: A equipe da RSS3 foi mobilizada para realizar a sucção por caminhão hidrovácuo e lavagem interna de um tanque de condensado com resíduos de metanol (ponto de fulgor de 11°C, LIE = 6,0% e LSE = 36,0% em volume no ar). Antes de autorizar a entrada dos operadores ou a introdução de mangotes condutivos, o engenheiro de segurança exige a INERTIZAÇÃO do tanque. Qual é o procedimento técnico correto para inertizar esse tanque e qual parâmetro de gás deve ser monitorado continuamente pelo detector multigás?",
          "en": "SCENARIO 1: RSS3 crew is assigned to vacuum-extract and clean a condensate tank containing methanol residues (Flash point 11°C, LEL = 6.0%, UEL = 36.0% vol in air). Prior to authorizing operator entry or inserting conductive vacuum hoses, the safety engineer mandates INERTING. What is the correct protocol to inert this vessel and which gas parameter must be continuously monitored by the multi-gas detector?",
          "es": "ESCENARIO 1: Limpieza por vacío de tanque de condensado con residuos de metanol (Punto de inflamación 11°C, LIE = 6,0%, LSE = 36,0%). Se exige INERTIZACIÓN previa. ¿Cuál es el procedimiento técnico y qué gas debe monitorearse continuamente?",
        },
        options: [
          {
            id: "opt-nr20-1-a",
            text: {
              "pt-BR": "Ligar um compressor de ar comum e soprar ar comprimido atmosférico com 21% de oxigênio para dentro do tanque até sumir o cheiro.",
              "en": "Hook up an air compressor and blast atmospheric air with 21% oxygen inside until the smell dissipates.",
              "es": "Inyectar aire comprimido normal con 21% de oxígeno hasta que se vaya el olor.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e letal. Injetar ar comum fornece oxigênio abundante e cria turbulência de vapores, situando a mistura exatamente na faixa explosiva (6% a 36%), onde qualquer fagulha causará detonação maciça.",
              "en": "Incorrect and disastrous. Pumping compressed air supplies oxygen and turbulence, throwing vapor mixtures straight into the violent explosive range.",
              "es": "Incorrecto y letal. El aire introduce oxígeno masivo llevando la mezcla a la zona explosiva.",
            },
          },
          {
            id: "opt-nr20-1-b",
            text: {
              "pt-BR": "Injetar gás inerte comprimido (Nitrogênio N2 ou Dióxido de Carbono CO2) pelo bocal inferior para expulsar os vapores inflamáveis pelo respiro superior, monitorando continuamente a Concentração de Oxigênio (O2) até que ela caia e se mantenha estavelmente abaixo da Concentração Limite de Oxigênio (LOC / MOC, geralmente < 8% e preferencialmente < 5% O2), tornando qualquer combustão ou explosão fisicamente impossível no interior do tanque.",
              "en": "Purge with compressed inert gas (Nitrogen N2 or CO2) from bottom connection venting vapors through high-point vent, continuously tracking Oxygen (O2) levels until remaining O2 drops stably below the Limiting Oxygen Concentration (MOC, typically < 8% and preferably < 5% O2), rendering combustion or explosion physically impossible inside the tank.",
              "es": "Purgar con gas inerte (Nitrógeno N2) desde el fondo venteando por el domo superior, monitorizando continuamente el Oxígeno (O2) hasta que descienda por debajo de la Concentración Límite de Oxígeno (MOC < 5% O2), haciendo físicamente imposible cualquier explosión.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O Triângulo do Fogo exige combustível, comburente (O2) e fonte de ignição. A inertização remove o oxigênio para níveis inferiores à MOC (Maximum Oxygen Concentration), impossibilitando a queima de metanol mesmo que haja faíscas estáticas durante a sucção.",
              "en": "Correct! Inerting starves the combustion triangle of oxidizer (O2) below the Minimum Oxygen Concentration (MOC), preventing methanol deflagration regardless of electrostatic discharge during vacuuming.",
              "es": "¡Correcto! Al reducir el O2 por debajo del umbral de combustión (MOC), se neutraliza el triángulo del fuego.",
            },
          },
          {
            id: "opt-nr20-1-c",
            text: {
              "pt-BR": "Acender um fósforo no bocal de visita para queimar os vapores de uma vez de forma rápida e controlada.",
              "en": "Drop a match at the manway to burn off vapors quickly.",
              "es": "Tirar un fósforo para quemar los vapores de una vez.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo perante qualquer diretriz de segurança de processos industriais.",
              "en": "Incorrect and absurd.",
              "es": "Incorrecto y absurdo.",
            },
          },
          {
            id: "opt-nr20-1-d",
            text: {
              "pt-BR": "Jogar serragem de madeira no interior do tanque e fechar a tampa hermeticamente por 10 minutos.",
              "en": "Throw wood sawdust into the tank and seal the hatch hermetically for 10 minutes.",
              "es": "Arrojar aserrín dentro del tanque y cerrar hermético.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Serragem absorve líquido, mas gera poeira combustível adicional e não dissipa vapores inflamáveis.",
              "en": "Sawdust adds combustible dust hazards without neutralizing flammable vapors.",
              "es": "El aserrín añade carga combustible orgánica y no inertiza los gases.",
            },
          },
        ],
      },
      {
        id: "q-nr20-2",
        order: 2,
        question: {
          "pt-BR": "CENÁRIO 2: Durante o trabalho de sucção com caminhão hidrovácuo em área com presença de líquidos inflamáveis Classe I (ponto de fulgor < 37,8°C), o que provoca a geração violenta de eletricidade estática e quais DOIS requisitos de engenharia elétrica devem ser cumpridos obrigatoriamente antes de girar a bomba de vácuo?",
          "en": "SCENARIO 2: During vacuum truck suction in an area with Class I flammables (Flash point < 37.8°C), what causes massive electrostatic charge accumulation and which TWO electrical engineering safeguards are strictly mandatory prior to starting the vacuum blower?",
          "es": "ESCENARIO 2: Operación con camión de vacío en presencia de líquidos inflamables Clase I. ¿Qué origina la generación violenta de estática y cuáles son los DOS requisitos de conexión obligatorios antes de encender la bomba de vacío?",
        },
        options: [
          {
            id: "opt-nr20-2-a",
            text: {
              "pt-BR": "Causa: A luz solar incidindo nos pneus de borracha do caminhão. Requisito: Estacionar o caminhão embaixo de uma árvore e cobrir os pneus com plástico bolha.",
              "en": "Cause: Sunlight on tires. Safeguard: Park under a tree with bubble wrap.",
              "es": "Causa: Luz solar sobre los neumáticos. Requisito: Cubrir las ruedas con plástico.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e sem fundamento científico.",
              "en": "Incorrect and unscientific.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "opt-nr20-2-b",
            text: {
              "pt-BR": "Causa: Eletricidade estática não existe em líquidos e só ocorre quando há tempestade com raios.",
              "en": "Cause: Static does not exist in fluids.",
              "es": "Causa: No existe la estática en líquidos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A triboeletrização de líquidos por escoamento turbulento é a maior causa de incêndios em transferências de combustíveis no mundo.",
              "en": "Incorrect. Fluid flow triboelectric charging is a primary root cause of petroleum terminal transfer explosions worldwide.",
              "es": "Incorrecto. El flujo turbulento de líquidos genera descargas electrostáticas críticas.",
            },
          },
          {
            id: "opt-nr20-2-c",
            text: {
              "pt-BR": "Causa: O atrito do fluido líquido/névoa em alta velocidade contra as paredes do mangote gera separação de cargas por triboeletrização. Requisitos obrigatórios: 1) Utilizar exclusivamente mangotes antiestáticos homologados com fio condutor interno de cobre contínuo com condutividade testada (resistência ôhmica < 10^6 ohms); 2) Conectar o cabo de aterramento e equipotencialização com grampo de mordente no chassi do caminhão, na carcaça do tanque e na malha de terra aterrada da fábrica (resistência < 10 ohms) para drenar cargas instantaneamente.",
              "en": "Cause: High-velocity liquid/mist friction against hose inner walls creates triboelectric charge separation. Mandatory safeguards: 1) Use certified anti-static hoses with continuous internal copper bonding wire (continuity tested, resistance < 10^6 ohms); 2) Clamp electrostatic bonding cables between vacuum truck chassis, vessel shell, and the plant grounding grid (< 10 ohms) to dissipate static charges immediately.",
              "es": "Causa: La fricción del fluido a alta velocidad en la manguera genera cargas por triboelectricidad. Requisitos: 1) Mangueras antiestáticas con filamento interno de cobre con continuidad comprobada (< 10^6 ohmios); 2) Puesta a tierra y equipotencialización del camión y del tanque a la malla general de la planta (< 10 ohmios).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Sem equalização equipotencial e mangotes condutivos, a sucção por vácuo pode acumular diferenças de potencial de mais de 20.000 Volts em poucos minutos, descarregando centelhas de altíssima energia no bocal do tanque e explodindo a unidade.",
              "en": "Correct! Without bonding and conductive hoses, vacuum transfer can generate over 20,000 Volts in minutes, discharging catastrophic static sparks into flammable vapor zones.",
              "es": "¡Correcto! La acumulación triboeléctrica alcanza decenas de kilovoltios en minutos; la equipotencialización evita chispas en zonas clasificadas.",
            },
          },
          {
            id: "opt-nr20-2-d",
            text: {
              "pt-BR": "Causa: Vibração mecânica do escapamento do motor diesel. Requisito: Desligar o caminhão e empurrar o veículo manualmente.",
              "en": "Cause: Diesel exhaust vibrations. Safeguard: Push the truck by hand.",
              "es": "Causa: Vibración del escape. Requisito: Empujar el camión con las manos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A estática provém do atrito do líquido contra as paredes internas do mangote de sucção.",
              "en": "Incorrect. Static arises from liquid triboelectric shear along hose linings.",
              "es": "Incorrecto. Se genera por fricción del fluido contra la pared del tubo.",
            },
          },
        ],
      },
      {
        id: "q-nr20-3",
        order: 3,
        question: {
          "pt-BR": "CENÁRIO 3: Antes de liberar um trabalho a quente (corte a quente e soldagem de suporte estrutural) a 5 metros de uma tubulação que transporta metanol na CMPC, o técnico afere a atmosfera com um explosímetro calibrado em Metano (CH4). A leitura indica '15% do LIE'. Conforme a NR-20 e as melhores práticas internacionais de segurança (NFPA 51B), o trabalho a quente pode ser iniciado com essa leitura?",
          "en": "SCENARIO 3: Prior to issuing a Hot Work Permit (welding) 5 meters from a methanol line at CMPC, the safety tech samples the air with an explosimeter calibrated to Methane (CH4). The device displays '15% of LEL'. Under NR-20 and international standards (NFPA 51B), can hot work proceed with this reading?",
          "es": "ESCENARIO 3: Medición previa a trabajo en caliente (soldadura) a 5 m de cañería de metanol. El explosímetro calibrado en Metano marca '15% del LIE'. Según NR-20 y NFPA 51B, ¿se puede iniciar el trabajo con este valor?",
        },
        options: [
          {
            id: "opt-nr20-3-a",
            text: {
              "pt-BR": "SIM, pois a leitura está abaixo de 100%, o que significa que sobram 85% de margem de segurança para começar a soldar.",
              "en": "YES, because reading is below 100%, leaving an 85% safety margin to weld.",
              "es": "SÍ, porque está por debajo del 100% y queda un 85% de margen.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e letal. 100% do LIE é o ponto exato da explosão; trabalhar em 15% do LIE em área aberta com fagulhas de solda causará ignição imediata com flutuações de vento.",
              "en": "Incorrect and deadly. 100% LEL is the exact explosion flashpoint; 15% LEL with welding sparks triggers flash fires on minor vapor pockets.",
              "es": "Incorrecto y letal. El 100% del LIE ya es la explosión.",
            },
          },
          {
            id: "opt-nr20-3-b",
            text: {
              "pt-BR": "SIM, contanto que o soldador molhe o chão com uma garrafa d'água de 500 ml antes de começar.",
              "en": "YES, provided the welder pours 500 ml of water on the floor first.",
              "es": "SÍ, siempre que moje el suelo con una botella de agua.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A água não dissipa os vapores inflamáveis de metanol que continuam no ar.",
              "en": "Incorrect. Surface water does not neutralize airborne vapor clouds.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "opt-nr20-3-c",
            text: {
              "pt-BR": "NÃO, O TRABALHO ESTÁ TERMINANTEMENTE PROIBIDO. Para liberação de qualquer trabalho a quente com fontes de ignição (arco elétrico, fagulhas), a leitura de gases inflamáveis no explosímetro DEVE ser rigorosamente 0% do LIE (zero absoluto). Além disso, como o explosímetro foi calibrado em Metano e o gás presente é Metanol, deve-se aplicar o Fator de Resposta / Correção Cruzada relativo (o que pode significar que a concentração real é ainda mais perigosa).",
              "en": "NO, WORK IS STRICTLY PROHIBITED. For hot work with open ignition sources, explosimeter readings MUST strictly be 0% LEL. Furthermore, because the instrument was calibrated to Methane while the targeted gas is Methanol, the relative Response Factor (cross-sensitivity multiplier) must be applied, which may indicate actual vapor concentration is significantly higher.",
              "es": "NO, ESTÁ ESTRICTAMENTE PROHIBIDO. Para trabajos en caliente la lectura de gases inflamables debe ser estrictamente 0% del LIE. Además, al estar calibrado para Metano y medir Metanol, el factor de respuesta cruzada puede implicar un riesgo real aún mayor.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Nenhuma permissão de trabalho a quente pode ser emitida com presença residual de 15% do LIE de vapor inflamável. O limiar para trabalho a quente é 0% LIE contínuo, com área limpa, isolada e inertizada.",
              "en": "Correct! Hot work is strictly forbidden above 0% LEL. Any detected flammable vapor represents an intolerable explosion risk upon spark contact.",
              "es": "¡Correcto! No se admite trabajo en caliente con 15% de LIE. El límite permisible es 0% LIE absoluto.",
            },
          },
          {
            id: "opt-nr20-3-d",
            text: {
              "pt-BR": "SIM, mas o soldador deve realizar apenas cordões curtos de solda com intervalo de 10 segundos entre eles.",
              "en": "YES, but the welder must only lay short beads with 10-second pauses between passes.",
              "es": "SÍ, pero soldando con cordones cortos y pausas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Uma única fagulha em atmosfera com vapores inflamáveis incendeia todo o ambiente em milissegundos.",
              "en": "A single spark instantaneously deflagrates flammable atmospheres regardless of bead length.",
              "es": "Una sola chispa detona la mezcla de vapores en milisegundos.",
            },
          },
        ],
      },
      {
        id: "q-nr20-4",
        order: 4,
        question: {
          "pt-BR": "CENÁRIO 4: Em um parque de tancagem industrial, um vaso de pressão contendo gás liquefeito de petróleo (GLP) sob pressão está exposto a um incêndio externo de poça em sua base. As chamas lambem as paredes metálicas superiores do tanque onde não há líquido em contato com a chapa interna (região de vapor seco). Qual fenômeno catastrófico de segurança de processo pode ocorrer em minutos e por quê?",
          "en": "SCENARIO 4: In a tank farm, a pressurized vessel containing liquefied petroleum gas (LPG) is engulfed by an external pool fire at its base. Flames contact the upper vessel steel above the liquid level where no liquid cools the internal plate. What catastrophic process safety phenomenon can develop in minutes and why?",
          "es": "ESCENARIO 4: Tanque presurizado con GLP expuesto a fuego en la base. Las llamas tocan la parte superior del tanque donde no hay líquido que refrigere la chapa. ¿Qué fenómeno catastrófico puede ocurrir en minutos y cuál es su mecanismo físico?",
        },
        options: [
          {
            id: "opt-nr20-4-a",
            text: {
              "pt-BR": "BLEVE (Boiling Liquid Expanding Vapor Explosion / Explosão de Vapor de Expansão de Líquido em Ebulição). Mecanismo: As chamas superaquecem o aço na fase vapor sem resfriamento por calor latente do líquido; o aço perde resistência mecânica (escoamento térmico) e se rompe bruscamente sob a pressão interna crescente, gerando despressurização instantânea que faz todo o líquido remanescente entrar em ebulição explosiva, acompanhada de bola de fogo gigantesca (fireball), onda de choque e fragmentação violenta do vaso a centenas de metros.",
              "en": "BLEVE (Boiling Liquid Expanding Vapor Explosion). Mechanism: External flames overheat uncooled dry vapor space steel; the metal loses tensile strength and ruptures violently under rising internal vapor pressure, triggering instantaneous superheated flashing of the entire liquid inventory into a massive fireball, overpressure blast wave, and high-velocity shrapnel over hundreds of meters.",
              "es": "BLEVE (Boiling Liquid Expanding Vapor Explosion). El acero sin refrigerar por líquido pierde resistencia mecánica por el calor y se rasga bajo la presión interna creciente, provocando evaporación explosiva instantánea del líquido, gigantesca bola de fuego (fireball) y metralla metálica.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O BLEVE é o acidente mais temido na indústria química e de óleo e gás. O resfriamento imediato por canhões monitores de água nas paredes superiores da fase de vapor do tanque é a única defesa tática para evitar a ruptura térmica do vaso.",
              "en": "Correct! BLEVE is a paramount catastrophe in chemical/refining industries. Water monitor deluge cooling on unwetted shell surfaces is the primary tactical intervention to prevent thermal tensile rupture.",
              "es": "¡Correcto! El BLEVE es el accidente de mayor potencial destructor en recipientes a presión de gases licuados expuestos a fuego.",
            },
          },
          {
            id: "opt-nr20-4-b",
            text: {
              "pt-BR": "O tanque esfria espontaneamente porque os gases sob pressão se transformam em cubos de gelo quando esquentam.",
              "en": "The tank cools automatically as gases turn into ice cubes when heated.",
              "es": "El tanque se enfría solo porque los gases se congelan al calentarse.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo perante as leis da termodinâmica.",
              "en": "Incorrect and absurd.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "opt-nr20-4-c",
            text: {
              "pt-BR": "O gás escapa suavemente pela válvula de alívio e apaga o fogo externo automaticamente.",
              "en": "Gas vents through PSV and extinguishes the external fire.",
              "es": "El gas escapa por la válvula de seguridad y apaga el fuego.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A válvula de alívio de pressão (PSV) protege contra sobrepressão hidráulica, mas não impede a falha mecânica da parede metálica enfraquecida pelo fogo direto.",
              "en": "Incorrect. Pressure relief valves cannot prevent metallurgical stress rupture of fire-impinged steel in vapor spaces.",
              "es": "Incorrecto. La PSV alivia presión pero no evita el ablandamiento térmico del acero sobrecalentado.",
            },
          },
          {
            id: "opt-nr20-4-d",
            text: {
              "pt-BR": "O vaso sofre implosão a vácuo devido ao congelamento abrupto das moléculas de butano.",
              "en": "The vessel suffers vacuum implosion due to freezing butane molecules.",
              "es": "El tanque implosiona por vacío debido a congelamiento.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "O calor expande os gases e eleva a pressão interna até a ruptura catastrófica para fora.",
              "en": "Heat expands vapor and drives internal pressure outward to explosive bursting.",
              "es": "El calor genera sobrepresión explosiva hacia afuera.",
            },
          },
        ],
      },
      {
        id: "q-nr20-5",
        order: 5,
        question: {
          "pt-BR": "CENÁRIO 5: Qual é a definição exata das Classes de Instalações industriais (Classe I, II e III) segundo a NR-20 (item 20.4 e Anexo I) e qual critério quantitativo de capacidade de armazenamento é utilizado?",
          "en": "SCENARIO 5: What is the exact classification of industrial facilities (Class I, II, and III) under NR-20 (item 20.4 and Annex I) and which storage capacity criteria are applied?",
          "es": "ESCENARIO 5: ¿Cuál es la clasificación de instalaciones (Clase I, II y III) según la NR-20 y qué criterios de capacidad de almacenamiento se utilizan?",
        },
        options: [
          {
            id: "opt-nr20-5-a",
            text: {
              "pt-BR": "A classificação independe do volume e baseia-se apenas no número de banheiros e refeitórios construídos na fábrica.",
              "en": "Classification ignores volume and depends only on cafeteria and bathroom counts.",
              "es": "La clasificación depende de la cantidad de baños y comedores.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A classificação é estritamente de segurança de processo, baseada na atividade industrial e no volume de inflamáveis.",
              "en": "Facility categorization is strictly process safety-driven, determined by activity and flammable storage tonnage.",
              "es": "La clasificación se basa en la actividad y los volúmenes de almacenamiento.",
            },
          },
          {
            id: "opt-nr20-5-b",
            text: {
              "pt-BR": "Classe I abrange postos de combustíveis e armazenamentos menores (gases 2 a 60 t / líquidos 10 a 5.000 m³); Classe II engloba engarrafadoras de GLP e transportes dutoviários (gases 60 a 600 t / líquidos 5.000 a 50.000 m³); Classe III reúne refinarias de petróleo, unidades petroquímicas e grandes terminais de tancagem (gases acima de 600 t / líquidos acima de 50.000 m³).",
              "en": "Class I covers retail fuel stations and small storage (gas 2-60 t / liquids 10-5,000 m³); Class II covers LPG bottlers and pipelines (gas 60-600 t / liquids 5,000-50,000 m³); Class III encompasses refineries, petrochemical plants, and large storage terminals (gas >600 t / liquids >50,000 m³).",
              "es": "Clase I: gasolineras e inventarios menores (gas 2-60 t / líquidos 10-5.000 m³); Clase II: envasadoras y ductos (gas 60-600 t / líquidos 5.000-50.000 m³); Clase III: refinerías, petroquímicas y grandes terminales (gas >600 t / líquidos >50.000 m³).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O item 20.4 e a tabela do Anexo I definem com rigor as 3 classes com base na atividade e na capacidade de estocagem de gases e líquidos inflamáveis.",
              "en": "Correct! NR-20 Annex I provides exact thresholds for facility classification based on flammable storage volumes and unit operations.",
              "es": "¡Correcto! Tabla canónica de clasificación del Anexo I de la NR-20.",
            },
          },
          {
            id: "opt-nr20-5-c",
            text: {
              "pt-BR": "Classe I são usinas nucleares; Classe II são padarias; e Classe III são indústrias calçadistas.",
              "en": "Class I is nuclear; Class II is bakeries; Class III is shoe factories.",
              "es": "Clase I es nuclear; Clase II panaderías; Clase III calzados.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A NR-20 regula exclusivamente instalações com combustíveis e inflamáveis.",
              "en": "Incorrect. NR-20 strictly governs flammables and combustible fluids.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "opt-nr20-5-d",
            text: {
              "pt-BR": "Todas as fábricas do Brasil pertencem automaticamente à Classe IV, sem distinção de produtos químicos.",
              "en": "All facilities in Brazil belong to Class IV automatically.",
              "es": "Todas las fábricas pertenecen automáticamente a Clase IV.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A norma estabelece apenas as Classes I, II e III para fins de gestão de segurança operacional.",
              "en": "NR-20 designates only Classes I, II, and III.",
              "es": "Solo existen tres clases: I, II y III.",
            },
          },
        ],
      },
      {
        id: "q-nr20-6",
        order: 6,
        question: {
          "pt-BR": "CENÁRIO 6: Na caracterização de Áreas Classificadas (Zoneamento Ex segundo ABNT NBR IEC 60079-10-1) em um pátio de bombas de transferência de nafta, qual é a definição precisa de Zona 0, Zona 1 e Zona 2 para gases e vapores inflamáveis?",
          "en": "SCENARIO 6: In hazardous area classification (Ex zoning per IEC 60079-10-1) around a naphtha pump manifold, what is the exact technical definition of Zone 0, Zone 1, and Zone 2 for flammable gases/vapors?",
          "es": "ESCENARIO 6: En la clasificación de áreas Ex (IEC 60079-10-1) en un patio de bombas de nafta, ¿cuál es la definición precisa de Zona 0, Zona 1 y Zona 2 para gases y vapores?",
        },
        options: [
          {
            id: "opt-nr20-6-a",
            text: {
              "pt-BR": "Zona 0 é a recepção da fábrica; Zona 1 é o refeitório; e Zona 2 é o estacionamento externo de veículos leves.",
              "en": "Zone 0 is reception; Zone 1 is cafeteria; Zone 2 is external parking.",
              "es": "Zona 0 recepción; Zona 1 comedor; Zona 2 estacionamiento.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Áreas classificadas definem a probabilidade estatística de presença de mistura explosiva na atmosfera industrial.",
              "en": "Incorrect. Ex zones define the statistical probability and duration of explosive vapor atmospheres.",
              "es": "Incorrecto. Zonas Ex delimitan la probabilidad de presencia de atmósferas explosivas.",
            },
          },
          {
            id: "opt-nr20-6-b",
            text: {
              "pt-BR": "Zona 0: atmosfera explosiva presente contínua ou frequentemente por longos períodos (ex: interior de tanques de armazenamento e tubulações); Zona 1: atmosfera explosiva provável de ocorrer em operação normal (ex: bocais de amostragem, respiros, selos de bombas); Zona 2: atmosfera explosiva improvável em operação normal e, se ocorrer, persiste apenas por curto período (ex: vazamentos acidentais em flanges e juntas).",
              "en": "Zone 0: explosive atmosphere present continuously or for long periods (inside tanks/vessels); Zone 1: explosive atmosphere likely to occur in normal operation (sampling ports, vents, pump seals); Zone 2: explosive atmosphere not likely in normal operation and, if it occurs, persists only for a short period (flange leaks, valve packing failure).",
              "es": "Zona 0: atmósfera explosiva continua o por largos períodos (interior de tanques); Zona 1: probable en operación normal (venteos, sellos de bombas, muestreo); Zona 2: no probable en operación normal y, si ocurre, dura poco tiempo (fugas en bridas).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Esta é a classificação internacional IEC e brasileira: Zona 0 (> 1000 h/ano), Zona 1 (10 a 1000 h/ano) e Zona 2 (< 10 h/ano). Determina a certificação Ex exigida para equipamentos elétricos.",
              "en": "Correct! Standard IEC definitions: Zone 0 (>1000 hrs/yr), Zone 1 (10-1000 hrs/yr), Zone 2 (<10 hrs/yr), dictating Ex electrical certifications.",
              "es": "¡Correcto! Clasificación normativa canónica según frecuencia y duración de la atmósfera inflamable.",
            },
          },
          {
            id: "opt-nr20-6-c",
            text: {
              "pt-BR": "Zona 0 só existe em submarinos nucleares; Zona 1 só existe em plataformas de petróleo no mar aberto; e Zona 2 só existe em aviões a jato.",
              "en": "Zone 0 is nuclear submarines; Zone 1 is offshore rigs; Zone 2 is jet planes.",
              "es": "Zona 0 solo en submarinos; Zona 1 en plataformas offshore; Zona 2 en aviones.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A classificação aplica-se a qualquer instalação industrial terrestre ou marítima que manipule produtos inflamáveis.",
              "en": "Ex classification applies universally across all chemical, fuel, and industrial processing sites.",
              "es": "Aplica a cualquier industria con manipulación de inflamables.",
            },
          },
          {
            id: "opt-nr20-6-d",
            text: {
              "pt-BR": "Qualquer área onde um operador fume cigarro torna-se Zona 0 temporária por 24 horas.",
              "en": "Any area where an operator smokes becomes temporary Zone 0 for 24 hours.",
              "es": "Cualquier área donde se fume se vuelve Zona 0.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Fumar em instalações com inflamáveis é infração gravíssima e fonte proibida de ignição, não definindo o zoneamento Ex.",
              "en": "Smoking is an intolerable ignition source violation, completely unrelated to Ex zoning methodology.",
              "es": "Fumar es una violación de seguridad y fuente de ignición prohibida.",
            },
          },
        ],
      },
      {
        id: "q-nr20-7",
        order: 7,
        question: {
          "pt-BR": "CENÁRIO 7: No Gerenciamento de Mudanças (MOC - Management of Change) previsto no item 20.12 da NR-20, qual é o protocolo mandatório de segurança de processo que deve ser cumprido antes de alterar a especificação de uma válvula de bloqueio ou mudar o solvente de limpeza de uma linha de produção?",
          "en": "SCENARIO 7: In Management of Change (MOC) under NR-20 item 20.12, what mandatory process safety protocol must be executed prior to altering a block valve specification or swapping cleaning solvents on a process line?",
          "es": "ESCENARIO 7: En la Gestión de Cambios (MOC) según la NR-20, ¿cuál es el protocolo obligatorio antes de cambiar la especificación de una válvula o sustituir un solvente de limpieza?",
        },
        options: [
          {
            id: "opt-nr20-7-a",
            text: {
              "pt-BR": "O operador de campo pode trocar a válvula por qualquer peça encontrada na sucata da oficina sem avisar ninguém e sem registro.",
              "en": "Field operators may swap the valve with any scrapped part found in the shop without informing anyone.",
              "es": "El operador puede cambiar la válvula por cualquier repuesto de desguace sin registrar nada.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Mudanças não analisadas são a causa raiz de desastres petroquímicos históricos como Flixborough e Texas City.",
              "en": "Unreviewed changes are the documented root cause of historic disasters such as Flixborough and Texas City.",
              "es": "Cambios sin análisis de seguridad causan catástrofes históricas en la industria.",
            },
          },
          {
            id: "opt-nr20-7-b",
            text: {
              "pt-BR": "Procedimento formal de MOC: 1) Justificativa técnica e descrição detalhada da alteração; 2) Análise prévia de riscos (APR/HAZOP) dos impactos na segurança e integridade mecânica; 3) Revisão de procedimentos operacionais e diagramas P&ID; 4) Treinamento dos operadores envolvidos; 5) Aprovação formal por profissional habilitado antes da implantação.",
              "en": "Formal MOC protocol: 1) Technical justification and scope definition; 2) Pre-implementation hazard analysis (PHA/HAZOP) evaluating safety and metallurgic impacts; 3) Updating P&IDs and operational SOPs; 4) Training affected personnel; 5) Written authorization by qualified engineer prior to commissioning.",
              "es": "Protocolo formal MOC: 1) Justificación técnica; 2) Análisis previo de riesgos (APR/HAZOP) sobre seguridad e integridad; 3) Actualización de P&IDs y procedimientos; 4) Capacitación de operadores; 5) Aprobación formal por profesional habilitado antes de operar.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O MOC garante que qualquer alteração de processo, produto químico, tubulação ou equipamento seja avaliada tecnicamente antes de entrar em operação.",
              "en": "Correct! MOC ensures that any change to equipment, chemistry, or operating envelopes is formally vetted before introduction.",
              "es": "¡Correcto! El Gerenciamiento de Cambios previene fallas imprevistas por alteraciones no planificadas.",
            },
          },
          {
            id: "opt-nr20-7-c",
            text: {
              "pt-BR": "Basta enviar uma mensagem de texto informal no grupo de WhatsApp da turma do turno para avisar que a válvula foi trocada.",
              "en": "Simply texting an informal WhatsApp message to shift mates is sufficient.",
              "es": "Basta con mandar un mensaje de WhatsApp al grupo del turno.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Mensagens informais não constituem gestão de segurança de processos auditável exigida pela NR-20.",
              "en": "Informal text messages fail mandatory regulatory process safety auditability requirements.",
              "es": "No cumple los requisitos de trazabilidad y análisis exigidos por la norma.",
            },
          },
          {
            id: "opt-nr20-7-d",
            text: {
              "pt-BR": "A NR-20 proíbe qualquer substituição de peças em plantas industriais sob pena de fechamento definitivo da fábrica.",
              "en": "NR-20 bans all replacement parts in industrial plants under penalty of permanent closure.",
              "es": "La NR-20 prohíbe cambiar piezas bajo pena de clausura.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Peças de reposição idênticas (Replacement in Kind) são rotineiras; mudanças fora de especificação exigem processo formal de MOC.",
              "en": "Replacements in kind are routine maintenance; non-identical changes require formal MOC evaluation.",
              "es": "Los reemplazos idénticos son rutina; los cambios de especificación requieren MOC.",
            },
          },
        ],
      },
      {
        id: "q-nr20-8",
        order: 8,
        question: {
          "pt-BR": "CENÁRIO 8: Em relação ao combate a incêndio em poças de líquidos inflamáveis (como etanol, gasolina ou solventes aromáticos), por que a aplicação direta de jato pleno de ÁGUA é terminantemente PROIBIDA e qual é o agente extintor de engenharia correto?",
          "en": "SCENARIO 8: Regarding firefighting on flammable liquid pool fires (ethanol, gasoline, aromatic solvents), why is direct solid-stream WATER application strictly FORBIDDEN and what is the engineered extinguishing agent?",
          "es": "ESCENARIO 8: En incendios de charco de líquidos inflamables, ¿por qué está PROHIBIDO aplicar chorro directo de AGUA y cuál es el agente extintor adecuado?",
        },
        options: [
          {
            id: "opt-nr20-8-a",
            text: {
              "pt-BR": "A água tem densidade maior que a maioria dos combustíveis (hidrocarbonetos flutuam sobre a água); aplicar jato pleno de água causa respingos violentos, transbordamento do dique de contenção e espalhamento da poça em chamas para áreas vizinhas (efeito 'slopover/boilover'); o combate correto exige ESPUMA MECÂNICA (AFFF / AR-AFFF resistente a solventes polares) aplicada suavemente para formar manta abafadora contínua que isola o vapor do oxigênio.",
              "en": "Water is denser than most liquid hydrocarbons, which float on top; direct solid water jet causes severe splashing, overflows containment dikes, and spreads burning pools to adjacent units; the engineered response requires MECHANICAL FOAM (AFFF / Alcohol-Resistant AR-AFFF) gently blanketed across the liquid surface to smother vapors and isolate atmospheric oxygen.",
              "es": "El agua es más densa que los hidrocarburos (que flotan sobre ella); aplicar chorro pleno salpica, desborda los diques y propaga el incendio a áreas vecinas; se debe aplicar ESPUMA MECÁNICA (AFFF o AR-AFFF para solventes polares) que forma una capa selladora que sofoca los vapores.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Água direta em líquidos inflamáveis espalha o fogo. Apenas espumas formadoras de filme aquoso (AFFF) ou resistentes a álcool (AR-AFFF) extinguem poças de combustíveis.",
              "en": "Correct! Direct water streams cause burning fuel splashing and dike breach. Mechanical foam blankets smother the fuel by cutting off oxygen and cooling liquid surfaces.",
              "es": "¡Correcto! La espuma sella la superficie e impide la liberación de vapores comburentes.",
            },
          },
          {
            id: "opt-nr20-8-b",
            text: {
              "pt-BR": "A água apaga o fogo de gasolina instantaneamente e deve ser jogada com a maior pressão possível bem no fundo da poça.",
              "en": "Water extinguishes gasoline fires instantly and should be blasted at peak pressure into the pool bottom.",
              "es": "El agua apaga la gasolina al instante y debe lanzarse con la máxima presión.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Erro clássico e fatal que projeta combustível em chamas contra os próprios brigadistas.",
              "en": "Catastrophic error ejecting burning liquid violently toward responding firefighters.",
              "es": "Error fatal que salpica fuego sobre los bomberos.",
            },
          },
          {
            id: "opt-nr20-8-c",
            text: {
              "pt-BR": "A água não pode ser usada porque quebra o piso de concreto com seu peso mecânico.",
              "en": "Water cannot be used because its weight cracks industrial concrete floors.",
              "es": "El agua no se usa porque fractura el suelo con su peso.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A restrição é puramente química e termodinâmica de densidade e imiscibilidade de fluidos.",
              "en": "Incorrect. The hazard is thermodynamic fuel immiscibility and boilover, not slab weight.",
              "es": "La limitación proviene de la densidad e inmiscibilidad del combustible.",
            },
          },
          {
            id: "opt-nr20-8-d",
            text: {
              "pt-BR": "O único método aprovado pela NR-20 é cobrir o fogo com cobertores de algodão comum embebidos em querosene.",
              "en": "The only approved method is tossing cotton blankets soaked in kerosene over the flames.",
              "es": "El único método es tapar las llamas con mantas empapadas en kerosene.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Absurdo. Querosene é combustível e alimentará o incêndio.",
              "en": "Absurd. Kerosene is a combustible fuel that intensifies fires.",
              "es": "El kerosene es un combustible que aviva el fuego.",
            },
          },
        ],
      },
      {
        id: "q-nr20-9",
        order: 9,
        question: {
          "pt-BR": "CENÁRIO 9: O que é e qual é a função obrigatória dos Sistemas de Detecção e Alarme de Gases Tóxicos e Inflamáveis fixos (F&G - Fire & Gas) instalados em plantas industriais Classe II e III segundo a NR-20?",
          "en": "SCENARIO 9: What is the mandatory purpose and function of fixed Fire & Gas (F&G) toxic and combustible gas detection systems deployed in Class II and III facilities per NR-20?",
          "es": "ESCENARIO 9: ¿Cuál es la función obligatoria de los sistemas fijos de Detección de Fuego y Gases (F&G) en plantas Clase II y III según la NR-20?",
        },
        options: [
          {
            id: "opt-nr20-9-a",
            text: {
              "pt-BR": "Servir como iluminação de emergência e tocar músicas ambiente para acalmar a brigada de incêndio.",
              "en": "Serve as emergency lighting and play background music for the brigade.",
              "es": "Servir de iluminación de emergencia y poner música para calmar a los brigadistas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo.",
              "en": "Incorrect and absurd.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "opt-nr20-9-b",
            text: {
              "pt-BR": "Detectores F&G fixos (ópticos, catalíticos ou infravermelhos) monitoram continuamente a concentração de vapores inflamáveis (% LIE) e gases tóxicos em pontos críticos; ao atingirem limites predeterminados (ex: alarme baixo em 10% ou 20% do LIE e alarme alto em 40% ou 50% do LIE), eles acionam automaticamente intertravamentos de segurança de processo (ESD - Emergency Shutdown), isolando válvulas de corte rápido (SDVs), desarmando bombas e ativando dilúvios de água ou ventilação forçada antes da ignição da nuvem.",
              "en": "Fixed F&G detectors (catalytic bead, IR, optical) continuously monitor ambient flammable vapor (% LEL) and toxic gas levels at high-risk points; upon crossing setpoints (e.g. low alarm 10-20% LEL, high alarm 40-50% LEL), they trigger automated Emergency Shutdown (ESD) interlocks, slamming shut emergency shutdown valves (SDVs), tripping transfer pumps, and initiating deluge or emergency ventilation before vapor cloud ignition occurs.",
              "es": "Detectores fijos F&G monitorizan vapores inflamables (% LIE) y gases tóxicos; al alcanzar umbrales (20% LIE bajo / 50% LIE alto), disparan enclavamientos de parada de emergencia (ESD), cerrando válvulas automáticas (SDV), apagando bombas y activando diluvios antes de la ignición.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O sistema F&G é a primeira linha de defesa automatizada de segurança de processos para isolar inventários de combustível antes que encontrem fontes de calor.",
              "en": "Correct! F&G systems are the automated process safety frontline, mitigating releases and isolating inventories before vapor clouds encounter ignition sources.",
              "es": "¡Correcto! Los sistemas F&G y paradas de emergencia ESD son vitales para evitar nubes inflamables descontroladas.",
            },
          },
          {
            id: "opt-nr20-9-c",
            text: {
              "pt-BR": "Detectores fixos devem ser desligados durante o turno de trabalho para não atrapalhar o barulho das máquinas.",
              "en": "Fixed detectors must be shut off during shifts to avoid interfering with machine noise.",
              "es": "Deben apagarse en horario de trabajo para no molestar.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Desativar detectores F&G é falta gravíssima de segurança que deixa a planta cega para vazamentos.",
              "en": "Disabling F&G detectors is gross misconduct leaving plants blind to explosive leaks.",
              "es": "Apagar detectores es una infracción gravísima penada por ley.",
            },
          },
          {
            id: "opt-nr20-9-d",
            text: {
              "pt-BR": "Detectores F&G só são necessários se a fábrica estiver localizada a menos de 50 metros da praia.",
              "en": "F&G systems are only required within 50 meters of ocean coastlines.",
              "es": "Solo se exigen a menos de 50 metros de la costa marina.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Sistemas F&G são requisitos de segurança de processo independentes de localização costeira.",
              "en": "F&G systems are strictly mandated by chemical inventory and process risk criteria.",
              "es": "Requisito normativo basado en el inventario químico de la planta.",
            },
          },
        ],
      },
      {
        id: "q-nr20-10",
        order: 10,
        question: {
          "pt-BR": "CENÁRIO 10: Em relação ao escopo de certificação e conformidade sob a NR-20 (Anexo II - Capacitação) e o AGENTS.md da RSS3 Treinamentos, qual é a validade e a limitação estrita da aprovação neste módulo de curso online de NR-20?",
          "en": "SCENARIO 10: Regarding certification scope and compliance under NR-20 (Annex II - Training) and AGENTS.md guidelines, what is the legal validity and strict operational boundary of passing this online NR-20 course module?",
          "es": "ESCENARIO 10: Respecto al alcance de certificación según la NR-20 y el AGENTS.md, ¿cuál es la validez legal y el límite estricto de este módulo online de NR-20?",
        },
        options: [
          {
            id: "opt-nr20-10-a",
            text: {
              "pt-BR": "A conclusão do curso online autoriza o trabalhador a assinar plantas de refinaria e comandar a brigada de emergência sem nenhum treino prático.",
              "en": "Online approval authorizes signing refinery blueprints and leading fire brigades with zero drills.",
              "es": "La conclusión online autoriza a comandar la brigada de emergencia sin práctica.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto, ilegal e perigoso.",
              "en": "Incorrect and dangerous.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "opt-nr20-10-b",
            text: {
              "pt-BR": "O certificado emitido comprova exclusivamente a Conclusão do Conteúdo Teórico de NR-20. Conforme a NR-20 e o AGENTS.md (Seção 3), a habilitação para adentrar áreas classificadas e operar instalações industriais de Classe I, II ou III exige obrigatoriamente: 1) ASO de saúde ocupacional vigente com aptidão específica; 2) Módulo de treinamento prático presencial com exercícios de combate a incêndio e simulação de resposta a emergências com produtos químicos; 3) Autorização formal emitida pelo empregador.",
              "en": "The resulting certificate validates strictly Theoretical Completion of NR-20. Per NR-20 Annex II and AGENTS.md Section 3, operational clearance in Class I/II/III classified process areas mandates: 1) Valid occupational medical clearance (ASO); 2) In-person hands-on practical fire-fighting and chemical emergency drills; 3) Formal employer written authorization.",
              "es": "El certificado acredita únicamente Conclusión de Contenido Teórico de la NR-20. La habilitación para operar en plantas Clase I, II o III exige: 1) Examen médico ASO vigente con aptitud; 2) Módulo práctico presencial de extinción de fuego y emergencias químicas; 3) Autorización formal del empleador.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O AGENTS.md proíbe que qualquer conclusão de curso EAD confira habilitação prática ou formal para atividades regulamentadas de alto risco sem o treinamento presencial e validação médica ocupacional.",
              "en": "Correct! Per permanent AGENTS.md Section 3 compliance rules, theoretical e-learning never qualifies personnel for physical high-hazard chemical operations without in-person drills.",
              "es": "¡Correcto! La doble capa de seguridad y la NR-20 exigen práctica presencial evaluada para operar con inflamables.",
            },
          },
          {
            id: "opt-nr20-10-c",
            text: {
              "pt-BR": "A NR-20 não exige nenhum tipo de treinamento prático de combate a incêndio.",
              "en": "NR-20 requires zero hands-on firefighting drills.",
              "es": "La NR-20 no requiere entrenamiento práctico de incendios.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A prática de combate a princípios de incêndio e emergência é requisito obrigatório na NR-20.",
              "en": "Incorrect. Practical firefighting exercises are mandatory in NR-20 syllabus.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "opt-nr20-10-d",
            text: {
              "pt-BR": "A validação digital emite licença de operador de refinaria válida por 20 anos em qualquer país da América Latina.",
              "en": "Digital validation issues a 20-year refinery license across all Latin America.",
              "es": "La validación digital otorga licencia por 20 años en Latinoamérica.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Reciclagem e revalidação de NR-20 são periódicas (de 1 a 3 anos dependendo da classe) e exigem componente prático.",
              "en": "NR-20 refreshers are periodic (1-3 years by class) requiring practical recertification.",
              "es": "La recertificación es periódica con práctica presencial obligatoria.",
            },
          },
        ],
      },
    ],
  },
};
