# CLAUDE.md — bio-cristian

Contexto operacional do projeto para agentes de código.

## 1. Visão geral

`bio-cristian` é uma página de link da bio (mobile-first) para centralizar pontos de contato e entrada para outros ativos digitais do Cristian.

Fluxo principal:
- Avatar + nome + tagline.
- Lista de CTAs externos em botões (`src/config/links.ts`).
- Card de destaque opcional (`src/config/highlight.ts`).

## 2. Stack

- Vite 5 + React 18 + TypeScript 5
- React Router v6
- Tailwind CSS + shadcn/ui (Radix)
- TanStack Query
- Vitest + Testing Library
- npm

## 3. Scripts

- `npm run dev`
- `npm run build`
- `npm run build:dev`
- `npm run preview`
- `npm run lint`
- `npm run test`
- `npm run test:watch`

## 4. Estrutura relevante

- `src/pages/Index.tsx` — composição da página.
- `src/components/` — componentes de layout/CTA.
- `src/config/` — dados editáveis de perfil e links.
- `src/index.css` — tokens visuais e animações.
- `docs/` — arquitetura, instruções, histórico e design-system.

## 5. Ponteiros obrigatórios

- Arquitetura: `docs/arquitetura/arquitetura.md`
- Regras de trabalho: `docs/instrucoes/instrucoes.md`
- Plano de ação: `docs/instrucoes/plano-de-acao-bio.md`
- Histórico: `docs/historico/`
- Design system: `docs/design-system/design-system.md`

## 6. Regra inegociável de histórico

Toda alteração relevante deve gerar um novo arquivo em `docs/historico/` com formato:

`NN-descricao-curta-AAAA-MM-DD.md`

### Antes de alterar
1. Ler histórico completo em ordem numérica.
2. Ler `docs/arquitetura/arquitetura.md`.
3. Se tiver impacto visual, ler `docs/design-system/design-system.md`.

### Depois de alterar
1. Criar registro em `docs/historico/`.
2. Atualizar arquitetura se necessário.
3. Atualizar instruções se o fluxo mudar.
4. Atualizar design-system se tocar UI/tokens/assets.

## 7. Convenções

- Nomes de arquivos e pastas: ASCII, kebab-case, sem acentos.
- Conteúdo interno dos arquivos: pt-BR.
