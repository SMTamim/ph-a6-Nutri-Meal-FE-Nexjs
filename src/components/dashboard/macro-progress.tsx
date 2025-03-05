"use client"

import { useEffect, useRef } from "react"

interface MacroProgressProps {
  label: string
  value: number
  color: string
}

export function MacroProgress({ label, value, color }: MacroProgressProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const size = 120
    canvas.width = size
    canvas.height = size

    // Calculate center and radius
    const centerX = size / 2
    const centerY = size / 2
    const radius = (size - 10) / 2
    const startAngle = -Math.PI / 2
    const endAngle = (2 * Math.PI * value) / 100 - Math.PI / 2

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Draw background circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.strokeStyle = "rgba(0, 0, 0, 0.1)"
    ctx.lineWidth = 4
    ctx.stroke()

    // Draw progress arc
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, startAngle, endAngle)
    ctx.strokeStyle = `hsl(${color})`
    ctx.lineWidth = 4
    ctx.stroke()

    // Draw text
    ctx.fillStyle = "#000"
    ctx.font = "500 24px Inter"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(`${value}%`, centerX, centerY - 10)

    ctx.font = "500 14px Inter"
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)"
    ctx.fillText(label, centerX, centerY + 15)
  }, [value, color, label])

  return (
    <div className="flex items-center justify-center">
      <canvas ref={canvasRef} className="w-[120px] h-[120px]" />
    </div>
  )
}

