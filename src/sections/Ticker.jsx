const words = ['Mechanical', 'Electrical', 'Plumbing', 'Fire Protection', 'ELV Support', 'Manpower Supply', 'Full Project Execution']

export default function Ticker() {
  const loop = [...words, ...words, ...words, ...words]
  return (
    <div className="overflow-hidden bg-gold py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap hover:[animation-play-state:paused]">
        {loop.map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-sm font-bold uppercase tracking-[0.25em] text-white">
            {w}
            <span className="h-2 w-2 rotate-45 bg-white/70" />
          </span>
        ))}
      </div>
    </div>
  )
}
