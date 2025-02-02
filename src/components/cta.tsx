import { Button } from "@/components/ui/button"

export const CTA = () => {

    return (
        <section className="py-24 bg-gradient-to-b from-purple-900/20 to-black text-white text-center relative">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
            COME LEARN HOW TO BUILD A BUSINESS FROM <span className="text-gradient">ASIAS</span>
            <br />
            <span className="text-gradient">MOST SUCCESSFUL</span> ONLINE
            <br />
            ENTREPRENEURS AND THE
            <br />
            SECRETS OF GOING <span className="text-gradient">VIRAL</span>
            <br />
            ON <span className="text-gradient">SOCIAL MEDIA</span>
          </h2>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            JOIN THE COMMUNITY
          </Button>
        </div>
      </section>
    )
}