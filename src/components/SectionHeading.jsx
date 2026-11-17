import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, text, light = false, center = true }) {
  return (
    <Reveal className={`mb-12 ${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      <span
        className={`inline-flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.3em] ${
          light ? 'text-gold-300' : 'text-gold'
        }`}
      >
        <span className="h-0.5 w-8 bg-current" />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      <span className="mt-5 block h-1 w-20 origin-left animate-draw rounded bg-gold" />
      {text && <p className={`mt-5 leading-relaxed ${light ? 'text-white/75' : 'text-charcoal/70'}`}>{text}</p>}
    </Reveal>
  )
}
