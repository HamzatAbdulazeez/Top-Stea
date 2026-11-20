import { Link } from 'react-router-dom'
import CldImage from '../components/CldImage'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { divisions } from '../data/moreServices'
import { PATHS } from '../routes/paths'

export default function Divisions() {
  return (
    <section className="bg-gold-50 py-24">
      <div className="mx-auto Resizer px-6">
        <SectionHeading
          eyebrow="Building inspiring spaces"
          title="Our value is delivered through multiple divisions"
          text="We complete work to a high standard while staying within deadlines and budgets, using only quality materials."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {divisions.map((d, i) => (
            <Reveal key={d.title} delay={(i % 4) * 90}>
              <Link
                to={PATHS.service(d.to)}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-charcoal/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <CldImage name={d.image} w={700} className="aspect-[16/10]" imgClassName="transition duration-700 group-hover:scale-110" />
                <div className="flex flex-1 flex-col border-t-4 border-gold p-6">
                  <h3 className="font-display text-lg font-bold leading-snug text-charcoal transition group-hover:text-gold">{d.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">{d.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-gold">
                    Read more <span className="transition-transform group-hover:translate-x-2">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
