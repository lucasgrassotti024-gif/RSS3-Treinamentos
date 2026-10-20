import { CourseDemonstration } from "@/types";

/**
 * Modelo de dados FICTÍCIO oficial da avaliação final de Power BI & DAX:
 * Tabelas dEquip (dimensão equipamentos) e fOS (fato ordens de serviço).
 */
export const PBI_EXAM_EQUIPAMENTOS = [
  { id: "B01", nome: "Bomba Principal Caldeira", linha: "Linha 1" },
  { id: "B02", nome: "Bomba Auxiliar Caldeira", linha: "Linha 1" },
  { id: "B03", nome: "Compressor de Ar Industrial", linha: "Linha 2" },
  { id: "B04", nome: "Exaustor de Gases", linha: "Linha 2" },
];

export const PBI_EXAM_ORDENS = [
  { os: "OS-01", equipId: "B01", data: "05/01/2026", horas: 4, tipo: "Corretiva" },
  { os: "OS-02", equipId: "B02", data: "12/01/2026", horas: 6, tipo: "Preventiva" },
  { os: "OS-03", equipId: "B01", data: "20/01/2026", horas: 2, tipo: "Corretiva" },
  { os: "OS-04", equipId: "B03", data: "02/02/2026", horas: 8, tipo: "Corretiva" },
  { os: "OS-05", equipId: "B02", data: "14/02/2026", horas: 3, tipo: "Preventiva" },
  { os: "OS-06", equipId: "B01", data: "25/02/2026", horas: 5, tipo: "Preventiva" },
];

