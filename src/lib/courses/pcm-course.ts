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
    estimatedMinutes: 50,
    questionsCount: 10,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Estudo de Caso & Avaliação Técnica Avançada de Planejamento e Controle da Manutenção (PCM). Exige cálculo de indicadores de confiabilidade (MTBF, MTTR, Disponibilidade Física), dimensionamento de Backlog em semanas, matriz de criticidade RCM e kitting para paradas gerais na CMPC. Nota mínima de 70% para certificação.",
      "en": "Advanced Maintenance Planning & Control (MPC) Case Study & Technical Assessment. Covers reliability indicators calculation (MTBF, MTTR, Physical Availability), Backlog sizing in weeks, RCM criticality matrix, and outage kitting. 70% passing score.",
      "es": "Estudio de Caso y Evaluación Técnica Avanzada de PCM. Requiere cálculo de confiabilidad (MTBF, MTTR, Disponibilidad), cálculo de Backlog, criticidad RCM y preparación de paradas en CMPC. Aprobación mínima del 70%.",
    },
    title: {
      "pt-BR": "Estudo de Caso & Avaliação Prática — Engenharia de PCM & Confiabilidade Industrial",
      "en": "Case Study & Technical Assessment — MPC Engineering & Industrial Reliability",
      "es": "Estudio de Caso y Evaluación Práctica — Ingeniería de PCM y Confiabilidad Industrial",
    },
    description: {
      "pt-BR": "Cenário de Engenharia na CMPC: Auditoria e cálculo de indicadores de uma frota de 4 bombas centrífugas de polpa de celulose durante o trimestre (2.160 horas de calendário). Análise de paradas corretivas vs preventivas, curva de mortalidade e gestão de ordens em backlog.",
      "en": "Engineering Scenario at CMPC: Auditing and calculating KPIs for 4 centrifugal pulp slurry pumps during a 2,160-hour calendar quarter. Analyzing corrective vs preventive downtime, failure rates, and backlog work orders.",
      "es": "Caso de Ingeniería en CMPC: Auditoría y cálculo de confiabilidad de 4 bombas de pulpa en un trimestre (2.160 horas). Análisis de tiempos de parada, fallas mecánicas y backlog.",
    },
    questions: [
      {
        id: "q-pcm-1",
        order: 1,
        question: {
          "pt-BR": "CENÁRIO 1: Em uma linha crítica de branqueamento da celulose na CMPC, uma bomba de processo operou em um trimestre de 90 dias (2.160 horas totais de calendário). O histórico da bomba registrou: 4 paradas corretivas não planejadas totalizando 48 horas de reparo, e 3 paradas preventivas programadas totalizando 32 horas de intervenção. Não houve paradas operacionais por falta de matéria-prima. Calcule o MTBF (Tempo Médio Entre Falhas Corretivas), o MTTR (Tempo Médio Para Reparo Corretivo) e a Disponibilidade Física (DF) operacional desse equipamento:",
          "en": "SCENARIO 1: On a critical pulp bleaching line at CMPC, a process pump operated during a 90-day quarter (2,160 calendar hours). Maintenance logs: 4 unplanned corrective breakdowns totaling 48 hours of repair, and 3 scheduled preventive outages totaling 32 hours. Operational downtime was zero. Calculate MTBF, MTTR, and Physical Availability (PA):",
          "es": "ESCENARIO 1: En una línea de blanqueo de pulpa en CMPC, una bomba operó durante 90 días (2.160 horas). Registros: 4 paradas correctivas (48 horas en total) y 3 paradas preventivas (32 horas). Calcule MTBF, MTTR y Disponibilidad Física (DF):",
        },
        options: [
          {
            id: "opt-pcm-1-a",
            text: {
              "pt-BR": "Tempo de Operação = 2.160 horas; MTBF = 2.160 / 7 paradas = 308,5 horas; MTTR = (48 + 32) / 7 = 11,4 horas; DF = (2.160 / 2.160) = 100%.",
              "en": "Operating Hours = 2,160 h; MTBF = 2,160 / 7 = 308.5 h; MTTR = 80 / 7 = 11.4 h; PA = 100%.",
              "es": "Operación = 2.160 h; MTBF = 2.160 / 7 = 308,5 h; MTTR = 80 / 7 = 11,4 h; DF = 100%.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Erro conceitual gravíssimo de misturar paradas preventivas com falhas no cálculo do MTBF e ignorar a perda de disponibilidade no cálculo da DF.",
              "en": "Incorrect. Conflating scheduled preventives with random failures completely invalidates MTBF reliability engineering.",
              "es": "Incorrecto. Mezclar mantenimientos preventivos con fallas anula la validez del MTBF.",
            },
          },
          {
            id: "opt-pcm-1-b",
            text: {
              "pt-BR": "Tempo de Operação Líquida = 2.160 - (48 + 32) = 2.080 horas; MTBF = 2.080 / 4 falhas = 520,0 horas; MTTR = 48 / 4 reparos = 12,0 horas; DF = (2.080 / 2.160) × 100 = 96,30%.",
              "en": "Net Operating Hours = 2,160 - (48 + 32) = 2,080 h; MTBF = 2,080 / 4 failures = 520.0 hours; MTTR = 48 / 4 repairs = 12.0 hours; PA = (2,080 / 2,160) × 100 = 96.30%.",
              "es": "Tiempo Operativo Neto = 2.080 h; MTBF = 2.080 / 4 = 520,0 horas; MTTR = 48 / 4 = 12,0 horas; DF = (2.080 / 2.160) × 100 = 96,30%.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O MTBF considera estritamente o tempo em que a máquina estava rodando dividido pelo número de falhas mecânicas; as paradas preventivas não contam como falhas, mas abatem das horas rodadas. O MTTR é o somatório das horas corretivas dividido pelas ocorrências corretivas.",
              "en": "Correct! MTBF uses operating runtime divided by failure events (preventive outages reduce runtime but do not count as failures). MTTR is total corrective downtime divided by corrective events.",
              "es": "¡Correcto! El cálculo riguroso deduce los tiempos de parada del tiempo calendario antes de computar MTBF sobre las fallas reales.",
            },
          },
          {
            id: "opt-pcm-1-c",
            text: {
              "pt-BR": "MTBF = 48 horas / 4 = 12 horas; MTTR = 2.080 horas / 4 = 520 horas; DF = 50%.",
              "en": "MTBF = 12 h; MTTR = 520 h; PA = 50%.",
              "es": "MTBF = 12 h; MTTR = 520 h; DF = 50%.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Inversão dos conceitos de MTBF (Mean Time Between Failures) e MTTR (Mean Time to Repair).",
              "en": "Incorrect. Inverted definitions of MTBF and MTTR.",
              "es": "Incorrecto. Conceptos invertidos.",
            },
          },
          {
            id: "opt-pcm-1-d",
            text: {
              "pt-BR": "MTBF = 2.160 / 4 = 540 horas; MTTR = (48 + 32) / 4 = 20 horas; DF = 90,00%.",
              "en": "MTBF = 540 h; MTTR = 20 h; PA = 90.00%.",
              "es": "MTBF = 540 h; MTTR = 20 h; DF = 90,00%.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Não se pode calcular MTBF com as 2.160 horas brutas sem subtrair os períodos em que a máquina estava parada.",
              "en": "Incorrect. MTBF requires net uptime, not gross calendar hours including downtime.",
              "es": "Incorrecto. Requiere horas netas de marcha.",
            },
          },
        ],
      },
      {
        id: "q-pcm-2",
        order: 2,
        question: {
          "pt-BR": "CENÁRIO 2: A equipe de manutenção da RSS3 possui 8 mecânicos e 2 eletricistas trabalhando em regime de 44 horas semanais com um Fator de Produtividade Médio (Wrench Time / Tempo de Chave na Mão) estimado em 40%. A carteira de Ordens de Serviço pendentes e aprovadas para execução soma 1.408 horas-homem estimadas. Qual é o Backlog dessa equipe em SEMANAS e como esse valor deve ser interpretado pela liderança do PCM?",
          "en": "SCENARIO 2: RSS3 maintenance team consists of 8 mechanics and 2 electricians working 44 hours/week, with an average Wrench Time (hands-on tool time) of 40%. The approved pending work order backlog totals 1,408 estimated man-hours. What is the team's Backlog in WEEKS and how should MPC leadership interpret this metric?",
          "es": "ESCENARIO 2: Equipo de 10 técnicos (44 h/semana cada uno) con Tiempo de Llave en Mano del 40%. Las órdenes aprobadas pendientes suman 1.408 horas-hombre. ¿Cuál es el Backlog en SEMANAS y cuál es su interpretación?",
        },
        options: [
          {
            id: "opt-pcm-2-a",
            text: {
              "pt-BR": "Capacidade nominal semanal = 10 técnicos × 44h = 440 HH; Capacidade real efetiva = 440 × 0,40 = 176 HH/semana; Backlog = 1.408 HH / 176 HH/sem = 8,0 semanas (ou 3,2 semanas na capacidade nominal pura). Um backlog de 8 semanas reais indica sobrecarga da equipe, risco de acúmulo de ordens corretivas e necessidade de revisão de escopo ou contratação de apoio externo.",
              "en": "Nominal weekly capacity = 10 × 44h = 440 man-hours; Effective wrench capacity = 440 × 0.40 = 176 MH/week; Backlog = 1,408 / 176 = 8.0 weeks (or 3.2 weeks nominal). 8 real weeks warns of maintenance overload, backlog aging, and potential need for contractor support.",
              "es": "Capacidad nominal = 440 HH; Capacidad efectiva = 176 HH/semana; Backlog = 8 semanas reales (3,2 nominales). Indica sobrecarga crítica y riesgo de obsolescencia de órdenes.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O dimensionamento de Backlog que leva em conta a produtividade de campo (Wrench Time) reflete a realidade das paradas. A faixa saudável recomendada na indústria de celulose é entre 3 e 5 semanas nominais.",
              "en": "Correct! Calculating backlog adjusted by wrench time provides realistic scheduling forecasts. Pulp & paper target range is typically 3-5 nominal weeks.",
              "es": "¡Correcto! El cálculo con wrench time evidencia la velocidad real de absorción del trabajo pendiente.",
            },
          },
          {
            id: "opt-pcm-2-b",
            text: {
              "pt-BR": "Backlog = 1.408 / 10 técnicos = 140,8 semanas. A equipe está com 3 anos de atraso e todos os serviços devem ser cancelados.",
              "en": "Backlog = 1,408 / 10 = 140.8 weeks. The team is 3 years behind and all tasks should be discarded.",
              "es": "Backlog = 140,8 semanas. Hay 3 años de retraso.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A capacidade semanal não é dividida apenas pelo número de técnicos sem considerar a jornada de trabalho semanal de 44h.",
              "en": "Incorrect. Ignores the weekly working hours per technician in the denominator.",
              "es": "Incorrecto. Omite las horas semanales por técnico.",
            },
          },
          {
            id: "opt-pcm-2-c",
            text: {
              "pt-BR": "Backlog = zero, pois ordens pendentes no sistema não geram custo financeiro imediato.",
              "en": "Backlog is zero because pending orders incur no immediate financial debit.",
              "es": "Backlog es cero porque las órdenes no facturan.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Backlog é o indicador-chave de acúmulo de demanda de trabalho de manutenção.",
              "en": "Incorrect. Backlog measures workload demand, not accounting expense.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "opt-pcm-2-d",
            text: {
              "pt-BR": "Backlog = 1.408 × 44h = 61.952 semanas de trabalho acumulado.",
              "en": "Backlog = 1,408 × 44h = 61,952 weeks of accumulated work.",
              "es": "Backlog = 61.952 semanas de trabajo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Multiplicar em vez de dividir inverte o indicador temporal.",
              "en": "Incorrect. Inverted algebraic formula.",
              "es": "Incorrecto. Error en la fórmula.",
            },
          },
        ],
      },
      {
        id: "q-pcm-3",
        order: 3,
        question: {
          "pt-BR": "CENÁRIO 3: Em uma análise de RCM (Manutenção Centrada na Confiabilidade) para a Parada Geral da CMPC, você classifica uma válvula de bloqueio de emergência da caldeira de recuperação na Classe de Criticidade 'A' (Alta Criticidade). Por que essa válvula exige estratégia de Manutenção Preditiva / Inspeção Funcional Periódica e Kitting prévio com 100% de peças reservadas, em vez de Manutenção Corretiva (Run-to-Failure)?",
          "en": "SCENARIO 3: In an RCM analysis for CMPC's General Outage, an emergency isolation valve on the recovery boiler is ranked Criticality 'A'. Why does this asset require Predictive Maintenance / Periodic Functional Testing and strict 100% pre-kitting rather than Run-to-Failure (Corrective)?",
          "es": "ESCENARIO 3: En un análisis RCM para la Parada de CMPC, una válvula de seguridad de caldera de recuperación se clasifica Criticidad 'A'. ¿Por qué exige predictivo, pruebas periódicas y kitting al 100% en lugar de mantenimiento correctivo a la rotura?",
        },
        options: [
          {
            id: "opt-pcm-3-a",
            text: {
              "pt-BR": "Porque a válvula foi pintada de vermelho e peças vermelhas quebram mais rápido.",
              "en": "Because the valve is painted red and red items wear faster.",
              "es": "Porque la válvula es roja y se rompe antes.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e sem fundamentação de engenharia.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "opt-pcm-3-b",
            text: {
              "pt-BR": "Porque a manutenção preditiva elimina a necessidade de qualquer parada de máquina pelos próximos 20 anos.",
              "en": "Because predictive maintenance eliminates outages completely for 20 years.",
              "es": "Porque el predictivo evita parar la máquina por 20 años.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A preditiva identifica a evolução de defeitos (curva P-F) para planejar a intervenção dentro da janela ótima antes da quebra funcional.",
              "en": "Incorrect. Predictive tracks the P-F curve to optimize intervention timing prior to functional breakdown.",
              "es": "Incorrecto. El predictivo monitoriza la curva P-F para programar el cambio a tiempo.",
            },
          },
          {
            id: "opt-pcm-3-c",
            text: {
              "pt-BR": "Porque falhas em equipamentos Classe 'A' geram impactos inaceitáveis de segurança humana, catástrofe ambiental ou parada total do processo produtivo (custo de indisponibilidade superior a dezenas de milhares de reais/hora); além disso, se for falha oculta (Hidden Failure), ela só seria descoberta no momento do acidente se não for testada ciclicamente.",
              "en": "Because Class 'A' failures cause unacceptable human safety hazards, environmental disasters, or catastrophic plant outages ($10k+/hr); moreover, hidden failures would only surface during a real disaster without proactive functional testing.",
              "es": "Porque el fallo Clase 'A' acarrea riesgos inaceptables para la vida, medio ambiente y costos extremos de parada de planta; además, los fallos ocultos solo se descubren en emergencias si no hay pruebas funcionales.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Na metodologia RCM e FMEA, o Run-to-Failure só é aceitável para ativos Classe 'C' (sem impacto à segurança, meio ambiente e com baixo custo de substituição/pequeno impacto produtivo).",
              "en": "Correct! Under RCM/FMEA guidelines, Run-to-Failure is strictly limited to Class 'C' non-safety, low-consequence components.",
              "es": "¡Correcto! En RCM el correctivo a rotura solo se tolera en equipos auxiliares sin impacto a la seguridad ni al proceso.",
            },
          },
          {
            id: "opt-pcm-3-d",
            text: {
              "pt-BR": "Porque a norma proíbe ter estoque de sobressalentes para equipamentos auxiliares da caldeira.",
              "en": "Because standards prohibit stocking spare parts for boiler auxiliaries.",
              "es": "Porque la norma prohíbe tener stock de repuestos de caldera.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "O kitting e estoque estratégico de sobressalentes críticos é pilar fundamental da governança de ativos da CMPC.",
              "en": "Strategic kitting and spare parts staging is fundamental asset governance.",
              "es": "El stock de piezas críticas es mandatorio en activos clase A.",
            },
          },
        ],
      },
      {
        id: "q-pcm-4",
        order: 4,
        question: {
          "pt-BR": "CENÁRIO 4: Durante a rota de monitoramento por Análise de Vibração em um ventilador de tiragem induzida de 350 kW, o técnico coletou os espectros de FFT nos mancais. O espectro apresentou pico de vibração dominante exatamente em 1X RPM (frequência de rotação do eixo) na direção radial, com defasagem de fase de 90° entre os pontos de medição horizontal e vertical, sem harmônicos múltiplos significativos. Qual é o diagnóstico preliminar do PCM e qual ordem de serviço deve ser programada com urgência?",
          "en": "SCENARIO 4: During a vibration route on a 350 kW induced draft fan, FFT spectrum on bearings reveals a dominant peak strictly at 1X RPM in radial direction, with a 90° phase shift between horizontal and vertical planes, with no significant higher harmonics. What is the preliminary MPC diagnostic and what work order must be planned?",
          "es": "ESCENARIO 4: En una ruta de vibraciones de un ventilador de tiro de 350 kW, el espectro FFT muestra un pico dominante en 1X RPM radial con desfase de 90° H/V y sin armónicos superiores. ¿Cuál es el diagnóstico de PCM y la orden de trabajo?",
        },
        options: [
          {
            id: "opt-pcm-4-a",
            text: {
              "pt-BR": "Diagnóstico: Curto-circuito nas bobinas do estator do motor elétrico. Ordem de Serviço: Trocar o motor imediatamente por outro de menor potência.",
              "en": "Diagnostic: Stator electrical short. Work order: Replace motor with lower power.",
              "es": "Diagnóstico: Cortocircuito de estator. Orden: Cambiar motor.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Problemas elétricos geram frequências de passagem de polos (2×FL) e modulações elétricas específicas.",
              "en": "Incorrect. Electrical faults produce pole-pass frequencies and double supply line harmonics.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "opt-pcm-4-b",
            text: {
              "pt-BR": "Diagnóstico: Falha de lubrificação no mancal, resolvida simplesmente adicionando 10 kg de graxa até vazar pelos retentores.",
              "en": "Diagnostic: Lack of bearing grease, solved by pumping 10 kg of grease until overflowing.",
              "es": "Diagnóstico: Falta de grasa, resuelta inyectando 10 kg de grasa.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Falha de lubrificação geraria ruído em altíssima frequência (Demodulação/Envelope HFE), e superlubrificar causaria superaquecimento e destruição do mancal.",
              "en": "Incorrect. Over-greasing induces catastrophic churning and thermal bearing runaway; lubrication failure appears in HFE demodulation, not pure 1X radial.",
              "es": "Incorrecto. Sobrelubricar revienta los sellos y provoca sobrecalentamiento destructivo.",
            },
          },
          {
            id: "opt-pcm-4-c",
            text: {
              "pt-BR": "Diagnóstico: Desalinhamento angular severo entre motor e ventilador com desvio axial de 5 mm.",
              "en": "Diagnostic: Severe angular misalignment between motor and fan with 5 mm axial runout.",
              "es": "Diagnóstico: Desalineación angular severa.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Desalinhamento se manifesta com forte componente axial e picos dominantes em 2X RPM, com defasagem de 180° no acoplamento.",
              "en": "Misalignment features strong 2X harmonics and 180° phase shifts across couplings.",
              "es": "La desalineación genera picos en 2X y vibración axial pronunciada.",
            },
          },
          {
            id: "opt-pcm-4-d",
            text: {
              "pt-BR": "Diagnóstico: Desbalanceamento de massa no rotor (desgaste irregular ou incrustação de material nas pás do ventilador). Ordem de Serviço: Programar inspeção visual para limpeza/hidrojato do rotor e balanceamento dinâmico em campo com massas de calibração.",
              "en": "Diagnostic: Rotor mass unbalance (uneven fouling or slurry caking on fan blades). Work order: Plan visual inspection for rotor hydroblasting/cleaning and on-site dynamic field balancing with trial weights.",
              "es": "Diagnóstico: Desbalanceo de masa en el rotor (incrustaciones o desgaste de álabes). Orden: Programar limpieza por hidrolavado y balanceo dinámico en campo.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O pico limpo em 1X RPM em eixos radiais com 90° de defasagem de fase é a assinatura vibracional clássica de desbalanceamento mecânico. Desalinhamento geraria fortes harmônicos em 2X e vibração axial; folga mecânica geraria múltiplos harmônicos 1X, 2X, 3X, etc.",
              "en": "Correct! A pure 1X RPM peak with sinusoidal 90° orthogonal phase is the classic textbook signature of unbalance. Misalignment creates 2X and axial peaks; mechanical looseness triggers harmonic series.",
              "es": "¡Correcto! 1X RPM dominante radial con 90° de diferencia de fase es el síntoma inequívoco de desbalanceo.",
            },
          },
        ],
      },
      {
        id: "q-pcm-5",
        order: 5,
        question: {
          "pt-BR": "CENÁRIO 5: Na véspera de uma Parada Geral de 72 horas na CMPC, o planejador de PCM realiza a auditoria do 'Job Package' (Pacote de Trabalho) para a substituição de uma linha de tubulação de alta pressão. Quais são os 5 componentes mandatórios que devem estar fisicamente conferidos e anexados à Ordem de Serviço para que a frente seja liberada com Risco Zero de atraso por falta de recursos?",
          "en": "SCENARIO 5: On the eve of a 72-hour General Shutdown at CMPC, the MPC planner audits the Job Package for replacing a high-pressure piping line. Which 5 mandatory components must be physically staged and attached to the Work Order to greenlight execution with Zero Resource Stoppage Risk?",
          "es": "ESCENARIO 5: Víspera de una Parada de 72 horas en CMPC. ¿Cuáles son los 5 elementos obligatorios que deben estar cotejados físicamente y adjuntos a la Orden para autorizar el inicio sin riesgo de paralización?",
        },
        options: [
          {
            id: "opt-pcm-5-a",
            text: {
              "pt-BR": "1) Procedimento Operacional Padrão (POP) e Análise Preliminar de Risco (APR); 2) Lista de peças sobressalentes fisicamente kitadas e etiquetadas no almoxarifado (juntas, parafusos B7, curvas e flanges); 3) Ferramental especial reservado (torquímetro calibrado, máquina de biselar); 4) Equipamentos de movimentação de carga com plano de rigging aprovado; 5) Matriz de bloqueio LOTO (Lockout/Tagout) validada com a operação.",
              "en": "1) SOP and Job Safety Analysis (JSA); 2) Physically staged and tagged kitted parts in warehouse (gaskets, B7 studs, pipe spools); 3) Reserved calibrated special tools (hydraulic torque wrench); 4) Crane/rigging equipment with approved lift plan; 5) LOTO isolation matrix verified with plant operations.",
              "es": "1) Procedimiento técnico y AST/APR de seguridad; 2) Repuestos físicamente apartados en pañol (juntas, espárragos B7, cañerías); 3) Herramental especial calibrado; 4) Plan de izaje aprobado; 5) Matriz de bloqueo LOTO coordinada con operaciones.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Esse é o padrão internacional de excelência em Engenharia de PCM para Paradas Industriais. A ausência de qualquer um desses itens converte uma manutenção programada em improviso, gerando acidentes ou estouro de prazo na partida da fábrica.",
              "en": "Correct! Industry benchmark for outage Job Packages. Missing any element leads to crew idle time, field improvisations, safety breaches, or missed startup milestones.",
              "es": "¡Correcto! La preparación integral del paquete de trabajo es la garantía contra sobrecostos y desvíos de plazo en paradas generales.",
            },
          },
          {
            id: "opt-pcm-5-b",
            text: {
              "pt-BR": "Apenas o crachá do mecânico líder e um bloco de notas em branco.",
              "en": "Only the lead technician badge and a blank notepad.",
              "es": "Solo la credencial del mecánico y un cuaderno en blanco.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Ações sem planejamento e kitting prévio geram retrabalho e riscos inaceitáveis.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "opt-pcm-5-c",
            text: {
              "pt-BR": "Uma promessa verbal do fornecedor de que as peças serão despachadas por motoboy no meio da madrugada.",
              "en": "A verbal promise from a supplier that parts will arrive mid-shift.",
              "es": "Una promesa verbal del proveedor de que entregará las piezas durante la noche.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Confiar em entregas de peças durante a janela de parada sem kitting em almoxarifado é uma das causas principais de fracasso em paradas.",
              "en": "Incorrect. Relying on just-in-time delivery during shutdowns without warehouse staging is a primary cause of outage delays.",
              "es": "Incorrecto. Causa clásica de fracaso en paradas industriales.",
            },
          },
          {
            id: "opt-pcm-5-d",
            text: {
              "pt-BR": "Comprovante de pagamento de pedágio do caminhão de transporte e cartão de visitas da lanchonete local.",
              "en": "Toll gate receipts and diner business cards.",
              "es": "Recibos de peaje y tarjetas de comida rápida.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Documentos fiscais e administrativos não têm relevância técnica para o pacote de trabalho da engenharia de manutenção.",
              "en": "Administrative expense slips provide zero technical rigging or engineering value.",
              "es": "No tienen relevancia técnica de ingeniería.",
            },
          },
        ],
      },
      {
        id: "q-pcm-6",
        order: 6,
        question: {
          "pt-BR": "CENÁRIO 6: Na gestão de cronogramas de Parada de Manutenção pelo Método do Caminho Crítico (CPM - Critical Path Method), o que caracteriza exatamente uma atividade pertencente ao Caminho Crítico e qual é a sua Folga Total (Total Float)?",
          "en": "SCENARIO 6: In plant shutdown scheduling via Critical Path Method (CPM), what defines an activity on the Critical Path and what is its Total Float?",
          "es": "ESCENARIO 6: En la programación de paradas de planta mediante el Método de la Ruta Crítica (CPM), ¿qué caracteriza a una actividad crítica y cuál es su Holgura Total?",
        },
        options: [
          {
            id: "opt-pcm-6-a",
            text: {
              "pt-BR": "Atividades críticas possuem folga livre infinita e podem ser iniciadas a qualquer momento nas semanas seguintes sem afetar a entrega.",
              "en": "Critical activities feature infinite float and can start weeks late with no deadline impact.",
              "es": "Tienen holgura infinita y pueden iniciarse en cualquier fecha posterior.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Atividades no caminho crítico determinam a duração mínima do projeto e não têm tolerância a atrasos.",
              "en": "Incorrect. Critical path activities govern overall turnaround duration.",
              "es": "Incorrecto. Determinan la duración total sin holgura.",
            },
          },
          {
            id: "opt-pcm-6-b",
            text: {
              "pt-BR": "Uma atividade pertence ao Caminho Crítico quando sua Folga Total é igual a ZERO (Total Float = 0). Qualquer atraso de uma única hora em qualquer atividade do caminho crítico posterga o horário de partida (startup) de toda a fábrica exatamente na mesma proporção.",
              "en": "An activity is on the Critical Path when its Total Float equals ZERO. Any delay of even one hour on a critical path task directly pushes back the entire plant startup by that exact amount of time.",
              "es": "Una actividad es crítica cuando su Holgura Total es CERO (Float = 0). Cualquier demora de una hora en una tarea crítica retrasa la partida de toda la planta en la misma proporción.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O caminho crítico é a maior sequência encadeada de tarefas dependentes do projeto. Com folga zero, todos os recursos prioritários de PCM devem monitorar as frentes críticas hora a hora.",
              "en": "Correct! The critical path represents the longest chain of dependent activities with zero float, requiring intensive hourly monitoring.",
              "es": "¡Correcto! Es la cadena más larga sin margen de holgura; un retraso pospone la puesta en marcha de la fábrica.",
            },
          },
          {
            id: "opt-pcm-6-c",
            text: {
              "pt-BR": "São atividades que só podem ser realizadas por estagiários sem supervisão técnica nos fins de semana.",
              "en": "Tasks reserved strictly for unsupervised interns over weekends.",
              "es": "Tareas reservadas para practicantes los fines de semana.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Atividades críticas exigem os profissionais mais experientes e recursos de alto rendimento.",
              "en": "Critical path jobs demand senior technicians and tight supervision.",
              "es": "Exigen a los mejores especialistas y supervisión constante.",
            },
          },
          {
            id: "opt-pcm-6-d",
            text: {
              "pt-BR": "São atividades financeiras de emissão de boletos bancários da empresa fornecedora de refeições.",
              "en": "Financial billing tasks by the on-site catering contractor.",
              "es": "Tareas de facturación del servicio de comedor.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "O caminho crítico refere-se à rede física de montagem, teste e comissionamento de ativos industriais.",
              "en": "CPM applies to physical overhaul and commissioning timelines.",
              "es": "Aplica al cronograma técnico de intervención de los activos.",
            },
          },
        ],
      },
      {
        id: "q-pcm-7",
        order: 7,
        question: {
          "pt-BR": "CENÁRIO 7: No conceito da Curva P-F (Intervalo Potencial de Falha até a Falha Funcional) da Manutenção Centrada na Confiabilidade, o que representa o Ponto P, o Ponto F e qual é a regra de ouro para a frequência de inspeção sensitiva e preditiva?",
          "en": "SCENARIO 7: In the P-F Curve concept (Interval from Potential to Functional Failure) in RCM, what do Point P and Point F represent, and what is the golden rule for setting predictive and sensory inspection intervals?",
          "es": "ESCENARIO 7: En la Curva P-F de confiabilidad, ¿qué representan el Punto P, el Punto F y cuál es la regla de oro para la frecuencia de inspección?",
        },
        options: [
          {
            id: "opt-pcm-7-a",
            text: {
              "pt-BR": "Ponto P é o início da compra do equipamento; Ponto F é o descarte como sucata 30 anos depois.",
              "en": "Point P is purchasing the asset; Point F is scrapping it 30 years later.",
              "es": "Punto P es la compra del equipo; Punto F es el desguace.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A curva P-F trata da evolução de um modo de falha específico, não do ciclo de vida contábil do ativo.",
              "en": "The P-F curve tracks specific failure mode degradation, not economic life.",
              "es": "Modela la degradación física de un modo de falla específico.",
            },
          },
          {
            id: "opt-pcm-7-b",
            text: {
              "pt-BR": "Ponto P é a Falha Potencial (momento em que o defeito inicial torna-se detectável por ultrassom, vibração ou análise de óleo); Ponto F é a Falha Funcional (momento em que o ativo perde a capacidade de cumprir sua função operacional); a regra de ouro do PCM é que o intervalo de inspeção deve ser menor que a metade do intervalo P-F (Frequência <= Intervalo P-F / 2), garantindo pelo menos uma oportunidade de detecção antes da quebra.",
              "en": "Point P is Potential Failure (initial detectable onset via ultrasound, vibration, or oil analysis); Point F is Functional Failure (loss of operational capability); the MPC golden rule states inspection interval must be less than half the P-F interval (Interval <= (P-F)/2), guaranteeing at least one detection opportunity before catastrophic failure.",
              "es": "Punto P: Falla Potencial detectable (vibración, aceite, ultrasonido); Punto F: Falla Funcional (pérdida de función); la regla de oro del PCM exige frecuencia de inspección menor a la mitad del intervalo P-F (<= P-F / 2) para asegurar detección a tiempo.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Inspecionar com frequência superior ao intervalo P-F permite que a falha nasça e quebre a máquina entre duas inspeções consecutivas sem ser percebida.",
              "en": "Correct! Inspecting at intervals longer than P-F allows failure modes to develop and collapse equipment unseen between rounds.",
              "es": "¡Correcto! Una frecuencia mayor al intervalo P-F deja a la máquina desprotegida ante fallos rápidos.",
            },
          },
          {
            id: "opt-pcm-7-c",
            text: {
              "pt-BR": "A frequência de inspeção deve ser sempre de 12 meses fixos para qualquer tipo de máquina e mancal.",
              "en": "Inspection frequency must be strictly 12 months for all machines.",
              "es": "La frecuencia debe ser de 12 meses fijos para cualquier equipo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A frequência depende da dinâmica física de degradação: rolamentos rápidos têm intervalo P-F de semanas; desgaste em carcaças tem anos.",
              "en": "P-F interval is failure-mode specific: high-speed bearings take weeks; corrosion takes years.",
              "es": "Varía según la física del modo de falla: rodamientos rápidos demoran semanas.",
            },
          },
          {
            id: "opt-pcm-7-d",
            text: {
              "pt-BR": "Ponto P e Ponto F ocorrem sempre no mesmo instante em zero microssegundos em qualquer falha mecânica.",
              "en": "Point P and Point F always happen instantaneously within zero microseconds.",
              "es": "Ambos puntos ocurren al mismo instante en cualquier falla.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A quase totalidade das falhas mecânicas avisa com antecedência por vibração, aquecimento e detritos metálicos.",
              "en": "Nearly all mechanical failures give progressive early warnings across physical symptoms.",
              "es": "La mayoría de las fallas mecánicas presentan signos precursores detectables.",
            },
          },
        ],
      },
      {
        id: "q-pcm-8",
        order: 8,
        question: {
          "pt-BR": "CENÁRIO 8: Na gestão de lubrificação industrial de alta confiabilidade gerenciada pelo PCM, qual é a principal causa raiz de falhas prematuras em mancais de rolamento industriais e quais controles o PCM deve implantar na recepção e manuseio de óleos?",
          "en": "SCENARIO 8: In high-reliability lubrication management overseen by MPC, what is the primary root cause of premature rolling element bearing failures, and what controls must MPC establish for oil receipt and handling?",
          "es": "ESCENARIO 8: En la lubricación industrial gestionada por el PCM, ¿cuál es la causa raíz de fallos prematuros en rodamientos y qué controles deben aplicarse en la recepción de aceites?",
        },
        options: [
          {
            id: "opt-pcm-8-a",
            text: {
              "pt-BR": "A causa primária é a contaminação por partículas sólidas e umidade (água); o óleo novo que sai do tambor lacrado frequentemente NÃO atende aos padrões de limpeza ISO 4406 (ex: ISO 16/14/11) exigidos por mancais de alta velocidade. O PCM deve implantar filtragem prévia na recepção do óleo novo (carrinho de filtragem), reservatórios com respiros dessecantes de sílica-gel e recipientes herméticos com código de cores por tipo de lubrificante.",
              "en": "Primary root cause is particulate contamination and moisture; new oil from sealed drums often FAILS modern target ISO 4406 cleanliness codes (e.g. ISO 16/14/11) required by high-speed bearings. MPC must implement offline filtration for new drum oil, desiccant silica breather caps on reservoirs, and color-coded dedicated dispensing containers.",
              "es": "La causa principal es contaminación por sólidos y agua; el aceite nuevo en tambor a menudo NO cumple los códigos ISO 4406 (16/14/11). Se requiere filtración previa con carro portátil, respiradores desecantes de sílice y recipientes cerrados con código de color.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Mais de 70% das quebras de rolamentos decorrem de lubrificação inadequada ou contaminada. Óleo 'novo' não é óleo 'limpo' para rolamentos de precisão.",
              "en": "Correct! Over 70% of bearing failures stem from contaminated or incorrect lubrication. Fresh oil out of barrels is rarely clean enough for precision assets.",
              "es": "¡Correcto! El aceite nuevo suele contener partículas abrasivas que deben filtrarse antes de entrar a la máquina.",
            },
          },
          {
            id: "opt-pcm-8-b",
            text: {
              "pt-BR": "Óleo lubrificante novo nunca estraga e pode ser estocado ao ar livre na chuva com as tampas dos tambores abertas.",
              "en": "New oil never degrades and can be stored outdoors in the rain with open bungs.",
              "es": "El aceite nuevo nunca se degrada y puede guardarse bajo la lluvia con tambores abiertos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Água da chuva e poeira entram por respiração térmica e oxidam os aditivos, gerando borra e destruição do lubrificante.",
              "en": "Rainwater and dirt infiltrate barrels via thermal breathing, degrading additives instantly.",
              "es": "El agua de lluvia contamina el tambor destruyendo el paquete de aditivos.",
            },
          },
          {
            id: "opt-pcm-8-c",
            text: {
              "pt-BR": "Qualquer tipo de óleo automotivo pode ser misturado com graxas sintéticas industriais de polieureia sem incompatibilidade.",
              "en": "Any motor oil can be mixed with polyurea greases with zero incompatibility.",
              "es": "Cualquier aceite de auto puede mezclarse con grasas de poliurea.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Misturar sabões de espessantes incompatíveis causa separação do óleo base e endurecimento ou derretimento da graxa.",
              "en": "Incompatible grease thickeners cause phase separation, softening, and catastrophic bearing dry-out.",
              "es": "Grasas con espesantes incompatibles se licúan o petrifican arruinando el rodamiento.",
            },
          },
          {
            id: "opt-pcm-8-d",
            text: {
              "pt-BR": "Rolamentos devem ser lavados semanalmente com solvente clorofluorcarbono inflamável sem relubrificação.",
              "en": "Bearings should be washed weekly with flammable CFC solvents without regreasing.",
              "es": "Lavar rodamientos con solvente sin volver a engrasar.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Remover graxa sem relubrificação queima o mancal em poucos minutos de operação.",
              "en": "Running unlubricated bearings triggers metal-to-metal contact and thermal seizure in minutes.",
              "es": "Dejar el rodamiento sin grasa funde las pistas en minutos.",
            },
          },
        ],
      },
      {
        id: "q-pcm-9",
        order: 9,
        question: {
          "pt-BR": "CENÁRIO 9: No cálculo da Eficiência Global dos Equipamentos (OEE - Overall Equipment Effectiveness) monitorado pelo PCM para avaliar a saúde dos ativos de uma fábrica, quais são as três variáveis multiplicativas que compõem o índice?",
          "en": "SCENARIO 9: In calculating Overall Equipment Effectiveness (OEE) tracked by MPC to measure plant asset health, what are the three multiplicative factors comprising the metric?",
          "es": "ESCENARIO 9: En el cálculo de la Eficiencia Global de los Equipos (OEE) utilizado por el PCM, ¿cuáles son los tres factores multiplicativos que componen el índice?",
        },
        options: [
          {
            id: "opt-pcm-9-a",
            text: {
              "pt-BR": "OEE = Custo de Energia × Salário dos Operadores × Preço de Venda do Produto final no mercado.",
              "en": "OEE = Power Costs × Wages × Market Selling Price.",
              "es": "OEE = Costo eléctrico × Salarios × Precio de venta.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "OEE é um índice operacional de produtividade de fábrica, não uma conta contábil de receita financeira.",
              "en": "OEE is an operational asset productivity metric, not an accounting revenue ledger.",
              "es": "El OEE mide efectividad operacional técnica, no precios de venta.",
            },
          },
          {
            id: "opt-pcm-9-b",
            text: {
              "pt-BR": "OEE = Disponibilidade (Operating Time / Planned Production Time) × Desempenho (Ideal Cycle Time × Total Count / Operating Time) × Qualidade (Good Count / Total Count).",
              "en": "OEE = Availability (Operating Time / Planned Production Time) × Performance (Ideal Cycle Time × Total Pieces / Operating Time) × Quality (Good Pieces / Total Pieces).",
              "es": "OEE = Disponibilidad (Tiempo Operativo / Tiempo Planificado) × Rendimiento (Ciclo Ideal × Producción Total / Tiempo Operativo) × Calidad (Piezas Buenas / Piezas Totales).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! OEE = D × P × Q. Permite identificar perdas por paradas não planejadas (disponibilidade), perdas por velocidade reduzida/pequenas paradas (desempenho) e perdas por refugo/retrabalho (qualidade).",
              "en": "Correct! OEE = Availability × Performance × Quality. It quantifies downtime losses, speed slowdowns, and defective quality waste.",
              "es": "¡Correcto! Fórmula canónica del OEE para desglosar pérdidas de disponibilidad, velocidad y calidad.",
            },
          },
          {
            id: "opt-pcm-9-c",
            text: {
              "pt-BR": "OEE = Horas Extras Trabalhadas / Total de Dias de Férias tirados pela gerência de fábrica.",
              "en": "OEE = Overtime Hours / Vacation Days.",
              "es": "OEE = Horas extras / Días de vacaciones.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e sem sentido operacional.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "opt-pcm-9-d",
            text: {
              "pt-BR": "OEE é igual a 100% fixo sempre que a fábrica tiver gerador elétrico a diesel de emergência.",
              "en": "OEE is fixed at 100% whenever backup diesel generators exist.",
              "es": "OEE es 100% si hay generador de respaldo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Geradores auxiliam no suprimento de energia, mas não eliminam as perdas operacionais de máquinas e processos.",
              "en": "Generators supply power but do not address machine cycle losses or defect scrap.",
              "es": "Tener generador no evita paradas de máquinas ni mermas de calidad.",
            },
          },
        ],
      },
      {
        id: "q-pcm-10",
        order: 10,
        question: {
          "pt-BR": "CENÁRIO 10: Em conformidade com os princípios de governança do AGENTS.md da RSS3 Treinamentos, a aprovação neste módulo de curso de PCM habilita o colaborador a assumir formalmente a responsabilidade técnica perante o CREA/CFT por projetos e laudos de integridade estrutural de caldeiras e vasos de pressão da CMPC?",
          "en": "SCENARIO 10: In compliance with AGENTS.md governance standards, does passing this online MPC course legally authorize a worker to assume statutory engineering responsibility (CREA/CFT) for structural integrity reports of CMPC boilers and pressure vessels?",
          "es": "ESCENARIO 10: Según las directrices del AGENTS.md, ¿aprobar este módulo de PCM autoriza a asumir la responsabilidad técnica legal (CREA/CFT) para firmar laudos de calderas y recipientes a presión?",
        },
        options: [
          {
            id: "opt-pcm-10-a",
            text: {
              "pt-BR": "SIM. O certificado em PDF do portal substitui o diploma universitário e confere registro automático de Engenheiro Mecânico no conselho profissional.",
              "en": "YES. The PDF certificate replaces engineering degrees and grants board licensing.",
              "es": "SÍ. El certificado digital reemplaza el título universitario y otorga colegiatura profesional.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Absurdo jurídico e terminantemente proibido pelas diretrizes de integridade da RSS3.",
              "en": "Legally impossible and forbidden by RSS3 integrity policies.",
              "es": "Absurdo e ilegal.",
            },
          },
          {
            id: "opt-pcm-10-b",
            text: {
              "pt-BR": "NÃO. Este curso emite exclusivamente o 'Certificado de Conclusão de Conteúdo Teórico de Capacitação Profissional em PCM'. A responsabilidade técnica legal por laudos de caldeiras, vasos de pressão (NR-13) e projetos mecânicos cabe com exclusividade a Profissional Habilitado (PH) com graduação em Engenharia, registro ativo no conselho regional competente (CREA) e emissão de Anotação de Responsabilidade Técnica (ART).",
              "en": "NO. This course issues strictly a 'Certificate of Theoretical Completion in MPC'. Statutory legal liability for boiler/pressure vessel integrity (NR-13) belongs exclusively to Licensed Professional Engineers holding active CREA council registration and formal ART endorsements.",
              "es": "NO. Este curso otorga exclusivamente 'Certificado de Conclusión de Contenido Teórico de PCM'. La responsabilidad legal sobre calderas (NR-13) y laudos corresponde a un Profesional Habilitado con título universitario, registro en el CREA y emisión de ART.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Conforme a Seção 3 do AGENTS.md, a plataforma EAD capacita conceitualmente, mas jamais substitui a habilitação formal e as atribuições profissionais regulamentadas por lei federal.",
              "en": "Correct! AGENTS.md Section 3 dictates that e-learning certifies competence but never substitutes statutory professional engineering licensing.",
              "es": "¡Correcto! Cumple estrictamente con la directriz de diferenciar teoría de registros formales habilitantes.",
            },
          },
          {
            id: "opt-pcm-10-c",
            text: {
              "pt-BR": "SIM, contanto que o aluno tenha impresso o certificado em folha de papel couché colorido.",
              "en": "YES, as long as printed on glossy colored paper.",
              "es": "SÍ, si se imprime en papel de alta calidad.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "O tipo de papel não confere validade jurídica profissional a um curso livre de aperfeiçoamento.",
              "en": "Paper quality does not confer professional engineering licensing.",
              "es": "El papel no confiere atribución profesional regulada.",
            },
          },
          {
            id: "opt-pcm-10-d",
            text: {
              "pt-BR": "NÃO, mas apenas se o colaborador trabalhar em turno noturno; no turno diurno a autorização é automática.",
              "en": "NO, but only on night shifts; day shift confers automatic licensing.",
              "es": "NO, pero solo de noche; de día es automático.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A legislação profissional é universal e independe de escala horária de trabalho.",
              "en": "Statutory law is universal across all shift schedules.",
              "es": "La ley profesional aplica sin distinción de turnos.",
            },
          },
        ],
      },
    ],
  },
};
