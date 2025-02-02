import { SocialPost } from "@/components/social-post"

export const Socials = () => {

    return (
        <section className="py-24 bg-black">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            EMBEDDED SOCIAL
            <br />
            <span className="text-gradient">MEDIA WIDGET</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <SocialPost
              username="@PRATISHRUTI"
              avatar="/placeholder-logo.png"
              content="Nas summit is all about creating a community of like-minded people to make a positive impact"
              platform="twitter"
            />
            <SocialPost
              username="@PRATISHRUTI"
              avatar="/placeholder-logo.png"
              content="We'd like to have a moment to thank all our sponsors, speakers and attendees. We hope to see you in person at our next event!"
              platform="facebook"
            />
            <SocialPost
              username="@PRATISHRUTI"
              avatar="/placeholder-logo.png"
              image="/placeholder-logo.png"
              content="MINDVALLEY CEO'S SECRET TO TRANSFORMING LIVES"
              platform="instagram"
              engagement="326k views • 8,569 likes"
            />
            <SocialPost
              username="@PRATISHRUTI"
              avatar="/placeholder-logo.png"
              image="/placeholder-logo.png"
              content="PRATISHRUTI DUBAI - The Creators Conference"
              platform="instagram"
              engagement="Coming January 2024"
            />
          </div>
        </div>
      </section>
    )
}