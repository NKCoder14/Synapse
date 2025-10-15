import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {

  return (
    <footer className="bg-background/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-heading font-bold text-foreground">Synapse</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">Code. Create. Hire</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:team@careertribe.co.in" className="hover:text-primary transition-colors">
                  team@careertribe.co.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+919611491844" className="hover:text-primary transition-colors">
                  +91 96114 91844
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Jain College Of Engineering, Belagavi</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/careertribebelagavi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/careertribe_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/share/1ATeWFqTZm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              2025 Synapse. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
