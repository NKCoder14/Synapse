"use client"

import { useEffect, useState } from "react"
import Image from "next/image" 
import dinoRun1 from "@/assets/images/DinoRun1.png"
import dinoRun2 from "@/assets/images/DinoRun2.png"

export const SplashScreen = () => {
  const [progress, setProgress] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(0) 

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(progressInterval)
  }, [])

  useEffect(() => {
    const frameInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame === 0 ? 1 : 0)) 
    }, 100) 

    return () => clearInterval(frameInterval)
  }, [])

  return (
    <div className="w-3/6">
      <div
        className="relative h-20 w-20 transition-all duration-100 animate-bob"
        style={{ left: `calc(${progress}% - 2.5rem)` }}
      >
        <Image
          src={currentFrame === 0 ? dinoRun1 : dinoRun2}
          alt="Running Dino"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative mt-4 h-6 w-full rounded-full p-1 bg-black/30 border-2 border-white/20 shadow-inner">
        <div
          className="h-full rounded-full bg-primary transition-all duration-100 ease-linear shadow-[0_0_10px] shadow-primary/50"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}