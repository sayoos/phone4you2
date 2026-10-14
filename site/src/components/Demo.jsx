import { useEffect, useRef, useState } from 'react'
import {
  Trash2, Rocket, Server, BatteryCharging, Wifi, Gamepad2, Sparkles,
  Check, Loader2, RotateCcw, ScanSearch, Zap,
} from 'lucide-react'
import Section from './Section'

const MODULES = [
  { id: 'temp', icon: Trash2, name: 'Arquivos temporários e cache', found: '3,8 GB encontrados', fix: '3,8 GB liberados' },
  { id: 'startup', icon: Rocket, name: 'Programas na inicialização', found: '9 programas lentos', fix: '9 programas adiados' },
  { id: 'services', icon: Server, name: 'Serviços em segundo plano', found: '14 serviços desnecessários', fix: '14 serviços desativados' },
  { id: 'power', icon: BatteryCharging, name: 'Plano de energia', found: 'Modo "Equilibrado" ativo', fix: 'Desempenho máximo ativado' },
  { id: 'network', icon: Wifi, name: 'Rede e latência', found: 'Limitação de rede ativa', fix: 'TCP e DNS otimizados' },
  { id: 'gpu', icon: Gamepad2, name: 'Prioridade de jogos e GPU', found: 'Agendamento padrão', fix: 'Modo jogo + GPU priorizada' },
  { id: 'visual', icon: Sparkles, name: 'Efeitos visuais do Windows', found: '11 efeitos pesados', fix: 'Efeitos ajustados' },
]

const METRICS = [
  { label: 'FPS médio', before: 162, after: 214, unit: '', better: 'up' },
  { label: 'Tempo de boot', before: 48, after: 21, unit: 's', better: 'down' },
  { label: 'RAM em uso', before: 68, after: 41, unit: '%', better: 'down' },
  { label: 'Ping', before: 34, after: 19, unit: 'ms', better: 'down' },
]

const STEP_MS = 650

