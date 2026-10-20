import { CourseDemonstration } from "@/types";

export const nr12CourseData: CourseDemonstration = {
  id: "c-nr12-seguranca-maquinas-equipamentos",
  slug: "nr-12-seguranca-no-trabalho-em-maquinas-e-equipamentos",
  title: {
    "pt-BR": "NR-12: Segurança no Trabalho em Máquinas e Equipamentos",
    "en": "NR-12: Safety in Machinery and Work Equipment",
    "es": "NR-12: Seguridad en el Trabajo con Maquinaria y Equipos",
  },
  description: {
    "pt-BR": "Capacitação completa em NR-12: fundamentos da norma regulamentadora, mapeamento de riscos mecânicos e elétricos, barreiras físicas fixas e móveis com intertravamento, procedimentos seguros para remoção de proteções, inspeção de proteções danificadas, permissão de trabalho (PT), bloqueio de energias perigosas (LOTO) e primeiros socorros industriais.",
    "en": "Comprehensive NR-12 training: regulatory fundamentals, mechanical and electrical hazard mapping, fixed and interlocked safety guards, safe guard removal protocols, damaged guard reporting, work permits (PT), lockout/tagout (LOTO), and industrial first aid.",
    "es": "Capacitación en NR-12: fundamentos normativos, mapas de riesgos mecánicos, resguardos fijos y móviles con enclavamiento, procedimientos de retiro seguro, permisos de trabajo (PT), bloqueo LOTO y primeros auxilios industriales.",
  },
  longDescription: {
    "pt-BR": "O treinamento de NR-12 da RSS3 Soluções Industriais estabelece os princípios fundamentais e as medidas de proteção mandatórias para resguardar a saúde e a integridade física dos trabalhadores em todas as fases de vida de máquinas e equipamentos industriais, incluindo fabricação, transporte, instalação, operação, ajuste, manutenção e desmonte. Alinhado às operações de alta criticidade da RSS3 em clientes como a CMPC, o curso aborda a física dos perigos mecânicos (esmagamento, cisalhamento, aprisionamento e projeção), categorias de segurança de sistemas de comando, redundância e intertravamento de segurança, critérios restritos de acesso e remoção de barreiras, emissão formal de Permissão de Trabalho (PT), isolamento de energias perigosas pelo método LOTO e resposta técnica imediata em primeiros socorros.",
    "en": "The RSS3 NR-12 training delivers essential safety standards and mandatory protection measures to preserve workers' health across all machinery lifecycles in critical industrial sites. Covers mechanical hazard physics, control safety categories, interlocks, strict guard removal protocols, work permit authorization, hazardous energy isolation (LOTO), and rapid emergency response.",
    "es": "El curso de NR-12 de RSS3 establece las directrices fundamentales para prevenir accidentes en maquinaria industrial. Abarca resguardos físicos, sistemas de enclavamiento, procedimientos seguros de mantenimiento, permisos de trabajo, bloqueo de fuentes de energía (LOTO) y primeros auxilios.",
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
    "Mecânico Industrial",
    "Operador de Máquinas",
    "Eletricista de Manutenção",
    "Líder de Frente Operacional",
    "Técnico de Segurança do Trabalho",
    "Ajudante de Manutenção",
  ],
  targetAudience: {
    "pt-BR": "Mecânicos industriais, operadores de máquinas e tornos, eletricistas de manutenção, montadores, técnicos de segurança do trabalho e supervisores de frente operacional da RSS3 e parceiros industriais.",
    "en": "Industrial mechanics, machine operators, maintenance electricians, scaffolders, safety technicians, and operational frontline supervisors.",
    "es": "Mecánicos industriales, operadores de máquinas, electricistas, técnicos de seguridad y supervisores de operaciones.",
  },
  prerequisites: {
    "pt-BR": "Ensino fundamental completo, maioridade (18+ anos), Atestado de Saúde Ocupacional (ASO) apto para a função e treinamento de integração de segurança da RSS3.",
    "en": "High school education, 18+ years of age, valid medical clearance (ASO), and RSS3 safety site induction.",
    "es": "Enseñanza media completa, aptitud médica en el ASO y curso de inducción de seguridad RSS3.",
  },
  modulesCount: 4,
  lessonsCount: 11,
  thumbnailGradient: "from-blue-700 via-sky-800 to-slate-950",
  coverImage: "/images/courses/nr12.jpg",
  categories: ["nr-regulamentar", "conhecimento-operacional"],
  badgeCode: "NR-12",
  updatedAtDate: "2026-10-17",
  modules: [
    {
      id: "mod-nr12-1",
      order: 1,
      title: {
        "pt-BR": "Módulo 1: Fundamentos da Norma NR-12 e Princípios de Proteção",
        "en": "Module 1: NR-12 Regulatory Fundamentals & Protection Principles",
        "es": "Módulo 1: Fundamentos de la Norma NR-12 y Principios de Protección",
      },
      description: {
        "pt-BR": "Visão sistêmica da NR-12 atualizada, objetivos da norma, conceito de zonas de perigo, identificação de riscos mecânicos e princípios fundamentais de segurança em máquinas.",
        "en": "Systemic overview of the updated NR-12, hazard zone definitions, mechanical risk mapping, and machine safety principles.",
        "es": "Visión general de la NR-12 actualizada, zonas de peligro, mapeo de riesgos mecánicos y principios de diseño seguro.",
      },
      lessons: [
        {
          id: "les-nr12-1-1",
          order: 1,
          title: {
            "pt-BR": "Aula 01: NR12 - Fundamentos da Nova Norma",
            "en": "Lesson 01: NR-12 - Fundamentals of the New Standard",
            "es": "Clase 01: NR-12 - Fundamentos de la Nueva Norma",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "y-Aoi-gY9Uk",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender a estrutura regulatória da NR-12, seus objetivos preventivos e as responsabilidades compartilhadas entre empregadores e trabalhadores.",
              "en": "Understand the regulatory architecture of NR-12, its prevention objectives, and employer-employee responsibilities.",
              "es": "Comprender la estructura de la NR-12, objetivos de prevención y responsabilidades compartidas.",
            },
            summaryPoints: [
              {
                "pt-BR": "Conceito e escopo central da NR-12: proteção à vida e à integridade física dos trabalhadores.",
                "en": "Core purpose of NR-12: protecting life and physical integrity across all machinery phases.",
                "es": "Objetivo de la NR-12: salvaguardar la vida y salud de los trabajadores en maquinaria.",
              },
              {
                "pt-BR": "Ciclo de vida do maquinário: fabricação, importação, instalação, operação, manutenção e descarte.",
                "en": "Machinery lifecycle: design, manufacturing, installation, operation, maintenance, and decommissioning.",
                "es": "Ciclo de vida: diseño, fabricación, montaje, operación y mantenimiento seguro.",
              },
              {
                "pt-BR": "Direito de recusa do trabalhador diante de situação de risco grave e iminente.",
                "en": "Worker's right to refuse unsafe work in presence of imminent danger.",
                "es": "Derecho de negativa ante situaciones de riesgo grave e inminente.",
              },
            ],
          },
        },
        {
          id: "les-nr12-1-2",
          order: 2,
          title: {
            "pt-BR": "Aula 02: NR12 - Riscos e Medidas de Proteção",
            "en": "Lesson 02: NR-12 - Hazards & Protection Measures",
            "es": "Clase 02: NR-12 - Riesgos y Medidas de Protección",
          },
          durationMinutes: 11,
          contentType: "video",
          videoUrl: "1oMqskwDfYQ",
          contentDetail: {
            objective: {
              "pt-BR": "Mapear as zonas de perigo e aplicar a hierarquia das medidas de controle em máquinas e equipamentos.",
              "en": "Map danger zones and implement hierarchy of risk control measures on machinery.",
              "es": "Identificar zonas de peligro y aplicar la jerarquía de controles de seguridad.",
            },
            summaryPoints: [
              {
                "pt-BR": "Principais perigos mecânicos: pontos de esmagamento, cisalhamento, perfuração, corte e aprisionamento.",
                "en": "Primary mechanical hazards: pinching, shearing, entangling, cutting, and crushing.",
                "es": "Peligros mecánicos: atrapamiento, corte, cizallamiento y aplastamiento.",
              },
              {
                "pt-BR": "Hierarquia de controles: medidas de proteção coletiva, administrativas/organizacionais e EPI.",
                "en": "Hierarchy of controls: engineering collective protections, administrative controls, and PPE.",
                "es": "Jerarquía de controles: protección colectiva de ingeniería, administrativa y EPP.",
              },
              {
                "pt-BR": "Definição de zonas de perigo e cálculo de distâncias seguras de acesso.",
                "en": "Hazard zone demarcations and safe reach distances according to ergonomic standards.",
                "es": "Delimitación de zonas de peligro y distancias mínimas de seguridad.",
              },
            ],
          },
        },
        {
          id: "les-nr12-1-3",
          order: 3,
          title: {
            "pt-BR": "Aula 03: NR12 - Princípios de Segurança em Máquinas",
            "en": "Lesson 03: NR-12 - Machine Safety Principles",
            "es": "Clase 03: NR-12 - Principios de Seguridad en Máquinas",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "SgxxwN9fVik",
          contentDetail: {
            objective: {
              "pt-BR": "Entender os princípios de projeto seguro, redundância e comportamento de falha segura (fail-safe) em circuitos elétricos e de acionamento.",
              "en": "Learn fail-safe design principles, redundancy, and monitoring safety categories in machine control circuits.",
              "es": "Entender los principios de diseño seguro, redundancia y circuitos con respuesta fail-safe.",
            },
            summaryPoints: [
              {
                "pt-BR": "Conceito de falha segura: qualquer avaria no sistema deve provocar a parada segura imediata da máquina.",
                "en": "Fail-safe concept: component faults must automatically force the machine into a safe stop condition.",
                "es": "Concepto fail-safe: cualquier falla del sistema conduce a la parada segura inmediata.",
              },
              {
                "pt-BR": "Categorias de segurança em sistemas de comando conforme a ABNT NBR ISO 13849.",
                "en": "Safety integrity and categories according to ISO 13849 safety of machinery standards.",
                "es": "Categorías de seguridad en sistemas de mando y control industrial.",
              },
              {
                "pt-BR": "Impedimento de partida involuntária e rearme manual após interrupções de energia.",
                "en": "Prevention of unintended restart and manual reset requirements after power cuts.",
                "es": "Prevención de reinicios inesperados y rearme manual obligatorio.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-nr12-2",
      order: 2,
      title: {
        "pt-BR": "Módulo 2: Proteções Físicas, Intertravamentos e Conduta com Proteções",
        "en": "Module 2: Physical Guards, Interlocks & Guard Operating Protocols",
        "es": "Módulo 2: Resguardos Físicos, Enclavamientos y Conducta ante Protecciones",
      },
      description: {
        "pt-BR": "Critérios técnicos para proteções fixas e móveis, sensores de segurança com intertravamento, regras restritas para remoção e conduta preventiva diante de proteções danificadas.",
        "en": "Technical criteria for fixed and movable interlocked guards, safety sensors, strict removal permissions, and damaged guard actions.",
        "es": "Criterios para resguardos fijos y móviles con enclavamiento, sensores y protocolo ante protecciones dañadas.",
      },
      lessons: [
        {
          id: "les-nr12-2-1",
          order: 1,
          title: {
            "pt-BR": "Aula 04: Proteções em Máquinas: Quem Usa e Como Usar – NR12",
            "en": "Lesson 04: Machine Guards: Who Uses Them and How to Operate",
            "es": "Clase 04: Resguardos en Máquinas: Quién Usa y Cómo Operar",
          },
          durationMinutes: 11,
          contentType: "video",
          videoUrl: "nXBNcYuO-Bo",
          contentDetail: {
            objective: {
              "pt-BR": "Orientar os operadores sobre a utilização diária das barreiras de proteção e respeito aos limites físicos do maquinário.",
              "en": "Guide operators on daily routine use of physical safety guards and respecting mechanical boundaries.",
              "es": "Capacitar a los operadores en el uso correcto de las barreras y resguardos de protección.",
            },
            summaryPoints: [
              {
                "pt-BR": "Diferença conceitual: proteção fixa (fixada por parafusos/solda) vs. proteção móvel com intertravamento.",
                "en": "Conceptual difference: fixed guards (fastened with tools) vs. movable interlocked guards.",
                "es": "Diferencia: resguardos fijos (con tornillos) vs. resguardos móviles con switch de seguridad.",
              },
              {
                "pt-BR": "Telas de proteção: malha dimensionada para impedir a introdução de mãos ou dedos nos eixos rotativos.",
                "en": "Safety mesh guards: aperture sized to prevent fingers or hands reaching rotating shafts.",
                "es": "Mallas de protección dimensionadas para impedir el acceso manual a zonas de pellizco.",
              },
              {
                "pt-BR": "Tolerância zero para operação com portas abertas ou chaves interlock adulteradas.",
                "en": "Zero tolerance for operating with bypass jumpers or bypassed safety interlocking switches.",
                "es": "Tolerancia cero a puentear o anular sensores de seguridad.",
              },
            ],
          },
        },
        {
          id: "les-nr12-2-2",
          order: 2,
          title: {
            "pt-BR": "Aula 05: NR12: Quando e Quem Pode Remover Proteções?",
            "en": "Lesson 05: NR-12: When and Who Is Authorized to Remove Guards?",
            "es": "Clase 05: NR-12: ¿Cuándo y Quién Puede Retirar Resguardos?",
          },
          durationMinutes: 11,
          contentType: "video",
          videoUrl: "RduQEgj_TYI",
          contentDetail: {
            objective: {
              "pt-BR": "Definir os critérios legais e operacionais para remoção de proteções durante manutenções, ajustes e limpezas industriais.",
              "en": "Define legal and operational criteria for removing guards during industrial maintenance and servicing.",
              "es": "Establecer las condiciones obligatorias para desmontar resguardos en tareas de mantenimiento.",
            },
            summaryPoints: [
              {
                "pt-BR": "Autorização formal: apenas profissionais habilitados, qualificados ou capacitados com autorização da liderança.",
                "en": "Formal authorization: restricted to qualified, trained, and authorized technicians.",
                "es": "Autorización formal: solo técnicos capacitados y autorizados por la jefatura.",
              },
              {
                "pt-BR": "Desenergização mandatória: a máquina deve estar completamente parada e desenergizada antes de desaparafusar qualquer proteção fixa.",
                "en": "Mandatory de-energization: machine must be stopped and powered down before unbolting any fixed guard.",
                "es": "Desenergización obligatoria antes de desarmar cualquier resguardo fijo.",
              },
              {
                "pt-BR": "Recolocação e teste de validação: jamais liberar a máquina para produção antes de reinstalar todas as proteções.",
                "en": "Reinstallation check: verify all guards and interlocks are re-secured before releasing to production.",
                "es": "Reinstalación obligatoria y prueba funcional antes de entregar la máquina a operaciones.",
              },
            ],
          },
        },
        {
          id: "les-nr12-2-3",
          order: 3,
          title: {
            "pt-BR": "Aula 06: NR12: Proteção Danificada? Saiba a Quem Informar",
            "en": "Lesson 06: NR-12: Damaged Guard? Who to Inform and Immediate Actions",
            "es": "Clase 06: NR-12: ¿Protección Dañada? A Quién Informar y Qué Hacer",
          },
          durationMinutes: 10,
          contentType: "video",
          videoUrl: "rQ3-7rYq-dY",
          contentDetail: {
            objective: {
              "pt-BR": "Capacitar o colaborador a identificar avarias em proteções e acionar os canais corretos de paralisação e comunicação.",
              "en": "Train workers to identify degraded safety guards and promptly trigger reporting channels.",
              "es": "Capacitar al personal para detectar daños en resguardos y reportar inmediatamente el incidente.",
            },
            summaryPoints: [
              {
                "pt-BR": "Sinais de desgaste: trincas em policarbonato, fixadores soltos, folgas excessivas e chaves fim de curso desalinhadas.",
                "en": "Wear indicators: cracked polycarbonate, loose brackets, play in hinges, misaligned safety switches.",
                "es": "Señales de falla: fisuras en pantallas, pernos sueltos y desalineación de switches.",
              },
              {
                "pt-BR": "Paralisação cautelar imediata do equipamento e colocação de placa de advertência.",
                "en": "Immediate precautionary shutdown and hanging a warning tag.",
                "es": "Detención cautelar inmediata y señalización con tarjeta de advertencia.",
              },
              {
                "pt-BR": "Fluxo de reporte: aviso imediato ao encarregado de turno, técnico de segurança do trabalho e abertura de ordem de manutenção.",
                "en": "Reporting chain: frontline lead, occupational safety officer, and maintenance work order generation.",
                "es": "Cadena de reporte al supervisor, seguridad ocupacional y orden de mantenimiento.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-nr12-3",
      order: 3,
      title: {
        "pt-BR": "Módulo 3: Métodos de Trabalho Seguro e Permissão de Trabalho (PT)",
        "en": "Module 3: Safe Working Methods & Work Permit Protocols (PT)",
        "es": "Módulo 3: Métodos de Trabajo Seguro y Permisos de Trabajo (PT)",
      },
      description: {
        "pt-BR": "Padronização de tarefas operacionais, check-list pré-uso, análise de riscos e emissão da Permissão de Trabalho (PT) para intervenções de alta criticidade.",
        "en": "Operational task standardization, pre-use checklists, risk analysis, and Work Permit issuance for critical interventions.",
        "es": "Estandarización de tareas, checklist diario, análisis de riesgos y emisión del Permiso de Trabajo (PT).",
      },
      lessons: [
        {
          id: "les-nr12-3-1",
          order: 1,
          title: {
            "pt-BR": "Aula 07: Como Prevenir Riscos em Máquinas e Equipamentos",
            "en": "Lesson 07: Preventing Hazards in Industrial Machinery",
            "es": "Clase 07: Prevención de Riesgos en Maquinaria Industrial",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "-kbA0lbjmhw",
          contentDetail: {
            objective: {
              "pt-BR": "Adotar posturas preventivas e rotinas de inspeção pré-operacional para mitigar falhas mecânicas e comportamentais.",
              "en": "Adopt proactive safety behaviors and pre-start inspection routines to prevent human and mechanical failures.",
              "es": "Adoptar hábitos preventivos e inspecciones previas al encendido para evitar incidentes.",
            },
            summaryPoints: [
              {
                "pt-BR": "Inspeção visual preliminar de 360 graus em torno da máquina antes da energização.",
                "en": "360-degree walkaround visual inspection around machinery prior to powering on.",
                "es": "Inspección de 360 grados alrededor de la máquina antes de energizar.",
              },
              {
                "pt-BR": "Restrições de vestimenta: proibição estrita de correntes, pulseiras, anéis, cabelos soltos e roupas frouxas.",
                "en": "Clothing restrictions: strict prohibition of jewelry, loose rings, untied hair, and baggy garments.",
                "es": "Restricción de ropa suelta, cabello largo sin recoger y uso de alhajas en zonas de ejes.",
              },
              {
                "pt-BR": "Organização e limpeza (5S): pisos desobstruídos e livres de óleo ou fluido hidráulico.",
                "en": "Housekeeping (5S): clear walking paths, no oil or hydraulic fluid spills causing slips into machinery.",
                "es": "Orden y limpieza: pisos secos y libres de derrames que provoquen caídas sobre la máquina.",
              },
            ],
          },
        },
        {
          id: "les-nr12-3-2",
          order: 2,
          title: {
            "pt-BR": "Aula 08: NR12: Método de Trabalho Seguro",
            "en": "Lesson 08: NR-12: Safe Work Procedures and Standardization",
            "es": "Clase 08: NR-12: Procedimientos de Trabajo Seguro y Estandarización",
          },
          durationMinutes: 11,
          contentType: "video",
          videoUrl: "_0TypKhtQ0o",
          contentDetail: {
            objective: {
              "pt-BR": "Conhecer a estrutura de um Procedimento Operacional Padrão (POP) e Instrução de Trabalho (IT) exigidos pela NR-12.",
              "en": "Learn the components of standard operating procedures and task instructions mandated by NR-12.",
              "es": "Conocer la elaboración de Procedimientos Operativos Estandarizados (POE) exigidos por la norma.",
            },
            summaryPoints: [
              {
                "pt-BR": "Documentação formal do passo a passo das operações normais e dos procedimentos de ajuste.",
                "en": "Documented step-by-step instructions for normal operation and tooling adjustments.",
                "es": "Documentación paso a paso de tareas de producción y cambios de herramental.",
              },
              {
                "pt-BR": "Envolvimento dos operadores na elaboração das instruções para garantir aplicabilidade prática.",
                "en": "Operator involvement in writing work instructions to ensure practical site feasibility.",
                "es": "Participación del operador en la redacción de instrucciones para validar la realidad operativa.",
              },
              {
                "pt-BR": "Revisão periódica dos procedimentos sempre que houver modernização ou alteração na máquina.",
                "en": "Periodic procedure reviews whenever equipment is retrofitted or modernized.",
                "es": "Revisión obligatoria del procedimiento ante modificaciones técnicas del equipo.",
              },
            ],
          },
        },
        {
          id: "les-nr12-3-3",
          order: 3,
          title: {
            "pt-BR": "Aula 09: NR12: Permissão de Trabalho (PT)",
            "en": "Lesson 09: NR-12: Work Permit Authorization Protocol (PT)",
            "es": "Clase 09: NR-12: Permiso de Trabajo (PT) en Maquinaria",
          },
          durationMinutes: 11,
          contentType: "video",
          videoUrl: "iPLVacElMfg",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender a finalidade, fluxo de liberação e encerramento da Permissão de Trabalho (PT) em atividades especiais.",
              "en": "Master the issuance, execution, and sign-off lifecycle of industrial Work Permits.",
              "es": "Comprender la gestión, emisión y cierre formal del Permiso de Trabajo (PT).",
            },
            summaryPoints: [
              {
                "pt-BR": "Quando a PT é obrigatória: trabalhos de manutenção não rotineira, intervenção em painéis, corte a quente e espaços confinados.",
                "en": "When Work Permits are mandatory: non-routine maintenance, electrical panels, hot work, confined spaces.",
                "es": "Cuándo aplica: mantenimiento extraordinario, apertura de tableros y trabajos en caliente.",
              },
              {
                "pt-BR": "Análise Preliminar de Risco (APR) como anexo mandatório para identificação de controles prévios.",
                "en": "Preliminary Job Hazard Analysis (JHA) as mandatory attachment defining safety barriers.",
                "es": "Análisis de Riesgo de la Tarea (AST/APR) como anexo obligatorio.",
              },
              {
                "pt-BR": "Fechamento formal da PT com verificação das condições de entrega da máquina à operação.",
                "en": "Formal closure of the permit verifying site cleanup and safe machine handoff.",
                "es": "Cierre formal con entrega del equipo en condiciones seguras de operación.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-nr12-4",
      order: 4,
      title: {
        "pt-BR": "Módulo 4: Bloqueio LOTO e Resposta a Emergências Industriais",
        "en": "Module 4: Lockout/Tagout (LOTO) & Industrial Emergency Response",
        "es": "Módulo 4: Bloqueo de Energías LOTO y Respuesta a Emergencias",
      },
      description: {
        "pt-BR": "Execução do procedimento de isolamento e bloqueio de energias perigosas (LOTO) e protocolos de primeiros socorros industriais em ocorrências com máquinas.",
        "en": "Step-by-step hazardous energy control (LOTO) and first-aid response procedures for machine injury incidents.",
        "es": "Procedimiento paso a paso de bloqueo LOTO y primeros auxilios en caso de accidentes con máquinas.",
      },
      lessons: [
        {
          id: "les-nr12-4-1",
          order: 1,
          title: {
            "pt-BR": "Aula 10: NR12: Sistema de Bloqueio de Máquinas (LOTO)",
            "en": "Lesson 10: NR-12: Machinery Lockout/Tagout System (LOTO)",
            "es": "Clase 10: NR-12: Sistema de Bloqueo y Etiquetado LOTO",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "xJFijFHRkWs",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar os 6 passos fundamentais do procedimento LOTO (Lockout / Tagout) para eliminação de energias residuais.",
              "en": "Master the 6 core steps of LOTO to eliminate electrical, mechanical, and stored residual energies.",
              "es": "Dominar los 6 pasos del protocolo LOTO para aislar fuentes de energía peligrosas.",
            },
            summaryPoints: [
              {
                "pt-BR": "Mapeamento das energias: elétrica, pneumática, hidráulica, mecânica, gravitacional e térmica.",
                "en": "Energy source mapping: electrical, pneumatic, hydraulic, kinetic, gravity, and thermal.",
                "es": "Identificación de fuentes: eléctrica, neumática, hidráulica y energía mecánica residual.",
              },
              {
                "pt-BR": "Cadeado e etiqueta individual intransferível: uma chave por trabalhador, nunca compartilhada.",
                "en": "Individual personal lock and tag: one key per worker, strictly non-transferable.",
                "es": "Candado y tarjeta personal: una sola llave por persona, intransferible.",
              },
              {
                "pt-BR": "Teste de energia zero: tentativa de ligar a máquina após o bloqueio para certificar ausência de energia.",
                "en": "Zero energy verification: attempting restart to prove absolute isolation before work.",
                "es": "Prueba de energía cero: intento de encendido para verificar el aislamiento total.",
              },
            ],
          },
        },
        {
          id: "les-nr12-4-2",
          order: 2,
          title: {
            "pt-BR": "Aula 11: Primeiros Socorros no Ambiente Industrial",
            "en": "Lesson 11: First Aid in the Industrial Environment",
            "es": "Clase 11: Primeros Auxilios en el Entorno Industrial",
          },
          durationMinutes: 16,
          contentType: "video",
          videoUrl: "lRqQl3ByYww",
          contentDetail: {
            objective: {
              "pt-BR": "Agir com rapidez e assertividade em caso de incidentes com máquinas, garantindo estabilização e acionamento do socorro médico.",
              "en": "Act rapidly and safely during machinery incidents, stabilizing victims and coordinating medical rescue.",
              "es": "Actuar con rapidez y serenidad ante accidentes con maquinaria, estabilizando a la víctima.",
            },
            summaryPoints: [
              {
                "pt-BR": "Prioridade número um: apertar o botão de emergência ou desligar a chave geral antes de qualquer aproximação.",
                "en": "First priority: press emergency stop or disconnect main breaker before approaching victim.",
                "es": "Prioridad uno: accionar la parada de emergencia antes de acercarse al accidentado.",
              },
              {
                "pt-BR": "Acionamento imediato da brigada de emergência e equipe de saúde do contrato.",
                "en": "Immediate call to the site emergency rescue team and medical response unit.",
                "es": "Llamada inmediata a la brigada de emergencias de la planta.",
              },
              {
                "pt-BR": "Condutas para contenção de hemorragias com compressão direta e preservação de membros.",
                "en": "Direct pressure techniques for severe hemorrhage control and safe limb preservation protocols.",
                "es": "Técnicas de control de hemorragias mediante compresión directa.",
              },
            ],
          },
        },
      ],
    },
  ],
finalAssessment: {
    id: "exam-nr12-seguranca-maquinas",
    order: 12,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 50,
    questionsCount: 10,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Estudo de Caso & Avaliação Técnica Avançada de Segurança em Máquinas e Equipamentos (NR-12). Abrange categorias de segurança (NBR ISO 13849 PL / SIL), cálculo de distância de segurança para barreiras ópticas (NBR 14153 / ISO 13855), intertravamento com retenção eletromecânica para tempo de parada por inércia e arquitetura de relés de segurança de canal duplo. Exige 70% de aproveitamento para certificação.",
      "en": "Advanced Machinery Safety Case Study & Technical Assessment (NR-12). Covers safety categories (ISO 13849 PL / SIL), light curtain safe distance calculations, solenoid-locking interlocks for run-down time, and dual-channel safety relay architectures. 70% passing score.",
      "es": "Estudio de Caso y Evaluación Técnica Avanzada en Seguridad de Maquinaria (NR-12). Categorías de seguridad ISO 13849, cálculo de distancia de seguridad de cortinas ópticas, enclavamientos con bloqueo y relés redundantes. 70% mínimo.",
    },
    title: {
      "pt-BR": "Estudo de Caso & Avaliação Técnica — Engenharia de Segurança em Máquinas (NR-12)",
      "en": "Case Study & Technical Assessment — Machinery Safety Engineering (NR-12)",
      "es": "Estudio de Caso y Evaluación Técnica — Ingeniería de Seguridad en Maquinaria (NR-12)",
    },
    description: {
      "pt-BR": "Cenário de Engenharia de Segurança na CMPC: Adequação e comissionamento de uma prensa hidráulica de enfardamento de celulose e picador de cavacos de alta rotação. Avaliação de circuitos de parada categoria 4 (PLe), cálculo de distância de cortinas de luz e bloqueio por inércia.",
      "en": "Safety Engineering Scenario at CMPC: Retrofitting and commissioning of a pulp baling hydraulic press and high-speed wood chipper. Category 4 (PLe) stop circuit evaluation, light curtain safety distance calculation, and inertia guard locking.",
      "es": "Caso de Ingeniería en CMPC: Adecuación de prensa enfardadora de pulpa y picador de astillas de madera. Circuitos de seguridad Categoría 4, cálculo de cortinas de luz y enclavamientos con retención.",
    },
    questions: [
      {
        id: "q-nr12-1",
        order: 1,
        question: {
          "pt-BR": "CENÁRIO 1: Você está dimensionando a proteção optoeletrônica (Cortina de Luz de Segurança Tipo 4) para a zona de prensagem de uma prensa de celulose na CMPC. O tempo total de parada do martelo após a quebra do feixe óptico (tempo de reação do CLP de segurança + tempo de resposta do bloco de válvulas hidráulicas monitoradas + frenagem mecânica) foi cronometrado em T = 0,25 segundos. A resolução da cortina de luz é d = 14 mm (detecção de dedo, onde a penetração adicional C = 8 × (d - 14) = 0 mm) e a velocidade padrão de aproximação manual da mão humana definida pela NBR ISO 13855 é K = 2.000 mm/s. Qual deve ser a DISTÂNCIA MÍNIMA DE SEGURANÇA (S) entre a cortina de luz e o ponto de esmagamento da prensa para que a mão do operador nunca alcance a zona de perigo antes da parada completa?",
          "en": "SCENARIO 1: You are calculating the safety distance for a Type 4 Light Curtain on a pulp baling press at CMPC. Measured total stopping time of the ram after optical beam intrusion (safety PLC + monitored hydraulic valves + mechanical stop) is T = 0.25 seconds. Light curtain resolution is d = 14 mm (finger detection, depth penetration constant C = 0 mm). Standard hand approach speed per ISO 13855 is K = 2,000 mm/s. What is the MINIMUM SAFETY DISTANCE (S) between the light curtain and the crush danger zone?",
          "es": "ESCENARIO 1: Cálculo de distancia de seguridad para Cortina Óptica Tipo 4 en prensa enfardadora. Tiempo de parada total T = 0,25 s; resolución d = 14 mm (C = 0 mm); velocidad de aproximación de la mano K = 2.000 mm/s (ISO 13855). ¿Cuál es la DISTANCIA MÍNIMA DE SEGURANÇA (S) requerida?",
        },
        options: [
          {
            id: "opt-nr12-1-a",
            text: {
              "pt-BR": "S = 50 mm (5 cm), pois qualquer sensor óptico desliga a máquina na velocidade da luz instantaneamente em zero segundos.",
              "en": "S = 50 mm (5 cm) because optics disconnect machinery at the speed of light with zero delay.",
              "es": "S = 50 mm, ya que los sensores ópticos detienen la máquina instantáneamente a la velocidad de la luz.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e letal. A luz viaja rápido, mas relés, CLPs, válvulas hidráulicas e a massa do martelo demoram frações de segundo para frear (inércia mecânica), tempo no qual a mão avança 50 cm.",
              "en": "Incorrect. Mechanical and hydraulic valves take hundreds of milliseconds to bleed and brake, during which human hands traverse half a meter.",
              "es": "Incorrecto y letal. La inercia hidráulica y mecánica demora fracciones de segundo en frenar.",
            },
          },
          {
            id: "opt-nr12-1-b",
            text: {
              "pt-BR": "S = (K × T) + C = (2.000 mm/s × 0,25 s) + 0 mm = 500 mm (50 cm). A cortina deve ser fixada a pelo menos 500 mm de distância do ponto de prensagem para impedir o alcance físico antes da imobilização do martelo.",
              "en": "S = (K × T) + C = (2,000 mm/s × 0.25 s) + 0 mm = 500 mm (50 cm). The light curtain must be mounted at least 500 mm away from the pinch point to guarantee full immobilization before hand penetration.",
              "es": "S = (K × T) + C = (2.000 × 0,25) + 0 = 500 mm (50 cm). La cortina debe fijarse a mínimo 50 cm de la zona de prensado.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A fórmula canônica da NBR ISO 13855 (S = K × T + C) estabelece a correlação biomecânica entre a velocidade de avanço do membro humano e a inércia de resposta da máquina. Instalar a cortina a menos de 500 mm expõe o operador a esmagamento fatal.",
              "en": "Correct! ISO 13855 formula S = (K × T) + C links human limb reflex speed with machine reaction latency. Installing inside this boundary exposes limbs to crushing before halt.",
              "es": "¡Correcto! Cumple estrictamente la fórmula de la ISO 13855 para impedir atrapamiento antes de la parada efectiva.",
            },
          },
          {
            id: "opt-nr12-1-c",
            text: {
              "pt-BR": "S = 2.000 mm / 0,25 = 8.000 mm (8 metros), exigindo operador com binóculos para enxergar o processo.",
              "en": "S = 8,000 mm (8 meters), requiring binoculars for the operator.",
              "es": "S = 8.000 mm (8 metros).",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Erro de cálculo por inversão de operadores matemáticos na equação.",
              "en": "Incorrect. Inverted algebraic operator.",
              "es": "Incorrecto. Error de cálculo.",
            },
          },
          {
            id: "opt-nr12-1-d",
            text: {
              "pt-BR": "S = 100 mm fixos, pois toda prensa hidráulica possui distância de segurança pré-estabelecida independente da velocidade de descida.",
              "en": "Fixed 100 mm because all hydraulic presses share an unvarying distance standard.",
              "es": "S = 100 mm fijos según estándar.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A distância é calculada em função do tempo de resposta real T e da resolução d da cortina.",
              "en": "Safety distance must be individually engineered based on measured stopping time T.",
              "es": "La distancia depende del tiempo de parada medido T y de la resolución óptica.",
            },
          },
        ],
      },
      {
        id: "q-nr12-2",
        order: 2,
        question: {
          "pt-BR": "CENÁRIO 2: Em um picador de toras de madeira para celulose na CMPC, o disco de corte com lâminas possui massa de 4 toneladas girando a 900 RPM. Quando o operador desliga o motor, o rotor leva 4 minutos e meio para parar totalmente por inércia livre. A porta de inspeção frontal para afiação de facas possui uma proteção móvel intertravada. Qual tipo de dispositivo de intertravamento a NR-12 EXIGE obrigatoriamente para essa porta e como ele deve funcionar eletromecanicamente?",
          "en": "SCENARIO 2: In a pulpwood chipper at CMPC, a 4-tonne cutting disc spins at 900 RPM. When motor power is cut, the rotor requires 4.5 minutes to coast to a complete stop due to inertia. The front knife inspection hatch has a movable interlocked guard. What specific type of interlock does NR-12 MANDATE for this door and how must it operate electro-mechanically?",
          "es": "ESCENARIO 2: En un picador de madera para pulpa, el disco de 4 toneladas a 900 RPM tarda 4,5 minutos en detenerse por inercia al cortar la energía. ¿Qué tipo de dispositivo de enclavamiento EXIGE obligatoriamente la NR-12 para la puerta de inspección y cuál es su lógica electromecánica?",
        },
        options: [
          {
            id: "opt-nr12-2-a",
            text: {
              "pt-BR": "Um interruptor de fim de curso simples (microswitch) sem trava física, pois se o trabalhador abrir a porta ele escutará o barulho do disco girando e terá bom senso de não colocar a mão.",
              "en": "A simple limit switch with no physical lock, assuming the worker hears the rotor noise and exercises common sense.",
              "es": "Un interruptor fin de carrera simple sin traba, confiando en el criterio del operador.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal perante a NR-12. O microswitch comum desliga o motor ao abrir a porta, mas não impede a abertura imediata enquanto as facas continuam girando em alta velocidade, resultando em amputação instantânea.",
              "en": "Incorrect and illegal. A simple switch cuts power but does not stop coasting blades from severing limbs if opened mid-spin.",
              "es": "Incorrecto y causa de accidentes fatales por apertura intempestiva durante el frenado.",
            },
          },
          {
            id: "opt-nr12-2-b",
            text: {
              "pt-BR": "Apenas um aviso adesivo colado na porta dizendo 'Cuidado: Facas Afiadas'.",
              "en": "A warning sticker saying 'Caution: Sharp Blades'.",
              "es": "Solo un cartel de advertencia pegado en la chapa.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Sinalização e avisos não substituem proteções físicas e intertravamentos de segurança.",
              "en": "Incorrect. Warning labels never substitute for mandatory physical safety engineering.",
              "es": "Incorrecto. Los carteles no sustituyen las protecciones de ingeniería.",
            },
          },
          {
            id: "opt-nr12-2-c",
            text: {
              "pt-BR": "Chave de Segurança com Intertravamento e Bloqueio por Solenoide (Guard Locking / Retenção Eletromecânica) associada a sensor de velocidade zero (Zero Speed Monitor). A trava mecânica do solenoide mantém a porta fisicamente trancada e bloqueada enquanto houver rotação do disco; a abertura da porta só é destravada após o sensor confirmar velocidade nula absoluta.",
              "en": "Safety Interlock Switch with Solenoid Guard Locking coupled with a certified Zero-Speed Motion Monitor. The mechanical locking bolt physically prevents opening the door while the disc is coasting; the latch unlocks exclusively once the motion monitor confirms absolute zero speed.",
              "es": "Interruptor de seguridad con enclavamiento y retención por solenoide (Guard Locking) vinculado a un monitor de velocidad cero. Mantiene la puerta bloqueada mecánicamente durante la inercia y solo libera la apertura cuando el sensor confirma parada absoluta.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Conforme o item 12.5 e Anexo I da NR-12, em máquinas com tempo de parada por inércia superior ao tempo de acesso à zona de perigo, é terminantemente proibido usar intertravamento simples sem bloqueio mecânico temporizado ou monitorado por velocidade zero.",
              "en": "Correct! Under NR-12 item 12.5 and ISO 14119, when coasting deceleration exceeds access time, simple interlocks are strictly illegal; guard-locking with motion monitoring is mandatory.",
              "es": "¡Correcto! En máquinas con inercia prolongada, la norma prohíbe el enclavamiento simple sin retención mecánica.",
            },
          },
          {
            id: "opt-nr12-2-d",
            text: {
              "pt-BR": "Um sensor fotoelétrico comum de porta de elevador que apita se a porta for aberta.",
              "en": "A standard elevator photocell that beeps if the hatch opens.",
              "es": "Una fotocélula común de ascensor que emite un zumbido al abrirse.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Buzinas não impedem a intrusão física da mão humana em contato com o disco giratório de 4 toneladas.",
              "en": "Beepers cannot physically restrain limbs from entering rotating high-energy machinery.",
              "es": "Las señales acústicas no retienen mecánicamente la puerta.",
            },
          },
        ],
      },
      {
        id: "q-nr12-3",
        order: 3,
        question: {
          "pt-BR": "CENÁRIO 3: Em uma inspeção na esteira transportadora de cavacos de madeira, o técnico de manutenção encontra o botão de parada de emergência tipo cogumelo montado no circuito elétrico do motor. Ao analisar o diagrama elétrico unifilar, ele nota que o botão está ligado diretamente em série com a bobina de um contator de potência comum (contator trifásico convencional AC-3), sem relé de segurança, sem canal duplo redundante e sem monitoramento de falha. Perante a ABNT NBR ISO 13849-1 e a NR-12, qual é a classificação técnica dessa instalação e qual é o risco catastrófico oculto?",
          "en": "SCENARIO 3: During an inspection on a wood chip conveyor, a technician reviews an emergency stop mushroom pushbutton circuit. The electrical schematic reveals the E-stop contact is wired in simple series with a single standard AC-3 motor contactor coil, with no safety relay, no dual-channel redundancy, and no contact monitoring. Under ISO 13849-1 and NR-12, what is the technical safety category and the critical hidden hazard?",
          "es": "ESCENARIO 3: Pulsador de parada de emergencia conectado en serie simple directamente a la bobina de un contactor convencional AC-3, sin relé de seguridad ni doble canal. Según ISO 13849-1 y NR-12, ¿cuál es la categoría técnica y el riesgo crítico oculto?",
        },
        options: [
          {
            id: "opt-nr12-3-a",
            text: {
              "pt-BR": "Circuito Categoria B ou 1 (Não Conforme para funções de emergência). O risco catastrófico é a soldagem mecânica dos contatos do contator de potência por arco elétrico (contatos colados): nessa condição, mesmo se o operador pressionar o botão de emergência até o fundo, a máquina NÃO IRÁ PARAR, tornando o comando de emergência totalmente inoperante no momento do acidente.",
              "en": "Circuit Category B or 1 (Non-compliant for emergency safety). Critical hidden hazard: electrical contact welding (contactor points stuck closed by arcing). Under this condition, even if the operator slams the E-stop, the machine WILL NOT STOP, rendering emergency intervention totally ineffective during an entrapment.",
              "es": "Circuito Categoría B o 1 (No conforme). Riesgo catastrófico: soldadura de los contactos del contactor por arco eléctrico (contactos pegados). Si ocurre esto, al presionar el botón de emergencia la máquina NO SE DETIENE.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A NR-12 exige que sistemas de segurança atendam à apreciação de risco (geralmente Categoria 3 ou 4 / PL d ou PL e). Exige canal duplo com contatores redundantes mecanicamente guiados e monitorados por relé de segurança (EDM - External Device Monitoring), garantindo que uma falha isolada (contato colado) não anule a parada de emergência.",
              "en": "Correct! NR-12 mandates Category 3/4 (PL d/e) architectures with dual-channel monitored redundancy. A single welded contactor must never defeat the safety stop function.",
              "es": "¡Correcto! En categoría 4, el doble canal y el monitoreo de relé garantizan que un contactor pegado no impida el corte de emergencia.",
            },
          },
          {
            id: "opt-nr12-3-b",
            text: {
              "pt-BR": "Instalação Categoria 4 de altíssima segurança, pois o contator comum corta a energia dos 3 fios elétricos ao mesmo tempo.",
              "en": "Category 4 high-safety installation because the contactor disconnects all 3 phase conductors at once.",
              "es": "Instalación de Categoría 4 porque corta las 3 fases a la vez.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Contator comum não é componente de segurança e não possui contatos de espelho (Mirror Contacts) nem redundância contra soldagem.",
              "en": "Incorrect. Standard power contactors lack positive-guided mirror contacts and fail to protect against contact welding.",
              "es": "Incorrecto. Los contactores comunes no cumplen requisitos de seguridad funcional.",
            },
          },
          {
            id: "opt-nr12-3-c",
            text: {
              "pt-BR": "A NR-12 proíbe o uso de botões de emergência cogumelo em esteiras industriais.",
              "en": "NR-12 bans mushroom buttons on conveyors.",
              "es": "La NR-12 prohíbe las paradas de emergencia en cintas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Botões tipo cogumelo e cabos de emergência ao longo de esteiras são obrigatórios por norma.",
              "en": "Incorrect. Pull cords and mushroom buttons are mandatory throughout conveyor lengths.",
              "es": "Incorrecto. Son obligatorios en todo el trayecto de la cinta.",
            },
          },
          {
            id: "opt-nr12-3-d",
            text: {
              "pt-BR": "A ausência de relé de segurança é irrelevante desde que o botão seja vermelho com fundo amarelo.",
              "en": "Missing safety relays are irrelevant as long as the button is red with a yellow background.",
              "es": "La ausencia de relé no importa siempre que el botón sea rojo sobre fondo amarillo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Cores padronizadas são requisito visual, mas a integridade lógica funcional depende de redundância e monitoramento elétrico.",
              "en": "Aesthetic coloring satisfies signage but fails functional safety requirements.",
              "es": "El color es obligatorio pero la seguridad funcional exige arquitectura redundante.",
            },
          },
        ],
      },
      {
        id: "q-nr12-4",
        order: 4,
        question: {
          "pt-BR": "CENÁRIO 4: Após a atuação de um botão de parada de emergência em uma máquina que provocou o desarme do relé de segurança, o operador destrava o botão de emergência girando-o para a posição original. Conforme a NR-12 (item 12.6.1 e 12.6.2), qual comportamento o sistema elétrico e de controle da máquina DEVE obrigatoriamente apresentar?",
          "en": "SCENARIO 4: After an E-stop button trip disconnects safety relays, the operator twists to reset the physical mushroom button back to normal. According to NR-12 (items 12.6.1-12.6.2) and safety functional principles, how MUST the control system behave upon resetting the emergency button?",
          "es": "ESCENARIO 4: Tras actuar una parada de emergencia y rearmar el pulsador girándolo. Conforme a la NR-12, ¿cómo DEBE comportarse obligatoriamente el sistema de control de la máquina?",
        },
        options: [
          {
            id: "opt-nr12-4-a",
            text: {
              "pt-BR": "A máquina deve arrancar em velocidade máxima imediatamente para recuperar o tempo de produção perdido durante a parada.",
              "en": "The machine should immediately launch at top speed to recover lost cycle time.",
              "es": "La máquina debe arrancar a toda velocidad para recuperar el tiempo perdido.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto, criminoso e letal.",
              "en": "Incorrect and lethal.",
              "es": "Incorrecto y letal.",
            },
          },
          {
            id: "opt-nr12-4-b",
            text: {
              "pt-BR": "A máquina NÃO PODE dar partida ou retomar movimentos automaticamente com o simples destravamento do botão. O comando de parada deve permanecer retido; é estritamente obrigatório que haja um comando voluntário e intencional de rearme manual (Reset Manual no painel) seguido de um novo comando explícito no botão de Partida (Start) pelo operador.",
              "en": "The machinery MUST NEVER restart or resume motion automatically upon simply unlatching the E-stop. The safety shutdown state must latch; a deliberate manual Reset button press followed by a distinct Start button command is mandatory.",
              "es": "La máquina NUNCA DEBE arrancar automáticamente al destrabar el pulsador. Es estrictamente obligatorio un Rearme Manual intencional (botón Reset) seguido de una orden explícita de Marcha (Start).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Partida intempestiva ou automática após rearmar emergências é uma das violações mais graves da NR-12 e causa mortes frequentes de trabalhadores que ainda estavam na zona de perigo.",
              "en": "Correct! Automatic restart upon clearing an emergency latch is strictly banned under machine safety standards, preventing fatal surprise startups.",
              "es": "¡Correcto! El reinicio automático tras destrabar la seta está terminantemente prohibido por causar accidentes mortales.",
            },
          },
          {
            id: "opt-nr12-4-c",
            text: {
              "pt-BR": "O sistema deve tocar uma buzina e desligar a energia de todo o parque fabril da empresa.",
              "en": "The system must sound a horn and cut power to the entire industrial facility.",
              "es": "El sistema debe cortar la energía de toda la fábrica.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A parada de emergência atua no perímetro de risco da célula ou equipamento em questão.",
              "en": "Incorrect. E-stops are zoned to the targeted machinery envelope.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "opt-nr12-4-d",
            text: {
              "pt-BR": "O motor deve girar em sentido contrário por 30 segundos para expulsar eventuais ferramentas esquecidas.",
              "en": "The motor must reverse for 30 seconds to eject dropped tools.",
              "es": "El motor debe girar en sentido inverso durante 30 segundos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Movimentos automáticos inversos sem comando controlado geram risco severo de esmagamento.",
              "en": "Spontaneous uncommanded reverse motion generates severe pinch and crush hazards.",
              "es": "Movimientos espontáneos en reversa generan atrapamientos letales.",
            },
          },
        ],
      },
      {
        id: "q-nr12-5",
        order: 5,
        question: {
          "pt-BR": "CENÁRIO 5: Qual é a distinção técnica mandatória entre PROTEÇÃO FIXA e PROTEÇÃO MÓVEL segundo a NR-12 (itens 12.5.1 a 12.5.5) e qual é a regra estrita para a fixação mecânica de proteções fixas?",
          "en": "SCENARIO 5: What is the mandatory technical distinction between FIXED GUARDS and MOVABLE GUARDS per NR-12 (items 12.5.1-12.5.5), and what is the strict fastener rule for fixed guards?",
          "es": "ESCENARIO 5: ¿Cuál es la diferencia técnica obligatoria entre RESGUARDO FIJO y RESGUARDO MÓVIL según la NR-12 y cuál es la regla estricta sobre sus elementos de fijación?",
        },
        options: [
          {
            id: "opt-nr12-5-a",
            text: {
              "pt-BR": "Proteções fixas podem ser presas com ímãs de geladeira ou velcro industrial para facilitar a remoção rápida durante a produção.",
              "en": "Fixed guards may be fastened using magnets or Velcro to accelerate removal during shifts.",
              "es": "Los resguardos fijos pueden sujetarse con imanes o velcro para retirarlos rápido.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Proibição expressa. Proteções fixas exigem elementos de fixação que demandem uso de ferramentas específicas para remoção.",
              "en": "Explicitly forbidden. Fixed guards must require dedicated tools for removal.",
              "es": "Prohibido. Los resguardos fijos deben exigir el uso de herramientas para su apertura.",
            },
          },
          {
            id: "opt-nr12-5-b",
            text: {
              "pt-BR": "A proteção fixa deve ser mantida em sua posição de forma permanente ou por meio de elementos de fixação que só permitam sua remoção ou abertura com o uso de ferramentas específicas; seus elementos de fixação devem permanecer retidos à proteção ou à máquina quando desmontados (parafusos cativos), evitando seu extravio; já a proteção móvel é ligada à estrutura da máquina por dobradiças/guias e associada a dispositivos de intertravamento.",
              "en": "Fixed guards must be held in position permanently or by fasteners requiring dedicated hand tools for removal; fasteners should remain captive to the guard or frame when dismantled; movable guards are hinged/guided and coupled with safety interlock devices.",
              "es": "El resguardo fijo se mantiene cerrado permanentemente o mediante fijaciones que solo se retiran con herramientas específicas, preferentemente con tornillos cautivos; el resguardo móvil se une por bisagras/guías y cuenta con enclavamientos de seguridad.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O item 12.5.2 exige expressamente que a proteção fixa só possa ser retirada com ferramenta específica e recomenda parafusos imperdíveis/cativos.",
              "en": "Correct! NR-12 item 12.5.2 mandates that fixed guards can only be opened with tools, utilizing captive fasteners to prevent bypass.",
              "es": "¡Correcto! Cumple con la exigencia de fijación con herramienta y tornillería cautiva de la NR-12.",
            },
          },
          {
            id: "opt-nr12-5-c",
            text: {
              "pt-BR": "Proteções móveis não necessitam de chaves de segurança nem intertravamento se forem pintadas na cor amarela.",
              "en": "Movable guards do not require interlocks if painted yellow.",
              "es": "Los resguardos móviles no requieren enclavamientos si se pintan de amarillo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Pintura amarela é sinalização de segurança, não substitui intertravamento elétrico monitorado.",
              "en": "Yellow paint provides visibility, never serving as an electrical safety interlock.",
              "es": "El color no sustituye el enclavamiento eléctrico de seguridad.",
            },
          },
          {
            id: "opt-nr12-5-d",
            text: {
              "pt-BR": "Proteções fixas e móveis são sinônimos e podem ser abertas sem qualquer ferramenta manual em qualquer máquina industrial.",
              "en": "Fixed and movable guards are identical terms, openable without tools on all machines.",
              "es": "Resguardo fijo y móvil son sinónimos y pueden abrirse a mano sin herramientas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Conceitos distintos. Resguardo fixo requer ferramenta; resguardo móvel tem dobradiça e intertravamento obrigatório.",
              "en": "Distinct definitions: fixed requires tools, movable articulates on hinges and interlocks.",
              "es": "Conceptos diferentes regulados por artículos específicos de la norma.",
            },
          },
        ],
      },
      {
        id: "q-nr12-6",
        order: 6,
        question: {
          "pt-BR": "CENÁRIO 6: Em um comando bimanual tipo III C (ABNT NBR ISO 13851) utilizado para acionamento de uma guilhotina hidráulica na fábrica, quais são os três requisitos funcionais mandatórios de segurança para evitar que o operador burle o dispositivo?",
          "en": "SCENARIO 6: In a Type III C Two-Hand Control Device (ISO 13851) operating an industrial hydraulic shear, what are the three mandatory functional safety requirements preventing operator tampering and bypass?",
          "es": "ESCENARIO 6: En un dispositivo de mando a dos manos Tipo III C (ISO 13851) para una guillotina hidráulica, ¿cuáles son los tres requisitos funcionales obligatorios para evitar burlas?",
        },
        options: [
          {
            id: "opt-nr12-6-a",
            text: {
              "pt-BR": "1) Sincronismo estrito: os dois atuadores manuais devem ser pressionados em intervalo de tempo menor ou igual a 0,5 segundos; 2) Ação mantida: se qualquer uma das mãos soltar o botão durante o ciclo de corte perigoso, o movimento deve parar imediatamente; 3) Antirrebote e liberação mútua: para iniciar um novo ciclo, ambas as mãos devem soltar totalmente os dois botões.",
              "en": "1) Strict synchronism: both actuators must be pressed within <= 0.5 seconds; 2) Continuous actuation: releasing either button during the hazardous cycle instantly stops motion; 3) Re-initiation: both buttons must be fully released before another cycle can be triggered.",
              "es": "1) Sincronismo: pulsación simultánea en <= 0,5 segundos; 2) Acción mantenida: soltar cualquier botón detiene el corte de inmediato; 3) Rearme completo: soltar ambos botones antes de un nuevo ciclo.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A NBR ISO 13851 Tipo III C exige sincronismo <= 0,5s, parada imediata ao soltar e impedimento de ciclo subsequente com um botão travado com fita adesiva.",
              "en": "Correct! ISO 13851 Type III C enforces 0.5s synchronism, held actuation, and anti-tie-down logic preventing single-button taping.",
              "es": "¡Correcto! El sincronismo de 0,5 s y la lógica antiburla impiden fijar un pulsador con cinta adhesiva.",
            },
          },
          {
            id: "opt-nr12-6-b",
            text: {
              "pt-BR": "O operador pode amarrar uma chave de fenda com arame em um dos botões e operar a guilhotina usando apenas uma mão livre.",
              "en": "The operator may tape down one button with wire and operate the shear with one free hand.",
              "es": "El operador puede trabar un botón con alambre y usar una sola mano.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Burla clássica e gravíssima que anula a proteção e causa amputação imediata de mãos.",
              "en": "Lethal bypass defeating the safety purpose of two-hand control, leading directly to amputation.",
              "es": "Violación grave que causa amputación de manos.",
            },
          },
          {
            id: "opt-nr12-6-c",
            text: {
              "pt-BR": "Os botões devem ficar a menos de 5 cm de distância um do outro para poderem ser acionados com a palma de uma única mão.",
              "en": "Buttons must sit within 5 cm of each other so one palm presses both simultaneously.",
              "es": "Los botones deben estar a menos de 5 cm para accionarlos con una sola mano.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A norma exige distância mínima e anéis de proteção física para impedir o acionamento simultâneo com uma só mão ou cotovelo.",
              "en": "Safety standards mandate physical shrouds and spacing to prevent one-handed or elbow bridging.",
              "es": "Se exige separación física y aros protectores para impedir activación con una sola extremidad.",
            },
          },
          {
            id: "opt-nr12-6-d",
            text: {
              "pt-BR": "O comando bimanual só funciona se o operador estiver vestindo luvas grossas de malha de aço com ímãs nas pontas.",
              "en": "Two-hand controls require chainmail gloves with magnetized fingertips to function.",
              "es": "Requiere guantes de malla de acero con imanes.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Comandos bimanuais utilizam botoeiras industriais convencionais ou ópticas/capacitivas sem necessidade de ímãs.",
              "en": "Controls rely on ergonomic pushbuttons or optical sensors, not magnetic gloves.",
              "es": "Los mandos bimanuais son pulsadores industriales independientes de imanes.",
            },
          },
        ],
      },
      {
        id: "q-nr12-7",
        order: 7,
        question: {
          "pt-BR": "CENÁRIO 7: Durante a manutenção mecânica de uma rosca transportadora de biomassa, a equipe precisa remover a tampa superior para desobstrução de material. Qual procedimento de isolamento de energias perigosas (LOTO) e autorização operacional é mandatório antes da inserção de qualquer ferramenta ou parte do corpo na zona de perigo?",
          "en": "SCENARIO 7: During mechanical maintenance of a biomass auger screw conveyor, the crew must remove the top cover to clear a jam. What hazardous energy control (LOTO) and work authorization procedure is mandatory prior to inserting any tool or body part into the danger zone?",
          "es": "ESCENARIO 7: Durante el mantenimiento de un tornillo sinfín de biomasa, el equipo debe abrir la tapa superior para destrabar material. ¿Qué procedimiento de bloqueo LOTO y autorización es obligatorio?",
        },
        options: [
          {
            id: "opt-nr12-7-a",
            text: {
              "pt-BR": "Basta desligar a chave seletora liga/desliga local do operador e pedir para o colega ficar olhando o painel enquanto o mecânico coloca o braço na rosca.",
              "en": "Simply flipping the operator local toggle switch and having a coworker watch the panel while reaching in.",
              "es": "Basta con apagar el selector local y pedir a un compañero que vigile el tablero.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A chave seletora opera no comando e não isola a potência; seletor acidentalmente acionado provoca aprisionamento e morte por mutilação.",
              "en": "Selector switches control low-voltage logic; unexpected startup causes fatal whole-body auger entrapment.",
              "es": "El selector no aísla potencia. El arranque accidental causa mutilaciones mortales.",
            },
          },
          {
            id: "opt-nr12-7-b",
            text: {
              "pt-BR": "Emissão formal de Permissão de Trabalho (PT) e Análise Preliminar de Risco (APR); desenergização na chave seccionadora geral do CCM com bloqueio por cadeado pessoal e etiqueta identificada de cada membro da equipe (LOTO); dissipação ou bloqueio mecânico de energias residuais (travamento mecânico contra giro da rosca); e Teste de Energia Zero (tentativa intencional de partida para comprovar inoperância).",
              "en": "Formal Work Permit (PT) and Job Safety Analysis (APR); main disconnect isolation at the MCC with individual personal padlocks and tags for each worker (LOTO); mechanical dissipation and physical blocking of residual energy (locking auger shaft from freewheeling); and Zero Energy Verification (try-step testing).",
              "es": "Emisión formal de Permiso de Trabajo (PT) y APR; desenergización en el interruptor principal con candado personal y tarjeta (LOTO); disipación y traba mecánica contra giro de la hélice; y prueba de Energía Cero.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O item 12.11 da NR-12 exige procedimento rigoroso de LOTO individual, dissipação de energia residual mecânica/gravitacional e teste de energia zero antes de qualquer intervenção.",
              "en": "Correct! NR-12 item 12.11 enforces comprehensive personal LOTO, mechanical energy immobilization, and zero-energy verification before entry.",
              "es": "¡Correcto! Cumplimiento pleno del protocolo LOTO y verificación de energía cero de la NR-12.",
            },
          },
          {
            id: "opt-nr12-7-c",
            text: {
              "pt-BR": "Realizar a desobstrução com a rosca girando em baixa velocidade para que o próprio motor ajude a expulsar o cavaco acumulado.",
              "en": "Clear the blockage while the auger runs at low speed so the motor helps eject packed chips.",
              "es": "Destrabar con el tornillo girando lento para que el motor empuje el material.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Intervir manualmente em partes rotativas móveis é a causa raiz mais violenta de amputações e mortes industriais.",
              "en": "Manual intervention on live rotating machinery is the leading root cause of fatal industrial mutilation.",
              "es": "Intervenir maquinaria en marcha provoca atrapamientos instantáneos mortales.",
            },
          },
          {
            id: "opt-nr12-7-d",
            text: {
              "pt-BR": "Retirar a tampa e lavar com jatos de água fervente sem bloquear a eletricidade nem emitir Permissão de Trabalho.",
              "en": "Remove cover and wash with boiling water without electrical lockout or Work Permits.",
              "es": "Retirar la tapa y lavar con agua caliente sin bloqueo eléctrico ni permiso.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Água em motores elétricos gera choque, e a ausência de LOTO expõe a equipe a esmagamento repentino.",
              "en": "Water generates shock hazards and lack of LOTO risks sudden machine rotation.",
              "es": "Genera riesgo eléctrico y atrapamiento por arranque inesperado.",
            },
          },
        ],
      },
      {
        id: "q-nr12-8",
        order: 8,
        question: {
          "pt-BR": "CENÁRIO 8: Em relação aos transportadores contínuos de correia industriais (item 12.8 e Anexo II da NR-12), quais são os dispositivos mandatórios de segurança para proteção de roletes de carga/retorno, tambores de acionamento/retorno e cabos de emergência?",
          "en": "SCENARIO 8: Regarding industrial continuous belt conveyors (NR-12 item 12.8 and Annex II), what are the mandatory safety protections for drive/tail pulleys, carry/return idlers, and emergency stop pull cords?",
          "es": "ESCENARIO 8: En transportadores continuos de banda (NR-12 ítem 12.8 y Anexo II), ¿cuáles son las protecciones obligatorias para tambores, rodillos y cables de tracción de emergencia?",
        },
        options: [
          {
            id: "opt-nr12-8-a",
            text: {
              "pt-BR": "Esteiras de correia não necessitam de proteção em roletes ou tambores porque a correia de borracha desliza suavemente sem risco mecânico.",
              "en": "Belt conveyors need no idler or pulley guards because rubber belts slide smoothly without hazard.",
              "es": "Las bandas transportadoras no necesitan protección en rodillos ni tambores.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Os pontos de contato entre a correia e os tambores/roletes constituem zonas de pinçamento de alta tração com risco extremo de esmagamento.",
              "en": "Nip points between belts and revolving drums generate extreme pinch forces pulling in workers.",
              "es": "Los puntos de convergencia entre banda y tambor generan atrapamientos letales.",
            },
          },
          {
            id: "opt-nr12-8-b",
            text: {
              "pt-BR": "Proteções fixas que segreguem totalmente o ponto de agarramento (nip point) entre correia e tambores de tração/retorno, chapas defletoras em roletes de retorno acessíveis, passarelas com rodapé e guarda-corpo, e cabo de parada de emergência ao longo de toda a extensão acessível da correia, com chave de acionamento por tração e ruptura do cabo.",
              "en": "Fixed guards completely enclosing the nip points between belt and drive/tail pulleys, deflectors on accessible return idlers, walkways with toe-boards/guardrails, and emergency pull cords throughout the accessible conveyor length featuring slack-cable trip detection.",
              "es": "Resguardos fijos envolventes en los puntos de convergencia (nip points) de tambores, deflectores en rodillos inferiores accesibles, pasarelas con barandillas y cable de parada de emergencia en toda la longitud con detección de rotura de cable.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O item 12.8.2 e o Anexo II estabelecem proteção compulsória de tambores, roletes de retorno e cabos de emergência com retenção mecânica e rearme manual.",
              "en": "Correct! NR-12 12.8.2 and Annex II mandate full enclosure of in-running nips and bidirectional monitored emergency pull cords.",
              "es": "¡Correcto! Enclavamiento de puntos de atrapamiento y cables de tracción a lo largo de toda la pasarela.",
            },
          },
          {
            id: "opt-nr12-8-c",
            text: {
              "pt-BR": "O cabo de emergência deve ser de náilon elástico para que estique até 10 metros sem desligar o motor da esteira.",
              "en": "Emergency pull wire must be stretchy nylon stretching 10 meters without tripping.",
              "es": "El cable de emergencia debe ser elástico para estirarse sin detener la cinta.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Cabos de emergência devem ser de aço revestido, devidamente tensionados, atuando com pequena deflexão mecânica.",
              "en": "Pull cords must be rigid steel wire ropes under calibration tension, tripping upon slight displacement.",
              "es": "El cable debe ser de acero tensado para accionar el microrruptor de corte ante cualquier jalón.",
            },
          },
          {
            id: "opt-nr12-8-d",
            text: {
              "pt-BR": "A limpeza de sujeira acumulada sob a esteira em movimento pode ser feita com rodo de cabo curto de 30 cm.",
              "en": "Cleaning accumulated spillage under moving belts can be performed with short-handled scrapers.",
              "es": "La limpieza bajo la cinta en marcha puede hacerse con rasqueta de mano corta.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Limpeza manual em transportadores em operação é expressamente proibida pela NR-12.",
              "en": "Manual cleaning near running conveyor belts is strictly prohibited.",
              "es": "La limpieza manual cerca de bandas en movimiento está prohibida taxativamente.",
            },
          },
        ],
      },
      {
        id: "q-nr12-9",
        order: 9,
        question: {
          "pt-BR": "CENÁRIO 9: Em uma máquina operatriz convencional (como um Torno Mecânico Universal em oficina de manutenção), quais são as proteções mandatórias exigidas pela NR-12 para a placa de fixação de peças (castanhas), barramento longitudinal e mandril de furação?",
          "en": "SCENARIO 9: On a conventional machine tool (such as an engine lathe in a maintenance shop), what are the mandatory NR-12 physical safety protections for the revolving chuck, longitudinal lead screw/feed rod, and drill chuck?",
          "es": "ESCENARIO 9: En un torno mecánico convencional de taller, ¿cuáles son las protecciones obligatorias según la NR-12 para el plato de garras, tornillo patrón y zona de mecanizado?",
        },
        options: [
          {
            id: "opt-nr12-9-a",
            text: {
              "pt-BR": "O operador de torno mecânico não deve ter nenhuma proteção física na placa e deve operar usando luvas de raspa grossas e cachecol de lã para se aquecer.",
              "en": "Lathe operators need zero chuck guards and must wear heavy leather gloves and a woolen scarf for warmth.",
              "es": "El tornero no debe tener resguardo y debe trabajar con guantes de cuero y bufanda.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Luvas, roupas soltas e cachecóis em tornos causam aprisionamento rotativo instantâneo com dilaceração corporal completa.",
              "en": "Gloves and loose garments near spinning chucks snag fibers and violently drag bodies into the spindle.",
              "es": "Usar guantes o bufandas en tornos es causa de atrapamiento letal y mutilaciones extremas.",
            },
          },
          {
            id: "opt-nr12-9-b",
            text: {
              "pt-BR": "Proteção móvel intertravada sobre a placa giratória (chuck guard) que impede o acionamento do fuso se a tampa estiver aberta, proteção retrátil telescópica no fuso/vara de rosca para evitar agarramento de vestimentas, tela de proteção contra cavacos e fluido de corte no carro porta-ferramentas e chave de emergência tipo cabo ou pedal de parada imediata.",
              "en": "Interlocked movable chuck guard preventing spindle startup when open, telescopic protective spiral/cover over lead screws/feed rods preventing garment entanglement, chip/coolant shield on the tool carriage, and emergency trip wire or foot pedal.",
              "es": "Resguardo móvil enclavado sobre el plato (chuck guard) que impide el giro si está abierto, funda telescópica sobre el tornillo patrón/barra de avance contra enganches, pantalla antisalpicaduras en el carro y pedal/cable de parada de emergencia.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O Anexo VII e as diretrizes da NR-12 para tornos mecânicos exigem proteção intertravada na placa, fuso telescópico coberto e proibição absoluta de luvas e mangas soltas.",
              "en": "Correct! NR-12 Annex VII lathe provisions mandate interlocked chuck guards, lead-screw enclosures, and bans on loose garments/gloves.",
              "es": "¡Correcto! Cumple estrictamente con el anexo de máquinas herramientas de la NR-12.",
            },
          },
          {
            id: "opt-nr12-9-c",
            text: {
              "pt-BR": "Basta usar óculos de sol comuns para evitar que o brilho do metal usinado ofusque a visão do torneiro.",
              "en": "Standard fashion sunglasses suffice to shield glare from polished metal chips.",
              "es": "Basta con gafas de sol para evitar reflejos del metal.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Óculos de segurança certificados protegem os olhos, mas não dispensam as barreiras mecânicas e intertravamentos na máquina.",
              "en": "Safety eyewear cannot substitute for required machine enclosures and safety interlocks.",
              "es": "Los lentes no sustituyen los resguardos mecánicos de la máquina.",
            },
          },
          {
            id: "opt-nr12-9-d",
            text: {
              "pt-BR": "A chave da castanha deve ser deixada obrigatoriamente encaixada na placa durante o giro para não ser perdida.",
              "en": "The chuck key must be permanently left engaged in the chuck socket during operation to avoid losing it.",
              "es": "La llave del plato debe dejarse puesta en la mordaza mientras gira para no perderla.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Deixar a chave de aperto na placa arremessa um projétil de aço letal quando o motor arranca.",
              "en": "Leaving chuck keys engaged turns them into high-speed lethal flying steel missiles upon startup.",
              "es": "Dejar la llave puesta la convierte en un proyectil mortal al girar el plato.",
            },
          },
        ],
      },
      {
        id: "q-nr12-10",
        order: 10,
        question: {
          "pt-BR": "CENÁRIO 10: Em relação à certificação e autorização formal exigida pela NR-12 (itens 12.16.1 a 12.16.5) e às diretrizes permanentes do AGENTS.md da RSS3, qual é a diferença categórica e legal entre a aprovação neste módulo de curso online e a habilitação operacional de um colaborador para operar máquinas pesadas?",
          "en": "SCENARIO 10: Regarding qualification and formal authorization under NR-12 (items 12.16.1-12.16.5) and AGENTS.md permanent guidelines, what is the categorical legal boundary between passing this online theoretical exam and formal operational authorization to run heavy industrial machinery?",
          "es": "ESCENARIO 10: En cuanto a habilitación formal según NR-12 y AGENTS.md, ¿cuál es la diferencia legal categórica entre aprobar este módulo teórico online y la habilitación formal para operar maquinaria pesada?",
        },
        options: [
          {
            id: "opt-nr12-10-a",
            text: {
              "pt-BR": "O certificado do site substitui todas as normas regulamentadoras e autoriza o colaborador a operar qualquer prensa hidráulica sem necessidade de treinamento prático.",
              "en": "The online certificate overrides regulations and waives practical training.",
              "es": "El certificado online anula las exigencias de entrenamiento presencial.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto, ilegal e viola as regras fundamentais de conformidade da RSS3.",
              "en": "Incorrect and illegal under safety regulations.",
              "es": "Incorrecto e ilegal.",
            },
          },
          {
            id: "opt-nr12-10-b",
            text: {
              "pt-BR": "A autorização prática só é exigida para colaboradores menores de 18 anos.",
              "en": "Practical authorization is only needed for minors under 18.",
              "es": "La práctica solo es exigida para menores de 18 años.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A capacitação prática e autorização formal da NR-12 é mandatória para todo e qualquer trabalhador independentemente da idade.",
              "en": "Incorrect. Mandatory for all operating personnel regardless of age.",
              "es": "Incorrecto. Es obligatoria para todos los operadores.",
            },
          },
          {
            id: "opt-nr12-10-c",
            text: {
              "pt-BR": "A conclusão do curso online emite estritamente o 'Certificado de Conclusão de Conteúdo Teórico'. A NR-12 exige que o operador passe obrigatoriamente por capacitação prática supervisionada no modelo exato da máquina, com avaliação de habilidades físicas de condução e emergência, ASO com aptidão ocupacional validada e termo formal de autorização assinado pelo responsável técnico e pelo empregador.",
              "en": "Online completion yields strictly a 'Theoretical Content Completion Certificate'. NR-12 mandates that formal operator qualification requires hands-on supervised practical training on the specific machine model, valid occupational medical clearance (ASO), and written employer authorization.",
              "es": "La conclusión online otorga únicamente 'Certificado de Conclusión de Contenido Teórico'. La NR-12 exige práctica supervisada en la máquina real, ASO médico vigente con aptitud y autorización formal por escrito de la empresa.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Conforme a diretriz permanente de integridade do AGENTS.md (Seção 3), treinamentos EAD nunca conferem habilitação legal formal para atividades regulamentadas sem a etapa prática presencial e validação médica ocupacional.",
              "en": "Correct! Per permanent AGENTS.md Section 3 rules, e-learning never qualifies for hands-on regulated machine operations without certified practical evaluation.",
              "es": "¡Correcto! Cumple con la directriz regulatoria del AGENTS.md que separa de forma categórica la teoría del registro de habilitación práctica formal.",
            },
          },
          {
            id: "opt-nr12-10-d",
            text: {
              "pt-BR": "A aprovação no teste digital autoriza a remoção de proteções mecânicas em qualquer equipamento da fábrica sem aviso prévio.",
              "en": "Digital test approval permits removing mechanical guards on any plant machinery without prior notice.",
              "es": "La prueba digital autoriza el retiro de resguardos mecánicos sin aviso previo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Remover proteções sem procedimento LOTO e ordem formal é infração gravíssima e desvio intolerável.",
              "en": "Removing machine guards without formal LOTO procedures is gross negligence.",
              "es": "Retirar protecciones sin protocolo LOTO es una falta intolerable.",
            },
          },
        ],
      },
    ],
  },
};
