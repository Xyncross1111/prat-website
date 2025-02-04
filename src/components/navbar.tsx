import { Button } from "@/components/ui/button"

export const Navbar = () => {
    return(
        <nav className="flex justify-between items-center p-4 md:p-8 bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="text-2xl font-bold text-gradient">PRATISHRUTI.</div>
        <div className="flex gap-6">
          <Button variant="ghost" className="text-white hover:text-purple-400 transition-colors">
            HOME
          </Button>
          <Button variant="ghost" className="text-white hover:text-purple-400 transition-colors">
            Events
          </Button>
          <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 transition-colors">
            BECOME A PARTNER
          </Button>
        </div>
      </nav>
    )
};
