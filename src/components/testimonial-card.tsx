import { Card } from "@/components/ui/card"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  title?: string
  quote: string
  image: string
  backgroundColor?: string
}

export function TestimonialCard({ name, title, quote, image, backgroundColor = "bg-zinc-900" }: TestimonialCardProps) {
  return (
    <Card
      className={`${backgroundColor} text-white p-6 rounded-3xl overflow-hidden w-80 flex-shrink-0 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20`}
    >
      <div className="flex flex-col h-full gap-4">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-white/20">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            {title && <p className="text-sm text-gray-400">{title}</p>}
          </div>
        </div>
        <p className="text-sm text-gray-300 italic">{quote}</p>
      </div>
    </Card>
  )
}

