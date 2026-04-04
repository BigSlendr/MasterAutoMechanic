import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import CallButton from '../components/CallButton'
import HoursTable from '../components/HoursTable'
import { BUSINESS } from '../config/business'

export default function ContactPage() {
  return (
    <div>
      {/* ── Hero band ── */}
      <section className="bg-brand-red py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-red-200 font-bold uppercase tracking-widest text-sm mb-2">Reach Us</p>
          <h1 className="font-headline font-black text-4xl sm:text-5xl text-white leading-tight mb-3">Contact Us</h1>
          <p className="text-red-100 text-lg max-w-xl leading-relaxed">
            The fastest way to reach us is by phone. Call now and we will get you taken care of.
          </p>
        </div>
      </section>

      {/* ── Phone CTA ── */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-b border-gray-100">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
            <Phone className="text-brand-red" size={28} strokeWidth={2} />
          </div>
          <h2 className="font-headline font-black text-3xl sm:text-4xl text-gray-900">Give Us a Call</h2>
          <p className="text-gray-600 text-lg max-w-md">
            The fastest way to reach us is by phone. No forms, no waiting — just call.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="text-brand-red font-black text-3xl sm:text-4xl font-headline hover:underline"
          >
            {BUSINESS.phone}
          </a>
          <CallButton size="lg" />
        </div>
      </section>

      {/* ── Info grid ── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <MapPin className="text-brand-blue" size={20} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Address</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{BUSINESS.address.full}</p>
            <a
              href={BUSINESS.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:underline"
            >
              <Navigation size={14} />
              Open in Google Maps
            </a>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Clock className="text-brand-blue" size={20} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Hours</h3>
            </div>
            <HoursTable />
            <p className="text-sm text-gray-500 mt-1 italic">Walk-ins welcome during business hours.</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Phone className="text-brand-blue" size={20} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
            </div>
            <a href={BUSINESS.phoneHref} className="text-brand-red font-bold text-xl hover:underline">
              {BUSINESS.phone}
            </a>
            <p className="text-gray-600 text-sm leading-relaxed">
              Call during business hours for service, estimates, or any questions about your vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* ── Map placeholder ── */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 flex flex-col items-center justify-center py-16 gap-4">
          <MapPin className="text-brand-blue" size={48} strokeWidth={1.5} />
          <h3 className="font-headline font-black text-2xl text-gray-800">
            {BUSINESS.address.full}
          </h3>
          <p className="text-gray-500 text-sm">Staten Island, New York</p>
          <a
            href={BUSINESS.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold px-6 py-3 rounded-md hover:bg-blue-900 transition-colors uppercase tracking-wide text-sm"
          >
            <Navigation size={16} />
            Get Directions
          </a>
        </div>
      </section>

      {/* ── Directions note ── */}
      <section className="bg-gray-50 py-12 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-headline font-black text-2xl text-gray-900 mb-3">Finding Us</h3>
            <p className="text-gray-600 leading-relaxed">
              We are located at 20 Giffords Glen on Staten Island. Parking is available on-site. Walk-ins are welcome during our regular business hours — no appointment necessary for most services.
            </p>
          </div>
          <div className="text-sm text-gray-500 bg-yellow-50 border border-yellow-100 rounded-xl p-5">
            <p className="font-semibold text-gray-800 mb-1">On mobile?</p>
            <p>Tap the <span className="font-medium text-brand-red">Call Now</span> or <span className="font-medium text-brand-blue">Get Directions</span> bar at the bottom of your screen to reach us instantly.</p>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-brand-red py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline font-black text-3xl sm:text-4xl text-white mb-4">Ready to Bring Your Car In?</h2>
          <p className="text-red-100 text-lg mb-8">
            Call us now and let us know what is going on. We will get you sorted.
          </p>
          <CallButton size="lg" variant="white" />
          <p className="mt-4 text-brand-yellow font-bold text-xl">{BUSINESS.phone}</p>
        </div>
      </section>
    </div>
  )
}
