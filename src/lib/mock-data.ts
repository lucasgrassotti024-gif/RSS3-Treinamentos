import { CourseDemonstration, SchoolCategory, UserDemonstration } from "@/types";

/**
 * Escolas Oficiais Ativas da RSS3 Soluções Industriais
 * Apenas escolas com cursos reais cadastrados são exibidas no catálogo.
 */
export const DEMO_SCHOOLS: SchoolCategory[] = [
  {
    id: "hidrojato",
    name: {
      "pt-BR": "Hidrojateamento e Hidrovácuo",
      "en": "Hydroblasting & Vacuum Operations",
      "es": "Hidrojet e Hidrovacío",
    },
    description: {
      "pt-BR": "Equipamentos de alta e ultra-alta pressão, zonas de exclusão, conexões seguras e sucção industrial.",
      "en": "High and ultra-high pressure units, exclusion zones, and waste extraction.",
      "es": "Equipos de alta presión, zonas de exclusión y succión de residuos.",
    },
    iconName: "Droplets",
    coursesCount: 1,
    color: "#0891b2", // Cyan 600
  },
  {
    id: "pintura-industrial",
    name: {
      "pt-BR": "Pintura Industrial e Tratamento de Superfície",
      "en": "Industrial Painting & Surface Treatment",
      "es": "Pintura Industrial y Tratamiento de Superficies",
    },
    description: {
      "pt-BR": "Preparação mecânica de superfícies, esquemas anticorrosivos, ensaios de película e controle de qualidade.",
      "en": "Mechanical surface prep, anti-corrosive coatings, dry film thickness, and quality control.",
      "es": "Preparación de superficies, esquemas anticorrosivos y control de calidad.",
    },
    iconName: "Paintbrush",
    coursesCount: 1,
    color: "#ea580c", // Orange 600
  },
  {
    id: "andaimes-acesso",
    name: {
      "pt-BR": "Montagem de Andaimes e Acesso Industrial",
      "en": "Scaffolding Assembly & Industrial Access",
      "es": "Montaje de Andamios y Acceso Industrial",
    },
    description: {
      "pt-BR": "Montagem, travamento, cálculo de sobrecarga, inspeção com etiquetas e segurança em trabalho em altura (NR-18 e NR-35).",
      "en": "Assembly, bracing, load calculation, tag inspections, and working at height safety (NR-18 & NR-35).",
      "es": "Montaje, arriostramiento, cálculo de cargas, inspección con tarjetas y seguridad en altura.",
    },
    iconName: "Layers",
    coursesCount: 1,
    color: "#eab308", // Yellow 500 / Âmbar Industrial
  },
  {
    id: "seguranca-epi",
    name: {
      "pt-BR": "Segurança do Trabalho e Equipamentos de Proteção",
      "en": "Occupational Safety & Personal Protective Equipment",
      "es": "Seguridad Laboral y Equipos de Protección",
    },
    description: {
      "pt-BR": "Diretrizes da NR-6, seleção, guarda, conservação, inspeção e responsabilidades legais de EPIs em operações de alta criticidade.",
      "en": "NR-6 regulatory guidelines, PPE selection, maintenance, inspection, and compliance duties in high-risk operations.",
      "es": "Directrices de la NR-6, selección, conservación, inspección y responsabilidades legales del EPP en operaciones de alto riesgo.",
    },
    iconName: "ShieldCheck",
    coursesCount: 2,
    color: "#2563eb", // Blue 600
  },
];

/**
 * Catálogo Oficial de Cursos da RSS3 Treinamentos
 * Contém exclusivamente o treinamento operacional real de Hidrojateamento de Alta Pressão.
 */
