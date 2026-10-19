export type Locale = "pt-BR" | "en" | "es";

export type ContentType = "video" | "text" | "pdf" | "activity";

export type CourseModality = "online" | "presential" | "hybrid";

export interface LessonSection {
  title: Record<Locale, string>;
  body: Record<Locale, string>;
}

export interface LessonChecklistItem {
  id: string;
  label: Record<Locale, string>;
  criterion: Record<Locale, string>;
}

export interface LessonTableData {
  headers: Record<Locale, string>[];
  rows: Record<Locale, string>[][];
}

export interface LessonVisualAsset {
  id: string;
  type: "diagram" | "photo" | "schematic";
  title: Record<Locale, string>;
  caption: Record<Locale, string>;
  alt: Record<Locale, string>;
  componentKey?: string;
  src?: string;
}

export interface LessonContentDetail {
  objective?: Record<Locale, string>;
  introduction?: Record<Locale, string>;
  sections?: LessonSection[];
  visualAsset?: LessonVisualAsset;
  practicalExample?: {
    title: Record<Locale, string>;
    scenario: Record<Locale, string>;
    analysis: Record<Locale, string>;
  };
  commonMistakes?: Record<Locale, string>[];
  bulletPoints?: Record<Locale, string>[];
  checklist?: {
    title: Record<Locale, string>;
    items: LessonChecklistItem[];
  };
  table?: LessonTableData;
  summaryPoints?: Record<Locale, string>[];
  reflectionQuestions?: Record<Locale, string>[];
  htmlContent?: Record<Locale, string>;
  videoPlaceholderNotice?: Record<Locale, string>;
  pdfResourceNotice?: Record<Locale, string>;
  activityInstructions?: Record<Locale, string>;
}

export interface LessonChallengeOption {
  id: string;
  text: Record<Locale, string>;
  isCorrect: boolean;
  explanation: Record<Locale, string>;
}

export interface LessonQuizChallenge {
  id: string;
  question: Record<Locale, string>;
  contextScenario?: Record<Locale, string>;
  options: LessonChallengeOption[];
}

export interface LessonAttachment {
  id: string;
  title: Record<Locale, string>;
  type: "pdf" | "spreadsheet" | "document" | "standard";
  sizeMb?: number;
  description?: Record<Locale, string>;
  downloadUrl?: string;
}

export interface LessonDemonstration {
  id: string;
  order: number;
  title: Record<Locale, string>;
  durationMinutes: number;
  contentType: ContentType;
  isLocked?: boolean;
  lockReason?: Record<Locale, string>;
  videoUrl?: string; // Ex: YouTube video ID ou URL completa
  challenge?: LessonQuizChallenge;
  contentDetail?: LessonContentDetail;
  attachments?: LessonAttachment[];
}

export interface ExamOption {
  id: string;
  text: Record<Locale, string>;
  isCorrect: boolean;
  explanation: Record<Locale, string>;
}

export interface ExamQuestion {
  id: string;
  order: number;
  question: Record<Locale, string>;
  options: ExamOption[];
  weight?: number;
}

export interface CurriculumExamItem {
  id: string;
  order: number;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  scope: "module" | "course";
  moduleId?: string;
  estimatedMinutes: number;
  questionsCount?: number;
  passingScorePercent?: number;
  maxAttempts?: number;
  isAvailable: boolean;
  availabilityNotice: Record<Locale, string>;
  questions?: ExamQuestion[];
}

export interface ModuleDemonstration {
  id: string;
  order: number;
  title: Record<Locale, string>;
  description?: Record<Locale, string>;
  lessons: LessonDemonstration[];
  moduleAssessment?: CurriculumExamItem;
}

export interface CourseDemonstration {
  id: string;
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  longDescription?: Record<Locale, string>;
  schoolId: string;
  schoolName: Record<Locale, string>;
  workloadHours: number;
  level: "basic" | "intermediate" | "advanced";
  modality: CourseModality;
  isMandatory: boolean;
  mandatoryFor: string[];
  targetAudience?: Record<Locale, string>;
  prerequisites?: Record<Locale, string>;
  learningObjectives?: Record<Locale, string[]>;
  modulesCount: number;
  lessonsCount: number;
  modules?: ModuleDemonstration[];
  finalAssessment?: CurriculumExamItem;
  assessments?: CurriculumExamItem[];
  thumbnailGradient: string;
  coverImage?: string;
  categories?: ("nr-regulamentar" | "conhecimento-operacional" | "gestao-produtividade" | "qualidade-processos")[];
  badgeCode?: string;
  updatedAtDate: string; // ISO date string (YYYY-MM-DD)
}

export interface UserDemonstration {
  id: string;
  name: string;
  email: string;
  role: "student" | "instructor" | "manager" | "leadership" | "admin";
  roleName: Record<Locale, string>;
  operationalBase: string;
  department: string;
  currentXP: number;
  level: number;
  completedCoursesCount: number;
  inProgressCoursesCount: number;
  certificatesCount: number;
  avatarUrl?: string;
}

export interface SchoolCategory {
  id: string;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  iconName: string;
  coursesCount: number;
  imageUrl?: string;
  color?: string;
}

// Tipos para Progresso Demonstrativo Local
export interface CourseProgressRecord {
  courseId: string;
  completedLessonIds: string[];
  lastAccessedLessonId: string;
  lastAccessedAt: string; // ISO string
  examScore?: number;
  examPassed?: boolean;
}

export type UserProgressStore = Record<string, CourseProgressRecord>;

// Tipos para Certificados Demonstrativos Oficiais
export interface CertificateDemonstration {
  id: string; // Ex: cert-c-hidrojato-seguranca
  courseId: string;
  courseTitle: Record<Locale, string>;
  schoolName: Record<Locale, string>;
  workloadHours: number;
  userName: string;
  userRole?: string;
  operationalBase?: string;
  department?: string;
  validationCode: string; // Formato RSS3-XXXX-XXXX-XXXX-XXXX
  issuedAt: string; // ISO string
  scorePercent?: number;
}

// Tipos para MBA
export interface MbaCourseItem {
  id: string;
  courseId?: string; // Se vinculado a um CourseDemonstration existente
  title: Record<Locale, string>;
  categoryTag?: string;
  workloadHours: number;
  order: number;
  isUnlocked: boolean;
  unlockedReason?: Record<Locale, string>;
  accentColor?: string; // hex ou tailwind (ex: #0284c7)
  iconType?: "gear" | "award" | "document" | "shield" | "droplet" | "user";
  coverImageUrl?: string;
  description?: Record<Locale, string>;
  modulesCount?: number;
  lessonsCount?: number;
}

export interface MbaProgram {
  id: string;
  slug: string;
  title: Record<Locale, string>;
  subtitle?: Record<Locale, string>;
  description: Record<Locale, string>;
  category: Record<Locale, string>;
  bannerImageUrl?: string;
  courses: MbaCourseItem[];
  accentColor: string;
  totalHours: number;
  featured?: boolean;
}
