import { SectionContainer } from "@/components/shared/SectionContainer"
import { Card } from "@/components/ui/card"
import { FileCode, ShieldAlert } from "lucide-react"

export default function DomainsCS() {
  return (
    <>
      <main className="flex-grow bg-transparent">
        <SectionContainer id="domains" className="py-24 md:py-32 text-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4 animate-fade-in-up">
              Problem <span className="gradient-text">Statements</span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Your mission briefing is being prepared. Stand by for transmission.
            </p>
          </div>

          <div className="flex items-center justify-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Card className="glass-card shadow-lg w-full max-w-4xl text-left overflow-hidden">
              <div className="bg-primary/10 p-4 flex items-center gap-4 border-b border-primary/20">
                <ShieldAlert className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-heading font-bold">TOP SECRET // CLASSIFIED</h3>
              </div>
              <div className="p-10 md:p-16 text-center">
                <div className="flex justify-center mb-6">
                  <FileCode className="h-12 w-12 text-primary animate-pulse" />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-3">Transmission Incoming...</h3>
                <p className="text-muted-foreground text-lg">
                  The full list of real-world problem statements will be declassified before the Hackathon.
                </p>
              </div>
            </Card>
          </div>
        </SectionContainer>
      </main>
    </>
  )
}