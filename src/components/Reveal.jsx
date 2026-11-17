import useInView from '../hooks/useInView'

const hiddenState = {
  up: 'translate-y-10',
  left: '-translate-x-10',
  right: 'translate-x-10',
  zoom: 'scale-90',
}

export default function Reveal({ children, delay = 0, from = 'up', className = '', as: Tag = 'div' }) {
  const [ref, seen] = useInView()
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        seen ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : `opacity-0 ${hiddenState[from]}`
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
