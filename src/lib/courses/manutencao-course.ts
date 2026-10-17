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
    estimatedMinutes: 20,
    questionsCount: 5,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação teórica com 5 questões sobre confiabilidade, manutenção corretiva, preventiva e segurança com bloqueio LOTO. Nota mínima de 70% para emissão do certificado.",
      "en": "Theoretical assessment covering reliability, corrective/preventive maintenance, and LOTO safety. 70% passing score.",
      "es": "Evaluación teórica sobre confiabilidad, mantenimiento correctivo, preventivo y LOTO. Aprobación mínima del 70%.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência — Manutenção Industrial",
      "en": "Final Competency Exam — Industrial Maintenance",
      "es": "Evaluación Final de Competencias — Mantenimiento Industrial",
    },
    description: {
      "pt-BR": "Validação de conhecimentos em estratégias de manutenção industrial, curvas de falha, segurança operacional com isolamento de energias e planos preventivos.",
      "en": "Validation of knowledge on maintenance strategies, failure curves, operational safety with energy lockout, and preventive schedules.",
      "es": "Validación de conocimientos en estrategias de mantenimiento, curvas de falla y seguridad LOTO.",
    },
    questions: [
      {
        id: "q-manut-1",
        order: 1,
        question: {
          "pt-BR": "1. Qual é a principal característica que define a Manutenção Preventiva em comparação com a Manutenção Corretiva?",
          "en": "1. What is the key attribute that distinguishes Preventive Maintenance from Corrective Maintenance?",
          "es": "1. ¿Cuál es la principal característica que define al Mantenimiento Preventivo frente al Correctivo?",
        },
        options: [
          {
            id: "q1-a",
            text: {
              "pt-BR": "É realizada antes da ocorrência da falha funcional, seguindo um cronograma pré-determinado de tempo ou horas de uso.",
              "en": "It is performed prior to functional failure, following a predetermined schedule of time or operating hours.",
              "es": "Se realiza antes de la falla funcional, según un cronograma predeterminado de tiempo u horas.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A manutenção preventiva atua de forma proativa para substituir componentes gastos antes que quebrem.",
              "en": "Correct! Preventive maintenance acts proactively to replace worn parts before breakdown.",
              "es": "¡Correcto! El mantenimiento preventivo actúa de manera planificada antes de que el equipo colapse.",
            },
          },
          {
            id: "q1-b",
            text: {
              "pt-BR": "É realizada apenas quando o equipamento já parou totalmente de funcionar.",
              "en": "It is only performed once equipment has completely broken down.",
              "es": "Se realiza únicamente cuando la máquina se rompe por completo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Essa é a definição de manutenção corretiva emergencial.",
              "en": "Incorrect. That describes emergency corrective maintenance.",
              "es": "Incorrecto. Eso corresponde a correctivo no planificado.",
            },
          },
          {
            id: "q1-c",
            text: {
              "pt-BR": "Não requer nenhum tipo de ferramenta ou documentação técnica.",
              "en": "It requires no tools or technical records.",
              "es": "No requiere herramientas ni registros técnicos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Exige ferramentas precisas, checklists e ordens de serviço formais.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-manut-2",
        order: 2,
        question: {
          "pt-BR": "2. Por que a manutenção corretiva não programada (emergencial) costuma ser a estratégia mais cara e perigosa para uma fábrica?",
          "en": "2. Why is unscheduled emergency corrective maintenance typically the most expensive and risky strategy for a plant?",
          "es": "2. ¿Por qué el mantenimiento correctivo de emergencia suele ser la opción más costosa y peligrosa?",
        },
        options: [
          {
            id: "q2-a",
            text: {
              "pt-BR": "Porque causa paradas bruscas de produção, riscos graves de acidentes, necessidade de compras urgentes de peças e danos secundários a outros componentes.",
              "en": "Because it triggers abrupt production halts, acute safety risks, premium expedited parts, and collateral damage to adjacent components.",
              "es": "Porque provoca paradas abruptas, riesgo de accidentes, repuestos con sobreprecio y daño colateral en la máquina.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A quebra inesperada pode quebrar peças adjacentes, travar a linha de produção e expor os operadores a riscos mecânicos e térmicos.",
              "en": "Correct! Catastrophic breakdown can destroy adjacent assemblies and expose workers to hazards under pressure.",
              "es": "¡Correcto! Una rotura imprevista eleva drásticamente los costos y riesgos laborales.",
            },
          },
          {
            id: "q2-b",
            text: {
              "pt-BR": "Porque não gasta nenhuma graxa nem óleo lubrificante.",
              "en": "Because it does not consume grease or oil.",
              "es": "Porque no gasta grasa ni lubricantes.",
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
              "pt-BR": "Porque só pode ser feita fora do horário de trabalho.",
              "en": "Because it can only be done off-shift.",
              "es": "Porque solo se hace de noche.",
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
        id: "q-manut-3",
        order: 3,
        question: {
          "pt-BR": "3. Qual procedimento de segurança é estritamente obrigatório ANTES de iniciar qualquer intervenção mecânica em bombas, tubulações ou redutores?",
          "en": "3. Which safety procedure is mandatory BEFORE starting mechanical work on pumps, lines, or gearboxes?",
          "es": "3. ¿Qué procedimiento de seguridad es obligatorio ANTES de intervenir mecánicamente en bombas o reductores?",
        },
        options: [
          {
            id: "q3-a",
            text: {
              "pt-BR": "Bloqueio e etiquetagem de energias perigosas (LOTO), alívio de pressão residual, APR e Permissão de Trabalho válida.",
              "en": "Lockout/Tagout (LOTO) of hazardous energy, residual pressure relief, JSA, and active Work Permit.",
              "es": "Bloqueo y etiquetado LOTO, despresurización de líneas residuales, APR y Permiso de Trabajo.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Intervir em equipamentos com energia acumulada (elétrica, hidráulica, pneumática ou mecânica) é uma das principais causas de acidentes fatais.",
              "en": "Correct! Working on machinery with stored energy is a leading cause of severe industrial accidents.",
              "es": "¡Correcto! El bloqueo de energías peligrosas y despresurización protege la vida del mecánico.",
            },
          },
          {
            id: "q3-b",
            text: {
              "pt-BR": "Apenas desligar o botão liga/desliga no painel da máquina sem colocar cadeado.",
              "en": "Just pressing stop without applying physical locks.",
              "es": "Solo presionar el botón de parada sin colocar candado.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e perigoso! Qualquer pessoa pode religar a máquina acidentalmente.",
              "en": "Incorrect and dangerous. Anyone could inadvertently re-energize.",
              "es": "Incorrecto y peligroso.",
            },
          },
          {
            id: "q3-c",
            text: {
              "pt-BR": "Pintar a máquina antes de começar a desmontagem.",
              "en": "Painting the equipment before dismantling.",
              "es": "Pintar la máquina antes de desarmarla.",
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
        id: "q-manut-4",
        order: 4,
        question: {
          "pt-BR": "4. O que caracteriza a Manutenção Preditiva?",
          "en": "4. What defines Predictive Maintenance?",
          "es": "4. ¿Qué define al Mantenimiento Predictivo?",
        },
        options: [
          {
            id: "q4-a",
            text: {
              "pt-BR": "O monitoramento contínuo ou periódico de sintomas e parâmetros físicos (vibração, termografia, ultrassom e análise de óleo) para prever a hora certa de intervir.",
              "en": "Condition monitoring tracking physical parameters (vibration analysis, thermography, ultrasound, oil tests) to predict optimal intervention time.",
              "es": "Monitoreo continuo de síntomas y parámetros físicos (vibraciones, termografía, análisis de aceite) para prever cuándo intervenir.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A preditiva não troca a peça às cegas nem espera quebrar; ela mede o estado de saúde do componente em funcionamento.",
              "en": "Correct! Predictive monitoring measures operating health to avoid premature replacement or catastrophic failure.",
              "es": "¡Correcto! El mantenimiento predictivo analiza la salud del equipo en marcha.",
            },
          },
          {
            id: "q4-b",
            text: {
              "pt-BR": "A troca de peças baseada apenas em palpites dos operadores.",
              "en": "Replacing parts based solely on operator guesswork.",
              "es": "Cambiar piezas por intuición.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A preditiva é estritamente científica e baseada em dados instrumentais.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q4-c",
            text: {
              "pt-BR": "Deixar o equipamento funcionando até o rolamento travar completamente.",
              "en": "Letting the machine run until bearings seize.",
              "es": "Dejar el equipo hasta que se trabe el rodamiento.",
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
        id: "q-manut-5",
        order: 5,
        question: {
          "pt-BR": "5. Qual é o papel da lubrificação adequada (graxa/óleo correto no intervalo especificado) na confiabilidade dos equipamentos industriais?",
          "en": "5. What is the role of proper lubrication (correct grease/oil at specified intervals) in industrial reliability?",
          "es": "5. ¿Cuál es el papel de una lubricación adecuada en la confiabilidad industrial?",
        },
        options: [
          {
            id: "q5-a",
            text: {
              "pt-BR": "Reduzir o atrito, dissipar o calor, evitar o contato metal-metal e proteger contra corrosão e desgaste prematuro dos mancais e engrenagens.",
              "en": "Minimizing friction, dissipating heat, preventing metal-to-metal contact, and protecting bearings and gears from premature wear.",
              "es": "Reducir fricción, disipar calor, evitar contacto metal con metal y prevenir desgaste prematuro de rodamientos y engranajes.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Mais de 50% das falhas prematuras de rolamentos em indústrias pesadas decorrem de problemas de lubrificação inadequada, contaminação ou excesso de graxa.",
              "en": "Correct! Over 50% of premature bearing failures stem from improper lubrication, contamination, or over-greasing.",
              "es": "¡Correcto! La lubricación adecuada es la principal defensa contra fallas en rodamientos.",
            },
          },
          {
            id: "q5-b",
            text: {
              "pt-BR": "Apenas melhorar o aspecto visual externo das máquinas.",
              "en": "Solely improving external machine aesthetics.",
              "es": "Solo mejorar la apariencia exterior de la máquina.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q5-c",
            text: {
              "pt-BR": "Substituir a necessidade de aperto de parafusos.",
              "en": "Replacing the need for torquing bolts.",
              "es": "Sustituir el ajuste de tornillos.",
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
    ],
  },
};
