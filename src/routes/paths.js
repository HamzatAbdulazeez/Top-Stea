// One place for every URL in the site.
export const PATHS = {
  home: '/',
  about: '/about',
  services: '/services',
  construction: '/services/construction',
  service: (slug) => `/services/construction/${slug}`,
  maintenance: '/services/maintenance',
  maintenanceService: (slug) => `/services/maintenance/${slug}`,
  methodology: '/methodology',
  engagement: '/engagement',
  quality: '/quality-hse',
  contact: '/contact',
}
