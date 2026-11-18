// Cloudinary public IDs for every picture on the site.
// Upload your photos to Cloudinary, then change the IDs below to match
// (the public ID is the path shown in Cloudinary, without the file extension).
// You can also paste a full https:// image URL, or a local file path like '/images/hero-1.jpg'
// (put the file in the /public/images folder).
export const IMAGES = {
  hero1: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983355/Top-Stea-images/Picture6_x7px4c.png',
  hero2: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983357/Top-Stea-images/Picture7_axbfew.png',
  hero3: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983359/Top-Stea-images/Picture11_ilwtk0.png',
  about: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794981884/Top-Stea-images/Picture1_1_dixc0r.png',
  aboutSecondary: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794981884/Top-Stea-images/Picture1_1_dixc0r.png',
  mechanical: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982889/Top-Stea-images/2149250243-1920x1200-1_mh3sgk.jpg',
  electrical: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983354/Top-Stea-images/Picture3_rye5b1.png',
  plumbing: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983355/Top-Stea-images/Picture4_av5x5g.png',
  fire: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982895/Top-Stea-images/upscalemedia-transformed_uio1ye.png',
  elv: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982888/Top-Stea-images/our-goals-img-1_ls5d3e.jpg',
  methodology: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983360/Top-Stea-images/Picture12_plcl3l.png',
  engagement: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983359/Top-Stea-images/Picture11_ilwtk0.png',
  quality: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983357/Top-Stea-images/Picture8_t26ubp.png',
  contact: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983363/Top-Stea-images/Picture15_ayyscs.png',
  cta: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983358/Top-Stea-images/Picture10_gxsjep.png',
  services: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983361/Top-Stea-images/Picture13_ccbem4.png',
  construction: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983355/Top-Stea-images/Picture6_x7px4c.png',
  maintenance: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983362/Top-Stea-images/Picture14_heruky.png',
  housekeeping: 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983357/Top-Stea-images/Picture9_t95pjd.png',
}

// ---------------------------------------------------------------------------
// SERVICE IMAGES
// Each service page shows: a main image (IMAGES.mechanical, etc. above), one picture on top of
// every group card (GROUP_IMAGES) and a photo gallery (SERVICE_GALLERY).
// Paste a Cloudinary public ID or a full https:// URL for each slot. Empty or missing = gold placeholder.
// Keys are the service slugs. Add or remove gallery photos freely (4 to 7 looks best).
// ---------------------------------------------------------------------------
export const GROUP_IMAGES = {
  mechanical: ['https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982889/Top-Stea-images/2149250243-1920x1200-1_mh3sgk.jpg', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982890/Top-Stea-images/Plant2_js7hva.jpg'],
  electrical: ['https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983354/Top-Stea-images/Picture3_rye5b1.png', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983358/Top-Stea-images/Picture10_gxsjep.png', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983357/Top-Stea-images/Picture8_t26ubp.png'],
  plumbing: ['https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983355/Top-Stea-images/Picture4_av5x5g.png', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982890/Top-Stea-images/Plant2_js7hva.jpg'],
  'fire-protection': ['https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982895/Top-Stea-images/upscalemedia-transformed_uio1ye.png', 'topstea/fire-alarm', 'topstea/fire-testing'],
  'elv-technical-systems': ['https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982888/Top-Stea-images/our-goals-img-1_ls5d3e.jpg', 'topstea/elv-security', 'topstea/elv-bms'],
}

export const SERVICE_GALLERY = {
  mechanical: ['https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982889/Top-Stea-images/2149250243-1920x1200-1_mh3sgk.jpg', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982886/Top-Stea-images/imgi_8_testin-and-air-balance_hrkzrx.png', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982890/Top-Stea-images/Plant2_js7hva.jpg', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982888/Top-Stea-images/2149250250-1300x1300-1_mh4s7f.jpg', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983358/Top-Stea-images/Picture10_gxsjep.png'],
  electrical: ['https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983354/Top-Stea-images/Picture3_rye5b1.png', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983358/Top-Stea-images/Picture10_gxsjep.png', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983357/Top-Stea-images/Picture8_t26ubp.png', 'topstea/electrical-g4', 'topstea/electrical-g5'],
  plumbing: ['https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983355/Top-Stea-images/Picture4_av5x5g.png', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982890/Top-Stea-images/Plant2_js7hva.jpg', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983362/Top-Stea-images/Picture14_heruky.png', 'topstea/plumbing-g4', 'topstea/plumbing-g5'],
  'fire-protection': ['https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982895/Top-Stea-images/upscalemedia-transformed_uio1ye.png', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983360/Top-Stea-images/Picture12_plcl3l.png', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983362/Top-Stea-images/Picture14_heruky.png', 'topstea/fire-g4', 'topstea/fire-g5'],
  'elv-technical-systems': ['https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794982888/Top-Stea-images/our-goals-img-1_ls5d3e.jpg', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983361/Top-Stea-images/Picture13_ccbem4.png', 'topstea/elv-g3', 'topstea/elv-g4', 'topstea/elv-g5'],
  'house-keeping-services': ['https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983357/Top-Stea-images/Picture9_t95pjd.png', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983362/Top-Stea-images/Picture14_heruky.png', 'https://res.cloudinary.com/ddj0k8gdw/image/upload/v1794983357/Top-Stea-images/Picture8_t26ubp.png', 'topstea/housekeeping-g4', 'topstea/housekeeping-g5'],
}
