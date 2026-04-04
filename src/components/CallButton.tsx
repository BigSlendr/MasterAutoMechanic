import { Phone } from 'lucide-react'
import { BUSINESS } from '../config/business'

interface CallButtonProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'white'
  className?: string
}

export default function CallButton({ size = 'md', variant = 'primary', className = '' }: CallButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  }

  const iconSize = {
    sm: 14,
    md: 18,
    lg: 22,
  }

  const variantClasses = {
    primary: 'bg-brand-red text-white hover:bg-red-800 shadow-md',
    white: 'bg-white text-brand-red border-2 border-white hover:bg-gray-100 shadow-md',
  }

  return (
    <a
      href={BUSINESS.phoneHref}
      className={`inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-md transition-colors duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <Phone size={iconSize[size]} strokeWidth={2.5} />
      <span>Call Now — {BUSINESS.phone}</span>
    </a>
  )
}
