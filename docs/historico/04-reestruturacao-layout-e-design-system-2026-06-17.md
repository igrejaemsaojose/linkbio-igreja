# Reestruturação do layout e atualização do design system

- **Data:** 2026-06-17
- **Autor:** Claude
- **Escopo:** Layout, UI, Design System

## Contexto / Motivacao

O layout original herdado do bio-cristian tinha uma estrutura complexa:
card de perfil com bio, tags, eyebrow "Acessos Rápidos", título "Nossos Links",
e CSS com estilos residuais do toggle PT/EN removido.

Solicitação: simplificar para avatar flutuante + nome + botões,
renomear os botões de app e alinhar todo o design system com as cores da marca.

## O que mudou

### index.html

- Removido: `.profile-card` com bio, tags, blob interno
- Removido: `.links-section` com eyebrow e título
- Adicionado: `.profile-section` minimalista (avatar + h1 apenas)
- `.links-list` agora é filho direto de `.page-wrapper`
- Labels dos botões de app invertidas e corrigidas:
  - "App Android — Pão de Judah" → "Pão de Judá - Android"
  - "App iOS — Pão de Judah" → "Pão de Judá - iOS"
- Classe `--pao-de-judah` renomeada para `--pao-de-juda` (acento correto)

### css/styles.css

- Removido: estilos do `.locale-toggle*` (toggle PT/EN nunca chegou ao HTML)
- Removido: `.profile-card`, `.profile-card__blob`, `.profile-bio`, `.profile-tags`, `.profile-tag`
- Removido: `.links-section`, `.links-eyebrow`, `.links-title`
- Adicionado: `.profile-section` (text-align: center, margin-bottom: 40px)
- Atualizado: fundo do body — gradiente `#ffffff → var(--color-bg)` (azul céu da marca)
- Atualizado: `.link-btn` border → `var(--color-border-strong)` (azul sutil da marca)
- Atualizado: `.link-btn` box-shadow → `rgba(7, 41, 58, 0.10)` (cor do texto da marca)
- Atualizado: `.link-btn:hover` box-shadow → `hsla(198, 80%, 20%, 0.40)` (azul da marca)
- Atualizado: delays de animação — botões iniciam em 0.20s (removidas etapas anteriores)
- Atualizado: seletor de animação de botões → `.links-list li:nth-child(n) .link-btn`

### docs/design-system/design-system.md

- Removidos todos os PLACEHOLDERs
- Paleta de cores documentada com valores reais
- Componentes atualizados (sem card de perfil, sem tags)
- Tabela de ícones SVG documentada

## Impacto

- Layout mais limpo e direto ao ponto.
- Nenhuma URL ou funcionalidade alterada — apenas estrutura e visual.
- CSS reduzido: ~200 linhas removidas de estilos não utilizados.
