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
    estimatedMinutes: 25,
    questionsCount: 5,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação final sobre formatação corporativa, sumários automáticos, quebras de seção e segurança documental no Microsoft Word. Nota mínima de 70% para emissão do certificado.",
      "en": "Final examination on corporate formatting, automated ToC, section breaks, and document security. 70% passing score.",
      "es": "Evaluación final de formato corporativo, tablas de contenido, saltos de sección y seguridad en Word. Nota mínima de 70%.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência — Word Corporativo",
      "en": "Final Competency Exam — Corporate Word",
      "es": "Evaluación Final de Competencias — Word Corporativo",
    },
    description: {
      "pt-BR": "Validação de domínio em Estilos de Título, sumário automático, quebras de seção para orientação mista de páginas, repetição de cabeçalho em tabelas e proteção de documentos por senha.",
      "en": "Validates proficiency in Heading Styles, automated ToC, section breaks for mixed orientation, repeating table headers, and password encryption.",
      "es": "Valida competencias en estilos de título, tablas de contenido automáticas, saltos de sección, tablas avanzadas y seguridad con clave.",
    },
    questions: [
      {
        id: "q-wrd-1",
        order: 1,
        question: {
          "pt-BR": "1. Para criar um relatório técnico contendo algumas páginas em orientação Retrato e outras páginas intermediárias em orientação Paisagem (para abrigar um cronograma longo), qual recurso do Word deve ser obrigatoriamente utilizado?",
          "en": "1. To create a report mixing Portrait pages with Landscape pages for a wide schedule, which Word feature is mandatory?",
          "es": "1. Para diseñar un informe con páginas en orientación Vertical y otras intermedias en Horizontal, ¿qué función es obligatoria?",
        },
        options: [
          {
            id: "opt-wrd-1-a",
            text: {
              "pt-BR": "Inserir Quebras de Seção (Próxima Página) antes e depois do trecho que ficará em modo Paisagem, permitindo configurações de página independentes.",
              "en": "Insert Section Breaks (Next Page) before and after the landscape excerpt, isolating page layout settings.",
              "es": "Insertar Saltos de Sección (Página Siguiente) antes y después del bloque horizontal para aislar la configuración.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! As quebras de seção são as únicas que permitem variar a orientação da página, margens ou cabeçalhos dentro do mesmo arquivo.",
              "en": "Correct! Section breaks are required to isolate page orientation, margins, or headers within a single document.",
              "es": "¡Correcto! Los saltos de sección permiten independizar la orientación y los márgenes en un mismo archivo.",
            },
          },
          {
            id: "opt-wrd-1-b",
            text: {
              "pt-BR": "Pressionar a tecla Enter 50 vezes até que o programa mude a orientação por conta própria.",
              "en": "Press Enter 50 times until Word automatically flips the orientation.",
              "es": "Presionar Enter repetidamente hasta que el programa cambie de página.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Enters em branco apenas criam parágrafos vazios e desconfiguram todo o arquivo.",
              "en": "Incorrect. Empty Enters only corrupt document layout.",
              "es": "Incorrecto. Los enters vacíos desconfiguran el documento.",
            },
          },
          {
            id: "opt-wrd-1-c",
            text: {
              "pt-BR": "Criar dois arquivos completamente separados e colá-los fisicamente com fita adesiva após imprimir.",
              "en": "Create two separate files and physically tape pages together after printing.",
              "es": "Crear dos archivos separados e imprimirlos por separado.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O Word permite a integração perfeita de orientações através das seções.",
              "en": "Incorrect. Section breaks handle mixed orientations seamlessly.",
              "es": "Incorrecto. Los saltos de sección resuelven esto dentro del mismo documento.",
            },
          },
        ],
      },
      {
        id: "q-wrd-2",
        order: 2,
        question: {
          "pt-BR": "2. Qual é a condição essencial para que o Microsoft Word consiga gerar e atualizar um Sumário (Índice) de forma 100% automática com apenas um clique?",
          "en": "2. What is the fundamental requirement for Word to generate and update an automated Table of Contents with one click?",
          "es": "2. ¿Cuál es el requisito indispensable para que Word genere y actualice una Tabla de Contenido automáticamente?",
        },
        options: [
          {
            id: "opt-wrd-2-a",
            text: {
              "pt-BR": "Aplicar os Estilos de Título nativos (Título 1, Título 2, Título 3) nos cabeçalhos e seções do documento.",
              "en": "Format all chapter headings with native Heading Styles (Heading 1, Heading 2, Heading 3).",
              "es": "Aplicar los Estilos de Título oficiales (Título 1, Título 2, Título 3) en los encabezados del documento.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O sumário automático lê os marcadores hierárquicos definidos pelos Estilos de Título.",
              "en": "Correct! Automated ToC scans for Heading Style tags to build its index and page references.",
              "es": "¡Correcto! La tabla automática busca las etiquetas de estilos de título para indexar el documento.",
            },
          },
          {
            id: "opt-wrd-2-b",
            text: {
              "pt-BR": "Digitar os pontos finais manualmente um por um (... ...) até encostar no número da página.",
              "en": "Manually type periods (... ...) repeatedly to push page numbers to the margin.",
              "es": "Escribir puntos suspensivos manualmente hasta llegar al número de página.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e amador. Pontos manuais desalinham sempre que o texto é editado ou impresso.",
              "en": "Incorrect. Manual dots break alignment on font or screen changes.",
              "es": "Incorrecto. Los puntos manuales se desalinean ante cualquier cambio de texto.",
            },
          },
          {
            id: "opt-wrd-2-c",
            text: {
              "pt-BR": "O documento deve ter no máximo 2 páginas de extensão total.",
              "en": "The document must not exceed two pages total.",
              "es": "El documento debe tener como máximo 2 páginas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Sumários são especialmente úteis e recomendados em documentos extensos.",
              "en": "Incorrect. Tables of contents are designed specifically for long publications.",
              "es": "Incorrecto. Los sumarios se utilizan precisamente en documentos extensos.",
            },
          },
        ],
      },
      {
        id: "q-wrd-3",
        order: 3,
        question: {
          "pt-BR": "3. Ao trabalhar com uma tabela extensa de medição de serviços que ultrapassa várias páginas impressas, qual opção do Word faz com que a linha de cabeçalho da tabela se repita automaticamente no topo de cada nova página?",
          "en": "3. When dealing with a multi-page table, which setting automatically repeats the header row at the top of each new page?",
          "es": "3. Al trabajar con una tabla técnica extensa que abarca varias páginas, ¿qué opción repite el encabezado en cada página?",
        },
        options: [
          {
            id: "opt-wrd-3-a",
            text: {
              "pt-BR": "Selecionar a primeira linha da tabela e ativar a opção 'Repetir Linhas de Cabeçalho' na guia Layout da Tabela.",
              "en": "Select the top row and toggle 'Repeat Header Rows' in Table Layout tools.",
              "es": "Seleccionar la primera fila y activar 'Repetir filas de título' en la pestaña Disposición de Tabla.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Esse recurso garante legibilidade e profissionalismo em qualquer tabela multipáginas sem necessidade de retrabalho manual.",
              "en": "Correct! Keeps multipage tables clean and readable without manual copy-pasting.",
              "es": "¡Correcto! Asegura que los títulos de las columnas aparezcan automáticamente en cada página.",
            },
          },
          {
            id: "opt-wrd-3-b",
            text: {
              "pt-BR": "Copiar e colar a linha manualmente no final de cada folha.",
              "en": "Manually copy and paste header text at each page break.",
              "es": "Copiar y pegar la fila manualmente en cada corte de página.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Se uma linha for adicionada no início, o cabeçalho colado manualmente se deslocará para o meio da página.",
              "en": "Incorrect. Manual rows shift into the middle of the table whenever prior rows are edited.",
              "es": "Incorrecto. Se descoloca en cuanto se añade o quita texto.",
            },
          },
          {
            id: "opt-wrd-3-c",
            text: {
              "pt-BR": "Diminuir o tamanho da fonte para 4 pontos para forçar a tabela inteira a caber em uma única folha.",
              "en": "Shrink font size to 4 points to cram the entire table onto one sheet.",
              "es": "Reducir la letra a tamaño 4 para obligar a que entre en una página.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Torna o documento ilegível e reprovado em auditorias de qualidade.",
              "en": "Incorrect. Renders the report illegible and non-compliant.",
              "es": "Incorrecto. Deja el documento ilegible.",
            },
          },
        ],
      },
      {
        id: "q-wrd-4",
        order: 4,
        question: {
          "pt-BR": "4. Ao enviar uma minuta de contrato confidencial ou procedimento operacional para um cliente ou terceiro, qual recurso de segurança impede que o documento seja aberto sem autorização?",
          "en": "4. When sending a confidential contract draft or SOP, which security feature prevents opening the file without authorization?",
          "es": "4. Al enviar una minuta de contrato confidencial, ¿qué función de seguridad impide abrir el archivo sin autorización?",
        },
        options: [
          {
            id: "opt-wrd-4-a",
            text: {
              "pt-BR": "Criptografar o arquivo com senha de abertura no menu Arquivo > Informações > Proteger Documento.",
              "en": "Encrypt with password via File > Info > Protect Document.",
              "es": "Cifrar con contraseña en el menú Archivo > Información > Proteger documento.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A criptografia AES do Word exige a senha para descriptografar os dados do arquivo, impedindo acessos não autorizados.",
              "en": "Correct! AES encryption strictly blocks unauthorized access without the exact decryption passkey.",
              "es": "¡Correcto! El cifrado con contraseña bloquea el acceso no autorizado al contenido.",
            },
          },
          {
            id: "opt-wrd-4-b",
            text: {
              "pt-BR": "Mudar a cor do texto para branco para que ninguém consiga ler.",
              "en": "Change the font color to white so nobody can see it.",
              "es": "Pintar la letra de color blanco para ocultar el texto.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Qualquer pessoa pode selecionar o texto ou mudar a cor de fundo para ler.",
              "en": "Incorrect. Trivial to highlight or revert font colors.",
              "es": "Incorrecto. Cualquiera puede seleccionar el texto para leerlo.",
            },
          },
          {
            id: "opt-wrd-4-c",
            text: {
              "pt-BR": "Salvar o documento com um nome estranho para despistar curiosos.",
              "en": "Save the file with a disguised filename.",
              "es": "Guardar el archivo con un nombre secreto.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Não oferece proteção real contra abertura ou vazamento.",
              "en": "Incorrect. Offers zero cryptographic protection.",
              "es": "Incorrecto. No provee ninguna seguridad real.",
            },
          },
        ],
      },
      {
        id: "q-wrd-5",
        order: 5,
        question: {
          "pt-BR": "5. Qual a principal vantagem de exportar um procedimento ou relatório técnico do Word para PDF antes de compartilhá-lo com clientes industriais e fiscais de parada?",
          "en": "5. What is the primary advantage of exporting a technical report from Word to PDF before sharing with clients?",
          "es": "5. ¿Cuál es la principal ventaja de exportar un informe técnico a PDF antes de compartirlo con clientes?",
        },
        options: [
          {
            id: "opt-wrd-5-a",
            text: {
              "pt-BR": "Garante a fixação e imutabilidade visual do layout em qualquer dispositivo ou sistema operacional, impedindo alterações acidentais de formatação, quebras de página ou edição indevida de dados.",
              "en": "Locks visual layout consistency across all devices and operating systems, preventing accidental formatting corruption and unauthorized edits.",
              "es": "Asegura la fidelidad visual del documento en cualquier dispositivo, impidiendo alteraciones accidentales de formato o edición no autorizada.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O PDF é o formato padrão global para entrega de relatórios e documentos formais na indústria.",
              "en": "Correct! PDF is the global standard for tamper-resistant formal documentation exchange.",
              "es": "¡Correcto! El formato PDF es el estándar formal de entrega inalterable en la industria.",
            },
          },
          {
            id: "opt-wrd-5-b",
            text: {
              "pt-BR": "Transforma todas as palavras do texto em código binário legível apenas por robôs.",
              "en": "Converts all text into binary code only robots can parse.",
              "es": "Transforma las palabras en código binario.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O PDF mantém a tipografia e legibilidade humana perfeitamente preservadas.",
              "en": "Incorrect. PDF preserves full human readability.",
              "es": "Incorrecto. El PDF preserva la legibilidad completa.",
            },
          },
          {
            id: "opt-wrd-5-c",
            text: {
              "pt-BR": "Apaga automaticamente todas as fotos e tabelas para deixar o arquivo sem imagens.",
              "en": "Automatically deletes all images and tables to strip media.",
              "es": "Elimina fotos y tablas automáticamente.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O PDF preserva fotos com alta fidelidade.",
              "en": "Incorrect. PDF embeds photos and vector graphics crisply.",
              "es": "Incorrecto. El PDF conserva imágenes y gráficos con fidelidad.",
            },
          },
        ],
      },
    ],
  },
};
