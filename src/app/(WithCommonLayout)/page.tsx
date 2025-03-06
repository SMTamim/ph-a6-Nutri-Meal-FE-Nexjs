import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Utensils, Calendar, Clock, Heart } from "lucide-react"

export default function Home() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Personalized Meal Plans Delivered to Your Door
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Choose your meals, set your preferences, and we'll deliver fresh, healthy meals right to your
                  doorstep.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Get Started
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/meals">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                    View Meal Plans
                  </Button>
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.jpg?height=550&width=550"
              alt="Healthy meal preparation"
              className="object-cover mx-auto overflow-hidden aspect-video rounded-xl sm:w-full lg:order-last"
              width={550}
              height={550}
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our simple process makes meal planning and delivery effortless
              </p>
            </div>
          </div>
          <div className="grid items-center max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(var(--carbs))]">
                <Calendar className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Plan Your Meals</h3>
              <p className="text-muted-foreground">
                Choose from our wide variety of meal options based on your dietary preferences.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(var(--carbs))]">
                <Utensils className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">We Prepare</h3>
              <p className="text-muted-foreground">
                Our chefs prepare your meals with fresh, high-quality ingredients.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(var(--carbs))]">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Delivery</h3>
              <p className="text-muted-foreground">
                We deliver your meals according to your schedule, right to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Meal Plans</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our most popular meal plans
              </p>
            </div>
          </div>
          <div className="grid max-w-5xl gap-6 py-12 mx-auto lg:grid-cols-3">
            {[
              {
                title: "Keto Plan",
                description: "High-fat, low-carb meals designed for ketogenic diets",
                price: "$89.99",
                features: ["7 meals per week", "Under 20g net carbs per meal", "High protein options"],
              },
              {
                title: "Balanced Plan",
                description: "Perfectly balanced meals with optimal macronutrient distribution",
                price: "$79.99",
                features: ["7 meals per week", "Balanced macros", "Variety of cuisines"],
              },
              {
                title: "Vegan Plan",
                description: "Plant-based meals packed with nutrients and flavor",
                price: "$84.99",
                features: ["7 meals per week", "100% plant-based", "High protein options"],
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className="flex flex-col overflow-hidden border rounded-lg shadow-sm bg-background"
              >
                <div className="flex flex-col justify-between flex-1 p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{plan.title}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Heart className="mr-2 h-4 w-4 text-[hsl(var(--carbs))]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-3xl font-bold">{plan.price}</p>
                    <Button className="w-full">Choose Plan</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

