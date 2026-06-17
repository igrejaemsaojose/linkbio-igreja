# Correção do favicon e site.webmanifest

- **Data:** 2026-06-17
- **Autor:** Claude
- **Escopo:** Assets, PWA

## Contexto / Motivacao

Favicon não estava aparecendo no navegador mesmo após a troca do arquivo. A causa eram arquivos conflitantes do projeto anterior (bio-cristian) ainda presentes em `public/`, incluindo `favicon.ico` que browsers preferem automaticamente.

## O que mudou

- `public/favicon.ico` — removido (arquivo do Cristian, causava conflito)
- `public/favicon.svg` — removido (arquivo do Cristian)
- `public/favicon-16x16.png` — removido (arquivo do Cristian)
- `public/favicon-32x32.png` — removido (arquivo do Cristian)
- `public/apple-touch-icon.png` — substituído por cópia de `favicon.png` (estrela da marca)
- `public/android-chrome-192x192.png` — substituído por cópia de `favicon.png`
- `public/android-chrome-512x512.png` — substituído por cópia de `favicon.png`
- `public/site.webmanifest` — atualizado:
  - `theme_color`: `#00002B` → `#0E8FBB` (azul da marca)
  - `background_color`: `#F4F4F9` → `#EEF9FC` (fundo da marca)
  - Caminhos dos ícones: `/android-chrome-*.png` → `/public/android-chrome-*.png`

## Impacto

- Favicon agora exibe o símbolo da estrela/sol da Igreja em São José em todos os contextos.
- Cores do PWA (theme_color, background_color) alinhadas com a identidade da marca.
