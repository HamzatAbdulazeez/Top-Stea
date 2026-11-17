import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { fastTrack } from '../data/site'

export default function FastTrack() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const items = fastTrack.principles

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive((a) => (a + 1) % items.length), 5000)
    return () => clearInterval(t)
  }, [paused, items.length, active])

  const current = items[active]

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Fast-Track Methodology" title="Fast-Track Project Execution" text={fastTrack.intro} />
        <h3 className="mb-8 text-center font-display text-xl font-bold text-gold">Our Fast-Track Principles</h3>

        <div
          className="grid gap-8 lg:grid-cols-5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Reveal from="left" className="space-y-3 lg:col-span-2">
            {items.map((p, i) => (
              <button
                key={p.n}
                onClick={() => setActive(i)}
                className={`relative flex w-full items-center gap-5 overflow-hidden rounded-2xl p-5 text-left transition-all duration-300 ${
                  i === active
                    ? 'translate-x-3 bg-gold text-white shadow-xl shadow-gold/30'
                    : 'bg-gold-50 text-charcoal hover:translate-x-1 hover:bg-gold-100'
                }`}
              >
                <span className={`font-display text-3xl font-extrabold ${i === active ? 'text-white/60' : 'text-gold/50'}`}>
                  {p.n}
                </span>
                <span className="font-display text-lg font-bold">{p.title}</span>
                {i === active && !paused && (
                  <span key={active} className="absolute bottom-0 left-0 h-1 animate-[progress_5s_linear_both] bg-white/70" />
                )}
              </button>
            ))}
          </Reveal>

          <Reveal from="right" className="lg:col-span-3">
            <div
              key={active}
              className="relative h-full min-h-[320px] animate-pop overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal to-charcoal-900 p-10 text-white shadow-2xl md:p-14"
            >
              <span className="absolute -right-4 -top-10 font-display text-[12rem] font-extrabold leading-none text-gold/15">
                {current.n}
              </span>
              <p className="relative font-display text-xs font-bold uppercase tracking-[0.35em] text-gold-300">
                Principle {current.n}
              </p>
              <h4 className="relative mt-4 font-display text-4xl font-bold md:text-5xl">{current.title}</h4>
              <span className="relative mt-6 block h-1 w-20 origin-left animate-draw rounded bg-gold" />
              <p className="relative mt-6 max-w-xl text-lg leading-relaxed text-white/85">{current.text}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
