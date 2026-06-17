# Favicon com zoom e bordas arredondadas; borda do avatar dourada

- **Data:** 2026-06-17
- **Autor:** Claude
- **Escopo:** Assets, UI

## Contexto / Motivacao

Solicitação: aproximar (zoom) o símbolo no favicon, adicionar bordas arredondadas
com raio 30%, e mudar a borda circular do avatar de azul para o dourado da marca.

## O que mudou

### public/favicon.png (e cópias: apple-touch-icon, android-chrome-192/512)

- Zoom: crop de 10% de cada lado → símbolo ocupa mais área do ícone.
- Bordas arredondadas: raio 30% (324px em 1080px) com canal alpha transparente nos cantos.
- Processado com Python/Pillow: `rounded_rectangle` + máscara RGBA.

### css/styles.css

- `.avatar` — `border: 4px solid var(--navy-base)` → `border: 4px solid var(--color-gold)`
  - `--color-gold: #F0B030` — dourado extraído do logo oficial da marca.

## Impacto

- Favicon mais moderno com cantos arredondados visíveis em navegadores e tela inicial mobile.
- Anel do avatar na cor dourada (#F0B030), alinhada com a identidade visual da marca.
