import { CourseDemonstration, SchoolCategory, UserDemonstration } from "@/types";
import { nr11CourseData } from "./courses/nr11-course";
import { excelCourseData } from "./courses/excel-course";
import { gestaoPessoasCourseData } from "./courses/gestao-pessoas-course";
import { gestaoProjetosCourseData } from "./courses/gestao-projetos-course";
import { gestaoQualidadeCourseData } from "./courses/gestao-qualidade-course";
import { wordCourseData } from "./courses/word-course";
import { powerBiCourseData } from "./courses/power-bi-course";
import { manutencaoIndustrialCourseData } from "./courses/manutencao-course";
import { pcmCourseData } from "./courses/pcm-course";
import { geometriaEspacialCourseData } from "./courses/geometria-course";
import { administracaoCourseData } from "./courses/administracao-course";
import { nr12CourseData } from "./courses/nr12-course";
import { periciaTrabalhistaCourseData } from "./courses/pericia-trabalhista-course";
import { nr20CourseData } from "./courses/nr20-course";

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
    coursesCount: 8,
    color: "#2563eb", // Blue 600
  },
  {
    id: "gestao-lideranca",
    name: {
      "pt-BR": "Gestão Industrial, Tecnologia e Produtividade",
      "en": "Industrial Management, Technology & Productivity",
      "es": "Gestión Industrial, Tecnología y Productividad",
    },
    description: {
      "pt-BR": "Excel corporativo, relatórios de parada de fábrica, apontamentos de campo, gestão ágil e ferramentas de produtividade.",
      "en": "Corporate Excel, plant shutdown reporting, jobsite logs, and productivity tooling.",
      "es": "Excel corporativo, informes de parada de planta y herramientas de productividad.",
    },
    iconName: "FileSpreadsheet",
    coursesCount: 7,
    color: "#059669",
  },
  {
    id: "mecanica-industrial",
    name: {
      "pt-BR": "Manutenção Mecânica e Confiabilidade Industrial",
      "en": "Mechanical Maintenance & Asset Reliability",
      "es": "Mantenimiento Mecánico y Confiabilidad Industrial",
    },
    description: {
      "pt-BR": "Procedimentos de manutenção corretiva, preventiva e preditiva, bloqueio LOTO, lubrificação e confiabilidade de ativos pesados.",
      "en": "Corrective, preventive, and predictive maintenance workflows, LOTO energy isolation, and asset reliability.",
      "es": "Mantenimiento correctivo, preventivo y predictivo, bloqueo LOTO y confiabilidad de activos.",
    },
    iconName: "Wrench",
    coursesCount: 3,
    color: "#d97706",
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
    workloadHours: 20,
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
    lessonsCount: 5,
    thumbnailGradient: "from-cyan-700 to-blue-950",
    coverImage: "/images/courses/hidrojato.jpg",
    categories: ["conhecimento-operacional", "nr-regulamentar"],
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
          {
            id: "les-hj-2-3",
            order: 3,
            title: {
              "pt-BR": "Operação de Caminhão Tanque Combinado (Hidrojato e Hidrovácuo)",
              "en": "Combination Tank Truck Operations (Hydroblasting & Vacuum Recovery)",
              "es": "Operación de Camión Tanque Combinado (Hidrojet e Hidrovacío)",
            },
            durationMinutes: 30,
            contentType: "video",
            videoUrl: "y3rbkHr0ylw",
            contentDetail: {
              objective: {
                "pt-BR": "Compreender o funcionamento integrado de unidades móveis combinadas de hidrojato e auto-vácuo (Center Vac), procedimentos de sucção de efluentes, operação de carretel hidráulico e segurança no descarte de resíduos industriais.",
                "en": "Understand integrated combination jetting and vacuum truck units, slurry extraction, hydraulic hose reel operation, and industrial waste handling safety.",
                "es": "Comprender el funcionamiento integrado de camiones combinados de hidrojet y succión al vacío, carrete hidráulico y seguridad en la descarga.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Arquitetura e Componentes da Unidade Combinada",
                    "en": "Combination Unit Architecture & Systems",
                    "es": "Arquitectura y Componentes de la Unidad Combinada",
                  },
                  body: {
                    "pt-BR": "O caminhão combinado integra dois sistemas essenciais na mesma plataforma: um tanque de lodo basculante com bomba de vácuo de anel líquido ou compressor rotativo (Roots) para sucção pesada, e um reservatório de água limpa com bomba triplex de alta pressão acoplada à tomada de força (PTO). Essa sinergia permite desobstruir tubulações, redes pluviais e tanques enquanto aspira simultaneamente os detritos desprendidos, evitando alagamentos e contaminação ambiental.",
                    "en": "The combo truck houses a tilting sludge tank with a liquid ring or Roots rotary vacuum blower alongside a fresh water reservoir and high-pressure triplex pump driven via PTO. Enables concurrent pipe descaling and high-volume slurry extraction.",
                    "es": "El camión combinado integra un tanque de lodos basculante con bomba de vacío y un depósito de agua limpia con bomba triplex de alta presión para limpieza y succión simultánea.",
                  },
                },
                {
                  title: {
                    "pt-BR": "Procedimentos Críticos de Operação e Segurança com Auto-Vácuo",
                    "en": "Critical Vacuum Operation Protocols & Safety",
                    "es": "Procedimientos Críticos de Seguridad en Auto-Vacío",
                  },
                  body: {
                    "pt-BR": "1. Abertura e travamento da tampa traseira com travas hidráulicas e cunhas mecânicas antes de qualquer manutenção interna.\n2. Inspeção da válvula quebra-vácuo (alívio) e sensores de nível para evitar transbordamento de espuma ou líquidos para a bomba de vácuo.\n3. Aterramento eletrostático obrigatório do caminhão ao operar em áreas classificadas com vapores inflamáveis ou gases industriais.\n4. Manobras de retro-lavagem com lança desobstruidora e mangueira laranja de 1 polegada com terminal de ponta de aço e bico perfurador.",
                    "en": "1. Mechanical lockouts on rear hatch opening.\n2. Inspection of vacuum relief valves and shutoff float balls.\n3. Mandatory electrostatic grounding in classified industrial atmospheres.\n4. Sewer jetting hose protocols using forward and reverse thrust nozzles.",
                    "es": "1. Bloqueo mecánico de la compuerta trasera.\n2. Válvula de alivio de vacío y boyas de nivel.\n3. Puesta a tierra antiestática obligatoria.\n4. Operación segura del carrete y boquillas de empuje.",
                  },
                },
              ],
            },
            challenge: {
              id: "chal-hj-2-3",
              question: {
                "pt-BR": "DESAFIO DE CAMPO 5: Durante a sucção de lodo em canaleta industrial com caminhão combinado, o operador observa que o manovacuômetro atingiu o vácuo máximo e a mangueira começou a vibrar violentamente. Qual é o diagnóstico e a conduta imediata?",
                "en": "FIELD CHALLENGE 5: While vacuuming slurry with a combo truck, vacuum reaches maximum and the suction hose vibrates violently. What is the diagnosis and correct action?",
                "es": "DESAFÍO 5: Durante la succión, el vacuómetro llega al límite y la manguera vibra bruscamente. ¿Cuál es el diagnóstico y la acción correcta?",
              },
              contextScenario: {
                "pt-BR": "O mangote de 4 polegadas sugou uma pedra ou pedaço de madeira que obstruiu a entrada, criando vácuo total preso na linha.",
                "en": "A stone or heavy debris choked the 4-inch suction hose nozzle, pulling full dead-head vacuum.",
                "es": "Un objeto sólido atascó la boquilla de succión de 4 pulgadas generando vacío total bloqueado.",
              },
              options: [
                {
                  id: "opt-1",
                  text: {
                    "pt-BR": "Abrir imediatamente a válvula quebra-vácuo de emergência na carcaça do caminhão para despressurizar o mangote antes de desobstruir manualmente com ferramentas adequadas.",
                    "en": "Immediately open the emergency vacuum relief valve to neutralize line suction before safely clearing obstruction.",
                    "es": "Abrir de inmediato la válvula de alivio de vacío para despresurizar antes de retirar la obstrucción de forma segura.",
                  },
                  isCorrect: true,
                  explanation: {
                    "pt-BR": "CORRETO! Tentar desobstruir o bocal com o vácuo pleno acionado causa sucção violenta e pode prender as mãos ou decepar membros do operador.",
                    "en": "CORRECT! Clearing a blocked hose under full live vacuum causes violent suction trauma or limb entrapment.",
                    "es": "¡CORRECTO! Intentar desatascar con vacío activo puede causar atrapamiento severo de extremidades.",
                  },
                },
                {
                  id: "opt-2",
                  text: {
                    "pt-BR": "Colocar o braço dentro do bocal com a bomba ligada para puxar a pedra com a mão.",
                    "en": "Reach an arm inside the nozzle with the vacuum running to grab the stone.",
                    "es": "Meter el brazo dentro de la manguera con la bomba encendida para sacar la piedra.",
                  },
                  isCorrect: false,
                  explanation: {
                    "pt-BR": "INCORRETO E POTENCIALMENTE FATAL! O vácuo industrial puxa e esmaga o braço com força de centenas de quilos.",
                    "en": "Extremely hazardous! Industrial suction creates crushing entrapment forces.",
                    "es": "¡Peligro de muerte! La succión industrial aplasta y atrapa el brazo instantáneamente.",
                  },
                },
              ],
            },
          },
        ],
      },
    ],
    finalAssessment: {
      id: "exam-hidrojato-seguranca",
      order: 6,
      scope: "course",
      passingScorePercent: 70,
      maxAttempts: 3,
      estimatedMinutes: 50,
      questionsCount: 10,
      isAvailable: true,
      availabilityNotice: {
        "pt-BR": "Avaliação teórica rigorosa de Segurança Operacional em Hidrojateamento de Alta e Ultraralta Pressão. Abrange limites da NR-34/NR-12, mecânica de fluidos, armaduras de proteção, zonas de exclusão e emergência em injeção de fluidos. Nota mínima de 70% para certificação teórica.",
        "en": "Rigorous theoretical assessment of Operational Safety in High and Ultra-High Pressure Hydroblasting. Covers NR-34/NR-12 safety margins, fluid dynamics, ballistic armor, exclusion perimeters, and high-pressure injection emergencies. 70% passing score.",
        "es": "Evaluación teórica rigurosa de Seguridad Operacional en Hidrojet de Alta y Ultra-Alta Presión. Normas NR-34/NR-12, blindaje de protección, perímetros de exclusión y emergencias por inyección de fluidos. 70% mínimo.",
      },
      title: {
        "pt-BR": "Avaliação Técnica — Segurança em Hidrojateamento de Alta Pressão",
        "en": "Technical Assessment — High-Pressure Hydroblasting Safety",
        "es": "Evaluación Técnica — Seguridad en Hidrojet de Alta Presión",
      },
      description: {
        "pt-BR": "Exame técnico com estudos de caso operacionais em hidrojateamento industrial: montagem de linhas, inspeção e tensionamento de travas anti-chicoteamento (whip-checks), válvula de pé corta-fluxo (dump valve), procedimentos para injeção subcutânea e coordenação de frentes de trabalho.",
        "en": "Technical exam featuring operational field scenarios in industrial hydroblasting: line rigging, whip-check cable inspection and tensioning, deadman foot dump valves, subcutaneous injection medical protocols, and crew coordination.",
        "es": "Examen técnico con escenarios operativos de hidrojet industrial: montaje de líneas, seguros antichicoteo, válvula de pie hombre-muerto, protocolos de inyección subcutánea y coordinación de cuadrilla.",
      },
      questions: [
        {
          id: "q-hj-1",
          order: 1,
          question: {
            "pt-BR": "Durante a operação de limpeza com lança manual operando a 1.400 bar, uma gota d'água perfura a luva de couro e atinge o polegar do lanceiro. A lesão externa aparente é apenas um orifício puntiforme minúsculo (semelhante a uma picada de agulha) quase sem sangramento visível, mas a dor local é intensa e irradiada. Qual é a conduta médica e operacional mandatória?",
            "en": "During manual lancing at 1,400 bar, a high-pressure jet pierces the leather glove into the operator's thumb. The external puncture is tiny with virtually no bleeding, but pain is acute and radiating. What is the mandatory medical and operational protocol?",
            "es": "Durante limpieza manual a 1.400 bar, un chorro perfora el guante del operador. La lesión externa es un orificio diminuto casi sin sangrado, pero con dolor agudo e intenso. ¿Cuál es el protocolo médico y operativo obligatorio?",
          },
          options: [
            {
              id: "q1-a",
              text: {
                "pt-BR": "Aplicar compressa de gelo sobre o orifício, passar pomada analgésica e manter o colaborador descansando no canteiro por 2 horas para observação.",
                "en": "Apply an ice compress, provide topical analgesic ointment, and keep the worker resting on site for 2 hours for observation.",
                "es": "Aplicar hielo sobre la herida, pomada analgésica y dejar al operario en reposo en la obra durante 2 horas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto e perigoso. Lesões por injeção de fluido em alta pressão causam necrose interna maciça nas fáscias musculares e exigem descompressão cirúrgica de urgência.",
                "en": "Incorrect and hazardous. High-pressure injection causes massive internal tissue necrosis requiring emergency surgical decompression.",
                "es": "Incorrecto y peligroso. La inyección de fluidos a alta presión causa necrosis profunda y requiere descompresión quirúrgica urgente.",
              },
            },
            {
              id: "q1-b",
              text: {
                "pt-BR": "Paralisar imediatamente a frente de hidrojato, encaminhar o colaborador ao pronto-socorro hospitalar de emergência portando o Cartão de Emergência Médica por Injeção de Fluido e notificar o médico sobre o risco de síndrome compartimental e desbridamento cirúrgico urgente.",
                "en": "Immediately halt hydroblasting, rush the worker to hospital emergency with the Medical Alert Card for Fluid Injection, and alert trauma staff of compartment syndrome and urgent surgical exploration.",
                "es": "Detener de inmediato la operación, trasladar al trabajador a urgencias con la Tarjeta Médica de Inyección de Fluidos y alertar sobre síndrome compartimental y desbridamiento quirúrgico urgente.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O jato penetra tecidos profundos injetando água com contaminantes industriais, bactérias e óleos. A pressão lacera tecidos internos e pode levar à amputação em poucas horas se não for operada imediatamente.",
                "en": "Correct! High pressure drives water and toxic contaminants deep into tissue planes, risking limb amputation within hours without prompt surgical intervention.",
                "es": "¡Correcto! La alta presión introduce agua con contaminantes en planos profundos provocando necrosis y riesgo de amputación si no se interviene quirúrgicamente.",
              },
            },
            {
              id: "q1-c",
              text: {
                "pt-BR": "Fazer um torniquete no antebraço para impedir a circulação de contaminantes para o coração e aguardar a equipe de ambulância.",
                "en": "Apply a tight tourniquet on the forearm to stop contaminants from reaching the heart and wait for an ambulance.",
                "es": "Colocar un torniquete en el antebrazo para impedir la circulación de contaminantes y esperar la ambulancia.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Torniquetes são contraindicados em injeções de fluidos de alta pressão, pois aceleram a isquemia e a necrose dos tecidos do membro atingido.",
                "en": "Tourniquets accelerate ischemia and tissue death and are strictly contraindicated in fluid injection trauma.",
                "es": "Los torniquetes están contraindicados ya que aceleran la isquemia y necrosis del miembro.",
              },
            },
            {
              id: "q1-d",
              text: {
                "pt-BR": "Trocar a luva perfurada por uma nova e permitir o término do turno caso o colaborador afirme que a dor é tolerável.",
                "en": "Replace the damaged glove and allow the worker to complete the shift if pain is declared bearable.",
                "es": "Cambiar el guante perforado y dejar que el trabajador termine el turno si tolera el dolor.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Gravíssimo erro operacional. A dor pode temporariamente diminuir devido à destruição de terminações nervosas, enquanto a necrose interna avança.",
                "en": "Severe operational failure. Initial pain may subside due to nerve destruction while hidden deep necrosis expands rapidly.",
                "es": "Error operativo grave. La disminución inicial del dolor se debe a daño nervioso mientras la necrosis interna avanza.",
              },
            },
          ],
        },
        {
          id: "q-hj-2",
          order: 2,
          question: {
            "pt-BR": "Ao montar uma linha de 60 metros com mangueiras de 1.400 bar entre a unidade bomba e a área de trabalho, um ajudante fixa as travas de segurança (whip-checks) deixando o cabo de aço frouxo e escorregando livremente sobre o corpo da mangueira. Qual é o risco técnico dessa montagem e qual a forma correta de instalação?",
            "en": "When assembling a 60m 1,400-bar line, a helper rigs whip-check safety cables loosely, sliding freely along the hose jacket. What is the technical risk and what is the compliant rigging procedure?",
            "es": "Al montar una línea de 60 m a 1.400 bar, un asistente deja los cables de seguridad (whip-checks) flojos y deslizantes. ¿Cuál es el riesgo técnico y la forma correcta de instalación?",
          },
          options: [
            {
              id: "q2-a",
              text: {
                "pt-BR": "O cabo frouxo funciona melhor porque permite absorção progressiva de impacto durante o rompimento da conexão sob pressão.",
                "en": "Loose cables work better because they provide progressive shock absorption upon pressurized connection rupture.",
                "es": "El cable flojo es mejor porque absorbe progresivamente el impacto durante la rotura de la conexión.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto. A folga permite que a conexão se desconecte e ganhe aceleração destrutiva antes de qualquer retenção mecânica.",
                "en": "Incorrect. Slack allows the severed fitting to accelerate into a high-energy lethal missile before restraining.",
                "es": "Incorrecto. La holgura permite que la unión se desconecte y gane aceleración destructiva.",
              },
            },
            {
              id: "q2-b",
              text: {
                "pt-BR": "A mola tensionadora do laço deve ser puxada e posicionada firmemente sobre a mangueira além do terminal prensado; se ficar frouxo, o terminal escapará por dentro do laço no rompimento e causará o efeito chicote com energia cinética letal.",
                "en": "The tensioning spring loop must be pulled snug past the crimped terminal collar; if loose, the terminal slips out of the loop upon rupture, creating lethal whipping forces.",
                "es": "El lazo con resorte debe ajustarse firmemente sobre la manguera después del casquillo prensado; si queda flojo, el terminal se deslizará al romperse provocando latigazo mortal.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O laço deve abraçar com firmeza o corpo de borracha atrás do terminal metálico para travar mecanicamente qualquer movimento em caso de rompimento da rosca ou flange.",
                "en": "Correct! The loop must tightly grip the rubber body behind the crimped collar to physically arrest movement if the fitting blows.",
                "es": "¡Correcto! El lazo debe ceñirse con firmeza al cuerpo de goma detrás del casquillo para retener mecánicamente el terminal.",
              },
            },
            {
              id: "q2-c",
              text: {
                "pt-BR": "Whip-checks são obrigatórios apenas em pressões acima de 2.000 bar; para 1.400 bar abraçadeiras de nylon (fita hellermann) atendem a norma.",
                "en": "Whip-checks are only mandatory above 2,000 bar; at 1,400 bar heavy nylon zip ties fulfill standards.",
                "es": "Los whip-checks solo son obligatorios a más de 2.000 bar; a 1.400 bar basta con bridas plásticas de nylon.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Inaceitável. Travas de aço anti-chicoteamento são obrigatórias em 100% das emendas pressurizadas de qualquer linha de hidrojateamento industrial.",
                "en": "Unacceptable. Steel whip checks are strictly mandatory on 100% of pressurized joints across all industrial waterjet lines.",
                "es": "Inaceptable. Los cables de acero son obligatorios en el 100% de las uniones presurizadas de hidrojet.",
              },
            },
            {
              id: "q2-d",
              text: {
                "pt-BR": "Basta passar fita crepe ou isolante ao redor da conexão para evitar que a mola do cabo de aço se movimente com a vibração da bomba.",
                "en": "Wrapping masking or electrical tape around the joint is sufficient to keep the spring from vibrating loose.",
                "es": "Basta con envolver cinta adhesiva alrededor de la unión para que el resorte no vibre.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Fitas adesivas não possuem resistência mecânica para conter esforços dinâmicos de toneladas gerados pelo desprendimento de alta pressão.",
                "en": "Adhesive tapes have zero mechanical tensile strength against multi-ton dynamic release thrusts.",
                "es": "Las cintas no tienen resistencia mecánica ante fuerzas dinámicas de toneladas.",
              },
            },
          ],
        },
        {
          id: "q-hj-3",
          order: 3,
          question: {
            "pt-BR": "Qual é a função e o princípio de funcionamento obrigatório da Válvula de Pé corta-fluxo (Dump Valve / Válvula Homem-Morto) na operação de hidrojato com lança manual?",
            "en": "What is the mandatory function and working principle of the Foot Dump Valve (deadman valve) in manual waterjet lance operations?",
            "es": "¿Cuál es la función y el principio de funcionamiento obligatorio de la Válvula de Pie cortaflujo (Dump Valve / Hombre-Muerto) en hidrojet manual?",
          },
          options: [
            {
              id: "q3-a",
              text: {
                "pt-BR": "Permite travar a pressão ligada mecanicamente com uma cunha de madeira para que o operador descanse a perna durante limpezas longas.",
                "en": "Allows mechanically wedging the pedal with a wood block so the operator can rest their leg during lengthy operations.",
                "es": "Permite trabar la presión mecánicamente con una cuña de madera para descansar la pierna en trabajos largos.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Grave infração de segurança. Travar ou calçar a válvula de pé elimina o mecanismo de emergência homem-morto e pode causar acidentes fatais.",
                "en": "Gross safety violation. Mechanically wedging a foot valve bypasses the deadman safeguard, risking fatal strikes.",
                "es": "Infracción grave de seguridad. Trabar la válvula anula el sistema de emergencia y puede causar accidentes fatales.",
              },
            },
            {
              id: "q3-b",
              text: {
                "pt-BR": "Desviar instantaneamente a água em alta pressão para a descarga aberta e despressurizar a lança no exato momento em que o operador alivia o peso do pé sobre o pedal.",
                "en": "Instantly dumps high-pressure flow to an open exhaust line and depressurizes the lance the moment the operator removes foot pressure.",
                "es": "Desviar instantáneamente el flujo de alta presión al desagüe abierto y despresurizar la lanza en el momento exacto en que el operario retira el pie.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O mecanismo é de 'ação mantida' (homem-morto): se o lanceiro escorregar, desmaiar ou perder o equilíbrio, o alívio do pedal despressuriza a ferramenta imediatamente.",
                "en": "Correct! Operates on a deadman fail-safe: if the operator trips, faints, or loses footing, releasing the pedal instantly discharges line pressure.",
                "es": "¡Correcto! Funciona por hombre-muerto: si el operador resbala o pierde el equilibrio, soltar el pedal despresuriza la herramienta al instante.",
              },
            },
            {
              id: "q3-c",
              text: {
                "pt-BR": "Aumentar a vazão da bomba em 50% através de um circuito de recirculação interna fechado sem alterar a rotação do motor diesel.",
                "en": "Boosts pump volumetric flow by 50% via a closed internal loop without altering diesel engine RPM.",
                "es": "Aumentar el caudal de la bomba en un 50% mediante un circuito cerrado sin cambiar las RPM del motor.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A válvula de pé não aumenta vazão; ela atua unicamente como válvula direcional de alívio e controle de fluxo para segurança.",
                "en": "The dump valve does not increase flow; it is purely a pressure diversion safety control device.",
                "es": "La válvula de pie no aumenta el caudal; actúa como dispositivo de seguridad y desvío de presión.",
              },
            },
            {
              id: "q3-d",
              text: {
                "pt-BR": "Filtrar resíduos sólidos e areia da água de alimentação antes que atinjam os êmbolos de cerâmica da bomba triplex.",
                "en": "Filters grit and solids out of supply water before reaching the triplex ceramic plungers.",
                "es": "Filtrar sólidos de la alimentación de agua antes de los émbolos cerámicos de la bomba triplex.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A filtragem de entrada é feita por filtros de cartucho na sucção da bomba, nunca na válvula de pé posicionada na linha de alta pressão.",
                "en": "Inlet filtration is performed by cartridge filters on pump suction, never at high-pressure foot dump valves.",
                "es": "El filtrado se hace en la succión de la bomba mediante filtros de cartucho, no en la válvula de pie.",
              },
            },
          ],
        },
        {
          id: "q-hj-4",
          order: 4,
          question: {
            "pt-BR": "Qual é a distância mínima mandatória de isolamento físico (Zona de Exclusão / Barricamento) ao redor de uma frente de trabalho com hidrojato operando em pressão de corte ou desincrustação (acima de 700 bar), e quem tem autorização para permanecer dentro dessa área?",
            "en": "What is the mandatory minimum physical exclusion perimeter around hydroblasting operations running above 700 bar, and who is authorized inside?",
            "es": "¿Cuál es la distancia mínima de aislamiento físico (Zona de Exclusión) en trabajos de hidrojet a más de 700 bar y quién puede ingresar?",
          },
          options: [
            {
              id: "q4-a",
              text: {
                "pt-BR": "Raio de 2 metros delimitado apenas por cones simples, sendo permitida a presença de qualquer colaborador com botina de segurança comum.",
                "en": "2-meter radius marked by traffic cones, accessible to any personnel wearing basic safety boots.",
                "es": "Radio de 2 metros con conos simples, accesible a personal con calzado de seguridad básico.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Insuficiente. O rebote de detritos, fragmentos de carepa e água em alta velocidade atinge facilmente distâncias superiores a 8 metros.",
                "en": "Insufficient. Ricocheting debris, dislodged scale, and high-velocity water easily travel beyond 8 meters.",
                "es": "Insuficiente. El rebote de incrustaciones y partículas a alta velocidad supera con facilidad los 8 metros.",
              },
            },
            {
              id: "q4-b",
              text: {
                "pt-BR": "Raio mínimo de 10 a 15 metros isolado com correntes ou telas de proteção rígidas e placas de advertência, restrito estritamente ao lanceiro e ao ajudante de segurança devidamente paramentados com EPIs balísticos.",
                "en": "Minimum 10 to 15 meter radius barricaded with rigid chains or screens and danger signage, restricted strictly to the lance operator and safety tender in certified ballistic PPE.",
                "es": "Radio mínimo de 10 a 15 metros señalizado con cadenas o pantallas rígidas y letreros de advertencia, exclusivo para el operador y asistente con EPP balístico.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A zona de exclusão protege transeuntes e outros profissionais de estilhaços e jatos acidentais. Ninguém sem vestimenta específica pode ultrapassar a barreira.",
                "en": "Correct! Isolates bystanders from high-velocity projectile ricochet and accidental jet deflection. Ballistic protection mandatory.",
                "es": "¡Correcto! Protege a terceros de fragmentos eyectados y chorros descontrolados. Solo personal autorizado con EPP balístico.",
              },
            },
            {
              id: "q4-c",
              text: {
                "pt-BR": "Não há metragem mínima; a área de perigo é apenas o ponto de contato exato do bico de hidrojato com a tubulação.",
                "en": "No minimum radius is established; the hazard zone is strictly the nozzle impingement point.",
                "es": "No hay distancia mínima; la zona de peligro es únicamente el punto de impacto de la boquilla.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Afirmação tecnicamente falsa e perigosa. O rompimento de mangueiras e o ricochete de fragmentos criam zonas de risco dinâmicas amplas.",
                "en": "Technically false and hazardous. Hose whip and dislodged particles establish wide dynamic danger areas.",
                "es": "Falso y peligroso. El riesgo abarca el desprendimiento de mangueras y rebotes de partículas a gran distancia.",
              },
            },
            {
              id: "q4-d",
              text: {
                "pt-BR": "Raio de 50 metros com evacuação total do galpão industrial e paralisação de todas as esteiras e pontes rolantes da fábrica.",
                "en": "50-meter radius requiring total facility evacuation and shutdown of all overhead cranes in the plant.",
                "es": "Radio de 50 metros con evacuación total de la nave industrial y parada de grúas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Desproporcional para operações padrão com barreira física adequada (biombos balísticos e zona de 10-15m atendem os requisitos normativos).",
                "en": "Disproportionate for standard ops where certified ballistic screens and 10-15m perimeters comply with standards.",
                "es": "Desproporcionado para operaciones estándar con mamparas de contención y 10-15 m de perímetro.",
              },
            },
          ],
        },
        {
          id: "q-hj-5",
          order: 5,
          question: {
            "pt-BR": "Ao selecionar o conjunto de Equipamentos de Proteção Individual (EPIs) para o operador lanceiro em serviço de hidrojato a 2.000 bar (Ultraralta Pressão), quais itens compõem a paramentação obrigatória conforme a NR-34 e normas internacionais (WJTA)?",
            "en": "When outfitting a lance operator for 2,000 bar (Ultra-High Pressure) hydroblasting, which items constitute mandatory PPE under NR-34 and WJTA standards?",
            "es": "¿Qué conjunto de Equipos de Protección Individual (EPP) es obligatorio para un operador a 2.000 bar según la NR-34 y normas WJTA?",
          },
          options: [
            {
              id: "q5-a",
              text: {
                "pt-BR": "Botina de segurança de couro com biqueira de aço comum, capa de chuva impermeável de PVC simples, luva nitrílica e óculos de proteção incolor.",
                "en": "Standard steel-toe leather boots, basic PVC rain suit, nitrile gloves, and clear safety glasses.",
                "es": "Calzado de seguridad de cuero estándar, impermeable de PVC común, guantes de nitrilo y gafas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "PVC e botinas comuns são perfurados instantaneamente por jatos acima de 250 bar. Esse conjunto não oferece nenhuma proteção balística.",
                "en": "PVC suits and work boots are pierced instantly by jets exceeding 250 bar, providing zero ballistic resistance.",
                "es": "El PVC y calzado común son perforados al instante a más de 250 bar. No ofrecen protección balística.",
              },
            },
            {
              id: "q5-b",
              text: {
                "pt-BR": "Macacão ou jaqueta/calça balística reforçada em Kevlar/Dyneema com classificação para 2.000+ bar, perneiras metálicas ou em fibra com proteção metatarsal integrada para pés, luvas balísticas com manoplas blindadas, capacete com viseira facial e protetor auricular duplo.",
                "en": "Kevlar/Dyneema ballistic suit rated for 2,000+ bar, rigid metatarsal and shin gaiters, armored ballistic gauntlet gloves, hard hat with full face shield, and dual hearing protection.",
                "es": "Traje balístico en Kevlar/Dyneema certificado para 2.000+ bar, polainas rígidas metatarsales y canilleras, guantes balísticos reforzados, casco con careta facial y doble protección auditiva.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Apenas armaduras tecidas em fibras sintéticas de ultra-alto módulo molecular (aramida/dyneema) e couraças de titânio/metatarso são certificadas para dissipar jatos de 2.000 bar.",
                "en": "Correct! Only ultra-high molecular weight synthetic ballistic weaves (Kevlar/Dyneema) and rigid armor plates withstand 2,000 bar direct bursts.",
                "es": "¡Correcto! Solo blindajes certificados de Kevlar/Dyneema y placas rígidas metatarsales disipan impactos a 2.000 bar.",
              },
            },
            {
              id: "q5-c",
              text: {
                "pt-BR": "Roupa de mergulho em neoprene de 7 mm com botas de borracha cano longo reforçadas com chapas de alumínio artesanais.",
                "en": "7mm neoprene diving wetsuit with tall rubber boots retrofitted with improvised aluminum plates.",
                "es": "Traje de neopreno de 7 mm con botas de goma y placas caseras de aluminio.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "EPIs devem possuir Certificado de Aprovação (CA) e certificação em laboratório para a classe de pressão; improvisações são proibidas por lei.",
                "en": "Improvised gear is illegal; all PPE must be formally certified with traceable pressure ratings.",
                "es": "Las improvisaciones están prohibidas; todo EPP debe contar con certificación homologada.",
              },
            },
            {
              id: "q5-d",
              text: {
                "pt-BR": "Apenas protetor auricular e óculos de sol, desde que o lanceiro mantenha a lança a mais de 1 metro de distância do seu próprio corpo.",
                "en": "Only earplugs and sunglasses provided the operator keeps the lance over 1 meter away from their torso.",
                "es": "Solo tapones auditivos y gafas oscuras, manteniendo la lanza a más de 1 metro del cuerpo.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Total descumprimento de normas regulamentadoras. O retrocesso do jato e a perda de controle da lança exigem blindagem corporal integral.",
                "en": "Extreme non-compliance. Lance reaction forces and deflection require full ballistic body protection.",
                "es": "Incumplimiento total. El retroceso y desvío del chorro exigen protección corporal integral.",
              },
            },
          ],
        },
        {
          id: "q-hj-6",
          order: 6,
          question: {
            "pt-BR": "Na limpeza interna de tubulações de trocadores de calor com mangueira flexível e bico rotativo (desobstrução de feixes tubulares), qual acessório de segurança mecânica é INDISPENSÁVEL para evitar que a mangueira retorne e saia da tubulação em direção ao operador?",
            "en": "When lancing heat exchanger tube bundles with a flexible hose and rotary nozzle, which mechanical safeguard is MANDATORY to prevent the hose from reversing out towards the operator?",
            "es": "¿Qué accesorio de seguridad mecánico es INDISPENSABLE para evitar que la manguera flex devuelva y salga del tubo hacia el operador?",
          },
          options: [
            {
              id: "q6-a",
              text: {
                "pt-BR": "Dispositivo limitador de recuo / Guia rígida anti-retorno (Stinger ou Tubo Guia com comprimento superior ao diâmetro do tubo) fixado na boca de entrada do trocador.",
                "en": "Anti-withdrawal backstop / rigid stinger tube longer than the tube diameter affixed at the exchanger tube face.",
                "es": "Dispositivo antirretroceso / Lanza guía rígida (Stinger) con longitud superior al diámetro del tubo instalada en la boca de entrada.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O bico rotativo puxa a mangueira para frente pelo empuxo reativo dos jatos traseiros. Se não houver limitador mecânico rígido (stinger), a mangueira pode fazer curva de 180° dentro do tubo e disparar no peito do operador.",
                "en": "Correct! Rear-firing thruster jets propel the nozzle forward. Without a rigid stinger longer than tube ID, the hose can U-turn inside and fire back at the operator.",
                "es": "¡Correcto! La propulsión trasera hace avanzar la boquilla. Sin una guía rígida (stinger), la manguera puede doblarse 180° y salir disparada hacia el operador.",
              },
            },
            {
              id: "q6-b",
              text: {
                "pt-BR": "Segurar a mangueira flexível com as duas mãos a 10 cm do bico exercendo força para baixo.",
                "en": "Grip the flex lance firmly with both hands 10cm behind the nozzle applying downward force.",
                "es": "Sujetar la manguera con ambas manos a 10 cm de la boquilla haciendo fuerza.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Proibido. As mãos nunca devem se aproximar da ponta de mangueiras flexíveis pressurizadas; a força hidráulica vence qualquer esforço muscular.",
                "en": "Prohibited. Hands must never be placed near pressurized flex lance tips; hydraulic reaction easily overpowers human grip.",
                "es": "Prohibido. Las manos jamás deben acercarse a la boquilla presurizada; la fuerza hidráulica supera la fuerza humana.",
              },
            },
            {
              id: "q6-c",
              text: {
                "pt-BR": "Amarrar a mangueira na cintura do ajudante com uma corda de escalada para limitar o avanço.",
                "en": "Tether the hose to the tender's harness using climbing rope to restrict travel distance.",
                "es": "Atar la manguera al arnés del asistente con cuerda de escalada.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Prática criminosa que arrastaria o ajudante em caso de incidente ou o lesionaria com o chicoteamento da mangueira.",
                "en": "Extremely dangerous practice that would drag or crush the helper upon unexpected surges.",
                "es": "Práctica sumamente peligrosa que arrastraría al asistente o le causaría lesiones graves.",
              },
            },
            {
              id: "q6-d",
              text: {
                "pt-BR": "Reduzir a pressão para 50 bar e dispensar qualquer dispositivo mecânico de proteção.",
                "en": "Lower pressure to 50 bar and eliminate all physical safety attachments.",
                "es": "Reducir la presión a 50 bar y prescindir de protecciones mecánicas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Limpeza de feixes tubulares exige altas pressões para remoção de incrustações e não pode ser realizada sem acessórios de retenção adequados.",
                "en": "Tube bundle descaling requires high pressures and strictly requires mechanical retainers.",
                "es": "La desincrustación exige presiones altas que demandan dispositivos mecánicos antirretorno.",
              },
            },
          ],
        },
        {
          id: "q-hj-7",
          order: 7,
          question: {
            "pt-BR": "Durante a inspeção pré-operacional diária (Checklist) na linha de mangueiras de hidrojato, o inspetor identifica que a camada externa de borracha de uma mangueira sofreu abrasão superficial e a malha metálica interna de aço de alta resistência está visível e exposta ao ar. Qual é o critério de descarte técnico?",
            "en": "During daily pre-shift inspection on high-pressure waterjet hoses, the outer rubber cover is found abraded, exposing the inner high-tensile steel wire braid. What is the technical disposal criterion?",
            "es": "En la inspección diaria de mangueras de hidrojet, la cubierta externa de goma está desgastada y la malla de acero interna quedó visible. ¿Cuál es el criterio técnico?",
          },
          options: [
            {
              id: "q7-a",
              text: {
                "pt-BR": "Envolver o trecho desgastado com borracha vulcanizada e continuar a operação em pressão máxima de trabalho.",
                "en": "Wrap the abraded section with vulcanized patch tape and continue at maximum working pressure.",
                "es": "Envolver la zona desgastada con cinta vulcanizada y continuar a presión máxima.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Fitas e vulcanizações não recompõem a integridade mecânica de mangueiras espiraladas de ultra-alta pressão.",
                "en": "Patches and tape cannot restore the burst containment rating of high-pressure wire braids.",
                "es": "Los parches no restituyen la resistencia de las mallas de acero ante presiones de estallido.",
              },
            },
            {
              id: "q7-b",
              text: {
                "pt-BR": "A mangueira deve ser imediatamente interditada, etiquetada como CONDENADA, despressurizada, retirada da frente de trabalho e sucateada/inutilizada mecanicamente (cortando os terminais para evitar reutilização indevida).",
                "en": "The hose must be immediately condemned, tagged out of service, removed from the job site, and permanently disabled by severing end fittings.",
                "es": "La manguera debe ser inmediatamente condenada, etiquetada fuera de servicio, retirada y descartada cortando los terminales para impedir su reúso.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Fios de aço expostos sofrem corrosão acelerada por umidade e oxigênio e perdem sustentação de carga. O rompimento pode ocorrer a qualquer momento com efeito catastrófico.",
                "en": "Correct! Exposed wire braids rapidly corrode and fatigue under pulsation. Immediate permanent decommissioning is mandatory.",
                "es": "¡Correcto! Los alambres expuestos sufren corrosión y fatiga acelerada; la rotura catastrófica es inminente. Debe destruirse de inmediato.",
              },
            },
            {
              id: "q7-c",
              text: {
                "pt-BR": "Pintar a malha com tinta anticorrosiva epóxi e liberar a mangueira caso não haja vazamento visível de água em baixa pressão.",
                "en": "Paint the exposed wire with epoxy primer and clear for service if no low-pressure leaks are seen.",
                "es": "Pintar la malla con epoxi y autorizar el uso si no hay fugas en baja presión.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Pintura não protege a estrutura trançada de fadiga cíclica sob impulsos de pulsação da bomba triplex.",
                "en": "Paint does not prevent cyclic wire strand failure from triplex pump pulsations.",
                "es": "La pintura no detiene la fatiga por pulsaciones cíclicas de la bomba.",
              },
            },
            {
              id: "q7-d",
              text: {
                "pt-BR": "Usar a mangueira apenas no trecho próximo à bomba, onde as vibrações são menores do que na ponta da lança.",
                "en": "Relocate the hose near the pump skid where dynamic vibrations are presumed lower than at the nozzle.",
                "es": "Usar la manguera cerca de la bomba donde se presume menor vibración.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Próximo à bomba a pressão hidrostática e a pulsação dos pistões são máximas, aumentando o risco de explosão da carcaça.",
                "en": "Piston pulsation spikes are highest right at pump discharge, making rupture even more probable.",
                "es": "Junto a la bomba los picos de presión y pulsación son máximos, elevando el riesgo de estallido.",
              },
            },
          ],
        },
        {
          id: "q-hj-8",
          order: 8,
          question: {
            "pt-BR": "No hidrojateamento manual com lança rígida, a 'Força de Reação' (empuxo reativo exercido contra os braços do operador) é calculada em função da pressão e da vazão do bico. Conforme as melhores práticas da NR-34 e normas internacionais, qual é o limite de força de reação contínua recomendado para um único operador manual e qual solução é exigida caso a força calculada ultrapasse esse limite?",
            "en": "In manual rigid lance hydroblasting, thrust reaction force pushes against the operator's arms. Under NR-34 and international norms, what is the continuous thrust limit for a single operator and what is required if thrust exceeds it?",
            "es": "¿Cuál es el límite recomendado de fuerza de reacción continua para un solo operador manual y qué solución se exige si el empuje supera dicho límite?",
          },
          options: [
            {
              id: "q8-a",
              text: {
                "pt-BR": "Limite de 75 kgf (750 N); caso ultrapasse, basta colocar um cinto de sustentação amarrado a um andaime próximo.",
                "en": "75 kgf (750 N) limit; if exceeded, tether the operator to a nearby scaffold with a belt.",
                "es": "Límite de 75 kgf (750 N); si se supera, amarrar al operador al andamio con un cinturón.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "75 kgf é uma força humanamente incontrolável que causaria desequilíbrio e luxação nos ombros do operador em segundos.",
                "en": "75 kgf is physically impossible to control manually, causing rapid shoulder dislocation and falls.",
                "es": "75 kgf es incontrolable manualmente y causaría luxaciones y caídas inmediatas.",
              },
            },
            {
              id: "q8-b",
              text: {
                "pt-BR": "Limite máximo recomendado de 25 kgf (aprox. 250 N); caso a força reativa seja superior, é mandatória a utilização de suporte mecânico bi-apoiado, robôs automatizados de hidrojateamento (Crawler/Rotoclean) ou revezamento obrigatório com redução de bico.",
                "en": "Maximum recommended continuous thrust is 25 kgf (~250 N); if exceeded, mechanized rigs, automated crawlers, or dual-operator supports are strictly required.",
                "es": "Límite máximo recomendado de 25 kgf (~250 N); si se supera, es obligatorio el uso de soportes mecánicos, robots automatizados (crawlers) o balanceadores.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Forças de empuxo contínuo acima de 25 kgf causam fadiga muscular severa em poucos minutos, aumentando exponencialmente o risco de perda de controle e disparos involuntários da lança.",
                "en": "Correct! Reaction forces above 25 kgf induce rapid physical exhaustion, greatly increasing loss of control risks.",
                "es": "¡Correcto! Empujes superiores a 25 kgf causan fatiga extrema en minutos y descontrol de la herramienta.",
              },
            },
            {
              id: "q8-c",
              text: {
                "pt-BR": "Não existe limite de força desde que o operador tenha passado em teste físico de levantamento de peso na contratação.",
                "en": "There is no thrust limit provided the worker passed physical weightlifting fitness checks during hiring.",
                "es": "No existe límite si el trabajador superó pruebas de fuerza en su contratación.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Normas de ergonomia e segurança impõem limites antropotécnicos estritos independentemente do porte físico individual.",
                "en": "Ergonomic standards strictly cap continuous sustained push forces regardless of body build.",
                "es": "Las normas ergonómicas fijan límites estrictos independientemente de la contextura física.",
              },
            },
            {
              id: "q8-d",
              text: {
                "pt-BR": "O limite é de 10 kgf e qualquer operação com pressão acima de 300 bar deve ser realizada exclusivamente por mergulhadores.",
                "en": "The limit is 10 kgf and any operation above 300 bar must be performed exclusively by commercial divers.",
                "es": "El límite es 10 kgf y por encima de 300 bar solo operan buzos industriales.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Mergulho não se aplica a operações padrão de superfície e paradas industriais em terra seca.",
                "en": "Commercial diving protocols have no relevance to onshore industrial shutdown cleaning.",
                "es": "El buceo no aplica a operaciones estándar de superficie en paradas industriales.",
              },
            },
          ],
        },
        {
          id: "q-hj-9",
          order: 9,
          question: {
            "pt-BR": "Na operação de caminhões combinados auto-vácuo e hidrojato (Center Vac) para limpeza de caixas separadoras e tanques com resíduos industriais, qual risco crítico associado à mangueira de sucção a vácuo (mangote de 4 a 6 polegadas) exige atenção e controle imediato da equipe?",
            "en": "In combination vacuum and hydroblasting truck operations (Center Vac) cleaning sludge pits and tanks, what critical hazard of the 4-6 inch vacuum suction hose requires strict controls?",
            "es": "En la operación de camiones combinados de vacío e hidrojet (Center Vac), ¿qué riesgo crítico asociado a la manguera de succión (4 a 6 pulgadas) requiere control estricto?",
          },
          options: [
            {
              id: "q9-a",
              text: {
                "pt-BR": "Risco de aprisionamento e esmagamento por sucção negativa violenta (efeito vácuo industrial), sendo estritamente proibido colocar mãos, braços ou corpo próximo à boca de entrada do mangote desprotegido.",
                "en": "Crushing entrapment hazard by high negative pressure vacuum force; body parts must never be placed near open suction inlets.",
                "es": "Riesgo de atrapamiento y aplastamiento por succión violenta (vacío industrial); prohibido acercar manos o cuerpo a la boca de succión.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Bombas de vácuo tipo Roots ou anel líquido geram depressões capazes de engolir e fraturar membros humanos instantaneamente. É obrigatório o uso de grades de proteção (ralo de segurança) na ponta.",
                "en": "Correct! Industrial vacuum blowers generate immense crushing differential pressures. Protective suction screens are mandatory.",
                "es": "¡Correcto! Las bombas de vacío generan fuerzas de succión que fracturan y atrapan extremidades al instante. Se requiere canastilla de seguridad.",
              },
            },
            {
              id: "q9-b",
              text: {
                "pt-BR": "O mangote de sucção gera radiação ultravioleta durante a passagem de lodo líquido contaminado.",
                "en": "The suction hose emits ultraviolet radiation as contaminated sludge flows through.",
                "es": "La manguera de succión emite radiación ultravioleta al pasar lodos.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Absurdo. Mangotes de sucção não geram emissões de radiação ionizante ou ultravioleta.",
                "en": "Absurd. Suction lines do not generate ionizing or UV radiation.",
                "es": "No existe emisión de radiación en líneas de succión de lodos.",
              },
            },
            {
              id: "q9-c",
              text: {
                "pt-BR": "O caminhão a vácuo pode explodir caso a mangueira seja dobrada em ângulo de 90 graus durante o transporte.",
                "en": "The vacuum truck explodes if the hose is bent at 90 degrees during transport.",
                "es": "El camión de vacío explota si la manguera se dobla a 90 grados.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Dobrar mangotes pode obstruir o fluxo, mas caminhões possuem válvulas de alívio e quebra-vácuo que impedem sobrepressões perigosas no tanque.",
                "en": "Kinking lines causes blockages, but vacuum trucks are fitted with vacuum relief valves preventing tank collapse.",
                "es": "Los camiones cuentan con válvulas de alivio y quiebre de vacío que protegen el tanque.",
              },
            },
            {
              id: "q9-d",
              text: {
                "pt-BR": "A sucção por hidrovácuo não oferece nenhum risco físico por operar apenas com pressão negativa.",
                "en": "Hydro-vacuum suction poses zero bodily risk because it operates strictly on negative pressure.",
                "es": "La succión por vacío no presenta riesgos porque opera con presión negativa.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Pressão negativa industrial é altamente letal e causa ferimentos graves por sucção de tecidos e aprisionamento em bocas de mangotes.",
                "en": "Industrial negative pressure is lethal and causes catastrophic tissue avulsion and entrapment.",
                "es": "La presión negativa industrial es altamente peligrosa y causa evisceración y atrapamientos mortales.",
              },
            },
          ],
        },
        {
          id: "q-hj-10",
          order: 10,
          question: {
            "pt-BR": "Qual é o protocolo obrigatório de despressurização e parada de linha ao final do turno ou antes de qualquer manutenção, troca de bicos ou ajuste em conexões na frente de hidrojato?",
            "en": "What is the mandatory depressurization and shutdown sequence at shift end or prior to any nozzle change, maintenance, or fitting adjustment?",
            "es": "¿Cuál es el protocolo obligatorio de despresurización antes de cambiar boquillas, hacer mantenimiento o finalizar el turno?",
          },
          options: [
            {
              id: "q10-a",
              text: {
                "pt-BR": "Desligar o motor da bomba de repente e soltar imediatamente as roscas com chave inglesa enquanto a mangueira ainda estiver rígida.",
                "en": "Kill the pump engine abruptly and immediately loosen threaded fittings with a wrench while lines are still rigid.",
                "es": "Apagar el motor de repente y aflojar inmediatamente las tuercas con llave mientras la manguera sigue rígida.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Extremamente perigoso. Tentar desaparafusar conexões com pressão residual aprisionada projeta componentes metálicos com força de bala.",
                "en": "Extremely dangerous. Loosening trapped residual pressure causes fittings to blast off like cannon projectiles.",
                "es": "Peligrosísimo. Aflojar uniones con presión residual atrapada proyecta piezas metálicas como balas.",
              },
            },
            {
              id: "q10-b",
              text: {
                "pt-BR": "Aliviar a válvula de pé, desativar a rotação de alta pressão da bomba (PTO/embreagem), acionar a válvula de sangria/despressurização total do coletor da bomba, confirmar no manômetro que a pressão residual é ZERO, travar o gatilho da lança e apenas então proceder com ferramentas.",
                "en": "Release the foot pedal, disengage pump high-pressure drive (PTO/clutch), open the bleed-off bleed valve to exhaust line pressure, verify zero pressure on pressure gauges, lock lance trigger, and only then apply wrenches.",
                "es": "Soltar la válvula de pie, desacoplar la alta presión de la bomba (embrague/PTO), abrir la purga de despresurización total, confirmar CERO en manómetros, asegurar el gatillo y solo entonces usar herramientas.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A garantia de 'Energia Zero' (Lockout/Tagout) e alívio de qualquer coluna hidrostática aprisionada é requisito indispensável para intervenções mecânicas sem risco de ejeção de peças.",
                "en": "Correct! Verifying Zero Energy State via gauge confirmation and manual bleed valves prevents projectile ejection trauma.",
                "es": "¡Correcto! Garantizar Energía Cero y purgar cualquier presión entrampada antes de manipular roscas es indispensable.",
              },
            },
            {
              id: "q10-c",
              text: {
                "pt-BR": "Fechar a válvula de entrada de água da caixa d'água e aguardar 30 minutos até a pressão baixar por evaporação natural.",
                "en": "Shut the water supply gate valve and wait 30 minutes for line pressure to drop via natural evaporation.",
                "es": "Cerrar la llave de agua y esperar 30 minutos a que baje la presión sola por evaporación.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A água é um fluido praticamente incompressível; a pressão aprisionada permanece retida por horas nas mangueiras fechadas sem sangria mecânica ativa.",
                "en": "Water is nearly incompressible; locked pressure stays trapped for hours without manual bleed valves.",
                "es": "El agua es incompresible; la presión queda atrapada durante horas sin una purga activa.",
              },
            },
            {
              id: "q10-d",
              text: {
                "pt-BR": "Pressionar a ponta do bico rotativo contra uma viga metálica para forçar o esvaziamento da mangueira.",
                "en": "Press the rotating nozzle tip against a steel beam to force the remaining water out.",
                "es": "Presionar la boquilla contra una viga de acero para forzar el vaciado de la manguera.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Dano severo aos orifícios calibrados de safira/carbeto do bico e risco de estilhaçamento mecânico perigoso.",
                "en": "Destroys delicate sapphire/carbide orifices and risks catastrophic fragmentation.",
                "es": "Destruye las boquillas de zafiro o carburo y genera fragmentación peligrosa.",
              },
            },
          ],
        },
      ],
    },
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
    coverImage: "/images/courses/pintura.jpg",
    categories: ["conhecimento-operacional", "qualidade-processos"],
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
        "pt-BR": "Exame formal de qualificação abordando graus de intemperismo (ISO 8501-1), jateamento Sa 2.5/Sa 3, ponto de orvalho, cálculo de EPS/EPH, condutividade de sais solúveis, ensaios de aderência e segurança em Airless.",
        "en": "Formal qualification exam covering weathering grades (ISO 8501-1), Sa 2.5/Sa 3 blast standards, dew point margins, WFT/DFT math, soluble salt conductivity, adhesion testing, and Airless safety.",
        "es": "Examen de calificación que abarca grados de corrosión ISO 8501-1, granallado Sa 2.5, punto de rocío, cálculo de película húmeda/seca, sales solubles, adherencia y pulverización Airless.",
      },
      scope: "course",
      estimatedMinutes: 50,
      questionsCount: 10,
      passingScorePercent: 70,
      maxAttempts: 3,
      isAvailable: true,
      availabilityNotice: {
        "pt-BR": "Avaliação liberada após a conclusão dos módulos técnicos. Exige 70% de aproveitamento para certificação teórica.",
        "en": "Exam available upon completing modules. 70% passing score for theoretical qualification.",
        "es": "Evaluación habilitada tras concluir los módulos. 70% mínimo.",
      },
      questions: [
        {
          id: "q-pnt-1",
          order: 1,
          question: {
            "pt-BR": "Qual é a principal consequência técnica de aplicar uma demão de primer epóxi diretamente sobre uma superfície de aço carbono contendo carepa de laminação intacta, conforme a ISO 8501-1?",
            "en": "What is the primary technical consequence of applying epoxy primer directly over intact mill scale on carbon steel under ISO 8501-1?",
            "es": "¿Cuál es la principal consecuencia técnica de aplicar primer epoxi sobre acero con cascarilla de laminación intacta según ISO 8501-1?",
          },
          options: [
            {
              id: "q1-a",
              text: {
                "pt-BR": "A carepa se desprende com o tempo devido a tensões mecânicas e diferença de dilatação térmica, além de formar um par galvânico onde a carepa é catódica e o aço é anódico, acelerando a corrosão sob a película e causando o desplacamento prematuro de todo o sistema.",
                "en": "Mill scale detaches over time due to differential thermal expansion and forms a galvanic couple where scale is cathodic and steel is anodic, accelerating sub-film corrosion and complete delamination.",
                "es": "La cascarilla se desprende por dilatación térmica diferencial y forma un par galvánico donde la cascarilla es catódica y el acero anódico, acelerando la corrosión bajo la película y el desprendimiento total.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A carepa de laminação (óxidos de ferro Fe3O4/Fe2O3) tem nobreza eletroquímica maior que o ferro metálico (Fe), atuando como cátodo e acelerando a corrosão no aço adjacente quando há microporosidades.",
                "en": "Correct! Mill scale is electrochemically more noble than base iron, acting as a cathode and driving rapid galvanic pit corrosion beneath coating films.",
                "es": "¡Correcto! La cascarilla actúa como cátodo frente al acero base (ánodo), acelerando la corrosión galvânica bajo la película.",
              },
            },
            {
              id: "q1-b",
              text: {
                "pt-BR": "Aumenta a espessura de película seca (EPS) em 50% sem comprometer a durabilidade do revestimento.",
                "en": "Increases dry film thickness by 50% without compromising coating durability.",
                "es": "Aumenta el espesor de película seca un 50% sin afectar la durabilidad.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A espessura da carepa não soma proteção à tinta; ela fragiliza a ancoragem mecânica primária.",
                "en": "Mill scale thickness does not add protective film value; it undermines mechanical anchor profile.",
                "es": "La cascarilla no aporta protección; fragiliza la adherencia mecánica.",
              },
            },
            {
              id: "q1-c",
              text: {
                "pt-BR": "Provoca cura acelerada instantânea da resina epóxi devido à absorção de umidade pelos óxidos de ferro.",
                "en": "Causes flash cure of the epoxy resin due to moisture absorption by iron oxides.",
                "es": "Provoca curado acelerado instantáneo de la resina epoxi.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A cura do epóxi depende da reação estequeométrica com o agente de cura poliamida/poliamina, não da carepa.",
                "en": "Epoxy cross-linking depends on stoichiometric polyamine/polyamide curing agents, not mill scale.",
                "es": "El curado depende de la reacción con el endurecedor amina, no de la cascarilla.",
              },
            },
            {
              id: "q1-d",
              text: {
                "pt-BR": "O primer epóxi funde-se quimicamente à magnetita da carepa, transformando-a em passivação definitiva.",
                "en": "Epoxy primer fuses chemically with magnetite, transforming it into permanent passivation.",
                "es": "El primer epoxi se funde químicamente con la magnetita pasivándola definitivamente.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Tintas industriais padrão não reagem quimicamente para converter óxidos de alta temperatura em filmes passivos.",
                "en": "Standard industrial coatings do not chemically convert high-temperature mill scale oxides.",
                "es": "Las pinturas industriales convencionales no convierten químicamente la cascarilla.",
              },
            },
          ],
        },
        {
          id: "q-pnt-2",
          order: 2,
          question: {
            "pt-BR": "Segundo a norma ISO 8501-1 e SSPC-SP 10 / NACE No. 2, qual é a definição rigorosa do padrão de preparação de superfície Sa 2.5 (Jateamento Abrasivo ao Metal Quase Branco)?",
            "en": "Under ISO 8501-1 and SSPC-SP 10 / NACE No. 2, what is the exact technical definition of surface preparation grade Sa 2.5 (Near-White Blast Cleaning)?",
            "es": "¿Cuál es la definición técnica exacta del grado de limpieza Sa 2.5 (Metal Casi Blanco) según ISO 8501-1 y SSPC-SP 10 / NACE No. 2?",
          },
          options: [
            {
              id: "q2-a",
              text: {
                "pt-BR": "Remoção de 100% de toda e qualquer mancha, sombra ou descoloração, atingindo aspecto metálico uniforme espelhado.",
                "en": "100% removal of all stains, shadows, or discoloration to a uniform mirror-like white finish.",
                "es": "Eliminación del 100% de cualquier mancha o sombra dejando aspecto blanco espejo uniforme.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Essa é a definição de Sa 3 (Jateamento ao Metal Branco puro / SSPC-SP 5).",
                "en": "This defines Sa 3 (White Metal Blast Cleaning / SSPC-SP 5).",
                "es": "Esta es la definición de Sa 3 (Metal Blanco puro / SSPC-SP 5).",
              },
            },
            {
              id: "q2-b",
              text: {
                "pt-BR": "Remoção total de carepa solta e óleos através de escovação manual simples com escova de aço rotativa.",
                "en": "Removal of loose scale and oils via rotary steel power wire brushing.",
                "es": "Eliminación de cascarilla suelta mediante cepillado mecánico manual.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Isso define o padrão St 2 ou St 3 (limpeza mecânica manual ISO 8501-1), não jateamento abrasivo.",
                "en": "This corresponds to St 2 or St 3 mechanical power tool cleaning, not abrasive blasting.",
                "es": "Corresponde a limpieza manual-mecánica St 2/St 3, no granallado abrasivo.",
              },
            },
            {
              id: "q2-c",
              text: {
                "pt-BR": "Carepa de laminação, ferrugem e matérias estranhas devem ser removidas de tal forma que pelo menos 95% de cada unidade de área esteja livre de resíduos visíveis, permitindo apenas manchas leves, sombras ou estrias causadas por óxidos remanescentes.",
                "en": "Mill scale, rust, and foreign matter are removed so that at least 95% of each unit area is free of all visible residue, permitting only slight shadows, streaks, or minor stains.",
                "es": "Cascarilla, óxido y materias extrañas eliminados de modo que al menos el 95% de cada unidad de área esté libre de residuos visibles, admitiendo solo sombras o estrías leves.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Sa 2.5 exige 95% de área limpa ao metal quase branco, com tolerância restrita a até 5% de sombras ou estrias leves.",
                "en": "Correct! Sa 2.5 / SSPC-SP 10 mandates that at least 95% of the surface area be entirely free of visible contaminants.",
                "es": "¡Correcto! Sa 2.5 exige que al menos el 95% de cada unidad de superficie esté libre de residuos visibles.",
              },
            },
            {
              id: "q2-d",
              text: {
                "pt-BR": "Remoção superficial onde 50% da área permanece com oxidação aderente tolerada para ambientes de baixa umidade.",
                "en": "Light blast cleaning leaving 50% intact adherent rust for low humidity services.",
                "es": "Limpieza ligera dejando 50% de óxido adherente.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Isso se aproxima do padrão Sa 1 (Jateamento Ligeiro / Brush-off / SSPC-SP 7).",
                "en": "This describes Sa 1 (Brush-off Blast Cleaning / SSPC-SP 7).",
                "es": "Esto corresponde a Sa 1 (Granallado Ligero / SSPC-SP 7).",
              },
            },
          ],
        },
        {
          id: "q-pnt-3",
          order: 3,
          question: {
            "pt-BR": "Você precisa aplicar uma tinta com Volume de Sólidos (VS) de 60%. A especificação técnica de engenharia exige Espessura de Película Seca (EPS) de 120 micrômetros (µm). Durante a aplicação na cabine de pintura, qual Espessura de Película Úmida (EPH) o pintor deve medir no pente de espessura (sem diluição adicional)?",
            "en": "You are applying a coating with 60% Volume Solids (VS). Technical spec mandates a Dry Film Thickness (DFT) of 120 µm. What Wet Film Thickness (WFT) must be measured with the wet film comb (0% added thinner)?",
            "es": "Debe aplicar una pintura con 60% de Sólidos en Volumen (SV). La especificación exige Espesor de Película Seca (EPS) de 120 µm. ¿Qué Espesor de Película Húmeda (EPH) debe medirse con el peine (sin diluyente adicional)?",
          },
          options: [
            {
              id: "q3-a",
              text: { "pt-BR": "72 µm", "en": "72 µm", "es": "72 µm" },
              isCorrect: false,
              explanation: {
                "pt-BR": "72 µm é 120 × 0,60. A espessura úmida deve ser MAIOR que a seca para compensar a evaporação dos solventes voláteis.",
                "en": "72 µm is 120 × 0.60. WFT must be greater than DFT because solvents evaporate during cure.",
                "es": "72 µm es multiplicar en vez de dividir. El espesor húmedo siempre es mayor que el seco.",
              },
            },
            {
              id: "q3-b",
              text: { "pt-BR": "120 µm", "en": "120 µm", "es": "120 µm" },
              isCorrect: false,
              explanation: {
                "pt-BR": "EPH só seria igual à EPS em tintas com 100% de sólidos (solvent-free).",
                "en": "WFT equals DFT only in 100% solids solvent-free coatings.",
                "es": "EPH solo iguala a EPS en pinturas de 100% sólidos libres de solvente.",
              },
            },
            {
              id: "q3-c",
              text: { "pt-BR": "180 µm", "en": "180 µm", "es": "180 µm" },
              isCorrect: false,
              explanation: {
                "pt-BR": "180 µm corresponde a 120 / 0,67 ou cálculo incorreto de taxa de diluição.",
                "en": "180 µm represents an incorrect ratio of solvent retention.",
                "es": "180 µm es un cálculo incorrecto de dilución.",
              },
            },
            {
              id: "q3-d",
              text: { "pt-BR": "200 µm", "en": "200 µm", "es": "200 µm" },
              isCorrect: true,
              explanation: {
                "pt-BR": "Fórmula: EPH = EPS / (Volume de Sólidos / 100). Logo: EPH = 120 / 0,60 = 200 µm.",
                "en": "Formula: WFT = DFT / (Volume Solids / 100). WFT = 120 / 0.60 = 200 µm.",
                "es": "Fórmula: EPH = EPS / (SV / 100). EPH = 120 / 0,60 = 200 µm.",
              },
            },
          ],
        },
        {
          id: "q-pnt-4",
          order: 4,
          question: {
            "pt-BR": "Antes de iniciar a pintura externa em tanque de armazenamento, o inspetor mede com termo-higrômetro: Temperatura do Ar = 24°C, Umidade Relativa = 82% e Temperatura do Ponto de Orvalho (Tpo) calculada = 20,8°C. O termômetro de contato na chapa de aço indica Temperatura da Superfície (Tsup) = 22,5°C. Conforme a ISO 8502-4 e SSPC, a pintura pode ser executada?",
            "en": "Prior to external tank painting, ambient readings show: Air Temp = 24°C, RH = 82%, Dew Point (Td) = 20.8°C. Surface contact thermometer reads Substrate Temp (Ts) = 22.5°C. Under ISO 8502-4 and SSPC, can coating proceed?",
            "es": "Antes de pintar un tanque exterior, el termo-higrómetro indica: Temp Aire = 24°C, HR = 82%, Punto de Rocío (Td) = 20,8°C. La chapa de acero marca Ts = 22,5°C. Según ISO 8502-4 y SSPC, ¿puede aplicarse pintura?",
          },
          options: [
            {
              id: "q4-a",
              text: {
                "pt-BR": "Sim, porque a temperatura da chapa (22,5°C) está acima da temperatura do ponto de orvalho (20,8°C), não havendo risco de condensação.",
                "en": "Yes, because steel temp (22.5°C) exceeds dew point (20.8°C), preventing condensation.",
                "es": "Sí, porque la temperatura de la chapa supera el punto de rocío.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto. A norma exige que a temperatura do substrato esteja pelo menos 3°C ACIMA do ponto de orvalho como margem de segurança contra condensação microscópica.",
                "en": "Incorrect. Standards require substrate temperature to be at least 3°C ABOVE the dew point as a safety margin.",
                "es": "Incorrecto. La norma exige que la chapa esté al menos 3°C POR ENCIMA del punto de rocío.",
              },
            },
            {
              id: "q4-b",
              text: {
                "pt-BR": "Não. A diferença entre a temperatura da superfície e o ponto de orvalho é de apenas 1,7°C (22,5 - 20,8), violando o delta mínimo obrigatório de 3°C acima do ponto de orvalho para evitar condensação invisível sob a película.",
                "en": "No. Delta between surface temp and dew point is only 1.7°C (22.5 - 20.8), violating the mandatory 3°C minimum delta required to suppress micro-condensation.",
                "es": "No. La diferencia es de solo 1,7°C (22,5 - 20,8), violando el margen de seguridad mínimo obligatorio de 3°C por encima del punto de rocío.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Regra áurea: Tsup ≥ Tpo + 3°C. Com 1,7°C de margem, qualquer oscilação de brisa provocará condensação instantânea na chapa, gerando bolhas osmóticas e perda de aderência.",
                "en": "Correct! Rule: Tsubstrate ≥ Tdewpoint + 3°C. A 1.7°C gap risks flash micro-condensation, causing blister osmosis and loss of adhesion.",
                "es": "¡Correcto! Regla fundamental: Ts ≥ Td + 3°C. Un margen de 1,7°C provoca condensación microscópica y ampollamiento.",
              },
            },
            {
              id: "q4-c",
              text: {
                "pt-BR": "Sim, desde que a tinta seja formulada à base de poliuretano alifático, que tolera aplicação com substrato úmido.",
                "en": "Yes, provided aliphatic polyurethane topcoat is used as it tolerates wet substrates.",
                "es": "Sí, siempre que se use poliuretano alifático tolerante a humedad.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Poliuretanos contêm isocianato livre que reage violentamente com água/umidade gerando gás CO2 e formação de microespuma na película.",
                "en": "Polyurethane isocyanates react with water to generate CO2 gas, inducing severe micro-foaming and pinholes.",
                "es": "Los poliuretanos reaccionan con el agua generando CO2 y provocando porosidad en la película.",
              },
            },
            {
              id: "q4-d",
              text: {
                "pt-BR": "Não, porque a umidade relativa do ar está acima de 50%, limite máximo universal para qualquer pintura industrial.",
                "en": "No, because RH is above 50%, which is the universal maximum for industrial painting.",
                "es": "No, porque la humedad relativa supera el 50%, límite universal de pintura.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O limite normativo típico para umidade relativa é 85% (salvo especificação mais restritiva do fabricante), e não 50%.",
                "en": "Typical maximum RH threshold is 85%, not 50%.",
                "es": "El límite típico de humedad relativa es del 85%, no del 50%.",
              },
            },
          ],
        },
        {
          id: "q-pnt-5",
          order: 5,
          question: {
            "pt-BR": "O ensaio de condutividade para determinação de sais solúveis (cloretos, sulfatos) em superfícies jateadas (método Bresle / ISO 8502-6 e ISO 8502-9) é mandatório antes da pintura em ambientes marítimos (C5/CX). Qual é o mecanismo de falha provocado por cloretos residuais retidos no fundo do perfil de rugosidade sob a tinta?",
            "en": "Soluble salt testing (Bresle method / ISO 8502-6 & 8502-9) is mandatory prior to coating steel in marine (C5/CX) environments. What failure mechanism is driven by chlorides trapped at the anchor profile peaks and troughs under the coating?",
            "es": "¿Qué mecanismo de falla provocan los cloruros solubles residuales atrapados en el perfil de rugosidad bajo la pintura en ambientes marinos (ISO 8502-6/9)?",
          },
          options: [
            {
              id: "q5-a",
              text: {
                "pt-BR": "Pressão osmótica: os sais higroscópicos atraem umidade do ar através da membrana semipermeável da tinta por osmose, gerando acúmulo de líquido corrosivo concentrado e formação maciça de bolhas (blistering) com corrosão por pite.",
                "en": "Osmotic pressure: hygroscopic salts draw moisture through the semi-permeable coating via osmosis, pooling concentrated corrosive electrolyte that drives osmotic blistering and rapid pitting.",
                "es": "Presión osmótica: las sales higroscópicas atraen humedad a través de la pintura por ósmosis, acumulando líquido corrosivo y generando ampollamiento (blistering) y picaduras.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Cloretos são sais altamente higroscópicos que criam gradiente de pressão osmótica, puxando vapor d'água através da tinta e gerando bolhas cheias de ácido/cloreto de ferro.",
                "en": "Correct! Trapped chlorides create an osmotic cell that pulls moisture through the paint film, forming blisters filled with corrosive liquid.",
                "es": "¡Correcto! Las sales atrapadas crean una celda osmótica que succiona agua hacia el acero, formando ampollas corrosivas.",
              },
            },
            {
              id: "q5-b",
              text: {
                "pt-BR": "Os cloretos transformam o primer epóxi em tinta anti-incrustante de borracha clorada sem perda de espessura.",
                "en": "Chlorides convert epoxy primer into chlorinated rubber antifouling without loss of film thickness.",
                "es": "Los cloruros transforman el primer epoxi en pintura de caucho clorado.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Quimicamente incorreto. Cloretos não sintetizam borrachas cloradas; eles degradam ativamente a interface de adesão.",
                "en": "Chemically absurd. Chlorides destroy adhesion interfaces rather than synthesizing new polymers.",
                "es": "Falso. Los cloruros degradan la interfase de adhesión acelerando la corrosión.",
              },
            },
            {
              id: "q5-c",
              text: {
                "pt-BR": "Aumentam a resistência de isolamento elétrico da pintura, evitando passagem de correntes galvânicas.",
                "en": "Increases coating dielectric resistance, blocking galvanic current flow.",
                "es": "Aumentan la resistencia dieléctrica evitando corrientes galvánicas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Pelo contrário: sais aumentam a condutividade eletrolítica e reduzem a resistividade elétrica.",
                "en": "False: soluble salts drastically boost electrolytic conductivity, driving corrosion.",
                "es": "Al contrario: las sales aumentan la conductividad electrolítica acelerando el ataque.",
              },
            },
            {
              id: "q5-d",
              text: {
                "pt-BR": "Não causam nenhuma falha estrutural, alterando apenas a tonalidade da cor final por reação fotossensível.",
                "en": "Causes zero structural failure, merely inducing slight discoloration via UV sensitivity.",
                "es": "No causan fallas estructurales, solo pequeños cambios de tonalidad.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A contaminação por cloretos é a causa primária número 1 de falhas catastróficas prematuras de pintura em estruturas marinhas e offshore.",
                "en": "Chloride contamination is the leading root cause of catastrophic premature marine coating failures.",
                "es": "La contaminación por sales es la causa principal de fallas prematuras en estructuras marinas.",
              },
            },
          ],
        },
        {
          id: "q-pnt-6",
          order: 6,
          question: {
            "pt-BR": "No ensaio de aderência por tração (Pull-off Test conforme ASTM D4541 / ISO 4624) usando medidor hidráulico/mecânico de dolly, após o descolamento da pastilha a 12 MPa, verifica-se que 100% da área descolada ocorreu entre a 1ª demão de epóxi e a 2ª demão de poliuretano. Como é classificado esse tipo de ruptura?",
            "en": "In a pull-off adhesion test (ASTM D4541 / ISO 4624) at 12 MPa, 100% of the dollies detached cleanly between the 1st epoxy coat and the 2nd polyurethane coat. How is this failure categorized?",
            "es": "En un ensayo de adherencia por tracción (ASTM D4541 / ISO 4624) a 12 MPa, el desprendimiento ocurrió 100% entre la 1ª capa epoxi y la 2ª capa poliuretano. ¿Cómo se clasifica esta falla?",
          },
          options: [
            {
              id: "q6-a",
              text: {
                "pt-BR": "Falha Coesiva no substrato de aço carbono.",
                "en": "Cohesive failure within carbon steel substrate.",
                "es": "Falla cohesiva en el sustrato de acero.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Falha coesiva no substrato significaria que o metal de aço se rasgou mecanicamente a 12 MPa, o que não ocorre.",
                "en": "Cohesive substrate failure means the steel itself sheared internally at 12 MPa.",
                "es": "Falla cohesiva en sustrato significa desgarro del propio acero.",
              },
            },
            {
              id: "q6-b",
              text: {
                "pt-BR": "Falha Adesiva interdemãos (entre a demão epóxi e a demão de poliuretano), frequentemente causada por excesso de tempo de repintura (ultrapassagem do intervalo máximo) sem lixamento prévio para ancoragem mecânica.",
                "en": "Intercoat Adhesive failure (between epoxy and polyurethane coats), typically caused by exceeding the maximum recoat window without scuff sanding for mechanical tooth.",
                "es": "Falla Adhesiva entre capas (epoxi y poliuretano), provocada frecuentemente por superar el intervalo máximo de repintado sin lijado previo.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Ruptura na interface entre duas camadas distintas é falha ADESIVA. Se a primeira camada curar excessivamente sem grupos reativos disponíveis, a segunda não se funde sem lixamento.",
                "en": "Correct! Separation between distinct coating layers is intercoat adhesive failure, common when recoat windows expire.",
                "es": "¡Correcto! La separación en la interfaz entre dos capas es falla adhesiva, típicamente por ventana de repintado vencida.",
              },
            },
            {
              id: "q6-c",
              text: {
                "pt-BR": "Falha Coesiva da cola epóxi do dolly com perda de validade do ensaio.",
                "en": "Cohesive glue failure of the dolly adhesive, invalidating the test.",
                "es": "Falla cohesiva del pegamento del dolly invalidando el ensayo.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O enunciado especifica que a ruptura ocorreu entre a 1ª e a 2ª demão de tinta, e não na camada de cola que fixa o dolly.",
                "en": "Prompt explicitly states failure occurred between 1st and 2nd paint coats, not within the dollie glue.",
                "es": "La separación ocurrió entre capas de pintura, no en el adhesivo del dolly.",
              },
            },
            {
              id: "q6-d",
              text: {
                "pt-BR": "Falha Coesiva interna da camada de poliuretano alifático.",
                "en": "Cohesive failure within the aliphatic polyurethane matrix.",
                "es": "Falla cohesiva interna de la película de poliuretano.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Falha coesiva na tinta é quando a própria película se divide ao meio; o enunciado descreve separação nítida na interface entre demãos.",
                "en": "Cohesive paint failure splits a single layer internally; intercoat detachment is adhesive.",
                "es": "Falla cohesiva divide una misma capa; la separación entre dos capas distintas es adhesiva.",
              },
            },
          ],
        },
        {
          id: "q-pnt-7",
          order: 7,
          question: {
            "pt-BR": "Em serviços de pintura anticorrosiva de estruturas industriais (tanques, pipe-racks e pontes rolantes), qual é a finalidade técnica indispensável da aplicação preliminar de 'Demão de Bisnaga / Faixa' (Stripe Coat)?",
            "en": "In industrial structural coating (tanks, pipe racks, cranes), what is the mandatory engineering purpose of applying a 'Stripe Coat'?",
            "es": "¿Cuál es la finalidad técnica indispensable de la aplicación preliminar de 'Capa de Refuerzo / Cordón' (Stripe Coat)?",
          },
          options: [
            {
              id: "q7-a",
              text: {
                "pt-BR": "Identificar com cor chamativa o nome da empresa prestadora de serviço para fiscalização de obra.",
                "en": "Color-code the contractor company name for shutdown auditing.",
                "es": "Identificar visualmente a la empresa contratista para auditoría.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Stripe coat é um procedimento técnico anticorrosivo de integridade física, não identificação visual de canteiro.",
                "en": "Stripe coating is a technical corrosion barrier protocol, not visual contractor branding.",
                "es": "Es un procedimiento técnico anticorrosivo, no marcado de identificación.",
              },
            },
            {
              id: "q7-b",
              text: {
                "pt-BR": "Garantir a espessura adequada com trincha ou pincel em pontos críticos de recuo de película (cordões de solda, cantos vivos, bordas de perfis, parafusos e porcas), onde a tensão superficial da tinta líquida tende a escorrer e afinar as bordas na pulverização contínua.",
                "en": "Ensure proper film build via brush on critical geometric recesses (welds, sharp edges, angles, fasteners) where liquid paint surface tension draws film away during spray application.",
                "es": "Asegurar espesor con brocha en zonas críticas (cordones de soldadura, bordes vivos, perfiles, tuercas), donde la tensión superficial adelgaza la pintura pulverizada.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Tintas líquidas aplicadas por pistola retraem em bordas e cantos vivos devido à tensão superficial, deixando espessura residual microscópica. A aplicação prévia com trincha (stripe coat) preenche poros e compensa o afinamento.",
                "en": "Correct! Surface tension pulls wet coatings away from sharp edges and welds; brush stripe-coating forces paint into crevices and reinforces edges.",
                "es": "¡Correcto! La tensión superficial adelgaza la pintura en bordes y esquinas; el stripe coat con brocha compensa este fenómeno.",
              },
            },
            {
              id: "q7-c",
              text: {
                "pt-BR": "Servir como adesivo de alta aderência para colagem de mantas de fibra de vidro em pisos industriais.",
                "en": "Acts as an adhesive layer for fiberglass mats on industrial floors.",
                "es": "Actuar como adhesivo para mantas de fibra de vidrio.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Laminação com fibra de vidro utiliza resinas éster-vinílicas específicas, não demão de faixa convencional.",
                "en": "Fiberglass relining requires vinyl ester laminating resins, not stripe coating.",
                "es": "El refuerzo de fibra usa resinas específicas, no stripe coat.",
              },
            },
            {
              id: "q7-d",
              text: {
                "pt-BR": "Economizar tinta diluindo o solvente em 80% apenas nas áreas que não receberão inspeção com medidor magnético.",
                "en": "Save paint by thinning 80% on uninspected areas.",
                "es": "Ahorrar pintura diluyendo al 80% en áreas sin inspección.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Diluição excessiva degrada as propriedades do polímero e viola rigorosamente normas de garantia de qualidade.",
                "en": "Excessive solvent dilution ruins polymer cross-linking and breaches quality codes.",
                "es": "La dilución excesiva destruye la formulación de la pintura.",
              },
            },
          ],
        },
        {
          id: "q-pnt-8",
          order: 8,
          question: {
            "pt-BR": "Na operação e manutenção de bombas de pulverização Airless para pintura industrial com primers ricos em zinco e epóxis de alto sólidos, qual risco e procedimento de segurança é mandatório em relação ao aterramento e à mangueira de condução de tinta?",
            "en": "Operating Airless spray rigs with zinc-rich and high-solids epoxies: what mandatory safety protocol governs static bonding and fluid hoses?",
            "es": "Al operar equipos de pulverización Airless con primers ricos en zinc y epoxis: ¿qué protocolo de seguridad rige la puesta a tierra y las mangueras?",
          },
          options: [
            {
              id: "q8-a",
              text: {
                "pt-BR": "O equipamento Airless deve ser obrigatoriamente aterrado por cabo equipotencial com garra metálica ligada à estrutura de aço, e a mangueira deve possuir malha condutiva integrada para dissipação contínua de cargas estáticas geradas pelo atrito do fluido em alta velocidade (podendo superar 200 bar), prevenindo centelhamento e ignição de vapores inflamáveis de solvente.",
                "en": "Airless rigs must be grounded via static bonding clamps to structural steel, using conductive fluid hoses with integrated ground wire to dissipate electrostatic charges built up by high-velocity fluid friction (>200 bar) to prevent solvent vapor explosions.",
                "es": "El equipo Airless debe estar conectado a tierra con pinza metálica a la estructura, usando mangueras conductoras con filamento metálico para disipar estática generada por el fluido a alta velocidad (>200 bar) y evitar explosiones.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O fluxo forçado de tintas com solvente por bicos de tungstênio a 200+ bar gera eletricidade estática maciça. Sem aterramento condutivo integral, faíscas estáticas inflamam a névoa de solvente causando incêndio e explosão.",
                "en": "Correct! High-velocity fluid through micro-orifices generates massive static voltage. Static grounding and bonded hoses prevent flash fires.",
                "es": "¡Correcto! El flujo a 200+ bar genera alta carga estática. El aterramiento y mangueras con continuidad eléctrica previenen incendios.",
              },
            },
            {
              id: "q8-b",
              text: {
                "pt-BR": "Basta usar recipientes de plástico polietileno e dispensar aterramento caso a área seja aberta e ventilada.",
                "en": "Plastic containers are sufficient without grounding if the job is outdoors.",
                "es": "Basta usar cubetas de plástico sin conexión a tierra al aire libre.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Recipientes plásticos isolantes acumulam cargas eletrostáticas sem dissipação, aumentando drasticamente o risco de arco elétrico.",
                "en": "Insulating plastic buckets pool static charge, greatly escalating static discharge fire risks.",
                "es": "Los baldes plásticos acumulan cargas y aumentan el riesgo de chispas inflamables.",
              },
            },
            {
              id: "q8-c",
              text: {
                "pt-BR": "Desconectar o bico com a bomba pressurizada para verificar a cor da tinta no jato de alívio.",
                "en": "Unthread the spray tip with pump pressurized to inspect fluid color.",
                "es": "Desarmar la boquilla presurizada para revisar el color del fluido.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Risco gravíssimo de injeção cutânea de fluido em alta pressão, mutilação ou morte. Nunca manipular bicos pressurizados.",
                "en": "Deadly risk of high-pressure fluid injection and amputation. Never handle pressurized tips.",
                "es": "Peligro de muerte por inyección de fluidos a alta presión. Jamás manipular boquillas presurizadas.",
              },
            },
            {
              id: "q8-d",
              text: {
                "pt-BR": "Ligar a carcaça da máquina Airless ao polo positivo da bateria de um caminhão para anular correntes de Foucault.",
                "en": "Connect pump housing to positive terminal of a vehicle battery to cancel eddy currents.",
                "es": "Conectar la carcasa al borne positivo de una batería de camión.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Invenção perigosa que cria risco imediato de curto-circuito, choque elétrico e explosão de bateria.",
                "en": "Hazardous improvisation risking immediate short-circuit battery fires and electrocution.",
                "es": "Práctica peligrosa que provoca cortocircuitos e incendios.",
              },
            },
          ],
        },
        {
          id: "q-pnt-9",
          order: 9,
          question: {
            "pt-BR": "O ensaio não-destrutivo por 'Holiday Detector' (detector de descontinuidades / porosidade em alta tensão conforme NACE SP0188) é especificado para revestimentos internos de tanques industriais de produtos químicos. Qual é o fundamento do teste e qual o risco de selecionar uma voltagem incorreta acima da recomendada por norma?",
            "en": "High-voltage Holiday Detection (pinhole / spark testing per NACE SP0188) is required on internal chemical tank linings. What is the test principle and what is the risk of selecting voltage exceeding specified limits?",
            "es": "¿Cuál es el principio del ensayo por Holiday Detector (alta tensión / NACE SP0188) en revestimientos de tanques y qué riesgo tiene un voltaje superior al de norma?",
          },
          options: [
            {
              id: "q9-a",
              text: {
                "pt-BR": "O detector mede a cor da tinta; voltagens elevadas queimam o pigmento alterando a tonalidade aprovada no catálogo RAL.",
                "en": "The detector measures paint color; excessive voltage burns pigments altering RAL shades.",
                "es": "El detector mide el color; un voltaje alto quema el pigmento alterando el tono.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Holiday detector mede rigidez dielétrica e continuidade física do filme, não cor ou estética visual.",
                "en": "Holiday spark testing detects microscopic voids and pinholes based on dielectric strength, not color.",
                "es": "El Holiday detector busca poros microscópicos y discontinuidades dieléctricas.",
              },
            },
            {
              id: "q9-b",
              text: {
                "pt-BR": "A alta tensão (calculada em função da espessura do revestimento) descarrega uma centelha elétrica quando o eletrodo passa sobre microporos ou falhas de continuidade que expõem o aço condutor aterrado. Se a voltagem for regulada acima da rigidez dielétrica da tinta, ela perfura e rompe a película sã, criando novos poros artificiais causados pelo arco voltaico (breakdown dielétrico).",
                "en": "High voltage sparks when scanning over pinholes exposing grounded conductive steel. Excess voltage exceeding coating dielectric strength burns pinhole punctures through sound film via dielectric breakdown.",
                "es": "La alta tensión produce una chispa al pasar sobre poros que exponen el acero puesto a tierra. Si el voltaje supera la rigidez dieléctrica, perfora la película sana creando poros artificiales por arco voltaico.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A voltagem de ensaio deve ser rigorosamente calibrada conforme a espessura seca (fórmula V = K × √EPS). Sobrevoltagem destrói o revestimento sadio perfurando a camada de tinta.",
                "en": "Correct! Voltage must be calibrated to film thickness (V = K × √DFT). Overvoltage punctures sound coating via electrical dielectric breakdown.",
                "es": "¡Correcto! El voltaje se calibra según el espesor (V = K × √EPS). Un exceso de voltaje perfora la pintura sana provocando fallas.",
              },
            },
            {
              id: "q9-c",
              text: {
                "pt-BR": "Voltagens altas aumentam a dureza superficial da tinta epóxi por efeito de cura por plasma induzido.",
                "en": "High voltage tempers surface hardness via induced plasma cross-linking.",
                "es": "El alto voltaje endurece la superficie por curado de plasma.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O ensaio de faísca não cura nem enrijece a tinta; arcos elétricos térmicos degradam a matriz polimérica.",
                "en": "Spark testers do not cure coatings; electrical arcing thermally degrades resins.",
                "es": "El detector no cura la pintura; las chispas degradan térmicamente el polímero.",
              },
            },
            {
              id: "q9-d",
              text: {
                "pt-BR": "Holiday detector de alta tensão só deve ser usado em espessuras inferiores a 50 micrômetros para evitar queima da bateria.",
                "en": "High-voltage testing is strictly limited to films under 50 µm to save battery life.",
                "es": "La alta tensión solo se usa en espesores menores a 50 µm.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Para películas inferiores a 300-500 µm utiliza-se detector de esponja úmida de baixa tensão (67,5 V / 90 V); alta tensão é aplicada em películas grossas acima de 500 µm.",
                "en": "Films under 300-500 µm use low-voltage wet sponge testers; high-voltage spark testing applies to thick barrier linings.",
                "es": "En espesores bajos se usa esponja húmeda de baja tensión; alta tensión es para revestimientos gruesos.",
              },
            },
          ],
        },
        {
          id: "q-pnt-10",
          order: 10,
          question: {
            "pt-BR": "Na análise do perfil de rugosidade (perfil de ancoragem gerado por granalha de aço angular ou óxido de alumínio conforme ASTM D4417 / ISO 8503), por que a rugosidade especificada (geralmente entre 50 µm e 85 µm) não deve ser nem excessivamente baixa nem excessivamente alta em relação à espessura da demão de primer?",
            "en": "In surface roughness analysis (anchor profile from grit blasting per ASTM D4417 / ISO 8503), why must specified profile (typically 50-85 µm) be neither too low nor excessively deep relative to primer DFT?",
            "es": "¿Por qué el perfil de anclaje (rugosidad ASTM D4417) no debe ser ni excesivamente bajo ni excesivamente alto respecto al espesor del primer?",
          },
          options: [
            {
              id: "q10-a",
              text: {
                "pt-BR": "Rugosidade muito baixa causa falta de ancoragem mecânica e desplacamento adesivo precoce; rugosidade excessivamente alta deixa os picos metálicos do perfil desprotegidos ou com cobertura insuficiente de tinta (picos sem cobertura), gerando corrosão pontual acelerada (pontos de ferrugem tipo pin-point).",
                "en": "Insufficient roughness provides inadequate mechanical anchoring causing early delamination; excessive profile depth leaves metal peaks protruding through or thinly covered by primer, causing rapid pinpoint rust blooming.",
                "es": "Rugosidad muy baja causa desprendimiento por falta de anclaje; rugosidad excesiva deja los picos metálicos descubiertos o con poca cobertura, causando corrosión prematura puntual (pinpoint rust).",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O equilíbrio do perfil de rugosidade é vital: pouca rugosidade compromete a fixação; picos muito profundos perfuram a espessura do primer e oxidam antes da demão de acabamento.",
                "en": "Correct! Low profile prevents mechanical bonding; deep anchor peaks poke through the primer coat causing rapid pinpoint flash rusting.",
                "es": "¡Correcto! El equilibrio de rugosidad es vital: poco perfil impide el agarre mecánico y picos muy altos perforan la capa de primer.",
              },
            },
            {
              id: "q10-b",
              text: {
                "pt-BR": "A rugosidade só serve para aumentar o consumo de tinta e faturar mais material do cliente na parada.",
                "en": "Roughness merely increases paint consumption to bill more gallons to clients.",
                "es": "La rugosidad solo sirve para consumir más pintura y facturar más.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O perfil de ancoragem mecânica é requisito técnico indispensável de adesão especificado em normas mundiais de engenharia.",
                "en": "Anchor profile is a critical engineering requirement for mechanical coating interlock.",
                "es": "El perfil de anclaje es un requisito de ingeniería indispensable para la adhesión.",
              },
            },
            {
              id: "q10-c",
              text: {
                "pt-BR": "Perfis profundos acima de 250 µm eliminam a necessidade de aplicação de tintas de acabamento poliuretano.",
                "en": "Profiles above 250 µm eliminate the need for polyurethane topcoats.",
                "es": "Perfiles mayores a 250 µm eliminan la necesidad de capas de acabado.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Perfis acima de 120-150 µm demandam volumes adicionais massivos de primer apenas para recobrir picos, sem dispensar o acabamento resistente a UV.",
                "en": "Extreme profile wastes primer to cover peaks and does not replace UV-resistant topcoats.",
                "es": "Perfiles excesivos consumen más primer y jamás reemplazan la capa con protección UV.",
              },
            },
            {
              id: "q10-d",
              text: {
                "pt-BR": "A rugosidade é medida exclusivamente para calcular o peso bruto da estrutura metálica para guindastes.",
                "en": "Roughness is measured exclusively to calculate crane rigging payload limits.",
                "es": "La rugosidad solo se mide para calcular el peso de izaje con grúas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O perfil de rugosidade está na escala de micrômetros e destina-se exclusivamente à adesão e ancoragem físico-química de revestimentos.",
                "en": "Micro-roughness serves strictly for mechanical coating adhesion.",
                "es": "La rugosidad microscópica sirve exclusivamente para la adherencia mecánica de pinturas.",
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
    coverImage: "/images/courses/andaime.jpg",
    categories: ["conhecimento-operacional", "nr-regulamentar"],
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
        "pt-BR": "Exame formal de certificação abordando NR-18 e NR-35: capacidade de carga de pisos, dimensionamento de sapatas ajustáveis, estaiamento e amarrações estruturais, prumos, sistema de guarda-corpo padrão e protocolo de liberação por etiquetas.",
        "en": "Formal certification exam covering NR-18 & NR-35: deck load ratings, adjustable base plate physics, structural wall ties, plumbness tolerances, guardrail geometry, and tagging governance.",
        "es": "Examen de certificación que abarca NR-18 y NR-35: cargas en plataformas, zapatas regulables, anclajes estructurales, plomo, barandillas reglamentarias y protocolo de tarjetas.",
      },
      scope: "course",
      estimatedMinutes: 50,
      questionsCount: 10,
      passingScorePercent: 70,
      maxAttempts: 3,
      isAvailable: true,
      availabilityNotice: {
        "pt-BR": "Avaliação liberada após a conclusão dos módulos técnicos. Exige 70% de aproveitamento para certificação teórica.",
        "en": "Exam available upon completing modules. 70% passing score for theoretical certification.",
        "es": "Evaluación habilitada tras concluir los módulos. 70% mínimo.",
      },
      questions: [
        {
          id: "q-and-1",
          order: 1,
          question: {
            "pt-BR": "Conforme a NR-18 (Condições de Segurança e Saúde no Trabalho na Indústria da Construção) e a NR-35, qual é a configuração geométrica e dimensional obrigatória para o Sistema de Proteção Coletiva contra Quedas (guarda-corpo e rodapé) nas plataformas de trabalho dos andaimes?",
            "en": "Under NR-18 and NR-35, what is the mandatory geometric standard for perimeter collective fall protection (guardrails and toeboards) on scaffolding work decks?",
            "es": "¿Cuál es la configuración geométrica obligatoria del sistema de protección perimetral (barandilla y rodapié) en plataformas de andamio según NR-18 y NR-35?",
          },
          options: [
            {
              id: "q1-a",
              text: {
                "pt-BR": "Travessão superior a 1,20 m de altura, travessão intermediário a 0,70 m de altura e rodapé rígido com altura mínima de 0,15 m (15 cm) rente ao piso, sem vãos livres que permitam a queda de ferramentas ou materiais.",
                "en": "Top rail at 1.20 m height, intermediate mid-rail at 0.70 m height, and rigid toeboard with minimum 0.15 m (15 cm) height flush with the deck, eliminating openings for falling objects.",
                "es": "Baranda superior a 1,20 m de altura, baranda intermedia a 0,70 m y rodapié rígido de mínimo 0,15 m (15 cm) al ras del piso, sin aberturas que permitan caída de objetos.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A NR-18 estabelece rigorosamente: travessão superior a 1,20 m, intermediário a 0,70 m e rodapé de no mínimo 15 cm com vão fechado por tela ou fechamento integral.",
                "en": "Correct! NR-18 mandates top rail at 1.20 m, intermediate rail at 0.70 m, and minimum 15 cm rigid toeboard flush with decking.",
                "es": "¡Correcto! La NR-18 exige barandilla superior a 1,20 m, intermedia a 0,70 m y rodapié de al menos 15 cm.",
              },
            },
            {
              id: "q1-b",
              text: {
                "pt-BR": "Corda de polietileno de 8 mm esticada a 90 cm do chão e fita zebrada plástica na base como rodapé provisório.",
                "en": "8 mm polyethylene rope tensioned at 90 cm with yellow caution tape as an interim toeboard.",
                "es": "Cuerda de polietileno de 8 mm tensada a 90 cm y cinta de peligro como rodapié provisional.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Inaceitável. Cordas flexíveis e fitas plásticas não suportam cargas de impacto e são proibidas como proteção de bordo.",
                "en": "Unacceptable. Flexible lines and plastic tape cannot arrest human impact loads and are strictly prohibited.",
                "es": "Inaceptable. Cuerdas y cintas plásticas no resisten impactos y están prohibidas.",
              },
            },
            {
              id: "q1-c",
              text: {
                "pt-BR": "Um único travessão de aço a 1,00 m de altura, sendo dispensado o rodapé quando os trabalhadores utilizarem botinas com biqueira de composite.",
                "en": "Single steel rail at 1.00 m, waiving toeboards provided workers wear composite toe boots.",
                "es": "Un solo travesaño a 1,00 m, prescindiendo de rodapié si usan calzado con puntera composite.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Falta de travessão intermediário permite a queda do trabalhador por baixo da barra, e a ausência de rodapé propicia a queda fatal de peças na equipe de solo.",
                "en": "Missing mid-rails allows workers to slip beneath, and absent toeboards risk dropping tools on crews below.",
                "es": "Sin travesaño intermedio el operario puede caer por debajo, y sin rodapié caen herramientas.",
              },
            },
            {
              id: "q1-d",
              text: {
                "pt-BR": "Guarda-corpo a 2,00 m de altura fixado com abraçadeiras de plástico para facilitar a desmontagem rápida ao fim da jornada.",
                "en": "2.00 m tall rail tied with plastic zip-ties for rapid teardown at shift conclusion.",
                "es": "Barandilla a 2,00 m con amarres plásticos para desmonte rápido.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Totalmente fora de norma: altura excessiva que desprotege o centro de gravidade e fixações plásticas sem resistência mecânica.",
                "en": "Gross non-compliance: excessive height fails to protect worker center of mass, and plastic zip-ties possess zero rating.",
                "es": "Incumplimiento normativo total y sujeciones sin resistencia mecánica.",
              },
            },
          ],
        },
        {
          id: "q-and-2",
          order: 2,
          question: {
            "pt-BR": "Em uma torre de andaime tubular ou fachadeiro apoiada diretamente sobre solo compactado ou piso de concreto irregular, qual é a exigência técnica mandatória para o apoio dos montantes verticais (postes)?",
            "en": "On a tube-and-clamp or modular scaffold tower resting on compacted soil or irregular concrete slabs, what is the mandatory requirement for vertical standard base support?",
            "es": "¿Cuál es la exigencia técnica obligatoria para la base de los postes verticales en andamios apoyados sobre suelo o losas irregulares?",
          },
          options: [
            {
              id: "q2-a",
              text: {
                "pt-BR": "Apoiar os tubos de aço diretamente no chão sem placa de base para que o atrito natural estabilize a estrutura contra ventos.",
                "en": "Rest hollow steel tubes directly on soil without base plates so natural friction anchors against wind.",
                "es": "Apoyar los tubos directamente en la tierra sin base para que la fricción ancle la estructura.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Tubos sem base afundam no solo (punção) e concentram cargas pontuais altíssimas, levando ao tombamento imediato da torre.",
                "en": "Tubeless bases punch into soil, concentrating catastrophic point loads that trigger scaffold collapse.",
                "es": "Los tubos sin base se hunden en el terreno concentrando cargas puntuales que vuelcan la torre.",
              },
            },
            {
              id: "q2-b",
              text: {
                "pt-BR": "Utilizar sapatas de aço reguláveis (fusos roscados com placa de base metálica) apoiadas sobre pranchões contínuos de madeira tratada de boa qualidade (espessura mínima de 3,8 a 5 cm) que distribuam a carga uniformemente sobre o solo e compensem desníveis sem calços improvisados.",
                "en": "Use adjustable steel base jacks (threaded spindles with steel plates) resting on continuous heavy timber sole plates (minimum 3.8 to 5 cm thickness) to distribute loads evenly and level the structure without improvised shims.",
                "es": "Usar zapatas de acero regulables (husillos roscados con placa metálica) apoyadas sobre tablones continuos de madera tratada (mínimo 3,8 a 5 cm) que distribuyan las cargas y nivelen sin calces precarios.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A placa de base com fuso ajustável garante prumo e contato integral, enquanto o pranchão (prancha de distribuição) reduz a pressão sobre o solo (tensão admissível). É proibido usar tijolos, pedras ou tocos soltos.",
                "en": "Correct! Screw jacks level the standards, while timber sole boards distribute point loads to soil bearing capacities. Improvised blocks are illegal.",
                "es": "¡Correcto! Los husillos roscados nivelan los pies y los tablones de reparto distribuyen la carga al terreno evitando hundimientos.",
              },
            },
            {
              id: "q2-c",
              text: {
                "pt-BR": "Calçar os postes com pilhas de tijolos furados e blocos de concreto de obra para elevar a altura rapidamente.",
                "en": "Shim vertical standards using stacked hollow masonry blocks to rapidly gain platform elevation.",
                "es": "Nivelar los postes con pilas de ladrillos huecos y bloques de hormigón.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Tijolos e blocos ocos esfarelam e quebram sob carga de compressão dinâmica, causando o colapso estrutural da torre.",
                "en": "Hollow bricks crush and shatter under compressive live loads, resulting in immediate scaffold collapse.",
                "es": "Los ladrillos huecos colapsan bajo compresión causando el derrumbe de la estructura.",
              },
            },
            {
              id: "q2-d",
              text: {
                "pt-BR": "Enterrar os primeiros 50 cm dos tubos verticais no barro para criar ancoragem geotécnica permanente.",
                "en": "Bury the bottom 50 cm of standards into mud to generate geotechnical anchor capacity.",
                "es": "Enterrar 50 cm de tubo en el barro para generar anclaje geotécnico.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Enterrar tubos acelera a corrosão interna por umidade e impede a inspeção visual obrigatória de trincas e bases.",
                "en": "Burying tubes promotes severe accelerated corrosion and conceals mandatory visual inspection points.",
                "es": "Enterrar tubos acelera la corrosión e impide inspeccionar las bases.",
              },
            },
          ],
        },
        {
          id: "q-and-3",
          order: 3,
          question: {
            "pt-BR": "Qual é a regra técnica e geométrica para amarração (estaiamento e fixação) de torres de andaimes tubulares fachadeiros autoportantes contra fachadas e estruturas prediais rígidas para resistir aos esforços de sucção e pressão do vento?",
            "en": "What is the technical and geometric rule for wall tying (anchorage and bracing) of self-supporting facade scaffolding against structural walls to resist wind suction and overturning forces?",
            "es": "¿Cuál es la regla técnica y geométrica de amarre (arriostramiento y anclaje) de andamios a estructuras fijas para resistir vientos?",
          },
          options: [
            {
              id: "q3-a",
              text: {
                "pt-BR": "Andaimes fachadeiros não precisam de amarração na parede desde que as pranchas de madeira do piso estejam pregadas.",
                "en": "Facade scaffolds require zero wall ties provided timber deck boards are securely nailed down.",
                "es": "Los andamios de fachada no necesitan amarres si los tablones de piso están clavados.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Andaimes não amarrados tombam como dominó sob ventos moderados devido à grande área vélica lateral.",
                "en": "Untied scaffolds overturn like dominoes in moderate winds due to huge sail area effects.",
                "es": "Andamios sin amarres vuelcan con vientos moderados por el efecto vela.",
              },
            },
            {
              id: "q3-b",
              text: {
                "pt-BR": "A torre deve ser ancorada à estrutura sólida da edificação por meio de pontos de ancoragem rígidos (chumbadores químicos/mecânicos ou garras estruturais), respeitando a modulação de cálculo do projeto (geralmente a cada 4 metros de altura e em montantes alternados), além de contraventamentos em X para garantir rigidez dimensional indeformável.",
                "en": "The scaffold must be anchored to solid structural building elements via rigid wall ties (mechanical/chemical anchors or structural clamps) according to engineered spacing (typically every 4 m vertically on alternate standards), combined with diagonal cross-braces for geometric rigidity.",
                "es": "El andamio debe anclarse a la estructura resistente mediante puntos rígidos (pernos mecánicos/químicos o mordazas) según proyecto (generalmente cada 4 m verticales en montantes alternos), con cruces de San Andrés para rigidez indeformable.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A NR-18 exige amarração rígida estruturada e projeto de montagem para alturas elevadas. Ancoragens periódicas impedem flambagem dos montantes e tombamento por rajadas de vento.",
                "en": "Correct! NR-18 mandates structural wall ties and formal design calculation for tall scaffolds to counteract buckling and wind overturning.",
                "es": "¡Correcto! La NR-18 exige anclajes periódicos rígidos y arriostramientos diagonales para evitar el pandeo y volcamiento.",
              },
            },
            {
              id: "q3-c",
              text: {
                "pt-BR": "Amarrar o andaime exclusivamente a tubulações industriais de PVC de esgoto ou conduítes elétricos flexíveis.",
                "en": "Tie the scaffold exclusively to PVC plumbing drain pipes or flexible electrical conduits.",
                "es": "Amarrar el andamio únicamente a tuberías plásticas de PVC o bandejas eléctricas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Tubulações de utilidades e eletrodutos não possuem resistência mecânica para suportar esforços de andaimes e quebram.",
                "en": "Utility pipes and conduits lack structural capacity, snapping under scaffold dynamic loads.",
                "es": "Las tuberías de servicios no soportan cargas estructurales y se rompen.",
              },
            },
            {
              id: "q3-d",
              text: {
                "pt-BR": "Colocar sacos de areia de 20 kg nos cantos superiores do andaime para contrabalançar as rajadas de vento.",
                "en": "Place 20 kg sandbags on top platform corners to counterweight wind gusts.",
                "es": "Colocar sacos de arena de 20 kg en la plataforma superior para hacer contrapeso.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Pesos no topo elevam o centro de gravidade e aumentam perigosamente o momento de tombamento da estrutura.",
                "en": "Top loading raises the center of gravity, critically worsening the overturning moment.",
                "es": "Cargas en la parte alta elevan el centro de gravedad empeorando el riesgo de vuelco.",
              },
            },
          ],
        },
        {
          id: "q-and-4",
          order: 4,
          question: {
            "pt-BR": "Quanto ao tablado (piso de trabalho) das plataformas de andaimes, quais são as exigências normativas da NR-18 e boas práticas para evitar frestas, escorregamentos e acidentes com alçapões?",
            "en": "Regarding scaffolding working decks (planking), what are the mandatory NR-18 requirements to prevent gaps, slips, and trapdoor hazards?",
            "es": "¿Cuáles son las exigencias de la NR-18 para plataformas y pisos de andamios respecto a aberturas, resbalones y trampillas de acceso?",
          },
          options: [
            {
              id: "q4-a",
              text: {
                "pt-BR": "O piso de trabalho deve ser 100% completo, sem frestas ou descontinuidades, antiderrapante, travado mecanicamente contra deslocamento horizontal e vertical (elevação por vento), e as aberturas de alçapões de escada devem possuir tampa com fechamento em nível e mola ou trinco que permaneça fechada quando não estiver em uso para subida/descida.",
                "en": "Decking must be 100% fully boarded with zero gaps, slip-resistant, mechanically secured against uplift or lateral sliding, and ladder access trapdoors must have level self-closing or latching hatches kept closed when not actively transited.",
                "es": "El piso debe ser 100% continuo, sin aberturas, antideslizante, trabado contra movimientos o levantamiento por viento, y las trampillas de acceso deben mantenerse cerradas a nivel con pestillo cuando no se usen.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Plataformas incompletas ou tábuas soltas são responsáveis por quedas graves. O alçapão aberto cria um fosso invisível de queda no meio do piso.",
                "en": "Correct! Gaps and loose planks cause severe fall accidents. Open trapdoors create invisible hole hazards in the center of decks.",
                "es": "¡Correcto! Tablones sueltos causan caídas mortales. Las trampillas abiertas crean aberturas peligrosas en la plataforma.",
              },
            },
            {
              id: "q4-b",
              text: {
                "pt-BR": "Basta cobrir 30% da plataforma onde os pés do trabalhador pisam, deixando o restante aberto para melhorar a circulação de ar.",
                "en": "Boarding 30% of platform area where feet step is sufficient, leaving the remainder open for air circulation.",
                "es": "Basta cubrir el 30% de la plataforma donde pisan los operarios, dejando el resto libre.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Totalmente irregular. A plataforma deve ser 100% assoalhada de ponta a ponta sem nenhum vão livre.",
                "en": "Grossly non-compliant. Scaffold bays must be 100% fully planked edge to edge.",
                "es": "Completamente antirreglamentario. La plataforma debe estar cerrada al 100% sin huecos.",
              },
            },
            {
              id: "q4-c",
              text: {
                "pt-BR": "Pranchas de madeira devem receber três demãos de tinta a óleo brilhante para proteger contra cupins e facilitar a limpeza.",
                "en": "Timber boards must receive three coats of high-gloss oil paint to protect against termites and ease cleaning.",
                "es": "Los tablones de madera deben pintarse con esmalte brillante para proteger de polillas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Pintar pranchas de madeira é expressamente proibido pela NR-18, pois a tinta esconde trincas, nós podres e fissuras estruturais da madeira.",
                "en": "Painting timber scaffolding planks is explicitly banned by NR-18 because paint masks structural cracks, rot, and knot defects.",
                "es": "Pintar tablones está prohibido por la NR-18 porque oculta nudos, fisuras y defectos estructurales.",
              },
            },
            {
              id: "q4-d",
              text: {
                "pt-BR": "Utilizar placas de compensado fino de 4 mm apoiadas soltas sobre os tubos sem amarração.",
                "en": "Use loose 4 mm thin plywood sheets resting unfastened across crossbars.",
                "es": "Usar placas de contrachapado fino de 4 mm sueltas sin amarrar.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Compensados finos quebram instantaneamente sob o peso de um colaborador e voam com rajadas de vento.",
                "en": "Thin plywood shatters immediately under body weight and blows away in wind gusts.",
                "es": "El contrachapado fino se quiebra de inmediato bajo el peso de un trabajador.",
              },
            },
          ],
        },
        {
          id: "q-and-5",
          order: 5,
          question: {
            "pt-BR": "Qual é a tolerância máxima permitida para o desvio de prumo (verticalidade dos montantes/postes) em uma torre de andaime tubular montada para manutenção industrial, e qual ferramenta de precisão o montador líder deve utilizar durante o nivelamento?",
            "en": "What is the maximum allowable out-of-plumb deviation (verticality tolerance) for assembled scaffolding standards, and which measurement instrument must the lead erector use during plumb leveling?",
            "es": "¿Cuál es la tolerancia máxima de desplome (verticalidad de montantes) en un andamio industrial y qué herramienta de control debe usarse?",
          },
          options: [
            {
              id: "q5-a",
              text: {
                "pt-BR": "Tolerância de até 15 graus de inclinação, verificada apenas visualmente olhando de longe contra a linha do horizonte.",
                "en": "Up to 15 degrees tilt tolerance, verified by naked eye against the distant horizon.",
                "es": "Tolerancia de hasta 15 grados de inclinación a simple vista.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "15 graus de inclinação gera forças de cisalhamento brutais que tombam a torre com qualquer movimentação.",
                "en": "A 15-degree tilt generates massive eccentric shear loads that cause immediate structural collapse.",
                "es": "Una inclinación de 15 grados provoca fuerzas excéntricas que derrumban el andamio.",
              },
            },
            {
              id: "q5-b",
              text: {
                "pt-BR": "Desvio de prumo máximo de 2 mm por metro de altura (ou até H/500 conforme normas de fabricação ABNT NBR 6494 / EN 12810), checado obrigatoriamente com nível de bolha magnético ou prumo de centro de aço em cada lance montado.",
                "en": "Maximum plumb deviation of 2 mm per vertical meter (or H/500 per ABNT NBR 6494 / EN 12810), verified using a magnetic spirit level or steel plumb bob on every assembled lift.",
                "es": "Desplome máximo de 2 mm por metro de altura (o H/500 según ABNT NBR 6494 / EN 12810), comprobado con nivel de burbuja magnético o plomada de acero en cada cuerpo.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Desvios de prumo transferem a carga axial pura para flexo-compressão excêntrica, reduzindo drasticamente a capacidade de carga dos tubos e facilitando a flambagem.",
                "en": "Correct! Out-of-plumb standards introduce dangerous eccentric bending moments, drastically slashing the axial load capacity of uprights.",
                "es": "¡Correcto! El desplome introduce flexocompresión excéntrica reduciendo la capacidad portante de los postes y favoreciendo el pandeo.",
              },
            },
            {
              id: "q5-c",
              text: {
                "pt-BR": "O prumo não tem relevância em andaimes modulares tipo multidirecional devido ao travamento automático das rosetas.",
                "en": "Plumb is irrelevant in modular ringlock scaffolding because rosettes auto-align geometry.",
                "es": "El plomo no importa en andamios multidireccionales gracias a las rosetas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Mesmo em sistemas modulares (roseta/cunha), bases desniveladas acumulam desvios angulares cumulativos que travam os engates e forçam as conexões.",
                "en": "Even with ringlock systems, unlevel base jacks compound cumulative angular stress, jamming wedge heads.",
                "es": "Incluso en sistemas multidireccionales las bases desniveladas transmiten esfuerzos que deforman las uniones.",
              },
            },
            {
              id: "q5-d",
              text: {
                "pt-BR": "Tolerância de 30 cm de desvio lateral a cada 2 metros de altura para permitir contornar tubulações existentes.",
                "en": "30 cm lateral offset per 2 m lift to jog around piping obstructions.",
                "es": "Tolerancia de 30 cm de desvío lateral por cuerpo para sortear cañerías.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Desvios laterais só podem ser executados com projeto de balanço, consolos metálicos certificados e contraventamentos calculados.",
                "en": "Cantilever offsets require engineered side brackets and calculated structural tiebacks, never bent standards.",
                "es": "Los vuelos o desvíos requieren ménsulas calculadas por ingeniería, nunca postes inclinados.",
              },
            },
          ],
        },
        {
          id: "q-and-6",
          order: 6,
          question: {
            "pt-BR": "No protocolo de Gestão de Liberação de Andaimes por Etiquetas (Tagging System: Verde / Amarela / Vermelha), qual é o significado formal de cada etiqueta e quem tem autorização para emitir a Etiqueta Verde?",
            "en": "In the Scaffolding Tagging System (Green / Yellow / Red), what is the formal meaning of each tag and who is authorized to issue the Green Tag?",
            "es": "¿Cuál es el significado formal de cada tarjeta en el sistema de inspección de andamios (Verde / Amarilla / Roja) y quién emite la Tarjeta Verde?",
          },
          options: [
            {
              id: "q6-a",
              text: {
                "pt-BR": "Verde: Andaime inspecionado e 100% liberado para uso seguro (emitida exclusivamente pelo Montador Líder / Inspetor de Andaimes qualificado); Amarela: Andaime com restrições específicas operacionais (ex: uso obrigatório de talabarte duplo 100% ancorado fora da estrutura); Vermelha: INTERDITADO / em montagem / reprovado (proibido o acesso de qualquer usuário exceto montadores com APR).",
                "en": "Green: Inspected and 100% cleared for safe use (issued exclusively by qualified Scaffolding Inspector/Lead Erector); Yellow: Scaffolding with specific operational restrictions (e.g. 100% tie-off mandatory to independent anchors); Red: DANGER - UNSAFE / under erection / rejected (access strictly prohibited to all personnel except erectors under formal JSA).",
                "es": "Verde: Inspeccionado y 100% habilitado (emitida solo por Inspector/Montador Líder calificado); Amarilla: Restricción operativa (ej. uso obligatorio de doble cabo anclado fuera del andamio); Roja: PELIGRO - CLAUSURADO / en montaje (acceso prohibido excepto montadores con ATS).",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O sistema de cartões previne acidentes. Ninguém pode subir em andaime com cartão vermelho ou sem cartão. A liberação exige inspeção física formal diária ou semanal assinada.",
                "en": "Correct! Tagging governance prevents fatal falls. Accessing red-tagged or un-tagged scaffolds is strictly prohibited.",
                "es": "¡Correcto! El sistema de tarjetas garantiza que nadie suba a andamios sin inspección firmada o en proceso de montaje.",
              },
            },
            {
              id: "q6-b",
              text: {
                "pt-BR": "Verde: Andaime para qualquer pessoa sem cinto de segurança; Amarela: Andaime para soldadores; Vermelha: Andaime exclusivo para serviços de pintura.",
                "en": "Green: Free access without harness; Yellow: Welders only; Red: Exclusive for painters.",
                "es": "Verde: Acceso libre sin arnés; Amarilla: Soldadores; Roja: Exclusiva para pintores.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Absurdo. As etiquetas indicam status de segurança e integridade mecânica, não especialidades profissionais.",
                "en": "Absurd. Scaffolding tags denote structural safety status, not craft professions.",
                "es": "Las tarjetas indican estado estructural de seguridad, no oficios laborales.",
              },
            },
            {
              id: "q6-c",
              text: {
                "pt-BR": "Qualquer ajudante de obra pode colocar a etiqueta verde se achar que a estrutura não balança ao empurrar com a mão.",
                "en": "Any site laborer can hang a green tag if the tower does not wobble when shoved by hand.",
                "es": "Cualquier peón puede colocar tarjeta verde si el andamio no se mueve al empujarlo.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A inspeção e liberação formal exige profissional legalmente habilitado ou capacitado com treinamento específico conforme a NR-18.",
                "en": "Formal tagging requires certified competency under NR-18; unauthorized tagging is a severe violation.",
                "es": "La inspección requiere personal formalmente capacitado según NR-18.",
              },
            },
            {
              id: "q6-d",
              text: {
                "pt-BR": "A etiqueta vermelha significa que o andaime é de alta capacidade (aguenta mais de 5 toneladas de tijolos).",
                "en": "Red tag indicates heavy-duty rating (supports over 5 tons of bricks).",
                "es": "La tarjeta roja indica andamio para cargas pesadas de más de 5 toneladas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Etiqueta vermelha significa universalmente PERIGO - NÃO USE / PROIBIDO ACESSO.",
                "en": "Red tags universally mean DANGER - DO NOT USE / ACCESS PROHIBITED.",
                "es": "La tarjeta roja significa universalmente PELIGRO - NO USAR.",
              },
            },
          ],
        },
        {
          id: "q-and-7",
          order: 7,
          question: {
            "pt-BR": "Durante a montagem e desmontagem de andaimes em alturas superiores a 2,00 metros, qual é o protocolo de proteção contra quedas obrigatório para os MONTADORES (que frequentemente precisam se movimentar antes da instalação do guarda-corpo final)?",
            "en": "During erection and dismantling of scaffolds above 2.00 m, what is the mandatory fall protection protocol for ERECTORS who must maneuver prior to permanent guardrail installation?",
            "es": "¿Cuál es el protocolo obligatorio de protección contra caídas para los MONTADORES durante el montaje y desmonte por encima de 2,00 m?",
          },
          options: [
            {
              id: "q7-a",
              text: {
                "pt-BR": "Montadores não precisam de cinto nem ancoragem por possuírem agilidade motora comprovada em exame admissional.",
                "en": "Erectors are exempt from harness anchorage due to verified agility in physical hiring tests.",
                "es": "Los montadores están exentos de arnés por su agilidad y experiencia comprobada.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Grave violação da NR-35. Trabalho em altura acima de 2 metros exige proteção ativa contra quedas em 100% do tempo.",
                "en": "Severe breach of NR-35. Working at heights above 2 m mandates 100% active fall protection.",
                "es": "Violación grave de la NR-35. El trabajo sobre 2 m exige protección activa contra caídas el 100% del tiempo.",
              },
            },
            {
              id: "q7-b",
              text: {
                "pt-BR": "Utilização obrigatória de Cinto de Segurança tipo Paraquedista com Talabarte Y duplo provido de absorvedor de energia (ABS), mantendo pelo menos um dos ganchos (conectores MGO de 55 mm ou 110 mm) 100% do tempo ancorado a pontos estruturais independentes ou linha de vida provisória vertical/horizontal acima do nível da cabeça (fator de queda menor que 1), ou sistema de guarda-corpo avançado de montagem prévia.",
                "en": "Mandatory full-body harness with twin-leg Y-lanyard with energy absorber (shock pack), maintaining 100% tie-off anchored to independent structural points or overhead lifelines (fall factor < 1), or utilizing advance guardrail systems.",
                "es": "Uso obligatorio de arnés tipo paracaidista con doble cabo en Y con absorbedor de energía, manteniendo conexión 100% del tiempo a puntos estructurales o línea de vida sobre la cabeza (factor de caída < 1), o barandillas de montaje avanzado.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O princípio de ancoragem contínua 100% (talabarte duplo alternado) garante que o montador nunca fique desprotegido durante a transição entre lances de montagem.",
                "en": "Correct! Continuous 100% tie-off with twin lanyards guarantees the erector is continuously secured during lift transitions.",
                "es": "¡Correcto! El anclaje continuo del 100% mediante doble cabo garantiza protección permanente durante el avance.",
              },
            },
            {
              id: "q7-c",
              text: {
                "pt-BR": "Fixar o talabarte no próprio tubo de guarda-corpo que acabou de ser encaixado solto sem aperto das abraçadeiras.",
                "en": "Anchor lanyard to an unbolted loose guardrail pipe that was just fitted without clamp torque.",
                "es": "Anclar el cabo al tubo de barandilla recién colocado que aún no tiene las grapas apretadas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Tubos sem aperto de abraçadeira desencaixam com facilidade, não oferecendo nenhuma capacidade de retenção de queda (mínimo de 15 kN / 1.500 kgf).",
                "en": "Untorqued pipes slip instantly, offering zero fall arrest structural resistance (minimum 15 kN required).",
                "es": "Piezas sin apretar se desprenden ante una caída sin ofrecer la resistencia de 15 kN exigida.",
              },
            },
            {
              id: "q7-d",
              text: {
                "pt-BR": "Segurar firmemente com uma das mãos em um tubo vertical enquanto aperta as abraçadeiras com a chave de catraca na outra mão.",
                "en": "Hold onto a vertical tube with one hand while torquing clamps with a ratchet wrench with the other.",
                "es": "Sujetarse con una mano al tubo mientras con la otra se aprieta la grapa.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Força manual de preensão não constitui sistema de ancoragem contra quedas; a perda de equilíbrio resulta em queda livre fatal.",
                "en": "Manual hand grip is not a fall protection system; loss of footing triggers fatal free fall.",
                "es": "La fuerza de los brazos no es un sistema anticaídas; un resbalón causa caída fatal.",
              },
            },
          ],
        },
        {
          id: "q-and-8",
          order: 8,
          question: {
            "pt-BR": "Nas abraçadeiras de aço forjado para montagem de andaimes tubulares (abraçadeira fixa para união a 90° e abraçadeira giratória para diagonais), qual é a recomendação técnica de torque de aperto das porcas com chave catraca e o risco de sub-torque ou sobre-torque?",
            "en": "On drop-forged steel scaffold clamps (right-angle 90° coupler and swivel coupler for diagonals), what is the technical torque range for nuts and the risk of under-torquing versus over-torquing?",
            "es": "¿Cuál es el torque técnico recomendado para grapas forjadas de andamio (fijas 90° y giratorias) y el riesgo de apriete insuficiente o excesivo?",
          },
          options: [
            {
              id: "q8-a",
              text: {
                "pt-BR": "O aperto deve ser feito com a mão sem ferramentas para não espanar as roscas métricas.",
                "en": "Tightening should be performed by hand without tools to preserve metric threads.",
                "es": "El apriete debe hacerse a mano sin herramientas para no dañar las roscas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Aperto manual resulta em escorregamento imediato da abraçadeira sob qualquer carga aplicada.",
                "en": "Hand tightening leads to immediate coupler slippage under any working load.",
                "es": "El apriete manual produce deslizamiento inmediato de las abrazaderas bajo carga.",
              },
            },
            {
              id: "q8-b",
              text: {
                "pt-BR": "Torque recomendado padrão de 40 a 55 N·m (aprox. 4 a 5,5 kgf·m); torque insuficiente causa deslizamento longitudinal do tubo sob carga, enquanto aperto excessivo com alavancas ou chaves de impacto rompe o parafuso T, deforma a parede do tubo e trinca o corpo forjado da abraçadeira.",
                "en": "Standard torque range of 40 to 55 N·m (~4 to 5.5 kgf·m); under-torque causes axial tube slip under load, while excessive over-torquing with cheater pipes strips T-bolts, crushes tube walls, and cracks forged coupler housings.",
                "es": "Torque recomendado de 40 a 55 N·m (~4 a 5,5 kgf·m); torque insuficiente causa deslizamiento del tubo bajo carga, mientras que el sobreapriete con palancas rompe el perno T, deforma el tubo y fisura la grapa forjada.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Chaves catraca de andaime padrão de 19/22 mm com haste de 25 cm foram dimensionadas ergonomicamente para atingir a faixa de 50 N·m com força de braço normal.",
                "en": "Correct! Standard 25 cm scaffold podger ratchet wrenches naturally produce ~50 N·m with normal manual effort.",
                "es": "¡Correcto! Las llaves de carraca para andamio de 25 cm están diseñadas para alcanzar 50 N·m con fuerza manual normal.",
              },
            },
            {
              id: "q8-c",
              text: {
                "pt-BR": "Aplicar torque de 500 N·m utilizando chave de impacto pneumática de carreta até a porca fundir na abraçadeira.",
                "en": "Apply 500 N·m using pneumatic truck impact wrenches until the nut galls into the body.",
                "es": "Aplicar 500 N·m con llave de impacto neumática hasta que la tuerca se deforme.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "500 N·m degola o parafuso T instantaneamente e amassa o tubo de aço tornando-o inutilizável.",
                "en": "500 N·m shears T-bolts instantly and crushes steel tubing beyond use.",
                "es": "500 N·m corta el perno de inmediato y deforma el tubo de forma irreparable.",
              },
            },
            {
              id: "q8-d",
              text: {
                "pt-BR": "O torque só é necessário nas montagens de andaimes suspensos; em andaimes apoiados as abraçadeiras podem ficar soltas.",
                "en": "Torque is only required on suspended scaffolds; on supported towers clamps can remain loose.",
                "es": "El torque solo es necesario en andamios colgantes; en andamios apoyados pueden quedar sueltas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Todo andaime suporta cargas gravitacionais e de vento que exigem união rígida calibrada em 100% das conexões.",
                "en": "All scaffolds carry vertical gravity and lateral wind loads requiring calibrated connection rigidity throughout.",
                "es": "Todo andamio soporta cargas dinámicas y exige uniones con torque calibrado en el 100% de las grapas.",
              },
            },
          ],
        },
        {
          id: "q-and-9",
          order: 9,
          question: {
            "pt-BR": "Em andaimes tubulares móveis sobre rodízios (rodas para deslocamento em pisos nivelados), quais requisitos mandatórios de estabilidade e segurança física devem ser obedecidos antes de qualquer deslocamento ou trabalho?",
            "en": "On mobile tower scaffolds on castors/wheels for level floor movement, what mandatory stability and safety requirements must be complied with?",
            "es": "¿Cuáles son los requisitos de seguridad obligatorios en andamios móviles sobre ruedas en pisos nivelados?",
          },
          options: [
            {
              id: "q9-a",
              text: {
                "pt-BR": "Os rodízios devem possuir travas eficazes de giro e rotação travadas durante o trabalho; a proporção máxima de altura/base não deve exceder 3:1 (ou 4:1 com estabilizadores/patolas abertas); e é TERMINANTEMENTE PROIBIDO deslocar o andaime com pessoas, materiais soltos ou ferramentas sobre a plataforma.",
                "en": "Castors must have positive dual-wheel and swivel locks engaged during work; height-to-base ratio must not exceed 3:1 (or 4:1 with outriggers deployed); and it is STRICTLY PROHIBITED to move the scaffold with personnel, loose materials, or tools on the platform.",
                "es": "Las ruedas deben tener freno de traslación y giro bloqueados al trabajar; la relación altura/base no debe superar 3:1 (o 4:1 con estabilizadores abiertos); y está TERMINANTEMENTE PROHIBIDO trasladar el andamio con personas o materiales arriba.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Mover andaime com pessoas em cima causa tombamento imediato quando uma roda encontra uma pequena fresta ou desnível no piso.",
                "en": "Correct! Moving scaffolds with occupants causes instant tip-over when castors hit small floor cracks or expansion joints.",
                "es": "¡Correcto! Mover andamios con personal arriba causa volcamiento inmediato ante cualquier desnivel o grieta en el piso.",
              },
            },
            {
              id: "q9-b",
              text: {
                "pt-BR": "O trabalhador deve permanecer na plataforma alta segurando nos pilares da fábrica enquanto os ajudantes empurram o andaime correndo.",
                "en": "Worker must stay on top platform holding onto factory columns while ground helpers run pushing the tower.",
                "es": "El trabajador debe quedarse en la plataforma sujetando las vigas mientras los peones empujan.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Prática gravíssima e letal que gera momento de tombamento instantâneo da torre.",
                "en": "Lethal practice creating violent instantaneous overturning moments.",
                "es": "Práctica sumamente peligrosa que provoca el volcamiento instantáneo de la torre.",
              },
            },
            {
              id: "q9-c",
              text: {
                "pt-BR": "Rodízios não precisam de travas mecânicas desde que o chão seja de terra batida.",
                "en": "Castors need no brakes provided the ground is packed earth.",
                "es": "Las ruedas no necesitan freno si el suelo es de tierra batida.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Andaimes sobre rodízios só podem ser utilizados sobre pisos rígidos, planos e nivelados, nunca em terra batida.",
                "en": "Mobile scaffolds are restricted to flat, solid paved floors, never bare soil.",
                "es": "Los andamios sobre ruedas solo pueden usarse sobre pisos planos y firmes, nunca en tierra.",
              },
            },
            {
              id: "q9-d",
              text: {
                "pt-BR": "Andaimes móveis podem ter altura ilimitada desde que amarrados a uma corda esticada pelo operador.",
                "en": "Mobile towers can have unlimited height provided the operator holds a taut rope.",
                "es": "Los andamios móviles pueden tener altura ilimitada sostenidos por una soga.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A relação altura-base é uma lei física estrita de estabilidade estática contra tombamento.",
                "en": "Height-to-base ratio is a strict physical law of static stability against overturning.",
                "es": "La relación altura-base es un principio físico estricto de estabilidad.",
              },
            },
          ],
        },
        {
          id: "q-and-10",
          order: 10,
          question: {
            "pt-BR": "A aprovação e conclusão deste curso EAD de Montagem e Segurança em Andaimes no portal RSS3 Treinamentos confere habilitação formal imediata para o colaborador atuar como montador de andaimes em campo na CMPC ou outras plantas?",
            "en": "Does completing this online Scaffolding Safety course immediately confer formal legal qualification to work as a field scaffold erector at CMPC or other plants?",
            "es": "¿La aprobación de este curso online habilita de inmediato formalmente al trabajador para desempeñarse como montador de andamios en planta?",
          },
          options: [
            {
              id: "q10-a",
              text: {
                "pt-BR": "Sim. A prova online substitui todos os requisitos práticos presenciais e permite assinar projetos de montagem.",
                "en": "Yes. The online exam waives all hands-on requirements and permits signing scaffolding designs.",
                "es": "Sí. El examen online reemplaza la práctica presencial y autoriza a firmar montajes.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Falso e ilegal. Cursos EAD para atividades regulamentadas cobrem exclusivamente a etapa teórica do conteúdo programático.",
                "en": "False and illegal. E-learning for regulated high-risk tasks covers only the theoretical curriculum.",
                "es": "Falso e ilegal. La formación EAD cubre únicamente la etapa teórica.",
              },
            },
            {
              id: "q10-b",
              text: {
                "pt-BR": "NÃO. Este certificado atesta a conclusão da fundamentação teórica regulamentar (NR-18 e NR-35). A habilitação formal e operacional plena para trabalho em altura e montagem exige mandatoriamente o treinamento prático presencial supervisionado por instrutor credenciado e Atestado de Saúde Ocupacional (ASO) vigente com aptidão específica para trabalho em altura.",
                "en": "NO. This certificate validates completion of theoretical regulatory curriculum (NR-18 & NR-35). Full operational qualification for work at heights and scaffolding erection strictly requires supervised practical hands-on field training by a certified instructor and a valid Occupational Health Certificate (ASO) declaring fitness for working at heights.",
                "es": "NO. Este certificado avala la etapa teórica (NR-18 y NR-35). La habilitación formal práctica exige obligatoriamente entrenamiento presencial supervisado por instructor acreditado y ASO vigente apto para trabajo en altura.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Conforme estabelecido no AGENTS.md e nas NRs 1, 18 e 35, certificados online atestam teoria; habilitações formais de alto risco demandam homologação prática e aptidão médica presencial comprovada.",
                "en": "Correct! As stipulated in regulatory policies and AGENTS.md, online courses certify theoretical mastery; practical high-risk licensing mandates physical validation and medical clearance.",
                "es": "¡Correcto! Según el AGENTS.md y las NRs, la teoría no sustituye la práctica presencial supervisada ni el ASO vigente.",
              },
            },
            {
              id: "q10-c",
              text: {
                "pt-BR": "Sim, desde que o colaborador apresente o certificado impresso em papel fotográfico brilhante para o encarregado.",
                "en": "Yes, provided the certificate is printed on glossy photo paper for the supervisor.",
                "es": "Sí, si se imprime en papel fotográfico brillante para el supervisor.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O tipo de papel não altera a natureza regulatória do documento (Certificado de Teoria EAD vs Registro de Habilitação Prática).",
                "en": "Paper finish has zero effect on regulatory status (Theory Certificate vs Practical License).",
                "es": "El tipo de papel no altera el valor regulatorio del certificado.",
              },
            },
            {
              id: "q10-d",
              text: {
                "pt-BR": "Apenas se o colaborador tiver menos de 30 anos e histórico de esportes radicais comprovado em carteira de trabalho.",
                "en": "Only if the worker is under 30 years old with documented extreme sports background.",
                "es": "Solo si tiene menos de 30 años y experiencia en deportes extremos.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Idade e esportes não têm valor legal ou técnico para homologação de qualificação profissional em engenharia e segurança.",
                "en": "Age and recreational sports bear zero technical or legal validity for occupational safety licenses.",
                "es": "La edad o pasatiempos no tienen validez legal para habilitaciones de seguridad industrial.",
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
    coverImage: "/images/courses/nr6.jpg",
    categories: ["nr-regulamentar"],
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
        "pt-BR": "Verificação de conformidade regulatória da NR-6: hierarquia de medidas de controle, Certificado de Aprovação (CA), guarda e conservação, compatibilidade entre múltiplos EPIs, responsabilidades legais e diferenciação entre teoria e prática.",
        "en": "Regulatory compliance on NR-6: hierarchy of control measures, Certificate of Approval (CA) traceability, multi-PPE compatibility, employer/employee legal duties, and theoretical boundaries.",
        "es": "Verificación de cumplimiento de la NR-6: jerarquía de controles, Certificado de Aprobación (CA), compatibilidad de EPPs simultáneos, responsabilidades legales y límites del EAD.",
      },
      scope: "course",
      estimatedMinutes: 50,
      questionsCount: 10,
      passingScorePercent: 70,
      maxAttempts: 3,
      isAvailable: true,
      availabilityNotice: {
        "pt-BR": "Avaliação teórica disponibilizada após conclusão das aulas. Exige 70% de aproveitamento para certificação teórica.",
        "en": "Theoretical assessment available upon completion of lessons. 70% passing score.",
        "es": "Evaluación teórica disponible tras completar lecciones. 70% mínimo.",
      },
      questions: [
        {
          id: "q-nr6-1",
          order: 1,
          question: {
            "pt-BR": "Conforme a NR-6 e os princípios fundamentais da Hierarquia de Controle de Riscos (NR-1 / NR-9), em qual momento e condição legal a empresa deve implementar o fornecimento e o uso obrigatório de EPIs para os colaboradores?",
            "en": "Under NR-6 and Risk Control Hierarchy principles (NR-1 / NR-9), under what legal circumstances must employers mandate the provision and use of PPE?",
            "es": "¿Según la NR-6 y la jerarquía de control de riesgos, cuándo debe la empresa implementar el uso obligatorio de EPP?",
          },
          options: [
            {
              id: "q1-a",
              text: {
                "pt-BR": "Sempre como primeira e imediata medida antes de qualquer estudo ou investimento em proteção coletiva ou engenharia de processo.",
                "en": "Always as the immediate first choice prior to investigating engineering or collective protections.",
                "es": "Siempre como primera medida antes de evaluar protecciones colectivas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto. O EPI é a última linha de defesa na hierarquia de controle (eliminação > substituição > engenharia/EPC > administrativo > EPI).",
                "en": "Incorrect. PPE is the lowest tier in the control hierarchy, preceded by elimination, substitution, and engineering.",
                "es": "Incorrecto. El EPP es la última barrera en la jerarquía de control.",
              },
            },
            {
              id: "q1-b",
              text: {
                "pt-BR": "Apenas quando o colaborador concordar em assinar um termo de responsabilidade financeira descontando o valor do equipamento em folha.",
                "en": "Only when the employee signs a payroll deduction agreement for the gear cost.",
                "es": "Solo si el trabajador acepta un descuento en nómina por el costo del equipo.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O fornecimento de EPI é integralmente gratuito por força de lei; cobrar qualquer valor do trabalhador é crime trabalhista.",
                "en": "PPE provision must be 100% free of charge under labor legislation.",
                "es": "El suministro de EPP es estrictamente gratuito por ley.",
              },
            },
            {
              id: "q1-c",
              text: {
                "pt-BR": "Quando as medidas de proteção coletiva (EPC) forem tecnicamente inviáveis, não oferecerem completa proteção contra os riscos, estiverem em fase de implantação/estudo ou para atender a situações de emergência.",
                "en": "When collective protective measures (EPC) are technically unfeasible, provide incomplete hazard mitigation, are undergoing installation/study, or during emergency responses.",
                "es": "Cuando las medidas colectivas no sean viables, no ofrezcan protección completa, estén en fase de implementación o en emergencias.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O texto oficial da NR-6 estipula expressamente que o EPI só é adotado após esgotadas as possibilidades de proteção coletiva ou como proteção complementar transitória.",
                "en": "Correct! NR-6 explicitly mandates PPE only when collective engineering safeguards are insufficient, unfeasible, or under deployment.",
                "es": "¡Correcto! La NR-6 estipula que el EPP se adopta cuando las medidas colectivas son insuficientes o transitorias.",
              },
            },
            {
              id: "q1-d",
              text: {
                "pt-BR": "Exclusivamente para trabalhadores terceirizados, já que colaboradores próprios da indústria possuem imunidade regulamentar.",
                "en": "Exclusively for subcontractor staff, as direct industrial employees possess regulatory exemption.",
                "es": "Exclusivamente para subcontratistas, ya que el personal propio está exento.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "As Normas Regulamentadoras aplicam-se a todos os trabalhadores expostos aos riscos, sem distinção de vínculo.",
                "en": "Safety standards apply universally to all workers exposed to hazards.",
                "es": "Las normas de seguridad aplican a todos los trabajadores sin distinción.",
              },
            },
          ],
        },
        {
          id: "q-nr6-2",
          order: 2,
          question: {
            "pt-BR": "Qual documento legal comprova que um Equipamento de Proteção Individual foi testado em laboratório acreditado, atende às normas técnicas da ABNT/ISO e possui autorização formal para comercialização e uso em território brasileiro?",
            "en": "Which legal document verifies that PPE has been tested by an accredited laboratory, complies with ABNT/ISO technical standards, and is authorized for sale and use in Brazil?",
            "es": "¿Qué documento legal acredita que un EPP fue ensayado en laboratorio acreditado y cuenta con autorización de uso en Brasil?",
          },
          options: [
            {
              id: "q2-a",
              text: {
                "pt-BR": "A nota fiscal eletrônica (NF-e) emitida pelo fabricante com carimbo do cartório de registro de títulos.",
                "en": "Electronic commercial invoice issued by the manufacturer with notary stamp.",
                "es": "La factura electrónica emitida por el fabricante con sello notarial.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A nota fiscal comprova apenas a compra e venda tributária, não a eficácia técnica de retenção de riscos.",
                "en": "Invoices verify financial transactions, not protective technical efficacy.",
                "es": "La factura solo prueba la transacción comercial, no la eficacia técnica.",
              },
            },
            {
              id: "q2-b",
              text: {
                "pt-BR": "O Certificado de Aprovação (CA) válido expedido pelo órgão nacional competente em matéria de segurança e saúde no trabalho (Ministério do Trabalho e Emprego), gravado de forma indelével no próprio equipamento.",
                "en": "A valid Certificate of Approval (CA) issued by the competent national occupational safety authority (MTE), indelibly marked directly on the equipment.",
                "es": "El Certificado de Aprobación (CA) vigente expedido por la autoridad laboral competente (MTE), marcado de forma indeleble en el propio equipo.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Nenhum EPI pode ser comercializado ou utilizado sem o número do CA válido gravado no produto ou na embalagem primária.",
                "en": "Correct! No PPE may be commercialized or fielded without an active, traceable CA number marked on the device.",
                "es": "¡Correcto! Ningún EPP puede usarse sin número de CA vigente grabado en el equipo o empaque.",
              },
            },
            {
              id: "q2-c",
              text: {
                "pt-BR": "Uma declaração de garantia verbal prestada pelo vendedor da loja de suprimentos industriais.",
                "en": "A verbal warranty statement provided by the retail sales clerk.",
                "es": "Una garantía verbal del vendedor del comercio industrial.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Garantias verbais não possuem valor pericial ou conformidade com o marco regulatório do MTE.",
                "en": "Verbal assurances hold zero legal or forensic validity.",
                "es": "Garantías verbales carecen de validez legal.",
              },
            },
            {
              id: "q2-d",
              text: {
                "pt-BR": "O selo de garantia de 1 ano do fabricante contra defeitos de costura em zíperes.",
                "en": "Manufacturer 1-year consumer warranty against zipper stitching defects.",
                "es": "Garantía comercial de 1 año contra defectos de costura.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Garantias comerciais do Código de Defesa do Consumidor não substituem o ensaio balístico/químico exigido para emissão do CA.",
                "en": "Commercial warranties do not validate protective performance required for CA accreditation.",
                "es": "Las garantías comerciales no certifican la protección balística o química del CA.",
              },
            },
          ],
        },
        {
          id: "q-nr6-3",
          order: 3,
          question: {
            "pt-BR": "Em relação à validade de um EPI e à validade do seu Certificado de Aprovação (CA), qual é a diretriz oficial estabelecida pelo Ministério do Trabalho sobre a aquisição e o uso do equipamento no canteiro?",
            "en": "Regarding PPE shelf life versus Certificate of Approval (CA) validity, what is the official regulatory ruling concerning purchasing and active fielding on site?",
            "es": "¿Respecto a la vigencia del CA y la vida útil del EPP, cuál es el criterio oficial sobre la compra y uso en obra?",
          },
          options: [
            {
              id: "q3-a",
              text: {
                "pt-BR": "No momento da COMPRA pelo empregador, o CA deve estar obrigatoriamente VÁLIDO. Uma vez adquirido com CA válido, o equipamento pode continuar sendo UTILIZADO pelo trabalhador até o fim da vida útil estabelecida pelo fabricante, desde que mantidas suas características e integridade física.",
                "en": "At time of PURCHASE by employer, the CA must be VALID. Once acquired under valid CA, the gear may continue in USE until the end of manufacturer-specified service life, provided physical integrity is preserved.",
                "es": "Al momento de la COMPRA, el CA debe estar VIGENTE. Una vez adquirido válidamente, el equipo puede USARSE hasta el fin de la vida útil del fabricante si conserva su integridad.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O vencimento do CA impede novas compras e comercialização pelo fornecedor, mas não invalida os EPIs já adquiridos dentro da validade que estejam em estoque e em perfeitas condições de uso.",
                "en": "Correct! CA expiration halts new commercial sales, but in-service equipment purchased prior to expiration remains compliant throughout its physical lifespan.",
                "es": "¡Correcto! El vencimiento del CA prohíbe compras nuevas pero no invalida equipos ya adquiridos legalmente que estén en óptimas condiciones.",
              },
            },
            {
              id: "q3-b",
              text: {
                "pt-BR": "No dia exato em que o CA vencer no sistema do MTE, todos os capacetes e óculos em uso pelos trabalhadores devem ser recolhidos e queimados imediatamente.",
                "en": "On the exact day the CA expires in the registry, all deployed hardhats and glasses must be confiscated and incinerated.",
                "es": "El día exacto que vence el CA deben destruirse de inmediato todos los cascos y gafas en uso.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Interpretação equivocada. A validade do CA fiscaliza a comercialização; o uso em campo vincula-se ao estado de conservação e validade física do produto.",
                "en": "Erroneous interpretation. CA regulates market commercialization; field use is governed by physical serviceability.",
                "es": "Interpretación errónea; el uso depende de la conservación física y vida útil del fabricante.",
              },
            },
            {
              id: "q3-c",
              text: {
                "pt-BR": "EPIs não possuem validade de fabricação e podem ser utilizados por até 30 anos sem necessidade de inspeção.",
                "en": "PPE has no manufacturing expiration and may be used for up to 30 years without inspection.",
                "es": "Los EPP no caducan y pueden usarse 30 años sin revisión.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Polímeros, borrachas e cintas têxteis sofrem degradação por raios UV, ozônio e envelhecimento natural, possuindo prazos de validade estritos.",
                "en": "Polymers and textiles degrade under UV and oxidation, carrying strict retirement dates.",
                "es": "Los polímeros y textiles caducan por degradación química y radiación UV.",
              },
            },
            {
              id: "q3-d",
              text: {
                "pt-BR": "A validade do CA é perpétua e nenhum fabricante precisa revalidar ensaios laboratoriais.",
                "en": "CAs are perpetual and manufacturers never need laboratory re-certification.",
                "es": "Los CA son perpetuos y no requieren renovación de ensayos.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O CA tem prazo máximo de validade (geralmente 5 anos) e exige ensaios periódicos de conformidade técnica para renovação.",
                "en": "CAs carry strict expiration limits (typically 5 years) requiring periodic re-testing.",
                "es": "El CA vence periódicamente (máx 5 años) requiriendo ensayos de renovación.",
              },
            },
          ],
        },
        {
          id: "q-nr6-4",
          order: 4,
          question: {
            "pt-BR": "Quando um trabalhador industrial precisa utilizar múltiplos EPIs simultaneamente (por exemplo: capacete com jugular, óculos de segurança com vedação, protetor auditivo tipo concha acoplável e máscara respiratória PFF2), qual é a exigência técnica mandatória da NR-6 quanto à compatibilidade?",
            "en": "When an industrial operator must wear multiple PPE simultaneously (e.g. hard hat with chinstrap, sealed goggles, slotted earmuffs, and a PFF2 respirator), what is NR-6's mandatory technical rule regarding compatibility?",
            "es": "¿Cuál es la regla de la NR-6 sobre compatibilidad cuando se deben usar múltiples EPPs simultáneos (casco, gafas selladas, orejeras y mascarilla)?",
          },
          options: [
            {
              id: "q4-a",
              text: {
                "pt-BR": "O trabalhador deve escolher apenas um dos itens para usar e descartar os outros para não gerar cansaço muscular.",
                "en": "The worker must pick one single item and discard the rest to minimize fatigue.",
                "es": "El trabajador debe elegir uno solo y descartar el resto para no cansarse.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Absurdo. A eliminação arbitrária de EPIs deixa o colaborador desprotegido contra riscos graves existentes no ambiente.",
                "en": "Absurd. Discarding assigned PPE leaves workers exposed to critical site hazards.",
                "es": "Descartar EPPs deja al trabajador desprotegido ante riesgos graves.",
              },
            },
            {
              id: "q4-b",
              text: {
                "pt-BR": "Cortar partes do capacete com estilete para que a haste do protetor auricular não aperte as orelhas.",
                "en": "Cut pieces off the hardhat with a knife so earmuff headbands fit without pressure.",
                "es": "Recortar partes del casco con cutter para que no apriete los protectores auditivos.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Modificar ou cortar EPIs altera sua rigidez estrutural, anula o Certificado de Aprovação (CA) e torna o equipamento ineficaz.",
                "en": "Altering or carving PPE voids structural ratings, invalidates the CA, and renders gear unsafe.",
                "es": "Modificar o recortar EPP anula su CA y destruye su capacidad protectora.",
              },
            },
            {
              id: "q4-c",
              text: {
                "pt-BR": "A seleção dos EPIs deve considerar a sua compatibilidade mútua, garantindo que o uso de um equipamento não prejudique a eficácia protetiva nem o ajuste/vedação do outro (ex: a haste dos óculos não pode quebrar a vedação da almofada do protetor auditivo, nem a máscara impedir o apoio do óculo no septo nasal).",
                "en": "Selection must evaluate mutual compatibility, ensuring the fit or function of one device does not compromise the protective seal or performance of another (e.g. eyewear temples must not break earmuff cushion acoustic seals, nor respirators disrupt goggle seating).",
                "es": "La selección debe verificar compatibilidad mutua, asegurando que un equipo no comprometa la eficacia o sellado del otro (ej. las patillas de gafas no deben romper el sellado del protector auditivo ni la mascarilla desajustar las gafas).",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A NR-6 exige expressamente a avaliação de compatibilidade de múltiplos EPIs, assegurando atenuação acústica e vedação respiratória adequadas em conjunto.",
                "en": "Correct! NR-6 explicitly mandates multi-device compatibility so protective acoustic seals and respiratory fits are preserved.",
                "es": "¡Correcto! La NR-6 exige evaluar la compatibilidad mutua para no arruinar la atenuación acústica o sellado respiratorio.",
              },
            },
            {
              id: "q4-d",
              text: {
                "pt-BR": "A compatibilidade só é obrigatória em laboratórios químicos com atmosfera enriquecida de oxigênio.",
                "en": "Compatibility checks are only mandatory in oxygen-enriched chemical labs.",
                "es": "La compatibilidad solo es obligatoria en laboratorios químicos especiales.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A regra de compatibilidade é universal para todas as frentes operacionais industriais e de construção civil.",
                "en": "Compatibility rules apply universally across all industrial and construction jobs.",
                "es": "Aplica universalmente a cualquier industria.",
              },
            },
          ],
        },
        {
          id: "q-nr6-5",
          order: 5,
          question: {
            "pt-BR": "Quais são as responsabilidades legais e operacionais expressas do EMPREGADO (trabalhador) quanto ao uso e conservação dos EPIs fornecidos pela empresa, conforme o item 6.5.2 da NR-6?",
            "en": "What are the employee's explicit legal and operational duties regarding use and care of employer-provided PPE under NR-6 clause 6.5.2?",
            "es": "¿Cuáles son las responsabilidades legales del TRABAJADOR respecto al uso y conservación del EPP según NR-6?",
          },
          options: [
            {
              id: "q5-a",
              text: {
                "pt-BR": "Usar o EPI apenas para as finalidades a que se destina; responsabilizar-se pela limpeza, guarda e conservação; comunicar imediatamente ao empregador qualquer alteração que o torne impróprio para uso; e cumprir as orientações sobre o uso adequado recebidas em treinamento.",
                "en": "Use PPE strictly for intended purposes; be responsible for cleaning, storage, and care; immediately notify employer of any damage rendering it unfit; and comply with trained instructions on proper use.",
                "es": "Usar el EPP solo para los fines previstos; responsabilizarse de su limpieza y custodia; comunicar de inmediato cualquier daño que lo inutilice; y acatar las instrucciones recibidas en capacitación.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A recusa injustificada do empregado em utilizar os EPIs obrigatórios fornecidos constitui ato faltoso passível de advertência, suspensão e demissão por justa causa (Art. 158 da CLT).",
                "en": "Correct! Unjustified refusal to wear mandated PPE constitutes willful misconduct grounds for disciplinary termination under labor law.",
                "es": "¡Correcto! Negarse a usar el EPP obligatorio constituye falta grave pasible de sanción y despido justificado.",
              },
            },
            {
              id: "q5-b",
              text: {
                "pt-BR": "Emprestar o cinto de segurança e a máscara para terceiros que visitam a fábrica no fim de semana.",
                "en": "Lend harness and respirator to outside visitors on weekends.",
                "es": "Prestar el arnés y respirador a visitas ocasionales.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "EPI é de uso pessoal e intransferível, salvo casos específicos higienizados em conformidade com o PGR.",
                "en": "PPE is strictly personal and non-transferable without certified decontamination.",
                "es": "El EPP es personal e intransferible.",
              },
            },
            {
              id: "q5-c",
              text: {
                "pt-BR": "Descartar o EPI no lixo comum sem avisar a liderança caso não goste da cor do material entregue.",
                "en": "Throw PPE into general trash without notice if disliking the assigned color.",
                "es": "Tirar el EPP a la basura sin avisar si no le agrada el color.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O trabalhador deve zelar pelo patrimônio e comunicar formalmente qualquer irregularidade para substituição com rastreabilidade.",
                "en": "Workers must safeguard company property and formally report damage for tracked replacement.",
                "es": "El trabajador debe cuidar el equipo y solicitar sustitución formal en caso de daño.",
              },
            },
            {
              id: "q5-d",
              text: {
                "pt-BR": "Vender o EPI em sites de comércio eletrônico ao término do contrato de trabalho.",
                "en": "Sell issued PPE on online marketplaces upon contract conclusion.",
                "es": "Vender el EPP en internet al finalizar el contrato.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "EPIs fornecidos pela empresa são propriedade patrimonial cedida para proteção funcional; vender ou reter indevidamente é apropriação indébita.",
                "en": "Employer PPE remains corporate safety property; unauthorized sale constitutes unlawful appropriation.",
                "es": "Los EPP son propiedad de la empresa cedida para el trabajo.",
              },
            },
          ],
        },
        {
          id: "q-nr6-6",
          order: 6,
          question: {
            "pt-BR": "Na seleção de Luvas de Proteção para trabalhos com produtos químicos perigosos (solventes, desengraxantes e ácidos em decapagem), por que a simples indicação genérica 'luva impermeável' é insuficiente e como deve ser verificado o pictograma na ficha técnica da luva conforme a norma EN 374 / ABNT?",
            "en": "Selecting chemical protection gloves for hazardous solvents and acids: why is the label 'waterproof glove' insufficient, and how must the EN 374 chemical pictograms be verified?",
            "es": "¿Al seleccionar guantes para productos químicos, por qué la etiqueta 'guante impermeable' es insuficiente y cómo se verifica la norma EN 374?",
          },
          options: [
            {
              id: "q6-a",
              text: {
                "pt-BR": "Porque qualquer luva de borracha látex amarela protege contra 100% dos hidrocarbonetos aromáticos e cetonas.",
                "en": "Because standard yellow latex gloves resist 100% of aromatic hydrocarbons and ketones.",
                "es": "Porque el látex común resiste todos los hidrocarburos aromáticos.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Látex natural sofre permeação e dissolução imediata em contato com solventes como tolueno, xileno e MEK.",
                "en": "Natural latex melts and degrades within seconds of contact with toluene or ketones.",
                "es": "El látex se disuelve de inmediato con solventes aromáticos y cetonas.",
              },
            },
            {
              id: "q6-b",
              text: {
                "pt-BR": "A impermeabilidade à água não garante resistência à permeação química molecular. É mandatório consultar a FISPQ/FDS do produto químico, cruzar com a tabela de tempo de ruptura (Breakthrough Time) da resina da luva (Nitrílica, Neoprene, Butílica ou PVA) e verificar as letras de teste químico indicadas sob o pictograma da EN 374.",
                "en": "Water impermeability does not imply chemical permeation resistance. Safety officers must cross-reference SDS chemical families against glove polymer breakthrough times (Nitrile, Neoprene, Butyl, PVA) and verify code letters under EN 374 chemical pictograms.",
                "es": "La impermeabilidad al agua no garantiza resistencia química. Debe cruzarse la Ficha de Seguridad (FDS/FISPQ) con el tiempo de permeación (Breakthrough Time) del polímero (Nitrilo, Neopreno, Butilo) y las letras clave de la EN 374.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Cada polímero possui compatibilidade estrita: solventes aromáticos requerem PVA/viton; ácidos fortes exigem neoprene/butil; óleos minerais respondem bem ao nitrilo.",
                "en": "Correct! Different chemical families permeate different polymers; matching SDS hazard classes to EN 374 breakthrough indices is life-saving.",
                "es": "¡Correcto! Cada químico requiere un polímero compatible según los índices de penetración y degradación de la EN 374.",
              },
            },
            {
              id: "q6-c",
              text: {
                "pt-BR": "Luvas devem ser testadas colocando a mão do trabalhador dentro do solvente por 1 minuto para ver se queima a pele.",
                "en": "Gloves should be tested by dipping worker hands into solvent for 1 minute to check for skin burn.",
                "es": "Los guantes se prueban sumergiendo la mano en solvente 1 minuto para ver si quema.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Prática criminosa que expõe o trabalhador a queimaduras químicas e intoxicação transdérmica.",
                "en": "Reckless, criminal practice causing chemical burns and transdermal intoxication.",
                "es": "Práctica peligrosa e inaceptable que causa quemaduras químicas graves.",
              },
            },
            {
              id: "q6-d",
              text: {
                "pt-BR": "O número do tamanho da luva (P, M, G) define a sua resistência química e térmica universal.",
                "en": "Glove sizing (S, M, L) governs universal chemical and thermal resistance.",
                "es": "La talla del guante determina su resistencia química universal.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O tamanho refere-se apenas à ergonomia e ajuste antropométrico na mão do operador.",
                "en": "Glove sizes define hand fit ergonomics, not chemical barrier properties.",
                "es": "La talla es una medida ergonómica que nada tiene que ver con la resistencia química.",
              },
            },
          ],
        },
        {
          id: "q-nr6-7",
          order: 7,
          question: {
            "pt-BR": "No Programa de Proteção Respiratória (PPR / Fundacentro), qual é a finalidade indispensável do Ensaio de Vedação (Fit Test qualitativo ou quantitativo) realizado antes do fornecimento de respiradores semifaciais ou faciais inteiras com filtros químicos/mecânicos?",
            "en": "Under Respiratory Protection Programs (RPP), what is the mandatory purpose of Fit Testing (qualitative or quantitative) prior to fielding elastomeric half or full-face respirators?",
            "es": "¿En el Programa de Protección Respiratoria, cuál es la finalidad obligatoria del Ensayo de Sellado (Fit Test) antes de usar respiradores con filtros?",
          },
          options: [
            {
              id: "q7-a",
              text: {
                "pt-BR": "Verificar se a cor do respirador combina com o uniforme corporativo da empresa.",
                "en": "Verify if the respirator color matches the corporate uniform scheme.",
                "es": "Comprobar si el color del respirador combina con el uniforme.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Fit test é um ensaio biométrico rigoroso de segurança à vida, sem qualquer relação com estética.",
                "en": "Fit testing is a critical biometric safety protocol with zero aesthetic purpose.",
                "es": "El Fit test es una prueba biométrica de sellado vital.",
              },
            },
            {
              id: "q7-b",
              text: {
                "pt-BR": "Comprovar que o modelo, tamanho e contorno da máscara ajustam-se perfeitamente à morfologia facial específica do colaborador sem vazamentos de ar contaminado pelas bordas (vedação facial), sendo incompatível a presença de barba ou pelos faciais na zona de contato da vedação.",
                "en": "Verify that the respirator model, size, and sealing edge contour match the worker's unique facial anatomy with zero inward leakage, noting that beards or stubble along sealing surfaces cause test failure.",
                "es": "Comprobar que el tamaño y borde de la máscara sellan perfectamente en la anatomía facial del operario sin fugas hacia el interior, siendo incompatible la barba en la zona de sellado.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Pelos de barba impedem a vedação estanque contra a pele, permitindo que gases tóxicos e particulados entrem diretamente no trato respiratório sem passar pelos filtros.",
                "en": "Correct! Facial hair breaks the facepiece-to-skin seal, permitting toxic vapors and particulates to bypass filters entirely.",
                "es": "¡Correcto! La barba rompe el sellado hermético permitiendo el paso de contaminantes sin filtrar.",
              },
            },
            {
              id: "q7-c",
              text: {
                "pt-BR": "Substituir a necessidade de troca dos filtros de carvão ativado, tornando o respirador eterno.",
                "en": "Eliminate the need to replace activated carbon cartridges, granting perpetual filter life.",
                "es": "Eliminar la necesidad de cambiar los filtros de carbón activado.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Fit test verifica apenas a vedação física da máscara no rosto; os cartuchos químicos continuam saturando conforme o tempo de exposição.",
                "en": "Fit testing evaluates face seal; chemical cartridges still saturate based on contaminant exposure.",
                "es": "El Fit test evalúa el ajuste al rostro; los filtros se saturan igualmente con el uso.",
              },
            },
            {
              id: "q7-d",
              text: {
                "pt-BR": "Ensinar o trabalhador a respirar em ritmo mais lento para economizar oxigênio em ambientes confinados.",
                "en": "Train workers to breathe at slower rates to conserve air in confined spaces.",
                "es": "Enseñar al trabajador a respirar más lento para ahorrar oxígeno.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Em atmosferas com deficiência de oxigênio (< 18%), respiradores de filtro são proibidos, exigindo-se obrigatoriamente suprimento de ar autônomo ou de linha.",
                "en": "In oxygen-deficient atmospheres (<18% O2), air-purifying respirators are illegal; supplied air is mandatory.",
                "es": "En atmósferas deficientes de O2 (< 18%) los filtros están prohibidos; se exige aire autónomo.",
              },
            },
          ],
        },
        {
          id: "q-nr6-8",
          order: 8,
          question: {
            "pt-BR": "Na higienização, guarda e conservação de Protetores Auditivos (tipo plugue de inserção em silicone e tipo concha/abafador), quais são as práticas obrigatórias para evitar infecções no canal auditivo e perda de atenuação acústica NRRsf?",
            "en": "In the maintenance, sanitation, and storage of Hearing Protection (silicone earplugs and earmuffs), what are mandatory practices to prevent ear canal infections and acoustic attenuation degradation?",
            "es": "¿Cuáles son las prácticas obligatorias de higiene y conservación de protectores auditivos (tapones y orejeras) para evitar infecciones y pérdida de atenuación?",
          },
          options: [
            {
              id: "q8-a",
              text: {
                "pt-BR": "Lavar os plugues de silicone diariamente com água morna e sabão neutro, guardá-los em estojo plástico limpo e seco, e substituir as almofadas dos protetores tipo concha assim que apresentarem endurecimento, rachaduras ou perda de resiliência elástica.",
                "en": "Wash silicone plugs daily with mild soap and water, store in clean dry cases, and replace earmuff cushions as soon as they stiffen, crack, or lose seal elasticity.",
                "es": "Lavar los tapones de silicona a diario con agua y jabón neutro, guardarlos en estuche limpio y reemplazar las almohadillas de orejeras cuando se endurezcan o agrieten.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O acúmulo de poeira e cerúmen em plugues causa otites bacterianas severas. Almofadas endurecidas de abafadores perdem vedação e não atenuam os decibéis especificados no CA.",
                "en": "Correct! Dirty earplugs drive severe bacterial ear infections. Hardened earmuff cushions lose acoustic seals, failing NRR ratings.",
                "es": "¡Correcto! La suciedad en tapones causa infecciones auditivas y almohadillas resecas pierden su capacidad de atenuación acústica.",
              },
            },
            {
              id: "q8-b",
              text: {
                "pt-BR": "Limpar os plugues esfregando thinner ou solvente de pintura para matar todas as bactérias.",
                "en": "Clean earplugs by rubbing paint thinner or solvents to sterilize bacteria.",
                "es": "Limpiar los tapones con disolvente o thinner para matar bacterias.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Solventes degradam o silicone e provocam dermatites graves e queimaduras químicas no canal auditivo.",
                "en": "Solvents dissolve silicone and cause catastrophic chemical burns inside auditory canals.",
                "es": "Los solventes dañan el silicón y causan quemaduras químicas en el oído.",
              },
            },
            {
              id: "q8-c",
              text: {
                "pt-BR": "Compartilhar o mesmo par de plugues entre os operadores dos três turnos da fábrica.",
                "en": "Share a single pair of plugs among operators across all three plant shifts.",
                "es": "Compartir los mismos tapones entre los tres turnos de la planta.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Plugues de ouvido são itens de higiene estritamente pessoal; o compartilhamento dissemina infecções bacterianas cruzadas.",
                "en": "Earplugs are strictly individual; sharing spreads cross-contamination and infections.",
                "es": "Los tapones son estrictamente de uso personal para evitar contagios de infecciones.",
              },
            },
            {
              id: "q8-d",
              text: {
                "pt-BR": "Colocar algodão comum de farmácia dentro do ouvido antes do plugue para dobrar a atenuação de ruído.",
                "en": "Stuff drugstore cotton into ear canals under earplugs to double noise attenuation.",
                "es": "Poner algodón común dentro del oído antes del tapón para aumentar la atenuación.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Algodão não atenua ruído industrial e impede o assentamento e vedação correta do plugue calibrado.",
                "en": "Cotton provides near zero acoustic attenuation and prevents proper plug depth seating.",
                "es": "El algodón no tiene atenuación acústica reglamentaria y desajusta el tapón.",
              },
            },
          ],
        },
        {
          id: "q-nr6-9",
          order: 9,
          question: {
            "pt-BR": "Em serviços elétricos em painéis energizados e subestações industriais (conformidade combinada NR-10 e NR-6), quais características especiais de proteção devem possuir as vestimentas de trabalho dos eletricistas?",
            "en": "In electrical panel servicing and substations (combined NR-10 and NR-6 compliance), what mandatory protective characteristics must electricians' workwear possess?",
            "es": "¿En trabajos eléctricos bajo tensión (NR-10 y NR-6), qué características especiales deben tener las prendas de trabajo de los electricistas?",
          },
          options: [
            {
              id: "q9-a",
              text: {
                "pt-BR": "Camisetas de poliéster sintético fino que sequem rápido e facilitem a evaporação do suor.",
                "en": "Thin synthetic polyester t-shirts that dry rapidly and wick sweat.",
                "es": "Camisetas de poliéster sintético fino de secado rápido.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Poliéster e tecidos sintéticos comuns derretem em contato com arco elétrico e grudam na pele, agravando queimaduras de 3º grau.",
                "en": "Polyester melts onto skin during arc flash blasts, causing catastrophic third-degree burns.",
                "es": "El poliéster se derrite ante un arco eléctrico adhiriéndose a la piel y agravando quemaduras.",
              },
            },
            {
              id: "q9-b",
              text: {
                "pt-BR": "Vestimentas de proteção contra arco elétrico e fogo repentino confeccionadas em tecido retardante de chamas 100% algodão tratado ou aramidas inerentes (com classificação de ATPV especificada conforme a categoria de risco da análise de energia incidente), sem aviamentos metálicos expostos e que não continuem queimando após cessada a chama.",
                "en": "Arc-rated and flash-fire protective clothing made from flame-resistant treated cotton or inherent aramids (certified ATPV matching incident energy hazard categories), free of exposed metal hardware, and self-extinguishing.",
                "es": "Ropa ignífuga con protección contra arco eléctrico (ATPV calibrado a la categoría de riesgo del estudio de energía incidente), sin herrajes metálicos expuestos y autoextinguible.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A NR-10 proíbe vestimentas com tecidos inflamáveis ou fechos metálicos condutivos em intervenções com risco de arco elétrico.",
                "en": "Correct! NR-10 bans meltable fabrics and exposed conductive metals in arc flash hazard zones.",
                "es": "¡Correcto! La NR-10 prohíbe tejidos inflamables o metales conductores en zonas con riesgo de arco eléctrico.",
              },
            },
            {
              id: "q9-c",
              text: {
                "pt-BR": "Jalecos impermeáveis de borracha grossa com fechamento em zíper de alumínio maciço.",
                "en": "Heavy rubber raincoats equipped with solid aluminum zippers.",
                "es": "Chaquetones de goma impermeable con cremalleras de aluminio.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Zíperes de alumínio são condutores elétricos e borracha comum não possui classificação térmica ATPV para arcos elétricos.",
                "en": "Aluminum zippers are electrical conductors and standard rubber is not arc-rated.",
                "es": "El aluminio es conductor eléctrico y la goma común no está clasificada contra arco eléctrico.",
              },
            },
            {
              id: "q9-d",
              text: {
                "pt-BR": "Apenas luvas de vaqueta de couro comum, sendo dispensada qualquer vestimenta especial no tronco.",
                "en": "Standard cowhide work gloves only, waiving specialized torso garments.",
                "es": "Solo guantes de cuero comunes, prescindiendo de ropa especial en el torso.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Arco elétrico irradia milhares de calorias por centímetro quadrado no tórax e rosto, exigindo vestimenta balística e protetor facial classe arco.",
                "en": "Arc flash blasts release immense radiant thermal energy over torso and face, requiring full body arc wear.",
                "es": "El arco eléctrico irradia miles de calorías en pecho y rostro, exigiendo protección corporal integral.",
              },
            },
          ],
        },
        {
          id: "q-nr6-10",
          order: 10,
          question: {
            "pt-BR": "A conclusão deste curso EAD de NR-6 confere habilitação formal imediata para o colaborador operar equipamentos regulamentados de alto risco (ex: solda a quente em altura NR-35, caldeiras NR-13 ou espaço confinado NR-33)?",
            "en": "Does passing this online NR-6 course grant immediate formal qualification to execute regulated high-risk activities (e.g. hot work at height NR-35, boilers NR-13, or confined spaces NR-33)?",
            "es": "¿La aprobación de este curso online de NR-6 otorga habilitación formal inmediata para ejecutar tareas reguladas de alto riesgo (NR-35, NR-13, NR-33)?",
          },
          options: [
            {
              id: "q10-a",
              text: {
                "pt-BR": "SIM. A aprovação teórica online substitui todas as exigências práticas de campo e autoriza a liderança imediata de frentes de alto risco.",
                "en": "YES. Passing the online exam waives all field training requirements and authorizes immediate high-risk operations.",
                "es": "SÍ. La aprobación online sustituye la práctica y habilita de inmediato.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Falso e expressamente proibido pela legislação de segurança e diretrizes permanentes da RSS3.",
                "en": "False and illegal under occupational safety regulations and RSS3 compliance bylaws.",
                "es": "Falso y contrario a la ley y directrices de seguridad de RSS3.",
              },
            },
            {
              id: "q10-b",
              text: {
                "pt-BR": "NÃO. Este certificado comprova a conclusão da etapa teórica e domínio dos conceitos regulatórios de EPIs. Habilitações operacionais formais para atividades de risco (NR-35, NR-33, NR-10, NR-12, etc.) exigem mandatoriamente o treinamento prático presencial validado e assinado por instrutor credenciado e Atestado de Saúde Ocupacional (ASO) vigente com indicação de aptidão específica.",
                "en": "NO. This certificate attests to theoretical regulatory mastery of PPE concepts. Formal operational qualifications for high-risk trades strictly require verified in-person practical training signed by a certified instructor and a valid Occupational Health Certificate (ASO) confirming specific fitness.",
                "es": "NO. Este certificado avala la etapa teórica. La habilitación formal práctica para trabajos de riesgo exige entrenamiento presencial con instructor acreditado y ASO vigente con aptitud médica específica.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Conforme a Seção 3 do AGENTS.md, a diferenciação entre certificado de conteúdo teórico e registro de habilitação prática presencial com ASO é um princípio ético e regulatório permanente.",
                "en": "Correct! As mandated by Section 3 of AGENTS.md, differentiating theoretical mastery from hands-on practical certification with medical clearance is an inviolable rule.",
                "es": "¡Correcto! Según el AGENTS.md, la teoría nunca reemplaza la evaluación práctica presencial ni la aptitud médica ocupacional.",
              },
            },
            {
              id: "q10-c",
              text: {
                "pt-BR": "Sim, desde que o colaborador compre seus próprios EPIs em uma loja credenciada da cidade.",
                "en": "Yes, provided the employee buys personal PPE from an accredited retail store.",
                "es": "Sí, si el trabajador compra su propio EPP en un comercio autorizado.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A compra de equipamentos não confere habilitação profissional nem substitui exames médicos e treinamentos práticos.",
                "en": "Purchasing gear does not grant operational qualification nor replace certified medical clearance.",
                "es": "Comprar equipos no habilita profesionalmente ni reemplaza la evaluación médica.",
              },
            },
            {
              id: "q10-d",
              text: {
                "pt-BR": "Apenas se o colaborador possuir mais de 10 anos de experiência sem nenhum registro de acidente na carteira de trabalho.",
                "en": "Only if the worker has over 10 years experience with zero accident records in their logbook.",
                "es": "Solo si cuenta con más de 10 años de experiencia comprobada sin accidentes.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Experiência prévia não dispensa treinamentos periódicos de reciclagem nem a realização de exames médicos ocupacionais.",
                "en": "Past experience does not waive regulatory periodic refresher training or occupational medical exams.",
                "es": "La experiencia previa no exime de capacitación práctica periódica ni de exámenes médicos vigentes.",
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
    coverImage: "/images/courses/nr35.jpg",
    categories: ["nr-regulamentar", "conhecimento-operacional"],
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
        "pt-BR": "Exame regulamentar avançado da NR-35: cálculo de ZLQ com absorvedores de energia, mecânica dos Fatores de Queda (0, 1 e 2), ancoragens estruturais certificadas (15 kN a 22 kN), efeito pêndulo, inspeção de cintos paraquedistas, síndrome da suspensão inerte e governança de permissão de trabalho (PT/APR).",
        "en": "Advanced NR-35 regulatory exam: fall clearance (ZLQ) calculation with energy absorbers, Fall Factor mechanics (0, 1, 2), certified structural anchorages (15 kN - 22 kN), swing fall pendulum hazards, harness inspection, suspension trauma, and PT/APR permitting governance.",
        "es": "Examen avanzado de NR-35: cálculo de ZLQ con absorbedores, factores de caída (0, 1, 2), anclajes certificados (15 a 22 kN), efecto péndulo, inspección de arneses, trauma por suspensión y permisos PT/APR.",
      },
      scope: "course",
      estimatedMinutes: 50,
      questionsCount: 10,
      passingScorePercent: 70,
      maxAttempts: 3,
      isAvailable: true,
      availabilityNotice: {
        "pt-BR": "Avaliação liberada após conclusão das aulas teóricas de NR-35. Exige 70% de aproveitamento para certificação teórica.",
        "en": "Exam available upon completion of theoretical lessons. 70% passing score.",
        "es": "Evaluación habilitada tras completar las lecciones de NR-35. 70% mínimo.",
      },
      questions: [
        {
          id: "q-nr35-1",
          order: 1,
          question: {
            "pt-BR": "Conforme a NR-35 (item 35.1.2), a partir de qual altura, medida em relação ao nível inferior onde haja risco de queda, a atividade é classificada compulsoriamente como 'Trabalho em Altura' exigindo Análise de Risco (AR), Permissão de Trabalho (PT) e capacitação formal?",
            "en": "Under NR-35 (clause 35.1.2), above what vertical height differential with fall hazard is an operation formally classified as 'Work at Height' requiring Risk Assessment (AR), Work Permit (PT), and certified training?",
            "es": "¿A partir de qué desnivel con riesgo de caída una actividad se clasifica como 'Trabajo en Altura' según la NR-35 exigiendo Análisis de Riesgo (AR) y Permiso de Trabajo (PT)?",
          },
          options: [
            {
              id: "q1-a",
              text: {
                "pt-BR": "Acima de 1,50 m para obras civis e 3,00 m para indústrias petroquímicas.",
                "en": "Above 1.50 m for civil construction and 3.00 m for petrochemical plants.",
                "es": "Más de 1,50 m en construcción y 3,00 m en plantas petroquímicas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A norma não faz distinção por segmento: o critério regulamentar é unificado e nacional.",
                "en": "The standard makes no sector split: the regulatory threshold is universal and national.",
                "es": "La norma no distingue sectores: el umbral es universal.",
              },
            },
            {
              id: "q1-b",
              text: {
                "pt-BR": "Toda atividade executada acima de 2,00 m (dois metros) do nível inferior, onde haja risco de queda.",
                "en": "Any activity performed above 2.00 m (two meters) from the lower level where fall hazard exists.",
                "es": "Toda actividad ejecutada por encima de 2,00 m del nivel inferior donde exista riesgo de caída.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O patamar universal da NR-35 é de 2,00 metros em relação ao solo ou nível imediatamente inferior.",
                "en": "Correct! NR-35 sets 2.00 meters as the legal threshold across Brazilian industrial operations.",
                "es": "¡Correcto! El umbral reglamentario de la NR-35 es de 2,00 metros.",
              },
            },
            {
              id: "q1-c",
              text: {
                "pt-BR": "Acima de 4,00 m, desde que o colaborador esteja sobre escada de abrir de alumínio.",
                "en": "Above 4.00 m, provided the worker stands on an aluminum stepladder.",
                "es": "Más de 4,00 m sobre escaleras de aluminio.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Escadas acima de 2 metros já configuram trabalho em altura e exigem medidas de proteção contra quedas.",
                "en": "Ladders above 2 m constitute work at height and require fall protection safeguards.",
                "es": "Trabajos sobre escaleras a más de 2 m ya son trabajo en altura.",
              },
            },
            {
              id: "q1-d",
              text: {
                "pt-BR": "Apenas se o trabalhador estiver sobre andaimes suspensos sem piso de chapa de aço.",
                "en": "Only when standing on suspended scaffolds lacking steel plate decks.",
                "es": "Solo en andamios colgantes sin chapa metálica.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Aplica-se a qualquer estrutura: telhados, escadas, andaimes, pipe-racks, tanques e plataformas elevatórias.",
                "en": "Applies across all structures: roofs, ladders, racks, tanks, and aerial work platforms.",
                "es": "Aplica a cualquier superficie con riesgo de caída sobre 2 metros.",
              },
            },
          ],
        },
        {
          id: "q-nr35-2",
          order: 2,
          question: {
            "pt-BR": "No dimensionamento de Sistemas de Proteção Individual contra Quedas (SPIQ), como é definido matematicamente o 'Fator de Queda' (FQ) e por que o Fator de Queda 2 é o cenário de maior severidade?",
            "en": "In Personal Fall Arrest Systems (PFAS), how is 'Fall Factor' (FF) defined, and why is Fall Factor 2 the most severe scenario?",
            "es": "¿Cómo se define el 'Factor de Caída' (FC) y por qué el Factor de Caída 2 representa la condición de mayor gravedad?",
          },
          options: [
            {
              id: "q2-a",
              text: {
                "pt-BR": "FQ = Distância de Queda Livre / Comprimento do Talabarte. No FQ 2, o ponto de ancoragem está posicionado no nível dos pés do colaborador; em caso de queda, ele cai duas vezes o comprimento total do talabarte em queda livre pura antes do sistema ser acionado, gerando o maior choque de desaceleração mecânica sobre o corpo e a estrutura.",
                "en": "FF = Free Fall Distance / Lanyard Length. In FF 2, the anchor is at foot level; falling causes a free-fall distance equal to twice the lanyard length before arrest begins, generating the highest deceleration impact force on body and structure.",
                "es": "FC = Distancia de Caída Libre / Longitud del Cabo. En FC 2, el anclaje está a los pies; el operario cae el doble del largo del cabo en caída libre antes de tensarse, generando el mayor impacto sobre el cuerpo y la estructura.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Fator 0 = ancoragem acima da cabeça; Fator 1 = ancoragem na altura do peito/dorsal; Fator 2 = ancoragem nos pés (queda livre de 2× o talabarte = choque dinâmico extremo).",
                "en": "Correct! FF 0 is overhead; FF 1 is sternal height; FF 2 is foot level (2x lanyard free fall = maximum deceleration shock).",
                "es": "¡Correcto! FC 0 es sobre la cabeza; FC 1 a la cintura; FC 2 a los pies (caída libre del doble del cabo con fuerza de choque máxima).",
              },
            },
            {
              id: "q2-b",
              text: {
                "pt-BR": "FQ é a velocidade do vento multiplicada pelo peso corporal do operador dividido por 2.",
                "en": "FF is wind velocity multiplied by body weight divided by 2.",
                "es": "FC es la velocidad del viento por el peso dividido 2.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Fator de queda é uma grandeza adimensional de física mecânica relacionada exclusivamente à geometria da queda livre e comprimento do subsistema de conexão.",
                "en": "Fall factor is a dimensionless mechanical ratio of free fall height to active lanyard length.",
                "es": "El factor de caída es la relación entre altura de caída libre y longitud del cabo de anclaje.",
              },
            },
            {
              id: "q2-c",
              text: {
                "pt-BR": "FQ 2 significa que dois trabalhadores estão conectados no mesmo talabarte ao mesmo tempo.",
                "en": "FF 2 means two workers are tied off to the same lanyard simultaneously.",
                "es": "FC 2 significa que dos operarios están conectados al mismo cabo.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Conectar duas pessoas no mesmo talabarte é expressamente proibido; o número 2 refere-se à razão geométrica de queda livre.",
                "en": "Tying two people to one lanyard is prohibited; 2 refers to the ratio of free fall to lanyard length.",
                "es": "Conectar dos personas a un cabo está prohibido; el 2 indica la proporción geométrica de caída.",
              },
            },
            {
              id: "q2-d",
              text: {
                "pt-BR": "FQ 0 é o mais perigoso porque a corda fica esticada acima da cabeça prendendo o pescoço do trabalhador.",
                "en": "FF 0 is most dangerous because the line stays taut overhead choking the neck.",
                "es": "FC 0 es el más peligroso porque la cuerda queda estirada.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "FQ 0 é a condição ideal mais segura: ancoragem alta reduz a queda livre a quase zero, minimizando forças de impacto.",
                "en": "FF 0 is the optimal safest setup: high overhead anchorage reduces free fall to near zero.",
                "es": "FC 0 es la condición ideal: anclaje alto sin caída libre previa.",
              },
            },
          ],
        },
        {
          id: "q-nr35-3",
          order: 3,
          question: {
            "pt-BR": "Um montador industrial utiliza um talabarte duplo com absorvedor de energia (comprimento do talabarte fechado = 1,40 m). O absorvedor aberto estende até 1,20 m adicionais. A distância entre a argola dorsal do cinto e os pés do colaborador é de 1,50 m, e a norma exige uma margem de segurança mínima de 1,00 m contra o piso inferior. Qual é a Zona Livre de Queda (ZLQ) mínima obrigatória abaixo do ponto de ancoragem para garantir que o trabalhador não atinja o solo em caso de queda em Fator 2?",
            "en": "A rigger uses a twin lanyard with energy absorber (retracted length = 1.40 m). The absorber tears open up to 1.20 m. Worker dorsal D-ring to feet height is 1.50 m, with mandatory safety clearance margin of 1.00 m. What is the mandatory minimum Fall Clearance (ZLQ) beneath the anchor in a Factor 2 event?",
            "es": "Un operario usa un cabo doble con absorbedor (largo cerrado = 1,40 m). El absorbedor abierto suma 1,20 m. De argolla dorsal a pies hay 1,50 m, y el margen de seguridad normativo es de 1,00 m. ¿Cuál es la Zona Libre de Caída (ZLQ) mínima bajo el anclaje en Factor 2?",
          },
          options: [
            {
              id: "q3-a",
              text: { "pt-BR": "2,40 m", "en": "2.40 m", "es": "2,40 m" },
              isCorrect: false,
              explanation: {
                "pt-BR": "2,40 m considera apenas o talabarte e a margem, esquecendo a abertura do absorvedor de choque e a altura do corpo do trabalhador.",
                "en": "2.40 m ignores shock pack deployment and worker body height.",
                "es": "2,40 m no incluye la apertura del absorbedor ni la altura del cuerpo.",
              },
            },
            {
              id: "q3-b",
              text: { "pt-BR": "3,60 m", "en": "3.60 m", "es": "3,60 m" },
              isCorrect: false,
              explanation: {
                "pt-BR": "3,60 m não considera a margem de segurança de 1 metro abaixo dos pés.",
                "en": "3.60 m omits the mandatory 1.0 m safety clearance margin beneath the feet.",
                "es": "3,60 m omite el margen reglamentario de 1 metro.",
              },
            },
            {
              id: "q3-c",
              text: { "pt-BR": "5,10 m", "en": "5.10 m", "es": "5,10 m" },
              isCorrect: true,
              explanation: {
                "pt-BR": "Fórmula: ZLQ = Comprimento do Talabarte (1,40 m) + Abertura do Absorvedor (1,20 m) + Altura do Trabalhador dorsal-pés (1,50 m) + Margem de Segurança (1,00 m) = 5,10 m.",
                "en": "Formula: Clearance = Lanyard (1.40m) + Absorber Tear (1.20m) + Worker Height (1.50m) + Safety Margin (1.00m) = 5.10 m.",
                "es": "Fórmula: ZLQ = Cabo (1,40 m) + Desgarro Absorbedor (1,20 m) + Altura del operario (1,50 m) + Margen de Seguridad (1,00 m) = 5,10 m.",
              },
            },
            {
              id: "q3-d",
              text: { "pt-BR": "7,50 m", "en": "7.50 m", "es": "7,50 m" },
              isCorrect: false,
              explanation: {
                "pt-BR": "Cálculo superdimensionado sem correspondência com os dados fornecidos na especificação técnica.",
                "en": "Overestimated calculation not aligning with given technical inputs.",
                "es": "Cálculo desproporcionado que no coincide con los datos del enunciado.",
              },
            },
          ],
        },
        {
          id: "q-nr35-4",
          order: 4,
          question: {
            "pt-BR": "Conforme a ABNT NBR 16325 (Dispositivos de Ancoragem) e a NR-35, qual é a capacidade mínima de carga de ruptura estática que um ponto de ancoragem estrutural permanente ou temporário deve suportar para retenção de queda de um único trabalhador?",
            "en": "Under ABNT NBR 16325 (Anchor Devices) and NR-35, what is the minimum static breaking strength a structural anchor point must withstand for a single worker fall arrest?",
            "es": "¿Cuál es la resistencia estática mínima de rotura que debe soportar un punto de anclaje estructural para la detención de caída de un trabajador según NBR 16325 y NR-35?",
          },
          options: [
            {
              id: "q4-a",
              text: {
                "pt-BR": "Pelo menos 15 kN (aprox. 1.500 kgf) para ancoragens industriais metálicas e 22 kN (aprox. 2.200 kgf) conforme normas internacionais (OSHA / ANSI Z359) para ancoragens sem certificação de engenheiro.",
                "en": "At least 15 kN (~1,500 kgf) for certified metallic industrial anchors, and 22 kN (~5,000 lbf / 2,200 kgf) per OSHA/ANSI Z359 for non-engineered anchors.",
                "es": "Al menos 15 kN (~1.500 kgf) para anclajes industriales certificados y 22 kN (~2.200 kgf / 5.000 lbf según OSHA/ANSI) en anclajes sin cálculo de ingeniería.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A NBR 16325 estabelece 15 kN para testes de ancoragens metálicas industriais (Tipo A). Pontos improvisados não testados nunca devem ser utilizados.",
                "en": "Correct! NBR 16325 establishes 15 kN for metallic Type A anchors, matching international shock load margins.",
                "es": "¡Correcto! La NBR 16325 establece 15 kN para anclajes metálicos Tipo A garantizando margen ante impactos dinámicos.",
              },
            },
            {
              id: "q4-b",
              text: {
                "pt-BR": "Basta suportar o peso do corpo do trabalhador em repouso (aprox. 80 kgf / 0,8 kN).",
                "en": "Supporting worker static body weight at rest (~80 kgf / 0.8 kN) is sufficient.",
                "es": "Basta con soportar el peso estático del operario (~80 kgf / 0,8 kN).",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Grave erro técnico! Uma queda livre gera desaceleração dinâmica com forças de choque que multiplicam o peso corporal por 10 a 15 vezes em milissegundos.",
                "en": "Gross technical error! Dynamic fall arrest decelerations spike body weight by 10 to 15 times within milliseconds.",
                "es": "Error grave. Una caída libre genera fuerzas dinámicas que multiplican el peso corporal de 10 a 15 veces.",
              },
            },
            {
              id: "q4-c",
              text: {
                "pt-BR": "5 kN (500 kgf) para qualquer situação de ancoragem em tubulações de incêndio.",
                "en": "5 kN (500 kgf) for any tie-off to fire sprinkler pipes.",
                "es": "5 kN (500 kgf) para anclajes en tuberías de incendio.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Tubulações de combate a incêndio ou sprinklers são proibidas como ponto de ancoragem e quebram sob carga de choque.",
                "en": "Sprinkler piping is prohibited as anchorages and breaks under shock loads.",
                "es": "Las tuberías de incendio están prohibidas como anclaje anticaídas.",
              },
            },
            {
              id: "q4-d",
              text: {
                "pt-BR": "100 kN (10 toneladas) exclusivamente para fixação de cabos de aço galvanizados de 1 polegada.",
                "en": "100 kN (10 tons) strictly for 1-inch galvanized wire ropes.",
                "es": "100 kN (10 toneladas) exclusivo para cables de acero de 1 pulgada.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Valores desproporcionais típicos de guindastes pesados de rigging, não de sistemas individuais de retenção de quedas humana.",
                "en": "Disproportionate loads typical of heavy rigging cranes, not human fall arrest.",
                "es": "Valores típicos de izajes pesados, no de detención de caídas personales.",
              },
            },
          ],
        },
        {
          id: "q-nr35-5",
          order: 5,
          question: {
            "pt-BR": "O que é o 'Efeito Pêndulo' em uma queda de altura e como ele deve ser prevenido no posicionamento da linha de vida e dos pontos de ancoragem?",
            "en": "What is the 'Swing Fall' (Pendulum Effect) in work at height and how must it be mitigated when locating lifelines and anchors?",
            "es": "¿Qué es el 'Efecto Péndulo' en trabajos en altura y cómo se previene al ubicar líneas de vida y anclajes?",
          },
          options: [
            {
              id: "q5-a",
              text: {
                "pt-BR": "O efeito pêndulo ocorre quando o trabalhador se desloca lateralmente para longe do ponto de ancoragem vertical; em caso de queda, o corpo oscila horizontalmente em arco atingindo com violência colunas, paredes ou solo. Previne-se mantendo o ponto de ancoragem o mais perpendicular possível acima da cabeça (ângulo máximo de desvio lateral de 15° a 30°) ou usando linhas de vida horizontais contínuas.",
                "en": "Swing fall occurs when a worker moves laterally away from an overhead anchor; during a fall, the body swings like a pendulum, striking walls, columns, or ground. Prevented by keeping anchors perpendicular overhead (max 15-30° lateral angle) or using horizontal engineered lifelines.",
                "es": "El efecto péndulo ocurre al desplazarse lateralmente lejos del anclaje; en una caída, el cuerpo oscila como péndulo chocando con estructuras o el suelo. Se previene manteniendo el anclaje perpendicular sobre la cabeza (desvío máx 15-30°) o con líneas de vida horizontales.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O impacto lateral contra pilares metálicos ou solo durante a oscilação pendular pode ser tão letal quanto a queda livre vertical.",
                "en": "Correct! High-velocity lateral collision with structural beams during a pendulum swing can cause fatal blunt force trauma.",
                "es": "¡Correcto! El impacto lateral contra vigas durante la oscilación pendular causa traumas tan letales como la propia caída.",
              },
            },
            {
              id: "q5-b",
              text: {
                "pt-BR": "É o movimento natural de rotação do planeta Terra que desvia a trajetória de queda em direção ao polo Sul.",
                "en": "The Earth's Coriolis rotation pulling fall trajectory towards the South Pole.",
                "es": "La rotación de la Tierra que desvía la caída hacia el polo sur.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Falsa fundamentação física. O efeito pêndulo é puramente geométrico em relação ao ponto de ancoragem fixo.",
                "en": "Physically absurd. Pendulum swing is strictly governed by geometry relative to fixed anchor coordinates.",
                "es": "Falso. Es un fenómeno puramente geométrico entre el operario y el punto de anclaje.",
              },
            },
            {
              id: "q5-c",
              text: {
                "pt-BR": "É o balanço confortável que o cinto paraquedista proporciona para o trabalhador descansar suspenso.",
                "en": "Pleasant swaying motion provided by harnesses so riggers can rest in mid-air.",
                "es": "Un balanceo cómodo del arnés para descansar en el aire.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A suspensão inerte gera colapso cardiovascular imediato (trauma de suspensão) e nunca é confortável.",
                "en": "Suspension trauma causes rapid circulatory collapse and is an acute medical emergency.",
                "es": "La suspensión inerte es una emergencia médica crítica que compromete la vida.",
              },
            },
            {
              id: "q5-d",
              text: {
                "pt-BR": "Ocorre apenas em escaladas de montanha e não existe em galpões industriais cobertos.",
                "en": "Occurs strictly in alpine mountaineering, never in covered industrial plants.",
                "es": "Ocurre solo en alpinismo, no en plantas industriales.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Galpões industriais com vigas metálicas e pilares são os cenários onde mais ocorrem acidentes graves por efeito pêndulo.",
                "en": "Industrial facilities packed with steel columns are prime hazard zones for fatal swing falls.",
                "es": "Naves industriales con vigas y columnas son los lugares con mayores accidentes por péndulo.",
              },
            },
          ],
        },
        {
          id: "q-nr35-6",
          order: 6,
          question: {
            "pt-BR": "Durante a inspeção prévia de um cinto de segurança tipo paraquedista antes de iniciar a jornada, o montador encontra uma fita com corte de 5 mm na borda lateral provocado por contato com perfil metálico afiado. Qual é o procedimento técnico obrigatório?",
            "en": "During pre-shift inspection of a full-body harness, a rigger finds a 5 mm nick on a webbing edge caused by a sharp steel beam. What is the mandatory technical protocol?",
            "es": "¿En la inspección previa del arnés, se detecta un corte de 5 mm en el borde de una cinta por roce con una viga filosa. ¿Cuál es la conducta obligatoria?",
          },
          options: [
            {
              id: "q6-a",
              text: {
                "pt-BR": "Passar isqueiro na fita para cauterizar as pontas desfiadas e liberar para o turno normal.",
                "en": "Melt frayed fibers with a cigarette lighter and clear for normal shift operations.",
                "es": "Quemar las fibras deshilachadas con un encendedor y usar el arnés.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O calor da chama queima o polímero sintético e reduz a resistência da fita em mais de 70%.",
                "en": "Open flame burns synthetic fibers, degrading tensile strength by over 70%.",
                "es": "El fuego degrada las fibras sintéticas reduciendo drásticamente su resistencia.",
              },
            },
            {
              id: "q6-b",
              text: {
                "pt-BR": "O cinto deve ser retirado imediatamente de serviço, condenado, cortado mecanicamente (para evitar que terceiros desavisados o utilizem) e descartado para descarte formal de resíduo.",
                "en": "The harness must be immediately removed from service, condemned, physically cut up (to prevent unauthorized reuse by others), and routed to formal scrap disposal.",
                "es": "El arnés debe retirarse de inmediato de servicio, destruirse cortando las cintas (para evitar que alguien lo use) y descartarse.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Cortes em bordas concentram tensão e propagam rasgo catastrófico instantâneo quando submetidos a choques dinâmicos de retenção de queda.",
                "en": "Correct! Edge cuts cause rapid stress propagation, tearing the webbing open under shock loads. Cutting straps prevents reuse.",
                "es": "¡Correcto! Cualquier corte en los bordes de la cinta propaga el desgarro catastrófico ante una caída. Inutilizarlo evita su reúso.",
              },
            },
            {
              id: "q6-c",
              text: {
                "pt-BR": "Costurar com linha de pesca de nylon em casa antes de devolver ao almoxarifado.",
                "en": "Sew with nylon fishing line at home before returning to the tool crib.",
                "es": "Coserlo con hilo de pescar en casa antes de devolverlo.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Reparos em fitas e costuras de cintos de segurança são proibidos por normas técnicas; costuras devem ser eletrônicas de fábrica com fio certificado.",
                "en": "Field sewing on safety harnesses is strictly illegal; stitching requires certified factory automated bar-tacking.",
                "es": "Coser arneses artesanalmente está prohibido; las costuras de seguridad son automatizadas de fábrica.",
              },
            },
            {
              id: "q6-d",
              text: {
                "pt-BR": "Usar o cinto normalmente, bastando evitar conectar o talabarte no ponto dorsal.",
                "en": "Use the harness normally, simply avoiding the dorsal D-ring.",
                "es": "Usarlo normalmente evitando conectar el punto dorsal.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A tensão de retenção de queda se propaga por todas as fitas integradas do arnês; qualquer ponto comprometido inviabiliza o cinto.",
                "en": "Fall arrest impact disperses throughout the entire interconnected harness webbing matrix.",
                "es": "El impacto se distribuye por todo el arnés; un corte debilita toda la estructura.",
              },
            },
          ],
        },
        {
          id: "q-nr35-7",
          order: 7,
          question: {
            "pt-BR": "O que caracteriza a Síndrome da Suspensão Inerte (Trauma de Suspensão), por que uma vítima desacordada pendurada no cinto pode evoluir para óbito em menos de 15 a 30 minutos e qual cuidado especial deve ser adotado na fase imediata de pós-resgate ao deitar a vítima?",
            "en": "What is Suspension Trauma (Orthostatic Intolerance), why can an unconscious suspended worker die within 15-30 minutes, and what critical medical posture care applies immediately post-rescue?",
            "es": "¿Qué es el Trauma por Suspensión, por qué una víctima suspendida inconsciente puede fallecer en 15-30 minutos y qué postura de rescate debe aplicarse?",
          },
          options: [
            {
              id: "q7-a",
              text: {
                "pt-BR": "A imobilidade vertical faz a gravidade e as perneiras do cinto represarem grande volume de sangue venoso nas pernas, reduzindo o débito cardíaco e a oxigenação cerebral. No pós-resgate, deitar a vítima repentinamente em decúbito dorsal plano pode provocar o 'fluxo de retorno maciço' de sangue desoxigenado e ácido ao coração, desencadeando parada cardíaca por sobrecarga do ventrículo direito. A vítima consciente deve ser mantida inicialmente sentada ou semi-reclinada (posição agachada / semi-Fowler).",
                "en": "Immobility allows gravity and leg straps to pool venous blood in lower limbs, starving heart and brain of oxygen. Immediately laying the victim flat post-rescue causes a massive rush of deoxygenated, acidic blood to the heart (harness pathology rescue death), risking right ventricular cardiac arrest. Keep conscious victims seated or semi-reclined initially.",
                "es": "La inmovilidad vertical acumula sangre venosa en las piernas reduciendo el retorno al corazón y cerebro. Acostar bruscamente a la víctima en el piso puede causar una sobrecarga de sangre ácida al corazón provocando paro cardíaco (muerte por rescate). Debe mantenerse inicialmente semisentada (posición semi-Fowler).",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Esse é o protocolo clássico da medicina de trauma em altura: resgate ágil em minutos e transição postural gradual para evitar a síndrome de reperfusão cardíaca.",
                "en": "Correct! Core altitude trauma medicine: rapid rescue within minutes followed by progressive seated positioning to prevent toxic blood rush cardiac arrest.",
                "es": "¡Correcto! Protocolo vital en rescate en altura: rescate rápido y posicionamiento semisentado para evitar colapso cardíaco por reperfusión.",
              },
            },
            {
              id: "q7-b",
              text: {
                "pt-BR": "Trata-se apenas de enjoo e labirintite passageira provocada pela rotação do vento na altura.",
                "en": "Merely temporary vertigo and inner ear motion sickness from high-altitude breezes.",
                "es": "Es un simple mareo pasajero provocado por la altura.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Trauma de suspensão é um choque hipovolêmico distributivo real com risco iminente de colapso circulatório fatal.",
                "en": "Suspension trauma is an acute distributive shock pathology risking imminent fatal cardiac arrest.",
                "es": "Es un shock hipovolémico distributivo severo que compromete la vida.",
              },
            },
            {
              id: "q7-c",
              text: {
                "pt-BR": "A vítima deve ser pendurada de cabeça para baixo por 10 minutos para o sangue voltar para o cérebro rapidamente.",
                "en": "The victim must be hung upside down by ankles for 10 minutes to drain blood to brain.",
                "es": "La víctima debe colgarse boca abajo 10 minutos para drenar sangre al cerebro.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Ação absurda que pode causar hemorragia intracraniana e asfixia imediata.",
                "en": "Dangerous, absurd action risking intracranial hemorrhage and immediate asphyxiation.",
                "es": "Práctica letal que causa hemorragias cerebrales y asfixia.",
              },
            },
            {
              id: "q7-d",
              text: {
                "pt-BR": "Não há necessidade de resgate urgente; o cinto paraquedista é confortável e permite dormir por até 8 horas.",
                "en": "Zero urgency needed; harnesses are comfortable enough to sleep in for 8 hours.",
                "es": "No hay urgencia; el arnés permite descansar hasta 8 horas suspendido.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A imobilidade no cinto sem apoio nos pés pode levar ao óbito em menos de 20 minutos.",
                "en": "Inert vertical suspension without foot stirrup relief can kill in under 20 minutes.",
                "es": "La suspensión inerte sin apoyo en los pies puede causar la muerte en menos de 20 minutos.",
              },
            },
          ],
        },
        {
          id: "q-nr35-8",
          order: 8,
          question: {
            "pt-BR": "Em relação à Permissão de Trabalho (PT) e à Análise de Risco (AR) exigidas pelo item 35.4 da NR-35, qual é a validade temporal de uma PT e o que deve ocorrer se as condições operacionais mudarem (ex: início de chuva forte com rajadas de vento)?",
            "en": "Regarding Work Permits (PT) and Risk Assessments (AR) under NR-35 clause 35.4, what is the temporal validity of a PT and what happens if weather conditions deteriorate (e.g. heavy rain and wind)?",
            "es": "¿Cuál es la vigencia de un Permiso de Trabajo (PT) según la NR-35 y qué procede ante cambios climáticos adversos (lluvia y viento)?",
          },
          options: [
            {
              id: "q8-a",
              text: {
                "pt-BR": "A PT tem validade perpétua para o ano inteiro e não precisa ser revisada mesmo com tempestade.",
                "en": "PTs are valid indefinitely for the entire calendar year and never paused for storms.",
                "es": "El PT es válido por todo el año y no se detiene ante tormentas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "PTs são documentos diários vinculados a turnos específicos e condições ambientais ativas.",
                "en": "Work permits are shift-specific documents bound to active real-time environmental conditions.",
                "es": "Los permisos son diarios y vinculados a condiciones ambientales activas.",
              },
            },
            {
              id: "q8-b",
              text: {
                "pt-BR": "A PT tem validade limitada à duração da atividade (máximo de um turno de trabalho). Caso ocorram mudanças nas condições climáticas (chuva, vento excessivo, descargas atmosféricas) ou surjam riscos não previstos, a atividade deve ser PARALISADA imediatamente, o trabalho suspenso e a PT cancelada/revalidada após nova avaliação de risco.",
                "en": "PT validity is restricted to shift duration. If environmental conditions deteriorate (heavy rain, excessive wind, lightning) or unforeseen hazards arise, work must be HALTED immediately and the permit suspended/re-evaluated.",
                "es": "El PT tiene validez limitada a la jornada. Ante lluvia, vientos excesivos o riesgos no previstos, la actividad debe PARALIZARSE de inmediato y el permiso suspenderse/revalidarse tras nuevo análisis de riesgos.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O direito de recusa e o dever de interrupção imediata por intempéries são mandatórios na NR-35 para proteger vidas contra escorregamento e choque mecânico.",
                "en": "Correct! Stop-work authority and weather shutdown protocols are mandatory under NR-35.",
                "es": "¡Correcto! El deber de interrupción inmediata por mal tiempo es obligatorio en la NR-35.",
              },
            },
            {
              id: "q8-c",
              text: {
                "pt-BR": "O trabalhador deve acelerar o serviço correndo sobre a viga para terminar antes que a chuva piore.",
                "en": "Workers should sprint across beams to finish faster before rain worsens.",
                "es": "Los trabajadores deben correr sobre las vigas para terminar antes de que llueva más.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Correr em estruturas molhadas é causa direta de escorregamento e quedas fatais.",
                "en": "Rushing across slick surfaces causes fatal slip-and-fall incidents.",
                "es": "Apurarse en superficies mojadas causa caídas mortales.",
              },
            },
            {
              id: "q8-d",
              text: {
                "pt-BR": "A PT pode ser assinada pelo próprio montador sem ciência do encarregado de segurança ou emitente.",
                "en": "PT may be self-signed by the erector without safety supervisor or issuer knowledge.",
                "es": "El montador puede firmar su propio PT sin avisar a seguridad.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A PT exige dupla autorização formal entre emitente de área e executante responsável.",
                "en": "Work permits require formal dual authorization between area owner and lead executor.",
                "es": "El PT exige autorización formal entre emisor del área y ejecutante.",
              },
            },
          ],
        },
        {
          id: "q-nr35-9",
          order: 9,
          question: {
            "pt-BR": "Na utilização de Linhas de Vida Horizontais Flexíveis de cabo de aço para ancoragem móvel de trabalhadores (conforme NBR 16325-2 / Tipo C), qual é o fenômeno mecânico que multiplica exponencialmente a força de tração transmitida às ancoragens de extremidade quando o ângulo de flecha do cabo é pequeno?",
            "en": "When using Type C Flexible Horizontal Lifelines (wire rope per NBR 16325-2), what mechanical phenomenon exponentially multiplies tension forces on terminal end anchors when cable sag angle is shallow?",
            "es": "¿Qué fenómeno mecánico multiplica exponencialmente la tensión en los anclajes terminales de una Línea de Vida Horizontal flexible cuando el ángulo de flecha es muy pequeño?",
          },
          options: [
            {
              id: "q9-a",
              text: {
                "pt-BR": "A decomposição vetorial de forças: quanto mais horizontal e esticado estiver o cabo (menor a flecha permitida na queda), maior é a força de tração resultante nas ancoragens terminais, podendo transformar um impacto de 6 kN no trabalhador em cargas de tração superiores a 30 kN ou 50 kN nos postes de extremidade, exigindo cálculo de engenharia e absorvedor de linha de vida.",
                "en": "Vector force resolution: the tighter the cable (shallower sag angle under dynamic fall arrest), the greater the multiplied horizontal pull on end posts, turning a 6 kN body impact into >30-50 kN structural terminal tension, requiring engineering calculations and in-line shock absorbers.",
                "es": "La descomposición vectorial de fuerzas: cuanto más tensado esté el cable (menor catenaria/flecha), mayor es la tracción en los anclajes extremos, pudiendo transformar 6 kN de impacto en más de 30 o 50 kN en los postes terminales.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Por trigonometria, a força na extremidade é T = F / (2 × sen θ). Quando o ângulo θ é quase horizontal (próximo de zero), a tração tende ao infinito, arrancando vigas se não houver absorvedor em linha.",
                "en": "Correct! Vector math: T = F / (2 × sin θ). When sag angle θ is near zero, end tensions multiply catastrophically, tearing off support steel.",
                "es": "¡Correcto! La descomposición vectorial multiplica las cargas en los extremos cuando el ángulo de deflexión es pequeño.",
              },
            },
            {
              id: "q9-b",
              text: {
                "pt-BR": "O cabo de aço esquenta por atrito e derrete os postes de fixação em segundos.",
                "en": "Wire rope friction heats up and melts steel anchor posts in seconds.",
                "es": "El cable se calienta por fricción derritiendo los postes.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O risco é de ruptura mecânica por sobretensão estrutural vetorial, não fusão térmica.",
                "en": "The hazard is structural over-tension rupture, not thermal melting.",
                "es": "El riesgo es de rotura estructural por sobretensión, no por calor.",
              },
            },
            {
              id: "q9-c",
              text: {
                "pt-BR": "O cabo de aço atua como gerador piezoelétrico eletrocutando os mosquetões.",
                "en": "Wire ropes act as piezoelectric generators electrocuting carabiners.",
                "es": "El cable actúa como generador piezoeléctrico electrocutando.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Cabos de aço estruturais não geram efeitos piezoelétricos de choque.",
                "en": "Structural steel wire ropes possess zero piezoelectric charge generation.",
                "es": "Los cables de acero no generan descargas piezoeléctricas.",
              },
            },
            {
              id: "q9-d",
              text: {
                "pt-BR": "Não há multiplicação de forças; a carga nas pontas é sempre dividida igualmente por 10.",
                "en": "There is zero force multiplication; end load is always divided by 10.",
                "es": "No hay multiplicación de cargas; la fuerza siempre se divide por 10.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Princípio físico básico: cabos horizontais tensionados multiplicam forças transversais de forma severa.",
                "en": "Fundamental physics: transverse dynamic shock loads on tensioned cables severely multiply end loads.",
                "es": "Física básica: cargas dinámicas transversales multiplican la tracción en los extremos.",
              },
            },
          ],
        },
        {
          id: "q-nr35-10",
          order: 10,
          question: {
            "pt-BR": "A conclusão com aprovação neste curso EAD de NR-35 confere autorização e habilitação legal imediata para o colaborador realizar trabalhos em altura nas dependências industriais da RSS3 ou de clientes como a CMPC?",
            "en": "Does passing this online NR-35 course grant immediate legal certification to perform work at height at RSS3 operations or client facilities like CMPC?",
            "es": "¿La aprobación de este curso online de NR-35 autoriza de inmediato a realizar trabajos en altura en instalaciones de RSS3 o clientes como CMPC?",
          },
          options: [
            {
              id: "q10-a",
              text: {
                "pt-BR": "SIM. A aprovação digital no portal dispensa qualquer treinamento prático e o colaborador pode subir em qualquer estrutura imediatamente.",
                "en": "YES. Digital certification waives all practical requirements and allows immediate climbing.",
                "es": "SÍ. La aprobación digital online exime de práctica y permite subir a cualquier estructura.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Expressamente ilegal e terminantemente proibido pelas normas regulamentadoras do MTE e pelo AGENTS.md.",
                "en": "Explicitly illegal and forbidden under MTE regulations and permanent AGENTS.md rules.",
                "es": "Ilegal y expresamente prohibido por la legislación laboral y el AGENTS.md.",
              },
            },
            {
              id: "q10-b",
              text: {
                "pt-BR": "NÃO. Este certificado comprova estritamente a conclusão da etapa de fundamentação TEÓRICA regulamentar. Para estar formalmente habilitado e apto a trabalhar em altura, o colaborador deve obrigatoriamente realizar o treinamento PRÁTICO PRESENCIAL supervisionado por instrutor credenciado e possuir Atestado de Saúde Ocupacional (ASO) vigente emitido por médico do trabalho declarando explicitamente aptidão física e psicológica para Trabalho em Altura.",
                "en": "NO. This certificate certifies strictly theoretical regulatory grounding. Full formal operational qualification mandates hands-on in-person practical training signed by a certified instructor and an active Occupational Health Clearance (ASO) declaring explicit medical fitness for Work at Height.",
                "es": "NO. Este certificado avala estrictamente la etapa TEÓRICA. La habilitación legal y operativa exige obligatoriamente entrenamiento PRÁCTICO PRESENCIAL supervisado por instructor acreditado y ASO vigente expedido por médico laboral que certifique aptitud para Trabajo en Altura.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O item 3 do AGENTS.md e a NR-35 exigem a diferenciação categórica entre certificado teórico e homologação prática presencial com ASO apto.",
                "en": "Correct! As stipulated in Section 3 of AGENTS.md and NR-35, theoretical mastery must never be conflated with hands-on licensing.",
                "es": "¡Correcto! El AGENTS.md y la NR-35 exigen diferenciar la teoría del entrenamiento práctico presencial con ASO vigente.",
              },
            },
            {
              id: "q10-c",
              text: {
                "pt-BR": "Apenas se o colaborador assinar um termo assumindo responsabilidade total por qualquer queda que venha a sofrer.",
                "en": "Only if the employee signs a waiver assuming sole personal liability for any fall.",
                "es": "Solo si el trabajador firma un deslinde de responsabilidad por caídas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Direitos de segurança e saúde no trabalho são indisponíveis e irrenunciáveis; termos de isenção de responsabilidade são nulos de pleno direito.",
                "en": "Occupational health and safety protections are non-waivable human rights under labor law.",
                "es": "Los derechos de seguridad y salud laboral son irrenunciables; los deslindes no tienen validez legal.",
              },
            },
            {
              id: "q10-d",
              text: {
                "pt-BR": "Sim, desde que a atividade em altura seja realizada durante o dia com tempo ensolarado.",
                "en": "Yes, provided heights work is conducted during daylight under clear sunny skies.",
                "es": "Sí, siempre que el trabajo se haga de día con sol.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O clima favorável não dispensa o treinamento prático presencial nem os exames médicos de aptidão física/psicológica.",
                "en": "Weather does not substitute hands-on physical competency evaluation or certified medical clearance.",
                "es": "El buen clima no sustituye la capacitación práctica presencial ni la aptitud médica ocupacional.",
              },
            },
          ],
        },
      ],
    },
  },
  {
    id: "c-nr9-agentes-ambientais",
    slug: "nr-09-avaliacao-controle-exposicoes-ocupacionais",
    title: {
      "pt-BR": "NR-09: Avaliação e Controle das Exposições Ocupacionais a Agentes Físicos, Químicos e Biológicos",
      "en": "NR-09: Assessment & Control of Occupational Exposure to Physical, Chemical & Biological Agents",
      "es": "NR-09: Evaluación y Control de Exposiciones Ocupacionales a Agentes Físicos, Químicos y Biológicos",
    },
    description: {
      "pt-BR": "Diretrizes atualizadas da NR-09 articulada com a NR-01 (PGR/GRO): identificação, avaliação quantitativa e qualitativa, níveis de ação, limites de tolerância e medidas de controle para ruído, poeiras, vapores e agentes biológicos na indústria.",
      "en": "Updated NR-09 standards aligned with NR-01 (PGR/GRO): identification, qualitative/quantitative evaluation, action levels, exposure limits, and engineering controls in heavy industry.",
      "es": "Directrices de la NR-09 vinculada a la NR-01: identificación, evaluación de riesgos, niveles de acción y medidas de control ambiental.",
    },
    schoolId: "seguranca-epi",
    schoolName: {
      "pt-BR": "Segurança do Trabalho e Higiene Ocupacional",
      "en": "Occupational Safety & Industrial Hygiene",
      "es": "Seguridad Laboral e Higiene Ocupacional",
    },
    workloadHours: 8,
    level: "intermediate",
    modality: "hybrid",
    isMandatory: true,
    mandatoryFor: ["Operador de Hidrojato", "Pintor Industrial", "Técnico de Segurança", "Líder de Frente"],
    targetAudience: {
      "pt-BR": "Trabalhadores operacionais, operadores de hidrojateamento, pintores industriais, mecânicos e supervisores da RSS3 expostos a ruído, vibração, névoas e compostos químicos em plantas industriais.",
      "en": "RSS3 operational personnel, hydroblasters, industrial painters, and safety leads exposed to noise, vibrations, and airborne contaminants.",
      "es": "Personal operativo de RSS3 expuesto a ruido, vibraciones y contaminantes químicos.",
    },
    modulesCount: 2,
    lessonsCount: 2,
    thumbnailGradient: "from-emerald-700 to-teal-950",
    coverImage: "/images/courses/nr9.jpg",
    categories: ["nr-regulamentar"],
    badgeCode: "NR-09",
    updatedAtDate: "2026-10-16",
    modules: [
      {
        id: "mod-nr9-1",
        order: 1,
        title: {
          "pt-BR": "Módulo 1: A Nova NR-09 no Contexto do GRO/PGR e Metodologia de Avaliação",
          "en": "Module 1: The New NR-09 within GRO/PGR Context & Assessment Methodology",
          "es": "Módulo 1: La Nueva NR-09 en el Contexto de GRO/PGR y Metodología",
        },
        lessons: [
          {
            id: "les-nr9-1-1",
            order: 1,
            title: {
              "pt-BR": "NR-09 Atualizada: Avaliação e Controle de Exposição Ocupacional e Integração ao PGR",
              "en": "Updated NR-09: Occupational Exposure Assessment, Control & PGR Integration",
              "es": "NR-09 Actualizada: Evaluación y Control de Exposición Ocupacional e Integración al PGR",
            },
            durationMinutes: 25,
            contentType: "video",
            videoUrl: "6caPMut3OMg",
            contentDetail: {
              objective: {
                "pt-BR": "Compreender a estrutura moderna da NR-09 após a transição do antigo PPRA para o PGR da NR-01, os objetivos da norma e a metodologia de identificação e avaliação das exposições ocupacionais.",
                "en": "Understand the modernized NR-09 structure following the transition to NR-01 (PGR), regulatory objectives, and hazard assessment methodologies.",
                "es": "Comprender la estructura actualizada de la NR-09 y su articulación con el PGR de la NR-01.",
              },
              introduction: {
                "pt-BR": "Com a modernização das Normas Regulamentadoras, a NR-09 deixou de ser um programa estático em papel (o antigo PPRA) e passou a ser a norma técnica balizadora para avaliação e controle das exposições ocupacionais a agentes físicos, químicos e biológicos, subsidiando o Programa de Gerenciamento de Riscos (PGR) da NR-01.",
                "en": "Under modern labor regulations, NR-09 serves as the technical guideline for assessing and controlling occupational exposures, directly feeding the Risk Management Program (PGR).",
                "es": "La NR-09 es la norma técnica de referencia para la evaluación y control de exposiciones ambientales vinculada al PGR.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "O Papel da NR-09 e a Articulação com a NR-01 (GRO/PGR)",
                    "en": "NR-09 Role and Alignment with NR-01 (GRO/PGR)",
                    "es": "Rol de la NR-09 y Articulación con la NR-01 (GRO/PGR)",
                  },
                  body: {
                    "pt-BR": "A NR-09 fornece os parâmetros técnicos e critérios de medição para:\n1. Identificação preliminar dos perigos nos ambientes de trabalho da RSS3;\n2. Avaliação das exposições ocupacionais aos agentes ambientais;\n3. Implantação de medidas preventivas antes que os limites de exposição sejam atingidos (nível de ação);\n4. Acompanhamento sistemático da eficácia dos controles adotados nas frentes operacionais.",
                    "en": "NR-09 establishes technical criteria for preliminary hazard identification, exposure quantification, action levels, and control effectiveness monitoring.",
                    "es": "La NR-09 define parámetros técnicos para identificar peligros, evaluar exposiciones y verificar la eficacia de los controles.",
                  },
                },
                {
                  title: {
                    "pt-BR": "Avaliação Qualitativa vs. Avaliação Quantitativa",
                    "en": "Qualitative vs. Quantitative Assessment",
                    "es": "Evaluación Cualitativa vs. Cuantitativa",
                  },
                  body: {
                    "pt-BR": "• Avaliação Qualitativa: Realizada na fase de reconhecimento para comprovar a presença ou ausência do agente, inspeção de FDS/FISPQ dos produtos químicos e caracterização das fontes emissoras;\n• Avaliação Quantitativa: Medição instrumental in loco (dosimetria de ruído, bombas gravimétricas para particulados, medidores de vibração e gases) necessária sempre que a avaliação qualitativa indicar probabilidade de exposição ou necessidade de comprovar a eficácia das proteções coletivas.",
                    "en": "Qualitative assessment recognizes hazard sources and SDS data; quantitative assessment involves calibrated instruments (dosimeters, gravimetric sampling pumps).",
                    "es": "La evaluación cualitativa reconoce el peligro; la cuantitativa mide instrumentalmente los niveles de exposición en campo.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "A NR-09 é a norma técnica que dita como avaliar e controlar os agentes ambientais inseridos no Inventário de Riscos do PGR.",
                  "en": "NR-09 defines how environmental hazards must be evaluated and documented within the PGR Risk Inventory.",
                  "es": "La NR-09 dicta cómo evaluar y controlar los agentes ambientales en el inventario del PGR.",
                },
                {
                  "pt-BR": "O controle na fonte e as proteções coletivas (EPC) sempre prevalecem sobre a entrega isolada de EPI.",
                  "en": "Source elimination and collective protections (EPC) always take precedence over PPE alone.",
                  "es": "El control en el origen y las protecciones colectivas siempre prevalecen sobre el EPP.",
                },
              ],
            },
          },
        ],
      },
      {
        id: "mod-nr9-2",
        order: 2,
        title: {
          "pt-BR": "Módulo 2: Agentes Físicos, Químicos e Biológicos e Medidas de Prevenção",
          "en": "Module 2: Physical, Chemical & Biological Hazards & Preventative Measures",
          "es": "Módulo 2: Agentes Físicos, Químicos y Biológicos y Medidas Preventivas",
        },
        lessons: [
          {
            id: "les-nr9-2-1",
            order: 1,
            title: {
              "pt-BR": "NR 09 na Prática: Agentes Ambientais, Nível de Ação, Limites de Tolerância e Controle de Riscos",
              "en": "NR 09 in Practice: Environmental Hazards, Action Levels, Threshold Limits & Risk Control",
              "es": "NR 09 en la Práctica: Agentes Ambientales, Nivel de Acción, Límites de Tolerancia y Control",
            },
            durationMinutes: 28,
            contentType: "video",
            videoUrl: "hy-etKTjDrs",
            contentDetail: {
              objective: {
                "pt-BR": "Diferenciar agentes físicos, químicos e biológicos em operações industriais, compreender o conceito de Nível de Ação (50% do Limite de Tolerância) e aplicar as medidas de controle hierarquizadas.",
                "en": "Differentiate physical, chemical, and biological agents, understand Action Levels (50% threshold limit), and enforce hierarchical controls.",
                "es": "Diferenciar agentes físicos, químicos y biológicos, comprender el Nivel de Acción y aplicar controles.",
              },
              introduction: {
                "pt-BR": "Nas operações industriais da RSS3 (como hidrojateamento, tratamento de superfícies e manutenção em fábricas de celulose), os colaboradores interagem com ruído contínuo de motobombas, névoas de solventes, vapores de tintas epóxi e particulados respiráveis. Saber identificar esses riscos e respeitar os limites de exposição salva a saúde a curto e longo prazo.",
                "en": "In RSS3 heavy industrial operations, personnel face motor pump noise, solvent mists, epoxy vapors, and respirable dust. Understanding exposure thresholds prevents occupational diseases.",
                "es": "En las operaciones industriales de RSS3, los trabajadores enfrentan ruido, nieblas de solventes y polvos químicos.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Classificação dos Agentes Ambientais",
                    "en": "Environmental Agent Classification",
                    "es": "Clasificación de Agentes Ambientales",
                  },
                  body: {
                    "pt-BR": "• Agentes Físicos: Ruído contínuo/intermitente e de impacto, vibrações de corpo inteiro (VCI) e mãos/braços (VMB), temperaturas extremas (calor/frio), radiações ionizantes e não ionizantes;\n• Agentes Químicos: Poeiras minerais/respiráveis, fumos metálicos de solda, névoas ácidas/alcalinas, gases (ex: H2S em celulose) e vapores orgânicos de tintas e desengraxantes;\n• Agentes Biológicos: Bactérias, fungos, vírus e parasitas (frequentes em manutenção de efluentes, hidrovácuo e limpeza de lagoas industriais).",
                    "en": "Physical: noise, vibration, thermal stress; Chemical: dusts, fumes, vapors, toxic gases; Biological: bacteria, fungi in wastewater and lagoons.",
                    "es": "Físicos: ruido, vibración; Químicos: polvos, vapores, gases; Biológicos: bacterias y hongos en plantas de efluentes.",
                  },
                },
                {
                  title: {
                    "pt-BR": "Limite de Tolerância (LT) vs. Nível de Ação (NA)",
                    "en": "Threshold Limit Value (TLV) vs. Action Level (AL)",
                    "es": "Límite de Tolerancia vs. Nivel de Acción",
                  },
                  body: {
                    "pt-BR": "• Limite de Tolerância (LT): Concentração ou intensidade máxima do agente que a maioria dos trabalhadores pode estar exposta sem sofrer danos à saúde durante sua vida laboral (conforme NR-15 e ACGIH);\n• Nível de Ação (NA): Valor a partir do qual devem ser iniciadas ações preventivas para minimizar a probabilidade de que as exposições ultrapassem os limites de tolerância. Regra geral: corresponde a 50% da dose/concentração do limite de tolerância (ou 80 dB(A) para ruído, onde a dose diária atinge 50%). Ao atingir o Nível de Ação, a RSS3 inicia monitoramento periódico, exames médicos e controles preventivos.",
                    "en": "Threshold Limit is the maximum safe exposure; Action Level triggers preventive actions (monitoring, medical surveillance) at 50% of the threshold limit (e.g. 80 dBA for noise).",
                    "es": "El Límite de Tolerancia es el tope máximo; el Nivel de Acción (50% del límite o 80 dBA) exige iniciar medidas preventivas.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "O Nível de Ação serve para agir preventivamente antes que o colaborador adoeça ou atinja o limite máximo legal de tolerância.",
                  "en": "Action Levels serve as an early warning trigger before exposure breaches legal threshold limits.",
                  "es": "El Nivel de Acción permite actuar preventivamente antes de superar el límite de tolerancia.",
                },
                {
                  "pt-BR": "Protetores auriculares, máscaras respiratórias e luvas químicas devem ser especificados com base nas concentrações quantificadas no ambiente.",
                  "en": "PPE such as respirators and hearing protectors must be specified based on verified environmental monitoring data.",
                  "es": "Los EPP respiratorios y auditivos deben seleccionarse según las concentraciones medidas en el área.",
                },
              ],
            },
          },
        ],
      },
    ],
finalAssessment: {
      id: "exam-nr9-agentes",
      order: 1,
      title: {
        "pt-BR": "Avaliação Formal Teórica de NR-09: Avaliação e Controle de Agentes Ambientais",
        "en": "Formal Theoretical Assessment: NR-09 Environmental Exposure & Control",
        "es": "Evaluación Teórica Formal: NR-09 Evaluación y Control de Agentes Ambientales",
      },
      description: {
        "pt-BR": "Exame técnico de conformidade da NR-09: integração com o PGR/GRO da NR-01, metodologias NHO da Fundacentro, agentes físicos/químicos/biológicos, Nível de Ação (50% do LEO/LT), dose de ruído (NHO 01), sobrecarga térmica (IBUTG / NHO 06), poeiras respiráveis e laudos de higiene ocupacional.",
        "en": "Technical compliance exam on NR-09: integration with NR-01 (PGR/GRO), Fundacentro NHO methodologies, Action Levels (50% of TLV/LT), noise dosimetry (NHO 01), heat stress (WBGT / NHO 06), respirable particulates, and industrial hygiene surveillance.",
        "es": "Examen técnico de la NR-09: articulación con PGR/GRO (NR-01), normas NHO Fundacentro, Nivel de Acción (50% Límite), dosimetría de ruido (NHO 01), estrés térmico (TGBH / NHO 06) y control de agentes.",
      },
      scope: "course",
      estimatedMinutes: 50,
      questionsCount: 10,
      passingScorePercent: 70,
      maxAttempts: 3,
      isAvailable: true,
      availabilityNotice: {
        "pt-BR": "Avaliação liberada após a conclusão dos módulos teóricos de NR-09. Exige 70% de aproveitamento para certificação teórica.",
        "en": "Exam available upon completing modules. 70% passing score for theoretical certification.",
        "es": "Evaluación habilitada tras completar los módulos. 70% mínimo.",
      },
      questions: [
        {
          id: "q-nr9-1",
          order: 1,
          question: {
            "pt-BR": "Conforme a redação harmonizada da NR-09 com a NR-01 (Gerenciamento de Riscos Ocupacionais - GRO), qual é o papel estrutural e metodológico da NR-09 na elaboração do Programa de Gerenciamento de Riscos (PGR)?",
            "en": "Under harmonized NR-09 and NR-01 (Occupational Risk Management - GRO) provisions, what is NR-09's structural and methodological role in building the Risk Management Program (PGR)?",
            "es": "¿Según la articulación entre la NR-09 y la NR-01 (GRO), cuál es el rol metodológico de la NR-09 en la elaboración del Programa de Gestión de Riesgos (PGR)?",
          },
          options: [
            {
              id: "q1-a",
              text: {
                "pt-BR": "A NR-09 substitui integralmente a NR-01, tornando desnecessária a elaboração do Inventário de Riscos e do Plano de Ação.",
                "en": "NR-09 completely supersedes NR-01, eliminating the need for Risk Inventories and Action Plans.",
                "es": "La NR-09 sustituye a la NR-01 eliminando la necesidad de inventarios de riesgo.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A NR-01 é a norma mestra do GRO/PGR; a NR-09 atua como norma de apoio técnico para higiene ocupacional.",
                "en": "NR-01 is the master framework for GRO/PGR; NR-09 provides technical exposure assessment methodology.",
                "es": "La NR-01 es la norma marco del GRO/PGR; la NR-09 aporta criterios técnicos de higiene ocupacional.",
              },
            },
            {
              id: "q1-b",
              text: {
                "pt-BR": "A NR-09 estabelece os requisitos técnicos e as metodologias de avaliação (qualitativa e quantitativa) e controle das exposições ocupacionais aos agentes físicos, químicos e biológicos, fornecendo os dados técnicos de higiene do trabalho que obrigatoriamente alimentam o Inventário de Riscos e o Plano de Ação do PGR da NR-01.",
                "en": "NR-09 sets technical criteria and measurement methodologies (qualitative and quantitative) for evaluating and controlling occupational exposures to physical, chemical, and biological agents, feeding industrial hygiene data directly into the NR-01 PGR Risk Inventory and Action Plan.",
                "es": "La NR-09 establece los requisitos y metodologías técnicas de evaluación y control de agentes físicos, químicos y biológicos, aportando los datos que alimentan el Inventario de Riesgos y Plan de Acción del PGR según la NR-01.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Com o fim do antigo PPRA, a NR-09 deixou de ser um programa autônomo e passou a ser a norma técnica balizadora de avaliação e controle de agentes ambientais para o PGR da NR-01.",
                "en": "Correct! Transitioning from legacy PPRA, NR-09 serves as the specialized technical benchmark supporting the unified NR-01 PGR.",
                "es": "¡Correcto! La NR-09 es la norma técnica de evaluación ambiental que nutre el Inventario de Riesgos del PGR (NR-01).",
              },
            },
            {
              id: "q1-c",
              text: {
                "pt-BR": "A NR-09 aplica-se exclusivamente a trabalhadores que recebem adicional de insalubridade em grau máximo (40%).",
                "en": "NR-09 applies exclusively to employees receiving maximum (40%) hazardous duty pay.",
                "es": "La NR-09 aplica solo a trabajadores con plus de insalubridad máxima del 40%.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A NR-09 visa à prevenção e proteção da saúde de todos os colaboradores expostos, independentemente de haver adicional pecuniário (NR-15).",
                "en": "NR-09 aims at health prevention for all exposed personnel, distinct from financial hazard pay (NR-15).",
                "es": "La NR-09 es preventiva y aplica a todos los expuestos, independientemente de pagos de insalubridad.",
              },
            },
            {
              id: "q1-d",
              text: {
                "pt-BR": "A NR-09 cuida apenas de riscos ergonômicos e acidentes com ferramentas cortantes.",
                "en": "NR-09 only handles ergonomic hazards and cutting tool injuries.",
                "es": "La NR-09 solo trata riesgos ergonómicos y cortes con herramientas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Ergonomia é tratada na NR-17; acidentes mecânicos são cobertos pela NR-12 e NR-1. A NR-09 foca estritamente em agentes ambientais físicos, químicos e biológicos.",
                "en": "Ergonomics belongs to NR-17; mechanical risks are under NR-12. NR-09 targets physical, chemical, and biological agents.",
                "es": "Ergonomía es de la NR-17 y riesgos mecánicos de la NR-12. La NR-09 se enfoca en higiene ambiental.",
              },
            },
          ],
        },
        {
          id: "q-nr9-2",
          order: 2,
          question: {
            "pt-BR": "Na higiene ocupacional e controle de riscos ambientais, qual é o conceito exato de 'Nível de Ação' (NA), qual valor percentual do Limite de Exposição Ocupacional / Limite de Tolerância ele representa e quais medidas preventivas ele dispara?",
            "en": "In industrial hygiene, what is the exact definition of 'Action Level' (AL), what percentage of the Threshold Limit Value (TLV/LT) does it represent, and what preventive actions does it trigger?",
            "es": "¿Cuál es la definición exacta de 'Nivel de Acción' (NA), qué porcentaje del Límite de Tolerancia representa y qué medidas preventivas activa?",
          },
          options: [
            {
              id: "q2-a",
              text: {
                "pt-BR": "É o ponto em que a fábrica deve ser interditada imediatamente pela fiscalização do trabalho com aplicação de multa máxima.",
                "en": "The threshold where the factory is instantly shut down by labor inspectors with maximum fines.",
                "es": "El punto donde la planta debe clausurarse de inmediato con multas máximas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Nível de ação é um gatilho preventivo interno de engenharia e saúde, não um limite de penalidade fiscalizatória.",
                "en": "Action level is an internal proactive preventive trigger, not an immediate penal shutdown penalty.",
                "es": "El nivel de acción es un parámetro preventivo de gestión interna, no de clausura.",
              },
            },
            {
              id: "q2-b",
              text: {
                "pt-BR": "É o valor da concentração ou intensidade a partir do qual devem ser iniciadas ações preventivas (monitoramento periódico da exposição, informação aos trabalhadores e vigilância médica no PCMSO), correspondendo classicamente a 50% (metade) do Limite de Tolerância para agentes químicos e ruído (dose de 0,5 ou 80 dBA para dose diária de 8h), de modo a minimizar a probabilidade de que a exposição ultrapasse os limites legais.",
                "en": "The exposure level above which proactive preventive actions (periodic re-sampling, worker training, PCMSO medical surveillance) must start, typically set at 50% of the Threshold Limit for chemicals and noise (dose of 0.5 or 80 dBA for 8h shift), minimizing odds of ever breaching legal limits.",
                "es": "El valor a partir del cual deben iniciarse acciones preventivas (monitoreo periódico, información y vigilancia médica en PCMSO), correspondiente al 50% del Límite de Tolerancia para químicos y ruido (dosis de 0,5 u 80 dBA para 8 h), evitando que se sobrepase el límite legal.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O Nível de Ação atua como margem de segurança preventiva para antecipar e mitigar a exposição antes que ocorra dano auditivo, intoxicação ou infração legal aos limites da NR-15.",
                "en": "Correct! The Action Level provides proactive cushion, enforcing surveillance before exposures escalate into legal breaches or occupational illness.",
                "es": "¡Correcto! El Nivel de Acción es un margen preventivo que activa vigilancia antes de alcanzar el límite perjudicial.",
              },
            },
            {
              id: "q2-c",
              text: {
                "pt-BR": "Representa 100% do limite legal, autorizando o trabalho sem nenhuma proteção coletiva até que o trabalhador adoeça.",
                "en": "Represents 100% of the legal limit, allowing unprotected work until sickness manifests.",
                "es": "Representa el 100% del límite legal permitiendo trabajar sin protección hasta enfermar.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "100% é o Limite de Tolerância (LT/TLV); o Nível de Ação situa-se bem abaixo (50%) para impedir que se atinja o teto.",
                "en": "100% is the Threshold Limit Value; Action Level is positioned at 50% precisely to prevent reaching that ceiling.",
                "es": "El 100% es el límite de tolerancia; el nivel de acción se ubica al 50% como barrera de alerta.",
              },
            },
            {
              id: "q2-d",
              text: {
                "pt-BR": "É o limite mínimo de temperatura que o ar-condicionado dos escritórios pode atingir no inverno (18°C).",
                "en": "The minimum winter air conditioning temperature limit in office spaces (18°C).",
                "es": "La temperatura mínima de climatización en oficinas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Conforto térmico em escritórios é regulado pela NR-17 (20°C a 23°C), não sendo o conceito de Nível de Ação da NR-09.",
                "en": "Office comfort belongs to NR-17 ergonomics, unrelated to NR-09 Action Levels.",
                "es": "El confort térmico en oficinas corresponde a la NR-17, no al concepto de Nivel de Acción de la NR-09.",
              },
            },
          ],
        },
        {
          id: "q-nr9-3",
          order: 3,
          question: {
            "pt-BR": "Na avaliação da exposição ocupacional ao Ruído Contínuo ou Intermitente conforme os Anexos da NR-09 e a Norma de Higiene Ocupacional NHO 01 da Fundacentro, qual é o critério de medição de dose diária, taxa de duplicação de dose (q) e nível de critério de referência?",
            "en": "Evaluating occupational continuous or intermittent noise under NR-09 and Fundacentro NHO 01: what is the dose calculation criterion, exchange rate (q), and reference criterion level?",
            "es": "¿En la evaluación de ruido continuo o intermitente según NR-09 y NHO 01 de Fundacentro, cuál es el factor de duplicación (q) y nivel de referencia para 8 horas?",
          },
          options: [
            {
              id: "q3-a",
              text: {
                "pt-BR": "Nível de critério de 85 dBA para jornada diária de 8 horas. Conforme a NHO 01 da Fundacentro (adotada tecnicamente pela NR-09), utiliza-se incremento de duplicação de dose q = 3 dB (troca de 3 dB), onde a cada aumento de 3 dB na intensidade sonora o tempo máximo de exposição permitida cai pela metade (ex: 85 dBA = 8h; 88 dBA = 4h; 91 dBA = 2h).",
                "en": "Criterion level of 85 dBA for an 8-hour workday. Under Fundacentro NHO 01 (governing NR-09 technical evaluations), the exchange rate is q = 3 dB, meaning for every 3 dB increase in sound pressure, maximum allowable exposure time is cut in half (85 dBA = 8h; 88 dBA = 4h; 91 dBA = 2h).",
                "es": "Nivel de criterio de 85 dBA para jornada de 8 horas. Según NHO 01 (adoptada por la NR-09), se usa factor de duplicación q = 3 dB, donde cada 3 dB de aumento reduce a la mitad el tiempo máximo permitido (85 dBA = 8h; 88 dBA = 4h; 91 dBA = 2h).",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A NHO 01 da Fundacentro adota q = 3 dB com base técnica internacional (ISO 1999 e ACGIH), refletindo com exatidão a duplicação física da energia acústica recebida pelo ouvido humano.",
                "en": "Correct! Fundacentro NHO 01 enforces q = 3 dB matching ISO 1999 and ACGIH energy doubling metrics.",
                "es": "¡Correcto! La NHO 01 adopta q = 3 dB según la física del sonido duplicando la energía acústica que recibe el oído.",
              },
            },
            {
              id: "q3-b",
              text: {
                "pt-BR": "O limite é de 120 dBA para qualquer turno de trabalho e o tempo de exposição é ilimitado desde que o operador use protetor auricular tipo concha.",
                "en": "120 dBA is the limit for any shift and exposure is unlimited if earmuffs are worn.",
                "es": "El límite es 120 dBA para cualquier jornada usando orejeras.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "120 dBA é próximo ao limiar da dor e exposições contínuas sem proteção causam trauma acústico irreversível em minutos.",
                "en": "120 dBA approaches threshold of pain; continuous exposure induces permanent acoustic trauma rapidly.",
                "es": "120 dBA es un nivel extremo que causa daño auditivo irreversible.",
              },
            },
            {
              id: "q3-c",
              text: {
                "pt-BR": "Ruído é avaliado apenas em decibéis na escala C (dBC) com medição instantânea com aplicativo de celular.",
                "en": "Noise is evaluated exclusively in dBC scale via instantaneous mobile phone apps.",
                "es": "El ruido se mide solo en escala dBC con aplicaciones de teléfono móvil.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A avaliação de dose contínua/intermitente exige circuito de compensação 'A' (dBA), resposta lenta (Slow) e dosímetro de ruído integrador calibrado (IEC 61672).",
                "en": "Continuous noise dosimetries require certified Type 1 or 2 noise dosimeters with A-weighting and Slow response.",
                "es": "La dosimetría exige sonómetros integradores calibrados en escala dBA y respuesta lenta (Slow).",
              },
            },
            {
              id: "q3-d",
              text: {
                "pt-BR": "A taxa de duplicação é de q = 20 dB, permitindo 105 dBA por 8 horas sem qualquer proteção auditiva.",
                "en": "Exchange rate is q = 20 dB, allowing 105 dBA for 8 hours without hearing protection.",
                "es": "El factor de duplicación es q = 20 dB, permitiendo 105 dBA por 8 horas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Exposição a 105 dBA sem proteção tem limite máximo permissível inferior a 30 minutos na legislação brasileira.",
                "en": "At 105 dBA without hearing protection, maximum permissible exposure is under 30 minutes in Brazilian safety codes.",
                "es": "A 105 dBA el tiempo máximo permitido es inferior a 30 minutos.",
              },
            },
          ],
        },
        {
          id: "q-nr9-4",
          order: 4,
          question: {
            "pt-BR": "Na avaliação do calor ocupacional em ambientes industriais com fontes artificiais (caldeiras, fornos e tubulações de vapor na CMPC) conforme o Anexo 3 da NR-09 e a NHO 06 da Fundacentro, qual índice termométrico ponderado é mandatório e qual a sua fórmula para ambientes internos ou externos sem carga solar direta?",
            "en": "Evaluating occupational heat near boilers and steam lines under NR-09 Annex 3 and Fundacentro NHO 06: what weighted thermal index is mandatory and what is its formula for indoor/outdoor spaces without direct solar radiation?",
            "es": "¿En la evaluación de sobrecarga térmica ocupacional según NR-09 y NHO 06 (Fundacentro), qué índice es obligatorio y cuál es su fórmula para ambientes sin radiación solar directa?",
          },
          options: [
            {
              id: "q4-a",
              text: {
                "pt-BR": "Índice de Sensação Térmica em graus Fahrenheit medido com termômetro comum de mercúrio.",
                "en": "Wind Chill Thermal Index in Fahrenheit measured with simple mercury thermometers.",
                "es": "Sensación térmica en Fahrenheit con termómetro de mercurio común.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Sensação térmica é índice meteorológico informal; a higiene ocupacional exige rigor termodinâmico científico.",
                "en": "Wind chill is a casual meteorological metric; occupational hygiene mandates scientific heat stress indices.",
                "es": "La sensación térmica es una medida meteorológica, no un índice normativo de higiene industrial.",
              },
            },
            {
              id: "q4-b",
              text: {
                "pt-BR": "IBUTG (Índice de Bulbo Úmido Termômetro de Globo). Para ambientes internos ou sem carga solar direta: IBUTG = 0,7 tbn + 0,3 tg (onde tbn é a temperatura de bulbo úmido natural e tg é a temperatura de termômetro de globo).",
                "en": "WBGT (Wet Bulb Globe Temperature index). For indoor or shaded areas without direct solar load: WBGT = 0.7 tbn + 0.3 tg (where tbn is natural wet bulb temp and tg is globe temp).",
                "es": "TGBH (Índice de Bulbo Húmedo y Termómetro de Globo). Para ambientes sin radiación solar directa: TGBH = 0,7 tbn + 0,3 tg (donde tbn es temperatura de bulbo húmedo natural y tg es temperatura de globo).",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O IBUTG pondera calor convectivo, umidade relativa e calor radiante (medido pela esfera oca de cobre fosco do termômetro de globo). Com carga solar direta soma-se 0,1 tbs (bulbo seco).",
                "en": "Correct! WBGT integrates convection, humidity, and radiant heat via black globe thermometers. Solar exposed adds 0.1 tbs.",
                "es": "¡Correcto! El TGBH pondera humedad, radiación térmica y temperatura del aire según NHO 06.",
              },
            },
            {
              id: "q4-c",
              text: {
                "pt-BR": "Apenas a temperatura do ar medida no relógio digital de parede da sala de controle.",
                "en": "Air temperature read directly off a wall digital clock in the control room.",
                "es": "La temperatura del reloj digital de la sala de control.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A temperatura de bulbo seco isolada ignora o calor radiante das caldeiras e a umidade do ar, que impedem a troca térmica por suor.",
                "en": "Dry bulb temperature alone completely ignores thermal radiation and humidity, which throttle sweat evaporation.",
                "es": "La temperatura seca ignora el calor radiante y la humedad, factores críticos en sobrecarga térmica.",
              },
            },
            {
              id: "q4-d",
              text: {
                "pt-BR": "IBUTG = 1,0 tg + 1,0 tbn dividido por 50.",
                "en": "WBGT = 1.0 tg + 1.0 tbn divided by 50.",
                "es": "TGBH = 1,0 tg + 1,0 tbn dividido 50.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Fórmula matemática inventada sem qualquer respaldo nas normas internacionais ou na NHO 06.",
                "en": "Fabricated equation bearing zero connection to international heat stress standards or NHO 06.",
                "es": "Fórmula matemática errónea.",
              },
            },
          ],
        },
        {
          id: "q-nr9-5",
          order: 5,
          question: {
            "pt-BR": "Na amostragem de Poeiras Minerais e Particulados em suspensão no ar (ex: poeira de sílica livre cristalizada em corte de concreto ou jateamento abrasivo), qual é a diferença técnica crucial entre 'Fração Inalável', 'Fração Torácica' e 'Fração Respirável' (NHO 08 da Fundacentro)?",
            "en": "Airborne mineral dust sampling (e.g. respirable crystalline silica during concrete cutting/blasting per Fundacentro NHO 08): what is the critical technical distinction between Inhalable, Thoracic, and Respirable fractions?",
            "es": "¿En el muestreo de polvos minerales (ej. sílice cristalina según NHO 08), cuál es la diferencia entre Fracción Inhalable, Torácica y Respirable?",
          },
          options: [
            {
              id: "q5-a",
              text: {
                "pt-BR": "Fração Inalável: partículas que penetram pelo nariz e boca (até 100 µm); Fração Torácica: partículas que ultrapassam a laringe e atingem a árvore brônquica (diâmetro aerodinâmico médio de 10 µm); Fração Respirável: partículas ultrafinas (diâmetro médio de 4 µm / corte de 50% em 4 µm com ciclone de nylon) que atingem os alvéolos pulmonares e bronquíolos terminais, onde não há cílios de expulsão, causando pneumoconioses graves e irreversíveis (como a silicose).",
                "en": "Inhalable Fraction: particles entering nose/mouth (up to 100 µm); Thoracic Fraction: particles penetrating past larynx into tracheobronchial tree (median 10 µm); Respirable Fraction: sub-micron particulates (median 4 µm cut point with cyclone separator) reaching alveolar gas exchange regions lacking ciliary clearance, driving irreversible pneumoconiosis (silicosis).",
                "es": "Fracción Inhalable: partículas que entran por nariz y boca (hasta 100 µm); Torácica: alcanzan los bronquios (corte 10 µm); Respirable: partículas microscópicas (corte 4 µm con ciclón) que llegan a los alvéolos pulmonares causando neumoconiosis irreversible (silicosis).",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A fração respirável é a mais perigosa porque partículas com menos de 4 micrômetros escapam dos filtros naturais do nariz e depositam-se profundamente nos alvéolos, gerando fibrose pulmonar irreversível.",
                "en": "Correct! Respirable dust (<4 µm) bypasses nasal filtration, settling in deep alveolar tissue to trigger irreversible fibrotic scarring.",
                "es": "¡Correcto! La fracción respirable (<4 µm) llega a los alvéolos burlando las defensas del tracto superior y provocando silicosis.",
              },
            },
            {
              id: "q5-b",
              text: {
                "pt-BR": "Todas as frações são idênticas e qualquer poeira com mais de 1 metro de diâmetro cai no chão sem ser aspirada.",
                "en": "All fractions are identical and dust over 1 meter in diameter falls immediately.",
                "es": "Todas las fracciones son iguales y no hay diferencia en el tamaño de partícula.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Partículas atmosféricas estão na escala de micrômetros (µm); a retenção biológica depende estritamente do diâmetro aerodinâmico.",
                "en": "Particulates are measured in micrometers (µm); biological deposition depends strictly on aerodynamic diameter.",
                "es": "Las partículas se miden en micrones y su impacto en la salud depende de su tamaño.",
              },
            },
            {
              id: "q5-c",
              text: {
                "pt-BR": "Poeira respirável é aquela que tem cheiro agradável e não causa tosse nos primeiros 5 minutos.",
                "en": "Respirable dust has pleasant aroma and produces no coughing during the first 5 minutes.",
                "es": "Polvo respirable es el que no causa tos en los primeros minutos.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A sílica respirável é inodora, incolor e invisível a olho nu, não gerando tosse inicial enquanto destrói o tecido alveolar.",
                "en": "Crystalline silica is odorless and invisible, silently destroying lung alveoli without immediate cough warning.",
                "es": "La sílice respirable es invisible, inodora y daña los alvéolos silenciosamente.",
              },
            },
            {
              id: "q5-d",
              text: {
                "pt-BR": "Fração inalável refere-se apenas a fumaça de cigarro consumida fora do horário de trabalho.",
                "en": "Inhalable fraction refers strictly to tobacco smoke inhaled during breaks.",
                "es": "Fracción inhalable se refiere solo al humo de tabaco.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Conceito biológico e toxicológico ocupacional aplicável a aerodispersóides industriais em suspensão.",
                "en": "Occupational toxicological benchmark applicable to all industrial airborne aerosols.",
                "es": "Es un concepto toxicológico laboral aplicable a aerosoles industriales.",
              },
            },
          ],
        },
        {
          id: "q-nr9-6",
          order: 6,
          question: {
            "pt-BR": "Na amostragem de Agentes Químicos no ar (gases, vapores de solventes orgânicos e névoas ácidas) com bombas de amostragem gravimétrica e tubos de carvão ativado ou filtros de éster de celulose, qual é a exigência técnica indispensável para a calibração do trem de amostragem?",
            "en": "Air sampling for Chemical Agents (vapors, solvents, acid mists) using personal sampling pumps and sorbent tubes: what mandatory technical calibration protocol applies?",
            "es": "¿En el muestreo de agentes químicos con bombas de muestreo personal y tubos adsorbentes, cuál es el protocolo obligatorio de calibración del caudal?",
          },
          options: [
            {
              id: "q6-a",
              text: {
                "pt-BR": "A vazão da bomba não precisa de calibração desde que a bateria esteja 100% carregada.",
                "en": "Pump flow rate requires no calibration provided the battery is 100% charged.",
                "es": "El caudal no requiere calibración si la batería está llena.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Sem medição precisa da vazão de ar em litros por minuto, é impossível calcular o volume de ar amostrado e a concentração em mg/m³.",
                "en": "Without verified flow in L/min, calculating sampled air volume and mg/m³ concentrations is impossible.",
                "es": "Sin calibrar el caudal es imposible calcular el volumen de aire y la concentración del contaminante.",
              },
            },
            {
              id: "q6-b",
              text: {
                "pt-BR": "A calibração da vazão da bomba com o meio de coleta representativo montado no circuito (com tubo de carvão ou cassete) deve ser realizada antes e após cada amostragem em campo utilizando calibrador primário acreditado (ex: calibrador de pistão / bolha de sabão rastreável), com variação máxima tolerada de vazão de até 5% entre início e término.",
                "en": "Flow rate calibration with representative media in-line (tube or cassette) must be performed pre- and post-sampling using an accredited primary flow calibrator (e.g. NIST-traceable piston/bubble meter), with maximum allowable drift capped at 5%.",
                "es": "La calibración del caudal con el medio de muestreo en línea (tubo o filtro) debe realizarse antes y después del muestreo con calibrador primario calibrado (piston/burbuja trazable), con desviación máxima tolerada del 5% entre inicio y fin.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Variação superior a 5% na vazão invalida a amostra perante a Fundacentro e normas NIOSH/OSHA, pois distorce a determinação quantitativa do contaminante.",
                "en": "Correct! Flow drift exceeding 5% invalidates sampling per NIOSH and OSHA protocols due to volume inaccuracies.",
                "es": "¡Correcto! Una variación mayor al 5% invalida la muestra según protocolos NIOSH y Fundacentro.",
              },
            },
            {
              id: "q6-c",
              text: {
                "pt-BR": "A calibração é feita assoprando na mangueira para verificar se o motor gira mais rápido.",
                "en": "Calibration is checked by blowing into tubing to verify if pump speed increases.",
                "es": "Se calibra soplando la manguera para ver si el motor gira.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Assoprar danifica os sensores internos de pressão e diafragmas de precisão da bomba de higiene.",
                "en": "Blowing into sampling trains destroys micro-pressure sensors and sensitive diaphragms.",
                "es": "Soplar daña los sensores de precisión de la bomba de muestreo.",
              },
            },
            {
              id: "q6-d",
              text: {
                "pt-BR": "Basta usar bombas de aquário comuns com tubos de plástico de jardinagem.",
                "en": "Aquarium aerator pumps with garden tubing are legally sufficient.",
                "es": "Bastan bombas de acuario con mangueras plásticas de jardín.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Bombas de higiene ocupacional devem ter compensação automática de fluxo constante de alta precisão e certificação intrinsecamente segura (Ex).",
                "en": "Hygiene sampling pumps require certified constant-flow compensation and intrinsic safety (Ex) certification.",
                "es": "Se exigen bombas de higiene con compensación de flujo y certificación intrínsecamente segura.",
              },
            },
          ],
        },
        {
          id: "q-nr9-7",
          order: 7,
          question: {
            "pt-BR": "Em relação aos Agentes Biológicos no ambiente industrial (como bactérias anaeróbicas e fungos em torres de resfriamento de água, esgoto sanitário e efluentes de fábrica de celulose), como a NR-09 orienta a sua identificação e por que a avaliação na maioria dos casos é QUALITATIVA?",
            "en": "Biological Agents in industrial settings (bacteria/fungi in cooling towers, wastewater plants per NR-09): how are they surveyed and why is evaluation predominantly QUALITATIVE?",
            "es": "¿Respecto a los Agentes Biológicos en la industria (bacterias, hongos en torres de enfriamiento y efluentes), por qué su evaluación es mayormente CUALITATIVA según la NR-09?",
          },
          options: [
            {
              id: "q7-a",
              text: {
                "pt-BR": "Porque não existem limites de tolerância numéricos universais em mg/m³ para a grande maioria dos agentes biológicos patogênicos (vírus, bactérias e fungos), uma vez que a virulência, a capacidade infecciosa e a resposta imunológica variam individualmente; a avaliação baseia-se na identificação dos reservatórios, vias de transmissão (respiratória, cutânea, mucosa) e medidas de contenção/biossegurança.",
                "en": "Because universal numerical exposure limits (mg/m³) do not exist for the vast majority of biological pathogens (viruses, bacteria, fungi) given variable infectivity, virulence, and individual host immunity; evaluation relies on identifying reservoirs, transmission routes, and engineering containment.",
                "es": "Porque no existen límites de tolerancia numéricos en mg/m³ para la mayoría de los patógenos biológicos, ya que la virulencia y susceptibilidad varían individualmente; la evaluación se basa en identificar reservorios, vías de transmisión y medidas de contención.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Na higiene ocupacional, a exposição biológica é qualitativa justamente pela inexistência de limites de tolerância numéricos universais em dosimetria, focando em barreiras sanitárias e biossegurança.",
                "en": "Correct! Industrial hygiene treats biological agents qualitatively due to the lack of numerical threshold limit values, focusing on sanitation and containment.",
                "es": "¡Correcto! La higiene industrial evalúa agentes biológicos cualitativamente al no existir valores límite umbral numéricos universales.",
              },
            },
            {
              id: "q7-b",
              text: {
                "pt-BR": "Porque agentes biológicos não existem em fábricas de celulose ou caldeiras, sendo restritos a hospitais.",
                "en": "Because biological agents never exist in pulp mills or boiler rooms, existing strictly in hospitals.",
                "es": "Porque los agentes biológicos solo existen en hospitales, nunca en industrias.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Torres de resfriamento, biossólidos e estações de tratamento de efluentes industriais são reservatórios ricos em bactérias (ex: Legionella pneumophila).",
                "en": "Cooling towers and industrial wastewater plants harbor massive bacterial colonies (e.g. Legionella).",
                "es": "Torres de enfriamiento y efluentes albergan bacterias como Legionella y hongos patógenos.",
              },
            },
            {
              id: "q7-c",
              text: {
                "pt-BR": "Bactérias morrem instantaneamente ao entrar em contato com qualquer máquina de aço inoxidável.",
                "en": "Bacteria die instantly upon touching any stainless steel equipment.",
                "es": "Las bacterias mueren al tocar acero inoxidable.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Biofilmes bacterianos proliferam com facilidade sobre ligas metálicas industriais úmidas.",
                "en": "Bacterial biofilms thrive across wet metallic surfaces inside process piping.",
                "es": "Las biopelículas bacterianas crecen con facilidad sobre tuberías y metales húmedos.",
              },
            },
            {
              id: "q7-d",
              text: {
                "pt-BR": "A avaliação é qualitativa porque o técnico pode cheirar a água para saber a quantidade exata de vírus.",
                "en": "Qualitative because technicians can sniff water to detect exact virus counts.",
                "es": "Cualitativa porque el técnico huele el agua para contar los virus.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Cheirar água contaminada expõe o trabalhador a aerossóis com risco de contaminação e infecção pulmonar.",
                "en": "Sniffing contaminated water exposes workers to bioaerosol lung infections.",
                "es": "Oler agua contaminada es una práctica peligrosa que expone a bioaerosoles infecciosos.",
              },
            },
          ],
        },
        {
          id: "q-nr9-8",
          order: 8,
          question: {
            "pt-BR": "No monitoramento das Vibrações Ocupacionais (Anexo da NR-09 e NHO 09 / NHO 10 da Fundacentro), quais são as duas modalidades de exposição avaliadas com acelerômetros triaxiais e seus respectivos parâmetros métricos de aceleração?",
            "en": "Occupational Vibration surveillance (NR-09 Annexes and Fundacentro NHO 09 / NHO 10): what are the two exposure categories assessed via triaxial accelerometers and their metric parameters?",
            "es": "¿En la evaluación de vibraciones ocupacionales (NR-09 y NHO 09/10), cuáles son las dos modalidades evaluadas con acelerómetros triaxiales y sus parámetros métricos?",
          },
          options: [
            {
              id: "q8-a",
              text: {
                "pt-BR": "Vibração de Mãos e Braços (VMB / NHO 10, medida pela aceleração resultante normalizada aren em m/s² com Nível de Ação em 2,5 m/s² e Limite em 5,0 m/s²) e Vibração de Corpo Inteiro (VCI / NHO 09 em operadores de caminhões/tratores, avaliada pelo aren em m/s² ou VDVR - Valor da Dose de Vibração Resultante em m/s^1,75 com Nível de Ação em 0,5 m/s² aren ou 9,1 m/s^1,75 VDVR).",
                "en": "Hand-Arm Vibration (HAV / NHO 10, measured via normalized acceleration aren in m/s² with Action Level at 2.5 m/s² and Limit at 5.0 m/s²) and Whole-Body Vibration (WBV / NHO 09 on mobile equipment, measured via aren in m/s² or VDV in m/s^1.75 with Action Level at 0.5 m/s² aren or 9.1 m/s^1.75 VDV).",
                "es": "Vibración Mano-Brazo (VMB / NHO 10, medida por aceleración aren en m/s² con Nivel de Acción en 2,5 m/s² y Límite en 5,0 m/s²) y Vibración de Cuerpo Entero (VCE / NHO 09 en conductores, evaluada por aren en m/s² o VDVR con Nivel de Acción en 0,5 m/s² aren o 9,1 m/s^1,75 VDVR).",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A NHO 09 e a NHO 10 regulamentam com rigor técnico as métricas aren e VDVR para proteção contra síndrome dos dedos brancos (Raynaud) e lesões graves na coluna vertebral de operadores.",
                "en": "Correct! NHO 09 and NHO 10 govern normalized aren and VDV metrics against white finger syndrome and lumbar spinal damage.",
                "es": "¡Correcto! NHO 09 y NHO 10 regulan las métricas aren y VDVR para prevenir lesiones lumbares y síndrome del dedo blanco.",
              },
            },
            {
              id: "q8-b",
              text: {
                "pt-BR": "Vibração ocular e vibração capilar, medidas em quilômetros por hora com radar de velocidade.",
                "en": "Ocular and hair vibration measured in km/h using speed radar.",
                "es": "Vibración ocular y capilar medidas en km/h con radar.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Métricas inexistentes e fantasiosas na higiene ocupacional.",
                "en": "Non-existent, fictional metrics.",
                "es": "Métricas ficticias e inexistentes.",
              },
            },
            {
              id: "q8-c",
              text: {
                "pt-BR": "Vibração só é perigosa se o operador estiver segurando um copo de café e o líquido derramar.",
                "en": "Vibration is hazardous only if holding coffee cups that spill.",
                "es": "La vibración solo es peligrosa si se derrama café de un vaso.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A vibração atua diretamente sobre o sistema osteomuscular e vascular, exigindo dosimetria instrumental rigorosa.",
                "en": "Vibration causes chronic vascular and musculoskeletal disorders, requiring rigorous sensor dosimetry.",
                "es": "La vibración causa desórdenes vasculares y osteomusculares crónicos.",
              },
            },
            {
              id: "q8-d",
              text: {
                "pt-BR": "Aceleração de gravidade da Terra, que é fixa em 9,8 m/s² em qualquer posto de trabalho.",
                "en": "Earth gravity acceleration fixed at 9.8 m/s² at all work stations.",
                "es": "La aceleración de gravedad de 9,8 m/s² constante.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A gravidade estática é uma constante física; a higiene mede a aceleração dinâmica oscilatória nos 3 eixos (x, y, z).",
                "en": "Static gravity is a physical constant; industrial hygiene evaluates dynamic oscillatory triaxial acceleration.",
                "es": "La higiene ocupacional mide aceleraciones oscilatorias en los 3 ejes dinámicos, no la gravedad estática.",
              },
            },
          ],
        },
        {
          id: "q-nr9-9",
          order: 9,
          question: {
            "pt-BR": "Quando a avaliação quantitativa comprova que a exposição de um grupo de operadores de hidrojato a ruído contínuo atingiu nível médio de 92 dBA (ultrapassando o Limite de Tolerância de 85 dBA para 8h), qual deve ser a ordem cronológica e técnica das medidas corretivas a serem inseridas no Plano de Ação do PGR conforme a NR-01 e a NR-09?",
            "en": "When noise sampling reveals hydroblasting operators exposed to 92 dBA (exceeding 85 dBA 8-hour limit), what is the mandatory chronological order of corrective engineering and administrative controls in the PGR Action Plan under NR-01 & NR-09?",
            "es": "¿Cuando las mediciones de ruido en hidrojet marcan 92 dBA (superando 85 dBA), cuál es el orden de medidas correctivas en el Plan de Acción del PGR según NR-01 y NR-09?",
          },
          options: [
            {
              id: "q9-a",
              text: {
                "pt-BR": "1º) Medidas de controle na fonte geradora (enclausuramento acústico da motobomba, silenciadores de escapamento, amortecedores de vibração); 2º) Medidas na trajetória de propagação (barreiras acústicas, isolamento e aumento da distância da frente de trabalho); 3º) Medidas de ordem administrativa (revezamento de operadores e redução da jornada exposta); 4º) Fornecimento de protetor auditivo adequado com atenuação NRRsf comprovada enquanto as medidas de engenharia estiverem sendo projetadas e implantadas.",
                "en": "1st) Source controls (acoustic pump enclosure, exhaust mufflers, vibration dampeners); 2nd) Path controls (acoustic barriers, increased separation distance); 3rd) Administrative controls (shift rotation, reduced exposure duration); 4th) Certified hearing PPE with proven NRRsf attenuation while engineering fixes are engineered and deployed.",
                "es": "1º) Controles en la fuente (encapsulamiento acústico de motobombas, silenciadores, antivibratorios); 2º) Controles en la trayectoria (barreras acústicas, distanciamiento); 3º) Medidas administrativas (rotación de personal y reducción de tiempo); 4º) Suministro de EPP auditivo con atenuación NRRsf certificada mientras se implementan las medidas colectivas.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Essa é a hierarquia universal mandatória da NR-01 e NR-09: atuar prioritariamente na fonte e na trajetória antes de repassar a proteção exclusivamente ao trabalhador.",
                "en": "Correct! Mandatory hierarchical control sequence: eliminate or attenuate at source and transmission path before relying solely on personal gear.",
                "es": "¡Correcto! Jerarquía universal de control: fuente > medio de propagación > medidas administrativas > EPP.",
              },
            },
            {
              id: "q9-b",
              text: {
                "pt-BR": "Comprar imediatamente protetores auriculares descartáveis baratos e arquivar o processo sem avaliar modificações mecânicas na bomba.",
                "en": "Buy cheap disposable earplugs immediately and close the file without pump modifications.",
                "es": "Comprar tapones baratos y archivar el caso sin intervenir en la motobomba.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Recorrer apenas ao EPI sem avaliar e implantar medidas de engenharia viola frontalmente a legislação trabalhista brasileira.",
                "en": "Relying exclusively on PPE without investigating collective engineering controls breaches labor safety laws.",
                "es": "Depender solo del EPP sin evaluar controles de ingeniería viola la legislación laboral.",
              },
            },
            {
              id: "q9-c",
              text: {
                "pt-BR": "Desligar a bomba de hidrojato e realizar a limpeza do tanque usando espátulas manuais sem água.",
                "en": "Shut down the hydroblaster and scrape tanks manually with scrapers without water.",
                "es": "Apagar el hidrojet y raspar tanques manualmente con espátulas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Inviável operacionalmente e aumenta drasticamente a exposição ergonômica e o risco em espaço confinado.",
                "en": "Operationally unfeasible and sharply escalates severe ergonomic and confined space entry risks.",
                "es": "Técnicamente inviable y agrava riesgos ergonómicos.",
              },
            },
            {
              id: "q9-d",
              text: {
                "pt-BR": "Aumentar o volume dos rádios comunicadores para abafar o ruído da bomba.",
                "en": "Crank up two-way radio volumes to drown out engine noise.",
                "es": "Subir el volumen de los radios para tapar el ruido del motor.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Aumentar o volume de fones soma mais pressão sonora no canal auditivo, acelerando a perda auditiva neurossensorial.",
                "en": "Boosting headphone volume delivers dangerous cumulative acoustic energy into ears.",
                "es": "Subir el volumen agrega más decibeles al canal auditivo acelerando la sordera.",
              },
            },
          ],
        },
        {
          id: "q-nr9-10",
          order: 10,
          question: {
            "pt-BR": "Conforme a diretriz de conformidade legal e ética do RSS3 Treinamentos (AGENTS.md), este certificado teórico online de NR-09 confere aptidão médica ocupacional ou substitui a obrigatoriedade da realização de dosimetrias de ruído, avaliações quantitativas de poeira e o ASO do colaborador?",
            "en": "Under RSS3 compliance and integrity bylaws (AGENTS.md), does this online theoretical NR-09 certificate grant medical fitness or waive mandatory field noise dosimetry, dust sampling, and ASO medical exams?",
            "es": "¿Según el AGENTS.md, este certificado teórico online de NR-09 otorga aptitud médica o exime de realizar dosimetrías de ruido, muestreos de polvo y el examen médico (ASO)?",
          },
          options: [
            {
              id: "q10-a",
              text: {
                "pt-BR": "SIM. A aprovação no portal online atesta que a saúde do colaborador é imune a ruído e dispensa exames de audiometria para sempre.",
                "en": "YES. Passing online coursework certifies the employee is immune to noise and waives audiometry forever.",
                "es": "SÍ. La aprobación online acredita inmunidad al ruido y exime de audiometrías para siempre.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Absurdo e ilegal. Nenhum treinamento EAD anula a necessidade de vigilância médica e dosimetrias periódicas.",
                "en": "Absurd and illegal. Online training never eliminates the legal duty of clinical surveillance.",
                "es": "Absurdo e ilegal. El EAD no anula la vigilancia médica ni los exámenes clínicos.",
              },
            },
            {
              id: "q10-b",
              text: {
                "pt-BR": "NÃO. Este certificado comprova unicamente a conclusão da fundamentação TEÓRICA sobre os critérios e metodologias da NR-09. Ele não substitui de forma alguma as avaliações de higiene ocupacional em campo (dosimetrias e coletas laboratoriais), os laudos técnicos de engenharia de segurança, nem a avaliação clínica médica com emissão do Atestado de Saúde Ocupacional (ASO) pelo médico do trabalho.",
                "en": "NO. This certificate certifies strictly theoretical regulatory grounding in NR-09 methodologies. It does NOT substitute on-site industrial hygiene sampling (dosimetries, lab analysis), safety engineering reports, or clinical medical evaluations resulting in an active Occupational Health Certificate (ASO).",
                "es": "NO. Este certificado avala únicamente la fundamentación TEÓRICA de la NR-09. No reemplaza las mediciones de higiene en planta (dosimetrías y análisis de laboratorio), los informes de ingeniería ni la evaluación médica del ASO por el médico del trabajo.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O item 3 e 5 do AGENTS.md estipulam com clareza a separação entre conteúdo teórico digital e a responsabilidade de monitoramento ambiental e clínico no mundo físico.",
                "en": "Correct! AGENTS.md Sections 3 & 5 mandate strict demarcation between digital theory and physical medical/hygiene compliance.",
                "es": "¡Correcto! El AGENTS.md exige diferenciar el aprendizaje teórico online de la evaluación médica y ambiental en campo.",
              },
            },
            {
              id: "q10-c",
              text: {
                "pt-BR": "Apenas para trabalhadores com menos de 2 anos de empresa, pois os veteranos não precisam de exames de saúde.",
                "en": "Only for workers with less than 2 years seniority, as veterans need no medical exams.",
                "es": "Solo para operarios novatos; los veteranos no necesitan exámenes.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O monitoramento da saúde é periódico e obrigatório para todos os colaboradores expostos, independentemente do tempo de casa.",
                "en": "Periodic medical surveillance is mandatory for all exposed workers regardless of tenure.",
                "es": "La vigilancia médica es obligatoria y periódica para todos los trabajadores expuestos.",
              },
            },
            {
              id: "q10-d",
              text: {
                "pt-BR": "Sim, desde que a empresa guarde o certificado impresso em pasta de couro preto na sala de RH.",
                "en": "Yes, provided the certificate is stored in a black leather binder in the HR room.",
                "es": "Sí, si la empresa guarda el certificado en una carpeta de cuero.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Pastas ou arquivos físicos não alteram a natureza jurídica e técnica de um certificado de treinamento teórico.",
                "en": "Binders cannot alter the legal regulatory nature of a theoretical training record.",
                "es": "El archivo de documentos no altera el marco regulatorio del certificado.",
              },
            },
          ],
        },
      ],
    },
  },
  {
    id: "c-nr10-seguranca-eletricidade",
    slug: "nr-10-seguranca-instalacoes-servicos-eletricidade",
    title: {
      "pt-BR": "NR-10: Segurança em Instalações e Serviços em Eletricidade e SEP",
      "en": "NR-10: Electrical Installations & Services Safety and Power Systems (SEP)",
      "es": "NR-10: Seguridad en Instalaciones y Servicios de Electricidad y SEP",
    },
    description: {
      "pt-BR": "Capacitação completa em NR-10 e Sistema Elétrico de Potência (SEP): riscos elétricos, arco elétrico, medidas de controle (desenergização e LOTO), barramentos, EPIs/EPCs dielétricos, combate a incêndio em painéis e primeiros socorros a vítimas de choque elétrico.",
      "en": "Comprehensive NR-10 and Power Electric System (SEP) safety training: shock hazards, arc flash, LOTO de-energization, dielectric PPE/EPC, electrical fire protection, and CPR first aid.",
      "es": "Capacitación en NR-10 y Sistema Eléctrico de Potencia: riesgos eléctricos, arco eléctrico, bloqueo LOTO, EPP dieléctrico y primeros auxilios.",
    },
    schoolId: "seguranca-epi",
    schoolName: {
      "pt-BR": "Segurança do Trabalho e Elétrica",
      "en": "Occupational & Electrical Safety",
      "es": "Seguridad Laboral y Eléctrica",
    },
    workloadHours: 40,
    level: "advanced",
    modality: "hybrid",
    isMandatory: true,
    mandatoryFor: ["Eletricista Industrial", "Eletrotécnico", "Instrumentista", "Operador de Hidrojato", "Mecânico Industrial", "Líder de Frente"],
    targetAudience: {
      "pt-BR": "Eletricistas, instrumentistas, montadores, operadores de hidrojateamento e trabalhadores da RSS3 que interagem direta ou indiretamente com instalações elétricas, subestações e painéis de força.",
      "en": "RSS3 electricians, instrument technicians, fitters, hydroblasters, and frontline leaders working near energized industrial systems.",
      "es": "Electricistas, técnicos y operarios que interactúan con instalaciones eléctricas industriales y subestaciones.",
    },
    modulesCount: 3,
    lessonsCount: 8,
    thumbnailGradient: "from-yellow-600 via-amber-700 to-slate-950",
    coverImage: "/images/courses/nr10.jpg",
    categories: ["nr-regulamentar", "conhecimento-operacional"],
    badgeCode: "NR-10",
    updatedAtDate: "2026-10-16",
    modules: [
      {
        id: "mod-nr10-1",
        order: 1,
        title: {
          "pt-BR": "Módulo 1: Fundamentos Normativos da NR-10 e Introdução ao Sistema Elétrico de Potência (SEP)",
          "en": "Module 1: NR-10 Regulatory Fundamentals & Intro to Power Systems (SEP)",
          "es": "Módulo 1: Fundamentos de la NR-10 e Introducción al SEP",
        },
        lessons: [
          {
            id: "les-nr10-1-1",
            order: 1,
            title: {
              "pt-BR": "NR 10 Curso Básico Completo EAD: Introdução e Objetivos da Norma",
              "en": "NR 10 Complete Basic Course: Introduction & Regulatory Scope",
              "es": "NR 10 Curso Básico Completo: Introducción y Alcance de la Norma",
            },
            durationMinutes: 20,
            contentType: "video",
            videoUrl: "aopJlygrhhk",
            contentDetail: {
              objective: {
                "pt-BR": "Compreender os objetivos da NR-10, o campo de aplicação em todas as fases de geração, transmissão, distribuição e consumo de eletricidade e a qualificação de trabalhadores (qualificado, habilitado, capacitado e autorizado).",
                "en": "Understand NR-10 scope, regulatory objectives across generation/distribution/consumption, and worker qualification levels.",
                "es": "Comprender los objetivos de la NR-10, alcance de aplicación y niveles de cualificación y autorización.",
              },
              introduction: {
                "pt-BR": "A Norma Regulamentadora nº 10 estabelece os requisitos e condições mínimas para a implementação de medidas de controle e sistemas preventivos, de forma a garantir a segurança e a saúde dos trabalhadores que, direta ou indiretamente, interajam em instalações elétricas e serviços com eletricidade.",
                "en": "NR-10 sets mandatory preventive safety measures to protect personnel interacting directly or indirectly with electrical infrastructure.",
                "es": "La NR-10 establece los requisitos mínimos para garantizar la seguridad en instalaciones y servicios con electricidad.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Campo de Aplicação e Qualificação Profissional",
                    "en": "Application Scope & Professional Qualification",
                    "es": "Campo de Aplicación y Calificación Profesional",
                  },
                  body: {
                    "pt-BR": "A NR-10 aplica-se às fases de geração, transmissão, distribuição e consumo, incluindo as etapas de projeto, construção, montagem, operação, manutenção das instalações elétricas e quaisquer trabalhos realizados nas suas proximidades.\n• Trabalhador Qualificado: Possui curso específico na área elétrica reconhecido pelo MEC;\n• Trabalhador Habilitado: É qualificado e possui registro no conselho de classe competente (ex: CREA / CRT);\n• Trabalhador Capacitado: Recebe treinamento sob orientação de profissional habilitado e trabalha sob responsabilidade deste;\n• Trabalhador Autorizado: É aquele qualificado ou capacitado e com anuência formal expressa da empresa (RSS3).",
                    "en": "Applies across all electrical phases. Defines Qualified, Accredited, Trained, and Authorized worker legal statuses.",
                    "es": "Aplica a generación, transmisión y consumo. Define trabajador cualificado, habilitado, capacitado y autorizado.",
                  },
                },
                {
                  title: {
                    "pt-BR": "Prontuário de Instalações Elétricas (PIE)",
                    "en": "Electrical Installation Records (PIE)",
                    "es": "Expediente de Instalaciones Eléctricas (PIE)",
                  },
                  body: {
                    "pt-BR": "Estabelecimentos com carga instalada superior a 75 kW devem obrigatoriamente constituir e manter atualizado o Prontuário de Instalações Elétricas (PIE), contendo diagramas unifilares atualizados, laudos de aterramento e para-raios (SPDA), procedimentos de trabalho e especificação dos EPIs e EPCs.",
                    "en": "Facilities exceeding 75 kW must maintain an updated electrical safety dossier (PIE) with one-line diagrams and inspection reports.",
                    "es": "Instalaciones con más de 75 kW deben mantener el expediente PIE con diagramas unifilares y puesta a tierra.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "A autorização para intervir em instalações elétricas é individual, formal e emitida exclusivamente pela empresa.",
                  "en": "Authorization to perform electrical work is individual, formal, and company-issued.",
                  "es": "La autorización para intervenir en instalaciones eléctricas es personal, formal y emitida por la empresa.",
                },
                {
                  "pt-BR": "A conclusão do curso teórico EAD integra a formação do colaborador, mas não substitui a prática presencial e a liberação formal pelo responsável técnico.",
                  "en": "Online theory provides essential knowledge but does not waive hands-on verification and formal technical clearance.",
                  "es": "La teoría online no sustituye la verificación práctica presencial y la autorización técnica.",
                },
              ],
            },
          },
          {
            id: "les-nr10-1-2",
            order: 2,
            title: {
              "pt-BR": "NR 10: Introdução ao Treinamento Complementar em Sistema Elétrico de Potência (SEP)",
              "en": "NR 10: Introduction to Complementary Training in Power Electric Systems (SEP)",
              "es": "NR 10: Introducción al Curso Complementario de Sistemas Eléctricos de Potencia (SEP)",
            },
            durationMinutes: 22,
            contentType: "video",
            videoUrl: "amiF2XCvbfU",
            contentDetail: {
              objective: {
                "pt-BR": "Compreender os requisitos específicos do treinamento complementar de Sistema Elétrico de Potência (SEP) para alta tensão e subestações industriais.",
                "en": "Understand complementary High Voltage Power System (SEP) safety requirements for substations and distribution lines.",
                "es": "Comprender los requisitos del curso complementario de SEP para alta tensión y subestaciones.",
              },
              introduction: {
                "pt-BR": "Os trabalhadores que intervêm em instalações elétricas integrantes do Sistema Elétrico de Potência (SEP) ou em suas proximidades (alta tensão acima de 1.000 V em corrente alternada) devem possuir treinamento complementar específico, com foco em técnicas de trabalho energizado e manobras em subestações.",
                "en": "Personnel working on or near High-Voltage Power Systems (>1,000V AC) must hold complementary SEP certification.",
                "es": "Los operarios que intervienen en alta tensión (>1.000 V) deben contar con capacitación complementaria de SEP.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "O que Caracteriza o SEP nas Plantas Industriais",
                    "en": "High Voltage Power Systems in Heavy Industry",
                    "es": "Características del SEP en Plantas Industriales",
                  },
                  body: {
                    "pt-BR": "Em grandes plantas industriais (como fábricas de celulose, siderúrgicas e petroquímicas), o SEP compreende as subestações de entrada (69 kV, 138 kV ou 230 kV), transformadores de potência, cubículos de média tensão (13,8 kV) e linhas aéreas de transmissão. A proximidade a essas estruturas exige procedimentos rigorosos de zona controlada e zona de risco.",
                    "en": "Covers primary substations (69kV - 230kV), medium-voltage switchgear (13.8kV), and plant power distribution.",
                    "es": "Abarca subestaciones de entrada, transformadores de potencia y celdas de media tensión (13,8 kV).",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "Trabalhos em alta tensão exigem Permissão de Trabalho (PT) individualizada e equipe de no mínimo dois trabalhadores autorizados.",
                  "en": "High-voltage tasks require formal Work Permits and a minimum crew of two authorized workers.",
                  "es": "Los trabajos en alta tensión exigen Permiso de Trabajo y un equipo mínimo de dos trabajadores autorizados.",
                },
              ],
            },
          },
        ],
      },
      {
        id: "mod-nr10-2",
        order: 2,
        title: {
          "pt-BR": "Módulo 2: Riscos Elétricos, Arco Voltaico, Proteção Coletiva e Desenergização (LOTO)",
          "en": "Module 2: Electrical Hazards, Arc Flash, Collective Protection & LOTO De-energization",
          "es": "Módulo 2: Riesgos Eléctricos, Arco Eléctrico, Protección Colectiva y Bloqueo LOTO",
        },
        lessons: [
          {
            id: "les-nr10-2-1",
            order: 1,
            title: {
              "pt-BR": "NR 10 Módulo 1: Riscos em Instalações e Serviços com Eletricidade — Choque Elétrico e Queimaduras",
              "en": "NR 10 Module 1: Hazards in Electrical Installations — Electric Shock & Burn Injuries",
              "es": "NR 10 Módulo 1: Riesgos en Instalaciones Eléctricas — Choque Eléctrico y Quemaduras",
            },
            durationMinutes: 25,
            contentType: "video",
            videoUrl: "cdlQAFkirk8",
            contentDetail: {
              objective: {
                "pt-BR": "Entender os mecanismos fisiológicos do choque elétrico (fibrilação ventricular, tetanização, queimaduras internas e parada respiratória) e a influência da intensidade da corrente e do trajeto pelo corpo.",
                "en": "Understand electric shock physiological mechanics (ventricular fibrillation, tetanization, internal burns) and pathway factors.",
                "es": "Comprender los efectos fisiológicos del choque eléctrico, fibrilación ventricular y quemaduras internas.",
              },
              introduction: {
                "pt-BR": "O choque elétrico ocorre quando o corpo humano se torna parte de um circuito condutor. A gravidade da lesão não depende apenas da tensão (voltagem), mas primordialmente da intensidade da corrente elétrica (miliamperes), da frequência e do tempo de contato.",
                "en": "Electric shock severity depends primarily on current magnitude (milliamperes), contact duration, and body pathway.",
                "es": "La gravedad del choque depende de la intensidad de la corriente (mA), tiempo de contacto y trayectoria en el cuerpo.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Limiares de Sensação e Perigo da Corrente Elétrica",
                    "en": "Electric Current Thresholds & Physiological Effects",
                    "es": "Umbrales de Percepción y Efectos de la Corriente",
                  },
                  body: {
                    "pt-BR": "• 1 mA a 5 mA: Limiar de percepção sensorial (formigamento leve);\n• 10 mA a 20 mA: Limiar de largar (tetanização muscular — o trabalhador não consegue soltar o condutor);\n• 25 mA a 75 mA: Parada respiratória e colapso circulatório;\n• 100 mA a 3 A: Fibrilação ventricular cardíaca irreversível em frações de segundo (morte súbita se não houver desfibrilador imediato);\n• Acima de 3 A: Parada cardíaca instantânea e queimaduras de terceiro grau nos órgãos vitais.",
                    "en": "1-5mA: perception; 10-20mA: muscle freezing; 25-75mA: respiratory paralysis; 100mA+: lethal ventricular fibrillation.",
                    "es": "1-5mA: percepción; 10-20mA: contracción muscular; 100mA+: fibrilación ventricular potencialmente mortal.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "Correntes a partir de 10 mA já podem impedir o colaborador de soltar um fio energizado por contração involuntária dos músculos.",
                  "en": "Currents above 10mA induce involuntary muscle contractions preventing release from conductors.",
                  "es": "Corrientes superiores a 10 mA provocan tetanización e impiden soltar el conductor.",
                },
              ],
            },
          },
          {
            id: "les-nr10-2-2",
            order: 2,
            title: {
              "pt-BR": "NR 10 Módulo 2: O Perigo Extremo do Arco Elétrico (Arc Flash), Radiação Térmica e Onda de Choque",
              "en": "NR 10 Module 2: The Extreme Hazard of Arc Flash, Thermal Radiation & Blast Waves",
              "es": "NR 10 Módulo 2: El Peligro Extremo del Arco Eléctrico, Radiación Térmica y Onda Expansiva",
            },
            durationMinutes: 25,
            contentType: "video",
            videoUrl: "fXuhUl9X7lE",
            contentDetail: {
              objective: {
                "pt-BR": "Compreender a física do arco elétrico, as temperaturas extremas atingidas (superiores a 19.000 °C), cálculo da energia incidente e a especificação de vestimentas de proteção contra arco (cal/cm²).",
                "en": "Understand arc flash physics, extreme temperatures (>19,000°C), incident energy calculation, and arc-rated clothing (cal/cm²).",
                "es": "Comprender la física del arco eléctrico, temperaturas extremas y ropa de protección ignífuga en cal/cm².",
              },
              introduction: {
                "pt-BR": "O arco elétrico é uma descarga luminosa e violenta que vaporiza instantaneamente condutores metálicos. Não é necessário tocar na fiação para ser ferido: a radiação térmica e a onda de pressão (arc blast) podem causar queimaduras fatais a metros de distância.",
                "en": "An arc flash vaporizes copper instantaneously. Physical contact is not required; radiant heat causes severe burns meters away.",
                "es": "El arco eléctrico vaporiza metales al instante. La radiación térmica causa quemaduras fatales sin necesidad de contacto.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Efeitos do Arco Elétrico e Vestimentas ATPV",
                    "en": "Arc Flash Effects & ATPV Clothing",
                    "es": "Efectos del Arco y Ropa con Clasificación ATPV",
                  },
                  body: {
                    "pt-BR": "O arco elétrico atinge até 20.000 °C (quatro vezes a temperatura da superfície do Sol), liberando:\n• Luz ofuscante capaz de causar cegueira imediata;\n• Onda de choque mecânico que projeta estilhaços e trabalhadores contra estruturas;\n• Gotículas de cobre fundido a alta velocidade;\n• Gases tóxicos gerados pela queima de isolamentos.\nTodo trabalho próximo a barramentos deve utilizar vestimentas de algodão tratado anti-chama com ATPV (Arc Thermal Performance Value) adequado à energia incidente do painel.",
                    "en": "Reaches 20,000°C generating molten shrapnel, pressure blasts, and blinding light. Flame-resistant ATPV apparel is mandatory.",
                    "es": "Alcanza hasta 20.000 °C proyectando metralla de cobre fundido. Es obligatorio el uso de ropa ignífuga con valor ATPV.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "Nunca use roupas de tecidos sintéticos comuns (poliéster, nylon) em áreas elétricas: elas derretem e aderem à pele humana em caso de arco.",
                  "en": "Never wear ordinary synthetic fabrics (nylon, polyester) near electrical panels; they melt onto skin.",
                  "es": "Nunca use telas sintéticas cerca de tableros eléctricos: se derriten sobre la piel en caso de arco.",
                },
              ],
            },
          },
          {
            id: "les-nr10-2-3",
            order: 3,
            title: {
              "pt-BR": "NR 10 Módulo 3: Medidas de Controle do Risco Elétrico — Desenergização Segura em 6 Passos e LOTO",
              "en": "NR 10 Module 3: Electrical Hazard Controls — 6-Step De-energization & LOTO Lockout",
              "es": "NR 10 Módulo 3: Medidas de Control — Desenergización Segura en 6 Pasos y Bloqueo LOTO",
            },
            durationMinutes: 28,
            contentType: "video",
            videoUrl: "WgozQQfe0Pc",
            contentDetail: {
              objective: {
                "pt-BR": "Dominar o protocolo rigoroso dos 6 passos da desenergização elétrica da NR-10 e a aplicação de bloqueio e etiquetagem (Lockout & Tagout - LOTO).",
                "en": "Master NR-10 mandatory 6-step de-energization sequence and Lockout & Tagout (LOTO) procedures.",
                "es": "Dominar los 6 pasos obligatorios de desenergización según la NR-10 y el bloqueo LOTO.",
              },
              introduction: {
                "pt-BR": "Somente serão consideradas desenergizadas as instalações elétricas liberadas para trabalho mediante os procedimentos apropriados e obedecida a sequência obrigatória de seis etapas da NR-10.",
                "en": "Installations are only legally considered de-energized after strict compliance with the sequential six-step protocol.",
                "es": "Una instalación solo se considera desenergizada tras cumplir estrictamente los seis pasos normativos.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Os 6 Passos Canônicos da Desenergização (NR-10 item 10.5.1)",
                    "en": "The 6 Mandatory Steps of De-energization",
                    "es": "Los 6 Pasos Obligatorios de Desenergización",
                  },
                  body: {
                    "pt-BR": "1. Seccionamento: Abertura física dos circuitos (disjuntores e chaves seccionadoras);\n2. Impedimento de reenergização: Bloqueio físico por cadeados, garras de travamento e sinalização LOTO;\n3. Constatação da ausência de tensão: Teste com detector de tensão calibrado e testado antes e depois da medição;\n4. Instalação de aterramento temporário com equipotencialização dos condutores dos circuitos;\n5. Proteção dos elementos energizados existentes na zona controlada (mantas e isoladores);\n6. Instalação da sinalização de impedimento de reenergização (cartões e etiquetas invioláveis).",
                    "en": "1. Disconnect; 2. Lockout; 3. Test for zero voltage; 4. Temporary grounding & equipotential bonding; 5. Barrier energized parts; 6. Tagout signage.",
                    "es": "1. Seccionamiento; 2. Bloqueo LOTO; 3. Comprobación de tensión nula; 4. Puesta a tierra temporal; 5. Protección de partes activas; 6. Señalización.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "Instalação sem aterramento temporário instalado NÃO é considerada desenergizada perante a lei.",
                  "en": "An installation lacking temporary grounding is legally considered energized.",
                  "es": "Una instalación sin puesta a tierra temporal instalada se considera energizada ante la ley.",
                },
              ],
            },
          },
        ],
      },
      {
        id: "mod-nr10-3",
        order: 3,
        title: {
          "pt-BR": "Módulo 3: Equipamentos de Proteção, Procedimentos de Trabalho, Incêndios e Primeiros Socorros",
          "en": "Module 3: Protective Equipment, Safe Work Procedures, Fire Safety & First Aid",
          "es": "Módulo 3: Equipos de Protección, Procedimientos, Incendios y Primeros Auxilios",
        },
        lessons: [
          {
            id: "les-nr10-3-1",
            order: 1,
            title: {
              "pt-BR": "NR 10 Módulo 4: Equipamentos de Proteção Coletiva (EPC) e Individual (EPI) Dielétricos",
              "en": "NR 10 Module 4: Collective and Personal Dielectric Protective Equipment",
              "es": "NR 10 Módulo 4: Equipos de Protección Colectiva e Individual Dieléctricos",
            },
            durationMinutes: 25,
            contentType: "video",
            videoUrl: "Rv2Ad2gHTcE",
            contentDetail: {
              objective: {
                "pt-BR": "Especificar e inspecionar mantas isolantes, tapetes dielétricos, luvas de borracha isolante com sobreluva de vaqueta, varas de manobra e calçados sem componentes metálicos.",
                "en": "Specify and inspect dielectric blankets, insulating gloves with leather protectors, hot sticks, and metal-free boots.",
                "es": "Especificar e inspeccionar mantas aislantes, guantes dieléctricos con sobreguante y pértigas de maniobra.",
              },
              introduction: {
                "pt-BR": "Os equipamentos de proteção para eletricidade devem possuir rigidez dielétrica certificada e controle rigoroso de ensaios laboratoriais periódicos.",
                "en": "Dielectric protective gear requires verified electrical insulation ratings and periodic laboratory testing.",
                "es": "Los equipos de protección para electricidad deben contar con rigidez dieléctrica certificada y pruebas periódicas.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Inspeção e Classes das Luvas Isolantes de Borracha",
                    "en": "Insulating Glove Classes & Daily Pneumatic Inspection",
                    "es": "Clases de Guantes Aislantes e Inspección Neumática",
                  },
                  body: {
                    "pt-BR": "As luvas isolantes são classificadas por tensão de trabalho (Classe 00 a Classe 4).\nAntes de cada uso, é obrigatório realizar o teste pneumático manual (inflar a luva e torcer o punho para verificar furos ou microfissuras). Luvas com vazamento de ar devem ser descartadas imediatamente.",
                    "en": "Glove classes range from Class 00 to Class 4. Daily air tests (inflating to detect micro-punctures) are mandatory.",
                    "es": "Los guantes aislantes van de Clase 00 a Clase 4. El inflado manual diario para detectar pinchaduras es obligatorio.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "Luvas isolantes de borracha devem ser sempre utilizadas com sobreluva de vaqueta para proteção contra perfurações mecânicas.",
                  "en": "Rubber insulating gloves must always be worn beneath leather protector gloves against punctures.",
                  "es": "Los guantes dieléctricos deben usarse siempre con sobreguantes de cuero protector.",
                },
              ],
            },
          },
          {
            id: "les-nr10-3-2",
            order: 2,
            title: {
              "pt-BR": "NR 10 Módulo 5: Documentação, Procedimentos de Trabalho e Trabalho em Equipe",
              "en": "NR 10 Module 5: Safety Documentation, Work Procedures & Teamwork",
              "es": "NR 10 Módulo 5: Documentación, Procedimientos de Trabajo y Trabajo en Equipo",
            },
            durationMinutes: 22,
            contentType: "video",
            videoUrl: "qUqVFh571As",
            contentDetail: {
              objective: {
                "pt-BR": "Conhecer as exigências documentais da NR-10: Ordens de Serviço, Análise Preliminar de Risco (APR), Permissão de Trabalho (PT) e comunicação operacional.",
                "en": "Understand NR-10 documentation mandates: Safe Operating Procedures, JHA risk analysis, Work Permits, and crew coordination.",
                "es": "Conocer las exigencias documentales: Órdenes de Servicio, APR y Permisos de Trabajo en equipo.",
              },
              introduction: {
                "pt-BR": "Nenhuma intervenção elétrica em plantas industriais pode ser realizada de improviso ou sem procedimento operacional escrito e aprovado pela engenharia e segurança do trabalho.",
                "en": "No electrical work may be performed improvised or without approved standard operating procedures.",
                "es": "Ningún trabajo eléctrico puede realizarse sin procedimiento operativo formal y análisis de riesgos.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Regra de Ouro do Trabalho em Dupla",
                    "en": "The Two-Worker Safety Rule",
                    "es": "La Regla de Oro del Trabajo en Pareja",
                  },
                  body: {
                    "pt-BR": "Os serviços executados em instalações elétricas energizadas em alta tensão, bem como aqueles realizados no Sistema Elétrico de Potência (SEP), não podem ser realizados individualmente. É obrigatório o trabalho em equipe de no mínimo dois colaboradores capacitados e autorizados, equipados com comunicação bidirecional.",
                    "en": "High voltage and power system tasks must never be performed alone; a minimum crew of two trained workers is mandatory.",
                    "es": "Las tareas en alta tensión no pueden realizarse de forma individual; se requiere como mínimo una pareja capacitada.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "O segundo trabalhador atua como vigia ativo, pronto para desenergizar a fonte ou iniciar o resgate em caso de emergência.",
                  "en": "The second worker acts as an active safety observer prepared to dump power and execute rescue.",
                  "es": "El segundo trabajador actúa como vigía activo para desenergizar e iniciar el rescate si ocurre un accidente.",
                },
              ],
            },
          },
          {
            id: "les-nr10-3-3",
            order: 3,
            title: {
              "pt-BR": "NR 10 Módulo 6: Proteção e Combate a Incêndios Elétricos e Primeiros Socorros / RCP",
              "en": "NR 10 Module 6: Electrical Fire Fighting & First Aid / CPR Protocols",
              "es": "NR 10 Módulo 6: Protección Contra Incendios Eléctricos y Primeros Auxilios / RCP",
            },
            durationMinutes: 28,
            contentType: "video",
            videoUrl: "QLCz4OKFKhU",
            contentDetail: {
              objective: {
                "pt-BR": "Dominar as técnicas de combate a incêndios de Classe C (equipamentos elétricos energizados) com extintores de CO2 e Pó Químico, e o protocolo de socorro e Reanimação Cardiopulmonar (RCP) para vítimas de choque elétrico.",
                "en": "Master Class C electrical fire suppression (CO2 & Dry Chemical) and CPR first aid response for shock victims.",
                "es": "Dominar el combate de incendios Clase C (CO2 y Polvo) y reanimación cardiopulmonar (RCP) en víctimas de descarga.",
              },
              introduction: {
                "pt-BR": "Em caso de acidente elétrico, cada segundo é decisivo. A desenergização imediata da fonte e a aplicação precoce da massagem cardíaca garantem a sobrevivência da vítima até a chegada do resgate médico avançado.",
                "en": "In electrical incidents, immediate de-energization and rapid chest compressions preserve life until paramedics arrive.",
                "es": "La desenergización inmediata y la reanimación cardiopulmonar rápida son determinantes para salvar la vida.",
              },
              sections: [
                {
                  title: {
                    "pt-BR": "Combate a Incêndios em Equipamentos Energizados (Classe C)",
                    "en": "Class C Electrical Fire Suppression",
                    "es": "Combate de Incendios en Equipos Energizados (Clase C)",
                  },
                  body: {
                    "pt-BR": "• NUNCA USE ÁGUA ou extintores de espuma em painéis elétricos energizados (risco fatal de condução elétrica pelo jato);\n• Use extintores de Gás Carbônico (CO2): excelente para painéis eletrônicos, atua por abafamento e resfriamento sem deixar resíduos condutores;\n• Use extintores de Pó Químico Seco (PQS - pó BC ou ABC): eficiente para extinguir chamas rápidas, mas requer limpeza posterior dos contatos elétricos.",
                    "en": "NEVER use water or foam on live electrical gear. Deploy Carbon Dioxide (CO2) or dry chemical agents.",
                    "es": "NUNCA use agua o espuma en tableros energizados. Use extintores de CO2 o polvo químico seco.",
                  },
                },
                {
                  title: {
                    "pt-BR": "Socorro a Vítimas de Choque Elétrico e RCP",
                    "en": "Electrical Shock Rescue & CPR Protocol",
                    "es": "Rescate de Víctimas de Choque Eléctrico y RCP",
                  },
                  body: {
                    "pt-BR": "1. Primeiro corte a corrente elétrica ou use bastão isolante para afastar o condutor (NUNCA toque na vítima ainda energizada);\n2. Verifique a responsividade e a respiração;\n3. Se a vítima estiver inconsciente e sem respirar: inicie imediatamente compressões torácicas contínuas (100 a 120 compressões por minuto no centro do peito);\n4. Solicite o Desfibrilador Externo Automático (DEA) imediatamente para reverter eventual fibrilação ventricular.",
                    "en": "1. Cut power or use hot stick to detach victim; 2. Check breathing; 3. Perform CPR compressions (100-120/min); 4. Deploy AED immediately.",
                    "es": "1. Corte la energía o use pértiga aislante; 2. Inicie compresiones torácicas (100-120/min); 3. Use desfibrilador DEA.",
                  },
                },
              ],
              summaryPoints: [
                {
                  "pt-BR": "Nunca toque diretamente em uma vítima presa ao choque elétrico sem antes desligar o disjuntor ou afastar o fio com material isolante aprovado.",
                  "en": "Never touch an energized shock victim without first cutting power or using certified insulating tools.",
                  "es": "Nunca toque a la víctima sin cortar la corriente o usar una pértiga aislante.",
                },
              ],
            },
          },
        ],
      },
    ],
finalAssessment: {
      id: "exam-nr10-eletrica",
      order: 1,
      title: {
        "pt-BR": "Avaliação Formal Teórica de NR-10 e Segurança em Eletricidade e SEP",
        "en": "Formal Theoretical Assessment: NR-10 Electrical Safety & Power Systems (SEP)",
        "es": "Evaluación Teórica Formal: NR-10 Seguridad Eléctrica y SEP",
      },
      description: {
        "pt-BR": "Exame técnico e regulamentar de NR-10: desenergização em 6 etapas, arco elétrico, limites de zonas (livre, controlada e de risco), qualificação/habilitação/autorização, prontuário de instalações elétricas (PIE), LOTO e proteção contra choques.",
        "en": "Technical regulatory exam on NR-10: 6-step de-energization sequence, arc flash, boundary zones, qualification/authorization, electrical files (PIE), LOTO, and shock hazard controls.",
        "es": "Examen técnico y normativo de NR-10: desenergización en 6 pasos, arco eléctrico, delimitación de zonas, habilitación, prontuario PIE, LOTO y riesgos eléctricos.",
      },
      scope: "course",
      estimatedMinutes: 50,
      questionsCount: 10,
      passingScorePercent: 70,
      maxAttempts: 3,
      isAvailable: true,
      availabilityNotice: {
        "pt-BR": "Avaliação teórica formal liberada após a conclusão dos módulos de NR-10. Exige 70% de aproveitamento.",
        "en": "Formal theoretical assessment unlocked upon completing NR-10 modules. Requires 70% passing score.",
        "es": "Evaluación teórica formal habilitada tras completar los módulos de NR-10. Requiere 70% mínimo.",
      },
      questions: [
        {
          id: "q-nr10-1",
          order: 1,
          question: {
            "pt-BR": "De acordo com o item 10.5 da NR-10, somente são consideradas desenergizadas as instalações elétricas liberadas para trabalho mediante os procedimentos apropriados, obedecida uma sequência específica de 6 etapas. Qual é a ordem cronológica estrita exigida por norma?",
            "en": "According to item 10.5 of NR-10, electrical installations are only considered de-energized if liberated following a strict 6-step procedure. What is the mandatory chronological sequence?",
            "es": "Según el ítem 10.5 de la NR-10, solo se consideran desenergizadas las instalaciones liberadas mediante un procedimiento estricto en 6 pasos. ¿Cuál es el orden cronológico exigido?",
          },
          options: [
            {
              id: "q1-a",
              text: {
                "pt-BR": "1º Seccionamento; 2º Impedimento de reenergização (LOTO); 3º Constatação da ausência de tensão; 4º Instalação de aterramento temporário com equipotencialização dos condutores; 5º Proteção dos elementos energizados existentes na zona controlada; 6º Instalação da sinalização de impedimento.",
                "en": "1st Disconnection; 2nd Re-energization lockout (LOTO); 3rd Verification of voltage absence; 4th Temporary grounding and bonding installation; 5th Protection of exposed energized parts in controlled zone; 6th Lockout signage and barriers installation.",
                "es": "1º Seccionamiento; 2º Bloqueo de reenergización (LOTO); 3º Constatación de ausencia de tensión; 4º Instalación de puesta a tierra temporal y equipotencialización; 5º Protección de elementos energizados en zona controlada; 6º Señalización de impedimento.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O item 10.5.1 da NR-10 estipula exatamente esses 6 passos em sequência. Inverter etapas (ex: aterrar antes de testar a ausência de tensão) pode provocar arcos catastróficos e explosão na frente de trabalho.",
                "en": "Correct! Item 10.5.1 of NR-10 dictates this exact 6-step progression. Deviating (e.g. grounding before verifying absence of voltage) causes violent arc explosions.",
                "es": "¡Correcto! El ítem 10.5.1 de la NR-10 establece rigurosamente estos 6 pasos. Invertir la secuencia ocasiona arcos catastróficos y lesiones graves.",
              },
            },
            {
              id: "q1-b",
              text: {
                "pt-BR": "1º Aterramento temporário imediato; 2º Seccionamento dos cabos; 3º Teste visual sem multímetro; 4º Colocação de cadeado; 5º Bloqueio de painel; 6º Liberação verbal sem crachá.",
                "en": "1st Immediate temporary grounding; 2nd Cable severance; 3rd Visual inspection without multimeter; 4th Padlock placement; 5th Panel blockade; 6th Verbal liberation without tags.",
                "es": "1º Puesta a tierra inmediata; 2nd Corte de cables; 3º Revisión visual; 4º Colocación de candado; 5º Bloqueo de tablero; 6º Liberación verbal sin etiquetas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Aterrar um condutor energizado sem seccionar e sem verificar ausência de tensão provoca curto-circuito trifásico direto à terra com explosão violenta por arco elétrico.",
                "en": "Applying a ground clamp to an energized line causes an immediate phase-to-ground blast and lethal arc flash.",
                "es": "Conectar tierra a una línea energizada provoca un cortocircuito trifásico y una explosión letal por arco eléctrico.",
              },
            },
            {
              id: "q1-c",
              text: {
                "pt-BR": "1º Desligamento pelo botão de emergência da máquina; 2º Instalação de fita zebrada; 3º Aferição de corrente com alicate; 4º Fechamento de portas do painel; 5º Início do trabalho mecânico; 6º Registro no diário.",
                "en": "1st Pressing machine emergency stop; 2nd Caution tape; 3rd Current clamp measurement; 4th Closing doors; 5th Mechanical work; 6th Daily log entry.",
                "es": "1º Pulsar parada de emergencia; 2º Cinta de precaución; 3º Pinza amperimétrica; 4º Cerrar puertas; 5º Trabajo mecánico; 6º Registro diario.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Botão de emergência atua no circuito de comando (baixo nível lógico) e não garante seccionamento físico visível da força motriz com bloqueio mecânico.",
                "en": "An E-stop switch controls low-voltage PLC logic and never guarantees physical physical isolation of primary power circuits.",
                "es": "El pulsador de emergencia solo interrumpe el mando y no garantiza aislamiento físico ni corte visible de energía.",
              },
            },
            {
              id: "q1-d",
              text: {
                "pt-BR": "1º Bloqueio do cadeado no disjuntor geral; 2º Aterramento permanente; 3º Remoção dos fusíveis com alicate universal comum; 4º Uso de luva de vaqueta sem isolante; 5º Fechamento do cubículo; 6º Religamento de teste.",
                "en": "1st Padlocking main breaker; 2nd Permanent grounding; 3rd Fuse removal with standard pliers; 4th Leather gloves without dielectric insulation; 5th Closing cubicle; 6th Test reclosure.",
                "es": "1º Bloqueo con candado; 2º Tierra permanente; 3º Extracción de fusibles con pinzas comunes; 4º Guantes de cuero sin aislamiento; 5º Cerrar cubículo; 6º Rearme de prueba.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Extrair fusíveis com alicate comum ou manusear condutores sem luva isolante de borracha aprovada com ensaio dielétrico vigente viola as regras básicas de segurança elétrica.",
                "en": "Handling fuses without rated pullers and dielectric rubber gloves tested per ASTM/NBR standards causes fatal electric shocks.",
                "es": "Extraer fusibles sin pértiga y sin guantes dieléctricos ensayados provoca descargas letales y arcos severos.",
              },
            },
          ],
        },
        {
          id: "q-nr10-2",
          order: 2,
          question: {
            "pt-BR": "Em relação à delimitação de zonas em instalações elétricas energizadas (Anexo II da NR-10), qual é a definição exata das zonas de risco, controlada e livre ao redor de um condutor energizado?",
            "en": "Regarding zone boundaries around energized electrical conductors (Annex II of NR-10), what is the exact regulatory definition of Risk, Controlled, and Free Zones?",
            "es": "¿En cuanto a la delimitación de zonas en instalaciones eléctricas energizadas (Anexo II de la NR-10), cuál es la definición exacta de zona de riesgo, controlada y libre?",
          },
          options: [
            {
              id: "q2-a",
              text: {
                "pt-BR": "A Zona Livre é qualquer área onde haja placas de aviso; a Zona Controlada é restrita apenas a engenheiros civis; e a Zona de Risco só existe em linhas de transmissão aéreas acima de 230 kV.",
                "en": "The Free Zone is any area with warning signs; Controlled Zone is restricted only to civil engineers; and Risk Zone exists only in 230 kV transmission lines.",
                "es": "La Zona Libre es cualquier área con letreros; la Zona Controlada es exclusiva de ingenieros civiles; y la Zona de Riesgo solo existe por encima de 230 kV.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Definição incorreta. As zonas aplicam-se a quaisquer níveis de tensão a partir de condutores nus acessíveis, baseadas em raios geométricos normatizados.",
                "en": "Incorrect definition. Zones apply across all voltage levels based on standardized radial dimensions from energized parts.",
                "es": "Definición errónea. Las zonas aplican a todos los niveles de tensión según radios normados.",
              },
            },
            {
              id: "q2-b",
              text: {
                "pt-BR": "Zona de Risco: entorno de parte condutora energizada, não segregada, com dimensões que exigem aproximação apenas com técnicas e instrumentos apropriados ao trabalho sob tensão (restrita a profissionais autorizados); Zona Controlada: entorno da de risco, com acesso restrito a trabalhadores autorizados; Zona Livre: todo o espaço exterior à zona controlada.",
                "en": "Risk Zone: immediate envelope around uninsulated energized conductor accessible only via energized-work techniques by authorized personnel; Controlled Zone: envelope surrounding risk zone accessible only by authorized personnel; Free Zone: outer space beyond controlled boundary.",
                "es": "Zona de Riesgo: entorno de parte conductora energizada accesible solo con técnicas de trabajo con tensión por personal autorizado; Zona Controlada: entorno de la de riesgo de acceso restringido; Zona Libre: espacio exterior a la zona controlada.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O Anexo II define Rc (Raio de controle) e Rr (Raio de risco). Entre a peça condutora e Rr está a Zona de Risco; entre Rr e Rc está a Zona Controlada; além de Rc é a Zona Livre.",
                "en": "Correct! Annex II establishes radius Rr (risk) and Rc (controlled). Work inside Rr is technically treated as energized work requiring special PPE and procedures.",
                "es": "¡Correcto! El Anexo II define Rr (radio de riesgo) y Rc (radio controlado). El espacio entre el conductor y Rr es Zona de Riesgo; entre Rr y Rc es Zona Controlada.",
              },
            },
            {
              id: "q2-c",
              text: {
                "pt-BR": "Zona de Risco é o interior da sala de comando; Zona Controlada é a área externa da subestação; e Zona Livre é a sala onde ficam os transformadores a óleo.",
                "en": "Risk Zone is inside the control room; Controlled Zone is outside the substation; and Free Zone is inside oil-filled transformer bays.",
                "es": "Zona de Riesgo es la sala de control; Zona Controlada es el patio exterior; y Zona Libre es el cubículo de transformadores.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Absurdo. Transformadores e barramentos de alta potência contêm as zonas de maior risco e gravidade de choque e arco elétrico.",
                "en": "Dangerous error. High-voltage transformers represent high-risk boundaries requiring strict clearances.",
                "es": "Falso. Los transformadores y barras contienen las zonas de mayor riesgo por alta tensión.",
              },
            },
            {
              id: "q2-d",
              text: {
                "pt-BR": "Todas as zonas possuem raio fixo invariável de 3 metros de distância, independentemente de a linha operar em 220 V, 13,8 kV ou 500 kV.",
                "en": "All boundary zones have a fixed, unvarying 3-meter radius regardless of whether the line operates at 220 V, 13.8 kV, or 500 kV.",
                "es": "Todas las zonas tienen un radio fijo invariable de 3 metros, sin importar si opera a 220 V o 500 kV.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O raio das zonas de risco e controlada varia diretamente em função da classe de tensão nominal da instalação, conforme a tabela do Anexo II da NR-10.",
                "en": "Zone dimensions scale proportionally with nominal voltage according to Annex II tables of NR-10.",
                "es": "Las distancias de las zonas varían en función directa de la tensión nominal de la instalación.",
              },
            },
          ],
        },
        {
          id: "q-nr10-3",
          order: 3,
          question: {
            "pt-BR": "A NR-10 estabelece distinções fundamentais entre trabalhador QUALIFICADO, HABILITADO e AUTORIZADO. Qual das alternativas reflete com exatidão essas definições normativas (itens 10.8.1, 10.8.2 e 10.8.4)?",
            "en": "NR-10 differentiates between QUALIFIED, HABILITATED (Licensed), and AUTHORIZED workers. Which statement accurately reflects these definitions?",
            "es": "¿La NR-10 distingue entre trabajador CUALIFICADO, HABILITADO y AUTORIZADO. ¿Cuál opción refleja con exactitud estas definiciones normativas?",
          },
          options: [
            {
              id: "q3-a",
              text: {
                "pt-BR": "Qualificado é quem concluiu curso específico na área elétrica reconhecido pelo MEC; Habilitado é o profissional qualificado com registro no competente conselho de classe (CREA/CFT); Autorizado é o qualificado ou habilitado e os capacitados com anuência formal da empresa.",
                "en": "Qualified completed an accredited electrical course; Licensed (Habilitado) is qualified with active professional council registry (CREA/CFT); Authorized is qualified/licensed/trained worker granted formal written company authorization.",
                "es": "Cualificado concluyó curso técnico en electricidad avalado; Habilitado es cualificado registrado en colegio profesional (CREA/CFT); Autorizado es quien cuenta con anuencia formal por escrito de la empresa.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Essas são as definições estritas dos itens 10.8.1 a 10.8.4. Um engenheiro ou técnico registrado no conselho (habilitado) só pode intervir nas instalações da empresa se for formalmente AUTORIZADO por ela.",
                "en": "Correct! These are the strict definitions of items 10.8.1 to 10.8.4. Even a licensed engineer cannot work on company assets without formal corporate authorization.",
                "es": "¡Correcto! Artículos 10.8.1 al 10.8.4. Incluso un técnico o ingeniero colegiado solo puede intervenir si la empresa emite autorización formal escrita.",
              },
            },
            {
              id: "q3-b",
              text: {
                "pt-BR": "Qualificado é quem assistiu a um vídeo de 15 minutos; Habilitado é qualquer trabalhador com CNH categoria B; Autorizado é o trabalhador que assinou a lista de presença.",
                "en": "Qualified watched a 15-minute video; Licensed is any driver's license holder; Authorized signed the attendance sheet.",
                "es": "Cualificado vio un video breve; Habilitado tiene licencia de conducir; Autorizado firmó asistencia.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto. A qualificação exige curso formal do sistema oficial de ensino (MEC), e a habilitação exige registro no conselho profissional.",
                "en": "Incorrect. Qualification requires an accredited academic curriculum, and licensing requires official board registration.",
                "es": "Incorrecto. Exige formación técnica reglada y colegiatura profesional.",
              },
            },
            {
              id: "q3-c",
              text: {
                "pt-BR": "Trabalhador Autorizado e Trabalhador Qualificado são termos idênticos e dispensam qualquer documento formal ou registro emitido pela empresa.",
                "en": "Authorized Worker and Qualified Worker are identical terms requiring no formal corporate documentation or records.",
                "es": "Trabajador Autorizado y Cualificado son términos sinónimos y no requieren ningún documento formal de la empresa.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A autorização é um ato administrativo formal e individual da empresa, consignado no sistema de registro de empregados e no crachá de identificação.",
                "en": "Authorization is an explicit corporate administrative decree documented in employee files and identification badges.",
                "es": "La autorización es un acto formal y nominativo de la empresa registrado en el expediente del trabajador.",
              },
            },
            {
              id: "q3-d",
              text: {
                "pt-BR": "Qualquer colaborador contratado no setor industrial torna-se automaticamente Habilitado após 30 dias de experiência em fábrica.",
                "en": "Any industrial worker automatically becomes Licensed after 30 days of factory on-the-job experience.",
                "es": "Cualquier operario se vuelve Habilitado automáticamente tras 30 días de trabajo en la fábrica.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Habilitação profissional decorre de diploma legal reconhecido pelo Ministério da Educação e registro profissional ativo no conselho regional competente.",
                "en": "Licensing stems from legal diplomas recognized by the Ministry of Education and active professional engineering board registration.",
                "es": "La habilitación proviene de títulos oficiales reconocidos y registro en colegios de ingeniería o técnicos.",
              },
            },
          ],
        },
        {
          id: "q-nr10-4",
          order: 4,
          question: {
            "pt-BR": "Durante manobras em cubículos de média tensão (13,8 kV) e disjuntores de entrada de fábrica, qual é o fenômeno térmico-dinâmico mais destrutivo que exige cálculo de Energia Incidente (cal/cm²) e vestimentas de proteção com ATPV compatível?",
            "en": "During switching operations in 13.8 kV medium-voltage switchgear, what thermal-dynamic phenomenon dictates incident energy (cal/cm²) calculations and ATPV-rated arc flash PPE?",
            "es": "Durante maniobras en celdas de media tensión (13,8 kV), ¿qué fenómeno térmico exige calcular la Energía Incidente (cal/cm²) y usar ropa con ATPV adecuado?",
          },
          options: [
            {
              id: "q4-a",
              text: {
                "pt-BR": "Superaquecimento gradual por resistência de contato (efeito Joule simples sem formação de plasma condutor).",
                "en": "Gradual ohmic overheating from contact resistance (simple Joule effect without plasma formation).",
                "es": "Sobrecalentamiento gradual por resistencia de contacto sin ionización del aire.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O efeito Joule gradual aquece conexões, mas não constitui a explosão violenta de arco elétrico que projeta plasma e estilhaços.",
                "en": "Ohmic heating warms joints but does not cause explosive plasma arc discharge.",
                "es": "El efecto Joule calienta terminales pero no constituye la explosión violenta de plasma de un arco.",
              },
            },
            {
              id: "q4-b",
              text: {
                "pt-BR": "Descarga de corrente parasita induzida por campos magnéticos de baixa intensidade em carcaças plásticas.",
                "en": "Eddy current discharges induced by low-intensity magnetic fields in plastic enclosures.",
                "es": "Descargas de corrientes parásitas por campos magnéticos en gabinetes plásticos.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Correntes parasitas em plásticos não existem e não explicam a liberação maciça de energia térmica e ondas de choque.",
                "en": "Plastic insulators do not harbor eddy currents producing massive arc blast energy.",
                "es": "Los plásticos no conducen corrientes parásitas que generen explosiones de arco.",
              },
            },
            {
              id: "q4-c",
              text: {
                "pt-BR": "Arco Elétrico (Arc Flash / Arc Blast): ionização abrupta do ar que cria canal condutor de plasma atingindo temperaturas de até 20.000 °C, expansão volumétrica de vapor de cobre em 67.000 vezes, radiação térmica intensa e onda de sobrepressão.",
                "en": "Arc Flash / Arc Blast: rapid air ionization forming a conductive plasma channel reaching temperatures up to 20,000 °C, copper volumetric expansion of 67,000 times, intense thermal radiation, and explosive blast overpressure.",
                "es": "Arco Eléctrico (Arc Flash / Blast): ionización abrupta del aire que genera plasma a temperaturas de hasta 20.000 °C, expansión volumétrica de cobre en 67.000 veces, radiación térmica extrema y onda de choque explosiva.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O arco elétrico libera energia radiante colossal em milissegundos. Por isso, a NR-10 e a NFPA 70E exigem cálculo da energia incidente para determinar a categoria de risco (ATPV do vestuário e capuz balaclava com viseira).",
                "en": "Correct! Arc flash releases massive radiant energy. NR-10 and IEEE 1584 / NFPA 70E require incident energy calculations to specify ATPV-rated arc protective gear.",
                "es": "¡Correcto! El arco eléctrico alcanza temperaturas de hasta 20.000 °C y vaporiza cobre instantáneamente. Se exige ropa con valor ATPV adecuado a la energía incidente.",
              },
            },
            {
              id: "q4-d",
              text: {
                "pt-BR": "Queda de tensão decorrente de partida simultânea de motores assíncronos trifásicos em gaiola de esquilo.",
                "en": "Voltage sag caused by simultaneous across-the-line starting of squirrel cage induction motors.",
                "es": "Caída de tensión provocada por el arranque simultáneo de motores de inducción.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Queda de tensão é um distúrbio de qualidade de energia elétrica, não um risco de explosão térmica letal.",
                "en": "Voltage dip is a power quality transient, not a lethal thermal blast hazard.",
                "es": "La caída de tensión es un disturbio de calidad de energía, no un evento térmico destructivo.",
              },
            },
          ],
        },
        {
          id: "q-nr10-5",
          order: 5,
          question: {
            "pt-BR": "No tocante aos Equipamentos de Proteção Individual e Coletiva para trabalhos com eletricidade, qual é a prática técnica mandatória para a conservação e uso de LUVAS ISOLANTES DE BORRACHA?",
            "en": "Regarding dielectric PPE and collective safeguards, what is the mandatory operational practice for the inspection, care, and use of RUBBER INSULATING GLOVES?",
            "es": "¿En cuanto a EPP y protecciones para riesgo eléctrico, cuál es la práctica técnica obligatoria para la conservación y uso de GUANTES AISLANTES DE GOMA?",
          },
          options: [
            {
              id: "q5-a",
              text: {
                "pt-BR": "As luvas de borracha não precisam de ensaio elétrico de laboratório se não apresentarem furos visíveis; basta lavá-las com querosene a cada semana.",
                "en": "Rubber gloves require no dielectric lab testing if no visible punctures appear; washing with kerosene weekly is sufficient.",
                "es": "Los guantes de goma no requieren ensayos eléctricos de laboratorio; basta lavarlos con solvente semanalmente.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Querosene e solventes derivados de petróleo atacam quimicamente a borracha natural e destroem sua rigidez dielétrica.",
                "en": "Petroleum solvents destroy the polymer chains and dielectric breakdown resistance of natural rubber.",
                "es": "Los solventes derivados del petróleo degradan severamente la goma dieléctrica.",
              },
            },
            {
              id: "q5-b",
              text: {
                "pt-BR": "As luvas isolantes devem ser submetidas a ensaios elétricos periódicos em laboratório certificado (máximo a cada 6 meses conforme norma NBR/ASTM), inspecionadas diariamente com teste pneumático de inflamento antes do uso, e sempre utilizadas sob luvas de cobertura em vaqueta para proteção mecânica contra perfurações.",
                "en": "Insulating gloves must undergo periodic dielectric lab testing (maximum every 6 months per NBR/ASTM standards), daily air inflation checks prior to use, and always be worn underneath leather protector gloves to guard against mechanical puncture.",
                "es": "Los guantes aislantes deben someterse a ensayos dieléctricos en laboratorio certificado cada 6 meses, inspección diaria por inflado de aire antes de su uso, y utilizarse siempre con guantes de cuero de protección mecánica exterior.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A borracha é sensível a perfurações mecânicas (que anulam o isolamento). O ensaio periódico e a luva de vaqueta externa garantem a sobrevivência do eletricista.",
                "en": "Correct! Rubber punctures destroy dielectric insulation. Semi-annual laboratory retesting, air checks, and leather over-gloves are mandatory safety standards.",
                "es": "¡Correcto! Una microperforación anula el aislamiento dieléctrico. El ensayo semestral, la prueba de aire y el guante de cuero exterior son obligatorios.",
              },
            },
            {
              id: "q5-c",
              text: {
                "pt-BR": "Luvas de raspa de couro comuns compradas em ferragistas garantem isolamento elétrico até 1.000 V de corrente alternada.",
                "en": "Standard split-cowhide work gloves purchased from hardware stores provide dielectric insulation up to 1,000 V AC.",
                "es": "Los guantes de descarne comunes garantizan aislamiento eléctrico hasta 1.000 V CA.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Luvas de couro comuns não possuem qualquer propriedade isolante dielétrica certificada e podem conduzir corrente elétrica se úmidas.",
                "en": "Standard work leather has zero certified dielectric ratings and readily conducts electric current when damp.",
                "es": "El cuero común no tiene capacidad aislante certificada y puede conducir electricidad si tiene humedad.",
              },
            },
            {
              id: "q5-d",
              text: {
                "pt-BR": "A classe de tensão da luva de borracha é irrelevante; uma luva classe 00 (500 V) pode ser usada com segurança em cubículos de 34,5 kV.",
                "en": "Glove voltage class is irrelevant; a Class 00 (500 V) glove safely insulates workers inside 34.5 kV switchgear bays.",
                "es": "La clase de tensión del guante no importa; un guante clase 00 (500 V) puede usarse en celdas de 34,5 kV.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A tensão de ruptura da classe 00 é infinitamente inferior a 34,5 kV; utilizá-la em média tensão causará perfuração elétrica imediata com choque fulminante.",
                "en": "Applying Class 00 gloves to 34.5 kV causes immediate dielectric puncture and lethal electrocution.",
                "es": "El dieléctrico de clase 00 no soporta 34,5 kV; perforará instantáneamente causando electrocución letal.",
              },
            },
          ],
        },
        {
          id: "q-nr10-6",
          order: 6,
          question: {
            "pt-BR": "Em conformidade com o item 10.2.4 da NR-10, os estabelecimentos com carga instalada superior a 75 kW devem constituir e manter atualizado o Prontuário de Instalações Elétricas (PIE). Quais documentos são obrigatórios nesse prontuário?",
            "en": "Per NR-10 item 10.2.4, facilities with installed capacity exceeding 75 kW must maintain an updated Electrical Installation Dossier (PIE). Which documents are mandatory?",
            "es": "Según el ítem 10.2.4 de la NR-10, instalaciones con carga mayor a 75 kW deben mantener actualizado el Prontuario PIE. ¿Cuáles documentos son obligatorios?",
          },
          options: [
            {
              id: "q6-a",
              text: {
                "pt-BR": "Apenas as notas fiscais de compra das lâmpadas e o contrato de locação do galpão industrial.",
                "en": "Only purchase receipts for light bulbs and the warehouse building lease contract.",
                "es": "Únicamente las facturas de iluminación y el contrato de alquiler de la nave.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Notas fiscais comerciais não constituem documentação técnica de segurança das instalações elétricas.",
                "en": "Commercial invoices do not satisfy mandatory engineering and safety documentation requirements.",
                "es": "Las facturas comerciales no constituyen documentación técnica de seguridad eléctrica.",
              },
            },
            {
              id: "q6-b",
              text: {
                "pt-BR": "Relatório de consumo mensal de energia e certificado de garantia dos ar-condicionados da diretoria.",
                "en": "Monthly energy consumption reports and warranty certificates for executive office air conditioners.",
                "es": "Reportes de consumo eléctrico mensual y garantías de los aires acondicionados.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O PIE é voltado à segurança humana e conformidade das instalações com normas técnicas vigentes.",
                "en": "The PIE dossier is dedicated to life safety and regulatory compliance of power systems.",
                "es": "El PIE está enfocado en la seguridad del personal y conformidad normativa de las instalaciones.",
              },
            },
            {
              id: "q6-c",
              text: {
                "pt-BR": "Contratos de estágio de eletricistas e planilha de controle de ponto dos colaboradores do turno da noite.",
                "en": "Internship agreements and night-shift employee timesheets.",
                "es": "Convenios de pasantía y planillas de asistencia del turno noche.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Documentação trabalhista de RH não substitui os projetos elétricos, laudos de aterramento e prontuário de segurança.",
                "en": "HR labor files cannot substitute for electrical schematics, grounding reports, and safety dossiers.",
                "es": "La documentación de RRHH no sustituye esquemas unifilares ni auditorías de seguridad.",
              },
            },
            {
              id: "q6-d",
              text: {
                "pt-BR": "Diagramas unifilares atualizados, procedimentos de trabalho, relatórios de conformidade das inspeções/auditorias, laudos do Sistema de Proteção contra Descargas Atmosféricas (SPDA) e aterramento elétrico, certificados de calibração de instrumentos de teste e registro de autorizações dos trabalhadores.",
                "en": "Updated single-line diagrams, work procedures, compliance inspection/audit reports, lightning protection (SPDA) and grounding certification tests, calibration records for dielectric test equipment, and employee authorizations.",
                "es": "Diagramas unifilares actualizados, procedimientos de trabajo, informes de inspección/auditoría, ensayos de puesta a tierra y pararrayos (SPDA), calibración de instrumentos y registros de autorización del personal.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O PIE reúne toda a base de engenharia e conformidade operacional exigida pela NR-10 para demonstrar que a planta opera de forma segura e auditável.",
                "en": "Correct! PIE compiles the entire technical safety baseline mandated by NR-10 to ensure plants are legally compliant and safe for intervention.",
                "es": "¡Correcto! El PIE reúne todos los proyectos unifilares, protocolos de seguridad, ensayos de puesta a tierra y autorizaciones.",
              },
            },
          ],
        },
        {
          id: "q-nr10-7",
          order: 7,
          question: {
            "pt-BR": "No Sistema Elétrico de Potência (SEP) e em instalações de alta tensão (AT acima de 1.000 V em CA), qual exigência operacional da NR-10 (item 10.7.3) impede a realização de intervenções isoladas por um trabalhador desacompanhado?",
            "en": "In Power Electric Systems (SEP) and High Voltage installations (>1,000 V AC per NR-10 item 10.7.3), what operational rule prevents solo work?",
            "es": "¿En el Sistema Eléctrico de Potencia (SEP) y alta tensión (>1.000 V CA según NR-10 ítem 10.7.3), qué regla impide el trabajo en solitario?",
          },
          options: [
            {
              id: "q7-a",
              text: {
                "pt-BR": "Os serviços em instalações elétricas energizadas em AT, bem como aqueles executados no SEP, não podem ser realizados individualmente; devem ser executados por equipe de pelo menos dois trabalhadores qualificados e autorizados, com sistema de comunicação contínuo.",
                "en": "Services on energized HV installations and power systems (SEP) cannot be executed individually; they must be carried out by a crew of at least two qualified and authorized workers with continuous communication systems.",
                "es": "Los trabajos en instalaciones energizadas de AT y en el SEP no pueden realizarse de forma individual; deben ser ejecutados por un equipo de al menos dos trabajadores autorizados con comunicación continua.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! O item 10.7.3 veda taxativamente o trabalho individual no SEP e em alta tensão energizada. Em caso de choque, aprisionamento mecânico ou arco, o segundo profissional treinado em resgate e primeiros socorros é essencial à vida.",
                "en": "Correct! NR-10 10.7.3 strictly prohibits solo work on energized HV and SEP. The partner is vital for instant emergency isolation, CPR, and rescue.",
                "es": "¡Correcto! El ítem 10.7.3 prohíbe taxativamente el trabajo individual en AT energizada y en el SEP para permitir rescate inmediato.",
              },
            },
            {
              id: "q7-b",
              text: {
                "pt-BR": "O eletricista pode trabalhar sozinho se deixar o celular conectado à internet no modo viva-voz com o supervisor que está no escritório.",
                "en": "The electrician may work alone if a smartphone is left on speakerphone with a supervisor located in the office.",
                "es": "El electricista puede trabajar solo si mantiene el teléfono móvil en altavoz con su supervisor.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Chamada telefônica remota não substitui o segundo eletricista presencial capacitado para executar manobras de desenergização e RCP em campo.",
                "en": "A phone call cannot perform emergency pole rescue or defibrillation on a victim experiencing ventricular fibrillation.",
                "es": "Una llamada telefónica no sustituye a un compañero presente para aplicar rescate y reanimación cardiopulmonar.",
              },
            },
            {
              id: "q7-c",
              text: {
                "pt-BR": "Trabalho individual é sempre permitido em qualquer nível de tensão desde que o trabalhador tenha mais de 10 anos de experiência prática comprovada.",
                "en": "Solo work is always permitted at any voltage level provided the technician has over 10 years of documented experience.",
                "es": "El trabajo en solitario está siempre permitido si el operario tiene más de 10 años de experiencia comprobada.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A norma regulamentadora é imperativa: tempo de experiência não autoriza desvio das regras de segurança de trabalho em equipe no SEP.",
                "en": "Experience never waives mandatory regulatory standards governing team-based work in high voltage environments.",
                "es": "La experiencia no exime del cumplimiento normativo que prohíbe el trabajo en solitario en alta tensión.",
              },
            },
            {
              id: "q7-d",
              text: {
                "pt-BR": "A proibição de trabalho individual aplica-se exclusivamente a circuitos de baixa tensão em residências urbanas de pequeno porte.",
                "en": "The ban on solo work applies exclusively to low-voltage residential branch circuits.",
                "es": "La prohibición de trabajo individual se aplica exclusivamente a circuitos de baja tensión residenciales.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A regra de trabalho em dupla é mandatória para alta tensão e instalações do Sistema Elétrico de Potência (SEP).",
                "en": "The buddy system is an explicit mandate for High Voltage and utility Power Systems (SEP).",
                "es": "La exigencia de trabajar en cuadrilla mínima de dos es un requisito obligatorio del SEP y alta tensión.",
              },
            },
          ],
        },
        {
          id: "q-nr10-8",
          order: 8,
          question: {
            "pt-BR": "Qual é a função primordial do Dispositivo a Corrente Diferencial-Residual (DR) de alta sensibilidade (≤ 30 mA) e por que o disjuntor termomagnético comum NÃO substitui o DR na proteção contra choque elétrico fatal?",
            "en": "What is the primary function of a high-sensitivity Residual Current Device (RCD/GFCI ≤ 30 mA), and why can't a standard thermal-magnetic circuit breaker replace it for electric shock prevention?",
            "es": "¿Cuál es la función del Dispositivo Diferencial Residual (DR ≤ 30 mA) y por qué un interruptor termomagnético común NO lo reemplaza para evitar electrocución?",
          },
          options: [
            {
              id: "q8-a",
              text: {
                "pt-BR": "O disjuntor termomagnético desarma com correntes de fuga para a terra de 10 mA, enquanto o DR serve apenas para economizar energia na fatura da concessionária.",
                "en": "Thermal-magnetic breakers trip on ground leakage currents of 10 mA, while RCDs merely optimize electric billing costs.",
                "es": "El termomagnético dispara con fugas de 10 mA, mientras que el diferencial solo ahorra energía.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Incorreto. Disjuntores comuns operam em dezenas de amperes (16 A, 25 A, etc.) e não enxergam fugas miliamperimétricas para a terra.",
                "en": "Incorrect. Circuit breakers operate at tens of amperes, entirely blind to lethal milliampere leakage currents.",
                "es": "Incorrecto. Los termomagnéticos operan en decenas de amperios y son ciegos a fugas en miliamperios.",
              },
            },
            {
              id: "q8-b",
              text: {
                "pt-BR": "O DR detecta a assimetria entre a corrente que entra pela fase e a que retorna pelo neutro; se houver fuga para a terra através do corpo humano superior a 30 mA, ele secciona o circuito em milissegundos antes da fibrilação ventricular; o disjuntor comum protege apenas contra sobrecargas e curtos-circuitos (operando na faixa de amperes, que é fatal ao ser humano).",
                "en": "The RCD detects vector imbalance between phase supply and neutral return; if ground leakage exceeding 30 mA passes through a human body, it trips in milliseconds prior to ventricular fibrillation; breakers only protect wiring against overcurrents and short-circuits (measured in amps, lethal to humans).",
                "es": "El DR detecta el desequilibrio entre corriente de fase y neutro; si una fuga a tierra por el cuerpo supera 30 mA, desconecta en milisegundos evitando fibrilación ventricular; el termomagnético solo protege cables contra sobrecargas y cortocircuitos en amperios.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Correntes de apenas 50 mA a 100 mA através do coração causam fibrilação ventricular letal. Um disjuntor de 20 A nunca desarmaria com um choque humano, pois 0,05 A é insignificante para a sua curva térmica/magnética.",
                "en": "Correct! Currents of 50-100 mA through the thorax trigger fatal fibrillation. A 20 A breaker ignores human shock currents since 0.05 A is microscopic on its trip curve.",
                "es": "¡Correcto! Una corriente de 50 mA a través del tórax causa fibrilación ventricular mortal. Un interruptor de 20 A jamás abriría con esa corriente tan baja.",
              },
            },
            {
              id: "q8-c",
              text: {
                "pt-BR": "O DR é um equipamento puramente decorativo instalado em painéis sem qualquer ligação elétrica real aos circuitos de tomadas.",
                "en": "An RCD is an aesthetic device mounted on panels with no functional wiring connections to outlet branch circuits.",
                "es": "El DR es un elemento decorativo sin conexión real a los circuitos de tomas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "O DR é um dispositivo de segurança de proteção pessoal mandatório pela norma NBR 5410 e pela NR-10.",
                "en": "The residual current device is a vital, mandatory life-safety component under NBR 5410 and NR-10.",
                "es": "El diferencial residual es un dispositivo de protección vital y obligatorio por norma técnica.",
              },
            },
            {
              id: "q8-d",
              text: {
                "pt-BR": "Disjuntores termomagnéticos e DRs realizam exatamente o mesmo monitoramento químico da resistência do ar ao redor do condutor.",
                "en": "Thermal-magnetic breakers and RCDs perform identical chemical monitoring of air resistance around conductors.",
                "es": "Los disyuntores termomagnéticos y los diferenciales realizan el mismo monitoreo químico del aire.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Princípios totalmente distintos: disjuntores baseiam-se em bimetal e bobina magnética para sobrecorrente; o DR utiliza um toroide sensor de fluxo magnético diferencial residual.",
                "en": "Completely different mechanisms: thermal-magnetic breakers trip on overcurrent via bimetallic strips/solenoids; RCDs utilize a zero-sequence differential current transformer core.",
                "es": "Mecanismos distintos: los termomagnéticos operan por bimetal/bobina; el DR usa un transformador toroidal para medir corriente residual.",
              },
            },
          ],
        },
        {
          id: "q-nr10-9",
          order: 9,
          question: {
            "pt-BR": "Ao prestar primeiros socorros a uma vítima presa por contato direto a uma barra energizada de baixa tensão em um painel elétrico, qual é a conduta IMEDIATA e mandatória antes de tocar no acidentado?",
            "en": "When administering first aid to a worker trapped in direct contact with an energized low-voltage busbar, what is the mandatory FIRST action before touching the victim?",
            "es": "¿Al prestar primeros auxilios a una persona en contacto directo con una barra energizada, cuál es la acción INMEDIATA antes de tocar a la víctima?",
          },
          options: [
            {
              id: "q9-a",
              text: {
                "pt-BR": "Puxar a vítima pelas mãos imediatamente com as próprias mãos desnudas para acelerar o resgate.",
                "en": "Immediately grab the victim by their hands with bare hands to expedite resuscitation.",
                "es": "Tirar de la víctima por las manos inmediatamente con las manos desnudas.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Tocar na vítima energizada transferirá a corrente elétrica ao socorrista, tornando-o uma segunda vítima por aprisionamento muscular tétanico.",
                "en": "Touching an energized victim conducts current directly into the rescuer, creating a second casualty via muscular tetany.",
                "es": "Tocar a una persona energizada electrocuta al socorrista de inmediato convirtiéndolo en segunda víctima.",
              },
            },
            {
              id: "q9-b",
              text: {
                "pt-BR": "Jogar água com mangueira de incêndio comum sobre o painel para resfriar as queimaduras elétricas da vítima.",
                "en": "Spray water with an industrial fire hose into the switchboard to cool electrical burns on the victim.",
                "es": "Lanzar agua con manguera común sobre el tablero para enfriar las quemaduras.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Água é altamente condutora e provocará curto-circuito generalizado e choque fatal em todos os presentes na sala.",
                "en": "Water is conductive and creates massive phase-to-ground flashovers and lethal shock currents across the wet floor.",
                "es": "El agua conduce la electricidad y causará cortocircuitos masivos y choque eléctrico a los rescatistas.",
              },
            },
            {
              id: "q9-c",
              text: {
                "pt-BR": "Desligar a fonte de alimentação (seccionar a chave geral/disjuntor mais próximo) ou afastar a vítima da fonte condutora utilizando materiais isolantes secos certificados (como bastão de salvamento dielétrico aprovado), sem jamais tocar diretamente no corpo do acidentado antes da confirmação do desvencilhamento elétrico.",
                "en": "De-energize the power source (trip the nearest main disconnect/breaker) or separate the victim using certified dry dielectric rescue hooks/poles, never touching the victim's body directly until verified separation is achieved.",
                "es": "Cortar el suministro de energía (abrir el interruptor o disyuntor principal más próximo) o separar a la víctima usando pértiga aislante dieléctrica certificada, sin tocar nunca directamente el cuerpo del accidentado antes de aislarlo.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! A primeira regra do socorrista é garantir a segurança da cena. Desligar a energia ou afastar o acidentado com bastão isolante específico evita a transmissão da corrente.",
                "en": "Correct! Scene safety is step one. Isolating power or using an insulated rescue hook breaks contact without risking the rescuer's life.",
                "es": "¡Correcto! La seguridad de la escena es primordial. Desenergizar o desvincular a la víctima con pértiga dieléctrica evita electrocutar al rescatista.",
              },
            },
            {
              id: "q9-d",
              text: {
                "pt-BR": "Iniciar compressões torácicas de RCP enquanto a vítima ainda se mantém presa ao barramento energizado.",
                "en": "Initiate chest compressions while the victim remains pinned against the energized busbar.",
                "es": "Comenzar compresiones torácicas mientras la persona sigue pegada al conductor energizado.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Realizar massagem cardíaca em um corpo energizado transferirá a corrente diretamente pelo tórax e braços do socorrista.",
                "en": "Attempting CPR while the subject is energized passes electric shock directly into the rescuer's heart.",
                "es": "Hacer RCP con la víctima energizada transferirá la corriente al corazón del socorrista.",
              },
            },
          ],
        },
        {
          id: "q-nr10-10",
          order: 10,
          question: {
            "pt-BR": "Em estrita conformidade com a legislação brasileira (Portarias MTE/NR-10) e as diretrizes do AGENTS.md da RSS3 Treinamentos, a conclusão bem-sucedida deste módulo formal teórico em plataforma EAD confere automaticamente ao trabalhador a Habilitação e Autorização para intervir em circuitos elétricos energizados de alta e baixa tensão?",
            "en": "In strict compliance with Brazilian safety legislation (NR-10) and RSS3 corporate governance (AGENTS.md), does successful completion of this theoretical online EAD course automatically confer legal Licensing and Company Authorization to perform live electrical work?",
            "es": "¿Conforme a las normas del MTE (NR-10) y AGENTS.md de RSS3 Treinamentos, la aprobación de este curso teórico online confiere automáticamente Habilitación y Autorización para intervenir en circuitos energizados?",
          },
          options: [
            {
              id: "q10-a",
              text: {
                "pt-BR": "SIM. A aprovação digital no portal dispensa qualquer treinamento prático presencial, exame médico ocupacional (ASO) e anuência formal da diretoria da RSS3.",
                "en": "YES. Digital certificate waives all in-person practical training, occupational medical clearance (ASO), and corporate authorization.",
                "es": "SÍ. La aprobación digital prescinde de entrenamiento práctico presencial, examen médico ASO y autorización formal escrita.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Falso e terminantemente ilegal. Conforme diretrizes do AGENTS.md, cursos EAD nunca conferem habilitação prática nem autorização para intervenção sob tensão.",
                "en": "False and illegal. Under AGENTS.md, theoretical e-learning never grants practical operational licenses without field validation and medical clearance.",
                "es": "Falso e ilegal. El EAD no sustituye la práctica presencial ni la anuencia formal de la empresa.",
              },
            },
            {
              id: "q10-b",
              text: {
                "pt-BR": "SIM. O certificado em PDF emitido pelo sistema substitui o registro no conselho profissional (CREA/CFT) e a ordem de serviço emitida pela segurança do trabalho.",
                "en": "YES. The generated PDF certificate replaces professional engineering council registry (CREA/CFT) and Job Safety Orders.",
                "es": "SÍ. El certificado digital en PDF sustituye la colegiatura profesional del CREA/CFT y la orden de servicio.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "Absurdo jurídico. Um certificado de treinamento não substitui atribuição técnica regulada por lei federal nem o conselho de classe.",
                "en": "Legally impossible. A training certificate never substitutes for statutory professional council licensing.",
                "es": "Completamente falso. Un certificado de curso no reemplaza un título habilitado por ley federal.",
              },
            },
            {
              id: "q10-c",
              text: {
                "pt-BR": "NÃO. Este certificado comprova EXCLUSIVAMENTE o cumprimento do Conteúdo Teórico normativo. A atuação operacional real exige: 1) Formação prática presencial validada por instrutor habilitado; 2) Atestado de Saúde Ocupacional (ASO) vigente com indicação expressa de aptidão para trabalhos com eletricidade; e 3) Emissão formal da Autorização por escrito pela RSS3, com crachá de identificação e escopo de atuação definido no prontuário PIE.",
                "en": "NO. This certificate certifies EXCLUSIVELY theoretical regulatory competence. Practical field operations strictly require: 1) Hands-on practical training validated by an accredited instructor; 2) Valid Medical Clearance (ASO) indicating explicit fitness for electrical hazards; and 3) Formal written Authorization issued by RSS3, with badge and scope documented in the PIE dossier.",
                "es": "NO. Este certificado avala EXCLUSIVAMENTE el Contenido Teórico normativo. La intervención en planta requiere obligatoriamente: 1) Entrenamiento práctico presencial validado; 2) ASO médico vigente con aptitud expresa para riesgos eléctricos; y 3) Autorización formal escrita emitida por RSS3 con registro en el PIE.",
              },
              isCorrect: true,
              explanation: {
                "pt-BR": "Correto! Esta é a diretriz permanente e inegociável da NR-10 e do AGENTS.md: a teoria em EAD precisa ser complementada com capacitação prática, aptidão médica clínica (ASO) e autorização formal da empresa.",
                "en": "Correct! Non-negotiable standard under NR-10 and AGENTS.md: theoretical e-learning must be complemented by practical verification, medical clearance (ASO), and corporate authorization.",
                "es": "¡Correcto! Directriz fundamental de la NR-10 y AGENTS.md: la teoría requiere obligatoriamente práctica presencial, aptitud médica ocupacional y autorización formal.",
              },
            },
            {
              id: "q10-d",
              text: {
                "pt-BR": "NÃO, mas apenas se o colaborador for menor de idade; para colaboradores adultos com mais de 21 anos, a autorização é automática.",
                "en": "NO, but only if the worker is a minor; for adults over 21, field authorization is automatic upon passing the quiz.",
                "es": "NO, pero solo si es menor de edad; para mayores de 21 años la autorización es automática.",
              },
              isCorrect: false,
              explanation: {
                "pt-BR": "A autorização em eletricidade independe de faixa etária adulta e exige sempre avaliação prática, ASO e ato formal da empresa.",
                "en": "Authorization requires practical competency testing, medical fitness, and formal appointment regardless of age.",
                "es": "La autorización no depende de la edad, requiere siempre prueba práctica presencial, ASO y designación formal.",
              },
            },
          ],
        },
      ],
    },
  },
  nr11CourseData,
  excelCourseData,
  gestaoPessoasCourseData,
  gestaoProjetosCourseData,
  gestaoQualidadeCourseData,
  wordCourseData,
  powerBiCourseData,
  manutencaoIndustrialCourseData,
  pcmCourseData,
  geometriaEspacialCourseData,
  administracaoCourseData,
  nr12CourseData,
  periciaTrabalhistaCourseData,
  nr20CourseData,
];

export const DEMO_PERSONAS: UserDemonstration[] = [];
 
 /**
  * Catálogo Oficial de MBAs Técnicos e Executivos da RSS3 Treinamentos
  * Estrutura idêntica à esteira de aprendizado integrada (estilo FM2S).
  */
 export const DEMO_MBAS: import("@/types").MbaProgram[] = [
  {
    id: "mba-planejamento-pcm-bi",
    slug: "mba-planejamento-pcm-business-intelligence-industrial",
    title: {
      "pt-BR": "MBA em Planejamento, PCM & Business Intelligence Industrial",
      "en": "MBA in Maintenance Planning, Reliability & Industrial BI",
      "es": "MBA en Planificación, PCM y Business Intelligence Industrial",
    },
    subtitle: {
      "pt-BR": "Engenharia de Confiabilidade, Modelagem DAX, Indicadores MTBF/MTTR e Gestão de Ativos",
      "en": "Reliability Engineering, DAX Modeling, MTBF/MTTR Metrics & Asset Management",
      "es": "Ingeniería de Confiabilidad, Modelado DAX, Métricas MTBF/MTTR y Gestión de Activos",
    },
    description: {
      "pt-BR": "Formação executiva e analítica que integra a gestão moderna de manutenção (PCM e Confiabilidade), análise avançada de dados em planilhas operacionais (Excel Avançado), modelagem dimensional e painéis executivos em tempo real (Power BI), mecânica industrial aplicada e documentação técnica padronizada.",
      "en": "Executive and analytical program combining modern maintenance management (PCM & Reliability), advanced operational spreadsheet modeling (Excel), dimensional business intelligence dashboards (Power BI), applied industrial maintenance, and standardized corporate documentation.",
      "es": "Programa ejecutivo que integra gestión de mantenimiento moderno (PCM), análisis operativo en Excel, tableros en Power BI, mantenimiento industrial mecánico y redacción técnica.",
    },
    category: {
      "pt-BR": "Planejamento & Engenharia",
      "en": "Planning & Engineering",
      "es": "Planificación e Ingeniería",
    },
    accentColor: "#f97316", // Laranja RSS3
    totalHours: 360,
    featured: true,
    courses: [
      {
        id: "mba-pbi-c1",
        courseId: "c-excel-produtividade-operacional",
        title: {
          "pt-BR": "Excel para Produtividade Operacional & Análise de Dados",
          "en": "Excel for Operational Productivity & Industrial Data Analysis",
          "es": "Excel para Productividad Operativa y Análisis de Datos",
        },
        categoryTag: "Modelagem & Dados",
        workloadHours: 40,
        order: 1,
        isUnlocked: true,
        accentColor: "#10b981",
        iconType: "document",
        description: {
          "pt-BR": "Fórmulas matriciais (SOMASES, MÉDIASES, PROCX), tabelas dinâmicas, validação de dados e automação de apontamentos de campo.",
          "en": "Lookup formulas, dynamic array calculations, pivot tables, and automated field data collection.",
          "es": "Fórmulas avanzadas, tablas dinámicas y automatización de reportes diarios.",
        },
        modulesCount: 3,
        lessonsCount: 10,
      },
      {
        id: "mba-pbi-c2",
        courseId: "c-power-bi-analytics",
        title: {
          "pt-BR": "Power BI & Dashboards de Indicadores Industriais",
          "en": "Power BI & Industrial Turnaround KPI Dashboards",
          "es": "Power BI y Paneles de Control de Indicadores Industriales",
        },
        categoryTag: "Business Intelligence",
        workloadHours: 60,
        order: 2,
        isUnlocked: true,
        accentColor: "#f59e0b",
        iconType: "award",
        description: {
          "pt-BR": "Tratamento de dados no Power Query (ETL), modelagem dimensional Star Schema, medidas em DAX (CALCULATE, DIVIDE) e relatórios visuais executivos.",
          "en": "Power Query ETL pipelines, Star Schema modeling, core DAX business logic, and visual executive dashboards.",
          "es": "ETL en Power Query, modelado dimensional en estrella, cálculos DAX y cuadros de mando visuales.",
        },
        modulesCount: 4,
        lessonsCount: 10,
      },
      {
        id: "mba-pbi-c3",
        courseId: "c-pcm-planejamento-controle-manutencao",
        title: {
          "pt-BR": "PCM: Planejamento, Controle e Confiabilidade da Manutenção",
          "en": "Maintenance Planning, Scheduling & Reliability Engineering (PCM)",
          "es": "Planificación, Control y Confiabilidad del Mantenimiento (PCM)",
        },
        categoryTag: "Engenharia de Confiabilidade",
        workloadHours: 80,
        order: 3,
        isUnlocked: true,
        accentColor: "#0284c7",
        iconType: "gear",
        description: {
          "pt-BR": "Cálculo de MTBF, MTTR e Disponibilidade, gestão de backlog operacional, cronograma de paradas, matriz de criticidade e FMEA.",
          "en": "MTBF, MTTR, asset availability calculations, maintenance backlog control, critical path scheduling, and RCM/FMEA.",
          "es": "Cálculo de indicadores MTBF/MTTR, gestión de backlog de órdenes y análisis de fallas FMEA.",
        },
        modulesCount: 4,
        lessonsCount: 10,
      },
      {
        id: "mba-pbi-c4",
        courseId: "c-manutencao-industrial-completo",
        title: {
          "pt-BR": "Manutenção Mecânica & Eletromecânica Industrial",
          "en": "Industrial Mechanical & Electromechanical Maintenance",
          "es": "Mantenimiento Mecánico y Electromecánico Industrial",
        },
        categoryTag: "Técnica Industrial",
        workloadHours: 120,
        order: 4,
        isUnlocked: true,
        accentColor: "#6366f1",
        iconType: "gear",
        description: {
          "pt-BR": "Termografia, análise de vibrações, alinhamento a laser de eixos acoplados, lubrificação de redutores e desmontagem de bombas centrífugas.",
          "en": "Vibration analysis, laser shaft alignment, tribology, and centrifugal pump overhaul techniques.",
          "es": "Análisis de vibraciones, alineación láser de ejes y mantenimiento de bombas y reductores.",
        },
        modulesCount: 5,
        lessonsCount: 10,
      },
      {
        id: "mba-pbi-c5",
        courseId: "c-word-corporativo",
        title: {
          "pt-BR": "Word Corporativo & Documentação Técnica de Projetos",
          "en": "Corporate Word & Technical Project Documentation",
          "es": "Word Corporativo y Documentación Técnica de Proyectos",
        },
        categoryTag: "Governança & Relatórios",
        workloadHours: 60,
        order: 5,
        isUnlocked: true,
        accentColor: "#2563eb",
        iconType: "document",
        description: {
          "pt-BR": "Elaboração de laudos técnicos de engenharia, procedimentos operacionais padronizados (POPs), relatórios de parada e formatação ABNT.",
          "en": "Engineering technical reports, standard operating procedures (SOP), turnaround wrap-up dossiers, and styles.",
          "es": "Elaboración de informes técnicos, procedimientos estándar (SOP) y actas ejecutivas.",
        },
        modulesCount: 3,
        lessonsCount: 10,
      },
    ],
  },
  {
    id: "mba-gestao-projetos-pessoas-qualidade",
    slug: "mba-gestao-estrategica-projetos-lideranca-qualidade",
    title: {
      "pt-BR": "MBA em Gestão Estratégica de Projetos, Liderança & Qualidade",
      "en": "MBA in Strategic Project Management, Leadership & Quality",
      "es": "MBA en Gestión Estratégica de Proyectos, Liderazgo y Calidad",
    },
    subtitle: {
      "pt-BR": "Liderança de Contratos Industriais, Metodologias Ágeis, Gestão de Riscos e SGQ ISO 9001",
      "en": "Turnaround Contract Leadership, Agile Methodologies, Risk Control & ISO 9001 QMS",
      "es": "Liderazgo de Contratos Industriales, Metodologías Ágiles y Sistemas de Calidad",
    },
    description: {
      "pt-BR": "Especialização executiva voltada a coordenadores de contrato, gestores de canteiro e supervisores operacionais. Abrange gerenciamento de escopo, custo e prazo de paradas de fábrica (PMBOK/Scrum), desenvolvimento de equipes de alta performance, ferramentas da qualidade (DMAIC, 5 Porquês, Ishikawa) e administração estratégica de negócios.",
      "en": "Executive specialization for contract leaders and plant operations managers. Covers project scope, cost and turnaround schedules, frontline team motivation, Lean Quality toolkits (Ishikawa, 5-Whys, DMAIC), and strategic business administration.",
      "es": "Especialización ejecutiva para líderes de proyecto y supervisores de planta. Abarca gestión de plazos y costos de paradas, liderazgo de equipos y herramientas de calidad continua.",
    },
    category: {
      "pt-BR": "Gestão & Liderança",
      "en": "Management & Leadership",
      "es": "Gestión y Liderazgo",
    },
    accentColor: "#3b82f6", // Azul Corporativo
    totalHours: 360,
    featured: true,
    courses: [
      {
        id: "mba-gp-c1",
        courseId: "c-gestao-de-projetos",
        title: {
          "pt-BR": "Gestão de Projetos & Paradas Industriais",
          "en": "Industrial Project Management & Plant Turnarounds",
          "es": "Gestión de Proyectos y Paradas de Planta",
        },
        categoryTag: "Projetos & Prazos",
        workloadHours: 80,
        order: 1,
        isUnlocked: true,
        accentColor: "#0284c7",
        iconType: "gear",
        description: {
          "pt-BR": "Metodologia do Caminho Crítico (CPM), curva S de avanço físico-financeiro, matriz de riscos e controle de contingências em paradas.",
          "en": "Critical Path Method (CPM), S-curve progress monitoring, turnaround risk register, and contingency management.",
          "es": "Método de ruta crítica (CPM), curva S de avance y control de riesgos de parada.",
        },
        modulesCount: 4,
        lessonsCount: 10,
      },
      {
        id: "mba-gp-c2",
        courseId: "c-gestao-de-pessoas",
        title: {
          "pt-BR": "Gestão Estratégica de Pessoas & Liderança de Equipes",
          "en": "Strategic Human Resources & Operational Team Leadership",
          "es": "Gestión Estratégica de Personas y Liderazgo de Equipos",
        },
        categoryTag: "Liderança & Cultura",
        workloadHours: 80,
        order: 2,
        isUnlocked: true,
        accentColor: "#ec4899",
        iconType: "user",
        description: {
          "pt-BR": "Comunicação assertiva, gestão de conflitos no canteiro de obras, feedback estruturado, engajamento e retenção de talentos.",
          "en": "Field conflict resolution, operational feedback frameworks, team psychological safety, and safety engagement.",
          "es": "Resolución de conflictos en campo, cultura de seguridad y retroalimentación constructiva.",
        },
        modulesCount: 4,
        lessonsCount: 10,
      },
      {
        id: "mba-gp-c3",
        courseId: "c-gestao-da-qualidade",
        title: {
          "pt-BR": "Gestão da Qualidade & Melhoria Contínua (SGQ)",
          "en": "Quality Management & Continuous Improvement (QMS)",
          "es": "Gestión de la Calidad y Mejora Continua (SGC)",
        },
        categoryTag: "Qualidade & Processos",
        workloadHours: 80,
        order: 3,
        isUnlocked: true,
        accentColor: "#10b981",
        iconType: "award",
        description: {
          "pt-BR": "Ciclo PDCA, auditorias internas de conformidade ISO 9001, Diagrama de Causa e Efeito (Ishikawa), 5 Porquês e relatórios de não conformidade.",
          "en": "PDCA cycle, ISO 9001 internal auditing, root cause analysis (Ishikawa, 5-Whys), and non-conformance management.",
          "es": "Ciclo PDCA, auditorías ISO 9001, análisis de causa raíz y control de no conformidades.",
        },
        modulesCount: 4,
        lessonsCount: 10,
      },
      {
        id: "mba-gp-c4",
        courseId: "c-fundamentos-administracao-gestao",
        title: {
          "pt-BR": "Fundamentos de Administração & Gestão Industrial",
          "en": "Industrial Business Administration & Management Fundamentals",
          "es": "Fundamentos de Administración y Gestión Industrial",
        },
        categoryTag: "Estratégia & Finanças",
        workloadHours: 60,
        order: 4,
        isUnlocked: true,
        accentColor: "#8b5cf6",
        iconType: "award",
        description: {
          "pt-BR": "Planejamento estratégico (Análise SWOT/FOFA), fluxo de caixa operacional, custos diretos/indiretos e precificação de serviços de engenharia.",
          "en": "Strategic planning (SWOT analysis), operational cash flow, direct/indirect job costing, and pricing models.",
          "es": "Planificación estratégica (FODA), flujo de caja operativo y costos industriales.",
        },
        modulesCount: 3,
        lessonsCount: 10,
      },
      {
        id: "mba-gp-c5",
        courseId: "c-word-corporativo",
        title: {
          "pt-BR": "Word Corporativo & Redação de Propostas e Contratos",
          "en": "Corporate Word for Bidding Proposals & Service Contracts",
          "es": "Word Corporativo para Propuestas Comerciales y Contratos",
        },
        categoryTag: "Governança & Documentação",
        workloadHours: 60,
        order: 5,
        isUnlocked: true,
        accentColor: "#2563eb",
        iconType: "document",
        description: {
          "pt-BR": "Padronização de propostas comerciais de grande porte, minutas contratuais, atas de alinhamento com clientes (como CMPC) e controle de versão.",
          "en": "Standardizing major client bids, contractual documentation, client meeting minutes, and version control.",
          "es": "Redacción ejecutiva de propuestas, minutas contractuales y actas de alineamiento.",
        },
        modulesCount: 3,
        lessonsCount: 10,
      },
    ],
  },
  {
    id: "mba-seguranca-pericia-conformidade",
    slug: "mba-seguranca-ocupacional-pericia-conformidade-regulatoria",
    title: {
      "pt-BR": "MBA em Engenharia de Segurança, Perícia & Conformidade Regulatória",
      "en": "MBA in Occupational Safety Engineering, Forensics & Regulatory Compliance",
      "es": "MBA en Seguridad Ocupacional, Peritajes y Cumplimiento Regulatorio",
    },
    subtitle: {
      "pt-BR": "Auditoria de Normas Regulamentadoras, Laudos Técnicos Trabalhistas e Prevenção de Sinistros",
      "en": "Regulatory Standards Auditing, Forensic Work Reports & Major Incident Prevention",
      "es": "Auditoría de Normas Regulatorias, Peritajes Judiciales y Prevención de Siniestros",
    },
    description: {
      "pt-BR": "Programa de excelência focado na blindagem jurídica, conformidade normativa e preservação da integridade física em plantas industriais. Integra conhecimentos avançados de assistência técnica judicial trabalhista (Insalubridade e Periculosidade) com o domínio prático das normas regulamentadoras mais críticas: Elétrica (NR-10), Máquinas (NR-12), Inflamáveis (NR-20) e Trabalho em Altura (NR-35).",
      "en": "Specialized program designed for legal shielding, regulatory compliance, and incident prevention in heavy industries. Combines occupational forensic report writing (NR-15 and NR-16) with deep technical mastery of key industrial standards: Electrical Safety (NR-10), Machinery Safeguards (NR-12), Flammable Liquids (NR-20), and Work at Heights (NR-35).",
      "es": "Formación integral en seguridad industrial, peritajes técnicos de insalubridad y peligrosidad, junto con el dominio de normas críticas: NR-10, NR-12, NR-20 y NR-35.",
    },
    category: {
      "pt-BR": "Segurança & Conformidade",
      "en": "Safety & Regulatory",
      "es": "Seguridad y Cumplimiento",
    },
    accentColor: "#10b981", // Verde Segurança
    totalHours: 360,
    featured: true,
    courses: [
      {
        id: "mba-sst-c1",
        courseId: "c-pericia-judicial-trabalhista",
        title: {
          "pt-BR": "Perícia Judicial e Assistência Técnica Trabalhista",
          "en": "Occupational Forensics & Legal Expert Assistance",
          "es": "Peritaje Judicial y Asistencia Técnica Laboral",
        },
        categoryTag: "Direito & Perícia",
        workloadHours: 80,
        order: 1,
        isUnlocked: true,
        accentColor: "#0f766e",
        iconType: "shield",
        description: {
          "pt-BR": "Quesitos periciais, laudos de insalubridade (NR-15) e periculosidade (NR-16), impugnação técnica e responsabilidade civil e criminal da empresa.",
          "en": "Court deposition tactics, hazardous exposure claims (NR-15/NR-16), expert rebuttal writing, and employer civil liability.",
          "es": "Elaboración de informes de insalubridad y peligrosidad, preguntas periciales y defensa técnica.",
        },
        modulesCount: 4,
        lessonsCount: 10,
      },
      {
        id: "mba-sst-c2",
        courseId: "c-nr10-seguranca-instalacoes-eletricas",
        title: {
          "pt-BR": "NR-10: Segurança em Instalações e Serviços em Eletricidade",
          "en": "NR-10: Safety in Electrical Installations and Services",
          "es": "NR-10: Seguridad en Instalaciones y Servicios Eléctricos",
        },
        categoryTag: "Norma Regulamentadora",
        workloadHours: 70,
        order: 2,
        isUnlocked: true,
        accentColor: "#eab308",
        iconType: "shield",
        description: {
          "pt-BR": "Desenergização formal em 10 passos, arco elétrico e choque elétrico, prontuário de instalações elétricas (PIE) e zonas livre, controlada e de risco.",
          "en": "Lockout/Tagout 10-step de-energization, arc-flash boundary calculations, electrical dossier (PIE), and high voltage protocols.",
          "es": "Desenergización en 10 pasos, arco eléctrico, choque eléctrico y zonas de seguridad eléctrica.",
        },
        modulesCount: 4,
        lessonsCount: 10,
      },
      {
        id: "mba-sst-c3",
        courseId: "c-nr12-seguranca-maquinas-equipamentos",
        title: {
          "pt-BR": "NR-12: Segurança no Trabalho em Máquinas e Equipamentos",
          "en": "NR-12: Safety in Machinery and Equipment Operations",
          "es": "NR-12: Seguridad en el Trabajo en Máquinas y Equipos",
        },
        categoryTag: "Norma Regulamentadora",
        workloadHours: 70,
        order: 3,
        isUnlocked: true,
        accentColor: "#ef4444",
        iconType: "shield",
        description: {
          "pt-BR": "Apreciação de riscos (HRN / ISO 12100), proteções fixas e móveis intertravadas com relés de segurança categoria 4 e dispositivos de parada de emergência.",
          "en": "Risk assessment (HRN / ISO 12100), physical interlocked guards, category 4 safety relays, and emergency stop circuits.",
          "es": "Apreciación de riesgos, protecciones fijas y móviles con enclavamiento y paradas de emergencia.",
        },
        modulesCount: 4,
        lessonsCount: 10,
      },
      {
        id: "mba-sst-c4",
        courseId: "c-nr20-inflamaveis-combustiveis",
        title: {
          "pt-BR": "NR-20: Segurança com Inflamáveis e Combustíveis",
          "en": "NR-20: Safety with Flammable and Combustible Liquids",
          "es": "NR-20: Seguridad con Inflamables y Combustibles",
        },
        categoryTag: "Norma Regulamentadora",
        workloadHours: 70,
        order: 4,
        isUnlocked: true,
        accentColor: "#f97316",
        iconType: "shield",
        description: {
          "pt-BR": "Classificação de instalações (Classe I, II e III), inertização de tanques de armazenamento, controle de fontes de ignição e plano de resposta a emergências.",
          "en": "Facility classification, tank purging and inerting, electrostatic grounding, and chemical fire response plans.",
          "es": "Clasificación de plantas, inertización de tanques, control de ignición y combate a incendios químicos.",
        },
        modulesCount: 4,
        lessonsCount: 10,
      },
      {
        id: "mba-sst-c5",
        courseId: "c-nr35-trabalho-em-altura",
        title: {
          "pt-BR": "NR-35: Trabalho em Altura e Proteção contra Quedas",
          "en": "NR-35: Working at Heights & Fall Protection Systems",
          "es": "NR-35: Trabajo en Alturas y Sistemas Anticaídas",
        },
        categoryTag: "Norma Regulamentadora",
        workloadHours: 70,
        order: 5,
        isUnlocked: true,
        accentColor: "#0284c7",
        iconType: "shield",
        description: {
          "pt-BR": "Cálculo de Zona Livre de Queda (ZLQ), fator de queda (0, 1 e 2), linhas de vida verticais e horizontais, inspeção de cintos e planos de resgate em altura.",
          "en": "Clearance calculation (ZLQ), fall factors (0, 1, 2), horizontal lifeline tension physics, harness inspection, and rescue plans.",
          "es": "Cálculo de zona libre de caída (ZLQ), factor de caída, líneas de vida y rescate en altura.",
        },
        modulesCount: 4,
        lessonsCount: 10,
      },
    ],
  },
];
