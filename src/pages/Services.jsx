import PageHero from '../components/PageHero'
import CoreServices from '../sections/CoreServices'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import CtaBand from '../sections/CtaBand'
import { services } from '../data/site'

export default function Services() {
  const elv = services.find((s) => s.slug === 'elv-technical-systems')
  return (
    <>
      <PageHero
        eyebrow="Core Services"
        title="MEPF Disciplines We Cover"
        text="Each discipline is supported by dedicated supervisory teams, skilled installation workforce, and structured quality and testing protocols."
        image="services"
        crumbs={[['Services']]}
      />
      <CoreServices eyebrow="Our disciplines" title="Mechanical, Electrical, Plumbing, Fire Protection & ELV" />

      <section className="bg-gold-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
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
      <CtaBand />
    </>
  )
}
