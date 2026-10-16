import { ModuleDemonstration, CurriculumExamItem } from "@/types";

export const PILOT_5S_MODULES: ModuleDemonstration[] = [
  {
    id: "mod-5s-1",
    order: 1,
    title: {
      "pt-BR": "Módulo 1 — Fundamentos do 5S",
      "en": "Module 1 — 5S Fundamentals",
      "es": "Módulo 1 — Fundamentos de 5S",
    },
    description: {
      "pt-BR": "Conceitos estruturais, propósito da metodologia e elaboração de diagnóstico inicial do ambiente de trabalho.",
      "en": "Core principles, methodology purpose, and workplace baseline diagnosis.",
      "es": "Principios fundamentales, propósito y diagnóstico inicial del lugar de trabajo.",
    },
    lessons: [
      {
        id: "les-5s-1-1",
        order: 1,
        title: {
          "pt-BR": "Aula 1.1: O que é 5S e por que ele importa",
          "en": "Lesson 1.1: What is 5S and Why It Matters",
          "es": "Lección 1.1: Qué es 5S y por qué es importante",
        },
        durationMinutes: 25,
        contentType: "text",
        contentDetail: {
          objective: {
            "pt-BR": "Compreender a origem, a finalidade e o impacto direto do 5S na produtividade, na prevenção de acidentes e na redução de desperdícios em ambientes industriais.",
            "en": "Understand the origin, purpose, and direct impact of 5S on productivity, incident prevention, and waste reduction in industrial environments.",
            "es": "Comprender el origen, propósito e impacto de las 5S en la productividad y la prevención de desperdicios en entornos industriales.",
          },
          introduction: {
            "pt-BR": "Em oficinas mecânicas, canteiros de montagem e frentes de manutenção industrial, a desorganização raramente é apenas um problema estético. Ferramentas espalhadas, peças sem identificação e acúmulo de sucatas geram atrasos diários, retrabalho e riscos reais de tropeços e quedas. O programa 5S surgiu no Japão pós-guerra como uma base de disciplina operacional do Sistema Toyota de Produção, transformando a rotina fabril através de cinco sensos interdependentes.",
            "en": "In mechanical workshops, assembly yards, and maintenance fronts, clutter is rarely just aesthetic. Misplaced tools and untagged parts cause daily delays, rework, and tripping hazards.",
            "es": "En talleres y canteiros industriales, el desorden provoca demoras, retrabajos y riesgos de accidentes laborales.",
          },
          visualAsset: {
            id: "va-cycle-5s",
            type: "diagram",
            title: {
              "pt-BR": "Diagrama do Ciclo Contínuo dos Cinco Sensos (5S)",
              "en": "5S Continuous Cycle Diagram",
              "es": "Diagrama del Ciclo Continuo de las 5S",
            },
            caption: {
              "pt-BR": "Sequência lógica e interdependente dos cinco sensos para sustentar a organização e segurança no canteiro.",
              "en": "Interdependent cycle of the 5 pillars sustaining site organization and safety.",
              "es": "Secuencia interdependiente de los cinco sensos para sostener el orden.",
            },
            alt: {
              "pt-BR": "Diagrama circular conectando Seiri, Seiton, Seiso, Seiketsu e Shitsuke ao redor da eficiência e segurança industrial.",
              "en": "Circular diagram connecting Sort, Set in Order, Shine, Standardize, and Sustain around efficiency and safety.",
              "es": "Diagrama circular conectando los cinco sensos alrededor de la eficiencia y seguridad.",
            },
            componentKey: "diag-cycle-5s",
          },
          sections: [
            {
              title: {
                "pt-BR": "Os Cinco Sensos: Uma Cadeia Integrada",
                "en": "The Five Pillars: An Integrated Chain",
                "es": "Los Cinco Sentidos: Una Cadena Integrada",
              },
              body: {
                "pt-BR": "O 5S baseia-se em cinco palavras japonesas que representam atitudes práticas: Seiri (Utilização — separar o útil do inútil), Seiton (Ordenação — um lugar para cada coisa), Seiso (Limpeza — limpar como forma de inspeção), Seiketsu (Padronização — criar referências visuais claras) e Shitsuke (Disciplina — manter os hábitos e o compromisso coletivo). Nenhum senso funciona de forma isolada: organizar o que é inútil é perda de tempo, e limpar sem padronizar gera desgaste contínuo.",
                "en": "5S relies on five principles: Seiri (Sort), Seiton (Set in order), Seiso (Shine), Seiketsu (Standardize), and Shitsuke (Sustain). They operate as a linked sequence.",
                "es": "Las 5S se fundamentan en cinco actitudes prácticas interdependientes que deben implementarse en secuencia lógica.",
              },
            },
            {
              title: {
                "pt-BR": "A Relação Direta com a Segurança e a Qualidade",
                "en": "Direct Link to Safety and Operational Quality",
                "es": "Relación Directa con la Seguridad y Calidad Operativa",
              },
              body: {
                "pt-BR": "Em plantas de alta complexidade, um chão de oficina engordurado ou cabos elétricos estendidos pelo piso representam condições inseguras críticas. Quando aplicamos o 5S, não estamos apenas 'arrumando'; estamos eliminando causas fundamentais de incidentes, diminuindo o tempo de resposta nas paradas de manutenção e garantindo que instrumentos de medição calibrados não sejam danificados por contaminação externa.",
                "en": "In complex industrial plants, oily floors and cables across walkways represent serious hazards. 5S eliminates root causes of workplace incidents.",
                "es": "En plantas industriales, pisos aceitosos o cables sueltos son condiciones inseguras que las 5S eliminan de raíz.",
              },
            },
          ],
          practicalExample: {
            title: {
              "pt-BR": "Exemplo Fictício: A Oficina Mecânica Central",
              "en": "Fictitious Example: Central Mechanical Workshop",
              "es": "Ejemplo Ficticio: Taller Mecánico Central",
            },
            scenario: {
              "pt-BR": "Na bancada de manutenção de bombas centrífugas da Oficina Central, os mecânicos gastavam em média 22 minutos por turno procurando chaves combinadas de 19mm e soquetes específicos, pois ferramentas de três turnos diferentes eram misturadas em caixas metálicas sem divisórias.",
              "en": "In a pump repair shop, mechanics spent 22 minutes per shift looking for 19mm wrenches because three shifts shared unsorted toolboxes.",
              "es": "En un taller de bombas, los mecánicos perdían 22 minutos por turno buscando llaves combinadas mezcladas en cajas sin divisiones.",
            },
            analysis: {
              "pt-BR": "O problema não era falta de ferramentas, mas ausência de ordenação (Seiton) e excesso de itens desgastados misturados aos bons (falta de Seiri). Ao aplicar os dois primeiros sensos, o tempo de busca caiu para menos de 30 segundos com painel sombreado.",
              "en": "The issue was lack of sorting and organization. Implementing Seiri and Seiton dropped retrieval time to under 30 seconds using a shadow board.",
              "es": "Al aplicar Seiri y Seiton con tableros de herramientas rotulados, el tiempo de búsqueda se redujo a menos de 30 segundos.",
            },
          },
          commonMistakes: [
            {
              "pt-BR": "Confundir 5S com um 'mutirão de faxina' esporádico antes de auditorias ou visitas da gerência.",
              "en": "Mistaking 5S for an occasional deep clean before audits.",
              "es": "Confundir 5S con una jornada puntual de limpieza antes de auditorías.",
            },
            {
              "pt-BR": "Acreditar que o 5S é responsabilidade exclusiva da equipe de limpeza predial e não dos operadores e técnicos.",
              "en": "Assuming 5S belongs to janitorial staff rather than technicians and operators.",
              "es": "Creer que las 5S son tarea exclusiva del personal de aseo y no de los técnicos.",
            },
            {
              "pt-BR": "Tentar implantar padronização visual pesada antes de realizar o descarte rigoroso do que não tem utilidade.",
              "en": "Labeling and organizing items before discarding obsolete tools and materials.",
              "es": "Rotular y ordenar herramientas antes de descartar lo que está roto o sin uso.",
            },
          ],
          table: {
            headers: [
              { "pt-BR": "Senso Japonês", "en": "Japanese Term", "es": "Término" },
              { "pt-BR": "Conceito em Português", "en": "English Pillar", "es": "Significado" },
              { "pt-BR": "Ação Principal na Oficina / Canteiro", "en": "Field Action", "es": "Acción Clave" },
            ],
            rows: [
              [
                { "pt-BR": "Seiri", "en": "Sort", "es": "Seiri" },
                { "pt-BR": "Senso de Utilização", "en": "Utilization / Sorting", "es": "Utilización / Descarte" },
                { "pt-BR": "Separar o que é usado diariamente do que é desnecessário ou sucata.", "en": "Separate daily-use tools from scrap.", "es": "Separar lo necesario de lo innecesario." },
              ],
              [
                { "pt-BR": "Seiton", "en": "Set in Order", "es": "Seiton" },
                { "pt-BR": "Senso de Ordenação", "en": "Systematic Arrangement", "es": "Orden" },
                { "pt-BR": "Definir um local identificado e de fácil acesso para cada ferramenta.", "en": "Establish identified places for each tool.", "es": "Un lugar para cada cosa y cada cosa en su lugar." },
              ],
              [
                { "pt-BR": "Seiso", "en": "Shine", "es": "Seiso" },
                { "pt-BR": "Senso de Limpeza", "en": "Cleaning with Inspection", "es": "Limpieza e Inspección" },
                { "pt-BR": "Limpar equipamentos inspecionando vazamentos, folgas e trincas.", "en": "Clean to inspect wear and leaks.", "es": "Limpiar inspeccionando anomalías y desgastes." },
              ],
              [
                { "pt-BR": "Seiketsu", "en": "Standardize", "es": "Seiketsu" },
                { "pt-BR": "Senso de Padronização", "en": "Visual Standards", "es": "Estandarización" },
                { "pt-BR": "Estabelecer demarcações de solo, cores de sinalização e checklists.", "en": "Floor tape, standard colors, checklists.", "es": "Demarcaciones de piso, checklists y normas claras." },
              ],
              [
                { "pt-BR": "Shitsuke", "en": "Sustain", "es": "Shitsuke" },
                { "pt-BR": "Senso de Disciplina", "en": "Self-Discipline & Habit", "es": "Disciplina" },
                { "pt-BR": "Cumprir as regras estabelecidas como rotina diária de toda a equipe.", "en": "Adhere to standards consistently.", "es": "Hacer de la organización un hábito continuo." },
              ],
            ],
          },
          summaryPoints: [
            {
              "pt-BR": "O 5S não é faxina; é um sistema estruturado de produtividade, segurança e previsibilidade operacional.",
              "en": "5S is a systematic approach to workplace safety, predictability, and efficiency.",
              "es": "5S es un sistema estructurado de productividad, orden y seguridad industrial.",
            },
            {
              "pt-BR": "A sequência lógica (Seiri → Seiton → Seiso → Seiketsu → Shitsuke) deve ser rigorosamente respeitada.",
              "en": "The sequence must be followed: you cannot organize what you have not yet sorted.",
              "es": "La secuencia debe respetarse: no se puede organizar lo que no ha sido depurado.",
            },
          ],
          reflectionQuestions: [
            {
              "pt-BR": "1. No seu posto de trabalho ou oficina atual, quanto tempo você ou seus colegas gastam diariamente procurando materiais ou ferramentas?",
              "en": "1. In your current workspace, how much time is lost daily searching for tools?",
              "es": "1. ¿Cuánto tiempo se pierde al día en su área buscando herramientas?",
            },
            {
              "pt-BR": "2. Você já presenciou algum quase-acidente provocado por materiais deixados em rotas de fuga ou no chão da oficina?",
              "en": "2. Have you witnessed any near-miss caused by clutter in walkways?",
              "es": "2. ¿Ha presenciado algún incidente causado por materiales fuera de lugar?",
            },
          ],
        },
      },
      {
        id: "les-5s-1-2",
        order: 2,
        title: {
          "pt-BR": "Aula 1.2: Diagnóstico do ambiente de trabalho",
          "en": "Lesson 1.2: Workplace Baseline Diagnosis",
          "es": "Lección 1.2: Diagnóstico del ambiente de trabajo",
        },
        durationMinutes: 25,
        contentType: "text",
        contentDetail: {
          objective: {
            "pt-BR": "Capacitar o aluno a realizar um diagnóstico visual crítico em canteiros e oficinas, distinguindo sintomas superficiais de causas raiz de desorganização.",
            "en": "Enable students to conduct an objective workplace assessment, distinguishing symptoms from root causes of disorder.",
            "es": "Capacitar al colaborador para diagnosticar desvíos visuales y causas de desorden en su sector.",
          },
          introduction: {
            "pt-BR": "Antes de movimentar um único objeto ou comprar organizadores, qualquer iniciativa séria de 5S exige um diagnóstico inicial sincero. Quando entramos em um ambiente habituado à desordem, desenvolvemos 'cegueira de rotina' — deixamos de enxergar sobras de solda no piso, tambores vencidos acumulados atrás da bancada ou cabos danificados pendurados.",
            "en": "Before moving tools or painting lines, 5S requires an honest baseline diagnosis. Routine blindness often hides obvious hazards.",
            "es": "Antes de reorganizar, se requiere un diagnóstico objetivo para vencer la ceguera de taller y registrar desvíos reales.",
          },
          sections: [
            {
              title: {
                "pt-BR": "O Conceito de 'Cegueira de Rotina'",
                "en": "Overcoming Routine Blindness",
                "es": "Superar la Ceguera de Taller",
              },
              body: {
                "pt-BR": "A cegueira de rotina ocorre quando um desvio se torna tão frequente que passa a ser aceito como 'normal'. Por exemplo: um balde sob uma conexão hidráulica que vaza há semanas passa a ser visto como parte do equipamento, em vez de ser tratado como uma anomalia grave. O diagnóstico 5S busca resgatar o olhar crítico, questionando o porquê de cada item estar naquele estado.",
                "en": "Routine blindness happens when anomalies become normalized. A drip bucket under a pipe shouldn't be accepted as normal operations.",
                "es": "Ocurre cuando una anomalía se tolera tanto que se vuelve parte del paisaje, en vez de corregirse.",
              },
            },
            {
              title: {
                "pt-BR": "Diferenciando Sintoma de Causa Raiz",
                "en": "Differentiating Symptom from Root Cause",
                "es": "Diferenciar Síntoma de Causa Raíz",
              },
              body: {
                "pt-BR": "Se uma bancada de ferramentas amanhece todos os dias cheia de panos sujos de óleo, recolher os panos resolve apenas o sintoma. A causa raiz pode ser a ausência de uma lixeira para resíduos contaminados próxima ao posto, falta de procedimento claro no fechamento de turno ou vazamento não sanado na morsa hidráulica.",
                "en": "Sweeping oily rags every morning solves the symptom. The root cause may be missing hazardous waste bins or hydraulic leaks.",
                "es": "Limpiar trapos sucios a diario resuelve el síntoma; la causa raíz puede ser la falta de un contenedor adecuado cerca.",
              },
            },
          ],
          checklist: {
            title: {
              "pt-BR": "Checklist Demonstrativo de Diagnóstico Inicial 5S",
              "en": "5S Baseline Diagnosis Checklist",
              "es": "Lista de Verificación de Diagnóstico 5S",
            },
            items: [
              {
                id: "chk-diag-1",
                label: {
                  "pt-BR": "Desobstrução de Passagens e Extintores",
                  "en": "Clear Walkways and Fire Extinguishers",
                  "es": "Pasillos y Extintores Despejados",
                },
                criterion: {
                  "pt-BR": "As rotas de pedestres, saídas de emergência e acesso a extintores estão 100% livres de caixas, peças e tambores?",
                  "en": "Are emergency exits and extinguishers free of obstacles?",
                  "es": "¿Las salidas de emergencia y extintores están libres de obstáculos?",
                },
              },
              {
                id: "chk-diag-2",
                label: {
                  "pt-BR": "Presença de Ferramentas Danificadas",
                  "en": "Presence of Damaged Tools",
                  "es": "Herramientas en Mal Estado",
                },
                criterion: {
                  "pt-BR": "Existem chaves com bocas alargadas, marretas com cabos frouxos ou extensões com isolamento rompido guardadas com as boas?",
                  "en": "Are damaged wrenches or cracked cords mixed with operational gear?",
                  "es": "¿Hay herramientas rotas o cables pelados mezclados con los útiles?",
                },
              },
              {
                id: "chk-diag-3",
                label: {
                  "pt-BR": "Identificação de Produtos Químicos e Lubrificantes",
                  "en": "Chemicals and Lubricants Labeling",
                  "es": "Identificación de Químicos y Lubricantes",
                },
                criterion: {
                  "pt-BR": "Todos os frascos, almotolias e galões possuem rótulo legível com nome do produto e data de fracionamento?",
                  "en": "Do all chemical containers have clear legible secondary labels?",
                  "es": "¿Todos los envases tienen rótulo legible con el nombre del producto?",
                },
              },
              {
                id: "chk-diag-4",
                label: {
                  "pt-BR": "Estado de Conservação das Bancadas",
                  "en": "Workbench Cleanliness and Surface",
                  "es": "Estado de las Mesas de Trabajo",
                },
                criterion: {
                  "pt-BR": "As superfícies de trabalho estão limpas e livres de peças de serviços já encerrados ou sem identificação de cliente/OS?",
                  "en": "Are benches free of abandoned work orders and scrap?",
                  "es": "¿Las mesas de trabajo están despejadas de órdenes concluidas?",
                },
              },
            ],
          },
          summaryPoints: [
            {
              "pt-BR": "O diagnóstico não deve ser punitivo; seu objetivo é mapear oportunidades de melhoria e envolver os operadores.",
              "en": "Diagnosis is not punitive; it identifies systemic opportunities and engages technicians.",
              "es": "El diagnóstico no es punitivo; sirve para identificar mejoras con el equipo.",
            },
            {
              "pt-BR": "Registrar fotos 'antes' é a forma mais eficaz de mensurar a evolução futura do programa.",
              "en": "Before-and-after photos are the most compelling proof of 5S progress.",
              "es": "Las fotografías del 'antes' permiten evidenciar los avances reales logrados.",
            },
          ],
          reflectionQuestions: [
            {
              "pt-BR": "1. Se um auditor externo ou um cliente entrasse na sua oficina agora, qual seria a primeira impressão sobre a organização?",
              "en": "1. If an external client walked into your workshop right now, what would their impression be?",
              "es": "1. Si un cliente entrara hoy a su taller, ¿qué impresión causaría el orden general?",
            },
            {
              "pt-BR": "2. Quais itens acumulados há mais de seis meses na sua bancada poderiam ser retirados imediatamente?",
              "en": "2. What items sitting on your bench for 6+ months can be safely relocated or discarded?",
              "es": "2. ¿Qué objetos guardados desde hace meses podrían retirarse hoy mismo?",
            },
          ],
        },
      },
    ],
  },
  {
    id: "mod-5s-2",
    order: 2,
    title: {
      "pt-BR": "Módulo 2 — Seiri: Senso de Utilização",
      "en": "Module 2 — Seiri: Sort Pillar",
      "es": "Módulo 2 — Seiri: Sentido de Utilización",
    },
    description: {
      "pt-BR": "Separação sistemática entre o útil e o inútil, critérios de frequência de uso e regras de descarte responsável.",
      "en": "Systematic sorting between necessary and unnecessary items, usage frequency, and tagging.",
      "es": "Criterios para separar lo necesario de lo innecesario y reglas de descarte responsable.",
    },
    lessons: [
      {
        id: "les-5s-2-1",
        order: 1,
        title: {
          "pt-BR": "Aula 2.1: Separar o necessário do desnecessário",
          "en": "Lesson 2.1: Sorting Necessary from Unnecessary",
          "es": "Lección 2.1: Separar lo necesario de lo innecesario",
        },
        durationMinutes: 25,
        contentType: "text",
        contentDetail: {
          objective: {
            "pt-BR": "Aprender a aplicar a matriz de frequência de uso para classificar itens de trabalho e utilizar a técnica das etiquetas de identificação.",
            "en": "Apply the usage frequency matrix and red-tagging method to industrial workplaces.",
            "es": "Aprender a clasificar materiales por frecuencia de uso y aplicar tarjetas de descarte.",
          },
          introduction: {
            "pt-BR": "O Seiri é o alicerce de todo o 5S. A tendência humana natural em ambientes de manutenção é guardar materiais sob a justificativa: 'talvez um dia a gente precise'. Com o tempo, canteiros e oficinas ficam abarrotados de retalhos de chapa, parafusos espanados, eletrodos abertos e peças substituídas, ocupando espaço valioso e gerando perigo de tropeço.",
            "en": "Seiri is the foundation of 5S. In maintenance, the tendency to hoard 'just in case' clutters workspaces with scrap and obsolete parts.",
            "es": "Seiri combate la tendencia a acumular repuestos rotos o materiales 'por si acaso'.",
          },
          visualAsset: {
            id: "va-frequency-matrix",
            type: "schematic",
            title: {
              "pt-BR": "Matriz de Frequência de Uso e Destinação (Seiri)",
              "en": "Usage Frequency & Routing Matrix",
              "es": "Matriz de Frecuencia de Uso y Destino",
            },
            caption: {
              "pt-BR": "Critérios objetivos de triagem: o que fica no cinto, o que vai para o armário e o que entra em quarentena de descarte.",
              "en": "Objective sorting rules: what stays on the belt, in cabinets, or goes to quarantine.",
              "es": "Criterios objetivos de clasificación según la frecuencia de uso.",
            },
            alt: {
              "pt-BR": "Matriz de 3 níveis classificando itens de uso diário, mensal e obsoletos com mais de 6 meses sem uso.",
              "en": "3-tier matrix classifying daily, monthly, and obsolete tools.",
              "es": "Matriz de clasificación en 3 niveles de frecuencia de uso.",
            },
            componentKey: "diag-frequency-matrix",
          },
          sections: [
            {
              title: {
                "pt-BR": "A Matriz de Frequência de Uso",
                "en": "Usage Frequency Matrix",
                "es": "Matriz de Frecuencia de Uso",
              },
              body: {
                "pt-BR": "Para não errar na separação, os itens devem ser divididos em três faixas de utilização: (1) Uso constante (várias vezes ao dia ou na semana): devem ficar ao alcance das mãos, na bancada ou no cinto de ferramentas; (2) Uso periódico (uma ou duas vezes por mês): devem ficar guardados em armários da oficina ou almoxarifado local; (3) Uso raro ou nulo (mais de seis meses sem movimentação): devem ser avaliados para devolução ao estoque central, recondicionamento ou descarte.",
                "en": "Items fall into 3 zones: daily tools stay at arm's reach; monthly tools stay in local cabinets; rare tools return to central stores or scrap.",
                "es": "Herramientas de uso diario van en el puesto de trabajo; de uso mensual en armarios; sin uso van al almacén central o descarte.",
              },
            },
            {
              title: {
                "pt-BR": "A Metodologia da 'Área de Quarentena' (Etiquetas de Descarte)",
                "en": "The Red Tag Quarantine Method",
                "es": "Área de Cuarentena y Tarjetas de Identificación",
              },
              body: {
                "pt-BR": "Quando a equipe tem dúvida se uma peça sobressalente ou gabarito ainda tem serventia, não se deve descartar precipitadamente nem deixar na bancada. O item recebe uma etiqueta de identificação com data e é transferido para a Área de Quarentena do canteiro. Se em 30 ou 60 dias o item não for requisitado com justificativa técnica formal, a chefia autoriza o destino definitivo.",
                "en": "When utility is uncertain, tag the item and move it to a 30-day quarantine holding area before final disposal authorization.",
                "es": "Los elementos dudosos van a un área de cuarentena con fecha antes de decidir su destino final.",
              },
            },
          ],
          practicalExample: {
            title: {
              "pt-BR": "Exemplo Fictício: Sobras de Tubulações no Canteiro de Caldeiraria",
              "en": "Fictitious Example: Piping Offcuts in Boiler Yard",
              "es": "Ejemplo Ficticio: Retazos de Tubería en Taller de Calderería",
            },
            scenario: {
              "pt-BR": "Um canteiro de caldeiraria acumulava mais de 40 pedaços de tubo de aço carbono de 4 polegadas sob a bancada de corte. Nenhum colaborador sabia de qual obra sobraram nem se possuíam certificado de matéria-prima rastreável.",
              "en": "A boilermaker bay hoarded 40 cut pipe segments of uncertain steel grade under the cutting table.",
              "es": "Un canteiro acumulaba 40 retazos de cañerías sin certificado de trazabilidad bajo la mesa de oxicorte.",
            },
            analysis: {
              "pt-BR": "Na indústria de alta criticidade (como papel e celulose ou petroquímica), tubos sem rastreabilidade não podem ser instalados sob pressão. Guardá-los gerava falsa impressão de estoque e risco de uso indevido. Foram identificados, encaminhados para a baia de sucata metálica e o espaço foi liberado para carrinhos de transporte.",
              "en": "Uncertified pipe cannot be used in pressure systems. They were properly disposed of as scrap metal, clearing crucial floor space.",
              "es": "Los caños sin trazabilidad fueron dados de baja como chatarra, despejando espacio de tránsito.",
            },
          },
          commonMistakes: [
            {
              "pt-BR": "Descartar ferramentas especiais, instrumentos calibrados ou EPIs sem consultar o supervisor e o almoxarifado.",
              "en": "Discarding specialty tools, calibrated gauges, or PPE without formal approval.",
              "es": "Descartar herramientas calibradas o EPPs sin autorización del supervisor.",
            },
            {
              "pt-BR": "Considerar parafusos oxidados ou tortos como 'material de reserva'.",
              "en": "Treating stripped or rusted bolts as usable spare inventory.",
              "es": "Guardar tornillos gastados u oxidados como 'repuesto de emergencia'.",
            },
          ],
          summaryPoints: [
            {
              "pt-BR": "Seiri significa manter no local de trabalho apenas o que é estritamente necessário para as tarefas do período.",
              "en": "Seiri means keeping only what is strictly necessary for current scheduled tasks.",
              "es": "Seiri es conservar únicamente lo indispensable para el trabajo en curso.",
            },
            {
              "pt-BR": "A área de quarentena resolve o medo de descarte sem comprometer a organização da área produtiva.",
              "en": "Quarantine areas resolve disposal hesitation safely without clogging production floors.",
              "es": "El área de cuarentena evita descartes apresurados sin comprometer el orden del taller.",
            },
          ],
          reflectionQuestions: [
            {
              "pt-BR": "1. Quantos itens na sua caixa de ferramentas não foram usados nenhuma vez nos últimos 90 dias?",
              "en": "1. How many tools in your box haven't been touched in the last 90 days?",
              "es": "1. ¿Cuántas herramientas de su caja no han sido utilizadas en los últimos tres meses?",
            },
          ],
        },
      },
      {
        id: "les-5s-2-2",
        order: 2,
        title: {
          "pt-BR": "Aula 2.2: Aplicação do Seiri em oficinas e canteiros",
          "en": "Lesson 2.2: Field Application of Seiri in Industrial Sites",
          "es": "Lección 2.2: Aplicación de Seiri en talleres y canteiros",
        },
        durationMinutes: 25,
        contentType: "text",
        contentDetail: {
          objective: {
            "pt-BR": "Compreender os protocolos de descarte em ambientes industriais, respeitando limites operacionais, meio ambiente e segurança.",
            "en": "Master industrial disposal protocols, complying with safety, environmental standards, and custody chains.",
            "es": "Conocer los protocolos de desecho y segregación segura de residuos en canteiros industriales.",
          },
          introduction: {
            "pt-BR": "Aplicar o Seiri em uma indústria não é simplesmente jogar coisas em uma caçamba comum. Em canteiros que operam dentro de clientes industriais (como plantas de celulose da CMPC), o descarte incorreto de um filtro de óleo, de uma lata de solvente ou de uma peça com amianto pode gerar crime ambiental, multas pesadas e interdições operacionais.",
            "en": "Applying Seiri in an industrial plant is not tossing items into random bins. Strict environmental protocols apply.",
            "es": "El descarte industrial requiere segregación correcta para evitar pasivos ambientales y riesgos químicos.",
          },
          sections: [
            {
              title: {
                "pt-BR": "Classificação e Destinação de Resíduos",
                "en": "Waste Classification and Proper Routing",
                "es": "Clasificación y Destino de Residuos",
              },
              body: {
                "pt-BR": "Durante a separação do Seiri, os itens descartados devem seguir os fluxos oficiais de resíduos da empresa: (1) Sucata metálica limpa (ferro, inox, cobre); (2) Resíduos perigosos contaminados (panos com graxa, embalagens de tinta, EPIs sujos de óleo); (3) Madeira e paletes; (4) Resíduos comuns recicláveis e não recicláveis. Nunca misture resíduo contaminado com sucata limpa.",
                "en": "Segregate metal scrap, hazardous oily waste, wood pallets, and general recyclables strictly according to site rules.",
                "es": "Segregar chatarra metálica, residuos peligrosos con hidrocarburos y maderas en sus contenedores específicos.",
              },
            },
            {
              title: {
                "pt-BR": "O Cuidado com Documentos Técnicos e Calibração",
                "en": "Safeguarding Technical Manuals and Calibration Certs",
                "es": "Cuidado con Manuales y Certificados de Calibración",
              },
              body: {
                "pt-BR": "Outro erro comum no Seiri é jogar fora manuais de bombas antigas, certificados de calibração de torquímetros ou fichas de segurança (FISPQ) achando que são 'papel velho'. Documentação técnica de equipamentos industriais é patrimônio da operação e deve ser arquivada na pasta digital ou física do departamento técnico.",
                "en": "Never discard torque wrench calibration certificates or equipment manuals during 5S cleanouts.",
                "es": "Nunca desechar certificados de calibración o manuales de equipos durante jornadas 5S.",
              },
            },
          ],
          practicalExample: {
            title: {
              "pt-BR": "Estudo de Caso Fictício: O Tambor de Solvente Vencido",
              "en": "Case Study: Expired Solvent Drum in Paint Shop",
              "es": "Estudio de Caso: Tambor de Solvente Vencido en Taller de Pintura",
            },
            scenario: {
              "pt-BR": "Na oficina de pintura industrial da RSS3, durante o Seiri, a equipe encontrou três latas de primer epóxi vencidas há 14 meses e um tambor de 200L com resíduos desconhecidos de solvente.",
              "en": "During Seiri in an industrial coating shop, technicians uncovered 3 expired epoxy cans and an unlabelled 200L solvent drum.",
              "es": "Durante Seiri en el taller de pintura, se encontraron latas de epoxi vencidas y un tambor sin rotular.",
            },
            analysis: {
              "pt-BR": "O pintor novato queria despejar o solvente no ralo de drenagem de água pluvial. O líder de equipe interveio imediatamente: produtos químicos vencidos devem ser lacrados, identificados como resíduo Classe I e entregues ao setor de Meio Ambiente/SST para destinação via coprocessamento ou incineração autorizada.",
              "en": "Technicians were instructed never to dump solvents. Hazardous chemicals require Class I labeling and licensed waste manifests.",
              "es": "Se intervino para rotular el tambor como residuo peligroso Clase I y gestionarlo con el área de Medio Ambiente.",
            },
          },
          summaryPoints: [
            {
              "pt-BR": "Seiri requer responsabilidade ambiental: descartar significa destinar cada material ao seu fluxo regulamentar correto.",
              "en": "Seiri requires strict environmental compliance and proper chain of custody.",
              "es": "Seiri requiere responsabilidad ambiental: cada residuo debe ir a su contenedor específico.",
            },
          ],
          reflectionQuestions: [
            {
              "pt-BR": "1. Você sabe onde fica o tambor de descarte de resíduos oleosos e trapos contaminados na sua frente de serviço?",
              "en": "1. Do you know where the oily rag disposal bin is located in your work area?",
              "es": "1. ¿Sabe con certeza dónde se desechan los trapos con hidrocarburos en su frente de trabajo?",
            },
          ],
        },
      },
    ],
  },
  {
    id: "mod-5s-3",
    order: 3,
    title: {
      "pt-BR": "Módulo 3 — Seiton: Senso de Ordenação",
      "en": "Module 3 — Seiton: Set in Order",
      "es": "Módulo 3 — Seiton: Sentido de Orden",
    },
    description: {
      "pt-BR": "Localização lógica de ferramentas e materiais, organização visual, etiquetagem e redução do tempo de procura.",
      "en": "Logical tool placement, visual management, labeling, and search time reduction.",
      "es": "Ubicación lógica de materiales, gestión visual, rotulado y reducción de tiempos de búsqueda.",
    },
    lessons: [
      {
        id: "les-5s-3-1",
        order: 1,
        title: {
          "pt-BR": "Aula 3.1: Cada coisa em seu lugar",
          "en": "Lesson 3.1: A Place for Everything",
          "es": "Lección 3.1: Un lugar para cada cosa",
        },
        durationMinutes: 25,
        contentType: "text",
        contentDetail: {
          objective: {
            "pt-BR": "Aprender os princípios de ergonomia e fluxo de trabalho para posicionar ferramentas, instrumentos e consumíveis no posto de trabalho.",
            "en": "Master ergonomics and workflow principles for tool and consumable positioning.",
            "es": "Aprender principios de ergonomía y flujo de trabajo para ubicar herramientas en el taller.",
          },
          introduction: {
            "pt-BR": "Após eliminar o que é inútil pelo Seiri, o Seiton garante que o que restou tenha um endereço fixo, conhecido por todos e fácil de alcançar. Em uma oficina de manutenção pesada, o tempo que um mecânico passa caminhando até o outro lado do galpão para buscar um torquímetro ou um soquete é puro desperdício de tempo e energia física.",
            "en": "Once unneeded items are gone, Seiton assigns an exact, known home to every remaining tool, reducing walking fatigue.",
            "es": "Seiton define una ubicación fija y conocida para cada elemento útil, eliminando desplazamientos innecesarios.",
          },
          visualAsset: {
            id: "va-shadow-board",
            type: "schematic",
            title: {
              "pt-BR": "Painel de Ferramentas Sombreado (Shadow Board)",
              "en": "Visual Shadow Tool Board",
              "es": "Tablero de Herramientas con Siluetas",
            },
            caption: {
              "pt-BR": "Identificação visual imediata de ferramentas em uso e detecção de faltas em menos de 2 segundos.",
              "en": "Immediate visual detection of tools in use and missing items in under 2 seconds.",
              "es": "Detección visual inmediata de herramientas en uso y faltantes.",
            },
            alt: {
              "pt-BR": "Painel de ferramentas perfurado com silhuetas pintadas e aviso visual de marreta em uso.",
              "en": "Perforated tool board with painted silhouettes and visual indicator for tool in use.",
              "es": "Tablero de herramientas con siluetas y alerta de herramienta en uso.",
            },
            componentKey: "diag-shadow-board",
          },
          sections: [
            {
              title: {
                "pt-BR": "A Regra dos 30 Segundos",
                "en": "The 30-Second Rule",
                "es": "La Regla de los 30 Segundos",
              },
              body: {
                "pt-BR": "O padrão industrial do Seiton estabelece que qualquer colaborador treinado deve ser capaz de localizar e guardar qualquer ferramenta ou material em no máximo 30 segundos. Se alguém precisa abrir gavetas sem identificação, afastar caixas ou perguntar para outro colega onde está a chave allen de 8mm, o Seiton não foi concluído.",
                "en": "In a well-implemented Seiton workspace, any worker can locate and return any tool in under 30 seconds.",
                "es": "Cualquier operario debe ser capaz de ubicar y devolver una herramienta en menos de 30 segundos.",
              },
            },
            {
              title: {
                "pt-BR": "Ergonomia: Zonas de Alcance",
                "en": "Ergonomic Reach Zones",
                "es": "Ergonomía y Zonas de Alcance",
              },
              body: {
                "pt-BR": "Os itens devem ser distribuídos segundo a ergonomia física: (1) Zona de Ouro (entre a cintura e os ombros, sem flexão de coluna): ferramentas mais pesadas e de uso contínuo; (2) Zona Secundária (gavetas superiores ou prateleiras na altura dos olhos): itens de apoio e instrumentos de precisão em estojo; (3) Zona Inferior/Superior extrema: peças sobressalentes volumosas, sempre com auxílio de pegadores ou empilhadeiras para cargas acima de 20kg.",
                "en": "Heavy, daily-use tools belong in the primary reach zone (waist-to-chest) to prevent lumbar strain.",
                "es": "Herramientas pesadas y de uso continuo deben situarse a la altura de la cintura, protegiendo la columna.",
              },
            },
          ],
          practicalExample: {
            title: {
              "pt-BR": "Exemplo Fictício: Painel Sombreado de Ferramentas",
              "en": "Fictitious Example: Shadow Tool Board",
              "es": "Ejemplo Ficticio: Tablero Sombra de Herramientas",
            },
            scenario: {
              "pt-BR": "Na sala de montagem mecânica, as chaves de impacto e marretas ficavam amontoadas em um carrinho de madeira. No final do expediente, ninguém sabia se faltava alguma ferramenta na linha de produção da fábrica.",
              "en": "In a mechanical assembly bay, impact wrenches and dead-blow hammers were dumped into a wooden cart. Lost tools were common.",
              "es": "Herramientas de impacto quedaban amontonadas en un cajón de madera y a menudo se extraviaban.",
            },
            analysis: {
              "pt-BR": "A equipe construiu um painel sombreado em chapa perfurada, onde cada ferramenta tem sua silhueta pintada em preto sobre fundo amarelo com o código gravado. Em menos de 2 segundos, no encerramento do turno, o líder bate o olho e sabe se todas as 18 ferramentas estão no painel, evitando esquecê-las dentro de equipamentos industriais.",
              "en": "Technicians painted tool silhouettes on a pegboard. At shift turnover, an inspection takes 2 seconds to confirm all 18 tools are accounted for.",
              "es": "Se implementó un tablero sombra con siluetas amarillas. En 2 segundos se verifica si falta alguna herramienta.",
            },
          },
          summaryPoints: [
            {
              "pt-BR": "Seiton é organizar de forma funcional, e não apenas arrumar esteticamente.",
              "en": "Seiton is functional arrangement for safety and velocity, not merely decorative tidiness.",
              "es": "Seiton es orden funcional para mayor rapidez y seguridad, no solo estética.",
            },
          ],
          reflectionQuestions: [
            {
              "pt-BR": "1. Em uma emergência operacional para estancar um vazamento, você encontraria a chave certa em menos de 30 segundos?",
              "en": "1. In an emergency leak scenario, could you find the exact backup wrench in under 30 seconds?",
              "es": "1. En una emergencia técnica, ¿encontraría la herramienta adecuada en 30 segundos?",
            },
          ],
        },
      },
      {
        id: "les-5s-3-2",
        order: 2,
        title: {
          "pt-BR": "Aula 3.2: Organização visual e identificação",
          "en": "Lesson 3.2: Visual Management and Labeling",
          "es": "Lección 3.2: Gestión visual y rotulado industrial",
        },
        durationMinutes: 25,
        contentType: "text",
        contentDetail: {
          objective: {
            "pt-BR": "Dominar técnicas de demarcação de piso, rotulagem industrial, código de cores e gestão visual no chão de fábrica.",
            "en": "Apply industrial floor striping, color coding, and visual cues across workshops.",
            "es": "Aprender a demarcar pisos, rotular estanterías y aplicar gestión visual en el canteiro.",
          },
          introduction: {
            "pt-BR": "A gestão visual permite que o ambiente fale por si mesmo. Quando um canteiro possui identificação visual de alto nível, qualquer pessoa — do diretor da empresa ao terceirizado que começou hoje — consegue entender os fluxos de circulação, onde pegar peças e onde colocar os descartes sem precisar de treinamento prévio detalhado.",
            "en": "Visual management allows the shop floor to speak for itself through clear intuitive markings.",
            "es": "La gestión visual permite que el espacio comunique sus reglas de forma intuitiva e inmediata.",
          },
          visualAsset: {
            id: "va-floor-marking",
            type: "schematic",
            title: {
              "pt-BR": "Padrões Visuais de Demarcação de Solo",
              "en": "Industrial Floor Striping Standards",
              "es": "Estándares de Demarcación de Piso",
            },
            caption: {
              "pt-BR": "Convenções universais: amarelo para tráfego seguro, zebrado para áreas de risco e vermelho exclusivo para emergência.",
              "en": "Universal conventions: yellow for walkways, striped for hazard zones, red for fire fighting gear.",
              "es": "Convenciones universales de color para delimitar pasillos, prensas y extintores.",
            },
            alt: {
              "pt-BR": "Esquema visual demonstrando faixa amarela de pedestres, recuadro vermelho de extintores e zebrado amarelo e preto.",
              "en": "Schematic demonstrating yellow pedestrian lane, red extinguisher box, and hazard striping.",
              "es": "Esquema de señalización de piso con franjas amarillas, rojas y cebrado de advertencia.",
            },
            componentKey: "diag-floor-marking",
          },
          sections: [
            {
              title: {
                "pt-BR": "Padrões de Demarcação de Solo",
                "en": "Floor Striping Standards",
                "es": "Estándares de Demarcación de Piso",
              },
              body: {
                "pt-BR": "As demarcações de piso em oficinas industriais devem seguir convenções universais: (1) Linhas amarelas (largura 10cm): rotas de trânsito de pessoas e empilhadeiras; (2) Zebrado amarelo e preto: áreas de risco operacional (próximo a pontes rolantes, prensas ou degraus); (3) Linhas brancas: delimitação de vagas para carrinhos de ferramentas e bancadas móveis; (4) Vermelho: demarcação obrigatória de 1m x 1m em frente a extintores e hidrantes.",
                "en": "Yellow lines indicate walkways; yellow/black striping denotes pinch hazards; red marks mandatory fire extinguisher clearances.",
                "es": "Líneas amarillas delimitan pasillos; cebrado amarillo/negro indica riesgos; recuadros rojos zonas de extintores.",
              },
            },
            {
              title: {
                "pt-BR": "Endereçamento de Gavetas e Prateleiras",
                "en": "Drawer and Shelf Address Coding",
                "es": "Codificación y Rotulado de Estanterías",
              },
              body: {
                "pt-BR": "Toda caixa plástica de parafusos, conexões pneumáticas ou porcas deve conter uma etiqueta plastificada ou placa resistente a graxa indicando: (1) Descrição técnica completa (ex: 'Parafuso Sextavado M12 x 45mm Grau 8.8'); (2) Código de estoque; (3) Ponto mínimo de reposição.",
                "en": "Label bins with complete technical specifications, part numbers, and minimum reorder triggers.",
                "es": "Cada gaveta debe incluir medida técnica completa, código de inventario y punto de reposición.",
              },
            },
          ],
          table: {
            headers: [
              { "pt-BR": "Cor de Sinalização", "en": "Color", "es": "Color" },
              { "pt-BR": "Aplicação Típica na Oficina", "en": "Workshop Use", "es": "Aplicación" },
              { "pt-BR": "Exemplo Prático", "en": "Example", "es": "Ejemplo" },
            ],
            rows: [
              [
                { "pt-BR": "Amarelo Segurança", "en": "Safety Yellow", "es": "Amarillo" },
                { "pt-BR": "Corredores principais e áreas de circulação", "en": "Walkways and aisles", "es": "Pasillos peatonales y tránsito" },
                { "pt-BR": "Linha contínua delimitando passagem de pedestres.", "en": "Solid aisle border line.", "es": "Línea lateral de tránsito seguro." },
              ],
              [
                { "pt-BR": "Zebrado Amarelo/Preto", "en": "Yellow/Black Stripe", "es": "Cebrado Amarillo/Negro" },
                { "pt-BR": "Áreas de advertência e perigo permanente", "en": "Caution & hazard zones", "es": "Zonas de pellizco o riesgo mecánico" },
                { "pt-BR": "Piso ao redor da guilhotina hidráulica ou morsa.", "en": "Area surrounding hydraulic shear.", "es": "Perímetro de sierras y prensas." },
              ],
              [
                { "pt-BR": "Vermelho Segurança", "en": "Safety Red", "es": "Rojo" },
                { "pt-BR": "Equipamentos de combate a incêndio", "en": "Fire protection gear", "es": "Protección contra incendios" },
                { "pt-BR": "Quadrilátero de 1 metro livre sob o extintor PQS.", "en": "1m keep-clear box under extinguisher.", "es": "Área de 1m libre ante extintores." },
              ],
              [
                { "pt-BR": "Azul Segurança", "en": "Safety Blue", "es": "Azul" },
                { "pt-BR": "Aviso obrigatório de uso de EPI específico", "en": "Mandatory PPE notices", "es": "Uso obligatorio de EPP" },
                { "pt-BR": "Placas de 'Obrigatório Uso de Protetor Facial'.", "en": "Face shield required sign.", "es": "Cartel de protección facial obligatoria." },
              ],
            ],
          },
          summaryPoints: [
            {
              "pt-BR": "A organização visual elimina dúvidas imediatas e padroniza o comportamento operacional.",
              "en": "Visual standards remove ambiguity and anchor standard operating discipline.",
              "es": "La gestión visual elimina confusiones y refuerza la disciplina diaria del canteiro.",
            },
          ],
          reflectionQuestions: [
            {
              "pt-BR": "1. As gavetas e prateleiras da sua frente de trabalho possuem etiquetas legíveis ou as pessoas abrem uma por uma até achar a peça?",
              "en": "1. Are parts bins clearly labeled, or do mechanics guess and open drawer after drawer?",
              "es": "1. ¿Las gavetas de su sector están rotuladas o se abren una a una por descarte?",
            },
          ],
        },
      },
    ],
  },
  {
    id: "mod-5s-4",
    order: 4,
    title: {
      "pt-BR": "Módulo 4 — Seiso: Senso de Limpeza",
      "en": "Module 4 — Seiso: Shine Pillar",
      "es": "Módulo 4 — Seiso: Sentido de Limpieza",
    },
    description: {
      "pt-BR": "Limpeza como oportunidade de inspeção técnica, rotinas diárias e identificação precoce de falhas mecânicas.",
      "en": "Cleaning as an inspection discipline, daily routines, and early mechanical anomaly detection.",
      "es": "La limpieza como método de inspección técnica y detección precoz de fallas mecánicas.",
    },
    lessons: [
      {
        id: "les-5s-4-1",
        order: 1,
        title: {
          "pt-BR": "Aula 4.1: Limpeza como oportunidade de inspeção",
          "en": "Lesson 4.1: Cleaning to Inspect",
          "es": "Lección 4.1: Limpieza como método de inspección",
        },
        durationMinutes: 25,
        contentType: "text",
        contentDetail: {
          objective: {
            "pt-BR": "Entender que a limpeza no 5S é um ato de manutenção sensitiva para inspecionar componentes, detectar trincas e prevenir quebras inesperadas.",
            "en": "Understand that Seiso is a sensory inspection process that prevents mechanical breakdowns and leaks.",
            "es": "Comprender la limpieza como inspección sensitiva para detectar anomalías tempranas.",
          },
          introduction: {
            "pt-BR": "No 5S industrial, limpar não é apenas 'passar vassoura para ficar bonito'. Limpar significa examinar com os olhos, ouvidos e tato cada parte da máquina ou da bancada. Quando você remove a graxa acumulada no mancal de uma esteira ou no redutor de uma ponte rolante, suas mãos e olhos estão inspecionando se há parafusos soltos, trincas na carcaça ou superaquecimento.",
            "en": "In industrial 5S, cleaning is sensory inspection. Wiping grease reveals loose bolts, housing cracks, or abnormal heat.",
            "es": "Limpiar es inspeccionar: al retirar el polvo o grasa se revelan pernos flojos, fisuras o fugas incipientes.",
          },
          sections: [
            {
              title: {
                "pt-BR": "O Princípio: 'Não Limpar Mais, mas Sim Sujar Menos'",
                "en": "Principle: Don't Just Clean More, Make Less Mess",
                "es": "El Principio: No Limpiar Más, sino Ensuciar Menos",
              },
              body: {
                "pt-BR": "Se uma máquina espalha cavacos de usinagem pelo chão todo dia, a resposta do Seiso não é varrer dez vezes por dia. A verdadeira resposta é instalar uma proteção de acrílico ou calha coletora na fonte do cavaco. O foco do Seiso é eliminar as fontes de contaminação e sujeira, e não se transformar em escravo da vassoura.",
                "en": "The goal is attacking root sources of contamination (e.g. adding chips guards), rather than endless sweeping.",
                "es": "El objetivo de Seiso es eliminar las fuentes de suciedad en su origen con guardas y bandejas de contención.",
              },
            },
            {
              title: {
                "pt-BR": "Limites de Segurança: Quando Parar e Notificar",
                "en": "Safety Boundaries: When to Stop and Escalate",
                "es": "Límites de Seguridad: Cuándo Detenerse y Notificar",
              },
              body: {
                "pt-BR": "ATENÇÃO OPERACIONAL: A limpeza nunca deve ser executada com equipamentos ligados ou energizados sem prévio bloqueio LOTO (NR-10/NR-12). Se durante a limpeza for detectada fiação descascada, cheiro de queimado ou vazamento pressurizado, interrompa a atividade imediatamente, isole a área e acione a equipe elétrica ou de manutenção.",
                "en": "SAFETY RULE: Never clean energized equipment without verified LOTO. If fraying cables or pressure leaks are found, stop work immediately.",
                "es": "REGLA DE SEGURIDAD: Nunca limpiar equipos en movimiento o sin bloqueo LOTO verificado.",
              },
            },
          ],
          practicalExample: {
            title: {
              "pt-BR": "Exemplo Fictício: A Trinca Descoberta na Flange da Prensa",
              "en": "Fictitious Example: Crack Discovered on Press Flange",
              "es": "Ejemplo Ficticio: Fisura Detectada en Brida de Prensa",
            },
            scenario: {
              "pt-BR": "Durante a rotina de limpeza de 10 minutos ao final do turno, o operador de uma prensa hidráulica de 50 toneladas limpava o acúmulo de óleo e poeira da base do cilindro com um pano técnico apropriado.",
              "en": "During a 10-minute end-of-shift wipe down on a 50-ton hydraulic press, the operator noticed hairline cracks beneath caked grease.",
              "es": "Durante la limpieza de fin de turno en una prensa de 50 toneladas, el operador detectó fisuras bajo la grasa.",
            },
            analysis: {
              "pt-BR": "Ao remover a sujeira crostosa, o operador sentiu uma linha áspera e identificou uma microtrinca estrutural de 4cm na flange de fixação. A máquina foi bloqueada para ensaio não destrutivo. Se a prensa continuasse operando, a flange poderia se romper com força catastrófica no turno seguinte.",
              "en": "Catching the micro-crack during cleaning prevented catastrophic cylinder failure under load.",
              "es": "Detectar la microfisura evitó una fractura catastrófica del cilindro presurizado.",
            },
          },
          summaryPoints: [
            {
              "pt-BR": "Limpar é inspecionar. Quem limpa conhece a máquina melhor do que ninguém.",
              "en": "Cleaning is inspection. Operators who clean their machines spot trouble long before breakdowns occur.",
              "es": "Limpiar es inspeccionar. La limpieza sensitiva previene paradas de planta no planificadas.",
            },
          ],
          reflectionQuestions: [
            {
              "pt-BR": "1. Você já encontrou algum defeito mecânico (parafuso solto, mangueira ressecada) enquanto limpava uma ferramenta ou bancada?",
              "en": "1. Have you ever detected a loose bolt or cracked hose while cleaning equipment?",
              "es": "1. ¿Ha detectado alguna vez mangueras fisuradas o pernos flojos durante una limpieza?",
            },
          ],
        },
      },
      {
        id: "les-5s-4-2",
        order: 2,
        title: {
          "pt-BR": "Aula 4.2: Rotinas de conservação e identificação de anormalidades",
          "en": "Lesson 4.2: Routine Maintenance and Anomaly Tagging",
          "es": "Lección 4.2: Rutinas de conservación y reporte de anomalías",
        },
        durationMinutes: 25,
        contentType: "text",
        contentDetail: {
          objective: {
            "pt-BR": "Estruturar cartões de anormalidade e rotinas rápidas de 5 a 10 minutos para manter o ambiente sempre limpo e seguro.",
            "en": "Establish anomaly tagging cards and 5-to-10 minute daily cleaning rituals.",
            "es": "Implementar tarjetas de anomalía y rutinas de 5 a 10 minutos de conservación del puesto.",
          },
          introduction: {
            "pt-BR": "Para que a limpeza não seja sentida como um fardo maçante ao final de uma jornada cansativa, ela deve ser planejada como uma rotina curta, padronizada e compartilhada por toda a equipe. Quando cada um cuida do seu posto por 5 minutos antes de passar o bastão para o próximo turno, o canteiro nunca acumula sujeira crônica.",
            "en": "Daily 5-minute cleaning rituals prevent chronic filth accumulation without overburdening exhausted workers.",
            "es": "Las rutinas diarias de 5 minutos al cierre de turno evitan la acumulación crónica de residuos.",
          },
          sections: [
            {
              title: {
                "pt-BR": "A Rotina 5S de Encerramento de Turno",
                "en": "Shift Turnover 5S Ritual",
                "es": "Rutina 5S de Fin de Turno",
              },
              body: {
                "pt-BR": "Nos últimos 10 minutos de trabalho: (1) Recolha todas as sobras de materiais e retorne ao local devido; (2) Limpe a bancada de trabalho e recolha resíduos com pá e escova (nunca use ar comprimido para soprar poeira, pois espalha partículas no ar e gera perigo ocular); (3) Guarde as ferramentas no painel sombreado; (4) Desconecte máquinas da tomada e desligue iluminação auxiliar.",
                "en": "Final 10 minutes: return tools, brush down benches (never use compressed air for sweeping), isolate equipment.",
                "es": "Últimos 10 minutos: guardar herramientas en su tablero, limpiar mesas (nunca usar aire comprimido para barrer) y apagar equipos.",
              },
            },
            {
              title: {
                "pt-BR": "O Cartão de Anormalidade 5S",
                "en": "The 5S Anomaly Card",
                "es": "Tarjeta de Anomalía 5S",
              },
              body: {
                "pt-BR": "Se durante a limpeza o operador encontrar algo que ele mesmo não pode consertar (ex: gotejamento de válvula hidráulica, luz indicadora queimada), ele fixa um Cartão de Anormalidade (etiqueta visual azul ou vermelha) no local exato do problema e anota no quadro de gestão da oficina. O problema fica visível para o turno seguinte e para o supervisor de manutenção.",
                "en": "If a problem requires specialist maintenance, hang a visual anomaly tag on the exact pipe or motor.",
                "es": "Si se detecta una falla que el operador no puede resolver, fija una tarjeta de anomalía visual y avisa al supervisor.",
              },
            },
          ],
          summaryPoints: [
            {
              "pt-BR": "Limpeza diária de 5 minutos evita mutirões pesados e desgastantes no final do mês.",
              "en": "Daily 5-minute discipline prevents dreaded end-of-month cleanup marathons.",
              "es": "5 minutos diarios de orden y limpieza evitan jornadas agotadoras a fin de mes.",
            },
          ],
          reflectionQuestions: [
            {
              "pt-BR": "1. Qual é o estado que você gostaria de encontrar no seu posto de trabalho ao chegar pela manhã?",
              "en": "1. What state would you like your workbench to be in when arriving for your shift?",
              "es": "1. ¿En qué condiciones desearía encontrar su puesto de trabajo al llegar en la mañana?",
            },
          ],
        },
      },
    ],
  },
  {
    id: "mod-5s-5",
    order: 5,
    title: {
      "pt-BR": "Módulo 5 — Seiketsu: Senso de Padronização",
      "en": "Module 5 — Seiketsu: Standardize",
      "es": "Módulo 5 — Seiketsu: Sentido de Estandarización",
    },
    description: {
      "pt-BR": "Criação de padrões visuais claros, rotinas de auditoria com checklists e critérios objetivos de conformidade.",
      "en": "Visual standard operating sheets, checklist inspections, and objective conformity metrics.",
      "es": "Creación de estándares visuales, checklists de auditoría y criterios claros de cumplimiento.",
    },
    lessons: [
      {
        id: "les-5s-5-1",
        order: 1,
        title: {
          "pt-BR": "Aula 5.1: Transformar boas práticas em padrões visuais",
          "en": "Lesson 5.1: Turning Good Habits into Visual Standards",
          "es": "Lección 5.1: Convertir buenas prácticas en estándares visuales",
        },
        durationMinutes: 25,
        contentType: "text",
        contentDetail: {
          objective: {
            "pt-BR": "Aprender a elaborar instruções visuais de trabalho (POPs em uma folha) e checklists ilustrados que mantenham os três primeiros sensos perenes.",
            "en": "Create one-point visual standard sheets and photo checklists that sustain the first three pillars.",
            "es": "Elaborar instructivos visuales de trabajo en una sola hoja para consolidar los 3 primeros sensos.",
          },
          introduction: {
            "pt-BR": "Muitas empresas conseguem descartar (Seiri), organizar (Seiton) e limpar (Seiso) com sucesso nas primeiras semanas. Porém, sem o quarto senso — Seiketsu (Padronização) —, a tendência natural é o retorno paulatino à bagunça original. Padronizar é fixar as regras do jogo por escrito e em imagens para que todos saibam exatamente qual é o estado esperado do ambiente.",
            "en": "Many companies sort, set in order, and shine, but slide back into chaos without Seiketsu (Standardize).",
            "es": "Sin estandarización (Seiketsu), los esfuerzos iniciales de orden se pierden con el paso de las semanas.",
          },
          visualAsset: {
            id: "va-before-after",
            type: "schematic",
            title: {
              "pt-BR": "Folha de Padrão Visual: 'Antes e Depois' da Bancada",
              "en": "Visual Standard Sheet: Bench Before and After",
              "es": "Ficha Visual: Antes y Después del Puesto de Trabajo",
            },
            caption: {
              "pt-BR": "Critérios objetivos de conformidade: contraste entre desvios inaceitáveis e o padrão formal de entrega.",
              "en": "Objective conformance criteria: contrast between unacceptable drift and formal turnover standards.",
              "es": "Criterios claros de conformidad entre desvíos inaceptables y el estándar esperado.",
            },
            alt: {
              "pt-BR": "Painel comparativo ilustrando condições Não Conformes (ferramentas soltas e óleo) vs. Padrão Esperado (limpeza e organização).",
              "en": "Comparative panel illustrating Non-conforming vs. Expected clean standard.",
              "es": "Panel comparativo de condiciones no conformes frente al estándar esperado.",
            },
            componentKey: "diag-before-after",
          },
          sections: [
            {
              title: {
                "pt-BR": "O Padrão 'Antes e Depois' com Fotos",
                "en": "The 'Before and After' Photo Standard",
                "es": "El Estándar 'Antes y Después' con Fotos",
              },
              body: {
                "pt-BR": "A forma mais eficiente de padronização no chão de fábrica não são manuais de 30 páginas que ninguém lê. É a Folha de Padrão Visual 5S colada sobre a bancada, com duas fotos nítidas: 'Como DEVE ficar este posto ao final do turno' vs. 'Exemplos inaceitáveis de desordem'. O cérebro humano processa imagens 60 mil vezes mais rápido do que texto.",
                "en": "The best industrial standards are single-page photo cards showing 'Acceptable' vs 'Unacceptable' conditions.",
                "es": "El estándar más efectivo es una ficha visual plastificada con fotos de 'Cómo debe quedar el puesto' y 'Desvíos prohibidos'.",
              },
            },
            {
              title: {
                "pt-BR": "Definição de Responsáveis (O 'Quem Faz o Quê')",
                "en": "Accountability Matrices: Who Does What and When",
                "es": "Matriz de Responsabilidades: Quién Hace Qué y Cuándo",
              },
              body: {
                "pt-BR": "Em canteiros industriais com muitos colaboradores, 'trabalho de todo mundo é trabalho de ninguém'. O Seiketsu divide a oficina em microzonas de responsabilidade: bancada A (mecânico 1), armário de solventes (técnico de pintura), painel de ferramentas especiais (almoxarife). Cada operador sabe exatamente qual metro quadrado está sob sua guarda.",
                "en": "Divide the shop floor into defined micro-zones with clear ownership so common areas aren't neglected.",
                "es": "Dividir el taller en microzonas con responsables designados para evitar áreas huérfanas de cuidado.",
              },
            },
          ],
          summaryPoints: [
            {
              "pt-BR": "Sem padronização visual, o conceito de 'arrumado' fica ao gosto individual de cada um, gerando conflitos na equipe.",
              "en": "Without visual standards, 'clean' is subjective, leading to team friction and degraded standards.",
              "es": "Sin estándares visuales, lo que para uno está 'ordenado' para otro puede ser un caos inaceptable.",
            },
          ],
          reflectionQuestions: [
            {
              "pt-BR": "1. Na sua equipe existe um padrão claro e documentado sobre como as bancadas devem ser entregues entre turnos?",
              "en": "1. Does your team have a documented visual standard for end-of-shift bench turnover?",
              "es": "1. ¿Existe en su equipo una pauta clara de entrega de puestos entre turnos?",
            },
          ],
        },
      },
      {
        id: "les-5s-5-2",
        order: 2,
        title: {
          "pt-BR": "Aula 5.2: Como verificar a manutenção do padrão",
          "en": "Lesson 5.2: Auditing and Verifying the Standard",
          "es": "Lección 5.2: Cómo verificar y mantener el estándar",
        },
        durationMinutes: 25,
        contentType: "text",
        contentDetail: {
          objective: {
            "pt-BR": "Aplicar checklists de verificação periódica de forma colaborativa, tratando desvios antes que virem incidentes.",
            "en": "Conduct periodic peer 5S audits constructively, addressing drift before it causes incidents.",
            "es": "Aplicar listas de chequeo periódicas para identificar desvíos antes de que generen pérdidas o accidentes.",
          },
          introduction: {
            "pt-BR": "Um padrão que não é checado perde o valor ao longo dos meses. As auditorias ou verificações de 5S não devem ser vistas como visitas de policiais em busca de culpados, mas sim como termômetros para identificar onde o processo precisa de ajuda, novos recursos ou reforço de treinamento.",
            "en": "5S audits should never feel like police inspections, but rather team health checks identifying where support is needed.",
            "es": "Las auditorías 5S no buscan culpables, sino detectar dificultades y apoyar a los equipos.",
          },
          sections: [
            {
              title: {
                "pt-BR": "A Auditoria Cruzada Entre Equipes",
                "en": "Cross-Team Peer Audits",
                "es": "Auditorías Cruzadas entre Cuadrillas",
              },
              body: {
                "pt-BR": "Uma prática consagrada é a auditoria cruzada: o mecânico da Frente A audita o canteiro da Frente B com uma folha padronizada de 5 itens. Como quem vem de fora não tem a cegueira de rotina do setor, enxerga desvios imediatamente e ainda traz ideias boas observadas na outra área para o seu próprio posto.",
                "en": "Cross-team audits leverage fresh eyes: technicians from Area A audit Area B, spreading great ideas naturally.",
                "es": "Las auditorías cruzadas permiten que técnicos de otra área detecten desvíos invisibles para los locales.",
              },
            },
          ],
          checklist: {
            title: {
              "pt-BR": "Checklist de Verificação Semanal Seiketsu",
              "en": "Weekly 5S Verification Checklist",
              "es": "Lista de Verificación Semanal Seiketsu",
            },
            items: [
              {
                id: "chk-audit-1",
                label: {
                  "pt-BR": "Padronização Visual de Ferramentas",
                  "en": "Tool Board Visual Standard",
                  "es": "Estándar Visual de Herramientas",
                },
                criterion: {
                  "pt-BR": "100% das ferramentas estão nos seus suportes identificados e sem itens quebrados misturados?",
                  "en": "Are all tools in their designated shadow board slots?",
                  "es": "¿Todas las herramientas están en sus siluetas correspondientes?",
                },
              },
              {
                id: "chk-audit-2",
                label: {
                  "pt-BR": "Integridade das Demarcações de Solo",
                  "en": "Floor Markings Condition",
                  "es": "Estado de las Líneas de Piso",
                },
                criterion: {
                  "pt-BR": "As fitas e tintas de sinalização amarela e vermelha estão visíveis e sem rasgos críticos?",
                  "en": "Are walkway and extinguisher markings clearly legible and intact?",
                  "es": "¿Las líneas de tránsito y extintores están claramente legibles?",
                },
              },
              {
                id: "chk-audit-3",
                label: {
                  "pt-BR": "Fechamento de Ações Anteriores",
                  "en": "Action Plan Closure",
                  "es": "Cierre de Planes de Acción",
                },
                criterion: {
                  "pt-BR": "Os cartões de anormalidade da semana passada foram tratados ou possuem prazo e responsável definidos?",
                  "en": "Have last week's anomaly tags been corrected or scheduled?",
                  "es": "¿Se corrigieron las tarjetas de anomalía detectadas la semana anterior?",
                },
              },
            ],
          },
          summaryPoints: [
            {
              "pt-BR": "O checklist deve ser simples, objetivo e levar menos de 10 minutos para ser aplicado.",
              "en": "Audits must be quick, objective, and take under 10 minutes to complete.",
              "es": "Las verificaciones deben ser ágiles, objetivas y no demorar más de 10 minutos.",
            },
          ],
          reflectionQuestions: [
            {
              "pt-BR": "1. Como a sua equipe reage quando alguém aponta uma desorganização na oficina: como crítica pessoal ou como oportunidade de melhoria?",
              "en": "1. How does your crew react when clutter is pointed out: defensiveness or collaboration?",
              "es": "1. ¿Cómo reacciona su equipo cuando se detecta un desorden: como crítica o como mejora?",
            },
          ],
        },
      },
    ],
  },
  {
    id: "mod-5s-6",
    order: 6,
    title: {
      "pt-BR": "Módulo 6 — Shitsuke: Senso de Disciplina",
      "en": "Module 6 — Shitsuke: Sustain",
      "es": "Módulo 6 — Shitsuke: Sentido de Autodisciplina",
    },
    description: {
      "pt-BR": "Criação de hábitos perenes, papel do líder como exemplo, comunicação assertiva e superação da resistência a mudanças.",
      "en": "Building lasting habits, leadership by example, assertiveness, and overcoming change resistance.",
      "es": "Creación de hábitos sostenibles, liderazgo con el ejemplo y perseverancia del programa.",
    },
    lessons: [
      {
        id: "les-5s-6-1",
        order: 1,
        title: {
          "pt-BR": "Aula 6.1: Criar hábitos sustentáveis",
          "en": "Lesson 6.1: Building Sustainable Habits",
          "es": "Lección 6.1: Desarrollar hábitos sostenibles",
        },
        durationMinutes: 25,
        contentType: "text",
        contentDetail: {
          objective: {
            "pt-BR": "Compreender a psicologia do hábito operacional no ambiente de trabalho e como o compromisso individual sustenta o resultado coletivo.",
            "en": "Understand workplace habit psychology and how individual accountability fuels team sustainability.",
            "es": "Comprender cómo se forman los hábitos de trabajo y la importancia del compromiso personal.",
          },
          introduction: {
            "pt-BR": "Shitsuke é frequentemente traduzido como 'autodisciplina'. No contexto industrial, disciplina não significa submissão cega a ordens, mas sim o compromisso voluntário de cada colaborador em fazer a coisa certa mesmo quando ninguém está olhando: guardar o alicate que usou, limpar a mancha de óleo que derramou e respeitar o colega que virá no turno seguinte.",
            "en": "Shitsuke translates to self-discipline. In industrial reality, it means doing the right thing when nobody is watching.",
            "es": "Shitsuke es autodisciplina: cumplir los estándares de orden y seguridad aun cuando nadie está supervisando.",
          },
          sections: [
            {
              title: {
                "pt-BR": "A Mudança de Cultura e a Resistência Natural",
                "en": "Culture Change and Natural Resistance",
                "es": "Cambio Cultural y Resistencia al Cambio",
              },
              body: {
                "pt-BR": "É comum ouvir em oficinas frases como: 'Sempre fizemos assim e nunca deu problema' ou 'Meu trabalho é consertar motor, não é arrumar caixinha'. A resistência inicial é humana e natural. O Shitsuke se constrói quando a equipe percebe que o 5S reduz o cansaço ao final do dia, elimina a humilhação de perder materiais e cria um ambiente de respeito mútuo.",
                "en": "Resistance like 'we've always done it this way' is normal. Sustain occurs when workers realize 5S saves their own energy.",
                "es": "La resistencia inicial se supera demostrando que las 5S reducen el estrés y la fatiga al final del día.",
              },
            },
            {
              title: {
                "pt-BR": "O Papel da Liderança pelo Exemplo",
                "en": "Leadership by Example",
                "es": "El Rol del Líder con el Ejemplo",
              },
              body: {
                "pt-BR": "Nenhum programa 5S sobrevive se o encarregado, o engenheiro ou o supervisor entrar na oficina e deixar suas próprias luvas ou prancheta jogadas sobre a bancada. A liderança ensina pelo exemplo diário. Quando o líder abaixa para recolher um parafuso do chão, ele envia uma mensagem silenciosa e poderosa para toda a frente de trabalho.",
                "en": "If a supervisor leaves their tools or dirty gloves on a bench, 5S collapses. Leaders set the cultural benchmark.",
                "es": "Si el supervisor deja sus herramientas tiradas, el programa fracasa. El líder predica con el ejemplo.",
              },
            },
          ],
          summaryPoints: [
            {
              "pt-BR": "Disciplina é transformar o cumprimento dos padrões em um valor pessoal inegociável.",
              "en": "Discipline turns compliance into personal professional pride.",
              "es": "La autodisciplina convierte el orden en una muestra de orgullo profesional.",
            },
          ],
          reflectionQuestions: [
            {
              "pt-BR": "1. Quando você vê uma ferramenta fora do lugar que não foi você quem usou, qual é a sua reação: ignora ou guarda no painel?",
              "en": "1. When you spot a tool left on a walkway by someone else, do you ignore it or return it?",
              "es": "1. Cuando ve una herramienta ajena tirada en el suelo, ¿la guarda o la ignora?",
            },
          ],
        },
      },
      {
        id: "les-5s-6-2",
        order: 2,
        title: {
          "pt-BR": "Aula 6.2: Como manter o 5S ao longo do tempo",
          "en": "Lesson 6.2: Keeping 5S Alive Long-Term",
          "es": "Lección 6.2: Sostenibilidad de las 5S en el tiempo",
        },
        durationMinutes: 25,
        contentType: "text",
        contentDetail: {
          objective: {
            "pt-BR": "Aprender práticas de reconhecimento, diálogo diário de segurança/qualidade (DDS) e evolução contínua dos padrões.",
            "en": "Integrate 5S into daily safety briefings (DDS), recognition programs, and continuous improvement loops.",
            "es": "Integrar 5S a las reuniones diarias (DDS) y reconocer los avances del equipo.",
          },
          introduction: {
            "pt-BR": "Manter o 5S vivo por anos exige manter o assunto em pauta sem torná-lo cansativo. Integrar o 5S às conversas diárias de início de turno (DDS/DDSQ), comemorar pequenas vitórias e atualizar os padrões quando novos equipamentos chegam são as chaves da longevidade do programa nas operações industriais da RSS3.",
            "en": "Long-term vitality requires weaving 5S into daily morning briefings and celebrating incremental team victories.",
            "es": "Para sostener las 5S se deben incorporar temas breves en las charlas diarias y celebrar los logros del equipo.",
          },
          sections: [
            {
              title: {
                "pt-BR": "O 5S nos Diálogos Diários de Segurança e Qualidade",
                "en": "5S in Daily Tool-Box Briefings",
                "es": "Las 5S en las Charlas Diarias de Seguridad",
              },
              body: {
                "pt-BR": "Em vez de palestras longas, dedique 2 minutos da reunião matinal para um tema pontual: 'Pessoal, hoje nosso foco 5S é inspecionar o estado de conservação dos cabos das lixadeiras e checar se o armário de inflamáveis está trancado'. Essa abordagem prática mantém o senso de alerta elevado.",
                "en": "Dedicate 2 minutes of morning briefings to laser-focused 5S themes like grinder cord inspections.",
                "es": "Dedicar 2 minutos de la charla matinal a un tema específico de 5S mantiene la atención activa.",
              },
            },
            {
              title: {
                "pt-BR": "Reconhecimento Positivo da Equipe",
                "en": "Positive Team Recognition",
                "es": "Reconocimiento Positivo al Esfuerzo",
              },
              body: {
                "pt-BR": "Auditorias devem servir principalmente para elogiar. Quando uma equipe de mecânicos mantém seu canteiro exemplar por um mês, essa conquista deve ser divulgada no painel da empresa, elogiada pela gerência e celebrada coletivamente. O reforço positivo gera orgulho profissional genuíno.",
                "en": "Celebrate exemplary areas publicly. Positive reinforcement builds genuine craft pride.",
                "es": "Reconocer públicamente a las cuadrillas destacadas genera compromiso y orgullo de equipo.",
              },
            },
          ],
          summaryPoints: [
            {
              "pt-BR": "O 5S não tem linha de chegada; é uma jornada contínua de aperfeiçoamento diário.",
              "en": "5S has no finish line; it is a continuous journey of operational perfection.",
              "es": "Las 5S no tienen fin; es un proceso continuo de mejora en el puesto de trabajo.",
            },
          ],
          reflectionQuestions: [
            {
              "pt-BR": "1. Qual melhoria prática de 5S você gostaria de propor na sua próxima reunião de equipe?",
              "en": "1. What practical 5S improvement will you propose at your next crew briefing?",
              "es": "1. ¿Qué mejora práctica propondría en la próxima reunión de su cuadrilla?",
            },
          ],
        },
      },
    ],
  },
  {
    id: "mod-5s-7",
    order: 7,
    title: {
      "pt-BR": "Módulo 7 — Aplicação Integrada do 5S",
      "en": "Module 7 — Integrated 5S Field Application",
      "es": "Módulo 7 — Aplicación Práctica Integrada de 5S",
    },
    description: {
      "pt-BR": "Estudo de caso complexo de oficina industrial, identificação dos cinco sensos e elaboração de plano de ação estruturado.",
      "en": "Comprehensive industrial workshop case study, 5-pillar analysis, and actionable remediation plan.",
      "es": "Estudio de caso integral de taller industrial y elaboración de un plan de acción correctivo.",
    },
    lessons: [
      {
        id: "les-5s-7-1",
        order: 1,
        title: {
          "pt-BR": "Aula 7.1: Estudo de caso de uma oficina fictícia",
          "en": "Lesson 7.1: Comprehensive Workshop Case Study",
          "es": "Lección 7.1: Estudio de caso de un taller ficticio",
        },
        durationMinutes: 25,
        contentType: "text",
        contentDetail: {
          objective: {
            "pt-BR": "Analisar um cenário industrial realista e identificar desvios relacionados a cada um dos cinco sensos, propondo correções técnicas justificadas.",
            "en": "Evaluate a realistic industrial scenario, diagnose nonconformities across all 5 pillars, and engineer root-cause fixes.",
            "es": "Analizar un taller ficticio con problemas reales e identificar los desvíos de cada uno de los 5 sensos.",
          },
          introduction: {
            "pt-BR": "Chegou o momento de integrar todo o aprendizado. A seguir, você estudará o cenário da 'Oficina Fictícia de Manutenção Eletromecânica do Canteiro Sul'. Leia atentamente a descrição do ambiente e identifique como a ausência dos sensos afeta diretamente os prazos, os custos e a segurança dos colaboradores.",
            "en": "Synthesize all five pillars by analyzing the fictitious South Yard Electromechanical Maintenance Shop.",
            "es": "Apliquemos todo lo aprendido analizando el escenario ficticio del Taller Electromecánico del Canteiro Sur.",
          },
          sections: [
            {
              title: {
                "pt-BR": "O Cenário da Oficina do Canteiro Sul",
                "en": "The South Yard Scenario Description",
                "es": "Descripción del Escenario: Taller Canteiro Sur",
              },
              body: {
                "pt-BR": "A oficina atende paradas rápidas de manutenção. Ao entrar, observa-se: (1) Três motores elétricos queimados desmontados há 8 meses ocupando o corredor principal; (2) Caixas de papelão rasgadas contendo fusíveis misturados a parafusos enferrujados; (3) Poça de óleo hidráulico embaixo do torno mecânico com serragem jogada por cima; (4) Chaves estrela espalhadas sobre panos sujos em quatro bancadas diferentes; (5) Demarcações amarelas no piso apagadas pelo tráfego de carrinhos; (6) Nenhuma folha de padrão visual ou responsável por bancada; (7) Cada turno reclama que o anterior entregou a oficina imunda.",
                "en": "The shop exhibits scrap motors in walkways, mixed unlabelled fuses and rusty bolts, sawdust over oil leaks, and blame culture.",
                "es": "El taller presenta motores quemados en los pasillos, fusibles mezclados con chatarra, derrames de aceite tapados con aserrín y desorden general.",
              },
            },
            {
              title: {
                "pt-BR": "Análise Cruzada dos Cinco Sensos no Cenário",
                "en": "5-Pillar Diagnosis of the Scenario",
                "es": "Diagnóstico de los 5 Sensos en el Escenario",
              },
              body: {
                "pt-BR": "• Falha de SEIRI: Os motores queimados de 8 meses atrás deveriam ter sido baixados e enviados para rebobinamento externo ou sucata. • Falha de SEITON: Falta de gaveteiros identificados para fusíveis e ausência de painel de ferramentas. • Falha de SEISO: Serragem sobre óleo é perigo de incêndio e mascara vazamento ativo do torno. • Falha de SEIKETSU: Ausência de fotos de padrão e demarcações apagadas. • Falha de SHITSUKE: Cultura de transferir culpa para o outro turno em vez de assumir rotina de 5 minutos.",
                "en": "Every issue maps directly to one of the 5 pillars, showing how lack of discipline unravels the entire operational chain.",
                "es": "Cada problema detectado corresponde a la falla de uno de los 5 sensos en la rutina diaria del taller.",
              },
            },
          ],
          summaryPoints: [
            {
              "pt-BR": "Em problemas reais, os cinco sensos interagem constantemente; corrigir apenas um não sustenta o resultado.",
              "en": "Real shop floor issues are interdependent; fixing only one pillar fails to deliver permanent gains.",
              "es": "Los 5 sensos son interdependientes; actuar sobre uno solo no resolverá el problema de raíz.",
            },
          ],
          reflectionQuestions: [
            {
              "pt-BR": "1. Qual dessas sete não conformidades da Oficina Sul você priorizaria como mais urgente por representar risco iminente de acidente?",
              "en": "1. Which of the 7 South Yard nonconformities is the most urgent safety hazard?",
              "es": "1. ¿Cuál de los desvíos del Taller Sur corregiría de inmediato por representar peligro de accidente?",
            },
          ],
        },
      },
      {
        id: "les-5s-7-2",
        order: 2,
        title: {
          "pt-BR": "Aula 7.2: Plano de ação e revisão final",
          "en": "Lesson 7.2: Action Planning and Final Synthesis",
          "es": "Lección 7.2: Plan de acción y síntesis final",
        },
        durationMinutes: 25,
        contentType: "text",
        contentDetail: {
          objective: {
            "pt-BR": "Construir um plano de ação 5W2H demonstrativo para implementar melhorias em qualquer oficina ou canteiro e consolidar os conceitos dos cinco sensos.",
            "en": "Formulate a practical action plan to implement 5S remediation and synthesize master concepts.",
            "es": "Elaborar un plan de acción práctico para implementar mejoras 5S y repasar los conceptos fundamentales.",
          },
          introduction: {
            "pt-BR": "Diagnosticar e criticar é fácil; o papel de um profissional da RSS3 é propor soluções estruturadas com responsáveis, prazos e métodos de verificação. Para transformar o diagnóstico do 5S em realidade, utilizamos a ferramenta prática de Plano de Ação, transformando ideias em entregas concretas no chão de fábrica.",
            "en": "Diagnosing problems is only half the battle. RSS3 technicians engineer solutions with owners, deadlines, and metrics.",
            "es": "El rol de un técnico es proponer soluciones concretas con responsables, plazos y recursos definidos.",
          },
          sections: [
            {
              title: {
                "pt-BR": "A Estrutura do Plano de Ação 5S",
                "en": "The 5S Action Plan Template",
                "es": "Estructura del Plan de Acción 5S",
              },
              body: {
                "pt-BR": "Todo plano de ação para canteiros deve responder com clareza: O QUE será feito (Ação), POR QUE será feito (Justificativa técnica), ONDE será feito (Local específico), QUEM é o responsável (Nome ou cargo), ATÉ QUANDO (Data limite) e COMO será verificado (Evidência objetiva com foto ou checklist). Planos sem responsável nominal nunca saem do papel.",
                "en": "Action plans require WHAT, WHY, WHERE, WHO, WHEN, and HOW IT WILL BE VERIFIED with photographic proof.",
                "es": "Cada acción correctiva debe definir con exactidão: Qué, Por qué, Dónde, Quién, Cuándo y Cómo se verifica.",
              },
            },
          ],
          table: {
            headers: [
              { "pt-BR": "Desvio Observado", "en": "Observed Defect", "es": "Desvío Observado" },
              { "pt-BR": "Senso", "en": "Pillar", "es": "Senso" },
              { "pt-BR": "Ação Corretiva Proposta", "en": "Corrective Action", "es": "Acción Propuesta" },
              { "pt-BR": "Forma de Verificação", "en": "Verification", "es": "Verificación" },
            ],
            rows: [
              [
                { "pt-BR": "Motores queimados bloqueando passagem", "en": "Scrap motors in aisle", "es": "Motores quemados en pasillo" },
                { "pt-BR": "Seiri (Utilização)", "en": "Seiri", "es": "Seiri" },
                { "pt-BR": "Avaliar laudo técnico e transferir para baia externa de sucata.", "en": "Transfer to external scrap holding area.", "es": "Trasladar a patio de chatarra con baja técnica." },
                { "pt-BR": "Foto do corredor 100% desobstruído.", "en": "Photo of clear hallway.", "es": "Fotografía del pasillo despejado." },
              ],
              [
                { "pt-BR": "Chaves espalhadas sobre bancadas", "en": "Tools scattered on benches", "es": "Herramientas desordenadas" },
                { "pt-BR": "Seiton (Ordenação)", "en": "Seiton", "es": "Seiton" },
                { "pt-BR": "Montar painel sombreado perfurado com identificação de silhueta.", "en": "Build pegboard with painted tool silhouettes.", "es": "Instalar tablero sombra con siluetas." },
                { "pt-BR": "Checklist de fechamento de turno em 30 segundos.", "en": "30-second audit check.", "es": "Inspección de 30 segundos al cierre." },
              ],
              [
                { "pt-BR": "Óleo vazando do torno com serragem", "en": "Oil leak with sawdust", "es": "Fuga de aceite con aserrín" },
                { "pt-BR": "Seiso (Limpeza)", "en": "Seiso", "es": "Seiso" },
                { "pt-BR": "Limpar piso com desengraxante, sanar vazamento do retentor e instalar bandeja.", "en": "Repair seal, clean floor, install catch pan.", "es": "Reparar retén, limpiar piso y poner bandeja." },
                { "pt-BR": "Piso seco e bandeja de contenção sem transbordamento.", "en": "Dry floor, clean catch basin.", "es": "Piso seco sin trazas de aceite." },
              ],
              [
                { "pt-BR": "Falta de padrão entre turnos", "en": "No turnover standard", "es": "Sin estándar entre turnos" },
                { "pt-BR": "Seiketsu / Shitsuke", "en": "Standardize / Sustain", "es": "Seiketsu / Shitsuke" },
                { "pt-BR": "Criar folha visual A4 na bancada e rotina de 5 minutos antes da passagem.", "en": "Post laminated 1-pager, enforce 5-min ritual.", "es": "Ficha visual plastificada y 5 min de orden diario." },
                { "pt-BR": "Auditoria semanal com pontuação acima de 90%.", "en": "Weekly audit score >90%.", "es": "Puntaje de auditoría semanal superior a 90%." },
              ],
            ],
          },
          summaryPoints: [
            {
              "pt-BR": "O 5S transforma ambientes industriais quando a equipe adota os cinco sensos como postura diária de excelência.",
              "en": "5S transforms industrial operations when treated as an uncompromising daily commitment to craftsmanship.",
              "es": "Las 5S transforman la productividad y seguridad cuando se adoptan como estándar de vida profesional.",
            },
            {
              "pt-BR": "Parabéns por concluir os sete módulos teóricos do curso-piloto 5S Aplicado a Canteiros e Oficinas Industriais!",
              "en": "Congratulations on completing all seven modules of the 5S Pilot Course!",
              "es": "¡Felicitaciones por completar los siete módulos del curso piloto de 5S Industrial!",
            },
          ],
          reflectionQuestions: [
            {
              "pt-BR": "1. Qual é o primeiro passo simples que você dará no seu setor a partir de amanhã para colocar o 5S em prática?",
              "en": "1. What is the very first step you will take tomorrow to put 5S into practice?",
              "es": "1. ¿Cuál es la primera acción concreta que realizará mañana para aplicar las 5S en su puesto?",
            },
          ],
        },
      },
    ],
  },
];

