# Limpeza de referencias de gerador e preenchimento de documentacao

- **Data:** 2026-04-24
- **Autor:** Claude
- **Escopo:** arquitetura

## Contexto / Motivacao
O projeto ainda tinha partes importantes com placeholders e referencias legadas de gerador, o que dificultava operacao, manutencao e onboarding.

## O que mudou
- Reescrito `README.md` com descricao real do projeto, stack, scripts e estrutura.
- Reescrito `CLAUDE.md` e criado/alinhado `AGENTS.md`.
- Criado `docs/arquitetura/arquitetura.md` com snapshot tecnico real.
- Preenchido `docs/design-system/design-system.md` com tokens, componentes e padroes atuais.
- Criado `docs/instrucoes/plano-de-acao-bio.md`.
- Removido tagger legado de scaffold de `package.json` e `vite.config.ts`.
- Atualizado `meta author` em `index.html`.
- Atualizadas URLs em `src/config/links.ts` para remover dominio legado.

## Impacto
- Documentacao passa a refletir o estado real do projeto.
- Build fica desacoplado de plugin de gerador legado.
- Projeto pronto para evolucao com rastreabilidade em docs.