export const DEMO_COURSES: CourseDemonstration[] = [
  {
    id: "c-hidrojato-seguranca",
    slug: "seguranca-operacional-em-hidrojateamento",
    title: {
      "pt-BR": "Segurança Operacional em Hidrojateamento de Alta Pressão",
      "en": "Operational Safety in High-Pressure Hydroblasting",
      "es": "Seguridad Operacional en Hidrojet de Alta Presión",
    },
    description: {
      "pt-BR": "Inspeção de mangueiras, conexões com travas de segurança (whip-checks), zonas de exclusão e comunicação.",
      "en": "Hose inspection, safety whip checks, exclusion zone management, and radio protocols.",
      "es": "Inspección de mangueras, seguros anticaída y zonas de exclusión.",
    },
    longDescription: {
      "pt-BR": "Práticas de segurança de alto rigor para operações de hidrojateamento com pressões de até 2.800 bar. Procedimentos de vistoria em mangueiras, conexões anti-chicoteamento, armaduras de proteção para lanceiro, válvula de pé corta-fluxo e coordenação de zona de isolamento.",
      "en": "Rigorous safety practices for hydroblasting operations up to 2,800 bar. Inspection procedures for high-pressure hoses, whip-checks, operator ballistic gaiters/aprons, dump guns, and exclusion zone barricading.",
      "es": "Prácticas de seguridad en hidrojet hasta 2.800 bar. Inspección de mangueras, seguros anticaída, trajes de protección y zonas de aislamiento.",
    },
    schoolId: "hidrojato",
    schoolName: {
      "pt-BR": "Hidrojateamento",
      "en": "Hydroblasting",
      "es": "Hidrojet",
    },
    workloadHours: 16,
    level: "advanced",
    modality: "hybrid",
    isMandatory: true,
    mandatoryFor: ["Operador de Hidrojato"],
    targetAudience: {
      "pt-BR": "Operadores de hidrojato, lanceiros, ajudantes e fiscais de segurança em paradas industriais.",
      "en": "Hydroblasting operators, lance operators, pump tenders, and shutdown safety supervisors.",
      "es": "Operadores de hidrojet, asistentes y supervisores de seguridad.",
    },
    modulesCount: 2,
    lessonsCount: 4,
    thumbnailGradient: "from-cyan-700 to-blue-950",
    badgeCode: "HJ-UAP",
    updatedAtDate: "2026-10-15",
    modules: [
      {
        id: "mod-hj-1",
        order: 1,
        title: {
          "pt-BR": "Módulo 1: Equipamentos, Física da Pressão e Segurança (NR-34 / NR-12)",
          "en": "Module 1: Units, Pressure Physics & Safety Standards (NR-34 / NR-12)",
          "es": "Módulo 1: Equipos, Física de Presión y Seguridad (NR-34 / NR-12)",
        },
        lessons: [
          {
            id: "les-hj-1-1",
            order: 1,
            title: {
              "pt-BR": "Treinamento Operacional: Princípios, Riscos e Prática de Hidrojateamento",
              "en": "Operational Training: Principles, Hazards & Hydroblasting Practice",
              "es": "Entrenamiento Operacional: Principios, Riesgos y Práctica de Hidrojet",
            },
            durationMinutes: 25,
            contentType: "video",
            videoUrl: "SfkQOXvAlzg",
            contentDetail: {
              objective: {
                "pt-BR": "Compreender os fundamentos operacionais do hidrojateamento de alta pressão, os limites de segurança da NR-34/NR-12 e a severidade do risco de injeção subcutânea por jato fluido.",
                "en": "Understand high-pressure waterjet operational fundamentals, NR-34/NR-12 compliance thresholds, and high-pressure fluid injection severity.",
                "es": "Comprender los fundamentos del hidrojet, normas NR-34/NR-12 y riesgos de inyección subcutánea.",
              },
              introduction: {
                "pt-BR": "O hidrojateamento é uma das técnicas mais eficientes da indústria pesada para limpeza e decapagem em paradas de manutenção. Porém, pressões operacionais acima de 250 bar (podendo ultrapassar 2.800 bar) possuem energia cinética suficiente para cortar materiais ferrosos e causar lesões corporais graves em frações de segundo.",
                "en": "Hydroblasting is among the most effective industrial cleaning methods for plant shutdowns. Operating pressures exceeding 250 bar to 2,800 bar can sever metals and cause fatal trauma instantly.",
                "es": "El hidrojet es fundamental en paradas de mantenimiento industrial con presiones capaces de cortar metales y causar traumas severos.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Classificação das Faixas de Pressão Operacional",
                    "en": "Pressure Range Classification",
                    "es": "Clasificación de Rangos de Presión",
                  },
                  body: {
                    "pt-BR": "• Baixa Pressão: Até 350 bar (5.000 psi) — limpezas superficiais e lavagens industriais leves.\n• Alta Pressão: De 350 bar a 1.400 bar (5.000 a 20.000 psi) — desobstrução de tubulações, feixes tubulares e tanques.\n• Ultra-Alta Pressão (UAP): Acima de 1.400 bar (20.000 a 40.000+ psi) — remoção de tintas epóxi, incrustações pesadas e preparação de superfície padrão Sa 2.5 / Sa 3.",
                    "en": "• Low: up to 350 bar (5,000 psi).\n• High: 350 to 1,400 bar (5,000 to 20,000 psi).\n• Ultra-High: above 1,400 bar (20,000 to 40,000+ psi).",
                    "es": "• Baja presión: hasta 350 bar.\n• Alta presión: 350 a 1.400 bar.\n• Ultra alta presión: superior a 1.400 bar.",
                  },
                },
                {
                  title: {
                    "pt-BR": "O Risco Fatal da Injeção de Jato Subcutâneo",
                    "en": "Fatal Fluid Injection Trauma",
                    "es": "Trauma por Inyección de Fluido a Alta Presión",
                  },
                  body: {
                    "pt-BR": "Ao contrário de cortes convencionais, o jato de alta pressão penetra a derme através de orifícios microscópicos, injetando água contaminada, graxa e bactérias profundamente nos tecidos musculares e corrente sanguínea. Todo acidente com hidrojato é considerado EMERGÊNCIA CIRÚRGICA IMEDIATA — o membro não deve sofrer torniquete caseiro e o médico deve ser informado imediatamente sobre a pressão de trabalho.",
                    "en": "High-pressure fluid penetrates dermis microscopically, injecting contaminants deep into tissues and vascular streams. Immediate hospital surgical intervention is mandatory.",
                    "es": "El chorro a presión penetra tejidos e inocula bacterias. Constituye una emergencia quirúrgica inmediata.",
                  },
                },
              ],
              table: {
                headers: [
                  { "pt-BR": "Faixa de Pressão", "en": "Pressure Range", "es": "Rango de Presión" },
                  { "pt-BR": "Pressão Típica (bar / psi)", "en": "Typical Pressure", "es": "Presión Típica" },
                  { "pt-BR": "Aplicações Industriais", "en": "Applications", "es": "Aplicaciones" },
                  { "pt-BR": "Requisito de EPI", "en": "PPE Requirement", "es": "EPP Obligatorio" },
                ],
                rows: [
                  [
                    { "pt-BR": "Baixa Pressão", "en": "Low", "es": "Baja" },
                    { "pt-BR": "Até 350 bar (5.000 psi)", "en": "Up to 350 bar", "es": "Hasta 350 bar" },
                    { "pt-BR": "Limpeza de piso, veículos pesados e canaletas", "en": "General washdown", "es": "Limpieza general" },
                    { "pt-BR": "Macacão impermeável, óculos, luvas de PVC", "en": "Standard waterproof", "es": "Impermeable estándar" },
                  ],
                  [
                    { "pt-BR": "Alta Pressão", "en": "High", "es": "Alta" },
                    { "pt-BR": "350 a 1.400 bar (5k - 20k psi)", "en": "350 - 1,400 bar", "es": "350 - 1.400 bar" },
                    { "pt-BR": "Desobstrução de feixes tubulares e trocadores de calor", "en": "Heat exchangers", "es": "Intercambiadores" },
                    { "pt-BR": "Bota com metatarso de aço, proteção facial total", "en": "Metatarsal boots, shield", "es": "Bota con metatarso" },
                  ],
                  [
                    { "pt-BR": "Ultra-Alta Pressão (UAP)", "en": "Ultra-High", "es": "Ultra Alta" },
                    { "pt-BR": "1.400 a 2.800+ bar (20k - 40k psi)", "en": "1,400 - 2,800+ bar", "es": "1.400 - 2.800+ bar" },
                    { "pt-BR": "Decapagem Sa 2.5/Sa 3, corte frio e hidrovácuo", "en": "Hydro-demolition, surface prep", "es": "Decapado e hidrovacío" },
                    { "pt-BR": "Armadura balística completa (Kevlar/Dyneema 2800 bar)", "en": "Full ballistic armor", "es": "Traje balístico completo" },
                  ],
                ],
              },
            },
            challenge: {
              id: "chal-hj-1-1",
              question: {
                "pt-BR": "DESAFIO DE CAMPO 1: Durante o pré-operacional na área industrial, o operador observa uma mancha úmida e um orifício minúsculo 'furinho' espirrando água finíssima em uma mangueira pressurizada a 1.000 bar. Qual conduta é estritamente obrigatória?",
                "en": "FIELD CHALLENGE 1: A pinhole leak is spraying a mist from a 1,000 bar pressurized hose. What is the mandatory immediate action?",
                "es": "DESAFÍO 1: Se observa una fuga microscópica en una manguera a 1.000 bar. ¿Cuál es la acción obligatoria?",
              },
              contextScenario: {
                "pt-BR": "A equipe está atrasada para entregar o permutador de calor e o ajudante sugere cobrir o furo com borracha e fita reforçada até o final do turno.",
                "en": "The turnaround team is rushing and a helper suggests taping the pinhole leak.",
                "es": "El equipo tiene prisa y sugieren parchar la manguera con cinta reforzada.",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Tentar colocar a mão enluvada com luva de vaqueta para conter o vazamento e verificar a pressão.",
                    "en": "Put a gloved hand over the leak to gauge pressure.",
                    "es": "Colocar la mano con guante para verificar la fuga.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO E EXTREMAMENTE PERIGOSO! A luva de vaqueta é perfurada instantaneamente pelo micro-jato a 1.000 bar, resultando em injeção subcutânea e amputação.",
                    "en": "Extremely hazardous! Leather gloves are penetrated instantly by micro-jets.",
                    "es": "¡Peligroso! El chorro perfora el cuero e inyecta fluido de inmediato.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Acionar a parada de emergência, despressurizar toda a linha no descarte e substituir a mangueira danificada imediatamente.",
                    "en": "Hit emergency dump, depressurize line, and replace damaged hose immediately.",
                    "es": "Presionar parada de emergencia, despresurizar y cambiar la manguera de inmediato.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! Mangueiras com perda de integridade mecânica NUNCA podem ser emendadas ou vedadas com fita. Devem ser despressurizadas e segregadas para descarte.",
                    "en": "CORRECT! High-pressure hoses with structural compromise can never be taped or repaired on site.",
                    "es": "¡CORRECTO! Mangueras de alta presión comprometidas jamás se reparan en campo.",
                  },
                },
                {
                  id: "opt-3",
                  text: {
                    "pt-BR": "Diminuir a aceleração da bomba no motor para 200 bar e continuar o serviço com cuidado.",
                    "en": "Lower engine throttle to 200 bar and keep blasting.",
                    "es": "Bajar la presión a 200 bar y continuar.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! 200 bar ainda é suficiente para causar cegueira ou lesão grave se houver ruptura total do tramado de aço.",
                    "en": "Incorrect! 200 bar remains hazardous if structural braids fail.",
                    "es": "Incorrecto. 200 bar aún causa lesiones graves si la malla cede.",
                  },
                },
              ],
            },
          },
          {
            id: "les-hj-1-2",
            order: 2,
            title: {
              "pt-BR": "Armadura de Proteção Metatarsal e EPIs Balísticos (NR-06 / NR-34)",
              "en": "Metatarsal Guards & Ballistic PPE (NR-06 / NR-34)",
              "es": "Protección Metatarsal y EPP Balístico (NR-06 / NR-34)",
            },
            durationMinutes: 30,
            contentType: "pdf",
            contentDetail: {
              objective: {
                "pt-BR": "Dominar a correta inspeção, vestimenta e limites de proteção dos trajes balísticos (Kevlar/Dyneema) e botas de metatarso de aço para lanceiros.",
                "en": "Master inspection, donning, and protection limitations of ballistic body armor and metatarsal boots for lance operators.",
                "es": "Dominar la inspección y colocación de trajes balísticos y botas metatarsales.",
              },
              introduction: {
                "pt-BR": "Em operações de hidrojateamento, o EPI convencional de construção civil (bota simples de biqueira plástica e óculos de proteção comum) NÃO OFERECE PROTEÇÃO contra o jato d'água. É compulsório o uso do conjunto de proteção balística certificado internacionalmente.",
                "en": "Standard construction PPE provides zero defense against high pressure jets. Certified multi-layer ballistic armor is mandatory.",
                "es": "El EPP común no protege contra chorros de alta presión. Es obligatorio el traje balístico certificado.",
              },
              checklist: {
                title: {
                  "pt-BR": "Checklist de Verificação dos EPIs do Lanceiro antes da Pressurização",
                  "en": "Lance Operator PPE Inspection Checklist",
                  "es": "Checklist de EPP del Operador de Lanza",
                },
                items: [
                  {
                    id: "chk-1",
                    label: {
                      "pt-BR": "Protetor Metatarsal Rígido Externo e Perneira Balística",
                      "en": "Rigid External Metatarsal Guard & Ballistic Gaiter",
                      "es": "Protector Metatarsal Rígido y Polaina Balística",
                    },
                    criterion: {
                      "pt-BR": "Sem rasgos no tecido de Dyneema, chapas de alumínio/aço alinhadas cobrindo peito do pé e canela.",
                      "en": "No tears in Dyneema, aluminum plates shielding instep and shin.",
                      "es": "Sin rasgaduras, placas alineadas sobre empeine y espinilla.",
                    },
                  },
                  {
                    id: "chk-2",
                    label: {
                      "pt-BR": "Jaqueta / Avental Balístico com Proteção de Braço",
                      "en": "Ballistic Jacket / Apron with Forearm Guards",
                      "es": "Chaqueta Balística con Protección de Antebrazo",
                    },
                    criterion: {
                      "pt-BR": "Tiras de velcro e fivelas 100% afiveladas e ajustadas ao corpo do lanceiro.",
                      "en": "Straps securely fastened to torso without loose fabric.",
                      "es": "Correas bien ajustadas al torso sin telas sueltas.",
                    },
                  },
                  {
                    id: "chk-3",
                    label: {
                      "pt-BR": "Capacete com Protetor Facial de Policarbonato + Óculos de Ampla Visão",
                      "en": "Helmet with Polycarbonate Face Shield + Impact Goggles",
                      "es": "Casco con Careta de Policarbonato + Gafas de Seguridad",
                    },
                    criterion: {
                      "pt-BR": "Dupla proteção ocular obrigatória para evitar ricochete de fragmentos e spray pressurizado.",
                      "en": "Dual eye defense mandatory against high velocity debris.",
                      "es": "Doble protección ocular obligatoria contra rebotes y astillas.",
                    },
                  },
                  {
                    id: "chk-4",
                    label: {
                      "pt-BR": "Proteção Auditiva Dupla (Plugue de Inserção + Abafador Tipo Concha)",
                      "en": "Dual Hearing Protection (Earplugs + Muffs)",
                      "es": "Doble Protección Auditiva (Tapones + Orejeras)",
                    },
                    criterion: {
                      "pt-BR": "Níveis de ruído na pistola frequentemente ultrapassam 105 dB(A).",
                      "en": "Noise at hydro lance exceeds 105 dB(A).",
                      "es": "El ruido en la lanza supera habitualmente los 105 dB(A).",
                    },
                  },
                ],
              },
            },
            challenge: {
              id: "chal-hj-1-2",
              question: {
                "pt-BR": "DESAFIO DE CAMPO 2: Um novo ajudante de hidrojateamento alega que, por estar calor intenso (34°C), vai retirar a perneira balística e usar apenas a botina de biqueira de composite comum. Como o operador lanceiro e líder devem agir?",
                "en": "FIELD CHALLENGE 2: An assistant wants to remove ballistic gaiters due to high heat. What is the mandatory leadership response?",
                "es": "DESAFÍO 2: Un ayudante quiere quitarse la polaina balística por calor extremo. ¿Cómo se debe proceder?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Permitir, desde que ele fique a pelo menos 1 metro de distância do bico do jato.",
                    "en": "Allow it if standing 1 meter away from nozzle.",
                    "es": "Permitirlo si se mantiene a 1 metro de distancia.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! Em caso de ricochete ou perda de controle da lança, o jato percorre metros em milissegundos e decepa tecidos sem armadura.",
                    "en": "Incorrect! Deflected jets travel meters in milliseconds.",
                    "es": "Incorrecto. Los rebotes alcanzan metros en milisegundos.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Proibir terminantemente a operação e aplicar revezamento térmico com pausas para hidratação, sem jamais abrir mão do EPI balístico.",
                    "en": "Strictly halt operation, schedule thermal rotation with hydration breaks, never compromising ballistic gear.",
                    "es": "Prohibir la operación, implementar pausas de hidratación y rotación sin retirar el EPP.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! O estresse térmico deve ser gerenciado com pausas, rodízio de equipes e sombra, NUNCA com a supressão de EPIs de proteção contra risco de morte.",
                    "en": "CORRECT! Thermal stress is managed via rotations and hydration breaks, never by stripping life-saving armor.",
                    "es": "¡CORRECTO! El calor se mitiga con rotación y pausas, jamás retirando el equipo de protección.",
                  },
                },
              ],
            },
          },
        ],
      },
      {
        id: "mod-hj-2",
        order: 2,
        title: {
          "pt-BR": "Módulo 2: Montagem de Linha, Conexões e Procedimentos Críticos",
          "en": "Module 2: Rigging Lines, Couplings & Critical Procedures",
          "es": "Módulo 2: Montaje de Línea, Acoples y Procedimientos Críticos",
        },
        lessons: [
          {
            id: "les-hj-2-1",
            order: 1,
            title: {
              "pt-BR": "Checklist de Mangueiras e Travas Anti-Chicoteamento (Whip-Checks)",
              "en": "Hose Inspection & Whip-Check Safety Cables",
              "es": "Inspección de Mangueras y Seguros Antichicoteo",
            },
            durationMinutes: 35,
            contentType: "video",
            videoUrl: "SfkQOXvAlzg",
            contentDetail: {
              objective: {
                "pt-BR": "Aprender a instalar travas de segurança tipo laço (cabo de aço/whip-check) em 100% das conexões da linha pressurizada, eliminando o efeito chicote em caso de desacoplamento.",
                "en": "Ensure 100% of pressurized line couplings are secured with whip-check steel cables to suppress whipping.",
                "es": "Instalar seguros tipo guaya antichicoteo en el 100% de las uniones de mangueras.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "O Princípio Físico do Chicoteamento (Efeito Whipping)",
                    "en": "The Whipping Effect Physics",
                    "es": "Física del Efecto Látigo",
                  },
                  body: {
                    "pt-BR": "Quando uma mangueira de 1.400 bar se solta sob pressão, a saída desordenada do fluxo de água atua como um propulsor de foguete. O terminal metálico da mangueira se transforma em um projétil oscilante que bate repetidamente com força destrutiva contra o piso, estruturas e trabalhadores.",
                    "en": "A decoupled hose under 1,400 bar acts like an uncontrolled rocket thruster. The metal terminal strikes repeatedly with lethal force.",
                    "es": "Una manguera suelta a alta presión actúa como propulsor descontrolado con fuerza destructiva mortal.",
                  },
                },
                {
                  title: {
                    "pt-BR": "Regras de Ouro na Instalação de Whip-Checks",
                    "en": "Golden Rules for Whip-Check Rigging",
                    "es": "Reglas de Oro para Seguros Antichicoteo",
                  },
                  body: {
                    "pt-BR": "1. O cabo deve estar esticado (sem folga excessiva que permita aceleração).\n2. As molas devem estar comprimidas firmemente sobre a borracha da mangueira, nunca sobre a rosca metálica.\n3. Em conexões mangueira-bomba ou mangueira-válvula de pé, deve-se usar o modelo com olhal aparafusado à carcaça do equipamento.",
                    "en": "1. Keep cable snug.\n2. Position springs on hose rubber, not metal collars.\n3. Anchor to rigid equipment chassis on machine ends.",
                    "es": "1. Mantener cable tenso.\n2. Resortes sobre la goma de la manguera.\n3. Fijar a partes rígidas en las bombas.",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-hj-2-1",
              question: {
                "pt-BR": "DESAFIO DE CAMPO 3: Ao inspecionar a montagem da linha de 50 metros entre a bomba e a frente de limpeza, você nota que a emenda intermediária possui cabo anti-chicoteamento, mas com o laço frouxo deslizando livremente sobre a carcaça. O que deve ser feito?",
                "en": "FIELD CHALLENGE 3: A whip check cable is loosely sliding over a hose joint without spring tension. What is required?",
                "es": "DESAFÍO 3: Un seguro antichicoteo está flojo y resbala libremente. ¿Qué debe hacerse?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Reapertar a mola e ajustar os laços tensionados sobre o corpo de borracha de ambas as mangueiras antes de permitir a pressurização.",
                    "en": "Reposition spring tension snug against rubber bodies on both sides before pressure is applied.",
                    "es": "Tensar el resorte y ajustar sobre el cuerpo de goma de ambas mangueras antes de presurizar.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! Se o whip-check deslizar solto, o terminal metálico escapa do laço no momento do rompimento e o chicoteamento ocorre da mesma forma.",
                    "en": "CORRECT! A loose whip check will slip off upon rupture, rendering it useless.",
                    "es": "¡CORRECTO! Si el seguro desliza, el terminal se suelta y ocurre el latigazo.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Passar fita isolante ao redor do laço para não escorregar e iniciar o teste de pressão.",
                    "en": "Wrap electrical tape around it to prevent sliding and test.",
                    "es": "Colocar cinta aislante para que no resbale y probar.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! Fita adesiva não suporta forças dinâmicas de tração calculadas em toneladas.",
                    "en": "Incorrect! Tape cannot resist multiton dynamic blast forces.",
                    "es": "Incorrecto. La cinta no soporta fuerzas de toneladas.",
                  },
                },
              ],
            },
          },
          {
            id: "les-hj-2-2",
            order: 2,
            title: {
              "pt-BR": "Comunicação Operacional, Válvula de Pé e Zonas de Exclusão",
              "en": "Operational Radio Protocols, Dump Valve & Exclusion Zones",
              "es": "Comunicación Operacional, Válvula de Pedal y Zonas de Exclusión",
            },
            durationMinutes: 30,
            contentType: "activity",
            contentDetail: {
              objective: {
                "pt-BR": "Executar o isolamento físico de área (barricamento), o protocolo de homem-morto da válvula de pé e o alinhamento de rádio bidirecional entre lanceiro e operador da bomba.",
                "en": "Execute exclusion zone barricading, foot dump valve deadman protocol, and two-way radio sync between lance tender and pump operator.",
                "es": "Ejecutar delimitación de zona de exclusión y sincronización de válvula de pie homem-morto.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Zona de Exclusão e Raio de Isolamento",
                    "en": "Exclusion Zone Radius",
                    "es": "Radio de Zona de Exclusión",
                  },
                  body: {
                    "pt-BR": "É proibida a permanência de qualquer pessoa não envolvida na operação dentro de um raio mínimo de 10 a 15 metros do ponto de hidrojato. A área deve ser isolada com cones e correntes zebradas rígidas (placas de aviso: PERIGO - HIDROJATEAMENTO EM ANDAMENTO).",
                    "en": "Minimum 10-15m exclusion perimeter demarcated with rigid stanchions and danger signage.",
                    "es": "Perímetro mínimo de 10 a 15 metros señalizado con conos y cadenas rígidas.",
                  },
                },
                {
                  title: {
                    "pt-BR": "A Válvula de Pé 'Homem Morto' (Foot Dump Valve)",
                    "en": "Deadman Foot Dump Valve",
                    "es": "Válvula de Pie 'Hombre Muerto'",
                  },
                  body: {
                    "pt-BR": "A válvula de pé operada pelo lanceiro ou pelo ajudante de segurança desvia instantaneamente todo o fluxo de água para a descarga quando o operador retira o pé do pedal. NUNCA DEVE SER AMARRADA, TRAVADA OU CALÇADA COM MADEIRA.",
                    "en": "Foot dump valve redirects full pressure to exhaust instantly upon pedal release. It must NEVER be mechanically wedged or tied down.",
                    "es": "La válvula de pie desvía la presión al soltar el pedal. NUNCA debe amarrarse o trabarse.",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-hj-2-2",
              question: {
                "pt-BR": "DESAFIO DE CAMPO 4: Um colaborador de outra empreiteira fura a corrente de isolamento e caminha em direção ao tanque enquanto o lanceiro está com o jato acionado a 1.200 bar. Qual deve ser a reação imediata do ajudante de segurança na válvula de pé?",
                "en": "FIELD CHALLENGE 4: An unauthorized worker enters the exclusion zone while lance is active at 1,200 bar. What is the immediate safety tender response?",
                "es": "DESAFÍO 4: Un tercero ingresa al área de exclusión con el hidrojet encendido. ¿Cuál es la reacción inmediata?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Aliviar o pedal da válvula de pé imediatamente (cortando a pressão da lança), acionar o botão de emergência da bomba e advertir o intruso.",
                    "en": "Release the foot pedal immediately to dump line pressure, trigger emergency shutdown, and clear the intruder.",
                    "es": "Soltar el pedal de la válvula de pie de inmediato para cortar la presión y detener el equipo.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! A vida humana tem prioridade absoluta sobre a continuidade da limpeza. A primeira ação é despressurizar imediatamente a linha.",
                    "en": "CORRECT! Safety of life overrides production speed. Dump pressure instantly.",
                    "es": "¡CORRECTO! La seguridad humana es prioridad absoluta. Despresurice de inmediato.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Gritar com o colaborador para ele sair rápido, mantendo o jato ligado para não perder o ponto da limpeza.",
                    "en": "Yell at the worker while keeping pressure active.",
                    "es": "Gritarle al trabajador manteniendo el chorro encendido.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! Com protetor auricular duplo e o ruído ensurdecedor do jato, o colaborador não ouvirá e poderá ser atingido mortalmente.",
                    "en": "Incorrect! Industrial noise drowns out shouts and catastrophic injury can occur in seconds.",
                    "es": "Incorrecto. El ruido impide escuchar gritos y puede ocurrir un accidente fatal.",
                  },
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: "c-pintura-industrial-completo",
    slug: "pintura-industrial-tratamento-superficie",
    title: {
      "pt-BR": "Pintura Industrial, Tratamento de Superfície e Controle de Corrosão",
      "en": "Industrial Painting, Surface Treatment & Corrosion Control",
      "es": "Pintura Industrial, Tratamiento de Superficies y Control de Corrosión",
    },
    description: {
      "pt-BR": "Formação técnica completa: mecanismos de corrosão, preparação de substratos (decapagem e jateamento), química de tintas, aplicação e controle de qualidade.",
      "en": "Complete technical training: corrosion mechanisms, surface prep, paint chemistry, application methods, and QC inspection.",
      "es": "Capacitación técnica completa: corrosión, preparación de superficies, tipos de pinturas y control de calidad.",
    },
    longDescription: {
      "pt-BR": "Curso de qualificação profissional abrangendo todo o ciclo de vida do revestimento anticorrosivo na indústria: desde os fundamentos de corrosão e agressividade do meio ambiente até os métodos de limpeza química, jateamento abrasivo, formulação de primers e epóxis, métodos de pulverização e ensaios normativos de controle de qualidade e gestão de efluentes.",
      "en": "Professional qualification covering corrosion protection lifecycle: degradation fundamentals, aggressive atmospheres, chemical cleaning, abrasive blasting, primer and topcoat application, and non-destructive quality tests.",
      "es": "Curso profesional de protección anticorrosiva: corrosión, agresividad del medio, preparación de superficies, formulación de pinturas y ensayos de calidad.",
    },
    schoolId: "pintura-industrial",
    schoolName: {
      "pt-BR": "Pintura Industrial",
      "en": "Industrial Painting",
      "es": "Pintura Industrial",
    },
    workloadHours: 40,
    level: "intermediate",
    modality: "online",
    isMandatory: false,
    mandatoryFor: ["Pintor Industrial", "Inspetor de Pintura"],
    targetAudience: {
      "pt-BR": "Pintores industriais, jateadores, ajudantes de pintura, fiscais de qualidade e técnicos de manutenção em paradas.",
      "en": "Industrial painters, sandblasters, paint tenders, QC inspectors, and maintenance technicians.",
      "es": "Pintores industriales, arenadores, inspectores de calidad y técnicos de mantenimiento.",
    },
    modulesCount: 4,
    lessonsCount: 10,
    thumbnailGradient: "from-amber-600 to-orange-950",
    badgeCode: "PINT-IND",
    updatedAtDate: "2026-10-15",
    modules: [
      {
        id: "mod-pint-1",
        order: 1,
        title: {
          "pt-BR": "Módulo 1: Fundamentos de Corrosão e Degradação de Materiais",
          "en": "Module 1: Corrosion Fundamentals & Material Degradation",
          "es": "Módulo 1: Fundamentos de Corrosión y Degradación",
        },
        lessons: [
          {
            id: "les-pint-1",
            order: 1,
            title: {
              "pt-BR": "Aula 01: Introdução ao Tratamento de Superfície e Proteção dos Metais",
              "en": "Lesson 01: Introduction to Surface Treatment & Metal Protection",
              "es": "Clase 01: Introducción al Tratamiento de Superficies y Protección",
            },
            durationMinutes: 20,
            contentType: "video",
            videoUrl: "eNBpD6NZm5o",
            contentDetail: {
              objective: {
                "pt-BR": "Compreender o papel do tratamento de superfície na extensão da vida útil de estruturas metálicas e redução de custos industriais.",
                "en": "Understand surface treatment role in extending asset life and minimizing industrial losses.",
                "es": "Comprender el papel del tratamiento superficial en la vida útil de estructuras.",
              },
              introduction: {
                "pt-BR": "A corrosão metálica consome anualmente cerca de 3% a 4% do PIB mundial em perdas industriais. O tratamento de superfície é a barreira física e eletroquímica primária que impede a degradação de tanques, tubulações e estruturas.",
                "en": "Metallic corrosion consumes up to 4% of global GDP. Surface engineering is the frontline barrier against asset deterioration.",
                "es": "La corrosión genera enormes pérdidas industriales. El tratamiento de superficies es la barrera principal.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "O Custo da Corrosão na Indústria Pesada",
                    "en": "Corrosion Impact in Heavy Industry",
                    "es": "Impacto de la Corrosión Industrial",
                  },
                  body: {
                    "pt-BR": "Estruturas expostas a intempéries sem recobrimento sofrem oxidação contínua. A pintura técnica atua isolando o metal base da umidade e do oxigênio atmosférico, evitando paradas não programadas.",
                    "en": "Unprotected steel oxidizes continuously. Protective coatings insulate base metal from moisture and oxygen.",
                    "es": "El acero sin protección se oxida. La pintura aísla el metal de la humedad y el oxígeno.",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-pint-1",
              question: {
                "pt-BR": "DESAFIO 1: Por que a simples aplicação de tinta sobre uma chapa oxidada sem pré-tratamento não impede o avanço da corrosão?",
                "en": "CHALLENGE 1: Why does painting directly over rusted steel fail to stop corrosion?",
                "es": "DESAFÍO 1: ¿Por qué pintar sobre óxido sin preparar la superficie no detiene la corrosión?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Porque a ferrugem aprisiona ar e umidade sob a película, continuando a reação de oxidação oculta sob a tinta.",
                    "en": "Because rust traps moisture and oxygen underneath, continuing subsurface corrosion.",
                    "es": "Porque el óxido atrapa humedad y aire, continuando la corrosión oculta.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! A ferrugem é porosa e hidrofílica. Pintar sobre ela resulta em empolamento (blistering) e desplacamento prematuro.",
                    "en": "CORRECT! Rust is porous and hydrophilic, leading to rapid blistering and coating detachment.",
                    "es": "¡CORRECTO! El óxido es poroso y provoca ampollas y desprendimiento rápido de la película.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Porque a tinta reage quimicamente com o óxido transformando-o em vapor inflamável.",
                    "en": "Because paint reacts with rust to create flammable gas.",
                    "es": "Porque la pintura reacciona generando gases inflamables.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! A falha ocorre por falta de aderência mecânica e retenção de agentes oxidantes.",
                    "en": "Incorrect! Failure stems from mechanical adhesion loss and trapped corrosive agents.",
                    "es": "Incorrecto. La falla se debe a pérdida de adherencia y humedad atrapada.",
                  },
                },
              ],
            },
          },
          {
            id: "les-pint-2",
            order: 2,
            title: {
              "pt-BR": "Aula 02: Agressividade do Ambiente e Mecanismos de Corrosão",
              "en": "Lesson 02: Environmental Aggressiveness & Corrosion Mechanisms",
              "es": "Clase 02: Agresividad del Medio y Mecanismos de Corrosión",
            },
            durationMinutes: 22,
            contentType: "video",
            videoUrl: "7bL527_A8GA",
            contentDetail: {
              objective: {
                "pt-BR": "Identificar os diferentes graus de agressividade ambiental (marítimo, industrial, rural) e sua relação com a seleção do esquema de pintura.",
                "en": "Classify environmental corrosivity categories (marine, chemical, rural) to specify correct coating systems.",
                "es": "Clasificar la agresividad del ambiente según normas internacionales para seleccionar el esquema de pintura.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Categorias de Agressividade (ISO 12944)",
                    "en": "Corrosivity Categories (ISO 12944)",
                    "es": "Categorías de Corrosividad (ISO 12944)",
                  },
                  body: {
                    "pt-BR": "• C1 / C2 (Baixa): Ambientes internos climatizados ou rurais secos.\n• C3 (Média): Atmosferas urbanas com moderada poluição de SO2 e umidade.\n• C4 (Alta): Áreas industriais químicas e zonas costeiras com salinidade moderada.\n• C5 / CX (Muito Alta / Extrema): Orla marítima com maresia pesada, plantas offshore e plantas de celulose (altos teores de cloretos e sulfatos).",
                    "en": "Categories range from C1 (indoor dry) up to C5/CX (offshore marine and chemical plants with heavy salt/sulfur exposure).",
                    "es": "Desde C1 (interiores secos) hasta C5/CX (costero offshore con niebla salina y químicos agresivos).",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-pint-2",
              question: {
                "pt-BR": "DESAFIO 2: Em uma planta de celulose próxima ao litoral com alto índice de umidade e névoa salina, qual categoria de agressividade deve guiar o projeto de pintura?",
                "en": "CHALLENGE 2: In a pulp mill near the coast with heavy salt spray, which corrosivity category guides the paint scheme?",
                "es": "DESAFÍO 2: En una planta industrial cerca del mar con salinidad y humedad, ¿qué categoría aplica?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Categoria C1 (Muito Baixa), pois a estrutura fica coberta por galpão.",
                    "en": "Category C1 (Very Low), because the structure is covered.",
                    "es": "Categoría C1 (Muy Baja), por estar bajo techo.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! A condensação de cloretos em ambientes industriais costeiros exige esquemas para agressividade C5 ou superior.",
                    "en": "Incorrect! Industrial coastal condensation demands C5 or CX specifications.",
                    "es": "Incorrecto. La salinidad y condensación exigen protección C5 o superior.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Categoria C5 / CX (Muito Alta / Extrema), exigindo primer rico em zinco e epóxi de alta espessura.",
                    "en": "Category C5 / CX (Very High / Extreme), mandating zinc-rich primers and high-build epoxies.",
                    "es": "Categoría C5 / CX (Muy Alta / Extrema), requiriendo primer rico en zinc y epoxi de alto espesor.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! Ambientes com cloretos e agentes químicos necessitam de barreiras epóxi robustas com poliuretano alifático no acabamento.",
                    "en": "CORRECT! High salinity and chemical fallout mandate high performance zinc + epoxy + polyurethane systems.",
                    "es": "¡CORRECTO! Requiere esquemas robustos con primer de zinc, barrera epoxi y acabado poliuretano.",
                  },
                },
              ],
            },
          },
        ],
      },
      {
        id: "mod-pint-2",
        order: 2,
        title: {
          "pt-BR": "Módulo 2: Pré-Tratamento e Preparação da Superfície",
          "en": "Module 2: Pre-treatment & Surface Preparation",
          "es": "Módulo 2: Pretratamiento y Preparación de Superficies",
        },
        lessons: [
          {
            id: "les-pint-3",
            order: 1,
            title: {
              "pt-BR": "Aula 03: Limpeza Mecânica, Desengraxe e Decapagem Química",
              "en": "Lesson 03: Mechanical Cleaning, Degreasing & Chemical Pickling",
              "es": "Clase 03: Limpieza Mecánica, Desengrase y Decapado Químico",
            },
            durationMinutes: 24,
            contentType: "video",
            videoUrl: "BKy5BpFzh9k",
            contentDetail: {
              objective: {
                "pt-BR": "Conhecer os processos de remoção de óleos, graxas e carepas de laminação antes de qualquer processo de jateamento ou pintura.",
                "en": "Master degreasing and pickling processes to eliminate oils, grease, and mill scale before blasting.",
                "es": "Conocer los métodos de desengrase y decapado químico para eliminar contaminantes y cascarilla de laminación.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "A Regra Fundamental do Desengraxe Prévio",
                    "en": "The Prime Degreasing Rule",
                    "es": "Regla Fundamental del Desengrase Previo",
                  },
                  body: {
                    "pt-BR": "NUNCA jateie uma superfície contaminada com óleo ou graxa! O jateamento abrasivo espalha o óleo por toda a rugosidade do aço e contamina o abrasivo reciclado, impedindo a aderência da tinta.",
                    "en": "NEVER blast an oily surface! Blasting spreads grease deep into steel anchor profiles and contaminates blast media.",
                    "es": "¡NUNCA granalle sobre grasa! La granalla incrusta los aceites en el perfil de rugosidade arruinando la adherencia.",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-pint-3",
              question: {
                "pt-BR": "DESAFIO 3: Ao chegar em uma viga com respingos grossos de graxa pesada, qual a sequência correta de preparação?",
                "en": "CHALLENGE 3: On a steel beam covered in heavy grease, what is the mandatory sequence?",
                "es": "DESAFÍO 3: Ante una viga con manchas de grasa pesada, ¿cuál es la secuencia correcta?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "1º Limpeza com solvente/desengraxante biodegradável (ISO 8504-3); 2º Secagem; 3º Jateamento abrasivo ao padrão especificado.",
                    "en": "1st Solvent/detergent degreasing; 2nd Drying; 3rd Abrasive blasting to spec.",
                    "es": "1º Desengrase con solvente/biodegradable; 2º Secado; 3º Granallado abrasivo al patrón especificado.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! O desengraxe deve ser sempre a PRIMEIRA etapa, garantindo que o abrasivo encontre o substrato isento de filmes graxos.",
                    "en": "CORRECT! Degreasing must strictly precede blasting to prevent embedding contaminants into the steel anchor pattern.",
                    "es": "¡CORRECTO! El desengrase siempre antecede al arenado para evitar incrustar grasa en el perfil de anclaje.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Jatear com granalha de aço em alta velocidade para que o impacto 'queime' a graxa instantaneamente.",
                    "en": "Blast with high velocity grit to 'burn off' grease.",
                    "es": "Arenar a alta velocidad para 'quemar' la grasa con el impacto.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "GRAVE ERRO! O abrasivo contamina todo o lote de granalha e impregna o óleo nos microporos do metal.",
                    "en": "Severe error! Oil contaminates the entire media hopper and coats anchor valleys.",
                    "es": "¡Error grave! La granalla se contamina y distribuye el aceite en los valles del acero.",
                  },
                },
              ],
            },
          },
          {
            id: "les-pint-4",
            order: 2,
            title: {
              "pt-BR": "Aula 04: Preparação de Superfície e Padrões de Jateamento (Sa 2 / Sa 2.5 / Sa 3)",
              "en": "Lesson 04: Surface Prep & Abrasive Blasting Standards (Sa 2 / Sa 2.5 / Sa 3)",
              "es": "Clase 04: Preparación de Superficies y Patrones de Granallado (Sa 2.5 / Sa 3)",
            },
            durationMinutes: 28,
            contentType: "video",
            videoUrl: "ddHneOWQW9A",
            contentDetail: {
              objective: {
                "pt-BR": "Identificar visualmente e normativamente os graus de limpeza por jateamento abrasivo conforme a norma ISO 8501-1 / SSPC-SP.",
                "en": "Identify visual cleanliness grades per ISO 8501-1 (Sa 1, Sa 2, Sa 2.5, Sa 3) and SSPC standards.",
                "es": "Identificar los grados de limpieza por chorreado abrasivo según norma ISO 8501-1 y SSPC.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Escala Visual de Jateamento Abrasivo (ISO 8501-1)",
                    "en": "Visual Blasting Scale (ISO 8501-1)",
                    "es": "Escala Visual de Granallado (ISO 8501-1)",
                  },
                  body: {
                    "pt-BR": "• Sa 1 (Ligeiro): Remoção superficial de carepa solta e tinta frouxa.\n• Sa 2 (Comercial): Quase toda a carepa e ferrugem é removida (mínimo de 67% limpo).\n• Sa 2.5 (Ao Metal Quase Branco): Padrão mais utilizado na indústria pesada (mínimo de 95% da superfície totalmente limpa, sombras leves toleradas).\n• Sa 3 (Ao Metal Branco): 100% livre de qualquer mancha, oxidação ou sombra (metal perfeitamente uniforme).",
                    "en": "• Sa 2: Commercial blast.\n• Sa 2.5: Near-white metal (95% clean, standard for heavy industry).\n• Sa 3: White metal (100% clean, required for tank linings).",
                    "es": "• Sa 2: Arenado comercial.\n• Sa 2.5: Metal casi blanco (95% limpio, estándar industrial).\n• Sa 3: Metal blanco al 100% (obligatorio en tanques).",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-pint-4",
              question: {
                "pt-BR": "DESAFIO 4: Em paradas industriais da celulose e petróleo, qual o padrão de jateamento mais requisitado para aplicação de primers epóxi de alta performance?",
                "en": "CHALLENGE 4: Which blasting standard is most widely specified for high-performance epoxy primers in industrial shutdowns?",
                "es": "DESAFÍO 4: ¿Cuál es el patrón de arenado más solicitado para esquemas epoxi de alto desempeño?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Padrão Sa 2.5 (Jateamento ao Metal Quase Branco / SSPC-SP 10).",
                    "en": "Standard Sa 2.5 (Near-White Blast Cleaning / SSPC-SP 10).",
                    "es": "Patrón Sa 2.5 (Metal Casi Blanco / SSPC-SP 10).",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! O padrão Sa 2.5 garante o balanço ideal entre pureza superficial e produtividade para adesão máxima do primer.",
                    "en": "CORRECT! Sa 2.5 yields the optimal trade-off of cleanliness and application efficiency for primer adhesion.",
                    "es": "¡CORRECTO! Sa 2.5 es el estándar de oro en la industria para adherencia de primers epóxicos.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Padrão Sa 1 (Escovação manual leve com escova de aço).",
                    "en": "Standard Sa 1 (Light brush-off).",
                    "es": "Patrón Sa 1 (Cepillado manual leve).",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! Sa 1 não atinge rugosidade nem pureza suficiente para tintas de alta espessura.",
                    "en": "Incorrect! Sa 1 leaves mill scale and lacks anchor profile for high-build coats.",
                    "es": "Incorrecto. Sa 1 deja cascarilla y no genera perfil de rugosidad suficiente.",
                  },
                },
              ],
            },
          },
        ],
      },
      {
        id: "mod-pint-3",
        order: 3,
        title: {
          "pt-BR": "Módulo 3: Tintas, Química dos Revestimentos e Métodos de Aplicação",
          "en": "Module 3: Coating Chemistry, Formulations & Application Methods",
          "es": "Módulo 3: Química de Pinturas, Recubrimientos y Aplicación",
        },
        lessons: [
          {
            id: "les-pint-5",
            order: 1,
            title: {
              "pt-BR": "Aula 05: Fundamentos da Pintura Industrial: Resinas, Solventes e Pigmentos",
              "en": "Lesson 05: Industrial Paint Fundamentals: Resins, Solvents & Pigments",
              "es": "Clase 05: Componentes de la Pintura: Resinas, Solventes y Pigmentos",
            },
            durationMinutes: 25,
            contentType: "video",
            videoUrl: "952Rohf4baQ",
            contentDetail: {
              objective: {
                "pt-BR": "Entender os 4 componentes fundamentais de uma tinta industrial (veículo não-volátil, pigmentos, solventes/diluentes e aditivos) e suas funções.",
                "en": "Understand the 4 core components of industrial coatings: resin/binder, pigments, solvents/thinners, and additives.",
                "es": "Comprender los 4 componentes de las pinturas industriales y sus funciones.",
              },
            },
            challenge: {
              id: "chal-pint-5",
              question: {
                "pt-BR": "DESAFIO 5: Qual componente da tinta é o responsável por formar a película contínua aderida e conferir as resistências mecânica e química principais?",
                "en": "CHALLENGE 5: Which paint component forms the continuous adhered film providing chemical/mechanical resistance?",
                "es": "DESAFÍO 5: ¿Qué componente forma la película continua y otorga la resistencia química?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "A Resina (Veículo Fixo / Ligante).",
                    "en": "The Resin (Binder / Non-volatile vehicle).",
                    "es": "La Resina (Ligante / Vehículo Fijo).",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! A resina (epóxi, poliuretano, silicato de etila) é a espinha dorsal que une os pigmentos e ancora no metal.",
                    "en": "CORRECT! The resin binds pigments together and anchors the film to the substrate.",
                    "es": "¡CORRECTO! La resina es la matriz que adhiere al sustrato y otorga la resistencia.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "O Solvente, pois ele queima na superfície e endurece o metal.",
                    "en": "The solvent, because it burns onto the surface.",
                    "es": "El solvente, porque quema la superficie.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! O solvente evapora totalmente durante a secagem e não faz parte da película seca final.",
                    "en": "Incorrect! Solvents evaporate entirely during curing and do not remain in the dry film.",
                    "es": "Incorrecto. El solvente se evapora completamente en el curado.",
                  },
                },
              ],
            },
          },
          {
            id: "les-pint-6",
            order: 2,
            title: {
              "pt-BR": "Aula 06: Tipos de Tintas Industriais: Epóxi, Poliuretano e Ricos em Zinco",
              "en": "Lesson 06: Industrial Paint Types: Epoxy, Polyurethane & Zinc-Rich Primers",
              "es": "Clase 06: Tipos de Pinturas Industriales: Epoxi, Poliuretano y Ricos en Zinc",
            },
            durationMinutes: 26,
            contentType: "video",
            videoUrl: "2CdntiI11ds",
            contentDetail: {
              objective: {
                "pt-BR": "Diferenciar a função de cada camada: Primer de sacrifício galvânico (Zinco), Intermediário de barreira (Epóxi Mastic/High Build) e Acabamento resistente a UV (Poliuretano Alifático).",
                "en": "Differentiate coat roles: galvanic sacrifice primer (zinc), barrier mastic (epoxy), and UV-resistant finish (aliphatic PU).",
                "es": "Diferenciar capas: primer galvánico, capa intermedia barrera y acabado resistente a UV.",
              },
            },
            challenge: {
              id: "chal-pint-6",
              question: {
                "pt-BR": "DESAFIO 6: Por que a tinta epóxi NÃO deve ser usada como camada final de acabamento em estruturas externas expostas diretamente à luz do sol?",
                "en": "CHALLENGE 6: Why should epoxy NOT be used as the exterior topcoat exposed directly to sunlight?",
                "es": "DESAFÍO 6: ¿Por qué la pintura epoxi NO debe usarse como acabado final al sol?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Porque a radiação ultravioleta do sol quebra as cadeias da resina epóxi, causando calcinação (tiza/chalking) e descoloração.",
                    "en": "Because UV solar radiation degrades epoxy resin chains, inducing chalking and color fade.",
                    "es": "Porque los rayos UV degradan la resina epóxica causando tizado (calcinação) y decoloración.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! O epóxi é um excelente produto de barreira interna, mas para intempéries externas o acabamento deve ser Poliuretano Alifático.",
                    "en": "CORRECT! Epoxy degrades under sunlight; aliphatic polyurethane must be applied as topcoat.",
                    "es": "¡CORRECTO! El epoxi se tiza al sol; para exteriores se debe sellar con poliuretano alifático.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Porque o calor do sol faz o epóxi amolecer e virar líquido novamente.",
                    "en": "Because heat liquefies cured epoxy.",
                    "es": "Porque el calor vuelve líquida la pintura.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! O epóxi é termofixo e não funde com o calor ambiente; o problema é a degradação fotoquímica pelos raios UV.",
                    "en": "Incorrect! Epoxy is thermoset and will not melt; failure is photochemical UV degradation.",
                    "es": "Incorrecto. El epoxi es termoestable; la falla es la fotodegradación por rayos UV.",
                  },
                },
              ],
            },
          },
          {
            id: "les-pint-7",
            order: 3,
            title: {
              "pt-BR": "Aula 07: Processos e Equipamentos de Aplicação: Trincha, Rolo e Pistola Airless",
              "en": "Lesson 07: Application Equipment: Brush, Roller & Airless Spray",
              "es": "Clase 07: Equipos de Aplicación: Brocha, Rodillo y Pistola Airless",
            },
            durationMinutes: 30,
            contentType: "video",
            videoUrl: "dxrft0a4sQE",
            contentDetail: {
              objective: {
                "pt-BR": "Dominar a seleção de bicos, pressão e técnica de sobreposição (passadas cruzadas 50%) com bomba Airless para produção industrial.",
                "en": "Master spray tip selection, fluid pressure, and 50% overlap technique with airless pumps.",
                "es": "Dominar selección de boquillas, presión y técnica de traslape al 50% con bomba Airless.",
              },
            },
            challenge: {
              id: "chal-pint-7",
              question: {
                "pt-BR": "DESAFIO 7: Em estruturas com cantos vivos, soldas e frestas, qual procedimento obrigatório deve anteceder a demão geral com pistola airless?",
                "en": "CHALLENGE 7: On structural steel welds, sharp edges, and bolt clusters, what mandatory prep precedes airless spraying?",
                "es": "DESAFÍO 7: En bordes afilados, soldaduras y pernos, ¿qué procedimiento previo es obligatorio?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Pintura de reforço com trincha (Stripe Coat / Demão de Trincha em Cantos e Soldas).",
                    "en": "Stripe coating by brush on all edges, welds, and crevices.",
                    "es": "Pintura de refuerzo con brocha (Stripe Coat) en cantos y cordones de soldadura.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! A tensão superficial da tinta na pulverização tende a fugir de cantos vivos. A trincha manual garante a espessura mínima necessária nessas áreas críticas.",
                    "en": "CORRECT! Paint surface tension pulls coating away from sharp edges; stripe coating by brush guarantees required film thickness.",
                    "es": "¡CORRECTO! La tensión superficial adelgaza la pintura en bordes; la brocha asegura el espesor necesario.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Aproximar o bico da pistola airless a menos de 5 cm do canto com pressão máxima.",
                    "en": "Hold airless gun 5 cm from corners with maximum pressure.",
                    "es": "Acercar la pistola airless a 5 cm con presión máxima.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! Isso causa escorrimento violento, porosidade e bolhas por aprisionamento de solvente.",
                    "en": "Incorrect! This causes severe runs, sags, and solvent entrapment pinholes.",
                    "es": "Incorrecto. Provoca escurrimiento severo y ampollas por solvente atrapado.",
                  },
                },
              ],
            },
          },
          {
            id: "les-pint-8",
            order: 4,
            title: {
              "pt-BR": "Aula 08: Recobrimentos Metálicos Protetores e Galvanização",
              "en": "Lesson 08: Metallic Protective Coatings & Galvanizing",
              "es": "Clase 08: Recubrimientos Metálicos Protectores y Galvanizado",
            },
            durationMinutes: 24,
            contentType: "video",
            videoUrl: "ujWWOrmBIpY",
            contentDetail: {
              objective: {
                "pt-BR": "Compreender a proteção catódica por galvanização a fogo, metalização por aspersão térmica (TSA) e compatibilidade com tintas.",
                "en": "Understand galvanic cathodic protection by hot-dip galvanizing, thermal spray aluminum (TSA), and duplex systems.",
                "es": "Comprender la protección catódica por galvanizado en caliente y compatibilidad de esquemas dúplex.",
              },
            },
            challenge: {
              id: "chal-pint-8",
              question: {
                "pt-BR": "DESAFIO 8: Como se chama o sistema de altíssima durabilidade que combina galvanização a fogo com posterior pintura líquida?",
                "en": "CHALLENGE 8: What is the high-durability system combining hot-dip galvanizing with subsequent liquid coating called?",
                "es": "DESAFÍO 8: ¿Cómo se denomina el sistema de alta durabilidad que combina galvanizado y pintura?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Sistema Duplex (Proteção por Efeito Sinérgico).",
                    "en": "Duplex System (Synergistic Protection Effect).",
                    "es": "Sistema Dúplex (Protección por Efecto Sinérgico).",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! O Sistema Duplex proporciona uma vida útil até 2,5 vezes maior do que a soma das duas proteções isoladas.",
                    "en": "CORRECT! Duplex systems deliver service lives up to 2.5x longer than the sum of both systems alone.",
                    "es": "¡CORRECTO! El sistema dúplex multiplica la vida útil al proteger la capa de zinc del desgaste directo.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Sistema Monolítico de Fusão.",
                    "en": "Monolithic Fusion System.",
                    "es": "Sistema Monolítico de Fusión.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! A terminologia técnica e normativa correta é Sistema Duplex.",
                    "en": "Incorrect! Standard engineering term is Duplex System.",
                    "es": "Incorrecto. El término técnico normativo es Sistema Dúplex.",
                  },
                },
              ],
            },
          },
        ],
      },
      {
        id: "mod-pint-4",
        order: 4,
        title: {
          "pt-BR": "Módulo 4: Controle de Qualidade, Ensaios e Gestão Ambiental",
          "en": "Module 4: Quality Control, Inspection Tests & Environmental Safety",
          "es": "Módulo 4: Control de Calidad, Ensayos y Medio Ambiente",
        },
        lessons: [
          {
            id: "les-pint-9",
            order: 1,
            title: {
              "pt-BR": "Aula 09: Inspeção e Controle de Qualidade: Espessura Úmida, Seca e Teste de Aderência",
              "en": "Lesson 09: QC Inspection: Wet Film, Dry Film Thickness (DFT) & Adhesion",
              "es": "Clase 09: Control de Calidad: Espesor Húmedo, Espesor Seco (EPH/EPS) y Adherencia",
            },
            durationMinutes: 28,
            contentType: "video",
            videoUrl: "sYlm1isRgx0",
            contentDetail: {
              objective: {
                "pt-BR": "Executar medições de Espessura de Película Úmida (pente medidor EPH), Espessura de Película Seca (EPS magnético / ultrassônico) e ensaio de aderência em corte em X (ASTM D3359).",
                "en": "Conduct wet film thickness (WFT comb), dry film thickness (magnetic/ultrasonic DFT gauge), and cross-cut adhesion tests.",
                "es": "Medir espesor húmedo (peine), espesor seco (galgas magnéticas) y ensayo de adherencia por corte.",
              },
            },
            challenge: {
              id: "chal-pint-9",
              question: {
                "pt-BR": "DESAFIO 9: Se uma tinta epóxi possui 80% de Sólidos por Volume (SV) e a especificação de projeto exige EPS de 200 micras, qual Espessura de Película Úmida (EPH) o pintor deve manter no pente durante a aplicação?",
                "en": "CHALLENGE 9: If an epoxy has 80% Solids by Volume and project requires 200 µm DFT, what Wet Film Thickness (WFT) must be measured on the comb?",
                "es": "DESAFÍO 9: Con 80% de sólidos por volumen y EPS requerido de 200 micras, ¿qué espesor húmedo (EPH) debe medirse?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "250 micras (Fórmula: EPH = EPS / (SV / 100) -> 200 / 0.8 = 250 µm).",
                    "en": "250 µm (Formula: WFT = DFT / (SV / 100) -> 200 / 0.8 = 250 µm).",
                    "es": "250 micras (Fórmula: EPH = EPS / (SV / 100) -> 200 / 0.8 = 250 µm).",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! O cálculo de EPH é o ensaio de controle de processo mais importante para garantir que, após evaporação do solvente, o filme atinja exatamente as 200 micras exigidas.",
                    "en": "CORRECT! Real-time WFT tracking ensures precise target DFT upon curing.",
                    "es": "¡CORRECTO! El cálculo de EPH garantiza que al secar se alcance exactamente el espesor de proyecto.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "160 micras (Multiplicando 200 por 0.8).",
                    "en": "160 µm (Multiplying 200 by 0.8).",
                    "es": "160 micras (Multiplicando 200 por 0.8).",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! Como o solvente evapora, o filme úmido deve ser MAIOR do que o filme seco, nunca menor.",
                    "en": "Incorrect! Solvent loss causes film shrinkage; wet film must always exceed dry target.",
                    "es": "Incorrecto. Como el solvente se evapora, la película húmeda siempre debe ser mayor a la seca.",
                  },
                },
              ],
            },
          },
          {
            id: "les-pint-10",
            order: 2,
            title: {
              "pt-BR": "Aula 10: Tratamento de Efluentes, Resíduos e Gestão Ambiental na Pintura Industrial",
              "en": "Lesson 10: Effluent Treatment, Hazardous Waste & Environmental Safety in Painting",
              "es": "Clase 10: Tratamiento de Efluentes, Residuos Peligrosos y Gestión Ambiental",
            },
            durationMinutes: 22,
            contentType: "video",
            videoUrl: "sfsPVTBX2U8",
            contentDetail: {
              objective: {
                "pt-BR": "Aplicar as normas de descarte e contenção de solventes residuais, borra de tinta, abrasivos usados e emissão de Compostos Orgânicos Voláteis (VOC).",
                "en": "Comply with waste segregation, hazardous sludge disposal, spent blast media management, and VOC emission controls.",
                "es": "Aplicar normas de disposición de solventes, lodos de pintura, granalla usada y control de emisiones VOC.",
              },
            },
            challenge: {
              id: "chal-pint-10",
              question: {
                "pt-BR": "DESAFIO 10: Ao término da jornada de pintura, o que deve ser feito com o solvente sujo utilizado na limpeza da bomba airless e pistolas?",
                "en": "CHALLENGE 10: At the end of the shift, what is the mandatory disposal procedure for solvent used in pump flushing?",
                "es": "DESAFÍO 10: Al terminar el turno, ¿qué se debe hacer con el solvente usado en la limpieza de la bomba airless?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Armazenar em tambor metálico identificado para resíduo Classe I (Perigoso), hermeticamente fechado e aterrado, para destinação a empresa licenciada.",
                    "en": "Store in grounded, airtight steel drum labeled for Class I Hazardous Waste for licensed recycler disposal.",
                    "es": "Almacenar en tambor rotulado como Residuo Peligroso Clase I, hermético y con conexión a tierra.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! Solventes e borras são inflamáveis e tóxicos (Classe I). É estritamente proibido o descarte em rede de esgoto ou solo.",
                    "en": "CORRECT! Solvents are flammable Class I toxics. Dumping down drains or on soil violates environmental laws.",
                    "es": "¡CORRECTO! Los solventes son inflamables y tóxicos. El descarte en desagües o suelo es delito ambiental.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Despejar na canaleta de drenagem pluvial do pátio para que evapore mais rápido ao sol.",
                    "en": "Dump into stormwater drains to let sunlight evaporate it.",
                    "es": "Tirar en el desagüe pluvial para que se evapore al sol.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "CRIME AMBIENTAL GRAVÍSSIMO! Contamina lençóis freáticos e mananciais, passível de embargo e prisão.",
                    "en": "Severe environmental crime! Contaminates water tables and creates explosion hazards.",
                    "es": "¡Delito ambiental grave! Contamina aguas y genera riesgo de explosión.",
                  },
                },
              ],
            },
          },
        ],
      },
    ],
    finalAssessment: {
      id: "exam-pintura-final",
      order: 1,
      title: {
        "pt-BR": "Avaliação Teórica de Qualificação em Pintura Industrial e Corrosão",
        "en": "Theoretical Qualification Exam in Industrial Painting & Corrosion",
        "es": "Evaluación Teórica de Calificación en Pintura Industrial y Corrosión",
      },
      description: {
        "pt-BR": "Exame formal de certificação abordando graus de agressividade ambiental, padrões de jateamento Sa 2.5/Sa 3, cálculo de película úmida (EPH), formulação de tintas e ensaios de qualidade.",
        "en": "Formal certification exam covering environmental corrosivity, Sa 2.5/Sa 3 blasting standards, wet film thickness calculations, coating chemistry, and quality tests.",
        "es": "Examen formal de certificación que abarca corrosividad, granallado Sa 2.5, cálculo de EPH, formulación de pinturas y ensayos de calidad.",
      },
      scope: "course",
      estimatedMinutes: 45,
      questionsCount: 8,
      passingScorePercent: 70,
      maxAttempts: 3,
      isAvailable: true,
      availabilityNotice: {
        "pt-BR": "Avaliação liberada após a conclusão dos 4 módulos técnicos.",
        "en": "Exam available upon completing the 4 technical modules.",
        "es": "Evaluación habilitada tras concluir los 4 módulos técnicos.",
      },
      questions: [
        {
          id: "q-1",
          order: 1,
          question: {
            "pt-BR": "1. Qual é a principal consequência de aplicar uma demão de primer epóxi diretamente sobre uma superfície metálica com carepa de laminação intacta?",
            "en": "1. What is the primary consequence of applying epoxy primer directly over intact mill scale?",
            "es": "1. ¿Cuál es la consecuencia principal de aplicar primer epoxi sobre cascarilla de laminación intacta?",
          },
          options: [
            {
              id: "q1-a",
              text: {
                "pt-BR": "A carepa se desprende com o tempo devido a tensões mecânicas e diferença de dilatação térmica, provocando o desplacamento de todo o sistema de pintura.",
                "en": "Mill scale detaches over time due to thermal stress and mechanical shocks, popping off the paint film.",
                "es": "La cascarilla se desprende con el tiempo por dilatación térmica, arrancando la pintura.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A carepa de laminação possui coeficiente de dilatação térmica diferente do aço base e é catódica em relação ao ferro, acelerando a corrosão galvânica e desplacando a tinta.",
                "en": "Correct! Mill scale is cathodic to iron and exhibits differential expansion, leading to severe delamination.",
                "es": "¡Correcto! La cascarilla tiene diferente dilatación y causa desprendimiento catastrófico.",
              },
            },
            {
              id: "q1-b",
              text: {
                "pt-BR": "A carepa absorve a tinta e aumenta a espessura seca sem nenhum prejuízo estrutural.",
                "en": "Mill scale absorbs paint, increasing dry film thickness safely.",
                "es": "La cascarilla absorbe la pintura aumentando el espesor sin daños.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! A carepa não é porosa nem flexível; ela quebra e solta.",
                "en": "Incorrect! Mill scale is brittle and non-elastic.",
                "es": "Incorrecto. La cascarilla es quebradiza y se fractura.",
              },
            },
          ],
        },
        {
          id: "q-2",
          order: 2,
          question: {
            "pt-BR": "2. Segundo a norma ISO 8501-1, qual padrão de jateamento abrasivo exige que pelo menos 95% da superfície esteja completamente livre de resíduos visíveis, tolerando apenas leves sombras?",
            "en": "2. According to ISO 8501-1, which abrasive blast standard requires at least 95% free of visible residues, tolerating only faint shadows?",
            "es": "2. Según ISO 8501-1, ¿qué grado de chorreado abrasivo exige al menos 95% libre de residuos visibles?",
          },
          options: [
            {
              id: "q2-a",
              text: {
                "pt-BR": "Padrão Sa 2.5 (Jateamento ao Metal Quase Branco).",
                "en": "Grade Sa 2.5 (Near-White Blast Cleaning).",
                "es": "Grado Sa 2.5 (Metal Casi Blanco).",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O padrão Sa 2.5 (equivalente ao SSPC-SP 10) é a especificação padrão para tintas de alta espessura na indústria pesada.",
                "en": "Correct! Sa 2.5 is the heavy industry benchmark specification for high-build systems.",
                "es": "¡Correcto! Sa 2.5 es el estándar universal en la industria pesada.",
              },
            },
            {
              id: "q2-b",
              text: {
                "pt-BR": "Padrão Sa 1 (Jateamento Ligeiro).",
                "en": "Grade Sa 1 (Light brush-off).",
                "es": "Grado Sa 1 (Chorreado Ligero).",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! Sa 1 apenas remove materiais soltos e não atinge o metal quase branco.",
                "en": "Incorrect! Sa 1 only removes loose deposits.",
                "es": "Incorrecto. Sa 1 solo desprende escamas sueltas.",
              },
            },
          ],
        },
        {
          id: "q-3",
          order: 3,
          question: {
            "pt-BR": "3. Se um projeto exige EPS (Espessura de Película Seca) de 150 micras e a tinta especificada possui 75% de Sólidos por Volume (SV), qual a EPH (Espessura de Película Úmida) mínima que o pintor deve medir no pente durante a aplicação?",
            "en": "3. If a spec requires 150 µm DFT with 75% Solids by Volume, what minimum WFT must be tracked on the wet film gauge comb?",
            "es": "3. Para 150 µm de EPS con 75% de sólidos en volumen, ¿qué EPH debe medir el aplicador con el peine?",
          },
          options: [
            {
              id: "q3-a",
              text: {
                "pt-BR": "200 micras (Cálculo: EPH = 150 / 0.75 = 200 µm).",
                "en": "200 µm (Formula: WFT = 150 / 0.75 = 200 µm).",
                "es": "200 micras (Cálculo: EPH = 150 / 0.75 = 200 µm).",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! EPH = (EPS / SV%) * 100 -> (150 / 75) * 100 = 200 micras úmidas.",
                "en": "Correct! Formula WFT = (DFT / %SV) * 100 yields 200 µm.",
                "es": "¡Correcto! La fórmula da exactamente 200 micras húmedas requeridas.",
              },
            },
            {
              id: "q3-b",
              text: {
                "pt-BR": "112,5 micras (Multiplicando 150 por 0.75).",
                "en": "112.5 µm (150 multiplied by 0.75).",
                "es": "112,5 micras (150 multiplicado por 0.75).",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! A espessura úmida deve ser sempre maior que a seca, pois o solvente evapora.",
                "en": "Incorrect! Wet film must exceed dry target because solvents evaporate.",
                "es": "Incorrecto. El espesor húmedo siempre es mayor por la pérdida de solvente.",
              },
            },
          ],
        },
        {
          id: "q-4",
          order: 4,
          question: {
            "pt-BR": "4. Por que em estruturas externas com forte insolação a tinta poliuretano alifático é aplicada sobre o epóxi?",
            "en": "4. Why is aliphatic polyurethane applied over epoxy on outdoor structures exposed to sunlight?",
            "es": "4. ¿Por qué se aplica poliuretano alifático sobre epoxi en estructuras exteriores expuestas al sol?",
          },
          options: [
            {
              id: "q4-a",
              text: {
                "pt-BR": "Porque o poliuretano alifático possui excelente estabilidade contra raios UV, impedindo que o epóxi sofra calcinação (tizado), perda de brilho e erosão precoce.",
                "en": "Because aliphatic polyurethane provides superior UV stability, shielding epoxy from chalking and photo-degradation.",
                "es": "Porque el poliuretano alifático resiste los rayos UV, evitando el tizado y degradación del epoxi.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O epóxi é uma excelente barreira anticorrosiva mecânica, mas se decompõe sob luz UV; o poliuretano funciona como escudo protetor contra intempéries.",
                "en": "Correct! Epoxy provides chemical barrier while polyurethane provides weather/UV retention.",
                "es": "¡Correcto! El epoxi aporta la barrera y el poliuretano la resistencia a la intemperie.",
              },
            },
            {
              id: "q4-b",
              text: {
                "pt-BR": "Porque o poliuretano alifático é mais barato e serve apenas para dar uma cor bonita sem função protetora.",
                "en": "Because PU is cheaper and only provides aesthetic color.",
                "es": "Porque el poliuretano es más barato y solo aporta color.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! O poliuretano é uma resina técnica nobre essencial para a retenção de cor e durabilidade externa.",
                "en": "Incorrect! Polyurethane is a high grade resin critical to long term durability.",
                "es": "Incorrecto. Es una resina técnica imprescindible para evitar la degradación del sistema.",
              },
            },
          ],
        },
        {
          id: "q-5",
          order: 5,
          question: {
            "pt-BR": "5. O que é a técnica de 'Stripe Coat' (Demão de Trincha de Reforço) e em quais locais ela deve ser obrigatoriamente realizada?",
            "en": "5. What is 'Stripe Coating' and where is it mandatorily applied?",
            "es": "5. ¿Qué es el 'Stripe Coat' y dónde debe aplicarse obligatoriamente?",
          },
          options: [
            {
              id: "q5-a",
              text: {
                "pt-BR": "Aplicação prévia com trincha em cantos vivos, parafusos, frestas e cordões de solda antes da demão geral com pistola airless.",
                "en": "Prior brush application on sharp edges, fasteners, crevices, and weld seams before spray passes.",
                "es": "Aplicación previa con brocha en bordes afilados, pernos, hendiduras y soldaduras antes del airless.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Cantos vivos e soldas sofrem retração da película durante a secagem por tensão superficial. O stripe coat garante espessura suficiente nos pontos onde a corrosão costuma iniciar.",
                "en": "Correct! Surface tension thins coatings at edges. Stripe coating secures minimum barrier thickness where corrosion initiates first.",
                "es": "¡Correcto! En los bordes la pintura se adelgaza; el stripe coat previene el inicio de la corrosión.",
              },
            },
            {
              id: "q5-b",
              text: {
                "pt-BR": "Pintar listras coloridas zebradas na peça para sinalizar que o serviço foi finalizado.",
                "en": "Painting colored stripes to signal work completion.",
                "es": "Pintar líneas de advertencia para señalizar fin de obra.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! Stripe coat é uma técnica de reforço de espessura de película anticorrosiva.",
                "en": "Incorrect! Stripe coating is a technical thickness reinforcement procedure.",
                "es": "Incorrecto. Es un procedimiento de refuerzo anticorrosivo fundamental.",
              },
            },
          ],
        },
        {
          id: "q-6",
          order: 6,
          question: {
            "pt-BR": "6. Como funciona a proteção por 'sacrifício galvânico' proporcionada por primers ricos em zinco sobre o aço carbono?",
            "en": "6. How does galvanic cathodic protection work in zinc-rich primers applied over carbon steel?",
            "es": "6. ¿Cómo funciona la protección por 'sacrificio galvánico' en primers ricos en zinc sobre acero?",
          },
          options: [
            {
              id: "q6-a",
              text: {
                "pt-BR": "O zinco possui potencial eletroquímico mais negativo que o ferro; portanto, em caso de risco ou dano na película, o zinco se oxida preferencialmente protegendo o aço catodicamente.",
                "en": "Zinc has a more negative electrochemical potential than iron, oxidizing sacrificially to protect the base steel.",
                "es": "El zinc tiene potencial más negativo que el hierro, oxidándose preferentemente para proteger el acero.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O pó de zinco em contato íntimo com o metal base atua como ânodo galvânico de sacrifício, impedindo a corrosão por perda de elétrons do ferro.",
                "en": "Correct! Zinc particles act as sacrificial anodes in direct electrical contact with base metal.",
                "es": "¡Correcto! El zinc actúa como ánodo galvánico protegiendo el acero base.",
              },
            },
            {
              id: "q6-b",
              text: {
                "pt-BR": "O zinco derrete sobre o aço criando uma solda líquida que fecha todos os poros.",
                "en": "Zinc melts over steel creating a liquid weld sealing pores.",
                "es": "El zinc se funde con el calor sellando todos los poros.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! Não há fusão térmica na pintura líquida; o mecanismo é estritamente eletroquímico galvânico.",
                "en": "Incorrect! Mechanism is electrochemical, not thermal fusion.",
                "es": "Incorrecto. El mecanismo es electroquímico, no por fusión.",
              },
            },
          ],
        },
        {
          id: "q-7",
          order: 7,
          question: {
            "pt-BR": "7. Durante o ensaio de controle de aderência por corte em X (conforme ASTM D3359 Método A), qual resultado indica a melhor aderência da película?",
            "en": "7. In an X-cut adhesion test per ASTM D3359 Method A, which classification indicates superior adhesion?",
            "es": "7. En un ensayo de adherencia por corte en X (ASTM D3359 Método A), ¿qué resultado indica mejor adherencia?",
          },
          options: [
            {
              id: "q7-a",
              text: {
                "pt-BR": "Classificação 5A (Nenhum destacamento de tinta ao longo da incisão ou na interseção do X).",
                "en": "Rating 5A (No peeling or removal along incisions or at intersection).",
                "es": "Clasificación 5A (Cero desprendimiento en las incisiones o intersección del corte).",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Na escala ASTM D3359 Método A, 5A é a aderência máxima perfeita (sem destacamento) e 0A é a falha total.",
                "en": "Correct! 5A represents zero detachment while 0A represents complete coating removal.",
                "es": "¡Correcto! 5A representa la máxima adherencia sin desprendimiento alguno.",
              },
            },
            {
              id: "q7-b",
              text: {
                "pt-BR": "Classificação 0A (Mais de 50% da tinta arrancada pela fita adesiva).",
                "en": "Rating 0A (Over 50% removal by tape).",
                "es": "Clasificación 0A (Más del 50% desprendido).",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! 0A é a pior nota da norma, significando reprovação imediata da pintura.",
                "en": "Incorrect! 0A represents complete failure and coating rejection.",
                "es": "Incorrecto. 0A es reprobación inmediata por desprendimiento masivo.",
              },
            },
          ],
        },
        {
          id: "q-8",
          order: 8,
          question: {
            "pt-BR": "8. Na limpeza e manutenção diária de equipamentos de pintura Airless, qual o procedimento correto com relação aos resíduos de solvente e aterramento elétrico?",
            "en": "8. In daily airless pump maintenance, what is mandatory regarding solvent waste and grounding?",
            "es": "8. En el mantenimiento de bombas airless, ¿cuál es el procedimiento obligatorio con solventes y tierra?",
          },
          options: [
            {
              id: "q8-a",
              text: {
                "pt-BR": "Conectar o cabo de aterramento da bomba à carcaça do balde metálico de descarte para dissipar eletricidade estática (evitando centelha e explosão) e segregar o solvente sujo como resíduo Classe I.",
                "en": "Attach equipment grounding clamp to metallic waste pail to discharge static (preventing spark/explosion) and segregate solvent as Class I hazardous waste.",
                "es": "Conectar el cable a tierra al balde metálico para evitar chispas por estática y clasificar el solvente como residuo Clase I.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O atrito do fluido em alta velocidade na mangueira gera eletricidade estática que pode inflamar vapores de solvente. O aterramento equipotencial salva vidas.",
                "en": "Correct! High velocity fluid friction creates static electricity capable of igniting solvent vapors. Static bonding prevents flash fires.",
                "es": "¡Correcto! La fricción genera electricidad estática inflamable; la conexión a tierra evita explosiones.",
              },
            },
            {
              id: "q8-b",
              text: {
                "pt-BR": "Usar baldes de plástico abertos e descartar o solvente no ralo de água pluvial da fábrica.",
                "en": "Use open plastic buckets and flush down storm drains.",
                "es": "Usar baldes plásticos abiertos y tirar el solvente al desagüe.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Extremamente perigoso e ilegal! Baldes plásticos acumulam estática e descarte em ralo é crime ambiental.",
                "en": "Extremely dangerous! Plastic holds static charge and drain dumping is a crime.",
                "es": "¡Peligroso e ilegal! El plástico acumula estática y es un delito ambiental grave.",
              },
            },
          ],
        },
      ],
    },
  },
  {
    id: "c-andaime-montagem-seguranca",
    slug: "montagem-inspecao-seguranca-andaimes",
    title: {
      "pt-BR": "Montagem, Inspeção e Segurança Operacional em Andaimes (NR-18 e NR-35)",
      "en": "Scaffolding Assembly, Inspection & Operational Safety (NR-18 & NR-35)",
      "es": "Montaje, Inspección y Seguridad Operacional en Andamios (NR-18 y NR-35)",
    },
    description: {
      "pt-BR": "Capacitação completa para montadores, encarregados e fiscais: componentes tubulares e modulares, travamentos, sapatas, procedimentos de APR, inspeção com etiquetas e montagem prática passo a passo.",
      "en": "Comprehensive training for scaffolders, foremen, and inspectors: tubular and system scaffolding, bracing, base plates, risk assessment, tagging systems, and step-by-step practical assembly.",
      "es": "Capacitación técnica integral: componentes tubulares y multidireccionales, arriostramientos, nivelación, permisos de trabajo en altura, tarjetas de inspección y montaje práctico.",
    },
    longDescription: {
      "pt-BR": "Curso operacional avançado focado na integridade estrutural e segurança de montagem de andaimes industriais e da construção civil. O programa aborda os preceitos mandatórios da NR-18 (Condições de Segurança na Indústria da Construção) e NR-35 (Trabalho em Altura), detalhando desde a seleção de terreno e sapatas ajustáveis, prumos e diagonais de travamento, montagem de guarda-corpo duplo com rodapé, cálculo de sobrecarga de pranchões, até o protocolo de liberação por etiquetas (Verde/Vermelha) e desmontagem sequencial segura.",
      "en": "Advanced operational qualification covering structural integrity and assembly safety for industrial and civil scaffolding. The curriculum strictly complies with NR-18 and NR-35 regulatory standards, addressing ground preparation, adjustable base plates, plumb and diagonal bracing, double guardrails with toeboards, deck load limits, inspection tagging procedures (Green/Red), and safe sequential dismantling.",
      "es": "Curso avanzado enfocado en la estabilidad estructural y seguridad en el montaje de andamios industriales. Cubre las normas NR-18 y NR-35, placas base, arriostramiento diagonal, barandillas dobles con rodapié, límites de carga, tarjetas de inspección y desmontaje seguro.",
    },
    schoolId: "andaimes-acesso",
    schoolName: {
      "pt-BR": "Montagem de Andaimes e Acesso Industrial",
      "en": "Scaffolding Assembly & Industrial Access",
      "es": "Montaje de Andamios y Acceso Industrial",
    },
    workloadHours: 40,
    level: "advanced",
    modality: "hybrid",
    isMandatory: true,
    mandatoryFor: ["Montador de Andaime", "Encarregado de Andaimes", "Fiscal de Segurança do Trabalho"],
    targetAudience: {
      "pt-BR": "Montadores de andaimes, encarregados de estruturas provisórias, ajudantes de montagem, técnicos em segurança do trabalho e supervisores de paradas industriais.",
      "en": "Scaffolders, temporary structure foremen, rigger helpers, safety technicians, and industrial turnaround supervisors.",
      "es": "Montadores de andamios, supervisores de estructuras temporales, técnicos de seguridad y jefes de mantenimiento.",
    },
    modulesCount: 5,
    lessonsCount: 9,
    thumbnailGradient: "from-amber-600 to-yellow-800",
    badgeCode: "AND-IND",
    updatedAtDate: "2026-10-15",
    modules: [
      {
        id: "mod-and-1",
        order: 1,
        title: {
          "pt-BR": "Módulo 1: Fundamentos Normativos e Componentes Estruturais",
          "en": "Module 1: Standards & Structural Scaffold Components",
          "es": "Módulo 1: Fundamentos Normativos y Componentes Estructurales",
        },
        lessons: [
          {
            id: "les-and-1",
            order: 1,
            title: {
              "pt-BR": "Aula 01: Introdução à Montagem de Andaimes e Diretrizes Normativas (NR-18 e NR-35)",
              "en": "Lesson 01: Introduction to Scaffolding Assembly & Regulatory Standards",
              "es": "Clase 01: Introducción al Montaje de Andamios y Normas Técnicas",
            },
            durationMinutes: 20,
            contentType: "video",
            videoUrl: "YGSi8_p5z9w",
            contentDetail: {
              objective: {
                "pt-BR": "Compreender os princípios basilares da montagem de andaimes segundo a NR-18 e NR-35, responsabilidades legais e mitigação de risco de queda.",
                "en": "Understand foundational scaffolding assembly standards under NR-18 and NR-35, legal liabilities, and fall prevention.",
                "es": "Comprender los principios de montaje de andamios según NR-18 y NR-35 y prevención de caídas.",
              },
              introduction: {
                "pt-BR": "O andaime é uma plataforma de trabalho temporária essencial na indústria e na construção civil. Por envolver trabalho contínuo em altura, falhas em sua concepção, base ou travamento podem desencadear colapsos catastróficos. O conhecimento aprofundado das normas vigentes é o primeiro passo para o risco zero.",
                "en": "Scaffolding is an indispensable temporary working platform in heavy industry. Because work is performed at elevation, structural failure can lead to catastrophic falls.",
                "es": "El andamio es una estructura temporal vital pero de alto riesgo. El cumplimiento normativo estricto es indispensable para evitar incidentes.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Marco Regulatório: Exigências da NR-18 e NR-35",
                    "en": "Regulatory Framework: NR-18 & NR-35 Requirements",
                    "es": "Marco Regulatorio: Exigencias de la NR-18 y NR-35",
                  },
                  body: {
                    "pt-BR": "A NR-18 estabelece os critérios técnicos para materiais, travamentos e liberação de plataformas provisórias, enquanto a NR-35 regulamenta todo trabalho executado acima de 2,00 metros do piso com risco de queda. Todo projeto de andaime com altura superior a limites normativos ou montado em balanço exige projeto assinado por profissional legalmente habilitado (PLH) com emissão de ART.",
                    "en": "NR-18 governs construction and industrial scaffolding design and safety, while NR-35 regulates all work at heights above 2 meters. Scaffolding exceeding prescriptive limits requires a certified engineer's structural design.",
                    "es": "La NR-18 establece especificaciones de materiales y plataformas, mientras la NR-35 regula el trabajo en altura por encima de 2 metros con riesgo de caída.",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-and-1",
              question: {
                "pt-BR": "DESAFIO 1: A partir de qual altura em relação ao nível inferior qualquer atividade com risco de queda é considerada trabalho em altura pela NR-35?",
                "en": "CHALLENGE 1: From what elevation threshold is an activity considered work at height under NR-35?",
                "es": "DESAFÍO 1: ¿A partir de qué altura se considera trabajo en altura según la norma NR-35?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "A partir de 2,00 metros de altura do nível inferior onde haja risco de queda.",
                    "en": "Above 2.00 meters from the lower level where fall hazard exists.",
                    "es": "A partir de 2,00 metros del nivel inferior donde exista riesgo de caída.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! Conforme o item 35.1.2 da NR-35, considera-se trabalho em altura toda atividade executada acima de 2,00 m do nível inferior, onde haja risco de queda.",
                    "en": "CORRECT! NR-35 clause 35.1.2 explicitly defines work at height as any activity performed above 2.00 meters with fall risk.",
                    "es": "¡CORRECTO! Según el acápite 35.1.2, se considera trabajo en altura a partir de 2 metros del nivel inferior con riesgo de caída.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Apenas a partir de 4,00 metros de altura em ambientes industriais.",
                    "en": "Only above 4.00 meters in heavy industrial plants.",
                    "es": "Únicamente a partir de 4,00 metros en entornos industriales.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! O patamar normativo geral no Brasil é 2,00 metros, exigindo medidas de proteção coletiva e individual.",
                    "en": "INCORRECT! The Brazilian national regulatory baseline is 2.00 meters.",
                    "es": "INCORRECTO. El límite normativo legal es de 2,00 metros.",
                  },
                },
              ],
            },
          },
          {
            id: "les-and-2",
            order: 2,
            title: {
              "pt-BR": "Aula 02: Tipos de Andaimes, Componentes e Acessórios de Apoio",
              "en": "Lesson 02: Scaffolding Classifications, Components & Base Fixtures",
              "es": "Clase 02: Tipos de Andamios, Componentes y Accesorios de Apoyo",
            },
            durationMinutes: 22,
            contentType: "video",
            videoUrl: "9_jQ3Q9j4os",
            contentDetail: {
              objective: {
                "pt-BR": "Identificar os diferentes modelos de andaimes (tubo com abraçadeira, multidirecional e fachadeiro) e suas peças críticas de apoio estrutural.",
                "en": "Identify types of scaffolding (tube & coupler, system ringlock/cuplok, facade frames) and structural base components.",
                "es": "Identificar los tipos de andamios y sus componentes críticos de soporte estructural.",
              },
              introduction: {
                "pt-BR": "A escolha correta do sistema estrutural de andaime depende da geometria da área de trabalho, interferências de tubulação e capacidade portante. Montadores qualificados conhecem detalhadamente a função de postes, travessas, longarinas, sapatas fixas e ajustáveis.",
                "en": "Selecting proper scaffolding depends on geometric layout, pipe routing, and load bearing capacity. Skilled scaffolders understand standards, ledgers, transoms, base plates, and jacks.",
                "es": "La elección del sistema depende de las interferencias y cargas. Es fundamental dominar postes, largueros, travesaños y placas de apoyo.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Sapatas Fixas e Ajustáveis: A Base da Estabilidade",
                    "en": "Base Plates & Screw Jacks: Foundation Stability",
                    "es": "Placas Base y Husillos Niveladores: La Base de la Estabilidad",
                  },
                  body: {
                    "pt-BR": "Nenhum andaime pode ser apoiado diretamente sobre solo instável ou de forma improvisada com tijolos e calços frágeis. Em solos não pavimentados, utiliza-se pranchão de madeira contínuo sob as sapatas metálicas com espessura mínima de 3,8 cm para distribuir as cargas pontuais uniformemente e evitar recalque diferencial.",
                    "en": "Scaffolds must never rest on soft ground or makeshift blocks. On unpaved soil, continuous heavy timber sole boards (min 38mm thickness) under steel base plates distribute concentrated loads and prevent uneven settling.",
                    "es": "Nunca apoye andamios sobre bloques de hormigón huecos o tierra suelta. Use soleras de madera de espesor suficiente para repartir cargas.",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-and-2",
              question: {
                "pt-BR": "DESAFIO 2: Ao montar os postes iniciais de um andaime sobre solo natural compactado, qual é o item obrigatório para distribuição das cargas verticais?",
                "en": "CHALLENGE 2: When erecting standards on compacted natural soil, what is mandatory to distribute vertical loads?",
                "es": "DESAFÍO 2: Al levantar los postes sobre terreno natural, ¿qué elemento es obligatorio para repartir la carga?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Pranchões de madeira maciça de boa qualidade (tabiques/soleiras) sob as sapatas de aço, distribuindo o peso no solo.",
                    "en": "Solid timber sole boards beneath steel base plates to distribute weight onto the ground.",
                    "es": "Soleras de madera maciza bajo las placas base de acero para repartir la carga.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! A sapata de aço metálica deve assentar sobre um pranchão contínuo (soleira) que distribui a carga pontual, impedindo afundamento e perda de prumo.",
                    "en": "CORRECT! Sole boards distribute concentrated leg loads, preventing differential soil settlement and tower collapse.",
                    "es": "¡CORRECTO! Las soleras de madera bajo las placas base distribuyen el peso evitando hundimientos.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Apoio direto dos tubos de aço na terra sem sapata metálica para aumentar a aderência.",
                    "en": "Direct placement of steel tubes onto soil without base plates for ground grip.",
                    "es": "Apoyo directo de los tubos sobre la tierra sin placas de base.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO E GRAVÍSSIMO! O tubo de aço penetra facilmente no solo, gerando desaprumo e colapso imediato da estrutura.",
                    "en": "EXTREMELY DANGEROUS! Tubes penetrate soft soil, causing severe tilt and immediate failure.",
                    "es": "¡PELIGRO CRÍTICO! El tubo de acero se entierra en el suelo provocando el colapso.",
                  },
                },
              ],
            },
          },
        ],
      },
      {
        id: "mod-and-2",
        order: 2,
        title: {
          "pt-BR": "Módulo 2: Procedimentos de Segurança e APR no Trabalho em Altura",
          "en": "Module 2: Scaffolding Safety Protocols & JHA in Working at Heights",
          "es": "Módulo 2: Procedimientos de Seguridad y AST en Trabajo en Altura",
        },
        lessons: [
          {
            id: "les-and-3",
            order: 3,
            title: {
              "pt-BR": "Aula 03: Análise Preliminar de Risco (APR), Permissão de Trabalho (PT) e Isolamento",
              "en": "Lesson 03: Job Hazard Analysis (JHA), Work Permits & Barricading",
              "es": "Clase 03: Análisis Seguro de Trabajo (AST), Permisos de Trabajo y Aislamiento",
            },
            durationMinutes: 25,
            contentType: "video",
            videoUrl: "6Jf6fcvTwDI",
            contentDetail: {
              objective: {
                "pt-BR": "Dominar a elaboração e leitura de APR para montagem de andaimes, permissões de trabalho a quente/frio e isolamento da área de projeção de materiais.",
                "en": "Master JHA review for scaffold erection, permit-to-work protocols, and drop-zone perimeter barricading.",
                "es": "Elaborar AST para montaje de andamios, tramitar permisos de trabajo y delimitar zonas de caída de objetos.",
              },
              introduction: {
                "pt-BR": "Antes do aperto da primeira braçadeira, o canteiro precisa estar documentalmente e fisicamente preparado. O isolamento do piso inferior contra projeção de ferramentas ou componentes de aço é indispensável para proteger quem transita no nível térreo.",
                "en": "Before tightening the first coupler, the work zone must be physically and administratively secured. Drop-zone barricading protects pedestrians below.",
                "es": "Antes de comenzar el montaje físico, se debe asegurar el área inferior con señalización y delimitación perimetral rígida.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Zona de Exclusão e Raio de Queda",
                    "en": "Drop Zone & Exclusion Perimeter",
                    "es": "Zona de Exclusión y Radio de Caída",
                  },
                  body: {
                    "pt-BR": "Durante a montagem e desmontagem, a área inferior deve ser demarcada com cones, fitas ou correntes plásticas zebradas e placas de advertência ('PERIGO - MONTAGEM DE ANDAIME / QUEDA DE MATERIAIS'). O raio de isolamento deve cobrir a altura proporcional da estrutura para conter qualquer peça que venha a escorregar das mãos da equipe.",
                    "en": "During assembly and disassembly, the lower ground zone must be strictly barricaded with warning signs. The perimeter radius corresponds to scaffold height to capture dropped items.",
                    "es": "Señalizar el área de montaje con letreros de advertencia y cadenas perimetrales. Nadie no autorizado puede permanecer bajo la estructura.",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-and-3",
              question: {
                "pt-BR": "DESAFIO 3: O que deve ser rigorosamente feito na área térrea logo abaixo do andaime antes do início de qualquer atividade de montagem ou desmontagem?",
                "en": "CHALLENGE 3: What must be rigorously implemented at ground level below the scaffold before assembly starts?",
                "es": "DESAFÍO 3: ¿Qué medida debe implementarse rigurosamente en el suelo antes de montar o desmontar un andamio?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Isolar e sinalizar a área térrea com placas de advertência e cones/correntes, impedindo a passagem de pessoas no raio de queda de peças.",
                    "en": "Barricade and signpost the ground area with warning signs, preventing entry into the potential drop zone.",
                    "es": "Delimitar y señalizar la zona inferior con advertencias de peligro impidiendo el tránsito de personas.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! O isolamento da área de influência inferior é obrigatório na NR-18 e NR-35 para evitar acidentes com ferramentas ou peças em queda livre.",
                    "en": "CORRECT! Drop-zone isolation is strictly mandatory to protect personnel from dropped objects.",
                    "es": "¡CORRECTO! El acordonamiento inferior evita impactos graves por caída de herramientas o abrazaderas.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Apenas gritar para os transeuntes prestarem atenção caso uma peça comece a cair.",
                    "en": "Simply shout verbal warnings to pedestrians if a component begins falling.",
                    "es": "Solo avisar a viva voz a los transeúntes si cae alguna herramienta.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! Avisos verbais improvisados não constituem barreira de segurança e violam as normas regulamentadoras.",
                    "en": "INCORRECT! Shouting is unacceptable and violates safety governance.",
                    "es": "INCORRECTO. Las advertencias verbales no sustituyen las barreras físicas obligatorias.",
                  },
                },
              ],
            },
          },
          {
            id: "les-and-4",
            order: 4,
            title: {
              "pt-BR": "Aula 04: EPIs Específicos para Montador: Cinto Paraquedista, Talabarte Duplo e Trava-Quedas",
              "en": "Lesson 04: Scaffolder PPE: Full Body Harness, Twin Lanyards & Fall Arresters",
              "es": "Clase 04: EPP Específico: Arnés de Seguridad, Línea de Vida Doble y Anticaídas",
            },
            durationMinutes: 24,
            contentType: "video",
            videoUrl: "AFybQYZ6dWk",
            contentDetail: {
              objective: {
                "pt-BR": "Instruir sobre o uso correto do cinto tipo paraquedista com ponto dorsal e peitoral, talabarte em Y com absorvedor de energia e conexão 100% contínua.",
                "en": "Train on proper fitting of full body harness, twin-tail shock-absorbing lanyards, and 100% continuous tie-off.",
                "es": "Capacitar en el uso del arnés de cuerpo entero, cabo de doble vida con absorbedor de impacto y anclaje continuo.",
              },
              introduction: {
                "pt-BR": "O princípio fundamental da segurança do montador de andaime é o 'engate 100% do tempo'. Durante a subida e movimentação pela estrutura ainda incompleta, um dos conectores do talabarte duplo deve estar permanentemente ancorado em elemento estrutural capaz de resistir aos esforços de retenção de queda.",
                "en": "The golden rule for scaffolders is '100% continuous tie-off'. While transitioning across incomplete scaffolds, at least one hook must remain anchored to a structural point.",
                "es": "El montador debe permanecer anclado el 100% del tiempo utilizando talabartes de doble gancho con absorbedor de energía.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Regra do Ponto de Ancoragem e Zona Livre de Queda (ZLQ)",
                    "en": "Anchor Points & Minimum Fall Clearance (ZLQ)",
                    "es": "Puntos de Anclaje y Distancia Libre de Caída (ZLQ)",
                  },
                  body: {
                    "pt-BR": "O gancho do talabarte deve ser conectado preferencialmente acima da cabeça do montador (fator de queda 0). Jamais conecte em tubos soltos, diagonais sem travamento de topo ou eletrocalhas. Calcule a Zona Livre de Queda (ZLQ): comprimento do talabarte + extensão do absorvedor + altura do trabalhador + margem de segurança de 1 metro.",
                    "en": "Lanyard snap hooks should be anchored overhead whenever possible (fall factor 0). Never clip onto loose tubes or cable trays. Factor in fall clearance: lanyard length + shock pack deployment + worker height + 1m safety margin.",
                    "es": "El anclaje debe fijarse preferentemente por encima de los hombros. Calcule siempre la distancia libre de caída para evitar el impacto contra el suelo.",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-and-4",
              question: {
                "pt-BR": "DESAFIO 4: Qual é o procedimento obrigatório de retenção de queda para o montador que se movimenta em um nível ainda desprovido de guarda-corpo definitivo?",
                "en": "CHALLENGE 4: What is the mandatory fall protection procedure for a scaffolder moving on an unshielded level?",
                "es": "DESAFÍO 4: ¿Cuál es el procedimiento obligatorio para el montador que se desplaza en un nivel sin barandilla?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Manter conexão de 100% do tempo com talabarte duplo em Y, conectando um gancho antes de soltar o outro em ponto estruturalmente seguro.",
                    "en": "Maintain 100% tie-off using a twin-tail Y lanyard, hooking one snap before releasing the other on structural points.",
                    "es": "Mantener 100% de anclaje permanente con cabo de doble gancho en Y, conectando uno antes de soltar el otro.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! O sistema de ancoragem 100% com talabarte duplo garante que o colaborador nunca fique desprotegido durante suas transições.",
                    "en": "CORRECT! 100% tie-off with twin lanyards guarantees the technician is never unprotected during transitions.",
                    "es": "¡CORRECTO! El sistema de doble cabo asegura que el trabajador nunca quede desprotegido al avanzar.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Desconectar os dois ganchos simultaneamente para caminhar mais depressa até o final do pranchão.",
                    "en": "Unhook both lanyards simultaneously to walk faster along scaffold planks.",
                    "es": "Soltar ambos ganchos al mismo tiempo para caminar más rápido sobre los tablones.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO E PROIBIDO! Desconectar os dois ganchos anula a proteção contra quedas e é causa recorrente de acidentes fatais.",
                    "en": "FATAL VIOLATION! Unhooking both lanyards eliminates fall protection completely.",
                    "es": "¡PROHIBIDO! Desconectar ambos ganchos elimina la protección anticaídas.",
                  },
                },
              ],
            },
          },
        ],
      },
      {
        id: "mod-and-3",
        order: 3,
        title: {
          "pt-BR": "Módulo 3: Dimensionamento, Travamentos, Diagonais e Fixações",
          "en": "Module 3: Scaffolding Bracing, Ties & Structural Rigidity",
          "es": "Módulo 3: Arriostramiento, Amarres y Estabilidad Estructural",
        },
        lessons: [
          {
            id: "les-and-5",
            order: 5,
            title: {
              "pt-BR": "Aula 05: Travamentos Longitudinais, Diagonais e Prumo da Estrutura",
              "en": "Lesson 05: Longitudinal Bracing, Diagonal Stays & Vertical Alignment",
              "es": "Clase 05: Arriostramiento Longitudinal, Diagonales y Verticalidad",
            },
            durationMinutes: 26,
            contentType: "video",
            videoUrl: "ygx_JrCSktY",
            contentDetail: {
              objective: {
                "pt-BR": "Compreender as funções das diagonais de travamento para dissipar forças horizontais de vento e cargas dinâmicas, garantindo o prumo perfeito dos postes.",
                "en": "Understand diagonal bracing mechanics in dissipating horizontal wind loads and dynamic sway, ensuring plumb alignment.",
                "es": "Comprender la función del arriostramiento diagonal para contrarrestar esfuerzos de viento y asegurar la verticalidad.",
              },
              introduction: {
                "pt-BR": "Uma torre de andaime sem travamento diagonal tende a se deformar na forma de paralelogramo ao ser submetida a ventos ou peso de trabalhadores. As barras diagonais transformam os quadros retangulares em estruturas trianguladas rígidas e indeformáveis.",
                "en": "A scaffold tower without diagonal bracing tends to parallelogram under wind pressure or worker dynamic movement. Diagonal bracing creates rigid triangles that resist lateral forces.",
                "es": "Sin arriostramiento diagonal, los andamios pierden la verticalidad y sufren colapso lateral ante ráfagas de viento o movimiento.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "A Regra da Triangulação e Verificação de Prumo",
                    "en": "Triangulation Rules & Plumb Line Verification",
                    "es": "Regla de Triangulación y Comprobación de Aplomado",
                  },
                  body: {
                    "pt-BR": "O prumo dos postes verticais deve ser conferido a cada nível com nível de bolha magnético ou prumo de corda. A tolerância máxima de desaprumo não deve ultrapassar 1/500 da altura total da torre. Diagonais em zigue-zague ou em 'X' devem ser instaladas desde o primeiro lance.",
                    "en": "Standards must be verified for vertical plumb at every lift using magnetic spirit levels. Out-of-plumb deviation cannot exceed 1/500 of overall height. Continuous zig-zag or X-bracing must start from base level.",
                    "es": "Verificar la verticalidad de los postes en cada nivel con nivel de burbuja. La desviación no debe superar la tolerancia de 1/500 de la altura.",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-and-5",
              question: {
                "pt-BR": "DESAFIO 5: Por que as barras diagonais de contraventamento são indispensáveis na estrutura de qualquer andaime?",
                "en": "CHALLENGE 5: Why are diagonal sway braces indispensable in any scaffolding structure?",
                "es": "DESAFÍO 5: ¿Por qué las diagonales de arriostramiento son indispensables en la estructura de un andamio?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Porque elas triangulam os quadros retangulares, impedindo a torção e o tombamento lateral gerado pelo vento e movimentação de cargas.",
                    "en": "Because they triangulate rectangular frames, resisting lateral sway, torsion, and wind load collapse.",
                    "es": "Porque forman triángulos rígidos que evitan la deformación lateral provocada por el viento y las cargas.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! A triangulação geométrica elimina os graus de liberdade de movimentação lateral da estrutura, garantindo rigidez contra tombamento.",
                    "en": "CORRECT! Triangular geometry prevents rhomboidal deformation under lateral forces.",
                    "es": "¡CORRECTO! La triangulación estructural es la base de la rigidez y resistencia al vuelco.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Servem exclusivamente como corrimão auxiliar para os montadores subirem mais rápido.",
                    "en": "They only serve as handrails for scaffolders to climb quicker.",
                    "es": "Sirven únicamente como apoyo para trepar por el exterior.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO E PROIBIDO! Diagonais são elementos estruturais de contraventamento e é expressamente proibido escalar pela diagonal externa.",
                    "en": "INCORRECT! Diagonals are structural bracing members; climbing external braces is strictly forbidden.",
                    "es": "INCORRECTO. Las diagonales son elementos resistentes y está prohibido trepar por ellas.",
                  },
                },
              ],
            },
          },
          {
            id: "les-and-6",
            order: 6,
            title: {
              "pt-BR": "Aula 06: Amarração e Ancoragem em Estruturas Fixas e Cálculo de Cargas",
              "en": "Lesson 06: Scaffold Ties, Wall Anchors & Safe Working Load Limits",
              "es": "Clase 06: Amarres a Estructuras Fijas y Capacidad de Carga",
            },
            durationMinutes: 28,
            contentType: "video",
            videoUrl: "KP72OmNZ9D4",
            contentDetail: {
              objective: {
                "pt-BR": "Dominar os métodos de amarração em colunas, vigas metálicas e concreto, além dos limites de peso admissíveis sobre os pisos de trabalho.",
                "en": "Master tying methods into building columns, steel girders, and concrete, along with safe floor load limits.",
                "es": "Dominar los sistemas de anclaje a elementos de hormigón y perfiles de acero, respetando la carga admisible.",
              },
              introduction: {
                "pt-BR": "Andaimamentos externos que ultrapassam a relação esbeltez de 4:1 (altura quatro vezes maior que a menor dimensão da base) necessitam obrigatoriamente de amarrações ou estaiamentos em estruturas sólidas existentes para resistir à força do vento.",
                "en": "Scaffold towers exceeding a 4:1 height-to-base ratio must be positively anchored or tied into rigid adjacent building structures to resist wind overturning.",
                "es": "Los andamios que superan la relación de esbeltez 4:1 requieren anclaje obligatorio a estructuras existentes para resistir el viento.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Tipos de Amarração: Através, Engastada e com Braçadeiras",
                    "en": "Tie Methods: Through-Ties, Reveal Ties & Box Ties",
                    "es": "Tipos de Amarre: Pasantes, de Caja y con Abrazaderas",
                  },
                  body: {
                    "pt-BR": "As amarrações devem resistir tanto à tração (puxão para fora) quanto à compressão (empurrão contra a parede). Jamais ancore andaimes em eletrocalhas, tubulações de incêndio, condutores elétricos ou chapas finas de isolamento térmico.",
                    "en": "Scaffold anchors must withstand both tension and compression loads. Never anchor scaffolding to electrical conduits, sprinkler pipes, cable trays, or light cladding.",
                    "es": "Los amarres deben soportar tracción y compresión. Queda terminantemente prohibido anclarse a tuberías de servicios o bandejas eléctricas.",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-and-6",
              question: {
                "pt-BR": "DESAFIO 6: Em qual dos seguintes elementos é estritamente PROIBIDO ancorar ou amarrar uma torre de andaime?",
                "en": "CHALLENGE 6: To which of the following elements is it strictly FORBIDDEN to anchor a scaffolding tie?",
                "es": "DESAFÍO 6: ¿A cuál de los siguientes elementos está terminantemente PROHIBIDO amarrar un andamio?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Em tubulações de processos industriais, eletrocalhas e corrimãos de passarelas.",
                    "en": "Process piping, cable trays, and walkway handrails.",
                    "es": "En tuberías de proceso, bandejas eléctricas o barandillas peatonales.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! Tubulações e eletrocalhas não são elementos estruturais de sustentação e podem romper, causando vazamentos tóxicos, choque elétrico ou colapso do andaime.",
                    "en": "CORRECT! Utility pipes and cable racks lack structural capacity and tying to them can cause severe leaks or scaffolding collapse.",
                    "es": "¡CORRECTO! Las tuberías y canalizaciones eléctricas no tienen capacidad portante y su daño provoca graves accidentes.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Em vigas de aço laminado ou colunas de concreto armado do prédio.",
                    "en": "Structural steel I-beams or reinforced concrete building columns.",
                    "es": "En vigas de acero estructural o columnas de hormigón armado.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! Vigas e colunas estruturais são exatamente os pontos recomendados e seguros para fixação das amarrações com braçadeiras de perfil.",
                    "en": "INCORRECT! Structural steel and concrete columns are primary authorized tie-in anchor locations.",
                    "es": "INCORRECTO. Las vigas de acero y pilares de hormigón son las ubicaciones autorizadas.",
                  },
                },
              ],
            },
          },
        ],
      },
      {
        id: "mod-and-4",
        order: 4,
        title: {
          "pt-BR": "Módulo 4: Pisos, Guarda-Corpo, Rodapé, Inspeção e Liberação (Etiquetas)",
          "en": "Module 4: Decks, Guardrails, Toeboards, Tagging & Inspections",
          "es": "Módulo 4: Plataformas, Barandillas, Rodapiés, Inspección y Tarjetas",
        },
        lessons: [
          {
            id: "les-and-7",
            order: 7,
            title: {
              "pt-BR": "Aula 07: Montagem de Plataforma de Trabalho: Forração Completa, Alçapões e Rodapés",
              "en": "Lesson 07: Working Platform Setup: Complete Decking, Trapdoors & Toeboards",
              "es": "Clase 07: Montaje de Plataformas: Entarimado Completo, Trampillas y Rodapiés",
            },
            durationMinutes: 24,
            contentType: "video",
            videoUrl: "DRO5w2rWI-E",
            contentDetail: {
              objective: {
                "pt-BR": "Aplicar as exigências de piso 100% forrado, travamento de pranchões metálicos ou madeira, instalação de rodapé mínimo de 20 cm e guarda-corpo duplo (1,20 m e 0,70 m).",
                "en": "Apply standards for 100% gap-free decking, plank hold-down clamps, 20cm toeboards, and dual guardrails at 1.20m and 0.70m.",
                "es": "Instalar plataformas sin huecos, rodapiés de 20 cm y barandillas perimetrales a 1,20 m y 0,70 m de altura.",
              },
              introduction: {
                "pt-BR": "A plataforma onde o trabalhador executa sua tarefa deve ser totalmente fechada, antiderrapante e dotada de proteção perimetral contra quedas de colaboradores e de ferramentas.",
                "en": "Work platforms must be fully decked, non-slip, and equipped with comprehensive perimeter edge protection.",
                "es": "La plataforma de trabajo debe estar totalmente entarimada para evitar tropiezos y caídas de herramientas.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Dimensões do Sistema de Proteção Coletiva (SPC)",
                    "en": "Collective Protection System Dimensions",
                    "es": "Dimensiones del Sistema de Protección Colectiva",
                  },
                  body: {
                    "pt-BR": "O sistema de guarda-corpo deve ser composto por: travessa superior a 1,20 m do piso, travessa intermediária a 0,70 m e rodapé rígido de no mínimo 20 cm (0,20 m) rente ao piso. O rodapé é o responsável direto por impedir que parafusos, chaves ou tintas rolem do tablado sobre as pessoas abaixo.",
                    "en": "Standard guardrail assembly requires: top rail at 1.20m, mid rail at 0.70m, and a continuous rigid toeboard of at least 20cm height. Toeboards stop tools from kicking off edges.",
                    "es": "Barandilla superior a 1,20 m, intermedia a 0,70 m y rodapié de 20 cm de altura para impedir el desprendimiento de materiales.",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-and-7",
              question: {
                "pt-BR": "DESAFIO 7: Qual é a altura mínima obrigatória para o rodapé instalado no perímetro de qualquer piso de andaime conforme a NR-18?",
                "en": "CHALLENGE 7: What is the mandatory minimum height for scaffold toeboards under NR-18?",
                "es": "DESAFÍO 7: ¿Cuál es la altura mínima obligatoria del rodapié perimetral según la NR-18?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Mínimo de 20 centímetros (0,20 m) de altura rente ao piso.",
                    "en": "Minimum of 20 centimeters (0.20 m) flush with the deck.",
                    "es": "Mínimo de 20 centímetros (0,20 m) a ras de la plataforma.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! O rodapé de 20 cm de altura rente ao piso impede a queda de ferramentas manuais, peças soltas e detritos.",
                    "en": "CORRECT! A 20cm toeboard prevents kicked tools and debris from falling over platform edges.",
                    "es": "¡CORRECTO! Los 20 cm de altura evitan la caída accidental de herramientas y piezas pequeñas.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "5 centímetros (0,05 m) apenas nos cantos.",
                    "en": "5 centimeters (0.05 m) only at outer corners.",
                    "es": "5 centímetros solo en las esquinas.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! Rodapés de 5 cm não retêm o impacto acidental de calçados ou peças cilíndricas que rolam.",
                    "en": "INCORRECT! 5cm does not provide adequate containment against sliding objects.",
                    "es": "INCORRECTO. 5 cm no ofrece contención suficiente contra caídas de herramientas.",
                  },
                },
              ],
            },
          },
          {
            id: "les-and-8",
            order: 8,
            title: {
              "pt-BR": "Aula 08: Inspeção Formal, Gestão de Etiquetas (Verde/Vermelha) e Desmontagem Segura",
              "en": "Lesson 08: Formal Inspections, Tagging Protocols (Green/Red) & Safe Dismantling",
              "es": "Clase 08: Inspección Técnica, Tarjetas Verde/Roja y Protocolo de Desmontaje",
            },
            durationMinutes: 25,
            contentType: "video",
            videoUrl: "BhMgyXv-mIs",
            contentDetail: {
              objective: {
                "pt-BR": "Conhecer a rotina de checklist diário de inspeção, critérios de liberação por etiqueta verde, interdição imediata por etiqueta vermelha e fases de desmontagem inversa.",
                "en": "Master daily checklist audits, Green Tag release criteria, Red Tag prohibition, and reverse dismantling sequences.",
                "es": "Dominar el checklist de inspección, uso de tarjetas verde y roja, y el orden inverso para el desmontaje.",
              },
              introduction: {
                "pt-BR": "Ninguém tem autorização para utilizar um andaime sem que ele esteja com a Etiqueta Verde preenchida e assinada pelo montador qualificado ou fiscal habilitado. Qualquer avaria, chuva forte ou alteração temporária exige a substituição imediata pela Etiqueta Vermelha de interdição.",
                "en": "No worker may step onto a scaffold without an active Green Tag signed by the competent scaffolder. Adverse weather or missing braces requires immediate Red Tag lock-out.",
                "es": "Queda prohibido el uso del andamio sin tarjeta verde firmada por el inspector o montador responsable.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Significado e Regras das Etiquetas de Andaime",
                    "en": "Scaffold Tag Classification & Rules",
                    "es": "Significado de las Tarjetas de Inspección",
                  },
                  body: {
                    "pt-BR": "ETIQUETA VERDE: Andaime 100% inspecionado, travado, ancorado, com escada de acesso e guarda-corpo completo — LIBERADO PARA USO. ETIQUETA VERMELHA: Andaime em montagem, manutenção, incompleto ou interditado — PROIBIDO O ACESSO, exceto pelos montadores devidamente paramentados com EPI específico.",
                    "en": "GREEN TAG: 100% inspected, braced, tied, equipped with ladders and rails — APPROVED FOR USE. RED TAG: Under construction, altered, or damaged — DO NOT USE (authorized scaffolders only with harness).",
                    "es": "TARJETA VERDE: Aprobado para uso tras inspección completa. TARJETA ROJA: En montaje o fuera de servicio, acceso prohibido a personal general.",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-and-8",
              question: {
                "pt-BR": "DESAFIO 8: Qual é o significado regulamentar da presença de uma Etiqueta Vermelha afixada no acesso de um andaime em uma parada industrial?",
                "en": "CHALLENGE 8: What is the mandatory meaning of a Red Tag affixed to a scaffold access ladder?",
                "es": "DESAFÍO 8: ¿Qué significa la colocación de una Tarjeta Roja en el acceso de un andamio?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Andaime INTERDITADO / EM MONTAGEM: Acesso expressamente PROIBIDO para qualquer usuário, exceto montadores autorizados executando o serviço.",
                    "en": "Scaffold CONDEMNED / UNDER ERECTION: Strictly PROHIBITED for all personnel, except authorized scaffolders actively building it.",
                    "es": "Andamio FUERA DE SERVICIO / EN MONTAJE: Prohibido el acceso a todo el personal excepto montadores.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! A Etiqueta Vermelha sinaliza risco iminente de queda ou estrutura incompleta, impedindo o acesso de qualquer colaborador de outras disciplinas.",
                    "en": "CORRECT! Red tags indicate unsafe or incomplete scaffolding. Unauthorized entry is a critical safety violation.",
                    "es": "¡CORRECTO! La tarjeta roja avisa que el andamio no cumple con las condiciones mínimas para ser usado.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Andaime liberado para uso, mas apenas para colaboradores com menos de 70 kg.",
                    "en": "Scaffold approved, but strictly for personnel weighing under 70 kg.",
                    "es": "Andamio autorizado únicamente para operarios de poco peso.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO! A etiqueta vermelha nunca libera o uso por peso. Ela indica interdição total da estrutura.",
                    "en": "INCORRECT! Red tags never grant access based on weight; they mean complete lockout.",
                    "es": "INCORRECTO. La tarjeta roja prohíbe el acceso a todo el personal no montador.",
                  },
                },
              ],
            },
          },
        ],
      },
      {
        id: "mod-and-5",
        order: 5,
        title: {
          "pt-BR": "Módulo 5: Procedimento Prático: Montagem Correta Passo a Passo",
          "en": "Module 5: Practical Hands-On Procedure: Step-by-Step Erection",
          "es": "Módulo 5: Procedimiento Práctico: Montaje Correcto Paso a Paso",
        },
        lessons: [
          {
            id: "les-and-9",
            order: 9,
            title: {
              "pt-BR": "Aula 09: Procedimento Operacional Prático: Sequência de Montagem e Ajustes em Campo",
              "en": "Lesson 09: Practical Field Procedure: Safe Assembly Sequence & Field Alignment",
              "es": "Clase 09: Procedimiento Práctico en Campo: Secuencia de Montaje y Ajustes",
            },
            durationMinutes: 30,
            contentType: "video",
            videoUrl: "Xchqh9As_kw",
            contentDetail: {
              objective: {
                "pt-BR": "Acompanhar a sequência física exata de montagem em campo: nivelamento inicial, colocação de quadros, diagonais, pisos de trabalho, alçapão com escada e fechamento de guarda-corpo.",
                "en": "Follow the exact field assembly sequence: ground leveling, base jacks, frames, diagonal braces, decking, internal ladder with hatch, and guardrail closure.",
                "es": "Observar la secuencia física exacta de montaje: nivelado de bases, colocación de marcos, arriostramiento, pisos y barandillas.",
              },
              introduction: {
                "pt-BR": "Nesta aula prática demonstrativa, vemos a execução real de uma torre de andaime passo a passo. A sequência correta de encaixes e o aperto adequado evitam o estresse mecânico das peças e garantem que o montador execute toda a subida com estabilidade estrutural sob seus pés.",
                "en": "In this hands-on field lesson, watch a complete scaffold tower being safely assembled. Proper sequencing ensures structural stability under the scaffolder's boots at every lift.",
                "es": "Clase práctica completa que muestra la secuencia correcta de ensamble de módulos, garantizando la seguridad en cada avance.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Sequenciamento Construtivo do Andaime",
                    "en": "Scaffold Assembly Workflow",
                    "es": "Flujo de Montaje del Andamio",
                  },
                  body: {
                    "pt-BR": "1º Passo: Preparação do terreno e nivelamento das sapatas com pranchões de base. 2º Passo: Instalação do primeiro lance de postes/quadros e colocação imediata das diagonais de contraventamento. 3º Passo: Instalação da plataforma provisória para trabalho dos montadores com cinto e talabarte duplo. 4º Passo: Instalação da escada de acesso interna com alçapão basculante. 5º Passo: Guarda-corpo duplo perimetral com rodapé em todos os lados expostos.",
                    "en": "Step 1: Ground prep & base jacks leveling over sole boards. Step 2: First tier standards/frames & immediate diagonal cross braces. Step 3: Temporary working deck with 100% tie-off. Step 4: Internal access ladder with trapdoor hatch. Step 5: Full perimeter double guardrails & 20cm toeboards.",
                    "es": "1. Nivelación de bases sobre soleras. 2. Instalación de postes y diagonales inmediatas. 3. Montaje de plataforma provisoria con anclaje continuo. 4. Escala interior con trampilla. 5. Barandillas perimetrales y rodapiés.",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-and-9",
              question: {
                "pt-BR": "DESAFIO 9: Como deve ser realizado o acesso dos trabalhadores aos diferentes níveis do andaime montado?",
                "en": "CHALLENGE 9: How must workers safely access different levels of the erected scaffold?",
                "es": "DESAFÍO 9: ¿Cómo deben acceder los trabajadores a los distintos niveles del andamio?",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Por meio de escadas internas incorporadas à estrutura com alçapão basculante ou torre de escada de lance contígua.",
                    "en": "Via internal integrated ladders equipped with trapdoor hatches or adjacent dedicated stair towers.",
                    "es": "A través de escaleras interiores integradas con trampilla basculante o torre de escalera anexa.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! Conforme a NR-18, o acesso deve ser interno por escada com alçapão ou torre de escada dedicada. É proibido subir pela estrutura externa do andaime.",
                    "en": "CORRECT! NR-18 requires internal ladder access with trapdoors or dedicated stairs. External climbing on frames is strictly forbidden.",
                    "es": "¡CORRECTO! El acceso debe realizarse por escaleras interiores con trampilla o torres de escaleras.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Escalando os tubos e diagonais pelo lado de fora da torre.",
                    "en": "Climbing up tubes and diagonal stays along the external face.",
                    "es": "Escalando por el exterior utilizando las barras diagonales.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "GRAVÍSSIMO E PROIBIDO! Escalar tubos externos é uma das maiores causas de quedas fatais na indústria.",
                    "en": "PROHIBITED! Climbing outside faces is a fatal hazard and violates all safety regulations.",
                    "es": "¡PROHIBIDO! Trepar por la parte externa es una infracción grave causante de accidentes fatales.",
                  },
                },
              ],
            },
          },
        ],
      },
    ],
    finalAssessment: {
      id: "exam-andaime-final",
      order: 1,
      title: {
        "pt-BR": "Avaliação Teórica de Qualificação em Montagem e Segurança em Andaimes",
        "en": "Theoretical Qualification Exam in Scaffolding Assembly & Safety",
        "es": "Evaluación Teórica de Calificación en Montaje y Seguridad en Andamios",
      },
      description: {
        "pt-BR": "Exame formal de certificação abordando as exigências da NR-18 e NR-35, inspeção de componentes estruturais, amarrações, regras de contraventamento, sistemas de guarda-corpo e liberação por etiquetas.",
        "en": "Formal certification exam covering NR-18 and NR-35 standards, component integrity, wall ties, cross-bracing geometry, perimeter collective protection, and tagging systems.",
        "es": "Examen formal de certificación que abarca las normas NR-18 y NR-35, inspección de piezas, arriostramiento, barandillas y gestión de tarjetas verde/roja.",
      },
      scope: "course",
      estimatedMinutes: 45,
      questionsCount: 8,
      passingScorePercent: 70,
      maxAttempts: 3,
      isAvailable: true,
      availabilityNotice: {
        "pt-BR": "Avaliação liberada após a conclusão dos 5 módulos técnicos.",
        "en": "Exam unlocked upon completing all 5 technical modules.",
        "es": "Evaluación habilitada tras concluir los 5 módulos técnicos.",
      },
      questions: [
        {
          id: "q-and-1",
          order: 1,
          question: {
            "pt-BR": "1. Qual é o papel obrigatório da soleira (pranchão contínuo de madeira) posicionado sob a sapata de aço metálica em solo natural ou compactado?",
            "en": "1. What is the mandatory purpose of a continuous timber sole board placed under base plates on soil?",
            "es": "1. ¿Cuál es la función obligatoria de la solera de madera colocada bajo la placa base sobre tierra?",
          },
          options: [
            {
              id: "q1-a",
              text: {
                "pt-BR": "Distribuir a carga pontual dos postes sobre uma área maior de solo, impedindo o afundamento e o desaprumo da estrutura.",
                "en": "Distribute concentrated standard loads over a broader soil footprint, preventing subsidence and tilt.",
                "es": "Distribuir la carga puntual de los postes en una superficie mayor, evitando hundimientos y desaplome.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A sapata de aço possui área reduzida; a soleira multiplica a área de contato com o solo, reduzindo a tensão por centímetro quadrado.",
                "en": "Correct! Steel base plates have small footprints; sole boards disperse vertical forces evenly across soil.",
                "es": "¡Correcto! La solera de madera distribuye la carga puntual evitando que el poste se clave en el suelo.",
              },
            },
            {
              id: "q1-b",
              text: {
                "pt-BR": "Apenas servir de isolamento elétrico em caso de relâmpagos.",
                "en": "Merely provide electrical insulation against lightning strikes.",
                "es": "Servir únicamente como aislante eléctrico.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! A função primária é geotécnica e estrutural de distribuição de carga mecânica.",
                "en": "Incorrect! The primary role is structural load dissipation across bearing soil.",
                "es": "Incorrecto. La función principal es mecánica y estructural para evitar hundimientos.",
              },
            },
          ],
        },
        {
          id: "q-and-2",
          order: 2,
          question: {
            "pt-BR": "2. De acordo com a NR-35, a partir de qual altura acima do nível inferior qualquer atividade com risco de queda exige medidas regulamentares de segurança?",
            "en": "2. Under NR-35, above what height elevation does work with fall hazard require mandatory compliance measures?",
            "es": "2. Según la NR-35, ¿a partir de qué altura se exige la aplicación obligatoria de medidas de protección contra caídas?",
          },
          options: [
            {
              id: "q2-a",
              text: {
                "pt-BR": "Acima de 2,00 metros do nível inferior.",
                "en": "Above 2.00 meters from the lower level.",
                "es": "Por encima de 2,00 metros del nivel inferior.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O limite legal expresso no item 35.1.2 da NR-35 é 2,00 metros.",
                "en": "Correct! NR-35 explicitly mandates fall control systems at 2.00 meters and above.",
                "es": "¡Correcto! El acápite 35.1.2 de la NR-35 establece el umbral legal en 2,00 metros.",
              },
            },
            {
              id: "q2-b",
              text: {
                "pt-BR": "Apenas acima de 5,00 metros.",
                "en": "Only above 5.00 meters.",
                "es": "Únicamente por encima de 5,00 metros.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! Quedas de 2 metros já causam traumatismos severos e estão sob vigência integral da norma.",
                "en": "Incorrect! Falls from 2m can be fatal; standards apply at 2 meters.",
                "es": "Incorrecto. A partir de 2 metros rige toda la exigencia de la NR-35.",
              },
            },
          ],
        },
        {
          id: "q-and-3",
          order: 3,
          question: {
            "pt-BR": "3. Como deve ser constituído o sistema de guarda-corpo perimetral rígido em todos os lados expostos do tablado de andaime conforme a NR-18?",
            "en": "3. How must the perimeter collective guardrail system be configured under NR-18?",
            "es": "3. ¿Cómo debe configurarse el sistema de barandilla perimetral según la NR-18?",
          },
          options: [
            {
              id: "q3-a",
              text: {
                "pt-BR": "Travessa superior a 1,20 m, travessa intermediária a 0,70 m e rodapé rígido de no mínimo 20 cm rente ao piso.",
                "en": "Top rail at 1.20m, intermediate rail at 0.70m, and a rigid toeboard of at least 20cm flush with deck.",
                "es": "Barandilla superior a 1,20 m, intermedia a 0,70 m y rodapié rígido de mínimo 20 cm a ras de plataforma.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Essas são as dimensões padrão estabelecidas pela NR-18 para proteção contra quedas de pessoas e materiais.",
                "en": "Correct! These exact dimensions define regulatory collective edge protection.",
                "es": "¡Correcto! Son las medidas reglamentarias de seguridad colectiva perimetral.",
              },
            },
            {
              id: "q3-b",
              text: {
                "pt-BR": "Uma corda simples amarrada a 50 cm de altura sem rodapé.",
                "en": "A single loose rope tied at 50 cm with no toeboard.",
                "es": "Una cuerda simple atada a 50 cm de altura sin rodapié.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto e perigosíssimo! Cordas simples cedem à pressão corporal e a falta de rodapé permite queda de ferramentas.",
                "en": "Extremely dangerous! Loose ropes deflect under load and lack toeboard containment.",
                "es": "¡Peligroso e ilegal! Las cuerdas flectan y no retienen el cuerpo ni las herramientas.",
              },
            },
          ],
        },
        {
          id: "q-and-4",
          order: 4,
          question: {
            "pt-BR": "4. Qual é o procedimento mandatório durante a movimentação e montagem de andaimes no que diz respeito ao uso do talabarte duplo tipo Y?",
            "en": "4. What is the mandatory rule regarding twin Y lanyards during scaffold assembly at heights?",
            "es": "4. ¿Cuál es el procedimiento obligatorio con el cabo de doble gancho en Y durante el montaje en altura?",
          },
          options: [
            {
              id: "q4-a",
              text: {
                "pt-BR": "Conectar o segundo gancho antes de soltar o primeiro, assegurando 100% de ancoragem ininterrupta em ponto estrutural aprovado.",
                "en": "Anchor the second snap hook before detaching the first, guaranteeing 100% continuous tie-off to approved anchors.",
                "es": "Conectar el segundo gancho antes de soltar el primero, garantizando el 100% de anclaje ininterrumpido.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A regra de ouro é o engate 100% contínuo, impedindo que o montador fique desprotegido em qualquer segundo.",
                "en": "Correct! 100% continuous tie-off ensures zero unanchored exposure.",
                "es": "¡Correcto! El operario debe permanecer anclado de forma continua en todo momento.",
              },
            },
            {
              id: "q4-b",
              text: {
                "pt-BR": "Manter os dois ganchos presos no próprio cinto para facilitar os movimentos.",
                "en": "Keep both snaps clipped into harness rings to ease fast walking.",
                "es": "Llevar ambos ganchos guardados en el arnés para mayor comodidad.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! Prender os ganchos no próprio cinto significa estar completamente solto em altura sem nenhuma proteção ativa.",
                "en": "Incorrect! Clipping lanyards to yourself leaves you completely exposed to fatal falls.",
                "es": "Incorrecto. Esto significa estar completamente desprotegido ante una caída.",
              },
            },
          ],
        },
        {
          id: "q-and-5",
          order: 5,
          question: {
            "pt-BR": "5. O que sinaliza a presença de uma ETIQUETA VERMELHA no acesso a um andaime em uma área industrial?",
            "en": "5. What does a RED TAG indicate when posted at the entrance of an industrial scaffold?",
            "es": "5. ¿Qué significa una TARJETA ROJA fijada en el acceso a un andamio industrial?",
          },
          options: [
            {
              id: "q5-a",
              text: {
                "pt-BR": "Andaime interditado, incompleto ou em montagem: ACESSO PROIBIDO para qualquer usuário comum.",
                "en": "Scaffold unsafe, altered or under erection: ENTRY FORBIDDEN to general users.",
                "es": "Andamio fuera de servicio o en montaje: ACCESO PROHIBIDO para usuarios generales.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A Etiqueta Vermelha impede qualquer trabalho até que a estrutura seja 100% concluída, inspecionada e liberada com Etiqueta Verde.",
                "en": "Correct! Red tags restrict access to certified erecting crews until fully audited.",
                "es": "¡Correcto! La tarjeta roja impide el uso hasta su completa inspección y liberación con tarjeta verde.",
              },
            },
            {
              id: "q5-b",
              text: {
                "pt-BR": "Andaime liberado apenas para trabalhos com lixadeiras e solda.",
                "en": "Scaffold approved only for hot work and welding.",
                "es": "Andamio permitido solo para trabajos en caliente.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! A cor vermelha não tem relação com trabalho a quente; ela indica impedimento total de uso por falta de conformidade.",
                "en": "Incorrect! Red tags signify lock-out and structural non-compliance, not hot work authorization.",
                "es": "Incorrecto. El color rojo indica interdicción y riesgo, nunca habilitación especial.",
              },
            },
          ],
        },
        {
          id: "q-and-6",
          order: 6,
          question: {
            "pt-BR": "6. Por que é estritamente proibido ancorar amarrações de andaimes em tubulações de utilidades ou eletrocalhas industriais?",
            "en": "6. Why is it strictly forbidden to tie scaffolding into utility pipes or cable trays?",
            "es": "6. ¿Por qué está terminantemente prohibido anclar andamios a tuberías de proceso o bandejas eléctricas?",
          },
          options: [
            {
              id: "q6-a",
              text: {
                "pt-BR": "Porque tubulações e bandejas não são dimensionadas para suportar os esforços mecânicos de tração e vento do andaime, podendo romper e causar graves acidentes industriais.",
                "en": "Because utility racks and pipes lack structural capacity to absorb wind and sway forces, causing rupture risks and collapse.",
                "es": "Porque no tienen capacidad portante para absorber las cargas del andamio, pudiendo romperse y provocar fugas o colapsos.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Amarrações exigem elementos estruturais sólidos como pilares de concreto ou vigas de aço calculadas.",
                "en": "Correct! Scaffold ties require rigid columns or steel building framing.",
                "es": "¡Correcto! Las cargas dinámicas de un andamio pueden arrancar tuberías presurizadas o bandejas.",
              },
            },
            {
              id: "q6-b",
              text: {
                "pt-BR": "Porque a tinta da tubulação pode arranhar os tubos do andaime.",
                "en": "Merely to avoid scratching paint on process pipes.",
                "es": "Solo para evitar rayar la pintura de las tuberías.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! A restrição decorre do risco iminente de colapso estrutural, rompimento de fluidos perigosos ou curto-circuito.",
                "en": "Incorrect! It is a critical life-safety prevention rule against plant blowouts and collapse.",
                "es": "Incorrecto. Se trata de una prohibición crítica de seguridad de procesos y de personas.",
              },
            },
          ],
        },
        {
          id: "q-and-7",
          order: 7,
          question: {
            "pt-BR": "7. Como deve ser garantida a transição segura dos trabalhadores entre os diferentes pisos de uma torre de andaime?",
            "en": "7. How must workers transition safely between vertical levels on a scaffold tower?",
            "es": "7. ¿Cómo debe garantizarse el acceso vertical seguro entre pisos en un andamio?",
          },
          options: [
            {
              id: "q7-a",
              text: {
                "pt-BR": "Através de escadas internas com alçapão basculante ou torre de escada dedicada, mantendo o alçapão fechado após a passagem.",
                "en": "Through internal inclined/vertical ladders with trapdoors or dedicated stair towers, closing trapdoors after passing.",
                "es": "Mediante escalas interiores con trampilla basculante o torre de escaleras, cerrando la trampilla al pasar.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O alçapão fechado restaura a continuidade do piso e previne que alguém caia pelo orifício de acesso.",
                "en": "Correct! Keeping trapdoors closed restores platform surface and eliminates open floor hole falls.",
                "es": "¡Correcto! Cerrar la trampilla mantiene el piso continuo y evita caídas al vacío.",
              },
            },
            {
              id: "q7-b",
              text: {
                "pt-BR": "Pulando de um piso para outro ou escalando as travessas externas sem escada.",
                "en": "Jumping down between decks or climbing external ledgers without a ladder.",
                "es": "Saltando de un piso a otro o escalando los travesaños externos.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! Pular ou escalar a estrutura externa é ato inseguro gravíssimo e terminantemente proibido pela NR-18.",
                "en": "Incorrect! Climbing frame exteriors or jumping causes catastrophic falls and is illegal.",
                "es": "Incorrecto. Trepar o saltar entre niveles es una infracción gravísima.",
              },
            },
          ],
        },
        {
          id: "q-and-8",
          order: 8,
          question: {
            "pt-BR": "8. Conforme as diretrizes da RSS3 Treinamentos e as normas regulamentadoras (NR-35 e NR-18), a aprovação neste exame teórico em LMS confere habilitação prática imediata para montagem de andaimes?",
            "en": "8. Under RSS3 Training guidelines and NR-18/NR-35 standards, does passing this theoretical LMS exam grant immediate practical qualification?",
            "es": "8. Según las directrices de RSS3 Treinamentos y la normativa, ¿la aprobación de este examen otorga habilitación práctica inmediata?",
          },
          options: [
            {
              id: "q8-a",
              text: {
                "pt-BR": "NÃO. Este certificado valida a formação teórica regulamentar; a habilitação formal prática exige treinamento presencial supervisionado por instrutor credenciado e ASO vigente com aptidão para trabalho em altura.",
                "en": "NO. This certificate certifies theoretical regulatory compliance; practical operational qualification requires supervised hands-on field training and a valid occupational medical clearance (ASO).",
                "es": "NO. Este certificado avala la capacitación teórica; la calificación práctica formal requiere entrenamiento presencial supervisado y examen médico (ASO) apto para altura.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Conforme o AGENTS.md e as NRs, cursos EAD de atividades de alto risco cobrem a teoria; a liberação operacional depende de comprovação prática presencial e aptidão médica ocupacional.",
                "en": "Correct! As stipulated in regulatory policies, theoretical LMS mastery must be paired with hands-on validation and certified fitness.",
                "es": "¡Correcto! La teoría no reemplaza la evaluación práctica presencial ni la aptitud médica ocupacional.",
              },
            },
            {
              id: "q8-b",
              text: {
                "pt-BR": "SIM. A aprovação teórica online dispensa qualquer treinamento prático e o colaborador pode liderar montagens imediatamente.",
                "en": "YES. Online completion waives all hands-on training requirements and allows immediate field leadership.",
                "es": "SÍ. La aprobación online exime de toda práctica y permite liderar montajes de inmediato.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto e ilegal! Atividades de alto risco jamais admitem dispensa de treinamento prático e aptidão médica presencial.",
                "en": "Incorrect and illegal! High-risk industrial activities strictly require certified practical competency.",
                "es": "Incorrecto y contrario a la ley. Las actividades de riesgo requieren validación práctica presencial.",
              },
            },
          ],
        },
      ],
    },
  },
  {
    id: "c-nr6-epi",
    slug: "nr-6-equipamentos-de-protecao-individual",
    title: {
      "pt-BR": "NR-6: Equipamentos de Proteção Individual (EPI) e Práticas Operacionais",
      "en": "NR-6: Personal Protective Equipment (PPE) & Operational Practices",
      "es": "NR-6: Equipos de Protección Individual (EPP) y Prácticas Operativas",
    },
    description: {
      "pt-BR": "Capacitação completa em NR-6: seleção, guarda, higienização, inspeção visual, responsabilidades legais e a importância vital do EPI nas operações industriais.",
      "en": "Comprehensive NR-6 training: selection, storage, cleaning, inspection, legal responsibilities, and the vital role of PPE in industrial operations.",
      "es": "Capacitación en NR-6: selección, almacenamiento, inspección y la importancia crítica del EPP en operaciones industriales.",
    },
    schoolId: "seguranca-epi",
    schoolName: {
      "pt-BR": "Segurança do Trabalho e EPIs",
      "en": "Occupational Safety & PPE",
      "es": "Seguridad Laboral y EPP",
    },
    workloadHours: 8,
    level: "basic",
    modality: "hybrid",
    isMandatory: true,
    mandatoryFor: ["Todos os Colaboradores Operacionais", "Operador Industrial", "Líder de Frente"],
    targetAudience: {
      "pt-BR": "Colaboradores operacionais da RSS3, encarregados, operadores e técnicos que atuam em plantas industriais e paradas de manutenção.",
      "en": "RSS3 operational personnel, foremen, operators, and safety technicians working on industrial sites.",
      "es": "Personal operativo de RSS3, encargados y técnicos que operan en plantas industriales.",
    },
    modulesCount: 2,
    lessonsCount: 5,
    thumbnailGradient: "from-blue-700 to-indigo-950",
    badgeCode: "NR-06",
    updatedAtDate: "2026-10-16",
    modules: [
      {
        id: "mod-nr6-1",
        order: 1,
        title: {
          "pt-BR": "Módulo 1: Fundamentos da Norma Regulamentadora NR-6 e Classificação dos EPIs",
          "en": "Module 1: NR-6 Regulatory Fundamentals & PPE Classification",
          "es": "Módulo 1: Fundamentos de la NR-6 y Clasificación de los EPP",
        },
        lessons: [
          {
            id: "les-nr6-1-1",
            order: 1,
            title: {
              "pt-BR": "NR 6: Tudo o que você precisa saber para se proteger no trabalho — Aula 01",
              "en": "NR 6: Everything You Need to Know for Workplace Protection — Lesson 01",
              "es": "NR 6: Todo lo que necesita saber para protegerse en el trabajo — Lección 01",
            },
            durationMinutes: 15,
            contentType: "video",
            videoUrl: "Uxn4kqJZrBs",
            contentDetail: {
              objective: {
                "pt-BR": "Compreender os objetivos da NR-6, a definição formal de EPI e a hierarquia das medidas de controle de risco.",
                "en": "Understand NR-6 regulatory goals, legal definition of PPE, and hierarchy of hazard controls.",
                "es": "Comprender los objetivos de la NR-6, definición legal de EPP y jerarquía de controles de riesgo.",
              },
              introduction: {
                "pt-BR": "A Norma Regulamentadora nº 06 (NR-6) estabelece os requisitos para seleção, fornecimento, uso, guarda, higienização, manutenção e descarte dos Equipamentos de Proteção Individual. Na RSS3 Soluções Industriais, a segurança é inegociável em todas as frentes de trabalho.",
                "en": "Regulatory Standard NR-6 specifies requirements for personal protective equipment selection, supply, use, and inspection in industrial environments.",
                "es": "La Norma Reguladora NR-6 establece los requisitos para el suministro, uso e inspección de los Equipos de Protección Individual.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "O que é um Equipamento de Proteção Individual (EPI)?",
                    "en": "What is Personal Protective Equipment (PPE)?",
                    "es": "¿Qué es un Equipo de Protección Individual (EPP)?",
                  },
                  body: {
                    "pt-BR": "Conforme a NR-6, EPI é todo dispositivo ou produto, de uso individual utilizado pelo trabalhador, destinado à proteção contra riscos suscetíveis de ameaçar a segurança e a saúde no trabalho. O EPI é adotado prioritariamente quando as medidas de proteção coletiva (EPC) não forem viáveis ou suficientes.",
                    "en": "According to NR-6, PPE is any device or product worn individually to protect against workplace health and safety hazards.",
                    "es": "Según la NR-6, el EPP es todo dispositivo de uso individual destinado a proteger al trabajador contra riesgos operacionales.",
                  },
                },
                {
                  title: {
                    "pt-BR": "Hierarquia das Medidas de Controle de Riscos",
                    "en": "Hierarchy of Hazard Controls",
                    "es": "Jerarquía de Controles de Riesgo",
                  },
                  body: {
                    "pt-BR": "1. Eliminação do risco na fonte geradora;\n2. Substituição por método ou substância menos perigosa;\n3. Medidas de controle de engenharia e EPC (ex: exaustores, guarda-corpos);\n4. Medidas administrativas e procedimentos operacionais;\n5. Fornecimento e uso obrigatório de EPI adequado.",
                    "en": "1. Elimination; 2. Substitution; 3. Engineering controls and collective protection; 4. Administrative controls; 5. PPE.",
                    "es": "1. Eliminación; 2. Sustitución; 3. Controles de ingeniería y EPC; 4. Controles administrativos; 5. EPP.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "O EPI é a última linha de defesa do trabalhador e não substitui os controles de engenharia e proteções coletivas.",
                  "en": "PPE is the final line of defense and does not replace engineering controls.",
                  "es": "El EPP es la última línea de defensa y no reemplaza las medidas de protección colectiva.",
                },
                {
                  "pt-BR": "Todo EPI deve possuir Certificado de Aprovação (CA) válido expedido pelo órgão competente.",
                  "en": "All PPE must hold a valid Certificate of Approval (CA).",
                  "es": "Todo EPP debe contar con Certificado de Aprobación (CA) vigente.",
                },
              ],
            },
          },
          {
            id: "les-nr6-1-2",
            order: 2,
            title: {
              "pt-BR": "NR 6: Obrigações do Empregador e do Empregado — Aula 02",
              "en": "NR 6: Employer and Employee Legal Responsibilities — Lesson 02",
              "es": "NR 6: Obligaciones del Empleador y del Trabajador — Lección 02",
            },
            durationMinutes: 18,
            contentType: "video",
            videoUrl: "SLepcCP5qbE",
            contentDetail: {
              objective: {
                "pt-BR": "Conhecer com clareza os deveres legais da empresa (RSS3) e os deveres do colaborador no recebimento e utilização do EPI.",
                "en": "Understand corporate employer legal duties and employee obligations regarding PPE usage.",
                "es": "Conocer las obligaciones legales de la empresa y del trabajador respecto al EPP.",
              },
              introduction: {
                "pt-BR": "A conformidade com a NR-6 é compartilhada entre empregador e empregado. O conhecimento dos deveres mútuos evita passivos trabalhistas e protege a integridade física de toda a equipe.",
                "en": "Compliance with NR-6 is a shared responsibility between employer and employee. Clear understanding ensures legal safety and physical protection.",
                "es": "El cumplimiento de la NR-6 es una responsabilidad compartida entre empresa y colaborador.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Deveres da Organização (Empregador)",
                    "en": "Employer Responsibilities",
                    "es": "Obligaciones del Empleador",
                  },
                  body: {
                    "pt-BR": "• Adquirir o EPI adequado ao risco de cada atividade operacional;\n• Exigir o uso efetivo do equipamento em campo;\n• Fornecer gratuitamente ao colaborador somente EPI aprovado pelo órgão nacional competente (com CA válido);\n• Orientar e capacitar o empregado sobre o uso adequado, guarda e conservação;\n• Substituir imediatamente o EPI danificado ou extraviado;\n• Responsabilizar-se pela higienização periódica quando aplicável.",
                    "en": "Provide compliant PPE free of charge, enforce use, train workers, and replace damaged items immediately.",
                    "es": "Adquirir EPP con CA vigente, suministrarlo gratuitamente, capacitar y sustituir equipos dañados de inmediato.",
                  },
                },
                {
                  title: {
                    "pt-BR": "Deveres do Trabalhador (Empregado)",
                    "en": "Employee Responsibilities",
                    "es": "Obligaciones del Trabajador",
                  },
                  body: {
                    "pt-BR": "• Usar o EPI apenas para a finalidade a que se destina;\n• Responsabilizar-se pela limpeza, guarda e conservação do equipamento;\n• Comunicar imediatamente à liderança qualquer alteração que torne o EPI impróprio para uso;\n• Cumprir as determinações da empresa sobre o uso adequado.",
                    "en": "Use PPE strictly for intended purpose, maintain its cleanliness, report damage immediately, and follow corporate safety rules.",
                    "es": "Usar el EPP adecuadamente, responsabilizarse por su cuidado y reportar averías de inmediato a la supervisión.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "A recusa injustificada ao uso do EPI constitui ato faltoso passível de sanções disciplinares conforme a CLT.",
                  "en": "Unjustified refusal to wear PPE is considered misconduct under labor regulations.",
                  "es": "La negativa injustificada al uso del EPP constituye una falta laboral.",
                },
                {
                  "pt-BR": "O fornecimento do EPI deve ser sempre registrado mediante ficha de entrega física ou eletrônica rastreável.",
                  "en": "PPE delivery must be documented via traceable physical or digital records.",
                  "es": "La entrega del EPP debe constar en un registro formal y rastreable.",
                },
              ],
            },
          },
          {
            id: "les-nr6-1-3",
            order: 3,
            title: {
              "pt-BR": "NR 6: Certificado de Aprovação (CA), Especificação e Validade — Aula 03",
              "en": "NR 6: Certificate of Approval (CA), Specs & Validity — Lesson 03",
              "es": "NR 6: Certificado de Aprobación (CA), Especificaciones y Vigencia — Lección 03",
            },
            durationMinutes: 20,
            contentType: "video",
            videoUrl: "iloJ3QiLBbY",
            contentDetail: {
              objective: {
                "pt-BR": "Aprender a consultar, verificar e interpretar a validade do Certificado de Aprovação (CA) e a vida útil dos equipamentos.",
                "en": "Learn how to verify, look up, and interpret Certificate of Approval (CA) validity and service life.",
                "es": "Aprender a verificar la vigencia del Certificado de Aprobación (CA) y la vida útil del equipo.",
              },
              introduction: {
                "pt-BR": "O Certificado de Aprovação (CA) é o documento emitido pelo Ministério do Trabalho que atesta que o equipamento foi submetido a rigorosos testes laboratoriais e atende às normas técnicas brasileiras de segurança.",
                "en": "The Certificate of Approval (CA) guarantees that the equipment underwent accredited laboratory testing.",
                "es": "El Certificado de Aprobación (CA) garantiza que el equipo pasó por pruebas técnicas oficiales.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Diferença entre Validade do CA e Vida Útil do EPI",
                    "en": "CA Validity vs Equipment Service Life",
                    "es": "Vigencia del CA vs Vida Útil del EPP",
                  },
                  body: {
                    "pt-BR": "• Validade do CA: Prazo em que o fabricante pode comercializar o lote do EPI no mercado nacional.\n• Vida Útil do Equipamento: Prazo máximo estabelecido pelo fabricante para utilização após a fabricação ou abertura da embalagem, considerando o desgaste natural e exposição a agentes químicos/intempéries.\nIMPORTANTE: Um EPI adquirido com CA válido pode continuar sendo utilizado pelo colaborador mesmo após o vencimento do CA comercial, desde que esteja dentro da sua vida útil e em perfeitas condições de integridade física.",
                    "en": "CA validity regulates legal commercialization; service life determines physical operational usage based on inspection.",
                    "es": "La vigencia del CA regula la comercialización; la vida útil determina el tiempo de uso seguro en campo.",
                  },
                },
                {
                  title: {
                    "pt-BR": "Como Inspecionar a Marcação Indelével do CA",
                    "en": "Inspecting Indelible CA Markings",
                    "es": "Inspección de la Marca Indeleble del CA",
                  },
                  body: {
                    "pt-BR": "Todo EPI deve apresentar, em caracteres indeléveis e bem visíveis: o nome comercial do fabricante, o lote de fabricação e o número do Certificado de Aprovação (CA). Se a gravação estiver desgastada ou ilegível, o equipamento deve ser segregado e avaliado pelo setor de SST.",
                    "en": "Every PPE must bear manufacturer name, batch code, and CA number in indelible marking.",
                    "es": "Todo EPP debe presentar marca indeleble con nombre del fabricante, lote y número de CA.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "EPI sem CA válido no momento da compra é ilegal e não garante proteção contra riscos operacionais.",
                  "en": "PPE purchased without a valid CA is non-compliant and illegal.",
                  "es": "El EPP sin CA válido al comprarse no garantiza protección ni validez legal.",
                },
              ],
            },
          },
          {
            id: "les-nr6-1-4",
            order: 4,
            title: {
              "pt-BR": "NR 6: Seleção Correta, Guarda, Higienização e Descarte — Aula 04",
              "en": "NR 6: Proper Selection, Storage, Sanitization & Disposal — Lesson 04",
              "es": "NR 6: Selección Correcta, Cuidado, Higienización y Desecho — Lección 04",
            },
            durationMinutes: 22,
            contentType: "video",
            videoUrl: "mbfte1L_D5M",
            contentDetail: {
              objective: {
                "pt-BR": "Dominar as boas práticas de guarda, conservação diária, higienização e descarte ambientalmente responsável de EPIs danificados.",
                "en": "Master storage, daily maintenance, sanitization, and environmentally responsible disposal of damaged PPE.",
                "es": "Dominar las buenas prácticas de almacenamiento, limpieza y desecho responsable de EPP.",
              },
              introduction: {
                "pt-BR": "Um equipamento de primeira linha perde sua capacidade protetiva se for guardado de forma inadequada, exposto a solventes corrosivos ou contaminado por sujidades biológicas e químicas.",
                "en": "Even premium PPE loses protective efficacy if improperly stored, exposed to corrosives, or left contaminated.",
                "es": "El mejor EPP pierde su efectividad si se almacena mal o se contamina con sustancias químicas.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Regras de Ouro para Guarda e Conservação",
                    "en": "Golden Rules for Storage & Maintenance",
                    "es": "Reglas de Oro para Almacenamiento y Conservación",
                  },
                  body: {
                    "pt-BR": "• Guardar sempre em local limpo, seco, arejado e protegido da radiação solar direta;\n• Nunca dobrar ou amassar respiradores, protetores faciais ou luvas de proteção química;\n• Não armazenar junto com ferramentas cortantes, graxas, combustíveis ou produtos químicos agressivos;\n• Inspecionar visualmente o equipamento antes de cada jornada de trabalho.",
                    "en": "Store in dry, clean, shaded areas away from direct sunlight, sharp tools, and hazardous chemicals.",
                    "es": "Guardar en lugar limpio, seco y protegido del sol, lejos de herramientas cortantes y químicos.",
                  },
                },
                {
                  title: {
                    "pt-BR": "Critérios de Descarte e Inutilização",
                    "en": "Disposal and Decommissioning Criteria",
                    "es": "Criterios de Desecho e Inutilización",
                  },
                  body: {
                    "pt-BR": "Quando um EPI atinge o fim de sua vida útil, sofre deformação plástica, rasgo, trinca ou contaminação severa, ele deve ser imediatamente inutilizado (cortado ou descaracterizado) para evitar reuso acidental por terceiros e descartado conforme o plano de gerenciamento de resíduos industriais da RSS3 / CMPC.",
                    "en": "Damaged PPE must be decommissioned, physically rendered unusable, and disposed of according to environmental rules.",
                    "es": "El EPP dañado debe ser inutilizado físicamente para evitar su reutilización accidental y desechado formalmente.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "EPI danificado deve ser substituído imediatamente e nunca reparado com métodos improvisados (gambiarras).",
                  "en": "Damaged PPE must be replaced immediately; improvised repairs are strictly prohibited.",
                  "es": "El EPP dañado debe cambiarse de inmediato; las reparaciones improvisadas están prohibidas.",
                },
              ],
            },
          },
        ],
      },
      {
        id: "mod-nr6-2",
        order: 2,
        title: {
          "pt-BR": "Módulo 2: A Importância Vital do EPI e Aplicação Prática Operacional",
          "en": "Module 2: The Vital Role of PPE & Practical Field Application",
          "es": "Módulo 2: La Importancia Crítica del EPP y Aplicación Práctica",
        },
        lessons: [
          {
            id: "les-nr6-2-1",
            order: 1,
            title: {
              "pt-BR": "Instrução Padrão: A Importância do EPI na Preservação da Vida e Cultura de Segurança",
              "en": "Standard Instruction: The Vital Role of PPE in Preserving Life & Safety Culture",
              "es": "Instrucción Estándar: La Importancia del EPP en la Preservación de la Vida",
            },
            durationMinutes: 20,
            contentType: "video",
            videoUrl: "vOUp6jhnJI8",
            contentDetail: {
              objective: {
                "pt-BR": "Internalizar a cultura de segurança interdependente, reconhecer que o EPI protege o futuro do colaborador e saber conduzir o diálogo diário de segurança (DDS) sobre proteção individual.",
                "en": "Internalize an interdependent safety culture and understand how PPE protects life beyond compliance.",
                "es": "Interiorizar la cultura de seguridad y reconocer que el EPP protege la vida y el futuro del trabajador.",
              },
              introduction: {
                "pt-BR": "O uso do EPI vai muito além de uma exigência legal ou protocolo de auditoria. Ele representa o compromisso do trabalhador com sua própria vida, com seus companheiros de equipe e com sua família que o espera ao final de cada turno.",
                "en": "PPE usage is not merely an audit rule; it represents a personal commitment to return home safely after every shift.",
                "es": "El uso del EPP trasciende la norma: representa el compromiso de volver a casa sano y salvo al terminar la jornada.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Por que o Acidente Acontece? O Fator Comportamental",
                    "en": "Why Do Accidents Occur? Behavioral Factors",
                    "es": "¿Por qué Ocurren los Accidentes? Factores de Comportamiento",
                  },
                  body: {
                    "pt-BR": "A grande maioria dos acidentes com lesões graves na indústria decorre de excesso de confiança, pressa, desatenção ou a falsa impressão de que 'é só um servicinho rápido de 2 minutos'. O perigo não espera o tempo passar: uma fagulha nos olhos, um respingo químico ou uma batida na cabeça ocorrem em centésimos de segundo.",
                    "en": "Overconfidence, rush, and the myth of 'a quick two-minute job' cause devastating injuries. Hazards strike in milliseconds.",
                    "es": "El exceso de confianza y la prisa causan lesiones graves. Los peligros ocurren en fracciones de segundo.",
                  },
                },
                {
                  title: {
                    "pt-BR": "A Cultura do Cuidado Ativo: Eu Cuido de Mim, de Você e Deixo Você Cuidar de Mim",
                    "en": "Active Care Culture: I Protect Myself, You, and Accept Your Feedback",
                    "es": "Cultura del Cuidado Activo: Me Cuido, Te Cuido y Dejo que Me Cuides",
                  },
                  body: {
                    "pt-BR": "Na RSS3 Soluções Industriais, todo colaborador tem o direito de recusa e o dever de intervir caso observe um colega sem o EPI adequado. Intervir para proteger um companheiro de equipe não é dedo-duro: é um ato de respeito e preservação da vida.",
                    "en": "At RSS3, every employee has stop-work authority and the duty to intervene if a peer is unprotected.",
                    "es": "En RSS3, todo colaborador tiene la autoridad y el deber de intervenir si observa a un compañero sin EPP.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "Nenhum trabalho é tão urgente ou importante que não possa ser executado com total segurança.",
                  "en": "No job is so urgent or critical that it cannot be done with absolute safety.",
                  "es": "Ningún trabajo es tan urgente que no pueda realizarse con total seguridad.",
                },
                {
                  "pt-BR": "O EPI bem ajustado e utilizado corretamente salva vidas todos os dias na indústria pesada.",
                  "en": "Properly fitted and maintained PPE saves lives every day in heavy industry.",
                  "es": "El EPP bien ajustado y mantenido salva vidas diariamente en la industria.",
                },
              ],
            },
          },
        ],
      },
    ],
    finalAssessment: {
      id: "exam-nr6-epi",
      order: 1,
      title: {
        "pt-BR": "Avaliação Formal Teórica de NR-6 e Equipamentos de Proteção Individual",
        "en": "Formal Theoretical Assessment: NR-6 & Personal Protective Equipment",
        "es": "Evaluación Teórica Formal: NR-6 y Equipos de Protección Individual",
      },
      description: {
        "pt-BR": "Verificação de conformidade conceitual e regulatória da NR-6, responsabilidades legais, inspeção de CA e procedimentos operacionais seguros.",
        "en": "Regulatory compliance check on NR-6, legal obligations, CA inspection, and operational PPE safety.",
        "es": "Verificación de cumplimiento de la NR-6, responsabilidades legales y procedimientos operativos.",
      },
      scope: "course",
      estimatedMinutes: 20,
      questionsCount: 5,
      passingScorePercent: 70,
      maxAttempts: 3,
      isAvailable: true,
      availabilityNotice: {
        "pt-BR": "Avaliação teórica disponibilizada após conclusão de todas as aulas de NR-6.",
        "en": "Theoretical assessment available upon completion of all NR-6 lessons.",
        "es": "Evaluación teórica disponible tras completar todas las lecciones de NR-6.",
      },
      questions: [
        {
          id: "q-nr6-1",
          order: 1,
          question: {
            "pt-BR": "1. Conforme a NR-6, em qual situação a empresa deve prioritariamente fornecer e exigir o uso de EPI pelo colaborador?",
            "en": "1. According to NR-6, when must the company prioritize the provision and mandatory use of PPE?",
            "es": "1. Según la NR-6, ¿cuándo debe la empresa suministrar y exigir prioritariamente el uso de EPP?",
          },
          options: [
            {
              id: "q1-a",
              text: {
                "pt-BR": "Sempre como primeira opção, antes mesmo de avaliar qualquer medida de proteção coletiva ou engenharia.",
                "en": "Always as the first option, before assessing any collective protection or engineering measures.",
                "es": "Siempre como primera opción, antes de evaluar cualquier medida de protección colectiva.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! Na hierarquia de controle, o EPI é a última linha de defesa, adotado quando as medidas coletivas não forem viáveis ou suficientes.",
                "en": "Incorrect! PPE is the final line of defense after collective and engineering controls.",
                "es": "Incorrecto. El EPP es la última línea de defensa en la jerarquía de control.",
              },
            },
            {
              id: "q1-b",
              text: {
                "pt-BR": "Quando as medidas de proteção coletiva não forem viáveis, estiverem sendo implantadas ou não oferecerem proteção completa contra os riscos.",
                "en": "When collective protection measures are not feasible, being deployed, or do not offer complete protection against hazards.",
                "es": "Cuando las medidas de protección colectiva no sean viables o no brinden protección completa contra los riesgos.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A NR-6 determina que o EPI deve ser fornecido quando as medidas de ordem geral não ofereçam completa proteção.",
                "en": "Correct! NR-6 mandates PPE whenever collective protections are insufficient or during implementation.",
                "es": "¡Correcto! La NR-6 establece el uso de EPP cuando las protecciones colectivas no son suficientes.",
              },
            },
            {
              id: "q1-c",
              text: {
                "pt-BR": "Apenas se o trabalhador solicitar formalmente por escrito ao departamento de recursos humanos.",
                "en": "Only if the employee formally requests it in writing to the HR department.",
                "es": "Solo si el trabajador lo solicita por escrito a recursos humanos.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! O fornecimento e a exigência de uso decorrem de obrigação legal do empregador vinculada aos riscos da função.",
                "en": "Incorrect! PPE provision is an employer legal duty driven by hazard assessment.",
                "es": "Incorrecto. El suministro de EPP es una obligación legal del empleador.",
              },
            },
          ],
        },
        {
          id: "q-nr6-2",
          order: 2,
          question: {
            "pt-BR": "2. Quem é responsável pelo custo financeiro da aquisição dos EPIs destinados aos colaboradores?",
            "en": "2. Who is legally responsible for bearing the financial cost of purchasing PPE for employees?",
            "es": "2. ¿Quién es responsable por el costo financiero de la adquisición del EPP?",
          },
          options: [
            {
              id: "q2-a",
              text: {
                "pt-BR": "A organização empregadora, que deve fornecer gratuitamente ao empregado o EPI adequado ao risco.",
                "en": "The employer, who must provide hazard-compliant PPE free of charge to the employee.",
                "es": "La empresa empleadora, que debe suministrar gratuitamente el EPP adecuado al riesgo.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! É expressamente proibido descontar ou cobrar do colaborador qualquer valor pela entrega do EPI obrigatório.",
                "en": "Correct! Employers are strictly prohibited from charging employees for required PPE.",
                "es": "¡Correcto! Está prohibido cobrar al colaborador por el EPP obligatorio.",
              },
            },
            {
              id: "q2-b",
              text: {
                "pt-BR": "O colaborador, por meio de desconto mensal direto em folha de pagamento parcelado em 12 vezes.",
                "en": "The employee, through monthly payroll deductions split into 12 installments.",
                "es": "El trabajador, mediante descuento en nómina en cuotas mensuales.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto e ilegal! O fornecimento deve ser integralmente gratuito.",
                "en": "Incorrect and illegal! PPE must be completely free of charge.",
                "es": "Incorrecto e ilegal. El suministro debe ser 100% gratuito.",
              },
            },
          ],
        },
        {
          id: "q-nr6-3",
          order: 3,
          question: {
            "pt-BR": "3. O que comprova a conformidade técnica e a autorização legal para um EPI ser comercializado e utilizado no Brasil?",
            "en": "3. What verifies technical compliance and legal authorization for PPE to be commercialized and used in Brazil?",
            "es": "3. ¿Qué comprueba la conformidad técnica y autorización legal para que un EPP se use en Brasil?",
          },
          options: [
            {
              id: "q3-a",
              text: {
                "pt-BR": "Apenas a nota fiscal de compra emitida pelo distribuidor local de ferramentas.",
                "en": "Only the purchase receipt issued by the local hardware distributor.",
                "es": "Solo la factura de compra emitida por la ferretería local.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! A nota fiscal comprova a transação comercial, mas não a aprovação técnica do dispositivo.",
                "en": "Incorrect! An invoice proves purchase, not safety compliance.",
                "es": "Incorrecto. La factura prueba la compra pero no la homologación técnica.",
              },
            },
            {
              id: "q3-b",
              text: {
                "pt-BR": "O Certificado de Aprovação (CA) válido expedido pelo órgão nacional competente em segurança e saúde no trabalho.",
                "en": "A valid Certificate of Approval (CA) issued by the competent national occupational safety authority.",
                "es": "El Certificado de Aprobación (CA) vigente expedido por la autoridad nacional competente.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O número do CA gravado de forma indelével no equipamento atesta que o produto passou por testes acreditados.",
                "en": "Correct! The CA number indelibly marked on the PPE proves accredited safety testing.",
                "es": "¡Correcto! El número de CA grabado en el equipo acredita las pruebas de homologación.",
              },
            },
          ],
        },
        {
          id: "q-nr6-4",
          order: 4,
          question: {
            "pt-BR": "4. Ao identificar uma trinca no capacete de segurança ou rasgo na luva de proteção química antes do turno, qual deve ser a conduta do colaborador?",
            "en": "4. Upon discovering a crack in a hardhat or tear in chemical gloves before shift start, what must the worker do?",
            "es": "4. Al detectar una fisura en el casco o rotura en los guantes antes del turno, ¿cuál debe ser la conducta?",
          },
          options: [
            {
              id: "q4-a",
              text: {
                "pt-BR": "Fazer um reparo provisório com fita adesiva ou cola e continuar a atividade até a próxima semana.",
                "en": "Make a makeshift repair using duct tape or glue and continue working until next week.",
                "es": "Repararlo provisionalmente con cinta adhesiva y continuar el trabajo.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto e proibido! Nunca faça improvisações ou reparos caseiros em equipamentos de segurança.",
                "en": "Incorrect and prohibited! Makeshift repairs on safety equipment are never permitted.",
                "es": "Incorrecto y prohibido. Nunca se deben realizar reparaciones improvisadas en el EPP.",
              },
            },
            {
              id: "q4-b",
              text: {
                "pt-BR": "Comunicar imediatamente à liderança e ao setor de SST para substituição imediata do EPI antes de iniciar o trabalho.",
                "en": "Immediately notify leadership and the safety team for immediate replacement before starting work.",
                "es": "Comunicar de inmediato al supervisor y seguridad para su sustitución inmediata antes de iniciar.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Equipamento danificado perde a capacidade protetiva e deve ser substituído antes da exposição ao risco.",
                "en": "Correct! Damaged PPE compromises worker safety and must be replaced prior to hazard exposure.",
                "es": "¡Correcto! El EPP dañado debe sustituirse antes de comenzar cualquier actividad de riesgo.",
              },
            },
          ],
        },
        {
          id: "q-nr6-5",
          order: 5,
          question: {
            "pt-BR": "5. A conclusão com aproveitamento deste curso EAD de NR-6 confere habilitação prática para atividades regulamentadas de alto risco (ex: NR-35 em altura, NR-33 espaço confinado)?",
            "en": "5. Does passing this online NR-6 course grant hands-on qualification for regulated high-risk activities (e.g. NR-35 height, NR-33 confined space)?",
            "es": "5. ¿La aprobación de este curso online de NR-6 otorga habilitación práctica para actividades de alto riesgo (NR-35, NR-33)?",
          },
          options: [
            {
              id: "q5-a",
              text: {
                "pt-BR": "NÃO. Este certificado atesta a conclusão de conteúdo teórico. Atividades de alto risco exigem treinamento prático presencial validado e ASO com aptidão médica vigente.",
                "en": "NO. This certificate certifies theoretical knowledge. Regulated high-risk tasks strictly require hands-on training and valid medical clearance.",
                "es": "NO. Este certificado avala conocimiento teórico. Las tareas de alto riesgo exigen práctica presencial y aptitud médica vigente.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Conforme a diretriz de integridade da RSS3, o EAD nunca substitui a qualificação prática presencial e a liberação formal do ASO.",
                "en": "Correct! As per RSS3 safety guidelines, online learning never waives hands-on certified qualifications and occupational clearance.",
                "es": "¡Correcto! El aprendizaje online no sustituye la capacitación práctica presencial ni la aptitud médica.",
              },
            },
            {
              id: "q5-b",
              text: {
                "pt-BR": "SIM. A aprovação no portal online libera automaticamente o colaborador para qualquer atividade na fábrica sem necessidade de prática presencial.",
                "en": "YES. Passing the online portal automatically authorizes the employee for any plant work without in-person training.",
                "es": "SÍ. La aprobación online habilita automáticamente para cualquier trabajo sin práctica presencial.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto e expressamente proibido pelas normas regulamentadoras e pelo código de segurança da RSS3.",
                "en": "Incorrect and strictly prohibited by occupational safety standards and RSS3 safety bylaws.",
                "es": "Incorrecto y prohibido por las normas reguladoras y directrices de RSS3.",
              },
            },
          ],
        },
      ],
    },
  },
  {
    id: "c-nr35-trabalho-altura",
    slug: "nr-35-trabalho-em-altura-seguranca-operacional",
    title: {
      "pt-BR": "NR-35: Trabalho em Altura e Segurança Operacional",
      "en": "NR-35: Work at Height & Operational Safety",
      "es": "NR-35: Trabajo en Altura y Seguridad Operativa",
    },
    description: {
      "pt-BR": "Capacitação completa em NR-35: conceitos fundamentais, análise de risco, sistemas de proteção contra quedas (SPQ), inspeção de EPIs de altura, nós, ancoragens e noções de resgate e emergência.",
      "en": "Comprehensive NR-35 work at height training: hazard analysis, fall protection systems, harness & lanyard inspection, anchor points, and emergency rescue concepts.",
      "es": "Capacitación en NR-35: análisis de riesgos, sistemas de protección contra caídas, inspección de arneses, anclajes y nociones de rescate.",
    },
    schoolId: "seguranca-epi",
    schoolName: {
      "pt-BR": "Segurança do Trabalho e EPIs",
      "en": "Occupational Safety & PPE",
      "es": "Seguridad Laboral y EPP",
    },
    workloadHours: 16,
    level: "intermediate",
    modality: "hybrid",
    isMandatory: true,
    mandatoryFor: ["Montador de Andaime", "Operador de Hidrojato", "Pintor Industrial", "Líder de Frente", "Fiscal de Segurança"],
    targetAudience: {
      "pt-BR": "Trabalhadores, técnicos, operadores e encarregados da RSS3 que realizam ou supervisionam trabalhos com diferença de nível superior a 2,00 metros em plantas industriais e paradas de manutenção.",
      "en": "RSS3 frontline operators, technicians, and foremen performing or supervising tasks at heights exceeding 2.0 meters.",
      "es": "Trabajadores y supervisores de RSS3 que realizan labores con diferencia de nivel superior a 2 metros.",
    },
    modulesCount: 2,
    lessonsCount: 6,
    thumbnailGradient: "from-amber-600 to-slate-950",
    badgeCode: "NR-35",
    updatedAtDate: "2026-10-16",
    modules: [
      {
        id: "mod-nr35-1",
        order: 1,
        title: {
          "pt-BR": "Módulo 1: Fundamentos Normativos, Riscos e Sistemas de Proteção contra Quedas",
          "en": "Module 1: Regulatory Fundamentals, Hazards & Fall Protection Systems",
          "es": "Módulo 1: Fundamentos Normativos, Riesgos y Sistemas Anticaídas",
        },
        lessons: [
          {
            id: "les-nr35-1-1",
            order: 1,
            title: {
              "pt-BR": "NR 35: Introdução e Normas Aplicáveis ao Trabalho em Altura",
              "en": "NR 35: Introduction & Standards Applicable to Work at Height",
              "es": "NR 35: Introducción y Normativa Aplicable al Trabajo en Altura",
            },
            durationMinutes: 20,
            contentType: "video",
            videoUrl: "QclDPxHakNY",
            contentDetail: {
              objective: {
                "pt-BR": "Compreender a definição de trabalho em altura pela NR-35, o campo de aplicação e as responsabilidades legais do empregador e do trabalhador.",
                "en": "Understand NR-35 definition of work at height (>2.0m), scope of application, and regulatory safety responsibilities.",
                "es": "Comprender la definición de trabajo en altura según la NR-35 y las responsabilidades de segurança.",
              },
              introduction: {
                "pt-BR": "Considera-se trabalho em altura toda atividade executada acima de 2,00 m (dois metros) do nível inferior, onde haja risco de queda. A NR-35 estabelece os requisitos mínimos e as medidas de proteção para o trabalho em altura, envolvendo o planejamento, a organização e a execução.",
                "en": "Work at height is defined as any activity executed above 2.0 meters with fall risk. NR-35 governs planning, organization, and execution.",
                "es": "Se considera trabajo en altura toda actividad realizada por encima de 2,00 metros del nivel inferior con riesgo de caída.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Critério dos 2 Metros e Hierarquia das Ações",
                    "en": "The 2-Meter Rule & Action Hierarchy",
                    "es": "El Criterio de 2 Metros y Jerarquía de Acciones",
                  },
                  body: {
                    "pt-BR": "A hierarquia de segurança em altura determina:\n1. Evitar o trabalho em altura sempre que existir meio alternativo de execução no nível do solo;\n2. Impedir a queda de trabalhadores através de proteções coletivas (guarda-corpos, telas);\n3. Minimizar as consequências da queda caso não possa ser evitada (sistemas de retenção com absorvedores de energia).",
                    "en": "1. Avoid height work if possible; 2. Prevent falls via collective systems; 3. Mitigate fall impact using energy absorbers.",
                    "es": "1. Evitar el trabajo en altura; 2. Impedir la caída con protecciones colectivas; 3. Minimizar las consecuencias.",
                  },
                },
                {
                  title: {
                    "pt-BR": "Aptidão Médica e Capacitação",
                    "en": "Medical Clearance & Training",
                    "es": "Aptitud Médica y Capacitación",
                  },
                  body: {
                    "pt-BR": "O trabalhador só é considerado autorizado para trabalho em altura se possuir capacitação teórica e prática (com carga horária mínima de 8 horas) e Atestado de Saúde Ocupacional (ASO) específico com avaliação clínica e psicossocial para altura dentro da validade.",
                    "en": "Workers must hold valid occupational medical clearance (ASO) and certified theoretical + practical qualification.",
                    "es": "El trabajador debe contar con ASO específico y capacitación teórica y práctica aprobada.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "Atividades acima de 2 metros exigem planejamento obrigatório e medidas preventivas de retenção ou restrição de queda.",
                  "en": "Tasks above 2m require formal planning and certified fall prevention/mitigation systems.",
                  "es": "Las tareas por encima de 2 metros exigen planificación y sistemas anticaídas certificados.",
                },
                {
                  "pt-BR": "A conclusão teórica online não substitui o treinamento prático presencial com simulador e ancoragens.",
                  "en": "Online theory does not replace in-person practical hands-on training with anchors and harness.",
                  "es": "La teoría online no sustituye la práctica presencial con equipos y anclajes.",
                },
              ],
            },
          },
          {
            id: "les-nr35-1-2",
            order: 2,
            title: {
              "pt-BR": "NR 35 Módulo 1: Análise de Risco (AR) e Permissão de Trabalho (PT)",
              "en": "NR 35 Module 1: Hazard Analysis & Work Permit Procedures",
              "es": "NR 35 Módulo 1: Análisis de Riesgo y Permiso de Trabajo",
            },
            durationMinutes: 25,
            contentType: "video",
            videoUrl: "CR5xDUX9_DI",
            contentDetail: {
              objective: {
                "pt-BR": "Dominar a elaboração e aplicação da Análise de Risco (AR), a emissão da Permissão de Trabalho (PT) e as condições impeditivas meteorológicas e operacionais.",
                "en": "Master Job Hazard Analysis (JHA), Work Permits (PT), and environmental/weather stop-work conditions.",
                "es": "Dominar el Análisis de Riesgo (AR), Permiso de Trabajo (PT) y condiciones de paralización por clima.",
              },
              introduction: {
                "pt-BR": "Todo trabalho em altura deve ser precedido de Análise de Risco (AR) detalhada. Para atividades não rotineiras, a emissão e validação formal da Permissão de Trabalho (PT) no local é obrigatória antes de qualquer subida.",
                "en": "Every task at height must be preceded by a formal Risk Analysis and Work Permit for non-routine operations.",
                "es": "Todo trabajo en altura debe contar con Análisis de Riesgo y Permiso de Trabajo formal antes del ascenso.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Fatores Obrigatórios na Análise de Risco (AR)",
                    "en": "Mandatory Factors in Hazard Analysis",
                    "es": "Factores Obligatorios en el Análisis de Riesgo",
                  },
                  body: {
                    "pt-BR": "• Local da execução e proximidade de redes elétricas energizadas;\n• Pontos de ancoragem certificados e sua capacidade de carga;\n• Condições meteorológicas adversas (ventos fortes, chuvas torrenciais, descargas atmosféricas);\n• Risco de queda de materiais e ferramentas para os níveis inferiores (isolamento de área);\n• Zona Livre de Queda (ZLQ) disponível sob o trabalhador.",
                    "en": "Inspect anchor capacity, overhead electrical lines, weather conditions, dropped object hazards, and Fall Clearance.",
                    "es": "Verificar anclajes, líneas eléctricas, clima, caída de herramientas y Zona Libre de Caída (ZLQ).",
                  },
                },
                {
                  title: {
                    "pt-BR": "Condições Impeditivas e Direito de Recusa",
                    "en": "Impediment Conditions & Stop-Work Authority",
                    "es": "Condiciones Impeditivas y Derecho de Rechazo",
                  },
                  body: {
                    "pt-BR": "Trabalhos em áreas externas devem ser imediatamente suspensos diante de ventos superiores aos limites do fabricante/procedimento, chuva com piso escorregadio, iluminação insuficiente ou falta de ponto de ancoragem seguro. O colaborador tem o dever de exercer o direito de recusa nessas condições.",
                    "en": "Stop work immediately upon high winds, lightning, slippery surfaces, or missing structural anchors.",
                    "es": "Detenga el trabajo ante vientos fuertes, lluvia, piso resbaloso o falta de anclajes seguros.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "A Análise de Risco deve considerar não apenas o risco do trabalhador cair, mas também o risco de queda de ferramentas sobre terceiros.",
                  "en": "Risk analysis must consider both worker fall hazards and dropped objects injuring ground personnel.",
                  "es": "El análisis de riesgo debe contemplar la caída del trabajador y de objetos sobre terceros.",
                },
              ],
            },
          },
          {
            id: "les-nr35-1-3",
            order: 3,
            title: {
              "pt-BR": "NR 35 Módulo 2: Sistemas de Proteção contra Quedas (SPQ) e Zona Livre de Queda (ZLQ)",
              "en": "NR 35 Module 2: Fall Protection Systems (FPS) & Fall Clearance Calculation",
              "es": "NR 35 Módulo 2: Sistemas Anticaídas y Cálculo de la Zona Libre de Caída",
            },
            durationMinutes: 25,
            contentType: "video",
            videoUrl: "GoWe4tXoaok",
            contentDetail: {
              objective: {
                "pt-BR": "Compreender os componentes do Sistema de Proteção contra Quedas (SPQ), fator de queda e como calcular a Zona Livre de Queda (ZLQ).",
                "en": "Understand Fall Protection System components, Fall Factor mechanics, and how to compute Fall Clearance.",
                "es": "Comprender componentes del SPQ, factor de caída y cálculo de la Zona Libre de Caída (ZLQ).",
              },
              introduction: {
                "pt-BR": "O SPQ pode ser de retenção de queda (para travar o corpo com segurança após o início da queda) ou de restrição de movimentação (para impedir fisicamente que o trabalhador atinja a borda).",
                "en": "Fall Protection Systems either arrest a fall safely or restrict movement preventing access to edges.",
                "es": "El sistema anticaídas detiene la caída con seguridad o restringe el acceso al borde desprotegido.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Fatores de Queda (FQ 0, FQ 1 e FQ 2)",
                    "en": "Fall Factors (FF 0, FF 1 & FF 2)",
                    "es": "Factores de Caída (FC 0, FC 1 y FC 2)",
                  },
                  body: {
                    "pt-BR": "• Fator 0: Ponto de ancoragem acima da cabeça do trabalhador (situação ideal, menor distância de queda livre e menor impacto no corpo);\n• Fator 1: Ponto de ancoragem na altura do anel dorsal do cinto (queda livre igual ao comprimento do talabarte);\n• Fator 2: Ponto de ancoragem nos pés do trabalhador (situação mais perigosa, maior impacto e maior distância de queda — DEVE SER EVITADO ao máximo).",
                    "en": "Factor 0: Anchor above head (optimal); Factor 1: Anchor at dorsal ring; Factor 2: Anchor at feet (highest impact, avoid).",
                    "es": "Factor 0: Anclaje sobre la cabeza (ideal); Factor 1: Anclaje al pecho; Factor 2: Anclaje a los pies (muy peligroso).",
                  },
                },
                {
                  title: {
                    "pt-BR": "Cálculo da Zona Livre de Queda (ZLQ)",
                    "en": "Calculating Total Fall Clearance",
                    "es": "Cálculo de la Zona Libre de Caída (ZLQ)",
                  },
                  body: {
                    "pt-BR": "ZLQ é a distância vertical mínima necessária entre o ponto de ancoragem e o solo ou obstáculo inferior para que o trabalhador não colida contra o chão em caso de queda:\nZLQ = Comprimento do Talabarte + Abertura do Absorvedor de Energia (desaceleração) + Altura do Trabalhador + Distância de Segurança (mínimo 1 metro).",
                    "en": "Clearance = Lanyard length + Deceleration distance + Worker height + Safety safety margin (min 1m).",
                    "es": "ZLQ = Longitud del cabo + Despliegue del absorbedor + Estatura del trabajador + Margen de segurança (mín 1m).",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "Nunca use talabarte duplo com absorvedor sem verificar se a ZLQ disponível é suficiente (geralmente exige pelo menos 5,5 a 6 metros livres).",
                  "en": "Never use energy-absorbing lanyards without ensuring required clearance height (typically 5.5 - 6m).",
                  "es": "Verifique siempre que la altura disponible sea suficiente para la apertura del absorbedor.",
                },
              ],
            },
          },
        ],
      },
      {
        id: "mod-nr35-2",
        order: 2,
        title: {
          "pt-BR": "Módulo 2: Equipamentos, Inspeção Pré-Uso, Ancoragens e Plano de Emergência",
          "en": "Module 2: Equipment, Pre-Use Inspection, Anchorages & Rescue Plan",
          "es": "Módulo 2: Equipos, Inspección, Anclajes y Plan de Emergencia",
        },
        lessons: [
          {
            id: "les-nr35-2-1",
            order: 1,
            title: {
              "pt-BR": "NR 35 Módulo 3: Cinto Paraquedista, Talabartes, Trava-Quedas e Conectores",
              "en": "NR 35 Module 3: Full-Body Harness, Lanyards, Rope Grabs & Carabiners",
              "es": "NR 35 Módulo 3: Arnés Tipo Paracaidista, Cabos de Vida, Frenos y Mosquetones",
            },
            durationMinutes: 25,
            contentType: "video",
            videoUrl: "Pn40szq2fR8",
            contentDetail: {
              objective: {
                "pt-BR": "Conhecer as características técnicas do cinto paraquedista, talabartes em 'Y', trava-quedas retráteis e para linha de vida, e mosquetões com trava dupla.",
                "en": "Master technical specs of full-body harness, Y-lanyards, fall arresters, and double-action locking carabiners.",
                "es": "Conocer especificaciones técnicas de arneses, cabos de vida en Y, frenos anticaídas y conectores.",
              },
              introduction: {
                "pt-BR": "O cinto de segurança tipo paraquedista é o único modelo aprovado para retenção de quedas no Brasil. Cintos abdominais são estritamente proibidos para retenção, servindo unicamente para posicionamento de trabalho.",
                "en": "Full-body harness is the only approved device for fall arrest. Waist belts are forbidden for fall arresting.",
                "es": "El arnés de cuerpo entero es el único aprobado para detención de caídas. Los cinturones simples están prohibidos.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Pontos de Conexão do Cinto Paraquedista",
                    "en": "Harness Connection Points",
                    "es": "Puntos de Conexión del Arnés",
                  },
                  body: {
                    "pt-BR": "• Ponto Dorsal (A): Destinado exclusivamente para conexão do sistema de retenção de quedas (talabartes e trava-quedas);\n• Ponto Peitoral / Esternal (A ou A/2): Utilizado para trava-quedas em linhas verticais rígidas (escadas tipo marinheiro) e resgate;\n• Pontos Laterais: Exclusivos para talabarte de posicionamento (NUNCA para retenção de queda);\n• Ponto Umbilical / Ventral: Utilizado em acesso por corda e descensões controladas.",
                    "en": "Dorsal point (A) is for fall arrest; Sternal for ladder climbs; Lateral for work positioning only.",
                    "es": "Punto dorsal (A) para detención; esternal para ascenso vertical; laterales solo para posicionamiento.",
                  },
                },
                {
                  title: {
                    "pt-BR": "Critérios de Conectores (Mosquetões)",
                    "en": "Carabiners & Connectors",
                    "es": "Conectores y Mosquetones",
                  },
                  body: {
                    "pt-BR": "Todos os mosquetões utilizados na RSS3 devem possuir sistema de trava de segurança com abertura em no mínimo 2 movimentos voluntários e independentes (ex: girar e abrir). Mosquetões sem rosca ou com trava simples não são permitidos em operações de risco.",
                    "en": "Carabiners must feature automatic double-action locking mechanisms to prevent accidental rollout.",
                    "es": "Los mosquetones deben contar con cierre automático de doble movimiento independiente.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "O cinto deve estar perfeitamente ajustado ao corpo do colaborador: folgas excessivas podem causar traumas severos nos órgãos e coluna durante a desaceleração.",
                  "en": "Harness must fit snugly: excessive slack causes internal trauma during sudden deceleration.",
                  "es": "El arnés debe estar bien ajustado al cuerpo para evitar lesiones severas en una caída.",
                },
              ],
            },
          },
          {
            id: "les-nr35-2-2",
            order: 2,
            title: {
              "pt-BR": "NR 35 Módulo 4: Pontos de Ancoragem, Linhas de Vida e Inspeção Pré-Uso",
              "en": "NR 35 Module 4: Anchor Points, Lifelines & Daily Pre-Use Inspection",
              "es": "NR 35 Módulo 4: Puntos de Anclaje, Líneas de Vida e Inspección Previa",
            },
            durationMinutes: 25,
            contentType: "video",
            videoUrl: "uxxpCbQKyF8",
            contentDetail: {
              objective: {
                "pt-BR": "Aprender os critérios de seleção e certificação de pontos de ancoragem (NR-35 Anexo II), linhas de vida horizontais e verticais, e rotina de inspeção pré-uso.",
                "en": "Learn anchor selection & certification criteria (Annex II), horizontal/vertical lifelines, and pre-use inspection.",
                "es": "Aprender criterios de anclajes certificados (Anexo II), líneas de vida e inspección previa.",
              },
              introduction: {
                "pt-BR": "O ponto de ancoragem é o elo estrutural que suportará toda a carga de impacto no momento da queda. Conectar-se a estruturas improvisadas, eletrocalhas ou tubulações de processo sem certificação é uma das principais causas de acidentes fatais.",
                "en": "Anchors bear the entire impact load. Connecting to pipes, conduits, or uncertified structures is strictly prohibited.",
                "es": "El punto de anclaje sostiene toda la fuerza de impacto. Está prohibido anclarse a tuberías o bandejas de cables.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Requisitos do Sistema de Ancoragem",
                    "en": "Anchor System Requirements",
                    "es": "Requisitos del Sistema de Anclaje",
                  },
                  body: {
                    "pt-BR": "Conforme o Anexo II da NR-35, os pontos de ancoragem devem:\n• Ser selecionados ou projetados por profissional legalmente habilitado;\n• Suportar carga de no mínimo 1.500 kgf (15 kN) por trabalhador conectado ou 2.200 kgf para pontos estruturais;\n• Possuir marcação indelével com indicação de carga máxima e número de usuários simultâneos autorizados.",
                    "en": "Anchors must be certified by a qualified engineer and support at least 15 kN (1,500 kgf) per connected worker.",
                    "es": "Los anclajes deben soportar mínimo 15 kN por trabajador y estar avalados por un profesional calificado.",
                  },
                },
                {
                  title: {
                    "pt-BR": "Inspeção Pré-Uso Obrigatória",
                    "en": "Mandatory Pre-Use Inspection",
                    "es": "Inspección Previa Obligatoria",
                  },
                  body: {
                    "pt-BR": "Antes de cada jornada, o trabalhador deve verificar:\n• Fitas do cinto: cortes, desfiamentos, queimaduras químicas ou desgaste por atrito;\n• Costuras de segurança: linhas rompidas ou frouxas;\n• Peças metálicas: deformações, trincas, ferrugem ou rebarbas;\n• Indicadores de queda: se a etiqueta de impacto do cinto ou absorvedor estiver estourada, o equipamento deve ser descartado imediatamente.",
                    "en": "Inspect webbing for cuts or chemical burns, check stitch integrity, inspect metal D-rings, and verify fall indicators.",
                    "es": "Inspeccionar cintas, costuras, argollas metálicas y testigos de caída antes de cada uso.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "Equipamento que já suportou o impacto de uma queda real deve ser retirado de serviço e inutilizado imediatamente.",
                  "en": "Any PPE that has arrested a fall must be immediately taken out of service and destroyed.",
                  "es": "El equipo que haya soportado una caída real debe ser retirado e inutilizado de inmediato.",
                },
              ],
            },
          },
          {
            id: "les-nr35-2-3",
            order: 3,
            title: {
              "pt-BR": "NR 35 Módulo 5: Suspensão Inerte, Noções de Resgate e Emergências em Altura",
              "en": "NR 35 Module 5: Suspension Trauma, Rescue Principles & Emergency Procedures",
              "es": "NR 35 Módulo 5: Trauma por Suspensión, Rescate y Emergencias en Altura",
            },
            durationMinutes: 25,
            contentType: "video",
            videoUrl: "OMG8HWycMMQ",
            contentDetail: {
              objective: {
                "pt-BR": "Compreender a gravidade da síndrome da suspensão inerte (trauma de suspensão), tempo crítico de resposta e as condutas de resgate e primeiros socorros.",
                "en": "Understand orthostatic suspension trauma severity, critical rescue time window, and emergency first response.",
                "es": "Comprender la gravedad del trauma por suspensión inerte, tiempos críticos de rescate y primeros auxilios.",
              },
              introduction: {
                "pt-BR": "Mesmo após o cinto de segurança e o absorvedor evitarem a colisão contra o solo, o trabalhador suspenso e imóvel corre risco de morte em poucos minutos devido ao acúmulo de sangue venoso nos membros inferiores e à compressão das veias femorais.",
                "en": "Even after successful fall arrest, an immobilized suspended worker faces fatal risks within minutes from venous pooling.",
                "es": "Tras detener la caída, el trabajador suspendido corre peligro de muerte en pocos minutos por acumulación venosa.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "A Síndrome da Suspensão Inerte (Trauma de Suspensão)",
                    "en": "Suspension Trauma Mechanics",
                    "es": "Mecanismo del Trauma por Suspensión",
                  },
                  body: {
                    "pt-BR": "Quando o corpo fica suspenso pelas fitas da virilha sem movimentação das pernas, a bomba muscular da panturrilha para de funcionar. O sangue oxigenado deixa de retornar adequadamente ao cérebro e coração, podendo levar ao desmaio em menos de 5 a 10 minutos e à parada cardíaca se o resgate demorar.\nO trabalhador consciente deve pedalar no ar ou apoiar os pés em uma fita estribo para aliviar a compressão.",
                    "en": "Lack of leg movement causes venous pooling. Loss of consciousness can occur in 5-10 minutes. Use foot stirrups to relieve pressure.",
                    "es": "La falta de movimiento muscular acumula sangre en las piernas. Se pierde el conocimiento en 5-10 minutos.",
                  },
                },
                {
                  title: {
                    "pt-BR": "Plano de Resgate e Atendimento Inicial",
                    "en": "Rescue Planning & First Aid Protocol",
                    "es": "Plan de Rescate y Primeros Auxilios",
                  },
                  body: {
                    "pt-BR": "Toda frente de trabalho em altura deve ter equipe de emergência e recursos materiais de resgate previamente determinados na Análise de Risco. Ao resgatar a vítima inconsciente, evite deitá-la imediatamente de barriga para cima de forma abrupta para evitar sobrecarga súbita de sangue desoxigenado no coração (síndrome de refluxo). Mantenha a vítima sentada/semi-inclinada durante o atendimento médico.",
                    "en": "Every work site must possess a predefined rescue plan. Keep rescued unconscious workers semi-seated to prevent cardiac overload.",
                    "es": "Todo trabajo debe tener un plan de rescate previo. Mantenga a la víctima semisentada para evitar colapso cardíaco.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "O tempo de resposta para retirar um colaborador da suspensão inerte não deve ultrapassar 15 minutos.",
                  "en": "Emergency response time to rescue a suspended worker must not exceed 15 minutes.",
                  "es": "El tiempo de rescate de un trabajador suspendido no debe superar los 15 minutos.",
                },
                {
                  "pt-BR": "A RSS3 prioriza técnicas de resgate que possam ser realizadas a partir do solo ou por plano rígido sem expor os socorristas a riscos desnecessários.",
                  "en": "RSS3 prioritizes rescue protocols executed from ground or stable platforms without endangering rescuers.",
                  "es": "RSS3 prioriza técnicas de rescate seguras sin exponer a los rescatistas.",
                },
              ],
            },
          },
        ],
      },
    ],
    finalAssessment: {
      id: "exam-nr35-altura",
      order: 1,
      title: {
        "pt-BR": "Avaliação Formal Teórica de NR-35 e Trabalho em Altura",
        "en": "Formal Theoretical Assessment: NR-35 & Work at Height",
        "es": "Evaluación Teórica Formal: NR-35 y Trabajo en Altura",
      },
      description: {
        "pt-BR": "Verificação de conformidade da NR-35: Análise de Risco, Fatores de Queda, Zona Livre de Queda, inspeção de cinto paraquedista e trauma de suspensão.",
        "en": "Regulatory compliance exam: NR-35 risk analysis, fall factors, clearance calculation, harness inspection, and suspension trauma.",
        "es": "Examen de cumplimiento de la NR-35: análisis de riesgos, factores de caída, ZLQ, inspección y trauma por suspensión.",
      },
      scope: "course",
      estimatedMinutes: 25,
      questionsCount: 6,
      passingScorePercent: 70,
      maxAttempts: 3,
      isAvailable: true,
      availabilityNotice: {
        "pt-BR": "Avaliação liberada após conclusão de todas as 6 aulas teóricas de NR-35.",
        "en": "Exam available upon completion of all 6 NR-35 theoretical lessons.",
        "es": "Evaluación habilitada tras completar las 6 lecciones de NR-35.",
      },
      questions: [
        {
          id: "q-nr35-1",
          order: 1,
          question: {
            "pt-BR": "1. A partir de qual altura, medida em relação ao nível inferior onde haja risco de queda, a atividade é classificada formalmente como 'Trabalho em Altura' pela NR-35?",
            "en": "1. Above what height difference with fall risk is an activity legally classified as 'Work at Height' by NR-35?",
            "es": "1. ¿A partir de qué altura con riesgo de caída una actividad se clasifica como 'Trabajo en Altura' por la NR-35?",
          },
          options: [
            {
              id: "q1-a",
              text: {
                "pt-BR": "Acima de 2,00 metros (dois metros).",
                "en": "Above 2.00 meters (two meters).",
                "es": "Por encima de 2,00 metros (dos metros).",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O item 35.1.2 da NR-35 define expressamente o trabalho em altura como toda atividade executada acima de 2,00 m do nível inferior com risco de queda.",
                "en": "Correct! NR-35 specifically defines work at height as tasks executed above 2.0m with fall danger.",
                "es": "¡Correcto! La NR-35 establece 2,00 metros como umbral regulatorio para trabajo en altura.",
              },
            },
            {
              id: "q1-b",
              text: {
                "pt-BR": "Acima de 4,00 metros (quatro metros).",
                "en": "Above 4.00 meters (four meters).",
                "es": "Por encima de 4,00 metros (cuatro metros).",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! A regra de segurança estipula 2 metros como limite regulamentar.",
                "en": "Incorrect! The regulatory threshold is 2.0 meters.",
                "es": "Incorrecto. El límite legal es de 2,00 metros.",
              },
            },
          ],
        },
        {
          id: "q-nr35-2",
          order: 2,
          question: {
            "pt-BR": "2. Qual Fator de Queda (FQ) representa a situação de maior risco e maior força de impacto transmitida ao corpo do trabalhador?",
            "en": "2. Which Fall Factor (FF) represents the highest risk and greatest deceleration impact on the worker's body?",
            "es": "2. ¿Qué Factor de Caída representa la situación de mayor riesgo e impacto sobre el cuerpo?",
          },
          options: [
            {
              id: "q2-a",
              text: {
                "pt-BR": "Fator de Queda 0 (ponto de ancoragem localizado bem acima da cabeça do trabalhador).",
                "en": "Fall Factor 0 (anchor point situated well above worker's head).",
                "es": "Factor de Caída 0 (punto de anclaje ubicado por encima de la cabeza).",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! O Fator 0 é a condição ideal de segurança, onde a queda livre é praticamente nula.",
                "en": "Incorrect! Factor 0 is the safest position with minimal free fall.",
                "es": "Incorrecto. El Factor 0 es la situación ideal más segura.",
              },
            },
            {
              id: "q2-b",
              text: {
                "pt-BR": "Fator de Queda 2 (ponto de ancoragem fixado na altura dos pés do trabalhador).",
                "en": "Fall Factor 2 (anchor point connected at the worker's foot level).",
                "es": "Factor de Caída 2 (punto de anclaje fijado a la altura de los pies).",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! No Fator 2, a distância de queda livre equivale ao dobro do comprimento do talabarte, gerando o maior choque dinâmico sobre a estrutura e o cinto.",
                "en": "Correct! Factor 2 causes free fall twice the lanyard length, generating maximum peak impact force.",
                "es": "¡Correcto! En Factor 2 la caída libre es el doble del cabo de vida, generando el mayor impacto.",
              },
            },
          ],
        },
        {
          id: "q-nr35-3",
          order: 3,
          question: {
            "pt-BR": "3. O que é a Zona Livre de Queda (ZLQ) e por que ela deve ser calculada antes do uso de talabartes com absorvedor de energia?",
            "en": "3. What is Fall Clearance (ZLQ) and why must it be calculated prior to using energy-absorbing lanyards?",
            "es": "3. ¿Qué es la Zona Libre de Caída (ZLQ) y por qué debe calcularse antes de usar absorbedores?",
          },
          options: [
            {
              id: "q3-a",
              text: {
                "pt-BR": "É a distância vertical mínima livre necessária abaixo do ponto de ancoragem para garantir que o trabalhador não colida contra o solo ou obstáculos antes da retenção total da queda.",
                "en": "It is the minimum vertical distance required beneath the anchor to ensure the worker does not hit the ground or obstacles before fall arrest is complete.",
                "es": "Es la distancia vertical mínima libre bajo el anclaje para garantizar que el trabajador no choque contra el suelo u obstáculos.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Se a ZLQ for insuficiente, o trabalhador baterá no chão antes do absorvedor de impacto terminar de abrir.",
                "en": "Correct! Without adequate clearance, the worker hits the ground before energy absorption completes.",
                "es": "¡Correcto! Si la ZLQ es insuficiente, el trabajador impactará contra el suelo antes de detenerse.",
              },
            },
            {
              id: "q3-b",
              text: {
                "pt-BR": "É a área de isolamento com fitas zebradas no chão para impedir o tráfego de pedestres.",
                "en": "It is the barricaded ground exclusion zone preventing pedestrian traffic.",
                "es": "Es el área de aislamiento delimitada en el suelo para impedir el paso de personas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! Essa área delimitada no solo é a zona de exclusão/isolamento contra queda de materiais, não a ZLQ.",
                "en": "Incorrect! Barricaded ground is an exclusion zone, not Fall Clearance.",
                "es": "Incorrecto. La delimitación en el suelo es la zona de exclusión, no la ZLQ.",
              },
            },
          ],
        },
        {
          id: "q-nr35-4",
          order: 4,
          question: {
            "pt-BR": "4. Qual é o único tipo de cinto de segurança legalmente autorizado para retenção de quedas no Brasil?",
            "en": "4. What is the only type of safety harness legally authorized for fall arrest in Brazil?",
            "es": "4. ¿Cuál es el único tipo de arnés legalmente autorizado para detención de caídas?",
          },
          options: [
            {
              id: "q4-a",
              text: {
                "pt-BR": "Cinto abdominal simples de couro de eletricista.",
                "en": "Simple leather linesman waist belt.",
                "es": "Cinturón abdominal simple de cuero.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto e perigoso! O cinto abdominal não distribui a força de desaceleração e pode causar rompimento da coluna ou ejeção.",
                "en": "Incorrect and dangerous! Waist belts cause spinal fractures and cannot be used for fall arrest.",
                "es": "Incorrecto y peligroso. El cinturón abdominal no distribuye el impacto y está prohibido para detención.",
              },
            },
            {
              id: "q4-b",
              text: {
                "pt-BR": "Cinto de segurança tipo paraquedista com ponto de conexão dorsal ou esternal apropriado.",
                "en": "Full-body harness with dedicated dorsal or sternal fall-arrest connection points.",
                "es": "Arnés de seguridad tipo paracaidista de cuerpo entero con punto dorsal o esternal.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O cinto tipo paraquedista distribui a força de impacto pelas coxas, bacia e ombros.",
                "en": "Correct! Full-body harness distributes deceleration forces safely across thighs, pelvis, and shoulders.",
                "es": "¡Correcto! El arnés tipo paracaidista distribuye las cargas en piernas, pelvis y hombros.",
              },
            },
          ],
        },
        {
          id: "q-nr35-5",
          order: 5,
          question: {
            "pt-BR": "5. O que é a 'Síndrome da Suspensão Inerte' (Trauma de Suspensão) e por que o resgate de uma vítima pendurada deve ser executado no menor tempo possível?",
            "en": "5. What is 'Suspension Trauma' and why must an immobilized suspended victim be rescued in the shortest possible time?",
            "es": "5. ¿Qué es el 'Trauma por Suspensión' y por qué el rescate debe realizarse en el menor tiempo posible?",
          },
          options: [
            {
              id: "q5-a",
              text: {
                "pt-BR": "É o acúmulo de sangue venoso nas pernas causado pela gravidade e compressão das fitas do cinto, que reduz o fluxo cerebral e cardíaco e pode levar ao desmaio e morte em poucos minutos.",
                "en": "Venous blood pooling in lower limbs caused by gravity and harness strap pressure, starving brain and heart of blood, causing unconsciousness and death within minutes.",
                "es": "Es la acumulación de sangre en las piernas por gravedad y compresión del arnés, que priva de flujo al cerebro y corazón, pudiendo ser mortal en pocos minutos.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A suspensão imóvel é uma emergência crítica de tempo. Sem movimentação das panturrilhas, o retorno venoso colapsa rapidamente.",
                "en": "Correct! Suspension trauma is a time-critical emergency requiring rapid rescue and specialized medical handling.",
                "es": "¡Correcto! La suspensión inerte es una emergencia médica crítica que requiere rescate inmediato.",
              },
            },
            {
              id: "q5-b",
              text: {
                "pt-BR": "É apenas o medo de altura e pânico psicológico do trabalhador que passa sozinho em até 2 horas.",
                "en": "It is merely fear of heights and panic that dissipates naturally within two hours.",
                "es": "Es solo miedo a las alturas y pánico que pasa espontáneamente en dos horas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto! Trata-se de uma patologia médica física e circulatória gravíssima, com risco iminente de parada cardiorrespiratória.",
                "en": "Incorrect! It is a physiological circulatory collapse, not psychological panic.",
                "es": "Incorrecto. Se trata de un colapso circulatorio grave con riesgo de muerte.",
              },
            },
          ],
        },
        {
          id: "q-nr35-6",
          order: 6,
          question: {
            "pt-BR": "6. A aprovação nesta avaliação teórica online de NR-35 confere habilitação formal para realizar trabalhos em altura na fábrica sem a necessidade do treinamento prático presencial?",
            "en": "6. Does passing this online NR-35 exam grant legal authorization to work at height without in-person practical training?",
            "es": "6. ¿La aprobación de esta prueba teórica online autoriza a trabajar en altura sin capacitación práctica presencial?",
          },
          options: [
            {
              id: "q6-a",
              text: {
                "pt-BR": "NÃO. Este certificado valida exclusivamente a conclusão do conteúdo teórico. O trabalho em altura exige obrigatoriamente treinamento prático presencial validado por instrutor habilitado e ASO com aptidão médica vigente.",
                "en": "NO. This certificate certifies theoretical knowledge only. Work at height strictly requires certified hands-on practical training and a valid occupational medical clearance (ASO).",
                "es": "NO. Este certificado avala únicamente la teoría. El trabajo en altura exige obligatoriamente capacitación práctica presencial y aptitud médica vigente en el ASO.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Conforme a diretriz permanente do RSS3 Treinamentos (item 3.1 do AGENTS.md), o EAD nunca confere habilitação prática formal para atividades de alto risco.",
                "en": "Correct! Per permanent safety rules, online coursework never waives mandatory in-person practical qualification.",
                "es": "¡Correcto! El curso online nunca sustituye el entrenamiento práctico presencial en altura.",
              },
            },
            {
              id: "q6-b",
              text: {
                "pt-BR": "SIM. A certificação digital online dispensa qualquer prova física ou avaliação presencial em plantas industriais.",
                "en": "YES. Digital online certification waives any hands-on training or in-person verification.",
                "es": "SÍ. La certificación digital online exime de cualquier práctica presencial.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto e terminantemente proibido pelas normas regulamentadoras do Ministério do Trabalho e diretrizes de integridade da RSS3.",
                "en": "Incorrect and illegal under Brazilian labor safety laws and RSS3 operational safety policies.",
                "es": "Incorrecto y prohibido por las normas reguladoras laborales.",
              },
            },
          ],
        },
      ],
    },
  },
];

