import { CreditCard, KeyRound, Download, Zap } from 'lucide-react'
import Section from './Section'

const STEPS = [
  { icon: CreditCard, title: 'Escolha o plano', text: 'Diário, semanal, mensal ou anual. Pague por Pix ou cartão.' },
  { icon: KeyRound, title: 'Receba sua chave', text: 'A chave de licença chega logo após a confirmação do pagamento.' },
  { icon: Download, title: 'Baixe e ative', text: 'Instale o aplicativo, cole a chave e a licença é ativada na hora.' },
  { icon: Zap, title: 'Otimize', text: 'Clique em otimizar e aproveite. Reaplique quando quiser durante a licença.' },
]

export default function HowItWorks() {
  return (
    <Section id="como-funciona" eyebrow="Como funciona" title="Da compra ao PC otimizado em minutos">
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className="reveal card relative p-5">
            <span className="absolute top-4 right-5 font-mono text-4xl font-bold text-line">{i + 1}</span>
            <Icon className="h-6 w-6 text-brand" />
            <h3 className="mt-4 font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-dim">{text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
