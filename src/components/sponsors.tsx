"use client"

import Image from "next/image"

export function Sponsors() {
    const sponsors = [
        "burgersingh.png",
        "IDP.png",
        "MICROSYSTEMS.png",
        "PAREKH_BROTHERS.png",
        "WCFL.png",
        "222_BACKYARD.png",
        "byd.png",
        "garnet.png",
        "iquanta.png",
        "midlacc.png",
        "myfm.png",
        "subway.png",
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
                                    src={`/assets/image/sponsors/${src}`}
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