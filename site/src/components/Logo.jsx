import { Zap } from 'lucide-react'
import { SITE } from '../config'

export default function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 ring-1 ring-brand/40">
        <Zap className="h-4 w-4 fill-brand text-brand" />
      </span>
      <span className="text-lg">{SITE.name}</span>
    </a>
  )
}
