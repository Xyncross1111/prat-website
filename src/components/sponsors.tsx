"use client"

import Image from "next/image"

export function Sponsors() {
    const sponsors = [
        "/assets/image/sponsors/burgersingh.png",
        "/assets/image/sponsors/IDP.png",
        "/assets/image/sponsors/MICROSYSTEMS.png",
        "/assets/image/sponsors/PAREKH_BROTHERS.png",
        "/assets/image/sponsors/WCFL.png",
        "/assets/image/sponsors/222_BACKYARD.png",
        "/assets/image/sponsors/byd.png",
        "/assets/image/sponsors/garnet.png",
        "/assets/image/sponsors/iquanta.png",
        "/assets/image/sponsors/midlacc.png",
        "/assets/image/sponsors/myfm.png",
        "/assets/image/sponsors/subway.png",
    ]

    // Duplicate the array for a continuous marquee effect
    const marqueeSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors]

    return (
        <div className="bg-black w-full py-6 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-6 ">
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