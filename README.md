# bio-cristian

Link da bio pessoal do Cristian Dornelles, focado em acesso rápido para canais principais (serviços, WhatsApp, LinkedIn, Instagram, GitHub e biblioteca de conteúdo).

## Stack

| Camada | Tecnologia |
|---|---|
| Build / Dev server | Vite 5 + plugin SWC (`@vitejs/plugin-react-swc`) |
| Linguagem | TypeScript 5 |
| UI | React 18 + React Router v6 |
| Design system | shadcn/ui (Radix) + Tailwind CSS 3 + `tailwindcss-animate` |
| Estado/infra | TanStack Query 5 |
| Ícones | lucide-react |
| Testes | Vitest 3 + Testing Library + jsdom |
| Package manager | npm |

## Como rodar

Requisito: Node.js 18+ e npm.

```sh
npm install
npm run dev
```

Servidor local padrão: `http://localhost:8080`.

## Scripts

| Script | O que faz |
|---|---|
| `npm run dev` | Dev server com HMR |
| `npm run build` | Build de produção |
| `npm run build:dev` | Build em modo development |
| `npm run preview` | Preview local do build |
| `npm run lint` | ESLint no projeto |
| `npm run test` | Vitest (single run) |
| `npm run test:watch` | Vitest em watch mode |

## Estrutura relevante

```text
bio-cristian/
├── public/                  # favicon e assets estáticos
├── src/
│   ├── pages/Index.tsx      # composição da página principal
│   ├── components/          # Header, LinkButton, HighlightCard, Footer e UI base
│   ├── config/              # perfil, links, destaque e conteúdo de rodapé
│   ├── assets/avatar.png    # avatar principal
│   └── test/                # setup e testes
├── docs/                    # arquitetura, instruções, histórico e design-system
├── CLAUDE.md                # contexto operacional para agente
├── AGENTS.md                # equivalente ao CLAUDE.md
└── index.html               # metas e favicons
```

## Documentação

A documentação viva do projeto está em [`docs/`](./docs/):

- [`docs/arquitetura/`](./docs/arquitetura/) — snapshot técnico e decisões de arquitetura.
- [`docs/instrucoes/`](./docs/instrucoes/) — regras de trabalho e plano por fases.
- [`docs/historico/`](./docs/historico/) — registro de alterações relevantes.
- [`docs/design-system/`](./docs/design-system/) — identidade visual e assets.

## Regra de ouro

Antes de alterar: ler `docs/historico/` e `docs/arquitetura/arquitetura.md`.
Depois de alterar: registrar em `docs/historico/` e atualizar docs impactadas.
