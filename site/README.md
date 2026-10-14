# Site de vendas — Otimizador de PC

Landing page (React + Vite + Tailwind) para apresentar e vender licenças do otimizador:
demonstração interativa, recursos, resultados, planos (diária, semanal, mensal, anual) e FAQ.

## Rodar

```bash
cd site
npm install
npm run dev      # http://localhost:5173
npm run build    # gera site/dist
```

## Personalizar

Quase tudo fica em `src/config.js`:

- `SITE`: nome do produto, WhatsApp, Discord, e-mail, link de download
- `PLANS`: preço de cada licença e `checkoutUrl` (link de pagamento do Mercado Pago, Stripe, Kiwify etc.).
  Sem link, o botão abre o WhatsApp com uma mensagem pronta pedindo aquele plano.
- `BENCHMARKS`: FPS antes/depois exibidos na seção de resultados (coloque os números dos seus testes)

Textos das seções ficam em `src/components/` (ex.: perguntas em `Faq.jsx`).

## Deploy na Vercel

Importe o repositório e defina **Root Directory = `site`**. O `vercel.json` já está incluído.
