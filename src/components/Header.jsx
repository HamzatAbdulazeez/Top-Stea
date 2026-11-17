import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, services } from '../data/site'
import { PATHS } from '../routes/paths'

const linkBase =
  "relative block px-3 py-2 font-display text-[13px] font-semibold uppercase tracking-wide transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-gold hover:after:scale-x-100"

function Chevron({ open = false }) {
  return (
    <svg className={`h-3 w-3 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
      <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const [sub, setSub] = useState(false)
  const [progress, setProgress] = useState(0)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const h = document.documentElement
      setProgress((h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1)) * 100)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawer(false)
    setSub(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : ''
  }, [drawer])

  const navClass = ({ isActive }) => `${linkBase} ${isActive ? 'text-gold after:scale-x-100' : 'text-charcoal'}`

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 py-2 shadow-lg backdrop-blur' : 'bg-white/85 py-4 backdrop-blur-sm'
        }`}
      >
        <span className="absolute bottom-0 left-0 h-[3px] bg-gold" style={{ width: `${progress}%` }} />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link to={PATHS.home} aria-label="TOP-STEA home">
            <img src="/logo.png" alt="TOP-STEA" className={`w-auto transition-all duration-300 ${scrolled ? 'h-9' : 'h-11'}`} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <NavLink to={item.to} className={(s) => `${navClass(s)} flex items-center gap-1.5`}>
                    {item.label}
                    <Chevron />
                  </NavLink>
                  <div className="invisible absolute left-0 top-full z-50 w-80 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-2xl border-t-4 border-gold bg-white p-3 shadow-2xl">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={PATHS.service(s.slug)}
                          className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-charcoal transition hover:translate-x-1 hover:bg-gold-50 hover:text-gold"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink key={item.label} to={item.to} end={item.end} className={navClass}>
                  {item.label}
                </NavLink>
              ),
            )}
            <Link
              to={PATHS.contact}
              className="ml-3 rounded-full bg-gold px-6 py-2.5 font-display text-[13px] font-bold uppercase tracking-wide text-white shadow-lg shadow-gold/30 transition hover:-translate-y-0.5 hover:bg-charcoal hover:shadow-xl"
            >
              Submit Your Scope
            </Link>
          </nav>

          <button
            className="grid h-11 w-11 place-items-center rounded-xl bg-gold-50 lg:hidden"
            onClick={() => setDrawer(true)}
            aria-label="Open menu"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-charcoal" />
              <span className="block h-0.5 w-5 bg-charcoal" />
              <span className="block h-0.5 w-3 bg-gold" />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          drawer ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setDrawer(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-[85%] max-w-sm overflow-y-auto bg-charcoal p-6 transition-transform duration-500 lg:hidden ${
          drawer ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="rounded-lg bg-white px-3 py-2">
            <img src="/logo.png" alt="TOP-STEA" className="h-8 w-auto" />
          </span>
          <button onClick={() => setDrawer(false)} className="text-3xl text-white" aria-label="Close menu">
            ×
          </button>
        </div>
        <ul>
          {nav.map((item) => (
            <li key={item.label} className="border-b border-white/10">
              <div className="flex items-center justify-between">
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex-1 py-3 font-display text-sm font-semibold uppercase tracking-wide ${isActive ? 'text-gold-300' : 'text-white'}`
                  }
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <button onClick={() => setSub((s) => !s)} className="p-3 text-white" aria-label="Toggle services">
                    <Chevron open={sub} />
                  </button>
                )}
              </div>
              {item.children && (
                <ul className={`overflow-hidden pl-3 transition-all duration-500 ${sub ? 'max-h-96 pb-3' : 'max-h-0'}`}>
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link to={PATHS.service(s.slug)} className="block py-2 text-sm text-white/80">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Link
          to={PATHS.contact}
          className="mt-8 block w-full rounded-full bg-gold py-3 text-center font-display text-sm font-bold uppercase tracking-wide text-white"
        >
          Submit Your Scope
        </Link>
      </aside>
    </>
  )
}
