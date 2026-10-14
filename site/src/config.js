// ============================================================
//  CONFIGURAÇÃO DO SITE — edite aqui nome, preços e links.
// ============================================================

export const SITE = {
  name: 'VoltBoost',
  tagline: 'Otimizador de PC',
  // Link do instalador (ex.: Google Drive, Mega, GitHub Releases)
  downloadUrl: '#',
  // WhatsApp para suporte / vendas (somente números, com DDI + DDD)
  whatsapp: '5511999999999',
  discord: '#',
  email: 'contato@seudominio.com',
}

// checkoutUrl: cole o link de pagamento de cada plano (Mercado Pago,
// Stripe, Kiwify, Hotmart etc.). Se ficar vazio, o botão abre o
// WhatsApp com uma mensagem pronta pedindo aquele plano.
export const PLANS = [
  {
    id: 'diaria',
    name: 'Diária',
    period: '24 horas',
    price: 4.9,
    days: 1,
    description: 'Teste completo por um dia.',
    checkoutUrl: '',
  },
  {
    id: 'semanal',
    name: 'Semanal',
    period: '7 dias',
    price: 14.9,
    days: 7,
    description: 'Ideal para um campeonato ou fim de semana.',
    checkoutUrl: '',
  },
  {
    id: 'mensal',
    name: 'Mensal',
    period: '30 dias',
    price: 29.9,
    days: 30,
    description: 'O plano mais escolhido.',
    highlight: 'Mais popular',
    checkoutUrl: '',
  },
  {
    id: 'anual',
    name: 'Anual',
    period: '365 dias',
    price: 199.9,
    days: 365,
    description: 'Melhor custo-benefício.',
    highlight: 'Melhor preço',
    checkoutUrl: '',
  },
]

export const PLAN_FEATURES = [
  'Todos os módulos de otimização',
  'Otimização com 1 clique',
  'Ponto de restauração automático',
  'Atualizações durante a licença',
  'Suporte via Discord/WhatsApp',
]

// Números exibidos na seção de resultados. SUBSTITUA pelos valores dos seus testes.
export const BENCHMARK_SETUP =
  'Exemplo de teste em PC intermediário, mesmas configurações gráficas antes e depois.'

export const BENCHMARKS = [
  { game: 'Valorant', before: 180, after: 245 },
  { game: 'Fortnite', before: 120, after: 168 },
  { game: 'CS2', before: 210, after: 282 },
  { game: 'Warzone', before: 85, after: 112 },
]

export const formatBRL = (v) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export const checkoutLink = (plan) =>
  plan.checkoutUrl ||
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Olá! Quero comprar a licença ${plan.name} do ${SITE.name} (${formatBRL(plan.price)}).`
  )}`