export const DEMO_PERSONAS: UserDemonstration[] = [];
 
 /**
  * Catálogo Oficial de MBAs Técnicos e Executivos da RSS3 Treinamentos
  * Estrutura idêntica à esteira de aprendizado integrada (estilo FM2S).
  */
 export const DEMO_MBAS: import("@/types").MbaProgram[] = [
   {
     id: "mba-operacoes-hidrojato",
     slug: "mba-operacoes-industriais-hidrojateamento",
     title: {
       "pt-BR": "MBA em Operações Industriais e Hidrojateamento de Alta Pressão",
       "en": "MBA in Industrial Operations and High-Pressure Hydroblasting",
       "es": "MBA en Operaciones Industriales e Hidrojet de Alta Presión",
     },
     subtitle: {
       "pt-BR": "Programa Executivo e Operacional de Alta Criticidade",
       "en": "High-Criticality Executive and Operational Program",
       "es": "Programa Ejecutivo y Operacional de Alta Criticidad",
     },
     description: {
       "pt-BR": "Torne-se um especialista em operações industriais de alta criticidade, paradas de manutenção, segurança de hidrojateamento até 2.800 bar, liderança de frentes de trabalho e excelência operacional na indústria pesada.",
       "en": "Become a specialist in high-criticality industrial operations, plant turnarounds, hydroblasting safety up to 2,800 bar, frontline leadership, and operational excellence.",
       "es": "Conviértase en un especialista en operaciones industriales de alta criticidad, paradas de planta, seguridad en hidrojet hasta 2.800 bar y excelencia operacional.",
     },
     category: {
       "pt-BR": "Operações Industriais",
       "en": "Industrial Operations",
       "es": "Operaciones Industriales",
     },
     accentColor: "#ef4444", // Vermelho FM2S / Laranja RSS3
     totalHours: 360,
     featured: true,
     courses: [
       {
         id: "mba-hj-c0",
         title: {
           "pt-BR": "Boas-vindas ao MBA em Operações Industriais e Hidrojateamento",
           "en": "Welcome to the MBA in Industrial Operations & Hydroblasting",
           "es": "Bienvenida al MBA en Operaciones Industriales e Hidrojet",
         },
         categoryTag: "Onboarding",
         workloadHours: 4,
         order: 1,
         isUnlocked: true,
         accentColor: "#0284c7",
         iconType: "user",
         description: {
           "pt-BR": "Diretrizes acadêmicas, metodologia de estudo, critérios de aprovação e navegação no portal.",
           "en": "Academic guidelines, study methodology, evaluation criteria, and portal navigation.",
           "es": "Directrices académicas, metodología de estudio y navegación en el portal.",
         },
         modulesCount: 1,
         lessonsCount: 3,
       },
       {
         id: "mba-hj-c1",
         courseId: "c-hidrojato-seguranca",
         title: {
           "pt-BR": "Segurança Operacional em Hidrojateamento de Alta Pressão",
           "en": "Operational Safety in High-Pressure Hydroblasting",
           "es": "Seguridad Operacional en Hidrojet de Alta Presión",
         },
         categoryTag: "Operações Críticas",
         workloadHours: 16,
         order: 2,
         isUnlocked: true,
         accentColor: "#0891b2",
         iconType: "droplet",
         description: {
           "pt-BR": "Inspeção de mangueiras, travas anti-chicoteamento, zonas de exclusão e normas operacionais.",
           "en": "Hose inspection, whip checks, exclusion zones, and operational safety standards.",
           "es": "Inspección de mangueras, seguros anticaída y zonas de exclusión.",
         },
         modulesCount: 2,
         lessonsCount: 4,
       },
       {
         id: "mba-hj-c2",
         title: {
           "pt-BR": "Especialista em Paradas de Manutenção e Gestão de Riscos Industriais",
           "en": "Specialist in Plant Turnarounds and Industrial Risk Management",
           "es": "Especialista en Paradas de Mantenimiento y Gestión de Riesgos",
         },
         categoryTag: "Gestão e Riscos",
         workloadHours: 60,
         order: 3,
         isUnlocked: true,
         accentColor: "#0284c7",
         iconType: "gear",
         description: {
           "pt-BR": "Planejamento e coordenação de paradas programadas, cronograma em caminho crítico, matriz LOTO e APR.",
           "en": "Shutdown planning, critical path schedules, LOTO matrix, and Job Safety Analysis.",
           "es": "Planificación de paradas de planta, cronograma crítico, matriz LOTO y APR.",
         },
         modulesCount: 4,
         lessonsCount: 12,
       },
       {
         id: "mba-hj-c3",
         title: {
           "pt-BR": "Metodologia 5S e Organização de Frentes Operacionais",
           "en": "5S Methodology and Operational Workplace Organization",
           "es": "Metodología 5S y Organización de Frentes Operacionales",
         },
         categoryTag: "Excelência Operacional",
         workloadHours: 40,
         order: 4,
         isUnlocked: false,
         unlockedReason: {
           "pt-BR": "Liberação automática após conclusão do Módulo de Gestão de Riscos.",
           "en": "Automatic unlock after completing the Risk Management module.",
           "es": "Liberación automática tras concluir el Módulo de Gestión de Riesgos.",
         },
         accentColor: "#84cc16",
         iconType: "document",
         description: {
           "pt-BR": "Aplicação dos 5 sensos em canteiros de obra, oficinas de hidrojateamento e almoxarifados industriais.",
           "en": "Applying 5S principles in industrial sites, hydroblasting shops, and warehouses.",
           "es": "Aplicación de 5S en frentes industriales y talleres de hidrojet.",
         },
         modulesCount: 3,
         lessonsCount: 8,
       },
       {
         id: "mba-hj-c4",
         title: {
           "pt-BR": "Liderança Operacional e Gestão de Equipes de Alto Desempenho",
           "en": "Frontline Leadership and High-Performance Team Management",
           "es": "Liderazgo Operacional y Gestión de Equipos de Alto Rendimiento",
         },
         categoryTag: "Liderança",
         workloadHours: 80,
         order: 5,
         isUnlocked: false,
         unlockedReason: {
           "pt-BR": "Liberação programada conforme cronograma letivo.",
           "en": "Scheduled unlock according to syllabus timeline.",
           "es": "Liberación programada según el cronograma lectivo.",
         },
         accentColor: "#f59e0b",
         iconType: "award",
         description: {
           "pt-BR": "Comunicação assertiva, feedback operacional, gestão de conflitos em campo e cultura de segurança interdependente.",
           "en": "Assertive communication, operational feedback, field conflict resolution, and interdependent safety culture.",
           "es": "Comunicación asertiva, retroalimentación y cultura de seguridad.",
         },
         modulesCount: 5,
         lessonsCount: 15,
       },
     ],
   },
 ];

