# AGENTS.md — bio-igreja (Codex)

Guia operacional para o Codex atuar neste projeto com velocidade, segurança e rastreabilidade.

## 1. Objetivo do projeto

`bio-igreja` e uma pagina de link da bio (mobile-first) para centralizar contatos e direcionar para os canais digitais da Igreja em Sao Jose.

Fluxo principal:
- Card de perfil: avatar + nome + bio + tags.
- Lista de tres botoes de link (WhatsApp, YouTube, App Pao de Judah).
- Footer com copy.

## 2. Contexto tecnico

- HTML5 semantico
- CSS3 puro com custom properties
- JavaScript vanilla ES6+
- Sem framework, sem build step
- Dev server: `npx serve . --listen 3000`
- Deploy: Vercel sem build

Scripts:
- `npm run dev`

## 3. Arquivos-fonte prioritarios

- `index.html` — pagina unica completa.
- `css/tokens.css` — design tokens (cores, tipografia, espacamento).
- `css/styles.css` — estilos e animacoes.
- `js/main.js` — ponto de entrada.
- `assets/images/avatar.png` — avatar/logo principal.

## 4. Protocolo do Codex (obrigatorio)

Antes de editar:
1. Ler `docs/historico/` em ordem numerica.
2. Ler `docs/arquitetura/arquitetura.md`.
3. Se a mudanca for visual, ler `docs/design-system/design-system.md`.
4. Ler `README.md` e este `AGENTS.md`.

Depois de editar:
1. Criar novo registro em `docs/historico/` no formato `NN-descricao-curta-AAAA-MM-DD.md`.
2. Atualizar docs afetados:
   - Arquitetura: `docs/arquitetura/arquitetura.md`
   - Instrucoes: `docs/instrucoes/instrucoes.md`
   - Design system: `docs/design-system/design-system.md`

## 5. Regras de colaboracao

- Nao reverter alteracoes do usuario sem pedido explicito.
- Preferir mudancas pequenas e objetivas, com baixo risco.
- Nomes de arquivo/pasta em ASCII, kebab-case, sem acento.
- Conteudo de documentacao em pt-BR.
- Sem i18n — pagina somente em portugues.
