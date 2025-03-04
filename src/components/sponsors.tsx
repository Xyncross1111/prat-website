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
        "byd1.png",
        "garnet1.png",
        "iquanta1.png",
        "midlacc.png",
        "myfm.png",
        "subway1.png",
    ]

    return (
        <div className="bg-black w-full py-6 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-6">
                    OUR SPONSORS
                </h2>
                {/* Marquee wrapper with hidden overflow */}
                <div className="relative w-full overflow-hidden">
                    {/* Marquee track with animation */}
                    <div className="flex animate-marquee">
                        {/* First set of sponsors */}
                        <div className="flex flex-nowrap min-w-full">
                            {sponsors.map((src, index) => (
                                <div key={`first-${index}`} className="flex-shrink-0 mx-4">
                                    <Image
                                        src={`/assets/image/sponsors/${src}`}
                                        alt="Sponsor Logo"
                                        width={120}
                                        height={60}
                                        className="object-contain h-12 sm:h-16 w-auto"
                                    />
                                </div>
                            ))}
                        </div>
                        
                        {/* Duplicated set for continuous scrolling */}
                        {/* <div className="flex flex-nowrap min-w-full">
                            {sponsors.map((src, index) => (
                                <div key={`second-${index}`} className="flex-shrink-0 mx-4">
                                    <Image
                                        src={`/assets/image/sponsors/${src}`}
                                        alt="Sponsor Logo"
                                        width={120}
                                        height={60}
                                        className="object-contain h-12 sm:h-16 w-auto"
                                    />
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}