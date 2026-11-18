import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CldImage from '../components/CldImage'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { maintenanceServices } from '../data/site'
import { PATHS } from '../routes/paths'

export default function Maintenance() {
  return (
    <>
      <PageHero
        eyebrow="Services · Maintenance"
        title="Maintenance Services"
        text="Facility upkeep that keeps your buildings clean, safe and running."
        image="maintenance"
        crumbs={[['Services', PATHS.services], ['Maintenance']]}
      />

      <section className="bg-white py-24">
        <div className="mx-auto Resizer px-6">
          <SectionHeading
            eyebrow="Our maintenance services"
            title="Trained teams, defined processes, consistent results"
            text="Pick a service to see what is included."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {maintenanceServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 120} from="zoom">
                <Link
                  to={PATHS.maintenanceService(s.slug)}
                  className="group block overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-charcoal/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <CldImage name={s.image} w={800} className="h-56" imgClassName="transition duration-700 group-hover:scale-110" />
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold transition group-hover:text-gold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-gold">
                      View service <span className="transition-transform group-hover:translate-x-2">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="book-a-visit" className="bg-gold-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="Book a Visit" title="Tell us about your facility" />
          <div className="rounded-3xl bg-white p-8 shadow-2xl">
            <ContactForm variant="visit" />
          </div>
        </div>
      </section>
    </>
  )
}
