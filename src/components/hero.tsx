import Image from "next/image"
import { Button } from "@/components/ui/button"

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-24">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/placeholder-logo.png"
                    alt="Creator gathering crowd"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
            </div>
            <div className="relative z-10 max-w-4xl">
                <h1 className="text-5xl md:text-8xl leading-tight mb-6 animate-float">
                    THE
                    <br />
                    <span className="text-gradient">CREATOR</span>
                    <br />
                    GATHERING
                </h1>
                <p className="text-xl text-gray-300 mb-8">Nas summit is for crazy people who create something from nothing</p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full transition-colors">
                    Linktree
                </Button>
                <div className="absolute top-0 right-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-4 animate-pulse">
                    Register
                    <br />
                    Now
                </div>
            </div>
        </section>
    )
}