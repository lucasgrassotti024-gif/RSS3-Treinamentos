import { TechnicalChallengeTrack } from "./challenges-types";

export const TECHNICAL_CHALLENGE_TRACKS: TechnicalChallengeTrack[] = [
  // 1. APLICATIVOS & ANALYTICS (Excel e Power BI)
  {
    id: "desafio-power-bi-excel",
    slug: "desafio-power-bi-excel-analytics",
    badgeCode: "BI-EXCEL",
    thumbnailGradient: "from-amber-600 via-emerald-600 to-blue-900",
    coverImage: "/images/courses/powerbi.jpg",
    schoolName: {
      "pt-BR": "Aplicativos & Produtividade",
      "en": "Applications & Productivity",
      "es": "Aplicaciones y Productividad",
    },
    title: {
      "pt-BR": "Desafio Prático: Power BI, DAX e Fórmulas Avançadas no Excel",
      "en": "Hands-on Challenge: Power BI, DAX & Advanced Excel Formulas",
      "es": "Desafío Práctico: Power BI, DAX y Fórmulas Avanzadas en Excel",
    },
    category: "aplicativos",
    difficulty: "Especialista",
    workloadMinutes: 45,
    summary: {
      "pt-BR": "Casos reais de gráficos que travam no Power BI, filtros acumulados que duplicam valores e reconciliação de dados entre planilhas operacionais.",
      "en": "Real-world cases on lagging Power BI visuals, YTD filter duplications, and data reconciliation across field spreadsheets.",
      "es": "Casos reales de visuales lentos en Power BI, duplicación de acumulados y conciliación de planillas de campo.",
    },
    prerequisites: {
      "pt-BR": "Recomenda-se pesquisar sobre transição de contexto no CALCULATE (DAX) e funções matriciais no Excel.",
      "en": "Recommended research: CALCULATE context transition in DAX and Excel array formulas.",
      "es": "Se recomienda investigar transición de contexto en CALCULATE (DAX) y fórmulas matriciales en Excel.",
    },
    questions: [
      {
        id: "q-pbi-story-1",
        order: 1,
        title: {
          "pt-BR": "O Mistério do Faturamento Duplicado no Dashboard da Parada",
          "en": "The Mystery of Duplicated Invoicing in the Shutdown Dashboard",
          "es": "El Misterio de la Facturación Duplicada en el Dashboard de Parada",
        },
        storyNarrative: {
          "pt-BR": "Imagine que você é o analista responsável pelo painel de controle de uma grande parada industrial. Você montou uma matriz no Power BI para mostrar o faturamento acumulado do ano mês a mês em cada filial.\n\nPara calcular esse acumulado, você escreveu a seguinte medida:\nFaturamento_Acumulado = CALCULATE(SUM(Medicoes[Valor]), DATESYTD(Calendario[Data]), Contratos[Tipo] = \"Parada Geral\")\n\nTudo parecia certo, até que a diretoria notou algo estranho: em duas filiais que não tiveram nenhuma obra em janeiro, o valor total do ano apareceu duplicado na tabela! Além disso, o relatório no Power BI Service ficou muito pesado, demorando quase 20 segundos para abrir qualquer filtro.",
          "en": "You are the analyst managing an industrial turnaround dashboard. You built a Power BI matrix showing YTD invoicing month-over-month across plant branches.\n\nYou wrote the following DAX measure:\nFaturamento_Acumulado = CALCULATE(SUM(Medicoes[Valor]), DATESYTD(Calendario[Data]), Contratos[Tipo] = \"Parada Geral\")\n\nThe board spotted an anomaly: in branches with no work in January, the annual total duplicated, and dashboard loading dragged to 20 seconds.",
          "es": "Eres el analista del panel de parada de planta. Creaste una matriz en Power BI para mostrar la facturación acumulada año a año por sucursal.\n\nEscribiste la medida:\nFaturamento_Acumulado = CALCULATE(SUM(Medicoes[Valor]), DATESYTD(Calendario[Data]), Contratos[Tipo] = \"Parada Geral\")\n\nEl directorio descubrió que en sucursales sin obras en enero el total anual se duplicaba y el informe tardaba 20 segundos en cargar.",
        },
        questionPrompt: {
          "pt-BR": "Por que essa fórmula gerou valores incorretos e lentidão, e qual é o jeito correto de consertar isso no Power BI?",
          "en": "Why did this formula create incorrect numbers and slow down, and what is the proper fix?",
          "es": "¿Por qué falló esta fórmula y ralentizó el informe, y cuál es la solución correcta en Power BI?",
        },
        recommendedChannels: [
          {
            name: "Planilheiros Brasil (YouTube)",
            url: "https://www.youtube.com/@PlanilheirosBrasil",
            description: {
              "pt-BR": "Canal referência no Brasil em Power BI e DAX avançado, explicando transição de contexto de forma prática.",
              "en": "Top Brazilian channel for advanced DAX context transition tutorials.",
              "es": "Canal referente en DAX avanzado y transición de contexto.",
            },
          },
          {
            name: "SQLBI (Marco Russo & Alberto Ferrari)",
            url: "https://www.youtube.com/@SQLBI",
            description: {
              "pt-BR": "Os maiores especialistas mundiais em DAX. O site dax.guide explica o uso de KEEPFILTERS.",
              "en": "World leaders in DAX; their dax.guide portal breaks down KEEPFILTERS and VertiPaq internals.",
              "es": "Líderes mundiales de DAX; explican el uso de KEEPFILTERS y el motor VertiPaq.",
            },
          },
          {
            name: "Hashtag Treinamentos (YouTube)",
            url: "https://www.youtube.com/@HashtagTreinamentos",
            description: {
              "pt-BR": "Excelente para entender como filtros de CALCULATE funcionam no dia a dia das empresas.",
              "en": "Great visual explanations of how CALCULATE filters operate.",
              "es": "Explicaciones prácticas de cómo opera CALCULATE.",
            },
          },
        ],
        searchTips: {
          "pt-BR": [
            "Pesquise no Google/YouTube: 'KEEPFILTERS DAX como funciona e por que usar'",
            "Pesquise: 'Perigo de filtro booleano no CALCULATE DAX Guide'",
            "Pesquise: 'DATESYTD com meses vazios no Power BI'",
          ],
          "en": [
            "Search on Google/YouTube: 'Why use KEEPFILTERS in DAX'",
            "Search: 'DAX Guide boolean filter in CALCULATE overwrites context'",
          ],
          "es": [
            "Busque en Google/YouTube: 'Cómo usar KEEPFILTERS en DAX'",
            "Busque: 'Filtro booleano en CALCULATE DAX Guide'",
          ],
        },
        options: [
          {
            id: "opt-pbi-1-a",
            text: {
              "pt-BR": "Ao escrever o filtro direto 'Contratos[Tipo] = \"Parada Geral\"' dentro do CALCULATE, o Power BI apaga por padrão todos os outros filtros da tabela de contratos; para corrigir e deixar o painel rápido, deve-se envolver essa condição com a função KEEPFILTERS.",
              "en": "Writing direct boolean filters inside CALCULATE removes other column filters by default; wrapping the condition with KEEPFILTERS preserves the active filter context and restores high performance.",
              "es": "Al escribir el filtro directo dentro de CALCULATE, Power BI borra otros filtros de la tabla; para corregirlo y acelerar la consulta se debe envolver la condición con KEEPFILTERS.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Exato! Em DAX, quando você coloca uma condição simples (ex: Tabela[Coluna] = 'X') dentro de um CALCULATE, o motor internamente gera um FILTER(ALL(...)). Isso apaga os filtros de outras colunas da mesma tabela. O KEEPFILTERS impede isso e garante que a fórmula respeite os filtros da tela.",
              "en": "Correct! Direct boolean syntax generates an implicit ALL() on that column, clearing active slicers. KEEPFILTERS maintains existing filter intersections cleanly.",
              "es": "¡Exacto! La condición booleana directa genera un ALL() implícito. KEEPFILTERS preserva los filtros de la pantalla sin duplicar datos.",
            },
          },
          {
            id: "opt-pbi-1-b",
            text: {
              "pt-BR": "O Power BI não aceita calcular acumulado quando o relacionamento entre as tabelas é de 1 para Muitos; a única solução é mudar para relacionamento de Muitos para Muitos.",
              "en": "Power BI cannot compute YTD with 1:N relationships; the only fix is changing to Many-to-Many.",
              "es": "Power BI no permite acumulados con relaciones 1:N; hay que cambiar a Muchos a Muchos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O modelo 1 para Muitos (Star Schema) é o padrão ouro e o mais rápido. Relacionamento Muitos para Muitos causa erros ainda piores.",
              "en": "Incorrect. 1:N Star Schema is best practice. Many-to-Many causes severe data corruption.",
              "es": "Incorrecto. El modelo 1:N es el ideal; Muchos a Muchos es una mala práctica.",
            },
          },
          {
            id: "opt-pbi-1-c",
            text: {
              "pt-BR": "O erro aconteceu porque o computador onde o relatório foi aberto tinha pouca memória RAM; não há nada de errado com a fórmula DAX.",
              "en": "The error was caused by low computer RAM; the DAX code is completely fine.",
              "es": "El error se debió a falta de memoria RAM en la computadora; la fórmula DAX es perfecta.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O problema é de lógica de contexto no DAX, que gera resultados incorretos independentemente do hardware.",
              "en": "Incorrect. The issue is mathematical filter semantics in DAX.",
              "es": "Incorrecto. Es un problema de lógica de filtros en el código DAX.",
            },
          },
          {
            id: "opt-pbi-1-d",
            text: {
              "pt-BR": "A função DATESYTD só funciona se o ano tiver exatamente 365 dias, falhando automaticamente em anos bissextos.",
              "en": "DATESYTD only works on 365-day years and breaks during leap years.",
              "es": "DATESYTD solo funciona en años de 365 días y falla en años bisiestos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O DATESYTD gerencia calendários bissextos e datas gregorianas perfeitamente.",
              "en": "Incorrect. DATESYTD handles leap years natively.",
              "es": "Incorrecto. DATESYTD soporta años bisiestos con total precisión.",
            },
          },
        ],
        relatedCourse: {
          courseId: "c-power-bi-analytics",
          courseName: {
            "pt-BR": "Power BI Analytics para Operações Industriais",
            "en": "Power BI Analytics for Industrial Operations",
            "es": "Power BI Analytics para Operaciones Industriales",
          },
          whyStudy: {
            "pt-BR": "No Módulo 4 desse curso ensinamos passo a passo o funcionamento do CALCULATE, transição de contexto e boas práticas de modelagem com tabelas fato e dimensão.",
            "en": "Module 4 covers CALCULATE evaluation, context transition, and star schema best practices.",
            "es": "En el Módulo 4 se enseña paso a paso el funcionamiento de CALCULATE y modelado dimensional.",
          },
        },
      },
      {
        id: "q-excel-story-2",
        order: 2,
        title: {
          "pt-BR": "O Enigma do Rendimento da Máquina: Calculando o OEE na Prática",
          "en": "The Machine Throughput Puzzle: Calculating Real-World OEE",
          "es": "El Enigma del Rendimiento de Máquina: Calculando el OEE Real",
        },
        storyNarrative: {
          "pt-BR": "Você precisa apresentar no Excel o indicador de eficiência (OEE) de uma hidrojateadora em uma parada de fábrica de 12 horas (720 minutos).\n\nA equipe de campo anotou na planilha os seguintes dados do turno:\n- Das 12 horas, 60 minutos foram de paradas programadas (almoço e diálogo de segurança).\n- Houve 90 minutos de parada não programada porque uma mangueira vazou e precisou ser trocada.\n- A máquina trabalhou no restante do tempo e jateou um total de 900 m².\n- A velocidade padrão de fábrica da máquina é de 2 m² por minuto (ou seja, 0,5 minuto por m²).\n- Na inspeção de qualidade, 45 m² ficaram com defeito de pintura e precisaram de retrabalho.",
          "en": "You must compute the OEE for a hydroblasting rig during a 12-hour shift (720 min):\n- 60 min planned breaks (lunch/safety briefing).\n- 90 min unplanned downtime (burst hose replacement).\n- Remaining time produced 900 m².\n- Standard nominal speed is 2 m² per min (0.5 min/m²).\n- Inspection found 45 m² defective requiring rework.",
          "es": "Debes calcular en Excel el OEE de una máquina de hidrojet en un turno de 12 horas (720 min):\n- 60 min paradas programadas (almuerzo/charla de seguridad).\n- 90 min paradas imprevistas (cambio de manguera rota).\n- Producción total: 900 m².\n- Velocidad nominal estándar: 2 m² por minuto (0,5 min/m²).\n- Control de calidad rechazó 45 m² por defectos.",
        },
        questionPrompt: {
          "pt-BR": "Aplicando as regras industriais de OEE (Disponibilidade × Desempenho × Qualidade), qual é o resultado percentual exato dessa máquina?",
          "en": "Applying industrial OEE formulas (Availability × Performance × Quality), what is the exact percentage?",
          "es": "Aplicando la fórmula de OEE (Disponibilidad × Rendimiento × Calidad), ¿cuál es el porcentaje exacto?",
        },
        recommendedChannels: [
          {
            name: "FM2S Educação e Consultoria (YouTube)",
            url: "https://www.youtube.com/@FM2SEducacao",
            description: {
              "pt-BR": "Canal especialista em Lean Seis Sigma, OEE e indicadores de manutenção e produtividade industrial.",
              "en": "Top channel for Lean Six Sigma, OEE, and industrial productivity metrics.",
              "es": "Especialistas en Lean Six Sigma, OEE e indicadores industriales.",
            },
          },
          {
            name: "Doutores do Excel (YouTube)",
            url: "https://www.youtube.com/@DoutoresdoExcel",
            description: {
              "pt-BR": "Ensina como estruturar planilhas de indicadores e fórmulas industriais no Excel.",
              "en": "Teaches KPI dashboard architecture and industrial modeling in Excel.",
              "es": "Tutoriales prácticos para construir tableros e indicadores en Excel.",
            },
          },
        ],
        searchTips: {
          "pt-BR": [
            "Pesquise no Google/YouTube: 'Como calcular OEE passo a passo com exemplo'",
            "Pesquise: 'Fórmula de Disponibilidade, Desempenho e Qualidade no OEE'",
            "Lembre-se: O tempo planejado é o tempo total menos as paradas programadas de refeição.",
          ],
          "en": [
            "Search on Google/YouTube: 'How to calculate OEE step by step with examples'",
            "Search: 'OEE Availability Performance Quality formulas'",
          ],
          "es": [
            "Busque en Google/YouTube: 'Cómo calcular OEE paso a paso'",
            "Busque: 'Fórmulas de Disponibilidad Rendimiento y Calidad OEE'",
          ],
        },
        options: [
          {
            id: "opt-excel-2-a",
            text: {
              "pt-BR": "Disponibilidade: 86,4% | Desempenho: 79,0% | Qualidade: 95,0% | OEE Global final: 64,8%",
              "en": "Availability: 86.4% | Performance: 79.0% | Quality: 95.0% | Global OEE: 64.8%",
              "es": "Disponibilidad: 86,4% | Rendimiento: 79,0% | Calidad: 95,0% | OEE Global: 64,8%",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Cálculo perfeito! 1) Tempo Planejado = 720 - 60 = 660 min. Tempo Rodando = 660 - 90 = 570 min. Disponibilidade = 570 / 660 = 86,36%. 2) Tempo teórico para fazer 900 m² = 450 min. Desempenho = 450 / 570 = 78,95%. 3) Peças boas = 855 m². Qualidade = 855 / 900 = 95,0%. 4) OEE = 0,8636 × 0,7895 × 0,95 = 64,77% (arredondado para 64,8%).",
              "en": "Exact calculation: Planned Time = 660 min; Run Time = 570 min -> A = 86.36%. Ideal Time = 450 min -> P = 450/570 = 78.95%. Q = 855/900 = 95.00%. OEE = 86.36% × 78.95% × 95.00% = 64.77%.",
              "es": "¡Cálculo exacto! Tiempo planificado = 660 min; Operativo = 570 min -> A = 86,36%. Tiempo ideal = 450 min -> P = 78,95%. Q = 95,00%. OEE = 64,77%.",
            },
          },
          {
            id: "opt-excel-2-b",
            text: {
              "pt-BR": "OEE Global de 95,0%, porque a máquina conseguiu bater a meta de produzir 900 metros quadrados.",
              "en": "Global OEE of 95.0% because the machine reached 900 square meters.",
              "es": "OEE Global de 95,0% porque la máquina alcanzó los 900 m².",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Bater o volume não significa ser eficiente; as perdas de tempo por quebra de mangueira e a velocidade abaixo da máxima reduzem drasticamente o OEE.",
              "en": "Incorrect. Volume alone ignores speed and downtime losses.",
              "es": "Incorrecto. El volumen ignora las paradas por falla y la baja velocidad.",
            },
          },
          {
            id: "opt-excel-2-c",
            text: {
              "pt-BR": "OEE Global de 50,0%, pois metade do turno foi perdido em conversas e manutenção.",
              "en": "Global OEE of 50.0% because half the shift was wasted.",
              "es": "OEE Global de 50,0% porque se perdió la mitad del turno.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. As paradas não programadas foram de 90 minutos (apenas 13,6% do tempo planejado), não metade do turno.",
              "en": "Incorrect. Unplanned downtime was 90 min (13.6%), not 50%.",
              "es": "Incorrecto. Las fallas sumaron 90 min, no la mitad del tiempo.",
            },
          },
          {
            id: "opt-excel-2-d",
            text: {
              "pt-BR": "OEE não se aplica a máquinas de hidrojato, servindo apenas para fábricas de automóveis.",
              "en": "OEE does not apply to hydroblasting rigs, only automotive plants.",
              "es": "OEE no aplica a equipos de hidrojet, solo a plantas automotrices.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O OEE é o indicador universal de produtividade utilizado em qualquer equipamento ou processo industrial no mundo.",
              "en": "Incorrect. OEE is universal across all heavy equipment and process industries.",
              "es": "Incorrecto. El OEE se aplica en todo tipo de maquinaria industrial.",
            },
          },
        ],
        relatedCourse: {
          courseId: "c-excel-produtividade-operacional",
          courseName: {
            "pt-BR": "Excel para Produtividade Operacional na Indústria",
            "en": "Excel for Operational Productivity in Industry",
            "es": "Excel para la Productividad Operacional en la Industria",
          },
          whyStudy: {
            "pt-BR": "O curso ensina como estruturar fórmulas industriais, automatizar relatórios de parada e criar painéis de controle no Excel.",
            "en": "Teaches building KPI spreadsheets and turnaround reporting formulas in Excel.",
            "es": "Aprende a estructurar planillas y fórmulas de indicadores de planta en Excel.",
          },
        },
      },
    ],
  },

  // 2. ENGENHARIA & MECÂNICA INDUSTRIAL (PCM e Manutenção)
  {
    id: "desafio-manutencao-pcm",
    slug: "desafio-manutencao-pcm-mecanica",
    badgeCode: "PCM-MEC",
    thumbnailGradient: "from-blue-700 via-indigo-800 to-slate-950",
    coverImage: "/images/courses/manutencao.jpg",
    schoolName: {
      "pt-BR": "Engenharia & Mecânica",
      "en": "Engineering & Mechanics",
      "es": "Ingeniería y Mecánica",
    },
    title: {
      "pt-BR": "Desafio Prático: Diagnóstico de Falhas Mecânicas e Confiabilidade no PCM",
      "en": "Hands-on Challenge: Mechanical Fault Diagnostics & Asset Reliability in PCM",
      "es": "Desafío Prático: Diagnóstico de Fallas Mecánicas y Confiabilidad en el PCM",
    },
    category: "mecanica",
    difficulty: "Especialista",
    workloadMinutes: 45,
    summary: {
      "pt-BR": "Casos reais de bombas com vibração anormal, leitura de gráficos de preditiva e decisões de troca de rolamento antes de paradas catastróficas.",
      "en": "Real-world cases on vibrating pumps, vibration spectrum readings, and bearing overhaul decisions before catastrophic shutdowns.",
      "es": "Casos reales de bombas vibrando, lectura de espectros de predictiva y cambio preventivo de rodamientos.",
    },
    prerequisites: {
      "pt-BR": "Recomenda-se pesquisar sobre análise de vibrações (frequências de defeito de rolamento BPFO/BPFI) e curvas de falha.",
      "en": "Recommended research: vibration analysis (bearing frequencies BPFO/BPFI) and failure curves.",
      "es": "Se recomienda investigar análisis de vibraciones (frecuencias BPFO/BPFI) y curvas de falla.",
    },
    questions: [
      {
        id: "q-pcm-story-1",
        order: 1,
        title: {
          "pt-BR": "A Bomba que Trepida: O Que o Gráfico de Vibração Está Dizendo?",
          "en": "The Shaking Pump: What is the Vibration Graph Telling You?",
          "es": "La Bomba que Vibra: ¿Qué Dice el Gráfico de Vibración?",
        },
        storyNarrative: {
          "pt-BR": "Você é o responsável pelo PCM da fábrica e recebe um alerta urgente: a bomba principal de hidrojato de ultra-alta pressão (que trabalha a 2.800 bar tocada por um motor elétrico de 1.780 RPM) começou a trepidar mais forte.\n\nO técnico de manutenção preditiva foi até o local com o medidor de vibração e constatou que a velocidade subiu de 2 mm/s para quase 8 mm/s no mancal dianteiro.\n\nAo olhar o gráfico de espectro (FFT), o técnico notou algo revelador: o pico na velocidade do motor (cerca de 30 Hz) estava bem baixo, mas apareceram vários picos em 142 Hz e seus múltiplos, com pequenas ondinhas dos dois lados (bandas laterais) exatamente no ritmo da rotação do motor.",
          "en": "As PCM lead, you receive an urgent alert: the main UHP hydroblasting pump (operating at 2,800 bar with a 1,780 RPM motor) began vibrating heavily.\n\nThe predictive tech found vibration rose from 2 to 8 mm/s. The spectrum showed a low 1X peak, but prominent peaks at 142 Hz and harmonics surrounded by sidebands spaced at running speed.",
          "es": "Como jefe de PCM recibes una alerta: la bomba de hidrojet de 2.800 bar (motor de 1.780 RPM) comenzó a vibrar con fuerza.\n\nEl técnico de predictiva constató que la vibración subió a 8 mm/s. El gráfico mostró picos en 142 Hz y múltiplos con bandas laterales al ritmo del motor.",
        },
        questionPrompt: {
          "pt-BR": "O que está quebrado nessa máquina e qual decisão o PCM deve tomar imediatamente para evitar um acidente grave?",
          "en": "What is broken in this machine and what immediate decision must PCM make to prevent catastrophic failure?",
          "es": "¿Qué componente está dañado y qué decisión inmediata debe tomar el PCM para evitar un desastre?",
        },
        recommendedChannels: [
          {
            name: "Ensitec / Preditiva Brasil (YouTube)",
            url: "https://www.youtube.com",
            description: {
              "pt-BR": "Canais e vídeos dedicados a análise de vibrações na prática: como identificar defeitos de rolamento (BPFO, BPFI, BSF).",
              "en": "Practical tutorials on FFT vibration analysis and bearing defect identification.",
              "es": "Tutoriales sobre análisis de vibraciones y fallas en rodamientos.",
            },
          },
          {
            name: "SKF Group (YouTube)",
            url: "https://www.youtube.com/@SKFGroup",
            description: {
              "pt-BR": "Líder mundial em rolamentos: vídeos explicando por que a pista externa descasca e gera bandas laterais.",
              "en": "World leader in bearings: animated guides on bearing race spalling and vibration harmonics.",
              "es": "Líder mundial en rodamientos: guías de fallas en pistas y vibraciones.",
            },
          },
        ],
        searchTips: {
          "pt-BR": [
            "Pesquise no Google/YouTube: 'Como identificar defeito de rolamento na análise de vibração'",
            "Pesquise: 'O que significa BPFO com bandas laterais da rotação'",
            "Pesquise: 'Estágios de falha de rolamento ISO 10816'",
          ],
          "en": [
            "Search on Google/YouTube: 'How to diagnose bearing faults in vibration analysis'",
            "Search: 'What does BPFO with 1X sidebands mean'",
          ],
          "es": [
            "Busque en Google/YouTube: 'Cómo identificar fallas de rodamientos por vibraciones'",
            "Busque: 'Frecuencia BPFO con bandas laterales de giro'",
          ],
        },
        options: [
          {
            id: "opt-pcm-1-a",
            text: {
              "pt-BR": "O rolamento está com desgaste severo na pista externa (defeito tipo BPFO em estágio avançado); os impactos se repetem a cada volta do eixo. O PCM deve programar a troca imediata do rolamento em até 48 horas para evitar que ele trave e exploda a bomba sob 2.800 bar.",
              "en": "The bearing has severe outer race spalling (advanced BPFO fault); impacts repeat on each shaft turn. PCM must schedule bearing replacement within 48 hours to avert catastrophic seizure under 2,800 bar.",
              "es": "El rodamiento tiene daño severo en la pista exterior (falla BPFO avanzada) modulada por el giro. El PCM debe programar el cambio en 48 horas antes de que se clave la bomba a 2.800 bar.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Resposta correta e salvadora de vidas! O pico em 142 Hz bate certinho com a frequência da pista externa (BPFO) do rolamento. As bandas laterais na velocidade do motor mostram que a folga aumentou e a cada volta o defeito bate na zona de carga. Se não trocar agora, o rolamento trava e causa prejuízo milionário.",
              "en": "Exact diagnostic call! 142 Hz matches BPFO. Sidebands at 1X mean the spall is crossing the load zone on each revolution. Immediate scheduled overhaul is mandatory.",
              "es": "¡Diagnóstico impecable! 142 Hz corresponde a la pista externa (BPFO). Las bandas laterales demuestran que el defecto golpea en cada vuelta del eje.",
            },
          },
          {
            id: "opt-pcm-1-b",
            text: {
              "pt-BR": "É apenas o motor elétrico fora de centro; basta soltar os parafusos do chão e apertar de novo com a mão.",
              "en": "It is just motor misalignment; loosen bolts and retighten by hand.",
              "es": "Es solo desalineación; aflojar los pernos y apretar a mano.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Desalinhamento gera picos em 1X e 2X da rotação do motor, nunca frequências quebradas como 142 Hz.",
              "en": "Incorrect. Misalignment produces 1X and 2X peaks, never non-synchronous bearing frequencies like 142 Hz.",
              "es": "Incorrecto. La desalineación genera 1X y 2X, no frecuencias de rodamiento.",
            },
          },
          {
            id: "opt-pcm-1-c",
            text: {
              "pt-BR": "A bomba está apenas com pouca água; basta encher o tanque de água que o barulho desaparece sozinho.",
              "en": "The pump is just low on water; refill tank and noise vanishes.",
              "es": "Falta agua en la bomba; llenando el tanque el ruido desaparece.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Falta de água causa cavitação (chiado espalhado de alta frequência), não picos harmônicos com bandas de rolamento.",
              "en": "Incorrect. Cavitation creates broad high-frequency grass, not discrete harmonic peaks.",
              "es": "Incorrecto. Falta de agua genera cavitación aleatoria, no picos armónicos de rodamiento.",
            },
          },
          {
            id: "opt-pcm-1-d",
            text: {
              "pt-BR": "Essa vibração é normal e quanto mais alta for, mais rápido o hidrojato consegue limpar os tubos.",
              "en": "High vibration is normal and actually speeds up tube cleaning.",
              "es": "Esa vibración es normal y hace que limpie más rápido.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo. Vibração acima de 7 mm/s destrói retentores, pistões e causa risco iminente de rompimento violento.",
              "en": "Incorrect. Severe vibration destroys seals, plungers, and invites catastrophic mechanical rupture.",
              "es": "Incorrecto y peligroso. Vibraciones de 8 mm/s destruyen la máquina.",
            },
          },
        ],
        relatedCourse: {
          courseId: "c-pcm-planejamento-controle-manutencao",
          courseName: {
            "pt-BR": "PCM — Planejamento e Controle de Manutenção Industrial",
            "en": "PCM — Industrial Maintenance Planning & Control",
            "es": "PCM — Planificación y Control del Mantenimiento Industrial",
          },
          whyStudy: {
            "pt-BR": "No curso ensinamos como interpretar relatórios de preditiva, calcular MTBF e emitir ordens de serviço antes que a máquina quebre.",
            "en": "Covers predictive workflows, MTBF calculation, and issuing preventive work orders.",
            "es": "Aprende a interpretar reportes de predictiva y emitir órdenes antes de la falla.",
          },
        },
      },
    ],
  },

  // 3. SEGURANÇA CRÍTICA & NORMAS REGULAMENTADORAS (NR-35, NR-10, NR-33)
  {
    id: "desafio-seguranca-nr35-nr10",
    slug: "desafio-seguranca-critica-nr35-altura",
    badgeCode: "NR-SEG",
    thumbnailGradient: "from-red-700 via-orange-600 to-amber-950",
    coverImage: "/images/courses/nr35.jpg",
    schoolName: {
      "pt-BR": "Segurança & Normas Regulamentadoras",
      "en": "Safety & Regulatory Standards",
      "es": "Seguridad y Normas Reguladoras",
    },
    title: {
      "pt-BR": "Desafio Prático: Física da Queda em Altura (NR-35) e Linhas de Vida",
      "en": "Hands-on Challenge: Fall Physics at Height (NR-35) & Lifeline Sizing",
      "es": "Desafío Práctico: Física de la Caída en Altura (NR-35) y Líneas de Vida",
    },
    category: "seguranca",
    difficulty: "Especialista",
    workloadMinutes: 45,
    summary: {
      "pt-BR": "Cálculo real do impacto de uma queda no corpo humano, cálculo da distância livre até o chão (ZLQ) e o perigo do cabo esticado com pouco ângulo.",
      "en": "Real calculation of fall impact forces on human body, Fall Clearance (ZLQ), and catenary tension risks on horizontal cables.",
      "es": "Cálculo de fuerzas de impacto en caídas de altura, distancia libre al suelo (ZLQ) y tensión en cables horizontales.",
    },
    prerequisites: {
      "pt-BR": "Recomenda-se pesquisar a fórmula de Zona Livre de Queda (ZLQ) na NR-35 e como calcular a tração em cabos horizontais de ancoragem.",
      "en": "Recommended research: Fall Clearance formula in NR-35 and vector tension in horizontal lifelines.",
      "es": "Se recomienda investigar la fórmula de ZLQ en la NR-35 y tensión vectorial en líneas de vida.",
    },
    questions: [
      {
        id: "q-nr35-story-1",
        order: 1,
        title: {
          "pt-BR": "A Armadilha Invisível da Linha de Vida: O Cabo Vai Aguentar?",
          "en": "The Invisible Lifeline Trap: Will the Cable Hold?",
          "es": "La Trampa Invisible de la Línea de Vida: ¿Aguantará el Cable?",
        },
        storyNarrative: {
          "pt-BR": "Uma equipe de montagem de andaime vai trabalhar a 14 metros de altura em volta de uma caldeira. O técnico de segurança instalou uma linha de vida horizontal de cabo de aço de 12 metros de comprimento presa em duas vigas de concreto.\n\nUm montador com seus equipamentos pesa 100 kg e usa cinto com talabarte de 1,5 metro equipado com absorvedor de impacto.\n\nSe o trabalhador cair:\n- O absorvedor de impacto vai abrir e frear o corpo dele com uma força máxima de 6 kN (cerca de 600 kgf).\n- Só que o cabo de aço, ao segurar o trabalhador no meio, afunda um pouco e forma um ângulo inclinado bem aberto de apenas 10 graus com a linha reta.\n- Além disso, para a pessoa não bater a cabeça no chão lá embaixo, existe a conta da Zona Livre de Queda (ZLQ): tamanho do talabarte (1,5 m) + o quanto o absorvedor abre rasgado (1,1 m) + o quanto o cabo afunda (1,2 m) + a altura do corpo da pessoa até os pés (1,5 m) + 1 metro de segurança de sobra.",
          "en": "Scaffolders are working at 14m height on a boiler using a 12m horizontal lifeline cable. A 100kg worker falls on an energy-absorbing lanyard (max arrest 6 kN). Cable sags at 10 degrees to horizontal.",
          "es": "Andamieros trabajan a 14m de altura en una caldera usando una línea de vida de 12m. Un operario de 100kg cae con eslinga y absorbedor (frenado a 6 kN). El cable flecta con 10 grados respecto a la horizontal.",
        },
        questionPrompt: {
          "pt-BR": "Qual é a força real que o cabo puxa em cada viga de concreto nas pontas (será que puxa só 600 kgf ou muito mais?) e qual é a altura mínima livre (ZLQ) que tem que ter embaixo dele?",
          "en": "What is the true tension pulled on each concrete beam anchor and what is the minimum required Fall Clearance (ZLQ)?",
          "es": "¿Cuál es la fuerza real que tira en cada anclaje de punta y cuál es la distancia libre mínima al suelo (ZLQ)?",
        },
        recommendedChannels: [
          {
            name: "Escola da Prevenção / SST Online (YouTube)",
            url: "https://www.youtube.com",
            description: {
              "pt-BR": "Vídeos detalhados sobre cálculo de ZLQ na NR-35 e forças em ancoragens de trabalho em altura.",
              "en": "Deep dives into NR-35 fall clearance and anchor load physics.",
              "es": "Explicaciones detalladas de cálculo de ZLQ y anclajes en altura.",
            },
          },
          {
            name: "Fundacentro Oficial (YouTube)",
            url: "https://www.youtube.com/@FundacentroOficial",
            description: {
              "pt-BR": "Órgão técnico do governo brasileiro com manuais e vídeos científicos sobre ancoragens (NBR 16325) e proteção contra quedas.",
              "en": "Official Brazilian occupational safety institute with scientific guides on anchor testing.",
              "es": "Instituto oficial de seguridad laboral con guías sobre líneas de vida y anclajes.",
            },
          },
        ],
        searchTips: {
          "pt-BR": [
            "Pesquise no Google/YouTube: 'Como calcular ZLQ Zona Livre de Queda NR-35'",
            "Pesquise: 'Amplificação de força em cabo de aço horizontal ângulo'",
            "Dica: A tração na ponta de um cabo quase reto é muito maior que o peso que puxa para baixo!",
          ],
          "en": [
            "Search on Google/YouTube: 'How to calculate Fall Clearance ZLQ'",
            "Search: 'Horizontal lifeline cable tension angle formula'",
          ],
          "es": [
            "Busque en Google/YouTube: 'Cómo calcular Zona Libre de Caída ZLQ NR-35'",
            "Busque: 'Fuerza en anclajes de líneas de vida según ángulo'",
          ],
        },
        options: [
          {
            id: "opt-nr35-1-a",
            text: {
              "pt-BR": "A força puxa quase 3 vezes mais: cerca de 1.760 kgf (17,3 kN) em cada ponta do cabo por causa do ângulo aberto; e a distância livre necessária até o chão (ZLQ) é de 6,3 metros (como a plataforma está a 14 metros, a pessoa fica segura sem bater no solo).",
              "en": "Cable pulls nearly 3x more: ~1,760 kgf (17.3 kN) on each anchor beam due to the shallow angle; minimum required Fall Clearance (ZLQ) is 6.3 meters, making the 14m elevation safe.",
              "es": "El cable tira casi el triple: ~1.760 kgf (17,3 kN) en cada anclaje por el ángulo abierto; y la distancia libre al piso (ZLQ) es de 6,3 metros (en 14m de altura el trabajador queda seguro).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Exatamente! Essa é a física que salva vidas: como o cabo está quase esticado (ângulo de 10 graus), a física decompõe a força para os lados e multiplica a carga nas pontas (6 kN / (2 × sen(10°)) = 17,28 kN). E a ZLQ soma tudo: 1,5 + 1,1 + 1,2 + 1,5 + 1,0 = 6,3 metros.",
              "en": "Exact physics! The shallow 10° catenary angle vectorially multiplies anchor forces to 17.28 kN. ZLQ = 1.5 + 1.1 + 1.2 + 1.5 + 1.0 = 6.3m, safely within 14m drop.",
              "es": "¡Exacto! El ángulo de 10° multiplica la fuerza hacia los anclajes hasta 17,28 kN. La ZLQ de 6,3 m asegura que no impacte el piso.",
            },
          },
          {
            id: "opt-nr35-1-b",
            text: {
              "pt-BR": "A força na ponta é de apenas 100 kgf (o peso do operário) e a distância até o chão precisa ser de apenas 1 metro.",
              "en": "Anchor pull is only 100 kgf (worker weight) and required clearance is only 1 meter.",
              "es": "La fuerza es solo de 100 kgf y la distancia al piso requiere apenas 1 metro.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e perigosíssimo! Queda com gravidade gera energia de choque multiplicada que abre o absorvedor a 600 kgf, e a inclinação do cabo joga quase 1.800 kgf na estrutura.",
              "en": "Incorrect and fatal. Fall impact multiplies loads to 600 kgf, and cable sag pulls 1,760 kgf sideways.",
              "es": "Incorrecto y peligroso. El impacto dinámico y la física del cable multiplican la carga en la estructura.",
            },
          },
          {
            id: "opt-nr35-1-c",
            text: {
              "pt-BR": "Cabos de aço não precisam de cálculo se tiverem mais de 8 milímetros de espessura.",
              "en": "Steel cables require zero engineering calculations if thicker than 8mm.",
              "es": "Los cables de acero no requieren cálculo si tienen más de 8 mm.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e proibido pela NR-35. Toda linha de vida exige projeto assinado por engenheiro e memorial de cálculo com teste de ancoragem.",
              "en": "Incorrect. NR-35 mandates signed engineering projects and certified anchor load tests.",
              "es": "Incorrecto. Toda línea de vida exige memoria de cálculo firmada por ingeniero.",
            },
          },
          {
            id: "opt-nr35-1-d",
            text: {
              "pt-BR": "A ZLQ deve ser sempre de 30 metros, sendo proibido trabalhar em alturas menores que isso.",
              "en": "ZLQ must always be 30 meters, prohibiting work below that level.",
              "es": "La ZLQ debe ser de 30 metros siempre, prohibiéndose trabajos más bajos.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A ZLQ varia conforme o comprimento do talabarte e tipo de trava-quedas, calculada caso a caso.",
              "en": "Incorrect. ZLQ is calculated per lanyard type and site geometry.",
              "es": "Incorrecto. La ZLQ se calcula según el equipo y la geometría del lugar.",
            },
          },
        ],
        relatedCourse: {
          courseId: "c-nr35-trabalho-altura",
          courseName: {
            "pt-BR": "NR-35 Trabalho em Altura e Proteção contra Quedas",
            "en": "NR-35 Work at Height & Fall Protection",
            "es": "NR-35 Trabajo en Altura y Protección Anticaídas",
          },
          whyStudy: {
            "pt-BR": "No curso ensinamos como calcular a Zona Livre de Queda (ZLQ), dimensionar ancoragens e escolher os EPIs corretos para montagem de andaime e pintura.",
            "en": "Covers fall clearance calculations, anchor sizing, and PPE selection for height tasks.",
            "es": "Aprende a calcular ZLQ, resistencia de anclajes y uso seguro de eslingas.",
          },
        },
      },
    ],
  },

  // 4. GESTÃO INDUSTRIAL & PROJETOS (EVM e Custos)
  {
    id: "desafio-gestao-projetos-evm",
    slug: "desafio-gestao-projetos-custos-evm",
    badgeCode: "GP-EVM",
    thumbnailGradient: "from-emerald-700 via-teal-800 to-slate-950",
    coverImage: "/images/courses/projetos.jpg",
    schoolName: {
      "pt-BR": "Gestão Industrial & Projetos",
      "en": "Industrial Management & Projects",
      "es": "Gestión Industrial y Proyectos",
    },
    title: {
      "pt-BR": "Desafio Prático: Gestão de Custos e Prazos com Valor Agregado (EVM)",
      "en": "Hands-on Challenge: Cost & Schedule Governance with Earned Value (EVM)",
      "es": "Desafío Práctico: Control de Costos y Cronograma con Valor Ganado (EVM)",
    },
    category: "gestao",
    difficulty: "Especialista",
    workloadMinutes: 45,
    summary: {
      "pt-BR": "Previsão matemática de estouro de orçamento em paradas de fábrica, cálculo de custos futuros (EAC) e renegociação de prazos com clientes.",
      "en": "Mathematical budget overrun forecasting in plant turnarounds, Estimate at Completion (EAC), and schedule renegotiation.",
      "es": "Pronóstico matemático de sobrecosto en paradas de planta, proyección de costo final (EAC) y renegociación contractual.",
    },
    prerequisites: {
      "pt-BR": "Recomenda-se pesquisar a metodologia de Valor Agregado (EVM): fórmulas de CPI, SPI, EAC e TCPI.",
      "en": "Recommended research: Earned Value Management formulas for CPI, SPI, EAC, and TCPI.",
      "es": "Se recomienda investigar las fórmulas de Valor Ganado (EVM): CPI, SPI, EAC y TCPI.",
    },
    questions: [
      {
        id: "q-evm-story-1",
        order: 1,
        title: {
          "pt-BR": "A Parada Está no Meio do Caminho: Quanto Vai Custar no Final?",
          "en": "Halfway Through the Shutdown: How Much Will It Truly Cost?",
          "es": "A Mitad de la Parada: ¿Cuánto Costará Realmente al Final?",
        },
        storyNarrative: {
          "pt-BR": "Você foi contratado para gerenciar uma grande parada de manutenção de 30 dias na fábrica, com orçamento total aprovado de R$ 2,4 milhões.\n\nNo 18º dia de obra, você reúne os relatórios e descobre um cenário tenso:\n- O planejado era já ter entregue R$ 1,6 milhão em serviços prontos.\n- Mas o time só conseguiu entregar fisicamente R$ 1,2 milhão de serviços até agora (atraso nas frentes de pintura).\n- E o pior: para entregar esses R$ 1,2 milhão, a empresa já gastou R$ 1,5 milhão em dinheiro real com equipes e horas extras.\n\nA diretoria chama você para uma reunião urgente e pergunta: 'Se esse ritmo ruim de produtividade e gasto continuar desse jeito até o fim da parada, qual vai ser a conta total final dessa obra?'",
          "en": "You manage a 30-day turnaround budgeted at R$ 2.4 million. On day 18:\n- Planned Value PV = R$ 1.6M.\n- Physical Earned Value EV = R$ 1.2M.\n- Actual Cost AC = R$ 1.5M.\n\nThe board asks: 'If this poor pace continues, what will be the final bill at completion?'",
          "es": "Diriges una parada de 30 días presupuestada en R$ 2,4 millones. Al día 18:\n- Valor Planificado PV = R$ 1,6M.\n- Avance Real Ganado EV = R$ 1,2M.\n- Costo Real Incurrido AC = R$ 1,5M.\n\nEl directorio pregunta: 'Si este ritmo continúa, ¿cuánto terminará costando toda la obra?'",
        },
        questionPrompt: {
          "pt-BR": "Usando as fórmulas clássicas de previsão de custos de projetos (EAC levando em conta o atraso e o sobrecusto juntos), qual será o custo final estimado e qual é o diagnóstico para a diretoria?",
          "en": "Using classical EVM forecasting (composite EAC combining CPI and SPI drag), what is the estimated final cost?",
          "es": "¿Cuál será el costo final estimado (EAC combinado por CPI y SPI) y cuál es el diagnóstico para la empresa?",
        },
        recommendedChannels: [
          {
            name: "Mário Trentim / Gestão de Projetos (YouTube)",
            url: "https://www.youtube.com/@MarioTrentim",
            description: {
              "pt-BR": "Canal referência em gestão de projetos e engenharia: explicações fáceis sobre Curva S e Valor Agregado (EVM).",
              "en": "Leading project management channel covering S-curves and Earned Value math.",
              "es": "Referente en gestión de proyectos, Curva S y valor ganado.",
            },
          },
          {
            name: "Ricardo Vargas (YouTube)",
            url: "https://www.youtube.com/@RicardoVargasVideos",
            description: {
              "pt-BR": "Especialista internacional e ex-presidente do PMI: vídeos didáticos desenhando o que significam CPI, SPI e EAC.",
              "en": "Former PMI board chair breaking down EVM forecasting with visual diagrams.",
              "es": "Ex presidente del PMI con guías visuales de EVM y proyecciones de costo.",
            },
          },
        ],
        searchTips: {
          "pt-BR": [
            "Pesquise no Google/YouTube: 'Como calcular Valor Agregado EVM passo a passo'",
            "Pesquise: 'Fórmula do EAC estimativa no término CPI SPI'",
            "Lembre-se: CPI = EV / AC (custo) e SPI = EV / PV (prazo). Se ambos forem menores que 1, a obra vai estourar feio!",
          ],
          "en": [
            "Search on Google/YouTube: 'Earned Value Management tutorial for beginners'",
            "Search: 'EAC formula with CPI and SPI'",
          ],
          "es": [
            "Busque en Google/YouTube: 'Tutorial de gestión de valor ganado EVM'",
            "Busque: 'Fórmula de EAC con CPI y SPI'",
          ],
        },
        options: [
          {
            id: "opt-evm-1-a",
            text: {
              "pt-BR": "O custo final vai estourar em R$ 3,5 milhões (mais de R$ 1,1 milhão de prejuízo além do orçamento); e o time precisaria ser 33% mais rápido e mais barato no restante da obra para não estourar, o que é praticamente impossível sem renegociar com o cliente.",
              "en": "Final cost will skyrocket to R$ 3.5 million (over R$ 1.1M overrun); the crew would need to perform 33% above original targets to recover, which is mathematically impossible without change orders.",
              "es": "El costo final se disparará a R$ 3,5 millones (R$ 1,1M de sobrecosto); la cuadrilla tendría que rendir un 33% por encima de lo normal, lo cual es inviable sin un aditivo contractual.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Cálculo exato de engenharia de custos! Índice de Custo CPI = 1,2M / 1,5M = 0,80. Índice de Prazo SPI = 1,2M / 1,6M = 0,75. O fator composto é 0,80 × 0,75 = 0,60. Falta fazer R$ 1,2 milhão de trabalho. 1,2M / 0,60 = R$ 2,0 milhões a mais para terminar. Somado com os 1,5M já gastos: R$ 3,5 milhões no final!",
              "en": "Exact calculation: CPI = 0.80, SPI = 0.75. Composite factor = 0.60. Remaining work R$ 1.2M / 0.60 = R$ 2.0M. Total EAC = R$ 1.5M spent + R$ 2.0M = R$ 3.5 Million.",
              "es": "¡Cálculo exacto! CPI = 0,80, SPI = 0,75. Factor combinado = 0,60. Falta ejecutar 1,2M / 0,60 = 2,0M restantes. EAC final = 1,5M + 2,0M = 3,5 Millones.",
            },
          },
          {
            id: "opt-evm-1-b",
            text: {
              "pt-BR": "O custo final será exatamente os R$ 2,4 milhões contratados, porque o cliente sempre cobre qualquer despesa extra sem questionar.",
              "en": "Final cost will stay at R$ 2.4M because clients cover all extra costs automatically.",
              "es": "El costo final será de R$ 2,4M porque el cliente siempre paga los adicionales sin objetar.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Clientes industriais só remuneram serviços comprovados formalmente por aditivos e glosas são imediatas se houver ineficiência da contratada.",
              "en": "Incorrect. Industrial clients penalize delays and reject unapproved overspending.",
              "es": "Incorrecto. Los clientes aplican penalizaciones por retrasos no justificados.",
            },
          },
          {
            id: "opt-evm-1-c",
            text: {
              "pt-BR": "A obra vai custar apenas R$ 1,8 milhão, gerando R$ 600 mil de economia para a empresa.",
              "en": "Project will cost only R$ 1.8M, yielding R$ 600k savings.",
              "es": "La obra costará solo R$ 1,8M generando ahorro.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A obra está gastando mais do que produz e atrasada no tempo; é impossível gerar economia com esses números.",
              "en": "Incorrect. Overspending and delays can never generate cost savings.",
              "es": "Incorrecto. Con sobrecosto y atraso simultáneo es imposible tener ahorro.",
            },
          },
          {
            id: "opt-evm-1-d",
            text: {
              "pt-BR": "O cálculo de Valor Agregado só pode ser feito depois que o projeto estiver 100% acabado e faturado.",
              "en": "Earned Value can only be calculated after the contract is 100% finished.",
              "es": "El Valor Ganado solo se calcula cuando la obra está terminada.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A utilidade central do EVM é justamente alertar durante o andamento da obra, permitindo salvar o contrato antes do desastre.",
              "en": "Incorrect. EVM's core power is early mid-flight intervention before failure occurs.",
              "es": "Incorrecto. El propósito del EVM es alertar a tiempo durante la ejecución.",
            },
          },
        ],
        relatedCourse: {
          courseId: "c-gestao-de-projetos",
          courseName: {
            "pt-BR": "Gestão de Projetos Industriais e Paradas de Fábrica",
            "en": "Industrial Project Management & Plant Shutdowns",
            "es": "Gestión de Proyectos Industriales y Paradas de Planta",
          },
          whyStudy: {
            "pt-BR": "No Módulo 5 ensinamos a montar a Curva S, calcular o EVM na prática e defender pleitos e aditivos contratuais com segurança.",
            "en": "Module 5 teaches S-Curve tracking, EVM math, and contractual variation governance.",
            "es": "Aprende a construir la Curva S y negociar aditivos de obra con respaldo numérico.",
          },
        },
      },
    ],
  },
];
