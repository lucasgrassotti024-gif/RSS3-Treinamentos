import React from "react";

interface IllustrationProps {
  className?: string;
}

/**
 * Diagrama do Ciclo Contínuo dos Cinco Sensos do 5S
 */
export function DiagramCycle5S({ className = "w-full max-w-lg mx-auto" }: IllustrationProps) {
  return (
    <div className={`p-4 bg-slate-900 dark:bg-slate-900 rounded-2xl border border-slate-800 shadow-md ${className}`}>
      <svg viewBox="0 0 500 320" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="gradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c2410c" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>

        {/* Círculo Central de Eficiência e Segurança */}
        <circle cx="250" cy="160" r="48" fill="#0f172a" stroke="#3b82f6" strokeWidth="2.5" />
        <text x="250" y="155" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">
          EFICIÊNCIA &
        </text>
        <text x="250" y="172" fill="#fb923c" fontSize="13" fontWeight="bold" textAnchor="middle">
          SEGURANÇA
        </text>

        {/* 1. SEIRI (Topo) */}
        <g transform="translate(185, 20)">
          <rect width="130" height="52" rx="12" fill="url(#gradBlue)" stroke="#60a5fa" strokeWidth="1.5" />
          <text x="65" y="24" fill="#ffffff" fontSize="12" fontWeight="800" textAnchor="middle">
            1. SEIRI
          </text>
          <text x="65" y="40" fill="#bfdbfe" fontSize="10" textAnchor="middle">
            Utilização e Descarte
          </text>
        </g>

        {/* 2. SEITON (Direita Superior) */}
        <g transform="translate(340, 95)">
          <rect width="130" height="52" rx="12" fill="url(#gradBlue)" stroke="#60a5fa" strokeWidth="1.5" />
          <text x="65" y="24" fill="#ffffff" fontSize="12" fontWeight="800" textAnchor="middle">
            2. SEITON
          </text>
          <text x="65" y="40" fill="#bfdbfe" fontSize="10" textAnchor="middle">
            Ordenação e Acesso
          </text>
        </g>

        {/* 3. SEISO (Direita Inferior) */}
        <g transform="translate(310, 220)">
          <rect width="130" height="52" rx="12" fill="url(#gradBlue)" stroke="#60a5fa" strokeWidth="1.5" />
          <text x="65" y="24" fill="#ffffff" fontSize="12" fontWeight="800" textAnchor="middle">
            3. SEISO
          </text>
          <text x="65" y="40" fill="#bfdbfe" fontSize="10" textAnchor="middle">
            Limpar p/ Inspecionar
          </text>
        </g>

        {/* 4. SEIKETSU (Esquerda Inferior) */}
        <g transform="translate(60, 220)">
          <rect width="130" height="52" rx="12" fill="url(#gradBlue)" stroke="#60a5fa" strokeWidth="1.5" />
          <text x="65" y="24" fill="#ffffff" fontSize="12" fontWeight="800" textAnchor="middle">
            4. SEIKETSU
          </text>
          <text x="65" y="40" fill="#bfdbfe" fontSize="10" textAnchor="middle">
            Padronização Visual
          </text>
        </g>

        {/* 5. SHITSUKE (Esquerda Superior) */}
        <g transform="translate(30, 95)">
          <rect width="130" height="52" rx="12" fill="url(#gradOrange)" stroke="#fdba74" strokeWidth="1.5" />
          <text x="65" y="24" fill="#ffffff" fontSize="12" fontWeight="800" textAnchor="middle">
            5. SHITSUKE
          </text>
          <text x="65" y="40" fill="#ffedd5" fontSize="10" textAnchor="middle">
            Autodisciplina & Hábito
          </text>
        </g>

        {/* Setas conectando os 5 sensos */}
        <path d="M 315 46 Q 370 60 380 95" fill="none" stroke="#f97316" strokeWidth="2.5" strokeDasharray="4 2" markerEnd="url(#arrow)" />
        <path d="M 405 150 Q 405 190 380 220" fill="none" stroke="#f97316" strokeWidth="2.5" strokeDasharray="4 2" />
        <path d="M 310 246 Q 250 280 190 246" fill="none" stroke="#f97316" strokeWidth="2.5" strokeDasharray="4 2" />
        <path d="M 125 220 Q 95 190 95 150" fill="none" stroke="#f97316" strokeWidth="2.5" strokeDasharray="4 2" />
        <path d="M 125 95 Q 140 60 185 46" fill="none" stroke="#f97316" strokeWidth="2.5" strokeDasharray="4 2" />
      </svg>
    </div>
  );
}

/**
 * Diagrama do Painel Sombreado de Ferramentas (Shadow Board)
 */
