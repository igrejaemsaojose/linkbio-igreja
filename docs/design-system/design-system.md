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
- **Aplicacao:** carregada globalmente via `<link>` no `index.html`; aplicada no `html` via `--font-body` em `css/tokens.css`.
- **Hierarquia em uso no app:**
  - Nome/H1: `clamp(1.85rem, 8vw, 2.65rem)`, `font-weight: 800`, `letter-spacing: -0.02em`.
  - Tagline: `1rem`, `font-weight: 600`.
  - Bio: `0.875rem`, cor muted.
  - Eyebrow: `0.75rem`, `font-weight: 600`, `letter-spacing: 0.18em`, `text-transform: uppercase`.
  - Label dos links: `0.9375rem`, `font-weight: 600`.

## 3. Paleta de cores (CSS custom properties)

Tokens definidos em `css/tokens.css`:

```css
:root {
  --color-bg:            #F4F4F9;
  --color-surface:       #FFFFFF;
  --color-surface-alt:   #EAEAF2;
  --color-primary:       #00002B;
  --color-primary-hover: #000014;
  --color-text:          #00002B;
  --color-text-muted:    rgba(0, 0, 43, 0.6);
  --color-text-inverse:  #F4F4F9;
  --color-border:        rgba(0, 0, 42, 0.08);
  --color-border-strong: rgba(0, 0, 42, 0.15);

  --navy-dark:    hsl(240, 100%, 6%);
  --navy-base:    hsl(240, 100%, 8%);
  --navy-mid:     hsl(240, 100%, 10%);
  --navy-light:   hsl(240, 100%, 12%);
  --navy-lighter: hsl(240, 100%, 14%);
}
```

| Nome              | Valor                      | Uso                                     |
|---|---|---|
| `--color-bg`      | `#F4F4F9`                  | fundo geral, chips de tag               |
| `--color-surface` | `#FFFFFF`                  | superficie de cards e botoes de link    |
| `--color-primary` | `#00002B`                  | texto principal, borda do avatar        |
| `--color-text-muted` | `rgba(0,0,43,0.6)`      | bio, footer, eyebrow                    |
| `--navy-base`     | `hsl(240, 100%, 8%)`       | fundo do segmento ativo do toggle, hover dos botoes |
| `--navy-light`    | `hsl(240, 100%, 12%)`      | cor da tagline                          |

## 4. Border radius

| Token          | Valor  | Uso                        |
|---|---|---|
| `--radius-sm`  | 6px    | elementos pequenos         |
| `--radius-md`  | 12px   | botoes de link, icon-wrap  |
| `--radius-lg`  | 24px   | card de perfil             |
| `--radius-pill`| 999px  | toggle, tags               |

## 5. Gradientes

- **Fundo global:** `linear-gradient(180deg, #ffffff 0%, #F4F4F9 100%)`, `background-attachment: fixed`.
- **Blobs decorativos:** posicao fixa, `filter: blur(80px)`, fundo navy com opacidade 10%.

## 6. Animacoes

Definidas em `css/styles.css` com `@keyframes`:

| Animacao      | Duracao  | Uso                                      |
|---|---|---|
| `fade-in-up`  | 0.6s     | entrada escalonada de todos os elementos |
| `float`       | 3s loop  | avatar (translateY 0 → -8px → 0)         |
| `glow-pulse`  | 2s loop  | anel do avatar (box-shadow navy pulsante) |

Curva recomendada: `cubic-bezier(0.16, 1, 0.3, 1)`.

Delays escalonados aplicados nos elementos com `animation-delay`:
- avatar: 0.05s, nome: 0.10s, tagline: 0.15s, bio: 0.20s, tags: 0.25s
- eyebrow: 0.30s, titulo: 0.35s, links: 0.40s–0.60s, footer: 0.65s

## 7. Componentes

### Toggle de idioma

- Container: pill, borda `hsl(240,20%,80%)`, fundo `rgba(255,255,255,0.9)`, `backdrop-filter: blur(8px)`, sombra sutil.
- Segmento ativo: fundo `--navy-base`, texto `--color-text-inverse`, `font-weight: 600`.
- Segmento inativo: texto `rgba(0,0,43,0.7)`, sem fundo.
- Posicao: alinhado a direita no topo da pagina.

### Card de perfil

- `border-radius: 24px`, borda `hsl(240,20%,80%)`, fundo `rgba(255,255,255,0.9)`, `backdrop-filter: blur(12px)`.
- Sombra: `0 18px 60px -30px hsla(240,100%,8%,0.45)`.
- Padding: 32px, texto centralizado.
- Blob interno decorativo no topo.

### Avatar

- 128x128px, circular, borda 4px navy.
- Anel: `outline: 4px solid rgba(0,0,43,0.12)`, `outline-offset: 4px`.
- Animacoes: `float` + `glow-pulse`.

### Botao de link

- `border-radius: 16px`, borda `hsl(240,20%,80%)`, fundo `rgba(255,255,255,0.9)`.
- Layout flex: icon-wrap (40x40px, radius 12px, fundo `--color-bg`) + label (flex: 1, semibold) + seta.
- Hover: `translateY(-2px)`, borda e fundo navy, texto off-white.

## 8. Assets (marca pessoal)

### 8.1 Avatar
- `assets/images/avatar.png` — foto de perfil do Cristian.

### 8.2 Favicon — `public/`
- `favicon.svg`, `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `site.webmanifest`.

### 8.3 Icones SVG
- Todos inline no HTML, `viewBox="0 0 24 24"`, `stroke="currentColor"`, `fill="none"`, `stroke-width="1.5"`.
- Icones em uso: Globe (Servicos), MessageCircle (WhatsApp), Linkedin, Instagram, Github, ArrowUpRight (seta).

## 9. Referencias cruzadas

- Tokens: `css/tokens.css`.
- Estilos e animacoes: `css/styles.css`.
- Tipografia: importada no `<head>` do `index.html`.
- Guia de trabalho: `AGENTS.md` e `CLAUDE.md`.
- Arquitetura: `docs/arquitetura/arquitetura.md`.
