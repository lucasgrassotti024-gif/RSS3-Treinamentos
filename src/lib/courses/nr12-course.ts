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
    estimatedMinutes: 20,
    questionsCount: 5,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação teórica com 5 questões abrangendo conceitos mandatórios da NR-12, proteções físicas e intertravadas, LOTO e resposta a emergências. Exige 70% de acerto para emissão do certificado de conclusão teórica.",
      "en": "Theoretical assessment covering NR-12 concepts, physical and interlocked guards, LOTO, and emergency response. Requires 70% passing score.",
      "es": "Evaluación teórica sobre la NR-12, resguardos con enclavamiento, bloqueo LOTO y primeros auxilios. Requiere 70% de aprobación.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência Teórica — NR-12",
      "en": "Final Theoretical Competency Assessment — NR-12",
      "es": "Evaluación Final de Competencias Teóricas — NR-12",
    },
    description: {
      "pt-BR": "Comprovação de conhecimentos essenciais em segurança no trabalho em máquinas e equipamentos conforme a NR-12 atualizada.",
      "en": "Validation of essential knowledge in machinery and equipment safety according to NR-12 standards.",
      "es": "Validación de conocimientos esenciales en seguridad con maquinaria según la norma NR-12.",
    },
    questions: [
      {
        id: "q-nr12-1",
        order: 1,
        question: {
          "pt-BR": "1. Qual é o objetivo central e mandatório da Norma Regulamentadora Nº 12 (NR-12)?",
          "en": "1. What is the central and mandatory objective of Regulatory Standard NR-12?",
          "es": "1. ¿Cuál es el objetivo principal y obligatorio de la Norma NR-12?",
        },
        options: [
          {
            id: "nr12-q1-a",
            text: {
              "pt-BR": "Aumentar a velocidade das linhas de produção reduzindo paradas técnicas",
              "en": "Increase line production speed by minimizing technical stops",
              "es": "Aumentar la velocidad de producción reduciendo paradas técnicas",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A NR-12 prioriza a vida e a integridade do trabalhador, nunca o ritmo fabril.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "nr12-q1-b",
            text: {
              "pt-BR": "Garantir a integridade física e a saúde dos trabalhadores em todas as fases de vida de máquinas e equipamentos, prevenindo acidentes",
              "en": "Ensure physical integrity and health across all machinery lifecycles, preventing accidents",
              "es": "Garantizar la salud e integridad física en todas las etapas de vida de la maquinaria, previniendo accidentes",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A NR-12 regulamenta requisitos fundamentais de segurança em máquinas desde a fabricação até o descarte.",
              "en": "Correct! NR-12 establishes mandatory machine safety standards from manufacture to decommissioning.",
              "es": "¡Correcto! Es el objetivo principal de la NR-12 en el ámbito industrial.",
            },
          },
          {
            id: "nr12-q1-c",
            text: {
              "pt-BR": "Substituir operadores humanos por sistemas 100% autônomos sem necessidade de proteções",
              "en": "Replace all human operators with fully autonomous systems without guards",
              "es": "Sustituir operadores por máquinas autónomas sin necesidad de resguardos",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A norma se aplica a máquinas com ou sem automação, focando na proteção do operador.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-nr12-2",
        order: 2,
        question: {
          "pt-BR": "2. O que o operador de máquina deve fazer ao notar que uma proteção de segurança está quebrada, trincada ou com sensor solto?",
          "en": "2. What should a machine operator do when noticing a broken, cracked guard or loose safety sensor?",
          "es": "2. ¿Qué debe hacer el operador al detectar un resguardo roto, fisurado o sensor desalineado?",
        },
        options: [
          {
            id: "nr12-q2-a",
            text: {
              "pt-BR": "Continuar operando a máquina e anotar para avisar na reunião do mês seguinte",
              "en": "Keep operating and write a note for the next monthly meeting",
              "es": "Continuar operando e informar en la reunión del mes siguiente",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e de alto risco.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "nr12-q2-b",
            text: {
              "pt-BR": "Paralisar imediatamente a operação, sinalizar o impedimento e comunicar a supervisão e segurança do trabalho",
              "en": "Immediately stop the machine, flag the hazard, and inform site supervisor and safety department",
              "es": "Detener inmediatamente la máquina, señalizar e informar al supervisor y seguridad laboral",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Diante de proteção danificada, a máquina não pode operar. Deve ser paralisada e reportada de imediato.",
              "en": "Correct! Machinery must not run with damaged safety guards.",
              "es": "¡Correcto! Máquinas con protecciones dañadas deben pararse de inmediato.",
            },
          },
          {
            id: "nr12-q2-c",
            text: {
              "pt-BR": "Burlar a chave de segurança com fita ou arame para que a máquina continue trabalhando",
              "en": "Bypass the safety interlock switch with tape or wire to keep working",
              "es": "Puentear el sensor con cinta adhesiva para que la máquina no se apague",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A adulteração ou burla de dispositivos de segurança é falta grave e gravíssimo risco de acidente.",
              "en": "Incorrect. Bypassing safety interlocks is a severe safety violation.",
              "es": "Incorrecto. Anular o puentear dispositivos de seguridad es una falta grave.",
            },
          },
        ],
      },
      {
        id: "q-nr12-3",
        order: 3,
        question: {
          "pt-BR": "3. Quem tem competência e autorização para remover proteções fixas ou móveis em máquinas industriais para manutenção?",
          "en": "3. Who is authorized to remove fixed or movable safety guards on industrial machinery for servicing?",
          "es": "3. ¿Quién está autorizado para retirar resguardos fijos o móviles en mantenimiento?",
        },
        options: [
          {
            id: "nr12-q3-a",
            text: {
              "pt-BR": "Exclusivamente profissionais capacitados, qualificados ou autorizados, com a máquina desenergizada e bloqueada",
              "en": "Only trained, qualified, and authorized technicians with the machine de-energized and locked out",
              "es": "Solo personal capacitado, calificado y autorizado, con la máquina desenergizada y bloqueada",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Apenas pessoas capacitadas e designadas podem retirar proteções sob estritos procedimentos de desenergização.",
              "en": "Correct! Restricted to authorized personnel under LOTO procedures.",
              "es": "¡Correcto! Requiere autorización formal y desenergización previa.",
            },
          },
          {
            id: "nr12-q3-b",
            text: {
              "pt-BR": "Qualquer funcionário que encontre uma chave de fenda disponível no setor",
              "en": "Any worker who finds an available screwdriver in the workshop",
              "es": "Cualquier operario que tenga un destornillador a mano",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A intervenção sem qualificação expõe o operador e os colegas a risco de mutilação.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "nr12-q3-c",
            text: {
              "pt-BR": "Apenas o operador novato durante sua primeira semana de integração",
              "en": "Only newly hired operators during their first week",
              "es": "Solo los ingresantes en su primera semana",
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
        id: "q-nr12-4",
        order: 4,
        question: {
          "pt-BR": "4. No procedimento de isolamento LOTO (Lockout/Tagout), qual etapa garante que a máquina está livre de energias residuais?",
          "en": "4. In the LOTO procedure, which step verifies that the equipment is truly free of stored residual energy?",
          "es": "4. En el procedimiento LOTO, ¿qué paso confirma que la máquina no tiene energía residual acumulada?",
        },
        options: [
          {
            id: "nr12-q4-a",
            text: {
              "pt-BR": "O Teste de Energia Zero (tentativa controlada de acionamento após o bloqueio e purga)",
              "en": "The Zero Energy State Test (controlled restart attempt after lockout and dissipation)",
              "es": "La prueba de Energía Cero (intento de arranque controlado tras el bloqueo y purga)",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O teste de energia zero comprova que todas as fontes foram bloqueadas e as energias acumuladas foram dissipadas.",
              "en": "Correct! Verifying zero energy ensures no residual pressure, voltage, or mechanical tension remains.",
              "es": "¡Correcto! Es el paso crucial para verificar la efectividad del aislamiento.",
            },
          },
          {
            id: "nr12-q4-b",
            text: {
              "pt-BR": "Apenas colocar a chave no bolso e confiar que ninguém ligará o disjuntor",
              "en": "Just keeping the key in the pocket and trusting no one touches the breaker",
              "es": "Guardar la llave en el bolsillo y confiar en que nadie tocará el tablero",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Bloqueio exige cadeado físico, etiqueta e teste comprobatório de energia zero.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "nr12-q4-c",
            text: {
              "pt-BR": "Limpar a poeira superficial do painel elétrico com pincel",
              "en": "Dusting off the electrical cabinet with a brush",
              "es": "Limpiar el polvo exterior del panel con una brocha",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Limpeza estética não tem relação com o teste de desenergização LOTO.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-nr12-5",
        order: 5,
        question: {
          "pt-BR": "5. O que deve ser feito PRIMEIRO caso ocorra um acidente com aprisionamento de membro em uma máquina em movimento?",
          "en": "5. What must be done FIRST if a machinery incident occurs with limb entrapment?",
          "es": "5. ¿Qué es lo PRIMERO que se debe hacer si ocurre un atrapamiento de extremidad en una máquina?",
        },
        options: [
          {
            id: "nr12-q5-a",
            text: {
              "pt-BR": "Acionar imediatamente o botão de emergência ou desligar a alimentação da máquina antes de qualquer aproximação",
              "en": "Immediately hit the emergency stop button or main power cutoff before approaching",
              "es": "Accionar de inmediato la parada de emergencia o cortar la energía antes de aproximarse",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Garantir que a máquina pare imediatamente e não se mova evita o agravamento da lesão e protege os socorristas.",
              "en": "Correct! Stopping the machinery immediately prevents catastrophic worsening and protects rescuers.",
              "es": "¡Correcto! Detener la máquina es la acción crítica inmediata para salvar vidas.",
            },
          },
          {
            id: "nr12-q5-b",
            text: {
              "pt-BR": "Puxar a vítima com força com as próprias mãos com a máquina ainda girando",
              "en": "Pull the victim with force while the machine is still turning",
              "es": "Jalar a la persona con fuerza mientras los rodillos siguen girando",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e letal. Puxar um membro preso em máquina ligada provoca avulsão e pode arrastar o próprio socorrista.",
              "en": "Incorrect. Extremely dangerous.",
              "es": "Incorrecto y letal.",
            },
          },
          {
            id: "nr12-q5-c",
            text: {
              "pt-BR": "Ignorar o fato e continuar a produção para não atrasar a meta",
              "en": "Ignore the event and continue production",
              "es": "Ignorar lo sucedido y seguir trabajando",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e criminoso.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
    ],
  },
};
