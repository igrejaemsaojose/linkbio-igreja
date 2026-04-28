# Toggle de idioma PT/EN com i18n leve

- **Data:** 2026-04-28
- **Autor:** Claude
- **Escopo:** UI / arquitetura

## Contexto / Motivacao
Cristian solicitou um seletor de idioma no topo da pagina, semelhante ao do portfolio do Euler Azevedo (referencia visual enviada), porem restrito a PT e EN. Decidiu-se por uma implementacao i18n caseira (sem dependencia externa) dado o pequeno volume de strings traduziveis e a preferencia do design system por "anti-hype, sobrio".

## O que mudou

### Novos arquivos
- `src/lib/i18n.tsx`: define o tipo `Locale = "pt" | "en"`, o tipo utilitario `Localized<T>`, dicionario de strings de UI (eyebrow/titulo da secao de links e a11y do toggle), `LocaleProvider` (com persistencia em `localStorage` chave `bio-cristian:locale` + fallback para `navigator.language`) e hook `useLocale()` que devolve `{ locale, setLocale, t, ui }`. O Provider tambem sincroniza `document.documentElement.lang` (`pt-BR`/`en`).
- `src/components/LocaleToggle.tsx`: componente de pill com segmentos `PT`/`EN`. Estado ativo usa fundo navy (`hsl(240,100%,8%)`) com texto off-white; inativo usa texto cinza com hover sutil. Inclui `aria-label`/`aria-pressed`.

### Configs migradas para `Localized`
- `src/config/profile.ts`: `tagline`, `bio` e `tags` agora sao `{ pt, en }`. Removido fallback de bio que estava hardcoded no `Header`.
- `src/config/links.ts`: cada `LinkItem.label` e `url` agora sao `{ pt, en }` — necessario para variar texto do parametro `text` da URL do WhatsApp e abrir caminho para variantes futuras.
- `src/config/footer.ts`: `text` agora e `Localized`.

### Componentes atualizados
- `src/components/Header.tsx`: usa `useLocale().t` para tagline/bio/tags; chips agora vem de `profile.tags` mapeadas; `flex-wrap` adicionado (3 chips podem precisar quebrar em telas estreitas). Padding superior reduzido de `pt-10` para `pt-6` para acomodar o toggle acima sem aumentar a altura total.
- `src/components/LinkButton.tsx`: consome `t` para `label` e `url` por item; eyebrow e titulo da secao vem de `ui.linksEyebrow`/`ui.linksTitle`.
- `src/components/Footer.tsx`: consome `t(footer.text)`.
- `src/pages/Index.tsx`: render do `<LocaleToggle />` alinhado a direita logo no topo do main, antes do `Header`.
- `src/App.tsx`: envolve a arvore com `<LocaleProvider>` (entre `QueryClientProvider` e `TooltipProvider`).

### Detecao inicial e persistencia
- Primeira visita: usa `navigator.language`. `en*` -> `en`; qualquer outra coisa -> `pt`.
- Visita seguinte: respeita o que esta em `localStorage` na chave `bio-cristian:locale`.

## Impacto
- Pagina passa a operar em PT (default) e EN, com troca instantanea sem reload.
- WhatsApp leva ao mesmo numero, mas com mensagem traduzida conforme idioma ativo.
- Tags do perfil tambem mudam (`IA Aplicada/Growth/Automacao` <-> `Applied AI/Growth/Automation`).
- Type-check (`tsc --noEmit`) passou sem erros.
- Nenhum impacto em rotas, dependencias ou banco. Adicionado um `Provider` na raiz — risco baixo.
- Necessario testar manualmente em mobile e validar que o ring de foco do toggle aparece sobre fundo claro.

## Proximos passos sugeridos
- Atualizar `index.html` com `og:locale` alternativo (`og:locale:alternate` em pt-BR/en) — fora do escopo deste registro.
- Considerar mover `NotFound.tsx` para usar i18n (hoje esta em ingles e fora do DS — ja listado como lacuna em `arquitetura.md`).
