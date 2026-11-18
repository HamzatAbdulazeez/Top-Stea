import PageHero from '../components/PageHero'
import CheckList from '../components/CheckList'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import FastTrack from '../sections/FastTrack'
import Mobilisation from '../sections/Mobilisation'
import CtaBand from '../sections/CtaBand'
import { assessment, parallel, manpowerPlanning, recovery } from '../data/site'

export default function Methodology() {
  return (
    <>
      <PageHero
        eyebrow="Fast-Track Methodology"
        title="Fast-Track Project Execution"
        text="Structured planning, work-front coordination, supervision, productivity monitoring and parallel execution."
        image="methodology"
        crumbs={[['Methodology']]}
      />
      <FastTrack />
      <Mobilisation />

      {/* Project assessment & work-front planning */}
      <section className="bg-white py-24">
        <div className="mx-auto Resizer px-6">
          <SectionHeading eyebrow="Planning" title={assessment.title} />
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal from="left" className="rounded-3xl bg-gold-50 p-8">
              <h3 className="mb-5 font-display text-xl font-bold text-gold-600">Documents Reviewed</h3>
              <CheckList items={assessment.documents} />
            </Reveal>
            <Reveal from="right" className="rounded-3xl bg-charcoal p-8 text-white">
              <h3 className="mb-3 font-display text-xl font-bold text-gold-300">Zone-Based Execution Framework</h3>
              <p className="text-white/80">{assessment.zoneText}</p>
              <ol className="mt-6 flex flex-wrap items-center gap-2">
                {assessment.chain.map((c, i) => (
                  <li key={c} className="flex items-center gap-2">
                    <span
                      style={{ animationDelay: `${i * 120}ms` }}
                      className="animate-pop rounded-full bg-gold px-4 py-1.5 text-sm font-bold"
                    >
                      {c}
                    </span>
                    {i < assessment.chain.length - 1 && <span className="text-gold-300">→</span>}
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm leading-relaxed text-white/70">{assessment.zoneNote}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Parallel execution */}
      <section className="bg-gold-50 py-24">
        <div className="mx-auto Resizer px-6">
          <SectionHeading eyebrow="Execution" title="Parallel Work-Front Execution" text={parallel.text} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {parallel.teams.map((t, i) => (
              <Reveal key={t} delay={(i % 4) * 100} from="zoom">
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-charcoal/5 transition hover:-translate-y-1 hover:shadow-xl">
                  <p className="font-display text-lg font-bold">{t}</p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-gold-100">
                    <span
                      className="block h-full animate-shimmer rounded-full bg-[linear-gradient(90deg,#B88F50,#e7d3ab,#B88F50)] [background-size:200%_100%]"
                      style={{ width: `${60 + ((i * 13) % 35)}%` }}
                    />
                  </div>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-gold">Running concurrently</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manpower planning */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal from="left">
            <SectionHeading center={false} eyebrow="Control" title={manpowerPlanning.title} text={manpowerPlanning.text} />
          </Reveal>
          <Reveal from="right" className="rounded-3xl border-l-8 border-gold bg-gold-50 p-8 text-lg font-semibold leading-relaxed">
            {manpowerPlanning.note}
          </Reveal>
        </div>
      </section>

      {/* Programme recovery */}
      <section className="bg-charcoal py-24 text-white">
        <div className="mx-auto Resizer px-6">
          <SectionHeading light eyebrow="Recovery" title={recovery.title} text={recovery.text} />
          <div className="grid gap-6 md:grid-cols-3">
            {recovery.items.map((r, i) => (
              <Reveal key={r.title} delay={i * 130}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-500 hover:-translate-y-2 hover:border-gold hover:bg-gold/15">
                  <span className="font-display text-5xl font-extrabold text-gold-300/60">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl font-bold">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{r.text}</p>
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
