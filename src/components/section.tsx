import { SectionCard } from "@/components/ui/section-card"

export function Sections() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-6 py-12 space-y-6">
            <h2 className="text-black text-4xl md:text-5xl font-bold mb-12 text-center">
                EXPLORE OUR <span className="text-black">TOPICS</span>
            </h2>
            <SectionCard
                title="CONTENT CREATION"
                description="Understand Your Audience, Content Strategy, Storytelling, Copywriting, Editing, Shooting, Community Building, Influencer Collaboration, Podcasting Skills, Creativity Techniques, Self Branding, and many more things."
                image="/placeholder-logo.png"
            />
            <SectionCard
                title="STARTUPS & BRANDS"
                description="Building a Brand, Scalability, Marketing Strategy, Time Management, Pivot Strategies, Company's Values, Community Building & Collaborations."
                image="/placeholder-logo.png"
            />
            <SectionCard
                title="TRADITIONAL MEDIA & TV"
                description="Does Traditional media still exist? We will talk about the future of Radio, TV, Newspapers, and the movies industry."
                image="/placeholder-logo.png"
            />
            <SectionCard
                title="NETWORKING & ACTIVATIONS"
                description="Nas Summit brings the most interesting people together under one roof. This is your chance to network, create your next content piece, and collaborate with other creators. We promise you a fun-filled event and a memorable experience."
                image="/placeholder-logo.png"
            />
        </div>
    )
}

