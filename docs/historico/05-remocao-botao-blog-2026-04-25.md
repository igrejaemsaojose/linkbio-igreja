# Remocao do botao "Blog" da lista de links

- **Data:** 2026-04-25
- **Autor:** Claude
- **Escopo:** conteudo

## Contexto / Motivacao
Cristian solicitou a remocao do botao "Blog" da pagina principal. O link nao deve mais aparecer entre os CTAs.

## O que mudou
- `src/config/links.ts`: removida a entrada `biblioteca-materiais` ("Blog" -> `https://blog-cristian-two.vercel.app`).

## Impacto
- A pagina passa a exibir 5 botoes (Servicos, WhatsApp, LinkedIn, Instagram, GitHub) em vez de 6.
- Nenhum componente, token ou rota foi alterado.
- Sem impacto em arquitetura ou design system.
