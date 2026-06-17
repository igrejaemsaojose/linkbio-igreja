# Plano de Ação — bio-igreja

Plano por fases para construção e lançamento do projeto.

## Fase 0 — Reset e base (concluída)

- [x] Clonagem do bio-cristian para bio-igreja.
- [x] Remocao do historico herdado do bio-cristian.
- [x] Remocao do sistema de i18n PT/EN.
- [x] Reescrita de toda a documentacao (CLAUDE.md, AGENTS.md, README.md, arquitetura, instrucoes).
- [x] Reescrita do index.html com estrutura da Igreja em Sao Jose.
- [x] design-system.md com esqueleto — aguardando assets e identidade visual.

## Fase 1 — Identidade visual e assets

- [ ] Receber e aplicar paleta de cores da igreja em `css/tokens.css`.
- [ ] Definir tipografia e atualizar `design-system.md`.
- [ ] Substituir `assets/images/avatar.png` pela foto/logo da igreja.
- [ ] Substituir favicons em `public/` pelos da marca da igreja.
- [ ] Atualizar `docs/design-system/logos/` com os logos oficiais.
- [ ] Atualizar `docs/design-system/favicon/` com os favicons.
- [ ] Atualizar `public/site.webmanifest` com nome e cores da marca.
- [ ] Atualizar `docs/design-system/design-system.md` com todos os tokens definidos.

## Fase 2 — Conteudo

- [ ] Preencher bio da igreja no `index.html`.
- [ ] Definir e preencher tags de perfil.
- [x] URL do WhatsApp preenchida (5548999995841 com mensagem pre-preenchida).
- [x] URL do YouTube preenchida (youtube.com/@igrejaemsaojose).
- [x] URL do App Android preenchida (Play Store — br.com.paodejuda.app).
- [x] URL do App iOS preenchida (App Store — id1229503159).
- [ ] Atualizar meta description e og:description com texto real.
- [ ] Atualizar footer com copyright correto.

## Fase 3 — Testes e pre-lancamento

- [ ] Smoke test manual em mobile (iOS e Android).
- [ ] Smoke test em desktop.
- [ ] Validar todos os links externos (WhatsApp, YouTube, App).
- [ ] Verificar rel="noopener noreferrer" em todos os links externos.
- [ ] Conferir SEO: title, description, og:tags.
- [ ] Validar favicon em diferentes navegadores.
- [ ] Auditoria de acessibilidade basica (alt, aria-label, contraste).

## Fase 4 — Deploy

- [ ] Configurar projeto na Vercel.
- [ ] Definir dominio (proprio ou vercel.app).
- [ ] Deploy e validacao em producao.

---

## Fora de escopo (pos-MVP)

- Analytics / rastreamento de cliques.
- Dark mode.
- Animacoes adicionais.
- Paginas internas (apenas single-page).
