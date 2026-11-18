import { useState } from 'react'
import { resolveImage } from '../lib/cloudinary'
import { IMAGES } from '../data/images'
import ArrowMark from './ArrowMark'

// <CldImage name="hero1" /> looks up IMAGES.hero1 and loads it from Cloudinary.
// Until the cloud name is set (or if an image fails) a branded gold placeholder is shown.
export default function CldImage({
  name,
  id,
  alt = '',
  w = 1600,
  h,
  crop = 'fill',
  className = '',
  imgClassName = '',
}) {
  const [failed, setFailed] = useState(false)
  const publicId = id || IMAGES[name]
  const src = resolveImage(publicId, { w, h, crop })
  const showImg = src && !failed

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-gold-300 via-gold to-gold-600 ${className}`}>
      {!showImg && (
        <div className="absolute inset-0 grid place-items-center">
          <ArrowMark className="h-1/2 max-h-40 w-auto text-white/20" />
          {import.meta.env.DEV && publicId && (
            <span className="absolute bottom-2 left-3 rounded bg-charcoal/60 px-2 py-0.5 text-[10px] text-white/80">
              Cloudinary: {publicId}
            </span>
          )}
        </div>
      )}
      {showImg && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  )
}
