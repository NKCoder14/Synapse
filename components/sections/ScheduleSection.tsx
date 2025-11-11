import { SectionContainer } from "@/components/shared/SectionContainer"
import { Card } from "@/components/ui/card"
import { Award, ClipboardCheck, Coffee, Mic, Presentation, Cookie, Utensils } from "lucide-react"

const scheduleData = [
  {
    time: "08:00 AM",
    title: "Verification of Teams",
    description: "Welcome! Please check in at the registration desk with your team.",
    icon: <ClipboardCheck className="h-5 w-5" />,
  },
  {
    time: "09:00 AM",
    title: "Inauguration of Synapse",
    description: "Official kickoff, keynote speeches, and the grand reveal of the problem statements.",
    icon: <Mic className="h-5 w-5" />,
  },
  {
    time: "11:00 AM",
    title: "Tea Break",
    description: "A quick break to refuel with tea and snacks.",
    icon: <Coffee className="h-5 w-5" />,
  },
  {
    time: "01:00 PM",
    title: "Working Lunch",
    description: "Lunch will be served. You can continue working with your team.",
    icon: <Utensils className="h-5 w-5" />,
  },
  {
    time: "04:30 PM",
    title: "Snacks",
    description: "A quick snack break to keep the energy high.",
    icon: <Cookie className="h-5 w-5" />,
  },
  {
    time: "06:00 PM",
    title: "Evaluation Starts",
    description: "Our panel of judges will begin evaluating the projects.",
    icon: <Presentation className="h-5 w-5" />,
  },
  {
    time: "07:30 PM",
    title: "Closing Ceremony",
    description: "Announcement of winners, prize distribution, and closing remarks.",
    icon: <Award className="h-5 w-5" />,
  },
]

export default function ScheduleSection() {
  return (
    <SectionContainer id="schedule" className="bg-transparent">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
          Event <span className="gradient-text">Schedule</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The timeline for your cosmic journey.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-6 top-0 h-full w-0.5 bg-primary/30 -translate-x-1/2" />

        <div className="space-y-10">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start gap-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="z-10 flex-shrink-0">
                <div className="absolute left-6 top-3 h-3 w-3 rounded-full bg-primary -translate-x-1/2" />
                <div className="h-12 w-12 rounded-full glass-card border border-primary/20 flex items-center justify-center text-primary ml-12">
                  {item.icon}
                </div>
              </div>
              
              <div className="w-full">
                <Card className="glass-card shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <div className="p-5">
                    <p className="font-heading font-semibold text-sm text-primary mb-1">
                      {item.time}
                    </p>
                    <h3 className="text-xl font-heading font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}