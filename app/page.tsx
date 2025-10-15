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
import { ArrowRight, Hourglass } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-transparent">
        <HeroSection />
        <AboutSection />
        <ScheduleCS/>
        <CompaniesSection />
        {/*
        <DomainsSection />
        */}
        {/*
        <ScheduleSection />
        */}
        <DomainsCS/>
        <SponsorsSection/>
        <FAQSection/>
        <section id="register" className="py-16 md:py-24 text-center bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">Ready to Join?</h2>
            <Button
              size="lg"
              disabled 
              className="text-lg px-10 py-8 rounded-full shadow-lg bg-primary/80 opacity-60 cursor-not-allowed"
            >
              <Hourglass className="mr-3 h-6 w-6" />
              Registrations Open Soon
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
