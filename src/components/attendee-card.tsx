import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface AttendeeCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function AttendeeCard({ icon, title, description }: AttendeeCardProps) {
  return (
    <Card className="bg-zinc-900/50 backdrop-blur-md p-6 text-white rounded-3xl transition-all duration-300 hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-purple-500/20">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  )
}

