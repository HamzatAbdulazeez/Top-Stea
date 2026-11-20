import { company } from '../data/site'

const icons = {
  Facebook: <path d="M13.5 21v-7.5H16l.5-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z" />,
  Instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.8" cy="7.2" r="1.1" />
    </>
  ),
  LinkedIn: <path d="M6.5 9.5h-3V20h3V9.5zM5 4.5A1.8 1.8 0 1 0 5 8a1.8 1.8 0 0 0 0-3.5zM20.5 20v-6c0-3-1.6-4.7-4-4.7-1.4 0-2.4.8-2.8 1.5V9.5h-3V20h3v-5.7c0-1.5.8-2.4 2-2.4s1.8.9 1.8 2.4V20h3z" />,
  X: <path d="M17.7 4h2.8l-6.1 7 7.2 9h-5.6l-4.4-5.5L6.4 20H3.6l6.5-7.5L3.2 4h5.7l4 5.1L17.7 4zm-1 14.3h1.5L8.4 5.6H6.8l9.9 12.7z" />,
  YouTube: <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.7 2 12 2 12s0 3.3.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.5.4-4.8.4-4.8s0-3.3-.4-4.8zM10 15V9l5.2 3L10 15z" />,
}

export default function SocialLinks({ className = '', tone = 'dark' }) {
  const base = tone === 'dark' ? 'bg-white/10 text-white hover:bg-gold' : 'bg-gold-50 text-gold-600 hover:bg-gold hover:text-white'
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {company.socials.map((s) => (
        <li key={s.name}>
          <a
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`TOP-STEA on ${s.name}`}
            title={`${s.name}: Top-Stea`}
            className={`grid h-10 w-10 place-items-center rounded-full transition hover:-translate-y-1 ${base}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              {icons[s.name]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
