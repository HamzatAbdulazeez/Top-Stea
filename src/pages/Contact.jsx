import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import SocialLinks from '../components/SocialLinks'
import { company, cta } from '../data/site'

const Ico = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
    {children}
  </svg>
)

const cards = [
  {
    title: 'Call us',
    lines: [[company.phone, company.phoneHref]],
    icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  },
  {
    title: 'WhatsApp',
    lines: [[company.phone, company.whatsappHref]],
    icon: <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.5L3 21zM9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2L9 9.5z" />,
  },
  {
    title: 'Email',
    lines: company.emails.map((m) => [m, `mailto:${m}`]),
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    title: 'Office',
    lines: [[company.address]],
    icon: (
      <>
        <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>
    ),
  },
]

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

      {/* contact cards */}
      <section className="relative z-10 -mt-14 pb-6">
        <div className="mx-auto grid Resizer gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="h-full rounded-2xl border-t-4 border-gold bg-white p-6 shadow-xl ring-1 ring-charcoal/5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-50 text-gold-600">
                  <Ico>{c.icon}</Ico>
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
                <ul className="mt-2 space-y-1 text-sm text-charcoal/75">
                  {c.lines.map(([text, href]) => (
                    <li key={text} className="break-words">
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="font-semibold hover:text-gold">
                          {text}
                        </a>
                      ) : (
                        text
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid Resizer gap-12 px-6 lg:grid-cols-5">
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
            <p className="mt-10 font-display text-sm font-bold uppercase tracking-widest text-gold">Follow Top-Stea</p>
            <SocialLinks tone="light" className="mt-3" />
          </Reveal>
          <Reveal from="right" className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-charcoal/5">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* map */}
      <section className="bg-gold-50 py-16">
        <div className="mx-auto Resizer px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-charcoal/10">
              <iframe
                title="TOP-STEA office location"
                src="https://www.google.com/maps?q=Lake+Point+Towers+Banana+Island+Ikoyi+Lagos+Nigeria&output=embed"
                className="h-[380px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
