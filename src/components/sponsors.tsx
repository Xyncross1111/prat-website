"use client"

import Image from "next/image"

export function Sponsors() {
    const sponsors = [
        "/assets/image/sponsors/burger_singh.png",
        "/assets/image/sponsors/IDP.png",
        "/assets/image/sponsors/MICRO_SYSTEMS.png",
        "/assets/image/sponsors/PAREKH_BROTHERS.png",
        "/assets/image/sponsors/WCFL.png",
    ]

    // Duplicate the array for a continuous marquee effect
    const marqueeSponsors = [...sponsors, ...sponsors]

    return (
        <div className="bg-black w-full py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
                    OUR SPONSORS
                </h2>

                <div className="relative">
                    {/* First Row */}
                    <div className="flex space-x-6 sm:space-x-12 animate-marquee">
                        <div className="flex space-x-6 sm:space-x-12 min-w-full">
                            {marqueeSponsors.map((src, index) => (
                                <Image
                                    key={index}
                                    src={src}
                                    alt="Sponsor Logo"
                                    width={80} // Smaller width for mobile
                                    height={60}
                                    className="object-contain h-12 sm:w-[120px] w-[80px]"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}