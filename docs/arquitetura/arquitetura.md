# Arquitetura — bio-igreja

Snapshot tecnico do projeto em 2026-06-17.

## 1. Visao de produto

Aplicacao estatica para centralizacao de links da bio da Igreja em Sao Jose, priorizando navegacao rapida em mobile.

Objetivo principal:
- Concentrar canais de contato e acesso em um unico endereco.

## 2. Stack

| Camada       | Tecnologia                              |
|---|---|
| Linguagem    | HTML5 semantico                         |
| Estilo       | CSS3 puro com custom properties         |
| Scripts      | JavaScript vanilla (ES6+)               |
| Dev server   | `npx serve . --listen 3000`             |
| Build        | Sem build step                          |
| Deploy       | Vercel sem build (`outputDirectory: .`) |

## 3. Estrutura de arquivos

```
bio-igreja/
├── index.html            # pagina unica da aplicacao
├── css/
│   ├── reset.css         # reset de estilos
│   ├── tokens.css        # CSS custom properties (design tokens)
│   └── styles.css        # estilos da aplicacao + animacoes
├── js/
│   └── main.js           # ponto de entrada da pagina
├── assets/
│   └── images/
│       └── avatar.png    # avatar/logo principal
├── public/               # favicons e webmanifest (servidos estaticamente)
├── vercel.json           # configuracao de deploy sem build
├── package.json          # somente script `dev`
├── CLAUDE.md             # contexto operacional para agente
├── AGENTS.md             # equivalente ao CLAUDE.md
└── docs/                 # arquitetura, instrucoes, historico e design-system
```

## 4. Componentes de interface

Todos em HTML semantico puro, sem framework:

- **Card de perfil** — secao com avatar, nome, bio e tags.
- **Lista de links** — tres botoes com icone SVG inline, label e seta de acao.
- **Footer** — paragrafo com copyright.

## 5. Animacoes

Definidas em `css/styles.css` com `@keyframes`:

| Animacao     | Duracao | Uso                              |
|---|---|---|
| fade-in-up   | 0.6s    | entrada escalonada dos elementos |
| float        | 3s loop | avatar                           |
| glow-pulse   | 2s loop | anel do avatar                   |

## 6. Deploy

`vercel.json` com `framework: null` e `outputDirectory: "."`.
Sem build step — a Vercel serve os arquivos estaticos diretamente.

## 7. Decisoes arquiteturais

- Zero dependencias em runtime.
- Mobile-first com `max-width: 28rem` e padding horizontal de 20px.
- Sem sistema de i18n — pagina somente em portugues.
- Icones SVG inline para evitar dependencias externas.
- Origem: clonagem do projeto bio-cristian com reset completo de conteudo e documentacao.
