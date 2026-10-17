import { CourseDemonstration } from "@/types";

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
    estimatedMinutes: 25,
    questionsCount: 5,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação final sobre conceitos fundamentais de Power BI, ETL com Power Query, modelagem dimensional e cálculos DAX. Nota mínima de 70% para emissão do certificado.",
      "en": "Final examination on Power BI fundamentals, Power Query ETL, dimensional modeling, and DAX calculations. 70% passing score.",
      "es": "Evaluación final de Power BI, Power Query, modelado relacional y fórmulas DAX. Calificación mínima de 70%.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência — Power BI & Analytics Industrial",
      "en": "Final Competency Exam — Power BI & Industrial Analytics",
      "es": "Evaluación Final de Competencias — Power BI y Analítica Industrial",
    },
    description: {
      "pt-BR": "Validação de domínio em automação de ETL no Power Query, modelagem dimensional (Tabelas Fato vs Dimensão), cálculos dinâmicos com DAX e seleção de elementos visuais para painéis executivos.",
      "en": "Validates proficiency in Power Query ETL automation, star schema modeling, DAX measure creation, and visual selection for executive dashboards.",
      "es": "Valida competencias en ETL con Power Query, modelo relacional, medidas DAX y diseño de paneles interactivos.",
    },
    questions: [
      {
        id: "q-pbi-1",
        order: 1,
        question: {
          "pt-BR": "1. Qual é a principal vantagem de utilizar o editor do Power Query para limpar e transformar dados em vez de fazer alterações manuais na planilha de Excel original?",
          "en": "1. What is the primary benefit of using Power Query for ETL transformations rather than manually editing the original Excel file?",
          "es": "1. ¿Cuál es la principal ventaja de usar Power Query para limpiar datos en lugar de editar manualmente la planilla original?",
        },
        options: [
          {
            id: "opt-pbi-1-a",
            text: {
              "pt-BR": "Todas as etapas de tratamento (remover colunas, filtrar vazios, alterar tipos) são salvas em um fluxo automatizado que se repete sozinho sempre que a base de dados for atualizada com novas medições.",
              "en": "All transformation steps are recorded into an automated repeatable pipeline that replays automatically whenever new data is refreshed.",
              "es": "Todas las transformaciones se guardan en un flujo automatizado que se repite automáticamente al actualizar los datos.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O Power Query memoriza cada ação na lista de 'Etapas Aplicadas', eliminando o retrabalho manual diário ou semanal.",
              "en": "Correct! Power Query stores applied steps and automates the entire ingestion pipeline on future refreshes.",
              "es": "¡Correcto! Power Query registra los pasos aplicados y los automatiza para futuras actualizaciones.",
            },
          },
          {
            id: "opt-pbi-1-b",
            text: {
              "pt-BR": "O Power Query apaga permanentemente o arquivo de Excel do computador para liberar espaço no disco rígido.",
              "en": "Power Query permanently deletes the underlying Excel file to save disk space.",
              "es": "Power Query borra el archivo Excel original para liberar espacio.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O Power Query lê a fonte de dados de forma não-destrutiva, preservando o arquivo original intacto.",
              "en": "Incorrect. Power Query performs read-only, non-destructive extraction preserving source files.",
              "es": "Incorrecto. Power Query no altera ni borra el archivo de origen.",
            },
          },
          {
            id: "opt-pbi-1-c",
            text: {
              "pt-BR": "Ele serve unicamente para desenhar logotipos e gráficos de pizza tridimensionais.",
              "en": "It is exclusively used to draw logos and 3D pie charts.",
              "es": "Sirve únicamente para diseñar logos y gráficos 3D.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O Power Query é o motor de ETL (Extração, Transformação e Carga) de dados do ecossistema Microsoft.",
              "en": "Incorrect. Power Query is Microsoft's enterprise ETL engine.",
              "es": "Incorrecto. Es un motor de transformación y preparación de datos.",
            },
          },
        ],
      },
      {
        id: "q-pbi-2",
        order: 2,
        question: {
          "pt-BR": "2. Na modelagem de dados do Power BI, qual a diferença essencial entre uma 'Tabela Fato' e uma 'Tabela Dimensão' em um ambiente operacional da RSS3?",
          "en": "2. In Power BI data modeling, what is the core difference between a 'Fact Table' and a 'Dimension Table'?",
          "es": "2. En el modelado de datos de Power BI, ¿cuál es la diferencia entre una 'Tabla de Hechos' (Fato) y una 'Tabla Dimensión'?",
        },
        options: [
          {
            id: "opt-pbi-2-a",
            text: {
              "pt-BR": "A Tabela Fato armazena os acontecimentos numéricos e históricos (ex: horas trabalhadas, m² jateados, ordens de serviço executadas), enquanto a Tabela Dimensão contém cadastros de características para filtrar e contextualizar esses fatos (ex: lista de colaboradores, lista de contratos, clientes).",
              "en": "The Fact table stores transactional numerical events (hours logged, m² blasted, work orders), while Dimension tables store descriptive context used for slicing and filtering (personnel roster, contracts, clients).",
              "es": "La Tabla de Hechos almacena registros numéricos y transacciones (horas, metros cuadrados, servicios), mientras que la Tabla Dimensión contiene catálogos descriptivos para filtrar (empleados, clientes, áreas).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Esse é o princípio do modelo dimensional (Star Schema), que garante alta performance e integridade nos relacionamentos.",
              "en": "Correct! This is the foundation of star schema dimensional modeling, driving blazing analytical speed.",
              "es": "¡Correcto! Es el principio del modelo relacional en estrella que optimiza el cálculo.",
            },
          },
          {
            id: "opt-pbi-2-b",
            text: {
              "pt-BR": "A Tabela Fato só pode conter textos e a Tabela Dimensão só pode conter datas futuras.",
              "en": "The Fact table only holds text while Dimension tables only hold future dates.",
              "es": "La Tabla Fato solo contiene texto y la Dimensión solo fechas futuras.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Tabelas fato concentram valores numéricos quantitativos e chaves estrangeiras.",
              "en": "Incorrect. Fact tables concentrate numeric measures and foreign keys.",
              "es": "Incorrecto. Las tablas de hechos contienen métricas numéricas.",
            },
          },
          {
            id: "opt-pbi-2-c",
            text: {
              "pt-BR": "São tabelas idênticas e duplicadas que devem ser somadas manualmente toda vez que o painel for aberto.",
              "en": "They are identical duplicate sheets requiring manual addition on every dashboard load.",
              "es": "Son planillas idénticas que se deben sumar a mano cada vez.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Elas cumprem funções analíticas distintas e se conectam por relacionamentos automatizados.",
              "en": "Incorrect. They play complementary dimensional roles linked by automated relationships.",
              "es": "Incorrecto. Tienen roles estructurales complementarios.",
            },
          },
        ],
      },
      {
        id: "q-pbi-3",
        order: 3,
        question: {
          "pt-BR": "3. No desenvolvimento de fórmulas com a linguagem DAX, por que é uma boa prática criar 'Medidas' em vez de criar várias 'Colunas Calculadas' na tabela de dados?",
          "en": "3. In DAX formula authoring, why is creating 'Measures' preferred over accumulating 'Calculated Columns'?",
          "es": "3. Al escribir fórmulas DAX, ¿por qué es mejor crear 'Medidas' en lugar de múltiples 'Columnas Calculadas'?",
        },
        options: [
          {
            id: "opt-pbi-3-a",
            text: {
              "pt-BR": "As Medidas não ocupam espaço permanente no arquivo nem consomem memória RAM de armazenamento linha a linha; elas são calculadas dinamicamente sob demanda conforme os filtros que o usuário clica na tela.",
              "en": "Measures do not consume persistent row-by-row storage in memory; they calculate on-the-fly dynamically responding to visual canvas filter context.",
              "es": "Las Medidas no ocupan espacio de almacenamiento permanente línea por línea; se calculan en tiempo real según los filtros activos en pantalla.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Colunas calculadas aumentam o tamanho do arquivo em disco, enquanto Medidas mantêm o modelo leve e com resposta instantânea.",
              "en": "Correct! Calculated columns bloat file footprint, whereas measures keep models lean and responsive.",
              "es": "¡Correcto! Las medidas optimizan el rendimiento y la memoria del modelo.",
            },
          },
          {
            id: "opt-pbi-3-b",
            text: {
              "pt-BR": "Porque o Power BI não permite criar mais de duas colunas calculadas por projeto.",
              "en": "Because Power BI limits models to at most two calculated columns.",
              "es": "Porque Power BI solo permite crear dos columnas calculadas como máximo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Não existe esse limite técnico, mas o uso excessivo de colunas degrada a performance do relatório.",
              "en": "Incorrect. No arbitrary hard limit exists, but excessive columns degrade memory throughput.",
              "es": "Incorrecto. No hay un límite numérico, pero afecta el rendimiento.",
            },
          },
          {
            id: "opt-pbi-3-c",
            text: {
              "pt-BR": "Medidas só funcionam quando o computador está desconectado da tomada de energia.",
              "en": "Measures only evaluate when laptops run on battery power.",
              "es": "Las medidas solo funcionan con la computadora desconectada de la red eléctrica.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e sem fundamento técnico.",
              "en": "Incorrect and unfounded.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-pbi-4",
        order: 4,
        question: {
          "pt-BR": "4. Ao calcular a taxa de produtividade ou índice de conformidade com a fórmula DAX, por que se recomenda utilizar a função =DIVIDE(Numerador, Denominador) em vez da barra tradicional (Numerador / Denominador)?",
          "en": "4. When calculating operational ratios in DAX, why is =DIVIDE(Numerator, Denominator) recommended over the forward slash operator (/)?",
          "es": "4. Al calcular porcentajes en DAX, ¿por qué se recomienda usar =DIVIDE(Numerador, Denominador) en lugar de la barra (/)?",
        },
        options: [
          {
            id: "opt-pbi-4-a",
            text: {
              "pt-BR": "A função DIVIDE trata automaticamente cenários em que o denominador é zero ou nulo, retornando um valor em branco ou alternativo sem quebrar o relatório com erros de divisão por zero (#ERROR!).",
              "en": "The DIVIDE function automatically intercepts zero or blank denominators, returning safe blanks without breaking visual canvases with division-by-zero errors.",
              "es": "La función DIVIDE maneja divisiones por cero o valores nulos de forma segura, evitando que los gráficos muestren mensajes de error.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A função DIVIDE é otimizada internamente pela Microsoft para evitar erros visuais em cartões e gráficos quando uma equipe ainda não registrou horas em determinada data.",
              "en": "Correct! DIVIDE is optimized for graceful zero-denominator handling without crashes.",
              "es": "¡Correcto! Evita que los paneles muestren errores cuando un denominador es cero.",
            },
          },
          {
            id: "opt-pbi-4-b",
            text: {
              "pt-BR": "A barra tradicional só pode ser usada em computadores fabricados antes do ano 2000.",
              "en": "The forward slash operator is only supported on legacy computers built before 2000.",
              "es": "La barra tradicional solo funciona en computadoras antiguas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A barra funciona, mas gera erro quando o denominador for zero.",
              "en": "Incorrect. The slash operator works but throws ugly errors on zero denominators.",
              "es": "Incorrecto. La barra funciona pero produce errores si el divisor es cero.",
            },
          },
          {
            id: "opt-pbi-4-c",
            text: {
              "pt-BR": "A função DIVIDE sempre multiplica o resultado final por 1 milhão automaticamente.",
              "en": "DIVIDE automatically multiplies the quotient by one million.",
              "es": "DIVIDE multiplica automáticamente el resultado por un millón.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. DIVIDE realiza divisão matemática exata e segura.",
              "en": "Incorrect. DIVIDE executes standard division safely.",
              "es": "Incorrecto. Es una división matemática controlada.",
            },
          },
        ],
      },
      {
        id: "q-pbi-5",
        order: 5,
        question: {
          "pt-BR": "5. O que caracteriza um dashboard executivo eficiente segundo as boas práticas de visualização de dados ensinadas no curso?",
          "en": "5. What characterizes an effective executive dashboard according to data visualization best practices?",
          "es": "5. ¿Qué caracteriza a un panel de control ejecutivo eficaz según las buenas prácticas de visualización?",
        },
        options: [
          {
            id: "opt-pbi-5-a",
            text: {
              "pt-BR": "Clareza visual imediata: cartões de KPIs principais destacados no topo, gráficos adequados ao tipo de análise (barras para comparação, linhas para evolução temporal), segmentadores de dados fáceis de usar e ausência de poluição visual.",
              "en": "Immediate visual clarity: top-line KPI summary cards, fit-for-purpose charts (bars for comparison, lines for trends), intuitive slicers, and zero visual clutter.",
              "es": "Claridad visual inmediata: tarjetas de KPIs principales en la parte superior, gráficos adecuados a la métrica, filtros intuitivos y sin sobrecarga visual.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O objetivo de um painel de BI é permitir que um gestor tome decisões seguras e rápidas em poucos segundos de análise visual.",
              "en": "Correct! BI dashboards exist to empower swift, confident decision-making within seconds of visual scanning.",
              "es": "¡Correcto! Permite que los líderes tomen decisiones operativas ágiles con solo un vistazo.",
            },
          },
          {
            id: "opt-pbi-5-b",
            text: {
              "pt-BR": "Colocar o maior número possível de cores vibrantes, fontes diferentes em cada frase e 30 gráficos piscando na mesma tela.",
              "en": "Stuffing 30 flashing charts, mismatched fonts, and neon colors onto a single view.",
              "es": "Llenar la pantalla con 30 gráficos de diferentes colores chillones y fuentes distintas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A poluição visual confunde o usuário e prejudica a leitura dos indicadores.",
              "en": "Incorrect. Visual clutter impedes comprehension and obscures critical operational insights.",
              "es": "Incorrecto. La sobrecarga visual dificulta la toma de decisiones.",
            },
          },
          {
            id: "opt-pbi-5-c",
            text: {
              "pt-BR": "Bloquear todos os filtros para que nenhum colaborador consiga selecionar datas ou contratos diferentes.",
              "en": "Hard-locking all filters so no user can drill down into dates or contracts.",
              "es": "Bloquear los filtros para que nadie pueda interactuar con los datos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A interatividade dos segmentadores e o cruzamento dinâmico de dados são os maiores diferenciais do Power BI.",
              "en": "Incorrect. Dynamic slicers and cross-filtering are Power BI's primary competitive advantages.",
              "es": "Incorrecto. La interactividad y los filtros dinámicos son la esencia de Power BI.",
            },
          },
        ],
      },
    ],
  },
};