export const PILOT_5S_FINAL_ASSESSMENT: CurriculumExamItem = {
  id: "exam-5s-final",
  order: 15,
  title: {
    "pt-BR": "Prova 1 — Avaliação Final do 5S Industrial",
    "en": "Exam 1 — 5S Industrial Final Evaluation",
    "es": "Evaluación 1 — Examen Final de 5S Industrial",
  },
  description: {
    "pt-BR": "Avaliação integradora dos sete módulos: utilização, ordenação, limpeza como inspeção, padronização visual, autodisciplina e resolução de estudo de caso prático.",
    "en": "Integrative assessment covering all 7 modules: sort, set in order, shine as inspection, standardization, sustain, and practical case studies.",
    "es": "Evaluación integral de los siete módulos: criterios de utilización, orden, limpieza, estándares y casos prácticos.",
  },
  scope: "course",
  estimatedMinutes: 30,
  questionsCount: 10,
  passingScorePercent: 70,
  maxAttempts: 2,
  isAvailable: false,
  availabilityNotice: {
    "pt-BR": "Esta avaliação formal com banco de questões e correção no servidor será disponibilizada na Fase 3. No momento, o ambiente encontra-se em modo de demonstração curricular.",
    "en": "This formal examination with server-side grading will be activated in Phase 3. The platform is currently in curriculum demonstration mode.",
    "es": "Esta evaluación formal con calificación en el servidor se habilitará en la Fase 3. El sistema opera actualmente en modo demostrativo.",
  },
};