export function DiagramShadowBoard({ className = "w-full max-w-lg mx-auto" }: IllustrationProps) {
  return (
    <div className={`p-4 bg-slate-900 rounded-2xl border border-slate-800 shadow-md ${className}`}>
      <svg viewBox="0 0 500 240" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        {/* Placa perfurada de fundo */}
        <rect width="500" height="240" rx="12" fill="#1e293b" stroke="#334155" strokeWidth="2" />
        <text x="250" y="28" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">
          PAINEL DE FERRAMENTAS SOMBREADO — BANCADA MECÂNICA N2
        </text>

        {/* Silhueta 1: Chave Estrela 24mm (Presente) */}
        <g transform="translate(40, 55)">
          <rect width="70" height="150" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1" />
          <path d="M 35 25 L 35 125 M 25 35 L 45 35 M 25 115 L 45 115" stroke="#38bdf8" strokeWidth="8" strokeLinecap="round" />
          <text x="35" y="142" fill="#94a3b8" fontSize="10" textAnchor="middle">24mm [OK]</text>
        </g>

        {/* Silhueta 2: Torquímetro de Estalo (Presente) */}
        <g transform="translate(130, 55)">
          <rect width="80" height="150" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1" />
          <path d="M 40 25 L 40 125 M 30 25 L 50 25" stroke="#38bdf8" strokeWidth="10" strokeLinecap="round" />
          <text x="40" y="142" fill="#94a3b8" fontSize="10" textAnchor="middle">Torquímetro</text>
        </g>

        {/* Silhueta 3: Marreta de Bronze (EM FALTA - Alerta Visual Imediato) */}
        <g transform="translate(230, 55)">
          <rect width="90" height="150" rx="8" fill="#450a0a" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
          {/* Silhueta vazia pintada em amarelo/vermelho */}
          <path d="M 45 45 L 45 125 M 25 45 L 65 45" stroke="#f87171" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
          <text x="45" y="90" fill="#fca5a5" fontSize="11" fontWeight="bold" textAnchor="middle">EM USO</text>
          <text x="45" y="142" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">Marreta Bronze</text>
        </g>

        {/* Silhueta 4: Alicate de Pressão (Presente) */}
        <g transform="translate(340, 55)">
          <rect width="120" height="150" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1" />
          <path d="M 60 30 L 45 120 M 60 30 L 75 120" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
          <text x="60" y="142" fill="#94a3b8" fontSize="10" textAnchor="middle">Alicate Pressão</text>
        </g>
      </svg>
    </div>
  );
}

/**
 * Diagrama de Sinalização e Demarcação de Solo Industrial
 */
export function DiagramFloorMarking({ className = "w-full max-w-lg mx-auto" }: IllustrationProps) {
  return (
    <div className={`p-4 bg-slate-900 rounded-2xl border border-slate-800 shadow-md ${className}`}>
      <svg viewBox="0 0 500 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        {/* Chão de concreto industrial */}
        <rect width="500" height="220" rx="12" fill="#1e293b" />
        <text x="250" y="24" fill="#f8fafc" fontSize="12" fontWeight="bold" textAnchor="middle">
          PADRÕES VISUAIS DE DEMARCAÇÃO DE SOLO (CANTEIROS & OFICINAS)
        </text>

        {/* 1. Faixa Amarela - Corredor de Pedestres */}
        <g transform="translate(30, 45)">
          <rect width="130" height="90" fill="#0f172a" stroke="#eab308" strokeWidth="4" />
          <path d="M 20 45 L 110 45" stroke="#eab308" strokeWidth="4" strokeDasharray="8 6" />
          <text x="65" y="115" fill="#fde047" fontSize="10" fontWeight="bold" textAnchor="middle">
            FAIXA AMARELA
          </text>
          <text x="65" y="130" fill="#94a3b8" fontSize="9" textAnchor="middle">
            Passagem de Pessoas
          </text>
        </g>

        {/* 2. Área Vermelha - Extintores (1m x 1m desobstruído) */}
        <g transform="translate(185, 45)">
          <rect width="130" height="90" fill="#450a0a" stroke="#ef4444" strokeWidth="4" />
          <circle cx="65" cy="45" r="14" fill="#ef4444" />
          <text x="65" y="49" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
            EXT
          </text>
          <text x="65" y="115" fill="#fca5a5" fontSize="10" fontWeight="bold" textAnchor="middle">
            ÁREA VERMELHA
          </text>
          <text x="65" y="130" fill="#94a3b8" fontSize="9" textAnchor="middle">
            Extintor (100% Livre)
          </text>
        </g>

        {/* 3. Zebrado Amarelo/Preto - Zona de Risco Mecânico */}
        <g transform="translate(340, 45)">
          <rect width="130" height="90" fill="#0f172a" stroke="#eab308" strokeWidth="2" />
          <path d="M 10 90 L 50 10 M 40 90 L 80 10 M 70 90 L 110 10 M 100 90 L 140 10" stroke="#eab308" strokeWidth="6" />
          <text x="65" y="115" fill="#fde047" fontSize="10" fontWeight="bold" textAnchor="middle">
            ZEBRADO PRETO/AM
          </text>
          <text x="65" y="130" fill="#94a3b8" fontSize="9" textAnchor="middle">
            Perigo e Prensa
          </text>
        </g>
      </svg>
    </div>
  );
}

/**
 * Diagrama do Padrão Visual "Antes e Depois" com Verificação
 */
