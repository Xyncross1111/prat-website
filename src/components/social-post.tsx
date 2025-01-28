import { Card } from "@/components/ui/card"
import Image from "next/image"

interface SocialPostProps {
  username: string
  avatar: string
  image?: string
  content: string
  platform: "twitter" | "facebook" | "instagram"
  engagement?: string
}

export function SocialPost({ username, avatar, image, content, platform, engagement }: SocialPostProps) {
  return (
    <Card className="bg-zinc-900/50 backdrop-blur-md text-white overflow-hidden rounded-3xl transition-all duration-300 hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-purple-500/20">
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image src={avatar || "/placeholder.svg"} alt={username} fill className="object-cover" />
          </div>
          <div>
            <p className="font-semibold">PRATISHRUTI</p>
            <p className="text-sm text-gray-400">{username}</p>
          </div>
        </div>
        <p className="text-sm">{content}</p>
        {image && (
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt="Post image" fill className="object-cover" />
          </div>
        )}
        {engagement && <p className="text-sm text-gray-400">{engagement}</p>}
      </div>
    </Card>
  )
}

