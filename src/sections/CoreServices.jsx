import { Link } from 'react-router-dom'
import CldImage from '../components/CldImage'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { services, disciplinesNote } from '../data/site'
import { PATHS } from '../routes/paths'

export default function CoreServices({ eyebrow = 'Core Services', title = 'MEPF Disciplines We Cover' }) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={eyebrow} title={title} text={disciplinesNote} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 120} from="zoom" className={i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}>
              <Link
                to={PATHS.service(s.slug)}
                className="group relative block h-[380px] overflow-hidden rounded-3xl bg-charcoal shadow-lg"
              >
                <CldImage
                  name={s.image}
                  w={900}
                  className="absolute inset-0"
                  imgClassName="transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal/40 to-transparent transition group-hover:from-gold-700/95" />
                <span className="absolute left-6 top-6 grid h-14 w-14 place-items-center rounded-2xl bg-gold text-white shadow-lg transition duration-500 group-hover:rotate-12 group-hover:bg-white group-hover:text-gold">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {s.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-gold-300 transition group-hover:text-white">
                    View service <span className="transition-transform group-hover:translate-x-2">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
