import { Phone, MapPin } from 'lucide-react'
import { BUSINESS } from '../config/business'

export default function MobileCallBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 flex" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <a
        href={BUSINESS.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 bg-brand-red text-white font-bold py-4 text-base uppercase tracking-wide min-h-[56px] active:bg-red-800 transition-colors"
      >
        <Phone size={18} strokeWidth={2.5} />
        <span>Call Now</span>
      </a>
      <a
        href={BUSINESS.address.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-brand-blue text-white font-bold py-4 text-base uppercase tracking-wide min-h-[56px] active:bg-blue-900 transition-colors"
      >
        <MapPin size={18} strokeWidth={2.5} />
        <span>Directions</span>
      </a>
    </div>
  )
}
