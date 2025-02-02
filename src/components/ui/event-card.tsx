import Image from "next/image"
import { ArrowRight } from "lucide-react"
import "@/components/ui/starburst.css"

interface EventCardProps {
  city: string
  country: string
  venue: string
  mainImage: string
  secondaryImage: string
  date: string
  isDark?: boolean
}

export function EventCard({ city, country, venue, mainImage, secondaryImage, date, isDark = false }: EventCardProps) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden p-6 min-w-[400px] ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="absolute top-6 right-6 text-sm text-gray-500">{date}</div>

      <div className="space-y-2 mb-4">
        <h2 className="text-3xl font-bold tracking-tight">
          {city}
          <br />
          {country}
        </h2>
        <p className="text-gray-500">{venue}</p>
      </div>

      <div className="relative">
        <div className="relative h-48 rounded-xl overflow-hidden mb-2">
          <Image src={mainImage || "/placeholder.svg"} alt={venue} fill className="object-cover" />
        </div>
        <div className="relative h-32 w-40 rounded-xl overflow-hidden -mt-12 ml-4 transform -rotate-6 shadow-lg">
          <Image src={secondaryImage || "/placeholder.svg"} alt={`${venue} detail`} fill className="object-cover" />
        </div>

        <div className="absolute top-4 right-4">
          <div className="starburst bg-purple-500 text-white text-xs font-bold py-2 px-4 rounded-full">
            NEW
            <br />
            EVENT
          </div>
        </div>

        <button
          className={`absolute bottom-0 right-0 flex items-center space-x-2 px-4 py-2 rounded-full ${
            isDark ? "bg-white/20 hover:bg-white/30" : "bg-black/10 hover:bg-black/20"
          } transition-colors duration-200`}
        >
          <span>BOOK NOW</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}