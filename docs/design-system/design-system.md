# Design System — bio-cristian (ID Visual Pessoal Cristian)

Este projeto utiliza a **ID Visual Pessoal Cristian** como fonte unica de verdade para decisoes visuais.

A ID visual pessoal foi derivada da base visual da Magnus e padronizada para uso nos projetos pessoais do Cristian.

Regra central desta familia de projetos:
- **Mantem:** tipografia, paleta, tokens, espacamento, componentes e animacoes da base visual.
- **Muda:** logos, favicon e imagens para os assets da marca pessoal do Cristian.

---

## 1. Sobre a marca

**ID Visual Pessoal Cristian** — linguagem visual premium, sobria e direta para produtos e paginas pessoais do Cristian.

- **Posicionamento visual:** autoridade tecnica com clareza, sem excesso decorativo.
- **Tom:** direto, pragmatico e anti-hype.
- **Personalidade visual:** navy profundo (quase preto) sobre off-white, tipografia Sora, alto contraste em neutros frios, cantos generosos e layout limpo.

## 2. Tipografia

- **Fonte principal (display + body):** `Sora` (sans-serif, Google Fonts).
- **Pesos em uso:** 300, 400, 500, 600, 700, 800.
- **Aplicacao:** carregada globalmente em `body` via `src/index.css`.
- **Hierarquia em uso no app:**
  - `text-xl font-bold` para titulos principais mobile.
  - `text-sm` e `text-xs` para conteudo e metadados.
  - `font-mono` para blocos de prompt/codigo.

Hierarquia de referencia para evolucao visual:
- H1: `clamp(2.25rem, 5.5vw, 4.5rem)`, `font-weight: 800`, `letter-spacing: -0.02em`, `line-height: 1.1`.
- H2: `clamp(1.75rem, 3.4vw, 2.75rem)`, `font-weight: 700`.
- H3: `1.25rem`, `font-weight: 600`.
- Eyebrow: `0.75rem`, `font-weight: 600`, `letter-spacing: 0.18em`, `text-transform: uppercase`, `opacity: 0.7`.
- Body: `1rem`; prose: `1.0625rem`, `line-height: 1.65`, `opacity: 0.8`.

## 3. Paleta de cores

### 3.1 Cores-base da ID visual pessoal

| Nome | HEX | Uso |
|---|---|---|
| Navy profundo | `#00002B` | cor primaria, texto principal, fundo escuro, focus ring |
| Off-white | `#F4F4F9` | fundo geral, texto inverso sobre navy |
| Preto | `#000000` | contraste maximo |
| Navy hover | `#000014` | hover do botao primario |
| Alt surface | `#EAEAF2` | fundo de secao alternativa |

### 3.2 Tokens semanticos (shadcn/ui, HSL em `src/index.css`)

| Token | Claro (`:root`) | Semantica |
|---|---|---|
| `background` | `hsl(240 29% 97%)` | fundo geral (off-white) |
| `foreground` | `hsl(240 100% 8%)` | texto principal (navy profundo) |
| `card` | `hsl(0 0% 100%)` | fundo de card |
| `card-foreground` | `hsl(240 100% 8%)` | texto em card |
| `primary` | `hsl(240 100% 15%)` | acoes principais |
| `primary-foreground` | `hsl(240 29% 97%)` | texto sobre primary |
| `secondary` | `hsl(240 20% 88%)` | acoes secundarias |
| `muted` | `hsl(240 15% 93%)` | fundos discretos |
| `muted-foreground` | `hsl(240 20% 35%)` | textos discretos |
| `accent` | `hsl(240 100% 8%)` | destaque |
| `accent-foreground` | `hsl(0 0% 100%)` | texto sobre accent |
| `destructive` | `hsl(0 84% 60%)` | erro/remocao |
| `border` | `hsl(240 20% 80%)` | bordas |
| `input` | `hsl(240 15% 90%)` | fundo de inputs |
| `ring` | `hsl(240 100% 8%)` | focus ring |

### 3.3 Escala navy

