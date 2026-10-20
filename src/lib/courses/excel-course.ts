import { CourseDemonstration } from "@/types";

/**
 * Base de dados FICTÍCIA oficial da avaliação final de Excel:
 * Tabela de Apontamentos de Manutenção (Ordens de Serviço).
 * Estruturada nas colunas: OS (A), Equipe (B), Área (C), Horas Trabalhadas (D), Status (E) e Custo Total (F).
 */
export const EXCEL_EXAM_DATASET_ROWS = [
  { os: "OS-101", equipe: "Mecânica", area: "Caldeira", horas: 8, status: "Concluída", custo: 4500 },
  { os: "OS-102", equipe: "Elétrica", area: "Secagem", horas: 6, status: "Em Andamento", custo: 7200 },
  { os: "OS-103", equipe: "Hidrojato", area: "Pátio", horas: 12, status: "Pendente", custo: 3800 },
  { os: "OS-104", equipe: "Mecânica", area: "Secagem", horas: 10, status: "Concluída", custo: 11200 },
  { os: "OS-105", equipe: "Elétrica", area: "Caldeira", horas: 4, status: "Pendente", custo: 1950 },
  { os: "OS-106", equipe: "Hidrojato", area: "Pátio", horas: 16, status: "Em Andamento", custo: 16400 },
  { os: "OS-107", equipe: "Mecânica", area: "Caldeira", horas: 7, status: "Concluída", custo: 8900 },
  { os: "OS-108", equipe: "Elétrica", area: "Pátio", horas: 14, status: "Em Andamento", custo: 13750 },
  { os: "OS-109", equipe: "Hidrojato", area: "Secagem", horas: 9, status: "Concluída", custo: 5600 },
  { os: "OS-110", equipe: "Mecânica", area: "Pátio", horas: 11, status: "Pendente", custo: 10200 },
  { os: "OS-111", equipe: "Elétrica", area: "Secagem", horas: 5, status: "Concluída", custo: 3150 },
  { os: "OS-112", equipe: "Hidrojato", area: "Caldeira", horas: 13, status: "Em Andamento", custo: 17800 },
  { os: "OS-113", equipe: "Mecânica", area: "Secagem", horas: 15, status: "Pendente", custo: 6900 },
];

