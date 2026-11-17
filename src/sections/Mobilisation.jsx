import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import useInView from '../hooks/useInView'
import { mobilisation } from '../data/site'

export default function Mobilisation() {
  const [ref, seen] = useInView(0.3)
  const steps = mobilisation.steps

  return (
    <section className="bg-gold-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Process" title="Rapid Mobilisation Process" text={mobilisation.intro} />

        <div ref={ref} className="relative grid gap-10 md:grid-cols-4">
          {/* connecting line that draws itself */}
          <span className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-1 rounded bg-gold/20 md:block" />
          <span
            className={`absolute left-[12.5%] right-[12.5%] top-8 hidden h-1 origin-left rounded bg-gold transition-transform duration-[2000ms] ease-out md:block ${
              seen ? 'scale-x-100' : 'scale-x-0'
            }`}
          />
          {steps.map((s, i) => (
            <Reveal key={s} delay={i * 250} className="relative text-center">
              <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold font-display text-xl font-extrabold text-white shadow-xl shadow-gold/30">
                <span className="absolute inset-0 animate-ping rounded-full bg-gold/40 [animation-duration:2.5s]" />
                <span className="relative">{i + 1}</span>
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{s}</h3>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-charcoal/5">
          <p className="text-center text-sm leading-relaxed text-charcoal/70">
            Mobilisation is structured around:
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {mobilisation.factors.map((f) => (
              <span
                key={f}
                className="rounded-full bg-gold-50 px-5 py-2 text-sm font-semibold text-gold-600 transition hover:-translate-y-1 hover:bg-gold hover:text-white"
              >
                {f}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
