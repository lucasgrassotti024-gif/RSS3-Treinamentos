import { CourseDemonstration } from "@/types";

export const geometriaEspacialCourseData: CourseDemonstration = {
  id: "c-geometria-espacial-industrial",
  slug: "geometria-espacial-e-trigonometria-industrial-caldeiraria",
  title: {
    "pt-BR": "Geometria Espacial Aplicada à Caldeiraria, Tubulação e Montagem Industrial",
    "en": "Spatial Geometry for Industrial Boilers, Piping & Mechanical Assembly",
    "es": "Geometría Espacial Aplicada a Calderería, Tuberías y Montaje Industrial",
  },
  description: {
    "pt-BR": "Cálculo técnico e espacial essencial para frentes industriais: poliedros (Relação de Euler), cálculo de áreas e volumes de prismas, paralelepípedos, pirâmides, tetraedros, cilindros, cones, esferas, troncos e Teorema de Pappus-Guldin para cubagem e fabricação.",
    "en": "Essential spatial geometry and technical calculations for industrial pipefitters, boiler fabricators, and riggers: Euler formula, prism/cylinder/cone volumes, surface area calculations, truncated cones/pyramids, and Pappus-Guldin theorem.",
    "es": "Cálculo técnico y espacial aplicado a calderería y tuberías: poliedros, prismas, cilindros, conos, esferas, troncos y Teorema de Pappus-Guldin para cubicación y trazado.",
  },
  longDescription: {
    "pt-BR": "O treinamento de Geometria Espacial Aplicada da RSS3 Treinamentos foi concebido para capacitar caldeireiros industriais, encanadores/tubistas, montadores de andaimes, pintores industriais, riggers/sinaleiros e projetistas mecânicos no domínio prático do cálculo volumétrico, áreas superficiais e conformação geométrica. O conteúdo avança desde os fundamentos de poliedros e a relação de Euler (V - A + F = 2), dimensionamento de tanques e reservatórios prismáticos e cilíndricos, transições de diâmetro (troncos de cone para redução de tubulação), tremonhas (troncos de pirâmide), calotas e fusos esféricos para vasos de pressão, até métodos avançados de corpos de revolução (Teorema de Pappus-Guldin). Essas competências são fundamentais para levantamento exato de chaparia, cubagem de resíduos em hidrojato/hidrovácuo, consumo de tinta por metro quadrado e cálculo de peso de peças pesadas.",
    "en": "The RSS3 Spatial Geometry for Industrial Craft course equips pipefitters, boilermakers, scaffold builders, industrial painters, and rigging teams with practical volume, area, and layout calculations. Covers Euler relations, tanks and prism fabrication, cylinder cross sections, pipe reducers (truncated cones), hoppers (truncated pyramids), spherical pressure heads, and Pappus-Guldin revolution solid theorems.",
    "es": "Capacitación en geometría espacial para caldereros, tuberos y montadores de RSS3. Cubre trazado de tolvas, reducción de tuberías, cálculo de áreas de pintura y cubicación volumétrica de tanques.",
  },
  schoolId: "mecanica-industrial",
  schoolName: {
    "pt-BR": "Manutenção Mecânica e Confiabilidade Industrial",
    "en": "Mechanical Maintenance & Asset Reliability",
    "es": "Mantenimiento Mecánico y Confiabilidad Industrial",
  },
  workloadHours: 40,
  level: "intermediate",
  modality: "online",
  isMandatory: false,
  mandatoryFor: [
    "Caldeireiro Industrial",
    "Encanador Industrial / Tubista",
    "Pintor Industrial (Cálculo de Área e Rendimento)",
    "Montador de Andaimes (Cálculo Estrutural)",
    "Rigger / Sinaleiro (Cálculo de Volume e Peso)",
    "Desenhista Projetista Mecânico",
    "Operador de Hidrojato e Hidrovácuo (Cubagem de Tanques)",
  ],
  targetAudience: {
    "pt-BR": "Caldeireiros, tubistas, encarregados de montagem, pintores técnicos, ajudantes de caldeiraria e mecânicos industriais que precisam calcular áreas de pintura, volumes de tanques, peso de estruturas e traçagem de transições.",
    "en": "Boilermakers, pipefitters, rigging crew leaders, coating technicians, and industrial mechanics calculating vessel volumes, surface areas, and component tonnage.",
    "es": "Caldereros, soldadores, tubistas y supervisores de montaje que requieren cubicación de tanques y cálculo de áreas.",
  },
  prerequisites: {
    "pt-BR": "Matemática básica (operações aritméticas, frações e noções elementares de geometria plana).",
    "en": "Basic math (fractions, arithmetic operators, and foundational 2D geometry).",
    "es": "Matemáticas básicas (operaciones elementales y nociones de geometría plana).",
  },
  modulesCount: 5,
  lessonsCount: 19,
  thumbnailGradient: "from-blue-900 via-indigo-950 to-slate-950",
  coverImage: "/images/courses/geometria.jpg",
  categories: ["conhecimento-operacional", "gestao-produtividade", "qualidade-processos"],
  badgeCode: "GEOM-IND",
  updatedAtDate: "2026-10-17",
  modules: [
    {
      id: "mod-geom-1",
      order: 1,
      title: {
        "pt-BR": "Módulo 1: Poliedros, Relação de Euler e Sólidos de Platão",
        "en": "Module 1: Polyhedra, Euler's Formula & Platonic Solids",
        "es": "Módulo 1: Poliedros, Relación de Euler y Sólidos de Platón",
      },
      description: {
        "pt-BR": "Conceitos estruturais de vértices, arestas e faces, Relação de Euler (V - A + F = 2), cálculo de arestas em estruturas metálicas, poliedros de Platão e soma de ângulos das faces.",
        "en": "Structural concepts of vertices, edges, and faces, Euler's formula (V - E + F = 2), edge calculation in metallic frames, Platonic solids, and face angle summations.",
        "es": "Conceptos de vértices, aristas y caras, Relación de Euler y poliedros regulares.",
      },
      lessons: [
        {
          id: "les-geom-1-1",
          order: 1,
          title: {
            "pt-BR": "Poliedros: Conceitos Iniciais e Relação de Euler (Aula 01)",
            "en": "Polyhedra: Initial Concepts & Euler's Formula (Lesson 01)",
            "es": "Poliedros: Conceptos Iniciales y Relación de Euler (Clase 01)",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "v_PQnBk-8Mc",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender a definição de poliedros convexos e aplicar a fórmula canônica de Euler (V - A + F = 2).",
              "en": "Understand convex polyhedra and apply Euler's canonical formula (V - E + F = 2).",
              "es": "Comprender poliedros convexos y aplicar la fórmula de Euler.",
            },
            summaryPoints: [
              {
                "pt-BR": "Identificação anatômica de um poliedro: Vértices (pontos de encontro), Arestas (segmentos de reta) e Faces (polígonos planos).",
                "en": "Anatomy of polyhedra: Vertices (intersection points), Edges (line segments), and Faces (flat polygons).",
                "es": "Vértices, aristas y caras que forman la estructura geométrica espacial.",
              },
              {
                "pt-BR": "A Relação de Euler: V - A + F = 2 é válida para todo poliedro convexo.",
                "en": "Euler's formula: V - E + F = 2 holds true for all convex polyhedra.",
                "es": "Relación de Euler: V - A + F = 2 aplicable a estructuras convexas.",
              },
              {
                "pt-BR": "Aplicação em caldeiraria: conferência de nós estruturais em treliças tridimensionais e tanques multifacetados.",
                "en": "Industrial application: node verification in spatial trusses and multifaceted tanks.",
                "es": "Aplicación industrial: verificación de nudos y perfiles en estructuras tridimensionales.",
              },
            ],
          },
        },
        {
          id: "les-geom-1-2",
          order: 2,
          title: {
            "pt-BR": "Poliedros: Calculando o Número de Arestas (Aula 02)",
            "en": "Polyhedra: Calculating Number of Edges (Lesson 02)",
            "es": "Poliedros: Cálculo del Número de Aristas (Clase 02)",
          },
          durationMinutes: 11,
          contentType: "video",
          videoUrl: "EO_DD_2yB_c",
          contentDetail: {
            objective: {
              "pt-BR": "Calcular com precisão o número total de arestas a partir das faces concorrentes (2A = n1*F1 + n2*F2).",
              "en": "Accurately calculate edge count from shared polygon faces (2E = sum of n*F).",
              "es": "Calcular aristas totales a partir del número y tipo de caras.",
            },
            summaryPoints: [
              {
                "pt-BR": "Como cada aresta é compartilhada por exatamente duas faces vizinhas, o dobro de arestas é igual à soma dos lados de todas as faces.",
                "en": "Because each edge is shared by exactly two adjacent faces, 2*Edges equals the sum of polygon sides.",
                "es": "Cada arista es compartida por dos caras contiguas (2A = sumatoria de lados).",
              },
              {
                "pt-BR": "Resolução de problemas práticos com poliedros de faces mistas (triângulos e hexágonos).",
                "en": "Solving practical problems featuring mixed faces (triangles, squares, and hexagons).",
                "es": "Resolución de poliedros con caras mixtas habituales en calderería pesada.",
              },
              {
                "pt-BR": "Aplicação no cálculo de cordão de solda e cantoneiras necessárias para travamento de estruturas.",
                "en": "Estimating weld bead length and structural angle bars for framing.",
                "es": "Estimación de longitud total de soldadura y perfiles de refuerzo.",
              },
            ],
          },
        },
        {
          id: "les-geom-1-3",
          order: 3,
          title: {
            "pt-BR": "Poliedros de Platão: Definição e Propriedades (Aula 03)",
            "en": "Platonic Solids: Definitions & Properties (Lesson 03)",
            "es": "Sólidos de Platón: Definición y Propiedades (Clase 03)",
          },
          durationMinutes: 9,
          contentType: "video",
          videoUrl: "oLbzYParKtc",
          contentDetail: {
            objective: {
              "pt-BR": "Identificar os critérios rigorosos que definem os sólidos de Platão e os 5 únicos poliedros existentes.",
              "en": "Identify the criteria defining Platonic solids and the only 5 existing regular polyhedra.",
              "es": "Conocer los 5 sólidos platónicos y sus condiciones de regularidad geométrica.",
            },
            summaryPoints: [
              {
                "pt-BR": "Condições de Platão: todas as faces possuem o mesmo número de arestas e todos os vértices concorrem no mesmo número de arestas.",
                "en": "Platonic conditions: identical regular polygonal faces and identical vertex configurations.",
                "es": "Mismo número de aristas por cara y concurrencia idéntica en cada vértice.",
              },
              {
                "pt-BR": "Os 5 sólidos: Tetraedro (4F), Hexaedro/Cubo (6F), Octaedro (8F), Dodecaedro (12F) e Icosaedro (20F).",
                "en": "The 5 solids: Tetrahedron (4F), Hexahedron/Cube (6F), Octahedron (8F), Dodecahedron (12F), and Icosahedron (20F).",
                "es": "Los 5 sólidos: Tetraedro, Cubo, Octaedro, Dodecaedro e Icosaedro.",
              },
              {
                "pt-BR": "Mnemônico prático para memorização na ponta da língua: TODI (Tetraedro, Octaedro, Dodecaedro, Icosaedro + Hexaedro).",
                "en": "Industrial shop-floor memory tricks for geometry spatial exams.",
                "es": "Regla nemotécnica para recordar las propiedades de los sólidos.",
              },
            ],
          },
        },
        {
          id: "les-geom-1-4",
          order: 4,
          title: {
            "pt-BR": "Poliedros Regulares e Simetrias (Aula 04)",
            "en": "Regular Polyhedra & Symmetry (Lesson 04)",
            "es": "Poliedros Regulares y Simetrías (Clase 04)",
          },
          durationMinutes: 10,
          contentType: "video",
          videoUrl: "n4RtMz5_5bY",
          contentDetail: {
            objective: {
              "pt-BR": "Compreender o conceito de poliedro regular (Platão + polígonos regulares congruentes) e suas simetrias.",
              "en": "Understand regular polyhedra definition and spatial symmetry implications.",
              "es": "Comprender poliedros regulares formados por polígonos congruentes.",
            },
            summaryPoints: [
              {
                "pt-BR": "Poliedro regular exige que todas as faces sejam polígonos regulares congruentes entre si.",
                "en": "Regular polyhedra require all faces to be mutually congruent regular polygons.",
                "es": "Caras poligonales regulares idénticas y simétricas.",
              },
              {
                "pt-BR": "Distribuição uniforme de tensões mecânicas em estruturas esféricas e geodésicas baseadas no icosaedro.",
                "en": "Uniform mechanical stress distribution in spherical geodesic domes based on icosahedral geometry.",
                "es": "Distribución uniforme de esfuerzos mecánicos en domos geodésicos industriales.",
              },
              {
                "pt-BR": "Aplicações em cúpulas de tanques de armazenagem e reatores químicos de alta pressão.",
                "en": "Applications in storage dome roofs and pressurized process reactors.",
                "es": "Diseño de techos esféricos de tanques de almacenaje de hidrocarburos.",
              },
            ],
          },
        },
        {
          id: "les-geom-1-5",
          order: 5,
          title: {
            "pt-BR": "Poliedros: Soma dos Ângulos das Faces (Aula 05)",
            "en": "Polyhedra: Sum of Face Angles & Exercises (Lesson 05)",
            "es": "Poliedros: Suma de Ángulos de las Caras (Clase 05)",
          },
          durationMinutes: 13,
          contentType: "video",
          videoUrl: "I_7E_Oq0ipw",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar a fórmula de soma dos ângulos das faces S = (V - 2) * 360° e resolver exercícios práticos.",
              "en": "Master the face angle sum formula S = (V - 2) * 360° and solve engineering problems.",
              "es": "Dominar la fórmula S = (V - 2) * 360° y resolver ejercicios de calderería.",
            },
            summaryPoints: [
              {
                "pt-BR": "A soma de todos os ângulos internos de todas as faces de qualquer poliedro convexo depende exclusivamente do número de vértices: S = (V - 2) * 360°.",
                "en": "Total sum of all internal face angles depends purely on vertex count: S = (V - 2) * 360 degrees.",
                "es": "La suma total de los ángulos internos depende de los vértices: S = (V - 2) * 360°.",
              },
              {
                "pt-BR": "Resolução de questões de geometria espacial de alta complexidade passo a passo.",
                "en": "Step-by-step resolution of high-complexity spatial geometry problems.",
                "es": "Resolución analítica paso a paso para cálculo de tolerancias angulares.",
              },
              {
                "pt-BR": "Aplicação na abertura de chapas e conformação de virolas e peças multifacetadas.",
                "en": "Sheet metal unrolling and bending angle allowances for transition pieces.",
                "es": "Desarrollo plano de chapas para plegado y armado de conos y tolvas.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-geom-2",
      order: 2,
      title: {
        "pt-BR": "Módulo 2: Prismas e Paralelepípedos: Áreas, Volumes e Diagonais",
        "en": "Module 2: Prisms & Rectangular Cuboids: Areas, Volumes & Diagonals",
        "es": "Módulo 2: Prismas y Paralelepípedos: Áreas, Volúmenes y Diagonales",
      },
      description: {
        "pt-BR": "Cálculo técnico de prismas retos e oblíquos: área da base, área lateral, área total, volume e diagonal espacial de paralelepípedos e contêineres industriais.",
        "en": "Technical calculations for right and oblique prisms: base area, lateral area, total area, volume, and 3D spatial diagonal of tanks and equipment skids.",
        "es": "Cálculo de prismas: áreas, volúmenes y diagonales espaciales de recintos y contenedores.",
      },
      lessons: [
        {
          id: "les-geom-2-1",
          order: 1,
          title: {
            "pt-BR": "Prismas: Conceitos Iniciais, Definição e Classificação (Aula 06)",
            "en": "Prisms: Definitions & Classifications (Lesson 06)",
            "es": "Prismas: Conceptos Iniciales y Clasificación (Clase 06)",
          },
          durationMinutes: 11,
          contentType: "video",
          videoUrl: "QjW6pSH0jVc",
          contentDetail: {
            objective: {
              "pt-BR": "Definir prismas, bases paralelas congruentes, arestas laterais, prismas retos vs. oblíquos e prismas regulares.",
              "en": "Define prisms, parallel congruent bases, lateral edges, right vs oblique prisms, and regular prisms.",
              "es": "Definir prismas regulares, bases paralelas y prismas rectos versus oblicuos.",
            },
            summaryPoints: [
              {
                "pt-BR": "Prisma reto: as arestas laterais são estritamente perpendiculares aos planos das bases (faces laterais são retângulos).",
                "en": "Right prism: lateral edges are strictly perpendicular to base planes (lateral faces are rectangles).",
                "es": "Prisma recto: aristas laterales perpendiculares a las bases (caras laterales rectangulares).",
              },
              {
                "pt-BR": "Prisma regular: prisma reto cujas bases são polígonos regulares (triângulo equilátero, quadrado, hexágono regular).",
                "en": "Regular prism: a right prism whose bases are regular polygons.",
                "es": "Prisma regular: prisma recto con bases de polígonos regulares.",
              },
              {
                "pt-BR": "Aplicação: dimensionamento de canais de drenagem, silos prismáticos e dutos de ventilação industrial.",
                "en": "Applications in industrial drainage flumes, square ducts, and ventilation shafts.",
                "es": "Dimensionamiento de ductos de ventilación y canales rectangulares industriales.",
              },
            ],
          },
        },
        {
          id: "les-geom-2-2",
          order: 2,
          title: {
            "pt-BR": "Prismas: Cálculo de Áreas e Volumes (Aula 07)",
            "en": "Prisms: Surface Areas & Volume Calculations (Lesson 07)",
            "es": "Prismas: Cálculo de Áreas y Volúmenes (Clase 07)",
          },
          durationMinutes: 14,
          contentType: "video",
          videoUrl: "_sKcgx590J4",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar as fórmulas de Área Lateral (Al), Área Total (At = 2*Ab + Al) e Volume (V = Ab * h).",
              "en": "Master formulas for Lateral Area, Total Area (At = 2*Ab + Al), and Volume (V = Ab * h).",
              "es": "Calcular área lateral, área total y volumen en prismas industriales.",
            },
            summaryPoints: [
              {
                "pt-BR": "Volume de qualquer prisma: Produto da área da base pela altura perpendicular (V = Ab * h).",
                "en": "Volume equation: Base area multiplied by perpendicular height (V = Ab * h).",
                "es": "Volumen: Área de la base multiplicada por la altura perpendicular (V = Ab * h).",
              },
              {
                "pt-BR": "Área Total para pintura anticorrosiva: soma das áreas de todas as faces para cálculo exato de demãos e rendimento de galões de tinta.",
                "en": "Total surface area for protective coatings: exact square-meter calculations for paint kit yield.",
                "es": "Cálculo de metros cuadrados para rendimiento exacto de esquemas de pintura epoxi.",
              },
              {
                "pt-BR": "Conversão de unidades: metros cúbicos para litros (1 m³ = 1.000 Litros) essencial para hidrojato e hidrovácuo.",
                "en": "Unit conversions: 1 cubic meter = 1,000 Liters, fundamental for vacuum tank capacity.",
                "es": "Conversión clave: 1 metro cúbico = 1.000 litros para cubaje de camiones de vacío.",
              },
            ],
          },
        },
        {
          id: "les-geom-2-3",
          order: 3,
          title: {
            "pt-BR": "Paralelepípedos: Volume, Área e Diagonal Espacial (Aula 08)",
            "en": "Rectangular Cuboids: Volume, Surface Area & 3D Diagonal (Lesson 08)",
            "es": "Paralelepípedos: Volumen, Área y Diagonal Espacial (Clase 08)",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "P8Cw3tafL3s",
          contentDetail: {
            objective: {
              "pt-BR": "Calcular volume (a*b*c), área superficial e a diagonal espacial interna D = √(a² + b² + c²).",
              "en": "Calculate volume (a*b*c), total surface area, and internal 3D diagonal D = sqrt(a² + b² + c²).",
              "es": "Calcular volumen, área y diagonal interna tridimensional de paralelepípedos.",
            },
            summaryPoints: [
              {
                "pt-BR": "A diagonal espacial (D): maior distância em linha reta entre dois cantos opostos, calculada por Pitágoras em 3D: D = √(a² + b² + c²).",
                "en": "3D Diagonal: maximum internal linear length computed via 3D Pythagorean theorem: D = sqrt(a² + b² + c²).",
                "es": "Diagonal espacial: longitud máxima interna calculada mediante Pitágoras en 3D.",
              },
              {
                "pt-BR": "Aplicação em rigging e montagem: verificar se tubos longos ou vigas cabem dentro de contêineres, carretas ou acessos de fábrica.",
                "en": "Rigging application: verifying whether pipe spools or beams fit through doorways and inside shipping containers.",
                "es": "Aplicación en maniobras: verificar paso de cañerías largas por accesos angostos.",
              },
              {
                "pt-BR": "Área total do paralelepípedo: At = 2*(ab + ac + bc) para cubagem de caixas e reservatórios metálicos.",
                "en": "Total surface area formula At = 2*(ab + ac + bc) for sheet metal casing fabrication.",
                "es": "Área total para despiece de planchas metálicas en armado de recipientes.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-geom-3",
      order: 3,
      title: {
        "pt-BR": "Módulo 3: Pirâmides, Tetraedro e Tronco de Pirâmide (Tremonhas)",
        "en": "Module 3: Pyramids, Regular Tetrahedrons & Truncated Pyramids (Hoppers)",
        "es": "Módulo 3: Pirámides, Tetraedros y Troncos de Pirámide (Tolvas)",
      },
      description: {
        "pt-BR": "Propriedades de pirâmides, apótema da pirâmide e apótema da base, tetraedro regular e dimensionamento de troncos de pirâmide para tremonhas industriais.",
        "en": "Pyramid geometry, apothem relationships, regular tetrahedron volume/height formulas, and truncated pyramids for industrial hopper fabrication.",
        "es": "Geometría de pirámides, tetraedro regular y cálculo de troncos piramidales para tolvas.",
      },
      lessons: [
        {
          id: "les-geom-3-1",
          order: 1,
          title: {
            "pt-BR": "Pirâmides: Elementos, Relações Métricas e Volume (Aula 09)",
            "en": "Pyramids: Elements, Metric Relations & Volume (Lesson 09)",
            "es": "Pirámides: Elementos, Relaciones Métricas y Volumen (Clase 09)",
          },
          durationMinutes: 13,
          contentType: "video",
          videoUrl: "U2Ip283DZiM",
          contentDetail: {
            objective: {
              "pt-BR": "Dominar o cálculo do volume de pirâmides (V = 1/3 * Ab * h) e a relação de Pitágoras do apótema (g² = h² + m²).",
              "en": "Master pyramid volume (V = 1/3 * Ab * h) and apothem Pythagorean relation (g² = h² + m²).",
              "es": "Calcular volumen de pirámides y apotemas mediante teorema de Pitágoras.",
            },
            summaryPoints: [
              {
                "pt-BR": "O volume de qualquer pirâmide é exatamente um terço do volume do prisma de mesma base e altura: V = (Ab * h) / 3.",
                "en": "Pyramid volume is exactly one-third of a prism with matching base and height: V = (Ab * h) / 3.",
                "es": "El volumen es un tercio del prisma equivalente: V = (Ab * h) / 3.",
              },
              {
                "pt-BR": "Triângulo retângulo fundamental da pirâmide: altura (h), apótema da base (m) e apótema da pirâmide (g), onde g² = h² + m².",
                "en": "Core right triangle: vertical height (h), base apothem (m), and slant height/apothem (g).",
                "es": "Triángulo clave: altura vertical, apotema de la base y apotema de la cara lateral.",
              },
              {
                "pt-BR": "Aplicação em caldeiraria pesada: traçagem de tetos cônicos e piramidais para silos de cavacos de madeira e biomassa (CMPC).",
                "en": "Application: layout drafting for biomass and woodchip hopper tops in pulp mills.",
                "es": "Trazado de silos y techos piramidais para almacenamiento de astillas en celulosa.",
              },
            ],
          },
        },
        {
          id: "les-geom-3-2",
          order: 2,
          title: {
            "pt-BR": "Tetraedro Regular: Altura, Área e Volume (Aula 10)",
            "en": "Regular Tetrahedron: Height, Area & Volume (Lesson 10)",
            "es": "Tetraedro Regular: Altura, Área y Volumen (Clase 10)",
          },
          durationMinutes: 10,
          contentType: "video",
          videoUrl: "UUyX2FlenuI",
          contentDetail: {
            objective: {
              "pt-BR": "Deduzir e aplicar as fórmulas canônicas do tetraedro regular de aresta 'a': altura H = a√6/3, área At = a²√3 e volume V = a³√2/12.",
              "en": "Derive and apply formulas for edge 'a': height H = a*sqrt(6)/3, area At = a²*sqrt(3), volume V = a³*sqrt(2)/12.",
              "es": "Aplicar fórmulas de altura, área y volumen del tetraedro regular.",
            },
            summaryPoints: [
              {
                "pt-BR": "O tetraedro regular é composto por 4 triângulos equiláteros idênticos.",
                "en": "A regular tetrahedron consists of 4 identical equilateral triangles.",
                "es": "Compuesto por cuatro triángulos equiláteros congruentes.",
              },
              {
                "pt-BR": "A altura une o vértice superior ao baricentro da base, permitindo calcular o centro de gravidade (CG) a 1/4 da altura da base.",
                "en": "Height reaches the base centroid, placing the Center of Gravity (CG) at 1/4 of total height.",
                "es": "Centro de gravedad ubicado a 1/4 de la altura, vital para izaje de cargas.",
              },
              {
                "pt-BR": "Relevância para içamento e rigging: equilíbrio e amarração de estruturas trianguladas.",
                "en": "Crucial for rigging stability and geometric center verification during crane lifts.",
                "es": "Determinación del centro de masa para eslingado seguro con grúas industriales.",
              },
            ],
          },
        },
        {
          id: "les-geom-3-3",
          order: 3,
          title: {
            "pt-BR": "Tronco de Pirâmide: Fórmulas de Volume e Aplicação em Tremonhas (Aula Extra)",
            "en": "Truncated Pyramid: Volume Formulas & Hopper Fabrication",
            "es": "Tronco de Pirámide: Volumen y Aplicación en Tolvas Industriales",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "lnQnoZ5-_24",
          contentDetail: {
            objective: {
              "pt-BR": "Calcular o volume de troncos de pirâmide de bases paralelas pela fórmula V = (h/3) * [B + b + √(B*b)] para cubagem de tremonhas.",
              "en": "Compute volume of truncated pyramids via V = (h/3) * [B + b + sqrt(B*b)] for industrial hoppers.",
              "es": "Calcular volumen de tolvas industriales tipo tronco de pirámide.",
            },
            summaryPoints: [
              {
                "pt-BR": "Tremonhas industriais: quase todas as descargas de silos de cinzas, areia e celulose são troncos de pirâmide invertidos.",
                "en": "Industrial hoppers: ash, sand, and pulp drop chutes are inverted truncated pyramids.",
                "es": "Tolvas de descarga: estructuras de descarga con boca superior ancha y descarga reducida.",
              },
              {
                "pt-BR": "A fórmula do tronco de bases B (maior) e b (menor): V = (h/3) * (B + b + √(B*b)).",
                "en": "Truncated pyramid volume formula: V = (h/3) * (B + b + sqrt(B*b)).",
                "es": "Fórmula matemática para cubaje de sólidos truncados de bases paralelas.",
              },
              {
                "pt-BR": "Cálculo de capacidade de carga e tempo de escoamento para paradas de limpeza com hidrojato.",
                "en": "Determining storage capacity and drainage time for hydroblasting washouts.",
                "es": "Cálculo de volumen de residuos acumulados para limpieza con camión combinado.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-geom-4",
      order: 4,
      title: {
        "pt-BR": "Módulo 4: Cilindro, Cone e Tronco de Cone (Tubulações e Reduções)",
        "en": "Module 4: Cylinders, Cones & Truncated Cones (Piping & Reducers)",
        "es": "Módulo 4: Cilindros, Conos y Troncos de Cono (Tuberías y Reducciones)",
      },
      description: {
        "pt-BR": "Cálculo de reservatórios circulares, tubulações industriais, bicos de hidrojato, seções de cone e reduções concêntricas de caldeiraria.",
        "en": "Calculations for cylindrical tanks, industrial pipelines, hydroblast nozzles, cones, and concentric pipe reducers.",
        "es": "Cálculo de estanques cilíndricos, tuberías y reducciones concéntricas.",
      },
      lessons: [
        {
          id: "les-geom-4-1",
          order: 1,
          title: {
            "pt-BR": "Cilindro: Definição, Seção Meridiana, Área e Volume (Aula 11)",
            "en": "Cylinder: Definitions, Cross-sections, Area & Volume (Lesson 11)",
            "es": "Cilindro: Definición, Sección Meridiana, Área y Volumen (Clase 11)",
          },
          durationMinutes: 14,
          contentType: "video",
          videoUrl: "rpbFsCa7D4E",
          contentDetail: {
            objective: {
              "pt-BR": "Calcular volume (V = π*R²*h), área lateral (Al = 2π*R*h) e área total de cilindros industriais e tubulações.",
              "en": "Compute volume (V = pi*R²*h), lateral area (Al = 2*pi*R*h), and total surface area for tanks and pipes.",
              "es": "Calcular volumen y área lateral de cilindros y tuberías industriales.",
            },
            summaryPoints: [
              {
                "pt-BR": "Cilindro equilátero: altura igual ao diâmetro da base (h = 2R).",
                "en": "Equilateral cylinder: height equals base diameter (h = 2R).",
                "es": "Cilindro equilátero: altura igual al diámetro de la base (h = 2R).",
              },
              {
                "pt-BR": "Cálculo de área de pintura de tubulação: Al = π * Diâmetro * Comprimento da linha.",
                "en": "Pipe coating area: Al = pi * Diameter * Total pipeline run length.",
                "es": "Fórmula directa de pintura de cañerías: Al = pi * D * L.",
              },
              {
                "pt-BR": "Capacidade volumétrica de tanques de hidrovácuo e reservatórios de água de alta pressão.",
                "en": "Volumetric capacity for vacuum tankers and hydroblast water storage tanks.",
                "es": "Cubaje exacto de camiones cisterna y tanques de almacenamiento de agua.",
              },
            ],
          },
        },
        {
          id: "les-geom-4-2",
          order: 2,
          title: {
            "pt-BR": "Cone: Geratriz, Área Lateral e Volume (Aula 12)",
            "en": "Cone: Slant Height, Lateral Surface Area & Volume (Lesson 12)",
            "es": "Cono: Generatriz, Área Lateral y Volumen (Clase 12)",
          },
          durationMinutes: 13,
          contentType: "video",
          videoUrl: "RJSBvqVWHJo",
          contentDetail: {
            objective: {
              "pt-BR": "Aplicar a relação de Pitágoras da geratriz g² = h² + R², calcular a área lateral Al = π*R*g e o volume V = (π*R²*h) / 3.",
              "en": "Apply generator Pythagorean relation g² = h² + R², compute lateral area Al = pi*R*g, and volume V = (pi*R²*h)/3.",
              "es": "Calcular generatriz, área lateral y volumen de conos rectos.",
            },
            summaryPoints: [
              {
                "pt-BR": "Relação métrica fundamental: geratriz (g), raio da base (R) e altura (h) formam triângulo retângulo (g² = h² + R²).",
                "en": "Core metric: slant height (g), base radius (R), and height (h) satisfy g² = h² + R².",
                "es": "Relación métrica: generatriz, radio y altura mediante g² = h² + R².",
              },
              {
                "pt-BR": "Planificação lateral: a superfície lateral do cone é um setor circular de raio 'g' e arco 2πR.",
                "en": "Pattern flattening: lateral surface is a circular sector of radius 'g' and arc length 2*pi*R.",
                "es": "Desarrollo de calderería: la cara lateral es un sector circular desplegado en el plano.",
              },
              {
                "pt-BR": "Dimensionamento de bicos convergentes de hidrojato de alta pressão para aceleração de fluxo de água.",
                "en": "Designing converging high-pressure hydroblast nozzles for water jet velocity boost.",
                "es": "Dimensionamiento de toberas cónicas para aceleración de chorro de agua a ultra alta presión.",
              },
            ],
          },
        },
        {
          id: "les-geom-4-3",
          order: 3,
          title: {
            "pt-BR": "Tronco de Cone: Reduções Concêntricas de Tubulação e Caldeiraria (Aula Extra)",
            "en": "Truncated Cone: Concentric Pipe Reducers & Industrial Drafting",
            "es": "Tronco de Cono: Reducciones Concéntricas de Tubería y Calderería",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "QD3I7FbFCPo",
          contentDetail: {
            objective: {
              "pt-BR": "Calcular o volume do tronco de cone V = (π*h/3) * (R² + R*r + r²) e traçar reduções concêntricas de linhas de tubulação.",
              "en": "Compute truncated cone volume V = (pi*h/3) * (R² + R*r + r²) and draft concentric pipe reducers.",
              "es": "Calcular volumen y trazado de reducciones concéntricas para líneas de cañería.",
            },
            summaryPoints: [
              {
                "pt-BR": "Redução de tubulação em caldeiraria: conectar tubulações de diâmetros diferentes mantendo o fluxo hidráulico estável.",
                "en": "Concentric piping reducers: joining pipes of differing diameters while stabilizing fluid flow.",
                "es": "Reducciones concéntricas: unión de diámetros disímiles en líneas de vapor y licor de celulosa.",
              },
              {
                "pt-BR": "Volume do tronco de cone: V = (π*h/3) * [R² + r² + R*r].",
                "en": "Truncated cone volume: V = (pi*h/3) * (R² + r² + R*r).",
                "es": "Fórmula matemática para cubaje de piezas cónicas truncadas.",
              },
              {
                "pt-BR": "Cálculo da geratriz do tronco de cone para traçagem de chapa de aço cortada em oxicorte ou plasma.",
                "en": "Determining slant length for CNC plasma and oxyfuel steel plate cutting.",
                "es": "Trazado sobre plancha de acero para corte por plasma o soplete.",
              },
            ],
          },
        },
      ],
    },
    {
      id: "mod-geom-5",
      order: 5,
      title: {
        "pt-BR": "Módulo 5: Esferas, Vasos de Pressão e Teorema de Pappus-Guldin",
        "en": "Module 5: Spheres, Pressure Vessels & Pappus-Guldin Theorem",
        "es": "Módulo 5: Esferas, Recipientes a Presión y Teorema de Pappus-Guldin",
      },
      description: {
        "pt-BR": "Área e volume de esferas, calotas e fusos para vasos de pressão, sólidos de revolução pelo Teorema de Pappus-Guldin e síntese musical.",
        "en": "Spherical surface area, volume, spherical caps/wedges for pressure vessel heads, solids of revolution via Pappus-Guldin, and musical summary.",
        "es": "Esferas, casquetes para recipientes de presión y sólidos de revolución.",
      },
      lessons: [
        {
          id: "les-geom-5-1",
          order: 1,
          title: {
            "pt-BR": "Esfera: Definição, Seção Esférica, Área e Volume (Aula 13)",
            "en": "Sphere: Definitions, Spherical Section, Area & Volume (Lesson 13)",
            "es": "Esfera: Definición, Sección Esférica, Área y Volumen (Clase 13)",
          },
          durationMinutes: 13,
          contentType: "video",
          videoUrl: "4mEqtfBXrl8",
          contentDetail: {
            objective: {
              "pt-BR": "Calcular a área da superfície esférica (A = 4πR²), o volume (V = 4/3 * πR³) e o raio de seções planas (R² = r² + d²).",
              "en": "Calculate sphere surface area (A = 4*pi*R²), volume (V = 4/3*pi*R³), and planar section radius (R² = r² + d²).",
              "es": "Calcular área y volumen de esferas y secciones planas mediante Pitágoras.",
            },
            summaryPoints: [
              {
                "pt-BR": "A esfera é o sólido que possui a menor área superficial para um determinado volume, ideal para resistir a pressões internas uniformes.",
                "en": "The sphere possesses minimal surface area per unit volume, making it optimal for uniform internal pressure containment.",
                "es": "La esfera posee la menor área superficial por volumen, ideal para recipientes a presión.",
              },
              {
                "pt-BR": "Fórmulas fundamentais: Área A = 4πR² | Volume V = (4/3)πR³.",
                "en": "Core formulas: Area A = 4*pi*R² | Volume V = (4/3)*pi*R³.",
                "es": "Fórmulas clave: Área = 4πR² y Volumen = (4/3)πR³.",
              },
              {
                "pt-BR": "Tanques esféricos (esferas de gás GLP/químicos): inspeção de espessura de película de tinta e medição por ultrassom.",
                "en": "LPG/chemical spherical storage bullets: dry film thickness inspection and ultrasonic wall testing.",
                "es": "Inspección de espesor de pintura y ensayos no destructivos en esferas de gas.",
              },
            ],
          },
        },
        {
          id: "les-geom-5-2",
          order: 2,
          title: {
            "pt-BR": "Partes da Esfera: Cunha Esférica e Fuso Esférico (Aula 14)",
            "en": "Parts of the Sphere: Spherical Wedge & Spherical Lobe (Lesson 14)",
            "es": "Partes de la Esfera: Cuña y Huso Esférico (Clase 14)",
          },
          durationMinutes: 10,
          contentType: "video",
          videoUrl: "YIf2mUNcJjg",
          contentDetail: {
            objective: {
              "pt-BR": "Calcular por regra de três a área do fuso esférico e o volume da cunha esférica a partir do ângulo equatorial alfa (α).",
              "en": "Calculate spherical wedge volume and lobe area via proportional rule of three based on equatorial angle alpha.",
              "es": "Calcular área del huso y volumen de la cuña esférica según el ángulo diedro.",
            },
            summaryPoints: [
              {
                "pt-BR": "Fuso esférico (Área): casca esférica proporcional ao ângulo α (360° -> 4πR² | α -> Afuso).",
                "en": "Spherical lobe (Area): surface slice proportional to equatorial angle alpha.",
                "es": "Huso esférico: porción de superficie esférica delimitada por dos semicírculos.",
              },
              {
                "pt-BR": "Cunha esférica (Volume): sólido proporcional ao ângulo α (360° -> 4/3πR³ | α -> Vcunha).",
                "en": "Spherical wedge (Volume): 3D volume slice proportional to alpha.",
                "es": "Cuña esférica: porción de volumen esférico similar a un gajo de naranja.",
              },
              {
                "pt-BR": "Fabricação em gomos de calotas esféricas para montagem de fundos torisféricos e vasos de caldeiraria.",
                "en": "Petal/gore fabrication for pressure vessel dished heads.",
                "es": "Trazado de gajos para conformado de tapas torisféricas en calderería pesada.",
              },
            ],
          },
        },
        {
          id: "les-geom-5-3",
          order: 3,
          title: {
            "pt-BR": "Teorema de Pappus-Guldin: Corpos de Revolução (Aula 15)",
            "en": "Pappus-Guldin Theorem: Solids of Revolution (Lesson 15)",
            "es": "Teorema de Pappus-Guldin: Cuerpos de Revolución (Clase 15)",
          },
          durationMinutes: 12,
          contentType: "video",
          videoUrl: "_QLB4uC0vpw",
          contentDetail: {
            objective: {
              "pt-BR": "Calcular a área e o volume de sólidos de revolução complexos gerados pela rotação de figuras planas em torno de um eixo (V = A * 2π*dG).",
              "en": "Calculate area and volume of revolution solids generated by rotating planar shapes around an axis (V = Area * 2*pi*dG).",
              "es": "Calcular área y volumen de sólidos de revolución complejos con el Teorema de Pappus-Guldin.",
            },
            summaryPoints: [
              {
                "pt-BR": "1º Teorema (Área): A área da superfície gerada é igual ao comprimento da linha geratriz vezes a distância percorrida pelo seu centroide.",
                "en": "1st Theorem (Area): Generated surface area equals curve length times the distance traveled by its centroid.",
                "es": "1º Teorema: Área igual a la longitud de la curva por el perímetro del centroide.",
              },
              {
                "pt-BR": "2º Teorema (Volume): O volume gerado pela rotação de uma área plana é igual à área vezes o comprimento da circunferência descrita pelo seu centro de gravidade: V = A * 2π * dG.",
                "en": "2nd Theorem (Volume): Generated volume equals planar area times circumference described by its center of mass: V = A * 2*pi*dG.",
                "es": "2º Teorema: Volumen igual al área por la trayectoria del centroide: V = A * 2π * dG.",
              },
              {
                "pt-BR": "Aplicação: cálculo exato do volume de um toro (toroide / curvas de tubulação industrial de 90° e 180°).",
                "en": "Key application: exact volume and surface area calculation for pipe elbows and toroids.",
                "es": "Cálculo exacto de codos de cañería y toroides industriales.",
              },
            ],
          },
        },
        {
          id: "les-geom-5-4",
          order: 4,
          title: {
            "pt-BR": "Teorema de Pappus-Guldin: Centroide do Semicírculo e Aplicações (Aula 16)",
            "en": "Pappus-Guldin Theorem: Semicircle Centroid & Engineering Cases (Lesson 16)",
            "es": "Teorema de Pappus-Guldin: Centroide del Semicírculo y Casos de Ingeniería (Clase 16)",
          },
          durationMinutes: 11,
          contentType: "video",
          videoUrl: "J5nnGEIAudg",
          contentDetail: {
            objective: {
              "pt-BR": "Determinar a coordenada do baricentro de figuras semicirculares (yG = 4R / 3π) e deduzir o volume da esfera por rotação.",
              "en": "Determine semicircle centroid coordinate (yG = 4R / 3pi) and prove sphere volume via revolution.",
              "es": "Determinar el centroide del semicírculo (yG = 4R / 3π) y calcular sólidos de revolución.",
            },
            summaryPoints: [
              {
                "pt-BR": "Localização do baricentro de um semicírculo: dG = (4R) / (3π) a partir do diâmetro base.",
                "en": "Semicircle centroid location: dG = (4R) / (3*pi) relative to the base diameter.",
                "es": "Distancia al centroide de un semicírculo: dG = (4R) / (3π).",
              },
              {
                "pt-BR": "Verificação elegante da fórmula do volume da esfera rodando o semicírculo em 360°.",
                "en": "Proving spherical volume by revolving a semicircle through 360 degrees.",
                "es": "Demostración matemática del volumen de la esfera mediante rotación completa.",
              },
              {
                "pt-BR": "Determinação do centro de gravidade para içamento seguro de flanges e anéis de retenção pesados.",
                "en": "Locating center of gravity for safe rigging of heavy industrial flanges and retainers.",
                "es": "Determinación del centro de gravedad para maniobras de izaje de bridas pesadas.",
              },
            ],
          },
        },
        {
          id: "les-geom-5-5",
          order: 5,
          title: {
            "pt-BR": "Cone, Cilindro e Esfera: Revisão e Mnemônica Musical (Aula de Fechamento)",
            "en": "Cone, Cylinder & Sphere: Review & Musical Mnemonic (Closing Lesson)",
            "es": "Cono, Cilindro y Esfera: Revisión y Mnemotecnia Musical (Clase de Cierre)",
          },
          durationMinutes: 4,
          contentType: "video",
          videoUrl: "-zJBbCf7nPY",
          contentDetail: {
            objective: {
              "pt-BR": "Fixar de forma lúdica e definitiva as relações entre os volumes e áreas dos corpos redondos.",
              "en": "Memorize core volumetric relations across round solids through educational mnemonic parody.",
              "es": "Fijar de manera dinámica las fórmulas de cuerpos redondos antes de la evaluación.",
            },
            summaryPoints: [
              {
                "pt-BR": "Relação arquimediana clássica: Volume do Cone (1/3), Volume da Esfera (2/3) e Volume do Cilindro (3/3) circunscrito.",
                "en": "Archimedean ratio: Cone (1/3), Sphere (2/3), and Cylinder (3/3) with matching radius and height.",
                "es": "Relación arquimedeana 1:2:3 entre cono, esfera y cilindro circunscrito.",
              },
              {
                "pt-BR": "Mnemônica de memorização ágil para consultas rápidas na oficina e no canteiro de obras.",
                "en": "Rapid mental formulas for quick field estimates under pressure.",
                "es": "Técnicas de cálculo mental rápido para estimación en terreno.",
              },
              {
                "pt-BR": "Preparação final para o Exame de Competência Técnica em Geometria Espacial Industrial.",
                "en": "Final preparation for the Industrial Spatial Geometry Competency Assessment.",
                "es": "Preparación integral para la evaluación final del curso.",
              },
            ],
          },
        },
      ],
    },
  ],
finalAssessment: {
    id: "exam-geometria-espacial",
    order: 20,
    scope: "course",
    passingScorePercent: 70,
    maxAttempts: 3,
    estimatedMinutes: 50,
    questionsCount: 10,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação técnica avançada com 10 questões de cálculo espacial aplicado a caldeiraria pesada, tanques de armazenamento, tubulações industriais, riggers e pintura protetiva. Exige 70% de aproveitamento para certificação teórica.",
      "en": "Advanced technical assessment with 10 spatial geometry calculations applied to heavy boilermaking, storage tanks, piping, rigging, and coating engineering. 70% passing score.",
      "es": "Evaluación técnica avanzada con 10 cálculos espaciales aplicados a calderería, tanques, piping, rigging y pintura industrial. 70% mínimo requerido.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência — Geometria Espacial e Trigonometria Industrial",
      "en": "Final Competency Exam — Industrial Spatial Geometry & Trigonometry",
      "es": "Evaluación Final de Competencias — Geometría Espacial y Trigonometría Industrial",
    },
    description: {
      "pt-BR": "Cálculo técnico e espacial essencial para frentes industriais na CMPC: poliedros (Relação de Euler), cubagem de tanques cilíndricos e prismáticos, transições cônicas (reduções concêntricas), tremonhas piramidais, áreas de pintura de tubulações, curvas toroidais (Pappus-Guldin) e estimativa de massa por densidade volumétrica.",
      "en": "Essential spatial and layout calculations for CMPC industrial jobsites: Euler polyhedra, cylindrical and rectangular vessel sizing, conical reducers, pyramidal hoppers, pipe coating area, toroidal elbows (Pappus-Guldin), and mass estimation via volumetric density.",
      "es": "Cálculo técnico espacial aplicado a calderería y tuberías en CMPC: poliedros, cubicación de tanques, reducciones cónicas, tolvas, áreas de pintura y teoremas de Pappus-Guldin.",
    },
    questions: [
      {
        id: "q-geom-1",
        order: 1,
        question: {
          "pt-BR": "CENÁRIO 1: Um caldeireiro industrial da RSS3 está fabricando uma treliça espacial convexa para sustentação de tubulação na CMPC. A estrutura possui 12 nós estruturais (vértices) e é delimitada por 8 planos triangulares soldados (faces). Pela Relação Canônica de Euler (V - A + F = 2), quantas barras de aço estrutural (arestas) compõem exatamente essa treliça?",
          "en": "SCENARIO 1: An RSS3 industrial boilermaker is fabricating a 3D convex space truss for pipe support at CMPC. The structure has 12 structural nodes (vertices) and is bounded by 8 welded triangular plates (faces). Using Euler's canonical relation (V - E + F = 2), how many structural steel struts (edges) form this truss?",
          "es": "ESCENARIO 1: Estructura reticulada convexa para soporte de tuberías en CMPC con 12 nodos (vértices) y 8 caras triangulares. Según la Relación de Euler (V - A + F = 2), ¿cuántas barras de acero (aristas) componen exactamente la estructura?",
        },
        options: [
          {
            id: "q1-a",
            text: {
              "pt-BR": "20 arestas, calculadas somando diretamente 12 vértices + 8 faces sem deduzir a constante de Euler.",
              "en": "20 edges, summing 12 vertices + 8 faces without subtracting Euler's constant.",
              "es": "20 aristas, sumando directamente vértices y caras.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A fórmula de Euler é V - A + F = 2, logo A = V + F - 2 = 12 + 8 - 2 = 18 arestas.",
              "en": "Incorrect. Euler's formula requires A = V + F - 2 = 12 + 8 - 2 = 18.",
              "es": "Incorrecto. Se deben restar 2 unidades según la fórmula canónica.",
            },
          },
          {
            id: "q1-b",
            text: {
              "pt-BR": "18 arestas, obtidas aplicando V - A + F = 2 -> 12 - A + 8 = 2 -> 20 - A = 2 -> A = 18 barras estruturais de aço.",
              "en": "18 edges, calculated via V - E + F = 2 -> 12 - E + 8 = 2 -> 20 - E = 2 -> E = 18 structural steel struts.",
              "es": "18 aristas, aplicando V - A + F = 2 -> 12 - A + 8 = 2 -> A = 18 barras estructurales.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A relação de Euler é a lei topológica universal para poliedros convexos fechados: V - A + F = 2. O número exato de barras necessárias para unir os nós é 18.",
              "en": "Correct! Euler's formula is universal for convex polyhedra: V - E + F = 2, yielding exactly 18 edges.",
              "es": "¡Correcto! Ley topológica universal de poliedros convexos: 12 - A + 8 = 2 -> A = 18.",
            },
          },
          {
            id: "q1-c",
            text: {
              "pt-BR": "14 arestas, obtidas subtraindo os 8 planos dos 12 nós e somando 10 barras de reforço.",
              "en": "14 edges, calculated arbitrarily.",
              "es": "14 aristas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Erro de aplicação algébrica da equação topológica.",
              "en": "Incorrect algebraic manipulation.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q1-d",
            text: {
              "pt-BR": "24 arestas, multiplicando 8 faces triangulares por 3 lados sem descontar o compartilhamento entre faces vizinhas.",
              "en": "24 edges, multiplying 8 triangles by 3 sides without dividing shared edges by 2.",
              "es": "24 aristas, multiplicando 8 por 3 sin descontar aristas compartidas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Em poliedros, cada aresta é compartilhada por exatamente duas faces contíguas (8 × 3 / 2 = 12 se fosse deltaedro fechado simples; no caso geral V=12 e F=8 resulta rigorosamente em A=18).",
              "en": "Incorrect. Each edge is shared by two faces.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-geom-2",
        order: 2,
        question: {
          "pt-BR": "CENÁRIO 2: Um tanque cilíndrico vertical de armazenamento de água desmineralizada para caldeira na CMPC possui diâmetro interno D = 4,0 metros (raio R = 2,0 m) e altura útil de lâmina líquida h = 6,0 metros. Adotando π = 3,1416, qual é o volume total útil de água em Litros que esse reservatório comporta (sabendo que 1 m³ = 1.000 L)?",
          "en": "SCENARIO 2: A vertical cylindrical demineralized water tank for CMPC boilers has internal diameter D = 4.0 m (radius R = 2.0 m) and liquid height h = 6.0 m. Using pi = 3.1416, what is the net water capacity in Liters (1 m³ = 1,000 L)?",
          "es": "ESCENARIO 2: Estanque cilíndrico vertical con diámetro D = 4,0 m (radio R = 2,0 m) y altura de líquido h = 6,0 m. Con π = 3,1416, ¿cuál es la capacidad volumétrica en Litros?",
        },
        options: [
          {
            id: "q2-a",
            text: {
              "pt-BR": "37.699 Litros (37,70 m³), calculados multiplicando π × D × h sem elevar o raio ao quadrado.",
              "en": "37,699 Liters (37.70 m³), computed as pi * D * h without squaring radius.",
              "es": "37.699 Litros (37,70 m³), calculados sin elevar el radio al cuadrado.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A área da base circular é π × R², não π × D.",
              "en": "Incorrect. Base area is pi * R², not pi * D.",
              "es": "Incorrecto. Falta elevar el radio al cuadrado.",
            },
          },
          {
            id: "q2-b",
            text: {
              "pt-BR": "75.398 Litros (75,40 m³), obtidos pela fórmula do volume do cilindro: V = π × R² × h = 3,1416 × (2,0)² × 6,0 = 3,1416 × 4 × 6 = 75,3984 m³ × 1.000 L/m³ = 75.398 Litros.",
              "en": "75,398 Liters (75.40 m³), computed via cylinder formula: V = pi * R² * h = 3.1416 * (2.0)² * 6.0 = 75.3984 m³ * 1,000 L/m³ = 75,398 Liters.",
              "es": "75.398 Litros (75,40 m³), aplicando V = π * R² * h = 3,1416 * 4 * 6 = 75,3984 m³ * 1.000 = 75.398 Litros.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! V = π × R² × h. Como R = 2 m, R² = 4 m², área da base = 12,566 m²; multiplicada pela altura h = 6 m resulta em 75,398 m³ ou 75.398 Litros.",
              "en": "Correct! V = pi * R² * h = 3.1416 * 4 * 6 = 75.398 m³ = 75,398 Liters.",
              "es": "¡Correcto! V = π * R² * h = 75.398 Litros exactos.",
            },
          },
          {
            id: "q2-c",
            text: {
              "pt-BR": "150.796 Litros (150,80 m³), calculados utilizando o diâmetro D = 4 m no lugar do raio na fórmula do volume.",
              "en": "150,796 Liters (150.80 m³), using diameter 4 m instead of radius in formula.",
              "es": "150.796 Litros (150,80 m³), usando diámetro en vez de radio.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Usar o diâmetro em vez do raio quadruplica o volume real do reservatório.",
              "en": "Incorrect. Using diameter quadruples the true volume.",
              "es": "Incorrecto. Cuadruplica el volumen real.",
            },
          },
          {
            id: "q2-d",
            text: {
              "pt-BR": "24.000 Litros (24,00 m³), multiplicando 4 m × 6 m × 1.000 sem considerar o formato circular do tanque.",
              "en": "24,000 Liters, ignoring circular geometry.",
              "es": "24.000 Litros, ignorando la forma circular.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Ignora a constante geométrica π da seção circular.",
              "en": "Incorrect. Ignores pi constant.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-geom-3",
        order: 3,
        question: {
          "pt-BR": "CENÁRIO 3: Um pintor industrial precisa quantificar a área superficial externa de um trecho reto de tubulação de processo na CMPC para determinar o consumo de tinta primer epóxi. O trecho tem comprimento L = 120 metros e diâmetro externo nominal OD = 10 polegadas (OD = 0,273 metros). Adotando π = 3,1416, qual é a área lateral exata a ser pintada em metros quadrados?",
          "en": "SCENARIO 3: An industrial coating technician must calculate the external surface area of a 120-meter straight pipe run at CMPC for epoxy primer takeoff. Nominal outer diameter is OD = 10 inches (OD = 0.273 m). Using pi = 3.1416, what is the exact lateral coating area in square meters?",
          "es": "ESCENARIO 3: Medición de área exterior de cañería recta de 120 metros con diámetro exterior OD = 0,273 m (10 pulgadas). Con π = 3,1416, ¿cuál es el área lateral de pintura en m²?",
        },
        options: [
          {
            id: "q3-a",
            text: {
              "pt-BR": "32,76 m², multiplicando apenas o diâmetro 0,273 m pelo comprimento 120 m sem considerar o perímetro circular.",
              "en": "32.76 m², multiplying diameter by length without circular perimeter.",
              "es": "32,76 m², multiplicando diámetro por largo sin perímetro.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A planificação da chapa cilíndrica exige o perímetro da circunferência C = π × D.",
              "en": "Incorrect. Lateral surface requires the full circumference C = pi * D.",
              "es": "Incorrecto. Se debe usar el perímetro C = π * D.",
            },
          },
          {
            id: "q3-b",
            text: {
              "pt-BR": "102,92 m², calculado pela fórmula da área lateral do cilindro: A_lat = π × D × L = 3,1416 × 0,273 m × 120 m = 102,92 m².",
              "en": "102.92 m², computed via cylinder lateral area formula: A_lat = pi * D * L = 3.1416 * 0.273 m * 120 m = 102.92 m².",
              "es": "102,92 m², aplicando A_lat = π * D * L = 3,1416 * 0,273 * 120 = 102,92 m².",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A superfície de um cilindro desdobrada em plano é um retângulo de base C = π × D e altura L. Logo, A_lat = 3,1416 × 0,273 × 120 = 102,92 m².",
              "en": "Correct! Unrolled cylinder area is a rectangle with base C = pi * D and height L: A_lat = 3.1416 * 0.273 * 120 = 102.92 m².",
              "es": "¡Correcto! Área desdoblada: A_lat = π * D * L = 102,92 m².",
            },
          },
          {
            id: "q3-c",
            text: {
              "pt-BR": "205,84 m², multiplicando o resultado por dois supondo que o tubo precise ser pintado por fora e por dentro.",
              "en": "205.84 m², doubling the area assuming internal painting.",
              "es": "205,84 m², duplicando el área.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O enunciado especificou estritamente a área superficial externa da tubulação.",
              "en": "Incorrect. The problem explicitly specifies external surface area.",
              "es": "Incorrecto. Solo se solicitó el área exterior.",
            },
          },
          {
            id: "q3-d",
            text: {
              "pt-BR": "7,02 m², calculando a área da seção circular transversal do tubo em vez da área lateral.",
              "en": "7.02 m², computing cross-sectional area instead of lateral surface.",
              "es": "7,02 m², calculando área transversal.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A seção transversal mede o corte do tubo, não a superfície exposta para aplicação de tinta.",
              "en": "Incorrect. Cross section is the flow orifice, not paint surface.",
              "es": "Incorrecto. Esa es el área de flujo transversal.",
            },
          },
        ],
      },
      {
        id: "q-geom-4",
        order: 4,
        question: {
          "pt-BR": "CENÁRIO 4: Um caldeireiro precisa calcular o volume de um tronco de cone reto (redução concêntrica de grande porte em chapa de aço) que interliga dois trechos de duto de exaustão de gases. O raio da base maior é R = 1,5 metros, o raio da base menor é r = 0,9 metros e a altura axial é h = 2,0 metros. Utilizando π = 3,1416 e a fórmula canônica do tronco de cone V = (π × h / 3) × (R² + R×r + r²), qual é o volume interno desse redutor?",
          "en": "SCENARIO 4: A boilermaker calculates the volume of a large concentric reducer (truncated cone). Major base radius R = 1.5 m, minor base radius r = 0.9 m, and axial height h = 2.0 m. Using pi = 3.1416 and the formula V = (pi * h / 3) * (R² + R*r + r²), what is the internal volume?",
          "es": "ESCENARIO 4: Volumen de reducción concéntrica (tronco de cono) con radio mayor R = 1,5 m, radio menor r = 0,9 m y altura axial h = 2,0 m. Aplicando V = (π * h / 3) * (R² + R*r + r²), ¿cuál es el volumen interno?",
        },
        options: [
          {
            id: "q4-a",
            text: {
              "pt-BR": "9,24 m³, calculado por: R² = 2,25; R×r = 1,35; r² = 0,81; Soma = 4,41 m²; Multiplicando por (3,1416 × 2,0 / 3) = 2,0944; V = 2,0944 × 4,41 = 9,24 m³.",
              "en": "9.24 m³, calculated via: R² = 2.25; R*r = 1.35; r² = 0.81; Sum = 4.41 m²; Multiplied by (3.1416 * 2.0 / 3) = 2.0944; V = 2.0944 * 4.41 = 9.24 m³.",
              "es": "9,24 m³, calculado por: R² = 2,25; R*r = 1,35; r² = 0,81; Suma = 4,41 m²; V = (3,1416 * 2 / 3) * 4,41 = 9,24 m³.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A fórmula do tronco de cone V = (π*h/3)*(R² + R*r + r²) é rigorosa. (2,25 + 1,35 + 0,81) = 4,41. Multiplicado por 2,0944 resulta em 9,236 m³ (9,24 m³).",
              "en": "Correct! Canonical frustum volume: (2.25 + 1.35 + 0.81) = 4.41. Multiplied by 2*pi/3 = 9.236 m³ = 9.24 m³.",
              "es": "¡Correcto! Fórmula canónica del tronco de cono: V = 9,24 m³.",
            },
          },
          {
            id: "q4-b",
            text: {
              "pt-BR": "14,14 m³, calculado pela média aritmética simples dos cilindros maior e menor.",
              "en": "14.14 m³, calculated by simple arithmetic cylinder averaging.",
              "es": "14,14 m³, promediando cilindros.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A média simples de cilindros superestima o volume de troncos cônicos por ignorar a curvatura da geratriz.",
              "en": "Incorrect. Simple averaging overestimates conical frustum volume.",
              "es": "Incorrecto. Promediar áreas cilíndricas sobreestima el volumen cónico.",
            },
          },
          {
            id: "q4-c",
            text: {
              "pt-BR": "4,50 m³, dividindo a soma dos raios pela altura ao quadrado.",
              "en": "4.50 m³, arbitrary arithmetic.",
              "es": "4,50 m³.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Não utiliza a equação geométrica de pirâmides/cones truncados.",
              "en": "Incorrect formula application.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q4-d",
            text: {
              "pt-BR": "25,00 m³, arredondamento grosseiro sem cálculo matemático.",
              "en": "25.00 m³, rough guessing.",
              "es": "25,00 m³.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Erro grosseiro.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-geom-5",
        order: 5,
        question: {
          "pt-BR": "CENÁRIO 5: Uma tremonha de alimentação de cavacos de madeira para a caldeira da CMPC possui o formato geométrico de um Tronco de Pirâmide regular de base quadrada. A base maior superior mede a1 = 4,0 m de lado (área S1 = 16 m²), a base menor inferior mede a2 = 2,0 m de lado (área S2 = 4 m²) e a altura vertical é h = 3,0 m. Qual é o volume interno total da tremonha em m³?",
          "en": "SCENARIO 5: A wood chip boiler feed hopper at CMPC is shaped as a regular square truncated pyramid. Top major base edge is a1 = 4.0 m (area S1 = 16 m²), bottom minor base edge is a2 = 2.0 m (area S2 = 4 m²), and vertical height is h = 3.0 m. What is the total internal hopper volume in m³?",
          "es": "ESCENARIO 5: Tolva de alimentación con forma de tronco de pirámide de base cuadrada. Base mayor a1 = 4,0 m (S1 = 16 m²), base menor a2 = 2,0 m (S2 = 4 m²), altura h = 3,0 m. ¿Cuál es el volumen interno en m³?",
        },
        options: [
          {
            id: "q5-a",
            text: {
              "pt-BR": "60,0 m³, multiplicando a base maior 16 m² pela altura 3 m e somando os 4 m² da base menor.",
              "en": "60.0 m³, calculated as S1 * h + S2.",
              "es": "60,0 m³, sumando S1 * h + S2.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A fórmula volumétrica exige média geométrica das bases.",
              "en": "Incorrect. Frustum volume requires geometric mean of base areas.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q5-b",
            text: {
              "pt-BR": "28,0 m³, calculado pela fórmula do tronco de pirâmide: V = (h / 3) × (S1 + √(S1 × S2) + S2) = (3,0 / 3) × (16 + √(16 × 4) + 4) = 1 × (16 + √64 + 4) = 1 × (16 + 8 + 4) = 28,0 m³.",
              "en": "28.0 m³, computed via pyramid frustum formula: V = (h / 3) * (S1 + sqrt(S1 * S2) + S2) = (3.0 / 3) * (16 + sqrt(64) + 4) = 1 * (16 + 8 + 4) = 28.0 m³.",
              "es": "28,0 m³, aplicando V = (h / 3) * (S1 + √(S1 * S2) + S2) = 1 * (16 + 8 + 4) = 28,0 m³.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! V = (h/3) × (S1 + √(S1×S2) + S2). Com S1=16 e S2=4, √(16×4) = 8. Soma interna = 16+8+4 = 28 m³. Multiplicado por h/3 (3/3 = 1) resulta em exatos 28,0 m³.",
              "en": "Correct! V = (h/3) * (S1 + sqrt(S1*S2) + S2) = 1 * (16 + 8 + 4) = 28.0 m³.",
              "es": "¡Correcto! Fórmula exacta del tronco de pirámide: V = 28,0 m³.",
            },
          },
          {
            id: "q5-c",
            text: {
              "pt-BR": "30,0 m³, calculando a média aritmética (16 + 4)/2 × 3 = 10 × 3 = 30 m³.",
              "en": "30.0 m³, using linear arithmetic mean of areas.",
              "es": "30,0 m³, usando promedio aritmético.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A média aritmética simples não reproduz a convergência geométrica linear das faces inclinadas.",
              "en": "Incorrect. Arithmetic mean ignores 3D tapered wall convergence.",
              "es": "Incorrecto. El promedio lineal sobreestima el volumen.",
            },
          },
          {
            id: "q5-d",
            text: {
              "pt-BR": "12,0 m³, calculando apenas o prisma menor formado pela base inferior.",
              "en": "12.0 m³, calculating only minor base prism.",
              "es": "12,0 m³, calculando prisma menor.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Desconsidera todo o volume de expansão da tremonha.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-geom-6",
        order: 6,
        question: {
          "pt-BR": "CENÁRIO 6: Na fabricação de um tampo semiesférico para vaso de pressão na CMPC com raio R = 1,5 metros, o caldeireiro precisa determinar o peso da chapa de aço carbono estrutural antes da conformação. A área superficial da semiesfera é dada por A = 2 × π × R². Sabendo que a chapa de aço possui espessura de 1/2 polegada e densidade superficial de 100 kg/m² e adotando π = 3,1416, qual é a área superficial e o peso aproximado desse tampo?",
          "en": "SCENARIO 6: In fabricating a hemispherical head for a pressure vessel with radius R = 1.5 m, the boilermaker calculates sheet weight. Hemispherical surface area is A = 2 * pi * R². Knowing the 1/2-inch steel plate has an areal density of 100 kg/m² and using pi = 3.1416, what is the surface area and approximate head weight?",
          "es": "ESCENARIO 6: Fabricación de cabezal semiesférico de radio R = 1,5 m con chapa de acero de 100 kg/m² de peso superficial. Con A = 2 * π * R² y π = 3,1416, ¿cuál es el área superficial y el peso aproximado?",
        },
        options: [
          {
            id: "q6-a",
            text: {
              "pt-BR": "Área = 7,07 m²; Peso = 707 kg, calculado dividindo a esfera inteira por quatro.",
              "en": "Area = 7.07 m²; Weight = 707 kg, dividing sphere by 4.",
              "es": "Área = 7,07 m²; Peso = 707 kg.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. A semiesfera é a metade da esfera (4πR² / 2 = 2πR²), não a quarta parte.",
              "en": "Incorrect. A hemisphere is half of a sphere (2*pi*R²), not one quarter.",
              "es": "Incorrecto. La semiesfera es la mitad de la esfera (2πR²).",
            },
          },
          {
            id: "q6-b",
            text: {
              "pt-BR": "Área = 14,14 m²; Peso = 1.414 kg (1,41 toneladas). Cálculo: A = 2 × 3,1416 × (1,5)² = 2 × 3,1416 × 2,25 = 14,137 m²; Peso = 14,137 m² × 100 kg/m² = 1.413,7 kg.",
              "en": "Area = 14.14 m²; Weight = 1,414 kg (1.41 tonnes). Calculation: A = 2 * 3.1416 * (1.5)² = 14.137 m²; Weight = 14.137 m² * 100 kg/m² = 1,413.7 kg.",
              "es": "Área = 14,14 m²; Peso = 1.414 kg (1,41 t). A = 2 * 3,1416 * 2,25 = 14,137 m²; Peso = 14,137 * 100 = 1.413,7 kg.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Área da esfera inteira = 4πR² = 28,27 m²; a semiesfera tem área A = 2πR² = 14,14 m². Multiplicando pela densidade superficial de 100 kg/m², o peso é de 1.414 kg.",
              "en": "Correct! Hemispherical area = 2 * pi * R² = 14.137 m². At 100 kg/m², total weight equals 1,414 kg.",
              "es": "¡Correcto! A = 2πR² = 14,14 m² que multiplicado por 100 kg/m² arroja 1.414 kg.",
            },
          },
          {
            id: "q6-c",
            text: {
              "pt-BR": "Área = 28,27 m²; Peso = 2.827 kg, utilizando a esfera completa sem dividir por dois.",
              "en": "Area = 28.27 m²; Weight = 2,827 kg, using full sphere formula.",
              "es": "Área = 28,27 m²; Peso = 2.827 kg.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O tampo é uma semiesfera (meia esfera), não uma esfera fechada completa.",
              "en": "Incorrect. The vessel head is a hemisphere, not a complete closed sphere.",
              "es": "Incorrecto. Se trata de un cabezal semiesférico.",
            },
          },
          {
            id: "q6-d",
            text: {
              "pt-BR": "Área = 4,71 m²; Peso = 471 kg, multiplicando 3,1416 por 1,5 metros sem elevar o raio ao quadrado.",
              "en": "Area = 4.71 m²; Weight = 471 kg, neglecting R² term.",
              "es": "Área = 4,71 m²; Peso = 471 kg.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Esqueceu de elevar o raio R ao quadrado no cálculo de área.",
              "en": "Incorrect. Omitted R² exponent.",
              "es": "Incorrecto. Falta elevar el radio al cuadrado.",
            },
          },
        ],
      },
      {
        id: "q-geom-7",
        order: 7,
        question: {
          "pt-BR": "CENÁRIO 7: Aplicando o 2º Teorema de Pappus-Guldin para sólidos de revolução (V = 2 × π × dG × A), qual é o volume de aço contido em um anel toroidal maciço de seção circular (como um anel de vedação metálica ou flange maciço) gerado pela rotação de um círculo de raio r = 5 cm (0,05 m) cuja distância do centro de gravidade até o eixo central de revolução é dG = 40 cm (0,40 m)? Adote π = 3,1416.",
          "en": "SCENARIO 7: Applying the 2nd Pappus-Guldin Theorem for solids of revolution (V = 2 * pi * dG * A), what is the volume of a solid steel torus generated by rotating a circle of radius r = 0.05 m whose centroid is at distance dG = 0.40 m from the central revolution axis? Use pi = 3.1416.",
          "es": "ESCENARIO 7: Aplicando el 2º Teorema de Pappus-Guldin (V = 2 * π * dG * A), ¿cuál es el volumen de un anillo toroidal generado al rotar un círculo de radio r = 0,05 m cuyo centroide dista dG = 0,40 m del eje? Use π = 3,1416.",
        },
        options: [
          {
            id: "q7-a",
            text: {
              "pt-BR": "0,0197 m³ (19,7 Litros). Cálculo: Área do círculo gerador A = π × r² = 3,1416 × (0,05)² = 0,007854 m²; Comprimento da trajetória do CG = 2 × π × dG = 2 × 3,1416 × 0,40 m = 2,5133 m; Volume V = 2,5133 m × 0,007854 m² = 0,01974 m³.",
              "en": "0.0197 m³ (19.7 Liters). Calculation: Generating circle area A = pi * r² = 3.1416 * 0.0025 = 0.007854 m²; Centroid path = 2 * pi * dG = 2 * 3.1416 * 0.40 = 2.5133 m; Volume V = 2.5133 * 0.007854 = 0.01974 m³.",
              "es": "0,0197 m³ (19,7 L). A = π * r² = 0,007854 m²; Trayectoria del CG = 2 * π * 0,40 = 2,5133 m; V = 2,5133 * 0,007854 = 0,01974 m³.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! O 2º Teorema de Pappus-Guldin V = 2π × dG × A permite calcular volumes de toros e curvas sem integrais duplas. Com A = 0,007854 m² e perímetro da trajetória = 2,5133 m, V = 0,0197 m³.",
              "en": "Correct! Pappus-Guldin theorem V = 2*pi*dG*A yields 0.0197 m³ directly.",
              "es": "¡Correcto! Teorema de Pappus-Guldin aplicado directamente: V = 0,0197 m³.",
            },
          },
          {
            id: "q7-b",
            text: {
              "pt-BR": "0,1570 m³, multiplicando a distância dG pelo diâmetro do anel sem considerar a área do círculo gerador.",
              "en": "0.1570 m³, ignoring generating circle area.",
              "es": "0,1570 m³.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O teorema exige o produto da área da figura plana pela trajetória percorrida pelo centroide.",
              "en": "Incorrect. Omitted planar cross section area.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q7-c",
            text: {
              "pt-BR": "0,0005 m³, dividindo o raio pelo centro de gravidade ao cubo.",
              "en": "0.0005 m³, arbitrary quotient.",
              "es": "0,0005 m³.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Erro dimensional evidente.",
              "en": "Incorrect dimensional units.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q7-d",
            text: {
              "pt-BR": "1,0000 m³, aproximação arbitrária sem cálculo.",
              "en": "1.0000 m³, rough guessing.",
              "es": "1,0000 m³.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Valor 50 vezes superior ao volume real.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-geom-8",
        order: 8,
        question: {
          "pt-BR": "CENÁRIO 8: Um rigger da RSS3 precisa içar um bloco maciço de concreto armado com formato de paralelepípedo reto de dimensões: comprimento c = 3,0 metros, largura l = 1,5 metros e altura h = 0,8 metros. Sabendo que a densidade volumétrica do concreto armado é de 2.500 kg/m³ (2,5 t/m³), qual é o volume desse bloco e qual é a sua massa total em toneladas para o correto dimensionamento das cintas e guindaste?",
          "en": "SCENARIO 8: An RSS3 rigger must lift a solid reinforced concrete rectangular block measuring: length L = 3.0 m, width W = 1.5 m, height H = 0.8 m. Given reinforced concrete density of 2,500 kg/m³ (2.5 t/m³), what is the block volume and total mass in tonnes for crane and sling selection?",
          "es": "ESCENARIO 8: Izaje de bloque prismático de hormigón armado de 3,0 m × 1,5 m × 0,8 m. Con densidad de 2.500 kg/m³ (2,5 t/m³), ¿cuál es el volumen y la masa total en toneladas?",
        },
        options: [
          {
            id: "q8-a",
            text: {
              "pt-BR": "Volume = 5,30 m³; Massa = 13,25 toneladas, somando as dimensões antes de multiplicar.",
              "en": "Volume = 5.30 m³; Mass = 13.25 tonnes.",
              "es": "Volumen = 5,30 m³; Masa = 13,25 t.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O volume de um prisma reto retangular é o produto das 3 dimensões (c × l × h), não a soma.",
              "en": "Incorrect. Prism volume is the product of dimensions, not the sum.",
              "es": "Incorrecto. El volumen es el producto c * l * h.",
            },
          },
          {
            id: "q8-b",
            text: {
              "pt-BR": "Volume = 3,60 m³; Massa = 9,00 toneladas. Cálculo: V = c × l × h = 3,0 m × 1,5 m × 0,8 m = 3,60 m³; Massa = Volume × Densidade = 3,60 m³ × 2.500 kg/m³ = 9.000 kg (9,0 toneladas).",
              "en": "Volume = 3.60 m³; Mass = 9.00 tonnes. Calculation: V = L * W * H = 3.0 * 1.5 * 0.8 = 3.60 m³; Mass = 3.60 m³ * 2,500 kg/m³ = 9,000 kg (9.0 tonnes).",
              "es": "Volumen = 3,60 m³; Masa = 9,00 toneladas. V = 3,0 * 1,5 * 0,8 = 3,60 m³; Masa = 3,60 * 2.500 kg/m³ = 9.000 kg (9,0 t).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! V = 3,0 × 1,5 × 0,8 = 3,60 m³. Multiplicado pela densidade do concreto armado (2.500 kg/m³) resulta em 9.000 kg ou 9,0 toneladas exatas.",
              "en": "Correct! V = 3.0 * 1.5 * 0.8 = 3.60 m³. Mass = 3.60 * 2.5 = 9.0 tonnes.",
              "es": "¡Correcto! V = 3,60 m³ y masa de 9,0 toneladas.",
            },
          },
          {
            id: "q8-c",
            text: {
              "pt-BR": "Volume = 3,60 m³; Massa = 3.600 kg (3,6 toneladas), supondo erroneamente que a densidade do concreto seja igual à da água (1.000 kg/m³).",
              "en": "Volume = 3.60 m³; Mass = 3.6 tonnes, assuming water density.",
              "es": "Volumen = 3,60 m³; Masa = 3,6 t, usando densidad del agua.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. O concreto armado é 2,5 vezes mais denso que a água; subdimensionar o peso causaria o rompimento das cintas de içamento.",
              "en": "Incorrect. Reinforced concrete is 2.5 times denser than water; underestimating weight causes sling failure.",
              "es": "Incorrecto. El hormigón es 2,5 veces más pesado que el agua.",
            },
          },
          {
            id: "q8-d",
            text: {
              "pt-BR": "Volume = 1,00 m³; Massa = 2,50 toneladas.",
              "en": "Volume = 1.00 m³; Mass = 2.50 tonnes.",
              "es": "Volumen = 1,00 m³; Masa = 2,50 t.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Erro de cálculo de volume.",
              "en": "Incorrect volume calculation.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-geom-9",
        order: 9,
        question: {
          "pt-BR": "CENÁRIO 9: Em uma transição de tubulação excêntrica ou cotovelo em gomos (curva de caldeiraria segmentada em 3 gomos para ângulo de 90°), qual princípio da trigonometria e traçagem de caldeiraria define o ângulo de corte das bissetrizes dos gomos extremos e intermediários?",
          "en": "SCENARIO 9: In fabricating a 3-segment 90° mitered pipe elbow, which trigonometric/geometric layout principle determines the miter cut angles for the end and middle segments?",
          "es": "ESCENARIO 9: En el trazado de un codo cilíndrico en 3 virolas para 90°, ¿qué principio trigonométrico determina el ángulo de corte de las virolas extremas e intermedias?",
        },
        options: [
          {
            id: "q9-a",
            text: {
              "pt-BR": "O ângulo de corte das bissetrizes é determinado dividindo o ângulo total da curva (90°) pelo dobro do número de gomos menos dois (fórmula: Ângulo de corte da virola extrema = Ângulo Total / (2 × (N - 1)), onde N = 3 gomos -> 90° / 4 = 22,5° para virolas extremas e o dobro (45°) para a virola central completa).",
              "en": "Miter cut angle is calculated by dividing total elbow angle (90°) by 2*(N-1) where N is the number of segments (90° / 4 = 22.5° for end segments and 45° included angle for the middle segment).",
              "es": "El ángulo de corte se calcula dividiendo el ángulo total (90°) por 2*(N-1) con N=3 virolas -> 90° / 4 = 22,5° para virolas extremas y 45° para la virola intermedia.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Na traçagem clássica de caldeiraria, a curva de 3 gomos possui 2 juntas soldadas em ângulo. Cada junta divide o desvio angular em 2 cortes de 22,5° (totalizando 45° de deflexão por junta e 90° no conjunto final).",
              "en": "Correct! Classic boilermaking layout: 3 segments have 2 miter joints, each deflecting 45° (two 22.5° cuts per joint), summing to 90° total bend.",
              "es": "¡Correcto! En calderería clásica: 2 uniones soldadas de 45° formadas por cortes de 22,5° cada una.",
            },
          },
          {
            id: "q9-b",
            text: {
              "pt-BR": "Todos os gomos devem ser cortados a 90° retos e soldados com eletrodo grosso para preencher a fresta aberta.",
              "en": "All segments are cut at straight 90° and welded with huge gaps.",
              "es": "Todas las virolas se cortan a 90° recto y se rellenan con soldadura.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto e absurdo. Cortes retos não formam curvatura e deixam frestas impossíveis de soldar.",
              "en": "Incorrect. Straight cuts cannot form an angular elbow.",
              "es": "Incorrecto. No forma curva.",
            },
          },
          {
            id: "q9-c",
            text: {
              "pt-BR": "O ângulo de corte deve ser de 10° em todas as partes sem qualquer cálculo geométrico.",
              "en": "Cut angle must be arbitrarily 10° on all segments.",
              "es": "El ángulo debe ser 10° en todas las piezas.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Cortes de 10° em 2 juntas somariam apenas 40° de deflexão total, falhando em atingir os 90° da curva.",
              "en": "10° miters would only total 40° deflection, failing the 90° specification.",
              "es": "Solo sumaría 40° en lugar de 90°.",
            },
          },
          {
            id: "q9-d",
            text: {
              "pt-BR": "Curvas segmentadas de caldeiraria são proibidas por lei na indústria de celulose.",
              "en": "Mitered elbows are outlawed in pulp mills.",
              "es": "Los codos en virolas están prohibidos por ley.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Curvas em gomos são perfeitamente normalizadas pela ASME B31.3 e largamente utilizadas em dutos de grande diâmetro e baixa/média pressão.",
              "en": "Mitered bends are fully standardized under ASME B31.3 for large-bore ducts.",
              "es": "Normalizadas por ASME B31.3 para grandes diámetros.",
            },
          },
        ],
      },
      {
        id: "q-geom-10",
        order: 10,
        question: {
          "pt-BR": "CENÁRIO 10: Conforme as diretrizes de integridade e conformidade do AGENTS.md da RSS3 Treinamentos, a aprovação neste módulo de curso livre de Geometria Espacial Aplicada à Caldeiraria confere habilitação legal formal para assinar projetos estruturais e laudos de vasos de pressão (NR-13) perante o CREA?",
          "en": "SCENARIO 10: In strict compliance with AGENTS.md permanent governance, does passing this online course on Spatial Geometry for Boilermaking confer statutory legal licensing to sign structural designs and pressure vessel compliance reports (NR-13) before the engineering board (CREA)?",
          "es": "ESCENARIO 10: Según las directrices del AGENTS.md, ¿aprobar este curso online de Geometría Espacial otorga atribución legal para firmar proyectos estructurales y memorias de cálculo de recipientes a presión (NR-13) ante el CREA?",
        },
        options: [
          {
            id: "q10-a",
            text: {
              "pt-BR": "SIM. A nota obtida na prova online concede automaticamente a carteira do CREA de Engenheiro Mecânico Calculista.",
              "en": "YES. The online score automatically issues a CREA professional engineer license.",
              "es": "SÍ. La nota del examen online otorga registro automático en el colegio de ingenieros.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Absurdo jurídico e terminantemente vedado pelas regras de governança e integridade da RSS3.",
              "en": "Legally impossible and strictly banned by RSS3 governance.",
              "es": "Absurdo e ilegal.",
            },
          },
          {
            id: "q10-b",
            text: {
              "pt-BR": "NÃO. Este curso confere exclusivamente o 'Certificado de Conclusão de Conteúdo Teórico de Aperfeiçoamento Profissional'. O curso aprimora a qualificação matemática dos profissionais de chão de fábrica, mas projetos de engenharia, memórias de cálculo estrutural e laudos de NR-13 exigem com exclusividade Profissional Habilitado (PH) com graduação em Engenharia e registro ativo no CREA com ART emitida.",
              "en": "NO. This course issues strictly a 'Certificate of Theoretical Completion in Professional Enhancement'. It elevates the mathematical skills of field craftsmen, but statutory engineering design, structural calculations, and NR-13 pressure vessel reports require a Licensed Professional Engineer (CREA) with formal ART endorsement.",
              "es": "NO. Este curso otorga exclusivamente 'Certificado de Conclusión de Contenido Teórico'. Capacita matemáticamente al personal de taller, pero los proyectos de ingeniería y laudos de NR-13 son atribución exclusiva de Ingenieros Colegiados con registro en el CREA y ART.",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Cumpre rigorosamente a Seção 3 do AGENTS.md: separação inequívoca entre capacitação teórica EAD e atribuições profissionais regulamentadas por lei federal.",
              "en": "Correct! Strictly adheres to AGENTS.md Section 3: non-negotiable separation between e-learning and statutory professional engineering licensing.",
              "es": "¡Correcto! Cumple con la directriz del AGENTS.md que prohíbe confundir formación técnica con atribuciones profesionales de ley.",
            },
          },
          {
            id: "q10-c",
            text: {
              "pt-BR": "SIM, contanto que o caldeireiro possua mais de 10 anos de experiência prática comprovada em carteira de trabalho.",
              "en": "YES, provided the boilermaker has 10+ years of documented field experience.",
              "es": "SÍ, si cuenta con más de 10 años de experiencia.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Experiência prática é indispensável para a execução, mas a responsabilidade técnica legal por projetos exige diploma universitário de engenharia e registro no CREA.",
              "en": "Field experience is vital for execution, but statutory engineering liability requires an accredited degree and board registry.",
              "es": "La experiencia es vital pero la firma de laudos requiere título universitario de ingeniería.",
            },
          },
          {
            id: "q10-d",
            text: {
              "pt-BR": "A validação digital dispensa a necessidade de desenhos técnicos e cálculos em qualquer obra industrial.",
              "en": "Digital validation waives blueprints and engineering calculations in all plants.",
              "es": "La validación digital elimina planos y memorias de cálculo.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Desenhos técnicos e memórias de cálculo são obrigatórios em todas as obras industriais de alta criticidade.",
              "en": "Drawings and calculations are statutory engineering requirements.",
              "es": "Planos y cálculos son obligatorios por norma técnica.",
            },
          },
        ],
      },
    ],
  },
};