export default function Demo() {
  // idle -> scanning -> review -> optimizing -> done
  const [phase, setPhase] = useState('idle')
  const [progress, setProgress] = useState(0) // módulos processados
  const [selected, setSelected] = useState(() => new Set(MODULES.map((m) => m.id)))
  const timer = useRef()

  useEffect(() => () => clearInterval(timer.current), [])

  const run = (nextPhase, endPhase, total) => {
    setPhase(nextPhase)
    setProgress(0)
    let i = 0
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      i += 1
      setProgress(i)
      if (i >= total) {
        clearInterval(timer.current)
        setTimeout(() => setPhase(endPhase), 350)
      }
    }, STEP_MS)
  }

  const chosen = MODULES.filter((m) => selected.has(m.id))
  const toggle = (id) =>
    setSelected((s) => {
      const n = new Set(s)
      n.has(id) ? n.delete(id) : n.add(id)
      return n
    })
  const reset = () => {
    clearInterval(timer.current)
    setPhase('idle')
    setProgress(0)
    setSelected(new Set(MODULES.map((m) => m.id)))
  }

  const ratio = chosen.length / MODULES.length
  const list = phase === 'optimizing' || phase === 'done' ? chosen : MODULES
  const total = list.length
  const pct = phase === 'idle' ? 0 : phase === 'review' || phase === 'done' ? 100 : Math.round((progress / total) * 100)

  return (
    <Section
      id="demo"
      eyebrow="Demonstração interativa"
      title="Veja como a otimização funciona"
      subtitle="Simule o processo do aplicativo: ele analisa o sistema, mostra o que encontrou e você escolhe o que otimizar."
    >
      <div className="reveal card mx-auto max-w-4xl overflow-hidden">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-4 border-b border-line p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold">
              {{
                idle: 'Pronto para analisar',
                scanning: 'Analisando o sistema…',
                review: `${MODULES.length} pontos de melhoria encontrados`,
                optimizing: 'Aplicando otimizações…',
                done: 'Otimização concluída',
              }[phase]}
            </p>
            <p className="text-sm text-dim">
              {phase === 'review'
                ? 'Desmarque o que não quiser alterar.'
                : phase === 'done'
                  ? 'Ponto de restauração criado. Tudo pode ser desfeito.'
                  : 'Simulação. Nenhuma alteração é feita no seu computador.'}
            </p>
          </div>

          {phase === 'idle' && (
            <button className="btn-primary" onClick={() => run('scanning', 'review', MODULES.length)}>
              <ScanSearch className="h-4 w-4" /> Analisar PC
            </button>
          )}
          {phase === 'review' && (
            <button className="btn-primary" disabled={!chosen.length} onClick={() => run('optimizing', 'done', chosen.length)}>
              <Zap className="h-4 w-4" /> Otimizar ({chosen.length})
            </button>
          )}
          {phase === 'done' && (
            <button className="btn-ghost" onClick={reset}>
              <RotateCcw className="h-4 w-4" /> Refazer
            </button>
          )}
          {(phase === 'scanning' || phase === 'optimizing') && (
            <span className="font-mono text-2xl font-bold text-brand">{pct}%</span>
          )}
        </div>

        {/* Barra de progresso */}
        <div className="relative h-1 overflow-hidden bg-line">
          <div
            className={`h-full transition-all duration-500 ${phase === 'done' ? 'bg-good' : 'bg-brand'}`}
            style={{ width: `${pct}%` }}
          />
          {(phase === 'scanning' || phase === 'optimizing') && (
            <div className="scan-line absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          )}
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr]">
          {/* Lista de módulos */}
          <ul className="divide-y divide-line">
            {list.map((m, idx) => {
              const Icon = m.icon
              const busy = phase === 'scanning' || phase === 'optimizing'
              const processed = phase === 'review' || phase === 'done' || (busy && idx < progress)
              const active = busy && idx === progress
              const checked = selected.has(m.id)
              const status =
                phase === 'idle' ? 'Aguardando'
                  : !processed ? (active ? (phase === 'scanning' ? 'Verificando…' : 'Aplicando…') : 'Na fila')
                  : phase === 'scanning' || phase === 'review' ? m.found
                  : m.fix

              return (
                <li key={m.id} className={`flex items-center gap-4 px-5 py-3.5 transition-colors ${active ? 'bg-brand/5' : ''}`}>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ring-1 ${
                    phase === 'done' ? 'bg-good/10 text-good ring-good/30'
                      : processed && phase !== 'optimizing' ? 'bg-warn/10 text-warn ring-warn/30'
                      : processed ? 'bg-good/10 text-good ring-good/30'
                      : 'bg-panel text-dim ring-line'
                  }`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{m.name}</p>
                    <p className={`truncate text-xs ${
                      phase === 'done' || (phase === 'optimizing' && processed) ? 'text-good'
                        : processed ? 'text-warn' : 'text-dim'
                    }`}>{status}</p>
                  </div>
                  {active && <Loader2 className="h-4 w-4 animate-spin text-brand" />}
                  {phase === 'review' && (
                    <button
                      role="checkbox"
                      aria-checked={checked}
                      aria-label={`Otimizar ${m.name}`}
                      onClick={() => toggle(m.id)}
                      className={`grid h-6 w-6 place-items-center rounded-md border transition-colors ${
                        checked ? 'border-brand bg-brand text-bg' : 'border-line'
                      }`}
                    >
                      {checked && <Check className="h-4 w-4" strokeWidth={3} />}
                    </button>
                  )}
                  {(phase === 'done' || (phase === 'optimizing' && processed)) && <Check className="h-4 w-4 text-good" />}
                </li>
              )
            })}
          </ul>

          {/* Antes x depois */}
          <div className="border-t border-line bg-bg/40 p-5 lg:border-t-0 lg:border-l">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-dim">
              {phase === 'done' ? 'Antes → Depois' : 'Situação atual'}
            </p>
            <div className="space-y-4">
              {METRICS.map((mt) => {
                const after = Math.round(mt.before + (mt.after - mt.before) * ratio)
                const show = phase === 'done'
                const diff = Math.round((Math.abs(after - mt.before) / mt.before) * 100)
                return (
                  <div key={mt.label}>
                    <div className="flex items-baseline justify-between text-sm">
                      <span className="text-dim">{mt.label}</span>
                      <span className="font-mono font-bold">
                        {phase === 'idle' || phase === 'scanning' ? (
                          <span className="text-dim">—</span>
                        ) : show ? (
                          <>
                            <span className="text-dim line-through decoration-1">{mt.before}{mt.unit}</span>{' '}
                            <span className="text-good">{after}{mt.unit}</span>
                          </>
                        ) : (
                          <span className="text-warn">{mt.before}{mt.unit}</span>
                        )}
                      </span>
                    </div>
                    {show && diff > 0 && (
                      <p className="mt-0.5 text-right text-xs text-good">
                        {mt.better === 'up' ? '+' : '−'}{diff}%
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
            {phase === 'done' && (
              <a href="#planos" className="btn-primary mt-6 w-full">Quero isso no meu PC</a>
            )}
            <p className="mt-6 text-[11px] leading-relaxed text-dim">
              Valores ilustrativos. O ganho real varia conforme hardware, drivers e estado do sistema.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
