import PageHero from '../components/PageHero'
import CheckList from '../components/CheckList'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../sections/CtaBand'
import { optionA, optionB, atAGlance } from '../data/site'

export default function Engagement() {
  return (
    <>
      <PageHero
        eyebrow="Engagement Models"
        title="Day-Rate or Project-Based"
        text="Rapid manpower reinforcement or full turnkey MEPF delivery."
        image="engagement"
        crumbs={[['Engagement']]}
      />

      {/* Option A */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Option A" title={optionA.title} text={optionA.text} />
          <Reveal className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-charcoal/10">
            <div className="grid grid-cols-5 bg-charcoal px-6 py-4 font-display text-xs font-bold uppercase tracking-widest text-gold-300">
              <span className="col-span-2">Category</span>
              <span className="col-span-3">Typical Personnel</span>
            </div>
            {optionA.categories.map(([cat, who], i) => (
              <div
                key={cat}
                className={`grid grid-cols-5 gap-4 px-6 py-4 transition hover:bg-gold-100 ${i % 2 ? 'bg-gold-50' : 'bg-white'}`}
              >
                <span className="col-span-2 font-display font-bold text-gold-600">{cat}</span>
                <span className="col-span-3 text-charcoal/80">{who}</span>
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-8 rounded-2xl border-l-8 border-gold bg-gold-50 p-6 text-charcoal/80">{optionA.note}</Reveal>
        </div>
      </section>

      {/* Option B */}
      <section className="bg-charcoal py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading light eyebrow="Option B" title={optionB.title} text={optionB.text} />
          <div className="grid gap-6 md:grid-cols-4">
            {optionB.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 150}>
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-500 hover:-translate-y-2 hover:border-gold hover:bg-gold/15">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gold font-display text-lg font-extrabold">{s.n}</span>
                  <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{s.text}</p>
                  {i < optionB.steps.length - 1 && (
                    <span className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-2xl text-gold md:block">→</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 rounded-2xl border border-gold/40 bg-gold/10 p-6 text-sm leading-relaxed text-white/85">
            {optionB.note}
          </Reveal>
        </div>
      </section>

      {/* At a glance */}
      <section className="bg-gold-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Compare" title="Engagement Options at a Glance" />
          <div className="grid gap-8 md:grid-cols-2">
            {atAGlance.map((o, i) => (
              <Reveal key={o.key} delay={i * 150} from={i ? 'right' : 'left'}>
                <div className="h-full rounded-3xl bg-white p-9 shadow-lg ring-1 ring-charcoal/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-gold">{o.key}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold">{o.title}</h3>
                  <p className="mt-3 text-charcoal/70">{o.text}</p>
                  <div className="mt-5">
                    <CheckList items={o.items} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
