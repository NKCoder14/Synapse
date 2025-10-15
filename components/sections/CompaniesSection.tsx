import { SectionContainer } from "@/components/shared/SectionContainer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Linkedin } from "lucide-react"
import logo from "@/public/placeholder-user.jpg"

const CompanyMembers = [
  {
    name: "Dr. Evelyn Reed",
    title: "Chief Scientist, UilaTech",
    image: logo,
    social: { linkedin: "#" },
  },
  {
    name: "Marcus Thorne",
    title: "Lead Engineer, LocalView Tech",
    image: logo,
    social: { linkedin: "#" },
  },
  {
    name: "Aria Chen",
    title: "CEO, Celestial Dynamics",
    image: logo,
    social: { linkedin: "#" },
  },
  {
    name: "Jax Orion",
    title: "Veteran Astronaut",
    image: logo,
    social: { linkedin: "#" },
  },
]

export default function CompaniesSection() {
  return (
    <SectionContainer id="companies" className="bg-background/50 backdrop-blur-sm">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
          Meet the <span className="text-primary">Companies</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Our distinguished panel of experts will be evaluating your cosmic creations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {CompanyMembers.map((member, index) => (
          <Card
            key={index}
            className="bg-card/70 border-border/50 shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fade-in-up group transform hover:-translate-y-2"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-0 text-center">
              <div className="relative h-64 w-full">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`Photo of ${member.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-4">{member.title}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  )
}
