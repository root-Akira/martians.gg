"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isDark = theme === "dark"

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid properties
    const gridSize = 40
    const lineWidth = 0.5
    const lineColor = isDark ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.03)"
    const glowColor = isDark ? "rgba(0, 255, 255, 0.15)" : "rgba(0, 150, 255, 0.07)"

    // Particles
    const particles: { x: number; y: number; size: number; speed: number; opacity: number }[] = []
    const particleCount = Math.floor(window.innerWidth / 25) // Reduced particle count for smoother performance

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5, // Smaller particles
        speed: Math.random() * 0.3 + 0.1, // Slower movement
        opacity: Math.random() * 0.5 + 0.2, // Varied opacity
      })
    }

    // Animation
    let animationFrameId: number
    let lastTime = 0
    let angle = 0

    const animate = (time: number) => {
      const deltaTime = time - lastTime
      lastTime = time

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = lineColor
      ctx.lineWidth = lineWidth

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Update and draw particles
      angle += 0.0005 * deltaTime // Slower rotation

      particles.forEach((particle) => {
        particle.y += particle.speed

        if (particle.y > canvas.height) {
          particle.y = 0
          particle.x = Math.random() * canvas.width
        }

        // Create proper rgba colors with the particle's opacity
        const particleColor = isDark
          ? `rgba(0, 255, 255, ${particle.opacity * 0.15})`
          : `rgba(0, 150, 255, ${particle.opacity * 0.07})`

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()

        // Add glow effect with smoother gradient
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 6)
        gradient.addColorStop(0, particleColor)
        gradient.addColorStop(
          0.5,
          isDark ? `rgba(0, 255, 255, ${particle.opacity * 0.05})` : `rgba(0, 150, 255, ${particle.opacity * 0.02})`,
        )
        gradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 6, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}

