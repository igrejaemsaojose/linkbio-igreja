# Atualizacao da URL do botao Servicos para dominio proprio

- **Data:** 2026-04-25
- **Autor:** Claude
- **Escopo:** conteudo

## Contexto / Motivacao
A landing page de servicos passou a ser servida pelo dominio proprio `lp.crdornelles.com` em vez do dominio padrao do Vercel.

## O que mudou
- `src/config/links.ts`: URL do CTA "Servicos" alterada de `https://lp-cristian.vercel.app` para `https://lp.crdornelles.com`.

## Impacto
- Botao "Servicos" passa a apontar para o subdominio oficial.
- Sem alteracoes em layout, componentes, tokens ou rotas.
