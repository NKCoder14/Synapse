import { SectionContainer } from "@/components/shared/SectionContainer"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/placeholder-user.jpg"

const sponsors = [
  {
    name: "Nova Corp",
    logo: logo,
    websiteUrl: "#",
  },
  {
    name: "QuantumLeap Tech",
    logo: logo,
    websiteUrl: "#",
  },
  {
    name: "Celestial Dynamics",
    logo: logo,
    websiteUrl: "#",
  },
  {
    name: "Astro Solutions",
    logo: logo,
    websiteUrl: "#",
  },
  {
    name: "Galaxy Ventures",
    logo: logo,
    websiteUrl: "#",
  },
  {
    name: "Cosmic Innovations",
    logo: logo,
    websiteUrl: "#",
  },
]

export default function SponsorsSection() {
  return (
    <SectionContainer id="sponsors" className="bg-transparent">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
          Our Esteemed <span className="text-primary">Sponsors</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Fueling innovation and supporting the next generation of cosmic explorers.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {sponsors.map((sponsor, index) => (
          <Link
            href={sponsor.websiteUrl}
            key={sponsor.name}
            target="_blank"
            rel="noopener noreferrer"
            className="group block animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card className="bg-card/80 hover:bg-card transition-colors duration-300 h-full flex flex-col items-center justify-center p-6 shadow-lg hover:shadow-primary/20 backdrop-blur-sm">
              <div className="relative w-40 h-30 mb-4">
                <Image
                  src={sponsor.logo }
                  alt={`${sponsor.name} logo`}
                />
              </div>
              <p className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {sponsor.name}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </SectionContainer>
  )
}