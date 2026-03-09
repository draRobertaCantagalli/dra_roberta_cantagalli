# Dra. Roberta Cantagalli - LP

Landing page em Next.js para captação de contatos via WhatsApp.

## Variáveis de Ambiente

Este projeto usa variáveis públicas (`NEXT_PUBLIC_*`) para configuração da LP e analytics.

1. Copie os valores de `/.env.example` para `/.env.local` no ambiente local.
2. Em produção (Vercel), configure as mesmas chaves em **Project Settings > Environment Variables**.

Variáveis utilizadas:

- `NEXT_PUBLIC_SITE_URL`: URL canônica do site (ex.: `https://www.drarobertacantagalli.com.br`)
- `NEXT_PUBLIC_GA_ID`: ID do GA4 (ex.: `G-NRZZSDFLEH`)
- `NEXT_PUBLIC_CTA_VARIANT`: variante do CTA (`A` ou `B`)

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```
