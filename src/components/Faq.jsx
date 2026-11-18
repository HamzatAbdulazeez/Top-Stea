import { useState } from 'react'

export default function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className={`overflow-hidden rounded-2xl border transition ${isOpen ? 'border-gold bg-gold-50' : 'border-charcoal/10 bg-white'}`}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display font-bold"
            >
              {f.q}
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold text-lg text-white transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            <div className={`grid transition-all duration-500 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="px-6 pb-5 leading-relaxed text-charcoal/75">{f.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
