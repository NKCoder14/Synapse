import type React from "react"
import type { Metadata } from "next"
import localFont1 from "next/font/local"
import localFont2 from "next/font/local"
import "./globals.css"
import { cn } from "@/lib/utils"
import ClientLayout from "@/components/layout/ClientLayout"
import { Analytics } from "@vercel/analytics/next"

const brickSans = localFont1({
  src: "../assets/fonts/BrickSans-Regular.woff2", 
  display: "swap",
  variable: "--font-bricks-sans", 
})

const brixtonRegular = localFont2({
  src: "../assets/fonts/BrixtonRegular.woff2", 
  display: "swap",
  variable: "--font-brixton", 
})

export const metadata: Metadata = {
  title: "Synapse",
  description: "Code. Create. Hire",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(brickSans.variable, brixtonRegular.variable, "antialiased font-sans bg-transparent")}>
        <ClientLayout>{children}</ClientLayout>
        <Analytics/>
      </body>
    </html>
  )
}