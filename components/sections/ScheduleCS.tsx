import { SectionContainer } from "@/components/shared/SectionContainer"
import { Card } from "@/components/ui/card"
import { CalendarClock } from "lucide-react"

export default function ScheduleCS() {
  return (
    <SectionContainer id="schedule" className="bg-transparent">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
          Event <span className="gradient-text">Schedule</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The timeline for your cosmic journey is being finalized.
        </p>
      </div>

      <div className="flex items-center justify-center animate-fade-in-up">
        <Card className="glass-card shadow-lg p-10 md:p-16 text-center max-w-2xl">
          <div className="flex justify-center mb-6">
            <CalendarClock className="h-12 w-12 text-primary animate-pulse" />
          </div>
          <h3 className="text-3xl font-heading font-bold mb-3">Schedule Revealing Soon</h3>
          <p className="text-muted-foreground text-lg">
            The full event schedule, including keynotes and judging times, will be posted here closer to the event date. Stay tuned!
          </p>
        </Card>
      </div>
    </SectionContainer>
  )
}

