import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CheckList from '../components/CheckList'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../sections/CtaBand'
import NotFound from './NotFound'
import { services } from '../data/site'
import { PATHS } from '../routes/paths'

export default function ServiceDetail() {
  const { slug } = useParams()
  const idx = services.findIndex((s) => s.slug === slug)
  if (idx < 0) return <NotFound />
  const s = services[idx]
  const prev = services[(idx - 1 + services.length) % services.length]
  const next = services[(idx + 1) % services.length]

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={s.title}
        text={s.intro || s.short}
        image={s.image}
        crumbs={[['Services', PATHS.services], [s.title]]}
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What we deliver" title={s.title} text={s.short} />
          <div className={`grid gap-8 ${s.groups.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
            {s.groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 130} from="zoom">
                <div className="group h-full rounded-3xl border-t-4 border-gold bg-white p-8 shadow-lg ring-1 ring-charcoal/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-white transition duration-500 group-hover:rotate-12">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">{g.title}</h3>
                  {g.items ? (
                    <div className="mt-5">
                      <CheckList items={g.items} />
                    </div>
                  ) : (
                    <p className="mt-4 leading-relaxed text-charcoal/75">{g.text}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {[
              ['← Previous', prev],
              ['Next →', next],
            ].map(([label, svc], i) => (
              <Link
                key={label}
                to={PATHS.service(svc.slug)}
                className={`group rounded-2xl bg-gold-50 p-6 transition hover:-translate-y-1 hover:bg-gold hover:text-white ${i ? 'md:text-right' : ''}`}
              >
                <p className="font-display text-xs font-bold uppercase tracking-widest text-gold group-hover:text-white/80">{label}</p>
                <p className="mt-1 font-display text-lg font-bold">{svc.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
