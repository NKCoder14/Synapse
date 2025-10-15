import { Button } from "@/components/ui/button"
import { AnimatedGradientText } from "@/components/shared/AnimatedGradientText"
import { ArrowRight, Sparkles, Hourglass } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden pt-20 pb-12 md:pt-28 md:pb-20">
      <div className="container mx-auto px-4 text-center relative">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
        <div className="absolute -top-5 -right-5 w-16 h-16 bg-cyan-400/20 rounded-full blur-lg animate-float" />

        <div className="relative">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold tracking-tighter mb-6 animate-fade-in-up py-8 leading-[1.1] bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
            Synapse
          </h1>
        </div>

        <div className="mb-10 animate-fade-in-up relative" style={{ animationDelay: "0.2s" }}>
          <div className="glass-card rounded-2xl p-6 mx-auto max-w-2xl">
            <AnimatedGradientText
              text="Code. Create. Hire"
              className="text-2xl md:text-4xl font-heading font-semibold"
            />
          </div>
        </div>

        <div className="animate-fade-in-up relative text-center" style={{ animationDelay: "0.4s" }}>
          <Button
              size="lg"
              disabled 
              className="text-lg px-10 py-8 rounded-full shadow-lg bg-primary/80 opacity-60 cursor-not-allowed"
            >
              <Hourglass className="mr-3 h-6 w-6" />
              Registrations Open Soon
            </Button>
        </div>

        <p
          className="mt-8 text-lg text-muted-foreground animate-fade-in-up max-w-2xl mx-auto leading-relaxed"
          style={{ animationDelay: "0.6s" }}
        >
          Join us for an unforgettable journey into the future of technology.
          <br />
          <span className="text-primary font-medium">Where innovation meets the cosmos.</span>
        </p>

        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-scale-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="glass-card rounded-xl p-4">
            <div className="text-2xl font-heading font-bold gradient-text">12 Hours</div>
            <div className="text-sm text-muted-foreground">Non-stop Innovation</div>
          </div>
          <div className="glass-card rounded-xl p-4">
            <div className="text-2xl font-heading font-bold gradient-text">Top Talent</div>
            <div className="text-sm text-muted-foreground">Internship Access</div>
          </div>
          <div className="glass-card rounded-xl p-4">
            <div className="text-2xl font-heading font-bold gradient-text">Build & Connect</div>
            <div className="text-sm text-muted-foreground">Network with Industry</div>
          </div>
        </div>
      </div>
    </section>
  )
}
