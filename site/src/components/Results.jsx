import Section from './Section'
import { BENCHMARKS, BENCHMARK_SETUP } from '../config'

export default function Results() {
  const max = Math.max(...BENCHMARKS.map((b) => b.after))
  return (
    <Section
      id="resultados"
      eyebrow="Resultados"
      title="FPS médio antes e depois"
      subtitle={BENCHMARK_SETUP}
    >
      <div className="reveal card mx-auto max-w-3xl p-6 sm:p-8">
        <div className="mb-6 flex flex-wrap gap-5 text-sm">
          <span className="flex items-center gap-2 text-dim"><span className="h-3 w-3 rounded-sm bg-dim/40" /> Antes</span>
          <span className="flex items-center gap-2 text-dim"><span className="h-3 w-3 rounded-sm bg-brand" /> Depois</span>
        </div>
        <div className="space-y-6">
          {BENCHMARKS.map((b) => {
            const gain = Math.round(((b.after - b.before) / b.before) * 100)
            return (
              <div key={b.game}>
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="font-semibold">{b.game}</span>
                  <span className="font-mono text-sm font-bold text-good">+{gain}%</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <div className="h-3 rounded-full bg-dim/40" style={{ width: `${(b.before / max) * 85}%` }} />
                    <span className="font-mono text-xs text-dim">{b.before}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-3 rounded-full bg-gradient-to-r from-brand to-brand-2" style={{ width: `${(b.after / max) * 85}%` }} />
                    <span className="font-mono text-xs font-bold">{b.after}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <p className="mt-8 text-xs text-dim">
          Os resultados variam de acordo com o hardware e o estado do sistema. PCs com muitos programas em segundo plano costumam ter os maiores ganhos.
        </p>
      </div>
    </Section>
  )
}
