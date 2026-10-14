import { MessageCircle, Mail, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { SITE } from '../config'

export default function Footer() {
  return (
    <footer className="border-t border-line px-4">
      <div className="reveal mx-auto -mt-px max-w-6xl py-16 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Pronto para <span className="text-gradient">acelerar seu PC</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-dim">Comece com a licença diária e veja a diferença você mesmo.</p>
        <a href="#planos" className="btn-primary mt-8">Ver planos <ArrowRight className="h-4 w-4" /></a>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-line py-8 text-sm text-dim sm:flex-row">
        <Logo />
        <div className="flex flex-wrap justify-center gap-5">
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-ink">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a href={SITE.discord} className="hover:text-ink">Discord</a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-ink">
            <Mail className="h-4 w-4" /> {SITE.email}
          </a>
        </div>
        <p>© {new Date().getFullYear()} {SITE.name}</p>
      </div>
    </footer>
  )
}
