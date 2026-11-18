import { useCallback, useEffect, useState } from 'react'
import CldImage from './CldImage'
import Reveal from './Reveal'
import { resolveImage } from '../lib/cloudinary'

// Bento photo gallery with a full-screen viewer. `images` = Cloudinary IDs / URLs / local paths.
export default function Gallery({ images = [], alt = 'Project photo' }) {
  const [open, setOpen] = useState(null)
  const list = images.filter(Boolean)

  const step = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + list.length) % list.length)), [list.length])

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, step])

  if (!list.length) return null
  const bigSrc = open !== null ? resolveImage(list[open], { w: 1800, crop: 'limit' }) : null

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((ref, i) => (
          <Reveal key={ref + i} delay={(i % 3) * 90}>
            <button
              type="button"
              disabled={!resolveImage(ref)}
              onClick={() => setOpen(i)}
              aria-label={`Open photo ${i + 1}`}
              className="block w-full overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl disabled:cursor-default"
            >
              <CldImage id={ref} alt={`${alt} ${i + 1}`} w={800} className="aspect-[4/3] w-full" imgClassName="transition duration-500 hover:scale-105" />
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null && bigSrc && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-charcoal-900/95 p-4 backdrop-blur-sm" onClick={() => setOpen(null)}>
          <img
            key={open}
            src={bigSrc}
            alt={`${alt} ${open + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[92vw] animate-pop rounded-2xl object-contain shadow-2xl"
          />
          <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-5 top-4 text-4xl text-white/80 transition hover:text-gold">
            ×
          </button>
          {list.length > 1 &&
            [-1, 1].map((d) => (
              <button
                key={d}
                onClick={(e) => {
                  e.stopPropagation()
                  step(d)
                }}
                aria-label={d < 0 ? 'Previous photo' : 'Next photo'}
                className={`absolute top-1/2 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-3xl text-white backdrop-blur transition hover:bg-gold ${d < 0 ? 'left-4' : 'right-4'}`}
              >
                {d < 0 ? '‹' : '›'}
              </button>
            ))}
          <p className="absolute bottom-5 font-display text-sm font-bold text-white/70">
            {open + 1} / {list.length}
          </p>
        </div>
      )}
    </>
  )
}
