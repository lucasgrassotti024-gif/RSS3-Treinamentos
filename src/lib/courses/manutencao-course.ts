import { CourseDemonstration } from "@/types";

export const manutencaoIndustrialCourseData: CourseDemonstration = {
  id: "c-manutencao-industrial-completo",
  slug: "manutencao-industrial-corretiva-preventiva-preditiva",
  title: {
    "pt-BR": "Manutenção Industrial: Gestão Corretiva, Preventiva e Preditiva",
    "en": "Industrial Maintenance: Corrective, Preventive & Predictive Management",
    "es": "Mantenimiento Industrial: Gestión Correctiva, Preventiva y Predictiva",
  },
  description: {
    "pt-BR": "Fundamentos e práticas de manutenção mecânica e operacional: conceitos de confiabilidade, falhas, ciclo de manutenção corretiva (planejada e emergencial), planos preventivos sistemáticos e tecnologias preditivas.",
    "en": "Fundamentals and best practices of industrial maintenance: reliability concepts, failure analysis, corrective maintenance workflows, preventive schedules, and predictive technologies.",
    "es": "Fundamentos y prácticas de mantenimiento industrial: confiabilidad, análisis de fallas, mantenimiento correctivo, planes preventivos y técnicas predictivas.",
  },
  longDescription: {
    "pt-BR": "O curso de Manutenção Industrial da RSS3 Treinamentos foi concebido para capacitar mecânicos industriais, eletromecânicos, técnicos de manutenção, lubrificadores, operadores de hidrojateamento e encarregados de canteiro na excelência técnica da confiabilidade de ativos. O treinamento aborda desde os princípios históricos e objetivos da manutenção moderna, passando pelo diagnóstico de causas-raiz de paradas e falhas mecânicas, procedimentos para execução segura de intervenções corretivas (LOTO, bloqueio de energias e contenção), até a estruturação de cronogramas preventivos baseados no tempo e monitoramento preditivo (termografia, análise de vibrações e análise de óleo) em plantas pesadas como papel e celulose.",
    "en": "The RSS3 Industrial Maintenance training equips craft mechanics, electromechanical technicians, maintenance planners, and field operators with asset reliability and integrity expertise. Covers failure root-cause analysis, safe corrective intervention protocols (LOTO and energy isolation), systematic preventive maintenance scheduling, and condition-based predictive monitoring.",
    "es": "Capacitación integral en mantenimiento industrial para mecánicos, técnicos y operadores. Cubre análisis de causa raíz, protocolos de aislamiento seguro (LOTO), cronogramas preventivos y monitoreo predictivo.",
  },
  schoolId: "mecanica-industrial",
  schoolName: {
    "pt-BR": "Manutenção Mecânica e Confiabilidade Industrial",
    "en": "Mechanical Maintenance & Asset Reliability",
    "es": "Mantenimiento Mecánico y Confiabilidad Industrial",
  },
  workloadHours: 30,
  level: "intermediate",
  modality: "online",
  isMandatory: false,
  mandatoryFor: [
    "Mecânico Industrial",
    "Eletromecânico",
    "Ajudante de Manutenção",
    "Operador de Hidrojato",
    "Planejador de Manutenção",
    "Líder de Frente",
  ],
  targetAudience: {
    "pt-BR": "Mecânicos de manutenção, encarregados de parada, operadores industriais, técnicos de lubrificação e profissionais que atuam na conservação de bombas, válvulas, redutores e tubulações.",
    "en": "Maintenance mechanics, shutdown leaders, industrial operators, lube technicians, and craft personnel maintaining pumps, valves, and gearboxes.",
    "es": "Mecánicos de mantenimiento, supervisores de parada, operadores industriales y técnicos de lubricación.",
  },
  prerequisites: {
    "pt-BR": "Conhecimentos básicos de ambiente fabril, componentes mecânicos simples e noções gerais de segurança operacional.",
    "en": "Basic industrial jobsite experience, mechanical component familiarity, and safety awareness.",
    "es": "Conocimientos básicos de planta industrial y nociones generales de seguridad laboral.",
  },
  modulesCount: 4,
  lessonsCount: 7,
  thumbnailGradient: "from-amber-700 via-orange-800 to-slate-950",
  coverImage: "/images/courses/manutencao.jpg",
  categories: ["conhecimento-operacional", "qualidade-processos"],
  badgeCode: "MANUT-IND",
  updatedAtDate: "2026-10-17",
  modules: [
    {
      id: "mod-manut-1",
      order: 1,
      title: {
        "pt-BR": "Módulo 1: Fundamentos da Manutenção Industrial e Evolução da Confiabilidade",
        "en": "Module 1: Fundamentals of Industrial Maintenance & Reliability Evolution",
        "es": "Módulo 1: Fundamentos del Mantenimiento Industrial y Confiabilidad",
      },
      description: {
        "pt-BR": "Conceito de manutenção industrial, objetivos estratégicos (disponibilidade, segurança e redução de custos) e panorama dos pilares de conservação de ativos.",
        "en": "Core maintenance definitions, strategic targets (availability, safety, cost reduction), and asset health management overview.",
        "es": "Concepto de mantenimiento industrial, objetivos estratégicos y pilares de conservación de activos.",
      },
      lessons: [
        {
          id: "les-manut-1-1",
          order: 1,
          title: {
            "pt-BR": "Módulo 1: Introdução à Manutenção Industrial",
            "en": "Module 1: Introduction to Industrial Maintenance",
            "es": "Módulo 1: Introducción al Mantenimiento Industrial",
          },
          durationMinutes: 7,
          contentType: "video",
          videoUrl: "70Y0Su0NhmE",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender a definição de manutenção industrial, o impacto direto da conservação mecânica na segurança dos operadores e a produtividade fabril.",
              "en": "Understand the core definition of industrial maintenance, safety impact, and plant operating efficiency.",
              "es": "Comprender la definición de mantenimiento industrial, el impacto en seguridad y la productividad.",
            },
            summaryPoints: [
              {
                "pt-BR": "Definição de manutenção como o conjunto de ações técnicas e administrativas necessárias para manter ou recolocar um ativo em estado operacional satisfatório.",
                "en": "Maintenance defined as the combination of technical and administrative actions intended to retain or restore equipment to required operational state.",
                "es": "Definición de mantenimiento como conjunto de acciones técnicas para garantizar la operación continua.",
              },
              {
                "pt-BR": "A evolução histórica da manutenção: da simples troca após a quebra até a gestão moderna focada em confiabilidade (RCM).",
                "en": "Historical evolution: from reactive run-to-failure approaches to modern reliability-centered management.",
                "es": "Evolución histórica: desde la rotura imprevista hasta la gestión proactiva centrada en confiabilidad.",
              },
              {
                "pt-BR": "Objetivos primordiais: evitar acidentes de trabalho, maximizar a vida útil de equipamentos e minimizar paradas não programadas.",
                "en": "Primary targets: preventing workplace incidents, maximizing asset lifecycle, and reducing unplanned downtime.",
                "es": "Objetivos principales: prevenir accidentes laborales, maximizar vida útil y minimizar paradas no deseadas.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-manut-2",
      order: 2,
      title: {
        "pt-BR": "Módulo 2: Panorama e Estratégias: Corretiva, Preventiva e Preditiva",
        "en": "Module 2: Maintenance Strategy Overview: Corrective, Preventive & Predictive",
        "es": "Módulo 2: Panorama Estratégico: Correctivo, Preventivo y Predictivo",
      },
      description: {
        "pt-BR": "Diferenciação clara entre os três grandes tipos de manutenção, curvas de falha e critérios técnicos de escolha.",
        "en": "Clear differentiation between the three main maintenance strategies, failure curves, and decision criteria.",
        "es": "Diferenciación técnica entre mantenimiento correctivo, preventivo y predictivo.",
      },
      lessons: [
        {
          id: "les-manut-2-1",
          order: 1,
          title: {
            "pt-BR": "Módulo 2: Introdução à Manutenção Corretiva, Preventiva e Preditiva (Parte 1)",
            "en": "Module 2: Intro to Corrective, Preventive & Predictive Maintenance (Part 1)",
            "es": "Módulo 2: Introducción al Mantenimiento Correctivo, Preventivo y Predictivo (Parte 1)",
          },
          durationMinutes: 6,
          contentType: "video",
          videoUrl: "pONEWwpe0e0",
          contentDetail: {
            objective: {
              "pt-BR": "Identificar as características essenciais de cada modalidade e como elas se complementam na rotina fabril.",
              "en": "Identify the core attributes of each maintenance type and how they coexist in industrial routines.",
              "es": "Identificar características esenciales de cada tipo de mantenimiento en la industria.",
            },
            summaryPoints: [
              {
                "pt-BR": "Manutenção Corretiva: atuação após a ocorrência da falha para restabelecer a função.",
                "en": "Corrective Maintenance: action performed after failure occurs to restore function.",
                "es": "Mantenimiento Correctivo: intervención posterior a la falla funcional.",
              },
              {
                "pt-BR": "Manutenção Preventiva: intervenções planejadas em intervalos pré-determinados (horas de operação ou calendário).",
                "en": "Preventive Maintenance: scheduled maintenance executed at predetermined intervals or runtime hours.",
                "es": "Mantenimiento Preventivo: intervenciones planificadas por tiempo o kilometraje/horas de uso.",
              },
              {
                "pt-BR": "Manutenção Preditiva: acompanhamento do estado real do ativo via monitoramento de parâmetros físicos (vibração, temperatura e ruído).",
                "en": "Predictive Maintenance: condition-based monitoring tracking physical parameters like vibration and temperature.",
                "es": "Mantenimiento Predictivo: inspección continua mediante monitoreo de parámetros de salud del equipo.",
              },
            ],
          },
        },
        {
          id: "les-manut-2-2",
          order: 2,
          title: {
            "pt-BR": "Módulo 2: Introdução à Manutenção Corretiva, Preventiva e Preditiva (Parte 2 — Aprofundamento)",
            "en": "Module 2: Maintenance Typologies Deep Dive (Part 2)",
            "es": "Módulo 2: Tipologías de Mantenimiento (Parte 2 — Profundización)",
          },
          durationMinutes: 4,
          contentType: "video",
          videoUrl: "Guwn7D0cs2g",
          contentDetail: {
            objective: {
              "pt-BR": "Avaliar o custo-benefício e os impactos de cada estratégia no MTBF (Tempo Médio Entre Falhas) e MTTR (Tempo Médio de Reparo).",
              "en": "Assess cost-benefit ratios and impacts on MTBF (Mean Time Between Failures) and MTTR (Mean Time to Repair).",
              "es": "Analizar la relación costo-beneficio y el impacto en indicadores clave MTBF y MTTR.",
            },
            summaryPoints: [
              {
                "pt-BR": "A regra 1-10-100 da manutenção: agir de forma preditiva/preventiva custa até 10 vezes menos do que o reparo de uma quebra catastrófica não programada.",
                "en": "The 1-10-100 maintenance cost rule: proactive intervention costs up to 10x less than catastrophic unscheduled breakdowns.",
                "es": "Regla 1-10-100: intervenir de forma proactiva es drásticamente más económico que reparar paradas no programadas.",
              },
              {
                "pt-BR": "A Curva P-F (Falha Potencial até Falha Funcional) e a janela de oportunidade de detecção antecipada.",
                "en": "The P-F Curve (Potential Failure to Functional Failure) and detection lead-time windows.",
                "es": "La curva P-F y la ventana de detección temprana antes de la rotura catastrófica.",
              },
              {
                "pt-BR": "Integração das ordens de serviço (OS) e registros históricos para alimentação do sistema PCM.",
                "en": "Work order logging and historical maintenance records feeding maintenance planning software.",
                "es": "Apertura y cierre de órdenes de trabajo para alimentar el historial técnico de la planta.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-manut-3",
      order: 3,
      title: {
        "pt-BR": "Módulo 3: Manutenção Corretiva na Prática Industrial",
        "en": "Module 3: Corrective Maintenance in Field Practice",
        "es": "Módulo 3: Mantenimiento Correctivo en la Práctica Industrial",
      },
      description: {
        "pt-BR": "Procedimentos operacionais para intervenção corretiva não planejada e planejada, isolamento seguro de energias perigosas (LOTO) e diagnóstico rápido.",
        "en": "Procedures for planned vs unplanned corrective intervention, hazardous energy isolation (LOTO), and rapid root-cause troubleshooting.",
        "es": "Procedimientos para intervenciones correctivas, bloqueo LOTO y diagnóstico rápido de averías.",
      },
      lessons: [
        {
          id: "les-manut-3-1",
          order: 1,
          title: {
            "pt-BR": "Módulo 3: Manutenção Corretiva — Conceitos e Desafios (Aula 1)",
            "en": "Module 3: Corrective Maintenance — Principles & Challenges (Lesson 1)",
            "es": "Módulo 3: Mantenimiento Correctivo — Conceptos y Desafíos (Clase 1)",
          },
          durationMinutes: 7,
          contentType: "video",
          videoUrl: "MpX7AVDZkhQ",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender a diferença entre Corretiva Planejada (detectada antes do colapso) e Corretiva Emergencial (quebra imediata).",
              "en": "Distinguish between Planned Corrective actions (found before breakdown) and Emergency Corrective repairs.",
              "es": "Diferenciar correctivo planificado de correctivo de emergencia por avería imprevista.",
            },
            summaryPoints: [
              {
                "pt-BR": "Corretiva não planejada: alto risco à segurança da equipe, pressão por retorno rápido e custos elevados de peças e horas extras.",
                "en": "Unplanned corrective: higher occupational safety hazard, extreme pressure for line restart, and premium repair costs.",
                "es": "Correctivo no planificado: mayor riesgo laboral y costos elevados de repuestos urgentes.",
              },
              {
                "pt-BR": "Corretiva planejada: o desgaste é constatado em tempo hábil, permitindo programar a parada e disponibilizar ferramentas e peças antes da desmontagem.",
                "en": "Planned corrective: wear is caught with enough lead time to schedule parts and tools before machine stoppage.",
                "es": "Correctivo planificado: el desgaste se detecta a tiempo, permitiendo programar la parada con repuestos disponibles.",
              },
              {
                "pt-BR": "Protocolos de segurança preliminares: Análise Preliminar de Risco (APR), Permissão de Trabalho (PT) e despressurização.",
                "en": "Crucial safety protocols: Job Safety Analysis, Work Permits, and system depressurization prior to wrench time.",
                "es": "Protocolos obligatorios: Permiso de Trabajo, APR y despresurización de líneas.",
              },
            ],
          },
        },
        {
          id: "les-manut-3-2",
          order: 2,
          title: {
            "pt-BR": "Módulo 3: Manutenção Corretiva — Procedimentos de Execução e Análise de Falhas (Aula 2)",
            "en": "Module 3: Corrective Maintenance — Execution & Failure Analysis (Lesson 2)",
            "es": "Módulo 3: Mantenimiento Correctivo — Ejecución y Análisis de Fallas (Clase 2)",
          },
          durationMinutes: 5,
          contentType: "video",
          videoUrl: "LvqhvQXRFEU",
          contentDetail: {
            objective: {
              "pt-BR": "Executar o roteiro de intervenção corretiva com segurança e realizar análise de causa-raiz para evitar recorrências.",
              "en": "Execute structured corrective interventions safely and conduct root cause failure analysis to prevent recurrence.",
              "es": "Ejecutar intervenciones correctivas seguras y aplicar análisis de causa raíz.",
            },
            summaryPoints: [
              {
                "pt-BR": "Roteiro de intervenção: isolamento das fontes de energia (LOTO), desmontagem ordenada, identificação do componente defeituoso e limpeza da carcaça.",
                "en": "Intervention roadmap: LOTO energy lockout, methodical disassembly, defective part inspection, and housing cleaning.",
                "es": "Ruta de trabajo: bloqueo LOTO, desmontaje ordenado y verificación del componente dañado.",
              },
              {
                "pt-BR": "Uso de ferramentas adequadas: torquímetros para aperto com torque especificado pelo fabricante, sacadores e alinhadores.",
                "en": "Proper tooling: torque wrenches for manufacturer spec, gear pullers, and alignment tools.",
                "es": "Herramientas adecuadas: torquímetro para torque especificado, extractores y alineadores.",
              },
              {
                "pt-BR": "Relatório pós-falha: documentar o modo de falha (desgaste abrasivo, fadiga, cavitação ou falta de lubrificação) para ajuste dos planos preventivos.",
                "en": "Post-repair reporting: documenting failure modes (wear, fatigue, cavitation, lubrication failure) to update PM plans.",
                "es": "Informe técnico: documentar causas (abrasión, fatiga o lubricación deficiente) para evitar reincidencia.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-manut-4",
      order: 4,
      title: {
        "pt-BR": "Módulo 4: Manutenção Preventiva e Sistemática",
        "en": "Module 4: Preventive & Systematic Maintenance",
        "es": "Módulo 4: Mantenimiento Preventivo y Sistemático",
      },
      description: {
        "pt-BR": "Elaboração e execução de planos de manutenção preventiva: rotinas de lubrificação, substituição de filtros, vedações, alinhamentos e testes funcionais.",
        "en": "Formulation and execution of preventive maintenance schedules: lubrication routes, filter replacements, sealings, alignment, and functional testing.",
        "es": "Elaboración y ejecución de planes preventivos: lubricación, recambio de sellos y pruebas funcionales.",
      },
      lessons: [
        {
          id: "les-manut-4-1",
          order: 1,
          title: {
            "pt-BR": "Módulo 4: Manutenção Preventiva — Estruturação e Planos (Aula 1)",
            "en": "Module 4: Preventive Maintenance — Program Structuring (Lesson 1)",
            "es": "Módulo 4: Mantenimiento Preventivo — Estructuración de Planes (Clase 1)",
          },
          durationMinutes: 13,
          contentType: "video",
          videoUrl: "t-lpYiGIZfw",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender como são elaborados os planos de manutenção preventiva sistemática e a importância do cumprimento dos prazos e periodicidades.",
              "en": "Understand how systematic PM plans are created and the vital importance of adhering to inspection frequencies.",
              "es": "Comprender la estructuración de planes preventivos sistemáticos y la disciplina de frecuencias.",
            },
            summaryPoints: [
              {
                "pt-BR": "Periodicidade baseada em tempo (dias, semanas, meses) vs. baseada em uso (horas de operação, ciclos ou vazão).",
                "en": "Calendar-based frequency vs usage-based intervals (runtime hours, cycle counts, tonnage processed).",
                "es": "Frecuencias basadas en tiempo calendario vs horas de marcha y ciclos de operación.",
              },
              {
                "pt-BR": "Checklist de inspeção preventiva: itens visuais, verificação de folgas mecânicas, aperto de parafusos e inspeção de esteiras e mancais.",
                "en": "Preventive inspection checklists: visual cues, mechanical clearance checks, bolt torquing, belts, and bearing health.",
                "es": "Listas de verificación preventiva: holguras, torque de pernos, estado de correas y rodamientos.",
              },
              {
                "pt-BR": "Lubrificação industrial: a graxa e o óleo certos, na quantidade correta e no intervalo exato como principal escudo contra o desgaste.",
                "en": "Industrial lubrication: applying the exact grease and oil spec at the right amount and cadence as the #1 defense against wear.",
                "es": "Lubricación técnica: selección de grasa/aceite exacto y frecuencia como clave para evitar el desgaste prematuro.",
              },
            ],
          },
        },
        {
          id: "les-manut-4-2",
          order: 2,
          title: {
            "pt-BR": "Módulo 4: Manutenção Preventiva — Aplicação e Controle Operacional (Aula 2)",
            "en": "Module 4: Preventive Maintenance — Execution & Control (Lesson 2)",
            "es": "Módulo 4: Mantenimiento Preventivo — Aplicación y Control (Clase 2)",
          },
          durationMinutes: 7,
          contentType: "video",
          videoUrl: "wEPTbbM_-tk",
          contentDetail: {
            objective: {
              "pt-BR": "Consolidar a execução de manutenções preventivas com foco em paradas parciais e totais de planta (turnaround).",
              "en": "Consolidate preventive maintenance workflows during partial and major plant turnarounds.",
              "es": "Consolidar la ejecución de mantenimiento preventivo durante paradas de planta.",
            },
            summaryPoints: [
              {
                "pt-BR": "Planejamento prévio de paradas: levantamento de sobressalentes, kits de vedação (o-rings e gaxetas) e calibração de instrumentos.",
                "en": "Shutdown pre-planning: spare parts staging, seal kits (O-rings and gaskets), and instrument calibration.",
                "es": "Planificación previa de paradas: aprovisionamiento de sellos, rodamientos y calibración.",
              },
              {
                "pt-BR": "Limpeza técnica industrial (hidrojateamento e hidrovácuo) como etapa preparatória obrigatória para inspeção não-destrutiva.",
                "en": "Industrial cleaning (hydroblasting and vacuuming) as mandatory prep for non-destructive inspection.",
                "es": "Limpieza técnica (hidrojet y vacío) como preparación obligatoria para inspección estructural.",
              },
              {
                "pt-BR": "Apontamento e baixa na Ordem de Manutenção: registro de horas gastas, anomalias encontradas e recomendação de ações futuras.",
                "en": "Work order sign-off: logging labor hours, observed anomalies, and recommended future follow-ups.",
                "es": "Cierre de orden de trabajo con registro de anomalías detectadas y horas hombre.",
              },
            ],
          },
        },
      ],
    },
  ],
finalAssessment: {
    id: "exam-manutencao-industrial",
    order: 8,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 50,
    questionsCount: 10,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Estudo de Caso & Avaliação Prática Avançada de Manutenção Mecânica Industrial. Abrange análise tribológica de óleos (código ISO 4406), alinhamento a laser de eixos com compensação térmica, modos de falha em rolamentos de precisão, torqueamento cruzado de flanges e desenergização LOTO com teste de energia zero. Exige 70% de aproveitamento.",
      "en": "Advanced Mechanical Maintenance Case Study & Technical Assessment. Covers oil tribology (ISO 4406 cleanliness), laser shaft alignment with thermal growth, bearing failure modes, star-pattern flange torquing, and 5-step LOTO zero energy verification. 70% passing score.",
      "es": "Estudio de Caso y Evaluación Práctica Avanzada de Mantenimiento Mecánico Industrial. Análisis de aceite (ISO 4406), alineación láser con dilatación térmica, fallas en rodamientos, torqueo cruzado y procedimiento LOTO con prueba de energía cero. 70% mínimo.",
    },
    title: {
      "pt-BR": "Estudo de Caso & Avaliação Prática — Manutenção Mecânica & Confiabilidade",
      "en": "Case Study & Technical Assessment — Mechanical Maintenance & Reliability",
      "es": "Estudio de Caso y Evaluación Práctica — Mantenimiento Mecánico y Confiabilidad",
    },
    description: {
      "pt-BR": "Cenário de Campo na CMPC: Intervenção técnica em conjunto moto-bomba de polpa de alta pressão (1.750 RPM, 250 kW). Diagnóstico de vibração, análise tribológica de lubrificantes, montagem de rolamentos com aquecedor por indução e comissionamento com alinhamento a laser.",
      "en": "Field Scenario at CMPC: Technical overhaul on a 250 kW, 1,750 RPM high-pressure pulp pump skid. Vibration diagnosis, oil tribology, induction bearing mounting, and laser shaft alignment commissioning.",
      "es": "Caso de Campo en CMPC: Mantenimiento integral de grupo moto-bomba de 250 kW. Análisis tribológico, montaje de rodamientos por inducción, alineación láser y bloqueo LOTO.",
    },
    questions: [
      {
        id: "q-manut-1",
        order: 1,
        question: {
          "pt-BR": "CENÁRIO 1: Um laudo laboratorial de análise de óleo lubrificante de um redutor de velocidade de grande porte (óleo ISO VG 320) acusou: Viscosidade a 40°C caiu para 240 cSt; teor de água por Karl Fischer atingiu 1.800 ppm (limite máx: 300 ppm); contagem de partículas ISO 4406 saltou de 17/14/11 para 22/19/16, com presença acentuada de partículas ferrosas de desgaste por corte (cutting wear). Qual é a interpretação físico-química dessa condição e qual é o plano de ação técnico imediato do mecânico de manutenção?",
          "en": "SCENARIO 1: Laboratory oil analysis report for a heavy industrial gearbox (ISO VG 320 oil) reveals: Viscosity at 40°C dropped to 240 cSt; Karl Fischer water reached 1,800 ppm (threshold: 300 ppm); ISO 4406 particle count spiked from 17/14/11 to 22/19/16, with significant ferrous cutting wear particles. What is the tribological diagnosis and the mandatory immediate action plan?",
          "es": "ESCENARIO 1: Análisis de aceite de reductor (ISO VG 320): Viscosidad a 40°C cayó a 240 cSt; agua por Karl Fischer subió a 1.800 ppm (máx 300 ppm); conteo ISO 4406 subió a 22/19/16 con desgaste ferroso por corte. ¿Cuál es el diagnóstico tribológico y el plan de acción inmediato?",
        },
        options: [
          {
            id: "opt-manut-1-a",
            text: {
              "pt-BR": "Diagnóstico: O óleo está normal e a água evapora sozinha com a temperatura de trabalho; basta adicionar 1 litro de querosene para afinar o óleo.",
              "en": "Diagnostic: Normal condition, water evaporates under running temperature; add 1 liter of kerosene to thin the oil.",
              "es": "Diagnóstico: El aceite está en condiciones normales; el agua se evapora sola con la temperatura.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo. Querosene destrói a viscosidade e cria risco de incêndio/explosão no cárter.",
              "en": "Incorrect and disastrous. Kerosene degrades viscosity and creates combustion hazard.",
              "es": "Incorrecto y sumamente peligroso.",
            },
          },
          {
            id: "opt-manut-1-b",
            text: {
              "pt-BR": "Diagnóstico: As partículas ferrosas aumentam a condutividade térmica do óleo, o que ajuda a resfriar o redutor.",
              "en": "Diagnostic: Iron particles increase oil thermal conductivity, cooling the gearbox.",
              "es": "Diagnóstico: Las partículas de hierro ayudan a enfriar el lubricante.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Partículas sólidas atuam como abrasivos microscópicos (lapidação destrutiva) e catalisadores de oxidação.",
              "en": "Incorrect. Solid particulates act as abrasive grinding grit and oxidation catalysts.",
              "es": "Incorrecto. Las partículas sólidas actúan como abrasivo destrozando los cojinetes.",
            },
          },
          {
            id: "opt-manut-1-c",
            text: {
              "pt-BR": "Diagnóstico: Grave contaminação por água e diluição/degradação do filme lubrificante gerando rompimento da camada elasto-hidrodinâmica (EHL) e contato metal-metal abrasivo nas engrenagens. Ação: Parar a máquina, drenar e lavar o cárter (flushing), inspecionar a vedação dos retentores e respiro dessecante, substituir o óleo por lote novo filtrado e inspecionar o contato dos dentes das engrenagens com azul da prússia.",
              "en": "Diagnostic: Severe water ingress and viscosity breakdown collapsing the elastohydrodynamic (EHL) film, driving abrasive metal-to-metal gear flank contact. Action: Shut down unit, drain and flush gearbox sump, inspect oil seals and desiccant breather, fill with fresh pre-filtered lubricant, and inspect gear tooth mesh using Prussian blue.",
              "es": "Diagnóstico: Contaminación crítica de agua y pérdida de película hidrodinámica que provoca contacto metal-metal y desgaste abrasivo. Acción: Parar el reductor, lavar el cárter (flushing), revisar retenes y respiraderos, cargar aceite nuevo filtrado e inspeccionar dientes con azul de Prusia.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Água acima de 1.000 ppm reduz drasticamente a vida útil dos rolamentos e engrenagens (em até 80%), e a contagem de partículas em corte indica que os dentes já estão sofrendo arrancamento e micropicamento. Continuar rodando causaria quebra catastrófica dos dentes.",
              "en": "Correct! Water above 1,000 ppm destroys bearing/gear fatigue life by over 80%; cutting wear indicates active severe surface destruction. Continuing operation risks catastrophic gear fracture.",
              "es": "¡Correcto! El agua degrada drásticamente la vida a fatiga y las partículas por corte evidencian daño superficial severo en progreso.",
            },
          },
          {
            id: "opt-manut-1-d",
            text: {
              "pt-BR": "Diagnóstico: Queda de viscosidade de 320 para 240 cSt é benéfica porque reduz a fricção viscosa, dispensando qualquer manutenção.",
              "en": "Diagnostic: Drop from 320 to 240 cSt is beneficial because it cuts viscous friction, needing zero maintenance.",
              "es": "Diagnóstico: La caída de viscosidad es buena porque reduce fricción.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Perda de mais de 10% da viscosidade nominal é critério de descarte do lubrificante.",
              "en": "Viscosity variation exceeding 10% from nominal baseline requires immediate oil retirement.",
              "es": "Variación de viscosidad >10% exige cambio compulsivo.",
            },
          },
        ],
      },
      {
        id: "q-manut-2",
        order: 2,
        question: {
          "pt-BR": "CENÁRIO 2: Na montagem de um rolamento de rolos autocompensadores (furo cilíndrico de 120 mm) no eixo de uma bomba de alta pressão da RSS3, o mecânico precisa realizar a montagem por interferência térmica. Qual é a prática técnica padronizada pela norma ISO e pelos fabricantes (SKF/FAG) em relação à temperatura de aquecimento e ferramenta?",
          "en": "SCENARIO 2: When installing a spherical roller bearing (120 mm cylindrical bore) onto a high-pressure pump shaft at RSS3, interference thermal mounting is required. What is the standard technical practice (ISO/SKF/FAG) regarding heating temperature and equipment?",
          "es": "ESCENARIO 2: En el montaje con ajuste de interferencia de un rodamiento de rodillos esféricos (agujero de 120 mm) en eje de bomba. ¿Cuál es la práctica estandarizada (ISO/SKF) respecto a temperatura de calentamiento y herramienta?",
        },
        options: [
          {
            id: "opt-manut-2-a",
            text: {
              "pt-BR": "Aquecer o rolamento com maçarico de corte oxicombustível até ficar vermelho-cereja (aproximadamente 800°C) para dilatar o máximo possível.",
              "en": "Heat bearing with an oxy-acetylene torch until bright cherry red (approx 800°C) for maximum expansion.",
              "es": "Calentar el rodamiento con soplete hasta que se ponga rojo cereza (800°C).",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e inaceitável. O maçarico descalibra totalmente as tolerâncias, queima o tratamento térmico e deforma o rolamento, inutilizando-o antes mesmo de entrar em operação.",
              "en": "Incorrect and destructive. Direct torch flame destroys heat treatment, anneals the steel, and causes severe warping.",
              "es": "Incorrecto y destructor. Destruye el tratamiento térmico y deforma el rodamiento.",
            },
          },
          {
            id: "opt-manut-2-b",
            text: {
              "pt-BR": "Bater nas pistas e nos corpos rolantes com uma marreta de ferro de 5 kg diretamente na gaiola de latão.",
              "en": "Drive the bearing onto the shaft with a 5 kg iron sledgehammer hitting the brass cage.",
              "es": "Golpear el rodamiento con una maza de hierro de 5 kg sobre la jaula de latón.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Impactos de marreta causam microfraturas e indentação (falso brinelling) nas pistas dos rolamentos.",
              "en": "Incorrect. Sledgehammer impacts fracture cages and induce destructive true/false brinelling indentations on raceways.",
              "es": "Incorrecto. Provoca fractura de jaula y marcación por falso brinelling en las pistas.",
            },
          },
          {
            id: "opt-manut-2-c",
            text: {
              "pt-BR": "Utilizar Aquecedor por Indução Eletromagnética com controle automático de sonda térmica até atingir exatamente entre 100°C e 110°C (nunca ultrapassar 120°C para não alterar a têmpera/dureza metalúrgica nem danificar vedações), com desmagnetização automática ao final do ciclo.",
              "en": "Use an Induction Bearing Heater with thermocouple feedback to heat precisely between 100°C and 110°C (never exceeding 120°C to preserve steel metallurgical hardness and seal integrity), ensuring automated demagnetization cycle.",
              "es": "Utilizar calentador por inducción electromagnética con sensor térmico entre 100°C y 110°C (máximo 120°C para no alterar el templado del acero ni dañar sellos), con desmagnetización automática final.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O aquecedor por indução garante aquecimento uniforme e limpo. Ultrapassar 120°C causa revenimento do aço (perda de dureza das pistas) e desmagnetizar é vital para impedir que o rolamento atraia partículas metálicas em serviço.",
              "en": "Correct! Induction heating provides clean, uniform thermal expansion. Exceeding 120°C tempers bearing steel, reducing surface hardness; demagnetizing prevents magnetic capture of abrasive debris.",
              "es": "¡Correcto! El calentador por inducción con desmagnetización evita la pérdida de temple y la atracción de virutas metálicas.",
            },
          },
          {
            id: "opt-manut-2-d",
            text: {
              "pt-BR": "Mergulhar o rolamento em balde com água sanitária e sabão em pó a 50°C.",
              "en": "Immerse bearing in bleach and powdered soap at 50°C.",
              "es": "Sumergir el rodamiento en agua con cloro y jabón.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Substâncias corrosivas causam oxidação profunda imediata e não promovem dilatação térmica mecânica.",
              "en": "Corrosive chemicals pit bearing steel instantly without achieving mechanical clearance.",
              "es": "El cloro corroe las pistas de precisión arruinando el rodamiento.",
            },
          },
        ],
      },
      {
        id: "q-manut-3",
        order: 3,
        question: {
          "pt-BR": "CENÁRIO 3: No comissionamento mecânico de uma bomba acoplada a motor elétrico de 1.750 RPM com luva elástica de pinos, o técnico executa o Alinhamento a Laser de precisão. O alinhador acusou: Desalinhamento Angular Vertical de 0,18 mm/100mm e Desalinhamento Paralelo (Offset) Horizontal de 0,22 mm. Sabendo que a tolerância máxima permitida para 1.800 RPM é de 0,05 mm/100mm (angular) e 0,05 mm (paralelo), quais são as consequências de colocar o equipamento para rodar fora dessa tolerância?",
          "en": "SCENARIO 3: During shaft alignment of a 1,750 RPM motor-pump with flexible pin coupling, laser measurement reports: Vertical Angularity of 0.18 mm/100mm and Horizontal Parallel Offset of 0.22 mm. Standard tolerance for 1,800 RPM is ≤ 0.05 mm/100mm (angular) and ≤ 0.05 mm (offset). What are the mechanical consequences of running outside this tolerance?",
          "es": "ESCENARIO 3: Alineación láser de bomba a 1.750 RPM: Desalineación angular vertical de 0,18 mm/100mm y desplazamiento paralelo de 0,22 mm. La tolerancia para 1.800 RPM es ≤ 0,05. ¿Cuáles son las consecuencias de operar fuera de tolerancia?",
        },
        options: [
          {
            id: "opt-manut-3-a",
            text: {
              "pt-BR": "O acoplamento elástico absorve 100% de qualquer desalinhamento sem sofrer desgaste nem transferir esforço aos rolamentos.",
              "en": "Flexible couplings completely absorb any misalignment with zero stress transmitted to bearings.",
              "es": "El acoplamiento flexible absorbe cualquier desalineación sin transmitir esfuerzo a los rodamientos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Ilusão clássica em manutenção: acoplamentos flexíveis toleram desalinhamentos momentâneos, mas transferem forças de reação contínuas aos mancais proporcionais ao desalinhamento.",
              "en": "Incorrect. Classic myth: flexible couplings transmit reaction forces directly into bearings proportional to misalignment magnitude.",
              "es": "Incorrecto. Mito común: el acople flexible transmite fuerzas de reacción continuas a los cojinetes.",
            },
          },
          {
            id: "opt-manut-3-b",
            text: {
              "pt-BR": "Sobrecarga radial e axial cíclica de alta intensidade nos rolamentos (forças dinâmicas que reduzem a vida do rolamento pela regra da 3ª potência L10), geração excessiva de calor e vibração dominante em 2X RPM, destruição precoce dos elastômeros do acoplamento e vazamento rápido no selo mecânico.",
              "en": "High-intensity cyclic radial/axial overloads on bearings (slashing L10 fatigue life by the cubic power rule), excessive heat and dominant 2X RPM vibration peaks, rapid elastomer degradation, and premature mechanical seal face blow-out.",
              "es": "Sobrecarga dinámica cíclica radial y axial en rodamientos (reducción drástica de vida L10), vibración dominante en 2X RPM, destrucción del elastómero del acople y falla prematura del sello mecánico.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Desalinhamentos provocam flexão alternada do eixo a cada revolução, destruindo selos mecânicos e reduzindo a vida dos rolamentos exponencialmente através da equação de carga equivalente P (onde L10 = (C/P)^3 para esferas e (C/P)^(10/3) para rolos).",
              "en": "Correct! Shaft misalignment induces alternating bending moments every revolution, accelerating seal leaks and slashing bearing L10 fatigue life exponentially via equivalent dynamic load equations.",
              "es": "¡Correcto! El desalíneo somete los ejes a esfuerzos de flexión alternada en cada giro, destruyendo sellos y fatigando rodamientos.",
            },
          },
          {
            id: "opt-manut-3-c",
            text: {
              "pt-BR": "O desalinhamento melhora a eficiência energética do motor elétrico ao criar folga de rolagem.",
              "en": "Misalignment improves motor efficiency by creating rolling play.",
              "es": "El desalíneo mejora el rendimiento del motor.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Desalinhamento dissipa energia em forma de calor e atrito, aumentando a corrente elétrica consumida em até 5% a 10%.",
              "en": "Incorrect. Misalignment wastes significant electrical energy as frictional heat.",
              "es": "Incorrecto. Desperdicia energía y eleva el consumo eléctrico.",
            },
          },
          {
            id: "opt-manut-3-d",
            text: {
              "pt-BR": "O desalinhamento é corrigido automaticamente pela força centrífuga após 2 horas de rotação contínua.",
              "en": "Misalignment self-corrects through centrifugal forces after 2 hours of rotation.",
              "es": "Se autocorrige por fuerza centrífuga a las 2 horas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A força centrífuga amplifica as tensões mecânicas geradas pelas massas desalinhadas.",
              "en": "Centrifugal forces amplify dynamic stresses from misaligned shafts.",
              "es": "La fuerza centrífuga agrava la fatiga en ejes desalineados.",
            },
          },
        ],
      },
      {
        id: "q-manut-4",
        order: 4,
        question: {
          "pt-BR": "CENÁRIO 4: Durante a substituição da tubulação flangeada de 8 polegadas (Classe 300 com 12 parafusos estojo ASTM A193 B7) em uma linha de hidrojato na CMPC, qual é a metodologia correta de montagem e aperto para garantir a estanqueidade sem esmagar a junta espiromálica nem empenar os flanges?",
          "en": "SCENARIO 4: When assembling an 8-inch Class 300 flange (12 stud bolts ASTM A193 B7) on a hydroblasting line at CMPC, what is the technically correct bolting methodology to achieve zero leakage without crushing the spiral-wound gasket or warping flange faces?",
          "es": "ESCENARIO 4: Montaje de brida de 8 pulgadas Clase 300 con 12 espárragos ASTM A193 B7 en línea de hidrolavado. ¿Cuál es el método técnico de apriete para evitar fugas y no aplastar la junta espirometálica ni doblar las caras de brida?",
        },
        options: [
          {
            id: "opt-manut-4-a",
            text: {
              "pt-BR": "Apertar cada parafuso no sentido horário, um por um, dando o torque máximo de uma vez só no primeiro parafuso.",
              "en": "Torque each stud bolt sequentially clockwise, applying maximum torque directly to bolt 1 first.",
              "es": "Apretar en sentido horario tornillo por tornillo con torque máximo directo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O aperto circular direto comprime a junta de forma desigual, empena os flanges e cria caminhos de fuga de fluido na direção oposta ao primeiro parafuso.",
              "en": "Incorrect. Clockwise sequential torquing severely warps the flange face and pinches the gasket unevenly, causing high-pressure leaks.",
              "es": "Incorrecto. Deforma la brida y genera fugas inmediatas.",
            },
          },
          {
            id: "opt-manut-4-b",
            text: {
              "pt-BR": "Montar sem nenhuma lubrificação nas roscas e bater com marreta nos parafusos até parar de chiar.",
              "en": "Install without thread lube and hit bolts with a sledgehammer until sound changes.",
              "es": "Instalar en seco y golpear los espárragos con maza.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e fora de conformidade. Roscas a seco perdem mais de 50% do torque em atrito parásito, resultando em sub-tensionamento do estojo.",
              "en": "Incorrect. Dry threads waste over 50% of torque on parasitic friction, resulting in under-tensioned studs and blowout risk.",
              "es": "Incorrecto. La fricción en seco falsea la lectura de torque.",
            },
          },
          {
            id: "opt-manut-4-c",
            text: {
              "pt-BR": "Limpar as faces do flange (sem marcas radiais), lubrificar as roscas e faces das porcas com pasta antiengripante à base de cobre/níquel, e aplicar o torque especificado em padrão cruzado estrela (cruzamento diametral) em etapas progressivas: 30%, 60%, 100% do torque final, seguido de uma volta circular completa de torque a 100% para assentamento homogêneo.",
              "en": "Clean flange faces (check no radial gouges), apply nickel/copper anti-seize paste to threads and nut spot faces, and apply specified torque using a cross-star diametric pattern in progressive increments: 30%, 60%, 100% of final torque, followed by a final rotational 100% pass for uniform seating.",
              "es": "Limpiar caras de brida, lubricar roscas y tuercas con pasta antiengranante de cobre/níquel, y aplicar el torque en patrón de estrella cruzada en etapas: 30%, 60%, 100%, finalizando con un pase circular completo al 100% para asentar la junta.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O aperto em estrela em passes graduais evita que um lado do flange seja esmagado enquanto o lado oposto fica aberto, garantindo compressão paralela uniforme da junta espirotélica.",
              "en": "Correct! Gradual star-pattern torquing prevents flange cocking and uneven gasket crushing, ensuring parallel compression and leak-free joint integrity.",
              "es": "¡Correcto! El patrón en cruz escalonado asegura que la brida descienda paralelamente sin aplastar la junta de forma asimétrica.",
            },
          },
          {
            id: "opt-manut-4-d",
            text: {
              "pt-BR": "Colocar duas juntas espiromálicas sobrepostas para compensar folgas de montagem de tubulação torta.",
              "en": "Stack two spiral-wound gaskets on top of each other to compensate for misaligned piping.",
              "es": "Colocar dos juntas superpuestas para compensar tubos desalineados.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Sobrepor juntas é prática proibida que causa ejeção violenta da junta sob alta pressão hidrostática.",
              "en": "Double gasketing is strictly forbidden, causing gasket blowout under pressure.",
              "es": "Colocar doble junta está prohibido y provoca reventones.",
            },
          },
        ],
      },
      {
        id: "q-manut-5",
        order: 5,
        question: {
          "pt-BR": "CENÁRIO 5: Antes de abrir uma bomba centrífuga de hidrojato na CMPC, a equipe de manutenção mecânica deve executar o procedimento LOTO (Lockout/Tagout). Quais são os 5 passos mandatórios da Desenergização e Teste de Energia Zero para garantir que não haja risco de eletrocussão, rotação intempestiva do rotor ou projeção de jato d'água sob pressão?",
          "en": "SCENARIO 5: Prior to opening a high-pressure slurry pump at CMPC, the mechanical team must execute LOTO (Lockout/Tagout). What are the 5 mandatory steps of Zero Energy Verification to eliminate hazards from electrocution, accidental rotor spinning, or pressurized spray discharge?",
          "es": "ESCENARIO 5: Procedimiento LOTO para abrir una bomba de hidrolavado en CMPC. ¿Cuáles son los 5 pasos obligatorios de Bloqueo y Prueba de Energía Cero para garantizar ausencia total de riesgo eléctrico, mecánico e hidráulico?",
        },
        options: [
          {
            id: "opt-manut-5-a",
            text: {
              "pt-BR": "Apenas colocar uma fita zebrada amarela e preta ao redor do motor e começar a soltar os parafusos rapidamente.",
              "en": "Just set yellow hazard caution tape around the motor and rapidly loosen bolts.",
              "es": "Solo colocar cinta de precaución y empezar a desarmar rápido.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e criminoso. Fita zebrada não bloqueia energias e não impede partidas acidentais por terceiros.",
              "en": "Incorrect. Caution tape offers zero physical isolation.",
              "es": "Incorrecto y mortal. La cinta no impide el accionamiento accidental.",
            },
          },
          {
            id: "opt-manut-5-b",
            text: {
              "pt-BR": "1) Notificar os operadores e paralisar ordenadamente o sistema; 2) Isolar as fontes de energia: desligar disjuntor elétrico e fechar válvulas de sucção/descarga; 3) Bloquear e etiquetar (cadeados pessoais individuais e garras de bloqueio de cada profissional); 4) Dissipar energias residuais acumuladas (despressurizar tubulações pelo dreno, bloquear rotação de gravidade e descarregar capacitores); 5) Teste de Energia Zero: tentar religar a máquina no botão local (Start) para confirmar que não parte, e verificar manômetro em zero.",
              "en": "1) Notify operations and orderly shutdown; 2) Isolate energy sources: open electrical breaker and close suction/discharge valves; 3) Lock and tag (individual personal padlocks and hasps for each worker); 4) Dissipate stored residual energies (bleed line pressure via drain, lock against gravity rotation); 5) Zero Energy Verification: attempt to restart at local pushbutton station and verify zero pressure gauges.",
              "es": "1) Notificar a operaciones y parar el equipo; 2) Aislar fuentes de energía: desconectar interruptor y cerrar válvulas; 3) Bloquear y etiquetar con candados personales individuales; 4) Disipar energías residuales (despresurizar líneas y purgar drenajes); 5) Prueba de Energía Cero: intentar arranque local y comprobar presión en manómetro cero.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O passo 5 (Teste de Energia Zero) é o mais crítico de todos: nunca confie que o disjuntor ou a válvula fecharam perfeitamente sem testar o botão liga/desliga local e sangrar a pressão residual.",
              "en": "Correct! Step 5 (Zero Energy Test) is paramount: never assume isolation was successful without physically attempting local startup and inspecting pressure zeroing.",
              "es": "¡Correcto! La prueba de energía cero (intentar encender el equipo bloqueado y purgar drenajes) es la confirmación vital de seguridad antes de poner las manos.",
            },
          },
          {
            id: "opt-manut-5-c",
            text: {
              "pt-BR": "Pedir para o colega ficar segurando o fio da tomada com a mão até o serviço terminar.",
              "en": "Ask a coworker to hold the power cable by hand until finished.",
              "es": "Pedirle a un compañero que vigile el enchufe con la mano.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e incompatível com qualquer procedimento de segurança industrial.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "opt-manut-5-d",
            text: {
              "pt-BR": "Desligar o disjuntor e deixar a chave do cadeado pendurada no próprio painel para facilitar o religamento.",
              "en": "Open breaker and leave padlock keys hanging on the panel for easy restarting.",
              "es": "Dejar la llave del candado colgada en el tablero.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A chave do cadeado LOTO deve ficar em posse estrita e exclusiva do trabalhador.",
              "en": "Padlock keys must remain in the exclusive possession of the individual mechanic.",
              "es": "La llave del candado es personal e intransferible.",
            },
          },
        ],
      },
      {
        id: "q-manut-6",
        order: 6,
        question: {
          "pt-BR": "CENÁRIO 6: Na manutenção de uma transmissão por correias em V (perfil SPC com 4 correias paralelas) em um exaustor industrial, o mecânico precisa esticar as correias. Qual é o procedimento técnico correto para verificação da deflexão/tensão com tensiômetro e o alinhamento das polias com régua ou laser?",
          "en": "SCENARIO 6: When servicing a V-belt drive (SPC profile with 4 matched belts) on an industrial exhaust fan, the technician must set belt tension. What is the technically correct protocol for verifying deflection force with a tensiometer and checking pulley alignment using a laser or precision straightedge?",
          "es": "ESCENARIO 6: En la transmisión por correas en V (perfil SPC de 4 canales) de un extractor, ¿cuál es el procedimiento técnico para verificar tensión con tensiómetro y alineación de poleas con regla o láser?",
        },
        options: [
          {
            id: "opt-manut-6-a",
            text: {
              "pt-BR": "As correias devem ser esticadas com alavanca de ferro até ficarem duras como cabo de aço, sem necessidade de medir a deflexão.",
              "en": "Belts should be levered with a pry bar until rock-hard like steel cable without measuring deflection.",
              "es": "Deben tensarse con palanca de hierro al máximo sin medir deflexión.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Super-tensionamento sobrecarrega os rolamentos da bomba/motor, provocando quebra prematura de mancais e empenamento de eixos.",
              "en": "Overtensioning overloads motor/pump bearings causing premature fatigue and shaft bending.",
              "es": "El sobretensado sobrecarga cojinetes y deforma ejes.",
            },
          },
          {
            id: "opt-manut-6-b",
            text: {
              "pt-BR": "Verificar a tensão de deflexão com tensiômetro dinamométrico: aplicar força perpendicular no centro do vão (geralmente 16 mm de deflexão para cada 1 metro de vão entre centros, respeitando a força em kgf da tabela do fabricante); instalar jogo de correias casadas (mesmo lote de fabricação para distribuição uniforme de carga); e alinhar as faces das polias por alinhador a laser com tolerância de desvio angular/paralelo inferior a 0,5°.",
              "en": "Verify deflection tension with a spring/digital tensiometer: apply perpendicular force at center span (typically 16 mm deflection per 1 m of center distance, matching manufacturer force tables); install matched belt sets (same manufacturing batch for uniform load distribution); and align pulley faces using laser tools to within < 0.5° angular/offset tolerance.",
              "es": "Verificar tensión con tensiómetro: deflexión en el centro del vano (aprox. 16 mm por metro de distancia entre centros según tabla); instalar juego emparejado del mismo lote; y alinear caras de polea con láser con tolerancia < 0,5°.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Correias frouxas patinam e queimam; correias hiper-tensionadas destroem mancais. Correias avulsas de lotes diferentes não dividem a carga por variações de comprimento.",
              "en": "Correct! Loose belts slip and glaze; overtight belts destroy bearings. Unmatched belts load unevenly due to manufacturing length variances.",
              "es": "¡Correcto! Tensión medida y correas emparejadas garantizan reparto equilibrado de potencia.",
            },
          },
          {
            id: "opt-manut-6-c",
            text: {
              "pt-BR": "Passar cera de vela ou sabão em barra nas canaletas das polias para evitar qualquer atrito com as correias.",
              "en": "Rub candle wax or bar soap inside pulley grooves to eliminate friction with belts.",
              "es": "Poner cera o jabón en las poleas para eliminar fricción.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Transmissões em V dependem do atrito de cunha nas laterais; aplicar sabão causa patinamento total.",
              "en": "V-belt drives rely on wedge friction; applying soap causes catastrophic slip.",
              "es": "Las correas dependen del rozamiento lateral de cuña; poner cera provoca resbalamiento.",
            },
          },
          {
            id: "opt-manut-6-d",
            text: {
              "pt-BR": "Se uma das 4 correias romper, basta trocar apenas a que quebrou e manter as outras 3 gastas rodando.",
              "en": "If 1 of 4 belts snaps, replace only the broken one and keep the 3 worn ones running.",
              "es": "Si se rompe una correa, sustituir solo esa y dejar las otras tres usadas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Correia nova é mais curta e assumirá 90% da carga da máquina, rompendo em poucos dias.",
              "en": "A new belt is shorter than stretched used ones, carrying 90% of the load and snapping in days.",
              "es": "La correa nueva absorberá todo el esfuerzo y se romperá de inmediato.",
            },
          },
        ],
      },
      {
        id: "q-manut-7",
        order: 7,
        question: {
          "pt-BR": "CENÁRIO 7: Em um selo mecânico tipo cartucho duplo balanceado instalado em bomba centrífuga de licor negro de celulose, o mecânico nota aquecimento excessivo das faces de vedação (atingindo 140°C) e vazamento contínuo. Ao inspecionar o Plano de Selagem API (API Plan 53A), qual anomalia operacional explica a falha?",
          "en": "SCENARIO 7: On a balanced dual cartridge mechanical seal installed on a pulp black liquor pump, the mechanic notes excessive seal face overheating (reaching 140°C) and continuous leakage. Auditing the API Piping Plan 53A, what operational defect explains the failure?",
          "es": "ESCENARIO 7: En un sello mecánico doble cartucho en bomba de licor negro, las caras alcanzan 140°C con fuga continua. Al auditar el Plan API 53A, ¿qué anomalía explica el fallo?",
        },
        options: [
          {
            id: "opt-manut-7-a",
            text: {
              "pt-BR": "A pressão do fluido de barreira no reservatório auxiliar do Plan 53A caiu abaixo da pressão da câmara de selagem (pressão de barreira deve ser mantida sempre 1,5 a 2,0 bar ACIMA da pressão do produto bombeado); sem esse diferencial positivo, o licor negro invasor entrou entre as faces, cristalizou os sólidos e destruiu as faces de silício/carvão por atrito a seco.",
              "en": "Barrier fluid pressure in the Plan 53A pot dropped below seal chamber stuffing box pressure (barrier pressure must be maintained 1.5 to 2.0 bar ABOVE product pressure); without positive differential, black liquor penetrated seal faces, crystallizing solids and destroying silicon/carbon faces via dry running.",
              "es": "La presión del fluido de barrera en el depósito cayó por debajo de la presión de cámara de sello (debe estar 1,5 a 2 bar POR ENCIMA del producto); el licor penetró las caras, cristalizó y provocó fricción seca destructiva.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! No API Plan 53A com fluido de barreira pressurizado, a pressão do reservatório deve ser rigorosamente superior à pressão interna da bomba para impedir que o fluido de processo contamine as faces.",
              "en": "Correct! API Plan 53A requires barrier pressure higher than process pressure (overpressure of 1.5-2.0 bar), preventing abrasive black liquor from entering faces.",
              "es": "¡Correcto! La sobrepresión del fluido de barrera es obligatoria para sellar productos abrasivos.",
            },
          },
          {
            id: "opt-manut-7-b",
            text: {
              "pt-BR": "O selo mecânico esquenta porque foi fabricado para operar sem nenhum tipo de fluido de lubrificação entre as faces.",
              "en": "The mechanical seal heats up because it is designed to run bone dry without any fluid lubrication.",
              "es": "El sello mecánico calienta porque está diseñado para funcionar en seco sin líquido.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Selos de bomba hidráulica dependem de uma micro-película fluida hidrodinâmica de lubrificação entre as faces.",
              "en": "Mechanical seal faces require microscopic fluid film lubrication to prevent rapid thermal galling.",
              "es": "Las caras requieren una película fluida microscópica de lubricación.",
            },
          },
          {
            id: "opt-manut-7-c",
            text: {
              "pt-BR": "A temperatura de 140°C é ideal e todo selo mecânico precisa atingir 200°C para amaciar as vedações de borracha.",
              "en": "140°C is optimal because seals must hit 200°C to soften elastomeric O-rings.",
              "es": "140°C es ideal para ablandar los O-rings.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "140°C queima elastômeros convencionais (Viton/Nitrílica) e indica colapso térmico iminente.",
              "en": "Excessive heat degrades elastomers and vaporizes boundary lubrication films.",
              "es": "El sobrecalentamiento degrada los elastómeros y evapora el fluido de barrera.",
            },
          },
          {
            id: "opt-manut-7-d",
            text: {
              "pt-BR": "O selo mecânico deve ser lubrificado exclusivamente aplicando graxa asfáltica automotiva diretamente na mola.",
              "en": "The mechanical seal must be lubricated by applying chassis grease directly to the spring.",
              "es": "Debe lubricarse untando grasa pesada en el resorte.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Graxa nas molas bloqueia a flexibilidade axial e impede o fechamento dinâmico das faces.",
              "en": "Grease jams seal springs, preventing axial float and face closure.",
              "es": "La grasa bloquea el resorte impidiendo el cierre dinámico.",
            },
          },
        ],
      },
      {
        id: "q-manut-8",
        order: 8,
        question: {
          "pt-BR": "CENÁRIO 8: Durante a inspeção termográfica com câmera infravermelha em um painel de acionamento elétrico de 440 V da fábrica, o técnico detecta um ponto quente localizado com aquecimento diferencial de ΔT = 45°C acima da temperatura dos demais condutores na conexão de saída do contator. Conforme a norma de termografia, qual é a classificação de severidade e a ação recomendada?",
          "en": "SCENARIO 8: During infrared thermographic inspection on a 440 V plant motor control panel, the technician detects a localized hot spot with a differential temperature ΔT = 45°C above adjacent phases on a contactor lug. Per thermographic standards, what is the severity rating and recommended action?",
          "es": "ESCENARIO 8: En inspección termográfica en tablero de 440 V se detecta un punto caliente con ΔT = 45°C sobre las fases adyacentes en el terminal del contactor. Según normas de termografía, ¿cuál es la severidad y la acción requerida?",
        },
        options: [
          {
            id: "opt-manut-8-a",
            text: {
              "pt-BR": "ΔT = 45°C é classificado como Anomalia Crítica / Severa (Grau de Prioridade 1). Indica alta resistência de contato (parafuso frouxo, oxidação ou área de contato insuficiente); há risco iminente de queima do cabo, soldagem dos contatos e arco elétrico; a ação técnica recomendada é programar intervenção de urgência imediata para desenergizar (LOTO), desmontar o terminal, limpar as superfícies com escova de latão e reapertar com torquímetro calibrado.",
              "en": "ΔT = 45°C is classified as Critical / Severe Anomaly (Priority 1). Indicates high contact resistance (loose terminal lug, oxidation, or undersized contact area); imminent risk of cable insulation burn, contact welding, and arc flash; action requires immediate urgent lockout (LOTO), terminal disassembly, wire-brush cleaning, and torquing to specification.",
              "es": "ΔT = 45°C es Anomalía Crítica (Prioridad 1). Alta resistencia de contacto con riesgo inminente de cortocircuito y fuego; intervención de urgencia con protocolo LOTO, limpieza con cepillo de alambre y reapriete con torquímetro.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Na norma de termografia elétrica (NETA/NFPA), ΔT > 40°C é considerado crítico, exigindo reparo corretivo programado imediato para evitar incêndio elétrico.",
              "en": "Correct! Thermographic criteria rate ΔT > 40°C as critical priority, requiring immediate planned intervention before arc flash develops.",
              "es": "¡Correcto! Criterio de severidad termográfica crítica ante riesgos inminentes de arco eléctrico.",
            },
          },
          {
            id: "opt-manut-8-b",
            text: {
              "pt-BR": "ΔT = 45°C é normal e indica que a corrente elétrica está fluindo com bastante velocidade pelo fio.",
              "en": "ΔT = 45°C is normal and signals high electricity speed through the conductor.",
              "es": "ΔT = 45°C es normal e indica buena velocidad de la corriente.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Calor localizado é perda por efeito Joule gerada por mau contato e resistência elétrica excessiva.",
              "en": "Localized heat represents Joule losses from high resistance and loose hardware.",
              "es": "El calor puntual es disipación Joule por falso contacto eléctrico.",
            },
          },
          {
            id: "opt-manut-8-c",
            text: {
              "pt-BR": "Basta apontar um ventilador portátil comum para o painel aberto e continuar operando por mais 2 anos.",
              "en": "Aim a domestic desk fan into the open panel and operate for 2 more years.",
              "es": "Poner un ventilador doméstico frente al tablero abierto.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Ventiladores mascaram a assinatura térmica sem resolver o mau contato mecânico que continuará oxidando até o curto-circuito.",
              "en": "Fans merely mask thermal signatures while contact resistance deteriorates toward catastrophic arc flash.",
              "es": "Enmascara el calor pero la resistencia sigue subiendo hacia el incendio.",
            },
          },
          {
            id: "opt-manut-8-d",
            text: {
              "pt-BR": "A termografia não tem valor técnico na indústria e deve ser ignorada pela equipe de manutenção.",
              "en": "Thermography has zero industrial value and should be ignored.",
              "es": "La termografía no tiene validez industrial.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Termografia infravermelha é uma das ferramentas preditivas mais poderosas da manutenção industrial moderna.",
              "en": "Infrared thermography is an essential non-destructive predictive inspection tool.",
              "es": "Herramienta predictiva esencial en confiabilidad.",
            },
          },
        ],
      },
      {
        id: "q-manut-9",
        order: 9,
        question: {
          "pt-BR": "CENÁRIO 9: Em uma válvula de controle tipo globo com atuador pneumático diafragma em linha de vapor superaquecido (20 bar, 250°C), o posicionador eletropneumático (4-20 mA) não responde aos comandos da sala de controle e a válvula trava na posição semiaberta. Qual falha mecânica interna clássica provoca esse engripamento e como o mecânico deve realizar o teste?",
          "en": "SCENARIO 9: On a globe control valve with pneumatic diaphragm actuator on a superheated steam line (20 bar, 250°C), the 4-20 mA electropneumatic positioner fails to respond to control room signals and jams partially open. What classic internal mechanical defect causes this binding, and how should it be tested?",
          "es": "ESCENARIO 9: En una válvula de control tipo globo para vapor saturado (20 bar, 250°C), el actuador neumático no responde y la válvula queda trabada a media carrera. ¿Qué falla mecánica clásica origina este atascamiento y cómo se diagnostica?",
        },
        options: [
          {
            id: "opt-manut-9-a",
            text: {
              "pt-BR": "A válvula emperra porque o vapor d'água é muito frio e congelou o castelo de aço fundido.",
              "en": "The valve jams because steam is too cold and froze the cast steel bonnet.",
              "es": "La válvula se traba porque el vapor congeló el bonete.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Vapor a 250°C é extremamente quente e não congela.",
              "en": "Superheated steam at 250°C carries high thermal enthalpy and never freezes.",
              "es": "El vapor a 250°C es de alta temperatura.",
            },
          },
          {
            id: "opt-manut-9-b",
            text: {
              "pt-BR": "Engripamento da haste da válvula no engaxetamento (gland packing) por aperto excessivo da sobreposta, empenamento da haste ou acúmulo de crostas de calcário/óxidos; o teste mecânico exige desacoplar o atuador pneumático da haste e testar o curso manual (histerese mecânica e estricção) com relógio comparador, verificando suavidade de deslocamento e ausência de folga axial excessiva.",
              "en": "Stem galling/binding in the gland packing caused by overtightened packing follower bolts, bent stem, or mineral/oxide buildup; testing requires decoupling the actuator from the stem and testing manual stroke hysteresis/stiction using a dial indicator to verify smooth travel and zero mechanical binding.",
              "es": "Atascamiento del vástago en la empaquetadura por sobreapriete del prensaestopas, vástago doblado o incrustaciones; se desacopla el actuador y se prueba el recorrido manual midiendo la histéresis y fricción (stiction) con reloj comparador.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Empenamento da haste ou aperto excessivo da prensa-gaxeta gera forças de atrito superiores à força gerada pelo diafragma pneumático, travando a válvula.",
              "en": "Correct! Excessive gland friction or bent stems exceed actuator diaphragm thrust, resulting in severe stiction and valve hang-up.",
              "es": "¡Correcto! El apriete excesivo o vástago torcido vence la fuerza del actuador provocando el bloqueo.",
            },
          },
          {
            id: "opt-manut-9-c",
            text: {
              "pt-BR": "Basta bater com marreta de 10 kg diretamente na haste de aço polido até que ela desça forçadamente.",
              "en": "Hit the polished stem with a 10 kg sledgehammer until forced down.",
              "es": "Golpear el vástago pulido con una maza de 10 kg para forzar el cierre.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Bater na haste deforma o metal polido, destrói o engaxetamento e causa vazamento violento de vapor a 250°C.",
              "en": "Striking the stem destroys precision ground finishes and releases scalding steam.",
              "es": "Arruina el vástago y causa fugas de vapor a alta presión.",
            },
          },
          {
            id: "opt-manut-9-d",
            text: {
              "pt-BR": "O problema é sempre resolvido aumentando a pressão de ar de alimentação do posicionador para 100 bar.",
              "en": "Always solved by boosting positioner supply air to 100 bar.",
              "es": "Aumentar el aire comprimido a 100 bar.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Atuadores pneumáticos de diafragma operam tipicamente entre 1,4 e 4,0 bar; 100 bar explodiria a carcaça do atuador.",
              "en": "Diaphragm actuators operate at 1.4-4.0 bar; 100 bar ruptures the actuator chamber explosively.",
              "es": "Sobrepresión que destruiría el diafragma del actuador.",
            },
          },
        ],
      },
      {
        id: "q-manut-10",
        order: 10,
        question: {
          "pt-BR": "CENÁRIO 10: Conforme as diretrizes de governança permanente do AGENTS.md da RSS3 Treinamentos, a aprovação neste curso livre de Manutenção Industrial em plataforma online confere ao aluno a habilitação formal como mecânico industrial qualificado para emitir laudos estruturais sem necessidade de comprovação prática de campo nem ASO ocupacional?",
          "en": "SCENARIO 10: Per permanent AGENTS.md governance, does passing this online Industrial Maintenance course legally license a student as a qualified industrial mechanic authorized to issue structural compliance reports without field evaluation or medical clearance (ASO)?",
          "es": "ESCENARIO 10: Según las directrices permanentes del AGENTS.md, ¿aprobar este curso online habilita formalmente al alumno para emitir laudos estructurales mecánicos sin práctica evaluada en campo ni ASO ocupacional?",
        },
        options: [
          {
            id: "opt-manut-10-a",
            text: {
              "pt-BR": "SIM. O certificado online autoriza o trabalhador a assinar qualquer projeto de engenharia mecânica imediatamente.",
              "en": "YES. The online certificate authorizes signing any mechanical engineering project immediately.",
              "es": "SÍ. Autoriza a firmar cualquier proyecto mecánico.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Falso e terminantemente proibido pelas diretrizes do AGENTS.md e legislação profissional do CREA.",
              "en": "False and strictly forbidden by AGENTS.md and engineering statutory law.",
              "es": "Falso e ilegal.",
            },
          },
          {
            id: "opt-manut-10-b",
            text: {
              "pt-BR": "NÃO. Este curso confere exclusivamente o 'Certificado de Conclusão de Conteúdo Teórico de Aperfeiçoamento Profissional'. Conforme o AGENTS.md (Seção 3), treinamentos EAD jamais substituem a capacitação prática supervisionada em bancada/campo, o Atestado de Saúde Ocupacional (ASO) vigente e as habilitações formais regulamentadas pelos órgãos de fiscalização profissional (CREA/CFT).",
              "en": "NO. This course grants strictly a 'Certificate of Theoretical Completion in Professional Enhancement'. Under AGENTS.md Section 3, e-learning never replaces hands-on supervised mechanical field training, occupational medical fitness clearance (ASO), and statutory engineering board licensing (CREA/CFT).",
              "es": "NO. Este curso otorga exclusivamente 'Certificado de Conclusión de Contenido Teórico'. El AGENTS.md (Sección 3) establece que la formación online jamás sustituye la práctica presencial supervisada, el ASO médico vigente ni las atribuciones reguladas por los colegios profesionales.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Cumpre rigorosamente a Seção 3 do AGENTS.md: separação inequívoca entre certificado de teoria EAD e habilitação prática ou atribuição técnica formal.",
              "en": "Correct! Strictly adheres to AGENTS.md Section 3: clear separation between online theoretical certificates and formal practical qualifications.",
              "es": "¡Correcto! Cumple con la directriz del AGENTS.md sobre diferenciación regulatoria obligatoria.",
            },
          },
          {
            id: "opt-manut-10-c",
            text: {
              "pt-BR": "SIM, mas apenas para colaboradores com mais de 50 anos de idade.",
              "en": "YES, but only for candidates over 50 years of age.",
              "es": "SÍ, pero solo para mayores de 50 años.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A legislação e as diretrizes regulatórias aplicam-se a todos sem distinção de idade.",
              "en": "Statutory engineering regulations apply universally regardless of age.",
              "es": "La normativa legal aplica a todos por igual.",
            },
          },
          {
            id: "opt-manut-10-d",
            text: {
              "pt-BR": "A validação digital dispensa o uso de EPIs e procedimentos LOTO em qualquer fábrica.",
              "en": "Digital validation waives PPE and LOTO procedures in any plant.",
              "es": "La validación digital anula el uso de EPP y LOTO.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Treinamentos reforçam a exigência de EPIs e procedimentos de segurança, nunca os dispensam.",
              "en": "Training enforces safety standards, never waiving them.",
              "es": "El curso refuerza la obligatoriedad de la seguridad.",
            },
          },
        ],
      },
    ],
  },
};

