import ArrowMark from '../components/ArrowMark'
import Counter from '../components/Counter'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { workforce } from '../data/site'

export default function WorkforceStats() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-white">
      <ArrowMark className="absolute -right-24 top-0 h-[28rem] w-[28rem] text-gold/10" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading light eyebrow="Technical Capacity" title={workforce.title} text={workforce.text} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workforce.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-gold hover:bg-gold/15">
                <p className="font-display text-6xl font-extrabold text-gold-300 transition group-hover:scale-110">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 font-display text-sm font-bold uppercase tracking-widest">{s.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <p className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold/40 bg-gold/10 p-6 text-center text-sm leading-relaxed text-white/85">
            <span className="font-display font-bold text-gold-300">Scalable workforce deployment: </span>
            {workforce.scalableNote}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
