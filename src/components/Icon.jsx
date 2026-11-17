const paths = {
  mech: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 9.8C12 6 9.5 3.5 7 4.5c-1.6.7-1.2 3 .8 4.2l4.2 1.1zM14.2 12c3.8 0 6.3 2.5 5.3 5-.7 1.6-3 1.2-4.2-.8L14.2 12zM12 14.2c0 3.8 2.5 6.3-.0 5.3-1.6-.7-1.2-3 .8-4.2l-.8-1.1zM9.8 12c-3.8 0-6.3-2.5-5.3-5 .7-1.6 3-1.2 4.2.8L9.8 12z" />
    </>
  ),
  elec: <path d="M13 2 4 14h6l-1 8 9-12h-6z" />,
  plumb: <path d="M12 2C9 7 6 10 6 14a6 6 0 0 0 12 0c0-4-3-7-6-12z" />,
  fire: (
    <path d="M12 2s1 4-2 6c-2 1.5-3 3.5-3 6a5 5 0 0 0 10 0c0-2-1-3.5-2-4.5 0 2-1 3-2 3 1-3 0-7-1-10.5z" />
  ),
  elv: (
    <>
      <path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="19.5" r="1.6" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
}

export default function Icon({ name, className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
