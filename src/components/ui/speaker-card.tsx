import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Youtube } from "lucide-react"

interface SpeakerCardProps {
  name: string
  title?: string
  image: string
  instagram?: string
  youtube?: string
}

export function SpeakerCard({ name, title, image, instagram, youtube }: SpeakerCardProps) {
  return (
    <Card className="relative overflow-hidden bg-zinc-900/50 backdrop-blur-md text-white border-0 rounded-3xl w-[280px] transition-all duration-300 hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-purple-500/20">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>
      {(name || title) && (
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {name && <h3 className="font-bold text-xl mb-1">{name}</h3>}
          {title && <p className="text-sm text-gray-300 mb-3">{title}</p>}
          <div className="flex gap-3">
              <Link href={instagram} target="_blank">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href={youtube} target="_blank">
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
        </div>
      )}
    </Card>
  )
}

