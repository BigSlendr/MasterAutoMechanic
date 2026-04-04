import { CheckCircle, Users, Clock, MessageSquare, Wrench } from 'lucide-react'
import CallButton from '../components/CallButton'

const VALUE_PILLARS = [
  {
    icon: CheckCircle,
    title: 'Honest Estimates',
    desc: "We tell you exactly what needs to be done and what it costs before we touch your vehicle. No hidden fees, no upselling, no surprises on the final bill. If we find something you didn't come in for, we show you — and let you decide.",
  },
  {
    icon: Wrench,
    title: 'Experienced Technicians',
    desc: "Our mechanics have worked on virtually every make and model over the years. Foreign, domestic, older vehicles, newer ones with complex electronics — we have the experience and the tools to diagnose and fix it right.",
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    desc: "We know you depend on your vehicle. We work efficiently without cutting corners, and we do our best to complete same-day repairs whenever possible. Your time matters to us.",
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    desc: "We walk you through what we found and what we recommend. You will never feel confused or pressured. Ask us anything — we are happy to explain the work in plain language.",
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[340px] flex items-end"
        style={{
          backgroundImage: 'url(/img/MasterAutoMechanic.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-12 pt-20 w-full">
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Our Story</p>
          <h1 className="font-headline font-black text-4xl sm:text-5xl text-gray-900 leading-tight">About Master Auto Mechanic</h1>
        </div>
      </section>

      {/* ── About text ── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 flex flex-col gap-5 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Master Auto Mechanic is a locally owned and operated auto repair shop serving Staten Island, NY. We are not a chain and we are not a franchise — we are mechanics who live and work in this community, and we take pride in the work we do.
            </p>
            <p>
              We have been working on vehicles in Staten Island for years, and in that time we have built a reputation for one simple thing: doing the job right and treating customers with respect. You will never hear "we have to order that part" as an excuse to keep your car longer than necessary, and you will never see charges on your bill that were not discussed first.
            </p>
            <p>
              Our shop handles most makes and models — American, European, Asian, older classics, and newer vehicles with all the modern electronics. If something is wrong with your vehicle, call us. We will take a look, give you an honest assessment, and get you back on the road.
            </p>
            <p>
              We work on everything from routine oil changes and NY State inspections to brake jobs, engine diagnostics, A/C service, transmission work, and general repairs. Whatever your vehicle needs, the answer is usually a phone call away.
            </p>
          </div>
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <img
              src="/img/MasterAutoMechanic2.jpg"
              alt="Master Auto Mechanic exterior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Value pillars ── */}
      <section className="bg-gray-50 py-16 px-4 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="font-headline font-black text-3xl sm:text-4xl text-gray-900 mb-3">What You Can Expect From Us</h2>
            <div className="w-16 h-1 bg-brand-yellow rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUE_PILLARS.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <p.icon className="text-brand-blue shrink-0" size={22} strokeWidth={2} />
                  <h3 className="font-headline font-bold text-xl text-gray-900">{p.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Community note ── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-start gap-4">
          <Users className="text-brand-blue shrink-0 mt-1" size={28} />
          <div>
            <h2 className="font-headline font-black text-2xl sm:text-3xl text-gray-900 mb-4">A Shop That Knows Its Customers</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              Many of our customers have been coming to us for years — and they send their family and friends. That kind of trust is something we earn every day, one repair at a time. When you bring your car here, you are not just a ticket number. We remember your vehicle, your history, and what matters to you.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-red py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline font-black text-3xl sm:text-4xl text-white mb-4">Call to Schedule Your Repair</h2>
          <p className="text-red-100 text-lg mb-8 leading-relaxed">
            Give us a call and tell us what is going on with your vehicle. We will take it from there.
          </p>
          <CallButton size="lg" variant="white" />
        </div>
      </section>
    </div>
  )
}
