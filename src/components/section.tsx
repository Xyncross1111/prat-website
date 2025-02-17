import { SectionCard } from "@/components/ui/section-card"

export function Sections() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-6 py-12 space-y-6">
            <h2 className="text-black text-4xl md:text-5xl font-bold mb-12 text-center">
                P&apos;25 <span className="text-black">TRENDS</span>
            </h2>
            <SectionCard
                title="ARCADIA OF REALMS"
                description="Step into a mystical utopia where imagination knows no bounds, and every realm unlocks a new dimension of creativity and wonder. From enchanted kingdoms and futuristic worlds to dreamscapes beyond comprehension, the festival will transport you into a universe where fantasy meets reality. This Pratishruti, embrace the extraordinary and journey through realms of fantasy and magic."
                image="/placeholder-logo.png"
            />
            <SectionCard
                title="UNDER 25 SUMMIT"
                description="Under25 Summit: Where Creators, Hustlers & Dreamers Collide!
                For the first time ever, Ramdeobaba University hosts the Under25 Summit, India’s ultimate youth festival for creators, entrepreneurs, and trendsetters. Meet top influencers, viral content creators, and industry icons, dive into interactive workshops, and network like never before. Whether you're a storyteller, entertainer, or future mogul, this is where your journey begins!"
                image="/assets/image/under25_card.svg"
            />
            <SectionCard
                title="SUNBURN CAMPUS"
                description="After five long years, Sunburn Campus is making its grand return to Ramdeobaba University, and it's going to be bigger, louder, and more electrifying than ever! Get ready to groove to the beats of world-class DJs, experience the magic of mesmerizing lights and visuals, and lose yourself in an unforgettable night of music and madness. This is the ultimate celebration of youth, energy, and passion. So mark your calendars, because this is a night you don’t want to miss!
"
                image="/assets/image/sunburn.png"
            />
            <SectionCard
                title="SPONSOR US"
                description="Pratishruti is more than just a festival, it's an experience that brings together thousands of students, artists, and influencers from across the region. By partnering with us, your brand gets unparalleled exposure, direct engagement with the youth, and the opportunity to be part of one of the most vibrant cultural celebrations in Nagpur. Whether through event sponsorships, digital promotions, or on-ground branding, we offer customized sponsorship packages to ensure your brand makes a lasting impact. Let’s collaborate and create something extraordinary!"
                image="/assets/image/sponsors_card.svg"
            />
        </div>
    )
}

