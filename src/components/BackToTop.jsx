import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gold text-xl text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-charcoal ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      ↑
    </button>
  )
}