export const powerBiCourseData: CourseDemonstration = {
  id: "c-power-bi-analytics",
  slug: "power-bi-dashboards-indicadores-industriais",
  title: {
    "pt-BR": "Power BI & Dashboards de Indicadores Industriais",
    "en": "Power BI & Industrial KPI Dashboards",
    "es": "Power BI y Paneles de Control de Indicadores Industriales",
  },
  description: {
    "pt-BR": "Formação prática e executiva em Power BI aplicada à gestão de operações e paradas industriais da RSS3: conexão com bases de dados (Excel, SAP, ERP), tratamento e modelagem com Power Query, relacionamentos entre tabelas (Star Schema), introdução às medidas e cálculos com DAX, seleção assertiva de recursos visuais e construção de dashboards interativos completos de produtividade, segurança e custos.",
    "en": "Executive and practical Power BI course tailored for RSS3 industrial plant operations: connecting data sources, ETL modeling with Power Query, star schema relationships, DAX formulas, visual selection, and building turnkey operational KPI dashboards.",
    "es": "Capacitación práctica en Power BI para operaciones industriales de RSS3: conexión de datos, modelado con Power Query, relaciones entre tablas, fórmulas DAX y diseño de dashboards ejecutivos.",
  },
  longDescription: {
    "pt-BR": "O treinamento de Power BI & Dashboards de Indicadores Industriais da RSS3 Treinamentos foi estruturado para capacitar engenheiros de planejamento, coordenadores operacionais, analistas de dados de campo e líderes de contrato a transformar apontamentos brutos de canteiro em relatórios visuais inteligentes e acionáveis. O curso aborda desde o primeiro contato com o Power BI Desktop, passando pela limpeza e transformação de dados com o editor Power Query (ETL), modelagem dimensional e integridade referencial de tabelas fato e dimensão, criação de medidas com a linguagem DAX (fórmulas SUM, CALCULATE, DIVIDE e contagens), princípios de storytelling com dados e boas práticas de escolha gráfica (barras, cartões de KPI, velocímetros e mapas), até a publicação e publicação de painéis interativos com filtros cruzados para acompanhamento de produção e paradas de fábrica em tempo real.",
    "en": "Engineered for planning engineers, contract managers, and field data analysts. Covers Power BI Desktop fundamentals, automated ETL pipeline creation via Power Query, dimensional data modeling (Fact and Dimension tables), essential DAX measures, visual storytelling, and constructing turnkey executive dashboards for turnaround monitoring.",
    "es": "Diseñado para planificadores y líderes de obra. Transforma datos dispersos de planillas en tableros de control ejecutivos mediante Power Query, relaciones dimensionales, cálculos DAX e indicadores industriales.",
  },
  schoolId: "gestao-lideranca",
  schoolName: {
    "pt-BR": "Gestão Industrial, Tecnologia e Produtividade",
    "en": "Industrial Management, Technology & Productivity",
    "es": "Gestión Industrial, Tecnología y Productividad",
  },
  workloadHours: 20,
  level: "basic",
  modality: "online",
  isMandatory: false,
  mandatoryFor: [
    "Planejador de Manutenção",
    "Engenheiro de Planejamento",
    "Coordenador Operacional",
    "Analista de Recursos Humanos",
    "Líder de Contrato",
    "Técnico de Segurança do Trabalho",
  ],
  targetAudience: {
    "pt-BR": "Engenheiros, planejadores, técnicos de campo, analistas administrativos e lideranças da RSS3 que necessitam consolidar dados operacionais, medições de serviço e indicadores de segurança em painéis executivos automatizados.",
    "en": "Engineers, site planners, field technicians, and contract leaders at RSS3 managing operational KPIs, service measurements, and safety dashboards.",
    "es": "Ingenieros de planta, planificadores, técnicos y supervisores que consolidan datos operativos en paneles de control interactivos.",
  },
  prerequisites: {
    "pt-BR": "Conhecimentos básicos de Excel (linhas, colunas, tipos de dados e fórmulas elementares).",
    "en": "Foundational knowledge of Excel (rows, columns, basic formulas and data types).",
    "es": "Conocimientos básicos de Excel y navegación en Windows.",
  },
  modulesCount: 2,
  lessonsCount: 6,
  thumbnailGradient: "from-amber-600 via-yellow-700 to-slate-950",
  coverImage: "/images/courses/power-bi.jpg",
  categories: ["gestao-produtividade","qualidade-processos"],
  badgeCode: "PBI-RSS3",
  updatedAtDate: "2026-10-16",
  modules: [
    {
      id: "mod-pbi-1",
      order: 1,
      title: {
        "pt-BR": "Módulo 1: Fundamentos, ETL com Power Query e Modelagem de Relacionamentos (Aulas 01 a 03)",
        "en": "Module 1: Foundations, ETL with Power Query & Data Modeling (Lessons 01 to 03)",
        "es": "Módulo 1: Fundamentos, ETL con Power Query y Modelado de Relaciones (Clases 01 a 03)",
      },
      description: {
        "pt-BR": "Visão geral da plataforma Power BI, importação e higienização de bases de dados operacionais com Power Query e criação do modelo de dados com relacionamentos entre tabelas.",
        "en": "Platform overview, importing and cleaning operational data with Power Query, and star schema relationship architecture.",
        "es": "Visión general, importación y limpieza de datos con Power Query y construcción de modelos relacionales.",
      },
      lessons: [
        {
          id: "les-pbi-1-1",
          order: 1,
          title: {
            "pt-BR": "Aula 01: Introdução ao Power BI Desktop e Ecossistema de Business Intelligence",
            "en": "Lesson 01: Introduction to Power BI Desktop & Business Intelligence Ecosystem",
            "es": "Clase 01: Introducción a Power BI Desktop y el Ecosistema de Business Intelligence",
          },
          durationMinutes: 20,
          contentType: "video",
          videoUrl: "37oxzq2pSbI",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender a arquitetura do Power BI (Desktop, Serviço em Nuvem e Mobile), as 3 vistas principais (Relatório, Dados e Modelo) e o fluxo geral de ETL.",
              "en": "Understand the Power BI ecosystem (Desktop, Service, Mobile), the 3 core views (Report, Data, Model), and the ETL lifecycle.",
              "es": "Comprender la arquitectura de Power BI (Desktop, Servicio en la Nube y Móvil) y sus 3 vistas principales.",
            },
            summaryPoints: [
              {
                "pt-BR": "Diferença conceitual entre planilhas estáticas do Excel e modelos analíticos dinâmicos do Power BI.",
                "en": "Conceptual contrast between static Excel workbooks and dynamic, scalable Power BI data models.",
                "es": "Diferencia entre planillas tradicionales de Excel y modelos dinámicos interactivos de Power BI.",
              },
              {
                "pt-BR": "Navegação na interface: faixa de opções, painel de campos, painel de visualizações e painel de filtros.",
                "en": "Navigating the interface: ribbon, fields pane, visualizations pane, and filter canvas.",
                "es": "Navegación en la interfaz: panel de campos, visualizaciones y filtros.",
              },
            ],
          },
        },
        {
          id: "les-pbi-1-2",
          order: 2,
          title: {
            "pt-BR": "Aula 02: Tratamento e Higienização de Bases com Power Query",
            "en": "Lesson 02: Data Cleansing & Transformation with Power Query",
            "es": "Clase 02: Tratamiento y Limpieza de Bases de Datos con Power Query",
          },
          durationMinutes: 25,
          contentType: "video",
          videoUrl: "vjsfAjfLimM",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar o editor do Power Query: promover cabeçalhos, alterar tipos de dados, remover linhas nulas, dividir colunas e entender as etapas aplicadas.",
              "en": "Master Power Query Editor: promote headers, adjust data types, filter nulls, split columns, and manage applied steps.",
              "es": "Dominar el editor de Power Query: promover encabezados, cambiar tipos de datos, limpiar nulos y gestionar pasos aplicados.",
            },
            summaryPoints: [
              {
                "pt-BR": "Automação do ETL: toda transformação realizada no Power Query é gravada e repetida automaticamente em novas importações de dados de campo.",
                "en": "ETL automation: applied transformation steps replay automatically on fresh data refreshes.",
                "es": "Automatización del ETL: las etapas de limpieza se replican automáticamente al actualizar datos.",
              },
              {
                "pt-BR": "A importância de tipar corretamente colunas de data, texto e valor decimal para evitar erros de agregação.",
                "en": "Crucial requirement of strict data typing (Date, Text, Decimal Number) to prevent calculation errors.",
                "es": "Importancia de definir tipos de datos correctos (fechas, números, texto) para evitar errores.",
              },
            ],
          },
        },
        {
          id: "les-pbi-1-3",
          order: 3,
          title: {
            "pt-BR": "Aula 03: Introdução aos Relacionamentos no Power BI e Modelo Estrela (Star Schema)",
            "en": "Lesson 03: Data Modeling, Relationships & Star Schema Principles",
            "es": "Clase 03: Modelado de Datos, Relaciones y Esquema Estrella (Star Schema)",
          },
          durationMinutes: 22,
          contentType: "video",
          videoUrl: "KADECS1TS1I",
          contentDetail: {
            objective: {
              "pt-BR": "Construir relacionamentos de 1 para Muitos (1:N) entre tabelas dimensão (cadastros) e tabelas fato (apontamentos operacionais diários).",
              "en": "Build 1-to-Many (1:N) relationships connecting Dimension tables (catalogs) with Fact tables (daily site logs).",
              "es": "Construir relaciones de 1 a Muchos (1:N) entre tablas dimensión (catálogos) y tablas de hechos (apuntes diarios).",
            },
            summaryPoints: [
              {
                "pt-BR": "Conceito de Tabela Fato (eventos, medições, horas trabalhadas) versus Tabela Dimensão (colaboradores, contratos, clientes).",
                "en": "Contrasting Fact tables (events, metrics, work hours) with Dimension tables (employees, sites, clients).",
                "es": "Diferencia entre Tabla de Hechos (registros, medições) y Tabla Dimensión (listas maestras).",
              },
              {
                "pt-BR": "Direção do filtro cruzado (única vs ambas) e boas práticas para evitar ambiguidades e lentidão no modelo.",
                "en": "Cross-filter direction (single vs both) and avoiding circular relationship bottlenecks.",
                "es": "Dirección de filtrado cruzado y buenas prácticas para un modelo rápido y sin errores.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-pbi-2",
      order: 2,
      title: {
        "pt-BR": "Módulo 2: Cálculos com DAX, Visualização de Dados e Criação do Dashboard Completo (Aulas 04 a 06)",
        "en": "Module 2: DAX Calculations, Data Visualization & Full Dashboard Construction (Lessons 04 to 06)",
        "es": "Módulo 2: Fórmulas DAX, Visualización de Datos y Construcción del Dashboard Completo (Clases 04 a 06)",
      },
      description: {
        "pt-BR": "Criação de medidas calculadas com a linguagem DAX, princípios de escolha dos gráficos ideais e desenvolvimento de um painel gerencial interativo do zero.",
        "en": "Authoring core DAX measures, visual selection heuristics, and step-by-step development of a complete interactive executive dashboard.",
        "es": "Creación de medidas con lenguaje DAX, selección adecuada de gráficos y desarrollo de un dashboard interactivo completo.",
      },
      lessons: [
        {
          id: "les-pbi-2-1",
          order: 1,
          title: {
            "pt-BR": "Aula 04: Introdução às Fórmulas e Medidas em DAX (Data Analysis Expressions)",
            "en": "Lesson 04: Introduction to DAX Formulas & Calculated Measures",
            "es": "Clase 04: Introducción a las Fórmulas y Medidas en DAX",
          },
          durationMinutes: 24,
          contentType: "video",
          videoUrl: "Al0WcKhf5LM",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender a diferença entre Coluna Calculada e Medida, dominando funções fundamentais como SOMA (SUM), MÉDIA (AVERAGE), DIVIDE e CALCULATE.",
              "en": "Understand Calculated Columns vs Calculated Measures, mastering essential functions like SUM, AVERAGE, DIVIDE, and CALCULATE.",
              "es": "Diferenciar Columnas Calculadas y Medidas, dominando funciones SUM, AVERAGE, DIVIDE y CALCULATE.",
            },
            summaryPoints: [
              {
                "pt-BR": "Por que preferir Medidas: cálculos sob demanda que respeitam o contexto de filtro da página e economizam memória RAM.",
                "en": "Why Measures are preferred: on-demand computation adhering to visual filter contexts while conserving RAM.",
                "es": "Ventajas de las Medidas: se calculan en tiempo real respetando filtros y optimizan el rendimiento.",
              },
              {
                "pt-BR": "Uso da função DIVIDE para cálculo de percentuais de produtividade evitando erros de divisão por zero (#DIV/0!).",
                "en": "Leveraging the safe DIVIDE function for operational ratios, handling null denominators cleanly.",
                "es": "Uso de la función DIVIDE para porcentajes evitando errores de división por cero.",
              },
            ],
          },
        },
        {
          id: "les-pbi-2-2",
          order: 2,
          title: {
            "pt-BR": "Aula 05: Como Escolher os Gráficos Certos e Princípios de Storytelling com Dados",
            "en": "Lesson 05: Selecting the Right Visuals & Data Storytelling Principles",
            "es": "Clase 05: Cómo Elegir los Gráficos Adecuados y Storytelling con Datos",
          },
          durationMinutes: 21,
          contentType: "video",
          videoUrl: "KAdfwhE6oA4",
          contentDetail: {
            objective: {
              "pt-BR": "Selecionar os tipos visuais mais adequados para cada objetivo analítico: cartões para KPIs numéricos, gráficos de barras/colunas para comparação, linhas para tendência temporal e velocímetros para metas.",
              "en": "Select the ideal visual for every analytical scenario: single KPI cards, bar charts for comparisons, line charts for trends, and gauges for targets.",
              "es": "Elegir el gráfico correcto: tarjetas de KPI, barras para comparación, líneas para tendencias y velocímetros para metas.",
            },
            summaryPoints: [
              {
                "pt-BR": "Evitar o excesso de gráficos de pizza ou rosca para muitas categorias, priorizando gráficos de barras horizontais ordenadas.",
                "en": "Avoiding pie chart clutter for multi-category metrics, favoring sorted horizontal bar visuals.",
                "es": "Evitar gráficos circulares sobrecargados, priorizando gráficos de barras ordenadas.",
              },
              {
                "pt-BR": "Harmonia visual corporativa: uso da paleta oficial da RSS3, contraste WCAG, alinhamento de elementos e remoção de poluição visual.",
                "en": "Corporate visual harmony: applying RSS3 brand colors, WCAG contrast, grid alignment, and decluttering.",
                "es": "Diseño ejecutivo sobrio con paleta institucional, buen contraste y jerarquía visual clara.",
              },
            ],
          },
        },
        {
          id: "les-pbi-2-3",
          order: 3,
          title: {
            "pt-BR": "Aula 06: Oficina Prática — Criando o Dashboard Interativo Completo do Zero",
            "en": "Lesson 06: Hands-on Workshop — Building the Complete Interactive Dashboard from Scratch",
            "es": "Clase 06: Taller Práctico — Construcción del Dashboard Interactivo Completo",
          },
          durationMinutes: 28,
          contentType: "video",
          videoUrl: "l0sZ1RcrO50",
          contentDetail: {
            objective: {
              "pt-BR": "Montar um dashboard executivo integrado: segmentadores de dados (filtros por contrato, data e frente), interação entre gráficos, cartões com metas e publicação final.",
              "en": "Build an integrated executive dashboard: slicers (contract, date, craft filters), cross-visual filtering, target cards, and report publishing.",
              "es": "Construir un panel de control integrado con segmentadores interactivos, filtros cruzados y métricas clave.",
            },
            summaryPoints: [
              {
                "pt-BR": "Configuração da interação entre visuais: editar interações para filtrar ou destacar outros gráficos ao clicar.",
                "en": "Configuring visual interactions: edit interactions to filter or highlight linked report elements on click.",
                "es": "Edición de interacciones entre gráficos para filtrado cruzado dinámico.",
              },
              {
                "pt-BR": "Uso de segmentadores de dados (Slicers) temporais e por líder de equipe para análises gerenciais rápidas em reuniões de parada.",
                "en": "Deploying timeline and supervisor slicers for rapid operational drill-down during shutdown briefings.",
                "es": "Segmentadores de fecha y responsable para análisis rápidos en comités de parada.",
              },
            ],
          },
        },
      ],
    },
  ],
  finalAssessment: {
    id: "exam-power-bi-analytics",
    order: 7,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 50,
    questionsCount: 10,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação prática de Power BI & DAX com modelo estrela demonstrativo. Utilize as tabelas dEquip e fOS fornecidas para avaliar medidas, filtros e contextos. Nota mínima de 70% para certificação teórica.",
      "en": "Hands-on Power BI & DAX assessment using the demo star schema model. Use the provided dEquip and fOS tables to evaluate measures, filters, and contexts. 70% passing score.",
      "es": "Evaluación práctica de Power BI y DAX con modelo estrella demostrativo. Use las tablas dEquip y fOS para evaluar medidas y contextos. 70% nota de aprobación.",
    },
    title: {
      "pt-BR": "Avaliação Prática — Power BI & DAX Industrial",
      "en": "Hands-on Assessment — Industrial Power BI & DAX",
      "es": "Evaluación Práctica — Power BI y DAX Industrial",
    },
    description: {
      "pt-BR": "Cenário industrial da parada: modelo dimensional composto pela tabela dimensão dEquip (4 equipamentos) e tabela fato fOS (6 ordens de serviço, totalizando 28 horas), com medida base [Total Horas] = SUM(fOS[Horas]). Responda às questões sobre transição de contexto, funções CALCULATE, ALL, DIVIDE, TOTALYTD, iteradores e Power Query.",
      "en": "Industrial turnaround scenario: dimensional model consisting of dimension dEquip (4 assets) and fact fOS (6 work orders, 28 hours), with base measure [Total Horas] = SUM(fOS[Horas]). Answer questions on context transition, CALCULATE, ALL, DIVIDE, TOTALYTD, iterators, and Power Query.",
      "es": "Escenario industrial: modelo dimensional con tabla dimensión dEquip y tabla de hechos fOS (28 horas en total), con medida base [Total Horas] = SUM(fOS[Horas]).",
    },
    questions: [
      {
        id: "q-pbi-1",
        order: 1,
        question: {
          "pt-BR": "Considerando o modelo estrela (tabela dEquip relacionada 1:* com fOS), você cria uma matriz no Power BI com o campo dEquip[Linha] nas Linhas e a medida [Total Horas] nos Valores.\n\nAo adicionar uma segmentação de dados filtrando fOS[Tipo] = \"Corretiva\", qual valor numérico é exibido na linha \"Linha 1\" da matriz?",
          "en": "Considering the star schema model (dEquip related 1:* to fOS), you create a matrix with dEquip[Line] on Rows and measure [Total Horas] in Values.\n\nWith a slicer filtering fOS[Tipo] = \"Corretiva\", what value is displayed on the \"Linha 1\" row of the matrix?",
          "es": "Considerando el modelo estrella (dEquip relacionada 1:* con fOS), crea una matriz con dEquip[Línea] en Filas y la medida [Total Horas] en Valores.\n\nCon una segmentación en fOS[Tipo] = \"Corretiva\", ¿qué valor se muestra en la fila \"Linha 1\"?",
        },
        options: [
          {
            id: "q1-a",
            text: { "pt-BR": "6 horas", "en": "6 hours", "es": "6 horas" },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto: a Linha 1 possui os equipamentos B01 e B02. As ordens corretivas desses equipamentos são a OS-01 (4 h na B01) e a OS-03 (2 h na B01). A soma é 4 + 2 = 6 horas.",
              "en": "Correct: Line 1 includes B01 and B02. Corrective work orders: OS-01 (4 h) and OS-03 (2 h). Total = 6 hours.",
              "es": "Correcto: Línea 1 incluye B01 y B02. Órdenes correctivas: OS-01 (4 h) y OS-03 (2 h). Total = 6 horas.",
            },
          },
          {
            id: "q1-b",
            text: { "pt-BR": "20 horas", "en": "20 hours", "es": "20 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 20 horas é o total geral da Linha 1 sem considerar o filtro de 'Corretiva' da segmentação.",
              "en": "Incorrect: 20 hours is the total for Line 1 without the slicer filter.",
              "es": "Incorrecto: 20 horas es el total de la Línea 1 sin el filtro de segmentación.",
            },
          },
          {
            id: "q1-c",
            text: { "pt-BR": "14 horas", "en": "14 hours", "es": "14 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 14 horas é o total de corretivas de toda a fábrica (OS-01, OS-03 e OS-04: 4 + 2 + 8 = 14), ignorando o filtro da Linha 1.",
              "en": "Incorrect: 14 hours is total corrective hours for the whole plant, ignoring the Line 1 row filter.",
              "es": "Incorrecto: 14 horas es el total de correctivas de toda la planta.",
            },
          },
          {
            id: "q1-d",
            text: { "pt-BR": "8 horas", "en": "8 hours", "es": "8 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 8 horas é o valor das corretivas da Linha 2 (OS-04 no equipamento B03), não da Linha 1.",
              "en": "Incorrect: 8 hours is Line 2 corrective hours (OS-04 on B03).",
              "es": "Incorrecto: 8 horas corresponde a la Línea 2.",
            },
          },
        ],
      },
      {
        id: "q-pbi-2",
        order: 2,
        question: {
          "pt-BR": "Para analisar a representatividade de cada equipamento, o analista cria a seguinte medida DAX:\n% Horas = DIVIDE([Total Horas], CALCULATE([Total Horas], ALL(dEquip)))\n\nEm uma tabela visual contendo dEquip[Nome_Equipamento] nas linhas e sem outros filtros na página, qual percentual aproximado é exibido para o equipamento 'Bomba Principal Caldeira' (B01)?",
          "en": "To analyze machine share, an analyst writes the DAX measure:\n% Horas = DIVIDE([Total Horas], CALCULATE([Total Horas], ALL(dEquip)))\n\nIn a table visual with dEquip[Nome_Equipamento] on rows and no other page filters, what approximate percentage is shown for 'Bomba Principal Caldeira' (B01)?",
          "es": "Para analizar la representatividad, se escribe la medida DAX:\n% Horas = DIVIDE([Total Horas], CALCULATE([Total Horas], ALL(dEquip)))\n\nEn una tabla con dEquip[Nome_Equipamento] en filas, ¿qué porcentaje aproximado aparece para 'Bomba Principal Caldeira' (B01)?",
        },
        options: [
          {
            id: "q2-a",
            text: { "pt-BR": "39,3%", "en": "39.3%", "es": "39,3%" },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto: a Bomba B01 soma 11 horas (OS-01: 4 h + OS-03: 2 h + OS-06: 5 h = 11 h). O denominador com ALL(dEquip) remove o filtro de equipamento e calcula o total da fábrica (28 h). A divisão 11 / 28 resulta em ≈ 39,28% (arredondado para 39,3%).",
              "en": "Correct: B01 totals 11 hours (4 + 2 + 5 = 11). ALL(dEquip) clears the machine filter, yielding 28 hours total. 11 / 28 ≈ 39.3%.",
              "es": "Correcto: B01 suma 11 horas de un total de 28 h: 11 / 28 ≈ 39,3%.",
            },
          },
          {
            id: "q2-b",
            text: { "pt-BR": "100,0%", "en": "100.0%", "es": "100,0%" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 100% seria o resultado caso a função ALL não fosse utilizada no denominador, fazendo numerador e denominador receberem o mesmo filtro.",
              "en": "Incorrect: 100% would result without ALL in the denominator.",
              "es": "Incorrecto: 100% ocurriría si no se usara ALL.",
            },
          },
          {
            id: "q2-c",
            text: { "pt-BR": "33,3%", "en": "33.3%", "es": "33,3%" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 33,3% é a proporção de equipamentos com ordens (1 em 3 bombas ativas), que seria uma contagem e não soma de horas.",
              "en": "Incorrect: 33.3% is 1 of 3 active equipment (a count ratio, not hours ratio).",
              "es": "Incorrecto: 33,3% es proporción de conteo de máquinas, no de horas.",
            },
          },
          {
            id: "q2-d",
            text: { "pt-BR": "25,0%", "en": "25.0%", "es": "25,0%" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 25% é 1 de 4 equipamentos cadastrados no total, ignorando os valores das ordens de serviço.",
              "en": "Incorrect: 25% is 1 of 4 registered machines in dEquip.",
              "es": "Incorrecto: 25% es 1 de 4 máquinas registradas.",
            },
          },
        ],
      },
      {
        id: "q-pbi-3",
        order: 3,
        question: {
          "pt-BR": "Considere a medida DAX: Qtde Equip = COUNTROWS(dEquip).\n\nVocê monta uma matriz com dEquip[Linha] nas Linhas e aplica uma segmentação externa fOS[Tipo] = \"Corretiva\". Sabendo que o relacionamento entre dEquip e fOS possui direção de filtro ÚNICA padrão (1 → *), qual valor é exibido para a \"Linha 2\" na matriz?",
          "en": "Consider the measure: Qtde Equip = COUNTROWS(dEquip).\n\nYou build a matrix with dEquip[Linha] on Rows and an external slicer fOS[Tipo] = \"Corretiva\". With standard SINGLE filter direction (dEquip 1 → * fOS), what value is shown for \"Linha 2\"? ",
          "es": "Considere la medida: Qtde Equip = COUNTROWS(dEquip).\n\nEn una matriz con dEquip[Línea] en Filas y segmentación en fOS[Tipo] = \"Corretiva\", con dirección ÚNICA (dEquip 1 → * fOS), ¿qué valor aparece para \"Linha 2\"?",
        },
        options: [
          {
            id: "q3-a",
            text: { "pt-BR": "2 equipamentos", "en": "2 machines", "es": "2 equipos" },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto: na direção única padrão (1 → *), os filtros da tabela fato (fOS) NÃO sobem para filtrar a tabela dimensão (dEquip). Portanto, a segmentação de tipo é ignorada pelo COUNTROWS(dEquip), e a Linha 2 conta seus 2 equipamentos cadastrados (B03 e B04).",
              "en": "Correct: in standard single direction, fact filters do not propagate back to dimensions. COUNTROWS(dEquip) for Linha 2 returns both B03 and B04 = 2.",
              "es": "Correcto: con filtro en dirección única, la tabla de hechos no filtra la dimensión. Cuenta B03 y B04 = 2.",
            },
          },
          {
            id: "q3-b",
            text: { "pt-BR": "1 equipamento", "en": "1 machine", "es": "1 equipo" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 1 equipamento (apenas o compressor B03) só seria o resultado se o relacionamento estivesse configurado com filtro Cruzado Bidirecional (Ambas).",
              "en": "Incorrect: 1 would only happen with Bidirectional filtering (Both directions).",
              "es": "Incorrecto: 1 solo ocurriría con filtro bidireccional.",
            },
          },
          {
            id: "q3-c",
            text: { "pt-BR": "0 equipamentos", "en": "0 machines", "es": "0 equipos" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: a Linha 2 possui equipamentos cadastrados na dimensão e a contagem nunca zera.",
              "en": "Incorrect: Line 2 has registered assets so count does not drop to 0.",
              "es": "Incorrecto: la Línea 2 tiene máquinas registradas.",
            },
          },
          {
            id: "q3-d",
            text: { "pt-BR": "4 equipamentos", "en": "4 machines", "es": "4 equipos" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 4 é o total de equipamentos de toda a fábrica, mas a linha da matriz restringe o contexto à Linha 2.",
              "en": "Incorrect: 4 is the grand total for all lines.",
              "es": "Incorrecto: 4 es el total de toda la planta.",
            },
          },
        ],
      },
      {
        id: "q-pbi-4",
        order: 4,
        question: {
          "pt-BR": "Na tabela de equipamentos, o 'Exaustor de Gases' (B04) não possui nenhuma ordem de serviço registrada em fOS. Por esse motivo, ao criar uma tabela visual com dEquip[Nome_Equipamento] e a medida [Total Horas], a linha da Bomba D desaparece do visual.\n\nSem ativar a opção 'Mostrar itens sem dados', qual medida DAX força a exibição de todos os equipamentos cadastrados, mostrando 0 horas para aqueles sem ocorrências?",
          "en": "In the equipment table, 'Exaustor de Gases' (B04) has no work orders in fOS. Consequently, in a visual table with dEquip[Nome_Equipamento] and [Total Horas], B04 is hidden.\n\nWithout enabling 'Show items with no data', which DAX measure forces all registered machines to display, showing 0 for those with no orders?",
          "es": "El 'Exaustor de Gases' (B04) no tiene órdenes en fOS y no aparece en la tabla visual.\n\n¿Qué medida DAX fuerza la visualización de todos los equipos mostrando 0 para los que no tienen órdenes?",
        },
        options: [
          {
            id: "q4-a",
            text: {
              "pt-BR": "COALESCE([Total Horas], 0)",
              "en": "COALESCE([Total Horas], 0)",
              "es": "COALESCE([Total Horas], 0)",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto: quando não há registros na fato, SUM retorna BLANK e o visual descarta a linha. A função COALESCE converte o BLANK em 0. Como a medida passa a ter um valor numérico válido, o Power BI mantém o equipamento visível na tabela.",
              "en": "Correct: COALESCE replaces BLANK with 0. Because the measure now yields a value, the visual displays B04 with 0.",
              "es": "Correcto: COALESCE reemplaza BLANK por 0, manteniendo la fila visible en la tabla.",
            },
          },
          {
            id: "q4-b",
            text: {
              "pt-BR": "SUM(fOS[Horas])",
              "en": "SUM(fOS[Horas])",
              "es": "SUM(fOS[Horas])",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: a função SUM por si só continua retornando BLANK para linhas sem dados.",
              "en": "Incorrect: raw SUM continues to evaluate to BLANK.",
              "es": "Incorrecto: SUM por sí sola sigue devolviendo BLANK.",
            },
          },
          {
            id: "q4-c",
            text: {
              "pt-BR": "CALCULATE([Total Horas], fOS[Horas] >= 0)",
              "en": "CALCULATE([Total Horas], fOS[Horas] >= 0)",
              "es": "CALCULATE([Total Horas], fOS[Horas] >= 0)",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: adicionar um filtro na tabela fato restringe apenas as linhas que já existem; para B04 não há linhas e o resultado continua BLANK.",
              "en": "Incorrect: fact filters only operate on existing rows, leaving B04 as BLANK.",
              "es": "Incorrecto: el filtro sobre la tabla de hechos sigue dando BLANK.",
            },
          },
          {
            id: "q4-d",
            text: {
              "pt-BR": "IF(ISBLANK([Total Horas]), BLANK(), [Total Horas])",
              "en": "IF(ISBLANK([Total Horas]), BLANK(), [Total Horas])",
              "es": "IF(ISBLANK([Total Horas]), BLANK(), [Total Horas])",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: essa fórmula explicitamente devolve BLANK quando não há dados, mantendo a linha oculta.",
              "en": "Incorrect: this formula explicitly returns BLANK.",
              "es": "Incorrecto: esta fórmula devuelve BLANK explícitamente.",
            },
          },
        ],
      },
      {
        id: "q-pbi-5",
        order: 5,
        question: {
          "pt-BR": "O modelo inclui uma tabela de calendário contínua (dCalendario) relacionada a fOS[Data], e o analista cria a medida de acumulado no ano:\nHoras YTD = TOTALYTD([Total Horas], dCalendario[Data])\n\nEm uma matriz aberta por mês (janeiro e fevereiro de 2026), qual valor numérico é exibido na linha de 'Fevereiro/2026'?",
          "en": "The model contains a standard date table (dCalendario) linked to fOS[Data], and an analyst writes the year-to-date measure:\nHoras YTD = TOTALYTD([Total Horas], dCalendario[Data])\n\nIn a monthly matrix, what value is shown for 'Fevereiro/2026'?",
          "es": "El modelo tiene una tabla dCalendario continua y la medida:\nHoras YTD = TOTALYTD([Total Horas], dCalendario[Data])\n\nEn una matriz por mes, ¿qué valor aparece en la fila de 'Fevereiro/2026'?",
        },
        options: [
          {
            id: "q5-a",
            text: { "pt-BR": "28 horas", "en": "28 hours", "es": "28 horas" },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto: a função TOTALYTD acumula todas as datas desde 1º de janeiro até o final do mês corrente. Janeiro somou 12 horas (4 + 6 + 2 = 12 h) e Fevereiro somou 16 horas (8 + 3 + 5 = 16 h). O acumulado em fevereiro é 12 + 16 = 28 horas.",
              "en": "Correct: TOTALYTD accumulates from Jan 1. January had 12 h (4 + 6 + 2) and February had 16 h (8 + 3 + 5). Total YTD in Feb = 12 + 16 = 28 hours.",
              "es": "Correcto: TOTALYTD acumula desde el 1 de enero. Enero tuvo 12 h y febrero 16 h: 12 + 16 = 28 horas.",
            },
          },
          {
            id: "q5-b",
            text: { "pt-BR": "16 horas", "en": "16 hours", "es": "16 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 16 horas é apenas a soma pontual do mês de fevereiro, sem o acumulado do ano.",
              "en": "Incorrect: 16 hours is February alone without YTD accumulation.",
              "es": "Incorrecto: 16 horas es solo el mes de febrero.",
            },
          },
          {
            id: "q5-c",
            text: { "pt-BR": "12 horas", "en": "12 hours", "es": "12 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 12 horas é apenas o valor de janeiro.",
              "en": "Incorrect: 12 hours is January alone.",
              "es": "Incorrecto: 12 horas es el total de enero.",
            },
          },
          {
            id: "q5-d",
            text: { "pt-BR": "14 horas", "en": "14 hours", "es": "14 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 14 horas é o total de ordens corretivas, não a soma temporal.",
              "en": "Incorrect: 14 hours is total corrective hours.",
              "es": "Incorrecto: 14 horas es el total de correctivas.",
            },
          },
        ],
      },
      {
        id: "q-pbi-6",
        order: 6,
        question: {
          "pt-BR": "Para comparar a evolução mensal na parada, é criada a medida de mês anterior:\nHoras Mês Anterior = CALCULATE([Total Horas], PREVIOUSMONTH(dCalendario[Data]))\n\nAo colocar essa medida em uma matriz com os meses de 2026, qual valor é exibido na linha correspondente a 'Fevereiro/2026'?",
          "en": "To compare turnaround progress, the previous month measure is built:\nHoras Mês Anterior = CALCULATE([Total Horas], PREVIOUSMONTH(dCalendario[Data]))\n\nIn a monthly matrix, what value appears on the row for 'Fevereiro/2026'?",
          "es": "Para comparar la evolución mensual se crea la medida:\nHoras Mês Anterior = CALCULATE([Total Horas], PREVIOUSMONTH(dCalendario[Data]))\n\n¿Qué valor aparece en la fila de 'Fevereiro/2026'?",
        },
        options: [
          {
            id: "q6-a",
            text: { "pt-BR": "12 horas", "en": "12 hours", "es": "12 horas" },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto: a função PREVIOUSMONTH desloca o contexto de filtro de fevereiro/2026 para o período completo do mês anterior (1º a 31 de janeiro de 2026). As horas ocorridas em janeiro foram 4 + 6 + 2 = 12 horas.",
              "en": "Correct: PREVIOUSMONTH shifts the filter context from February to all of January. January hours: 4 + 6 + 2 = 12 hours.",
              "es": "Correcto: PREVIOUSMONTH desplaza el contexto a enero. Las horas de enero fueron 4 + 6 + 2 = 12 horas.",
            },
          },
          {
            id: "q6-b",
            text: { "pt-BR": "16 horas", "en": "16 hours", "es": "16 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 16 horas é o valor do próprio mês de fevereiro, sem deslocamento temporal.",
              "en": "Incorrect: 16 hours is February itself.",
              "es": "Incorrecto: 16 horas es el propio mes de febrero.",
            },
          },
          {
            id: "q6-c",
            text: { "pt-BR": "28 horas", "en": "28 hours", "es": "28 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 28 horas é o total geral acumulado, não o mês anterior.",
              "en": "Incorrect: 28 hours is the grand total.",
              "es": "Incorrecto: 28 horas es el total acumulado.",
            },
          },
          {
            id: "q6-d",
            text: { "pt-BR": "(em branco / BLANK)", "en": "(blank)", "es": "(en blanco / BLANK)" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: ficaria em branco apenas na linha de janeiro (que não possui mês anterior com dados). Em fevereiro o valor de janeiro existe e vale 12.",
              "en": "Incorrect: it would only be blank on January.",
              "es": "Incorrecto: solo quedaría en blanco en enero.",
            },
          },
        ],
      },
      {
        id: "q-pbi-7",
        order: 7,
        question: {
          "pt-BR": "Um coordenador deseja saber a média de horas de manutenção por equipamento e escreve a medida iteradora:\nMédia por Equipamento = AVERAGEX(VALUES(dEquip[ID_Equipamento]), [Total Horas])\n\nQual valor é exibido em um Cartão de KPI sem nenhum filtro selecionado na página?",
          "en": "A coordinator writes an iterator measure for average maintenance hours per asset:\nMédia por Equipamento = AVERAGEX(VALUES(dEquip[ID_Equipamento]), [Total Horas])\n\nWhat value is shown in a KPI Card with no filters applied?",
          "es": "Un coordinador escribe la medida iteradora:\nMédia por Equipamento = AVERAGEX(VALUES(dEquip[ID_Equipamento]), [Total Horas])\n\n¿Qué valor se muestra en una Tarjeta KPI sin filtros?",
        },
        options: [
          {
            id: "q7-a",
            text: { "pt-BR": "9,33 horas", "en": "9.33 hours", "es": "9,33 horas" },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto: AVERAGEX itera sobre os equipamentos. A medida [Total Horas] sofre transição de contexto para cada um: B01 = 11 h, B02 = 9 h, B03 = 8 h e B04 = BLANK. Como funções de média ignoram valores BLANK, o cálculo é (11 + 9 + 8) / 3 = 28 / 3 ≈ 9,33 horas.",
              "en": "Correct: AVERAGEX triggers context transition per machine: B01 = 11, B02 = 9, B03 = 8, B04 = BLANK. AVERAGEX ignores BLANK, so (11 + 9 + 8) / 3 ≈ 9.33 hours.",
              "es": "Correcto: la transición de contexto da B01=11, B02=9, B03=8, B04=BLANK. (11 + 9 + 8) / 3 ≈ 9,33 horas.",
            },
          },
          {
            id: "q7-b",
            text: { "pt-BR": "7,00 horas", "en": "7.00 hours", "es": "7,00 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 7,00 horas seria 28 / 4, o que só aconteceria se B04 retornasse 0 em vez de BLANK.",
              "en": "Incorrect: 7.00 would divide by 4, treating B04 as 0 rather than BLANK.",
              "es": "Incorrecto: 7,00 dividiría entre 4 tomando B04 como 0.",
            },
          },
          {
            id: "q7-c",
            text: { "pt-BR": "4,67 horas", "en": "4.67 hours", "es": "4,67 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 4,67 horas é a média por ordem de serviço (28 / 6 OS), calculada pela fórmula AVERAGE(fOS[Horas]), e não por equipamento.",
              "en": "Incorrect: 4.67 is average per work order (28 / 6).",
              "es": "Incorrecto: 4,67 es el promedio por orden de trabajo.",
            },
          },
          {
            id: "q7-d",
            text: { "pt-BR": "11,00 horas", "en": "11.00 hours", "es": "11,00 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 11,00 horas é o valor máximo individual da B01, que seria obtido com a função MAXX.",
              "en": "Incorrect: 11.00 is the maximum individual total (MAXX).",
              "es": "Incorrecto: 11,00 es el valor máximo (MAXX).",
            },
          },
        ],
      },
      {
        id: "q-pbi-8",
        order: 8,
        question: {
          "pt-BR": "No Power Query, a coluna Horas de uma planilha externa foi importada com formato de texto e valores como \"4,5\" e \"2,25\". O arquivo foi gerado no Brasil, mas o Power BI Desktop está configurado no padrão Inglês (EUA).\n\nAo clicar em 'Alterar Tipo → Número Decimal', o valor \"4,5\" transformou-se em 45 e \"2,25\" em 225. O que causou esse comportamento e como resolver?",
          "en": "In Power Query, an external column arrived with text numbers like \"4,5\" and \"2,25\". The file was created in Brazil, but Power BI Desktop is set to English (US).\n\nAfter 'Change Type → Decimal Number', \"4,5\" became 45 and \"2,25\" became 225. What happened and how to fix it?",
          "es": "En Power Query, una columna de texto con \"4,5\" y \"2,25\" se convirtió a número decimal con configuración de EE. UU., resultando en 45 y 225. ¿Qué ocurrió y cómo resolverlo?",
        },
        options: [
          {
            id: "q8-a",
            text: {
              "pt-BR": "Na localidade Inglês (EUA) a vírgula é tratada como separador de milhar e descartada. A correção correta no Power Query é: Alterar Tipo → Usando a Localidade → Português (Brasil).",
              "en": "In English (US) commas are treated as thousands separators and dropped. The fix is: Change Type → Using Locale → Portuguese (Brazil).",
              "es": "En Inglés (EE. UU.) la coma es separador de miles y se descarta. La solución es: Cambiar tipo → Usando configuración regional → Portugués (Brasil).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Exato: em localidades onde o ponto é o separador decimal oficial, a vírgula é lida como separador de agrupamento de milhar e ignorada. A conversão com localidade garante que a vírgula seja interpretada como decimal.",
              "en": "Exact: in dot-decimal locales, commas are thousand separators. Using Locale enforces comma as decimal.",
              "es": "Exacto: usar la configuración regional garantiza que la coma se lea como separador decimal.",
            },
          },
          {
            id: "q8-b",
            text: {
              "pt-BR": "A coluna foi convertida para Número Inteiro, que automaticamente junta os algarismos.",
              "en": "The column was converted to Whole Number, which concatenates digits.",
              "es": "La columna se convirtió a Número Entero, uniendo los dígitos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: número inteiro arredonda valores decimais, não remove a vírgula multiplicando o número por 10.",
              "en": "Incorrect: Whole Number rounds values, not multiplies them by 10.",
              "es": "Incorrecto: el entero redondea, no multiplica por 10.",
            },
          },
          {
            id: "q8-c",
            text: {
              "pt-BR": "Haviam espaços invisíveis no texto que forçaram a multiplicação por 10.",
              "en": "Invisible spaces in text forced multiplication by 10.",
              "es": "Espacios invisibles en el texto forzaron la multiplicación por 10.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: espaços extras geram erro de conversão (Error), não distorção matemática de milhar.",
              "en": "Incorrect: extra spaces cause conversion errors, not digit shifts.",
              "es": "Incorrecto: los espacios generan error de conversión.",
            },
          },
          {
            id: "q8-d",
            text: {
              "pt-BR": "A agregação da coluna no modelo estava configurada como Soma.",
              "en": "The column summarization was set to Sum.",
              "es": "La agregación de la columna estaba como Suma.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: a agregação ocorre na camada de visualização, não altera os dados transformados no Power Query.",
              "en": "Incorrect: summarization only happens at report visual level.",
              "es": "Incorrecto: la agregación solo afecta a los visuales.",
            },
          },
        ],
      },
      {
        id: "q-pbi-9",
        order: 9,
        question: {
          "pt-BR": "Um usuário cria uma COLUNA CALCULADA diretamente na tabela fOS com a expressão:\nParticipação = DIVIDE(fOS[Horas], SUM(fOS[Horas]))\n\nQual é o valor retornado por essa coluna calculada na linha correspondente à ordem OS-04 (8 horas)?",
          "en": "A user creates a CALCULATED COLUMN in fOS with:\nParticipação = DIVIDE(fOS[Horas], SUM(fOS[Horas]))\n\nWhat value is returned on the row for OS-04 (8 hours)?",
          "es": "Se crea una COLUMNA CALCULADA en fOS con:\nParticipação = DIVIDE(fOS[Horas], SUM(fOS[Horas]))\n\n¿Qué valor devuelve en la fila de OS-04 (8 horas)?",
        },
        options: [
          {
            id: "q9-a",
            text: { "pt-BR": "28,6%", "en": "28.6%", "es": "28,6%" },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto: em colunas calculadas o contexto de linha NÃO gera transição de contexto automática em agregações simples (a menos que envolvidas por CALCULATE). Portanto, SUM(fOS[Horas]) soma a tabela inteira (28 h), resultando em 8 / 28 ≈ 28,57% (28,6%).",
              "en": "Correct: in calculated columns raw SUM has no context transition and sums the full table (28 h). 8 / 28 ≈ 28.6%.",
              "es": "Correcto: en columnas calculadas SUM suma toda la tabla (28 h): 8 / 28 ≈ 28,6%.",
            },
          },
          {
            id: "q9-b",
            text: { "pt-BR": "100,0%", "en": "100.0%", "es": "100,0%" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 100% ocorreria caso houvesse transição de contexto com CALCULATE(SUM(...)), fazendo o denominador somar apenas a própria linha atual.",
              "en": "Incorrect: 100% requires CALCULATE to trigger row-to-filter context transition.",
              "es": "Incorrecto: 100% requeriría CALCULATE para transición de contexto.",
            },
          },
          {
            id: "q9-c",
            text: { "pt-BR": "57,1%", "en": "57.1%", "es": "57,1%" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 57,1% seria a divisão de 8 por 14 (total apenas das corretivas), mas a fórmula não contém filtro de tipo.",
              "en": "Incorrect: 57.1% would filter only corrective orders, which this formula does not do.",
              "es": "Incorrecto: 57,1% solo filtraría correctivas.",
            },
          },
          {
            id: "q9-d",
            text: { "pt-BR": "8 horas", "en": "8 hours", "es": "8 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: a fórmula divide o valor, não retorna as horas brutas.",
              "en": "Incorrect: the formula performs a division.",
              "es": "Incorrecto: la fórmula realiza una división.",
            },
          },
        ],
      },
      {
        id: "q-pbi-10",
        order: 10,
        question: {
          "pt-BR": "Ao atualizar o modelo, o Power BI sugeriu cardinalidade de relacionamento Muitos-para-Muitos (*:*) entre dEquip[ID_Equipamento] e fOS[ID_Equipamento]. Ao analisar a tabela dEquip, foi descoberto que o código 'B02' foi cadastrado em duplicidade com dados idênticos.\n\nQual é o procedimento técnico correto para restabelecer a integridade do modelo estrela?",
          "en": "Upon refresh, Power BI suggested Many-to-Many (*:*) cardinality between dEquip and fOS because 'B02' was duplicated in dEquip.\n\nWhat is the correct procedure to restore star schema integrity?",
          "es": "Power BI sugirió cardinalidad Muchos-a-Muchos (*:*) porque 'B02' está duplicado en dEquip.\n\n¿Cuál es el procedimiento técnico correcto?",
        },
        options: [
          {
            id: "q10-a",
            text: {
              "pt-BR": "No Power Query, aplicar 'Remover Duplicadas' na coluna ID_Equipamento da tabela dEquip e restabelecer o relacionamento clássico Um-para-Muitos (1 → *).",
              "en": "In Power Query, apply 'Remove Duplicates' on ID_Equipamento in dEquip and re-establish the standard One-to-Many (1 → *) relationship.",
              "es": "En Power Query, aplicar 'Quitar Duplicados' en ID_Equipamento en dEquip y restablecer la relación Uno-a-Muchos (1 → *).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto: tabelas dimensão exigem obrigatoriamente chaves primárias únicas. A remoção da linha duplicada na etapa de ETL (Power Query) garante integridade referencial e relacionamento 1:* sem ambiguidades.",
              "en": "Correct: dimensions strictly require unique keys. Deduplicating in Power Query ensures proper 1:* integrity.",
              "es": "Correcto: las dimensiones exigen claves únicas en Power Query para garantizar la relación 1:*.",
            },
          },
          {
            id: "q10-b",
            text: {
              "pt-BR": "Manter o relacionamento Muitos-para-Muitos (*:*) e marcar a direção do filtro como Ambas.",
              "en": "Keep Many-to-Many (*:*) and set filter direction to Both.",
              "es": "Mantener Muchos-a-Muchos (*:*) con dirección Ambas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: relacionamentos *:*; aumentam a ambiguidade do modelo, degradam a performance do DAX e mascaram erros de cadastro.",
              "en": "Incorrect: Many-to-Many masks source errors and degrades engine performance.",
              "es": "Incorrecto: Muchos-a-Muchos degrada el rendimiento y enmascara errores.",
            },
          },
          {
            id: "q10-c",
            text: {
              "pt-BR": "Desativar o relacionamento e utilizar a função USERELATIONSHIP em todas as medidas do relatório.",
              "en": "Deactivate the relationship and use USERELATIONSHIP across all measures.",
              "es": "Desactivar la relación y usar USERELATIONSHIP en todas las medidas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: USERELATIONSHIP serve para ativar relacionamentos inativos alternativos, não corrige duplicações de chave na dimensão.",
              "en": "Incorrect: USERELATIONSHIP is for role-playing dimensions, not fixing duplicate keys.",
              "es": "Incorrecto: USERELATIONSHIP no soluciona claves duplicadas.",
            },
          },
          {
            id: "q10-d",
            text: {
              "pt-BR": "Alterar o tipo de dados dos dois IDs para Texto.",
              "en": "Change both ID data types to Text.",
              "es": "Cambiar el tipo de datos de ambos IDs a Texto.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: os IDs já são códigos de texto; o erro é a duplicidade do valor, não o tipo do dado.",
              "en": "Incorrect: the issue is duplicate rows, not data type.",
              "es": "Incorrecto: el problema es la duplicación de filas.",
            },
          },
        ],
      },
    ],
  },
};