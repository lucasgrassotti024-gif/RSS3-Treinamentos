import { CourseDemonstration } from "@/types";

export const pcmCourseData: CourseDemonstration = {
  id: "c-pcm-planejamento-controle-manutencao",
  slug: "pcm-planejamento-e-controle-da-manutencao-industrial",
  title: {
    "pt-BR": "PCM: Planejamento e Controle da Manutenção Industrial",
    "en": "MPC: Maintenance Planning & Control in Heavy Industry",
    "es": "PCM: Planificación y Control del Mantenimiento Industrial",
  },
  description: {
    "pt-BR": "Formação completa em PCM: pilares estratégicos da gestão de manutenção, tipologias operacionais, técnicas de inspeção sensitiva, manutenção proativa, fluxo de Kanban, programação de paradas e habilidades comportamentais do planejador.",
    "en": "Comprehensive Maintenance Planning & Control training: strategic management pillars, operational typologies, sensory inspections, proactive maintenance, Kanban workflows, shutdown scheduling, and planner soft skills.",
    "es": "Capacitación integral en Planificación y Control del Mantenimiento: pilares de gestión, tipologías operacionales, inspección sensitiva, Kanban y programación de paradas.",
  },
  longDescription: {
    "pt-BR": "O treinamento de PCM (Planejamento e Controle da Manutenção) da RSS3 Treinamentos foi estruturado para capacitar planejadores, programadores de manutenção, analistas técnicos, engenheiros de confiabilidade e encarregados operacionais nos métodos mais eficientes de governança de ativos industriais. O programa cobre detalhadamente as diferenças entre corretiva emergencial e programada, o dimensionamento de planos preventivos e rotinas preditivas, técnicas de inspeção sensitiva através dos 5 sentidos, os 11 pilares da manutenção proativa, a implementação de quadros Kanban para controle de ordens de serviço, a eliminação de erros críticos de cronograma e as competências socioemocionais (soft skills) exigidas para liderar frentes de manutenção com alto alinhamento entre campo e engenharia.",
    "en": "The RSS3 Maintenance Planning & Control (MPC) training equips planners, schedulers, maintenance analysts, and site supervisors with modern asset governance methodologies. Explores corrective vs planned vs predictive maintenance, 5-senses sensory inspections, 11 proactive maintenance tools, Kanban task tracking, shutdown scheduling pitfall avoidance, and essential communication soft skills.",
    "es": "El curso de PCM de RSS3 capacita a planificadores, programadores e inspectores en confiabilidad operativa, inspecciones sensitivas, gestión con tableros Kanban y programación de mantenimiento.",
  },
  schoolId: "mecanica-industrial",
  schoolName: {
    "pt-BR": "Manutenção Mecânica e Confiabilidade Industrial",
    "en": "Mechanical Maintenance & Asset Reliability",
    "es": "Mantenimiento Mecánico y Confiabilidad Industrial",
  },
  workloadHours: 35,
  level: "intermediate",
  modality: "online",
  isMandatory: false,
  mandatoryFor: [
    "Planejador de Manutenção",
    "Programador de Manutenção",
    "Analista de PCM",
    "Líder de Parada de Manutenção",
    "Encarregado Mecânico",
    "Técnico de Confiabilidade",
  ],
  targetAudience: {
    "pt-BR": "Planejadores, programadores, técnicos de manutenção, analistas de confiabilidade, supervisores de oficina e encarregados de equipes industriais que gerenciam ordens de serviço e cronogramas de paradas.",
    "en": "Maintenance planners, schedulers, craft supervisors, reliability analysts, and turnaround coordinators handling work orders and maintenance backlogs.",
    "es": "Planificadores, programadores, técnicos e inspectores que gestionan órdenes de trabajo y paradas de planta.",
  },
  prerequisites: {
    "pt-BR": "Conhecimentos básicos de rotinas industriais, leitura de ordens de serviço e familiaridade com componentes mecânicos e elétricos básicos.",
    "en": "Foundational understanding of industrial routines, work order flows, and common mechanical/electrical equipment.",
    "es": "Conocimientos básicos de planta industrial y manejo de órdenes de trabajo.",
  },
  modulesCount: 5,
  lessonsCount: 13,
  thumbnailGradient: "from-blue-900 via-cyan-900 to-slate-950",
  coverImage: "/images/courses/pcm.jpg",
  categories: ["gestao-produtividade", "conhecimento-operacional", "qualidade-processos"],
  badgeCode: "PCM-RSS3",
  updatedAtDate: "2026-10-17",
  modules: [
    {
      id: "mod-pcm-1",
      order: 1,
      title: {
        "pt-BR": "Módulo 1: Introdução ao PCM e Tipologias Fundamentais de Manutenção",
        "en": "Module 1: Introduction to MPC & Core Maintenance Typologies",
        "es": "Módulo 1: Introducción al PCM y Tipologías Fundamentales",
      },
      description: {
        "pt-BR": "Conceituação do Planejamento e Controle da Manutenção, objetivos estratégicos (disponibilidade, confiabilidade e custos) e visão geral das abordagens corretiva, preventiva e preditiva.",
        "en": "Definition and strategic role of Maintenance Planning & Control, availability/reliability targets, and overview of corrective, preventive, and predictive paradigms.",
        "es": "Concepto del PCM, objetivos estratégicos y visión general de correctivo, preventivo y predictivo.",
      },
      lessons: [
        {
          id: "les-pcm-1-1",
          order: 1,
          title: {
            "pt-BR": "O que é PCM? Planejamento e Controle da Manutenção",
            "en": "What is MPC? Maintenance Planning & Control",
            "es": "¿Qué es el PCM? Planificación y Control del Mantenimiento",
          },
          durationMinutes: 10,
          contentType: "video",
          videoUrl: "oIha3XHjCkU",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender a função estratégica do PCM dentro da indústria, a separação entre Planejamento (o que e como fazer) e Programação (quando e quem fará).",
              "en": "Understand the strategic role of MPC in heavy industry and distinguish Planning from Scheduling.",
              "es": "Comprender la función estratégica del PCM y la diferencia entre planificar y programar.",
            },
            summaryPoints: [
              {
                "pt-BR": "O PCM é o cérebro da manutenção: responsável por maximizar a disponibilidade e confiabilidade dos ativos minimizando custos operacionais.",
                "en": "MPC serves as the brain of maintenance: maximizing asset availability and uptime while optimizing maintenance costs.",
                "es": "El PCM es el núcleo estratégico: optimiza disponibilidad y reduce costos de parada.",
              },
              {
                "pt-BR": "Diferença vital: Planejar é definir recursos, ferramentas, procedimentos e peças necessárias. Programar é agendar a data/hora e alocar a equipe de execução.",
                "en": "Planning defines scope, tools, procedures, and spare parts. Scheduling sets timing, job sequences, and technician allocation.",
                "es": "Planificar define recursos y piezas; programar define fechas y asignación de personal.",
              },
              {
                "pt-BR": "Gestão de Backlog: controle da carga futura de trabalho pendente para dimensionar a capacidade da equipe.",
                "en": "Backlog management: tracking pending work orders to balance craft capacity and scheduling commitments.",
                "es": "Gestión de Backlog: control del volumen de trabajo acumulado y capacidad de ejecución.",
              },
            ],
          },
        },
        {
          id: "les-pcm-1-2",
          order: 2,
          title: {
            "pt-BR": "O que é Manutenção Corretiva? Características e Impactos",
            "en": "What is Corrective Maintenance? Characteristics & Impacts",
            "es": "¿Qué es el Mantenimiento Correctivo? Características e Impactos",
          },
          durationMinutes: 8,
          contentType: "video",
          videoUrl: "xWI4505BrJg",
          contentDetail: {
            objective: {
              "pt-BR": "Analisar as características da manutenção corretiva e os riscos associados à atuação puramente reativa.",
              "en": "Analyze corrective maintenance mechanics and the operational risks of reactive firefighting.",
              "es": "Analizar las características del correctivo y los riesgos de la operación reactiva.",
            },
            summaryPoints: [
              {
                "pt-BR": "Definição de manutenção corretiva: reparo realizado após a falha para restabelecer a capacidade produtiva da máquina.",
                "en": "Definition: repair work performed after functional failure occurs to restore baseline performance.",
                "es": "Definición: reparación posterior a la falla para restablecer la operación del equipo.",
              },
              {
                "pt-BR": "Consequências da corretiva emergencial: custos de hora extra, compras expressas com sobrepreço e riscos elevados à segurança.",
                "en": "Emergency corrective costs: overtime labor, expedited freight charges, and acute safety hazards.",
                "es": "Costos de emergencia: horas extras, flete urgente de repuestos y riesgos de seguridad.",
              },
              {
                "pt-BR": "O papel do PCM em conter a corretiva: converter quebras repetitivas em planos preventivos robustos.",
                "en": "MPC role in curbing corrective fire drills: transforming recurring failures into disciplined preventive plans.",
                "es": "Rol del PCM: transformar fallas recurrentes en planes preventivos sostenibles.",
              },
            ],
          },
        },
        {
          id: "les-pcm-1-3",
          order: 3,
          title: {
            "pt-BR": "O que é Manutenção Preventiva? Fundamentos e Vantagens",
            "en": "What is Preventive Maintenance? Foundations & Advantages",
            "es": "¿Qué es el Mantenimiento Preventivo? Fundamentos y Ventajas",
          },
          durationMinutes: 9,
          contentType: "video",
          videoUrl: "rws-2KG8mcY",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender os conceitos de manutenção preventiva periódica e os benefícios diretos na previsibilidade da planta.",
              "en": "Master periodic preventive maintenance concepts and their direct impact on manufacturing predictability.",
              "es": "Comprender la mantención preventiva sistemática y sus beneficios en la previsibilidad fabril.",
            },
            summaryPoints: [
              {
                "pt-BR": "Intervenções programadas com base no tempo de calendário ou horas acumuladas de funcionamento do equipamento.",
                "en": "Scheduled interventions executed based on calendar intervals or cumulative runtime hours.",
                "es": "Intervenciones planificadas basadas en tiempo calendario u horas de marcha.",
              },
              {
                "pt-BR": "Padronização de rotinas: planos sistemáticos com roteiros passo a passo (instruções de trabalho) e listas de peças pré-separadas.",
                "en": "Routine standardization: systematic checklists, standard operating procedures, and staged kitting.",
                "es": "Estandarización: listas de chequeo paso a paso y kits de repuestos preparados con anticipación.",
              },
              {
                "pt-BR": "Redução drástica do MTTR (Tempo Médio de Reparo) através de paradas programadas e previamente combinadas com a operação.",
                "en": "Substantial MTTR reduction through controlled, pre-coordinated shutdown windows with operations.",
                "es": "Reducción del MTTR mediante paradas programadas en coordinación con producción.",
              },
            ],
          },
        },
        {
          id: "les-pcm-1-4",
          order: 4,
          title: {
            "pt-BR": "Manutenção Preditiva: O que é e Como Fazer?",
            "en": "Predictive Maintenance: What It Is & How to Implement It",
            "es": "Mantenimiento Predictivo: ¿Qué es y Cómo Implementarlo?",
          },
          durationMinutes: 11,
          contentType: "video",
          videoUrl: "q9itFeQZtuQ",
          contentDetail: {
            objective: {
              "pt-BR": "Entender o monitoramento de condição (CBM) e as principais tecnologias preditivas utilizadas na indústria pesada.",
              "en": "Understand Condition-Based Monitoring (CBM) and core predictive technologies in heavy industry.",
              "es": "Conocer el monitoreo por condición y las principales tecnologías predictivas industriales.",
            },
            summaryPoints: [
              {
                "pt-BR": "Manutenção baseada na condição real do ativo em funcionamento, sem necessidade de desmontar para inspecionar.",
                "en": "Maintenance driven by actual operating condition of energized assets, eliminating unnecessary tear-downs.",
                "es": "Mantenimiento basado en la condición real del equipo en marcha sin desmontajes innecesarios.",
              },
              {
                "pt-BR": "Tecnologias fundamentais: Análise de Vibrações (desbalanceamento, desalinhamento e folgas), Termografia (pontos quentes e sobrecargas elétricas) e Análise de Óleo (viscosidade e partículas metálicas).",
                "en": "Core technologies: Vibration analysis (unbalance, misalignment, bearing faults), Thermography (hot spots, loose electrical lugs), and Lubricant analysis (contamination, wear metals).",
                "es": "Tecnologías clave: análisis de vibraciones, termografía infrarroja y análisis tribológico de aceites.",
              },
              {
                "pt-BR": "Determinação exata da Curva P-F: maximização da vida útil dos componentes trocando apenas no momento ideal.",
                "en": "Leveraging the P-F Curve: maximizing component useful life by replacing right before functional degradation.",
                "es": "Curva P-F: aprovechamiento máximo de la vida útil del componente antes de la rotura.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-pcm-2",
      order: 2,
      title: {
        "pt-BR": "Módulo 2: Inspeção Sensitiva e Manutenção Proativa",
        "en": "Module 2: Sensory Inspection & Proactive Maintenance",
        "es": "Módulo 2: Inspección Sensitiva y Mantenimiento Proactivo",
      },
      description: {
        "pt-BR": "Como utilizar a inspeção sensitiva (5 sentidos) na rota de campo e as 11 ferramentas essenciais da manutenção proativa.",
        "en": "Conducting field sensory inspections (5 senses) and deploying the 11 essential proactive maintenance tools.",
        "es": "Inspección sensitiva con los 5 sentidos y las 11 herramientas de mantenimiento proactivo.",
      },
      lessons: [
        {
          id: "les-pcm-2-1",
          order: 1,
          title: {
            "pt-BR": "Inspeção: O que é e Como Fazer? (Extra: Os 5 Sentidos)",
            "en": "Inspection: What It Is & How to Execute (The 5 Senses)",
            "es": "Inspección: Qué es y Cómo Realizarla (Los 5 Sentidos)",
          },
          durationMinutes: 9,
          contentType: "video",
          videoUrl: "r8NdY7NqE0g",
          contentDetail: {
            objective: {
              "pt-BR": "Capacitar operadores e mecânicos na técnica de inspeção sensitiva diária para detectar sintomas precoces de falhas.",
              "en": "Train operators and mechanics in daily sensory inspection to detect early failure symptoms.",
              "es": "Capacitar en inspección sensitiva diaria para detectar síntomas precoces de averías.",
            },
            summaryPoints: [
              {
                "pt-BR": "A Visão: detecção de vazamentos de fluidos, trincas em estruturas, descoloração por calor e desalinhamentos visíveis.",
                "en": "Vision: detecting hydraulic leaks, structural cracks, thermal discoloration, and loose fasteners.",
                "es": "Visión: detección de fugas, grietas estructurales y pernos sueltos.",
              },
              {
                "pt-BR": "A Audição: ruídos anormais, rangidos de rolamentos sem graxa, chiados de vazamento de ar comprimido e cavitação em bombas.",
                "en": "Hearing: abnormal whining, unlubricated bearing squeal, compressed air hiss, and pump cavitation crackle.",
                "es": "Audición: ruidos anormales, rodamientos secos y cavitación en bombas.",
              },
              {
                "pt-BR": "O Tato e Olfato: vibração excessiva ao toque seguro e cheiro característico de borracha queimada ou isolamento elétrico superaquecido.",
                "en": "Touch & Smell: excessive housing vibration and the distinct smell of burning belts or electrical varnish.",
                "es": "Tacto y Olfato: vibración perceptible y olor a sobrecalentamiento de correas o aislamiento eléctrico.",
              },
            ],
          },
        },
        {
          id: "les-pcm-2-2",
          order: 2,
          title: {
            "pt-BR": "O que é Manutenção Proativa? Conheça 11 Ferramentas Fundamentais",
            "en": "What is Proactive Maintenance? 11 Essential Tools",
            "es": "¿Qué es el Mantenimiento Proactivo? 11 Herramientas Clave",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "HW8WmG9_Esg",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender a manutenção proativa e suas 11 ferramentas destinadas a eliminar a causa-raiz dos defeitos mecânicos.",
              "en": "Master proactive maintenance tools aimed at eliminating root causes before failures germinate.",
              "es": "Dominar las 11 herramientas proactivas para eliminar la causa raíz de las anomalías.",
            },
            summaryPoints: [
              {
                "pt-BR": "Diferença entre Preditiva e Proativa: a preditiva monitora o sintoma; a proativa ataca a causa do problema (ex: manter o óleo ultralimpo para que o mancal nunca se desgaste).",
                "en": "Predictive monitors symptoms; proactive attacks root causes (e.g., maintaining ultra-clean oil so bearings never wear).",
                "es": "Diferencia: la predictiva vigila el síntoma; la proactiva elimina la causa raíz (ej: pureza absoluta del lubricante).",
              },
              {
                "pt-BR": "Ferramentas principais: Diagrama de Ishikawa (Espinha de Peixe), 5 Porquês, Análise de Árvore de Falhas (FTA) e FMEA/FMECA.",
                "en": "Core tools: Ishikawa diagram, 5 Whys, Failure Tree Analysis (FTA), and FMEA/FMECA.",
                "es": "Herramientas clave: Diagrama de Ishikawa, 5 Porqués, Análisis de Causa Raíz y FMEA.",
              },
              {
                "pt-BR": "Engenharia de Confiabilidade: pequenas melhorias de projeto (Kaizen) que evitam a recorrência definitiva de falhas.",
                "en": "Reliability engineering: small design upgrades (Kaizen) that eliminate chronic equipment vulnerabilities.",
                "es": "Ingeniería de confiabilidad: rediseños Kaizen para erradicar fallas crónicas.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-pcm-3",
      order: 3,
      title: {
        "pt-BR": "Módulo 3: Comparativos Técnicos: Preventiva vs Corretiva Programada",
        "en": "Module 3: Technical Comparisons: Preventive vs Scheduled Corrective",
        "es": "Módulo 3: Comparativas Técnicas: Preventiva vs Correctiva Programada",
      },
      description: {
        "pt-BR": "Diferenciação precisa entre manutenção preventiva sistemática e corretiva programada, além das categorias de preventivas existentes.",
        "en": "Accurate distinction between systematic preventive and scheduled corrective, plus types of preventive maintenance regimes.",
        "es": "Diferenciación exacta entre preventivo sistemático y correctivo programado.",
      },
      lessons: [
        {
          id: "les-pcm-3-1",
          order: 1,
          title: {
            "pt-BR": "Preventiva é o Mesmo que Corretiva Programada? Conceitos e Diferenças",
            "en": "Is Preventive the Same as Scheduled Corrective? Key Differences",
            "es": "¿Es lo Mismo Preventivo que Correctivo Programado? Diferencias Clave",
          },
          durationMinutes: 8,
          contentType: "video",
          videoUrl: "jVWDsrONToE",
          contentDetail: {
            objective: {
              "pt-BR": "Esclarecer a clássica dúvida da manutenção e classificar corretamente as ordens de serviço no sistema informatizado.",
              "en": "Clarify common maintenance nomenclature doubts and categorize work orders correctly in CMMS.",
              "es": "Aclarar confusiones habituales y tipificar correctamente órdenes de trabajo en el sistema.",
            },
            summaryPoints: [
              {
                "pt-BR": "A preventiva é cíclica e preventiva por natureza: você intervém antes que o componente apresente qualquer defeito ou anomalia.",
                "en": "Preventive is cyclic and proactive: intervention happens before the part exhibits anomalies.",
                "es": "El preventivo es cíclico: se interviene antes de cualquier síntoma de fallo.",
              },
              {
                "pt-BR": "A corretiva programada nasce de uma anomalia detectada: o defeito já existe (ex: pequeno vazamento constatado em inspeção), mas não requer parada imediata, podendo ser programada.",
                "en": "Scheduled corrective arises from an observed defect: an anomaly exists (e.g., small leak found during rounds), but line operation can continue until a scheduled window.",
                "es": "El correctivo programado nace de una anomalía detectada que permite programar la parada sin frenar la planta de inmediato.",
              },
              {
                "pt-BR": "Impacto nos indicadores: não misturar corretivas programadas com preventivas para não mascarar os dados reais de falhas no CMMS.",
                "en": "KPI integrity: never mislabel scheduled corrective as preventive, which skews true reliability metrics.",
                "es": "Integridad de KPIs: tipificar con rigor para no distorsionar las métricas de confiabilidad.",
              },
            ],
          },
        },
        {
          id: "les-pcm-3-2",
          order: 2,
          title: {
            "pt-BR": "Tipos de Manutenção Preventiva: Baseada em Tempo, Uso e Oportunidade",
            "en": "Types of Preventive Maintenance: Time-based, Usage-based & Opportunity",
            "es": "Tipos de Mantenimiento Preventivo: Tiempo, Uso y Oportunidad",
          },
          durationMinutes: 10,
          contentType: "video",
          videoUrl: "O_sQDdDjpjk",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender as modalidades de preventiva e selecionar a estratégia ideal para cada tipo de ativo fabril.",
              "en": "Understand preventive maintenance modalities and select the optimal strategy per asset class.",
              "es": "Conocer las variantes del preventivo y elegir la adecuada según el activo.",
            },
            summaryPoints: [
              {
                "pt-BR": "Preventiva baseada em Tempo (TBM): intervalos fixos de dias/semanas (ideal para filtros de ar e inspeções prediais).",
                "en": "Time-Based Maintenance (TBM): fixed calendar cadence (ideal for HVAC filters and statutory inspections).",
                "es": "Mantenimiento basado en tiempo (TBM): intervalos fijos de calendario.",
              },
              {
                "pt-BR": "Preventiva baseada em Uso (UBM): horímetros, quilometragem ou ciclos de prensagem (ideal para empilhadeiras, motores e bombas de hidrojato).",
                "en": "Usage-Based Maintenance (UBM): hour meters, kilometers, or cycle counters (ideal for forklifts and hydroblast pumps).",
                "es": "Mantenimiento basado en uso (UBM): horómetros y ciclos de trabajo.",
              },
              {
                "pt-BR": "Preventiva de Oportunidade: aproveitamento de paradas não programadas em outras áreas da linha para realizar serviços pendentes sem perda adicional de produção.",
                "en": "Opportunity Maintenance: seizing upstream/downstream downtime to knock out queued tasks without additional loss.",
                "es": "Mantenimiento de oportunidad: aprovechar paradas de terceros para realizar tareas de la cartera pendiente.",
              },
            ],
          },
        },
        {
          id: "les-pcm-3-3",
          order: 3,
          title: {
            "pt-BR": "Corretiva Programada VS Preventiva: Estudo Comparativo Detalhado",
            "en": "Scheduled Corrective vs Preventive: Detailed Comparative Study",
            "es": "Correctiva Programada vs Preventiva: Estudio Comparativo",
          },
          durationMinutes: 7,
          contentType: "video",
          videoUrl: "xZRmRipLRRI",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar os critérios de decisão na montagem do plano mestre de manutenção anual.",
              "en": "Master decision criteria when constructing annual master maintenance schedules.",
              "es": "Dominar los criterios para armar el plan maestro de mantenimiento anual.",
            },
            summaryPoints: [
              {
                "pt-BR": "Comparação de custos: planejamento de peças com antecedência garante melhor negociação de preços com fornecedores.",
                "en": "Cost comparison: staging replacement components with lead-time unlocks superior vendor pricing.",
                "es": "Costos: aprovisionamiento programado asegura mejores precios con proveedores.",
              },
              {
                "pt-BR": "Alocação de mão de obra técnica: cálculo correto do HH (Homem-Hora) necessário para cada tipo de serviço.",
                "en": "Labor resource allocation: accurate man-hour calculations per craft and task type.",
                "es": "Asignación de horas-hombre requeridas por especialidad técnica.",
              },
              {
                "pt-BR": "Retroalimentação do PCM: quando uma peça estraga antes da preventiva, o intervalo precisa ser recalculado.",
                "en": "PCM feedback loop: when components fail before scheduled PM, frequencies must be recalibrated.",
                "es": "Retroalimentación: recalcular frecuencias cuando la pieza falle antes del plazo preventivo previsto.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-pcm-4",
      order: 4,
      title: {
        "pt-BR": "Módulo 4: Ferramentas Ágeis no PCM: Kanban e Programação de Paradas",
        "en": "Module 4: Agile Tools in MPC: Kanban & Outage Scheduling",
        "es": "Módulo 4: Herramientas Ágiles en PCM: Kanban y Programación de Paradas",
      },
      description: {
        "pt-BR": "Aplicação do método Kanban na esteira de ordens de manutenção e os erros fatais que devem ser evitados na programação de paradas.",
        "en": "Applying Kanban boards to maintenance work order workflows and avoiding critical outage scheduling mistakes.",
        "es": "Tableros Kanban para órdenes de trabajo y prevención de errores críticos en paradas.",
      },
      lessons: [
        {
          id: "les-pcm-4-1",
          order: 1,
          title: {
            "pt-BR": "Como Usar o Kanban no PCM? Gestão Visual de Ordens de Serviço",
            "en": "How to Use Kanban in MPC? Visual Management of Work Orders",
            "es": "¿Cómo Usar Kanban en PCM? Gestión Visual de Órdenes de Trabajo",
          },
          durationMinutes: 9,
          contentType: "video",
          videoUrl: "Mzx8C1qF2CI",
          contentDetail: {
            objective: {
              "pt-BR": "Implementar a metodologia Kanban para dar visibilidade total ao fluxo de ordens de serviço (OS) desde a solicitação até a baixa técnica.",
              "en": "Deploy Kanban visual workflows to track work orders from initial work request to post-maintenance sign-off.",
              "es": "Implementar tableros Kanban para visibilizar el ciclo de vida de las órdenes de trabajo.",
            },
            summaryPoints: [
              {
                "pt-BR": "Estrutura clássica do Kanban de Manutenção: Solicitações -> A Planejar (Backlog) -> Aguardando Peças -> Programadas -> Em Execução -> Concluídas.",
                "en": "Standard maintenance Kanban columns: Requested -> Planning -> Waiting on Parts -> Scheduled -> In Progress -> Done.",
                "es": "Columnas estándar del Kanban: Solicitadas -> En Planificación -> En Espera de Repuestos -> Programadas -> En Ejecución -> Concluidas.",
              },
              {
                "pt-BR": "Limite de Trabalho em Progresso (WIP): evitar sobrecarregar os mecânicos com dezenas de ordens abertas simultaneamente.",
                "en": "Work-in-Progress (WIP) limits: preventing technician overload by restricting simultaneous active tickets.",
                "es": "Límites de WIP: evitar sobrecargar a los técnicos con múltiples órdenes abiertas.",
              },
              {
                "pt-BR": "Reuniões diárias de alinhamento operacional (Daily Stand-ups de 10 minutos) com encarregados e líderes de equipe.",
                "en": "10-minute daily stand-ups around the board with craft leads to clear field bottlenecks.",
                "es": "Reuniones diarias de 10 minutos frente al tablero para destrabar impedimentos de terreno.",
              },
            ],
          },
        },
        {
          id: "les-pcm-4-2",
          order: 2,
          title: {
            "pt-BR": "Erros Graves na Programação da Manutenção e Como Evitá-los",
            "en": "Critical Errors in Maintenance Scheduling & Prevention",
            "es": "Errores Críticos en la Programación del Mantenimiento y Cómo Evitarlos",
          },
          durationMinutes: 11,
          contentType: "video",
          videoUrl: "0aSnBq4GavY",
          contentDetail: {
            objective: {
              "pt-BR": "Identificar e eliminar os vícios mais comuns que comprometem o cumprimento do cronograma de manutenção em plantas industriais.",
              "en": "Identify and eliminate common pitfalls that derail plant maintenance shutdown schedules.",
              "es": "Identificar y prevenir los errores más comunes que desvían el cronograma de parada de fábrica.",
            },
            summaryPoints: [
              {
                "pt-BR": "Erro 1: Programar serviços sem certificar fisicamente a disponibilidade das peças no almoxarifado (kit de montagem não verificado).",
                "en": "Error 1: Scheduling tasks without physical verification of parts on hand in the warehouse.",
                "es": "Error 1: Programar tareas sin verificar físicamente que el repuesto esté en el pañol.",
              },
              {
                "pt-BR": "Erro 2: Não alinhar a janela de liberação operacional com a equipe de produção, gerando atraso no início dos trabalhos.",
                "en": "Error 2: Failing to lock in clearance windows with operations, creating idle wrench time at start of shift.",
                "es": "Error 2: No concertar la entrega del equipo con producción antes del inicio del turno.",
              },
              {
                "pt-BR": "Erro 3: Não prever tempo para testes a vazio e reenergização segura antes da entrega definitiva do ativo.",
                "en": "Error 3: Forgetting to budget time for cold/hot commissioning and test runs before operational handoff.",
                "es": "Error 3: Omitir el tiempo necesario para pruebas en vacío y arranque seguro.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-pcm-5",
      order: 5,
      title: {
        "pt-BR": "Módulo 5: Habilidades do Profissional de PCM e Práticas de Sucesso",
        "en": "Module 5: MPC Professional Competencies & Best Practices",
        "es": "Módulo 5: Competencias del Planificador de PCM y Claves de Éxito",
      },
      description: {
        "pt-BR": "Dicas práticas para ser um planejador de sucesso e as competências socioemocionais (soft skills) indispensáveis para a liderança técnica.",
        "en": "Actionable career tips for planners and essential interpersonal soft skills required for technical leadership.",
        "es": "Claves de éxito para el planificador y habilidades blandas necesarias para el liderazgo técnico.",
      },
      lessons: [
        {
          id: "les-pcm-5-1",
          order: 1,
          title: {
            "pt-BR": "5 Dicas para Ser um Profissional de PCM de Sucesso",
            "en": "5 Tips to Become a Successful MPC Professional",
            "es": "5 Claves para Ser un Planificador de PCM Exitoso",
          },
          durationMinutes: 8,
          contentType: "video",
          videoUrl: "hq8OX4wqXN0",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar os 5 princípios práticos que elevam o padrão de entrega e o reconhecimento do planejador na indústria.",
              "en": "Master the 5 practical principles that boost maintenance planner credibility and operational impact.",
              "es": "Dominar las 5 prácticas que elevan la calidad de gestión del planificador industrial.",
            },
            summaryPoints: [
              {
                "pt-BR": "1. Estar presente no chão de fábrica: o bom planejador não fica só na planilha; vai a campo conferir acessos e ferramentas.",
                "en": "1. Field presence: effective planners walk the plant floor to verify scaffolding, clearances, and tools.",
                "es": "1. Estar en la planta: verificar en terreno accesos, andamios y condiciones reales de trabajo.",
              },
              {
                "pt-BR": "2. Padronizar descrições de serviços e instruções de trabalho para facilitar a execução dos mecânicos.",
                "en": "2. Standardize task scopes and step-by-step job plans to empower frontline craft mechanics.",
                "es": "2. Estandarizar alcances e instrucciones técnicas para facilitar el trabajo del mecánico.",
              },
              {
                "pt-BR": "3. Monitorar indicadores-chave (MTBF, MTTR, Cumprimento de Programação e Aderência ao Plano) de forma transparente.",
                "en": "3. Monitor KPIs (MTBF, MTTR, Schedule Compliance, PM Backlog) with high operational transparency.",
                "es": "3. Monitorear indicadores clave de confiabilidad (MTBF, MTTR, cumplimiento de programación).",
              },
            ],
          },
        },
        {
          id: "les-pcm-5-2",
          order: 2,
          title: {
            "pt-BR": "Soft Skills no PCM: Comunicação, Negociação e Liderança",
            "en": "Soft Skills in MPC: Communication, Negotiation & Leadership",
            "es": "Habilidades Blandas en PCM: Comunicación, Negociación y Liderazgo",
          },
          durationMinutes: 9,
          contentType: "video",
          videoUrl: "0fOrpEy-dqo",
          contentDetail: {
            objective: {
              "pt-BR": "Desenvolver a inteligência emocional e as habilidades de comunicação necessárias para articular produção, manutenção e compras.",
              "en": "Develop emotional intelligence and interpersonal skills to harmonize operations, maintenance, and procurement.",
              "es": "Desarrollar habilidades de comunicación y negociación entre producción, mantenimiento y compras.",
            },
            summaryPoints: [
              {
                "pt-BR": "Comunicação assertiva: saber traduzir termos técnicos da engenharia em prazos e impactos claros para a gerência de operações.",
                "en": "Assertive communication: translating mechanical engineering jargon into business impacts and clear production windows.",
                "es": "Comunicación asertiva: traducir aspectos técnicos en impactos de producción comprensibles para la gerencia.",
              },
              {
                "pt-BR": "Poder de negociação: negociar datas de parada com produção equilibrando metas de volume e necessidade de segurança dos equipamentos.",
                "en": "Negotiation acumen: bargaining downtime slots with production managers while balancing asset safety and targets.",
                "es": "Capacidad de negociación: concertar paradas de planta equilibrando metas fabriles y salud de la maquinaria.",
              },
              {
                "pt-BR": "Empatia e escuta ativa com a equipe de campo: valorizar os relatos dos operadores e mecânicos para enriquecer os planos.",
                "en": "Active listening and empathy with field mechanics: incorporating field insights into CMMS job packages.",
                "es": "Escucha activa hacia los mecánicos: incorporar su experiencia práctica en los planes de trabajo.",
              },
            ],
          },
        },
      ],
    },
  ],
  finalAssessment: {
    id: "exam-pcm-planejamento",
    order: 14,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 25,
    questionsCount: 5,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação teórica com 5 questões sobre conceitos de PCM, rotinas preventivas, Kanban, inspeção sensitiva e planejamento de paradas. Nota mínima de 70% para emissão do certificado.",
      "en": "Theoretical assessment covering MPC principles, preventive scheduling, Kanban, sensory inspection, and outage planning. 70% passing score.",
      "es": "Evaluación teórica sobre principios de PCM, rutinas preventivas, Kanban y paradas de planta. Aprobación mínima del 70%.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência — PCM Industrial",
      "en": "Final Competency Exam — Industrial MPC",
      "es": "Evaluación Final de Competencias — PCM Industrial",
    },
    description: {
      "pt-BR": "Validação de conhecimentos em Planejamento e Controle da Manutenção, gestão de ordens de serviço, indicadores de confiabilidade e boas práticas de programação.",
      "en": "Validation of expertise in Maintenance Planning & Control, work order management, reliability KPIs, and scheduling best practices.",
      "es": "Validación de conocimientos en planificación, control de mantenimiento e indicadores de confiabilidad.",
    },
    questions: [
      {
        id: "q-pcm-1",
        order: 1,
        question: {
          "pt-BR": "1. No escopo do PCM, qual é a diferença fundamental entre as atividades de Planejar a manutenção e Programar a manutenção?",
          "en": "1. In MPC scope, what is the fundamental difference between Planning and Scheduling maintenance?",
          "es": "1. En el marco del PCM, ¿cuál es la diferencia fundamental entre Planificar y Programar el mantenimiento?",
        },
        options: [
          {
            id: "q1-a",
            text: {
              "pt-BR": "Planejar define O QUE fazer, QUAIS peças, ferramentas e procedimentos são necessários; Programar define QUANDO fazer e QUEM executará o serviço.",
              "en": "Planning defines WHAT to do, WHICH parts, tools, and steps are required; Scheduling defines WHEN to execute and WHO does the work.",
              "es": "Planificar define QUÉ hacer y QUÉ repuestos/herramientas se necesitan; Programar define CUÁNDO y QUIÉN lo ejecutará.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O planejamento prepara todo o pacote de trabalho (Job Package) e a programação acopla o pacote à janela de parada com a equipe disponível.",
              "en": "Correct! Planning creates the job package; scheduling synchronizes it with available calendar windows and craft technicians.",
              "es": "¡Correcto! Planificar arma el paquete técnico y programar fija la fecha y recursos de ejecución.",
            },
          },
          {
            id: "q1-b",
            text: {
              "pt-BR": "Planejar é apenas comprar ferramentas novas e programar é emitir a nota fiscal.",
              "en": "Planning is just buying tools and scheduling is invoicing.",
              "es": "Planificar es comprar herramientas y programar es facturar.",
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
              "pt-BR": "São sinônimos exatos e não possuem nenhuma diferença de conceito ou rotina.",
              "en": "They are exact synonyms with no practical difference.",
              "es": "Son exactamente lo mismo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Confundir planejamento com programação é uma das causas principais de falha na gestão de manutenção.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-pcm-2",
        order: 2,
        question: {
          "pt-BR": "2. Por que a Corretiva Programada NÃO deve ser confundida conceitualmente com a Manutenção Preventiva?",
          "en": "2. Why must Scheduled Corrective NOT be conceptually confused with Preventive Maintenance?",
          "es": "2. ¿Por qué el Correctivo Programado NO debe confundirse con el Mantenimiento Preventivo?",
        },
        options: [
          {
            id: "q2-a",
            text: {
              "pt-BR": "Porque na corretiva programada já existe uma falha ou anomalia pré-identificada no ativo, enquanto na preventiva intervém-se de forma cíclica antes de qualquer sintoma de defeito.",
              "en": "Because in scheduled corrective a defect or anomaly already exists, whereas preventive intervenes cyclically before any defect develops.",
              "es": "Porque en el correctivo programado ya existe una anomalía detectada, mientras que el preventivo interviene antes de cualquier daño.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Se já há uma trinca ou vazamento detectado na inspeção, trata-se de uma anomalia existente com reparo programado antes do colapso funcional.",
              "en": "Correct! If a crack or leak already exists, it is a known anomaly being scheduled before catastrophic failure.",
              "es": "¡Correcto! Si ya hay un defecto detectado, se programa la reparación de un fallo existente.",
            },
          },
          {
            id: "q2-b",
            text: {
              "pt-BR": "Porque a corretiva programada não precisa de nenhuma peça sobressalente.",
              "en": "Because scheduled corrective requires no spare parts.",
              "es": "Porque el correctivo programado no necesita repuestos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Requer peças previamente separadas.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q2-c",
            text: {
              "pt-BR": "Porque a preventiva só pode ser realizada aos sábados e domingos.",
              "en": "Because preventive can only be performed on weekends.",
              "es": "Porque el preventivo solo se realiza los fines de semana.",
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
        id: "q-pcm-3",
        order: 3,
        question: {
          "pt-BR": "3. Na aplicação da metodologia Kanban no PCM, qual é o principal benefício de definir Limites de Trabalho em Progresso (WIP Limits)?",
          "en": "3. When using Kanban in MPC, what is the main benefit of setting Work-In-Progress (WIP) limits?",
          "es": "3. En un tablero Kanban de PCM, ¿cuál es el beneficio principal de fijar Límites de Trabajo en Proceso (WIP)?",
        },
        options: [
          {
            id: "q3-a",
            text: {
              "pt-BR": "Evitar o início desordenado de dezenas de tarefas ao mesmo tempo, reduzindo o tempo de conclusão (Lead Time) e focando em terminar ordens antes de abrir novas.",
              "en": "Preventing starting too many tasks concurrently, slashing completion Lead Time, and prioritizing finishing work before taking new work.",
              "es": "Evitar iniciar múltiples tareas simultáneas, acortando el tiempo de ciclo y priorizando terminar órdenes antes de abrir nuevas.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O lema do Kanban é 'Pare de começar e comece a terminar'. Limitar o WIP expõe gargalos e foca a equipe na entrega efetiva.",
              "en": "Correct! 'Stop starting, start finishing'. WIP limits surface bottlenecks and ensure disciplined task completion.",
              "es": "¡Correcto! Limitar el WIP evita la sobrecarga y visibiliza los cuellos de botella en el taller.",
            },
          },
          {
            id: "q3-b",
            text: {
              "pt-BR": "Impedir que os mecânicos utilizem ferramentas manuais no chão de fábrica.",
              "en": "Banning technicians from using hand tools on the plant floor.",
              "es": "Prohibir el uso de herramientas manuales.",
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
              "pt-BR": "Obrigar que todas as ordens de serviço sejam concluídas em exatamente 5 minutos.",
              "en": "Requiring all work orders to finish in 5 minutes.",
              "es": "Exigir que toda orden dure 5 minutos.",
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
        id: "q-pcm-4",
        order: 4,
        question: {
          "pt-BR": "4. Qual é o erro grave mais comum na programação de uma parada de manutenção industrial que frequentemente paralisa as frentes de trabalho?",
          "en": "4. What is the most common catastrophic error in shutdown scheduling that halts work crews?",
          "es": "4. ¿Cuál es el error más grave y frecuente al programar una parada de planta que paraliza los frentes de trabajo?",
        },
        options: [
          {
            id: "q4-a",
            text: {
              "pt-BR": "Programar a execução sem verificar fisicamente com antecedência se todos os sobressalentes, kits de vedação e consumíveis estão de fato no almoxarifado.",
              "en": "Scheduling work without physically inspecting that all replacement parts, seal kits, and consumables are actually in the warehouse.",
              "es": "Programar la tarea sin constatar físicamente en el almacén la disponibilidad real de repuestos, empaquetaduras y consumibles.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Confiar apenas no sistema ERP sem a verificação física pode levar a desmontar o equipamento e descobrir que a peça está em falta ou incorreta.",
              "en": "Correct! Relying solely on software without physical kitting checks leads to tearing down machinery only to discover missing or wrong parts.",
              "es": "¡Correcto! Desarmar un equipo sin comprobar el repuesto físico en pañol puede detener la planta por días.",
            },
          },
          {
            id: "q4-b",
            text: {
              "pt-BR": "Fazer a limpeza industrial da máquina com hidrojateamento antes de desmontar.",
              "en": "Cleaning equipment with hydroblasting prior to dismantling.",
              "es": "Limpiar el equipo antes de desarmarlo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A limpeza técnica preliminar é uma excelente prática recomendada.",
              "en": "Incorrect. Technical cleaning is a highly recommended best practice.",
              "es": "Incorrecto. La limpieza previa es una buena práctica recomendada.",
            },
          },
          {
            id: "q4-c",
            text: {
              "pt-BR": "Emitir uma Ordem de Serviço formal com roteiro de segurança.",
              "en": "Issuing a formal work order with safety instructions.",
              "es": "Emitir una orden de trabajo con análisis de riesgo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Essa é a diretriz mandatória de conformidade.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-pcm-5",
        order: 5,
        question: {
          "pt-BR": "5. Qual habilidade interpessoal (soft skill) é indispensável para um profissional de PCM garantir que as paradas de manutenção aconteçam sem atritos com a gerência fabril?",
          "en": "5. Which interpersonal soft skill is vital for an MPC professional to ensure friction-free shutdown coordination with plant operations?",
          "es": "5. ¿Qué habilidad blanda es fundamental para que el planificador concierte paradas de planta sin fricciones con operaciones?",
        },
        options: [
          {
            id: "q5-a",
            text: {
              "pt-BR": "Comunicação assertiva e capacidade de negociação baseada em dados, explicando os riscos de não parar e acordando janelas viáveis para ambos os lados.",
              "en": "Assertive communication and data-driven negotiation, explaining the operational risk of running to failure and agreeing on mutually viable windows.",
              "es": "Comunicación asertiva y negociación basada en datos, evidenciando riesgos de rotura y acordando ventanas viables para ambas partes.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O PCM é o elo entre a necessidade de produzir e a necessidade de conservar os ativos mecânicos; a negociação fundamentada em dados técnicos é a chave do sucesso.",
              "en": "Correct! MPC bridges operations volume targets and equipment health; data-backed negotiation builds trust.",
              "es": "¡Correcto! El planificador articula producción y mantenimiento con argumentos técnicos sólidos.",
            },
          },
          {
            id: "q5-b",
            text: {
              "pt-BR": "Impor unilateralmente a parada de surpresa sem avisar os operadores da fábrica.",
              "en": "Unilaterally halting machinery as a surprise without alerting plant operators.",
              "es": "Frenar la fábrica por sorpresa sin avisar a los operadores.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Ações não coordenadas geram conflito e prejuízos severos.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q5-c",
            text: {
              "pt-BR": "Delegar o preenchimento de relatórios a estagiários sem realizar nenhuma validação.",
              "en": "Delegating technical reports without review.",
              "es": "Delegar informes sin revisar.",
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
