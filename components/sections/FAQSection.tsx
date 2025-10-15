import {Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionContainer } from "@/components/shared/SectionContainer"

const faqData = [
  {
    question: "Who can participate in Synapse 2025?",
    answer:
      "Synapse is open to all university students, regardless of their major or year of study. We welcome anyone with a passion for technology and innovation.",
  },
  {
    question: "Do I need to have a project idea beforehand?",
    answer:
      "No, you don't need a pre-existing idea. The problem statements will be revealed before the Hackathon to ensure a level playing field for all teams.",
  },
  {
    question: "What is the team size limit?",
    answer:
      "You can participate in teams of 2 or 4 members. We welcome and encourage the formation of cross-college teams.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, there is a registration fee to cover event costs. The fee is ₹500 for a duo (team of 2) and ₹1000 for a squad (team of 3-4 members).",
  },
  {
    question: "What should I bring to the event?",
    answer:
      "Please bring your laptop, charger, any necessary hardware you might need for your project, and a valid student ID card. We will provide the rest!",
  },
]

export default function FAQSection() {
  return (
    <SectionContainer id="faq" className="py-24 md:py-32">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
          Have a question? We've got answers. If you need more help, feel free to reach out.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="glass-card mb-4 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionContainer>
  )
}