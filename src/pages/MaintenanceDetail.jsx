import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CheckList from '../components/CheckList'
import ContactForm from '../components/ContactForm'
import Faq from '../components/Faq'
import Gallery from '../components/Gallery'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ArrowMark from '../components/ArrowMark'
import NotFound from './NotFound'
import { maintenanceServices } from '../data/site'
import { SERVICE_GALLERY } from '../data/images'
import { PATHS } from '../routes/paths'

export default function MaintenanceDetail() {
  const { slug } = useParams()
  const s = maintenanceServices.find((m) => m.slug === slug)
  if (!s) return <NotFound />

  return (
    <>
      <PageHero
        eyebrow="Maintenance service"
        title={s.title}
        text={s.short}
        image={s.image}
        crumbs={[['Services', PATHS.services], ['Maintenance', PATHS.maintenance], [s.title]]}
      />

      <section className="bg-white py-24">
        <div className="mx-auto grid Resizer gap-12 px-6 lg:grid-cols-3">
          {/* main column */}
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold md:text-4xl">{s.title}</h2>
              <span className="mt-4 block h-1 w-20 rounded bg-gold" />
            </Reveal>
            {s.intro.map((p, i) => (
              <Reveal key={i} delay={100 + i * 100}>
                <p className="mt-6 leading-relaxed text-charcoal/75">{p}</p>
              </Reveal>
            ))}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {s.highlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 100} from="zoom">
                  <div className="group h-full rounded-2xl border-l-4 border-gold bg-gold-50 p-6 transition duration-500 hover:-translate-y-1 hover:bg-gold hover:text-white hover:shadow-xl">
                    <span className="font-display text-3xl font-extrabold text-gold/40 transition group-hover:text-white/40">0{i + 1}</span>
                    <h3 className="mt-1 font-display text-lg font-bold">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/70 transition group-hover:text-white/90">{h.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14">
              <h3 className="font-display text-2xl font-bold">{s.detailsTitle}</h3>
              <p className="mt-3 text-charcoal/75">{s.detailsIntro}</p>
              <div className="mt-6 rounded-3xl bg-charcoal p-8 text-white">
                <CheckList items={s.details} light />
              </div>
              <p className="mt-6 leading-relaxed text-charcoal/75">{s.closing}</p>
            </Reveal>

            <div className="mt-14">
              <Reveal>
                <h3 className="mb-6 font-display text-2xl font-bold">Frequently asked questions</h3>
              </Reveal>
              <Faq items={s.faqs} />
            </div>
          </div>

          {/* sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <Reveal from="right" className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-charcoal/10">
              <p className="bg-charcoal px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-gold-300">
                Maintenance Services
              </p>
              <ul>
                {maintenanceServices.map((m) => (
                  <li key={m.slug}>
                    <Link
                      to={PATHS.maintenanceService(m.slug)}
                      className={`flex items-center justify-between px-6 py-4 text-sm font-semibold transition hover:bg-gold-50 hover:text-gold ${
                        m.slug === s.slug ? 'bg-gold text-white hover:bg-gold hover:text-white' : ''
                      }`}
                    >
                      {m.title} <span>→</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={PATHS.construction} className="flex items-center justify-between border-t border-charcoal/10 px-6 py-4 text-sm font-semibold transition hover:bg-gold-50 hover:text-gold">
                    Construction Services <span>→</span>
                  </Link>
                </li>
              </ul>
            </Reveal>

            <Reveal from="right" delay={100} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold to-gold-600 p-8 text-white shadow-xl">
              <ArrowMark className="absolute -right-6 -top-6 h-32 w-32 text-white/15" />
              <h3 className="relative font-display text-2xl font-bold">Need a visit?</h3>
              <p className="relative mt-2 text-sm text-white/90">Tell us about your facility and we will get back to you.</p>
              <a
                href="#book-a-visit"
                className="relative mt-5 inline-block rounded-full bg-white px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-charcoal transition hover:-translate-y-1 hover:bg-charcoal hover:text-white"
              >
                Book a Visit
              </a>
            </Reveal>
          </aside>
        </div>
      </section>

      {(SERVICE_GALLERY[s.slug] || []).length > 0 && (
        <section className="bg-gold-50 py-24">
          <div className="mx-auto Resizer px-6">
            <SectionHeading eyebrow="Gallery" title={`${s.title} in action`} text="Tap a photo to view it full size." />
            <Gallery images={SERVICE_GALLERY[s.slug]} alt={s.title} />
          </div>
        </section>
      )}

      <section id="book-a-visit" className="bg-white py-24">
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
