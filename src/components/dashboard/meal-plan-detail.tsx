import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Calendar, Clock } from "lucide-react"

interface Meal {
  day: string
  name: string
  calories: number
}

interface MealPlanDetailProps {
  title: string
  description: string
  price: number
  features: string[]
  startDate: string
  nextDelivery: string
  meals: Meal[]
}

export function MealPlanDetail({
  title,
  description,
  price,
  features,
  startDate,
  nextDelivery,
  meals,
}: MealPlanDetailProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Started on: {startDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Next delivery: {nextDelivery}</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-2xl font-bold">${price.toFixed(2)}/week</div>
            <div className="flex gap-2 mt-2">
              <Button>Change Plan</Button>
              <Button variant="outline">Skip Next Delivery</Button>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Plan Features</h4>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-4">This Week's Meals</h4>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {meals.map((meal) => (
            <Card key={meal.day} className="p-4">
              <div className="font-medium">{meal.day}</div>
              <div>{meal.name}</div>
              <div className="text-sm text-muted-foreground">{meal.calories} calories</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

