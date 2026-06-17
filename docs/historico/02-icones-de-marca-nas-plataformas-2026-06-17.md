# Substituição dos ícones genéricos pelos logos das plataformas

- **Data:** 2026-06-17
- **Autor:** Claude
- **Escopo:** UI

## Contexto / Motivacao

Os botões usavam ícones genéricos (balão de chat, play, livro). Solicitação para usar os logos reais de cada plataforma.

## O que mudou

- `index.html` — 4 ícones SVG substituídos pelos logos oficiais:
  - WhatsApp: logo da marca (path do SimpleIcons)
  - YouTube: logo da marca (path do SimpleIcons)
  - Android: logo do Android (robô)
  - iOS: logo da Apple
- `css/styles.css` — `.link-btn__icon-wrap svg` alterado de `stroke` para `fill`,
  pois logos de marca usam preenchimento, não contorno.

## Impacto

- Nenhuma quebra esperada — apenas mudança visual dos ícones.
- Se o design system definir outra cor primária, os ícones herdam automaticamente via `fill: var(--color-primary)`.
