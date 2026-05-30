# 08 — Migração de stack React para HTML/CSS/JS vanilla

**Data:** 2026-05-30
**Tipo:** Refatoração de stack (breaking change completo)

---

## Contexto

O projeto `bio-cristian` foi migrado integralmente da stack React + Vite + TypeScript + Tailwind CSS + shadcn/ui para HTML5 puro + CSS3 com custom properties + JavaScript vanilla ES6+, alinhando com a stack do projeto `lp-magnus` da Magnus Midias.

Motivacao: simplificar a manutencao, eliminar build step, reduzir dependencias a zero e facilitar o deploy estatico na Vercel.

---

## O que foi feito

### Arquivos criados

| Arquivo                        | Descricao                                   |
|---|---|
| `index.html`                   | Pagina unica completa (substituiu Vite + React) |
| `css/reset.css`                | Reset de estilos                            |
| `css/tokens.css`               | CSS custom properties (design tokens)       |
| `css/styles.css`               | Estilos + animacoes (fade-in-up, float, glow-pulse) |
| `js/i18n.js`                   | Sistema de i18n leve sem dependencias       |
| `js/main.js`                   | Ponto de entrada; inicializa i18n e WhatsApp URL |
| `translations/pt.js`           | Dicionario em portugues                     |
| `translations/en.js`           | Dicionario em ingles                        |
| `assets/images/avatar.png`     | Avatar copiado de `src/assets/avatar.png`   |
| `vercel.json`                  | Deploy estatico sem build                   |
| `package.json`                 | Somente script `dev` com `npx serve`        |

### Arquivos removidos

- `src/` — todo o codigo React/TypeScript
- `node_modules/` — todas as dependencias npm
- `dist/` — artefatos de build
- `package-lock.json`
- `bun.lockb`
- `vite.config.ts`
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- `postcss.config.js`
- `tailwind.config.ts`
- `eslint.config.js`
- `components.json`
- `vitest.config.ts`

### Documentos atualizados

- `docs/arquitetura/arquitetura.md` — nova stack documentada
- `docs/design-system/design-system.md` — tokens como CSS custom properties puras
- `CLAUDE.md` — instrucoes atualizadas para nova stack
- `README.md` — novo readme

---

## Decisoes tecnicas

- **Zero dependencias:** nenhum npm install necessario para rodar ou fazer deploy.
- **i18n caseiro:** `window.__i18n` com dicionarios em arquivos `.js` separados; persistencia em `localStorage`; evento customizado `localechange` para reatividade.
- **WhatsApp URL dinamica:** gerenciada em `js/main.js`, ouvindo `localechange`.
- **SVGs inline:** todos os icones embutidos diretamente no HTML para evitar dependencias externas.
- **Animacoes CSS puras:** `fade-in-up` com delays escalonados, `float` e `glow-pulse` em `@keyframes`.
- **Deploy Vercel:** `vercel.json` com `framework: null` e `outputDirectory: "."`.

---

## Fidelidade visual

Todos os tokens visuais, animacoes, layout e componentes foram preservados com fidelidade a partir do design anterior:
- Gradiente de fundo fixo
- Blobs decorativos navy
- Card de perfil com backdrop-blur e sombra profunda
- Avatar com `float` + `glow-pulse`
- Toggle PT | EN com segmento ativo navy
- Botoes de link com hover navy
