import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import ArrowMark from '../components/ArrowMark'
import { company, cta } from '../data/site'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build It Together"
        text="Share your drawings, BOQ, specifications and programme and we will come back with a deployment plan and commercial proposal."
        image="contact"
        crumbs={[['Contact']]}
      />
      <section className="relative overflow-hidden bg-gold-50 py-24">
        <ArrowMark className="absolute -right-20 top-10 h-96 w-96 text-gold/10" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <Reveal from="left" className="lg:col-span-2">
            <h2 className="font-display text-3xl font-bold md:text-4xl">How it works</h2>
            <ol className="mt-8 space-y-6">
              {cta.steps.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold font-display font-extrabold text-white">{i + 1}</span>
                  <div>
                    <p className="font-display text-lg font-bold">{s.title}</p>
                    <p className="text-sm text-charcoal/70">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <ul className="mt-10 space-y-3 text-sm">
              {company.email && <li><a className="font-semibold hover:text-gold" href={`mailto:${company.email}`}>{company.email}</a></li>}
              {company.phone && <li>{company.phone}</li>}
              {company.address && <li>{company.address}</li>}
              <li>
                <a href={company.url} target="_blank" rel="noreferrer" className="font-bold text-gold hover:text-charcoal">
                  {company.website}
                </a>
              </li>
            </ul>
          </Reveal>
          <Reveal from="right" className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-charcoal/5">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
