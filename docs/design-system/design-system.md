# Design System — bio-igreja

Este documento define a identidade visual do projeto bio-igreja.

> **Status:** esqueleto aguardando assets e tokens da Igreja em Sao Jose.
> Preencher apos receber paleta de cores, tipografia, logos e favicons.

---

## 1. Sobre a marca

**Igreja em Sao Jose** — [PLACEHOLDER: posicionamento visual, tom e personalidade da marca.]

- **Posicionamento visual:** [PLACEHOLDER]
- **Tom:** [PLACEHOLDER]
- **Personalidade visual:** [PLACEHOLDER]

## 2. Tipografia

- **Fonte principal:** [PLACEHOLDER — fonte atual herdada: `Sora` (Google Fonts)]
- **Pesos em uso:** [PLACEHOLDER]
- **Hierarquia:**
  - Nome/H1: `clamp(1.85rem, 8vw, 2.65rem)`, `font-weight: 800`
  - Bio: `0.875rem`, cor muted
  - Label dos links: `0.9375rem`, `font-weight: 600`

## 3. Paleta de cores (CSS custom properties)

> [PLACEHOLDER — tokens a definir em `css/tokens.css` apos receber a paleta da marca]

```css
:root {
  --color-bg:            [PLACEHOLDER];
  --color-surface:       [PLACEHOLDER];
  --color-surface-alt:   [PLACEHOLDER];
  --color-primary:       [PLACEHOLDER];
  --color-primary-hover: [PLACEHOLDER];
  --color-text:          [PLACEHOLDER];
  --color-text-muted:    [PLACEHOLDER];
  --color-text-inverse:  [PLACEHOLDER];
  --color-border:        [PLACEHOLDER];
  --color-border-strong: [PLACEHOLDER];
}
```

## 4. Border radius

| Token           | Valor  | Uso                        |
|---|---|---|
| `--radius-sm`   | 6px    | elementos pequenos         |
| `--radius-md`   | 12px   | botoes de link, icon-wrap  |
| `--radius-lg`   | 24px   | card de perfil             |
| `--radius-pill` | 999px  | tags                       |

## 5. Animacoes

Definidas em `css/styles.css` com `@keyframes`:

| Animacao      | Duracao  | Uso                                      |
|---|---|---|
| `fade-in-up`  | 0.6s     | entrada escalonada de todos os elementos |
| `float`       | 3s loop  | avatar (translateY 0 -> -8px -> 0)       |
| `glow-pulse`  | 2s loop  | anel do avatar (box-shadow pulsante)     |

## 6. Componentes

### Card de perfil

- `border-radius: 24px`, fundo semitransparente, `backdrop-filter: blur(12px)`.
- Padding: 32px, texto centralizado.

### Avatar

- 128x128px, circular.
- Animacoes: `float` + `glow-pulse`.

### Botao de link

- `border-radius: 16px`, layout flex.
- Estrutura: icon-wrap (40x40px) + label (flex: 1, semibold) + seta.
- Hover: `translateY(-2px)`, cor primaria.

## 7. Assets

### 7.1 Avatar / Logo principal
- `assets/images/avatar.png` — [PLACEHOLDER: substituir pela foto/logo da igreja]

### 7.2 Favicon — `public/`
- [PLACEHOLDER: substituir pelos favicons da marca da igreja]
- Arquivos: `favicon.svg`, `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `site.webmanifest`.

### 7.3 Logos — `docs/design-system/logos/`
- [PLACEHOLDER: adicionar logo-dark.png e logo-white.png da igreja]

### 7.4 Icones SVG em uso
- Todos inline no HTML, `viewBox="0 0 24 24"`, `stroke="currentColor"`, `fill="none"`, `stroke-width="1.5"`.
- Icones: MessageCircle (WhatsApp), Play (YouTube), Smartphone (App Pao de Judah), ArrowUpRight (seta).

## 8. Referencias cruzadas

- Tokens: `css/tokens.css`.
- Estilos e animacoes: `css/styles.css`.
- Tipografia: importada no `<head>` do `index.html`.
- Guia de trabalho: `AGENTS.md` e `CLAUDE.md`.
- Arquitetura: `docs/arquitetura/arquitetura.md`.
