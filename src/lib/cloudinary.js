// Cloudinary helper. Set VITE_CLOUDINARY_CLOUD_NAME in .env, then put each image's
// public ID in src/data/images.js. Delivery URL = f_auto (best format) + q_auto (best quality/size).
const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

export const cld = (publicId, { w, h, crop = 'fill', gravity = 'auto' } = {}) => {
  if (!CLOUD || CLOUD === 'your-cloud-name' || !publicId) return null
  const t = ['f_auto', 'q_auto', `c_${crop}`, `g_${gravity}`]
  if (w) t.push(`w_${w}`)
  if (h) t.push(`h_${h}`)
  return `https://res.cloudinary.com/${CLOUD}/image/upload/${t.join(',')}/${publicId}`
}
