import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const LINKS = [
  { href: '#demo', label: 'Demonstração' },
  { href: '#recursos', label: 'Recursos' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#planos', label: 'Planos' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-lg' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <ul className="hidden items-center gap-7 text-sm text-dim md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#planos" className="btn-primary hidden !py-2 text-sm md:inline-flex">Comprar licença</a>
        <button
          className="rounded-lg p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="space-y-1 px-4 pb-4 md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-dim hover:bg-panel hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href="#planos" onClick={() => setOpen(false)} className="btn-primary w-full">Comprar licença</a>
          </li>
        </ul>
      )}
    </header>
  )
}
