import { Gauge, MousePointerClick, Trash2, Wifi, ShieldCheck, Cpu, Rocket, Undo2 } from 'lucide-react'
import Section from './Section'

const FEATURES = [
  { icon: Gauge, title: 'Mais FPS em jogos', text: 'Prioriza CPU e GPU para o jogo aberto e encerra o que rouba desempenho em segundo plano.' },
  { icon: MousePointerClick, title: 'Menos input lag', text: 'Ajusta temporizadores do sistema, mouse e teclado para resposta mais rápida.' },
  { icon: Wifi, title: 'Ping mais estável', text: 'Otimiza TCP/IP, DNS e adaptador de rede para reduzir latência e picos.' },
  { icon: Trash2, title: 'Limpeza profunda', text: 'Remove temporários, cache de atualizações, logs e arquivos inúteis do Windows.' },
  { icon: Rocket, title: 'Boot mais rápido', text: 'Gerencia programas e serviços da inicialização para o Windows ligar em menos tempo.' },
  { icon: Cpu, title: 'Plano de energia otimizado', text: 'Ativa um plano de desempenho máximo sem limitar clock do processador.' },
  { icon: ShieldCheck, title: 'Seguro e sem vírus', text: 'Não altera arquivos de jogos e não interfere em sistemas anti-cheat.' },
  { icon: Undo2, title: 'Tudo reversível', text: 'Ponto de restauração automático e botão para desfazer cada ajuste.' },
]

export default function Features() {
  return (
    <Section
      id="recursos"
      eyebrow="Recursos"
      title="Tudo que deixa seu PC mais rápido, em um só lugar"
      subtitle="Dezenas de ajustes que normalmente levariam horas, aplicados com segurança em poucos segundos."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <div key={title} className="reveal card p-5 transition-colors hover:border-brand/40">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/30">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-dim">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
