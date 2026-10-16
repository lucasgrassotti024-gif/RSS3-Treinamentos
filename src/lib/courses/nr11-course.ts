import { CourseDemonstration } from "@/types";

export const nr11CourseData: CourseDemonstration = {
  id: "c-nr11-transporte-movimentacao-materiais",
  slug: "nr-11-transporte-movimentacao-armazenagem-materiais",
  title: {
    "pt-BR": "NR-11: Transporte, Movimentação, Armazenagem e Manuseio de Materiais",
    "en": "NR-11: Transportation, Handling, Storage, and Material Management",
    "es": "NR-11: Transporte, Manipulación, Almacenamiento y Manejo de Materiales",
  },
  description: {
    "pt-BR": "Capacitação completa em NR-11: segurança na operação de máquinas e equipamentos autopropelidos e de guindar (empilhadeiras, pontes rolantes, talhas e guindautos), cálculo de capacidade de carga, inspeção diária (checklist pré-uso), estabilidade operacional, sinalização de manobra, amarração e rigging.",
    "en": "Comprehensive NR-11 training: safety in the operation of motorized handling equipment and hoists (forklifts, overhead cranes, chain blocks, boom trucks), load capacity charts, pre-use inspections, operational stability, rigging, and signaling.",
    "es": "Capacitación en NR-11: seguridad en la operación de carretillas elevadoras, puentes grúa y equipos de elevación, tablas de carga, inspección preoperacional y maniobras seguras.",
  },
  longDescription: {
    "pt-BR": "O treinamento de NR-11 da RSS3 Soluções Industriais estabelece os padrões técnicos e normativos mandatórios para operações seguras de transporte, movimentação, içamento, manuseio e armazenagem de materiais e cargas pesadas em plantas fabris de alta criticidade (como CMPC) e frentes operacionais externas. O programa aborda a física do equilíbrio mecânico (triângulo de estabilidade, centro de gravidade e momento de tombamento), limites de carga de trabalho (WLL/CMT), inspeção e descarte de cabos de aço, cintas têxteis e manilhas, regras de tráfego de equipamentos autopropelidos, sinalização manual padronizada e os procedimentos de isolamento de área e plano de içamento (Plano de Rigging simplificado).",
    "en": "The RSS3 NR-11 training establishes mandatory safety standards for moving, lifting, and storing heavy materials across high-criticality industrial plants and external jobsites. Covers load stability physics, capacity charts, pre-use checklists, rigging gear inspection (slings, shackles, wire ropes), pedestrian segregation, standardized signaling, and safe stacking practices.",
    "es": "El curso de NR-11 de RSS3 establece las directrices de seguridad para transporte, izaje y almacenamiento de cargas industriales en operaciones críticas. Incluye cálculo de carga, inspección de eslingas y grilletes, estabilidad de montacargas y señalización normalizada.",
  },
  schoolId: "seguranca-epi",
  schoolName: {
    "pt-BR": "Segurança do Trabalho e Movimentação Industrial",
    "en": "Occupational Safety & Material Handling",
    "es": "Seguridad Laboral y Manejo de Cargas",
  },
  workloadHours: 16,
  level: "intermediate",
  modality: "hybrid",
  isMandatory: true,
  mandatoryFor: [
    "Operador de Empilhadeira",
    "Operador de Ponte Rolante",
    "Rigger / Sinaleiro",
    "Mecânico Industrial",
    "Líder de Frente",
    "Almoxarife Industrial",
  ],
  targetAudience: {
    "pt-BR": "Operadores de equipamentos de elevação, rigger/amarração de cargas, estoquistas de almoxarifado pesado, mecânicos de manutenção e encarregados operacionais da RSS3 e de clientes industriais.",
    "en": "RSS3 equipment operators, riggers, heavy warehouse staff, maintenance mechanics, and site supervisors.",
    "es": "Operadores de elevación, estrobadores/riggers, mecánicos industriales y supervisores de patio.",
  },
  prerequisites: {
    "pt-BR": "Ensino fundamental completo, maioridade (18+ anos), acuidade visual e auditiva compatíveis e ASO com aptidão específica para operação de máquinas/trabalho com cargas.",
    "en": "High school education, 18+ years of age, compatible visual and hearing acuity, and medical clearance (ASO) for equipment operation.",
    "es": "Mayoría de edad (18+), aptitud médica certificada en el ASO para operación de maquinaria.",
  },
  modulesCount: 3,
  lessonsCount: 15,
  thumbnailGradient: "from-amber-600 via-orange-700 to-slate-950",
  coverImage: "/images/courses/nr11.jpg",
  badgeCode: "NR-11",
  updatedAtDate: "2026-10-16",
  modules: [
    {
      id: "mod-nr11-1",
      order: 1,
      title: {
        "pt-BR": "Módulo 1: Fundamentos Normativos e Operação Segura de Equipamentos (Aulas 01 a 05)",
        "en": "Module 1: Regulatory Framework & Safe Equipment Operation (Lessons 01 to 05)",
        "es": "Módulo 1: Marco Normativo y Operación Segura de Maquinaria (Clases 01 a 05)",
      },
      description: {
        "pt-BR": "Diretrizes gerais da NR-11, responsabilidades legais, perfil do operador autorizado, conceitos de máquinas autopropelidas e prevenção de acidentes.",
        "en": "NR-11 general principles, legal liabilities, authorized operator qualifications, motorized equipment types, and incident prevention.",
        "es": "Directrices generales de la NR-11, responsabilidades legales, perfil del operador y prevención de incidentes.",
      },
      lessons: [
        {
          id: "les-nr11-1-1",
          order: 1,
          title: {
            "pt-BR": "NR 11: Diretrizes e Práticas de Segurança na Operação de Máquinas — Aula 01",
            "en": "NR 11: Equipment Safety Guidelines & Practices — Lesson 01",
            "es": "NR 11: Directrices y Prácticas de Seguridad en Maquinaria — Clase 01",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "iNUJ-VxhUR0",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender os objetivos gerais da NR-11, o escopo normativo de equipamentos e o conceito de Carga Máxima de Trabalho (CMT / WLL).",
              "en": "Understand NR-11 general scope, equipment categories, and Working Load Limit (WLL) principles.",
              "es": "Comprender los objetivos de la NR-11 y el concepto de Carga Máxima de Trabajo.",
            },
            summaryPoints: [
              {
                "pt-BR": "Apresentação e objetivo da NR-11: regulamentar a segurança em poços, transportadores contínuos, empilhadeiras, pontes rolantes e guindautos.",
                "en": "Introduction to NR-11: regulating safety in elevators, conveyors, forklifts, overhead cranes, and hoist trucks.",
                "es": "Presentación y objetivo de la NR-11: normas de seguridad en transporte y manejo de materiales.",
              },
              {
                "pt-BR": "Conceito de carga máxima de trabalho (CMT / WLL) e a proibição terminante de ultrapassar os limites indicados na placa do fabricante.",
                "en": "Concept of Working Load Limit (WLL) and the strict ban on exceeding manufacturer plate ratings.",
                "es": "Concepto de carga máxima de trabajo y prohibición absoluta de sobrepasar límites nominales.",
              },
              {
                "pt-BR": "Dever de cuidado, postura defensiva do operador e corresponsabilidade operacional entre empresa e colaboradores.",
                "en": "Duty of care, defensive operator mindset, and shared responsibility between company and workers.",
                "es": "Deber de cuidado y responsabilidad compartida entre empresa y trabajador.",
              },
            ],
          },
        },
        {
          id: "les-nr11-1-2",
          order: 2,
          title: {
            "pt-BR": "NR 11: Requisitos de Qualificação e Habilitação do Operador — Aula 02",
            "en": "NR 11: Operator Qualification & Certification Requirements — Lesson 02",
            "es": "NR 11: Requisitos de Calificación y Credencial del Operador — Clase 02",
          },
          durationMinutes: 16,
          contentType: "video",
          videoUrl: "mduOeM_cAo4",
          contentDetail: {
            objective: {
              "pt-BR": "Conhecer as exigências legais e médicas para operadores de transporte motorizado e a obrigatoriedade do crachá anual.",
              "en": "Learn legal, technical, and medical requirements for motorized equipment operators and annual badge validity.",
              "es": "Conocer los requisitos legales, médicos y el porte obligatorio de credencial anual.",
            },
            summaryPoints: [
              {
                "pt-BR": "Exigências normativas para o operador: maioridade, aptidão física/psicológica atestada em ASO e curso de capacitação técnica.",
                "en": "Regulatory prerequisites: legal age, certified medical and psychological clearance (ASO), and technical training.",
                "es": "Requisitos del operador: mayoría de edad, aptitud médica (ASO) y formación técnica acreditada.",
              },
              {
                "pt-BR": "Obrigatoriedade do porte de crachá/cartão de identificação com foto e data do exame médico, renovável anualmente.",
                "en": "Mandatory badge displaying operator photo, medical expiration date, renewable every year.",
                "es": "Porte obligatorio de credencial con foto y fecha de vencimiento médico anual.",
              },
              {
                "pt-BR": "Direito de recusa do operador ao constatar anomalia crítica que comprometa a integridade física própria ou de terceiros.",
                "en": "Operator's right of refusal when identifying critical defects endangering safety.",
                "es": "Derecho de negativa ante condiciones inseguras críticas en el equipo.",
              },
            ],
          },
        },
        {
          id: "les-nr11-1-3",
          order: 3,
          title: {
            "pt-BR": "NR 11: Classificação de Equipamentos de Transporte e Içamento — Aula 03",
            "en": "NR 11: Classification of Material Handling & Hoisting Equipment — Lesson 03",
            "es": "NR 11: Clasificación de Equipos de Transporte y Elevación — Clase 03",
          },
          durationMinutes: 20,
          contentType: "video",
          videoUrl: "MnW2rfx9et0",
          contentDetail: {
            objective: {
              "pt-BR": "Diferenciar equipamentos autopropelidos móveis de sistemas suspensos e fixos sobre trilhos, bem como seus dispositivos sonoros/ópticos.",
              "en": "Classify mobile motorized equipment vs. fixed overhead rail systems, and required optical/acoustic alarms.",
              "es": "Diferenciar maquinaria autopropulsada móvil de sistemas suspendidos sobre rieles.",
            },
            summaryPoints: [
              {
                "pt-BR": "Diferenciação operacional entre equipamentos móveis autopropelidos (empilhadeiras a combustão e elétricas, rebocadores) e equipamentos fixos/sobre trilhos (pontes rolantes, monovias, pórticos e talhas).",
                "en": "Operational differentiation between mobile motorized units (gas/electric forklifts, tuggers) and overhead fixed systems (cranes, hoists, gantries).",
                "es": "Diferencias entre equipos autopropulsados móviles y sistemas de elevación fijos sobre rieles.",
              },
              {
                "pt-BR": "Características específicas de estabilidade e dinâmica de cada tipo de equipamento na movimentação de cargas paletizadas e granel.",
                "en": "Specific stability characteristics and dynamics for palletized and bulk load handling across equipment types.",
                "es": "Características de estabilidad y dinámica en cargas paletizadas y a granel.",
              },
              {
                "pt-BR": "Sinalização acústica (buzina e alarme de ré) e luminosa (giroflex e luz de presença) obrigatórias em todos os veículos motorizados.",
                "en": "Mandatory audible (horn, reverse alarm) and optical (beacon, safety lights) warnings on motorized vehicles.",
                "es": "Sistemas obligatorios de aviso sonoro y luminoso en vehículos de transporte.",
              },
            ],
          },
        },
        {
          id: "les-nr11-1-4",
          order: 4,
          title: {
            "pt-BR": "NR 11: Princípios Físicos de Estabilidade e Centro de Gravidade — Aula 04",
            "en": "NR 11: Physics of Load Stability & Center of Gravity — Lesson 04",
            "es": "NR 11: Principios Físicos de Estabilidad y Centro de Gravedad — Clase 04",
          },
          durationMinutes: 22,
          contentType: "video",
          videoUrl: "j_OdbiQbkk4",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar o conceito de triângulo de estabilidade em empilhadeiras e a dinâmica do centro de gravidade combinado.",
              "en": "Master the forklift stability triangle concept and the dynamic movement of the combined center of gravity.",
              "es": "Dominar el triángulo de estabilidad y el movimiento del centro de gravedad combinado.",
            },
            summaryPoints: [
              {
                "pt-BR": "O triângulo de estabilidade em empilhadeiras: pontos de apoio no eixo dianteiro e pivô no eixo de direção traseiro.",
                "en": "The forklift stability triangle: front axle pivot points and steering axle center pivot.",
                "es": "El triángulo de estabilidad: ejes delanteros y pivote de dirección trasero.",
              },
              {
                "pt-BR": "Deslocamento do centro de gravidade combinado (veículo + carga) durante a elevação, inclinação da torre e aceleração/frenagem.",
                "en": "Combined center of gravity displacement (machine + load) during mast tilt, lifting, and sudden braking.",
                "es": "Desplazamiento del centro de gravedad combinado al elevar, inclinar el mástil o frenar.",
              },
              {
                "pt-BR": "Causas fundamentais de capotamento lateral e frontal: excesso de velocidade em curvas, torre elevada em movimento e piso irregular.",
                "en": "Root causes of lateral and forward tipping: excessive cornering speed, travelling with raised mast, and uneven floors.",
                "es": "Causas de vuelco: exceso de velocidad en giros, desplazarse con carga elevada y pisos irregulares.",
              },
            ],
          },
        },
        {
          id: "les-nr11-1-5",
          order: 5,
          title: {
            "pt-BR": "NR 11: Inspeção Pré-Uso Diária (Checklist Operacional) — Aula 05",
            "en": "NR 11: Daily Pre-Use Inspection (Operational Checklist) — Lesson 05",
            "es": "NR 11: Inspección Diaria Previa al Uso (Checklist Operacional) — Clase 05",
          },
          durationMinutes: 19,
          contentType: "video",
          videoUrl: "7AmTtNvTXT0",
          contentDetail: {
            objective: {
              "pt-BR": "Aprender a executar a inspeção diária pré-operacional de itens críticos e o protocolo de bloqueio e etiquetagem.",
              "en": "Execute pre-shift daily inspection protocols on critical safety items and understand lockout procedures.",
              "es": "Aprender a realizar el checklist diario preoperacional y el bloqueo de unidades con fallas.",
            },
            summaryPoints: [
              {
                "pt-BR": "Procedimento formal de checklist visual e funcional no início de cada turno de trabalho.",
                "en": "Formal visual and operational checklist procedure at the start of every shift.",
                "es": "Procedimiento de inspección visual y funcional al inicio de cada turno.",
              },
              {
                "pt-BR": "Verificação de itens de segurança crítica: nível de fluido hidráulico, vazamentos, folga de direção, freio de estacionamento, estado dos pneus/rodízios e buzina.",
                "en": "Critical safety checks: hydraulic levels, fluid leaks, steering play, parking brake, tire wear, and horn.",
                "es": "Verificación de fluidos hidráulicos, fugas, frenos, dirección, llantas y bocina.",
              },
              {
                "pt-BR": "Bloqueio e etiquetagem imediata do equipamento em caso de falha em item impeditivo (não operar máquina avariada).",
                "en": "Immediate lockout and tagging of equipment if a critical failure is detected (never operate damaged equipment).",
                "es": "Bloqueo y etiquetado inmediato del equipo ante fallas críticas impeditivas.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-nr11-2",
      order: 2,
      title: {
        "pt-BR": "Módulo 2: Técnicas de Manuseio, Rigging e Estabilidade de Carga (Aulas 06 a 10)",
        "en": "Module 2: Handling Techniques, Rigging & Load Stability (Lessons 06 to 10)",
        "es": "Módulo 2: Técnicas de Manipulación, Rigging y Estabilidad (Clases 06 a 10)",
      },
      description: {
        "pt-BR": "Acessórios de içamento (cabos de aço, cintas têxteis, correntes e manilhas), cálculo de centro de carga, amarração e plano de rigging.",
        "en": "Lifting gear (wire ropes, synthetic slings, chains, shackles), load center calculations, load slinging, and rigging plans.",
        "es": "Accesorios de izaje (cables, eslingas sintéticas, cadenas, grilletes), cálculo de carga y amarre.",
      },
      lessons: [
        {
          id: "les-nr11-2-1",
          order: 1,
          title: {
            "pt-BR": "NR 11: Acessórios de Içamento: Cabos de Aço e Cintas Sintéticas — Aula 06",
            "en": "NR 11: Lifting Accessories: Wire Ropes & Synthetic Slings — Lesson 06",
            "es": "NR 11: Accesorios de Izaje: Cables de Acero y Eslingas Sintéticas — Clase 06",
          },
          durationMinutes: 24,
          contentType: "video",
          videoUrl: "FK0SLGtdLhc",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender os critérios de inspeção e descarte imediato para cintas sintéticas (NBR 15637) e cabos de aço (NBR ISO 4309).",
              "en": "Master inspection and reject criteria for synthetic slings and wire ropes per technical standards.",
              "es": "Comprender los criterios de descarte de eslingas de poliéster y cables de acero.",
            },
            summaryPoints: [
              {
                "pt-BR": "Inspeção e critérios de descarte de cintas têxteis de poliéster conforme NBR 15637: cortes, desfiamentos, queimaduras químicas e danos na etiqueta de rastreabilidade.",
                "en": "Inspection and discard criteria for polyester slings per NBR 15637: cuts, abrasions, chemical damage, and missing capacity tags.",
                "es": "Inspección y criterios de descarte de eslingas sintéticas según normas técnicas.",
              },
              {
                "pt-BR": "Critérios de descarte para cabos de aço conforme NBR ISO 4309: arames rompidos por passo, amassamentos, corrosão interna e redução de diâmetro.",
                "en": "Discard criteria for wire ropes per NBR ISO 4309: broken wires per lay length, kinking, corrosion, and diameter reduction.",
                "es": "Criterios de descarte de cables de acero: alambres rotos, cocas, corrosión y pérdida de diámetro.",
              },
              {
                "pt-BR": "Uso obrigatório de protetores de borda e cantoneiras contra cantos vivos para evitar cisalhamento da cinta.",
                "en": "Mandatory edge protectors and softeners against sharp edges to prevent sling cutting.",
                "es": "Uso obligatorio de protectores de borde contra cantos vivos para evitar roturas.",
              },
            ],
          },
        },
        {
          id: "les-nr11-2-2",
          order: 2,
          title: {
            "pt-BR": "NR 11: Manilhas, Ganchos, Olhais e Acessórios de Conexão — Aula 07",
            "en": "NR 11: Shackles, Hooks, Eyebolts & Connection Hardware — Lesson 07",
            "es": "NR 11: Grilletes, Ganchos, Cáncamos y Accesorios de Conexión — Clase 07",
          },
          durationMinutes: 21,
          contentType: "video",
          videoUrl: "NKeJUwKXE5I",
          contentDetail: {
            objective: {
              "pt-BR": "Conhecer a inspeção de manilhas, travas de ganchos de içamento e orientação de olhais para evitar sobrecarga lateral.",
              "en": "Inspect shackles, hook safety latches, and eyebolt angles to prevent dangerous lateral loading.",
              "es": "Inspeccionar grilletes, pestillos de ganchos y orientación de cáncamos de izaje.",
            },
            summaryPoints: [
              {
                "pt-BR": "Classificação de manilhas retas e curvas (âncora) e inspeção do pino roscado: tolerância de desgaste e empenamento máximo de 5%.",
                "en": "Classification of bow and D-shackles and pin inspection: maximum wear tolerances and 5% bend limit.",
                "es": "Clasificación de grilletes y verificación de pasadores roscados y desgastes.",
              },
              {
                "pt-BR": "Ganchos de içamento com trava de segurança obrigatória para impedir o desengate acidental da carga sob movimentação.",
                "en": "Lifting hooks with mandatory safety latches to prevent accidental disengagement during hoisting.",
                "es": "Ganchos de elevación con pestillo de seguridad obligatorio contra desenganches.",
              },
              {
                "pt-BR": "Posicionamento correto do olhal de içamento e proibição de carregamento lateral em olhais não articulados.",
                "en": "Correct eyebolt positioning and absolute prohibition of side-loading on standard fixed eyebolts.",
                "es": "Orientación correcta de cáncamos y prohibición de tiro lateral en cáncamos fijos.",
              },
            ],
          },
        },
        {
          id: "les-nr11-2-3",
          order: 3,
          title: {
            "pt-BR": "NR 11: Ângulo dos Cabos e Fator de Carga no Içamento — Aula 08",
            "en": "NR 11: Sling Angle & Load Factor in Hoisting Operations — Lesson 08",
            "es": "NR 11: Ángulo de Eslingas y Factor de Tensión en Izaje — Clase 08",
          },
          durationMinutes: 25,
          contentType: "video",
          videoUrl: "Fkfy-e0MWD8",
          contentDetail: {
            objective: {
              "pt-BR": "Calcular a distribuição de peso e entender o efeito crítico da redução do ângulo horizontal das lingas no aumento da tração.",
              "en": "Calculate load distribution and understand the exponential tension increase caused by narrow horizontal sling angles.",
              "es": "Calcular el reparto de carga y la tensión en eslingas en función del ángulo horizontal.",
            },
            summaryPoints: [
              {
                "pt-BR": "Influência do ângulo de abertura das pernas da cinta/laço: quanto menor o ângulo horizontal, exponencialmente maior é a tração em cada perna.",
                "en": "Impact of sling leg opening angle: lower horizontal angles exponentially increase tensile load on each sling leg.",
                "es": "Efecto del ángulo de tiro: a menor ángulo con la horizontal, mayor es la tensión sobre la eslinga.",
              },
              {
                "pt-BR": "Regra de ouro: nunca trabalhar com ângulos inferiores a 45° ou 60° em relação à horizontal sem recálculo estrutural.",
                "en": "Golden rule: never hoist with sling angles below 45° (or 60° without formal engineering recalculation).",
                "es": "Regla básica: evitar ángulos inferiores a 45° o 60° sin recálculo de capacidad.",
              },
              {
                "pt-BR": "Cálculo de centro de gravidade em cargas assimétricas e distribuição heterogênea de peso entre as lingas.",
                "en": "Center of gravity calculation for asymmetrical loads and unequal load sharing across sling legs.",
                "es": "Cálculo de centro de gravedad en cargas asimétricas y reparto de esfuerzos.",
              },
            ],
          },
        },
        {
          id: "les-nr11-2-4",
          order: 4,
          title: {
            "pt-BR": "NR 11: Gráfico de Cargas de Empilhadeiras e Centro de Carga — Aula 09",
            "en": "NR 11: Forklift Capacity Chart & Load Center Distance — Lesson 09",
            "es": "NR 11: Tabla de Capacidad del Montacargas y Centro de Carga — Clase 09",
          },
          durationMinutes: 20,
          contentType: "video",
          videoUrl: "EEd0qPJ6Pns",
          contentDetail: {
            objective: {
              "pt-BR": "Interpretar corretamente placas de capacidade de carga de empilhadeiras em função do centro de gravidade e altura da torre.",
              "en": "Correctly interpret forklift load rating charts based on load center distance and mast lift height.",
              "es": "Interpretar tablas de capacidad de montacargas según el centro de carga y altura de elevación.",
            },
            summaryPoints: [
              {
                "pt-BR": "Interpretação da placa de capacidade do fabricante: capacidade nominal a 500 mm vs. 600 mm de centro de carga.",
                "en": "Interpreting manufacturer load capacity plates: rated capacity at 500 mm vs. 600 mm load centers.",
                "es": "Interpretación de la placa de capacidad: carga nominal a 500 mm y 600 mm de centro de carga.",
              },
              {
                "pt-BR": "Redução drástica da capacidade de carga útil quando o centro de gravidade da peça fica afastado do talão dos garfos.",
                "en": "Drastic derating of lifting capacity when load center moves forward from the fork heels.",
                "es": "Disminución notable de la capacidad útil al alejar el centro de gravedad del respaldo de los brazos.",
              },
              {
                "pt-BR": "Efeito da altura de elevação da torre na capacidade máxima admissível para evitar tombamento frontal.",
                "en": "Mast lifting height effect on maximum permissible load to prevent forward tipping.",
                "es": "Efecto de la altura máxima de elevación en el límite de carga admisible.",
              },
            ],
          },
        },
        {
          id: "les-nr11-2-5",
          order: 5,
          title: {
            "pt-BR": "NR 11: Amarração e Fixação de Cargas em Carrocerias e Pranchas — Aula 10",
            "en": "NR 11: Cargo Lashing & Securing on Flatbeds & Trucks — Lesson 10",
            "es": "NR 11: Amarre y Sujeción de Cargas en Camiones y Plataformas — Clase 10",
          },
          durationMinutes: 22,
          contentType: "video",
          videoUrl: "Sf8uDt10U7o",
          contentDetail: {
            objective: {
              "pt-BR": "Aplicar métodos regulamentares de amarração (por atrito e direta) com cintas catracadas e calços em veículos de transporte.",
              "en": "Apply regulatory cargo securing methods (friction top-lashing and direct tie-down) using ratchet straps and chocks.",
              "es": "Aplicar métodos de sujeción de carga directa y por fricción con trinquetes y calces.",
            },
            summaryPoints: [
              {
                "pt-BR": "Métodos de contenção de carga: amarração por atrito (topo) e amarração direta com catracas e correntes tensoras conforme Resolução CONTRAN.",
                "en": "Cargo containment methods: friction top-lashing and direct lashing with ratchets and tensioners.",
                "es": "Métodos de fijación de carga: amarre por fricción y amarre directo con trinquetes tensores.",
              },
              {
                "pt-BR": "Utilização de calços, berços e tapetes antiderrapantes para impedir deslizamentos durante o transporte rodoviário ou interno.",
                "en": "Use of wheel chocks, saddles, and anti-slip rubber mats to prevent sliding during transit.",
                "es": "Uso de calces, cuñas y esteras antideslizantes para evitar desplazamientos.",
              },
              {
                "pt-BR": "Inspeção dos pontos de ancoragem do veículo antes de aplicar tração mecânica com as catracas de amarração.",
                "en": "Inspecting vehicle anchor tie-down points before applying tension with lashing ratchets.",
                "es": "Inspección de argollas y puntos de anclaje antes del tensado mecánico.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-nr11-3",
      order: 3,
      title: {
        "pt-BR": "Módulo 3: Operação de Pontes Rolantes, Sinalização, Circulação e Prevenção (Aulas 11 a 15)",
        "en": "Module 3: Overhead Crane Operation, Signaling, Plant Traffic & Safety (Lessons 11 to 15)",
        "es": "Módulo 3: Puentes Grúa, Señalización, Circulación y Seguridad (Clases 11 a 15)",
      },
      description: {
        "pt-BR": "Operação de pontes rolantes e talhas, códigos de sinais gestuais padronizados, regras de tráfego interno, empilhamento seguro e emergências.",
        "en": "Overhead crane and hoist operation, standardized hand signaling codes, plant pedestrian segregation, safe stacking, and emergency protocols.",
        "es": "Operación de puentes grúa, código de señales manuales, tránsito en planta, estiba segura y emergencias.",
      },
      lessons: [
        {
          id: "les-nr11-3-1",
          order: 1,
          title: {
            "pt-BR": "NR 11: Operação Segura de Pontes Rolantes e Talhas Elétricas — Aula 11",
            "en": "NR 11: Safe Operation of Overhead Cranes & Electric Hoists — Lesson 11",
            "es": "NR 11: Operación Segura de Puentes Grúa y Polipastos Eléctricos — Clase 11",
          },
          durationMinutes: 23,
          contentType: "video",
          videoUrl: "mpNhJmlqJfI",
          contentDetail: {
            objective: {
              "pt-BR": "Aprender a operar pontes rolantes prevenindo o efeito pêndulo e conhecendo todos os dispositivos de segurança (freios, fins de curso e botoeiras).",
              "en": "Operate overhead cranes safely, mitigating load swing/pendulum effect and inspecting limit switches and brakes.",
              "es": "Aprender a operar puentes grúa mitigando el efecto péndulo e inspeccionando finales de carrera y frenos.",
            },
            summaryPoints: [
              {
                "pt-BR": "Componentes de segurança da ponte rolante: fim de curso elétrico de elevação, batentes de translação, freios eletromagnéticos e botão de emergência da botoeira/controle remoto.",
                "en": "Overhead crane safety components: hoist limit switches, travel stops, fail-safe brakes, and pendant/radio emergency e-stop.",
                "es": "Dispositivos de seguridad de puentes grúa: finales de carrera, topes, frenos y parada de emergencia.",
              },
              {
                "pt-BR": "Técnica de combate ao balanço de carga (efeito pêndulo) na ponte rolante através do acompanhamento coordenado de translação.",
                "en": "Techniques for eliminating load swing (pendulum effect) by synchronized crane bridge and trolley movements.",
                "es": "Técnica de amortiguación del efecto péndulo mediante movimientos coordinados de carro y puente.",
              },
              {
                "pt-BR": "Proibição terminante de içamento oblíquo/arraste lateral que force o cabo de aço contra o guia do tambor.",
                "en": "Absolute prohibition of side-pulling or dragging loads, which damages rope drum guides and stresses the structure.",
                "es": "Prohibición total de tiros oblicuos o arrastres laterales con el polipasto.",
              },
            ],
          },
        },
        {
          id: "les-nr11-3-2",
          order: 2,
          title: {
            "pt-BR": "NR 11: Sinalização Gestual Padronizada e Comunicação Rigger-Operador — Aula 12",
            "en": "NR 11: Standardized Hand Signals & Rigger-Operator Communication — Lesson 12",
            "es": "NR 11: Señales Gestuales Normalizadas y Comunicación Rigger-Operador — Clase 12",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "Gvqes-LPnps",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar os sinais manuais internacionais para pontes e guindastes e o princípio do sinaleiro único e soberania da parada de emergência.",
              "en": "Master standardized crane hand signals, the single signalperson rule, and universal emergency stop authority.",
              "es": "Dominar señales gestuales normalizadas para grúas y la regla del señalero único.",
            },
            summaryPoints: [
              {
                "pt-BR": "Sinais manuais normatizados para pontes e guindastes: subir carga, descer devagar, deslocar ponte/carro e parada de emergência universal.",
                "en": "Standardized hand signals for cranes: hoist up, lower slowly, travel bridge/trolley, and universal emergency stop.",
                "es": "Señales manuales estándar: izar, bajar lento, traslación y parada de emergencia universal.",
              },
              {
                "pt-BR": "Princípio do sinaleiro único: o operador deve obedecer exclusivamente aos comandos do rigger designado, EXCETO no sinal de parada de emergência, que deve ser acatado imediatamente vindo de qualquer pessoa.",
                "en": "Single signalperson rule: operator follows commands ONLY from designated rigger, EXCEPT an emergency stop signal, which must be obeyed immediately from ANYONE.",
                "es": "Regla del señalero único: acatar solo al rigger designado, EXCEPTO la señal de parada de emergencia que puede dar cualquiera.",
              },
              {
                "pt-BR": "Uso de colete de alta visibilidade diferenciado para o rigger/sinaleiro no chão de fábrica e frentes externas.",
                "en": "Dedicated high-visibility vest color for the designated signalperson/rigger on plant floors.",
                "es": "Identificación visual obligatoria con chaleco reflectante diferenciado para el señalero.",
              },
            ],
          },
        },
        {
          id: "les-nr11-3-3",
          order: 3,
          title: {
            "pt-BR": "NR 11: Regras de Trânsito Interno, Segregação de Pedestres e Piso — Aula 13",
            "en": "NR 11: Plant Traffic Management, Pedestrian Segregation & Floor Safety — Lesson 13",
            "es": "NR 11: Tránsito en Planta, Segregación de Peatones y Pisos — Clase 13",
          },
          durationMinutes: 20,
          contentType: "video",
          videoUrl: "RU1oebGC7n0",
          contentDetail: {
            objective: {
              "pt-BR": "Conhecer as diretrizes de trânsito em armazéns: cruzamentos cegos, faixas segregadas e condução segura em rampas.",
              "en": "Learn warehouse traffic protocols: blind intersections, physical walkway segregation, and ramp driving rules.",
              "es": "Conocer las normas de circulación en planta: cruces ciegos, pasarelas protegidas y rampas.",
            },
            summaryPoints: [
              {
                "pt-BR": "Demarcação no piso de faixas de tráfego de empilhadeiras e passarelas segregadas exclusivas de pedestres com guard-rails físicos.",
                "en": "Floor markings segregating forklift travel lanes from pedestrian walkways with physical barriers.",
                "es": "Demarcación vial en planta: carriles de montacargas y pasarelas peatonales protegidas.",
              },
              {
                "pt-BR": "Regras em cruzamentos cegos: parada obrigatória, buzina curta de alerta, espelhos convexos e velocidade máxima de 10 km/h.",
                "en": "Blind corner protocols: mandatory full stop, horn tap, convex mirrors, and 10 km/h speed limits.",
                "es": "Cruces ciegos: detención obligatoria, bocina de aviso, espejos y velocidad máxima de 10 km/h.",
              },
              {
                "pt-BR": "Condução em rampas: empilhadeira carregada sobe de frente e desce de ré; empilhadeira vazia sobe de ré e desce de frente (carga sempre apontando para a parte mais alta da rampa).",
                "en": "Ramp driving: loaded forklift drives forward uphill and backward downhill (load always facing up the grade).",
                "es": "Tránsito en pendientes: montacargas cargado sube de frente y desciende en reversa (carga orientada a la cima).",
              },
            ],
          },
        },
        {
          id: "les-nr11-3-4",
          order: 4,
          title: {
            "pt-BR": "NR 11: Armazenamento, Empilhamento Seguro e Capacidade de Solo — Aula 14",
            "en": "NR 11: Safe Stacking, Material Storage & Ground Load Limits — Lesson 14",
            "es": "NR 11: Almacenamiento, Estiba Segura y Resistencia de Pisos — Clase 14",
          },
          durationMinutes: 21,
          contentType: "video",
          videoUrl: "4ZrOr1qhkj4",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar as regras de estabilidade de pilhas de materiais, resistência de pisos e descarte de paletes avariados.",
              "en": "Master material stacking stability, floor load limits, and pallet discard criteria.",
              "es": "Dominar normas de estiba segura, capacidad de carga de suelos y descarte de pallets dañados.",
            },
            summaryPoints: [
              {
                "pt-BR": "Normas de empilhamento de materiais: relação de esbeltez (altura máxima vs. base), travamento em amarração cruzada e afastamento de paredes e luminárias.",
                "en": "Material stacking rules: height-to-base ratios, interlocking patterns, and clearance from walls, sprinklers, and lights.",
                "es": "Normas de estiba: proporción de altura a la base, amarre cruzado y distancias a paredes y luminarias.",
              },
              {
                "pt-BR": "Capacidade de carga do solo e estruturas de porta-paletes: proibição de sobrecarga em longarinas e inspeção de deformações em montantes verticais.",
                "en": "Floor load-bearing limits and racking capacity: no overloading on beams and inspection for upright column impacts.",
                "es": "Capacidad portante del piso y estanterías: control de peso y revisión de deformaciones en parantes.",
              },
              {
                "pt-BR": "Paletes defeituosos: critérios de rejeição para tábuas quebradas, pregos expostos ou blocos de apoio rachados.",
                "en": "Defective pallets: rejection criteria for cracked boards, loose nails, or broken base blocks.",
                "es": "Pallets defectuosos: descarte por maderas rajadas, clavos expuestos o tacos dañados.",
              },
            ],
          },
        },
        {
          id: "les-nr11-3-5",
          order: 5,
          title: {
            "pt-BR": "NR 11: Gestão de Riscos, Manutenção Preventiva e Procedimento em Emergências — Aula 15",
            "en": "NR 11: Risk Management, Preventive Maintenance & Emergency Response — Lesson 15",
            "es": "NR 11: Gestión de Riesgos, Mantenimiento Preventivo y Emergencias — Clase 15",
          },
          durationMinutes: 25,
          contentType: "video",
          videoUrl: "zByHSz8jVaE",
          contentDetail: {
            objective: {
              "pt-BR": "Conhecer a conduta de sobrevivência em caso de tombamento iminente e os protocolos de emergência para vazamentos e incêndios.",
              "en": "Understand emergency survival actions during rollover/tip-over and response to fuel/hydraulic spills and equipment fires.",
              "es": "Conocer la conducta de supervivencia ante vuelco inminente y respuesta a emergencias.",
            },
            summaryPoints: [
              {
                "pt-BR": "Procedimento de segurança em caso de tombamento iminente de empilhadeira: NUNCA pular para fora do veículo. Segurar firme no volante, apoiar os pés e inclinar o corpo na direção oposta ao tombamento.",
                "en": "Emergency survival action during forklift tip-over: NEVER jump out. Grip steering wheel firmly, brace feet, and lean away from the impact.",
                "es": "Conducta en caso de vuelco inminente de montacargas: NUNCA saltar de la cabina. Sujetar el volante y ladearse al lado contrario.",
              },
              {
                "pt-BR": "Plano de manutenção preventiva de máquinas de movimentação: histórico de manutenções, substituição preventiva de mangueiras hidráulicas e registros de calibração.",
                "en": "Preventive maintenance program: service records, hydraulic hose replacement schedules, and sensor calibration.",
                "es": "Plan de mantenimiento preventivo: bitácora de inspecciones, cambio de mangueras y registros técnicos.",
              },
              {
                "pt-BR": "Procedimentos de emergência: vazamento de combustível/óleo hidráulico, combate a princípio de incêndio em máquinas e primeiros socorros em caso de prensamento.",
                "en": "Emergency protocols: hydraulic oil spills, equipment fire extinguisher response, and crush injury first aid.",
                "es": "Protocolos de emergencia: derrames de fluidos, fuego en maquinaria y primeros auxilios en atrapamientos.",
              },
            ],
          },
        },
      ],
    },
  ],
  finalAssessment: {
    id: "exam-nr11-movimentacao-materiais",
    order: 16,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 30,
    questionsCount: 6,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação teórica canônica de conformidade técnica para NR-11. Exige 70% de aproveitamento para liberação do registro teórico.",
      "en": "Canonical technical compliance evaluation for NR-11. Requires 70% passing score.",
      "es": "Evaluación técnica de cumplimiento de la NR-11. Requiere 70% de aprobación.",
    },
    title: {
      "pt-BR": "Avaliação Final de Certificação Técnica — NR-11",
      "en": "Final Technical Certification Exam — NR-11",
      "es": "Evaluación Final de Certificación Técnica — NR-11",
    },
    description: {
      "pt-BR": "Esta avaliação valida a assimilação dos 15 módulos conceituais da NR-11: estabilidade de cargas, inspeção pré-uso, descarte de cintas/cabos, regras de circulação e conduta em emergência.",
      "en": "This assessment validates technical understanding across all 15 NR-11 lessons: stability, pre-use inspections, rigging discard criteria, plant traffic, and emergency response.",
      "es": "Esta prueba evalúa los conocimientos normativos de la NR-11 en transporte y manejo de cargas industriales.",
    },
    questions: [
      {
        id: "q-nr11-1",
        order: 1,
        question: {
          "pt-BR": "1. Qual é a regra fundamental de física e dinâmica que o operador de empilhadeira deve observar para evitar o capotamento frontal e lateral do equipamento?",
          "en": "1. What is the fundamental physical principle a forklift operator must observe to prevent forward and lateral tipping?",
          "es": "1. ¿Cuál es el principio fundamental que el operador de montacargas debe respetar para evitar el vuelco?",
        },
        options: [
          {
            id: "q1-a",
            text: {
              "pt-BR": "Manter o centro de gravidade combinado (máquina + carga) sempre dentro dos limites do triângulo de estabilidade, transitando sempre com a torre rebaixada e recuada e respeitando o limite de centro de carga.",
              "en": "Keep the combined center of gravity within the stability triangle, always travelling with mast lowered and tilted back, respecting the rated load center.",
              "es": "Mantener el centro de gravedad dentro del triángulo de estabilidad, desplazándose con mástil abajo y respetando el centro de carga.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Elevar a carga em movimento desloca o centro de gravidade para cima e para fora do triângulo de estabilidade, gerando risco iminente de tombamento.",
              "en": "Correct! Travelling with a raised mast shifts the center of gravity outside the stability triangle, causing tip-overs.",
              "es": "¡Correcto! Desplazarse con la carga elevada desplaza el centro de gravedad y provoca el vuelco.",
            },
          },
          {
            id: "q1-b",
            text: {
              "pt-BR": "Acelerar nas curvas fechadas para manter a inércia centrífuga equilibrada nos pneus dianteiros.",
              "en": "Accelerate in sharp turns to maintain centrifugal balance on the front tires.",
              "es": "Acelerar en las curvas para mantener el equilibrio por inercia centrífuga.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Curvas em alta velocidade causam transferência abrupta de peso e tombamento lateral imediato.",
              "en": "Incorrect. Speeding during turns is the leading cause of lateral tip-overs.",
              "es": "Incorrecto. Es la principal causa de vuelco lateral.",
            },
          },
          {
            id: "q1-c",
            text: {
              "pt-BR": "Descer rampas íngremes sempre de frente com a empilhadeira pesadamente carregada.",
              "en": "Drive forward down steep ramps when carrying heavy loads.",
              "es": "Bajar pendientes de frente cuando el montacargas esté cargado.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Com carga, a empilhadeira DEVE descer a rampa em marcha à ré para que a carga se mantenha apoiada contra o talão dos garfos.",
              "en": "Incorrect. When loaded, a forklift must travel downhill in reverse to maintain load against the carriage.",
              "es": "Incorrecto. Con carga debe descender en reversa.",
            },
          },
        ],
      },
      {
        id: "q-nr11-2",
        order: 2,
        question: {
          "pt-BR": "2. Em relação aos acessórios de içamento (cintas de poliéster e cabos de aço), qual das seguintes condições EXIGE o descarte IMEDIATO do componente conforme as normas vigentes?",
          "en": "2. Regarding lifting accessories (synthetic slings and wire ropes), which condition mandates IMMEDIATE rejection and discard?",
          "es": "2. En accesorios de izaje (eslingas y cables de acero), ¿cuál de las siguientes situaciones exige su descarte INMEDIATO?",
        },
        options: [
          {
            id: "q2-a",
            text: {
              "pt-BR": "Cinta têxtil que apresente corte lateral na costura, queimadura por produto químico ou perda/ilegitimidade da etiqueta de capacidade de carga do fabricante.",
              "en": "Synthetic sling exhibiting edge cuts, chemical burning, or a missing/illegible manufacturer rating tag.",
              "es": "Eslinga textil con cortes en bordes, daños químicos o etiqueta de capacidad ilegible o faltante.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! NBR 15637 e NR-11 proíbem estritamente o uso de cintas sem etiqueta de identificação legível ou com cortes transversais estruturais.",
              "en": "Correct! Slings without legible capacity tags or structural edge cuts must be removed from service immediately.",
              "es": "¡Correcto! La normativa prohíbe el uso de eslingas sin etiqueta legible o con cortes.",
            },
          },
          {
            id: "q2-b",
            text: {
              "pt-BR": "Presença de graxa limpa aplicada como lubrificante protetor em cabo de aço de içamento.",
              "en": "Presence of clean lubricant applied to an active hoist wire rope.",
              "es": "Presencia de lubricante limpio en el cable de acero.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Cabos de aço necessitam de lubrificação periódica apropriada contra atrito entre pernas.",
              "en": "Incorrect. Proper lubrication preserves wire rope integrity.",
              "es": "Incorrecto. Los cables requieren lubricación periódica.",
            },
          },
          {
            id: "q2-c",
            text: {
              "pt-BR": "Cinta de içamento que foi molhada exclusivamente por água da chuva sem impurezas.",
              "en": "A synthetic sling that got wet from clean rain water.",
              "es": "Eslinga mojada únicamente por agua de lluvia limpia.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Água limpa por si só não inviabiliza a cinta de poliéster, bastando a secagem natural adequada.",
              "en": "Incorrect. Clean water does not compromise polyester fibers if dried properly.",
              "es": "Incorrecto. El agua limpia no invalida la fibra de poliéster.",
            },
          },
        ],
      },
      {
        id: "q-nr11-3",
        order: 3,
        question: {
          "pt-BR": "3. Na operação de pontes rolantes e guindautos, de quem o operador pode aceitar comandos gestuais e sinais manuais durante a manobra de içamento?",
          "en": "3. In crane and overhead hoist operations, from whom may the operator accept hand and gesture signals during lifting?",
          "es": "3. En la operación de puentes grúa, ¿de quién puede el operador recibir señales de maniobra durante el izaje?",
        },
        options: [
          {
            id: "q3-a",
            text: {
              "pt-BR": "Exclusivamente do sinaleiro/rigger designado e identificado, COM EXCEÇÃO do sinal de parada de emergência, que deve ser acatado imediatamente vindo de QUALQUER pessoa.",
              "en": "Exclusively from the designated and identified signalperson/rigger, EXCEPT for the emergency stop signal, which must be obeyed immediately from ANYONE.",
              "es": "Exclusivamente del señalero/rigger designado, EXCEPTO la señal de parada de emergencia que debe ser acatada inmediatamente si la da CUALQUIER persona.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A regra do sinaleiro único evita comandos contraditórios, mas o sinal de emergência é soberano para preservar vidas.",
              "en": "Correct! One signalperson prevents confusion, but an emergency stop is universally binding to save lives.",
              "es": "¡Correcto! Evita contradicciones, pero la parada de emergencia es de cumplimiento universal.",
            },
          },
          {
            id: "q3-b",
            text: {
              "pt-BR": "De qualquer trabalhador ou visitante que estiver passando pelo raio de giro do guindaste no momento.",
              "en": "From any passerby or visitor walking under the crane's swing radius.",
              "es": "De cualquier persona que esté caminando bajo el radio de giro.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Aceitar comandos dispersos é causa crítica de desastres operacionais em movimentação de cargas.",
              "en": "Incorrect. Conflicting instructions lead to severe hoisting accidents.",
              "es": "Incorrecto. Provoca accidentes severos por instrucciones cruzadas.",
            },
          },
          {
            id: "q3-c",
            text: {
              "pt-BR": "O operador de ponte rolante nunca deve olhar para o chão e deve operar apenas por intuição sensorial.",
              "en": "The crane operator should never watch the ground and operate by pure sensory intuition.",
              "es": "El operador nunca debe mirar al piso y operar por intuición.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo perante as diretrizes da NR-11 e padrões da RSS3.",
              "en": "Incorrect and absurd under safety standards.",
              "es": "Incorrecto y contrario a los estándares de seguridad.",
            },
          },
        ],
      },
      {
        id: "q-nr11-4",
        order: 4,
        question: {
          "pt-BR": "4. No evento crítico de um tombamento lateral iminente de uma empilhadeira contrabalançada, qual é a conduta comprovada de sobrevivência que o operador deve adotar?",
          "en": "4. In the critical event of an imminent tip-over of a counterbalance forklift, what is the proven survival protocol for the operator?",
          "es": "4. En caso de vuelco inminente de un montacargas, ¿cuál es la conducta de supervivencia obligatoria?",
        },
        options: [
          {
            id: "q4-a",
            text: {
              "pt-BR": "PERMANECER dentro da cabine com o cinto de segurança afivelado, segurar com firmeza o volante, travar os pés no assoalho e inclinar o corpo para o lado oposto ao impacto do tombamento.",
              "en": "STAY inside the cabin with seatbelt fastened, firmly grip the steering wheel, brace feet, and lean away from the side of impact.",
              "es": "PERMANECER dentro de la cabina con cinturón, sujetar con fuerza el volante, trabar los pies y ladear el cuerpo al lado opuesto al vuelco.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A quase totalidade de mortes em empilhadeiras ocorre por esmagamento sob a estrutura de proteção (ROPS/FOPS) ao tentar pular para fora.",
              "en": "Correct! Almost all forklift fatalities result from operators attempting to jump out and being crushed by the overhead guard.",
              "es": "¡Correcto! Intentar saltar causa aplastamiento fatal por el techo protector.",
            },
          },
          {
            id: "q4-b",
            text: {
              "pt-BR": "Soltar o cinto e pular o mais longe possível para fora do veículo na direção do tombamento.",
              "en": "Unbuckle and jump as far as possible in the direction of the tip-over.",
              "es": "Soltar el cinturón y saltar en la dirección hacia donde cae la máquina.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e fatal. O operador que pula é invariavelmente prensado pela coluna de sustentação da máquina.",
              "en": "Fatal mistake. The jumping operator is crushed by the rolling frame.",
              "es": "Error fatal. El operador es aplastado por la estructura metálica.",
            },
          },
          {
            id: "q4-c",
            text: {
              "pt-BR": "Colocar os braços para fora da cabine para tentar amortecer a queda da máquina contra o solo.",
              "en": "Extend arms outside the cabin to cushion the impact against the ground.",
              "es": "Sacar los brazos de la cabina para amortiguar la caída del vehículo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Provoca amputação traumática imediata dos membros superiores.",
              "en": "Incorrect. Results in immediate traumatic limb amputation.",
              "es": "Incorrecto. Provoca amputaciones traumáticas inmediatas.",
            },
          },
        ],
      },
      {
        id: "q-nr11-5",
        order: 5,
        question: {
          "pt-BR": "5. Conforme a NR-11 e o Código de Trânsito / CONTRAN, qual é a velocidade máxima segura recomendada em pátios industriais internos, galpões e proximidades de pedestres?",
          "en": "5. According to NR-11 and industrial site traffic regulations, what is the recommended safe speed limit inside warehouses and near pedestrians?",
          "es": "5. Según la NR-11 y directrices viales industriales, ¿cuál es la velocidade máxima segura recomendada en galpones y cerca de peatones?",
        },
        options: [
          {
            id: "q5-a",
            text: {
              "pt-BR": "Entre 5 km/h e 10 km/h em áreas internas e cruzamentos cegos, com redução imediata para o passo humano (3 a 5 km/h) quando houver pedestres próximos.",
              "en": "Between 5 km/h and 10 km/h in indoor areas and blind crossings, derating to walking speed (3 to 5 km/h) when pedestrians are nearby.",
              "es": "Entre 5 km/h y 10 km/h en interiores y esquinas ciegas, reduciendo al paso humano (3 a 5 km/h) ante presencia de peatones.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O tempo de frenagem com carga pesada e piso liso exige velocidades baixas para evitar atropelamentos e abalroamentos.",
              "en": "Correct! Heavy loads on smooth factory floors require low speeds for adequate stopping distances.",
              "es": "¡Correcto! La distancia de frenado con carga exige velocidades bajas para evitar colisiones.",
            },
          },
          {
            id: "q5-b",
            text: {
              "pt-BR": "40 km/h a 60 km/h para acelerar os índices de produtividade da cadeia de suprimentos.",
              "en": "40 km/h to 60 km/h to optimize logistics productivity.",
              "es": "40 km/h a 60 km/h para acelerar la productividad del almacén.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e criminoso no ambiente fabril.",
              "en": "Incorrect and extremely dangerous.",
              "es": "Incorrecto y sumamente peligroso.",
            },
          },
        ],
      },
      {
        id: "q-nr11-6",
        order: 6,
        question: {
          "pt-BR": "6. A aprovação nesta avaliação teórica online confere autorização legal formal para operar empilhadeiras ou guindastes na RSS3 sem o treinamento prático presencial supervisionado e o crachá emitido pelo SESMT?",
          "en": "6. Does passing this online theoretical exam grant legal authorization to operate forklifts or cranes at RSS3 without hands-on supervised practical training and a formal badge?",
          "es": "6. ¿La aprobación de este examen teórico otorga autorización legal para operar maquinaria sin práctica presencial ni credencial?",
        },
        options: [
          {
            id: "q6-a",
            text: {
              "pt-BR": "NÃO. Este certificado comprova unicamente a conclusão do módulo teórico da NR-11. Conforme a NR-11 (itens 11.1.5 e 11.1.6) e as diretrizes do AGENTS.md, a operação formal exige ASO com aptidão médica vigente, treinamento prático supervisionado comprovado e crachá de identificação de operador autorizado com validade anual.",
              "en": "NO. This certificate certifies only the theoretical knowledge of NR-11. Per NR-11 items 11.1.5 and 11.1.6 and AGENTS.md rules, formal operation strictly requires medical clearance, verified supervised practical training, and an authorized operator badge valid for 1 year.",
              "es": "NO. Este certificado avala únicamente la teoría. Conforme a la NR-11, la operación exige examen médico (ASO), práctica presencial supervisada y credencial con validez anual.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Conforme a diretriz permanente de integridade do AGENTS.md, cursos EAD nunca conferem habilitação operacional prática sem a etapa presencial e a autorização formal da empresa.",
              "en": "Correct! Per permanent AGENTS.md compliance guidelines, online training does not grant practical equipment authorization without certified hands-on evaluation.",
              "es": "¡Correcto! La capacitación online nunca sustituye la práctica presencial ni la credencial formal.",
            },
          },
          {
            id: "q6-b",
            text: {
              "pt-BR": "SIM. A aprovação no portal online já dispensa qualquer treinamento prático e libera o colaborador para conduzir qualquer empilhadeira de 10 toneladas.",
              "en": "YES. Online approval waives all in-person requirements.",
              "es": "SÍ. La aprobación online permite manejar cualquier máquina inmediatamente.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal segundo as normas do Ministério do Trabalho e as regras da RSS3.",
              "en": "Incorrect and illegal under safety regulations.",
              "es": "Incorrecto y contrario a la ley.",
            },
          },
        ],
      },
    ],
  },
};
