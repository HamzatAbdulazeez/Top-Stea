import { Link } from 'react-router-dom'
import CldImage from '../components/CldImage'
import Reveal from '../components/Reveal'
import { company, whoWeAre, whoWeAreExtended, sectors } from '../data/site'
import { PATHS } from '../routes/paths'

export default function WhoWeAre({ extended = false }) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid Resizer items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-gold">
              <span className="h-0.5 w-8 bg-current" />
              About TOP-STEA
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-[2.6rem]">
              <span className="text-gold">Excellence</span> in HVAC, Fire Protection, Plumbing and Electrical Installation
            </h2>
            <span className="mt-5 block h-1 w-20 rounded bg-gold" />
          </Reveal>
          {whoWeAre.map((p, i) => (
            <Reveal key={i} delay={120 + i * 100}>
              <p className="mt-5 leading-relaxed text-charcoal/75">{p}</p>
            </Reveal>
          ))}
          {extended && (
            <Reveal delay={450}>
              <p className="mt-5 leading-relaxed text-charcoal/75">{whoWeAreExtended}</p>
            </Reveal>
          )}
          <Reveal delay={500} className="mt-7 flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span key={s} className="rounded-full border border-gold/40 bg-gold-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-600">
                {s}
              </span>
            ))}
          </Reveal>
          <Reveal delay={600} className="mt-9 flex flex-wrap gap-4">
            <Link
              to={PATHS.contact}
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-gold/30 transition hover:-translate-y-1 hover:bg-charcoal"
            >
              Contact Us <span className="transition-transform group-hover:translate-x-1.5">→</span>
            </Link>
            <Link
              to={PATHS.services}
              className="inline-flex items-center rounded-full border-2 border-charcoal px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-charcoal transition hover:-translate-y-1 hover:bg-charcoal hover:text-white"
            >
              Our Services
            </Link>
          </Reveal>
        </div>

        <Reveal from="right" className="relative">
          <CldImage name="about" w={1200} className="aspect-[4/3] rounded-3xl shadow-2xl lg:aspect-[5/6]" imgClassName="transition duration-700 hover:scale-105" />
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-charcoal px-6 py-5 text-white shadow-xl md:right-auto md:max-w-xs">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-gold-300">{company.tagline}</p>
            <p className="mt-1 text-sm text-white/80">One accountable team from manpower supply to full project execution.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
