import { AttendeeCard } from "./attendee-card"
import { Users, Building, Star, Tv, Share2 } from "lucide-react"
import { TestimonialCard } from "./testimonial-card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"


export const Meet = () => {

    return (
        <section className="py-24 ">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
                    WHO WILL YOU
                    <br />
                    MEET AT THE
                    <br />
                    <span className="text-gradient">SUMMIT</span>
                </h2>
                <p className="text-xl text-gray-300 mb-16 text-center max-w-2xl mx-auto">
                    Nas Summit brings together a diverse group of creators, entrepreneurs, and industry leaders. Heres a
                    glimpse of who youll meet:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <AttendeeCard
                        icon={<Users className="w-12 h-12 text-purple-400" />}
                        title="Like-minded Attendees"
                        description="Connect with fellow creators and entrepreneurs who share your passion and drive."
                    />
                    <AttendeeCard
                        icon={<Building className="w-12 h-12 text-blue-400" />}
                        title="Top Brands and Companies"
                        description="Engage with representatives from leading brands and companies in the digital space."
                    />
                    <AttendeeCard
                        icon={<Star className="w-12 h-12 text-yellow-400" />}
                        title="Influential People"
                        description="Meet and learn from some of the most influential figures in the creator economy."
                    />
                    <AttendeeCard
                        icon={<Tv className="w-12 h-12 text-green-400" />}
                        title="Content Creators"
                        description="Interact with the region's biggest content creators and learn from their experiences."
                    />
                    <AttendeeCard
                        icon={<Share2 className="w-12 h-12 text-red-400" />}
                        title="Social Media Platforms"
                        description="Get insights directly from representatives of major social media platforms."
                    />
                    <AttendeeCard
                        icon={<Users className="w-12 h-12 text-orange-400" />}
                        title="Industry Experts"
                        description="Gain knowledge from industry experts in various fields of digital media and technology."
                    />
                </div>

                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold mb-8">What Attendees Say</h3>
                    <ScrollArea className="w-full whitespace-nowrap">
                        <div className="flex space-x-6 pb-6">
                            <TestimonialCard
                                name="TSU BEEU"
                                title="@tsu_beeu"
                                quote="If you are not flying here NOW, I have to tell you that this is the best conference that I've ever attended. You're yet to experience something magical!"
                                image="/placeholder-logo.png"
                                backgroundColor="bg-gradient-to-br from-blue-600 to-blue-800"
                            />
                            <TestimonialCard
                                name="HIRAL NAGORI"
                                title="@hiral_nagori"
                                quote="This is how to be one of the best when we leave a part of what a power packed community so looks like, right here in the city of dreams!"
                                image="/placeholder-logo.png"
                                backgroundColor="bg-gradient-to-br from-yellow-500 to-yellow-700"
                            />
                            <TestimonialCard
                                name="MARTINA"
                                title="International traveler and linguist"
                                quote="Nas summit is all about creating a community of like-minded people to make a positive impact"
                                image="/placeholder-logo.png"
                                backgroundColor="bg-gradient-to-br from-orange-500 to-orange-700"
                            />
                            <TestimonialCard
                                name="RICHARD"
                                title="International traveler and linguist"
                                quote="The networking opportunities at Nas Summit are unparalleled. I've made connections that have transformed my business."
                                image="/placeholder-logo.png"
                                backgroundColor="bg-gradient-to-br from-purple-600 to-purple-800"
                            />
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>

                <div className="text-center">
                    <h3 className="text-3xl font-bold mb-6">Ready to Join?</h3>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Dont miss this opportunity to connect with the brightest minds in the creator economy. Secure your spot
                        at the Nas Summit today!
                    </p>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                        REGISTER NOW
                    </Button>
                </div>
            </div>
        </section>
    )
}