import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CldImage from '../components/CldImage'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../sections/CtaBand'
import { serviceCategories } from '../data/site'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Our Services"
        text="Two service lines under one accountable team: Construction and Maintenance."
        image="services"
        crumbs={[['Services']]}
      />
      <section className="bg-white py-24">
        <div className="mx-auto Resizer px-6">
          <SectionHeading eyebrow="Choose a service line" title="Construction & Maintenance" />
          <div className="grid gap-8 md:grid-cols-2">
            {serviceCategories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 150} from={i ? 'right' : 'left'}>
                <Link to={c.to} className="group relative block h-[460px] overflow-hidden rounded-3xl bg-charcoal shadow-xl">
                  <CldImage name={c.image} w={1000} className="absolute inset-0" imgClassName="transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal/50 to-transparent transition group-hover:from-gold-700/95" />
                  <span className="absolute left-7 top-7 font-display text-7xl font-extrabold text-white/20">0{i + 1}</span>
                  <div className="absolute inset-x-0 bottom-0 p-9 text-white">
                    <h3 className="font-display text-4xl font-extrabold">{c.label}</h3>
                    <p className="mt-3 max-w-md leading-relaxed text-white/85">{c.text}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {c.items.map((it) => (
                        <li key={it.to} className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                          {it.label}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-gold-300 transition group-hover:text-white">
                      Explore {c.label} <span className="transition-transform group-hover:translate-x-2">→</span>
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
