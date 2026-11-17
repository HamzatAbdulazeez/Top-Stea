import PageHero from '../components/PageHero'
import CheckList from '../components/CheckList'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../sections/CtaBand'
import { qa, hse, logistics, coordination, testingCommissioning, reporting } from '../data/site'

function Cards({ items, dark = false }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((c, i) => (
        <Reveal key={c.title} delay={i * 130} from="zoom">
          <div
            className={`h-full rounded-3xl p-8 transition duration-500 hover:-translate-y-2 ${
              dark
                ? 'border border-white/10 bg-white/5 hover:border-gold hover:bg-gold/15'
                : 'border-t-4 border-gold bg-white shadow-lg ring-1 ring-charcoal/5 hover:shadow-2xl'
            }`}
          >
            <span className="font-display text-5xl font-extrabold text-gold/40">0{i + 1}</span>
            <h3 className="mt-2 font-display text-xl font-bold">{c.title}</h3>
            <p className={`mt-3 text-sm leading-relaxed ${dark ? 'text-white/75' : 'text-charcoal/70'}`}>{c.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function QualityHse() {
  return (
    <>
      <PageHero
        eyebrow="Quality Assurance · Health, Safety & Environment"
        title="Quality & HSE"
        text="Acceleration without compromise: QA/QC and HSE built into every installation."
        image="quality"
        crumbs={[['Quality & HSE']]}
      />

      {/* QA/QC */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Quality Assurance" title={qa.title} text={qa.text} />
          <Reveal className="mb-12 rounded-3xl bg-gradient-to-br from-gold to-gold-600 p-8 text-center font-display text-xl font-bold text-white shadow-xl md:text-2xl">
            {qa.callout}
          </Reveal>
          <h3 className="mb-6 text-center font-display text-2xl font-bold">Quality Control Activities</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal from="left" className="rounded-3xl bg-gold-50 p-8">
              <h4 className="mb-5 font-display text-lg font-bold text-gold-600">Installation Checks</h4>
              <CheckList items={qa.installation} />
            </Reveal>
            <Reveal from="right" className="rounded-3xl bg-gold-50 p-8">
              <h4 className="mb-5 font-display text-lg font-bold text-gold-600">Testing Activities</h4>
              <CheckList items={qa.testing} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* HSE */}
      <section className="bg-charcoal py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading light eyebrow="Health, Safety & Environment" title={hse.title} text={hse.text} />
          <Cards items={hse.items} dark />
        </div>
      </section>

      {/* Material & logistics */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Logistics" title={logistics.title} text={logistics.text} />
          <Cards items={logistics.items} />
        </div>
      </section>

      {/* Drawing & technical coordination */}
      <section className="bg-gold-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Coordination" title={coordination.title} text={coordination.text} />
          <Reveal className="rounded-3xl border-l-8 border-gold bg-white p-8 text-lg font-semibold leading-relaxed shadow-lg">
            {coordination.callout}
          </Reveal>
        </div>
      </section>

      {/* Testing & commissioning */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Testing & Commissioning" title={testingCommissioning.title} text={testingCommissioning.text} />
          <div className="grid gap-8 md:grid-cols-2">
            {testingCommissioning.columns.map((c, i) => (
              <Reveal key={c.title} delay={i * 150} from={i ? 'right' : 'left'}>
                <div className="h-full rounded-3xl bg-charcoal p-9 text-white shadow-xl transition duration-500 hover:-translate-y-2">
                  <h3 className="mb-6 font-display text-xl font-bold text-gold-300">{c.title}</h3>
                  <CheckList items={c.items} light />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="bg-gold-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Project Control" title={reporting.title} text={reporting.text} />
          <div className="grid gap-6 md:grid-cols-3">
            {reporting.columns.map((c, i) => (
              <Reveal key={c.title} delay={i * 130} from="zoom">
                <div className="h-full rounded-3xl border-t-4 border-gold bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <h3 className="mb-5 font-display text-xl font-bold">{c.title}</h3>
                  <CheckList items={c.items} />
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
