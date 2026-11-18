import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CldImage from '../components/CldImage'
import ArrowMark from '../components/ArrowMark'
import { heroSlides as slides, heroStats } from '../data/hero'

const AUTOPLAY_MS = 6500 // keep in sync with `progress` in tailwind.config.js

const clean = (w) => w.replace(/[.,]/g, '').toLowerCase()

// Title split into words that rise in one after another; the accent word is gold.
function Title({ text, accent }) {
  const accentWords = (accent || '').split(' ').map(clean)
  return (
    <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
      {text.split(' ').map((w, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
          <span
            style={{ animationDelay: `${0.25 + i * 0.12}s` }}
            className={`inline-block animate-fadeUp ${accentWords.includes(clean(w)) ? 'text-gold-300' : ''}`}
          >
            {w}
          </span>
        </span>
      ))}
    </h1>
  )
}

export default function HeroSlider() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const layer = useRef(null)
  const n = slides.length
  const go = useCallback((d) => setI((p) => (p + d + n) % n), [n])

  useEffect(() => {
    if (paused || n < 2) return
    const t = setInterval(() => go(1), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [paused, go, i, n])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  // gentle mouse parallax on the photo
  const onMove = (e) => {
    if (!layer.current) return
    const x = e.clientX / window.innerWidth - 0.5
    const y = e.clientY / window.innerHeight - 0.5
    layer.current.style.transform = `translate3d(${x * -26}px, ${y * -16}px, 0) scale(1.08)`
  }

  const s = slides[i]

  return (
    <section
      className="relative h-[100svh] min-h-[680px] overflow-hidden bg-charcoal-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false)
        if (layer.current) layer.current.style.transform = 'translate3d(0,0,0) scale(1.08)'
      }}
      onMouseMove={onMove}
      aria-roledescription="carousel"
    >
      {/* photos */}
      <div ref={layer} className="absolute inset-0 scale-[1.08] transition-transform duration-300 ease-out">
        {slides.map((sl, idx) => {
          const active = idx === i
          return (
            <div
              key={idx}
              aria-hidden={!active}
              className={`absolute inset-0 transition-all duration-[1400ms] ease-out ${
                active ? 'opacity-100 [clip-path:inset(0_0_0_0)]' : 'opacity-0 [clip-path:inset(0_0_0_100%)]'
              }`}
            >
              <CldImage
                id={sl.image}
                alt={sl.alt}
                className="absolute inset-0"
                imgClassName={active ? 'animate-kenburns' : ''}
              />
            </div>
          )
        })}
      </div>

      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/95 via-charcoal/70 to-charcoal/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-transparent to-charcoal-900/40" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -left-40 top-0 h-full w-72 -skew-x-12 bg-gradient-to-b from-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-gold via-gold-300 to-transparent" />
      <ArrowMark className="absolute -right-12 top-24 hidden h-[460px] w-[460px] animate-float text-gold/15 lg:block" />

      {/* content (re-mounted on every slide so the entrance animations replay) */}
      <div className="relative z-10 mx-auto flex h-full Resizer items-center px-6 pb-28 pt-20">
        <div key={i} className="max-w-3xl">
          <span className="inline-flex animate-slideRight items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.35em] text-gold-300">
            <span className="h-0.5 w-10 bg-gold" />
            {s.kicker}
          </span>
          <Title text={s.title} accent={s.accent} />
          <p className="mt-6 max-w-xl animate-fadeUp text-lg leading-relaxed text-white/85 [animation-delay:.6s]">{s.text}</p>
          <div className="mt-10 flex animate-fadeUp flex-wrap gap-4 [animation-delay:.8s]">
            {s.cta && (
              <Link
                to={s.cta.to}
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-gold/30 transition hover:-translate-y-1 hover:bg-white hover:text-charcoal"
              >
                {s.cta.label}
                <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </Link>
            )}
            {s.cta2 && (
              <Link
                to={s.cta2.to}
                className="rounded-full border-2 border-white/60 px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:-translate-y-1 hover:border-gold hover:bg-gold/20"
              >
                {s.cta2.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* thumbnail rail (desktop) */}
      {n > 1 && (
        <div className="absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-4 xl:flex">
          {slides.map((sl, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`relative h-20 w-32 overflow-hidden rounded-xl border-2 transition-all duration-500 ${
                idx === i ? 'translate-x-0 scale-110 border-gold shadow-xl shadow-gold/30' : 'translate-x-4 border-white/30 opacity-70 hover:translate-x-1 hover:opacity-100'
              }`}
            >
              <CldImage id={sl.image} w={300} className="absolute inset-0" />
              <span className="absolute inset-0 bg-charcoal/30" />
              <span className="absolute bottom-1 left-2 font-display text-xs font-bold text-white">0{idx + 1}</span>
              {idx === i && (
                <span
                  key={i}
                  className="absolute bottom-0 left-0 h-1 animate-progress bg-gold"
                  style={{ animationPlayState: paused ? 'paused' : 'running' }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* arrows + counter */}
      {n > 1 && (
        <div className="absolute inset-x-0 bottom-28 z-20">
          <div className="mx-auto flex Resizer items-center gap-5 px-6">
            <button onClick={() => go(-1)} aria-label="Previous slide" className="grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/10 text-xl text-white backdrop-blur transition hover:scale-110 hover:bg-gold">
              ‹
            </button>
            <button onClick={() => go(1)} aria-label="Next slide" className="grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/10 text-xl text-white backdrop-blur transition hover:scale-110 hover:bg-gold">
              ›
            </button>
            <span className="font-display text-sm font-bold text-white">
              0{i + 1} <span className="text-white/40">/ 0{n}</span>
            </span>
            <div className="flex gap-2 xl:hidden">
              {slides.map((_, idx) => (
                <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`} className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-10 bg-gold' : 'w-4 bg-white/40'}`} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* glass stats strip */}
      {heroStats.length > 0 && (
        <div className="absolute inset-x-0 bottom-0 z-20 hidden border-t border-white/15 bg-charcoal-900/50 backdrop-blur-md md:block">
          <div className="mx-auto grid Resizer grid-cols-4 divide-x divide-white/15 px-6">
            {heroStats.map(([v, l]) => (
              <div key={l} className="group px-6 py-5 transition hover:bg-gold/15">
                <p className="font-display text-3xl font-extrabold text-gold-300 transition group-hover:scale-105">{v}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70">{l}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
