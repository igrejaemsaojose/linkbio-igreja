# Criacao da estrutura padrao de documentacao

- **Data:** 2026-04-23
- **Autor:** Claude
- **Escopo:** infra

## Contexto / Motivacao
Aplicacao do padrao de documentacao e regras de trabalho usado por Cristian em todos os seus projetos (definido em `biblioteca-cristian/docs/prompt-inicial/prompt-inicial.md`). Objetivo: ter `docs/` com arquitetura, instrucoes, historico e design system estruturados antes de qualquer outro trabalho no projeto `bio-cristian`.

## O que mudou
- Criadas pastas: `docs/arquitetura/`, `docs/instrucoes/`, `docs/historico/`, `docs/design-system/` (com subpastas `logos/`, `icones/`, `favicon/`), `docs/prompt-inicial/`.
- Criado `CLAUDE.md` na raiz com placeholders para visao geral, stack, scripts e marca, e com os ponteiros para `docs/` e a regra inegociavel de historico.
- Criado `docs/instrucoes/instrucoes.md` com o fluxo obrigatorio de trabalho (convencao de nomenclatura, finalidade de cada pasta, regra de historico, planos de acao por fases, README).
- Criado `docs/design-system/design-system.md` com esqueleto (Sobre a marca, Tipografia, Paleta de cores, Border radius, Componentes, Animacoes, Assets) com campos pendentes para preenchimento posterior.
- Criados `README.md` em `docs/design-system/logos/`, `docs/design-system/icones/` e `docs/design-system/favicon/` com orientacao de formato e nomenclatura.
- Copiado `prompt-inicial.md` para `docs/prompt-inicial/prompt-inicial.md`.
- Criado este primeiro registro em `docs/historico/`.

Nenhuma alteracao foi feita em codigo, dependencias ou no `README.md` da raiz.

## Impacto
- Qualquer alteracao futura relevante passa a ser obrigada a seguir o fluxo descrito em `docs/instrucoes/instrucoes.md` e a regra de historico em `CLAUDE.md`.
- Proximos passos: Cristian descreve o projeto em si para preencher `CLAUDE.md`, criar `docs/arquitetura/arquitetura.md` (lendo o codigo existente, ja que o projeto nao e do zero), preencher `docs/design-system/design-system.md` com os tokens reais e definir o plano de acao por fases em `docs/instrucoes/`.
