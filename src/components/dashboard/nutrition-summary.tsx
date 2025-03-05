"use client"

import { Card } from "@/src/components/ui/card"
import { useEffect, useRef } from "react"

export function NutritionSummary() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = 200

    // Data for the pie chart
    const data = [
      { label: "Carbs", value: 45, color: "hsl(var(--carbs))" },
      { label: "Protein", value: 30, color: "hsl(var(--protein))" },
      { label: "Fat", value: 25, color: "hsl(var(--fat))" },
    ]

    // Calculate total
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Draw pie chart
    let startAngle = 0
    const centerX = canvas.width / 4
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 10

    data.forEach((item) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      ctx.fillStyle = item.color
      ctx.fill()

      startAngle += sliceAngle
    })

    // Draw legend
    const legendX = canvas.width / 2 + 20
    const legendY = canvas.height / 2 - 50

    data.forEach((item, index) => {
      const y = legendY + index * 30

      // Draw color box
      ctx.fillStyle = item.color
      ctx.fillRect(legendX, y, 20, 20)

      // Draw label
      ctx.fillStyle = "#000"
      ctx.font = "14px sans-serif"
      ctx.fillText(`${item.label}: ${item.value}%`, legendX + 30, y + 15)
    })

    // Draw nutrition info
    const infoX = 20
    const infoY = canvas.height - 60

    ctx.fillStyle = "#000"
    ctx.font = "14px sans-serif"
    ctx.fillText("Calories: 2100", infoX, infoY)
    ctx.fillText("Protein: 158g", infoX, infoY + 20)
    ctx.fillText("Carbs: 236g", infoX, infoY + 40)
    ctx.fillText("Fat: 58g", infoX, infoY + 60)
  }, [])

  return (
    <div className="w-full">
      <canvas ref={canvasRef} className="w-full" />
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <Card className="p-3">
          <div className="text-xs text-muted-foreground">Calories</div>
          <div className="text-xl font-bold">2100</div>
          <div className="text-xs text-muted-foreground">Daily Average</div>
        </Card>
        <Card className="p-3">
          <div className="text-xs text-muted-foreground">Protein</div>
          <div className="text-xl font-bold text-[hsl(var(--protein))]">158g</div>
          <div className="text-xs text-muted-foreground">30% of calories</div>
        </Card>
        <Card className="p-3">
          <div className="text-xs text-muted-foreground">Water</div>
          <div className="text-xl font-bold text-[hsl(var(--protein))]">2.4L</div>
          <div className="text-xs text-muted-foreground">Daily Average</div>
        </Card>
      </div>
    </div>
  )
}

