import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'

export default function Counter({ to, suffix = '' }) {
  const [ref, seen] = useInView()
  const [v, setV] = useState(0)

  useEffect(() => {
    if (!seen) return
    let raf
    let start
    const dur = 2000
    const step = (t) => {
      start ??= t
      const p = Math.min((t - start) / dur, 1)
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [seen, to])

  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  )
}
