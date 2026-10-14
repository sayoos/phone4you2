export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-20 px-4 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <div className="reveal mx-auto mb-12 max-w-2xl text-center">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-4 text-dim">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
