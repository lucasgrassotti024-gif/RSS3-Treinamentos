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
  categories: ["nr-regulamentar","conhecimento-operacional"],
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
    estimatedMinutes: 50,
    questionsCount: 10,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Estudo de Caso & Avaliação Prática Avançada de Içamento e Movimentação de Cargas (NR-11). Abrange física do rigging, cálculo de tensão em pernas de eslinga por ângulo de abertura (derating), centro de gravidade assimétrico, pressão exercida no solo por patolas de guindauto e triângulo dinâmico de tombamento. Nota mínima de 70% para certificação teórica.",
      "en": "Advanced Rigging & Material Handling Case Study (NR-11). Covers sling angle tension calculations (derating), asymmetric center of gravity, outrigger ground bearing pressure, and dynamic forklift stability triangle limits. 70% passing score.",
      "es": "Estudio de Caso y Evaluación Práctica Avanzada de Maniobras de Izaje (NR-11). Cálculo de tensión en eslingas según ángulo, centro de gravedad asimétrico, presión de apoyo sobre zapatas de grúa y estabilidad dinámica. 70% requerido.",
    },
    title: {
      "pt-BR": "Estudo de Caso & Avaliação Técnica — Engenharia de Rigging & Operação Segura (NR-11)",
      "en": "Case Study & Technical Assessment — Rigging Engineering & Safe Operations (NR-11)",
      "es": "Estudio de Caso y Evaluación Técnica — Ingeniería de Rigging y Operación Segura (NR-11)",
    },
    description: {
      "pt-BR": "Cenário Operacional na CMPC: Içamento de bomba de vácuo industrial de 6.000 kg com guindauto articulado e movimentação de feixes de tubos com empilhadeira em pátio com aclive. Exige cálculos rigorosos de carga de trabalho e estabilidade física.",
      "en": "Operational Scenario at CMPC: Lifting a 6,000 kg industrial vacuum pump with an articulating knuckleboom crane and moving pipe bundles on an inclined yard. Requires rigorous load chart and stability calculations.",
      "es": "Caso Operacional en CMPC: Maniobra de izaje de bomba de 6.000 kg con camión grúa y traslado de tuberías en rampa con montacargas. Cálculos cuantitativos de carga y estabilidad.",
    },
    questions: [
      {
        id: "q-nr11-1",
        order: 1,
        question: {
          "pt-BR": "CENÁRIO 1: Você está montando o plano de içamento (Rigging Plan) para descarregar uma bomba centrífuga de 6.000 kg (60 kN) com centro de gravidade perfeitamente centralizado. Você utilizará um conjunto de 2 pernas de cintas tubulares de poliéster de mesma capacidade. Se o ângulo entre cada perna da cinta e a linha horizontal da carga for de 30° (o que equivale a um ângulo de 120° no vértice superior do gancho), qual será a tração exata atuando em CADA perna da cinta e qual capacidade nominal mínima (CMT) cada cinta deve possuir considerando fator de segurança unitário?",
          "en": "SCENARIO 1: You are drafting a Rigging Plan to unload a 6,000 kg (60 kN) symmetric centrifugal pump using a 2-leg synthetic sling bridle. If the sling angle to the horizontal load line is 30° (120° included apex angle at the hook), what is the exact tension acting on EACH sling leg and what minimum Working Load Limit (WLL) must each sling have?",
          "es": "ESCENARIO 1: Izaje de bomba de 6.000 kg con eslinga de 2 ramales simétricos. Si el ángulo de cada ramal con la horizontal es de 30° (120° en el vértice), ¿cuál es la tensión exacta en CADA ramal y qué capacidad nominal mínima (CMT) debe tener cada eslinga?",
        },
        options: [
          {
            id: "opt-nr11-1-a",
            text: {
              "pt-BR": "Tração por perna = 6.000 kg / 2 = 3.000 kgf por perna, pois o peso se divide igualmente entre os dois pontos de içamento independentemente da geometria das cintas.",
              "en": "Tension per leg = 6,000 / 2 = 3,000 kgf per leg, because load is evenly split between lift lugs regardless of sling geometry.",
              "es": "Tensión = 3.000 kgf por ramal, ya que el peso se divide equitativamente entre los dos puntos sin considerar geometría.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Erro clássico e letal de rigging: ignorar o fator trigonométrico do ângulo subdimensiona as cintas à metade do esforço real.",
              "en": "Incorrect. Lethal rigging error: ignoring the angular tension multiplier underestimates sling loads by 50%.",
              "es": "Incorrecto. Ignorar el multiplicador de ángulo provoca el corte catastrófico de las eslingas por sobretensión.",
            },
          },
          {
            id: "opt-nr11-1-b",
            text: {
              "pt-BR": "Tração por perna = Carga / (2 × sen 30°) = 6.000 kg / (2 × 0,5) = 6.000 kgf por perna. Cada cinta suportará 100% do peso total da bomba (6.000 kgf), exigindo cintas com CMT individual de pelo menos 6 toneladas.",
              "en": "Tension per leg = Load / (2 × sin 30°) = 6,000 kg / (2 × 0.5) = 6,000 kgf per leg. Each sling leg bears 100% of the entire pump weight (6,000 kgf), requiring a minimum 6-tonne rated sling per leg.",
              "es": "Tensión por ramal = Carga / (2 × sen 30°) = 6.000 kg / (2 × 0,5) = 6.000 kgf en cada ramal. Cada eslinga soporta el 100% del peso total.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Pela lei da estática vetorial T = P / (2 × sen θ). Quando o ângulo com a horizontal cai para 30°, sen 30° = 0,5, duplicando o esforço em relação a pernas a 90° (onde seria 3.000 kgf cada). Essa é a razão de ângulos inferiores a 45° serem altamente desencorajados e exigirem severo sobredimensionamento.",
              "en": "Correct! Vector statics: T = P / (2 × sin θ). At 30° to horizontal, sin(30°) = 0.5, doubling sling tension compared to vertical lifts (3,000 kgf each). This is why sling angles under 45° multiply forces dangerously.",
              "es": "¡Correcto! A 30° con la horizontal, el seno es 0,5, lo que hace que cada ramal soporte la totalidad del peso de la pieza.",
            },
          },
          {
            id: "opt-nr11-1-c",
            text: {
              "pt-BR": "Tração por perna = 6.000 × sen 30° = 3.000 kgf / 2 = 1.500 kgf por perna, pois a inclinação alivia o peso transmitido ao gancho.",
              "en": "Tension per leg = 1,500 kgf, because incline reduces vertical force transmitted to the crane hook.",
              "es": "Tensión = 1.500 kgf por ramal, pues la inclinación alivia la fuerza vertical sobre el gancho.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A inclinação multiplica a força de tração interna nas pernas da cinta, não a reduz.",
              "en": "Incorrect. Sling angularity exponentially increases line tension, never reducing it.",
              "es": "Incorrecto. La inclinación multiplica la tensión en las eslingas, jamás la reduce.",
            },
          },
          {
            id: "opt-nr11-1-d",
            text: {
              "pt-BR": "Tração por perna = 6.000 kgf × cos 30° = 5.196 kgf por perna, sendo desnecessário utilizar o seno trigonométrico na decomposição.",
              "en": "Tension per leg = 6,000 × cos 30° = 5,196 kgf per leg, ignoring the vertical sine resolution.",
              "es": "Tensión por ramal = 6.000 × cos 30° = 5.196 kgf, ignorando el seno en la resolución.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A componente vertical do equilíbrio estático é dada por 2 × T × sen(30°) = P, resultando em 6.000 kgf.",
              "en": "Incorrect. Equilibrium requires 2 × T × sin(30°) = W, yielding 6,000 kgf per leg.",
              "es": "Incorrecto. El equilibrio estático vertical exige 2 × T × sen(30°) = Peso.",
            },
          },
        ],
      },
      {
        id: "q-nr11-2",
        order: 2,
        question: {
          "pt-BR": "CENÁRIO 2: O guindauto munck da RSS3 possui capacidade nominal máxima de placa de 12.000 kg a 2,0 metros de raio. Durante uma parada na CMPC, o operador precisa posicionar um rotor de 2.200 kg a um raio horizontal de alcance de 9,0 metros. A tabela de carga certificada do guindauto (Load Chart) para a lança estendida a 9,0 m indica uma capacidade máxima de 1.800 kg naquele raio. Qual é a conduta obrigatória do rigger e do operador perante a NR-11?",
          "en": "SCENARIO 2: A knuckleboom crane has a maximum nominal plate capacity of 12,000 kg at 2.0 m radius. During an outage at CMPC, the crew must place a 2,200 kg rotor at a 9.0 m horizontal working radius. The certified Load Chart for that 9.0 m radius specifies a maximum rated capacity of 1,800 kg. What is the mandatory protocol under NR-11?",
          "es": "ESCENARIO 2: Camión grúa con capacidad nominal de 12.000 kg a 2,0 m. Debe posicionar un rotor de 2.200 kg a un radio de 9,0 m. La tabla de carga a 9,0 m indica capacidad máxima de 1.800 kg. ¿Cuál es el protocolo obligatorio según la NR-11?",
        },
        options: [
          {
            id: "opt-nr11-2-a",
            text: {
              "pt-BR": "Realizar o içamento normalmente, pois o caminhão pesa 15 toneladas e isso compensa a diferença de 400 kg.",
              "en": "Proceed normally since the 15-tonne truck chassis counterweights the 400 kg discrepancy.",
              "es": "Hacer la maniobra igual ya que el camión pesa 15 toneladas y compensa la diferencia.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e passível de processo criminal. O peso do caminhão já foi considerado pelo fabricante no cálculo da estabilidade do gráfico.",
              "en": "Incorrect and criminal. Chassis counterweight is already engineered into the load chart limits.",
              "es": "Incorrecto y causa directa de vuelcos mortales.",
            },
          },
          {
            id: "opt-nr11-2-b",
            text: {
              "pt-BR": "Desativar o sensor de sobrecarga (LMI) no painel hidráulico para liberar o fluxo de óleo da lança.",
              "en": "Bypass the Load Moment Indicator (LMI) interlock to force hydraulic flow.",
              "es": "Desactivar el limitador de momento de carga (LMI) para desbloquear la pluma.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Burlar dispositivos de segurança é falta gravíssima e violação direta da NR-11 e do Código Penal.",
              "en": "Incorrect. Bypassing safety interlocks violates industrial regulations and criminal law.",
              "es": "Incorrecto. Desactivar seguridades es una infracción gravísima.",
            },
          },
          {
            id: "opt-nr11-2-c",
            text: {
              "pt-BR": "PARALISAR o içamento imediatamente. A carga (2.200 kg) excede a capacidade do gráfico para o raio de 9 m (1.800 kg) em 22% (fator de carga de 122%), o que geraria momento de tombamento ou colapso estrutural da lança. O guindaste deve ser reposicionado mais próximo da base de assentamento (reduzindo o raio para menos de 7,5 m) ou substituído por equipamento de maior porte.",
              "en": "ABORT lift immediately. The load (2,200 kg) exceeds the 9 m chart capacity (1,800 kg) by 22% (122% load utilization), threatening structural boom failure or tipping over. The crane must be repositioned closer to reduce operating radius (< 7.5 m) or replaced with a higher-tonnage crane.",
              "es": "CANCELAR la maniobra de inmediato. La carga (2.200 kg) supera la capacidad a 9 m (1.800 kg) en un 22%, con riesgo inminente de vuelco o doblamiento de pluma. Se debe reubicar el camión más cerca o utilizar una grúa de mayor porte.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A capacidade de um guindaste não é dada pelo número estampado na lateral da cabine, mas rigorosamente pelo Momento de Carga (Força × Raio) expresso no Load Chart oficial.",
              "en": "Correct! Crane capacity is never determined by peak nominal tonnage, but strictly by the Load Chart moment (Force × Radius) at the operating reach.",
              "es": "¡Correcto! La capacidad real se rige estrictamente por el momento de carga (Fuerza × Radio) de la tabla certificada.",
            },
          },
          {
            id: "opt-nr11-2-d",
            text: {
              "pt-BR": "Aumentar a pressão do óleo da bomba hidráulica ajustando a válvula de alívio com uma chave de boca.",
              "en": "Increase hydraulic pump relief valve pressure using a hand wrench.",
              "es": "Ajustar la válvula de alivio hidráulica con una llave para aumentar la fuerza.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Alterar válvulas de alívio sem autorização do fabricante causa explosão de mangueiras sob alta pressão e empenamento permanente das camisas dos cilindros.",
              "en": "Tampering with relief valves causes explosive hose rupture and permanent cylinder deformation.",
              "es": "Manipular válvulas de alivio genera reventón de mangueras y rotura estructural.",
            },
          },
        ],
      },
      {
        id: "q-nr11-3",
        order: 3,
        question: {
          "pt-BR": "CENÁRIO 3: Antes de acionar as sapatas hidráulicas (patolas) do guindauto sobre o solo do pátio da CMPC para içar uma carga pesada, o operador observa que o terreno é de saibro compactado cuja resistência admissível do solo é de 1,5 kgf/cm² (150 kPa). Sabendo que a força máxima transmitida por uma única patola sob raio desfavorável será de 9.000 kgf, qual é a área mínima necessária do dormente/pranchão de apoio de madeira a ser posicionado sob a sapata?",
          "en": "SCENARIO 3: Before deploying hydraulic outriggers on a compacted soil yard at CMPC, allowable ground bearing capacity is confirmed at 1.5 kgf/cm² (150 kPa). Knowing that the maximum vertical load transmitted by a single outrigger pad at peak reach will be 9,000 kgf, what is the minimum required surface area of the timber outrigger mat to prevent ground penetration?",
          "es": "ESCENARIO 3: Resistencia admisible del suelo: 1,5 kgf/cm² (150 kPa). La fuerza máxima sobre una sola zapata de grúa será de 9.000 kgf. ¿Cuál es el área mínima requerida del durmiente/placa de madera a colocar bajo la zapata?",
        },
        options: [
          {
            id: "opt-nr11-3-a",
            text: {
              "pt-BR": "Área mínima = Força / Pressão admissível = 9.000 kgf / 1,5 kgf/cm² = 6.000 cm² (equivalente a uma prancha de pelo menos 80 cm × 80 cm = 6.400 cm² ou dormentes de madeira maciça de 1,0 m × 0,6 m).",
              "en": "Minimum Area = Force / Allowable Bearing = 9,000 kgf / 1.5 kgf/cm² = 6,000 cm² (e.g. at least an 80 cm × 80 cm = 6,400 cm² timber cribbing mat).",
              "es": "Área mínima = 9.000 kgf / 1,5 kgf/cm² = 6.000 cm² (placa de al menos 80 cm × 80 cm = 6.400 cm²).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Patolas de aço padrão possuem cerca de 30 cm de diâmetro (área ~700 cm²), gerando pressão pontual de quase 13 kgf/cm², afundando no solo e causando o tombamento do guindaste se não houver dormentes adequados.",
              "en": "Correct! Standard factory pads (~700 cm²) produce concentrated ground pressure of 13 kgf/cm², sinking into the ground without engineered load-distributing mats.",
              "es": "¡Correcto! La zapata estándar de acero ejerce demasiada presión y se hunde en el terreno blando si no se colocan tacos distribuidores.",
            },
          },
          {
            id: "opt-nr11-3-b",
            text: {
              "pt-BR": "Não é necessário nenhum dormente; a sapata de aço original do caminhão foi feita para penetrar no solo para fincar como uma âncora.",
              "en": "No mats required; factory steel pads are designed to dig in like an anchor.",
              "es": "No hace falta madera; la zapata de acero se clava en la tierra para anclarse.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e perigoso. O afundamento da sapata desnivela o guindaste, multiplicando o raio e gerando tombamento dinâmico imediato.",
              "en": "Incorrect. Outrigger sinking tilts the crane chassis, increasing operating radius dynamically to fatal collapse.",
              "es": "Incorrecto. Provoca el colapso inmediato de la grúa por inclinación de base.",
            },
          },
          {
            id: "opt-nr11-3-c",
            text: {
              "pt-BR": "Basta colocar uma folha de papelão ou lona plástica para proteger a pintura da sapata contra arranhões.",
              "en": "A sheet of cardboard or plastic tarp is sufficient to protect pad paint from scratches.",
              "es": "Basta un cartón o lona para no rayar la pintura.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Materiais sem resistência à compressão mecânica e flexão não distribuem carga.",
              "en": "Incorrect. Paper/canvas offers zero structural load distribution.",
              "es": "Incorrecto. Materiales blandos no distribuyen esfuerzos mecánicos.",
            },
          },
          {
            id: "opt-nr11-3-d",
            text: {
              "pt-BR": "Uma área de 500 cm² é suficiente, pois a resistência do solo aumenta à medida que a sapata afunda 1 metro no barro.",
              "en": "An area of 500 cm² is adequate because soil strength increases as the pad sinks 1 meter deep into clay.",
              "es": "Un área de 500 cm² es suficiente porque el suelo se compacta al hundirse.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Afundamento descontrolado desestabiliza a horizontalidade do equipamento, rompendo os cilindros e tombando a lança.",
              "en": "Uncontrolled sinking breaks outrigger cylinders and induces sudden crane overturn.",
              "es": "El hundimiento rompe vástagos hidráulicos y desestabiliza la grúa por completo.",
            },
          },
        ],
      },
      {
        id: "q-nr11-4",
        order: 4,
        question: {
          "pt-BR": "CENÁRIO 4: Um operador de empilhadeira precisa transportar um fardo de 2.500 kg descendo uma rampa pavimentada com 15% de inclinação. Qual é o posicionamento obrigatório da empilhadeira e da carga durante o trajeto de descida da rampa para assegurar que a máquina não capote de frente nem perca o controle da frenagem?",
          "en": "SCENARIO 4: A forklift operator must transport a 2,500 kg bundle downhill on a 15% paved incline. What is the mandatory travel configuration for the forklift and load while driving DOWN the slope to prevent forward tip-over and loss of braking traction?",
          "es": "ESCENARIO 4: Traslado de carga de 2.500 kg en rampa con pendiente del 15%. ¿Cuál es la orientación obligatoria del montacargas y de la carga al descender para evitar vuelco frontal y pérdida de frenos?",
        },
        options: [
          {
            id: "opt-nr11-4-a",
            text: {
              "pt-BR": "Descer de frente, elevar a torre ao máximo para ter melhor visibilidade por baixo da carga e colocar o câmbio no ponto morto (banguela) para economizar diesel.",
              "en": "Drive forward downhill, raise mast to maximum height for visibility underneath, and shift to neutral to coast.",
              "es": "Bajar de frente, elevar el mástil al tope para ver por debajo y bajar en punto muerto.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e fatal em tripla conformidade: elevar a torre eleva o CG causando tombamento imediato; descer em ponto morto destrói a frenagem motora; e descer de frente provoca capotamento.",
              "en": "Triple fatal error: elevated mast destroys stability, neutral disengages engine braking, and forward travel triggers tip-over.",
              "es": "Error fatal múltiple: mástil elevado sube centro de gravedad, punto muerto anula frenada de motor y de frente vuelca hacia adelante.",
            },
          },
          {
            id: "opt-nr11-4-b",
            text: {
              "pt-BR": "Descer a rampa em zigue-zague na transversal para reduzir a velocidade natural da máquina.",
              "en": "Drive down diagonally in a zig-zag pattern across the slope to cut speed.",
              "es": "Bajar en zigzag atravesando la pendiente.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Manobras transversais em rampas alteram o vetor de gravidade lateralmente, gerando tombamento lateral instantâneo.",
              "en": "Incorrect. Transverse travel across a slope induces immediate lateral rollover.",
              "es": "Incorrecto. Provoca vuelco lateral instantáneo.",
            },
          },
          {
            id: "opt-nr11-4-c",
            text: {
              "pt-BR": "Descer de frente em alta velocidade para aproveitar o embalo e superar as imperfeições da pista.",
              "en": "Drive forward downhill at top speed to carry momentum across pavement bumps.",
              "es": "Bajar hacia adelante a gran velocidad para ganar inercia.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A velocidade excessiva combinada com a declividade e a massa transportada projeta a carga dos garfos em caso de frenagem brusca.",
              "en": "Incorrect. Excessive speed on grades ejects the pallet upon any brake application.",
              "es": "Incorrecto. Proyecta la carga y descontrola la máquina.",
            },
          },
          {
            id: "opt-nr11-4-d",
            text: {
              "pt-BR": "Transitar em MARCHA À RÉ com a carga voltada para o topo da rampa (morro acima), com os garfos rebaixados a aproximadamente 15 a 20 cm do piso e torre inclinada totalmente para trás (tilt back), mantendo a tração nos pneus dianteiros e impedindo que a carga escorregue ou jogue o centro de gravidade à frente das rodas.",
              "en": "Travel in REVERSE with the load facing uphill, forks carried 15-20 cm off the pavement and mast tilted fully back, keeping weight over the drive axle and preventing the load from sliding off or shifting CG past the front tipping fulcrum.",
              "es": "Descender en MARCHA ATRÁS con la carga orientada hacia la parte alta de la pendiente, uñas a 15-20 cm del suelo y mástil inclinado hacia atrás.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Quando carregada, o centro de gravidade da empilhadeira fica avançado. Descer de frente em declive faria o momento da carga sobrepujar o contrapeso traseiro, levantando o eixo diretor e provocando capotamento frontal desastroso.",
              "en": "Correct! When loaded, CG shifts toward the front axle. Going forward downhill tilts the CG past the front wheel fulcrum line, causing a forward roll.",
              "es": "¡Correcto! Con carga siempre se sube y se baja con la carga mirando hacia el punto más alto de la rampa para no volcar.",
            },
          },
        ],
      },
      {
        id: "q-nr11-5",
        order: 5,
        question: {
          "pt-BR": "CENÁRIO 5: Na inspeção pré-uso de um cabo de aço de 6 vias (6×19 com alma de aço) de uma ponte rolante de 20 toneladas, o rigger constata 6 arames rompidos concentrados no comprimento de um passo de trançamento (6d), além de amassamento severo e redução de 12% no diâmetro nominal do cabo. Conforme a norma NBR ISO 4309 e a NR-11, qual é o procedimento mandatório imediato?",
          "en": "SCENARIO 5: During pre-use inspection of a 6-strand (6×19 IWRC) wire rope on a 20-tonne overhead crane, the rigger identifies 6 broken wires concentrated in a single lay length (6d), along with local crushing and a 12% reduction in nominal diameter. Per ISO 4309 and NR-11, what is the mandatory immediate action?",
          "es": "ESCENARIO 5: En la inspección de un cable de acero (6×19) de un puente grúa de 20 t, se detectan 6 alambres rotos en un paso (6d), aplastamiento y reducción del 12% del diámetro nominal. Según ISO 4309 y NR-11, ¿cuál es el procedimiento obligatorio?",
        },
        options: [
          {
            id: "opt-nr11-5-a",
            text: {
              "pt-BR": "DESCARTAR e substituir o cabo de aço imediatamente, interditando a ponte rolante. A combinação de arames partidos concentrados, amassamento e redução do diâmetro superior a 7% (no caso 12%) indica perda de suporte da alma e risco iminente de ruptura catastrófica da carga.",
              "en": "CONDEMN and replace the wire rope immediately, locking out the overhead crane. The combination of concentrated broken wires, crushing, and diameter loss exceeding 7% (12% observed) signals core failure and imminent catastrophic drop.",
              "es": "DESCARTAR y reemplazar el cable de acero de inmediato, bloqueando el puente grúa. La concentración de alambres rotos y reducción de diámetro superior al 7% (12% real) indica colapso del alma y riesgo de rotura inminente.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A NBR ISO 4309 define critérios estritos de descarte: redução > 7% do diâmetro nominal, corrosão severa, amassamento ou concentração de arames rompidos em 1 passo de trançamento impõem a condenação compulsória do cabo.",
              "en": "Correct! ISO 4309 mandates immediate discard when diameter decreases >7%, crushing occurs, or broken wires exceed allowable lay-length thresholds.",
              "es": "¡Correcto! La norma ISO 4309 exige el descarte obligatorio por pérdida de diámetro >7% o concentración de alambres cortados.",
            },
          },
          {
            id: "opt-nr11-5-b",
            text: {
              "pt-BR": "Passar graxa grafitada sobre os arames rompidos para escondê-los e reduzir a carga de trabalho da ponte para 15 toneladas.",
              "en": "Apply heavy graphite grease over broken wires to conceal them and downrate crane capacity to 15 tonnes.",
              "es": "Aplicar grasa sobre los alambres rotos y reducir la carga de trabajo a 15 toneladas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Ocultar danos de cabos de aço é conduta negligente gravíssima e crime contra a segurança do trabalho.",
              "en": "Concealing damaged wire rope is gross negligence and a severe industrial safety violation.",
              "es": "Ocultar daños en cables es una infracción gravísima penada por ley.",
            },
          },
          {
            id: "opt-nr11-5-c",
            text: {
              "pt-BR": "Amarrar arame galvanizado comum ao redor do amassamento para reforçar a tração mecânica do cabo.",
              "en": "Tie common galvanized tie-wire around the crushed section to reinforce tensile strength.",
              "es": "Atar alambre galvanizado alrededor del aplastamiento para reforzar el cable.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Arame galvanizado não possui resistência e impede o assentamento correto nas polias de compensação e tambor.",
              "en": "Wire ties do not restore tensile integrity and jam inside sheave grooves.",
              "es": "Improvisación peligrosa que atasca las poleas.",
            },
          },
          {
            id: "opt-nr11-5-d",
            text: {
              "pt-BR": "Aguardar a próxima parada programada de manutenção da fábrica dali a 6 meses para avaliar novamente.",
              "en": "Wait for the next scheduled plant turnaround in 6 months to re-evaluate.",
              "es": "Esperar a la parada de planta en 6 meses para reevaluar.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Cabos com critérios de descarte atingidos devem ser retirados de operação imediatamente, sem postergação.",
              "en": "Ropes meeting discard criteria must be retired immediately without postponement.",
              "es": "No se puede postergar la sustitución de un elemento con criterio de descarte cumplido.",
            },
          },
        ],
      },
      {
        id: "q-nr11-6",
        order: 6,
        question: {
          "pt-BR": "CENÁRIO 6: Durante a amarração de uma viga de aço I de 8 toneladas com quinas vivas (raio de arredondamento r = 1 mm), o ajudante de rigger pretende passar duas cintas planas de poliéster diretamente em contato com a aresta de aço viva. Por que a NBR 15637 e a NR-11 PROÍBEM terminantemente essa prática e qual medida de engenharia é mandatória?",
          "en": "SCENARIO 6: When rigging an 8-tonne structural steel I-beam with sharp edges (corner radius r = 1 mm), an assistant proposes wrapping synthetic polyester webbing slings directly around the bare metal corners. Why do NBR 15637 and NR-11 strictly FORBID this practice, and what engineering measure is mandatory?",
          "es": "ESCENARIO 6: Al estrobar una viga de acero de 8 t con cantos vivos (radio r = 1 mm), un ayudante quiere pasar eslingas de poliéster directamente sobre las aristas vivas. ¿Por qué la norma PROHÍBE esto y qué medida es obligatoria?",
        },
        options: [
          {
            id: "opt-nr11-6-a",
            text: {
              "pt-BR": "Porque a cinta de poliéster não pode ser dobrada em nenhum ângulo diferente de 90° graus exatos.",
              "en": "Because polyester webbing cannot be flexed at any angle other than exactly 90 degrees.",
              "es": "Porque las eslingas de poliéster no se pueden doblar.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "As cintas são flexíveis, mas arestas afiadas provocam cisalhamento pontual das fibras sob tração.",
              "en": "Slings are flexible; the issue is transverse shear cutting of fibers across sharp radii.",
              "es": "El problema no es la flexibilidad, sino el corte por cizallamiento.",
            },
          },
          {
            id: "opt-nr11-6-b",
            text: {
              "pt-BR": "Quinas vivas (onde o raio de aresta é inferior à espessura da cinta) geram concentração extrema de tensão de cisalhamento transversal, cortando instantaneamente as fibras sintéticas como uma guilhotina no momento do tensionamento; é MANDATÓRIO o uso de protetores de poliuretano, cantoneiras de aço reforçado ou mangotes de proteção com raio compatível.",
              "en": "Sharp corners (edge radius smaller than sling thickness) create extreme transverse shear stress concentrations, shearing synthetic fibers like a guillotine under tension; it is MANDATORY to use heavy polyurethane sleeves, steel corner protectors, or engineered edge guards.",
              "es": "Los cantos vivos concentran tensiones de cizallamiento extremas que cortan las fibras sintéticas instantáneamente al tensar; es OBLIGATORIO usar esquineros de poliuretano, protectores de acero o fundas anti-corte.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O corte por quina viva é a principal causa de queda catastrófica de cargas içadas por cintas têxteis. Protetores de quina certificados são inegociáveis.",
              "en": "Correct! Slashing on sharp edges is the number one cause of synthetic sling failures. Engineered edge protection is non-negotiable.",
              "es": "¡Correcto! El corte en esquinas vivas es la principal causa de desprendimiento de carga con eslingas textiles.",
            },
          },
          {
            id: "opt-nr11-6-c",
            text: {
              "pt-BR": "Porque a tinta da cinta sintética irá manchar a viga de aço, prejudicando a inspeção dimensional de solda.",
              "en": "Because sling dye will stain the steel beam, hindering visual weld inspection.",
              "es": "Porque el tinte de la eslinga mancha el acero.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A questão é de integridade física estrutural contra ruptura letal, não estética de pintura.",
              "en": "The hazard is catastrophic structural parting, not cosmetic staining.",
              "es": "El riesgo es la rotura de la eslinga, no un aspecto estético.",
            },
          },
          {
            id: "opt-nr11-6-d",
            text: {
              "pt-BR": "Cintas têxteis são auto-regenerativas e sua resistência a corte aumenta em 50% quando em contato com aço cortante.",
              "en": "Synthetic slings self-heal, increasing cut resistance by 50% when contacting razor edges.",
              "es": "Las eslingas textiles son auto-reparables frente al corte.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Fibras de poliéster ou poliamida rompem por cisalhamento mecânico sem qualquer regeneração.",
              "en": "Synthetic fibers suffer catastrophic mechanical shear rupture with zero recovery.",
              "es": "Las fibras se seccionan sin capacidad alguna de regeneración.",
            },
          },
        ],
      },
      {
        id: "q-nr11-7",
        order: 7,
        question: {
          "pt-BR": "CENÁRIO 7: No princípio da física do Triângulo de Estabilidade de uma empilhadeira contrabalançada de 3 rodas ou 4 rodas, como se comporta o Centro de Gravidade Combinado (máquina + carga) e qual manobra operacional é a maior causadora de TOMBAMENTO LATERAL?",
          "en": "SCENARIO 7: In the physics of the Stability Triangle of a counterbalanced forklift, how does the Combined Center of Gravity (machine + load) behave, and which operational maneuver is the leading cause of LATERAL ROLLOVER?",
          "es": "ESCENARIO 7: En el Triángulo de Estabilidad de un montacargas, ¿cómo se desplaza el Centro de Gravedad Combinado y qué maniobra es la principal causante del VUELCO LATERAL?",
        },
        options: [
          {
            id: "opt-nr11-7-a",
            text: {
              "pt-BR": "O CG combinado fica sempre estático no centro do volante da máquina, independentemente de curvas ou frenagens.",
              "en": "The combined CG remains permanently anchored in the steering wheel hub regardless of turns or braking.",
              "es": "El centro de gravedad permanece fijo en el volante en todo momento.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "O CG move-se dinamicamente no plano tridimensional em resposta à aceleração, frenagem, inclinação e altura do mastro.",
              "en": "The CG shifts dynamically in 3D space with acceleration, braking, mast tilt, and elevation.",
              "es": "El centro de gravedad se mueve constantemente según la aceleración, giro y altura de carga.",
            },
          },
          {
            id: "opt-nr11-7-b",
            text: {
              "pt-BR": "O CG combinado desloca-se para o alto à medida que a carga é elevada; ao realizar uma curva em velocidade ou com torre elevada, a força centrífuga projeta o CG combinado para fora dos limites das linhas do triângulo de estabilidade (formado pelas duas rodas dianteiras e o pino de articulação do eixo traseiro), provocando tombamento lateral violento.",
              "en": "The combined CG rises as the load is hoisted; making a sharp turn at speed or with an elevated mast pushes the CG outside the lateral boundaries of the stability triangle (formed by the drive wheels and rear axle pivot pin), causing violent rollover.",
              "es": "El CG sube al elevar la carga; realizar giros a velocidad o con mástil alto desplaza el CG fuera de las líneas del triángulo de estabilidad (ruedas delanteras y pivote trasero), provocando vuelco lateral violento.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O triângulo de estabilidade tem base estreita no pivô traseiro. Curvas com torre levantada geram momento centrífugo que joga o CG para fora da base triangular, tombando a empilhadeira.",
              "en": "Correct! Forklift stability is bounded by the axle pivot triangle. Centrifugal force with elevated loads flips the machine sideways.",
              "es": "¡Correcto! La base de apoyo triangular se estrecha hacia el eje trasero; la fuerza centrífuga con mástil alto causa el vuelco inmediato.",
            },
          },
          {
            id: "opt-nr11-7-c",
            text: {
              "pt-BR": "O tombamento lateral só acontece se os pneus forem de borracha maciça furados por pregos de palete.",
              "en": "Lateral rollover only occurs if solid rubber tires are punctured by pallet nails.",
              "es": "El vuelco lateral solo ocurre si se pinchan las ruedas macizas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Pneus maciços não furam e o tombamento decorre de leis físicas dinâmicas de equilíbrio e inércia.",
              "en": "Solid tires cannot deflate; rollover is governed by dynamic laws of physics and inertia.",
              "es": "El vuelco depende de las leyes de la física del equilibrio, no de pinchazos en neumáticos macizos.",
            },
          },
          {
            id: "opt-nr11-7-d",
            text: {
              "pt-BR": "Trafegar em marcha a ré em linha reta plana sem carga é a manobra que mais tomba empilhadeiras lateralmente.",
              "en": "Traveling in reverse in a straight line on level ground unloaded is the leading cause of lateral tip-overs.",
              "es": "Manejar marcha atrás en línea recta sin carga causa la mayoría de vuelcos laterales.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Deslocamento retilíneo plano a baixa velocidade mantém o CG seguro no centro da base triangular.",
              "en": "Low-speed straight travel maintains CG well within the safety envelope.",
              "es": "El desplazamiento recto a velocidad controlada mantiene el CG seguro dentro del triángulo.",
            },
          },
        ],
      },
      {
        id: "q-nr11-8",
        order: 8,
        question: {
          "pt-BR": "CENÁRIO 8: Em relação ao empilhamento e armazenagem de materiais em galpões e pátios industriais segundo a NR-11 (item 11.2 e Anexo), quais são os requisitos técnicos obrigatórios quanto ao afastamento das estruturas físicas do prédio e estabilidade da pilha?",
          "en": "SCENARIO 8: Regarding material stacking and storage in warehouses and industrial yards per NR-11 (item 11.2), what are the mandatory technical clearances from building structures and stack stability requirements?",
          "es": "ESCENARIO 8: En el almacenamiento y apilamiento de materiales según la NR-11, ¿cuáles son los requisitos de distancia a estructuras y estabilidad del apilamiento?",
        },
        options: [
          {
            id: "opt-nr11-8-a",
            text: {
              "pt-BR": "O material pode ser empilhado encostado diretamente nas paredes de alvenaria até tocar o teto para aproveitar 100% do volume cúbico do galpão.",
              "en": "Materials may be stacked directly leaning against masonry walls up to the ceiling to maximize building cube.",
              "es": "El material puede apoyarse directamente en las paredes hasta el techo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Apoiar pilhas em paredes transfere empuxo lateral destrutivo, além de obstruir combate a incêndio e saídas de emergência.",
              "en": "Leaning materials against walls causes lateral structural collapse and blocks fire protection systems.",
              "es": "Apoyar cargas contra paredes causa colapsos estructurales y obstruye rociadores contra incendio.",
            },
          },
          {
            id: "opt-nr11-8-b",
            text: {
              "pt-BR": "As pilhas devem manter afastamento mínimo de 50 cm das paredes e estruturas do prédio, altura dimensionada conforme capacidade portante do piso e amarração/travamento em amarração cruzada ou gaiolas para evitar desmoronamento, com corredores de tráfego desobstruídos e demarcados.",
              "en": "Stacks must maintain at least 50 cm clearance from walls and columns, stack height matched to floor load capacity and secured via cross-stacking/dunnage to prevent collapse, with marked unobstructed traffic aisles.",
              "es": "Las pilas deben mantener distancia mínima de 50 cm de paredes y columnas, altura según capacidad del suelo y traba cruzada para evitar derrumbes, con pasillos demarcados.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O item 11.2.2 exige que os materiais empilhados não fiquem encostados nas paredes (afastamento de 50 cm) e não obstruam iluminação, extintores ou rotas de fuga.",
              "en": "Correct! NR-11 11.2.2 dictates 50 cm wall clearance and guarantees free access to fire protection and emergency egress.",
              "es": "¡Correcto! Distancia obligatoria de 50 cm de paredes y no obstrucción de sistemas contra incendio.",
            },
          },
          {
            id: "opt-nr11-8-c",
            text: {
              "pt-BR": "Não há limites de peso por metro quadrado; qualquer piso de concreto industrial suporta pilhas de 20 metros de altura sem estudo de solo.",
              "en": "No floor weight limits exist; any industrial concrete pad supports 20-meter stacks without soil analysis.",
              "es": "No hay límites de peso; cualquier suelo soporta 20 metros de altura.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "O piso tem limite de carga em kN/m² ou kgf/m². Exceder causa trincamento do concreto e afundamento diferencial da pilha.",
              "en": "Slabs have strict loading limits (kN/m²); overloading cracks concrete and causes sudden stack collapse.",
              "es": "Los pisos tienen capacidad de carga limitada; sobrepasarla fractura la losa.",
            },
          },
          {
            id: "opt-nr11-8-d",
            text: {
              "pt-BR": "A NR-11 autoriza bloquear portas de emergência e extintores de incêndio com fardos se for por menos de 48 horas.",
              "en": "NR-11 permits blocking fire exit doors and extinguishers with pallets if temporary (< 48 hours).",
              "es": "Se permite bloquear salidas de emergencia si es temporalmente por menos de 48 horas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Obstruir saídas de emergência e extintores é proibição absoluta e crime de segurança.",
              "en": "Blocking emergency exits or fire gear is an absolute, non-negotiable safety violation.",
              "es": "Obstruir salidas de emergencia y extintores es una falta gravísima.",
            },
          },
        ],
      },
      {
        id: "q-nr11-9",
        order: 9,
        question: {
          "pt-BR": "CENÁRIO 9: Durante uma manobra de içamento com ponte rolante industrial acionada por controle remoto sem fio em uma área fabril movimentada, qual é o padrão de segurança mandatório quanto ao isolamento de área e tráfego de pessoas?",
          "en": "SCENARIO 9: During an overhead crane lift operated via wireless bellybox remote in an active factory floor, what is the mandatory safety standard regarding exclusion zoning and personnel traffic?",
          "es": "ESCENARIO 9: En una maniobra con puente grúa teledirigido en un área activa de planta, ¿cuál es la norma obligatoria sobre delimitación de área y paso de personas?",
        },
        options: [
          {
            id: "opt-nr11-9-a",
            text: {
              "pt-BR": "É estritamente PROIBIDO o trânsito ou permanência de pessoas sob cargas suspensas; a área de projeção do içamento deve ser delimitada e sinalizada, e o operador deve acionar sinal sonoro (sirene/buzina) antes de transladar a ponte.",
              "en": "Walking or standing beneath suspended loads is strictly FORBIDDEN; the lift drop zone must be barricaded and signed, and operator must sound audible alarms prior to crane travel.",
              "es": "Está terminantemente PROHIBIDO el tránsito o permanencia de personas bajo cargas suspendidas; el área debe ser delimitada y el operador debe activar señal sonora antes de trasladar.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Regra de ouro universal de movimentação de cargas: ninguém permanece sob carga suspensa nem no raio de tombamento. A linha de fogo deve ser 100% isolada.",
              "en": "Correct! Universal Golden Rule: never position anyone beneath a suspended load or within the drop/pinch zone.",
              "es": "¡Correcto! Regla de oro de maniobras: cero personas bajo carga suspendida o dentro de la línea de fuego.",
            },
          },
          {
            id: "opt-nr11-9-b",
            text: {
              "pt-BR": "Colaboradores podem caminhar livremente sob a carga se estiverem usando capacete com jugular comum.",
              "en": "Personnel may freely walk under suspended loads provided they wear standard hardhats with chinstraps.",
              "es": "Se puede caminar bajo la carga si se usa casco de seguridad.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Capacetes protegem contra pequenas ferramentas caídas, mas oferecem zero proteção contra cargas de várias toneladas.",
              "en": "Hardhats deflect small dropped bolts, not multi-tonne crushing loads.",
              "es": "Un casco no protege contra el aplastamiento por una carga de varias toneladas.",
            },
          },
          {
            id: "opt-nr11-9-c",
            text: {
              "pt-BR": "O operador pode içar trabalhadores sobre a carga suspensa para ajustar a amarração em pleno voo.",
              "en": "The crane operator may hoist riggers riding on top of the load to adjust rigging mid-air.",
              "es": "El operador puede elevar a trabajadores sobre la carga para ajustar las eslingas en el aire.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Utilizar carga suspensa como transporte humano é desvio gravíssimo e proibição expressa de todas as NRs.",
              "en": "Riding suspended loads is strictly prohibited and a reckless hazard.",
              "es": "Montar sobre cargas suspendidas es una violación crítica y fatal.",
            },
          },
          {
            id: "opt-nr11-9-d",
            text: {
              "pt-BR": "A buzina do guindaste só deve ser acionada após a carga cair no chão para avisar a equipe médica.",
              "en": "The horn should only be sounded after the load hits the floor to call paramedics.",
              "es": "La bocina solo debe sonar tras la caída de la carga.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Sinais de advertência acústica e visual servem para prevenção e alerta antes da movimentação.",
              "en": "Audio-visual warnings are proactive safeguards alerting workers before travel begins.",
              "es": "Los avisos son preventivos para despejar la zona antes de mover la carga.",
            },
          },
        ],
      },
      {
        id: "q-nr11-10",
        order: 10,
        question: {
          "pt-BR": "CENÁRIO 10: Em relação à certificação de competência e conformidade regulatória segundo a NR-11 (itens 11.1.5 a 11.1.7) e o AGENTS.md da RSS3 Treinamentos, qual é o status jurídico de um colaborador que obtém 100% de aproveitamento nesta avaliação teórica online, mas NÃO realizou o estágio prático supervisionado em campo nem possui ASO (Atestado de Saúde Ocupacional) de aptidão específica?",
          "en": "SCENARIO 10: Regarding regulatory compliance under NR-11 (items 11.1.5-11.1.7) and AGENTS.md permanent guidelines, what is the legal operational status of a candidate who scores 100% on this theoretical test but lacks hands-on supervised field evaluation and a valid medical clearance (ASO)?",
          "es": "ESCENARIO 10: Conforme a la NR-11 y las directrices del AGENTS.md, ¿cuál es el estatus legal de un trabajador con 100% en esta prueba teórica que NO realizó la práctica supervisada de campo ni tiene ASO médico vigente?",
        },
        options: [
          {
            id: "opt-nr11-10-a",
            text: {
              "pt-BR": "Ele já pode assumir o volante imediatamente e operar em qualquer fábrica sem precisar de crachá nem de exame médico.",
              "en": "He can immediately drive any equipment with zero medical checks or company authorization.",
              "es": "Puede operar cualquier máquina inmediatamente sin examen médico ni credencial.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto, ilegal e viola frontalmente as diretrizes de integridade da RSS3 e as normas federais.",
              "en": "Incorrect and illegal under federal safety regulations.",
              "es": "Incorrecto e ilegal.",
            },
          },
          {
            id: "opt-nr11-10-b",
            text: {
              "pt-BR": "O aluno possui apenas o Registro de Conclusão de Conteúdo Teórico. Ele está FORMALMENTE IMPEDIDO de operar qualquer equipamento automotor ou guindaste em plantas industriais até cumprir: 1) ASO com indicação de aptidão para operador de máquinas pesadas; 2) Treinamento prático presencial supervisionado com avaliação de manobra por instrutor credenciado; 3) Emissão e porte obrigatório do Crachá de Identificação de Operador Autorizado (com foto e validade anual).",
              "en": "Candidate holds strictly a Theoretical Completion Certificate. He is LEGALLY PROHIBITED from operating cranes or mobile machinery until completing: 1) Valid occupational medical clearance (ASO); 2) Supervised hands-on practical field assessment signed by certified instructor; 3) Formal issuance of the mandatory Operator Authorization Badge with annual renewal.",
              "es": "El trabajador posee únicamente Certificado Teórico. Está ESTRICTAMENTE PROHIBIDO que opere maquinaria hasta completar: 1) ASO médico con aptitud; 2) Práctica presencial evaluada por instructor credenciado; 3) Credencial de operador autorizado con foto y validez anual.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Conforme a Seção 3 do AGENTS.md e os preceitos da NR-11, o LMS nunca confere habilitação prática para atividades de alto risco. O desrespeito a isso configura infração trabalhista e expõe a empresa e a contratada a severas penalidades civis e criminais.",
              "en": "Correct! Per AGENTS.md Section 3 and NR-11, theoretical e-learning never qualifies personnel for physical high-risk operations without in-person validation.",
              "es": "¡Correcto! Cumple estrictamente con el principio de doble capa de seguridad y la separación entre teoría y habilitación práctica formal.",
            },
          },
          {
            id: "opt-nr11-10-c",
            text: {
              "pt-BR": "O exame médico só é necessário se o colaborador sofrer um acidente grave na frente de trabalho.",
              "en": "Medical exams are only needed after a serious accident occurs.",
              "es": "El examen médico solo se requiere después de un accidente.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. ASO com aptidão prévia é mandatório por lei antes do início de qualquer atividade de risco.",
              "en": "Incorrect. ASO medical clearance is prerequisite before touching machinery.",
              "es": "Incorrecto. Aptitud médica requerida antes de comenzar operaciones.",
            },
          },
          {
            id: "opt-nr11-10-d",
            text: {
              "pt-BR": "A validação teórica online autoriza a operação provisória por até 90 dias antes de qualquer teste prático.",
              "en": "Online theoretical validation authorizes provisional operation for up to 90 days prior to any practical test.",
              "es": "La teoría autoriza operación provisional por 90 días.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Inexistente. A lei exige capacitação prática prévia e crachá de identificação antes de qualquer operação.",
              "en": "Nonexistent in safety law. Practical training and company badge are required before touching equipment.",
              "es": "Inexistente. Se requiere evaluación práctica y credencial previa.",
            },
          },
        ],
      },
    ],
  },
};
