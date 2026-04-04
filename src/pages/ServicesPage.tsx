import CallButton from '../components/CallButton'
import ServiceCard from '../components/ServiceCard'
import { BUSINESS } from '../config/business'

export default function ServicesPage() {
  const services = BUSINESS.services

  // Split services into chunks of 4 to inject CTA bands between
  const chunks: (typeof services[number])[][] = []
  for (let i = 0; i < services.length; i += 4) {
    chunks.push(services.slice(i, i + 4) as (typeof services[number])[])
  }

  return (
    <div>
      {/* ── Hero band ── */}
      <section className="bg-brand-red py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-red-200 font-bold uppercase tracking-widest text-sm mb-2">What We Do</p>
          <h1 className="font-headline font-black text-4xl sm:text-5xl text-white leading-tight mb-3">Our Services</h1>
          <p className="text-red-100 text-lg max-w-xl leading-relaxed">
            From routine maintenance to complex repairs — we handle it all for Staten Island drivers.
          </p>
        </div>
      </section>

      {/* ── Services grid with CTA bands ── */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-12">
        {chunks.map((chunk, idx) => (
          <div key={idx}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {chunk.map((service) => (
                <ServiceCard
                  key={service.name}
                  name={service.name}
                  icon={service.icon}
                  description={service.description}
                  size="lg"
                />
              ))}
            </div>
            {/* CTA band between chunks (not after last) */}
            {idx < chunks.length - 1 && (
              <div className="mt-10 bg-gray-50 border border-gray-200 rounded-xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-headline font-black text-xl sm:text-2xl text-gray-900 text-center sm:text-left">
                  Have a question about your vehicle?
                </p>
                <CallButton size="md" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Don't see your service ── */}
      <section className="bg-brand-red py-14 px-4 mt-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline font-black text-3xl sm:text-4xl text-white mb-4">Don't See Your Service Listed?</h2>
          <p className="text-red-100 text-lg leading-relaxed mb-8">
            We handle most makes and models. Call us today and describe the issue — chances are we can help.
          </p>
          <CallButton size="lg" variant="white" />
        </div>
      </section>
    </div>
  )
}
