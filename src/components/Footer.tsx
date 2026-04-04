import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, Wrench } from 'lucide-react'
import { BUSINESS } from '../config/business'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t-4 border-brand-red mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Col 1: Logo + tagline + phone */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-brand-red rounded flex items-center justify-center">
                <Wrench size={18} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-headline font-black text-gray-900 text-xl leading-tight">
                Master Auto<br />
                <span className="text-brand-red">Mechanic</span>
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Trusted auto repair for Staten Island drivers. Honest work, fair prices, and the experience to back it up.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 text-brand-red font-bold text-lg hover:underline"
            >
              <Phone size={18} strokeWidth={2.5} />
              {BUSINESS.phone}
            </a>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <h3 className="font-headline font-black text-gray-900 text-lg mb-4 uppercase tracking-wide">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {BUSINESS.nav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-600 hover:text-brand-red transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Hours + address */}
          <div className="flex flex-col gap-4">
            <h3 className="font-headline font-black text-gray-900 text-lg uppercase tracking-wide">Hours & Location</h3>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <Clock size={16} className="text-brand-blue mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1">
                {BUSINESS.hours.map((h) => (
                  <span key={h.days}><span className="font-medium text-gray-700">{h.days}:</span> {h.hours}</span>
                ))}
              </div>
            </div>
            <a
              href={BUSINESS.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-gray-600 hover:text-brand-red transition-colors"
            >
              <MapPin size={16} className="text-brand-blue mt-0.5 shrink-0" />
              <span>{BUSINESS.address.full}</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <span>© {year} {BUSINESS.name}. All rights reserved.</span>
          <span>Staten Island, NY</span>
        </div>
      </div>
    </footer>
  )
}
