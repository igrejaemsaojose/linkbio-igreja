# Clonagem a partir do bio-cristian e reset para bio-igreja

- **Data:** 2026-06-17
- **Autor:** Claude
- **Escopo:** arquitetura | conteudo | config

## Contexto / Motivacao

Projeto criado por clonagem do bio-cristian. Toda a documentacao, codigo e conteudo foi adaptado para a Igreja em Sao Jose, removendo referencias ao projeto original e ao historico herdado.

## O que mudou

- Clonagem do projeto bio-cristian para bio-igreja.
- Remocao dos 9 arquivos de historico herdados (00 a 08 do bio-cristian).
- Remocao do sistema de i18n PT/EN: `js/i18n.js`, `translations/pt.js`, `translations/en.js` e pasta `translations/`.
- Remocao dos logos do Cristian: `docs/design-system/logos/logo-dark.png` e `logo-white.png`.
- Reescrita de `CLAUDE.md` e `AGENTS.md` para bio-igreja.
- Reescrita de `README.md` para bio-igreja.
- Reescrita de `docs/arquitetura/arquitetura.md` para bio-igreja.
- Reescrita de `docs/instrucoes/instrucoes.md` (nome do projeto atualizado).
- Reescrita de `docs/instrucoes/plano-de-acao-bio.md` com fases do bio-igreja.
- Reescrita de `docs/design-system/design-system.md` como esqueleto com placeholders.
- Reescrita de `index.html`: nome, links (WhatsApp, YouTube, App Pao de Judah) e remocao do toggle PT/EN.
- Reescrita de `js/main.js`: simplificado, sem i18n.
- Atualizacao de `package.json`: nome alterado de bio-cristian para bio-igreja.
- Atualizacao de `public/site.webmanifest`: nome alterado para Igreja em Sao Jose.

## Impacto

- Pagina agora exibe estrutura da Igreja em Sao Jose.
- Sistema de i18n removido — pagina somente em portugues.
- Design system, avatar e favicons ainda sao placeholders — aguardando assets da igreja (Fase 1).
- URLs dos botoes (WhatsApp, YouTube, App Pao de Judah) sao placeholders — aguardando dados reais (Fase 2).
