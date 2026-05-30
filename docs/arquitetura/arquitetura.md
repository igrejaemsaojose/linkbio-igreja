# Arquitetura — bio-cristian

Snapshot tecnico do projeto em 2026-05-30.

## 1. Visao de produto

Aplicacao estatica para centralizacao de links da bio do Cristian, priorizando navegacao rapida em mobile.

Objetivo principal:
- concentrar contatos e canais em um unico endereco.

## 2. Stack

| Camada       | Tecnologia                             |
|---|---|
| Linguagem    | HTML5 semantico                        |
| Estilo       | CSS3 puro com custom properties        |
| Scripts      | JavaScript vanilla (ES6+)              |
| Dev server   | `npx serve . --listen 3000`            |
| Build        | Sem build step                         |
| Deploy       | Vercel sem build (`outputDirectory: .`)|

## 3. Estrutura de arquivos

```
bio-cristian/
├── index.html            # pagina unica da aplicacao
├── css/
│   ├── reset.css         # reset de estilos
│   ├── tokens.css        # CSS custom properties (design tokens)
│   └── styles.css        # estilos da aplicacao + animacoes
├── js/
│   ├── i18n.js           # sistema de traducao leve (PT/EN)
│   └── main.js           # ponto de entrada; inicializa i18n e logica de pagina
├── translations/
│   ├── pt.js             # dicionario em portugues
│   └── en.js             # dicionario em ingles
├── assets/
│   └── images/
│       └── avatar.png    # foto de perfil
├── public/               # favicons e webmanifest (servidos estaticamente)
├── vercel.json           # configuracao de deploy sem build
├── package.json          # somente script `dev`
├── CLAUDE.md             # contexto operacional para agente
├── AGENTS.md             # equivalente ao CLAUDE.md
└── docs/                 # arquitetura, instrucoes, historico e design-system
```

## 4. i18n

Sistema caseiro sem dependencias externas.

- `translations/pt.js` e `translations/en.js` populam `window.__i18n.pt` e `window.__i18n.en`.
- `js/i18n.js` detecta locale (localStorage → navigator.language → 'pt'), aplica textos em elementos `data-i18n`, e dispara evento `localechange` a cada troca.
- Persistencia: `localStorage` com chave `bio-cristian:locale`.
- `js/main.js` ouve `localechange` e atualiza o href do botao do WhatsApp conforme o idioma ativo.

## 5. Componentes de interface

Todos em HTML semantico puro, sem framework:

- **Toggle de idioma** — pill com dois botoes PT | EN; segmento ativo em navy.
- **Card de perfil** — secao com avatar, nome, tagline, bio e tags.
- **Lista de links** — cinco botoes com icone SVG inline, label i18n e seta de acao.
- **Footer** — paragrafo com copy i18n.

## 6. Animacoes

Definidas em `css/styles.css` com `@keyframes`:

| Animacao     | Duracao | Uso                          |
|---|---|---|
| fade-in-up   | 0.6s    | entrada escalonada dos elementos |
| float        | 3s loop | avatar                       |
| glow-pulse   | 2s loop | anel do avatar               |

## 7. Deploy

`vercel.json` com `framework: null` e `outputDirectory: "."`.
Sem build step — a Vercel serve os arquivos estaticos diretamente.

## 8. Decisoes arquiteturais

- Migracao completa de React + Vite + TypeScript + Tailwind + shadcn para HTML5 + CSS3 + JS vanilla (mesma stack do projeto `lp-magnus` da Magnus Midias).
- Zero dependencias em runtime.
- Mobile-first com `max-width: 28rem` e padding horizontal de 20px.
- Conteudo traduzivel via `data-i18n` sem transpilacao.
- Icones SVG inline para evitar dependencias externas.
