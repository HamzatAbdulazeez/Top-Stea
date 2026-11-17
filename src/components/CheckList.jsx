import Icon from './Icon'
import Reveal from './Reveal'

export default function CheckList({ items, light = false, cols = 1 }) {
  return (
    <ul className={`grid gap-3 ${cols === 2 ? 'sm:grid-cols-2' : ''}`}>
      {items.map((t, i) => (
        <Reveal as="li" key={t} delay={i * 60} from="left" className="flex items-start gap-3">
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-white">
            <Icon name="check" className="h-3.5 w-3.5" />
          </span>
          <span className={light ? 'text-white/85' : 'text-charcoal/80'}>{t}</span>
        </Reveal>
      ))}
    </ul>
  )
}
