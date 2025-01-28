import { Card } from "@/components/ui/card"
import Image from "next/image"

interface TopicCardProps {
  title: string
  description: string
  image?: string
}

export function TopicCard({ title, description, image }: TopicCardProps) {
  return (
    <Card className="bg-zinc-900/50 backdrop-blur-md overflow-hidden rounded-3xl transition-all duration-300 hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-purple-500/20">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}

