"use client"
import Link from "next/link"
import { Menu, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Schedule", href: "#schedule" },
  { name: "Companies", href: "#companies" },
  { name: "Domains", href: "#domains" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
  { name: "Brochure", href: "/SynapseBrochure.pdf", external: true },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass backdrop-blur-xl shadow-lg shadow-primary/10 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group relative" onClick={closeMobileMenu}>
            <span className="text-2xl font-heading font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 relative">
              Synapse
              <Sparkles className="absolute -top-1 -right-6 h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-heading text-lg relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Button
              asChild
              className="rounded-full glass border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-primary/20 hover:shadow-primary/40 relative overflow-hidden group"
            >
              <Link href="#register">
                <span className="relative z-10 font-heading">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Link>
            </Button>
          </nav>

          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors duration-300">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs glass border-l border-white/10 p-6">
                <div className="flex flex-col space-y-6">
                  <Link href="/" className="flex items-center gap-2 mb-6" onClick={closeMobileMenu}>
                    <span className="text-xl font-heading font-bold text-foreground">Synapse</span>
                  </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-lg text-muted-foreground hover:text-primary transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild size="lg" className="mt-4 rounded-full" onClick={closeMobileMenu}>
                    <Link href="#register" className="font-heading">
                      Register Now
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
