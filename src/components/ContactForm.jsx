import { useState } from 'react'

const field =
  'w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20'

export default function ContactForm({ variant = 'scope' }) {
  const visit = variant === 'visit'
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    // TODO: send the form to your backend / email service here (Formspree, EmailJS, your API...).
    setSent(true)
  }

  if (sent) {
    return (
      <div className="animate-pop rounded-2xl bg-gold-50 p-10 text-center">
        <p className="font-display text-2xl font-bold text-gold-600">Thank you!</p>
        <p className="mt-2 text-sm text-charcoal/70">
          We have received your message. Our team will review it and come back to you with next steps.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={field} name="name" placeholder="Full name" required />
        <input className={field} name="company" placeholder="Company" />
        <input className={field} type="email" name="email" placeholder="Email" required />
        <input className={field} type="tel" name="phone" placeholder="Phone" />
      </div>
      {!visit && (
        <select className={field} name="model" defaultValue="" required>
          <option value="" disabled>
            Engagement model
          </option>
          <option>Day-Rate / Manpower Supply</option>
          <option>Project-Based / Lump-Sum</option>
          <option>Programme Recovery</option>
          <option>Not sure yet</option>
        </select>
      )}
      <textarea
        className={field}
        name="message"
        rows={5}
        placeholder={visit ? 'Tell us about your site and what you need (type of facility, size, preferred visit date)' : 'Tell us about your project: location, floors/zones, disciplines, programme and manpower requirements'}
        required
      />
      <button
        type="submit"
        className="w-full rounded-full bg-gold py-3.5 font-display font-bold uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-charcoal hover:shadow-xl"
      >
        {visit ? 'Submit Message' : 'Submit Your Scope'}
      </button>
    </form>
  )
}
