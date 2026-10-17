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
    estimatedMinutes: 30,
    questionsCount: 5,
    isAvailable: true,
    availabilityNotice: {
      "pt-BR": "Avaliação técnica com 5 questões de cálculo espacial aplicado a tanques, tubulações e estruturas metálicas. Nota mínima de 70% para emissão do certificado.",
      "en": "Technical assessment with 5 questions on spatial calculations applied to tanks, pipes, and steel structures. 70% passing score.",
      "es": "Evaluación técnica de 5 preguntas sobre cubicación de tanques y tuberías. Nota mínima del 70%.",
    },
    title: {
      "pt-BR": "Avaliação Final de Competência — Geometria Espacial Industrial",
      "en": "Final Competency Exam — Industrial Spatial Geometry",
      "es": "Evaluación Final de Competencias — Geometría Espacial Industrial",
    },
    description: {
      "pt-BR": "Validação de domínio em fórmulas de Euler, volume de cilindros e prismas, cubagem de troncos de cone e cálculo de área de pintura industrial.",
      "en": "Validation of mastery in Euler formula, prism/cylinder volume, truncated cone kitting, and coating area estimates.",
      "es": "Validación de cálculos de volumen, áreas de pintura y fórmulas espaciales.",
    },
    questions: [
      {
        id: "q-geom-1",
        order: 1,
        question: {
          "pt-BR": "1. Um caldeireiro industrial está fabricando uma estrutura metálica tridimensional convexa que possui 12 vértices e 8 faces. Pela Relação de Euler (V - A + F = 2), quantas arestas (barras de aço) compõem essa estrutura?",
          "en": "1. A boilermaker is fabricating a 3D convex steel structure with 12 vertices and 8 faces. Using Euler's relation (V - E + F = 2), how many edges (steel bars) does it have?",
          "es": "1. Una estructura metálica convexa posee 12 vértices y 8 caras. Según la Relación de Euler (V - A + F = 2), ¿cuántas aristas tiene?",
        },
        options: [
          {
            id: "q1-a",
            text: {
              "pt-BR": "18 arestas",
              "en": "18 edges",
              "es": "18 aristas",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Aplicando a fórmula: V - A + F = 2 -> 12 - A + 8 = 2 -> 20 - A = 2 -> A = 18 arestas.",
              "en": "Correct! Applying V - E + F = 2: 12 - E + 8 = 2 -> 20 - E = 2 -> E = 18.",
              "es": "¡Correcto! 12 - A + 8 = 2, despejando A = 18.",
            },
          },
          {
            id: "q1-b",
            text: {
              "pt-BR": "20 arestas",
              "en": "20 edges",
              "es": "20 aristas",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. 20 é a soma de V + F, mas precisa subtrair 2 para encontrar A.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q1-c",
            text: {
              "pt-BR": "14 arestas",
              "en": "14 edges",
              "es": "14 aristas",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-geom-2",
        order: 2,
        question: {
          "pt-BR": "2. Um tanque cilíndrico vertical de armazenamento de água para hidrojateamento possui raio de base R = 2 metros e altura h = 5 metros. Adotando π = 3,14, qual é a capacidade volumétrica desse tanque em Litros (sabendo que 1 m³ = 1.000 L)?",
          "en": "2. A vertical hydroblast cylindrical water tank has base radius R = 2 meters and height h = 5 meters. Using pi = 3.14, what is its capacity in Liters (1 m³ = 1,000 L)?",
          "es": "2. Un estanque cilíndrico tiene radio R = 2 m y altura h = 5 m. Con π = 3,14, ¿cuál es su capacidad en Litros?",
        },
        options: [
          {
            id: "q2-a",
            text: {
              "pt-BR": "62.800 Litros (62,8 m³)",
              "en": "62,800 Liters (62.8 m³)",
              "es": "62.800 Litros (62,8 m³)",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Volume = π * R² * h = 3,14 * (2)² * 5 = 3,14 * 4 * 5 = 3,14 * 20 = 62,8 m³. Multiplicando por 1.000 L/m³ temos 62.800 Litros.",
              "en": "Correct! V = pi*R²*h = 3.14 * 4 * 5 = 62.8 m³ = 62,800 Liters.",
              "es": "¡Correcto! V = 3,14 * 4 * 5 = 62,8 m³ = 62.800 L.",
            },
          },
          {
            id: "q2-b",
            text: {
              "pt-BR": "31.400 Litros (31,4 m³)",
              "en": "31,400 Liters (31.4 m³)",
              "es": "31.400 Litros (31,4 m³)",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Esqueceu de elevar o raio ao quadrado.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q2-c",
            text: {
              "pt-BR": "125.600 Litros (125,6 m³)",
              "en": "125,600 Liters (125.6 m³)",
              "es": "125.600 Litros (125,6 m³)",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-geom-3",
        order: 3,
        question: {
          "pt-BR": "3. Para calcular a área lateral externa de uma tubulação industrial reta com diâmetro externo D e comprimento L para fins de pintura anticorrosiva, qual fórmula direta deve ser utilizada?",
          "en": "3. To calculate the external lateral surface area of a straight pipe with outer diameter D and length L for coating, which direct formula is used?",
          "es": "3. Para calcular el área lateral externa de una cañería de diámetro exterior D y longitud L para pintura, ¿cuál es la fórmula directa?",
        },
        options: [
          {
            id: "q3-a",
            text: {
              "pt-BR": "Al = π * D * L",
              "en": "Al = pi * D * L",
              "es": "Al = π * D * L",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Como o comprimento da circunferência da seção é C = 2πR = πD, ao multiplicar pelo comprimento L obtém-se exatamente a área da chapa planificada: Al = π*D*L.",
              "en": "Correct! Circumference C = pi*D multiplied by length L yields the exact unrolled lateral surface area.",
              "es": "¡Correcto! El perímetro π*D multiplicado por la longitud L arroja los metros cuadrados exactos de pintura.",
            },
          },
          {
            id: "q3-b",
            text: {
              "pt-BR": "Al = π * D² * L",
              "en": "Al = pi * D² * L",
              "es": "Al = π * D² * L",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Essa expressão se relaciona com quatro vezes o volume, não com a área.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q3-c",
            text: {
              "pt-BR": "Al = D * L / 2",
              "en": "Al = D * L / 2",
              "es": "Al = D * L / 2",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Não considera a curvatura circular representada por π.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
      {
        id: "q-geom-4",
        order: 4,
        question: {
          "pt-BR": "4. Em caldeiraria e tubulação industrial, uma redução concêntrica de linha de vapor que liga um tubo de diâmetro maior a um de diâmetro menor corresponde geometricamente a qual sólido espacial?",
          "en": "4. In industrial piping, a concentric reducer joining a larger diameter pipe to a smaller diameter pipe geometrically represents which 3D solid?",
          "es": "4. En tuberías industriales, una reducción concéntrica que conecta dos diámetros distintos representa geométricamente a:",
        },
        options: [
          {
            id: "q4-a",
            text: {
              "pt-BR": "Tronco de Cone reto",
              "en": "Truncated right cone",
              "es": "Tronco de Cono recto",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! A redução concêntrica é exatamente um tronco de cone circular reto, onde a base maior e a menor conectam as duas tubulações concêntricas.",
              "en": "Correct! A concentric reducer is a truncated right cone with two parallel circular bases matching the respective pipe diameters.",
              "es": "¡Correcto! Una reducción concéntrica es exactamente un tronco de cono circular recto.",
            },
          },
          {
            id: "q4-b",
            text: {
              "pt-BR": "Prisma hexagonal oblíquo",
              "en": "Oblique hexagonal prism",
              "es": "Prisma hexagonal oblicuo",
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
              "pt-BR": "Tetraedro regular",
              "en": "Regular tetrahedron",
              "es": "Tetraedro regular",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
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
          "pt-BR": "5. O que enuncia o 2º Teorema de Pappus-Guldin para cálculo de volume de sólidos gerados pela rotação completa de uma área plana em torno de um eixo externo que não a corta?",
          "en": "5. What does the 2nd Theorem of Pappus-Guldin state for computing the volume of a solid of revolution?",
          "es": "5. ¿Qué establece el 2º Teorema de Pappus-Guldin para calcular el volumen de un sólido de revolución?",
        },
        options: [
          {
            id: "q5-a",
            text: {
              "pt-BR": "O volume gerado é igual ao produto da área plana pelo comprimento da circunferência percorrida pelo seu centro de gravidade (V = A * 2π * dG).",
              "en": "The generated volume equals the planar area multiplied by the circumference traveled by its center of mass (V = A * 2*pi*dG).",
              "es": "El volumen generado es igual al producto del área plana por el perímetro recorrido por su centroide (V = A * 2π * dG).",
            },
            isCorrect: true,
            explanation: {
              "pt-BR": "Correto! Esse teorema permite calcular facilmente volumes de curvas de tubulações (toroides) e anéis metálicos sem integrais complexas.",
              "en": "Correct! This theorem enables straightforward volume computation for pipe elbows and toroids without complex calculus.",
              "es": "¡Correcto! V = A * 2π * dG permite cubicar curvas y toroides de forma ágil y precisa.",
            },
          },
          {
            id: "q5-b",
            text: {
              "pt-BR": "O volume é sempre igual a zero se o eixo for perpendicular à gravidade.",
              "en": "The volume is always zero if the axis is perpendicular.",
              "es": "El volumen siempre es cero.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
          {
            id: "q5-c",
            text: {
              "pt-BR": "O volume só pode ser calculado se a figura tiver apenas três lados.",
              "en": "Volume can only be calculated for three-sided figures.",
              "es": "Solo aplica a figuras triangulares.",
            },
            isCorrect: false,
            explanation: {
              "pt-BR": "Incorreto. Aplica-se a qualquer figura plana delimitada.",
              "en": "Incorrect.",
              "es": "Incorrecto.",
            },
          },
        ],
      },
    ],
  },
};
