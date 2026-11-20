import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CldImage from '../components/CldImage'
import CheckList from '../components/CheckList'
import Gallery from '../components/Gallery'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../sections/CtaBand'
import NotFound from './NotFound'
import { services } from '../data/site'
import { GROUP_IMAGES, SERVICE_GALLERY } from '../data/images'
import { PATHS } from '../routes/paths'

export default function ServiceDetail() {
  const { slug } = useParams()
  const idx = services.findIndex((s) => s.slug === slug)
  if (idx < 0) return <NotFound />
  const s = services[idx]
  const prev = services[(idx - 1 + services.length) % services.length]
  const next = services[(idx + 1) % services.length]
  const groupImages = GROUP_IMAGES[s.slug] || []
  const gallery = SERVICE_GALLERY[s.slug] || []

  return (
    <>
      <PageHero
        eyebrow="Construction service"
        title={s.title}
        text={s.intro || s.short}
        image={s.image}
        crumbs={[['Services', PATHS.services], ['Construction', PATHS.construction], [s.title]]}
      />

      {/* intro: big image + summary */}
      <section className="bg-white pt-24">
        <div className="mx-auto grid Resizer items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal from="left" className="relative">
            <CldImage name={s.image} w={1100} className="aspect-[4/3] rounded-[2rem] shadow-2xl" imgClassName="transition duration-700 hover:scale-105" />
            <span className="absolute -bottom-5 -right-3 grid h-24 w-24 animate-float place-items-center rounded-3xl bg-gold text-white shadow-xl">
              <Icon name={s.icon} className="h-10 w-10" />
            </span>
          </Reveal>
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-gold">
                <span className="h-0.5 w-8 bg-current" />
                What we deliver
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">{s.title}</h2>
              <span className="mt-5 block h-1 w-20 rounded bg-gold" />
              <p className="mt-6 text-lg leading-relaxed text-charcoal/75">{s.intro || s.short}</p>
            </Reveal>
            <Reveal delay={150} className="mt-6 flex flex-wrap gap-2">
              {s.groups.map((g) => (
                <span key={g.title} className="rounded-full border border-gold/40 bg-gold-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-600">
                  {g.title}
                </span>
              ))}
            </Reveal>
            <Reveal delay={250}>
              <Link
                to={PATHS.contact}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-gold/30 transition hover:-translate-y-1 hover:bg-charcoal"
              >
                Submit Your Scope <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* groups, each with its own picture */}
      <section className="bg-white py-24">
        <div className="mx-auto Resizer px-6">
          <SectionHeading eyebrow="Scope of work" title="What is included" />
          <div className={`grid gap-8 ${s.groups.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
            {s.groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 130} from="zoom">
                <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-charcoal/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative h-56 overflow-hidden">
                    <CldImage id={groupImages[i]} name={s.image} w={900} className="absolute inset-0" imgClassName="transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 to-transparent" />
                    <span className="absolute left-5 top-5 font-display text-5xl font-extrabold text-white/30">0{i + 1}</span>
                    <span className="absolute -bottom-6 right-6 grid h-14 w-14 place-items-center rounded-2xl bg-gold text-white shadow-lg transition duration-500 group-hover:rotate-12">
                      <Icon name={s.icon} className="h-7 w-7" />
                    </span>
                  </div>
                  <div className="p-8 pt-9">
                    <h3 className="font-display text-xl font-bold">{g.title}</h3>
                    {g.items ? (
                      <div className="mt-5">
                        <CheckList items={g.items} />
                      </div>
                    ) : (
                      <p className="mt-4 leading-relaxed text-charcoal/75">{g.text}</p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* gallery */}
      {gallery.length > 0 && (
        <section className="bg-gold-50 py-24">
          <div className="mx-auto Resizer px-6">
            <SectionHeading eyebrow="Gallery" title={`${s.title} in action`} text="Tap a photo to view it full size." />
            <Gallery images={gallery} alt={s.title} />
          </div>
        </section>
      )}

      {/* previous / next */}
      <section className="bg-white py-16">
        <div className="mx-auto grid Resizer gap-4 px-6 md:grid-cols-2">
          {[
            ['← Previous', prev],
            ['Next →', next],
          ].map(([label, svc], i) => (
            <Link
              key={label}
              to={PATHS.service(svc.slug)}
              className={`group relative overflow-hidden rounded-2xl bg-charcoal p-7 text-white transition hover:-translate-y-1 ${i ? 'md:text-right' : ''}`}
            >
              <CldImage name={svc.image} w={700} className="absolute inset-0 opacity-40 transition duration-500 group-hover:opacity-60" imgClassName="transition duration-700 group-hover:scale-110" />
              <span className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 to-charcoal/30" />
              <p className="relative font-display text-xs font-bold uppercase tracking-widest text-gold-300">{label}</p>
              <p className="relative mt-1 font-display text-xl font-bold">{svc.title}</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
