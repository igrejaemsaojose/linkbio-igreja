# Design System — bio-igreja

Este documento define a identidade visual do projeto bio-igreja.

> **Status:** atualizado com paleta e assets da Igreja em São José (2026-06-17).

---

## 1. Sobre a marca

**Igreja em São José** — identidade visual baseada em azul céu e dourado,
extraída do logo oficial da igreja.

- **Cor principal:** azul céu (#0E8FBB)
- **Cor de destaque:** dourado (#F0B030) — estrela/sol do logo
- **Tom:** acolhedor, limpo, minimalista

---

## 2. Tipografia

- **Fonte principal:** `Sora` (Google Fonts)
- **Pesos em uso:** 300, 400, 500, 600, 700, 800
- **Hierarquia:**
  - Nome/H1: `clamp(1.85rem, 8vw, 2.65rem)`, `font-weight: 800`
  - Label dos links: `0.9375rem`, `font-weight: 600`
  - Footer: `0.75rem`, cor muted

---

## 3. Paleta de cores (CSS custom properties)

Definidas em `css/tokens.css`.

```css
:root {
  /* Fundos */
  --color-bg:            #EEF9FC;   /* azul céu muito claro */
  --color-surface:       #FFFFFF;
  --color-surface-alt:   #DFF2FA;

  /* Marca */
  --color-primary:       #0E8FBB;   /* azul céu principal */
  --color-primary-hover: #0A6E92;
  --color-gold:          #F0B030;   /* dourado — estrela do logo */

  /* Textos */
  --color-text:          #07293A;   /* azul muito escuro */
  --color-text-muted:    rgba(7, 41, 58, 0.6);
  --color-text-inverse:  #FFFFFF;

  /* Bordas */
  --color-border:        rgba(14, 143, 187, 0.10);
  --color-border-strong: rgba(14, 143, 187, 0.20);

  /* Escala de azul (gradientes, hover, destaques) */
  --navy-dark:    hsl(198, 80%, 26%);
  --navy-base:    hsl(198, 80%, 34%);   /* usado no hover dos botões */
  --navy-mid:     hsl(198, 80%, 40%);
  --navy-light:   hsl(198, 80%, 46%);
  --navy-lighter: hsl(198, 80%, 52%);
}
```

---

## 4. Border radius

| Token           | Valor  | Uso                             |
|-----------------|--------|---------------------------------|
| `--radius-sm`   | 6px    | elementos pequenos              |
| `--radius-md`   | 12px   | botões de link, icon-wrap       |
| `--radius-lg`   | 24px   | reservado (ex: cards futuros)   |
| `--radius-pill` | 999px  | elementos em pílula             |

---

## 5. Animações

Definidas em `css/styles.css` com `@keyframes`:

| Animação     | Duração  | Uso                                       |
|--------------|----------|-------------------------------------------|
| `fade-in-up` | 0.6s     | entrada escalonada de todos os elementos  |
| `float`      | 3s loop  | avatar (translateY 0 → -8px → 0)         |

---

## 6. Componentes

### Seção de perfil

- Layout minimalista: avatar circular flutuante + nome.
- Sem card, sem bio, sem tags.
- `text-align: center`.

### Avatar

- 128×128px, circular (`border-radius: 50%`).
- `border: 4px solid var(--navy-base)` — azul da marca.
- `object-fit: contain` + `background: var(--color-primary)` — exibe logo sem cortar.
- Animações: `fade-in-up` na entrada + `float` em loop.

### Botão de link

- `border-radius: 12px`, layout flex, `gap: 16px`.
- Estrutura: icon-wrap (40×40px) + label (`flex: 1`, semibold) + seta.
- Borda: `var(--color-border-strong)` — azul muito sutil.
- Hover: `translateY(-2px)`, fundo `var(--navy-base)`, texto branco.

### Ícones SVG dos botões

| Botão         | Ícone                        | Cor do fundo do icon-wrap |
|---------------|------------------------------|---------------------------|
| Fale Conosco  | Logo WhatsApp (#25D366)      | `var(--color-bg)`         |
| YouTube       | Logo YouTube (#FF0000)       | `var(--color-bg)`         |
| Pão de Judá - Android | Trigo SVG (#D4A017) | `#7B1A1A` (vermelho escuro) |
| Pão de Judá - iOS     | Trigo SVG (#D4A017) | `#7B1A1A` (vermelho escuro) |

---

## 7. Assets

### 7.1 Avatar / Logo principal

- `assets/images/avatar.png` — logo da Igreja em São José (com texto, ~89KB)

### 7.2 Favicon — `public/`

- `favicon.png` — símbolo da marca (estrela/sol), ~61KB
- `apple-touch-icon.png` — cópia de `favicon.png`
- `android-chrome-192x192.png` — cópia de `favicon.png`
- `android-chrome-512x512.png` — cópia de `favicon.png`
- `site.webmanifest` — nome "Igreja em São José", theme_color `#0E8FBB`

### 7.3 Ícones SVG dos apps

- Ícone do Pão de Judá: SVG inline de trigo — haste + espiguetas douradas (#D4A017)
  sobre fundo vermelho escuro (#7B1A1A).

---

## 8. Referências cruzadas

- Tokens: `css/tokens.css`
- Estilos e animações: `css/styles.css`
- Tipografia: importada no `<head>` do `index.html`
- Arquitetura: `docs/arquitetura/arquitetura.md`
- Guia de trabalho: `CLAUDE.md` e `AGENTS.md`
