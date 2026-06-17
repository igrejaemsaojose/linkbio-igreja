# CLAUDE.md — bio-igreja

Contexto operacional do projeto para agentes de codigo.

## 1. Visao geral

`bio-igreja` e uma pagina de link da bio (mobile-first) para centralizar pontos de contato da Igreja em Sao Jose.

Fluxo principal:
- Card de perfil: avatar + nome + bio + tags.
- Lista de quatro botoes de link (WhatsApp, YouTube, App Android e App iOS — Pao de Judah).
- Footer com copy.

Sem sistema de i18n — pagina somente em portugues.

## 2. Stack

- HTML5 semantico
- CSS3 puro com custom properties (sem framework de estilos)
- JavaScript vanilla ES6+ (sem frameworks)
- Dev server: `npx serve . --listen 3000`
- Sem build step
- Deploy: Vercel sem build (`outputDirectory: "."`)

## 3. Scripts

- `npm run dev` — inicia servidor local na porta 3000

## 4. Estrutura relevante

- `index.html` — pagina unica completa.
- `css/tokens.css` — design tokens como CSS custom properties.
- `css/styles.css` — estilos da aplicacao e animacoes.
- `js/main.js` — ponto de entrada da pagina.
- `assets/images/avatar.png` — avatar/logo principal.
- `docs/` — arquitetura, instrucoes, historico e design-system.

## 5. Ponteiros obrigatorios

- Arquitetura: `docs/arquitetura/arquitetura.md`
- Historico: `docs/historico/`
- Design system: `docs/design-system/design-system.md`

## 6. Regra inegociavel de historico

Toda alteracao relevante deve gerar um novo arquivo em `docs/historico/` com formato:

`NN-descricao-curta-AAAA-MM-DD.md`

O proximo numero e `01`.

### Antes de alterar
1. Ler historico completo em ordem numerica.
2. Ler `docs/arquitetura/arquitetura.md`.
3. Se tiver impacto visual, ler `docs/design-system/design-system.md`.

### Depois de alterar
1. Criar registro em `docs/historico/`.
2. Atualizar arquitetura se necessario.
3. Atualizar design-system se tocar UI/tokens/assets.

## 7. Convencoes

- Nomes de arquivos e pastas: ASCII puro, kebab-case, sem acentos.
- Conteudo interno dos arquivos: pt-BR.
- Icones: SVG inline, viewBox 0 0 24 24, stroke="currentColor", fill="none", stroke-width="1.5".
- Links externos: `target="_blank" rel="noopener noreferrer"`.
- Sem i18n — pagina somente em portugues.
