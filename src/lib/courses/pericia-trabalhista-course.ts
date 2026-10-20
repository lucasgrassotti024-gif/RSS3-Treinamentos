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
    estimatedMinutes: 50,
    questionsCount: 10,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação final sobre o rito processual pericial (CPC e CLT), sistema PJe, quesitos técnicos, insalubridade (NR-15), periculosidade (NR-16), metrologia ambiental e parecer do assistente técnico. Nota mínima de 70% para emissão do certificado.",
      "en": "Final examination covering court expert witness procedures (CPC/CLT), PJe platform, technical interrogatories, unhealthiness (NR-15), hazard pay (NR-16), environmental hygiene, and party-appointed technical assistance. 70% passing score.",
      "es": "Evaluación final sobre el procedimiento pericial laboral (CPC y CLT), sistema PJe, cuestionarios técnicos, insalubridad (NR-15), peligrosidad (NR-16), higiene industrial y dictámenes de parte. Calificación mínima de 70%.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência Teórica — Perícia Judicial Trabalhista",
      "en": "Final Competency Assessment — Labor Judicial Forensic Expertise",
      "es": "Evaluación Final de Competencias — Peritaje Judicial Laboral",
    },
    description: {
      "pt-BR": "Validação de domínio no rito do Art. 195 da CLT e CPC, formulação de quesitos, dever de imparcialidade do perito do juiz, impugnação de laudos pelo assistente técnico, avaliação quantitativa de ruído e sílica (NHO/Fundacentro), inflamáveis/eletricidade e diretrizes regulatórias.",
      "en": "Validates proficiency in CLT Art. 195 and CPC procedures, technical questions (quesitos), court expert impartiality, party assistant contestations, noise and silica hygiene sampling (NHO/Fundacentro), hazardous energy/flammables, and compliance.",
      "es": "Valida competencias en el marco del Art. 195 de la CLT y CPC, formulación de cuestionarios, imparcialidad pericial, impugnación técnica de laudos, mediciones cuantitativas de ruido y sílice (NHO), inflamables y directrices regulatorias.",
    },
    questions: [
      {
        id: "q-pericia-1",
        order: 1,
        question: {
          "pt-BR": "Cenário Operacional: Em uma Reclamação Trabalhista movida por um ex-operador de hidrojateamento contra uma empreiteira de manutenção industrial, o autor pleiteia o pagamento de adicional de insalubridade em grau máximo e periculosidade cumulados. Conforme o Artigo 195 da CLT e o Código de Processo Civil (CPC), qual é o requisito mandatório e exclusivo para a instrução probatória dessas matérias técnicas em juízo?",
          "en": "Operational Scenario: In a labor claim filed by a former hydroblasting operator against an industrial maintenance contractor, the claimant demands maximum unhealthiness and hazard pay concurrently. Under CLT Article 195 and the Civil Procedure Code (CPC), what is the mandatory requirement for proving these technical claims in court?",
          "es": "Escenario Operativo: En un juicio laboral promovido por un exoperador de hidrojet contra una contratista industrial, el demandante reclama adicional de insalubridad en grado máximo y peligrosidad. Según el Artículo 195 de la CLT y el CPC, ¿cuál es el requisito obligatorio para la prueba de estas materias en juicio?",
        },
        options: [
          {
            id: "opt-pericia-1-a",
            text: {
              "pt-BR": "Depoimento oral exclusivo de duas testemunhas que não possuem formação técnica ou conhecimento das normas de higiene ocupacional.",
              "en": "Exclusive witness testimony from two workers lacking any technical education or occupational hygiene background.",
              "es": "Declaración testimonial exclusiva de dos compañeros de trabajo sin conocimientos técnicos ni formación en higiene industrial.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A prova testemunhal não pode substituir a prova pericial técnica quando a apuração in loco for materialmente viável.",
              "en": "Incorrect. Witness testimony cannot substitute for mandatory forensic engineering inspections when physically feasible.",
              "es": "Incorrecto. La prueba testimonial no reemplaza el peritaje técnico obligatorio.",
            },
          },
          {
            id: "opt-pericia-1-b",
            text: {
              "pt-BR": "Realização obrigatória de perícia técnica judicial no local de trabalho (ou por similaridade comprovada se o canteiro tiver sido desmobilizado), conduzida por Médico do Trabalho ou Engenheiro de Segurança do Trabalho legalmente habilitado e registrado.",
              "en": "Mandatory judicial forensic site inspection (or by proven proxy benchmark if the site was decommissioned), conducted strictly by a registered, legally qualified Occupational Physician or Occupational Safety Engineer.",
              "es": "Realización obligatoria de inspección pericial en el lugar de trabajo (o por similaridad acreditada si la obra fue desmovilizada), a cargo de un Médico del Trabajo o Ingeniero de Seguridad Laboral legalmente habilitado y colegiado.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O Art. 195 da CLT estabelece que a caracterização e classificação da insalubridade e periculosidade far-se-ão através de perícia a cargo de Médico do Trabalho ou Engenheiro de Segurança do Trabalho registrado.",
              "en": "Correct! CLT Art. 195 strictly mandates forensic site evaluations by certified safety engineers or occupational physicians.",
              "es": "¡Correcto! El Art. 195 de la CLT exige expresamente la intervención pericial especializada de ingeniero o médico laboral.",
            },
          },
          {
            id: "opt-pericia-1-c",
            text: {
              "pt-BR": "Apenas juntada de extratos bancários do autor comprovando que ele recebia o salário com atraso.",
              "en": "Merely filing the claimant's bank statements proving late payroll transfers.",
              "es": "La sola presentación de extractos bancarios que demuestren retrasos en el pago del sueldo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Extratos bancários tratam de matéria estritamente financeira, nada provando sobre agentes ambientais físicos ou químicos.",
              "en": "Incorrect. Bank statements address wage payment timing, proving zero physical or chemical environmental exposure.",
              "es": "Incorrecto. Los estados de cuenta bancarios no acreditan exposición a agentes ambientales de riesgo.",
            },
          },
          {
            id: "opt-pericia-1-d",
            text: {
              "pt-BR": "Apresentação de uma matéria jornalística genérica da internet sobre acidentes na indústria automotiva.",
              "en": "Submitting a generic online news article discussing accidents in automotive assembly plants.",
              "es": "Presentación de una noticia periodística genérica de internet sobre accidentes en la industria automotriz.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Matérias jornalísticas sem nexo causal específico com o contrato de trabalho são inadmissíveis como laudo técnico.",
              "en": "Incorrect. Generic press clippings have no evidentiary standing for workplace hazard characterization.",
              "es": "Incorrecto. Artículos de prensa genéricos carecen de valor pericial.",
            },
          },
        ],
      },
      {
        id: "q-pericia-2",
        order: 2,
        question: {
          "pt-BR": "Cenário Operacional: Nomeado pelo juízo para atuar em uma perícia sobre adicional de periculosidade por eletricidade e inflamáveis na RSS3, o perito judicial mantém estreita amizade íntima e sociedade comercial em outro empreendimento com o advogado do reclamante. Sob as regras do Código de Processo Civil (CPC, arts. 144 a 148 e art. 467), como o assistente técnico e o departamento jurídico da RSS3 devem proceder?",
          "en": "Operational Scenario: Appointed by the court to evaluate electrical and flammables hazard pay at RSS3, the court expert maintains a close personal friendship and joint commercial partnership with the claimant's attorney. Under the Civil Procedure Code (CPC arts. 144-148 & 467), how must RSS3 legal and technical assistance proceed?",
          "es": "Escenario Operativo: Designado por el juez para evaluar peligrosidad por electricidad e inflamables en RSS3, el perito judicial mantiene estrecha amistad íntima y negocios comerciales con el abogado del demandante. Según el CPC (arts. 144 a 148 y 467), ¿cómo debe proceder RSS3?",
        },
        options: [
          {
            id: "opt-pericia-2-a",
            text: {
              "pt-BR": "Ignorar o fato e permitir que a perícia transcorra normalmente sem nenhuma manifestação nos autos.",
              "en": "Ignore the matter and allow the inspection to proceed without any court objection.",
              "es": "Ignorar el hecho y permitir que el peritaje se lleve a cabo sin objetar nada en el expediente.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A preclusão do prazo para arguir a suspeição convalida a nomeação viciada e compromete a defesa da empresa.",
              "en": "Incorrect. Failing to timely raise bias forfeits the objection, prejudicing the company's defense.",
              "es": "Incorrecto. No recusar oportunamente convalida el vicio y perjudica la defensa de la empresa.",
            },
          },
          {
            id: "opt-pericia-2-b",
            text: {
              "pt-BR": "Arguição formal de Suspeição / Impedimento do perito judicial no prazo legal de 15 dias a contar do conhecimento da nomeação, instruída com provas documentais da sociedade comercial ou da amizade íntima, requerendo a destituição do perito e a nomeação de profissional equidistante das partes.",
              "en": "Formal challenge of Disqualification / Bias (Suspeição/Impedimento) against the court expert within the statutory 15-day window, documented with proofs of joint business ventures or close friendship, demanding recusal and appointment of an impartial expert.",
              "es": "Recusación formal por Impedimento / Sospecha del perito judicial en el plazo legal de 15 días desde la notificación, acreditando documentalmente la sociedad comercial o amistad íntima y solicitando la designación de un perito imparcial.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O perito do juiz está sujeito aos mesmos motivos de impedimento e suspeição aplicáveis aos juízes (CPC, art. 148, II). O perito deve ser estritamente imparcial e equidistante das partes.",
              "en": "Correct! Court-appointed experts are bound by judicial impartiality mandates (CPC Art. 148, II). Documented conflict of interest mandates disqualification.",
              "es": "¡Correcto! Los peritos judiciales están sujetos a las mismas causales de recusación que los jueces (CPC art. 148). Deben ser absolutamente imparciales.",
            },
          },
          {
            id: "opt-pericia-2-c",
            text: {
              "pt-BR": "Oferecer um pagamento financeiro em dinheiro para o perito para que ele mude de lado e decida a favor da empresa.",
              "en": "Offering cash bribes to the court expert to flip sides in favor of the company.",
              "es": "Ofrecer un soborno económico al perito para que falle a favor de la empresa.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e criminoso. Caracteriza crime de corrupção ativa (Código Penal, art. 333) e viola gravissimamente o compliance da RSS3.",
              "en": "Incorrect and criminal. Constitutes active bribery under statutory penal codes and violates company integrity standards.",
              "es": "Incorrecto y delictivo. Constituye cohecho activo y viola las directrices de integridad de RSS3.",
            },
          },
          {
            id: "opt-pericia-2-d",
            text: {
              "pt-BR": "Contratar o perito judicial como funcionário com carteira assinada da RSS3 antes da realização da vistoria.",
              "en": "Hiring the court expert as an official salaried RSS3 employee before the site inspection takes place.",
              "es": "Contratar al perito judicial como empleado en nómina de RSS3 antes de la inspección.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e antiético. Agrava a nulidade do processo e compromete a licitude da prova pericial.",
              "en": "Incorrect and unethical. Creates blatant procedural nullity and compromises forensic integrity.",
              "es": "Incorrecto e ilícito. Invalida el peritaje y genera responsabilidades legales.",
            },
          },
        ],
      },
      {
        id: "q-pericia-3",
        order: 3,
        question: {
          "pt-BR": "Cenário Operacional: No processo trabalhista envolvendo alegação de surdez ocupacional e insalubridade por ruído contínuo em frente de hidrojateamento, o assistente técnico da RSS3 formula os quesitos prévios à diligência. Qual conjunto de formulações de quesitos técnicos é estratégico e pertinente para comprovar a eficácia preventiva da empresa?",
          "en": "Operational Scenario: In a labor lawsuit alleging occupational hearing loss and noise unhealthiness during hydroblasting, RSS3's technical assistant prepares interrogatories (quesitos). Which set of technical questions is strategically sound and legally pertinent to demonstrate employer prevention?",
          "es": "Escenario Operativo: En un juicio por pérdida auditiva e insalubridad por ruido en hidrojet, el perito de parte de RSS3 formula los cuestionarios periciales. ¿Qué conjunto de preguntas técnicas es estratégico y pertinente para la defensa de la empresa?",
        },
        options: [
          {
            id: "opt-pericia-3-a",
            text: {
              "pt-BR": "'1. Informe o Sr. Perito se o reclamante é uma pessoa simpática? 2. É verdade que o autor torce pelo mesmo time de futebol do juiz?'",
              "en": "'1. Can the expert report whether the claimant is friendly? 2. Is it true the claimant cheers for the judge's soccer team?'",
              "es": "'1. ¿El demandante es una persona simpática? 2. ¿Es verdad que simpatiza por el mismo equipo de fútbol que el juez?'",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Quesitos impertinentes e desprovidos de relevância técnica ou jurídica para a causa.",
              "en": "Incorrect. Irrelevant questions lacking any technical or legal substance.",
              "es": "Incorrecto. Preguntas impertinentes sin relevancia técnica ni jurídica.",
            },
          },
          {
            id: "opt-pericia-3-b",
            text: {
              "pt-BR": "'1. Queira o Sr. Perito informar qual dosímetro de ruído foi utilizado, marca, modelo, data da última calibração RBC em laboratório acreditado e se a medição obedeceu aos parâmetros da NHO-01 da Fundacentro (q=5, critério de 85 dBA)? 2. Queira verificar se a reclamada forneceu protetor auditivo tipo concha com Certificado de Aprovação (CA) válido, compatível com a atenuação NRRsf necessária? 3. Constam nos autos fichas de entrega com assinatura do autor, treinamentos de uso correto e fiscalização do uso?'",
              "en": "'1. State which noise dosimeter was deployed, brand, model, calibration date by accredited laboratory, and whether sampling complied with Fundacentro NHO-01 standards (q=5, 85 dBA criterion)? 2. Verify whether the employer supplied earmuff-type hearing protectors with valid Certification of Approval (CA), compatible with required NRRsf attenuation? 3. Are signed PPE receipt forms, usage training logs, and inspection audits present in the court file?'",
              "es": "'1. Indique el perito qué dosímetro de ruido utilizó, marca, modelo, última calibración en laboratorio acreditado y si cumplió la norma NHO-01 de Fundacentro (q=5, criterio 85 dBA). 2. Verifique si la empresa suministró protectores auditivos con Certificado de Aprobación (CA) vigente y atenuación NRRsf adecuada. 3. ¿Constan en el expediente registros firmados de entrega de EPP, capacitaciones de uso correcto y fiscalización?'",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Quesitos técnicos objetivos forçam o perito judicial a demonstrar o rigor metrológico (calibração e NHO-01) e a confrontar os dados com a entrega documental de EPI eficaz com CA válido, neutralizando a insalubridade (Súmula 289 do TST).",
              "en": "Correct! Objective technical interrogatories compel the court expert to validate calibration compliance (NHO-01) and evaluate documented PPE attenuation (valid CA), proving statutory hazard neutralization.",
              "es": "¡Correcto! Cuestionarios técnicos rigurosos exigen validar la calibración de equipos (NHO-01) y la eficacia documentada de los protectores auditivos entregados.",
            },
          },
          {
            id: "opt-pericia-3-c",
            text: {
              "pt-BR": "'1. Pode o perito atestar que na indústria ninguém precisa usar protetor auditivo porque o som da água acalma os ouvidos?'",
              "en": "'1. Can the expert certify that hearing protection is optional because rushing water sounds calm the ears?'",
              "es": "'1. ¿Puede el perito certificar que el ruido del hidrojet no daña el oído porque el agua es relajante?'",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo. Jatos de ultra-alta pressão geram níveis de ruído frequentemente superiores a 105 dBA, com altíssimo risco de perda auditiva induzida por ruído (PAIR).",
              "en": "Incorrect and absurd. Ultra-high pressure hydroblasting generates sound levels frequently topping 105 dBA, presenting severe noise-induced hearing loss risks.",
              "es": "Incorrecto y ridículo. El hidrojet genera niveles de ruido superiores a 105 dBA con alto riesgo auditivo.",
            },
          },
          {
            id: "opt-pericia-3-d",
            text: {
              "pt-BR": "'1. É possível calcular o ruído apenas encostando um copo de vidro na parede da caldeira?'",
              "en": "'1. Is it possible to measure industrial noise by pressing a drinking glass against the boiler shell?'",
              "es": "'1. ¿Se puede medir el ruido apoyando un vaso de vidrio en la pared de la caldera?'",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A avaliação de ruído ocupacional exige dosímetro integrador com filtro de ponderação 'A' e circuito 'lento' conforme NHO-01.",
              "en": "Incorrect. Occupational noise assessment strictly demands integrating noise dosimeters compliant with NHO-01 / IEC standards.",
              "es": "Incorrecto. La medición exige dosímetros integradores calibrados bajo norma NHO-01.",
            },
          },
        ],
      },
      {
        id: "q-pericia-4",
        order: 4,
        question: {
          "pt-BR": "Cenário Operacional: Em perícia para apuração de insalubridade por poeiras minerais contendo sílica livre cristalizada (Anexo 12 da NR-15) em atividade de preparação de superfície em área industrial, qual metodologia metrológica e analítica é obrigatória para que a amostragem ambiental tenha validade técnica e jurídica?",
          "en": "Operational Scenario: In a forensic inspection investigating unhealthiness from mineral dust containing crystalline free silica (NR-15 Annex 12) during abrasive surface prep, which sampling methodology and lab analysis are mandatory for legal validity?",
          "es": "Escenario Operativo: En un peritaje por polvos minerales con sílice libre cristalizada (Anexo 12 de la NR-15) en preparación superficial, ¿qué metodología de muestreo y análisis de laboratorio es obligatoria para su validez legal?",
        },
        options: [
          {
            id: "opt-pericia-4-a",
            text: {
              "pt-BR": "Passar a mão sobre o piso de concreto, cheirar o pó e estimar o teor de sílica no olho sem recolher amostras para análise laboratorial.",
              "en": "Wiping the concrete floor with bare hands, smelling the dust, and visually guessing quartz content without laboratory analysis.",
              "es": "Pasar la mano por el suelo, oler el polvo y estimar a simple vista el porcentaje de cuarzo sin análisis de laboratorio.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e grosseiro. Análise qualitativa sensorial não possui nenhuma validade científica para sílica cristalizada.",
              "en": "Incorrect. Sensory estimation has zero scientific or forensic validity for respirable crystalline silica.",
              "es": "Incorrecto y sin valor científico para la determinación de sílice.",
            },
          },
          {
            id: "opt-pericia-4-b",
            text: {
              "pt-BR": "Amostragem da fração respirável da poeira utilizando bomba gravimétrica de vazão constante com separador ciclônico calibrado na zona respiratória do trabalhador, com análise quantitativa em laboratório acreditado por Difração de Raios X (DRX) ou Espectrofotometria no Infravermelho (FTIR) para determinação da concentração e do percentual de quartzo.",
              "en": "Sampling the respirable dust fraction using constant-flow personal air sampling pumps fitted with cyclone particle separators calibrated in the worker's breathing zone, followed by accredited laboratory quantification via X-Ray Diffraction (XRD) or Fourier Transform Infrared (FTIR) spectrometry to establish concentration and quartz percentage.",
              "es": "Muestreo de la fracción respirable del polvo mediante bomba de flujo constante con ciclón separador calibrado en la zona respiratoria del operario, y posterior análisis en laboratorio acreditado por Difracción de Rayos X (DRX) o Espectrometría Infrarroja (FTIR) para determinar la concentración y porcentaje de cuarzo.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O Anexo 12 da NR-15 e a NHO-08 da Fundacentro exigem a coleta da fração respirável (partículas que atingem os alvéolos pulmonares) com ciclone e análise por DRX/FTIR para aplicar a fórmula do Limite de Tolerância (LT = 8 / (% quartzo + 2) mg/m³).",
              "en": "Correct! NR-15 Annex 12 and Fundacentro NHO-08 mandate respirable fraction cyclone collection and XRD/FTIR lab testing to calculate statutory exposure limits (TL = 8 / (% quartz + 2) mg/m³).",
              "es": "¡Correcto! La norma exige captar la fracción respirable con ciclón y cuantificar el cuarzo por DRX o FTIR para aplicar el Límite de Tolerancia.",
            },
          },
          {
            id: "opt-pericia-4-c",
            text: {
              "pt-BR": "Colocar um aspirador de pó doméstico na portaria da fábrica e pesar o filtro após 30 dias de uso.",
              "en": "Placing a household vacuum cleaner at the front gate and weighing the bag after 30 days.",
              "es": "Instalar una aspiradora doméstica en la entrada de la fábrica y pesar la bolsa tras 30 días.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O aspirador doméstico não separa frações respiráveis nem possui calibração metrológica ocupacional.",
              "en": "Incorrect. Household vacuums cannot separate respirable particulate fractions and lack metrological calibration.",
              "es": "Incorrecto. Equipos domésticos no son válidos para higiene industrial ocupacional.",
            },
          },
          {
            id: "opt-pericia-4-d",
            text: {
              "pt-BR": "Considerar que qualquer poeira mineral em obra civil é automaticamente sílica em teor de 100%, dispensando laudos laboratoriais.",
              "en": "Assuming all mineral construction dust is 100% crystalline silica automatically, waiving laboratory assays.",
              "es": "Presumir que cualquier polvo mineral en obra es 100% sílice pura sin necesidad de ensayos de laboratorio.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A legislação trabalhista brasileira veda presunções sem base analítica para agentes químicos do Anexo 12.",
              "en": "Incorrect. Brazilian occupational safety law forbids presumptions without analytical laboratory validation under Annex 12.",
              "es": "Incorrecto. La normativa exige análisis cuantitativo riguroso de laboratorio.",
            },
          },
        ],
      },
      {
        id: "q-pericia-5",
        order: 5,
        question: {
          "pt-BR": "Cenário Operacional: Em ação judicial versando sobre periculosidade por inflamáveis (NR-16, Anexo 2), o reclamante alega que adentrava diariamente em bacia de contenção de tanques de solventes e tintas inflamáveis para realizar inspeções de rotina. Sob a jurisprudência consolidada do Tribunal Superior do Trabalho (Súmula 364 do TST), o que define a caracterização ou exclusão do direito ao adicional de periculosidade de 30%?",
          "en": "Operational Scenario: In a lawsuit alleging flammables hazard pay (NR-16 Annex 2), the claimant argues entering a containment dike holding bulk solvent and flammable coating tanks daily for routine inspections. Under TST Precedent 364 (Súmula 364), what defines the granting or denial of the 30% statutory hazard pay?",
          "es": "Escenario Operativo: En un juicio sobre peligrosidad por inflamables (NR-16 Anexo 2), el demandante afirma que ingresaba a diario al cubeto de retención de estanques de solventes y pinturas para inspecciones de rutina. Según la jurisprudencia del TST (Súmula 364), ¿qué criterio define el derecho al adicional del 30%?",
        },
        options: [
          {
            id: "opt-pericia-5-a",
            text: {
              "pt-BR": "O adicional é devido integralmente ao empregado exposto permanentemente ou que, de forma intermitente, sujeita-se a condições de risco acentuado; sendo indevido apenas quando o contato dá-se de forma fortuita (casual) ou, sendo habitual, dá-se por tempo extremamente reduzido.",
              "en": "Hazard pay is due in full to employees exposed permanently or who intermittently face heightened risk; it is excluded only when exposure is purely accidental/casual (fortuitous) or, when habitual, occurs for an extremely negligible fraction of time.",
              "es": "El adicional corresponde íntegramente al trabajador expuesto de forma permanente o que, de modo intermitente, se expone a condiciones de riesgo acentuado; siendo indebido únicamente cuando el contacto es fortuito (casual) o, siendo habitual, por tiempo extremadamente reducido.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A Súmula 364 do TST pacifica que a exposição intermitente (rotineira, diária) a inflamáveis em área de risco confere direito integral ao adicional de 30%, afastando o benefício apenas se o contato for fortuito ou por tempo extremamente reduzido.",
              "en": "Correct! TST Precedent 364 confirms that intermittent (recurring/daily) exposure to flammables inside hazardous zones grants full 30% hazard pay, excluded only if fortuitous or extremely negligible.",
              "es": "¡Correcto! La Súmula 364 del TST establece que el contacto intermitente y habitual con inflamables en área de riesgo otorga derecho al adicional íntegro.",
            },
          },
          {
            id: "opt-pericia-5-b",
            text: {
              "pt-BR": "O adicional só é devido se o trabalhador sofrer uma explosão real com queimaduras graves durante o expediente.",
              "en": "Hazard pay is only owed if the worker experiences an actual explosion with severe third-degree burns on the job.",
              "es": "El adicional solo corresponde si el trabajador sufre una explosión real con quemaduras graves durante su jornada.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo. O adicional de periculosidade remunera o risco potencial acentuado à vida, não a consumação do sinistro.",
              "en": "Incorrect. Hazard pay compensates potential fatal hazard exposure, not actual injury consummation.",
              "es": "Incorrecto. La peligrosidad compensa el riesgo potencial grave, no la ocurrencia del accidente.",
            },
          },
          {
            id: "opt-pericia-5-c",
            text: {
              "pt-BR": "O valor do adicional deve ser fracionado por minuto exato, pagando-se apenas R$ 0,50 por cada minuto passado dentro da bacia.",
              "en": "Hazard pay must be calculated down to exact minutes, paying only pennies per minute spent inside the tank farm dike.",
              "es": "El adicional debe pagarse fraccionado por minutos exactos dentro del cubeto.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A Súmula 364 do TST expressamente proíbe o pagamento proporcional ou fracionado do adicional de periculosidade.",
              "en": "Incorrect. TST Precedent 364 strictly prohibits proportional minute-based hazard pay proration.",
              "es": "Incorrecto. La jurisprudencia prohíbe el pago proporcional de la peligrosidad.",
            },
          },
          {
            id: "opt-pericia-5-d",
            text: {
              "pt-BR": "Tintas e solventes industriais nunca são considerados produtos inflamáveis pela legislação brasileira.",
              "en": "Industrial thinners and coatings are never classified as flammable substances under Brazilian law.",
              "es": "Las pinturas y solventes industriales nunca se consideran sustancias inflamables en la legislación.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Solventes aromáticos, epóxis e poliuretanos contêm solventes com ponto de fulgor abaixo de 60 °C, sendo classificados como inflamáveis pela NR-16 e NR-20.",
              "en": "Incorrect. Industrial coatings and thinners typically have flash points well below 60 °C, classifying as flammables under NR-16/NR-20.",
              "es": "Incorrecto. La mayoría de los solventes de pintura tienen punto de inflamación bajo 60 °C.",
            },
          },
        ],
      },
      {
        id: "q-pericia-6",
        order: 6,
        question: {
          "pt-BR": "Cenário Operacional: Em conformidade com o Artigo 191 da CLT e a Súmula 289 do TST, em quais circunstâncias fáticas e documentais a empresa contratada consegue comprovar a eliminação ou neutralização da insalubridade por ruído e agentes químicos em juízo?",
          "en": "Operational Scenario: Under CLT Article 191 and TST Precedent 289 (Súmula 289), under which factual and documented conditions can an industrial contractor prove the legal elimination or neutralization of unhealthiness in court?",
          "es": "Escenario Operativo: Conforme al Artículo 191 de la CLT y la Súmula 289 del TST, ¿bajo qué condiciones fácticas y documentales puede la empresa demostrar la eliminación o neutralización de la insalubridad en juicio?",
        },
        options: [
          {
            id: "opt-pericia-6-a",
            text: {
              "pt-BR": "Basta alegar verbalmente que comprou EPIs, sem necessidade de apresentar recibos de entrega ou notas fiscais.",
              "en": "Merely claiming verbally that PPE was bought, without presenting signed issue logs or supplier invoices.",
              "es": "Basta con afirmar verbalmente que se compraron EPP, sin necesidad de comprobantes firmados.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O ônus da prova pertence ao empregador e exige prova documental contemporânea robusta.",
              "en": "Incorrect. The burden of proof rests on the employer and requires contemporaneous written records.",
              "es": "Incorrecto. La carga de la prueba exige registros documentales contemporáneos firmados.",
            },
          },
          {
            id: "opt-pericia-6-b",
            text: {
              "pt-BR": "A comprovação cumulativa de: 1. Adoção de medidas de proteção coletiva (EPC) ou fornecimento comprovado de EPI adequado com Certificado de Aprovação (CA) válido expedido pelo órgão competente; 2. Fichas de entrega individuais assinadas pelo colaborador comprovando periodicidade de substituição; 3. Comprovação documental de treinamento sobre uso correto, higienização e guarda; 4. Fiscalização efetiva do uso obrigatório na rotina de trabalho (registrada em auditorias de campo e diálogos de segurança).",
              "en": "Cumulative proof of: 1. Collective engineering controls (EPC) or documented provision of certified PPE with valid Certificate of Approval (CA); 2. Individual delivery logs signed by the worker demonstrating regular replacement cadence; 3. Documented proof of training on proper donning, cleaning, and storage; 4. Documented supervisory enforcement of mandatory usage (audits, disciplinary records, safety briefings).",
              "es": "Comprobación acumulativa de: 1. Medidas de protección colectiva (EPC) o entrega documentada de EPP con Certificado de Aprobación (CA) vigente; 2. Fichas individuales de entrega firmadas acreditando reemplazo periódico; 3. Registro formal de capacitación en uso, limpieza y cuidado; 4. Fiscalización efectiva del uso obligatorio en campo (auditorías y charlas de seguridad).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A Súmula 289 do TST estabelece categoricamente: 'O simples fornecimento do aparelho de proteção pelo empregador não o exime do pagamento do adicional de insalubridade, cabendo-lhe tomar as medidas que conduzam à diminuição ou eliminação da nocividade, entre as quais as relativas ao uso efetivo do EPI pelo empregado'.",
              "en": "Correct! TST Precedent 289 states that merely supplying PPE does not exempt the employer; the employer must prove training, continuous replacement, and active frontline enforcement of actual usage.",
              "es": "¡Correcto! La Súmula 289 del TST exige entrega con CA vigente, capacitación y fiscalización rigurosa del uso efectivo en campo.",
            },
          },
          {
            id: "opt-pericia-6-c",
            text: {
              "pt-BR": "Uma promessa escrita da diretoria garantindo que a fábrica se tornará 100% limpa nos próximos 15 anos.",
              "en": "A written pledge from directors promising the facility will become 100% clean within 15 years.",
              "es": "Una promesa escrita de la dirección prometiendo que la planta será ecológica en 15 años.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Promessas futuras não neutralizam exposições pretéritas ocorridas durante o contrato de trabalho.",
              "en": "Incorrect. Future promises cannot retroactively remediate past hazardous exposure.",
              "es": "Incorrecto. Promesas futuras no neutralizan la exposición ya ocurrida.",
            },
          },
          {
            id: "opt-pericia-6-d",
            text: {
              "pt-BR": "Pagar um adicional de café da manhã para a equipe em substituição ao protetor auricular e respirador.",
              "en": "Paying a breakfast bonus in lieu of supplying certified respirators and hearing protection.",
              "es": "Entregar un vale de desayuno a la cuadrilla en lugar de protectores auditivos y respiradores.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilegal. Direitos à saúde e integridade física são indisponíveis e inegociáveis.",
              "en": "Incorrect and unlawful. Life-safety and occupational health rights are non-negotiable.",
              "es": "Incorrecto e ilícito. La protección de la salud es un derecho irrenunciable.",
            },
          },
        ],
      },
      {
        id: "q-pericia-7",
        order: 7,
        question: {
          "pt-BR": "Cenário Operacional: Após a entrega do laudo técnico conclusivo pelo perito do juiz que considerou a atividade insalubre por calor excessivo (NR-15, Anexo 3), o assistente técnico da RSS3 identifica que o perito utilizou um termômetro de mercúrio comum de farmácia em vez do medidor de estresse térmico calibrado com sensor de bulbo úmido natural, bulbo seco e esfera de cobre (IBUTG). Qual peça técnica e procedimento o assistente técnico da RSS3 deve elaborar?",
          "en": "Operational Scenario: Following the court expert's report finding unhealthiness due to excessive heat (NR-15 Annex 3), RSS3's technical assistant discovers the expert used a drugstore mercury thermometer instead of a calibrated WBGT (IBUTG) heat stress monitor with natural wet-bulb, dry-bulb, and globe sensors. Which technical document and procedure must RSS3's assistant produce?",
          "es": "Escenario Operativo: Tras el laudo pericial que declaró insalubridad por calor (NR-15 Anexo 3), el perito de parte de RSS3 comprueba que el perito judicial usó un termómetro de farmacia en vez de un medidor calibrado de estrés térmico TGBH/IBUTG. ¿Qué documento técnico y acción debe presentar RSS3?",
        },
        options: [
          {
            id: "opt-pericia-7-a",
            text: {
              "pt-BR": "Elaborar um Parecer Técnico Divergente fundamentado, demonstrando a nulidade metodológica da medição (violação da NHO-06 da Fundacentro e do Anexo 3 da NR-15), indicando a ausência do índice IBUTG e da taxa metabólica (M) da atividade, e formulando quesitos suplementares elucidativos para que o juiz determine a retificação da perícia ou a realização de nova medição com instrumental calibrado.",
              "en": "Draft a grounded Dissenting Technical Report (Parecer Técnico Divergente) demonstrating methodological nullity (breach of Fundacentro NHO-06 and NR-15 Annex 3), exposing the absence of true WBGT (IBUTG) indices and metabolic rate (M) modeling, and formulating clarifying supplemental interrogatories for the court to mandate remeasurement with calibrated instrumentation.",
              "es": "Elaborar un Dictamen Técnico Disidente fundamentado, demostrando la nulidad metodológica de la medición (violación de la NHO-06 y Anexo 3 de la NR-15), evidenciando la falta del índice TGBH/IBUTG y tasa metabólica (M), y formulando cuestionarios aclaratorios para exigir nueva medición con equipo calibrado.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O laudo pericial que viola as normas metrológicas oficiais de higiene ocupacional (NHO-06 e NR-15) deve ser tecnicamente impugnado mediante parecer divergente circunstanciado com quesitos de esclarecimento ao juízo.",
              "en": "Correct! Forensic opinions violating official metrological hygiene codes (NHO-06 / NR-15) must be formally contested via a Dissenting Technical Report with structured clarifying interrogatories.",
              "es": "¡Correcto! Laudos que violan normas metrológicas oficiales deben ser impugnados mediante dictamen técnico disidente y cuestionarios aclaratorios.",
            },
          },
          {
            id: "opt-pericia-7-b",
            text: {
              "pt-BR": "Concordar com o laudo do perito judicial para evitar desgaste com o juiz e aceitar a condenação financeira da empresa.",
              "en": "Concur with the court expert's report to avoid tension with the judge and accept financial liability.",
              "es": "Aceptar el informe pericial viciado para no confrontar al juez y asumir la condena económica.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e lesivo. O assistente técnico tem o dever de apontar erros técnicos grosseiros cometidos pelo perito judicial para resguardar a verdade fática.",
              "en": "Incorrect. The party technical assistant has a professional duty to expose gross technical flaws to uphold factual truth.",
              "es": "Incorrecto. El perito de parte debe defender técnicamente la verdad de los hechos y la metodología correcta.",
            },
          },
          {
            id: "opt-pericia-7-c",
            text: {
              "pt-BR": "Invadir o laboratório do perito à noite e danificar os computadores dele.",
              "en": "Breaking into the expert's lab at night to damage his computer systems.",
              "es": "Ingresar sin autorización al laboratorio del perito para dañar sus equipos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e criminoso. Atenta contra a lei penal.",
              "en": "Incorrect and criminal.",
              "es": "Incorrecto y delictivo.",
            },
          },
          {
            id: "opt-pericia-7-d",
            text: {
              "pt-BR": "Desistir do processo trabalhista e demitir todos os funcionários da fábrica.",
              "en": "Surrendering the lawsuit and terminating all facility workers immediately.",
              "es": "Abandonar el juicio y despedir a todo el personal de la empresa.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e desproporcional.",
              "en": "Incorrect and disproportionate.",
              "es": "Incorrecto y desmedido.",
            },
          },
        ],
      },
      {
        id: "q-pericia-8",
        order: 8,
        question: {
          "pt-BR": "Cenário Operacional: Na perícia médica para averiguação de nexo causal entre uma lesão de coluna lombar (hérnia de disco) de um montador de andaimes e suas atividades laborais na RSS3, qual papel desempenham o Perfil Profissiográfico Previdenciário (PPP), o Laudo Técnico das Condições Ambientais do Trabalho (LTCAT) e o Atestado de Saúde Ocupacional (ASO)?",
          "en": "Operational Scenario: In a medical forensic inspection evaluating causality between a scaffolder's lumbar disc herniation and his work at RSS3, what evidentiary role do the PPP, LTCAT, and Occupational Medical Clearance (ASO) play?",
          "es": "Escenario Operativo: En un peritaje médico sobre nexo de causalidad entre una hernia discal de un andamiero y sus labores en RSS3, ¿qué papel probatorio cumplen el PPP, el LTCAT y los exámenes médicos (ASO)?",
        },
        options: [
          {
            id: "opt-pericia-8-a",
            text: {
              "pt-BR": "São documentos dispensáveis que não devem ser apresentados ao perito médico do juiz.",
              "en": "They are irrelevant paperwork that should never be submitted to the court medical examiner.",
              "es": "Son documentos de rutina sin importancia que no deben entregarse al perito médico.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. São as peças fundamentais da história ocupacional do trabalhador.",
              "en": "Incorrect. They form the core documentary history of the worker's occupational exposure.",
              "es": "Incorrecto. Constituyen el historial documental básico de la salud y exposición del trabajador.",
            },
          },
          {
            id: "opt-pericia-8-b",
            text: {
              "pt-BR": "Constituem a prova documental histórica da saúde ocupacional e dos riscos ambientais: o ASO comprova a aptidão inicial e periódica com registros de exames complementares; o LTCAT e a Análise Ergonômica do Trabalho (AET) demonstram se havia sobrecarga biomecânica ou pausas ergonômicas; e o PPP sintetiza todo o histórico de exposição, permitindo ao perito analisar se houve nexo de causalidade ou concausalidade com a patologia.",
              "en": "They constitute the authoritative documentary history of occupational health and jobsite exposures: ASOs establish baseline and periodic fitness with clinical exams; LTCAT and Ergonomic Work Analyses (AET) demonstrate whether biomechanical strain was mitigated with breaks; and the PPP synthesizes lifetime exposure, allowing the court physician to evaluate direct causality or concausality.",
              "es": "Constituyen la prueba documental histórica de salud ocupacional y riesgos: los ASO acreditan la aptitud inicial y periódica con exámenes complementarios; el LTCAT y el Análisis Ergonómico demuestran si hubo sobrecarga biomecánica o pausas; y el PPP sintetiza la exposición laboral, permitiendo al perito determinar si existe nexo causal o concausal.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O conjunto ASO + AET/LTCAT + PPP comprova o histórico de higidez física do colaborador e as medidas de proteção ergonômica adotadas pela RSS3, fundamentando a defesa contra nexos causais infundados.",
              "en": "Correct! The ASO + AET/LTCAT + PPP suite provides objective forensic evidence of baseline health and proactive ergonomics, safeguarding against unfounded industrial disease claims.",
              "es": "¡Correcto! Respaldan técnicamente el historial de salud y las medidas ergonómicas de la empresa frente a reclamos de enfermedad laboral.",
            },
          },
          {
            id: "opt-pericia-8-c",
            text: {
              "pt-BR": "O PPP e o LTCAT servem unicamente para cálculo do Imposto de Renda do perito judicial.",
              "en": "The PPP and LTCAT serve solely to calculate the court expert's personal income tax.",
              "es": "El PPP y LTCAT sirven únicamente para calcular los impuestos personales del perito.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e desconexo da legislação previdenciária e trabalhista.",
              "en": "Incorrect and irrelevant to labor statutes.",
              "es": "Incorrecto y sin sentido.",
            },
          },
          {
            id: "opt-pericia-8-d",
            text: {
              "pt-BR": "Basta apresentar a certidão de nascimento do colaborador para afastar qualquer doença ocupacional.",
              "en": "Submitting the worker's birth certificate is sufficient to dismiss all occupational disease claims.",
              "es": "Basta presentar el certificado de nacimiento para descartar cualquier enfermedad ocupacional.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo.",
              "en": "Incorrect and absurd.",
              "es": "Incorrecto y absurdo.",
            },
          },
        ],
      },
      {
        id: "q-pericia-9",
        order: 9,
        question: {
          "pt-BR": "Cenário Operacional: Em consonância com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e as Diretrizes Permanentes da RSS3 (Seção 5), qual é a regra imperativa sobre o tratamento de prontuários clínicos, laudos diagnósticos e dados sensíveis de saúde de colaboradores durante perícias trabalhistas?",
          "en": "Operational Scenario: In alignment with Brazil's General Data Protection Law (LGPD - Law 13,709/2018) and RSS3 Permanent Guidelines (Section 5), what is the mandatory rule governing medical records, clinical diagnoses, and sensitive health data during labor forensic proceedings?",
          "es": "Escenario Operativo: Conforme a la Ley General de Protección de Datos (LGPD) y las Directrices Permanentes de RSS3 (Sección 5), ¿cuál es la regla obligatoria sobre el tratamiento de historiales clínicos y datos de salud en peritajes laborales?",
        },
        options: [
          {
            id: "opt-pericia-9-a",
            text: {
              "pt-BR": "Publicar todos os exames médicos, prontuários íntimos e diagnósticos de saúde dos colaboradores no site público da empresa para que todos possam ler.",
              "en": "Publishing all medical records, intimate lab diagnostics, and worker health data on the company's public website.",
              "es": "Publicar todos los exámenes médicos, historias clínicas y diagnósticos de los trabajadores en la web pública de la empresa.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e ilícito. Viola gravemente a intimidade, o sigilo médico e as disposições da LGPD, gerando pesadas indenizações e multas da ANPD.",
              "en": "Incorrect and unlawful. Breaches medical confidentiality and LGPD statutory mandates, inviting severe regulatory fines.",
              "es": "Incorrecto e ilícito. Viola el secreto médico y la LGPD acarreando graves sanciones.",
            },
          },
          {
            id: "opt-pericia-9-b",
            text: {
              "pt-BR": "Minimização de dados de saúde: prontuários médicos e diagnósticos clínicos detalhados possuem sigilo profissional médico resguardado pelo CFM e tramitam em segredo de justiça perante o perito médico; no LMS e nos sistemas operacionais da RSS3 é terminantemente proibido armazenar CIDs, laudos clínicos ou digitalizações de ASO, tratando a aptidão ocupacional estritamente como indicador administrativo binário (apto / inapto com validade).",
              "en": "Health data minimization: medical charts and clinical diagnoses enjoy statutory physician-patient privilege under Federal Medical Council (CFM) rules and must be filed under judicial seal; inside LMS and operational systems of RSS3 it is strictly prohibited to store ICD codes, clinical notes, or ASO scans, handling fitness strictly as a binary administrative indicator (cleared / not cleared with expiration).",
              "es": "Minimización de datos de salud: historias clínicas y diagnósticos gozan de secreto médico reservado ante el perito judicial en cuaderno confidencial; en la plataforma LMS y sistemas de RSS3 está terminantemente prohibido almacenar códigos CIE, laudos clínicos o escaneos de ASO, tratando la aptitud médica únicamente como indicador administrativo binario (apto / no apto con vigencia).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! As Diretrizes Permanentes da RSS3 (Seção 5) determinam que dados médicos sensíveis nunca sejam expostos ou armazenados no LMS, preservando a intimidade do colaborador conforme a LGPD e o Código de Ética Médica.",
              "en": "Correct! Section 5 of AGENTS.md mandates strict medical data minimization, ensuring sensitive health diagnostics are never stored in the LMS or exposed openly.",
              "es": "¡Correcto! La Sección 5 de AGENTS.md prohíbe almacenar diagnósticos o códigos CIE en el LMS, preservando la confidencialidad según la LGPD.",
            },
          },
          {
            id: "opt-pericia-9-c",
            text: {
              "pt-BR": "Vender os laudos médicos dos colaboradores para empresas de publicidade e telemarketing.",
              "en": "Selling employee medical files to marketing and telemarketing brokers.",
              "es": "Vender los informes médicos de los trabajadores a empresas de publicidad.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e criminoso.",
              "en": "Incorrect and criminal.",
              "es": "Incorrecto y delictivo.",
            },
          },
          {
            id: "opt-pericia-9-d",
            text: {
              "pt-BR": "A LGPD não se aplica a processos judiciais ou empresas industriais.",
              "en": "LGPD does not apply to judicial lawsuits or industrial contracting companies.",
              "es": "La LGPD no tiene aplicación en juicios laborales ni empresas industriales.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A LGPD aplica-se integralmente a qualquer operação de tratamento de dados pessoais realizada no Brasil.",
              "en": "Incorrect. LGPD applies universally to personal data processing across Brazil.",
              "es": "Incorrecto. La LGPD aplica universalmente al tratamiento de datos personales en Brasil.",
            },
          },
        ],
      },
      {
        id: "q-pericia-10",
        order: 10,
        question: {
          "pt-BR": "Diretrizes Permanentes RSS3 e Conformidade Regulatória: Ao concluir com aproveitamento este curso de Perícia Judicial Trabalhista na modalidade EAD na plataforma RSS3 Treinamentos, qual é o alcance e o valor legal do certificado emitido?",
          "en": "RSS3 Permanent Guidelines & Regulatory Compliance: Upon passing this Labor Judicial Forensic Expertise course on the RSS3 Treinamentos EAD platform, what is the valid legal scope of the issued certificate?",
          "es": "Directrices Permanentes de RSS3 y Cumplimiento Normativo: Al aprobar este curso de Peritaje Judicial Laboral en modalidad EAD en RSS3 Treinamentos, ¿cuál es el alcance legal del certificado emitido?",
        },
        options: [
          {
            id: "opt-pericia-10-a",
            text: {
              "pt-BR": "O certificado comprova exclusivamente a capacitação teórica do profissional nos procedimentos judiciais e periciais abordados, não conferindo registro de Engenheiro de Segurança ou Médico do Trabalho (privativos de graduação e pós-graduação regulamentadas), não nomeando automaticamente o aluno como perito judicial e não dispensando os requisitos de habilitação formal perante os Tribunais e conselhos profissionais (CREA/CRM).",
              "en": "The certificate validates solely theoretical training in court and forensic procedures; it confers neither Occupational Safety Engineer nor Occupational Physician professional titles (strictly reserved for accredited degrees), does not automatically appoint the student as a court expert, and does not waive statutory registration mandates before Courts and professional boards (CREA/CRM).",
              "es": "El certificado acredita exclusivamente la formación teórica cursada en procedimientos periciales; no otorga título colegiado de Ingeniero de Seguridad ni Médico del Trabajo (reservados a títulos universitarios oficiales), no designa automáticamente al alumno como perito del juez y no exime de los requisitos legales ante Tribunales y colegios profesionales (CREA/CRM).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Conforme a Seção 3 das Diretrizes Permanentes (AGENTS.md), o LMS distingue formalmente certificações teóricas EAD de habilitações profissionais privativas e de nomeações judiciais oficiais.",
              "en": "Correct! As per Section 3 of AGENTS.md, the LMS rigorously differentiates EAD theoretical learning from formal statutory professional licensing and court appointments.",
              "es": "¡Correcto! Conforme a la Sección 3 de AGENTS.md, se distingue categóricamente la formación teórica libre de habilitaciones colegiadas y designaciones judiciales.",
            },
          },
          {
            id: "opt-pericia-10-b",
            text: {
              "pt-BR": "O certificado confere posse vitalícia como Juiz Titular do Trabalho em qualquer Vara do Trabalho do país sem concurso público.",
              "en": "The certificate grants lifetime appointment as a federal Labor Judge in any court without public civil service examinations.",
              "es": "El certificado otorga nombramiento vitalicio como Juez del Trabajo sin necesidad de concurso público.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo. A magistratura do trabalho exige aprovação em rigoroso concurso público de provas e títulos conforme a Constituição Federal.",
              "en": "Incorrect and absurd. Becoming a judge strictly requires passing constitutional public civil service exams.",
              "es": "Incorrecto. La judicatura exige concurso público constitucional de oposición y antecedentes.",
            },
          },
          {
            id: "opt-pericia-10-c",
            text: {
              "pt-BR": "O certificado anula automaticamente todas as multas aplicadas pelo Ministério do Trabalho nos últimos 10 anos.",
              "en": "The certificate automatically annuls all labor ministry fines issued over the past decade.",
              "es": "El certificado anula automáticamente todas las multas del Ministerio de Trabajo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Certificados de treinamento não anulam autos de infração administrativos lavrados por auditores fiscais.",
              "en": "Incorrect. Course certificates cannot invalidate statutory administrative penalties.",
              "es": "Incorrecto. Los certificados no anulan sanciones administrativas.",
            },
          },
          {
            id: "opt-pericia-10-d",
            text: {
              "pt-BR": "O certificado autoriza a realizar demolições de prédios com explosivos sem projeto estrutural.",
              "en": "The certificate authorizes commercial building demolitions using explosives without structural plans.",
              "es": "El certificado autoriza a realizar voladuras y demoliciones con explosivos sin planos de ingeniería.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e perigoso.",
              "en": "Incorrect and dangerous.",
              "es": "Incorrecto y temerario.",
            },
          },
        ],
      },
    ],
  },
};
