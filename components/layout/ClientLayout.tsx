"use client"

import React, { useEffect, useState } from "react"
import { Starfield } from "@/components/effects/Starfield"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { SplashScreen } from "./SplashScreen"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [screenState, setScreenState] = useState<"splash" | "transitioning" | "loaded">("splash")

    useEffect(() => {
        const splashTimer = setTimeout(() => {
        setScreenState("transitioning")
    }, 2000)

        const transitionTimer = setTimeout(() => {
            setScreenState("loaded")
        }, 3000)

        return () => {
        clearTimeout(splashTimer)
        clearTimeout(transitionTimer)
    }
    }, [])

    return (
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#180952] via-[#421975] to-[#0b0837]" />
            <Starfield
                starSpeed={screenState === "splash" ? 0.15 : 0.01}
                starCount={2000}
                className={cn("transition-opacity duration-&lsqb;2000ms&rsqb",
                screenState === "splash" ? "opacity-100" : "opacity-40"
            )}
        />
        <div
        className={cn("fixed inset-0 z-50 flex flex-col justify-center transition-opacity duration-1000",
          screenState === "splash" ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        >
        <div className="relative z-10 flex animate-fade-in-up flex-col items-center">
          <SplashScreen/>
            </div>
        </div>

        <div
        className={cn("relative z-10 flex min-h-screen flex-col transition-opacity duration-1000",
          screenState === "loaded" ? "opacity-100" : "opacity-0"
        )}
        >
        {children}
      </div>
      <Toaster />
      </div>
  )
}
