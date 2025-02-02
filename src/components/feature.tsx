import Image from "next/image";
import { Card } from "@/components/ui/card"
import { PlayButton } from "@/components/play-button"

export const Feature = () => {

    return (
        <section className="py-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        {
                            title: "LEARN",
                            image:
                                "/placeholder-logo.png",
                        },
                        {
                            title: "NETWORK",
                            image:
                                "/placeholder-logo.png",
                        },
                        {
                            title: "2023 RECAP",
                            image:
                                "/placeholder-logo.png",
                        },
                        {
                            title: "REVIEWS",
                            image:
                                "/placeholder-logo.png",
                        },
                    ].map((feature) => (
                        <Card key={feature.title} className="relative aspect-square overflow-hidden bg-black rounded-3xl group">
                            <Image
                                src={feature.image || "/placeholder.svg"}
                                alt={feature.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                                <PlayButton />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}