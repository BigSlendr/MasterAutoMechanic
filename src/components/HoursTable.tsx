import { BUSINESS } from '../config/business'

function getTodayIndex(): number {
  const day = new Date().getDay() // 0 = Sunday
  if (day >= 1 && day <= 5) return 0 // Mon–Fri
  if (day === 6) return 1 // Saturday
  return 2 // Sunday
}

export default function HoursTable() {
  const todayIndex = getTodayIndex()

  return (
    <table className="w-full text-sm">
      <tbody>
        {BUSINESS.hours.map((row, i) => (
          <tr
            key={row.days}
            className={`border-b last:border-0 ${i === todayIndex ? 'bg-red-50' : ''}`}
          >
            <td className={`py-2.5 pr-4 font-medium ${i === todayIndex ? 'text-brand-red font-semibold' : 'text-gray-700'}`}>
              {row.days}
              {i === todayIndex && (
                <span className="ml-2 text-xs bg-brand-red text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wide">Today</span>
              )}
            </td>
            <td className={`py-2.5 text-right ${row.open ? 'text-gray-800' : 'text-gray-400 italic'}`}>
              {row.hours}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
