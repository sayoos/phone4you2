import { Check } from 'lucide-react'
import Section from './Section'
import { PLANS, PLAN_FEATURES, formatBRL, checkoutLink } from '../config'

export default function Pricing() {
  const daily = PLANS.find((p) => p.days === 1)?.price
  return (
    <Section
      id="planos"
      eyebrow="Planos"
      title="Escolha a licença ideal para você"
      subtitle="Todos os planos liberam o aplicativo completo. A diferença é só o tempo de acesso."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((p) => {
          const perDay = p.price / p.days
          const saving = daily && p.days > 1 ? Math.round((1 - perDay / daily) * 100) : 0
          const featured = p.id === 'mensal'
          return (
            <div
              key={p.id}
              className={`reveal card relative flex flex-col p-6 ${
                featured ? 'border-brand/60 shadow-xl shadow-brand/10 ring-1 ring-brand/40' : ''
              }`}
            >
              {p.highlight && (
                <span className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-bold ${
                  featured ? 'bg-brand text-bg' : 'bg-brand-2 text-white'
                }`}>
                  {p.highlight}
                </span>
              )}
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-sm text-dim">{p.description}</p>
              <div className="mt-5">
                <span className="text-4xl font-extrabold tracking-tight">{formatBRL(p.price)}</span>
                <p className="mt-1 text-sm text-dim">acesso por {p.period}</p>
              </div>
              <p className="mt-3 h-5 text-xs">
                {p.days > 1 && (
                  <>
                    <span className="text-dim">{formatBRL(perDay)}/dia</span>
                    {saving > 0 && <span className="ml-2 font-bold text-good">economize {saving}%</span>}
                  </>
                )}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm">
                {PLAN_FEATURES.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> <span className="text-dim">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={checkoutLink(p)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${featured ? 'btn-primary' : 'btn-ghost'} mt-6 w-full`}
              >
                Comprar {p.name.toLowerCase()}
              </a>
            </div>
          )
        })}
      </div>
      <p className="reveal mt-8 text-center text-sm text-dim">
        Pagamento por Pix ou cartão · Licença válida para 1 computador · Sem renovação automática
      </p>
    </Section>
  )
}
