import { Link } from 'react-router-dom'
import { company, services, maintenanceServices } from '../data/site'
import { PATHS } from '../routes/paths'
import ArrowMark from './ArrowMark'

const company_links = [
  ['About', PATHS.about],
  ['Methodology', PATHS.methodology],
  ['Engagement Models', PATHS.engagement],
  ['Quality & HSE', PATHS.quality],
  ['Contact', PATHS.contact],
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal-900 pt-20 text-white/70">
      <ArrowMark className="absolute -right-16 -top-10 h-80 w-80 text-gold/10" />
      <div className="relative mx-auto grid Resizer gap-12 px-6 pb-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="inline-block rounded-xl bg-white px-4 py-3">
            <img src="/logo.png" alt="TOP-STEA" className="h-10 w-auto" />
          </span>
          <p className="mt-5 text-sm leading-relaxed">
            Professional MEPF installation, construction support, manpower supply and full project execution.
          </p>
          <p className="mt-3 font-display text-sm font-bold text-gold-300">{company.tagline}</p>
        </div>

        <div>
          <h4 className="mb-5 font-display font-bold uppercase tracking-wider text-white">Company</h4>
          <ul className="space-y-3 text-sm">
            {company_links.map(([l, to]) => (
              <li key={l}>
                <Link to={to} className="inline-block transition hover:translate-x-1.5 hover:text-gold-300">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-display font-bold uppercase tracking-wider text-white">Services</h4>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={PATHS.service(s.slug)} className="inline-block transition hover:translate-x-1.5 hover:text-gold-300">
                  {s.title}
                </Link>
              </li>
            ))}
            {maintenanceServices.map((s) => (
              <li key={s.slug}>
                <Link to={PATHS.maintenanceService(s.slug)} className="inline-block transition hover:translate-x-1.5 hover:text-gold-300">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-display font-bold uppercase tracking-wider text-white">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to={PATHS.contact} className="hover:text-gold-300">
                Submit Your Scope
              </Link>
            </li>
            <li>
              <Link to={PATHS.contact} className="hover:text-gold-300">
                Request a Meeting
              </Link>
            </li>
            {company.email && (
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-gold-300">
                  {company.email}
                </a>
              </li>
            )}
            {company.phone && <li>{company.phone}</li>}
            {company.address && <li>{company.address}</li>}
            <li>
              <a href={company.url} target="_blank" rel="noreferrer" className="font-semibold text-gold-300 hover:text-white">
                {company.website}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-6 text-center text-xs">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  )
}
