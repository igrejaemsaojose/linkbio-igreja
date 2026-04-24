# Ajustes UX: avatar, chips, hover dos links e rotacao da seta

- **Data:** 2026-04-24
- **Autor:** Claude
- **Escopo:** UI / performance

## Contexto / Motivacao
Revisao de UX/UI pediu melhorias pontuais: (1) acelerar carregamento da foto de perfil que pesava 1.2MB em 1080x1080; (2) incluir chip "Growth" junto de "IA Aplicada" e "Automacao"; (3) aplicar rotacao de 45deg na seta `ArrowUpRight` no hover para reforcar o gesto de "link externo"; (4) corrigir o hover dos botoes de link — no estado hover o fundo do botao vira navy, mas o quadrado atras do icone tambem ficava navy, apagando o contraste. Agora o quadrado do icone permanece claro com icone escuro, destacando-se do fundo navy do botao.

## O que mudou
- `src/assets/avatar.png`: redimensionado de 1080x1080 (~1.2MB) para 512x512 (~319KB) com `sips`, preservando qualidade para display de 128px ate 2x retina.
- `index.html`: corrigido `<link rel="preload">` que apontava para `/public/android-chrome-512x512.png` (caminho invalido em Vite) — agora aponta para `/apple-touch-icon.png` e usa `fetchpriority="high"`.
- `src/components/Header.tsx`:
  - `AvatarImage` ajustado: `width`/`height` de 112 para 128 (casando com `h-32 w-32`), `decoding` de `async` para `sync` para evitar flash durante paint inicial.
  - Adicionada terceira chip "Growth" ao lado das existentes.
- `src/components/LinkButton.tsx`:
  - Quadrado do icone no hover: mantem fundo claro (`hsl(240,29%,97%)`) e icone escuro (`hsl(240,100%,8%)`), contrastando com o fundo navy do botao em hover.
  - `ArrowUpRight` no hover agora gira 45deg alem do translate diagonal existente.

## Impacto
- Avatar ~4x menor em bytes — reduz tempo de LCP em mobile.
- Chips do Header ficam melhor balanceadas em 3 itens (o espaco horizontal suporta bem; se em telas <360px quebrar em linha nova, e aceitavel).
- Hover dos botoes de link mais legivel e coerente com a proposta "inversao de cor para dar contraste".
- Nenhum token do design system foi alterado; nao foi necessario atualizar `design-system.md`.
- Proximos passos sugeridos: gerar versao `.webp` do avatar quando `cwebp` estiver disponivel para reducao adicional (~40%).
