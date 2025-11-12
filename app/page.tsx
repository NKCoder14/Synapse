import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ScheduleCS from "@/components/sections/ScheduleCS"
import ScheduleSection from "@/components/sections/ScheduleSection"
import CompaniesSection from "@/components/sections/CompaniesSection"
import DomainsCS from "@/components/sections/DomainsCS"
import DomainsSection from "@/components/sections/DomainsSection"
import SponsorsSection from "@/components/sections/SponsorsSection"
import FAQSection from "@/components/sections/FAQSection"
import { Button } from "@/components/ui/button"
import { ArrowRight, Hourglass , CalendarDays} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-transparent">
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        {/*
        <CompaniesSection />
        <DomainsSection />
        */}
        <DomainsCS/>
        {/*
        <SponsorsSection/>
        */}
        <FAQSection/>
        <section id="register" className="py-16 md:py-24 text-center bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">Ready to Join?</h2>
            <div className="flex justify-center items-center gap-2 text-lg text-muted-foreground mb-6 animate-fade-in-up">
              <CalendarDays className="h-5 w-5" />
              <span>Last Date to Register: <span className="text-primary font-semibold">November 13, 2025</span></span>
            </div>
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-8 rounded-full group shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 ease-in-out transform hover:scale-105 bg-primary/90 hover:bg-primary"
            >
            <Link 
              href="https://forms.gle/ZZF9TJonAVCjUYEQA"
              target="_blank"
              rel="nonopener noreferrer"
            >
                Register for Liftoff
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
