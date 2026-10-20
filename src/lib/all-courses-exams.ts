import { DEMO_COURSES } from "./mock-data";
import { CourseDemonstration } from "@/types";

export interface ChannelRecommendation {
  name: string;
  url: string;
  focus: string;
}

// Mapa de canais e recomendações de estudo por ID do curso
export const COURSE_STUDY_GUIDES: Record<string, {
  channels: ChannelRecommendation[];
  searchTerms: string[];
  themeOverview: {
    "pt-BR": string;
    en: string;
    es: string;
  };
}> = {
  "c-hidrojato-seguranca": {
    channels: [
      { name: "WJTA (WaterJet Technology Association)", url: "https://www.youtube.com/@WaterjetTechnology", focus: "Padrões internacionais de segurança em hidrojato até 40.000 PSI (2.800 bar)." },
      { name: "Fundacentro Oficial", url: "https://www.youtube.com/@FundacentroOficial", focus: "Prevenção de acidentes graves em jateamento pressurizado e normas de segurança." },
      { name: "Flow Waterjet Brasil", url: "https://www.youtube.com", focus: "Manutenção e física de bombas e bicos de ultra-alta pressão." },
    ],
    searchTerms: [
      "Procedimentos de segurança hidrojato 2800 bar",
      "WJTA hydroblasting safety guidelines whip check",
      "Inspeção e descarte de mangueiras ultra alta pressão",
    ],
    themeOverview: {
      "pt-BR": "Desafios reais de física de pressão, dimensionamento de zona de exclusão, controle de golpe de aríete e resposta a emergências em hidrojateamento.",
      "en": "Real challenges in fluid pressure physics, exclusion zones, water hammer control, and UHP emergencies.",
      "es": "Desafíos reales de física de presión, zonas de exclusión, golpe de ariete y emergencias en hidrojet.",
    },
  },
  "c-pintura-industrial-completo": {
    channels: [
      { name: "ABRACO (Associação Brasileira de Corrosão)", url: "https://www.youtube.com", focus: "Normas de preparação de superfície (SSPC/NACE/ISO 8501) e ensaios de película." },
      { name: "AMPP (Association for Materials Protection and Performance)", url: "https://www.youtube.com/@AMPPorg", focus: "Padrões mundiais de inspeção de pintura anticorrosiva e medição de rugosidade." },
      { name: "WEG Tintas Industriais", url: "https://www.youtube.com", focus: "Fichas técnicas de tintas epóxi, poliuretano e cálculo de rendimento teórico." },
    ],
    searchTerms: [
      "Como calcular espessura de película seca EPS e EPC",
      "Ponto de orvalho temperatura de substrato pintura industrial",
      "Padrões visuais de jateamento Sa 2 1/2 e Sa 3 ISO 8501-1",
    ],
    themeOverview: {
      "pt-BR": "Cálculo de espessura de filme seco (EPS), ponto de orvalho, rugosidade de perfil de ancoragem e patologias de revestimento.",
      "en": "DFT/WFT calculations, dew point thresholds, surface profile anchor patterns, and coating defects.",
      "es": "Cálculo de película seca (EPS), punto de rocío, rugosidad de anclaje y patologías de pintura.",
    },
  },
  "c-andaime-montagem-seguranca": {
    channels: [
      { name: "Fundacentro / NR-18 e NR-35", url: "https://www.youtube.com/@FundacentroOficial", focus: "Dimensionamento de andaimes tubulares e normas de estabilidade." },
      { name: "Layher Brasil (Sistemas de Andaimes)", url: "https://www.youtube.com", focus: "Montagem multidirecional, cálculo de cargas em postes e diagonais." },
      { name: "Escola da Prevenção", url: "https://www.youtube.com", focus: "Inspeção e liberação de andaimes com cartão verde/vermelho." },
    ],
    searchTerms: [
      "Cálculo de carga admissível em montagem de andaime fachadeiro",
      "NBR 6494 e NR-18 requisitos de estaiamento de andaimes",
      "Inspeção de braçadeiras fixas e giratórias de andaime tubular",
    ],
    themeOverview: {
      "pt-BR": "Estabilidade estrutural, contraventamento, cálculo de carga em sapata regulável e critérios de interdição de acesso.",
      "en": "Structural stability, bracing, base-jack load calculations, and scaffold tagging inspection.",
      "es": "Estabilidad estructural, arriostramiento, carga en husillos y criterios de inspección de andamios.",
    },
  },
  "c-nr6-epi": {
    channels: [
      { name: "Fundacentro Oficial", url: "https://www.youtube.com/@FundacentroOficial", focus: "Guia de seleção e ensaios laboratoriais de EPIs com Certificado de Aprovação (CA)." },
      { name: "Escola da Prevenção", url: "https://www.youtube.com", focus: "Gestão jurídica de fichas de EPI, Súmula 289 do TST e guarda/higienização." },
    ],
    searchTerms: [
      "Como consultar validade e especificação de CA no portal do MTE",
      "Súmula 289 TST fornecimento e uso efetivo de EPI",
      "Atenuação de protetor auricular NRRsf cálculo real",
    ],
    themeOverview: {
      "pt-BR": "Legislação de CA (Certificado de Aprovação), cálculo de atenuação de ruído NRRsf, compatibilidade de EPIs e guarda técnica.",
      "en": "PPE statutory Certification of Approval, NRRsf noise attenuation math, and legal employer liability.",
      "es": "Certificados de Aprobación de EPP, atenuación acústica NRRsf y responsabilidad patronal.",
    },
  },
  "c-nr35-trabalho-altura": {
    channels: [
      { name: "Fundacentro Oficial", url: "https://www.youtube.com/@FundacentroOficial", focus: "Guia técnico comentado da NR-35, cálculo de ZLQ e sistemas de ancoragem." },
      { name: "Spelaion Brasil (Petzl Technical Institute)", url: "https://www.youtube.com", focus: "Física da queda, fator de queda 0, 1 e 2, e força de impacto em talabartes." },
    ],
    searchTerms: [
      "Fórmula de Zona Livre de Queda ZLQ passo a passo NR-35",
      "Fator de queda 0 1 2 diferença e impacto no corpo",
      "NBR 16325 tipos de ancoragem A B C D",
    ],
    themeOverview: {
      "pt-BR": "Cálculo de ZLQ, amplificação de força em cabos de linha de vida flexível e resgate técnico em altura.",
      "en": "Fall clearance (ZLQ) calculations, vector forces on flexible lifelines, and technical rescue plans.",
      "es": "Cálculo de ZLQ, fuerzas vectoriales en líneas de vida y planes de rescate en altura.",
    },
  },
  "c-nr9-agentes-ambientais": {
    channels: [
      { name: "Fundacentro Oficial", url: "https://www.youtube.com/@FundacentroOficial", focus: "Normas de Higiene Ocupacional (NHOs) e amostragem de agentes físicos e químicos." },
      { name: "Triches Higiene Ocupacional", url: "https://www.youtube.com", focus: "Avaliação quantitativa de ruído (NHO-01), calor (NHO-06) e poeiras (NHO-08)." },
    ],
    searchTerms: [
      "Diferença entre NR-09 PGR e NR-15 laudo de insalubridade",
      "Nível de ação NR-09 quando iniciar medidas preventivas",
      "Fundacentro NHO cálculo de dose e limite de tolerância",
    ],
    themeOverview: {
      "pt-BR": "Identificação de agentes químicos, físicos e biológicos, Nível de Ação e integração com o PGR da NR-01.",
      "en": "Industrial hygiene hazard assessments, Action Levels, and integration into risk programs (PGR).",
      "es": "Identificación de agentes físicos y químicos, Niveles de Acción e integración con el PGR.",
    },
  },
  "c-nr10-seguranca-eletricidade": {
    channels: [
      { name: "Mundo da Elétrica", url: "https://www.youtube.com/@MundodaEletrica", focus: "Dispositivos DR, aterramento, arco elétrico e segurança prática em painéis." },
      { name: "Enepre / NR-10 Oficial", url: "https://www.youtube.com", focus: "Prontuário das Instalações Elétricas (PIE), desenergização e bloqueio LOTO." },
    ],
    searchTerms: [
      "Passo a passo de desenergização segura da NR-10",
      "Como funciona o dispositivo DR e por que salva vidas choque elétrico",
      "Zona controlada e zona de risco eletricidade NR-10 distâncias",
    ],
    themeOverview: {
      "pt-BR": "Procedimentos de desenergização em 6 etapas, zonas controladas/livres e operação segura de dispositivos DR.",
      "en": "6-step de-energization protocols, arc flash boundaries, and differential current (RCD) mechanics.",
      "es": "Protocolo de desenergización en 6 etapas, zonas de riesgo eléctrico y operación de diferenciales.",
    },
  },
  "c-nr11-transporte-movimentacao-materiais": {
    channels: [
      { name: "Crosby Group Rigging", url: "https://www.youtube.com/@TheCrosbyGroup", focus: "Cálculo de ângulo de lingas, manilhas e capacidade de carga em içamentos industriais." },
      { name: "Escola de Içamento de Cargas", url: "https://www.youtube.com", focus: "Plano de Rigging, inspeção de cabos de aço e cintas sintéticas." },
    ],
    searchTerms: [
      "Cálculo de tensão em lingas de 2 pernas conforme o ângulo de içamento",
      "Critérios de descarte de cinta sintética e cabo de aço NR-11",
      "Plano de Rigging para movimentação de cargas pesadas",
    ],
    themeOverview: {
      "pt-BR": "Cálculo de tensão em eslingas de içamento, ângulos críticos de amarração e critérios de descarte de cintas.",
      "en": "Sling tension vector math, critical rigging angles, and synthetic sling retirement criteria.",
      "es": "Cálculo de tensión en eslingas según ángulo, planos de izaje y descarte de cables.",
    },
  },
  "c-nr12-seguranca-maquinas-equipamentos": {
    channels: [
      { name: "Schmersal Brasil", url: "https://www.youtube.com/@SchmersalBrasil", focus: "Normas de segurança de máquinas, categorias de comando e sensores intertravados." },
      { name: "Fundacentro / NR-12", url: "https://www.youtube.com/@FundacentroOficial", focus: "Apreciação de Riscos (NBR ISO 12100) e proteções mecânicas fixas e móveis." },
    ],
    searchTerms: [
      "Categorias de segurança NR-12 Categoria 1 2 3 e 4 ISO 13849",
      "Distância de segurança para cortinas de luz fórmula EN ISO 13855",
      "Apreciação de risco de máquinas e equipamentos NR-12",
    ],
    themeOverview: {
      "pt-BR": "Categorias de segurança da ISO 13849, cálculo de distância de parada de cortinas de luz e bloqueio de energia residual.",
      "en": "ISO 13849 safety categories, light curtain stopping distance math, and residual energy isolation.",
      "es": "Categorías de seguridad ISO 13849, cálculo de distancia de cortinas ópticas y bloqueo LOTO.",
    },
  },
  "c-nr20-inflamaveis-combustiveis": {
    channels: [
      { name: "Corpo de Bombeiros / Instruções Técnicas", url: "https://www.youtube.com", focus: "Classificação de áreas perigosas, inflamáveis e combate a incêndios industriais." },
      { name: "Fundacentro NR-20", url: "https://www.youtube.com/@FundacentroOficial", focus: "Prontuário da instalação, aterramento antiestático e ponto de fulgor." },
    ],
    searchTerms: [
      "Classificação de líquidos inflamáveis e combustíveis classe I II III NR-20",
      "Classificação de áreas Zona 0 Zona 1 Zona 2 gases inflamáveis",
      "Como calcular aterramento eletrostático em transferência de solventes",
    ],
    themeOverview: {
      "pt-BR": "Classificação de áreas (Zonas 0, 1 e 2), controle de fontes de ignição estática e prontuário de inflamáveis.",
      "en": "Hazardous area classification (Zones 0, 1, 2), static electricity mitigation, and flammable inventories.",
      "es": "Clasificación de áreas clasificadas (Zona 0, 1, 2), electricidad estática y prevención de explosiones.",
    },
  },
  "c-pcm-planejamento-controle-manutencao": {
    channels: [
      { name: "Engeteles / Jhonata Teles", url: "https://www.youtube.com/@Engeteles", focus: "Canal líder em PCM: indicadores MTBF, MTTR, Disponibilidade e Curva da Banheira." },
      { name: "Tractian Confiabilidade", url: "https://www.youtube.com/@Tractian", focus: "Manutenção preditiva, sensores de vibração e ordens de serviço inteligentes." },
    ],
    searchTerms: [
      "Como calcular MTBF e MTTR passo a passo com exemplo",
      "Curva PF intervalo PF na manutenção preditiva",
      "Backlog de manutenção industrial como calcular e interpretar",
    ],
    themeOverview: {
      "pt-BR": "Cálculo de MTBF/MTTR, gerenciamento de backlog de OS, curva P-F e planejamento de paradas de manutenção.",
      "en": "MTBF/MTTR calculations, maintenance backlog modeling, P-F intervals, and shutdown scheduling.",
      "es": "Cálculo de MTBF/MTTR, gestión de backlog de mantenimiento e intervalo P-F de predictiva.",
    },
  },
  "c-manutencao-industrial-completo": {
    channels: [
      { name: "SKF Group", url: "https://www.youtube.com/@SKFGroup", focus: "Alinhamento a laser de eixos, montagem de rolamentos e lubrificação correta." },
      { name: "Telecurso 2000 Mecânica", url: "https://www.youtube.com", focus: "Aulas clássicas e completas de elementos de máquinas, engrenagens e bombas." },
    ],
    searchTerms: [
      "Tolerâncias de alinhamento a laser de eixos industriais",
      "Como calcular a quantidade correta de graxa em rolamentos industriais",
      "Procedimento de montagem e desmontagem de rolamento a quente por indução",
    ],
    themeOverview: {
      "pt-BR": "Alinhamento de eixos, cálculo de lubrificação de rolamentos por volume/frequência e tolerâncias mecânicas.",
      "en": "Shaft laser alignment tolerances, bearing regreasing volume calculations, and mechanical fits.",
      "es": "Alineación láser de ejes, cálculo de relubricación de rodamientos y tolerancias mecánicas.",
    },
  },
  "c-geometria-espacial-industrial": {
    channels: [
      { name: "Caldeiraria Pesada / Traçagem", url: "https://www.youtube.com", focus: "Cálculo de traçagem de tubos, curvas de gomos e planificação de chapas de caldeiraria." },
      { name: "Professor Ferretto", url: "https://www.youtube.com/@Ferretto", focus: "Geometria espacial: volumes de cilindros, cones, esferas e áreas de superfícies." },
    ],
    searchTerms: [
      "Cálculo de volume e área superficial de cilindro e calotas esféricas",
      "Como calcular desenvolvimento de tubulação em curva de gomos caldeiraria",
      "Teorema de Pitágoras e trigonometria aplicada à montagem de tubulações",
    ],
    themeOverview: {
      "pt-BR": "Cálculo de volume e área de tanques cilíndricos e calotas, traçagem de tubos e consumo de chapas metálicas.",
      "en": "Volume and surface area math for cylindrical vessels, piping layout, and sheet metal fabrication.",
      "es": "Cálculo de volúmenes de estanques y tuberías, trazado de calderería y áreas de chapa.",
    },
  },
  "c-excel-produtividade-operacional": {
    channels: [
      { name: "Hashtag Treinamentos", url: "https://www.youtube.com/@HashtagTreinamentos", focus: "Fórmulas avançadas (SOMASES, MÉDIASES, PROCX, SE aninhado) e relatórios." },
      { name: "Doutores do Excel", url: "https://www.youtube.com/@DoutoresdoExcel", focus: "Construção de painéis e planilhas operacionais de controle de turno." },
    ],
    searchTerms: [
      "Como usar SOMASES com múltiplos critérios no Excel",
      "Diferença entre PROCV e PROCX com exemplos",
      "Tabela dinâmica como agrupar dados e calcular porcentagens",
    ],
    themeOverview: {
      "pt-BR": "Fórmulas condicionais com múltiplos critérios, buscas avançadas, tabelas dinâmicas e validação de bases de campo.",
      "en": "Multi-criteria conditional formulas, modern lookups (XLOOKUP), pivot tables, and spreadsheet hygiene.",
      "es": "Fórmulas condicionales multicriterio, búsquedas modernas y tablas dinámicas de control.",
    },
  },
  "c-power-bi-analytics": {
    channels: [
      { name: "Planilheiros Brasil", url: "https://www.youtube.com/@PlanilheirosBrasil", focus: "Modelagem dimensional de dados (Star Schema) e boas práticas em dashboards." },
      { name: "SQLBI (Marco Russo & Alberto Ferrari)", url: "https://www.youtube.com/@SQLBI", focus: "Fórmulas DAX, CALCULATE, funções de inteligência de tempo e otimização de performance." },
    ],
    searchTerms: [
      "Como funciona a transição de contexto no CALCULATE Power BI",
      "Modelo estrela Star Schema tabelas fato e dimensão vantagens",
      "Funções de inteligência de tempo DATESYTD e SAMEPERIODLASTYEAR DAX",
    ],
    themeOverview: {
      "pt-BR": "Modelagem estrela (Star Schema), fórmulas DAX de inteligência temporal e diagnósticos visuais de KPIs industriais.",
      "en": "Star schema modeling, time intelligence DAX patterns, and industrial KPI dashboard architecture.",
      "es": "Modelado dimensional en estrella, fórmulas DAX de inteligencia temporal y métricas de planta.",
    },
  },
  "c-word-corporativo": {
    channels: [
      { name: "Hashtag Treinamentos / Word", url: "https://www.youtube.com/@HashtagTreinamentos", focus: "Formatação de documentos técnicos longos, sumários automáticos e quebras de seção." },
      { name: "Normas ABNT no Word", url: "https://www.youtube.com", focus: "Padronização de relatórios técnicos de engenharia, paginação e numeração de figuras." },
    ],
    searchTerms: [
      "Como fazer quebra de seção no Word para mudar orientação para paisagem",
      "Como criar sumário automático no Word usando estilos de título",
      "Mala direta no Word passo a passo para emissão de relatórios e etiquetas",
    ],
    themeOverview: {
      "pt-BR": "Estruturação de relatórios técnicos formais de engenharia, quebras de seção, mala direta e sumários dinâmicos.",
      "en": "Technical engineering reporting, section breaks, automated tables of contents, and mail merge.",
      "es": "Estructuración de informes técnicos, saltos de sección, tablas de contenido automáticas y plantillas.",
    },
  },
  "c-gestao-de-pessoas": {
    channels: [
      { name: "RH Academy", url: "https://www.youtube.com/@RHAcademy", focus: "Entrevistas por competências (método STAR), levantamento de necessidades de treinamento (LNT)." },
      { name: "Liderança na Prática", url: "https://www.youtube.com", focus: "Liderança situacional, reuniões de feedback construtivo e avaliação 360 graus." },
    ],
    searchTerms: [
      "Método STAR para entrevista comportamental de liderança",
      "Como fazer um Levantamento de Necessidades de Treinamento LNT",
      "Liderança Situacional Hersey e Blanchard 4 estilos",
    ],
    themeOverview: {
      "pt-BR": "Seleção técnica comportamental (STAR), matriz LNT de capacitação, avaliação 360° e liderança situacional em campo.",
      "en": "STAR competency interviewing, training needs assessments (LNT), 360 appraisals, and situational leadership.",
      "es": "Entrevistas por competencias STAR, diagnóstico LNT, evaluación 360° y liderazgo situacional.",
    },
  },
  "c-gestao-de-projetos": {
    channels: [
      { name: "Mário Trentim / Gestão de Projetos", url: "https://www.youtube.com/@MarioTrentim", focus: "Curva S, Valor Agregado (EVM), Método do Caminho Crítico (CPM) e gestão de paradas." },
      { name: "Ricardo Vargas", url: "https://www.youtube.com/@RicardoVargasVideos", focus: "Estrutura Analítica do Projeto (EAP/WBS), gestão de riscos e ritos de encerramento." },
    ],
    searchTerms: [
      "Como achar o Caminho Crítico CPM de um cronograma folga zero",
      "Fórmulas de Valor Agregado EVM CPI SPI EAC cálculo",
      "Regra dos 100 por cento na Estrutura Analítica do Projeto EAP",
    ],
    themeOverview: {
      "pt-BR": "Caminho Crítico (CPM com folga zero), Análise de Valor Agregado (CPI/SPI/EAC), Curva S e governança de pleitos de obra.",
      "en": "Critical Path Method (zero float), Earned Value forecasting (CPI/SPI/EAC), S-curves, and contract change orders.",
      "es": "Ruta Crítica (holgura cero), Gestión del Valor Ganado (CPI/SPI/EAC), Curva S y control de cambios contractuales.",
    },
  },
  "c-gestao-da-qualidade": {
    channels: [
      { name: "FM2S Educação e Consultoria", url: "https://www.youtube.com/@FM2SEducacao", focus: "Ciclo PDCA, Ishikawa 6M, Diagrama de Pareto 80/20 e FMEA." },
      { name: "Qualidade na Prática / ISO 9001", url: "https://www.youtube.com", focus: "Tratamento de Não Conformidades (RNC), ação corretiva e auditorias do 5S." },
    ],
    searchTerms: [
      "Como fazer diagrama de Ishikawa 6M causa e efeito exemplo prático",
      "Como calcular o índice de capacidade Cpk e Cp no CEP",
      "Fórmula do RPN no FMEA Severidade Ocorrência Detecção",
    ],
    themeOverview: {
      "pt-BR": "Ciclo PDCA, Ishikawa 6M para falhas mecânicas, Análise de Pareto, FMEA e controle estatístico Cpk de processo.",
      "en": "PDCA cycles, Ishikawa 6M root-cause analysis, Pareto charts, FMEA risk scoring, and process capability Cpk.",
      "es": "Ciclo PDCA, Ishikawa 6M para fallas de planta, Pareto 80/20, matriz FMEA y capacidad de procesos Cpk.",
    },
  },
  "c-fundamentos-administracao-gestao": {
    channels: [
      { name: "Prof. Me. Fábio Gomes / Administração", url: "https://www.youtube.com", focus: "Teorias clássicas de Taylor e Fayol, processo administrativo PODC e governança corporativa." },
      { name: "Me Salva! Administração", url: "https://www.youtube.com", focus: "Metas SMART, 5 Forças de Porter, cálculo de Ponto de Equilíbrio e finanças CAPEX/OPEX." },
    ],
    searchTerms: [
      "Diferença entre a teoria de Taylor e Fayol administração",
      "Como calcular Ponto de Equilíbrio Operacional Custos Fixos Margem de Contribuição",
      "Os 4 pilares da Governança Corporativa IBGC Transparência Equidade",
    ],
    themeOverview: {
      "pt-BR": "Processo administrativo (PODC), Taylor vs Fayol, cálculo de Ponto de Equilíbrio financeiro, CAPEX/OPEX e governança ESG.",
      "en": "Managerial process (POLC), Taylor vs Fayol, break-even math, OPEX vs CAPEX, and ESG corporate governance.",
      "es": "Proceso gerencial PODC, Taylor vs Fayol, punto de equilibrio financiero, CAPEX/OPEX y gobernanza ESG.",
    },
  },
  "c-pericia-judicial-trabalhista": {
    channels: [
      { name: "Perícia Sem Segredo / Tiago Silva", url: "https://www.youtube.com", focus: "Rito pericial trabalhista, formulação de quesitos estratégicos e impugnação de laudos periciais." },
      { name: "Fundacentro Oficial", url: "https://www.youtube.com/@FundacentroOficial", focus: "Insalubridade por ruído (NHO-01), calor (NHO-06) e agentes químicos do Anexo 11 e 12." },
    ],
    searchTerms: [
      "Artigo 195 da CLT perícia técnica obrigatória médico engenheiro",
      "Conflito Anexo 11 e Anexo 13 da NR-15 xileno solventes quantitativo",
      "Súmula 364 do TST periculosidade contato intermitente inflamáveis",
    ],
    themeOverview: {
      "pt-BR": "Rito do Art. 195 da CLT, formulação de quesitos, impugnação de laudos de insalubridade/periculosidade e Súmulas do TST.",
      "en": "CLT Art. 195 court witness protocols, technical interrogatories, hazard pay rebuttals, and TST precedents.",
      "es": "Procedimiento del Art. 195 de la CLT, redacción de cuestionarios periciales e impugnación de laudos.",
    },
  },
};

