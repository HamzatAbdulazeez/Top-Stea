import PageHero from '../components/PageHero'
import CoreServices from '../sections/CoreServices'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import CtaBand from '../sections/CtaBand'
import { Link } from 'react-router-dom'
import CldImage from '../components/CldImage'
import { services } from '../data/site'
import { extraServices } from '../data/moreServices'
import { PATHS } from '../routes/paths'

export default function Construction() {
  const elv = services.find((s) => s.slug === 'elv-technical-systems')
  return (
    <>
      <PageHero
        eyebrow="Services · Construction"
        title="Construction Services"
        text="Each discipline is supported by dedicated supervisory teams, skilled installation workforce, and structured quality and testing protocols."
        image="construction"
        crumbs={[['Services', PATHS.services], ['Construction']]}
      />
      <CoreServices eyebrow="Our disciplines" title="Mechanical, Electrical, Plumbing, Fire Protection & ELV" />

      <section className="bg-gold-50 py-24">
        <div className="mx-auto Resizer px-6">
          <SectionHeading eyebrow="ELV & Technical Systems Support" title="Beyond the core four" text={elv.intro} />
          <div className="grid gap-6 md:grid-cols-3">
            {elv.groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 120} from="zoom">
                <div className="h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-charcoal/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-white">
                    <Icon name="elv" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">{g.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-24">
        <div className="mx-auto Resizer px-6">
          <SectionHeading eyebrow="More construction services" title="Specialist services for every building" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {extraServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 100}>
                <Link
                  to={PATHS.service(s.slug)}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-charcoal/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <CldImage name={s.image} w={700} className="aspect-[16/10]" imgClassName="transition duration-700 group-hover:scale-110" />
                  <div className="flex flex-1 flex-col border-t-4 border-gold p-6">
                    <h3 className="font-display text-lg font-bold leading-snug transition group-hover:text-gold">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-gold">
                      View service <span className="transition-transform group-hover:translate-x-2">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
