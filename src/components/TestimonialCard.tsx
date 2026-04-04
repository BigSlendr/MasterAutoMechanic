import StarRating from './StarRating'

interface TestimonialCardProps {
  name: string
  rating: number
  text: string
}

export default function TestimonialCard({ name, rating, text }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-yellow-100 p-6 flex flex-col gap-3">
      <StarRating rating={rating} />
      <p className="text-gray-700 leading-relaxed italic">"{text}"</p>
      <p className="font-semibold text-brand-blue text-sm">— {name}</p>
    </div>
  )
}
