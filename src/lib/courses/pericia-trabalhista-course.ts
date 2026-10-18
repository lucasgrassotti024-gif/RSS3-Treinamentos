import { CourseDemonstration } from "@/types";

export const periciaTrabalhistaCourseData: CourseDemonstration = {
  id: "c-pericia-judicial-trabalhista",
  slug: "pericia-judicial-trabalhista-insalubridade-e-periculosidade",
  title: {
    "pt-BR": "Perícia Judicial Trabalhista: Insalubridade, Periculosidade e Laudos Técnicos",
    "en": "Labor Judicial Expertise: Hazardousness, Unhealthiness, and Technical Reports",
    "es": "Peritaje Judicial Laboral: Insalubridad, Peligrosidad e Informes Técnicos",
  },
  description: {
    "pt-BR": "Capacitação completa sobre atuação em perícias trabalhistas: rito processual na Justiça do Trabalho, papéis do perito judicial e assistente técnico, credenciamento no PJe, instrumentação para avaliações quantitativas, elaboração de laudo pericial (NR-15 e NR-16) e caracterização técnica de agentes químicos como sílica livre cristalizada.",
    "en": "Comprehensive training in labor court forensic expertise: court proceedings, judicial expert and technical assistant roles, PJe electronic court registration, hygiene sampling equipment, drafting technical reports under NR-15 and NR-16, and mineral dust exposure evaluation.",
    "es": "Capacitación en peritajes laborales: procedimiento judicial, roles del perito y asistente técnico, acreditación en el sistema PJe, equipos de medición ambiental, redacción de dictámenes (NR-15 y NR-16) y muestreo de agentes químicos.",
  },
  longDescription: {
    "pt-BR": "O curso de Perícia Judicial Trabalhista da RSS3 Treinamentos foi estruturado para capacitar engenheiros de segurança do trabalho, médicos do trabalho, técnicos e assistentes operacionais a atuarem com excelência no âmbito da Justiça do Trabalho e na defesa técnica de contratos industriais críticos. O programa detalha desde os fundamentos processuais do Art. 195 da CLT e Código de Processo Civil (CPC), conduta ética e postura na diligência pericial, credenciamento no Processo Judicial Eletrônico (PJe), tomada de decisão entre compra ou locação de equipamentos de higiene ocupacional calibrados, metodologia de confecção de laudos conclusivos e impugnações técnicas fundamentadas, até a caracterização técnica aprofundada de riscos químicos severos, com ênfase na poeira mineral de sílica livre cristalizada.",
    "en": "The RSS3 Labor Judicial Expertise course qualifies occupational safety engineers, occupational physicians, and safety technicians to act as court-appointed experts or party-appointed technical assistants. Covers procedural labor law, forensic etiquette during site inspections, PJe court platform management, industrial hygiene instrumentation, drafting comprehensive NR-15/NR-16 technical opinions, and specialized hazard assessment for crystalline silica dust.",
    "es": "Capacitación especializada para peritos y asistentes técnicos en inspecciones laborales. Comprende el marco legal de la CLT, acreditación en PJe, instrumentación de higiene industrial, elaboración de informes periciales y evaluación técnica de sílice cristalina.",
  },
  schoolId: "seguranca-epi",
  schoolName: {
    "pt-BR": "Segurança do Trabalho e Equipamentos de Proteção",
    "en": "Occupational Safety & Personal Protective Equipment",
    "es": "Seguridad Laboral y Equipos de Protección",
  },
  workloadHours: 20,
  level: "advanced",
  modality: "online",
  isMandatory: false,
  mandatoryFor: [
    "Engenheiro de Segurança do Trabalho",
    "Médico do Trabalho",
    "Técnico de Segurança do Trabalho",
    "Gerente de Contrato",
    "Analista Jurídico Trabalhista",
    "Perito e Assistente Técnico",
  ],
  targetAudience: {
    "pt-BR": "Engenheiros de segurança do trabalho, médicos do trabalho, técnicos em segurança, advogados trabalhistas, gerentes de contratos industriais e profissionais que desejam atuar como peritos da Justiça do Trabalho ou assistentes técnicos da RSS3.",
    "en": "Safety engineers, occupational physicians, safety technicians, labor attorneys, industrial contract managers, and aspiring forensic technical experts.",
    "es": "Ingenieros de seguridad laboral, médicos del trabajo, técnicos prevencionistas, abogados laborales y peritos judiciales.",
  },
  prerequisites: {
    "pt-BR": "Graduação ou formação técnica em Segurança do Trabalho, Engenharia, Medicina ou Direito; noções básicas de NR-15 e NR-16.",
    "en": "Degree or technical certificate in Occupational Safety, Engineering, Medicine, or Law; basic understanding of NR-15 and NR-16.",
    "es": "Título técnico o profesional en Prevención de Riesgos, Ingeniería, Medicina o Derecho.",
  },
  modulesCount: 3,
  lessonsCount: 7,
  thumbnailGradient: "from-blue-900 via-indigo-950 to-slate-950",
  coverImage: "/images/courses/pericia.jpg",
  categories: ["nr-regulamentar", "qualidade-processos"],
  badgeCode: "PERICIA-TRAB",
  updatedAtDate: "2026-10-17",
  modules: [
    {
      id: "mod-pericia-1",
      order: 1,
      title: {
        "pt-BR": "Módulo 1: Rito Processual, Personagens e Credenciamento no PJe",
        "en": "Module 1: Procedural Rites, Key Roles & PJe Court Registration",
        "es": "Módulo 1: Rito Procesal, Actores Judiciales y Acreditación en PJe",
      },
      description: {
        "pt-BR": "Funcionamento da perícia trabalhista, distinção entre perito do juiz e assistente técnico, requisitos para nomeação e operacionalização do Processo Judicial Eletrônico (PJe).",
        "en": "Mechanics of court expertise, court-appointed experts vs technical assistants, qualification steps, and PJe court portal operation.",
        "es": "Funcionamiento de la pericia judicial, roles procesales, requisitos de habilitación y uso del sistema PJe.",
      },
      lessons: [
        {
          id: "les-pericia-1-1",
          order: 1,
          title: {
            "pt-BR": "Como Funciona uma Perícia de Insalubridade e Periculosidade [Personagens da Perícia Trabalhista]",
            "en": "How Labor Court Inspections Work [Key Roles in Labor Forensic Inspections]",
            "es": "Cómo Funciona un Peritaje de Insalubridad y Peligrosidad [Actores del Proceso]",
          },
          durationMinutes: 16,
          contentType: "video",
          videoUrl: "HB3mQNfBr9s",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender o fluxo legal de uma ação trabalhista que demanda perícia técnica (Art. 195 da CLT) e o papel de cada integrante no dia da diligência.",
              "en": "Understand the legal flow of labor claims requiring forensic inspection and the roles of participants during site visits.",
              "es": "Comprender el marco legal del peritaje laboral y las atribuciones de cada participante en la diligencia.",
            },
            summaryPoints: [
              {
                "pt-BR": "Disposições do Art. 195 da CLT: obrigatoriedade de prova pericial para caracterização de insalubridade e periculosidade.",
                "en": "CLT Art. 195 statutory mandate: requirement of forensic technical evidence for hazardous work claims.",
                "es": "Marco legal del Art. 195: exigencia de peritaje técnico para determinar insalubridad o peligrosidad.",
              },
              {
                "pt-BR": "Distinção de funções: Perito Judicial (olhos e ouvidos do magistrado) vs. Assistente Técnico (defesa técnica fundamentada da parte).",
                "en": "Role distinction: Court-Appointed Expert (impartial officer of the court) vs. Party Technical Assistant.",
                "es": "Diferencia entre el Perito Judicial (auxiliar del juez) y el Asistente Técnico de parte.",
              },
              {
                "pt-BR": "Apresentação de quesitos iniciais e indicação tempestiva de assistente técnico pelas empresas contratantes.",
                "en": "Drafting initial interrogatories (quesitos) and timely appointment of technical assistants.",
                "es": "Presentación de interrogatorios técnicos (preguntas periciales) y plazos procesales.",
              },
            ],
          },
        },
        {
          id: "les-pericia-1-2",
          order: 2,
          title: {
            "pt-BR": "Como se Tornar um Perito da Justiça do Trabalho? [Passo a Passo]",
            "en": "How to Become a Labor Court Judicial Expert [Step-by-Step Guide]",
            "es": "Cómo Convertirse en Perito de la Justicia Laboral [Paso a Paso]",
          },
          durationMinutes: 14,
          contentType: "video",
          videoUrl: "a1Bgwsc2x2U",
          contentDetail: {
            objective: {
              "pt-BR": "Apresentar os pré-requisitos legais de formação, registro profissional e estratégias de cadastramento perante os Tribunais Regionais do Trabalho (TRTs).",
              "en": "Detail legal qualification requirements, professional board registration, and registration steps across regional labor courts.",
              "es": "Detallar los requisitos legales, registro colegiado y trámites de postulación ante los juzgados laborales.",
            },
            summaryPoints: [
              {
                "pt-BR": "Formação obrigatória: Engenharia de Segurança do Trabalho (CREA/CONFEA) ou Medicina do Trabalho (CRM/RQE).",
                "en": "Mandatory credentials: certified Occupational Safety Engineer or Occupational Physician.",
                "es": "Acreditación profesional requerida: Ingeniero de Seguridad Laboral o Médico del Trabajo.",
              },
              {
                "pt-BR": "Inscrição no Cadastro Eletrônico de Peritos e Órgãos Técnicos ou Científicos (CPTEC / SIGEP).",
                "en": "Enrolling in electronic registers of court experts (CPTEC/SIGEP) of Regional Labor Courts.",
                "es": "Inscripción en los registros electrónicos oficiales de peritos judiciales.",
              },
              {
                "pt-BR": "Apresentação profissional ao juiz titular da vara e relacionamento ético no meio forense.",
                "en": "Professional presentation to presiding labor judges and strict ethical judicial conduct.",
                "es": "Presentación profesional ante los jueces y conducta ética forense.",
              },
            ],
          },
        },
        {
          id: "les-pericia-1-3",
          order: 3,
          title: {
            "pt-BR": "Processo Judicial Eletrônico (PJe): Como Funciona o Sistema?",
            "en": "Electronic Judicial Process (PJe): Platform Mechanics & Workflows",
            "es": "Proceso Judicial Electrónico (PJe): Cómo Funciona el Sistema",
          },
          durationMinutes: 15,
          contentType: "video",
          videoUrl: "lIC4aSn8Kjg",
          contentDetail: {
            objective: {
              "pt-BR": "Capacitar o profissional na navegação, intimações, manifestações e juntada de laudos na plataforma PJe-JT.",
              "en": "Train professionals on court notifications, electronic docketing, petition filings, and report uploads via PJe.",
              "es": "Capacitar en el acceso, notificaciones electrónicas y carga de informes en la plataforma PJe.",
            },
            summaryPoints: [
              {
                "pt-BR": "Uso do Certificado Digital padrão ICP-Brasil (Token A3 ou em nuvem) para assinatura e acesso ao PJe.",
                "en": "Using ICP-Brasil digital certificates (A3 physical token or cloud token) for secure PJe login.",
                "es": "Uso de firma electrónica avanzada y certificados digitales para acceder a la plataforma.",
              },
              {
                "pt-BR": "Controle rigoroso de prazos processuais: intimação para agendamento, realização e protocolo do laudo pericial.",
                "en": "Strict procedural deadline tracking: inspection scheduling notifications, site date, and report submission deadlines.",
                "es": "Control de plazos judiciales para calendarización de visita y entrega del dictamen.",
              },
              {
                "pt-BR": "Arbitramento, comprovação e solicitação de honorários periciais prévios e definitivos.",
                "en": "Expert fee petitions, advances, expense reimbursements, and final judicial fee awards.",
                "es": "Solicitud de anticipo y liquidación de honorarios periciales en el sistema.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-pericia-2",
      order: 2,
      title: {
        "pt-BR": "Módulo 2: Postura na Diligência, Instrumentação de Medição e Confecção do Laudo",
        "en": "Module 2: On-Site Conduct, Hygiene Sampling Tools & Technical Report Drafting",
        "es": "Módulo 2: Postura en Diligencia, Equipos de Medición y Redacción del Informe",
      },
      description: {
        "pt-BR": "Comportamento profissional durante a vistoria pericial, viabilidade financeira de instrumentos de medição (compra vs. locação) e estrutura técnica de laudos periciais.",
        "en": "Forensic conduct during site visits, financial evaluation of buying vs renting hygiene equipment, and technical report drafting structure.",
        "es": "Conducta en la inspección de campo, gestión de equipos de muestreo (compra vs alquiler) y confección del laudo.",
      },
      lessons: [
        {
          id: "les-pericia-2-1",
          order: 1,
          title: {
            "pt-BR": "Como o Perito Deve se Comportar / Agir na Perícia?",
            "en": "How the Expert Must Conduct Themselves During the On-Site Inspection",
            "es": "Cómo Debe Comportarse y Actuar el Perito en la Inspección Pericial",
          },
          durationMinutes: 13,
          contentType: "video",
          videoUrl: "U9gZRO5jXKo",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar a postura ética, imparcialidade e condução serena da diligência pericial no ambiente industrial do empregador.",
              "en": "Master professional ethics, neutrality, and effective leadership during contentious on-site industrial inspections.",
              "es": "Dominar la ética profesional, neutralidad y dirección serena de la diligencia en planta industrial.",
            },
            summaryPoints: [
              {
                "pt-BR": "Imparcialidade e equidade: ouvir ambas as partes (reclamante e preposto da empresa) sem juízos prévios de valor.",
                "en": "Impartiality and fairness: hearing both sides (claimant and company representatives) without prejudice.",
                "es": "Imparcialidad: escuchar al trabajador y a la empresa con objetividad técnica.",
              },
              {
                "pt-BR": "Controle de ânimos e gestão de conflitos no chão de fábrica durante entrevistas e medições.",
                "en": "Conflict management and maintaining professional authority on shop floors during heated disputes.",
                "es": "Manejo de tensiones y preservación de la autoridad técnica durante la visita.",
              },
              {
                "pt-BR": "Registro minucioso em ata pericial: assinaturas dos presentes e registro de todas as manifestações verbais.",
                "en": "Drafting inspection attendance minutes: signatures of attendees and recording formal statements.",
                "es": "Levantamiento de acta de inspección con registro de firmas y declaraciones in situ.",
              },
            ],
          },
        },
        {
          id: "les-pericia-2-2",
          order: 2,
          title: {
            "pt-BR": "O que É Melhor? Comprar ou Alugar Equipamentos para Análises Quantitativas?",
            "en": "What Is Best? Purchasing vs Renting Industrial Hygiene Sampling Equipment",
            "es": "¿Qué es Mejor? Comprar o Alquilar Equipos para Evaluaciones Cuantitativas",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "lxApeY3TmI8",
          contentDetail: {
            objective: {
              "pt-BR": "Avaliar o custo-benefício financeiro e os requisitos metrológicos (calibração RBC) na decisão entre aquisição ou locação de instrumentos de higiene ocupacional.",
              "en": "Evaluate ROI and metrological compliance (RBC calibration certificates) when deciding to buy or rent sampling gear.",
              "es": "Evaluar la viabilidad económica y metrológica (calibración vigente) entre compra o alquiler de instrumentos.",
            },
            summaryPoints: [
              {
                "pt-BR": "Instrumentos típicos: dosímetros de ruído (NHO 01 / NR-15), termômetros de globo (IBUTG), bombas gravimétricas e luxímetros.",
                "en": "Standard hygiene instruments: noise dosimeters, heat stress wet-bulb globes, air sampling pumps, lux meters.",
                "es": "Equipos habituales: dosímetros de ruido, medidores de estrés térmico, bombas de muestreo y luxómetros.",
              },
              {
                "pt-BR": "Exigência de certificado de calibração emitido por laboratório acreditado pela CGCRE/INMETRO (RBC) dentro da validade.",
                "en": "Mandatory requirement of valid calibration certificates issued by accredited metrology labs.",
                "es": "Exigencia obligatoria de certificados de calibración vigentes por laboratorios acreditados.",
              },
              {
                "pt-BR": "Análise de fluxo de caixa: locação pontual para demandas específicas vs. aquisição para perícias recorrentes.",
                "en": "Cash-flow modeling: rental for sporadic inspections vs purchase for high-volume active practices.",
                "es": "Modelo de costos: alquiler para demandas esporádicas vs compra para peritajes recurrentes.",
              },
            ],
          },
        },
        {
          id: "les-pericia-2-3",
          order: 3,
          title: {
            "pt-BR": "Como Fazer um Laudo de Insalubridade e Periculosidade?",
            "en": "How to Structure and Draft Unhealthiness and Hazardousness Technical Reports",
            "es": "Cómo Redactar un Dictamen Técnico de Insalubridad y Peligrosidad",
          },
          durationMinutes: 16,
          contentType: "video",
          videoUrl: "cG2g5SMyN9Q",
          contentDetail: {
            objective: {
              "pt-BR": "Aprender a estrutura técnica, fundamentação normativa e redação conclusiva de um laudo pericial aceito e respeitado pelos magistrados.",
              "en": "Master technical structure, statutory foundation, and definitive conclusions of court-admissible forensic reports.",
              "es": "Aprender la estructura formal, fundamentación normativa y conclusiones irrefutables del laudo pericial.",
            },
            summaryPoints: [
              {
                "pt-BR": "Estrutura essencial: identificação das partes, histórico laboral, descrição detalhada do posto de trabalho e rotina do reclamante.",
                "en": "Core structure: case identification, job history, detailed workplace characterization, and operational routines.",
                "es": "Secciones obligatorias: antecedentes, descripción del puesto, mediciones ambientales y fundamentación.",
              },
              {
                "pt-BR": "Enquadramento normativo legal: cotejo com os anexos da NR-15 (insalubridade) e NR-16 (periculosidade).",
                "en": "Statutory analysis: matching measured exposures with NR-15 thresholds and NR-16 hazard criteria.",
                "es": "Encuadre normativo: contraste de resultados con los anexos de la NR-15 y NR-16.",
              },
              {
                "pt-BR": "Resposta objetiva e técnica a todos os quesitos formulados pelo juízo, autor e réu.",
                "en": "Clear, objective answers to all court, plaintiff, and defendant interrogatories.",
                "es": "Respuesta exhaustiva a los cuestionarios formulados por el juez y las partes.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-pericia-3",
      order: 3,
      title: {
        "pt-BR": "Módulo 3: Análise Especializada de Poeira Mineral e Sílica Livre Cristalizada",
        "en": "Module 3: Specialized Assessment of Mineral Dust & Crystalline Silica",
        "es": "Módulo 3: Evaluación Técnica de Polvo Mineral y Sílice Libre Cristalina",
      },
      description: {
        "pt-BR": "Caracterização pericial aprofundada de poeiras minerais, limites de tolerância do Anexo 12 da NR-15, amostragem de sílica livre cristalizada e riscos à saúde (silicose).",
        "en": "In-depth forensic analysis of mineral dusts, NR-15 Annex 12 occupational exposure limits, silica air sampling, and silicosis prevention.",
        "es": "Evaluación pericial de polvos minerales, límites de tolerancia del Anexo 12 de la NR-15, muestreo gravimétrico y prevención de silicosis.",
      },
      lessons: [
        {
          id: "les-pericia-3-1",
          order: 1,
          title: {
            "pt-BR": "Poeira Mineral Sílica Livre Cristalizada [2025]",
            "en": "Mineral Dust & Free Crystalline Silica Hazard Assessment [2025 Updates]",
            "es": "Polvo Mineral y Sílice Libre Cristalina: Evaluación Técnica [Actualizado 2025]",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "OT2CuMyuAp0",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar a metodologia de avaliação pericial de poeiras contendo quartzo/sílica livre cristalizada, cálculo de limites de tolerância e verificação de eficácia de EPC e EPI.",
              "en": "Master sampling methodologies for quartz/crystalline silica dust, exposure limit formulas, and verifying engineering controls and respirators.",
              "es": "Dominar la metodología de muestreo de sílice cristalizada, cálculo de límites de exposición y control con protección respiratoria.",
            },
            summaryPoints: [
              {
                "pt-BR": "Fração respirável vs. poeira total: utilização de ciclone separador e amostragem gravimétrica com bombas de vazão constante (NHO 08).",
                "en": "Respirable vs total dust: cyclone size selectors and gravimetric air sampling according to NHO 08 standards.",
                "es": "Fracción respirable vs polvo total: ciclones separadores y muestreo gravimétrico según normas técnicas.",
              },
              {
                "pt-BR": "Cálculo matemático do Limite de Tolerância (LT) em função do percentual de quartzo (% de sílica) conforme o Anexo 12 da NR-15.",
                "en": "Mathematical determination of Exposure Limits based on percentage of free quartz under NR-15 Annex 12.",
                "es": "Fórmula de cálculo del límite permisible en función del porcentaje de cuarzo en la muestra.",
              },
              {
                "pt-BR": "Impacto na saúde ocupacional (fibrose pulmonar / silicose) e critérios de neutralização da insalubridade mediante proteção respiratória adequada (PFF2/PFF3 com ensaio de vedação).",
                "en": "Health outcomes (silicosis) and legal defense criteria: proving unhealthiness neutralization through fit-tested PFF2/PFF3 respirators.",
                "es": "Patología ocupacional (silicosis) y neutralización mediante protección respiratoria certificada y programa fit-test.",
              },
            ],
          },
        },
      ],
    },
  ],
  finalAssessment: {
    id: "exam-pericia-judicial-trabalhista",
    order: 8,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 20,
    questionsCount: 5,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação teórica com 5 questões abrangendo rito processual pericial, PJe, elaboração de laudos de insalubridade/periculosidade e agentes químicos. Exige 70% de acerto para certificação.",
      "en": "Theoretical assessment covering court expertise procedures, PJe platform, drafting NR-15/16 reports, and chemical hazards. 70% passing score.",
      "es": "Evaluación teórica sobre el procedimiento pericial, sistema PJe, laudos de insalubridad y polvo de sílice. 70% de aprobación requerida.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência Teórica — Perícia Judicial Trabalhista",
      "en": "Final Competency Assessment — Labor Judicial Forensic Expertise",
      "es": "Evaluación Final de Competencias — Peritaje Judicial Laboral",
    },
    description: {
      "pt-BR": "Validação de conhecimentos em processo judicial do trabalho, atuação pericial imparcial, quesitos, instrumentação metrológica e laudos técnicos.",
      "en": "Validation of expertise in labor forensic procedures, court neutrality, interrogatories, calibrated instrumentation, and technical opinions.",
      "es": "Validación de conocimientos en procedimiento pericial laboral, actuación técnica y confección de laudos.",
    },
    questions: [
      {
        id: "q-pericia-1",
        order: 1,
        question: {
          "pt-BR": "1. Conforme o Artigo 195 da Consolidação das Leis do Trabalho (CLT), qual é o requisito mandatório para a caracterização e a classificação da insalubridade e da periculosidade em juízo?",
          "en": "1. Under Article 195 of the Brazilian Labor Code (CLT), what is the mandatory requirement for proving hazardous or unhealthy working conditions in court?",
          "es": "1. Conforme al Artículo 195 de la CLT, ¿cuál es el requisito obligatorio para caracterizar insalubridad y peligrosidad en juicio?",
        },
        options: [
          {
            id: "pericia-q1-a",
            text: {
              "pt-BR": "Realização obrigatória de perícia técnica a cargo de Médico do Trabalho ou Engenheiro de Segurança do Trabalho registrado",
              "en": "Mandatory technical inspection conducted by a registered Occupational Physician or Occupational Safety Engineer",
              "es": "Realización obligatoria de peritaje técnico a cargo de Médico del Trabajo o Ingeniero de Seguridad Laboral colegiado",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O Art. 195 da CLT determina expressamente que a insalubridade e a periculosidade serão atestadas através de perícia a cargo de médico do trabalho ou engenheiro de segurança do trabalho registrado no Ministério do Trabalho.",
              "en": "Correct! CLT Art. 195 mandates technical forensic evaluation strictly by certified safety engineers or occupational physicians.",
              "es": "¡Correcto! El Art. 195 de la CLT exige expresamente la intervención pericial especializada.",
            },
          },
          {
            id: "pericia-q1-b",
            text: {
              "pt-BR": "Apenas apresentação de recibos de pagamento de salário sem necessidade de vistoria in loco",
              "en": "Merely presenting salary pay stubs without any on-site inspection",
              "es": "Presentación de recibos de sueldo sin necesidad de inspección de campo",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A CLT exige perícia técnica presencial para apuração fática das condições ambientais.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "pericia-q1-c",
            text: {
              "pt-BR": "Depoimento verbal exclusivo de testemunhas sem qualquer conhecimento técnico",
              "en": "Exclusive witness testimony without technical basis",
              "es": "Declaración testimonial exclusiva de testigos sin competencia técnica",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A prova pericial não pode ser substituída por mera prova testemunhal quando há viabilidade de diligência técnica.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-pericia-2",
        order: 2,
        question: {
          "pt-BR": "2. Qual é a principal diferença de papel e vinculação entre o Perito Judicial e o Assistente Técnico da empresa em uma perícia trabalhista?",
          "en": "2. What is the key distinction in role and allegiance between the Court Expert and the Party Technical Assistant?",
          "es": "2. ¿Cuál es la diferencia fundamental entre el Perito Judicial y el Asistente Técnico de la empresa?",
        },
        options: [
          {
            id: "pericia-q2-a",
            text: {
              "pt-BR": "O perito judicial é nomeado pelo juiz e tem dever legal de imparcialidade e neutralidade; o assistente técnico é de confiança da parte contratante para acompanhar os trabalhos e formular parecer crítico",
              "en": "The court expert is appointed by the judge with a strict duty of impartiality; the technical assistant is retained by the party to oversee inspections and issue a technical critique",
              "es": "El perito judicial es designado por el juez y debe ser imparcial; el asistente técnico representa la confianza de la parte y emite un informe de parte",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O perito judicial é auxiliar da Justiça e deve manter estrita neutralidade. Já o assistente técnico assessora tecnicamente a parte indicante, elaborando quesitos e parecer técnico concordante ou divergente.",
              "en": "Correct! Court experts owe strict neutrality to the tribunal, while party assistants provide specialized partisan oversight.",
              "es": "¡Correcto! El perito judicial es auxiliar imparcial del magistrado, mientras el asistente técnico defiende técnicamente la posición de la parte.",
            },
          },
          {
            id: "pericia-q2-b",
            text: {
              "pt-BR": "Ambos são indicados pelo sindicato dos trabalhadores e não possuem relação com o processo",
              "en": "Both are appointed by labor unions without connection to court proceedings",
              "es": "Ambos son designados por el sindicato sin vinculación procesal",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "pericia-q2-c",
            text: {
              "pt-BR": "O assistente técnico pode julgar a ação e decidir o valor da indenização independentemente da sentença do juiz",
              "en": "The technical assistant can rule on the case and set damages",
              "es": "El asistente técnico dicta la sentencia definitiva",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A decisão judicial compete exclusivamente ao magistrado.",
              "en": "Incorrect. Only judges possess adjudicative authority.",
              "es": "Incorrecto. La potestad jurisdiccional corresponde exclusivamente al juez.",
            },
          },
        ],
      },
      {
        id: "q-pericia-3",
        order: 3,
        question: {
          "pt-BR": "3. Ao utilizar instrumentos de medição quantitativa em perícias ambientais (ex: dosímetro de ruído ou bomba gravimétrica), qual exigência técnica e jurídica é INDISPENSÁVEL para a validade da prova?",
          "en": "3. When using hygiene measuring instruments in court inspections (e.g., dosimeter or sampling pump), what technical requirement is MANDATORY?",
          "es": "3. Al utilizar instrumentos de medición ambiental en peritajes, ¿qué requisito metrológico es INDISPENSABLE para la validez de la prueba?",
        },
        options: [
          {
            id: "pericia-q3-a",
            text: {
              "pt-BR": "Certificado de calibração RBC/INMETRO vigente emitido por laboratório acreditado, além da calibração acústica/vazão de campo pré e pós-medição",
              "en": "Valid accredited calibration certificate (RBC/INMETRO) plus field calibration before and after sampling",
              "es": "Certificado de calibración vigente por laboratorio acreditado y verificación acústica/flujo antes y después de medir",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Instrumentos descalibrados ou sem rastreabilidade metrológica RBC geram nulidade ou desconsideração da medição no laudo pericial, pois não conferem segurança jurídica ao resultado.",
              "en": "Correct! Hygiene sampling requires accredited metrological traceability to withstand legal scrutiny and challenges.",
              "es": "¡Correcto! Sin certificado de calibración acreditado, los resultados carecen de validez jurídica.",
            },
          },
          {
            id: "pericia-q3-b",
            text: {
              "pt-BR": "Basta que o equipamento seja bonito e tenha tela digital colorida sem necessidade de qualquer calibração",
              "en": "Merely having a colorful digital screen without calibration records",
              "es": "Basta que el equipo tenga pantalla digital sin necesidad de calibración",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A aparência visual não comprova a exatidão das medições.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "pericia-q3-c",
            text: {
              "pt-BR": "Pode-se usar qualquer aplicativo de smartphone sem certificado oficial",
              "en": "Using uncalibrated smartphone apps is acceptable",
              "es": "Se puede usar cualquier aplicación de celular",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Aplicativos de celular não atendem aos critérios normativos da IEC 61672 nem da NHO 01 / Fundacentro.",
              "en": "Incorrect. Smartphone apps do not conform to IEC standard requirements.",
              "es": "Incorrecto. Las aplicaciones móviles no cumplen con las normas técnicas metrológicas.",
            },
          },
        ],
      },
      {
        id: "q-pericia-4",
        order: 4,
        question: {
          "pt-BR": "4. No que tange à avaliação pericial de poeiras minerais contendo Sílica Livre Cristalizada (Quartzo), qual é a metodologia correta de amostragem?",
          "en": "4. Regarding forensic sampling of mineral dust containing Crystalline Silica (Quartz), which sampling method is technically correct?",
          "es": "4. En la evaluación de polvos minerales con Sílice Libre Cristalina, ¿cuál es la metodología correcta de muestreo?",
        },
        options: [
          {
            id: "pericia-q4-a",
            text: {
              "pt-BR": "Amostragem da fração respirável da poeira utilizando bomba de amostragem individual calibrada com ciclone separador e análise laboratorial por difração de raios X (DRX) ou infravermelho",
              "en": "Sampling respirable dust fraction using calibrated air pumps fitted with cyclone size selectors and lab analysis by X-ray diffraction (XRD)",
              "es": "Muestreo de la fracción respirable con bomba de flujo constante, ciclón separador y análisis por difracción de rayos X (DRX)",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A sílica cristalizada causa silicose apenas quando atinge os alvéolos pulmonares (fração respirável). Por isso, a coleta deve utilizar separador ciclônico e análise laboratorial acreditada para determinação da concentração e % de quartzo.",
              "en": "Correct! Crystalline silica causes silicosis only upon reaching lung alveoli, requiring cyclone fractioning and XRD laboratory analysis.",
              "es": "¡Correcto! La fracción respirable es la única causante de silicosis en los alvéolos pulmonares.",
            },
          },
          {
            id: "pericia-q4-b",
            text: {
              "pt-BR": "Passar o dedo na bancada e cheirar a poeira para estimar a quantidade de quartzo",
              "en": "Touching the bench and smelling dust to estimate quartz levels",
              "es": "Tocar el suelo con la mano y oler el polvo para estimar el cuarzo",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "pericia-q4-c",
            text: {
              "pt-BR": "Considerar qualquer poeira como inerte sem necessidade de determinação do percentual de quartzo",
              "en": "Classifying all dust as nuisance dust without measuring quartz percentage",
              "es": "Asumir que todo polvo es inocuo sin analizar el porcentaje de cuarzo",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A presença de sílica livre cristalizada descaracteriza a poeira como inerte e aciona os limites rígidos do Anexo 12 da NR-15.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-pericia-5",
        order: 5,
        question: {
          "pt-BR": "5. O que pode neutralizar ou descaracterizar a insalubridade por agentes químicos ou físicos em um laudo pericial, desonerando a empresa do adicional?",
          "en": "5. What can legally neutralize hazardous unhealthiness in a forensic report, removing liability for unhealthiness premiums?",
          "es": "5. ¿Qué puede neutralizar legalmente la insalubridad en un laudo pericial, eximiendo a la empresa del adicional?",
        },
        options: [
          {
            id: "pericia-q5-a",
            text: {
              "pt-BR": "A comprovação de medidas de proteção coletiva (EPC) eficazes ou fornecimento de EPI adequado com CA válido, ficha de entrega assinada, substituição periódica, higienização e treinamento comprovado",
              "en": "Proof of effective collective engineering controls (EPC) or certified PPE (valid CA) with signed delivery records, replacement, and training",
              "es": "Comprobación de protección colectiva eficaz o entrega documentada de EPP certificado con CA vigente, mantención y capacitación",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Conforme o Art. 191 da CLT e Súmula 289 do TST, a eliminação ou neutralização da insalubridade ocorre pela adoção de medidas que conservem o ambiente dentro dos limites ou pela utilização de EPI eficaz que neutralize o agente nocivo, devidamente comprovado documentalmente.",
              "en": "Correct! Under CLT Art. 191 and TST Precedent 289, documented effective PPE and EPC neutralize statutory unhealthiness liability.",
              "es": "¡Correcto! Conforme al Art. 191 de la CLT, la protección efectiva comprobada elimina la obligación del pago del adicional.",
            },
          },
          {
            id: "pericia-q5-b",
            text: {
              "pt-BR": "Uma promessa verbal do gestor de que a fábrica será reformada no ano seguinte",
              "en": "A verbal promise from the manager to remodel next year",
              "es": "Una promesa verbal de remodelar las instalaciones el próximo año",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Promessas futuras não neutralizam o risco pretérito ou presente.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "pericia-q5-c",
            text: {
              "pt-BR": "Apenas pagar o adicional sem se preocupar em fornecer equipamentos de proteção",
              "en": "Just paying the stipend without providing protection",
              "es": "Pagar el bono de insalubridad sin entregar protección alguna",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O pagamento de adicional não substitui a obrigação legal de preservar a saúde do colaborador.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
    ],
  },
};
