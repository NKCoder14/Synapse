c:\Users\Nitesh Kalyanshetti\OneDrive\Desktop\Career Tribe\Synapse\components\sections\ScheduleSection.tsximport { SectionContainer } from "@/components/shared/SectionContainer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export default function DomainsSection() {
  return (
    <SectionContainer id="domains" className="bg-transparent">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
          Real-World <span className="gradient-text">Problem Statements</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Tackle exclusive challenges curated by industry-leading partners.
        </p>
      </div>

      <div className="flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <Card className="glass-card shadow-lg p-10 md:p-12 text-center max-w-2xl">
          <div className="flex justify-center mb-6">
            <FileText className="h-12 w-12 text-primary" />
          </div>
          <h3 className="text-3xl font-heading font-bold mb-3">Access the Challenges</h3>
          <p className="text-muted-foreground text-lg mb-8">
            Download the official PDF to view all the detailed problem statements from our partners.
          /</p>
          <Button asChild size="lg" className="group text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
            <a href="/SynapseTracks.pdf" download>
              <Download className="mr-3 h-5 w-5" />
              Download PDF
            </a>
          </Button>
        </Card>
      </div>
    </SectionContainer>
  )
}