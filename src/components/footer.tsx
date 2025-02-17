import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Twitter, Instagram, Youtube, Linkedin, MessageSquareMore } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-black text-white">
      {/* Sponsor Banner */}
      <div className="relative overflow-hidden p-8 md:p-12 rounded-3xl mx-6 md:mx-12 mb-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative space-y-4">
            <h2 className="relative z-10 text-4xl md:text-5xl font-bold leading-tight">
              Section Cup Leaderboard
            </h2>
            <Image
              src="/assets/image/section_cup_background.jpg"
              alt="Section cup background"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div className="relative w-full h-64">
              <Image 
                src="/assets/image/section_cup.png" 
                alt="Section Cup" 
                layout="fill" 
                objectFit="contain"
              />
            </div>
            {/* <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold transition-colors">
              GET IN TOUCH
            </Button> */}
          </div>
          {/* Other sponsor content */}
        </div>
      </div>
      {/* ...remaining Footer Content... */}
    </footer>
  )
}