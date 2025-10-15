"use client"

import { useEffect, useRef } from "react"

interface StarfieldProps {
  starCount?: number
  starSpeed?: number
  starColor?: string
  className?: string
}

export const Starfield = ({
  starCount = 800,
  starSpeed = 0.005, 
  starColor = "#FFFFFF",
  className = "",
}: StarfieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const starsRef = useRef<Star[]>([])
  const shootingStarsRef = useRef<ShootingStar[]>([]) 

  class Star {
    x: number
    y: number
    z: number
    twinkle: number 

    constructor() {
      this.twinkle = Math.random() * Math.PI * 2
      this.reset()
    }

    reset() {
      this.x = (Math.random() - 0.5) * 2
      this.y = (Math.random() - 0.5) * 2
      this.z = Math.random() * 2
    }

    update() {
      this.z -= starSpeed
      this.twinkle += 0.02 

      if (this.z <= 0) {
        this.reset()
      }
    }

    draw(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
      const screenX = (this.x / this.z) * (canvasWidth / 2) + canvasWidth / 2
      const screenY = (this.y / this.z) * (canvasHeight / 2) + canvasHeight / 2

      const radius = (1 / this.z) * 1.5
      const opacity = (1 - this.z / 2) * (0.5 + 0.5 * Math.sin(this.twinkle))

      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.lineWidth = radius * 0.5
      ctx.beginPath()
      ctx.moveTo(screenX, screenY - radius)
      ctx.lineTo(screenX, screenY + radius)
      ctx.moveTo(screenX - radius, screenY)
      ctx.lineTo(screenX + radius, screenY)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(screenX, screenY, radius * 0.3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 1.5})`
      ctx.fill()
    }
  }

  class ShootingStar {
    x: number
    y: number
    vx: number
    vy: number
    length: number
    opacity: number
    life: number
    maxLife: number

    constructor() {
      this.reset()
    }

    reset() {
      const side = Math.floor(Math.random() * 4)
      const canvasWidth = window.innerWidth
      const canvasHeight = window.innerHeight

      switch (side) {
        case 0: 
          this.x = Math.random() * canvasWidth
          this.y = -50
          break
        case 1: 
          this.x = canvasWidth + 50
          this.y = Math.random() * canvasHeight
          break
        case 2: 
          this.x = Math.random() * canvasWidth
          this.y = canvasHeight + 50
          break
        case 3:
          this.x = -50
          this.y = Math.random() * canvasHeight
          break
      }

      const centerX = canvasWidth / 2
      const centerY = canvasHeight / 2
      const angle = Math.atan2(centerY - this.y, centerX - this.x) + (Math.random() - 0.5) * 0.5
      const speed = 3 + Math.random() * 4

      this.vx = Math.cos(angle) * speed
      this.vy = Math.sin(angle) * speed
      this.length = 20 + Math.random() * 40
      this.opacity = 1
      this.life = 0
      this.maxLife = 60 + Math.random() * 120
    }

    update() {
      this.x += this.vx
      this.y += this.vy
      this.life++

      this.opacity = Math.max(0, 1 - this.life / this.maxLife)

      if (
        this.life >= this.maxLife ||
        this.x < -100 ||
        this.x > window.innerWidth + 100 ||
        this.y < -100 ||
        this.y > window.innerHeight + 100
      ) {
        this.reset()
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      if (this.opacity <= 0) return

      const gradient = ctx.createLinearGradient(
        this.x - (this.vx * this.length) / 10,
        this.y - (this.vy * this.length) / 10,
        this.x,
        this.y,
      )

      gradient.addColorStop(0, `rgba(255, 255, 255, 0)`)
      gradient.addColorStop(0.5, `rgba(200, 220, 255, ${this.opacity * 0.8})`)
      gradient.addColorStop(1, `rgba(255, 255, 255, ${this.opacity})`)

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(this.x - (this.vx * this.length) / 10, this.y - (this.vy * this.length) / 10)
      ctx.lineTo(this.x, this.y)
      ctx.stroke()
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let canvasWidth: number
    let canvasHeight: number

    const setCanvasDimensions = () => {
      canvasWidth = window.innerWidth
      canvasHeight = window.innerHeight
      canvas.width = canvasWidth
      canvas.height = canvasHeight
    }

    const init = () => {
      setCanvasDimensions()

      starsRef.current = []
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push(new Star())
      }

      shootingStarsRef.current = []
      for (let i = 0; i < 3; i++) {
        shootingStarsRef.current.push(new ShootingStar())
      }
    }

    const animate = () => {
      ctx.fillStyle = "transparent"
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      starsRef.current.forEach((star) => {
        star.update()
        star.draw(ctx, canvasWidth, canvasHeight)
      })

      shootingStarsRef.current.forEach((shootingStar) => {
        shootingStar.update()
        shootingStar.draw(ctx)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      setCanvasDimensions()
    }

    init()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [starCount, starSpeed, starColor])

  return <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none ${className}`} />
}
