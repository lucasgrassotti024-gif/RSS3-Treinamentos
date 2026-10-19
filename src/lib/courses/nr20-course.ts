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
    estimatedMinutes: 25,
    questionsCount: 5,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação teórica com 5 questões abrangendo conceitos de ponto de fulgor, LIE/LSE, aterramento antiestático, permissão para trabalho a quente e resposta a emergências sob a NR-20. Exige 70% de acerto para aprovação teórica.",
      "en": "Theoretical assessment covering flash points, LEL/UEL, static bonding, hot work permits, and emergency response under NR-20. Requires 70% passing score.",
      "es": "Evaluación teórica sobre puntos de inflamación, LIE/LSE, control de estática, permisos de trabajo en caliente y emergencias. Aprobación mínima 70%.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência Teórica — NR-20",
      "en": "Final Theoretical Competency Assessment — NR-20",
      "es": "Evaluación Final de Competencias Teóricas — NR-20",
    },
    description: {
      "pt-BR": "Validação de conhecimentos em segurança e saúde no trabalho com inflamáveis e combustíveis segundo a NR-20 atualizada.",
      "en": "Validation of core competency in flammable and combustible liquid safety according to NR-20 regulations.",
      "es": "Validación de competencias técnicas en seguridad con inflamables según la norma NR-20.",
    },
    questions: [
      {
        id: "q-nr20-1",
        order: 1,
        question: {
          "pt-BR": "1. Conforme a NR-20, qual é a definição técnica de Líquido Inflamável e o que caracteriza o Ponto de Fulgor (Flash Point)?",
          "en": "1. According to NR-20, what is the definition of a Flammable Liquid and what characterizes the Flash Point?",
          "es": "1. Conforme a la NR-20, ¿cuál es la definición de Líquido Inflamable y qué caracteriza al Punto de Inflamación?",
        },
        options: [
          {
            id: "nr20-q1-a",
            text: {
              "pt-BR": "Líquido inflamável possui ponto de fulgor ≤ 60 ºC. Ponto de fulgor é a menor temperatura na qual o líquido emite vapores em quantidade suficiente para inflamar com chama externa, sem manter a queima",
              "en": "Flammable liquid has flash point ≤ 60 ºC. Flash point is lowest temperature generating enough vapors to flash momentarily upon external ignition, without sustaining fire",
              "es": "Líquido inflamable tiene punto de inflamación ≤ 60 ºC. Es la temperatura mínima en que libera vapores suficientes para inflamarse momentáneamente con una chispa",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A NR-20 estabelece que líquidos com ponto de fulgor ≤ 60 ºC são classificados como inflamáveis, sendo o ponto de fulgor o menor limiar térmico para emissão momentânea de vapores combustíveis.",
              "en": "Correct! NR-20 defines flammable liquids by flash point ≤ 60 ºC.",
              "es": "¡Correcto! Definición normativa de la NR-20 para líquidos inflamables y punto de fulgor.",
            },
          },
          {
            id: "nr20-q1-b",
            text: {
              "pt-BR": "Líquido inflamável é apenas aquele que queima espontaneamente na geladeira a 0 ºC",
              "en": "Flammable liquid is only one that burns at 0 ºC inside a refrigerator",
              "es": "Líquido inflamable es solo aquel que arde en el congelador a 0 ºC",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "nr20-q1-c",
            text: {
              "pt-BR": "Qualquer água misturada com sabão que esteja a mais de 100 ºC",
              "en": "Any soapy water above 100 ºC",
              "es": "Cualquier agua con jabón a más de 100 ºC",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Água não é líquido combustível nem inflamável.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-nr20-2",
        order: 2,
        question: {
          "pt-BR": "2. No contexto de atmosferas explosivas e medições com explosímetro, o que representam o LIE (Limite Inferior de Explosividade) e o LSE (Limite Superior de Explosividade)?",
          "en": "2. In explosive atmospheres, what do LEL (Lower Explosive Limit) and UEL (Upper Explosive Limit) represent?",
          "es": "2. En atmósferas explosivas, ¿qué representan el LIE y el LSE?",
        },
        options: [
          {
            id: "nr20-q2-a",
            text: {
              "pt-BR": "LIE é a concentração mínima de vapor no ar abaixo da qual a mistura é pobre demais para queimar; LSE é a concentração máxima acima da qual a mistura é rica demais por falta de oxigênio",
              "en": "LEL is the minimum concentration below which the mixture is too lean to burn; UEL is maximum concentration above which it is too rich in fuel lacking oxygen",
              "es": "LIE es la concentración mínima por debajo de la cual la mezcla es muy pobre; LSE es la concentración máxima por encima de la cual es demasiado rica",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Entre o LIE e o LSE situa-se a faixa de inflamabilidade onde qualquer centelha ou calor excessivo provocará ignição violenta ou explosão.",
              "en": "Correct! Between LEL and UEL lies the explosive range where ignition leads to deflagration.",
              "es": "¡Correcto! La franja entre LIE y LSE es la zona donde ocurre la explosión o fuego repentino.",
            },
          },
          {
            id: "nr20-q2-b",
            text: {
              "pt-BR": "São limites de velocidade para empilhadeiras em pátios industriais externos",
              "en": "Speed limits for forklifts in outside yards",
              "es": "Límites de velocidad para autoelevadores",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "nr20-q2-c",
            text: {
              "pt-BR": "Representam a quantidade máxima de funcionários permitidos em um escritório",
              "en": "Maximum employees allowed in an office room",
              "es": "Cantidad máxima de personas en una oficina",
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
        id: "q-nr20-3",
        order: 3,
        question: {
          "pt-BR": "3. Por que o aterramento e a equalização eletrostática de potencial são MANDATÓRIOS durante o descarregamento de líquidos inflamáveis ou transvase entre tanques?",
          "en": "3. Why are electrostatic bonding and grounding MANDATORY during flammable liquid transfer between vessels?",
          "es": "3. ¿Por qué es OBLIGATORIA la puesta a tierra y equipotencialización durante el trasvase de inflamables?",
        },
        options: [
          {
            id: "nr20-q3-a",
            text: {
              "pt-BR": "Para dissipar com segurança as cargas eletrostáticas acumuladas pelo atrito do fluxo de líquido, impedindo a ocorrência de centelha no bocal em atmosfera inflamável",
              "en": "To safely dissipate static electricity generated by liquid fluid friction, preventing sparks in flammable vapor zones",
              "es": "Para disipar de forma segura la electricidad estática acumulada por fricción del flujo, evitando chispas en presencia de vapores",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O fluxo turbulento gera eletricidade estática por atrito. Sem equalização e aterramento, a diferença de potencial descarrega em forma de centelha elétrica, causando explosões instantâneas.",
              "en": "Correct! Static build-up discharged as a spark is a leading cause of tanker transfer fires.",
              "es": "¡Correcto! Evita la formación de arcos o chispas por descargas electrostáticas.",
            },
          },
          {
            id: "nr20-q3-b",
            text: {
              "pt-BR": "Apenas para evitar que a mangueira suje o chão com poeira da rua",
              "en": "Just to prevent hoses getting dusty from the ground",
              "es": "Para evitar que la manguera se ensucie en el suelo",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "nr20-q3-c",
            text: {
              "pt-BR": "Para aumentar a temperatura do combustível e acelerar a evaporação para o ambiente",
              "en": "To heat up the fuel and speed evaporation",
              "es": "Para calentar el combustible y evaporarlo más rápido",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e perigoso.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-nr20-4",
        order: 4,
        question: {
          "pt-BR": "4. Antes da realização de qualquer trabalho a quente (solda, maçarico, esmerilhamento) em áreas próximas a inflamáveis ou sobre linhas de tubulação, qual procedimento é INDISPENSÁVEL?",
          "en": "4. Before executing hot work (welding, cutting, grinding) near flammables or piping, which procedure is MANDATORY?",
          "es": "4. Antes de realizar trabajos en caliente cerca de inflamables, ¿qué procedimiento es INDISPENSABLE?",
        },
        options: [
          {
            id: "nr20-q4-a",
            text: {
              "pt-BR": "Emissão de Permissão para Trabalho (PT), isolamento de fontes, purga/lavagem de tubulações, teste de atmosfera com explosímetro acusando 0% LIE e presença contínua de vigia de fogo",
              "en": "Issuing Hot Work Permit (PT), isolating lines, purging with inert gas, explosimeter test confirming 0% LEL, and dedicated fire watch",
              "es": "Emisión de Permiso de Trabajo (PT), aislamiento, purga con gas inerte, medición con explosímetro marcando 0% LIE y vigía de fuego",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Trabalho a quente em áreas com inflamáveis exige planejamento detalhado, PT formal, garantia de atmosfera 0% de gases inflamáveis e vigia capacitado com extintor pronto.",
              "en": "Correct! Hot work requires formal permit authorization, line purging, zero LEL verification, and active fire watch.",
              "es": "¡Correcto! Es el procedimiento seguro estricto exigido por la NR-20 para trabajos en caliente.",
            },
          },
          {
            id: "nr20-q4-b",
            text: {
              "pt-BR": "Basta ligar o maçarico o mais rápido possível antes que alguém perceba o cheiro de combustível",
              "en": "Just striking the torch fast before someone smells fuel",
              "es": "Encender el soplete rápido antes de que se sienta olor a gas",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e criminoso.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "nr20-q4-c",
            text: {
              "pt-BR": "Borrifar perfume no ar para disfarçar o odor de solvente",
              "en": "Spraying perfume to mask solvent smells",
              "es": "Echar perfume para tapar el olor",
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
        id: "q-nr20-5",
        order: 5,
        question: {
          "pt-BR": "5. O que determina o processo formal de Gestão de Mudanças (MOC — Management of Change) previsto na NR-20?",
          "en": "5. What does the Management of Change (MOC) process mandate under NR-20?",
          "es": "5. ¿Qué establece el procedimiento de Gestión del Cambio (MOC) en la NR-20?",
        },
        options: [
          {
            id: "nr20-q5-a",
            text: {
              "pt-BR": "Toda alteração de projeto, processo, insumo químico, tubulação ou equipamento crítico deve passar por prévia análise multidisciplinar de riscos, documentação atualizada e treinamento antes da implementação",
              "en": "Any modification to plant design, chemical inputs, piping, or critical hardware requires prior multidisciplinary risk review, updated drawings, and retraining before commissioning",
              "es": "Cualquier modificación técnica, operativa o de sustancias debe ser analizada previamente con evaluación de riesgos y capacitación antes de ejecutarse",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Mudanças não planejadas ou improvisadas em instalações com inflamáveis são historicamente as maiores causas de explosões e tragédias industriais. A Gestão de Mudanças garante rigor prévio.",
              "en": "Correct! Uncontrolled changes in chemical facilities historically cause major disasters. MOC ensures systematic hazard evaluation prior to changes.",
              "es": "¡Correcto! El proceso de MOC garantiza que ningún cambio imprevisto introduzca riesgos no controlados a la planta.",
            },
          },
          {
            id: "nr20-q5-b",
            text: {
              "pt-BR": "Qualquer funcionário pode trocar tubulações ou alterar pressões de tanques a qualquer momento sem avisar ninguém",
              "en": "Any worker can change pipe runs or modify vessel pressures at will without notification",
              "es": "Cualquier persona puede modificar cañerías sin informar a la supervisión",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e expressamente proibido.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "nr20-q5-c",
            text: {
              "pt-BR": "Diz respeito apenas à troca de uniformes e cores das paredes das salas de reunião",
              "en": "Only refers to changing uniform colors or painting meeting room walls",
              "es": "Se refiere únicamente al cambio de color de las paredes",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Refere-se à segurança de processos e integridade das instalações de inflamáveis.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
    ],
  },
};
