"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Bot,
  Send,
  Sparkles,
  ShieldAlert,
  Award,
  Layers,
  Lock,
  Compass,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import {
  AIMessage,
  AI_QUICK_PROMPTS,
  getLocalAIResponse,
} from "@/lib/ai-assistant-data";

const INITIAL_MESSAGES: AIMessage[] = [
  {
    id: "initial-welcome",
    sender: "assistant",
    text: `Olá! Sou o **Copiloto RSS3**, sua Inteligência Artificial integrada de suporte e capacitação técnica.

Posso ajudá-lo a:
1. **Entender a Plataforma:** Como navegar, salvar cursos offline, acumular horas e emitir certificados.
2. **Consultar Normas Regulamentadoras:** Esclarecer procedimentos de segurança em altura (NR-35), espaços confinados (NR-33), máquinas e LOTO (NR-12).
3. **Metodologias Industriais:** Princípios do 5S, manutenção preventiva, PCM e análise de riscos.

Como posso ajudar você hoje na sua rotina de treinamento?`,
    timestamp: "Agora",
    suggestedActions: [
      { label: "Como emitir Certificados?", query: "Como funcionam os certificados na plataforma?" },
      { label: "Explorar Cursos", href: "/catalogo" },
      { label: "O que é LOTO na NR-12?", query: "O que é Lockout/Tagout (LOTO) e por que é fundamental na NR-12?" },
    ],
    topic: "general",
  },
];

export default function AssistantPage() {
  const [messages, setMessages] = useState<AIMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const timeLabel = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsgId = `user-${Math.random().toString(36).slice(2, 9)}`;

    const userMsg: AIMessage = {
      id: userMsgId,
      sender: "user",
      text,
      timestamp: timeLabel,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsLoading(true);

    try {
      // Tenta enviar para a rota da API
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (res.ok) {
        const data = await res.json();
        const aiMsg: AIMessage = {
          id: `ai-${Math.random().toString(36).slice(2, 9)}`,
          sender: "assistant",
          text: data.reply,
          timestamp: timeLabel,
          suggestedActions: data.suggestedActions,
          topic: data.topic,
        };
        setMessages((prev) => [...prev, aiMsg]);
      } else {
        throw new Error("Falha na API");
      }
    } catch {
      // Fallback gracioso com a base local
      const localResult = getLocalAIResponse(text);
      const aiMsg: AIMessage = {
        id: `ai-${Math.random().toString(36).slice(2, 9)}`,
        sender: "assistant",
        text: localResult.text,
        timestamp: timeLabel,
        suggestedActions: localResult.suggestedActions,
        topic: localResult.topic,
      };
      setMessages((prev) => [...prev, aiMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: "initial-welcome-reset",
        sender: "assistant",
        text: "Histórico redefinido. Como posso apoiar sua capacitação técnica hoje?",
        timestamp: "Agora",
      },
    ]);
  };

  // Helper de ícone para atalhos
  const getPromptIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="w-4 h-4 text-amber-500" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-4 h-4 text-rose-500" />;
      case "Compass":
        return <Compass className="w-4 h-4 text-blue-500" />;
      case "Layers":
        return <Layers className="w-4 h-4 text-emerald-500" />;
      case "Lock":
        return <Lock className="w-4 h-4 text-orange-500" />;
      default:
        return <BookOpen className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Header Visual da IA */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white border-b border-blue-800/40 px-4 sm:px-6 py-6 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-600 to-orange-500 p-0.5 shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Bot className="w-7 h-7 text-orange-400" />
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950 ring-2 ring-emerald-500/20 animate-pulse" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-1">
                <Sparkles className="w-3 h-3 text-orange-400" />
                <span>Copiloto RSS3 • Assistente Inteligente</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Central de Apoio & Tutoria IA
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleClearHistory}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpar Conversa</span>
            </button>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-md transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Ver Cursos</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Área Central de Mensagens e Sugestões */}
      <div className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 flex flex-col gap-6">
        {/* Bloco de Prompts Rápidos Sugeridos */}
        {messages.length <= 2 && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 block">
              Dúvidas Frequentes e Tópicos Técnicos
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {AI_QUICK_PROMPTS.map((qp) => (
                <button
                  key={qp.id}
                  onClick={() => handleSendMessage(qp.prompt)}
                  className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 text-left transition-all group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs group-hover:scale-105 transition-transform shrink-0">
                    {getPromptIcon(qp.iconName)}
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
                      {qp.title}
                    </h2>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                      {qp.prompt}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Mensagens do Chat */}
        <div className="flex-1 space-y-4">
          {messages.map((msg) => {
            const isUser = msg.sender === "user";

            return (
              <div
                key={msg.id}
                className={`flex gap-3 sm:gap-4 ${
                  isUser ? "justify-end" : "justify-start"
                }`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-blue-900 dark:bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs mt-1">
                    <Bot className="w-4 h-4 text-orange-400" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 shadow-xs text-sm leading-relaxed ${
                    isUser
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none"
                  }`}
                >
                  {/* Cabeçalho da Mensagem */}
                  <div className="flex items-center justify-between gap-4 mb-1.5 pb-1 border-b border-black/5 dark:border-white/5 text-[11px] opacity-75">
                    <span className="font-bold">
                      {isUser ? "Você" : "Copiloto RSS3"}
                    </span>
                    <span>{msg.timestamp}</span>
                  </div>

                  {/* Conteúdo formatado com Markdown básico */}
                  <div className="whitespace-pre-wrap break-words">
                    {msg.text}
                  </div>

                  {/* Ações sugeridas */}
                  {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                      {msg.suggestedActions.map((act, idx) => {
                        if (act.href) {
                          return (
                            <Link
                              key={idx}
                              href={act.href}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-semibold hover:bg-blue-100 transition-colors"
                            >
                              <span>{act.label}</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          );
                        }
                        return (
                          <button
                            key={idx}
                            onClick={() => handleSendMessage(act.query)}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
                          >
                            <Sparkles className="w-3 h-3 text-orange-500" />
                            <span>{act.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Indicador de Carregamento */}
          {isLoading && (
            <div className="flex gap-3 sm:gap-4 items-center">
              <div className="w-8 h-8 rounded-xl bg-blue-900 dark:bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Bot className="w-4 h-4 text-orange-400" />
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-2 text-xs text-slate-500">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 font-medium">Copiloto RSS3 está formulando a resposta...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Barra de Input Fixa Inferior */}
      <div className="sticky bottom-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 shadow-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="max-w-5xl mx-auto flex items-center gap-2 sm:gap-3"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Pergunte sobre cursos, NR-35, NR-12, certificados ou rotinas da plataforma..."
            disabled={isLoading}
            className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100 placeholder-slate-400 disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="px-5 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <span>Enviar</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="max-w-5xl mx-auto mt-2 flex items-center justify-between text-[11px] text-slate-400 px-1">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            Conhecimento industrial alinhado com as diretrizes RSS3 e NRs vigentes.
          </span>
          <span className="hidden sm:inline">
            Treinamentos teóricos não substituem práticas presenciais em campo.
          </span>
        </div>
      </div>
    </div>
  );
}
