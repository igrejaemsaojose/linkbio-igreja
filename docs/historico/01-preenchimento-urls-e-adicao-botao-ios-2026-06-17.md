# Preenchimento das URLs reais e adição do botão iOS

- **Data:** 2026-06-17
- **Autor:** Claude
- **Escopo:** conteudo

## Contexto / Motivacao

URLs dos botões foram obtidas a partir do Linktree atual da igreja (linktr.ee/igrejaemsaojose).
O app Pão de Judah existe nas duas lojas, então foi adicionado um quarto botão para a App Store (iOS),
com a URL localizada via site oficial do Pão de Judah (id1229503159).

## O que mudou

- `index.html` — substituídas as 3 URLs placeholder pelos links reais:
  - WhatsApp: `api.whatsapp.com/send/?phone=5548999995841...`
  - YouTube: `youtube.com/@igrejaemsaojose`
  - Play Store: `play.google.com/store/apps/details?id=br.com.paodejuda.app`
- `index.html` — adicionado 4º botão "App iOS — Pão de Judah":
  - App Store: `apps.apple.com/br/app/id1229503159`
- Labels dos botões atualizados: "Fale Conosco", "Canal no YouTube",
  "App Android — Pão de Judah", "App iOS — Pão de Judah".

## Impacto

- Página agora tem 4 botões funcionais com URLs reais.
- Nenhuma dependência nova introduzida.
- Validar os links em produção após o deploy (Fase 3 do plano).
