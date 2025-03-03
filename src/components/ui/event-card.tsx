import Image from "next/image"
import { ArrowRight } from "lucide-react"
import "@/components/ui/starburst.css"

interface EventCardProps {
  eventname: string
  venue: string
  imgPath: string
  absImgPath: string
  date: string
  isDark?: boolean
  googleFormLink: string
}

export function EventCard({ eventname, venue, imgPath, absImgPath, date, isDark = true, googleFormLink }: EventCardProps) {

  const backgrounds = [
    "/assets/image/event_card_bg1.webp",
    "/assets/image/event_card_bg2.webp",
    "/assets/image/event_card_bg3.webp",
    "/assets/image/event_card_bg4.webp",
  ]
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)]

  return (
    <div className={`relative rounded-3xl overflow-hidden min-w-[400px] min-h-[450px] max-h-[500px] ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${randomBackground}')`,
        }}
      />
      <div className="relative p-6">
        <div className="absolute top-6 right-6 text-sm text-white">{date}</div>

        <div className="space-y-2 mb-4">
          <h2 className="text-2xl font-bold tracking-tight">
            {eventname}
            <br />
          </h2>
          <p className="text-slate-300">{venue}</p>
        </div>

        <div className="relative">
          <div className="relative h-48 rounded-xl overflow-hidden mb-2">
            <Image src={imgPath || "/placeholder.svg"} alt={venue} fill className="object-cover" />
          </div>
          <div className="relative h-32 w-40 rounded-xl overflow-hidden -mt-12 ml-4 transform -rotate-6 shadow-lg">
            <Image src={absImgPath || "/placeholder.svg"} alt={`${venue} detail`} fill className="object-contain" />
          </div>

          {/* <div className="absolute top-4 right-4">
            <div className="starburst bg-purple-500 text-white text-xs font-bold py-2 px-4 rounded-full">
              NEW
              <br />
              EVENT
            </div>
          </div> */}

          <button
            className={`text-black absolute bottom-0 right-0 flex items-center space-x-2 px-4 py-2 rounded-full ${isDark ? "bg-white hover:bg-white/70" : "bg-black/10 hover:bg-black/20"
              } transition-colors duration-200`}
          >
            <span><a href={'/'}>P'26?</a></span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}