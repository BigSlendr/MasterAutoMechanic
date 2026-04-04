import {
  Cpu,
  ClipboardCheck,
  Disc,
  Droplets,
  Wind,
  CircleDot,
  Thermometer,
  Settings,
  Wrench,
  Car,
  LucideIcon,
} from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  cpu: Cpu,
  'clipboard-check': ClipboardCheck,
  disc: Disc,
  droplets: Droplets,
  wind: Wind,
  'circle-dot': CircleDot,
  thermometer: Thermometer,
  settings: Settings,
  wrench: Wrench,
  car: Car,
}

interface ServiceCardProps {
  name: string
  icon: string
  description: string
  size?: 'sm' | 'lg'
}

export default function ServiceCard({ name, icon, description, size = 'sm' }: ServiceCardProps) {
  const Icon = ICON_MAP[icon] ?? Wrench

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
      <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-red-50 transition-colors duration-200">
        <Icon className="text-brand-blue group-hover:text-brand-red transition-colors duration-200" size={22} strokeWidth={1.75} />
      </div>
      <h3 className="font-headline font-bold text-gray-900 text-xl leading-tight">{name}</h3>
      {size === 'lg' ? (
        <p className="text-gray-600 leading-relaxed">{description}</p>
      ) : (
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{description}</p>
      )}
    </div>
  )
}
