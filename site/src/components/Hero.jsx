import { useEffect, useState } from 'react'
import { ArrowRight, Play, ShieldCheck, Cpu, MemoryStick, Gauge, Activity } from 'lucide-react'
import { SITE } from '../config'

function useTicker(base, spread, ms = 900) {
  const [v, setV] = useState(base)
  useEffect(() => {
    const t = setInterval(() => setV(base + Math.round((Math.random() - 0.5) * spread)), ms)
    return () => clearInterval(t)
  }, [base, spread, ms])
  return v
}

function Meter({ icon: Icon, label, value, unit, pct, color }) {
  return (
    <div className="rounded-xl border border-line bg-bg/60 p-3">
      <div className="flex items-center gap-2 text-xs text-dim">
        <Icon className="h-3.5 w-3.5" /> {label}
      </div>
      <div className="mt-1 font-mono text-xl font-bold">
        {value}<span className="ml-0.5 text-xs text-dim">{unit}</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  )
}

function AppMockup() {
  const fps = useTicker(244, 10)
  const cpu = useTicker(23, 6)
  const ram = useTicker(41, 4, 1400)
  const ping = useTicker(12, 3, 1200)

  return (
    <div className="card animate-float relative overflow-hidden p-4 shadow-2xl shadow-brand/10 sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-bad/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-warn/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-good/80" />
        </div>
        <span className="font-mono text-[11px] text-dim">{SITE.name}.exe</span>
      </div>

      <div className="mb-4 flex items-center gap-4 rounded-xl border border-good/30 bg-good/5 p-4">
        <div className="relative grid h-16 w-16 shrink-0 place-items-center">
          <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#1f2840" strokeWidth="3" />
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#34d399" strokeWidth="3"
              strokeDasharray="97.4" strokeDashoffset="5" strokeLinecap="round" />
          </svg>
          <span className="font-mono text-lg font-bold text-good">95</span>
        </div>
        <div>
          <p className="text-sm font-bold">Sistema otimizado</p>
          <p className="text-xs text-dim">38 ajustes aplicados · 4,2 GB liberados</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Meter icon={Gauge} label="FPS" value={fps} unit="" pct={86} color="#22d3ee" />
        <Meter icon={Cpu} label="CPU" value={cpu} unit="%" pct={cpu} color="#8b5cf6" />
        <Meter icon={MemoryStick} label="RAM" value={ram} unit="%" pct={ram} color="#34d399" />
        <Meter icon={Activity} label="Ping" value={ping} unit="ms" pct={ping * 3} color="#fbbf24" />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-32 pb-20 sm:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] max-w-full -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs text-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-good" /> Windows 10 e 11 · 64 bits
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Seu PC no <span className="text-gradient">máximo desempenho</span> com um clique.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-dim">
            O {SITE.name} limpa, ajusta e prioriza o Windows para jogos e trabalho pesado:
            mais FPS, menos travadas e menor input lag, sem precisar entender de configurações.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#planos" className="btn-primary">
              Ver planos <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#demo" className="btn-ghost">
              <Play className="h-4 w-4" /> Testar a demonstração
            </a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-dim">
            <ShieldCheck className="h-4 w-4 text-good" />
            Cria um ponto de restauração antes de qualquer alteração.
          </p>
        </div>

        <div className="reveal mx-auto w-full max-w-md lg:max-w-none">
          <AppMockup />
        </div>
      </div>
    </section>
  )
}
