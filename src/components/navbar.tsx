"use client";
import { useState } from "react"
import { Button } from "@/components/ui/button"

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <nav className="flex justify-between items-center py-2 px-4 md:py-3 md:px-8 bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
            <div className="text-2xl font-bold text-gradient">PRATISHRUTI.</div>
            {/* Desktop menu */}
            <div className="hidden md:flex gap-6">
                <Button variant="ghost" className="text-white hover:text-purple-400 transition-colors">
                    HOME
                </Button>
                <Button variant="ghost" className="text-white hover:text-purple-400 transition-colors">
                    Events
                </Button>
                <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 transition-colors">
                    BECOME A PARTNER
                </Button>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>
            {/* Mobile dropdown menu */}
            <div className={`absolute top-full left-0 w-full bg-black/50 backdrop-blur-md flex flex-col items-center py-4 md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <Button variant="ghost" className="text-white hover:text-purple-400 transition-colors mb-2">
                    HOME
                </Button>
                <Button variant="ghost" className="text-white hover:text-purple-400 transition-colors mb-2">
                    Events
                </Button>
                <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 transition-colors">
                    BECOME A PARTNER
                </Button>
            </div>
        </nav>
    )
};