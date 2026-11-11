"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Bot,
  Send,
  Plus,
  MessageSquare,
  Trash2,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  BookOpen,
  GraduationCap,
  Trophy,
  Award,
} from "lucide-react";
import { AIMessage, AICardAttachment, getLocalAIResponse } from "@/lib/ai-assistant-data";
import { DEMO_COURSES, DEMO_MBAS } from "@/lib/mock-data";
import { getStoredCertificates } from "@/lib/progress";

interface ChatSession {
  id: string;
  title: string;
  createdAt: string;
  messages: AIMessage[];
}

const STORAGE_KEY = "rss3_ai_chat_sessions";
const ACTIVE_SESSION_KEY = "rss3_ai_active_session_id";

function createInitialSession(): ChatSession {
  return {
    id: `session-${Date.now()}`,
    title: "Nova Conversa",
    createdAt: new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }),
    messages: [],
  };
}

export default function AssistantPage() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Carrega histórico do localStorage no client
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: ChatSession[] = JSON.parse(stored);
        if (parsed.length > 0) {
          setSessions(parsed);
          const lastActive = localStorage.getItem(ACTIVE_SESSION_KEY);
          const activeExists = parsed.find((s) => s.id === lastActive);
          setActiveSessionId(activeExists ? activeExists.id : parsed[0].id);
          return;
        }
      }
    } catch {
      // fallback
    }

    const initial = createInitialSession();
    setSessions([initial]);
    setActiveSessionId(initial.id);
  }, []);

  // Salva no localStorage quando mudar
  useEffect(() => {
    if (sessions.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
      } catch {
        // storage restrito
      }
    }
  }, [sessions]);

  useEffect(() => {
    if (activeSessionId) {
      try {
        localStorage.setItem(ACTIVE_SESSION_KEY, activeSessionId);
      } catch {
        // storage restrito
      }
    }
  }, [activeSessionId]);

  const activeSession = sessions.find((s) => s.id === activeSessionId) || sessions[0];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeSession?.messages, isLoading]);

  // Cria nova conversa
  const handleNewChat = () => {
    const newSession = createInitialSession();
    setSessions((prev) => [newSession, ...prev]);
    setActiveSessionId(newSession.id);
    setSidebarOpen(false);
  };

  // Exclui uma conversa
  const handleDeleteSession = (idToDelete: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const remaining = sessions.filter((s) => s.id !== idToDelete);
    if (remaining.length === 0) {
      const fresh = createInitialSession();
      setSessions([fresh]);
      setActiveSessionId(fresh.id);
    } else {
      setSessions(remaining);
      if (activeSessionId === idToDelete) {
        setActiveSessionId(remaining[0].id);
      }
    }
  };

  // Envia mensagem
  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading || !activeSession) return;

    const currentSessionId = activeSession.id;
    const timeLabel = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsgId = `user-${Math.random().toString(36).slice(2, 9)}`;

    const userMsg: AIMessage = {
      id: userMsgId,
      sender: "user",
      text,
      timestamp: timeLabel,
    };

    // Atualiza título da conversa se for a primeira mensagem do usuário
    const isFirstUserMsg = activeSession.messages.filter((m) => m.sender === "user").length === 0;
    const newTitle = isFirstUserMsg ? (text.length > 28 ? text.slice(0, 28) + "..." : text) : activeSession.title;

    setSessions((prev) =>
      prev.map((s) => {
        if (s.id === activeSession.id) {
          return {
            ...s,
            title: newTitle,
            messages: [...s.messages, userMsg],
          };
        }
        return s;
      })
    );

    if (!textToSend) setInputValue("");
    setIsLoading(true);

    // Detecção inteligente de cards para anexar na resposta
    const detectAttachments = (replyText: string, queryText: string): AICardAttachment[] => {
      const attachments: AICardAttachment[] = [];
      const combined = `${queryText} ${replyText}`.toLowerCase();

      // 1. Detecção de Certificados (só exibe se o usuário tiver certificados emitidos no sistema!)
      if (
        combined.includes("certificado") ||
        combined.includes("diploma") ||
        combined.includes("conclusao") ||
        combined.includes("minhas conquistas")
      ) {
        const userCerts = getStoredCertificates();
        if (userCerts.length > 0) {
          userCerts.slice(0, 2).forEach((c) => {
            attachments.push({
              type: "certificate",
              id: c.id,
              title: `Certificado: ${c.courseTitle["pt-BR"] || "Curso Técnico"}`,
              description: `Código Canônico: ${c.validationCode}`,
              badge: "Emitido & Válido",
              href: "/certificados",
              meta: `Carga: ${c.workloadHours}h`,
            });
          });
        }
      }

      // 2. Detecção de Cursos
      DEMO_COURSES.forEach((course) => {
        const titlePt = (course.title["pt-BR"] || "").toLowerCase();
        const slug = course.slug.toLowerCase();
        if (
          combined.includes(course.id.toLowerCase()) ||
          (titlePt.length > 5 && combined.includes(titlePt)) ||
          (slug.length > 5 && combined.includes(slug)) ||
          (course.id.includes("nr12") && (combined.includes("nr-12") || combined.includes("nr 12") || combined.includes("loto"))) ||
          (course.id.includes("nr11") && (combined.includes("nr-11") || combined.includes("nr 11") || combined.includes("ponte rolante"))) ||
          (course.id.includes("nr20") && (combined.includes("nr-20") || combined.includes("nr 20") || combined.includes("inflamaveis"))) ||
          (course.id.includes("excel") && combined.includes("excel")) ||
          (course.id.includes("power-bi") && (combined.includes("power bi") || combined.includes("powerbi"))) ||
          (course.id.includes("pcm") && combined.includes("pcm")) ||
          (course.id.includes("hidrojato") && combined.includes("hidrojato")) ||
          (course.id.includes("pintura") && combined.includes("pintura"))
        ) {
          if (!attachments.some((a) => a.id === course.id) && attachments.length < 3) {
            attachments.push({
              type: "course",
              id: course.id,
              title: course.title["pt-BR"],
              description: course.description["pt-BR"],
              badge: `${course.workloadHours} horas`,
              href: `/catalogo/${course.id}`,
              meta: `${course.modulesCount} módulos • ${course.lessonsCount} aulas`,
            });
          }
        }
      });

      // 3. Detecção de MBAs
      DEMO_MBAS.forEach((mba) => {
        const titlePt = (mba.title["pt-BR"] || "").toLowerCase();
        if (combined.includes("mba") || combined.includes(titlePt)) {
          if (!attachments.some((a) => a.id === mba.id) && attachments.length < 3) {
            attachments.push({
              type: "mba",
              id: mba.id,
              title: mba.title["pt-BR"],
              description: mba.subtitle ? mba.subtitle["pt-BR"] : "Formação Técnica Integrada",
              badge: "Formação Executiva",
              href: `/mbas/${mba.slug || mba.id}`,
              meta: `${mba.totalHours} horas • Trilha Integrada`,
            });
          }
        }
      });

      // 4. Detecção de Desafios / Provas
      if (
        combined.includes("prova") ||
        combined.includes("desafio") ||
        combined.includes("simulado") ||
        combined.includes("teste") ||
        combined.includes("avaliacao")
      ) {
        if (!attachments.some((a) => a.type === "exam") && attachments.length < 3) {
          attachments.push({
            type: "exam",
            id: "desafios-provas-geral",
            title: "Central de Desafios & Provas Industriais",
            description: "Simulados práticos com cenários reais de campo para testar seus conhecimentos.",
            badge: "Simulados & Prática",
            href: "/desafios",
            meta: "Pontuação XP & Ranking",
          });
        }
      }

      return attachments;
    };

    try {
      // Enviamos as últimas 6 mensagens como contexto para o Gemini ter memória da conversa!
      const recentHistory = activeSession.messages.slice(-6).map((m) => ({
        role: m.sender === "user" ? "user" : "assistant",
        text: m.text,
      }));

      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: recentHistory }),
      });

      if (res.ok) {
        const data = await res.json();
        const attachments = detectAttachments(data.reply, text);
        const aiMsg: AIMessage = {
          id: `ai-${Math.random().toString(36).slice(2, 9)}`,
          sender: "assistant",
          text: data.reply,
          timestamp: timeLabel,
          suggestedActions: data.suggestedActions,
          attachments,
        };

        setSessions((prev) =>
          prev.map((s) =>
            s.id === currentSessionId ? { ...s, messages: [...s.messages, aiMsg] } : s
          )
        );
      } else {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Erro HTTP ${res.status}`);
      }
    } catch (err: unknown) {
      console.error("Falha ao comunicar com a IA:", err);
      // Se a chamada de rede falhar, utiliza a resposta local amigável
      const localResult = getLocalAIResponse(text);
      const attachments = detectAttachments(localResult.text, text);
      const aiMsg: AIMessage = {
        id: `ai-${Math.random().toString(36).slice(2, 9)}`,
        sender: "assistant",
        text: localResult.text,
        timestamp: timeLabel,
        suggestedActions: localResult.suggestedActions,
        attachments,
      };

      setSessions((prev) =>
        prev.map((s) =>
          s.id === currentSessionId ? { ...s, messages: [...s.messages, aiMsg] } : s
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-3.5rem)] w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Backdrop Mobile para a barra de conversas */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/60 z-30 md:hidden backdrop-blur-xs"
        />
      )}

      {/* Barra Lateral de Conversas (Estilo ChatGPT / Claude) */}
      <aside
        className={`
          fixed md:relative top-0 bottom-0 left-0 z-40
          w-64 bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-md
          border-r border-slate-200 dark:border-slate-800
          flex flex-col justify-between transition-transform duration-200 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Topo: Nova Conversa */}
        <div className="p-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
          <button
            onClick={handleNewChat}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Nova Conversa</span>
          </button>

          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Lista de Conversas Anteriores */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Histórico
          </div>
          {sessions.map((s) => {
            const isActive = s.id === activeSessionId;
            return (
              <div
                key={s.id}
                onClick={() => {
                  setActiveSessionId(s.id);
                  setSidebarOpen(false);
                }}
                className={`group flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-xs font-medium cursor-pointer transition-colors ${
                  isActive
                    ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs border border-slate-200/60 dark:border-slate-700/60"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/50"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <MessageSquare className="w-3.5 h-3.5 shrink-0 opacity-70" />
                  <span className="truncate">{s.title}</span>
                </div>

                <button
                  onClick={(e) => handleDeleteSession(s.id, e)}
                  title="Excluir conversa"
                  className="opacity-0 group-hover:opacity-100 p-1 hover:text-rose-500 rounded-md transition-opacity cursor-pointer shrink-0"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Rodapé da Sidebar */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Site</span>
          </Link>
          <span className="text-[10px] text-emerald-500 flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Gemini Online
          </span>
        </div>
      </aside>

      {/* Área Principal de Conversa (Design Limpo e Focado) */}
      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        {/* Barra Superior Discreta */}
        <div className="h-11 px-4 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between bg-white/60 dark:bg-slate-900/60 backdrop-blur-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Abrir histórico de conversas"
            >
              <Menu className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate max-w-[200px] sm:max-w-md">
              {activeSession?.title || "Conversa"}
            </span>
          </div>

          <button
            onClick={handleNewChat}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Nova</span>
          </button>
        </div>

        {/* Feed de Mensagens Centralizado */}
        <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col justify-between">
          <div className="max-w-3xl w-full mx-auto space-y-6 flex-1 flex flex-col justify-center">
            {(!activeSession?.messages || activeSession.messages.length === 0) && (
              <div className="text-center py-12 my-auto animate-fade-in">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-orange-500 p-0.5 mx-auto mb-4 shadow-md">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <Bot className="w-6 h-6 text-orange-400" />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  Tire sua dúvida
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                  Pergunte qualquer coisa sobre treinamentos, normas industriais ou rotinas da plataforma.
                </p>

                {/* Sugestões Rápidas Minimalistas */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-8 max-w-xl mx-auto">
                  <button
                    onClick={() => handleSendMessage("O que é LOTO na NR-12 e como aplicar?")}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-blue-500 dark:hover:border-blue-500 text-left transition-all group cursor-pointer shadow-2xs"
                  >
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 group-hover:text-blue-500 block">
                      Lockout/Tagout (LOTO)
                    </span>
                    <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      Procedimentos da NR-12
                    </span>
                  </button>

                  <button
                    onClick={() => handleSendMessage("Quais os requisitos obrigatórios para entrada em Espaço Confinado pela NR-33?")}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-blue-500 dark:hover:border-blue-500 text-left transition-all group cursor-pointer shadow-2xs"
                  >
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 group-hover:text-blue-500 block">
                      Espaço Confinado
                    </span>
                    <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      Diretrizes da NR-33 e PET
                    </span>
                  </button>

                  <button
                    onClick={() => handleSendMessage("Como funciona a emissão e validação de certificados?")}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-blue-500 dark:hover:border-blue-500 text-left transition-all group cursor-pointer shadow-2xs"
                  >
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 group-hover:text-blue-500 block">
                      Certificados
                    </span>
                    <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                      Emissão e validação pública
                    </span>
                  </button>
                </div>
              </div>
            )}

            {activeSession?.messages.map((msg) => {
              const isUser = msg.sender === "user";

              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 sm:gap-4 ${isUser ? "justify-end" : "justify-start"}`}
                >
                  {!isUser && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-700 to-orange-500 p-0.5 shrink-0 shadow-xs mt-0.5">
                      <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-orange-400" />
                      </div>
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      isUser
                        ? "bg-blue-600 text-white rounded-br-xs"
                        : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-xs shadow-2xs"
                    }`}
                  >
                    <div className="whitespace-pre-wrap break-words">{msg.text}</div>
                  </div>
                </div>
              );
            })}

            {/* Loading ao responder */}
            {isLoading && (
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-orange-400 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-2.5 text-xs text-slate-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-1">Pensando...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Limpo e Flutuante (Estilo ChatGPT) */}
        <div className="p-3 sm:p-4 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent dark:from-slate-950 dark:via-slate-950">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="max-w-3xl mx-auto relative flex items-center shadow-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Envie uma mensagem para o Copiloto RSS3..."
              disabled={isLoading}
              className="flex-1 bg-transparent px-4 py-3.5 text-sm outline-hidden text-slate-900 dark:text-slate-100 placeholder-slate-400 disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="mr-2 p-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 text-white disabled:text-slate-400 transition-colors cursor-pointer disabled:cursor-not-allowed"
              title="Enviar mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <p className="max-w-3xl mx-auto text-center text-[10px] text-slate-400 mt-2">
            Copiloto RSS3 powered by Gemini • Verifique informações operacionais críticas nas normas técnicas e procedimentos formais.
          </p>
        </div>
      </div>
    </div>
  );
}
