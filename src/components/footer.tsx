import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Twitter, Instagram, Youtube, Linkedin, MessageSquareMore } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-black text-white">
      {/* Sponsor Banner */}
      <Link href="/leaderboard" target="_blank">
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 p-8 md:p-12 rounded-3xl mx-6 md:mx-12 mb-12 cursor-pointer"
          style={{
            backgroundImage: "url('/assets/image/section_cup_background.jpg')",
          }}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Section Cup Leaderboard🏆
              </h2>
              <div className="relative w-full h-64">
                <Image
                  src="/assets/image/section_cup.png"
                  alt="Section Cup"
                  layout="fill"
                  objectFit="cover"

                />
              </div>
              {/* <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold transition-colors">
              GET IN TOUCH
            </Button> */}
            </div>
            {/* <div className="relative w-64 h-64">
            <Image
              src="/placeholder-logo.png"
              alt="Sponsor illustration"
              layout="fill"
              objectFit="cover"
            />
          </div> */}
          </div>
        </div>
      </Link>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p>rcoem.src@rknec.edu</p>
            <p>+91 8799872920</p>
            <p className="flex justidy-content items-center">
              <Link href="https://api.whatsapp.com/send?phone=918799872920" className="text-gray-400 hover:text-white transition-colors">
                Message Us <MessageSquareMore className="w-5 h-5" />
              </Link>
            </p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/rbusrc" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://x.com/rbu_src" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/rbu.src" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.youtube.com/@rcoemsrc" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links
          {Object.entries(quickLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>

        {/* Logo and Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="relative w-full h-20 mb-4">
            <Image className="object-contain" src="/assets/image/logo.svg" layout="fill" alt="logo" />
          </div>
          <p className="text-sm text-center text-gray-400">Copyright © 2024 Pratishruti. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}