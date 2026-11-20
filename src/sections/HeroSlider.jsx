import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CldImage from '../components/CldImage'
import { heroSlides as slides } from '../data/hero'

const AUTOPLAY_MS = 7000

export default function HeroSlider() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const prev = useRef(0)
  const n = slides.length
  const go = useCallback((d) => setI((p) => (p + d + n) % n), [n])

  useEffect(() => {
    if (paused || n < 2) return
    const t = setInterval(() => go(1), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [paused, go, i, n])

  const s = slides[i]
  const last = prev.current
  useEffect(() => { prev.current = i }, [i])

  return (
    <section
      className="relative h-[82svh] min-h-[540px] overflow-hidden bg-charcoal-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* photos cross-fade */}
      {slides.map((sl, idx) => (
        <div key={idx} aria-hidden={idx !== i} className={`absolute inset-0 transition-opacity duration-[1200ms] ${idx === i ? 'opacity-100' : 'opacity-0'}`}>
          <CldImage id={sl.image} alt={sl.alt} className="absolute inset-0" imgClassName={idx === i || idx === last ? 'animate-kenburns' : ''} />
        </div>
      ))}

      {/* dark overlay */}
      <div className="absolute inset-0 bg-charcoal-900/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gold" />

      {/* content, re-mounted per slide so the entrance replays */}
      <div className="relative z-10 mx-auto flex h-full Resizer items-center px-6 pb-10 pt-24">
        <div key={i} className="max-w-3xl">
          <div className="relative">
            <span className="absolute -left-6 -top-8 h-28 w-28 animate-pop rounded-full bg-gold md:-left-8 md:-top-10 md:h-36 md:w-36" aria-hidden="true" />
            <h1 className="relative animate-fadeUp font-display text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl lg:text-6xl">{s.title}</h1>
          </div>
          <p className="mt-8 max-w-2xl animate-fadeUp text-base leading-relaxed text-white/90 [animation-delay:.25s] md:text-lg">{s.text}</p>
          {s.cta && (
            <Link
              to={s.cta.to}
              className="group mt-9 inline-flex animate-fadeUp items-center gap-3 rounded-full bg-gold px-9 py-4 font-display text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-black/20 transition [animation-delay:.45s] hover:-translate-y-1 hover:bg-white hover:text-charcoal"
            >
              {s.cta.label}
              <span className="transition-transform group-hover:translate-x-1.5">→</span>
            </Link>
          )}
        </div>
      </div>

      {/* dots + arrows */}
      {n > 1 && (
        <div className="absolute inset-x-0 bottom-8 z-20">
          <div className="mx-auto flex Resizer items-center gap-4 px-6">
            <button onClick={() => go(-1)} aria-label="Previous slide" className="grid h-11 w-11 place-items-center rounded-full border border-white/50 text-xl text-white transition hover:bg-gold hover:border-gold">
              ‹
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-500 ${idx === i ? 'w-10 bg-gold' : 'w-2.5 bg-white/60 hover:bg-white'}`}
                />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next slide" className="grid h-11 w-11 place-items-center rounded-full border border-white/50 text-xl text-white transition hover:bg-gold hover:border-gold">
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
