import { CourseDemonstration } from "@/types";

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
    estimatedMinutes: 25,
    questionsCount: 5,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação teórica e prática sobre os recursos essenciais do Excel Office 365. Nota mínima de 70% para emissão do certificado.",
      "en": "Theoretical and practical assessment on essential Excel Office 365 skills. 70% passing score.",
      "es": "Evaluación de conocimientos en Excel Office 365. Nota mínima de 70% para certificado.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência — Excel Corporativo",
      "en": "Final Competency Exam — Corporate Excel",
      "es": "Evaluación Final de Competencias — Excel Corporativo",
    },
    description: {
      "pt-BR": "Validação de domínio em fórmulas básicas, referências absolutas ($), lógica com a função SE, formatação condicional e formatação visual de relatórios.",
      "en": "Validates proficiency in formulas, absolute references ($), IF logic, conditional formatting, and chart reporting.",
      "es": "Valida el dominio de fórmulas, fijación de celdas ($), lógica SI y formato condicional.",
    },
    questions: [
      {
        id: "q-excel-1",
        order: 1,
        question: {
          "pt-BR": "1. Qual caractere obrigatório deve iniciar qualquer fórmula ou cálculo no Microsoft Excel para que o programa reconheça que deve processar uma operação?",
          "en": "1. What mandatory character must begin any calculation or formula in Microsoft Excel?",
          "es": "1. ¿Qué carácter obligatorio debe iniciar cualquier fórmula o cálculo en Microsoft Excel?",
        },
        options: [
          {
            id: "q1-a",
            text: {
              "pt-BR": "O sinal de igual (=)",
              "en": "The equals sign (=)",
              "es": "El signo igual (=)",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Sem o sinal de igual no início, o Excel interpretará o conteúdo digitado como texto puro.",
              "en": "Correct! Without '=', Excel treats input as literal text.",
              "es": "¡Correcto! Sin el signo '=', Excel interpreta el contenido como texto.",
            },
          },
          {
            id: "q1-b",
            text: {
              "pt-BR": "O sinal de arroba (@)",
              "en": "The @ symbol",
              "es": "El signo arroba (@)",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O arroba pode ser usado para interseção implícita em versões recentes, mas não inicia fórmulas manualmente.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q1-c",
            text: {
              "pt-BR": "O ponto de exclamação (!)",
              "en": "The exclamation mark (!)",
              "es": "El signo de exclamación (!)",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O ponto de exclamação separa nomes de planilhas de referências de células (ex: Planilha1!A1).",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-excel-2",
        order: 2,
        question: {
          "pt-BR": "2. Ao construir uma planilha de cálculo de produtividade de equipe, você precisa multiplicar o valor de cada linha pela célula fixa $B$1 (que contém a taxa horária). Qual é a função do símbolo de cifrão ($) nessa referência?",
          "en": "2. When multiplying each row by a fixed cell $B$1 containing an hourly rate, what is the role of the dollar sign ($)?",
          "es": "2. Al multiplicar cada fila por la celda fija $B$1 que contiene la tarifa horaria, ¿cuál es la función del signo $?",
        },
        options: [
          {
            id: "q2-a",
            text: {
              "pt-BR": "Travar (congelar) a coluna B e a linha 1 como referência absoluta, impedindo que a referência mude ao arrastar a fórmula para outras linhas.",
              "en": "Lock (freeze) column B and row 1 as an absolute reference, preventing it from shifting when dragging the formula.",
              "es": "Inmovilizar la columna B y la fila 1 como referencia absoluta, evitando que cambie al arrastrar la fórmula.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A referência absoluta ($B$1) fixa as coordenadas para que todas as linhas multipliquem pela mesma taxa.",
              "en": "Correct! Absolute reference $B$1 freezes coordinates so all rows multiply against the same constant.",
              "es": "¡Correcto! Fija la celda para que todas las filas utilicen la misma constante.",
            },
          },
          {
            id: "q2-b",
            text: {
              "pt-BR": "Formatar a célula automaticamente como moeda em Dólar Americano (USD).",
              "en": "Automatically format the cell as US Dollar currency.",
              "es": "Formatear automáticamente la celda como moneda en dólares.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Na fórmula, o $ é operador de travamento de coordenadas, não de formatação visual.",
              "en": "Incorrect. In formulas, $ is coordinate locking, not currency formatting.",
              "es": "Incorrecto. En fórmulas, el signo $ inmoviliza coordenadas.",
            },
          },
        ],
      },
      {
        id: "q-excel-3",
        order: 3,
        question: {
          "pt-BR": "3. Para somar continuamente todos os valores situados entre a célula D5 e a célula D25, qual é a sintaxe correta no Excel?",
          "en": "3. To sum all values located between cell D5 and cell D25, which formula syntax is correct?",
          "es": "3. Para sumar todos los valores entre la celda D5 y la celda D25, ¿cuál es la sintaxis correcta?",
        },
        options: [
          {
            id: "q3-a",
            text: {
              "pt-BR": "=SOMA(D5:D25)",
              "en": "=SUM(D5:D25)",
              "es": "=SUMA(D5:D25)",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Os dois-pontos (:) definem o intervalo contínuo de células do ponto inicial ao final.",
              "en": "Correct! The colon specifies a contiguous cell range.",
              "es": "¡Correcto! Los dos puntos especifican un rango continuo.",
            },
          },
          {
            id: "q3-b",
            text: {
              "pt-BR": "=SOMA(D5;D25)",
              "en": "=SUM(D5;D25)",
              "es": "=SUMA(D5;D25)",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O ponto-e-vírgula somaria APENAS as duas células isoladas (D5 e D25), ignorando os valores intermediários.",
              "en": "Incorrect. Semicolon only sums those two discrete cells.",
              "es": "Incorrecto. El punto y coma suma únicamente esas dos celdas.",
            },
          },
          {
            id: "q3-c",
            text: {
              "pt-BR": "=CALCULAR(D5 ate D25)",
              "en": "=CALC(D5 to D25)",
              "es": "=CALCULAR(D5 hasta D25)",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Essa função não existe no Excel.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-excel-4",
        order: 4,
        question: {
          "pt-BR": "4. Na função =SE(C2>=70; \"Aprovado\"; \"Reprovado\"), se a célula C2 contiver o valor 68, qual resultado será exibido na célula?",
          "en": "4. In the function =IF(C2>=70, \"Passed\", \"Failed\"), if cell C2 contains 68, what will be displayed?",
          "es": "4. En la función =SI(C2>=70; \"Aprobado\"; \"Reprobado\"), si la celda C2 contiene 68, ¿qué resultado se muestra?",
        },
        options: [
          {
            id: "q4-a",
            text: {
              "pt-BR": "Reprovado",
              "en": "Failed",
              "es": "Reprobado",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Como 68 não é maior ou igual a 70, o teste lógico resulta em FALSO, retornando o segundo argumento textual.",
              "en": "Correct! Since 68 is not >= 70, the logical test evaluates to FALSE, returning the false argument.",
              "es": "¡Correcto! Como 68 no es mayor o igual a 70, devuelve el valor falso.",
            },
          },
          {
            id: "q4-b",
            text: {
              "pt-BR": "Aprovado",
              "en": "Passed",
              "es": "Aprobado",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q4-c",
            text: {
              "pt-BR": "#ERRO!",
              "en": "#ERROR!",
              "es": "#¡ERROR!",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A sintaxe é perfeitamente válida.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-excel-5",
        order: 5,
        question: {
          "pt-BR": "5. Qual recurso nativo do Excel permite que uma célula mude automaticamente sua cor de fundo para vermelho quando uma data de inspeção estiver vencida ou um estoque atingir o nível crítico?",
          "en": "5. Which built-in Excel feature automatically changes a cell's background to red when an inspection date is overdue or stock reaches a critical level?",
          "es": "5. ¿Qué función de Excel permite que una celda cambie de color automáticamente cuando vence una fecha o un inventario llega a nivel crítico?",
        },
        options: [
          {
            id: "q5-a",
            text: {
              "pt-BR": "Formatação Condicional",
              "en": "Conditional Formatting",
              "es": "Formato Condicional",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A Formatação Condicional aplica estilos visuais (cores, ícones e barras) dinamicamente conforme os critérios configurados.",
              "en": "Correct! Conditional Formatting dynamically styles cells based on custom rules.",
              "es": "¡Correcto! El formato condicional aplica colores y estilos según reglas predefinidas.",
            },
          },
          {
            id: "q5-b",
            text: {
              "pt-BR": "Validação de Dados",
              "en": "Data Validation",
              "es": "Validación de Datos",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A Validação de Dados serve para restringir o que o usuário pode digitar (ex: listas suspensas).",
              "en": "Incorrect. Data Validation restricts user inputs.",
              "es": "Incorrecto. La validación restringe lo que se puede ingresar.",
            },
          },
          {
            id: "q5-c",
            text: {
              "pt-BR": "Classificar de A a Z",
              "en": "Sort A to Z",
              "es": "Ordenar de A a Z",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Classificação apenas reordena as linhas.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
    ],
  },
};
