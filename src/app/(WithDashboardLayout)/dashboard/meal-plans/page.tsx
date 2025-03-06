"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MealPlanCard } from "@/components/dashboard/meal-plan-card"
import { MealPlanDetail } from "@/components/dashboard/meal-plan-detail"

export default function MealPlansPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Meal Plans</h1>
        <p className="text-muted-foreground">Browse and manage your meal plans</p>
      </div>

      <Tabs defaultValue="current">
        <TabsList>
          <TabsTrigger value="current">Current Plan</TabsTrigger>
          <TabsTrigger value="available">Available Plans</TabsTrigger>
          <TabsTrigger value="custom">Custom Plan</TabsTrigger>
        </TabsList>
        <TabsContent value="current" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Balanced Plan</CardTitle>
              <CardDescription>Your current meal plan</CardDescription>
            </CardHeader>
            <CardContent>
              <MealPlanDetail
                title="Balanced Plan"
                description="Perfectly balanced meals with optimal macronutrient distribution"
                price={79.99}
                features={[
                  "7 meals per week",
                  "Balanced macros (45% carbs, 30% protein, 25% fat)",
                  "Variety of cuisines",
                  "Customizable portion sizes",
                  "Nutritional information provided",
                  "Free delivery",
                ]}
                startDate="March 1, 2024"
                nextDelivery="Tomorrow, 10:00 AM - 12:00 PM"
                meals={[
                  { day: "Monday", name: "Mediterranean Bowl", calories: 550 },
                  { day: "Tuesday", name: "Grilled Chicken with Quinoa", calories: 620 },
                  { day: "Wednesday", name: "Salmon with Roasted Vegetables", calories: 580 },
                  { day: "Thursday", name: "Turkey and Sweet Potato Bowl", calories: 540 },
                  { day: "Friday", name: "Shrimp and Vegetable Stir Fry", calories: 490 },
                  { day: "Saturday", name: "Beef and Broccoli", calories: 610 },
                  { day: "Sunday", name: "Vegetable Frittata", calories: 480 },
                ]}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="available" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MealPlanCard
              title="Balanced Plan"
              description="Perfectly balanced meals with optimal macronutrient distribution"
              price={79.99}
              features={["7 meals per week", "Balanced macros", "Variety of cuisines"]}
              isActive={true}
            />
            <MealPlanCard
              title="Keto Plan"
              description="High-fat, low-carb meals designed for ketogenic diets"
              price={89.99}
              features={["7 meals per week", "Under 20g net carbs per meal", "High protein options"]}
              isActive={false}
            />
            <MealPlanCard
              title="Vegan Plan"
              description="Plant-based meals packed with nutrients and flavor"
              price={84.99}
              features={["7 meals per week", "100% plant-based", "High protein options"]}
              isActive={false}
            />
            <MealPlanCard
              title="Paleo Plan"
              description="Meals inspired by our ancestors' diets, free from processed foods"
              price={94.99}
              features={["7 meals per week", "No grains or dairy", "Grass-fed meats"]}
              isActive={false}
            />
            <MealPlanCard
              title="Vegetarian Plan"
              description="Delicious meat-free meals with plenty of protein"
              price={79.99}
              features={["7 meals per week", "Vegetarian protein sources", "Nutrient-dense"]}
              isActive={false}
            />
            <MealPlanCard
              title="Protein Plus Plan"
              description="High-protein meals for active individuals and athletes"
              price={99.99}
              features={["7 meals per week", "40g+ protein per meal", "Performance-focused"]}
              isActive={false}
            />
          </div>
        </TabsContent>
        <TabsContent value="custom" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create Your Custom Plan</CardTitle>
              <CardDescription>
                Design a meal plan that perfectly fits your dietary needs and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Dietary Preferences</h3>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    {[
                      "Vegetarian",
                      "Vegan",
                      "Keto",
                      "Paleo",
                      "Gluten-Free",
                      "Dairy-Free",
                      "Low-Carb",
                      "High-Protein",
                    ].map((diet) => (
                      <Button key={diet} variant="outline" className="justify-start">
                        {diet}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Allergies & Restrictions</h3>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    {["Nuts", "Shellfish", "Eggs", "Soy", "Fish", "Wheat", "Peanuts", "Sesame"].map((allergy) => (
                      <Button key={allergy} variant="outline" className="justify-start">
                        {allergy}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Meals Per Week</h3>
                  <div className="flex gap-2">
                    {[5, 7, 10, 14, 21].map((count) => (
                      <Button key={count} variant="outline">
                        {count}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Portion Size</h3>
                  <div className="flex gap-2">
                    {["Small", "Regular", "Large"].map((size) => (
                      <Button key={size} variant="outline">
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Create Custom Plan</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

