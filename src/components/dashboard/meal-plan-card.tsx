import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Check } from "lucide-react"

interface MealPlanCardProps {
  title: string
  description: string
  price: number
  features: string[]
  isActive: boolean
}

export function MealPlanCard({ title, description, price, features, isActive }: MealPlanCardProps) {
  return (
    <Card className={isActive ? "border-[hsl(var(--carbs))]" : ""}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-3xl font-bold">${price.toFixed(2)}</div>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-[hsl(var(--carbs))]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        {isActive ? (
          <Button variant="outline" className="w-full">
            Current Plan
          </Button>
        ) : (
          <Button className="w-full">Switch Plan</Button>
        )}
      </CardFooter>
    </Card>
  )
}

