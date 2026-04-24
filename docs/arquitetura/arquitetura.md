# Arquitetura — bio-cristian

Snapshot técnico do projeto em 2026-04-24.

## 1. Visão de produto

Aplicação estática para centralização de links da bio do Cristian, priorizando navegação rápida em mobile.

Objetivo principal:
- concentrar contatos e canais em um único endereço.

## 2. Stack

| Camada | Tecnologia |
|---|---|
| Build / Dev | Vite 5 + SWC |
| Linguagem | TypeScript 5 |
| UI | React 18 + React Router v6 |
| Estilo | Tailwind CSS 3 + shadcn/ui |
| Estado | TanStack Query 5 |
| Testes | Vitest + Testing Library |
| Lint | ESLint 9 + typescript-eslint |

## 3. Divisões do software

- `src/pages/Index.tsx`: orquestra Header, links, destaque opcional e Footer.
- `src/components/`: blocos reutilizáveis da interface.
- `src/config/`: dados de conteúdo configurável (perfil, links, highlight, footer).
- `src/components/ui/`: biblioteca base shadcn/ui.

## 4. Modelo de dados

Sem banco de dados e sem backend.

Os dados da interface vivem em objetos TypeScript:
- `src/config/profile.ts`
- `src/config/links.ts`
- `src/config/highlight.ts`
- `src/config/footer.ts`

## 5. Roteamento

Definido em `src/App.tsx`:
- `/` → `Index`
- `*` → `NotFound`

## 6. Decisões arquiteturais

- Projeto 100% estático (sem API).
- Conteúdo editável por arquivos de config para simplificar manutenção.
- Mobile-first com largura central limitada (`max-w-md`).
- Lazy-loading de `HighlightCard` e `Footer` para reduzir custo inicial.

## 7. Lacunas conhecidas

- `NotFound` ainda com copy genérica em inglês.
- URLs externas dependem de implantação final dos destinos.
