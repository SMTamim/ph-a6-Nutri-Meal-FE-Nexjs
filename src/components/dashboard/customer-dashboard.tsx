"use client"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Calendar } from "lucide-react"
import { UpcomingMealCard } from "@/src/components/dashboard/upcoming-meal-card"
import { MacroProgress } from "@/src/components/dashboard/macro-progress"

export function CustomerDashboard() {
  const days = [
    { number: 14, name: "Sunday" },
    { number: 15, name: "Monday" },
    { number: 16, name: "Tuesday", isActive: true },
    { number: 17, name: "Wednesday" },
    { number: 18, name: "Thursday" },
    { number: 19, name: "Friday" },
    { number: 20, name: "Saturday" },
  ]

  return (
    <div className="space-y-8">
      <Card className="bg-accent p-6">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span className="text-lg font-medium">Current Week</span>
          </div>
          <div className="text-lg font-medium">Friday, Dec. 13</div>
          <div className="flex space-x-2">
            <Button size="sm" variant="ghost" className="text-white hover:text-white hover:bg-white/10">
              Previous
            </Button>
            <Button size="sm" variant="ghost" className="text-white hover:text-white hover:bg-white/10">
              Next
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-7 gap-4">
        {days.map((day) => (
          <Card
            key={day.number}
            className={`p-4 text-center cursor-pointer transition-colors ${
              day.isActive ? "bg-accent text-white" : "hover:bg-muted"
            }`}
          >
            <div className="text-sm font-medium">{day.name}</div>
            <div className="text-2xl font-semibold mt-1">{day.number}</div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-6">
        <MacroProgress label="Cal" value={75} color="var(--carbs)" />
        <MacroProgress label="Fats" value={25} color="var(--fat)" />
        <MacroProgress label="Carbs" value={75} color="var(--carbs)" />
        <MacroProgress label="Pro" value={25} color="var(--protein)" />
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <UpcomingMealCard
                title="High Protein Berry Smoothie Bowl"
                type="Breakfast"
                image="/placeholder.jpg?height=300&width=600"
                calories={380}
                protein={14.5}
                carbs={7.8}
                fat={28.7}
                deliveryDate="Today"
              />
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <UpcomingMealCard
                title="Mediterranean Quinoa Bowl"
                type="Lunch"
                image="/placeholder.jpg?height=300&width=600"
                calories={320}
                protein={18.6}
                carbs={5.9}
                fat={24.7}
                deliveryDate="Today"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

