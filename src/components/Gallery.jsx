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
      <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[210px] md:grid-cols-4">
        {list.map((ref, i) => {
          const canOpen = Boolean(resolveImage(ref))
          const big = i === 0
          return (
            <Reveal
              key={ref + i}
              delay={(i % 4) * 90}
              from="zoom"
              className={`${big ? 'col-span-2 row-span-2' : i === 3 ? 'md:col-span-2' : ''}`}
            >
              <button
                type="button"
                disabled={!canOpen}
                onClick={() => setOpen(i)}
                aria-label={`Open photo ${i + 1}`}
                className="group relative block h-full w-full overflow-hidden rounded-2xl bg-gold-100 shadow-md disabled:cursor-default"
              >
                <CldImage
                  id={ref}
                  alt={`${alt} ${i + 1}`}
                  w={big ? 1200 : 700}
                  className="absolute inset-0"
                  imgClassName="transition duration-700 group-hover:scale-110"
                />
                {canOpen && (
                  <>
                    <span className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                    <span className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-3 place-items-center rounded-full bg-gold text-2xl text-white opacity-0 shadow-lg transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      +
                    </span>
                  </>
                )}
              </button>
            </Reveal>
          )
        })}
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