export const excelCourseData: CourseDemonstration = {
  id: "c-excel-produtividade-operacional",
  slug: "excel-corporativo-produtividade-operacional",
  title: {
    "pt-BR": "Excel Corporativo & Produtividade Operacional (Office 365)",
    "en": "Corporate Excel & Operational Productivity (Office 365)",
    "es": "Excel Corporativo y Productividad Operacional (Office 365)",
  },
  description: {
    "pt-BR": "Curso prático de Excel voltado à rotina industrial e corporativa da RSS3: estruturação de planilhas de controle, fórmulas essenciais (SOMA, MÉDIA, SE, PROCV/PROCX), formatação condicional, gráficos dinâmicos, tabelas dinâmicas e relatórios de apontamento de frente operacional.",
    "en": "Practical Excel course for RSS3 industrial and corporate operations: control sheets, core formulas (SUM, AVERAGE, IF, VLOOKUP/XLOOKUP), conditional formatting, charts, pivot tables, and jobsite reporting.",
    "es": "Curso práctico de Excel aplicado a operaciones industriales: planillas de control, fórmulas esenciales (SUMA, PROMEDIO, SI, BUSCARV/BUSCARX), tablas dinámicas y reportes operacionales.",
  },
  longDescription: {
    "pt-BR": "O treinamento de Excel Corporativo da RSS3 Treinamentos foi concebido especificamente para capacitar colaboradores de campo e escritório — desde assistentes administrativos, planejadores, técnicos de manutenção, encarregados e líderes de contrato — no domínio ágil e profissional de planilhas eletrônicas no Office 365. O conteúdo avança desde a navegação na interface, atalhos de produtividade e operadores matemáticos, até a construção de fórmulas lógicas avançadas, higienização de bases de dados operacionais, consolidação de dados em tabelas dinâmicas e apresentação executiva de indicadores industriais (produtividade de hidrojato, consumo de tintas, horas trabalhadas e controle de inventário).",
    "en": "The RSS3 Corporate Excel training is tailored for frontline leaders, maintenance planners, administrative staff, and project managers on Office 365. Covers interface navigation, shortcuts, core math and logical formulas, data hygiene, pivot tables, and industrial performance dashboards.",
    "es": "Capacitación corporativa en Excel para líderes de planta, planificadores y administrativos en Office 365. Manejo de fórmulas, validación de datos, tablas dinámicas e indicadores industriales.",
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
    "Assistente Administrativo",
    "Planejador de Manutenção",
    "Encarregado Operacional",
    "Líder de Contrato",
    "Técnico de Segurança do Trabalho",
    "Almoxarife",
  ],
  targetAudience: {
    "pt-BR": "Colaboradores administrativos, técnicos de campo, planejadores, líderes e supervisores de frente da RSS3 que utilizam planilhas para controle de apontamentos, paradas de fábrica, medição de serviços e gestão de custos.",
    "en": "RSS3 administrative personnel, site planners, maintenance technicians, and operations leaders handling reporting, shutdown logs, and cost tracking.",
    "es": "Personal administrativo, técnicos de campo y supervisores de obra que gestionan planillas operacionales y control de paradas.",
  },
  prerequisites: {
    "pt-BR": "Conhecimentos básicos de informática e navegação em ambiente Windows.",
    "en": "Basic computer skills and Windows navigation experience.",
    "es": "Conocimientos básicos de computación y navegación en Windows.",
  },
  modulesCount: 2,
  lessonsCount: 8,
  thumbnailGradient: "from-emerald-700 via-teal-800 to-slate-950",
  coverImage: "/images/courses/excel.jpg",
  categories: ["gestao-produtividade"],
  badgeCode: "EXCEL-365",
  updatedAtDate: "2026-10-16",
  modules: [
    {
      id: "mod-excel-1",
      order: 1,
      title: {
        "pt-BR": "Módulo 1: Fundamentos, Interface e Fórmulas Essenciais (Aulas 01 a 04)",
        "en": "Module 1: Fundamentals, Interface & Essential Formulas (Lessons 01 to 04)",
        "es": "Módulo 1: Fundamentos, Interfaz y Fórmulas Esenciales (Clases 01 a 04)",
      },
      description: {
        "pt-BR": "Conceitos básicos de células e intervalos, navegação no Office 365, formatação visual de dados e operadores aritméticos fundamentais.",
        "en": "Basic cell and range concepts, Office 365 interface, data styling, and fundamental arithmetic operators.",
        "es": "Conceptos de celdas y rangos, navegación en Office 365, formato visual y operaciones matemáticas básicas.",
      },
      lessons: [
        {
          id: "les-excel-1-1",
          order: 1,
          title: {
            "pt-BR": "Excel Office 365: Apresentação da Interface, Pastas e Células — Aula 01",
            "en": "Excel Office 365: Interface Overview, Workbooks & Cells — Lesson 01",
            "es": "Excel Office 365: Interfaz, Libros de Trabajo y Celdas — Clase 01",
          },
          durationMinutes: 22,
          contentType: "video",
          videoUrl: "ghfGVVVXrG4",
          contentDetail: {
            objective: {
              "pt-BR": "Conhecer a faixa de opções do Excel, barra de fórmulas, coordenadas de células, tipos de ponteiros do mouse e conceitos de pasta de trabalho.",
              "en": "Navigate the Excel ribbon, formula bar, cell coordinates, mouse pointer types, and workbook structure.",
              "es": "Conocer la cinta de opciones, barra de fórmulas, coordenadas de celdas y estructura de libros.",
            },
            summaryPoints: [
              {
                "pt-BR": "Estrutura do Excel no Office 365: linhas (números), colunas (letras), células e barra de status inferior.",
                "en": "Excel Office 365 layout: numbered rows, lettered columns, cells, and status bar.",
                "es": "Estructura de Excel: filas, columnas, celdas y barra de estado.",
              },
              {
                "pt-BR": "Formas do cursor do mouse: cruz branca grossa (seleção), cruz preta de quatro pontas (mover) e cruz preta fina (alça de preenchimento).",
                "en": "Mouse cursor states: thick white cross (select), 4-arrow cross (move), and thin black cross (fill handle).",
                "es": "Punteros del ratón: cruz blanca para selección, flechas para mover y cruz fina para autorrelleno.",
              },
              {
                "pt-BR": "Diferença fundamental entre texto (alinhado à esquerda) e números/datas (alinhados à direita por padrão).",
                "en": "Core distinction between text (left-aligned) and numeric/date values (right-aligned by default).",
                "es": "Diferencia entre texto (alineado a la izquierda) y números/fechas (alineados a la derecha).",
              },
            ],
          },
        },
        {
          id: "les-excel-1-2",
          order: 2,
          title: {
            "pt-BR": "Excel Office 365: Formatação de Células, Tipos de Dados e Estilos — Aula 02",
            "en": "Excel Office 365: Cell Formatting, Data Types & Styles — Lesson 02",
            "es": "Excel Office 365: Formato de Celdas, Tipos de Datos y Estilos — Clase 02",
          },
          durationMinutes: 20,
          contentType: "video",
          videoUrl: "zWYwg4hvLFE",
          contentDetail: {
            objective: {
              "pt-BR": "Aplicar formatação de números (Moeda, Contábil, Porcentagem e Datas), mesclagem consciente e bordas padronizadas.",
              "en": "Apply numeric formats (Currency, Accounting, Percentage, Dates), clean cell merging, and standard grid borders.",
              "es": "Aplicar formatos numéricos (moneda, porcentaje, fecha), bordes y estilos visuales.",
            },
            summaryPoints: [
              {
                "pt-BR": "Formatação numérica: configurar casas decimais, separador de milhar e estilo monetário brasileiro (R$).",
                "en": "Number formatting: decimal places, thousands separators, and currency symbols.",
                "es": "Formato numérico: decimales, separador de miles y moneda.",
              },
              {
                "pt-BR": "Ajuste automático de largura de colunas e altura de linhas com duplo clique na divisão do cabeçalho.",
                "en": "Auto-fitting column widths and row heights with double clicks on header borders.",
                "es": "Ajuste automático de ancho de columna y alto de fila con doble clic.",
              },
              {
                "pt-BR": "Boas práticas de design corporativo: paletas sóbrias, fontes legíveis e evitar excesso de cores berrantes.",
                "en": "Corporate design best practices: subtle palettes, clear fonts, avoiding overly harsh colors.",
                "es": "Buenas prácticas de diseño corporativo: colores sobrios y tipografía clara.",
              },
            ],
          },
        },
        {
          id: "les-excel-1-3",
          order: 3,
          title: {
            "pt-BR": "Excel Office 365: Operadores Matemáticos e Fórmulas Básicas — Aula 03",
            "en": "Excel Office 365: Math Operators & Basic Formulas — Lesson 03",
            "es": "Excel Office 365: Operadores Matemáticos y Fórmulas Básicas — Clase 03",
          },
          durationMinutes: 24,
          contentType: "video",
          videoUrl: "Ew8n9PNu7rQ",
          contentDetail: {
            objective: {
              "pt-BR": "Escrever cálculos manuais com operadores (+, -, *, /, ^) e compreender a precedência matemática com parênteses.",
              "en": "Write formulas using basic arithmetic operators (+, -, *, /, ^) and master mathematical precedence rules.",
              "es": "Escribir cálculos manuales y dominar la jerarquía de operadores con paréntesis.",
            },
            summaryPoints: [
              {
                "pt-BR": "Toda fórmula no Excel deve obrigatoriamente iniciar com o sinal de igual (=).",
                "en": "Every Excel formula must strictly begin with an equals sign (=).",
                "es": "Toda fórmula en Excel debe iniciar obligatoriamente con el signo igual (=).",
              },
              {
                "pt-BR": "Ordem de precedência: parênteses têm prioridade máxima, seguidos de potenciação, multiplicação/divisão e adição/subtração.",
                "en": "Order of operations: parentheses first, then powers, multiplication/division, and addition/subtraction.",
                "es": "Orden de precedencia: paréntesis primero, luego potencias, multiplicación/división y sumas/restas.",
              },
              {
                "pt-BR": "Uso de referências de células (ex: =A2*B2) em vez de valores fixos para permitir atualização dinâmica e automática.",
                "en": "Using dynamic cell references instead of hardcoded numbers to ensure automated recalculations.",
                "es": "Uso de referencias de celdas dinámicas para permitir recálculo automático.",
              },
            ],
          },
        },
        {
          id: "les-excel-1-4",
          order: 4,
          title: {
            "pt-BR": "Excel Office 365: Funções Estatísticas Fundamentais (SOMA, MÉDIA, MÁXIMO, MÍNIMO) — Aula 04",
            "en": "Excel Office 365: Core Statistical Functions (SUM, AVERAGE, MAX, MIN) — Lesson 04",
            "es": "Excel Office 365: Funciones Estadísticas Básicas (SUMA, PROMEDIO, MAX, MIN) — Clase 04",
          },
          durationMinutes: 25,
          contentType: "video",
          videoUrl: "keJLN8P-F_A",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar as funções mais utilizadas no mercado de trabalho e o preenchimento automático por intervalos contíguos.",
              "en": "Master the most common business functions and range autofilling for rapid aggregation.",
              "es": "Dominar funciones estadísticas cotidianas y el manejo de rangos continuos.",
            },
            summaryPoints: [
              {
                "pt-BR": "Sintaxe de intervalo: o operador dois-pontos (:) indica 'até' (ex: =SOMA(A1:A20)) e ponto-e-vírgula (;) separa argumentos isolados.",
                "en": "Range syntax: colon (:) means 'through' (=SUM(A1:A20)), while semicolon/comma separates distinct arguments.",
                "es": "Sintaxis de rango: los dos puntos (:) indican 'hasta', y el punto y coma (;) separa argumentos.",
              },
              {
                "pt-BR": "Atalho rápido de Autossoma (Alt + = no teclado em português) para somar colunas instantaneamente.",
                "en": "AutoSum shortcut to total columns and rows in a single keystroke.",
                "es": "Atajo rápido de Autosuma para totalizar columnas y filas al instante.",
              },
              {
                "pt-BR": "Diferença entre CONT.NÚM (conta apenas números) e CONT.VALORES (conta qualquer célula não vazia).",
                "en": "Difference between COUNT (numeric only) and COUNTA (counts any non-empty cell).",
                "es": "Diferencia entre CONTAR (solo números) y CONTARA (cuenta celdas no vacías).",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-excel-2",
      order: 2,
      title: {
        "pt-BR": "Módulo 2: Referências, Lógica, Visualização e Produtividade (Aulas 05 a 08)",
        "en": "Module 2: References, Logic, Visualization & Productivity (Lessons 05 to 08)",
        "es": "Módulo 2: Referencias, Lógica, Gráficos y Productividad (Clases 05 a 08)",
      },
      description: {
        "pt-BR": "Trancamento de células com cifrão ($), testes condicionais com a função SE, formatação condicional com regras visuais e criação de gráficos.",
        "en": "Absolute references ($ lock), IF logical statements, visual conditional formatting, and clear business charts.",
        "es": "Fijación de celdas con signo $, lógica condicional con función SI, formato condicional y gráficos.",
      },
      lessons: [
        {
          id: "les-excel-2-1",
          order: 1,
          title: {
            "pt-BR": "Excel Office 365: Referências Relativas, Absolutas e Mistas (O Cifrão $) — Aula 05",
            "en": "Excel Office 365: Relative, Absolute & Mixed References (The $ Sign) — Lesson 05",
            "es": "Excel Office 365: Referencias Relativas, Absolutas y Mixtas (El Signo $) — Clase 05",
          },
          durationMinutes: 23,
          contentType: "video",
          videoUrl: "FgWaTU6WPkM",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender como travar linhas e colunas ao arrastar fórmulas pela alça de preenchimento utilizando a tecla F4.",
              "en": "Lock cells, rows, and columns when dragging formulas across tables using the F4 absolute toggle.",
              "es": "Aprender a fijar filas y columnas al arrastrar fórmulas usando la tecla F4.",
            },
            summaryPoints: [
              {
                "pt-BR": "Referência Relativa (A1): muda automaticamente tanto a linha quanto a coluna ao arrastar a fórmula.",
                "en": "Relative reference (A1): changes row and column dynamically when copied.",
                "es": "Referencia relativa (A1): cambia automáticamente al arrastrar la fórmula.",
              },
              {
                "pt-BR": "Referência Absoluta ($A$1): congela rigidamente a célula para cálculo de taxas fixas, encargos ou metas percentuais.",
                "en": "Absolute reference ($A$1): rigidly freezes the target cell for tax rates, multipliers, or targets.",
                "es": "Referencia absoluta ($A$1): inmoviliza la celda para cálculos con tasas fijas.",
              },
              {
                "pt-BR": "Uso da tecla de atalho F4 para alternar rapidamente entre relativo, absoluto e misto ($A1 ou A$1).",
                "en": "Using F4 shortcut to toggle seamlessly between relative, absolute, and mixed references.",
                "es": "Uso de la tecla F4 para alternar entre referencias relativas y fijas.",
              },
            ],
          },
        },
        {
          id: "les-excel-2-2",
          order: 2,
          title: {
            "pt-BR": "Excel Office 365: Lógica Condicional com a Função SE — Aula 06",
            "en": "Excel Office 365: Conditional Logic with the IF Function — Lesson 06",
            "es": "Excel Office 365: Lógica Condicional con la Función SI — Clase 06",
          },
          durationMinutes: 26,
          contentType: "video",
          videoUrl: "uHS_wJ33L8g",
          contentDetail: {
            objective: {
              "pt-BR": "Construir tomadas de decisão automáticas nas planilhas: teste lógico, valor se verdadeiro e valor se falso.",
              "en": "Build automated decision trees in worksheets: logical test, value if true, and value if false.",
              "es": "Construir decisiones automáticas en planillas: prueba lógica, valor verdadero y valor falso.",
            },
            summaryPoints: [
              {
                "pt-BR": "Estrutura sintática da função: =SE(teste_lógico; valor_se_verdadeiro; valor_se_falso).",
                "en": "IF function syntax: =IF(logical_test, value_if_true, value_if_false).",
                "es": "Estructura de la función: =SI(prueba_lógica; valor_si_verdadero; valor_si_falso).",
              },
              {
                "pt-BR": "Operadores de comparação: maior (>), menor (<), maior ou igual (>=), menor ou igual (<=), igual (=) e diferente (<>).",
                "en": "Comparison operators: greater than (>), less than (<), greater or equal (>=), not equal (<>).",
                "es": "Operadores de comparación: >, <, >=, <=, =, <>.",
              },
              {
                "pt-BR": "Aplicação prática operacional: indicar automaticamente status de 'Conforme / Não Conforme' ou 'Dentro do Prazo / Atrasado'.",
                "en": "Jobsite operational application: automated 'Compliant / Non-Compliant' or 'On Schedule / Overdue' statuses.",
                "es": "Aplicación industrial: generar automáticamente estados de 'Conforme / No Conforme' o 'Aprobado / Pendiente'.",
              },
            ],
          },
        },
        {
          id: "les-excel-2-3",
          order: 3,
          title: {
            "pt-BR": "Excel Office 365: Formatação Condicional e Regras de Destaque — Aula 07",
            "en": "Excel Office 365: Conditional Formatting & Visual Highlighting — Lesson 07",
            "es": "Excel Office 365: Formato Condicional y Reglas Visuales — Clase 07",
          },
          durationMinutes: 21,
          contentType: "video",
          videoUrl: "0bAldd0efHY",
          contentDetail: {
            objective: {
              "pt-BR": "Destacar visualmente células com cores dinâmicas com base em metas, alertas de vencimento e escalas de calor.",
              "en": "Visually highlight critical data automatically with color scales, target thresholds, and overdue alerts.",
              "es": "Destacar celdas con colores automáticos según metas, alertas y escalas de color.",
            },
            summaryPoints: [
              {
                "pt-BR": "Regras de realce: colorir células automaticamente quando forem maiores que uma meta ou contiverem determinado texto.",
                "en": "Highlight cell rules: auto-color cells exceeding target thresholds or containing specific keywords.",
                "es": "Reglas de realce: colorear celdas según condiciones numéricas o texto específico.",
              },
              {
                "pt-BR": "Utilização de escalas de cores (verde-amarelo-vermelho) para monitoramento térmico de desvios operacionais.",
                "en": "Using 3-color scales (green-yellow-red) for heat mapping operational variances and safety KPIs.",
                "es": "Uso de semáforos y escalas de color para monitoreo de desvíos operacionales.",
              },
              {
                "pt-BR": "Gerenciamento e limpeza de regras existentes para evitar conflitos de formatação pesada na pasta de trabalho.",
                "en": "Managing and cleaning conditional rules to avoid bloated workbooks and formatting conflicts.",
                "es": "Administración y borrado de reglas para evitar conflictos de formato.",
              },
            ],
          },
        },
        {
          id: "les-excel-2-4",
          order: 4,
          title: {
            "pt-BR": "Excel Office 365: Gráficos Dinâmicos, Impressão e Relatórios — Aula 08",
            "en": "Excel Office 365: Dynamic Charts, Page Setup & Reporting — Lesson 08",
            "es": "Excel Office 365: Gráficos Dinámicos, Impresión y Reportes — Clase 08",
          },
          durationMinutes: 27,
          contentType: "video",
          videoUrl: "VWXZGp2VtF0",
          contentDetail: {
            objective: {
              "pt-BR": "Criar gráficos recomendados (colunas, linhas e barras), configurar área de impressão e gerar relatórios em PDF.",
              "en": "Build recommended charts (column, line, bar), configure print layouts, and export clean PDF reports.",
              "es": "Crear gráficos recomendados, configurar páginas de impresión y exportar reportes en PDF.",
            },
            summaryPoints: [
              {
                "pt-BR": "Seleção correta de eixos e rótulos antes de inserir gráficos de colunas agrupadas ou linhas de evolução temporal.",
                "en": "Proper axis and label selection before inserting column charts or time-series line graphs.",
                "es": "Selección de datos y etiquetas antes de insertar gráficos de columnas o líneas.",
              },
              {
                "pt-BR": "Configuração da área de impressão: ajustar todas as colunas em uma única página para evitar quebras desordenadas.",
                "en": "Page layout setup: fit all columns on one page to prevent chopped printouts and chaotic page breaks.",
                "es": "Configuración de impresión: ajustar todas las columnas en una sola página.",
              },
              {
                "pt-BR": "Exportação profissional de planilhas para formato PDF para envio formal à gerência e clientes.",
                "en": "Exporting worksheets to clean, locked PDF documents for formal reporting to clients and management.",
                "es": "Exportación a PDF para envío formal a clientes y gerencias.",
              },
            ],
          },
        },
      ],
    },
  ],
  finalAssessment: {
    id: "exam-excel-produtividade",
    order: 9,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 50,
    questionsCount: 10,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação prática de Excel com a planilha de Ordens de Serviço da RSS3. Utilize a tabela fornecida para consultar valores, filtrar e calcular os resultados de cada questão. Nota mínima de 70% para certificação teórica.",
      "en": "Hands-on Excel assessment using the RSS3 Work Orders spreadsheet. Use the provided table to look up values, filter, and calculate results for each question. 70% passing score for theoretical certification.",
      "es": "Evaluación práctica de Excel con la planilla de Órdenes de Servicio de RSS3. Utilice la tabla para consultar valores, filtrar y calcular resultados. Nota mínima de 70% para certificación teórica.",
    },
    title: {
      "pt-BR": "Avaliação Prática — Excel Corporativo RSS3",
      "en": "Hands-on Assessment — RSS3 Corporate Excel",
      "es": "Evaluación Práctica — Excel Corporativo RSS3",
    },
    description: {
      "pt-BR": "Cenário prático da parada de manutenção: utilize a tabela de Ordens de Serviço (A1:F14) para responder a questões sobre fórmulas condicionais (SOMASES, MÉDIASES), buscas com PROCV e PROCX, referências mistas, tabelas dinâmicas, filtros com SUBTOTAL e contagem de dias úteis.",
      "en": "Hands-on shutdown maintenance scenario: use the Work Orders table (A1:F14) to answer questions on multi-criteria conditional formulas (SUMIFS, AVERAGEIFS), lookups (VLOOKUP, XLOOKUP), mixed references, pivot tables, SUBTOTAL filters, and working days.",
      "es": "Escenario práctico de parada de mantenimiento: use la tabla de Órdenes de Servicio (A1:F14) para responder preguntas sobre fórmulas condicionales, búsquedas, referencias mixtas, tablas dinámicas y días laborables.",
    },
    questions: [
      {
        id: "q-excel-1",
        order: 1,
        question: {
          "pt-BR": "Na tabela de Ordens de Serviço, o supervisor precisa calcular o total de Horas Trabalhadas (coluna D) apenas da equipe 'Mecânica' em atividades que demandaram estritamente mais de 8 horas (>8).\n\nQual é o resultado retornado pela fórmula =SOMASES(D2:D14; B2:B14; \"Mecânica\"; D2:D14; \">8\")?",
          "en": "In the Work Orders table, the supervisor needs to calculate the total Hours Worked (column D) strictly for the 'Mecânica' team on tasks taking more than 8 hours (>8).\n\nWhat is the result returned by =SUMIFS(D2:D14, B2:B14, \"Mecânica\", D2:D14, \">8\")?",
          "es": "En la tabla de Órdenes de Servicio, el supervisor necesita calcular el total de Horas Trabajadas (columna D) del equipo 'Mecânica' en tareas con más de 8 horas (>8).\n\n¿Cuál es el resultado de =SUMAR.SI.CONJUNTO(D2:D14; B2:B14; \"Mecânica\"; D2:D14; \">8\")?",
        },
        options: [
          {
            id: "q1-a",
            text: { "pt-BR": "44 horas", "en": "44 hours", "es": "44 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "44 horas seria o resultado se o critério fosse \">=8\" (incluindo a OS-101 com exatamente 8 horas: 8 + 10 + 11 + 15 = 44). O critério \">8\" exclui o valor 8.",
              "en": "44 hours would be the result if the criterion were \">=8\" (including OS-101 with 8 hours). The strict \">8\" excludes 8.",
              "es": "44 horas sería el resultado con \">=8\" (incluyendo la OS-101 de 8 h). El operador \">8\" excluye el 8.",
            },
          },
          {
            id: "q1-b",
            text: { "pt-BR": "36 horas", "en": "36 hours", "es": "36 horas" },
            isCorrect: true,
            explanation: {
              "pt-BR": "As ordens da Mecânica com mais de 8 horas são: OS-104 (10 h), OS-110 (11 h) e OS-113 (15 h). Somando: 10 + 11 + 15 = 36 horas.",
              "en": "Mecânica orders with over 8 hours: OS-104 (10 h), OS-110 (11 h), and OS-113 (15 h). Total: 10 + 11 + 15 = 36 hours.",
              "es": "Las órdenes de Mecânica con más de 8 horas son: OS-104 (10 h), OS-110 (11 h) y OS-113 (15 h). Total: 10 + 11 + 15 = 36 horas.",
            },
          },
          {
            id: "q1-c",
            text: { "pt-BR": "51 horas", "en": "51 hours", "es": "51 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "51 horas é o total geral de horas da Mecânica em todas as suas ordens (8 + 10 + 7 + 11 + 15 = 51), sem filtrar as que têm mais de 8 horas.",
              "en": "51 hours is the grand total for team Mecânica across all orders, ignoring the >8 hours condition.",
              "es": "51 horas es el total general del equipo Mecânica sin filtrar las horas mayores a 8.",
            },
          },
          {
            id: "q1-d",
            text: { "pt-BR": "91 horas", "en": "91 hours", "es": "91 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "91 horas é a soma de todas as ordens de serviço da fábrica inteira que possuem mais de 8 horas, ignorando o filtro de equipe.",
              "en": "91 hours is the sum of all plant orders with more than 8 hours, ignoring the team filter.",
              "es": "91 horas es la suma de todas las órdenes de la planta con más de 8 horas, sin filtrar el equipo.",
            },
          },
        ],
      },
      {
        id: "q-excel-2",
        order: 2,
        question: {
          "pt-BR": "O coordenador de planejamento precisa calcular a média de Horas Trabalhadas (coluna D) das atividades realizadas na área 'Secagem' (coluna C) que já foram 'Concluída' (coluna E).\n\nQual é o resultado retornado pela fórmula =MÉDIASES(D2:D14; C2:C14; \"Secagem\"; E2:E14; \"Concluída\")?",
          "en": "The planning coordinator needs to calculate the average Hours Worked (column D) for tasks in the 'Secagem' area (column C) that are marked as 'Concluída' (column E).\n\nWhat is the result returned by =AVERAGEIFS(D2:D14, C2:C14, \"Secagem\", E2:E14, \"Concluída\")?",
          "es": "El coordinador de planificación necesita calcular el promedio de Horas Trabajadas (columna D) en el área 'Secagem' (columna C) con estado 'Concluída' (columna E).\n\n¿Cuál es el resultado de =PROMEDIO.SI.CONJUNTO(D2:D14; C2:C14; \"Secagem\"; E2:E14; \"Concluída\")?",
        },
        options: [
          {
            id: "q2-a",
            text: { "pt-BR": "8,0 horas", "en": "8.0 hours", "es": "8,0 horas" },
            isCorrect: true,
            explanation: {
              "pt-BR": "As ordens na Secagem com status Concluída são: OS-104 (10 h), OS-109 (9 h) e OS-111 (5 h). A soma é 10 + 9 + 5 = 24. A média é 24 / 3 = 8,0 horas.",
              "en": "Matching orders: OS-104 (10 h), OS-109 (9 h), and OS-111 (5 h). Sum = 24. Average = 24 / 3 = 8.0 hours.",
              "es": "Órdenes en Secagem concluidas: OS-104 (10 h), OS-109 (9 h) y OS-111 (5 h). Suma = 24. Promedio = 24 / 3 = 8,0 horas.",
            },
          },
          {
            id: "q2-b",
            text: { "pt-BR": "9,0 horas", "en": "9.0 hours", "es": "9,0 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "9,0 horas seria a média de todas as OS da Secagem (45 / 5), sem filtrar pelo status 'Concluída'.",
              "en": "9.0 hours is the average of all 5 orders in Secagem regardless of completion status.",
              "es": "9,0 horas es el promedio de todas las órdenes en Secagem sin filtrar el estado.",
            },
          },
          {
            id: "q2-c",
            text: { "pt-BR": "24,0 horas", "en": "24.0 hours", "es": "24,0 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "24 horas é a soma das horas (10 + 9 + 5), que seria obtida com a fórmula SOMASES, não a média.",
              "en": "24 hours is the sum, not the average (which would come from SUMIFS).",
              "es": "24 horas es la suma de las horas, no el promedio.",
            },
          },
          {
            id: "q2-d",
            text: { "pt-BR": "7,8 horas", "en": "7.8 hours", "es": "7,8 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "7,8 horas (39 / 5) é a média de todas as ordens concluídas da fábrica inteira, sem filtrar a área Secagem.",
              "en": "7.8 hours is the average across all completed orders in the entire plant.",
              "es": "7,8 horas es el promedio de todas las órdenes concluidas en la planta.",
            },
          },
        ],
      },
      {
        id: "q-excel-3",
        order: 3,
        question: {
          "pt-BR": "Na célula E5, o técnico insere a espessura medida de uma tubulação em milímetros (mm). A norma interna de manutenção estabelece três faixas:\n• Abaixo de 3,0 mm → \"PARADA IMEDIATA\"\n• De 3,0 mm até 4,5 mm (inclusive em ambos os limites) → \"MONITORAR\"\n• Acima de 4,5 mm → \"CONFORME\"\n\nTestando valores de 3,0 mm, 4,5 mm e 4,6 mm, qual das fórmulas atende à regra com total exatidão?",
          "en": "In cell E5, a technician enters a measured pipe wall thickness (mm). The maintenance standard defines three tiers:\n• Below 3.0 mm → \"PARADA IMEDIATA\"\n• From 3.0 mm up to 4.5 mm (inclusive on both limits) → \"MONITORAR\"\n• Above 4.5 mm → \"CONFORME\"\n\nWhich nested IF formula satisfies this rule across 3.0, 4.5, and 4.6 mm?",
          "es": "En la celda E5 se ingresa el espesor medido de una tubería (mm). La regla establece:\n• Menor que 3,0 mm → \"PARADA IMEDIATA\"\n• De 3,0 mm a 4,5 mm (ambos límites inclusive) → \"MONITORAR\"\n• Mayor que 4,5 mm → \"CONFORME\"\n\n¿Cuál fórmula SI anidada cumple exactamente la regla?",
        },
        options: [
          {
            id: "q3-a",
            text: {
              "pt-BR": "=SE(E5>4,5; \"CONFORME\"; SE(E5>=3; \"MONITORAR\"; \"PARADA IMEDIATA\"))",
              "en": "=IF(E5>4.5, \"CONFORME\", IF(E5>=3, \"MONITORAR\", \"PARADA IMEDIATA\"))",
              "es": "=SI(E5>4,5; \"CONFORME\"; SI(E5>=3; \"MONITORAR\"; \"PARADA IMEDIATA\"))",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto: valores estritamente acima de 4,5 retornam 'CONFORME'. O segundo SE captura de 3,0 a 4,5 com 'MONITORAR'. Abaixo de 3,0 cai no falso final ('PARADA IMEDIATA').",
              "en": "Correct: values >4.5 get 'CONFORME'. The second test catches >=3 (up to 4.5) with 'MONITORAR'. Below 3 falls into 'PARADA IMEDIATA'.",
              "es": "Correcto: valores >4,5 devuelven 'CONFORME'. La segunda prueba captura >=3 (hasta 4,5) como 'MONITORAR', y menores que 3 como 'PARADA IMEDIATA'.",
            },
          },
          {
            id: "q3-b",
            text: {
              "pt-BR": "=SE(E5<3; \"PARADA IMEDIATA\"; SE(E5<4,5; \"MONITORAR\"; \"CONFORME\"))",
              "en": "=IF(E5<3, \"PARADA IMEDIATA\", IF(E5<4.5, \"MONITORAR\", \"CONFORME\"))",
              "es": "=SI(E5<3; \"PARADA IMEDIATA\"; SI(E5<4,5; \"MONITOREAR\"; \"CONFORME\"))",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: ao testar o valor 4,5, a condição E5<4,5 é FALSA e a fórmula retorna indevidamente 'CONFORME', quando deveria ser 'MONITORAR'.",
              "en": "Incorrect: with 4.5, the test E5<4.5 evaluates to FALSE and incorrectly outputs 'CONFORME'.",
              "es": "Incorrecto: con 4,5, E5<4,5 es FALSO y devuelve 'CONFORME' en lugar de 'MONITORAR'.",
            },
          },
          {
            id: "q3-c",
            text: {
              "pt-BR": "=SE(E5<=3; \"PARADA IMEDIATA\"; SE(E5<=4,5; \"MONITORAR\"; \"CONFORME\"))",
              "en": "=IF(E5<=3, \"PARADA IMEDIATA\", IF(E5<=4.5, \"MONITORAR\", \"CONFORME\"))",
              "es": "=SI(E5<=3; \"PARADA IMEDIATA\"; SI(E5<=4,5; \"MONITOREAR\"; \"CONFORME\"))",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: com 3,0 a condição E5<=3 é VERDADEIRA e retorna 'PARADA IMEDIATA', violando o limite inclusivo de 'MONITORAR'.",
              "en": "Incorrect: 3.0 evaluates to TRUE on E5<=3, returning 'PARADA IMEDIATA' instead of 'MONITORAR'.",
              "es": "Incorrecto: con 3,0 evalúa VERDADERO en E5<=3 y devuelve parada en vez de monitorear.",
            },
          },
          {
            id: "q3-d",
            text: {
              "pt-BR": "=SE(E5>=3; \"MONITORAR\"; SE(E5>4,5; \"CONFORME\"; \"PARADA IMEDIATA\"))",
              "en": "=IF(E5>=3, \"MONITORAR\", IF(E5>4.5, \"CONFORME\", \"PARADA IMEDIATA\"))",
              "es": "=SI(E5>=3; \"MONITOREAR\"; SI(E5>4,5; \"CONFORME\"; \"PARADA IMEDIATA\"))",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: para o valor 4,6 a primeira condição E5>=3 já é verdadeira, então 'CONFORME' nunca será executado.",
              "en": "Incorrect: for 4.6, the first test E5>=3 is already TRUE, so 'CONFORME' is never reached.",
              "es": "Incorrecto: para 4,6 la primera condición ya es verdadera, por lo que nunca llega a 'CONFORME'.",
            },
          },
        ],
      },
      {
        id: "q-excel-4",
        order: 4,
        question: {
          "pt-BR": "Um apontador de manutenção escreveu a fórmula =PROCV(A2; $H$2:$J$200; 3; VERDADEIRO) para buscar o custo-hora de cada funcionário. A tabela de RH no intervalo H:J NÃO está em ordem alfabética ou crescente de matrícula.\n\nA fórmula não gera mensagem de erro (#N/D), porém os valores de custo aparecem trocados entre os colaboradores. Qual é o motivo desse erro?",
          "en": "A field clerk wrote =VLOOKUP(A2, $H$2:$J$200, 3, TRUE) to look up employee hourly rates. The HR lookup table in H:J is NOT sorted.\n\nNo error code is returned, but rates are mixed up between workers. What is the root cause?",
          "es": "Un asistente utilizó =BUSCARV(A2; $H$2:$J$200; 3; VERDADERO) para buscar el costo por hora. La tabla de RRHH en H:J NO está ordenada.\n\nNo aparece error, pero los costos salen cambiados. ¿Cuál es la causa?",
        },
        options: [
          {
            id: "q4-a",
            text: {
              "pt-BR": "O quarto argumento VERDADEIRO ativa a correspondência aproximada, que exige que a tabela esteja em ordem crescente; sem ordenação, a busca binária retorna linhas incorretas sem avisar o usuário.",
              "en": "The TRUE argument activates approximate match, which requires ascending order; on unsorted tables, binary search returns wrong rows without warning.",
              "es": "El argumento VERDADERO activa la búsqueda aproximada, que exige datos ordenados; al no estar ordenados, devuelve filas erróneas silenciosamente.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Exatamente. Para buscas exatas em listas que não estejam ordenadas, deve-se usar sempre FALSO (ou 0) como quarto argumento do PROCV, ou utilizar a função PROCX.",
              "en": "Exactly. For unsorted exact matches, FALSE (or 0) must be used in VLOOKUP, or XLOOKUP.",
              "es": "Exacto. Para búsquedas exactas se debe usar FALSO (o 0), o bien la función BUSCARX.",
            },
          },
          {
            id: "q4-b",
            text: {
              "pt-BR": "O intervalo da tabela $H$2:$J$200 não deveria ter cifrões ($), pois referências absolutas travam o PROCV e impedem a leitura de outras linhas.",
              "en": "The table range $H$2:$J$200 should not have dollar signs ($), because absolute references freeze the lookup.",
              "es": "El rango $H$2:$J$200 no debería llevar signos de dólar ($).",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: a matriz de busca DEVE ser travada com cifrões para não se deslocar ao arrastar a fórmula.",
              "en": "Incorrect: the table array MUST be locked so it does not shift when filled down.",
              "es": "Incorrecto: la matriz de búsqueda debe fijarse con signos de dólar.",
            },
          },
          {
            id: "q4-c",
            text: {
              "pt-BR": "O índice de coluna 3 é inválido porque a tabela H:J só tem 2 colunas no Excel.",
              "en": "Column index 3 is invalid because H:J only has 2 columns.",
              "es": "El índice 3 es inválido porque H:J solo tiene 2 columnas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: H, I e J totalizam exatamente 3 colunas (H=1, I=2, J=3). Se o índice fosse inválido, o Excel retornaria o erro #REF!.",
              "en": "Incorrect: H, I, and J equal 3 columns. An invalid index would return #REF!.",
              "es": "Incorrecto: H, I y J son 3 columnas. Un índice inválido daría #REF!.",
            },
          },
          {
            id: "q4-d",
            text: {
              "pt-BR": "O Excel automaticamente arredonda códigos de matrícula numéricos quando há mais de 100 linhas.",
              "en": "Excel automatically rounds numeric employee IDs when datasets exceed 100 rows.",
              "es": "Excel redondea automáticamente los códigos cuando hay más de 100 filas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: o Excel não arredonda códigos nem possui limite de 100 linhas para identificadores.",
              "en": "Incorrect: Excel does not round IDs or have a 100-row limit.",
              "es": "Incorrecto: Excel no redondea identificadores.",
            },
          },
        ],
      },
      {
        id: "q-excel-5",
        order: 5,
        question: {
          "pt-BR": "Ao cruzar a base de ordens com o cadastro geral usando a fórmula moderna =PROCX(A2; H:H; J:J), o Excel retorna o erro #N/D para ordens que existem visivelmente nas duas listas.\n\nAo investigar, o analista verifica que =ÉNÚM(A2) retorna VERDADEIRO e =ÉNÚM(H2) retorna FALSO. Qual é a ação que corrige a causa raiz?",
          "en": "When matching work orders against the master list using =XLOOKUP(A2, H:H, J:J), Excel returns #N/A for orders clearly visible in both sheets.\n\nTesting reveals =ISNUMBER(A2) is TRUE while =ISNUMBER(H2) is FALSE. Which action permanently resolves the issue?",
          "es": "Al cruzar órdenes con =BUSCARX(A2; H:H; J:J), Excel devuelve #N/D para códigos existentes en ambas listas.\n\nAl revisar, =ESNUMERO(A2) es VERDADERO y =ESNUMERO(H2) es FALSO. ¿Qué acción soluciona la causa raíz?",
        },
        options: [
          {
            id: "q5-a",
            text: {
              "pt-BR": "Converter a coluna H de formato Texto para Número (utilizando Texto para Colunas, multiplicando por 1 ou aplicando a função VALOR), garantindo que os tipos de dados sejam idênticos.",
              "en": "Convert column H from Text to Number (via Text to Columns, multiplying by 1, or VALUE function), ensuring matching data types.",
              "es": "Convertir la columna H de Texto a Número (con Texto en Columnas, multiplicar por 1 o función VALOR) para igualar los tipos de datos.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Exato: para o Excel, o número 101 é completamente diferente do texto '101'. Quando uma coluna armazena números e a outra textos, o PROCX e o PROCV não encontram correspondência.",
              "en": "Correct: to Excel, number 101 differs from string '101'. Type mismatch causes lookups to fail with #N/A.",
              "es": "Exacto: para Excel el número 101 es distinto del texto '101'. La discrepancia de tipo causa #N/D.",
            },
          },
          {
            id: "q5-b",
            text: {
              "pt-BR": "Aplicar a função ARRUMAR() na coluna H para remover espaços em branco antes e depois do texto.",
              "en": "Apply TRIM() to column H to remove leading and trailing spaces.",
              "es": "Aplicar la función ESPACIOS() en la columna H para quitar espacios en blanco.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: ARRUMAR remove espaços mas continua gerando texto, o que não resolve a divergência com o número na outra coluna.",
              "en": "Incorrect: TRIM still returns text and will not fix the number-to-text mismatch.",
              "es": "Incorrecto: ESPACIOS sigue devolviendo texto.",
            },
          },
          {
            id: "q5-c",
            text: {
              "pt-BR": "Fixar as colunas com cifrões ($H:$H e $J:$J), pois o PROCX perde o alinhamento sem referências absolutas.",
              "en": "Lock columns with dollar signs ($H:$H and $J:$J) to keep alignment.",
              "es": "Fijar las columnas con signos de dólar ($H:$H y $J:$J).",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: o erro ocorre já na primeira linha, comprovando que o problema é o tipo do dado e não o deslocamento da coluna.",
              "en": "Incorrect: the error occurs on the very first row, proving data type mismatch.",
              "es": "Incorrecto: el error se da en la primera fila por incompatibilidad de tipos.",
            },
          },
          {
            id: "q5-d",
            text: {
              "pt-BR": "Configurar o argumento de correspondência como 2 (curinga) para que o PROCX ignore o formato do dado.",
              "en": "Set match mode to 2 (wildcard) so XLOOKUP overlooks data formatting.",
              "es": "Configurar el modo de coincidencia 2 (comodín) en BUSCARX.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: caracteres curingas (* e ?) aplicam-se apenas a cadeias de texto e não fazem números corresponderem a textos.",
              "en": "Incorrect: wildcards only apply to text patterns, not numeric-to-text conversion.",
              "es": "Incorrecto: los comodines solo aplican a cadenas de texto.",
            },
          },
        ],
      },
      {
        id: "q-excel-6",
        order: 6,
        question: {
          "pt-BR": "Em uma planilha de dimensionamento, as Horas Trabalhadas de cada equipe estão listadas na coluna B (células B3:B6) e a taxa de custo-hora dos turnos está na linha 2 (células C2:F2).\n\nO planejador precisa escrever uma fórmula única na célula C3 e arrastá-la para toda a grade (C3:F6). Qual fórmula calcula corretamente 'Horas × Taxa' sem distorcer as referências?",
          "en": "In a costing matrix, crew Hours are in column B (cells B3:B6) and shift hourly rates are in row 2 (cells C2:F2).\n\nThe planner wants to enter a single formula into C3 and fill it across C3:F6. Which formula uses correct mixed references?",
          "es": "En una matriz de costos, las horas están en la columna B (B3:B6) y las tarifas en la fila 2 (C2:F2).\n\n¿Qué fórmula con referencias mixtas debe escribirse en C3 para arrastrar a C3:F6?",
        },
        options: [
          {
            id: "q6-a",
            text: { "pt-BR": "=$B3*C$2", "en": "=$B3*C$2", "es": "=$B3*C$2" },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto: $B3 trava a coluna B (mantendo as horas ao arrastar para a direita) e deixa a linha livre. C$2 trava a linha 2 (mantendo a taxa ao arrastar para baixo) e deixa a coluna livre.",
              "en": "Correct: $B3 locks column B while allowing rows to change. C$2 locks row 2 while allowing columns to shift.",
              "es": "Correcto: $B3 fija la columna de horas y C$2 fija la fila de tarifas.",
            },
          },
          {
            id: "q6-b",
            text: { "pt-BR": "=B3*C2", "en": "=B3*C2", "es": "=B3*C2" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: sem cifrões, ao arrastar para a direita ou para baixo a fórmula multiplica células vazias ou valores fora da matriz.",
              "en": "Incorrect: relative references will drift into blank cells.",
              "es": "Incorrecto: las referencias relativas se desplazan fuera de los datos.",
            },
          },
          {
            id: "q6-c",
            text: { "pt-BR": "=$B$3*C$2", "en": "=$B$3*C$2", "es": "=$B$3*C$2" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: $B$3 trava tanto a coluna quanto a linha, multiplicando todas as equipes pelas horas da primeira equipe.",
              "en": "Incorrect: $B$3 locks the row, using the first crew's hours for everyone.",
              "es": "Incorrecto: $B$3 fija la fila y repite las horas del primer equipo en todos.",
            },
          },
          {
            id: "q6-d",
            text: { "pt-BR": "=B$3*$C2", "en": "=B$3*$C2", "es": "=B$3*$C2" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: as travas de coluna e linha estão invertidas, causando erros de cálculo em todas as células após o arrasto.",
              "en": "Incorrect: column and row anchors are inverted.",
              "es": "Incorrecto: las fijaciones están invertidas.",
            },
          },
        ],
      },
      {
        id: "q-excel-7",
        order: 7,
        question: {
          "pt-BR": "Com base na tabela de Ordens de Serviço (13 ordens, totalizando 138 horas), você cria uma Tabela Dinâmica colocando 'Equipe' nas Linhas e 'Horas Trabalhadas' nos Valores, configurada como 'Mostrar Valores Como → % do Total Geral'.\n\nQual é o percentual aproximado exibido para a equipe 'Mecânica'?",
          "en": "Based on the Work Orders table (13 orders totaling 138 hours), you build a PivotTable with 'Equipe' in Rows and 'Horas Trabalhadas' in Values, set to 'Show Values As → % of Grand Total'.\n\nWhat is the approximate percentage displayed for team 'Mecânica'?",
          "es": "Con la tabla de Órdenes de Servicio (13 órdenes con 138 horas en total), crea una Tabla Dinámica con 'Equipe' en Filas y 'Horas' en Valores como '% del total general'.\n\n¿Qué porcentaje aproximado muestra el equipo 'Mecânica'?",
        },
        options: [
          {
            id: "q7-a",
            text: { "pt-BR": "37,0%", "en": "37.0%", "es": "37,0%" },
            isCorrect: true,
            explanation: {
              "pt-BR": "A Mecânica acumula 51 horas (8 + 10 + 7 + 11 + 15 = 51 h) em um total de 138 horas da fábrica: (51 / 138) × 100 ≈ 36,95% (arredondado para 37,0%).",
              "en": "Mecânica has 51 hours (8 + 10 + 7 + 11 + 15) out of 138 total hours: 51 / 138 ≈ 36.95% (37.0%).",
              "es": "Mecânica suma 51 horas de un total de 138 h: 51 / 138 ≈ 36,95% (37,0%).",
            },
          },
          {
            id: "q7-b",
            text: { "pt-BR": "38,5%", "en": "38.5%", "es": "38,5%" },
            isCorrect: false,
            explanation: {
              "pt-BR": "38,5% é a proporção por quantidade de ordens (5 OS de 13 totalizam 38,46%), que seria obtida caso o campo estivesse configurado como Contagem e não Soma de Horas.",
              "en": "38.5% is the count share (5 of 13 orders), which corresponds to Count instead of Sum of Hours.",
              "es": "38,5% es la proporción de cantidad de órdenes (5 de 13), no la suma de horas.",
            },
          },
          {
            id: "q7-c",
            text: { "pt-BR": "21,0%", "en": "21.0%", "es": "21,0%" },
            isCorrect: false,
            explanation: {
              "pt-BR": "21,0% é a participação da equipe Elétrica (29 h / 138 h ≈ 21,01%).",
              "en": "21.0% is team Elétrica's share (29 h / 138 h).",
              "es": "21,0% es la participación del equipo Elétrica.",
            },
          },
          {
            id: "q7-d",
            text: { "pt-BR": "42,0%", "en": "42.0%", "es": "42,0%" },
            isCorrect: false,
            explanation: {
              "pt-BR": "42,0% é a participação da equipe Hidrojato (58 h / 138 h ≈ 42,03%).",
              "en": "42.0% is team Hidrojato's share (58 h / 138 h).",
              "es": "42,0% es la participación del equipo Hidrojato.",
            },
          },
        ],
      },
      {
        id: "q-excel-8",
        order: 8,
        question: {
          "pt-BR": "O gerente financeiro quer totalizar o valor em reais das atividades de manutenção realizadas exclusivamente pela equipe 'Hidrojato' (coluna B) que estão com status 'Em Andamento' (coluna E).\n\nQual é o resultado da fórmula matricial =SOMARPRODUTO((B2:B14=\"Hidrojato\")*(E2:E14=\"Em Andamento\")*F2:F14)?",
          "en": "The finance manager wants to sum the total cost (column F) for maintenance tasks performed by 'Hidrojato' (column B) currently 'Em Andamento' (column E).\n\nWhat is the result of =SUMPRODUCT((B2:B14=\"Hidrojato\")*(E2:E14=\"Em Andamento\")*F2:F14)?",
          "es": "El gerente financiero quiere totalizar el costo (columna F) del equipo 'Hidrojato' (columna B) con estado 'Em Andamento' (columna E).\n\n¿Cuál es el resultado de =SUMAPRODUCTO((B2:B14=\"Hidrojato\")*(E2:E14=\"Em Andamento\")*F2:F14)?",
        },
        options: [
          {
            id: "q8-a",
            text: { "pt-BR": "R$ 34.200,00", "en": "R$ 34,200.00", "es": "R$ 34.200,00" },
            isCorrect: true,
            explanation: {
              "pt-BR": "As ordens de Hidrojato Em Andamento são: OS-106 (R$ 16.400,00) e OS-112 (R$ 17.800,00). O SOMARPRODUTO multiplica os critérios (1 × 1) pelo valor: 16.400 + 17.800 = R$ 34.200,00.",
              "en": "Matching orders: OS-106 (R$ 16,400) and OS-112 (R$ 17,800). Sum = R$ 34,200.00.",
              "es": "Órdenes de Hidrojato en curso: OS-106 (16.400) y OS-112 (17.800). Total: R$ 34.200,00.",
            },
          },
          {
            id: "q8-b",
            text: { "pt-BR": "R$ 43.600,00", "en": "R$ 43,600.00", "es": "R$ 43.600,00" },
            isCorrect: false,
            explanation: {
              "pt-BR": "R$ 43.600,00 é o custo total do Hidrojato em todas as suas ordens, sem filtrar o status.",
              "en": "R$ 43,600.00 is the total cost for all Hidrojato orders without the status filter.",
              "es": "R$ 43.600,00 es el costo total de Hidrojato sin filtrar estado.",
            },
          },
          {
            id: "q8-c",
            text: { "pt-BR": "2", "en": "2", "es": "2" },
            isCorrect: false,
            explanation: {
              "pt-BR": "2 é a quantidade de ordens encontradas. Como o intervalo F2:F14 está na multiplicação, a fórmula soma valores financeiros, não conta linhas.",
              "en": "2 is the row count. Because F2:F14 is in the formula, it sums values, not counts rows.",
              "es": "2 es la cantidad de filas. Al multiplicar F2:F14 suma dinero, no cuenta filas.",
            },
          },
          {
            id: "q8-d",
            text: { "pt-BR": "R$ 37.350,00", "en": "R$ 37,350.00", "es": "R$ 37.350,00" },
            isCorrect: false,
            explanation: {
              "pt-BR": "R$ 37.350,00 é a soma de todas as ordens de todas as equipes que estão com status Em Andamento, ignorando o filtro de Hidrojato.",
              "en": "R$ 37,350.00 is the sum of all 'Em Andamento' orders across all crews.",
              "es": "R$ 37.350,00 es el costo de todas las órdenes en curso de la planta.",
            },
          },
        ],
      },
      {
        id: "q-excel-9",
        order: 9,
        question: {
          "pt-BR": "O supervisor aplica o AutoFiltro do Excel na coluna Área (coluna C) filtrando apenas 'Caldeira' (que exibe na tela 4 ordens: OS-101, OS-105, OS-107 e OS-112).\n\nAbaixo da tabela existem duas fórmulas de soma das Horas Trabalhadas: =SOMA(D2:D14) e =SUBTOTAL(9; D2:D14). Quais valores elas exibem na tela, respectivamente, com o filtro de Caldeira ativado?",
          "en": "The supervisor filters column Area (col C) showing only 'Caldeira' (displaying 4 visible orders: OS-101, OS-105, OS-107, and OS-112).\n\nBelow the table are two sum formulas: =SUM(D2:D14) and =SUBTOTAL(9, D2:D14). What values do they display with the filter active?",
          "es": "El supervisor aplica Autofiltro en la columna Área mostrando solo 'Caldeira' (4 órdenes visibles: OS-101, OS-105, OS-107 y OS-112).\n\nDebajo de la tabla hay dos fórmulas: =SUMA(D2:D14) y =SUBTOTALES(9; D2:D14). ¿Qué valores muestran con el filtro activo?",
        },
        options: [
          {
            id: "q9-a",
            text: { "pt-BR": "138 horas e 29 horas", "en": "138 hours and 29 hours", "es": "138 horas y 29 horas" },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto: a função SOMA ignora filtros de linha e continua calculando o total geral da base (138 h). A função SUBTOTAL com o código 9 respeita o filtro e soma apenas as linhas visíveis da Caldeira: 8 + 4 + 7 + 13 = 29 horas.",
              "en": "Correct: SUM ignores filters and sums all 138 hours. SUBTOTAL(9) only sums visible filtered rows: 8 + 4 + 7 + 13 = 29 hours.",
              "es": "Correcto: SUMA mantiene el total general (138 h). SUBTOTALES(9) suma solo las filas visibles: 8 + 4 + 7 + 13 = 29 horas.",
            },
          },
          {
            id: "q9-b",
            text: { "pt-BR": "29 horas e 29 horas", "en": "29 hours and 29 hours", "es": "29 horas y 29 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: a função SOMA comum não é sensível a filtros manuais ou automáticos, continuando a somar linhas ocultas.",
              "en": "Incorrect: regular SUM does not adapt to filtered rows.",
              "es": "Incorrecto: la función SUMA no responde a filtros de tabla.",
            },
          },
          {
            id: "q9-c",
            text: { "pt-BR": "29 horas e 138 horas", "en": "29 hours and 138 hours", "es": "29 horas y 138 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: a ordem dos resultados está invertida; é a função SUBTOTAL que recalcula sobre as linhas visíveis.",
              "en": "Incorrect: results are swapped; SUBTOTAL is what respects the filter.",
              "es": "Incorrecto: el orden está invertido; SUBTOTALES es la que recalcula.",
            },
          },
          {
            id: "q9-d",
            text: { "pt-BR": "138 horas e 138 horas", "en": "138 hours and 138 horas", "es": "138 horas y 138 horas" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: a função SUBTOTAL(9) exclui automaticamente linhas ocultadas por filtro e nunca retornará o total geral.",
              "en": "Incorrect: SUBTOTAL(9) excludes filtered rows.",
              "es": "Incorrecto: SUBTOTALES(9) excluye las filas ocultas.",
            },
          },
        ],
      },
      {
        id: "q-excel-10",
        order: 10,
        question: {
          "pt-BR": "O cronograma da parada de fábrica inicia na segunda-feira 02/03/2026 (célula B1) e encerra na sexta-feira 13/03/2026 (célula B2). A equipe de RH inseriu no intervalo H2:H3 dois feriados: 05/03/2026 (quinta-feira, feriado municipal) e 08/03/2026 (domingo).\n\nQual é o resultado retornado pela fórmula de dias úteis =DIATRABALHOTOTAL(B1; B2; H2:H3)?",
          "en": "The shutdown schedule starts on Monday 03/02/2026 (cell B1) and finishes on Friday 03/13/2026 (cell B2). Two holidays are listed in H2:H3: 03/05/2026 (Thursday) and 03/08/2026 (Sunday).\n\nWhat is the working days result returned by =NETWORKDAYS(B1, B2, H2:H3)?",
          "es": "El cronograma de parada comienza el lunes 02/03/2026 (celda B1) y finaliza el viernes 13/03/2026 (celda B2). Hay dos feriados en H2:H3: 05/03/2026 (jueves) y 08/03/2026 (domingo).\n\n¿Cuál es el resultado de =DIAS.LAB(B1; B2; H2:H3)?",
        },
        options: [
          {
            id: "q10-a",
            text: { "pt-BR": "9 dias úteis", "en": "9 working days", "es": "9 días laborables" },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto: entre as duas semanas há 10 dias úteis de segunda a sexta. O feriado de 08/03 cai em um domingo (já não era contado). Apenas a quinta-feira 05/03 é descontada: 10 − 1 = 9 dias úteis.",
              "en": "Correct: there are 10 weekdays across two full weeks. 03/08 is a Sunday (already excluded). Only Thursday 03/05 is deducted: 10 − 1 = 9 days.",
              "es": "Correcto: son 10 días hábiles entre lunes y viernes. El 08/03 es domingo (ya excluido), por lo que solo descuenta el jueves 05/03: 10 − 1 = 9 días.",
            },
          },
          {
            id: "q10-b",
            text: { "pt-BR": "8 dias úteis", "en": "8 working days", "es": "8 días laborables" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 8 dias desconta os dois feriados, mas o feriado de domingo não deve ser subtraído porque finais de semana já não contam na função.",
              "en": "Incorrect: 8 subtracts both holidays, but Sunday was never a workday.",
              "es": "Incorrecto: 8 resta los dos feriados, pero el domingo ya no se contabilizaba.",
            },
          },
          {
            id: "q10-c",
            text: { "pt-BR": "10 dias úteis", "en": "10 working days", "es": "10 días laborables" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 10 dias seria a contagem de dias úteis ignorando completamente a lista de feriados em H2:H3.",
              "en": "Incorrect: 10 ignores the holiday argument.",
              "es": "Incorrecto: 10 ignora la lista de feriados.",
            },
          },
          {
            id: "q10-d",
            text: { "pt-BR": "12 dias", "en": "12 days", "es": "12 días" },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto: 12 é a contagem de dias corridos do período (contando início e fim), incluindo os fins de semana.",
              "en": "Incorrect: 12 is calendar days including weekends.",
              "es": "Incorrecto: 12 es el conteo de días calendario.",
            },
          },
        ],
      },
    ],
  },
};