// ---------------------------------------------------------------------------
// HERO BANNER SLIDES: this is the file to edit to change the banner.
//
//  * Add, remove or reorder slides freely: the slider, dots and thumbnails adapt.
//  * `image` can be any of:
//      - a Cloudinary public ID      'topstea/hero-1'
//      - a full image URL            'https://res.cloudinary.com/.../photo.jpg'
//      - a local file in /public     '/images/hero-1.jpg'
//  * `accent` is the word (inside the title) that is highlighted in gold.
// ---------------------------------------------------------------------------
export const heroSlides = [
  {
    image: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983355/Top-Stea-images/Picture6_x7px4c.png',
    alt: 'MEPF engineers on site',
    kicker: 'MEPF beyond expectations',
    title: 'Engineering excellence.',
    accent: 'excellence.',
    text: 'Qualified technical manpower, experienced site supervision and specialist MEPF installation teams.',
    cta: { label: 'Submit Your Scope', to: '/contact' },
    cta2: { label: 'Explore Services', to: '/services' },
  },
  {
    image: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983357/Top-Stea-images/Picture7_axbfew.png',
    alt: 'Rapid mobilisation of technical teams',
    kicker: 'Fast-track delivery',
    title: 'Rapid mobilisation.',
    accent: 'mobilisation.',
    text: 'Supervisors and foremen first, full workforce second, deployed incrementally to match your programme.',
    cta: { label: 'Our Methodology', to: '/methodology' },
    cta2: { label: 'Submit Your Scope', to: '/contact' },
  },
  {
    image: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983359/Top-Stea-images/Picture11_ilwtk0.png',
    alt: 'Flexible MEPF project delivery',
    kicker: 'Two engagement models',
    title: 'Flexible MEPF delivery.',
    accent: 'MEPF',
    text: 'From manpower supply to full project execution.',
    cta: { label: 'Engagement Models', to: '/engagement' },
    cta2: { label: 'Explore Services', to: '/services' },
  },
]

// The glass strip at the bottom of the banner (desktop). Edit or delete freely.
export const heroStats = [
  ['4', 'MEPF disciplines'],
  ['10+', 'Engineering roles'],
  ['7', 'Supervisor categories'],
  ['100+', 'Skilled trades'],
]
