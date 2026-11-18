import { useState } from 'react'
import { Link } from 'react-router-dom'
import CldImage from '../components/CldImage'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { services, disciplinesNote } from '../data/site'
import { PATHS } from '../routes/paths'

// Image-led accordion: on desktop the hovered service opens up wide, the others fold into slim
// vertical strips. On phones every service is a full image card.
export default function CoreServices({ eyebrow = 'Core Services', title = 'MEPF Disciplines We Cover' }) {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-white py-24">
      <div className="mx-auto Resizer px-6">
        <SectionHeading eyebrow={eyebrow} title={title} text={disciplinesNote} />

        <Reveal>
          <div className="flex flex-col gap-4 lg:h-[600px] lg:flex-row lg:gap-3">
            {services.map((s, i) => {
              const on = active === i
              return (
                <Link
                  key={s.slug}
                  to={PATHS.service(s.slug)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  style={{ '--g': on ? 6 : 1 }}
                  className={`group relative h-80 min-w-0 overflow-hidden rounded-3xl bg-charcoal shadow-xl transition-[flex] duration-700 ease-out lg:h-full lg:[flex:var(--g)_1_0%] ${
                    on ? 'ring-2 ring-gold ring-offset-2' : ''
                  }`}
                >
                  <CldImage
                    name={s.image}
                    w={1100}
                    className="absolute inset-0"
                    imgClassName={`transition duration-[1200ms] ${on ? 'scale-105' : 'scale-100 lg:grayscale-[35%]'}`}
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-700 ${
                      on
                        ? 'bg-gradient-to-t from-charcoal-900/95 via-charcoal-900/35 to-transparent'
                        : 'bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/55 to-charcoal-900/30 lg:bg-charcoal-900/50'
                    }`}
                  />

                  <span className="absolute left-5 top-5 font-display text-5xl font-extrabold text-white/25">0{i + 1}</span>
                  <span
                    className={`absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg transition duration-500 ${
                      on ? 'rotate-0 bg-gold' : 'bg-white/20 backdrop-blur lg:rotate-12'
                    }`}
                  >
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>

                  {/* slim vertical label when folded (desktop only) */}
                  <span
                    className={`absolute inset-x-0 bottom-8 hidden justify-center font-display text-lg font-bold tracking-wide text-white transition-opacity duration-500 lg:flex ${
                      on ? 'opacity-0' : 'opacity-100'
                    } [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180 top-24`}
                  >
                    {s.title}
                  </span>

                  {/* open content */}
                  <div
                    className={`absolute inset-x-0 bottom-0 p-7 text-white transition-all duration-700 lg:p-9 ${
                      on ? 'translate-y-0 opacity-100' : 'lg:translate-y-6 lg:opacity-0'
                    }`}
                  >
                    <h3 className="font-display text-2xl font-extrabold lg:text-4xl">{s.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/85 lg:text-base">{s.short}</p>
                    <ul className="mt-5 hidden flex-wrap gap-2 sm:flex">
                      {s.groups.map((g) => (
                        <li key={g.title} className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                          {g.title}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 font-display text-xs font-bold uppercase tracking-widest text-white transition group-hover:gap-5">
                      View service <span>→</span>
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
