import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { serviceModel } from '../data/site'
import { PATHS } from '../routes/paths'

export default function ServiceModel() {
  return (
    <section className="bg-gold-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Our Service Model" title="Two ways to work with TOP-STEA" text={serviceModel.intro} />
        <div className="grid gap-8 md:grid-cols-2">
          {serviceModel.models.map((m, i) => (
            <Reveal key={m.key} delay={i * 150} from={i ? 'right' : 'left'}>
              <Link
                to={PATHS.engagement}
                className="group relative block h-full overflow-hidden rounded-3xl bg-white p-10 shadow-sm ring-1 ring-charcoal/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-br from-gold to-gold-600 transition-transform duration-500 group-hover:scale-y-100" />
                <span className="relative font-display text-8xl font-extrabold text-gold/20 transition group-hover:text-white/25">
                  {m.key}
                </span>
                <h3 className="relative mt-2 font-display text-2xl font-bold transition group-hover:text-white">{m.title}</h3>
                <p className="relative mt-4 leading-relaxed text-charcoal/70 transition group-hover:text-white/90">{m.text}</p>
                <span className="relative mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-gold transition group-hover:text-white">
                  Learn more <span className="transition-transform group-hover:translate-x-2">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
