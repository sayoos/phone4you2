import { ChevronDown } from 'lucide-react'
import Section from './Section'
import { SITE } from '../config'

const FAQ = [
  { q: 'É seguro? Pode estragar meu Windows?', a: `Antes de qualquer alteração o ${SITE.name} cria um ponto de restauração do Windows. Todos os ajustes podem ser desfeitos pelo próprio aplicativo com um clique.` },
  { q: 'Pode dar ban em jogos?', a: 'Não. O aplicativo ajusta apenas configurações do sistema operacional. Ele não injeta nada, não altera arquivos de jogos e não interage com anti-cheats.' },
  { q: 'Como recebo a licença?', a: 'Após a confirmação do pagamento você recebe uma chave de ativação. Basta colar a chave no aplicativo para liberar o acesso.' },
  { q: 'Quando a licença começa a contar?', a: 'A contagem começa no momento em que você ativa a chave no aplicativo, não na hora da compra.' },
  { q: 'O que acontece quando a licença expira?', a: 'O aplicativo deixa de aplicar novas otimizações até você renovar. As otimizações já aplicadas continuam no seu PC.' },
  { q: 'Posso usar em mais de um computador?', a: 'Cada licença vale para 1 computador por vez. Se trocar de PC, fale com o suporte para transferir a licença.' },
  { q: 'Quais os requisitos?', a: 'Windows 10 ou 11 (64 bits), permissões de administrador e conexão com a internet para ativar a licença.' },
  { q: 'Funciona em notebook?', a: 'Sim. Em notebooks recomendamos usar conectado à tomada para aproveitar o plano de energia de desempenho máximo.' },
]

export default function Faq() {
  return (
    <Section id="faq" eyebrow="Dúvidas" title="Perguntas frequentes">
      <div className="mx-auto max-w-3xl space-y-3">
        {FAQ.map(({ q, a }) => (
          <details key={q} className="reveal card group px-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold">
              {q}
              <ChevronDown className="h-4 w-4 shrink-0 text-dim transition-transform group-open:rotate-180" />
            </summary>
            <p className="pb-5 text-sm leading-relaxed text-dim">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
