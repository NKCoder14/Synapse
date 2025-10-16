import { SectionContainer } from "@/components/shared/SectionContainer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, Zap } from "lucide-react"

const scheduleEvents = [
  {
    day: "The Day",
    date: "November 15, 2025",
    events: [
      {
        time: "08:00 AM",
        title: "Opening Ceremony & Welcome",
        description: "Kick off Galactic Hack with an inspiring opening ceremony and keynote.",
        icon: <Zap className="h-5 w-5 text-primary" />,
      },
      {
        time: "9:30 AM",
        title: "Workshop: Intro to Quantum Entanglement APIs",
        description: "Dive into the future of communication with our expert-led workshop.",
        icon: <Zap className="h-5 w-5 text-primary" />,
      },
      {
        time: "02:00 PM",
        title: "Team Formation & Ideation",
        description: "Meet fellow hackers, form teams, and brainstorm project ideas.",
        icon: <Zap className="h-5 w-5 text-primary" />,
      },
    ],
  },
]

export default function ScheduleSection() {
  return (
    <SectionContainer id="schedule" className="bg-background/50 backdrop-blur-sm">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
          Event <span className="text-primary">Schedule</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Follow our action-packed timeline. Don't miss a moment of Hack-a-Tribe!
        </p>
      </div>

      <div className="space-y-12">
        {scheduleEvents.map((dayItem, dayIndex) => (
          <div key={dayItem.day} className="animate-fade-in-up" style={{ animationDelay: `${dayIndex * 0.2}s` }}>
            <div className="flex items-center gap-4 mb-6">
              <CalendarDays className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-3xl font-heading font-semibold text-foreground">{dayItem.day}</h3>
                <p className="text-md text-muted-foreground">{dayItem.date}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dayItem.events.map((event, eventIndex) => (
                <Card
                  key={event.title}
                  className="bg-card/70 border-border/50 shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-sm text-primary font-medium">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      {event.icon}
                    </div>
                    <CardTitle className="text-xl font-heading">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{event.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
