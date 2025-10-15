import { SectionContainer } from "@/components/shared/SectionContainer"
import { Card } from "@/components/ui/card"
import { ClipboardCheck, GraduationCap, Sparkles } from "lucide-react"

const stats = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    title: "Real World Problem Statements",
    description: "Solve real challenges from industry leaders.",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Internship Opportunities",
    description: "Gain exclusive interview access with our partners.",
  },
]

export default function AboutSection() {
  return (
    <SectionContainer id="about" className="bg-transparent">
      <Card className="glass-card shadow-2xl shadow-primary/10 p-8 md:p-12 animate-fade-in-up relative overflow-hidden border-2 border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />

        <div className="text-center mb-10 md:mb-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            About <span className="gradient-text">Synapse</span>
            <Sparkles className="inline-block ml-2 h-6 w-6 text-primary animate-pulse" />
          </h2>
          <div className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-4 leading-relaxed">
            <p>
              Synapse is a <span className="text-primary font-semibold">12-Hour National-Level Hackathon</span> where we bring together the brightest minds to solve complex challenges. In this fast-paced environment,
              you'll work with peers to develop innovative solutions and prove your abilities under pressure.
            </p>
            <p>
              Our mission is to launch careers. We foster excellence by connecting top talent directly with the tech industry,
              which is why{" "}
              <span className="gradient-text font-medium"> the best-performing students will secure exclusive internship opportunities </span>
              with our partners.
            </p>
          </div>
        </div>

        <div className="border-t border-primary/20 my-10" />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col items-center"
            >
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{stat.title}</h3>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <Card className="inline-block bg-card/70 border-primary/20 p-6 shadow-lg">
          <p className="text-lg font-heading font-medium text-foreground">
            Certificate of participation will be provided to everyone.
          </p>
        </Card>
      </div>
      </Card>
    </SectionContainer>
  )
}