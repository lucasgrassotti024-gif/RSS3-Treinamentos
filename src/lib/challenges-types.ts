export interface RecommendedChannel {
  name: string;
  url: string;
  description: {
    "pt-BR": string;
    en: string;
    es: string;
  };
}

export interface ChallengeQuestion {
  id: string;
  order: number;
  title: {
    "pt-BR": string;
    en: string;
    es: string;
  };
  // Texto fluido, claro e envolvente que narra a situação real
  storyNarrative: {
    "pt-BR": string;
    en: string;
    es: string;
  };
  // A pergunta direta e clara
  questionPrompt: {
    "pt-BR": string;
    en: string;
    es: string;
  };
  // Canais do YouTube / fontes externas recomendadas para aprender o assunto
  recommendedChannels: RecommendedChannel[];
  // Dicas de pesquisa no Google / YouTube
  searchTips: {
    "pt-BR": string[];
    en: string[];
    es: string[];
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
  // Vínculo direto com o curso correspondente na RSS3 Treinamentos
  relatedCourse: {
    courseId: string;
    courseName: {
      "pt-BR": string;
      en: string;
      es: string;
    };
    whyStudy: {
      "pt-BR": string;
      en: string;
      es: string;
    };
  };
}

export interface TechnicalChallengeTrack {
  id: string;
  slug: string;
  badgeCode: string;
  coverImage?: string;
  thumbnailGradient: string;
  schoolName: {
    "pt-BR": string;
    en: string;
    es: string;
  };
  title: {
    "pt-BR": string;
    en: string;
    es: string;
  };
  category: "aplicativos" | "mecanica" | "seguranca" | "gestao" | "pericia";
  difficulty: "Intermediário" | "Avançado" | "Especialista";
  workloadMinutes: number;
  summary: {
    "pt-BR": string;
    en: string;
    es: string;
  };
  prerequisites: {
    "pt-BR": string;
    en: string;
    es: string;
  };
  questions: ChallengeQuestion[];
}
