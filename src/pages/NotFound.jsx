import { Link } from 'react-router-dom'
import ArrowMark from '../components/ArrowMark'
import { PATHS } from '../routes/paths'

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-charcoal px-6 pt-24 text-center text-white">
      <ArrowMark className="absolute h-[28rem] w-[28rem] animate-float text-gold/15" />
      <div className="relative">
        <p className="font-display text-8xl font-extrabold text-gold">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold">This page is not on the plan</h1>
        <Link
          to={PATHS.home}
          className="mt-8 inline-block rounded-full bg-gold px-8 py-3 font-display text-sm font-bold uppercase tracking-wide transition hover:-translate-y-1 hover:bg-white hover:text-charcoal"
        >
          Back to home
        </Link>
      </div>
    </section>
  )
}
