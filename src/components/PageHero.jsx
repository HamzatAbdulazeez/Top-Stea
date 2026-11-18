import { Link } from 'react-router-dom'
import CldImage from './CldImage'
import ArrowMark from './ArrowMark'

export default function PageHero({ eyebrow, title, text, image, crumbs = [] }) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal pt-28 text-white">
      <CldImage name={image} className="absolute inset-0 -z-20" imgClassName="animate-kenburns" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal-900/95 via-charcoal/85 to-charcoal/50" />
      <ArrowMark className="absolute -right-10 bottom-0 -z-10 h-72 w-72 animate-float text-gold/25" />
      <div className="mx-auto Resizer px-6 pb-20 pt-14 md:pb-28">
        <nav className="animate-fadeUp text-xs font-semibold uppercase tracking-widest text-white/70" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold-300">
            Home
          </Link>
          {crumbs.map(([label, to]) => (
            <span key={label}>
              <span className="mx-2 text-gold">/</span>
              {to ? (
                <Link to={to} className="hover:text-gold-300">
                  {label}
                </Link>
              ) : (
                <span className="text-gold-300">{label}</span>
              )}
            </span>
          ))}
        </nav>
        <p className="mt-8 animate-fadeUp font-display text-xs font-bold uppercase tracking-[0.35em] text-gold-300 [animation-delay:.1s]">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl animate-fadeUp font-display text-4xl font-extrabold leading-tight md:text-6xl [animation-delay:.2s]">
          {title}
        </h1>
        {text && (
          <p className="mt-5 max-w-2xl animate-fadeUp text-lg text-white/80 [animation-delay:.35s]">{text}</p>
        )}
        <span className="mt-8 block h-1 w-24 origin-left animate-draw rounded bg-gold [animation-delay:.5s]" />
      </div>
    </section>
  )
}
