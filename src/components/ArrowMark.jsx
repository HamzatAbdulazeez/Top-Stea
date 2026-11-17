// The up-arrow "roof" motif from the TOP-STEA logo, used as a decorative shape.
export default function ArrowMark({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      <polygon points="50,0 100,46 72,46 72,100 28,100 28,46 0,46" />
    </svg>
  )
}
