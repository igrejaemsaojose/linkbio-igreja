# AGENTS.md — bio-cristian (Codex)

Guia operacional para o Codex atuar neste projeto com velocidade, segurança e rastreabilidade.

## 1. Objetivo do projeto

`bio-cristian` e uma pagina de link da bio (mobile-first) para centralizar contatos e direcionar para os demais ativos digitais do Cristian.

Fluxo principal:
- Avatar + nome + tagline.
- Lista de CTAs externos em botoes (`src/config/links.ts`).
- Card de destaque opcional (`src/config/highlight.ts`).

## 2. Contexto tecnico

- Vite 5 + React 18 + TypeScript 5
- React Router v6
- Tailwind CSS + shadcn/ui (Radix)
- TanStack Query
- Vitest + Testing Library
- npm

Scripts:
- `npm run dev`
- `npm run build`
- `npm run build:dev`
- `npm run preview`
- `npm run lint`
- `npm run test`
- `npm run test:watch`

## 3. Arquivos-fonte prioritarios

- `src/pages/Index.tsx` — composicao da pagina.
- `src/components/` — componentes de layout e CTA.
- `src/config/` — conteudo editavel (perfil, links, destaque).
- `src/index.css` — tokens visuais e animacoes.

## 4. Protocolo do Codex (obrigatorio)

Antes de editar:
1. Ler `docs/historico/` em ordem numerica.
2. Ler `docs/arquitetura/arquitetura.md`.
3. Se a mudanca for visual, ler `docs/design-system/design-system.md`.
4. Ler `README.md` e este `AGENTS.md`.

Depois de editar:
1. Rodar validacao proporcional ao impacto:
- Mudanca simples de texto/conteudo: validar build ou lint.
- Mudanca estrutural/codigo: rodar `npm run lint` e `npm run test` (quando aplicavel).
2. Criar novo registro em `docs/historico/` no formato `NN-descricao-curta-AAAA-MM-DD.md`.
3. Atualizar docs afetados:
- Arquitetura: `docs/arquitetura/arquitetura.md`
- Instrucoes: `docs/instrucoes/instrucoes.md`
- Design system: `docs/design-system/design-system.md`

## 5. Regras de colaboracao

- Nao reverter alteracoes do usuario sem pedido explicito.
- Preferir mudancas pequenas e objetivas, com baixo risco.
- Nomes de arquivo/pasta em ASCII, kebab-case, sem acento.
- Conteudo de documentacao em pt-BR.