export function DiagramBeforeAfter({ className = "w-full max-w-lg mx-auto" }: IllustrationProps) {
  return (
    <div className={`p-4 bg-slate-900 rounded-2xl border border-slate-800 shadow-md ${className}`}>
      <svg viewBox="0 0 500 230" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="230" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="2" />
        <text x="250" y="24" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">
          FOLHA DE PADRÃO VISUAL DE ENCERRAMENTO (BANCADA DE TRABALHO)
        </text>

        {/* Lado Esquerdo: NÃO CONFORME */}
        <g transform="translate(30, 45)">
          <rect width="205" height="135" rx="8" fill="#450a0a" stroke="#ef4444" strokeWidth="2" />
          <circle cx="25" cy="22" r="10" fill="#ef4444" />
          <text x="25" y="26" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">✗</text>
          <text x="45" y="25" fill="#fca5a5" fontSize="11" fontWeight="bold">NÃO CONFORME</text>
          
          <text x="18" y="55" fill="#fecaca" fontSize="10">• Chaves sobre panos sujos de óleo</text>
          <text x="18" y="75" fill="#fecaca" fontSize="10">• Sobras de peças e sucata misturadas</text>
          <text x="18" y="95" fill="#fecaca" fontSize="10">• Almotolia sem identificação técnica</text>
          <text x="18" y="115" fill="#fecaca" fontSize="10">• Cabos soltos pelo chão da oficina</text>
        </g>

        {/* Lado Direito: PADRÃO RSS3 */}
        <g transform="translate(265, 45)">
          <rect width="205" height="135" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
          <circle cx="25" cy="22" r="10" fill="#10b981" />
          <text x="25" y="26" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">✓</text>
          <text x="45" y="25" fill="#6ee7b7" fontSize="11" fontWeight="bold">PADRÃO ESPERADO</text>
          
          <text x="18" y="55" fill="#a7f3d0" fontSize="10">• 100% das ferramentas no painel</text>
          <text x="18" y="75" fill="#a7f3d0" fontSize="10">• Superfície limpa e desengraxada</text>
          <text x="18" y="95" fill="#a7f3d0" fontSize="10">• Resíduos no tambor Classe I</text>
          <text x="18" y="115" fill="#a7f3d0" fontSize="10">• Máquina desenergizada e travada</text>
        </g>

        <text x="250" y="208" fill="#94a3b8" fontSize="10" textAnchor="middle">
          Referência de Entrega Obrigatória entre Turnos de Manutenção Industrial
        </text>
      </svg>
    </div>
  );
}

/**
 * Diagrama de Matriz de Frequência de Uso (Seiri)
 */
export function DiagramFrequencyMatrix({ className = "w-full max-w-lg mx-auto" }: IllustrationProps) {
  return (
    <div className={`p-4 bg-slate-900 rounded-2xl border border-slate-800 shadow-md ${className}`}>
      <svg viewBox="0 0 500 220" className="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="220" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="2" />
        <text x="250" y="26" fill="#f8fafc" fontSize="13" fontWeight="bold" textAnchor="middle">
          MATRIZ DE FREQUÊNCIA DE USO — SEPARAÇÃO (SEIRI)
        </text>

        {/* Nível 1: Alta Frequência */}
        <g transform="translate(30, 48)">
          <rect width="440" height="42" rx="8" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="20" y="26" fill="#ffffff" fontSize="11" fontWeight="bold">USO DIÁRIO / HORA A HORA</text>
          <text x="260" y="26" fill="#bfdbfe" fontSize="10">→ No cinto ou ao alcance da mão na bancada</text>
        </g>

        {/* Nível 2: Média Frequência */}
        <g transform="translate(30, 98)">
          <rect width="440" height="42" rx="8" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
          <text x="20" y="26" fill="#f8fafc" fontSize="11" fontWeight="bold">USO SEMANAL / MENSAL</text>
          <text x="260" y="26" fill="#94a3b8" fontSize="10">→ Em armários identificados da própria oficina</text>
        </g>

        {/* Nível 3: Rara / Descarte */}
        <g transform="translate(30, 148)">
          <rect width="440" height="42" rx="8" fill="#450a0a" stroke="#ef4444" strokeWidth="1.5" />
          <text x="20" y="26" fill="#fca5a5" fontSize="11" fontWeight="bold">SEM USO HÁ MAIS DE 6 MESES</text>
          <text x="260" y="26" fill="#fecaca" fontSize="10">→ Área de Quarentena / Devolução ou Baixa</text>
        </g>

        <text x="250" y="206" fill="#64748b" fontSize="9" textAnchor="middle">
          Critério Técnico de Triagem: Não acumular itens sob a premissa de &quot;um dia talvez precise&quot;
        </text>
      </svg>
    </div>
  );
}

export const VISUAL_ASSETS_MAP: Record<string, React.FC<IllustrationProps>> = {
  "diag-cycle-5s": DiagramCycle5S,
  "diag-frequency-matrix": DiagramFrequencyMatrix,
  "diag-shadow-board": DiagramShadowBoard,
  "diag-floor-marking": DiagramFloorMarking,
  "diag-before-after": DiagramBeforeAfter,
};
