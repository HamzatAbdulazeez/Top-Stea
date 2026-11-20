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
          {/* featured bundle */}
          {(() => {
            const f = maintenanceServices.find((m) => m.slug === 'apartment-facility-management')
            return (
              f && (
                <Reveal className="mb-10">
                  <Link to={PATHS.maintenanceService(f.slug)} className="group relative block overflow-hidden rounded-3xl bg-charcoal shadow-xl">
                    <CldImage name={f.image} w={1600} className="absolute inset-0" imgClassName="opacity-60 transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/95 via-charcoal-900/70 to-transparent" />
                    <div className="relative max-w-2xl p-8 text-white md:p-12">
                      <span className="rounded-full bg-gold px-4 py-1 font-display text-[11px] font-bold uppercase tracking-widest">All-in-one package</span>
                      <h3 className="mt-5 font-display text-3xl font-extrabold md:text-4xl">{f.title}</h3>
                      <p className="mt-3 leading-relaxed text-white/85">{f.short}</p>
                      <span className="mt-6 inline-flex items-center gap-3 font-display text-sm font-bold uppercase tracking-widest text-gold-300 transition group-hover:gap-5 group-hover:text-white">
                        Explore the package <span>→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )
            )
          })()}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {maintenanceServices.filter((m) => m.slug !== 'apartment-facility-management').map((s, i) => (
              <Reveal key={s.slug} delay={i * 120} from="zoom">
                <Link
                  to={PATHS.maintenanceService(s.slug)}
                  className="group block overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-charcoal/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative">
                    <CldImage name={s.image} w={800} className="h-52" imgClassName="transition duration-700 group-hover:scale-110" />
                    <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-gold font-display text-sm font-extrabold text-white shadow-lg">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
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