export interface UnifiedCourseExamTrack {
  courseId: string;
  slug: string;
  badgeCode: string;
  title: {
    "pt-BR": string;
    en: string;
    es: string;
  };
  schoolName: {
    "pt-BR": string;
    en: string;
    es: string;
  };
  category: "aplicativos" | "mecanica" | "seguranca" | "gestao" | "pericia";
  difficulty: "Intermediário" | "Avançado" | "Especialista";
  workloadMinutes: number;
  thumbnailGradient: string;
  coverImage?: string;
  summary: {
    "pt-BR": string;
    en: string;
    es: string;
  };
  channels: ChannelRecommendation[];
  searchTerms: string[];
  questionsCount: number;
  passingScore: number;
  questions: {
    id: string;
    order: number;
    question: {
      "pt-BR": string;
      en: string;
      es: string;
    };
    options: {
      id: string;
      text: {
        "pt-BR": string;
        en: string;
        es: string;
      };
      isCorrect: boolean;
      explanation: {
        "pt-BR": string;
        en: string;
        es: string;
      };
    }[];
  }[];
}

// Mapeador que transforma todos os 21 cursos do LMS em trilhas de provas na página /desafios
export function getAllCourseExamTracks(): UnifiedCourseExamTrack[] {
  return DEMO_COURSES.map((course) => {
    const guide = COURSE_STUDY_GUIDES[course.id] || {
      channels: [
        { name: "Fundacentro Oficial", url: "https://www.youtube.com/@FundacentroOficial", focus: "Normas e procedimentos técnicos industriais de segurança." },
        { name: "Escola da Prevenção", url: "https://www.youtube.com", focus: "Aulas práticas sobre normas regulamentadoras e gestão operacional." },
      ],
      searchTerms: [
        `Normas técnicas e procedimentos de ${course.title["pt-BR"]}`,
        `Como resolver problemas práticos de ${course.title["pt-BR"]}`,
      ],
      themeOverview: course.description,
    };

    // Determina a categoria simplificada para o filtro
    let category: "aplicativos" | "mecanica" | "seguranca" | "gestao" | "pericia" = "seguranca";
    if (course.id.includes("excel") || course.id.includes("power-bi") || course.id.includes("word")) {
      category = "aplicativos";
    } else if (course.id.includes("pcm") || course.id.includes("manutencao") || course.id.includes("hidrojato") || course.id.includes("geometria")) {
      category = "mecanica";
    } else if (course.id.includes("gestao") || course.id.includes("administracao")) {
      category = "gestao";
    } else if (course.id.includes("pericia")) {
      category = "pericia";
    }

    return {
      courseId: course.id,
      slug: course.slug,
      badgeCode: course.badgeCode || "RSS3",
      title: course.title,
      schoolName: course.schoolName,
      category,
      difficulty: course.level === "advanced" ? "Especialista" : course.level === "intermediate" ? "Avançado" : "Intermediário",
      workloadMinutes: course.finalAssessment?.estimatedMinutes || 50,
      thumbnailGradient: course.thumbnailGradient || "from-blue-700 to-slate-900",
      coverImage: course.coverImage,
      summary: guide.themeOverview,
      channels: guide.channels,
      searchTerms: guide.searchTerms,
      questionsCount: course.finalAssessment?.questions ? course.finalAssessment.questions.length : 10,
      passingScore: course.finalAssessment?.passingScorePercent || 70,
      questions: course.finalAssessment?.questions ? course.finalAssessment.questions : [],
    };
  });
}
