import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const quickLinks = {
    "QUICK LINKS": ["ABOUT", "APPLY", "SPONSOR", "CONTACT"],
    Cities: ["JAKARTA", "TEL AVIV", "BANGKOK", "SINGAPORE"],
    More: ["BANGALORE", "MONGOLIA", "TEL AVIV"],
  }

  return (
    <footer className="bg-black text-white">
      {/* Sponsor Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 p-8 md:p-12 rounded-3xl mx-6 md:mx-12 mb-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              SPONSOR A<br />
              NAS SUMMIT
              <br />
              NEAR YOU
            </h2>
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold transition-colors">
              GET IN TOUCH
            </Button>
          </div>
          <div className="relative w-64 h-64">
            <Image
              src="/placeholder-logo.png"
              alt="Sponsor illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p>hello@PRATISHRUTI.com</p>
            <p>+971 4261100</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
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
          ))}
        </div>

        {/* Logo and Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="text-gradient text-4xl font-bold mb-4">PRATISHRUTI</div>
          <p className="text-sm text-gray-400">Copyright © 2024 Nas Summit. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

