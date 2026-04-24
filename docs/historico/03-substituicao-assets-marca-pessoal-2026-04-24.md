# Substituicao completa dos assets da marca pessoal

- **Data:** 2026-04-24
- **Autor:** Codex
- **Escopo:** assets / design-system / public

## Contexto / Motivacao
Foi solicitado substituir integralmente os assets de marca pelos novos arquivos oficiais enviados por Cristian.

## O que mudou
- Logos atualizadas em `docs/design-system/logos/`:
  - `logo-dark.png`
  - `logo-white.png`
- Removidos logos antigos em SVG para evitar ambiguidade de versao.
- Favicon substituida e padronizada em `public/` e `docs/design-system/favicon/`:
  - `favicon.svg` (tratada para transparencia, sem fundo solido)
  - `favicon.ico`
  - `favicon-16x16.png`
  - `favicon-32x32.png`
  - `apple-touch-icon.png`
  - `android-chrome-192x192.png`
  - `android-chrome-512x512.png`
- `README.md` de logos atualizado para refletir nomenclatura real em PNG.

## Impacto
- Projeto passa a usar os novos assets oficiais da marca pessoal de forma consistente.
- Todos os formatos de favicon ficam sincronizados entre documentacao e runtime.