| Token | Valor | Uso |
|---|---|---|
| `--navy-dark` | `hsl(240 100% 6%)` | pontos mais escuros |
| `--navy-base` | `hsl(240 100% 8%)` | navy base |
| `--navy-mid` | `hsl(240 100% 10%)` | apoio de contraste |
| `--navy-light` | `hsl(240 100% 12%)` | apoio de contraste |
| `--navy-lighter` | `hsl(240 100% 14%)` | apoio de contraste |
| `--silver` | `hsl(240 20% 93%)` | acento claro |

### 3.4 Gradientes em uso

- Background global: gradiente vertical de branco para off-white navy.
- Background radial de detalhe: `radial-gradient(ellipse at center, white 0%, hsl(220 10% 95%) 50%, hsl(220 8% 90%) 100%)`.
- Botao primario de destaque: `bg-gradient-to-r from-accent to-primary`.

## 4. Border radius

Escala padrao:
- `6px`, `12px`, `24px` (referencia de design)
- `--radius: 0.75rem` no app, com mapeamento Tailwind/shadcn

| Escala Tailwind | Formula | Valor |
|---|---|---|
| `rounded-sm` | `calc(var(--radius) - 4px)` | 8px |
| `rounded-md` | `calc(var(--radius) - 2px)` | 10px |
| `rounded-lg` | `var(--radius)` | 12px |
| `rounded-full` | — | 9999px |

Padrao de uso:
- Cards: `rounded-lg`.
- Badges e botoes pill: `rounded-full`.
- Cards amplos/hero: referencia `24px` quando aplicavel.

## 5. Componentes (UX/UI)

- Base: `shadcn/ui` sobre Radix (`src/components/ui/`).
- Regra: reutilizar componentes existentes antes de criar novos.
- Ajustes visuais: preferir variantes com `class-variance-authority`.
- Container principal mobile-first: `container max-w-md mx-auto`.
- Espacamento vertical: multiplos de `py-4` e `space-y-3`.

Padroes de botoes:
- Primario: fundo navy, texto off-white, pill, hover com leve elevacao.
- Ghost: fundo transparente, borda navy, texto navy.
- Light: fundo off-white, texto navy.

Padrao de card:
- Fundo claro, borda suave, radius medio, padding generoso, hover com elevacao sutil.

## 6. Animacoes

Definidas em `src/index.css` e usadas como classes `animate-*`:

| Classe | Duracao | Uso |
|---|---|---|
| `animate-fade-in-up` | 0.6s | entrada de secoes |
| `animate-slide-in-right` | 0.6s | entrada lateral |
| `animate-float` | 3s loop | elemento decorativo |
| `animate-glow-pulse` | 2s loop | destaque |
| `animate-shimmer` | 2s loop | loading |
| `animate-accordion-down` / `-up` | 0.2s | accordion Radix |

Curva recomendada: `cubic-bezier(0.16, 1, 0.3, 1)`.

## 7. Assets (marca pessoal)

Organizacao dos assets em `docs/design-system/`:

### 7.1 Logos — `docs/design-system/logos/`

- Usar **somente** logos da marca pessoal do Cristian.
- Manter variacoes para fundo claro e fundo escuro (`logo-dark.*` e `logo-light.*`, quando aplicavel).
- Regra de uso: escolher pelo contraste com o fundo.

### 7.2 Favicon — `docs/design-system/favicon/`

- Usar favicon da marca pessoal do Cristian.
- Se a base for foto pessoal, exportar versoes com transparencia correta e area de seguranca para tamanhos pequenos.
- Manter versoes comuns: `favicon.svg`, `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`.

### 7.3 Imagens — `docs/design-system/` e `public/`

- Imagens institucionais e de perfil devem ser da marca pessoal.
- Nao usar logos ou fotos da Magnus nos projetos pessoais.

### 7.4 Relacao com `public/`

Quando um asset for promovido para o app:
- copiar para `public/` (ou `src/assets/`, conforme estrategia do projeto),
- atualizar referencias no app,
- registrar no historico.

## 8. Referencias cruzadas

- Tokens: `src/index.css` e `tailwind.config.ts`.
- Tipografia: `src/index.css` e `index.html`.
- Componentes UI: `src/components/ui/` e `src/components/`.
- Guia de trabalho: `AGENTS.md` e `CLAUDE.md`.
