import { Link } from 'react-router-dom'
import { Clock, MapPin, Phone, CheckCircle, ArrowRight } from 'lucide-react'
import CallButton from '../components/CallButton'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import HoursTable from '../components/HoursTable'
import { BUSINESS } from '../config/business'

function getTodayHours(): string {
  const day = new Date().getDay()
  if (day >= 1 && day <= 5) return BUSINESS.hours[0].hours
  if (day === 6) return BUSINESS.hours[1].hours
  return BUSINESS.hours[2].hours
}

const TRUST_PILLARS = [
  {
    icon: CheckCircle,
    title: 'Honest Estimates',
    desc: 'No surprises, no upselling. We tell you what your car needs and what it costs — upfront.',
  },
  {
    icon: CheckCircle,
    title: 'Experienced Technicians',
    desc: 'Years of hands-on expertise across all makes and models. We have seen it and fixed it.',
  },
  {
    icon: CheckCircle,
    title: 'Fast Turnaround',
    desc: 'We respect your time. Most repairs are completed the same day so you are never left waiting.',
  },
  {
    icon: CheckCircle,
    title: 'Clear Communication',
    desc: 'We explain everything before we start. You approve the work — no hidden surprises on the bill.',
  },
]

export default function HomePage() {
  const todayHours = getTodayHours()
  const previewServices = BUSINESS.services.slice(0, 6)

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[580px] flex items-center"
        style={{
          backgroundImage: 'url(/img/MasterAutoMechanic.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Light warm overlay */}
        <div className="absolute inset-0 bg-white/75" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 w-full">
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">Staten Island, NY</p>
          <h1 className="font-headline font-black text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-none mb-5 max-w-2xl">
            Trusted Auto Repair in Staten Island
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl mb-8">
            From diagnostics and inspections to brakes, oil changes, A/C service, and maintenance — Master Auto Mechanic keeps Staten Island drivers safely on the road.
          </p>
          <CallButton size="lg" />
          <p className="mt-5 text-gray-600 text-sm">
            <span className="font-medium">{BUSINESS.address.full}</span>
            <span className="mx-2">·</span>
            <span>Today: {todayHours}</span>
          </p>
        </div>
      </section>

      {/* ── Info Bar ── */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 border-l-4 border-brand-yellow pl-4">
            <Clock className="text-brand-blue mt-0.5 shrink-0" size={20} />
            <div>
              <p className="font-bold text-gray-900 text-sm">Today's Hours</p>
              <p className="text-gray-600 text-sm">{todayHours}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 border-l-4 border-brand-yellow pl-4">
            <MapPin className="text-brand-blue mt-0.5 shrink-0" size={20} />
            <div>
              <p className="font-bold text-gray-900 text-sm">{BUSINESS.address.full}</p>
              <a
                href={BUSINESS.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue text-sm font-medium hover:underline"
              >
                Get Directions →
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 border-l-4 border-brand-yellow pl-4">
            <Phone className="text-brand-blue mt-0.5 shrink-0" size={20} />
            <div>
              <p className="font-bold text-gray-900 text-sm">Call Us Anytime</p>
              <a href={BUSINESS.phoneHref} className="text-brand-red text-sm font-bold hover:underline">
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="font-headline font-black text-3xl sm:text-4xl text-gray-900 mb-3">Services That Keep You Moving</h2>
          <div className="w-16 h-1 bg-brand-yellow rounded" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {previewServices.map((service) => (
            <ServiceCard key={service.name} name={service.name} icon={service.icon} description={service.description} />
          ))}
        </div>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-brand-red font-bold hover:gap-3 transition-all"
        >
          View All Services <ArrowRight size={18} />
        </Link>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-gray-50 py-16 px-4 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="font-headline font-black text-3xl sm:text-4xl text-gray-900 mb-3">Why Staten Island Drivers Trust Us</h2>
            <div className="w-16 h-1 bg-brand-yellow rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRUST_PILLARS.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p.icon className="text-brand-blue mb-3" size={24} strokeWidth={2} />
                <h3 className="font-headline font-bold text-lg text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline font-black text-3xl sm:text-4xl text-gray-900 mb-2">Skilled Repairs. Straightforward Service.</h2>
            <div className="w-16 h-1 bg-brand-yellow rounded mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Master Auto Mechanic has been keeping Staten Island vehicles road-ready for years. We are a local shop — not a chain, not a franchise — which means you deal directly with people who know your car and care about getting it right.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We work on most makes and models and handle everything from routine oil changes to complex diagnostics. Our priority is always the same: give you an honest assessment, complete the work correctly, and get you back on the road.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-brand-red font-bold hover:gap-3 transition-all"
            >
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <img
              src="/img/MasterAutoMechanic2.jpg"
              alt="Master Auto Mechanic shop exterior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 px-4 bg-amber-50 border-y border-yellow-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="font-headline font-black text-3xl sm:text-4xl text-gray-900 mb-3">What Our Customers Say</h2>
            <div className="w-16 h-1 bg-brand-yellow rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BUSINESS.testimonials.map((t) => (
              <TestimonialCard key={t.name} name={t.name} rating={t.rating} text={t.text} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Hours & Location ── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="font-headline font-black text-3xl sm:text-4xl text-gray-900 mb-3">Find Us in Staten Island</h2>
            <div className="w-16 h-1 bg-brand-yellow rounded" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Hours of Operation</h3>
              <HoursTable />
              <div className="mt-8">
                <CallButton size="md" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Our Location</h3>
              <div className="bg-gray-100 rounded-xl overflow-hidden aspect-[4/3] flex flex-col items-center justify-center gap-3 border border-gray-200">
                <MapPin className="text-brand-blue" size={36} />
                <p className="font-semibold text-gray-800 text-center px-4">{BUSINESS.address.full}</p>
                <a
                  href={BUSINESS.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold px-5 py-2.5 rounded-md hover:bg-blue-900 transition-colors text-sm uppercase tracking-wide"
                >
                  <MapPin size={15} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA Strip ── */}
      <section className="bg-brand-red py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline font-black text-3xl sm:text-5xl text-white mb-4 leading-tight">Ready to Get Your Car Fixed?</h2>
          <p className="text-red-100 text-lg mb-8 leading-relaxed">
            Call us today — no forms, no waiting. Just reliable auto repair from a team you can trust.
          </p>
          <CallButton size="lg" variant="white" />
          <p className="mt-5 text-brand-yellow font-bold text-2xl">{BUSINESS.phone}</p>
        </div>
      </section>
    </div>
  )
}
