"use client"

import Image from "next/image"

export function Sponsors() {
    return (
        <div className="bg-black w-full py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">OUR SPONSORS</h2>

                <div className="relative">
                    {/* First Row */}
                    <div className="flex space-x-6 sm:space-x-12 animate-marquee">
                        <div className="flex space-x-6 sm:space-x-12 min-w-full">
                            <Image
                                src="/assets/image/logo.svg"
                                alt="TLNT Logo"
                                width={80} // Smaller width for mobile
                                height={60}
                                className="object-contain h-12 sm:w-[120px] w-[80px]"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Kitopi Logo"
                                width={80}
                                height={60}
                                className="object-contain h-12 sm:w-[120px] w-[80px]"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Artlist Logo"
                                width={80}
                                height={60}
                                className="object-contain h-12 sm:w-[120px] w-[80px]"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Meta Logo"
                                width={80}
                                height={60}
                                className="object-contain h-12 sm:w-[120px] w-[80px]"
                            />
                            
                            {/* <Image
                            src="/assets/image/logo.svg"
                            alt="Nothing Logo"
                            width={80}
                            height={60}
                            className="object-contain h-12 sm:w-[120px] w-[80px]"
                            /> */}
                            <Image
                            src="/assets/image/logo.svg"
                            alt="Google Logo"
                            width={80}
                            height={60}
                            className="object-contain h-12 sm:w-[120px] w-[80px]"
                            />
                        </div>
                        <div className="flex space-x-12 min-w-full">
                            <Image
                                src="/assets/image/logo.svg"
                                alt="TLNT Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Kitopi Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Artlist Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Meta Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Nothing Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Google Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                        </div>
                    </div>

                    {/* Second Row */}
                    {/* <div className="flex space-x-12 animate-marquee2 mt-12">
                        <div className="flex space-x-12 min-w-full">
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Mongolia Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="IIM Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Lightricks Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Emirates Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="YouTube Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Narrative Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                        </div>
                        <div className="flex space-x-12 min-w-full">
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Mongolia Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="IIM Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Lightricks Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Emirates Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="YouTube Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                            <Image
                                src="/assets/image/logo.svg"
                                alt="Narrative Logo"
                                width={120}
                                height={60}
                                className="object-contain h-12"
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

