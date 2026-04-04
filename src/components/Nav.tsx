import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, Wrench } from 'lucide-react'
import { BUSINESS } from '../config/business'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
            <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center">
              <Wrench size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="font-headline font-black text-gray-900 text-xl leading-none tracking-tight">
              Master Auto<br />
              <span className="text-brand-red">Mechanic</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {BUSINESS.nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors pb-0.5 ${
                    isActive
                      ? 'text-brand-red border-b-2 border-brand-red'
                      : 'text-gray-700 hover:text-brand-red'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={BUSINESS.phoneHref}
            className="hidden md:inline-flex items-center gap-2 bg-brand-red text-white font-bold px-5 py-2.5 rounded-md hover:bg-red-800 transition-colors text-sm uppercase tracking-wide"
          >
            <Phone size={15} strokeWidth={2.5} />
            {BUSINESS.phone}
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-30 bg-white flex flex-col pt-16">
          <nav className="flex flex-col px-6 pt-6 gap-1 flex-1">
            {BUSINESS.nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-2xl font-headline font-black py-4 border-b border-gray-100 transition-colors ${
                    isActive ? 'text-brand-red' : 'text-gray-800 hover:text-brand-red'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 pb-32 pt-6">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center justify-center gap-3 bg-brand-red text-white font-bold py-5 rounded-xl text-xl uppercase tracking-wide w-full"
              onClick={() => setOpen(false)}
            >
              <Phone size={22} strokeWidth={2.5} />
              Call Now — {BUSINESS.phone}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
