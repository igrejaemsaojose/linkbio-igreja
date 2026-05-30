# bio-cristian

Link da bio pessoal do Cristian Dornelles, focado em acesso rapido para canais principais (servicos, WhatsApp, LinkedIn, Instagram e GitHub).

## Stack

| Camada       | Tecnologia                             |
|---|---|
| Linguagem    | HTML5 semantico                        |
| Estilo       | CSS3 puro com custom properties        |
| Scripts      | JavaScript vanilla (ES6+)              |
| Dev server   | `npx serve . --listen 3000`            |
| Build        | Sem build step                         |
| Deploy       | Vercel sem build                       |

## Como rodar

Requisito: Node.js 18+.

```sh
npm run dev
```

Servidor local: `http://localhost:3000`.

## Scripts

| Script      | O que faz                     |
|---|---|
| `npm run dev` | Dev server na porta 3000    |

## Estrutura

```
bio-cristian/
├── index.html            # pagina unica
├── css/
│   ├── reset.css         # reset de estilos
│   ├── tokens.css        # CSS custom properties (design tokens)
│   └── styles.css        # estilos + animacoes
├── js/
│   ├── i18n.js           # sistema de traducao leve (PT/EN)
│   └── main.js           # inicializacao e logica de pagina
├── translations/
│   ├── pt.js             # dicionario em portugues
│   └── en.js             # dicionario em ingles
├── assets/
│   └── images/
│       └── avatar.png    # foto de perfil
├── public/               # favicons e webmanifest
├── vercel.json           # deploy sem build
├── package.json          # script dev
├── CLAUDE.md             # contexto para agentes de IA
├── AGENTS.md             # equivalente ao CLAUDE.md
└── docs/                 # arquitetura, historico e design-system
```

## Documentacao

- [`docs/arquitetura/`](./docs/arquitetura/) — snapshot tecnico e decisoes de arquitetura.
- [`docs/historico/`](./docs/historico/) — registro de alteracoes relevantes.
- [`docs/design-system/`](./docs/design-system/) — identidade visual e assets.

## Regra de ouro

Antes de alterar: ler `docs/historico/` e `docs/arquitetura/arquitetura.md`.
Depois de alterar: registrar em `docs/historico/` e atualizar docs impactadas.
