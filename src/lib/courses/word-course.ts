import { CourseDemonstration } from "@/types";

export const wordCourseData: CourseDemonstration = {
  id: "c-word-corporativo",
  slug: "word-corporativo-documentacao-tecnica-industrial",
  title: {
    "pt-BR": "Word Corporativo & Documentação Técnica Industrial",
    "en": "Corporate Word & Industrial Technical Documentation",
    "es": "Word Corporativo y Documentación Técnica Industrial",
  },
  description: {
    "pt-BR": "Curso prático e completo de Microsoft Word voltado à rotina administrativa e operacional da RSS3: formatação de textos segundo normas corporativas e ABNT, sumários automáticos, cabeçalhos e rodapés técnicos, tabelas e ilustrações, Procedimentos Operacionais Padrão (POPs), mala direta, exportação para PDF profissional, senhas de proteção de documentos contratuais e recursos visuais modernos.",
    "en": "Practical, comprehensive Microsoft Word course for RSS3 industrial and corporate offices: professional formatting, automated tables of contents, technical headers/footers, tables, Standard Operating Procedures (SOPs), mail merge, secure PDF export, document encryption, and modern layout features.",
    "es": "Curso integral de Microsoft Word para documentación técnica industrial: formato profesional, tablas de contenido automáticas, Procedimientos Operativos Estandarizados (POE), exportación a PDF, contraseñas de protección y diseño corporativo.",
  },
  longDescription: {
    "pt-BR": "O treinamento de Word Corporativo & Documentação Técnica Industrial da RSS3 Treinamentos foi concebido para capacitar assistentes administrativos, técnicos de segurança, engenheiros de planejamento e supervisores de frente a produzir documentos com padrão visual impecável, clareza e integridade jurídica. Abrange desde os fundamentos da interface, atalhos de produtividade e formatação de parágrafos, até a criação de modelos institucionais, relatórios técnicos com paginação por seções (quebras de seção), inclusão de matrizes de risco, listas numeradas automáticas, proteção de minutas contratuais por senha e geração de PDFs invioláveis para submissão a clientes industriais de alta criticidade.",
    "en": "Engineered for administrative staff, safety technicians, planning engineers, and project leads. Teaches flawless document authoring, standard company templates, section-break pagination, risk tables, contract password protection, and audit-ready PDF generation.",
    "es": "Diseñado para administrativos, técnicos de seguridad y líderes de obra de RSS3. Cubre elaboración de informes técnicos, Procedimientos Operativos Estandarizados (POEs), formato corporativo, protección con contraseña y exportación segura a PDF.",
  },
  schoolId: "gestao-lideranca",
  schoolName: {
    "pt-BR": "Gestão Industrial, Tecnologia e Produtividade",
    "en": "Industrial Management, Technology & Productivity",
    "es": "Gestión Industrial, Tecnología y Productividad",
  },
  workloadHours: 30,
  level: "basic",
  modality: "online",
  isMandatory: false,
  mandatoryFor: [
    "Assistente Administrativo",
    "Técnico de Segurança do Trabalho",
    "Planejador de Manutenção",
    "Encarregado Geral",
    "Líder de Contrato",
    "Almoxarife",
  ],
  targetAudience: {
    "pt-BR": "Profissionais administrativos, encarregados de frente, técnicos de segurança, engenheiros e lideranças que elaboram relatórios diários de obra (RDO), procedimentos operacionais (POPs), ordens de serviço e correspondências oficiais da RSS3.",
    "en": "Administrative personnel, field supervisors, HSE technicians, engineers, and site managers authoring daily logs, standard operating procedures, work orders, and official notices.",
    "es": "Personal administrativo, supervisores de obra, técnicos de seguridad y líderes que redactan informes técnicos, procedimientos estándar y contratos.",
  },
  prerequisites: {
    "pt-BR": "Conhecimentos básicos de operação de computador em ambiente Windows.",
    "en": "Basic computer skills in a Windows environment.",
    "es": "Conocimientos elementales de computación en entorno Windows.",
  },
  modulesCount: 5,
  lessonsCount: 20,
  thumbnailGradient: "from-blue-900 via-sky-950 to-slate-950",
  coverImage: "/images/courses/word-corporativo.jpg",
  categories: ["gestao-produtividade"],
  badgeCode: "WORD-RSS3",
  updatedAtDate: "2026-10-16",
  modules: [
    {
      id: "mod-wrd-1",
      order: 1,
      title: {
        "pt-BR": "Módulo 1: Fundamentos da Interface, Digitação e Formatação Básica (Aulas 01 a 04)",
        "en": "Module 1: Interface Fundamentals, Typing & Basic Typography (Lessons 01 to 04)",
        "es": "Módulo 1: Interfaz, Escritura y Formato Básico de Texto (Clases 01 a 04)",
      },
      description: {
        "pt-BR": "Navegação na faixa de opções do Microsoft Word, modos de exibição, atalhos de seleção rápida e estilização de caracteres.",
        "en": "Navigating the Word ribbon, view modes, rapid selection shortcuts, and character styling.",
        "es": "Cinta de opciones, modos de vista, atajos de teclado y formato esencial de fuentes.",
      },
      lessons: [
        {
          id: "les-wrd-1-1",
          order: 1,
          title: {
            "pt-BR": "Aula 01: Apresentação da Interface, Barra de Ferramentas e Primeiros Passos",
            "en": "Lesson 01: Interface Tour, Toolbars & First Steps",
            "es": "Clase 01: Conociendo la Interfaz, Barra de Herramientas y Primeros Pasos",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "88MRrNI0u_4",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar os componentes da tela do Word: faixa de opções, régua, barra de status, zoom e modos de exibição de página.",
              "en": "Master the Word interface: ribbon tabs, rulers, status bar, zoom control, and document layout views.",
              "es": "Dominar la cinta de opciones, reglas, barra de estado y modos de vista del documento.",
            },
            summaryPoints: [
              {
                "pt-BR": "Estrutura das guias: Página Inicial, Inserir, Layout, Referências e Exibir.",
                "en": "Core ribbon tabs: Home, Insert, Layout, References, and View.",
                "es": "Pestañas clave: Inicio, Insertar, Disposición, Referencias y Vista.",
              },
              {
                "pt-BR": "Salvar documentos no formato padrão .docx e compatibilidade com versões legadas.",
                "en": "Saving files in standard .docx format and backward compatibility.",
                "es": "Guardar en formato .docx y compatibilidad con versiones anteriores.",
              },
            ],
          },
        },
        {
          id: "les-wrd-1-2",
          order: 2,
          title: {
            "pt-BR": "Aula 02: Seleção de Texto, Atalhos Essenciais e Operações com Arquivos",
            "en": "Lesson 02: Text Selection, Core Shortcuts & File Operations",
            "es": "Clase 02: Selección de Texto, Atajos Clave y Gestión de Archivos",
          },
          durationMinutes: 16,
          contentType: "video",
          videoUrl: "kbJRDVxArUc",
          contentDetail: {
            objective: {
              "pt-BR": "Acelerar a produtividade na edição através de atalhos de teclado (Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+T, Ctrl+B) e técnicas de seleção por bloco.",
              "en": "Boost editing efficiency using keyboard shortcuts and advanced block selection techniques.",
              "es": "Aumentar la productividad mediante atajos de teclado y selección rápida por bloques.",
            },
            summaryPoints: [
              {
                "pt-BR": "Seleção por palavra (duplo clique), parágrafo (triplo clique) e linha inteira na margem esquerda.",
                "en": "Selection modes: double click (word), triple click (paragraph), and left margin click (full line).",
                "es": "Selección por palabra, párrafo o línea completa desde el margen.",
              },
              {
                "pt-BR": "Diferença entre Salvar e Salvar Como para controle de versões de procedimentos da RSS3.",
                "en": "Distinction between Save and Save As for operational procedure versioning.",
                "es": "Diferencia entre Guardar y Guardar Como para versionamiento de documentos.",
              },
            ],
          },
        },
        {
          id: "les-wrd-1-3",
          order: 3,
          title: {
            "pt-BR": "Aula 03: Formatação de Fonte — Tipografia, Tamanhos, Cores e Destaques",
            "en": "Lesson 03: Font Formatting — Typography, Sizing, Colors & Highlights",
            "es": "Clase 03: Formato de Fuente — Tipografía, Tamaños, Colores y Resaltados",
          },
          durationMinutes: 19,
          contentType: "video",
          videoUrl: "l1FY4o_Ijm8",
          contentDetail: {
            objective: {
              "pt-BR": "Aplicar regras tipográficas corporativas: famílias de fonte legíveis (Arial, Calibri, Aptos), pesos (negrito, itálico) e espaçamento de caracteres.",
              "en": "Apply corporate typography standards: clean font families, weights, and character kerning.",
              "es": "Aplicar estándares tipográficos corporativos y estilos visuales sobrios.",
            },
            summaryPoints: [
              {
                "pt-BR": "Boas práticas de documentação técnica: manter coerência visual e evitar fontes decorativas inadequadas.",
                "en": "Technical documentation etiquette: maintain visual consistency and avoid informal fonts.",
                "es": "Buenas prácticas de documentación técnica: mantener sobriedad tipográfica.",
              },
              {
                "pt-BR": "Uso estratégico de negrito e cores para destacar avisos de segurança e perigos operacionais.",
                "en": "Strategic use of bolding and accent colors to emphasize safety hazard warnings.",
                "es": "Uso de negrita y colores para destacar advertencias de seguridad.",
              },
            ],
          },
        },
        {
          id: "les-wrd-1-4",
          order: 4,
          title: {
            "pt-BR": "Aula 04: Limpar Formatação, Pincel de Formatação e Efeitos Visuais",
            "en": "Lesson 04: Clear Formatting, Format Painter & Text Effects",
            "es": "Clase 04: Borrar Formato, Copiar Formato y Efectos de Texto",
          },
          durationMinutes: 17,
          contentType: "video",
          videoUrl: "sMSABQZ-Vro",
          contentDetail: {
            objective: {
              "pt-BR": "Utilizar o Pincel de Formatação para clonar estilos em segundos e sanear textos colados da internet ou de e-mails.",
              "en": "Leverage Format Painter for instant style copying and sanitize messy text pasted from the web.",
              "es": "Utilizar Copiar Formato para duplicar estilos y limpiar textos copiados de internet.",
            },
            summaryPoints: [
              {
                "pt-BR": "Pincel de Formatação com duplo clique para aplicação contínua em múltiplos trechos de um laudo.",
                "en": "Double-clicking Format Painter to apply recurring styles throughout a technical inspection report.",
                "es": "Doble clic en Copiar Formato para aplicar estilos repetitivos en informes extensos.",
              },
              {
                "pt-BR": "O botão 'Limpar Toda a Formatação' como ferramenta indispensável para higienizar documentos corrompidos.",
                "en": "The 'Clear All Formatting' button to strip rogue formatting from legacy files.",
                "es": "Limpiar formato para eliminar fuentes y estilos residuales incompatibles.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-wrd-2",
      order: 2,
      title: {
        "pt-BR": "Módulo 2: Parágrafos, Alinhamentos, Marcadores e Estruturação de Texto (Aulas 05 a 08)",
        "en": "Module 2: Paragraphs, Alignment, Bulleting & Text Hierarchy (Lessons 05 to 08)",
        "es": "Módulo 2: Párrafos, Alineaciones, Viñetas y Estructuración de Texto (Clases 05 a 08)",
      },
      description: {
        "pt-BR": "Alinhamentos e justificações, recuos e espaçamentos entre linhas, listas com marcadores e listas numeradas multinível para itens de procedimentos operacionais.",
        "en": "Alignment, line and paragraph spacing, bulleted lists, and multilevel numbering for procedural clauses.",
        "es": "Alineaciones, interlineado, sangrías, viñetas y listas multinivel para cláusulas técnicas.",
      },
      lessons: [
        {
          id: "les-wrd-2-1",
          order: 1,
          title: {
            "pt-BR": "Aula 05: Alinhamento de Parágrafo, Justificação e Espaçamento entre Linhas",
            "en": "Lesson 05: Paragraph Alignment, Justification & Line Spacing",
            "es": "Clase 05: Alineación de Párrafos, Justificación e Interlineado",
          },
          durationMinutes: 20,
          contentType: "video",
          videoUrl: "ODk9ovBQbTw",
          contentDetail: {
            objective: {
              "pt-BR": "Configurar alinhamento justificado, espaçamento 1,5 linhas e recuo de primeira linha conforme normas técnicas.",
              "en": "Set justified text, 1.5 line spacing, and first-line indentation in accordance with formal standards.",
              "es": "Configurar alineación justificada, interlineado 1.5 y sangría de primera línea según normas técnicas.",
            },
            summaryPoints: [
              {
                "pt-BR": "Diferença entre pressionar Enter (novo parágrafo) e Shift+Enter (quebra de linha dentro do mesmo parágrafo).",
                "en": "Understanding Enter (hard paragraph break) versus Shift+Enter (soft line break).",
                "es": "Diferencia entre Enter (nuevo párrafo) y Shift+Enter (salto de línea suave).",
              },
              {
                "pt-BR": "Ajuste de espaçamento antes e depois do parágrafo, eliminando a prática amadora de dar múltiplos 'Enters' em branco.",
                "en": "Adjusting before/after paragraph spacing, eliminating unnecessary blank Enters.",
                "es": "Ajuste de espaciado anterior y posterior para evitar líneas en blanco innecesarias.",
              },
            ],
          },
        },
        {
          id: "les-wrd-2-2",
          order: 2,
          title: {
            "pt-BR": "Aula 06: Marcadores, Listas de Verificação e Checklists Operacionais",
            "en": "Lesson 06: Bullet Points, Verification Lists & Jobsite Checklists",
            "es": "Clase 06: Viñetas, Listas de Verificación y Checklists de Campo",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "EKZgMGfNOZ4",
          contentDetail: {
            objective: {
              "pt-BR": "Criar listas com marcadores customizados (símbolos de verificação, caixas de checagem) para formulários de campo.",
              "en": "Build custom bulleted checklists with checkmarks and inspection boxes for field forms.",
              "es": "Crear listas con viñetas personalizadas y casillas de verificación para inspección de campo.",
            },
            summaryPoints: [
              {
                "pt-BR": "Definição de novo marcador com símbolos corporativos e alinhamento milimétrico na régua.",
                "en": "Custom bullet symbol selection and precise ruler indentation alignment.",
                "es": "Definición de nuevas viñetas con símbolos y ajuste en la regla.",
              },
              {
                "pt-BR": "Elaboração de listas de checagem de EPIs de hidrojateamento e ferramentas para trabalho em altura.",
                "en": "Structuring PPE and rigging verification checklists with clean visual hierarchy.",
                "es": "Elaboración de listas de control de EPPs y herramientas de altura.",
              },
            ],
          },
        },
        {
          id: "les-wrd-2-3",
          order: 3,
          title: {
            "pt-BR": "Aula 07: Listas Numeradas e Numeração Multinível para POPs",
            "en": "Lesson 07: Numbered Lists & Multilevel Outlines for SOPs",
            "es": "Clase 07: Listas Numeradas y Numeración Multinivel para POEs",
          },
          durationMinutes: 22,
          contentType: "video",
          videoUrl: "whcaG_2L7xE",
          contentDetail: {
            objective: {
              "pt-BR": "Estruturar procedimentos operacionais com numeração hierárquica automática (1, 1.1, 1.1.1, 2, 2.1) vinculada a títulos.",
              "en": "Author SOPs with automatic hierarchical numbering (1, 1.1, 1.1.1) tied to document headings.",
              "es": "Estructurar procedimientos con numeración jerárquica automática (1, 1.1, 1.1.1) vinculada a títulos.",
            },
            summaryPoints: [
              {
                "pt-BR": "Configuração de listas com vários níveis para organização de cláusulas de segurança e passos de execução.",
                "en": "Configuring multilevel outlines for safety clauses and procedural execution steps.",
                "es": "Configuración de listas multinivel para manuales operativos y contratos.",
              },
              {
                "pt-BR": "Uso das teclas Tab e Shift+Tab para avançar ou recuar níveis de numeração sem quebrar a sequência.",
                "en": "Using Tab and Shift+Tab to indent and outdent outline tiers without corrupting the sequence.",
                "es": "Uso de Tab y Shift+Tab para cambiar de nivel sin alterar la correlatividad.",
              },
            ],
          },
        },
        {
          id: "les-wrd-2-4",
          order: 4,
          title: {
            "pt-BR": "Aula 08: Bordas de Parágrafo, Sombreamento e Caixas de Destaque",
            "en": "Lesson 08: Paragraph Borders, Shading & Callout Boxes",
            "es": "Clase 08: Bordes de Párrafo, Sombreado y Cuadros de Advertencia",
          },
          durationMinutes: 19,
          contentType: "video",
          videoUrl: "LWwt7-grxP0",
          contentDetail: {
            objective: {
              "pt-BR": "Desenhar caixas de destaque com bordas personalizadas e preenchimentos coloridos para notas de atenção e avisos de segurança.",
              "en": "Design attention-grabbing callout boxes with custom borders and fills for safety alerts.",
              "es": "Diseñar cuadros de advertencia con bordes y sombreados para notas críticas de seguridad.",
            },
            summaryPoints: [
              {
                "pt-BR": "Diferença entre cor de realce do texto e sombreamento de parágrafo completo.",
                "en": "Distinction between inline text highlight and full paragraph background shading.",
                "es": "Diferencia entre resaltador de texto y sombreado de bloque de párrafo.",
              },
              {
                "pt-BR": "Criação de caixas padrão 'ATENÇÃO - ZONA DE EXCLUSÃO DE HIDROJATO' em documentos técnicos.",
                "en": "Creating standard warning callouts for hydroblasting exclusion zones.",
                "es": "Creación de avisos estándar de seguridad para zonas de alta presión.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-wrd-3",
      order: 3,
      title: {
        "pt-BR": "Módulo 3: Layout de Página, Seções, Cabeçalhos e Sumários Automáticos (Aulas 09 a 12)",
        "en": "Module 3: Page Layout, Section Breaks, Headers & Automated ToC (Lessons 09 to 12)",
        "es": "Módulo 3: Diseño de Página, Secciones, Encabezados y Tablas de Contenido (Clases 09 a 12)",
      },
      description: {
        "pt-BR": "Orientação e margens da página, quebras de página e quebras de seção, cabeçalhos diferenciados com logo da RSS3 e geração de sumário automático com um clique.",
        "en": "Page orientation and margins, page vs section breaks, differentiated headers with company logos, and one-click automated table of contents.",
        "es": "Orientación de página, saltos de sección, encabezados corporativos con logo y tabla de contenido automática.",
      },
      lessons: [
        {
          id: "les-wrd-3-1",
          order: 1,
          title: {
            "pt-BR": "Aula 09: Configuração de Página — Margens, Orientação e Tamanho de Papel",
            "en": "Lesson 09: Page Setup — Margins, Orientation & Paper Sizes",
            "es": "Clase 09: Configuración de Página — Márgenes, Orientación y Papel",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "gx2HypIpsP0",
          contentDetail: {
            objective: {
              "pt-BR": "Ajustar margens personalizadas (ABNT: Superior 3cm, Esquerda 3cm, Inferior 2cm, Direita 2cm) e formatos de papel (A4, A3).",
              "en": "Configure standard margins and paper sizes (A4, A3) for formal industrial submittals.",
              "es": "Configurar márgenes técnicos reglamentarios y tamaños de papel para entregas formales.",
            },
            summaryPoints: [
              {
                "pt-BR": "Orientação retrato para relatórios textuais e paisagem para cronogramas ou tabelas largas.",
                "en": "Portrait orientation for text reports and landscape for wide schedules/spreadsheets.",
                "es": "Orientación vertical para informes y horizontal para cronogramas o tablas anchas.",
              },
              {
                "pt-BR": "Margem de medianiz (encadernação) para manuais e relatórios técnicos impressos da RSS3.",
                "en": "Gutter margin setup for printed bound manuals and turnaround Dossiers.",
                "es": "Margen de encuadernación para manuales y dossieres impresos.",
              },
            ],
          },
        },
        {
          id: "les-wrd-3-2",
          order: 2,
          title: {
            "pt-BR": "Aula 10: Quebras de Página versus Quebras de Seção (Próxima Página)",
            "en": "Lesson 10: Page Breaks vs Section Breaks (Next Page)",
            "es": "Clase 10: Saltos de Página vs Saltos de Sección",
          },
          durationMinutes: 24,
          contentType: "video",
          videoUrl: "OO7rAHKD-qQ",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar o conceito de seções independentes para intercalar páginas em retrato e paisagem no mesmo documento e reiniciar numeração de páginas.",
              "en": "Master independent document sections to mix portrait and landscape pages and restart page numbers.",
              "es": "Dominar saltos de sección para intercalar páginas verticales y horizontales y reiniciar numeración.",
            },
            summaryPoints: [
              {
                "pt-BR": "Quebra de Seção (Próxima Página) como divisória de configurações independentes de cabeçalho, rodapé e orientação.",
                "en": "Section breaks as isolated containers for unique headers, footers, and page orientations.",
                "es": "Saltos de sección como contenedores independientes de encabezado y orientación.",
              },
              {
                "pt-BR": "O perigo do botão 'Vincular ao Anterior': como desvinculá-lo para alterar o cabeçalho apenas na seção desejada.",
                "en": "Toggling 'Link to Previous' off to isolate headers across project chapters.",
                "es": "Desactivar 'Vincular al anterior' para crear encabezados diferentes por capítulo.",
              },
            ],
          },
        },
        {
          id: "les-wrd-3-3",
          order: 3,
          title: {
            "pt-BR": "Aula 11: Cabeçalhos, Rodapés, Numeração de Páginas e Logomarca Oficial",
            "en": "Lesson 11: Headers, Footers, Page Numbering & Official Branding",
            "es": "Clase 11: Encabezados, Pies de Página, Numeración y Logotipo Oficial",
          },
          durationMinutes: 21,
          contentType: "video",
          videoUrl: "nFhx9v0Huyw",
          contentDetail: {
            objective: {
              "pt-BR": "Construir cabeçalhos corporativos padronizados com o logo da RSS3, código do procedimento, revisão e data de vigência.",
              "en": "Build standardized company headers with RSS3 branding, document code, revision number, and issue date.",
              "es": "Diseñar encabezados corporativos con logo de RSS3, código de documento y versión vigente.",
            },
            summaryPoints: [
              {
                "pt-BR": "Numeração de página no rodapé no formato 'Página X de Y' e opção 'Primeira Página Diferente' para capas.",
                "en": "Footer page numbers ('Page X of Y') and 'Different First Page' for report covers.",
                "es": "Numeración 'Página X de Y' y opción 'Primera página diferente' para portadas.",
              },
              {
                "pt-BR": "Campos automáticos: data e hora de impressão e caminho do arquivo no rodapé.",
                "en": "Automated document metadata fields in footers: print dates and file paths.",
                "es": "Campos automáticos: fecha de actualización y ruta de archivo en el pie.",
              },
            ],
          },
        },
        {
          id: "les-wrd-3-4",
          order: 4,
          title: {
            "pt-BR": "Aula 12: Estilos de Título (Heading 1, 2, 3) e Sumário Automático em 1 Clique",
            "en": "Lesson 12: Heading Styles & One-Click Automated Table of Contents",
            "es": "Clase 12: Estilos de Título y Tabla de Contenido Automática en 1 Clic",
          },
          durationMinutes: 23,
          contentType: "video",
          videoUrl: "kVXxXMx4GcA",
          contentDetail: {
            objective: {
              "pt-BR": "Aplicar Estilos (Título 1, Título 2, Normal) para estruturar a navegação do documento e gerar sumários automáticos atualizáveis.",
              "en": "Apply Heading Styles to organize document structure and generate automatically refreshing tables of contents.",
              "es": "Aplicar Estilos de Título para navegación rápida y generar tablas de contenido actualizables.",
            },
            summaryPoints: [
              {
                "pt-BR": "Personalização de Estilos da RSS3: cores institucionais (Azul e Laranja), fontes padronizadas e espaçamentos fixos.",
                "en": "Customizing RSS3 corporate styles: corporate color accents, brand typography, and fixed spacing.",
                "es": "Personalización de estilos corporativos de RSS3 con colores institucionales.",
              },
              {
                "pt-BR": "Inserção e atualização do Sumário: 'Atualizar apenas os números de página' vs 'Atualizar o índice inteiro'.",
                "en": "Inserting and updating ToC: page-number only refresh versus full index rebuild.",
                "es": "Actualizar tabla de contenido completa o solo números de página con un clic.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-wrd-4",
      order: 4,
      title: {
        "pt-BR": "Módulo 4: Tabelas, Ilustrações Técnicas e Modelos de Documentos (Aulas 13 a 16)",
        "en": "Module 4: Tables, Technical Illustrations & Document Templates (Lessons 13 to 16)",
        "es": "Módulo 4: Tablas, Ilustraciones Técnicas y Plantillas de Documentos (Clases 13 a 16)",
      },
      description: {
        "pt-BR": "Criação de tabelas profissionais para controle de medição e matriz de riscos, inserção de fotos de inspeção, formatação de currículo profissional e exportação para PDF.",
        "en": "Professional tables for QA/QC inspection matrices, jobsite photo integration, resume building, and print-ready PDF export.",
        "es": "Tablas profesionales para inspección técnica, integración de fotografías, diseño de currículum y exportación a PDF.",
      },
      lessons: [
        {
          id: "les-wrd-4-1",
          order: 1,
          title: {
            "pt-BR": "Aula 13: Tabelas Avançadas — Inserção, Estilos, Mesclagem e Cálculos Básicos",
            "en": "Lesson 13: Advanced Tables — Formatting, Merging & Built-in Formulas",
            "es": "Clase 13: Tablas Avanzadas — Inserción, Formato, Combinación y Fórmulas",
          },
          durationMinutes: 22,
          contentType: "video",
          videoUrl: "o8FOycFaUu8",
          contentDetail: {
            objective: {
              "pt-BR": "Construir tabelas técnicas para relatórios de inspeção: alinhamento de células, repetição de linhas de cabeçalho em múltiplas páginas e fórmulas.",
              "en": "Construct technical QA tables: cell alignment, repeating header rows on multipage tables, and basic formula sum.",
              "es": "Construir tablas técnicas: alineación de celdas, repetición de encabezados en páginas siguientes y fórmulas.",
            },
            summaryPoints: [
              {
                "pt-BR": "Recurso 'Repetir Linhas de Cabeçalho': essencial para tabelas longas de apontamentos de campo.",
                "en": "'Repeat Header Rows' feature: mandatory for long multipage inspection logs.",
                "es": "Repetir filas de encabezado: fundamental para planillas extensas de inspección.",
              },
              {
                "pt-BR": "Conversão de texto em tabela e formatação de bordas com paleta de cores institucional da RSS3.",
                "en": "Converting raw text to tables and applying corporate border styling.",
                "es": "Conversión de texto a tabla y diseño de bordes institucionales.",
              },
            ],
          },
        },
        {
          id: "les-wrd-4-2",
          order: 2,
          title: {
            "pt-BR": "Aula 14: Inserção de Imagens, Formas, Quebra de Texto e Legendas Técnicas",
            "en": "Lesson 14: Integrating Photos, Shapes, Text Wrapping & Technical Captions",
            "es": "Clase 14: Inserción de Imágenes, Formas, Ajuste de Texto y Epígrafes",
          },
          durationMinutes: 20,
          contentType: "video",
          videoUrl: "XwMb2X3SWik",
          contentDetail: {
            objective: {
              "pt-BR": "Inserir e posicionar evidências fotográficas de serviços executados com ajuste de texto correto e numeração automática de figuras.",
              "en": "Insert and position photographic evidence with correct text wrapping and automated figure captions.",
              "es": "Insertar y posicionar fotografías de obra con ajuste de texto adecuado y numeración de figuras.",
            },
            summaryPoints: [
              {
                "pt-BR": "Opções de quebra automática de texto: 'Alinhado com o texto' vs 'Quadrado' para estabilidade do layout.",
                "en": "Text wrapping options: 'In Line with Text' vs 'Square' for layout stability.",
                "es": "Ajuste de texto: 'En línea con el texto' vs 'Cuadrado' para evitar desconfiguraciones.",
              },
              {
                "pt-BR": "Compressão de imagens dentro do Word para reduzir o tamanho de arquivos de relatórios pesados.",
                "en": "In-document photo compression to reduce bloated file sizes before emailing clients.",
                "es": "Compresión de fotos para reducir el tamaño final de los informes técnicos.",
              },
            ],
          },
        },
        {
          id: "les-wrd-4-3",
          order: 3,
          title: {
            "pt-BR": "Aula 15: Oficina Prática — Como Criar um Currículo e Perfil Profissional do Zero",
            "en": "Lesson 15: Hands-on Workshop — Crafting a Professional Resume from Scratch",
            "es": "Clase 15: Taller Práctico — Elaboración de un Currículum Profesional desde Cero",
          },
          durationMinutes: 25,
          contentType: "video",
          videoUrl: "4dP9Cd_lQ3g",
          contentDetail: {
            objective: {
              "pt-BR": "Elaborar um currículo profissional moderno e estruturado, destacando certificações industriais (NRs, ASO, qualificações operacionais).",
              "en": "Build a modern, well-structured CV highlighting safety certifications, technical credentials, and field achievements.",
              "es": "Elaborar un CV profesional destacando certificaciones normativas, experiencia y competencias técnicas.",
            },
            summaryPoints: [
              {
                "pt-BR": "Estruturação em blocos: dados de contato, objetivo profissional, certificações regulamentares e histórico de obras.",
                "en": "Block structure: contact details, summary, regulatory credentials, and industrial project history.",
                "es": "Estructura por bloques: datos personales, certificaciones vigentes y trayectoria laboral.",
              },
              {
                "pt-BR": "Alinhamento visual limpo com tabelas sem bordas e tipografia sóbria.",
                "en": "Clean visual layout using borderless alignment tables and professional fonts.",
                "es": "Diseño limpio usando tablas invisibles de alineación y tipografía sobria.",
              },
            ],
          },
        },
        {
          id: "les-wrd-4-4",
          order: 4,
          title: {
            "pt-BR": "Aula 16: Exportação Profissional para PDF e Otimização para Impressão",
            "en": "Lesson 16: Professional PDF Export & Print Optimization",
            "es": "Clase 16: Exportación Profesional a PDF y Optimización de Impresión",
          },
          durationMinutes: 18,
          contentType: "video",
          videoUrl: "pgYdwznP9mo",
          contentDetail: {
            objective: {
              "pt-BR": "Exportar documentos para o formato PDF mantendo hiperlinks ativos, qualidade gráfica e layout idêntico ao original.",
              "en": "Export documents to PDF preserving active hyperlinks, crisp vector graphics, and fixed page layouts.",
              "es": "Exportar documentos a PDF preservando hipervínculos, calidad gráfica y diagramación exacta.",
            },
            summaryPoints: [
              {
                "pt-BR": "Exportar PDF via 'Salvar Como' versus 'Imprimir em PDF': vantagens para navegação com marcadores de títulos.",
                "en": "Comparing 'Save As PDF' (with bookmark bookmarks) versus virtual print to PDF.",
                "es": "Diferencia entre 'Guardar como PDF' con marcadores y la impresora virtual PDF.",
              },
              {
                "pt-BR": "Configuração de qualidade: padrão comercial para impressão nítida vs tamanho mínimo para envio por e-mail.",
                "en": "Quality settings: commercial print quality vs lightweight web distribution.",
                "es": "Ajuste de calidad: estándar de impresión nítida vs tamaño reducido para correo.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-wrd-5",
      order: 5,
      title: {
        "pt-BR": "Módulo 5: Segurança, Proteção por Senha, Recursos Avançados e Modelos 3D (Aulas 17 a 19)",
        "en": "Module 5: Security, Password Encryption, Advanced Typography & 3D Assets (Lessons 17 to 19)",
        "es": "Módulo 5: Seguridad, Contraseñas, Tipografías Avanzadas y Recursos 3D (Clases 17 a 19)",
      },
      description: {
        "pt-BR": "Proteção de documentos contratuais com senhas de abertura e restrição de edição, identificação da versão do software, instalação de fontes institucionais e inserção de modelos 3D.",
        "en": "Contract protection with passwords, editing restrictions, version diagnostics, corporate font installation, and 3D industrial asset insertion.",
        "es": "Protección de contratos con contraseña, restricción de edición, instalación de fuentes corporativas y modelos 3D.",
      },
      lessons: [
        {
          id: "les-wrd-5-1",
          order: 1,
          title: {
            "pt-BR": "Aula 17: Segurança de Documentos — Criptografia e Senhas de Proteção no Word",
            "en": "Lesson 17: Document Security — Encryption & Password Protection in Word",
            "es": "Clase 17: Seguridad Documental — Criptografía y Contraseñas de Protección",
          },
          durationMinutes: 19,
          contentType: "video",
          videoUrl: "SbkMAxaMTlo",
          contentDetail: {
            objective: {
              "pt-BR": "Proteger propostas comerciais, laudos periciais e contratos com criptografia AES e senhas de modificação ou apenas leitura.",
              "en": "Protect commercial bids, inspection logs, and agreements with AES encryption and read-only edit locks.",
              "es": "Proteger propuestas y contratos con contraseñas de apertura y restricción de cambios.",
            },
            summaryPoints: [
              {
                "pt-BR": "Criptografia com senha de abertura: bloqueia visualização sem a credencial correta.",
                "en": "Encrypt with password: prevents unauthorized viewing without the correct key.",
                "es": "Cifrado con contraseña: bloquea la lectura sin la clave autorizada.",
              },
              {
                "pt-BR": "Restrição de edição: permitir apenas preenchimento de formulários ou comentários sem alterar o texto original.",
                "en": "Restricting editing: allow only form filling or track-changes comments while locking the master text.",
                "es": "Restricción de edición: permitir únicamente completar formularios o comentarios.",
              },
            ],
          },
        },
        {
          id: "les-wrd-5-2",
          order: 2,
          title: {
            "pt-BR": "Aula 18: Como Identificar a Versão do Word e Compatibilidade entre Atualizações",
            "en": "Lesson 18: Checking Your Word Version & Cross-Release Compatibility",
            "es": "Clase 18: Cómo Identificar la Versión de Word y Compatibilidad",
          },
          durationMinutes: 14,
          contentType: "video",
          videoUrl: "nuWNe2a4ph4",
          contentDetail: {
            objective: {
              "pt-BR": "Verificar a versão do Word instalada (Office 365, 2021, 2019, 2016), canais de atualização e modo de compatibilidade.",
              "en": "Check active Word release (Office 365, 2021, 2019), update channels, and compatibility mode.",
              "es": "Verificar la versión instalada de Word y gestionar el modo de compatibilidad.",
            },
            summaryPoints: [
              {
                "pt-BR": "Acesso às informações de conta, licença ativa e compilação do build no menu Arquivo > Conta.",
                "en": "Accessing account, license status, and build number via File > Account.",
                "es": "Información de licencia y versión en el menú Archivo > Cuenta.",
              },
              {
                "pt-BR": "Solução de travamentos e inconsistências visuais em arquivos gerados em versões legadas.",
                "en": "Troubleshooting layout discrepancies and glitches from legacy file formats.",
                "es": "Solución de incompatibilidades en archivos creados en versiones antiguas.",
              },
            ],
          },
        },
        {
          id: "les-wrd-5-3",
          order: 3,
          title: {
            "pt-BR": "Aula Extra: Instalação e Gestão de Fontes Tipográficas Corporativas",
            "en": "Special Lesson: Installing & Managing Corporate Brand Typography",
            "es": "Clase Extra: Instalación y Gestión de Fuentes Tipográficas Corporativas",
          },
          durationMinutes: 16,
          contentType: "video",
          videoUrl: "aeKoJByT0O0",
          contentDetail: {
            objective: {
              "pt-BR": "Instalar novas famílias de fontes no Windows (formatos TTF e OTF) para uso padronizado no Word e apresentações da empresa.",
              "en": "Install custom font families in Windows (TTF/OTF) for standard Word and corporate documentation.",
              "es": "Instalar fuentes tipográficas institucionales en Windows para estandarizar documentos en Word.",
            },
            summaryPoints: [
              {
                "pt-BR": "Download seguro de fontes oficiais (Google Fonts) e instalação para todos os usuários da máquina.",
                "en": "Safe downloading from Google Fonts and system-wide installation for all profiles.",
                "es": "Descarga e instalación de fuentes seguras en el sistema operativo.",
              },
              {
                "pt-BR": "Opção de incorporar fontes no documento do Word para garantir que o destinatário veja a mesma tipografia.",
                "en": "Embedding fonts inside Word documents so recipients view the identical design.",
                "es": "Incrustar fuentes en el archivo para que el cliente vea la tipografía exacta.",
              },
            ],
          },
        },
        {
          id: "les-wrd-5-4",
          order: 4,
          title: {
            "pt-BR": "Aula 19: Inserção e Manipulação de Modelos 3D e Ilustrações Interativas",
            "en": "Lesson 19: Inserting & Manipulating 3D Models & Interactive Illustrations",
            "es": "Clase 19: Inserción y Manejo de Modelos 3D e Ilustraciones Interactivas",
          },
          durationMinutes: 20,
          contentType: "video",
          videoUrl: "1UYmYAqhNFU",
          contentDetail: {
            objective: {
              "pt-BR": "Inserir objetos 3D no Word para ilustrar equipamentos industriais (bombas, tubulações, andaimes) com rotação em 360 graus.",
              "en": "Insert 3D objects in Word to illustrate industrial equipment (pumps, pipe spools, scaffold towers) with 360-degree rotation.",
              "es": "Insertar objetos 3D para ilustrar equipos industriales con rotación panorámica.",
            },
            summaryPoints: [
              {
                "pt-BR": "Biblioteca online de modelos 3D e importação de arquivos próprios (.obj, .fbx) gerados pela engenharia.",
                "en": "Built-in 3D asset library and importing engineering CAD formats (.obj, .fbx).",
                "es": "Biblioteca de objetos 3D e importación de modelos de ingeniería.",
              },
              {
                "pt-BR": "Uso de vistas predefinidas e rotação livre para explicar procedimentos operacionais de montagem com riqueza visual.",
                "en": "Using camera presets and free rotation to visually explain complex assembly SOPs.",
                "es": "Vistas predefinidas para enriquecer manuales y procedimientos de montaje.",
              },
            ],
          },
        },
      ],
    },
  ],
  finalAssessment: {
    id: "exam-word-corporativo",
    order: 21,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 50,
    questionsCount: 10,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação prática e técnica de Microsoft Word Corporativo com foco em relatórios de engenharia e procedimentos operacionais padronizados (POPs). Questões avançadas de estruturação, seções, campos dinâmicos e segurança. Nota mínima de 70% para certificação teórica.",
      "en": "Hands-on advanced Microsoft Word technical assessment focused on engineering reports and standard operating procedures (SOPs). Covers advanced sections, dynamic fields, styles, and document security. 70% passing score.",
      "es": "Evaluación práctica y técnica de Microsoft Word Corporativo enfocada en informes de ingeniería y procedimientos operativos. Secciones avanzadas, campos dinámicos, estilos y seguridad. Nota mínima de 70%.",
    },
    title: {
      "pt-BR": "Avaliação Prática — Documentação Técnica & Word Corporativo",
      "en": "Technical Assessment — Corporate Documentation & Advanced Word",
      "es": "Evaluación Práctica — Documentación Técnica y Word Corporativo",
    },
    description: {
      "pt-BR": "Cenário corporativo de documentação industrial: Estruturação de relatórios técnicos complexos, paginação mista desvinculada, quebras de seção contínuas e de página, tabelas com repetição de cabeçalho, campos dinâmicos, mala direta e restrição de edição.",
      "en": "Industrial documentation scenario: Formatting complex technical reports, unlinked mixed pagination, section breaks, repeating table headers, dynamic fields, mail merge, and editing restrictions.",
      "es": "Escenario corporativo de documentación técnica: Elaboración de informes complejos, paginación mixta desvinculada, saltos de sección, tablas con repetición de encabezados, campos dinámicos y restricción de edición.",
    },
    questions: [
      {
        id: "q-wrd-1",
        order: 1,
        question: {
          "pt-BR": "Em um relatório de 80 páginas, a capa e o sumário (páginas 1 a 4) não devem exibir número de página; os anexos pré-textuais (páginas 5 a 8) devem ter paginação romana minúscula (i, ii, iii, iv); e o corpo técnico (página 9 em diante) deve reiniciar em número arábico começando em 1. Qual é o procedimento técnico obrigatório para essa configuração?",
          "en": "In an 80-page report, cover and TOC (pages 1 to 4) must show no page numbers; preliminary annexes (pages 5 to 8) must use lower-case Roman numerals (i, ii, iii, iv); and the main body (from page 9) must restart at Arabic numeral 1. What is the mandatory technical procedure?",
          "es": "En un informe de 80 páginas, la portada y sumario (págs 1 a 4) no deben mostrar numeración; los anexos preliminares (págs 5 a 8) deben tener numeración romana minúscula (i, ii, iii, iv); y el cuerpo principal (desde pág 9) debe reiniciar en arábigo 1. ¿Cuál es el procedimiento técnico exacto?",
        },
        options: [
          {
            id: "q1-a",
            text: {
              "pt-BR": "Inserir Quebras de Página comuns (Ctrl+Enter) nas páginas 4 e 8 e marcar 'Primeira Página Diferente' em todas as páginas do relatório.",
              "en": "Insert standard Page Breaks (Ctrl+Enter) on pages 4 and 8 and check 'Different First Page' across all pages.",
              "es": "Insertar Saltos de Página comunes (Ctrl+Enter) en las páginas 4 y 8 y marcar 'Primera página diferente' en todo el informe.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Quebras de página comuns não criam seções independentes. A numeração de cabeçalhos e rodapés só pode ser diferenciada e reiniciada através de Quebras de Seção.",
              "en": "Standard page breaks do not create independent sections. Headers and footers can only be unlinked and restarted via Section Breaks.",
              "es": "Los saltos de página estándar no crean secciones independientes. Solo los saltos de sección permiten desvincular y reiniciar numeraciones.",
            },
          },
          {
            id: "q1-b",
            text: {
              "pt-BR": "Inserir Quebras de Seção (Próxima Página) no final da página 4 e da página 8, desativar 'Vincular ao Anterior' no cabeçalho/rodapé das seções 2 e 3, e configurar 'Formatar Número de Página' em cada seção.",
              "en": "Insert Section Breaks (Next Page) at end of pages 4 and 8, disable 'Link to Previous' in headers/footers for sections 2 and 3, and configure 'Format Page Numbers' in each section.",
              "es": "Insertar Saltos de Sección (Página siguiente) al final de páginas 4 y 8, desactivar 'Vincular al anterior' en encabezados/pies de secciones 2 y 3, y configurar 'Formato del número de página' en cada una.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Criam-se 3 seções. Desvincular 'Vincular ao Anterior' permite que cada seção tenha seu rodapé independente, podendo reiniciar a numeração e alternar entre formato romano e arábico.",
              "en": "Correct! Three sections are created. Unlinking 'Link to Previous' allows isolated footers to reset numbering and toggle formats.",
              "es": "¡Correcto! Se generan 3 secciones. Desvincular de la sección anterior permite independizar los pies y configurar formatos y reinicios distintos.",
            },
          },
          {
            id: "q1-c",
            text: {
              "pt-BR": "Utilizar a ferramenta de Marcadores (Bookmarks) do Word e vincular campos REF em cada página calculando a diferença matemática do número da página.",
              "en": "Use Word Bookmarks and link REF fields on each page calculating mathematical page number differences.",
              "es": "Utilizar Marcadores de Word y campos REF calculando diferencias matemáticas de número de página.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Inviável e instável. A ferramenta nativa para paginação independente são as Quebras de Seção com desvinculação de rodapés.",
              "en": "Unviable and fragile. The standard feature for independent pagination is Section Breaks with unlinked footers.",
              "es": "Inviable e inestable. La función nativa para paginación independiente son los Saltos de Sección.",
            },
          },
          {
            id: "q1-d",
            text: {
              "pt-BR": "Criar três arquivos DOCX separados (um para Capa, um para Anexos e um para o Corpo) e juntá-los apenas ao converter em PDF.",
              "en": "Split into three separate DOCX files (Cover, Annexes, Body) and merge them only when exporting to PDF.",
              "es": "Crear tres archivos DOCX separados y unirlos únicamente al convertir a PDF.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Solução de contorno inadequada que quebra o sumário automático integrado e referências cruzadas internas do documento corporativo.",
              "en": "Workaround that breaks unified automated table of contents and internal cross-references.",
              "es": "Parche inadecuado que rompe el sumario automático integrado y las referencias cruzadas.",
            },
          },
        ],
      },
      {
        id: "q-wrd-2",
        order: 2,
        question: {
          "pt-BR": "Um autor formatou manualmente títulos aplicando fonte Arial 14 negrito em vez de usar os Estilos de Título nativos (Título 1, Título 2). Ao gerar o Sumário Analítico automático, o Word informou que 'Nenhuma entrada de sumário foi encontrada'. Como corrigir todos os títulos de forma rápida e estruturada?",
          "en": "An author manually formatted headings using bold Arial 14 instead of native Heading styles (Heading 1, Heading 2). When generating the automated Table of Contents, Word reported 'No table of contents entries found'. How can this be resolved rapidly and structurally?",
          "es": "Un autor formateó títulos manualmente con Arial 14 negrita en lugar de Estilos de Título nativos (Título 1, Título 2). Al generar el sumario automático, Word indicó 'No se encontraron entradas de tabla de contenido'. ¿Cómo corregirlo de forma rápida y estructurada?",
        },
        options: [
          {
            id: "q2-a",
            text: {
              "pt-BR": "Selecionar um título formatado, clicar em 'Selecionar' > 'Selecionar Todo o Texto com Formatação Semelhante' na guia Página Inicial, e em seguida aplicar o Estilo 'Título 1'.",
              "en": "Select a formatted title, click 'Select' > 'Select All Text with Similar Formatting' on the Home tab, and then apply 'Heading 1' style.",
              "es": "Seleccionar un título formateado, ir a 'Seleccionar' > 'Seleccionar todo el texto con formato similar' en la pestaña Inicio, y luego aplicar el estilo 'Título 1'.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! 'Selecionar texto com formatação semelhante' seleciona todos os títulos idênticos no documento inteiro em 1 clique, permitindo aplicar o Estilo Título 1 em lote para alimentar o Sumário.",
              "en": "Correct! 'Select text with similar formatting' captures every matching title across the document in one click to apply Heading 1 in bulk.",
              "es": "¡Correcto! Selecciona todas las ocurrencias idénticas del documento en un solo clic para aplicar el Estilo de Título en lote.",
            },
          },
          {
            id: "q2-b",
            text: {
              "pt-BR": "Digitar manualmente cada título e número de página dentro de uma tabela de 2 colunas na página 3 do documento.",
              "en": "Manually retype every title and page number inside a 2-column table on page 3.",
              "es": "Escribir manualmente cada título y página en una tabla de 2 columnas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Sumários manuais são vulneráveis a desatualizações imediatas sempre que o documento sofrer alterações ou inclusão de texto.",
              "en": "Manual tables of contents desynchronize instantly as text shifts.",
              "es": "Los sumarios manuales quedan desactualizados en cuanto se modifica cualquier texto.",
            },
          },
          {
            id: "q2-c",
            text: {
              "pt-BR": "Alterar a extensão do arquivo de .docx para .txt e reabrir no Word para forçar o reconhecimento automático dos títulos.",
              "en": "Rename file extension from .docx to .txt and reopen in Word to trigger automated heading detection.",
              "es": "Cambiar la extensión a .txt y reabrir en Word para forzar la detección automática.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Salvar como .txt remove toda a formatação, imagens e tabelas do documento.",
              "en": "Saving as .txt strips all formatting, images, and tables.",
              "es": "Guardar como .txt elimina todo formato, imágenes y tablas.",
            },
          },
          {
            id: "q2-d",
            text: {
              "pt-BR": "Substituir a fonte Arial por Calibri, pois o gerador de sumário do Word só lê estilos padrão da fonte Calibri.",
              "en": "Switch font from Arial to Calibri because Word's TOC engine only parses default Calibri headings.",
              "es": "Cambiar la fuente a Calibri porque el motor de sumario de Word solo lee Calibri.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "O sumário depende do nível de tópico (Outline Level / Estilos Título 1..9), independente do tipo ou cor da fonte utilizada.",
              "en": "TOC generation relies on heading outline levels, irrespective of font family or color.",
              "es": "El sumario depende de los niveles de esquema (Estilos Título 1..9), sin importar la tipografía.",
            },
          },
        ],
      },
      {
        id: "q-wrd-3",
        order: 3,
        question: {
          "pt-BR": "Em um laudo técnico, uma planilha orçamentária de 14 colunas precisa ficar em orientação Paisagem (horizontal) ocupando 2 páginas no meio do documento, enquanto o restante permanece em orientação Retrato (vertical). Além disso, a tabela quebra de uma página para outra e perde a legenda superior. Quais procedimentos resolvem ambos os requisitos?",
          "en": "In a technical report, a 14-column budget table must be in Landscape orientation spanning 2 pages in the middle of a Portrait document. In addition, when the table breaks across pages, the top header row disappears. Which combined procedures resolve both requirements?",
          "es": "En un informe técnico, una tabla de 14 columnas debe ir en orientación Horizontal ocupando 2 páginas en medio de un documento Vertical. Además, al partirse entre páginas, pierde la fila de encabezados. ¿Qué procedimientos resuelven ambos requisitos?",
        },
        options: [
          {
            id: "q3-a",
            text: {
              "pt-BR": "Inserir Quebras de Seção (Próxima Página) antes e depois do trecho da tabela alterando a orientação daquela seção para Paisagem; e na guia Layout da Tabela, ativar 'Repetir Linhas de Cabeçalho'.",
              "en": "Insert Section Breaks (Next Page) before and after the table section setting only that section to Landscape; and under Table Layout tab, activate 'Repeat Header Rows'.",
              "es": "Insertar Saltos de Sección (Página siguiente) antes y después de la tabla configurando esa sección en Horizontal; y en la pestaña Disposición de Tabla, activar 'Repetir filas de título'.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A Quebra de Seção isola a orientação geométrica da página, e 'Repetir Linhas de Cabeçalho' replica o topo da tabela automaticamente em cada quebra de página subsequente.",
              "en": "Correct! Section breaks isolate page orientation, and 'Repeat Header Rows' duplicates the top row across page splits.",
              "es": "¡Correcto! Los saltos de sección aíslan la orientación, y 'Repetir filas de título' replica el encabezado al dividirse la tabla.",
            },
          },
          {
            id: "q3-b",
            text: {
              "pt-BR": "Girar o texto da tabela em 90 graus nas propriedades de alinhamento e duplicar manualmente a primeira linha da tabela colando-a na página seguinte.",
              "en": "Rotate table text 90 degrees in alignment properties and manually copy-paste the header row onto the next page.",
              "es": "Girar el texto 90 grados y copiar y pegar manualmente la fila de encabezado en la siguiente página.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Girar o texto não altera o tamanho da página e torna a leitura desconfortável. Duplicações manuais de cabeçalho desalinham se linhas forem inseridas antes.",
              "en": "Rotating text does not adjust page width. Manual header copy breaks as rows shift.",
              "es": "Girar el texto no ajusta el ancho de página. El pegado manual se descuadra si se agregan filas arriba.",
            },
          },
          {
            id: "q3-c",
            text: {
              "pt-BR": "Converter a tabela inteira em imagem PNG, girar a imagem horizontalmente e marcar a opção 'Quebra Automática de Texto: Superior e Inferior'.",
              "en": "Convert the entire table to a PNG screenshot, rotate horizontally, and select 'Text Wrapping: Top and Bottom'.",
              "es": "Convertir la tabla en imagen PNG, rotarla horizontalmente y aplicar 'Ajuste de texto: Arriba y abajo'.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Imagens perdem nitidez, impedem busca de texto (Ctrl+L), não permitem edição de dados e violam padrões corporativos de acessibilidade.",
              "en": "Raster images degrade quality, prevent text search, block editing, and breach accessibility standards.",
              "es": "Las imágenes pierden nitidez, bloquean la búsqueda de texto y la edición.",
            },
          },
          {
            id: "q3-d",
            text: {
              "pt-BR": "Inserir Quebra de Página simples (Ctrl+Enter) e alterar a orientação para Paisagem selecionando a opção 'Aplicar a: Deste ponto em diante'.",
              "en": "Insert a simple Page Break (Ctrl+Enter) and change orientation to Landscape choosing 'Apply to: This point forward'.",
              "es": "Insertar Salto de página simple y cambiar orientación a Horizontal seleccionando 'De aquí en adelante'.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Mesmo que 'Deste ponto em diante' crie uma quebra de seção implicitamente, essa opção não resolve a repetição automática do cabeçalho da tabela nas quebras.",
              "en": "While 'This point forward' auto-creates section breaks, it does not enable repeating table headers.",
              "es": "Aunque genera un salto de sección implícito, no activa la repetición automática de los encabezados de tabla.",
            },
          },
        ],
      },
      {
        id: "q-wrd-4",
        order: 4,
        question: {
          "pt-BR": "Você precisa enviar a minuta de um contrato de prestação de serviços para revisão técnica de 4 supervisores. Eles devem poder sugerir edições e inserir comentários explicativos, mas NÃO devem poder aceitar/rejeitar alterações nem desativar o 'Controlar Alterações'. Como configurar essa proteção?",
          "en": "You must share a contract draft for review by 4 supervisors. They must be allowed to track edits and insert comments, but must NOT be able to accept/reject revisions or turn off Track Changes. How is this enforced?",
          "es": "Debe enviar un borrador de contrato para revisión de 4 supervisores. Deben poder proponer cambios e insertar comentarios, pero NO aceptar/rechazar revisiones ni desactivar el Control de Cambios. ¿Cómo se configura?",
        },
        options: [
          {
            id: "q4-a",
            text: {
              "pt-BR": "Salvar o documento com senha de proteção contra gravação em Arquivo > Salvar Como > Ferramentas > Opções Gerais > Senha de Gravação.",
              "en": "Save with write-reservation password under File > Save As > Tools > General Options > Password to modify.",
              "es": "Guardar con contraseña de escritura en Archivo > Guardar como > Herramientas > Opciones generales.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A senha de gravação impede a gravação no mesmo arquivo, mas permite salvar uma cópia desprotegida com alterações não rastreadas.",
              "en": "Password to modify blocks overwriting the file but allows saving an unverified fresh copy without revisions.",
              "es": "La contraseña de escritura solo bloquea sobrescribir, pero permite guardar copias sin rastreo.",
            },
          },
          {
            id: "q4-b",
            text: {
              "pt-BR": "Na guia Revisão, clicar em 'Restringir Edição', marcar 'Permitir apenas este tipo de edição: Alterações Controladas' e ativar a proteção definindo uma senha mestre.",
              "en": "On the Review tab, click 'Restrict Editing', check 'Allow only this type of editing: Tracked changes', and click 'Yes, Start Enforcing Protection' setting a master password.",
              "es": "En la pestaña Revisar, hacer clic en 'Restringir edición', marcar 'Permitir solo este tipo de edición: Marcas de revisión' y activar la protección con contraseña.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Isso bloqueia o recurso 'Controlar Alterações' em modo ligado permanente e impede os botões Aceitar/Rejeitar, permitindo apenas edições que fiquem registradas para posterior validação do gestor.",
              "en": "Correct! Locks Track Changes in permanently active mode and disables Accept/Reject buttons without the master password.",
              "es": "¡Correcto! Bloquea el Control de Cambios en modo activo permanente e inhabilita Aceptar/Rechazar sin la contraseña.",
            },
          },
          {
            id: "q4-c",
            text: {
              "pt-BR": "Converter o documento para formato PDF protegido e solicitar anotações através do Adobe Acrobat Reader.",
              "en": "Convert document to encrypted PDF and request annotations via Adobe Acrobat Reader.",
              "es": "Convertir a PDF protegido y solicitar anotaciones mediante Adobe Acrobat Reader.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Comentários em PDF exigem redigitação manual posterior de cada cláusula e alteração de texto no arquivo DOCX original.",
              "en": "PDF commenting requires tedious manual retyping of edits back into the primary DOCX contract.",
              "es": "Los comentarios en PDF obligan a reescribir manualmente cada cambio en el DOCX original.",
            },
          },
          {
            id: "q4-d",
            text: {
              "pt-BR": "Marcar o arquivo como 'Somente Leitura' nas Propriedades do Windows Explorer antes de anexá-lo ao e-mail de envio.",
              "en": "Set file attribute to 'Read-only' in Windows Explorer properties before attaching to email.",
              "es": "Marcar el archivo como 'Solo lectura' en las propiedades de Windows Explorer antes de enviarlo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Atributos de sistema de arquivos do Windows não se propagam pela maioria dos clientes de e-mail e podem ser desmarcados facilmente por qualquer usuário.",
              "en": "Local OS file attributes are stripped across mail clients and easily toggled off.",
              "es": "Los atributos de Windows se pierden en envíos por correo y se desactivan con un clic.",
            },
          },
        ],
      },
      {
        id: "q-wrd-5",
        order: 5,
        question: {
          "pt-BR": "O rodapé de um relatório exibe o campo dinâmico de total de páginas: 'Página X de Y' (códigos PAGE e NUMPAGES). Após excluir 6 páginas de anexos, o rodapé continuou indicando 'Página 2 de 24', mesmo o documento tendo agora apenas 18 páginas. Qual é a causa e como atualizar os campos?",
          "en": "A report footer features dynamic page numbers: 'Page X of Y' (using PAGE and NUMPAGES codes). After deleting 6 pages of annexes, the footer still shows 'Page 2 of 24' even though the document now contains only 18 pages. What causes this and how is it updated?",
          "es": "El pie de página contiene 'Página X de Y' (campos PAGE y NUMPAGES). Tras eliminar 6 páginas de anexos, sigue mostrando 'Página 2 de 24' cuando ahora tiene 18 páginas. ¿Cuál es la causa y cómo se actualiza?",
        },
        options: [
          {
            id: "q5-a",
            text: {
              "pt-BR": "O Word corrompeu o cache do contador; é necessário recortar o texto inteiro (Ctrl+X) e colar em um documento em branco.",
              "en": "Word page counter cache is corrupted; you must cut the entire document (Ctrl+X) and paste into a new blank file.",
              "es": "Word dañó la memoria del contador; es necesario cortar todo (Ctrl+X) y pegar en un documento nuevo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Não há corrupção. Campos dinâmicos do Word não são recalculados em tempo real a cada digitação para economizar processamento.",
              "en": "No corruption occurred. Dynamic field codes do not auto-recalculate on every keystroke to optimize performance.",
              "es": "No hay daño. Los códigos de campo no se recalculan en tiempo real para ahorrar rendimiento.",
            },
          },
          {
            id: "q5-b",
            text: {
              "pt-BR": "Campos dinâmicos exigem atualização manual ou disparo de evento de impressão. Correção: Pressionar Ctrl+T (selecionar tudo) seguido de F9 (atualizar campos), ou ir em Imprimir.",
              "en": "Dynamic fields require explicit updating or a print trigger. Fix: Press Ctrl+A (select all) followed by F9 (update fields), or enter the Print preview.",
              "es": "Los campos dinámicos requieren actualización manual o evento de impresión. Solución: Presionar Ctrl+E y F9, o entrar a Vista previa de impresión.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! F9 força o recálculo dos códigos de campo selecionados (incluindo sumários, referências cruzadas e campos NUMPAGES/SECTIONPAGES).",
              "en": "Correct! F9 triggers immediate recalculation of all selected field codes across the document.",
              "es": "¡Correcto! F9 recalcula de inmediato los códigos de campo seleccionados (sumarios, referencias y NUMPAGES).",
            },
          },
          {
            id: "q5-c",
            text: {
              "pt-BR": "O campo NUMPAGES tem limite fixo de 20 páginas; para relatórios menores deve-se utilizar exclusivamente a fórmula =SOMA(ABOVE).",
              "en": "NUMPAGES has an architectural 20-page limit; shorter files must use =SUM(ABOVE) formula codes.",
              "es": "NUMPAGES tiene un límite fijo de 20 páginas; para menos páginas debe usarse =SUMA(ARRIBA).",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "NUMPAGES não tem limite de 20 páginas e =SOMA(ABOVE) é uma fórmula exclusiva para tabelas numéricas.",
              "en": "NUMPAGES supports documents with thousands of pages, and =SUM(ABOVE) is for table math.",
              "es": "NUMPAGES no tiene límite de páginas y =SUMA(ARRIBA) es para cálculos de tablas.",
            },
          },
          {
            id: "q5-d",
            text: {
              "pt-BR": "O documento possui Quebras de Seção vinculadas que impedem a leitura de páginas ímpares pelo processador de texto.",
              "en": "Linked section breaks prevent the text layout processor from reading odd-numbered pages.",
              "es": "Los saltos de sección vinculados bloquean la lectura de páginas impares en el procesador.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Quebras de seção vinculadas mantêm a contagem contínua normal; o que faltava era apenas a atualização do campo via F9.",
              "en": "Linked section breaks preserve continuous counting; the only missing action was refreshing via F9.",
              "es": "Los saltos de sección preservan la numeración; solo hacía falta actualizar el campo con F9.",
            },
          },
        ],
      },
      {
        id: "q-wrd-6",
        order: 6,
        question: {
          "pt-BR": "Ao inserir uma foto de inspeção técnica de 4 MB dentro de um parágrafo, ela se sobrepôs ao texto cobrindo duas frases inteiras, e ao pressionar Enter o parágrafo se deslocou deixando a imagem flutuando em local errado. Qual configuração de Quebra Automática de Texto e ancoragem resolve definitivamente esse problema?",
          "en": "When inserting a 4 MB inspection photo inside a paragraph, it covered two sentences, and pressing Enter shifted the text while leaving the picture stranded. Which Text Wrapping and anchor setup resolves this issue?",
          "es": "Al insertar una foto de inspección de 4 MB, se sobrepuso al texto tapando dos frases y al dar Enter el texto se movió dejando la imagen flotando. ¿Qué configuración de Ajuste de texto y anclaje lo resuelve?",
        },
        options: [
          {
            id: "q6-a",
            text: {
              "pt-BR": "Definir Quebra Automática como 'Em Frente ao Texto' e desativar o recurso de aceleração gráfica do Word.",
              "en": "Set Text Wrapping to 'In Front of Text' and disable Word hardware graphics acceleration.",
              "es": "Poner Ajuste de texto en 'Delante del texto' y desactivar la aceleración gráfica de Word.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "'Em Frente ao Texto' justamente faz o objeto cobrir o texto existente como uma camada flutuante sem empurrá-lo.",
              "en": "'In Front of Text' is precisely what causes the image to float over and obscure underlying content.",
              "es": "'Delante del texto' es exactamente lo que hace que la imagen tape el contenido.",
            },
          },
          {
            id: "q6-b",
            text: {
              "pt-BR": "Configurar a Quebra Automática de Texto como 'Alinhado com o Texto' (In Line with Text), tratando a imagem como um caractere de texto estável dentro do próprio parágrafo.",
              "en": "Set Text Wrapping to 'In Line with Text', treating the graphic as a stable character within the paragraph flow.",
              "es": "Configurar el Ajuste de texto como 'En línea con el texto', tratando la imagen como un carácter dentro del párrafo.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Imagens técnicas 'Em Linha com o Texto' não flutuam sobre outros elementos, não se sobrepõem e acompanham naturalmente o fluxo de parágrafos sem quebras de layout.",
              "en": "Correct! 'In Line with Text' anchors the image to text flow, preventing unwanted floating overlaps.",
              "es": "¡Correcto! 'En línea con el texto' evita que la imagen flote descontroladamente o tape información.",
            },
          },
          {
            id: "q6-c",
            text: {
              "pt-BR": "Reduzir o tamanho da imagem para menos de 100 KB usando um compressor online para que o Word consiga renderizá-la.",
              "en": "Downscale image size under 100 KB via third-party web tools so Word can parse it.",
              "es": "Reducir el tamaño a menos de 100 KB con un compresor online.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "O peso do arquivo não determina o comportamento de sobreposição geométrica, e sim o tipo de Quebra Automática de Texto (Wrapping).",
              "en": "File size does not govern geometry wrapping behavior.",
              "es": "El peso del archivo no determina el ajuste geométrico del texto.",
            },
          },
          {
            id: "q6-d",
            text: {
              "pt-BR": "Alterar a cor da imagem para escala de cinza e enviar para o plano de fundo através de 'Atrás do Texto'.",
              "en": "Convert image to grayscale and send to background using 'Behind Text'.",
              "es": "Cambiar la imagen a escala de grises y enviarla 'Detrás del texto'.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "'Atrás do Texto' coloca a imagem como marca d'água no fundo, dificultando a leitura das frases e a seleção do objeto.",
              "en": "'Behind Text' places the picture as a background watermark, harming legibility.",
              "es": "'Detrás del texto' genera confusión visual y dificulta la selección posterior.",
            },
          },
        ],
      },
      {
        id: "q-wrd-7",
        order: 7,
        question: {
          "pt-BR": "Em um documento com duas colunas estilo artigo técnico, você precisa inserir um título de subtítulo centralizado que atravesse toda a largura da página (ocupando 1 coluna larga) e, logo abaixo dele, o texto volte a correr normalmente em 2 colunas. Qual elemento técnico permite essa transição dentro da mesma página sem forçar o texto para uma página seguinte?",
          "en": "In a 2-column technical paper layout, you need a centered sub-heading spanning the full page width (single column), followed immediately below by text continuing in 2 columns. Which element enables this on the same page without forcing a page break?",
          "es": "En un documento a dos columnas, necesita un subtítulo centrado que ocupe todo el ancho de página (1 columna) y luego el texto continúe a 2 columnas en la misma página. ¿Qué elemento permite esta transición?",
        },
        options: [
          {
            id: "q7-a",
            text: {
              "pt-BR": "Quebra de Seção Contínua (Continuous Section Break).",
              "en": "Continuous Section Break.",
              "es": "Salto de Sección Continuo.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A Quebra de Seção Contínua permite alterar o número de colunas, margens ou outros atributos de página sem iniciar uma nova folha.",
              "en": "Correct! Continuous Section Breaks toggle column formatting on the same physical page without a page split.",
              "es": "¡Correcto! El Salto de Sección Continuo permite variar el número de columnas dentro de la misma hoja.",
            },
          },
          {
            id: "q7-b",
            text: {
              "pt-BR": "Quebra de Coluna simples (Ctrl+Shift+Enter).",
              "en": "Column Break (Ctrl+Shift+Enter).",
              "es": "Salto de Columna (Ctrl+Mayús+Enter).",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Quebra de coluna apenas empurra o texto para o topo da coluna seguinte; ela não altera o número de colunas da página.",
              "en": "A column break merely shunts text to the next column top without altering the column count.",
              "es": "Un salto de columna solo traslada el texto a la columna contigua sin cambiar el esquema de columnas.",
            },
          },
          {
            id: "q7-c",
            text: {
              "pt-BR": "Quebra de Página simples (Ctrl+Enter).",
              "en": "Standard Page Break (Ctrl+Enter).",
              "es": "Salto de Página estándar (Ctrl+Enter).",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A quebra de página obriga o texto a saltar para uma nova folha, violando o requisito de manter tudo na mesma página.",
              "en": "Standard page break throws text onto a fresh sheet, breaking the same-page requirement.",
              "es": "El salto de página envía el contenido a la hoja siguiente.",
            },
          },
          {
            id: "q7-d",
            text: {
              "pt-BR": "Caixa de Texto com alinhamento manual e borda invisível.",
              "en": "Floating Text Box with hidden borders and manual coordinates.",
              "es": "Cuadro de texto flotante sin bordes.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Caixas de texto flutuantes quebram a acessibilidade de leitores de tela e desalinham quando o fluxo de parágrafos é alterado.",
              "en": "Floating text boxes break accessibility reading orders and slip out of alignment.",
              "es": "Los cuadros de texto flotantes desalinean el flujo y rompen la accesibilidad.",
            },
          },
        ],
      },
      {
        id: "q-wrd-8",
        order: 8,
        question: {
          "pt-BR": "Na Mala Direta (Mail Merge) de convocações de treinamento, uma coluna do Excel chamada 'Data_Exame' contém datas como '14/05/2026', mas ao inserir o campo MERGEFIELD «Data_Exame» na carta modelo do Word, a data é exibida no formato americano indesejado '5/14/2026 12:00:00 AM'. Qual código de campo (switch) corrige a formatação no Word?",
          "en": "During a Mail Merge from an Excel list, the 'Exam_Date' column holds '14/05/2026', but inserting MERGEFIELD «Exam_Date» displays '5/14/2026 12:00:00 AM'. Which field switch fixes the date format in Word?",
          "es": "En Combinar correspondencia desde Excel, la columna 'Fecha_Examen' tiene '14/05/2026', pero el campo MERGEFIELD muestra '5/14/2026 12:00:00 AM'. ¿Qué código de campo (modificador) corrige el formato en Word?",
        },
        options: [
          {
            id: "q8-a",
            text: {
              "pt-BR": "Pressionar Alt+F9 para exibir códigos de campo e editar para: { MERGEFIELD Data_Exame \\@ \"dd/MM/yyyy\" }",
              "en": "Press Alt+F9 to reveal field codes and edit to: { MERGEFIELD Exam_Date \\@ \"dd/MM/yyyy\" }",
              "es": "Presionar Alt+F9 para ver códigos y editar a: { MERGEFIELD Fecha_Examen \\@ \"dd/MM/yyyy\" }",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O modificador \\@ instrui o Word a formatar campos de data conforme a máscara especificada (dd = dia com 2 dígitos, MM = mês, yyyy = ano com 4 dígitos).",
              "en": "Correct! The \\@ picture switch enforces custom date string masks in Word field codes.",
              "es": "¡Correcto! El modificador \\@ aplica máscaras personalizadas de fecha a los códigos de campo en Word.",
            },
          },
          {
            id: "q8-b",
            text: {
              "pt-BR": "Alterar a formatação da célula no Excel para texto e reiniciar o computador.",
              "en": "Change cell format to Text in Excel and reboot the workstation.",
              "es": "Cambiar el formato a Texto en Excel y reiniciar el equipo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "A conexão OLE DB da Mala Direta lê o valor bruto do Excel; sem o switch de formatação no Word o horário continuará sendo exibido.",
              "en": "OLE DB mail merge links pull raw datetime stamps regardless of Excel display styles unless masked in Word.",
              "es": "El motor de correspondencia lee datos crudos; requiere el modificador de formato en Word.",
            },
          },
          {
            id: "q8-c",
            text: {
              "pt-BR": "Utilizar o switch numérico: { MERGEFIELD Data_Exame \\# \"#.##0,00\" }",
              "en": "Use the numeric switch: { MERGEFIELD Exam_Date \\# \"#.##0,00\" }",
              "es": "Usar el modificador numérico: { MERGEFIELD Fecha_Examen \\# \"#.##0,00\" }",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "O modificador \\# aplica-se apenas a números e valores monetários, não a formatos de data.",
              "en": "\\# is the numeric picture switch, not date formatting.",
              "es": "El modificador \\# es exclusivamente para números y monedas, no para fechas.",
            },
          },
          {
            id: "q8-d",
            text: {
              "pt-BR": "Desativar o idioma Português no Word e ativar o corretor em Espanhol internacional.",
              "en": "Disable Portuguese proofing tools and switch default language to Spanish.",
              "es": "Desactivar la corrección en Portugués y cambiar el idioma a Español.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "O idioma da revisão ortográfica não altera as máscaras de renderização de campos dinâmicos da Mala Direta.",
              "en": "Proofing language has zero influence on mergefield date masks.",
              "es": "El idioma del corrector no afecta la máscara de renderizado de campos.",
            },
          },
        ],
      },
      {
        id: "q-wrd-9",
        order: 9,
        question: {
          "pt-BR": "Ao compilar um laudo com mais de 30 fotos de alta resolução, o arquivo .docx atingiu 180 MB, ficando lento para abrir e sendo bloqueado pelo servidor de e-mail corporativo (limite de 25 MB). Qual é a ferramenta interna nativa do Word recomendada para reduzir drasticamente o tamanho do arquivo preservando a resolução necessária para leitura e impressão?",
          "en": "After compiling an engineering report with 30 high-res photos, the .docx reached 180 MB, opening sluggishly and getting bounced by mail gateways (25 MB limit). Which native Word feature drasticaly optimizes file size while keeping printable quality?",
          "es": "Al incluir más de 30 fotos de alta resolución, el .docx alcanzó 180 MB, abriendo lento y rebotando en el correo (límite 25 MB). ¿Qué función nativa de Word reduce drásticamente el tamaño manteniendo calidad de impresión?",
        },
        options: [
          {
            id: "q9-a",
            text: {
              "pt-BR": "Selecionar qualquer imagem, acessar 'Formato de Imagem' > 'Comprimir Imagens', marcar 'Excluir áreas cortadas de imagens' e selecionar a resolução 'Impressão (220 ppi)' ou 'Padrão (150 ppi)' aplicando a todas as imagens.",
              "en": "Select any image, open 'Picture Format' > 'Compress Pictures', check 'Delete cropped areas of pictures', and pick 'Print (220 ppi)' or 'Good for Web/Screen (150 ppi)' applying to all pictures in document.",
              "es": "Seleccionar cualquier imagen, ir a 'Formato de imagen' > 'Comprimir imágenes', marcar 'Eliminar las áreas recortadas' y elegir resolución 'Impresión (220 ppp)' o 'Estándar (150 ppp)' para todo el documento.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Esse comando descarta os dados brutos ocultos de cortes e reamostra as fotos para a resolução adequada, reduzindo arquivos de 180 MB para menos de 15 MB sem perda visual perceptível.",
              "en": "Correct! Strips hidden cropped pixels and downsamples camera raw files to clean 220/150 ppi.",
              "es": "¡Correcto! Elimina píxeles ocultos recortados y remuestrea fotos para reducir archivos pesados sin pérdida visual.",
            },
          },
          {
            id: "q9-b",
            text: {
              "pt-BR": "Salvar o documento em formato .DOC antigo do Word 97-2003, que possui algoritmo de compressão proprietário superior.",
              "en": "Save as legacy Word 97-2003 .DOC format which utilizes stronger compression algorithms.",
              "es": "Guardar en formato .DOC antiguo de Word 97-2003.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "O formato binário antigo .DOC gera arquivos até 3 vezes maiores que o formato XML comprimido moderno .DOCX.",
              "en": "Legacy .DOC binary formats produce files up to 3x larger than zipped .DOCX XML containers.",
              "es": "El formato .DOC antiguo es binario y genera archivos más pesados que el .DOCX moderno.",
            },
          },
          {
            id: "q9-c",
            text: {
              "pt-BR": "Excluir todas as fotos do documento e substituí-las por hiperlinks apontando para uma pasta no Google Drive pessoal do autor.",
              "en": "Delete all figures and replace with hyperlinks to an external personal Google Drive folder.",
              "es": "Eliminar todas las fotos y reemplazarlas por enlaces a Google Drive.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Inaceitável para laudos formais e auditorias ISO, além de violar normas de segurança da informação e privacidade de dados.",
              "en": "Violates corporate security compliance and ISO document audit integrity.",
              "es": "Inaceptable en auditorías formales y viola políticas corporativas de seguridad.",
            },
          },
          {
            id: "q9-d",
            text: {
              "pt-BR": "Alterar a extensão do arquivo para .zip, excluir a pasta de mídias e renomear de volta para .docx.",
              "en": "Rename to .zip, delete internal media folder, and rename back to .docx.",
              "es": "Renombrar a .zip, borrar la carpeta media y volver a .docx.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Excluir a pasta de mídia remove todas as fotos do documento, exibindo ícones de erro e corrompendo referências.",
              "en": "Deleting media folder removes all artwork, leaving broken picture placeholders.",
              "es": "Eliminar la carpeta media borra todas las fotos dejando marcadores de error.",
            },
          },
        ],
      },
      {
        id: "q-wrd-10",
        order: 10,
        question: {
          "pt-BR": "Em um documento colaborativo com múltiplos revisores, como comparar automaticamente a versão original de um relatório técnico com a versão editada por um terceiro para identificar todas as adições, exclusões e alterações sem depender que o autor tenha deixado o 'Controlar Alterações' ativado?",
          "en": "In a multi-author document workflow, how do you automatically compare an original technical report against an edited version to audit all additions, deletions, and moves without relying on Track Changes having been active?",
          "es": "En un documento con varios revisores, ¿cómo comparar automáticamente el original de un informe técnico con la versión editada para auditar cambios sin depender de que el Control de Cambios haya estado activo?",
        },
        options: [
          {
            id: "q10-a",
            text: {
              "pt-BR": "Abrir os dois arquivos lado a lado na tela e ler visualmente parágrafo por parágrafo marcando as divergências com marca-texto.",
              "en": "Open both documents side-by-side and manually proofread paragraph by paragraph using highlight pens.",
              "es": "Abrir ambos archivos en paralelo y leer manualmente párrafo a párrafo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Método manual lento, exaustivo e altamente sujeito a erros humanos em relatórios volumosos.",
              "en": "Extremely slow, exhausting, and prone to severe human oversight in multi-page documents.",
              "es": "Método manual lento y muy propenso a errores humanos.",
            },
          },
          {
            id: "q10-b",
            text: {
              "pt-BR": "Na guia Revisão, clicar em 'Comparar' > 'Comparar...', selecionar o Documento Original e o Documento Revisado; o Word gera um terceiro documento consolidado exibindo todas as discrepâncias em marcas de revisão.",
              "en": "On the Review tab, click 'Compare' > 'Compare...', select Original and Revised documents; Word builds a third comparison file highlighting all variances as tracked revisions.",
              "es": "En la pestaña Revisar, ir a 'Comparar' > 'Comparar...', seleccionar documento Original y Revisado; Word genera un tercer documento mostrando todas las diferencias como marcas de revisión.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O recurso nativo 'Comparar Documentos' analisa as diferenças binárias de texto, pontuação, tabelas e formatação entre dois arquivos e cria um documento consolidado com marcas de revisão completas.",
              "en": "Correct! Native 'Compare Documents' analyzes binary differences in text and formatting, compiling an audited tracked-changes file.",
              "es": "¡Correcto! La herramienta 'Comparar' genera un tercer archivo consolidando todas las diferencias con marcas de revisión.",
            },
          },
          {
            id: "q10-c",
            text: {
              "pt-BR": "Copiar o conteúdo dos dois documentos para o Bloco de Notas e executar o comando 'Localizar Próxima'.",
              "en": "Copy content of both files into Notepad and run 'Find Next' repeatedly.",
              "es": "Copiar ambos textos al Bloc de notas y usar 'Buscar siguiente'.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "O Bloco de Notas perde formatação, tabelas e cabeçalhos, e não realiza comparação diferencial automatizada.",
              "en": "Notepad strips styling and cannot perform automated algorithmic diffing.",
              "es": "El Bloc de notas descarta formatos y no realiza comparaciones diferenciales.",
            },
          },
          {
            id: "q10-d",
            text: {
              "pt-BR": "Clicar em 'Proteger Documento' > 'Criptografar com Senha' para forçar o Word a sincronizar as alterações via nuvem.",
              "en": "Click 'Protect Document' > 'Encrypt with Password' to force cloud diff synchronization.",
              "es": "Hacer clic en 'Cifrar con contraseña' para forzar sincronización en la nube.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Criptografia serve apenas para segurança de abertura e não executa análise diferencial de versões.",
              "en": "Encryption secures file access and has nothing to do with document comparison.",
              "es": "El cifrado solo protege el acceso, no compara versiones.",
            },
          },
        ],
      },
    ],
  },
};

