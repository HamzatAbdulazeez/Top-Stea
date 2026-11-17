import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CldImage from '../components/CldImage'
import ArrowMark from '../components/ArrowMark'
import { PATHS } from '../routes/paths'

// The three cover lines of the TOP-STEA document, one per slide.
const slides = [
  {
    image: 'hero1',
    kicker: 'MEPF beyond expectations',
    title: 'Engineering excellence.',
    text: 'Qualified technical manpower, experienced site supervision and specialist MEPF installation teams.',
  },
  {
    image: 'hero2',
    kicker: 'Fast-track delivery',
    title: 'Rapid mobilisation.',
    text: 'Supervisors and foremen first, full workforce second — deployed incrementally to match your programme.',
  },
  {
    image: 'hero3',
    kicker: 'Two engagement models',
    title: 'Flexible MEPF delivery.',
    text: 'From manpower supply to full project execution.',
  },
]

const AUTOPLAY_MS = 6500 // keep in sync with `progress` in tailwind.config.js

export default function HeroSlider() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = slides.length
  const go = useCallback((d) => setI((p) => (p + d + n) % n), [n])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => go(1), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [paused, go, i])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  return (
    <section
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-charcoal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((s, idx) => {
        const active = idx === i
        return (
          <div
            key={idx}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-1000 ${active ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
          >
            <CldImage name={s.image} className="absolute inset-0" imgClassName={active ? 'animate-kenburns' : ''} />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal/70 to-charcoal/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />

            <ArrowMark className="absolute -right-10 bottom-10 hidden h-[420px] w-[420px] animate-float text-gold/25 md:block" />

            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-20">
              <div className="max-w-3xl">
                {active && (
                  <>
                    <span className="inline-flex animate-slideRight items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.35em] text-gold-300">
                      <span className="h-0.5 w-10 bg-gold" />
                      {s.kicker}
                    </span>
                    <h1 className="mt-5 animate-fadeUp font-display text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl [animation-delay:.2s]">
                      {s.title}
                    </h1>
                    <p className="mt-6 max-w-xl animate-fadeUp text-lg leading-relaxed text-white/85 [animation-delay:.4s]">
                      {s.text}
                    </p>
                    <div className="mt-10 flex animate-fadeUp flex-wrap gap-4 [animation-delay:.6s]">
                      <Link
                        to={PATHS.contact}
                        className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-gold/30 transition hover:-translate-y-1 hover:bg-white hover:text-charcoal"
                      >
                        Submit Your Scope
                        <span className="transition-transform group-hover:translate-x-1.5">→</span>
                      </Link>
                      <Link
                        to={PATHS.services}
                        className="rounded-full border-2 border-white/60 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-1 hover:border-gold hover:bg-gold/20"
                      >
                        Explore Services
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )
      })}

      {[-1, 1].map((d) => (
        <button
          key={d}
          onClick={() => go(d)}
          aria-label={d < 0 ? 'Previous slide' : 'Next slide'}
          className={`absolute top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-white/10 text-2xl text-white backdrop-blur transition hover:scale-110 hover:bg-gold md:grid ${
            d < 0 ? 'left-5' : 'right-5'
          }`}
        >
          {d < 0 ? '‹' : '›'}
        </button>
      ))}

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
        <span className="font-display text-sm font-bold text-white">0{i + 1}</span>
        <div className="flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="relative h-1.5 w-14 overflow-hidden rounded-full bg-white/30"
            >
              {idx === i && (
                <span
                  key={i}
                  className="absolute inset-y-0 left-0 animate-progress rounded-full bg-gold"
                  style={{ animationPlayState: paused ? 'paused' : 'running' }}
                />
              )}
            </button>
          ))}
        </div>
        <span className="font-display text-sm font-bold text-white/50">0{n}</span>
      </div>
    </section>
  )
}
