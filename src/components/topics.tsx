import { TopicCard } from "@/components/topic-card"

export const Topics = () => {

    return ( // bg-gradient-to-b from-purple-900/20 to-black
        <section className="py-24 ">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            EXPLORE OUR <span className="text-gradient">TOPICS</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <TopicCard
              title="CONTENT CREATION"
              description="Understanding Your Audience, Content Strategy, Storytelling, Copywriting, Video, Sharing Secrets of Viral Posts, Building Your Personal Brand"
              image="/placeholder-logo.png"
            />
            <TopicCard
              title="STARTUPS & BRANDS"
              description="Building a Brand, Scalability, Marketing Strategy, Time Management, Post Templates, Company Values, Community Building & Collaboration"
            />
            <TopicCard
              title="TRADITIONAL MEDIA & TV"
              description="Does Traditional media still exist? We will talk about the future of Media, TV, Broadcasting, and the news industry"
            />
            <TopicCard
              title="NETWORKING & ACTIVATIONS"
              description="Nas Summit brings the most interesting people together under one roof. This is your chance to network, create your next content piece, and collaborate with other creators. We promise you a fun-filled meet and a memorable experience."
            />
          </div>
        </div>
      </section>
    )
}