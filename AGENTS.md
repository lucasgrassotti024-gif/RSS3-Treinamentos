# AGENTS.MD — DIRETRIZES PERMANENTES DO PROJETO RSS3 TREINAMENTOS

## 1. PRINCÍPIOS FUNDAMENTAIS
1. **Nome Oficial:** O produto chama-se exclusivamente **RSS3 Treinamentos**. É terminantemente proibido utilizar "RSS3 Academy".
2. **Empresa e Contexto:** RSS3 Soluções Industriais LTDA. Operações industriais em clientes de alta criticidade (como CMPC) e frentes externas.
3. **Integridade de Fatos:** Jamais invente procedimentos internos, dados de colaboradores ou normas operacionais da RSS3 ou da CMPC. Conteúdos regulamentares devem possuir fontes oficiais e controle de vigência.
4. **Integridade de Arquivos:** Nunca reescreva módulos inteiros quando uma edição pontual for suficiente. Entenda a arquitetura existente antes de alterar qualquer código. Não remova ou substitua funcionalidades sem avaliar impactos.

## 2. ARQUITETURA E SEGURANÇA
1. **Zero Confiança no Navegador:**
   - O cliente JAMAIS deve receber gabarito de avaliações, respostas corretas ou critérios de pontuação.
   - Cálculo de notas, concessão de XP e emissão de certificados ocorrem EXCLUSIVAMENTE no servidor via rotas protegidas.
   - O tempo de vídeo e checkpoints constituem telemetria de engajamento, não prova isolada de atenção ou competência prática.
2. **Autorização em Dupla Camada:**
   - O Firebase Admin SDK contorna as regras do Firestore. Portanto, toda operação executada por ele no servidor DEVE validar explicitamente identidade, papel (`role`) e escopo operacional (`organizationId`, `departmentId`, `operationalBaseId`).
   - Um gestor ou líder só pode acessar colaboradores da sua própria frente operacional/equipe autorizada.
3. **Credenciais e Segredos:**
   - NUNCA armazene chaves privadas, segredos de assinatura (`CERT_SIGNING_SECRET`) ou credenciais no código-fonte ou no repositório Git. Não crie arquivos `.env` com dados privados fictícios expostos.

## 3. CERTIFICADOS E CONFORMIDADE OPERACIONAL
1. **Diferenciação Regulatória Obrigatória:**
   - Diferencie categoricamente "Certificado de Conclusão de Conteúdo Teórico" de "Registro de Habilitação Prática / Qualificação Formal".
   - A conclusão de um curso EAD nunca deve conferir habilitação formal para atividades regulamentadas (NR-35, NR-33, NR-10, etc.) sem o treinamento prático presencial validado e assinado por instrutor credenciado e ASO vigente.
2. **Imutabilidade e Assinatura em Duas Camadas:**
   - Todo certificado possui `dataHash` (SHA-256 do payload canônico RFC 8785) autenticado no servidor e `pdfHash` (SHA-256 dos bytes do PDF final), eliminando dependências circulares.
   - O código público de validação possui pelo menos 128 bits de entropia gerados por CSPRNG no formato canônico legível (`RSS3-XXXX-XXXX-XXXX-XXXX-XXXX`).
   - O validador público nunca deve expor dados pessoais protegidos (CPF, RG, e-mails, notas detalhadas).

## 4. DADOS DEMONSTRATIVOS E AMBIENTES
1. **Dados Estritamente Sintéticos:**
   - No modo de demonstração, use exclusivamente personas e cursos fictícios identificados.
   - O ambiente demonstrativo deve exibir de forma indelével o aviso: **“AMBIENTE DE DEMONSTRAÇÃO — DADOS ESTRITAMENTE FICTÍCIOS”**.
   - Todo certificado demonstrativo deve exibir a marca d'água permanente: "DOCUMENTO DEMONSTRATIVO — SEM VALIDADE LEGAL".
   - É proibido usar dados de colaboradores reais ou documentos confidenciais da CMPC sem autorização formal.

## 5. PRIVACIDADE E DADOS MÉDICOS (LGPD)
1. **Minimização de Dados de Saúde:**
   - É terminantemente proibido armazenar CIDs, diagnósticos, laudos clínicos ou digitalizações de ASO no LMS.
   - A aptidão ocupacional é tratada estritamente como indicador administrativo binário (`hasValidOccupationalClearance: boolean`, data de validade), com acesso restrito e validação com DPO e SST.

## 6. QUALIDADE DE CÓDIGO, I18N E VERIFICAÇÃO
1. **Design System:** Paleta institucional (Branco, Azul e Laranja), temas Claro e Escuro, tipografia semântica, responsividade e conformidade de contraste WCAG 2.1 AA.
2. **Internacionalização:** Toda string de interface, mensagens de validação, erros e certificados deve utilizar dicionários centralizados (`pt-BR`, `en`, `es`), com `pt-BR` como padrão.
3. **Verificação Honesta:** Não declare testes, builds ou validações como executados se não tiverem sido testados com sucesso no terminal. Solicite autorização antes de qualquer ação externa ou destrutiva.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
