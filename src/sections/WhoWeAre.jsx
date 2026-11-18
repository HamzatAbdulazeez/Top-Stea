import { Link } from 'react-router-dom'
import CldImage from '../components/CldImage'
import ArrowMark from '../components/ArrowMark'
import Reveal from '../components/Reveal'
import { company, whoWeAre, sectors } from '../data/site'
import { PATHS } from '../routes/paths'

export default function WhoWeAre({ showLink = true }) {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <ArrowMark className="absolute -left-20 top-10 h-96 w-96 text-gold/5" />
      <div className="relative mx-auto grid Resizer items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal from="left" className="relative">
          <CldImage name="about" className="aspect-[4/5] rounded-[2rem] shadow-2xl" imgClassName="transition duration-700 hover:scale-105" />
          <CldImage
            name="aboutSecondary"
            className="absolute -bottom-8 -right-4 hidden h-44 w-56 rounded-2xl border-8 border-white shadow-xl md:block"
          />
          <div className="absolute -left-4 top-8 rounded-2xl bg-gold px-6 py-4 text-white shadow-xl animate-float">
            <p className="font-display text-xs font-bold uppercase tracking-widest">{company.tagline}</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-gold">
              <span className="h-0.5 w-8 bg-current" />
              Who We Are
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
              Engineering and technical services, <span className="text-gold">built for speed.</span>
            </h2>
          </Reveal>
          {whoWeAre.map((p, i) => (
            <Reveal key={i} delay={150 + i * 120}>
              <p className="mt-5 leading-relaxed text-charcoal/75">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={550} className="mt-7 flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-gold/40 bg-gold-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-600 transition hover:-translate-y-0.5 hover:bg-gold hover:text-white"
              >
                {s}
              </span>
            ))}
          </Reveal>
          {showLink && (
            <Reveal delay={650} className="mt-9">
              <Link
                to={PATHS.about}
                className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-1 hover:bg-gold"
              >
                More about us <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
