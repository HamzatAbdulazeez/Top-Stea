import { Link } from 'react-router-dom'
import CldImage from '../components/CldImage'
import ArrowMark from '../components/ArrowMark'
import Reveal from '../components/Reveal'
import { cta } from '../data/site'
import { PATHS } from '../routes/paths'

export default function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal py-24 text-white">
      <CldImage name="cta" className="absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-charcoal-900/95 via-charcoal/90 to-gold-700/80" />
      <ArrowMark className="absolute -left-16 bottom-0 -z-10 h-80 w-80 animate-float text-gold/20" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-gold-300">
            <span className="h-0.5 w-8 bg-current" /> Get started
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold md:text-6xl">{cta.title}</h2>
          {cta.text.map((p) => (
            <p key={p} className="mt-5 leading-relaxed text-white/80">
              {p}
            </p>
          ))}
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cta.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 150}>
              <div className="group h-full rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-gold hover:bg-white/15">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold font-display font-extrabold">{i + 1}</span>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-12 text-center">
          <Link
            to={PATHS.contact}
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-10 py-4 font-display text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-gold/30 transition hover:-translate-y-1 hover:bg-white hover:text-charcoal"
          >
            Submit Your Scope <span className="transition-transform group-hover:translate-x-1.5">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
