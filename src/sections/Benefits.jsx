import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { benefits } from '../data/site'

export default function Benefits() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Key Benefits" title={benefits.title} text={benefits.text} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.items.map((b, i) => (
            <Reveal key={b.title} delay={i * 120} from="zoom">
              <div className="group relative h-full overflow-hidden rounded-3xl border-t-4 border-gold bg-white p-8 shadow-lg ring-1 ring-charcoal/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <span className="font-display text-6xl font-extrabold text-gold/15 transition group-hover:text-gold/30">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{b.text}</p>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
