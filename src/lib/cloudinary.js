// Image helper. An image reference can be:
//   1. a Cloudinary public ID            -> 'topstea/hero-1'   (needs VITE_CLOUDINARY_CLOUD_NAME in .env)
//   2. a full URL                        -> 'https://.../photo.jpg'
//   3. a local file in /public           -> '/images/hero-1.jpg'
const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

export const cld = (publicId, { w, h, crop = 'fill', gravity = 'auto' } = {}) => {
  if (!CLOUD || CLOUD === 'your-cloud-name' || !publicId) return null
  const t = ['f_auto', 'q_auto', `c_${crop}`, `g_${gravity}`]
  if (w) t.push(`w_${w}`)
  if (h) t.push(`h_${h}`)
  return `https://res.cloudinary.com/${CLOUD}/image/upload/${t.join(',')}/${publicId}`
}

export const resolveImage = (ref, opts) => {
  if (!ref) return null
  if (/^https?:\/\//i.test(ref) || ref.startsWith('/') || ref.startsWith('data:')) return ref
  return cld(ref, opts)
}
