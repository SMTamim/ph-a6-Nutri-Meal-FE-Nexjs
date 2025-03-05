"use client"

import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Slider } from "@/src/components/ui/slider"
import { Search, SlidersHorizontal } from "lucide-react"
import { useState } from "react"
import { MealCard } from "@/src/components/dashboard/meal-card"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/src/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"

export default function FindMealsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [calorieRange, setCalorieRange] = useState([200, 800])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Find Meals</h1>
        <p className="text-muted-foreground">Discover meals that match your preferences</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search meals, ingredients, or cuisines..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Meals</SheetTitle>
              <SheetDescription>Refine your meal search with these filters</SheetDescription>
            </SheetHeader>
            <div className="grid gap-6 py-6">
              <div className="space-y-2">
                <Label>Dietary Preferences</Label>
                <div className="grid grid-cols-2 gap-2">
                  {["Vegetarian", "Vegan", "Keto", "Paleo", "Gluten-Free", "Dairy-Free"].map((diet) => (
                    <Button key={diet} variant="outline" className="justify-start">
                      {diet}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Calories</Label>
                <div className="px-2">
                  <Slider defaultValue={calorieRange} min={100} max={1000} step={50} onValueChange={setCalorieRange} />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>{calorieRange[0]} kcal</span>
                    <span>{calorieRange[1]} kcal</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Cuisine</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cuisine" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cuisines</SelectItem>
                    <SelectItem value="italian">Italian</SelectItem>
                    <SelectItem value="mexican">Mexican</SelectItem>
                    <SelectItem value="asian">Asian</SelectItem>
                    <SelectItem value="mediterranean">Mediterranean</SelectItem>
                    <SelectItem value="american">American</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Protein Content</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select protein range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="high">High (30g+)</SelectItem>
                    <SelectItem value="medium">Medium (15-30g)</SelectItem>
                    <SelectItem value="low">Low (0-15g)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1">Apply Filters</Button>
                <Button variant="outline">Reset</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Meals</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MealCard
              title="Keto Chorizo Shakshuka"
              description="Spicy chorizo and eggs baked in a rich tomato sauce with feta cheese"
              image="/placeholder.jpg?height=100&width=200"
              calories={380}
              protein={14.5}
              carbs={7.8}
              fat={28.7}
              price={12.99}
              status="active"
            />
            <MealCard
              title="Low Carb Spicy Baked Eggs"
              description="Eggs baked in a spicy tomato sauce with bell peppers and onions"
              image="/placeholder.jpg?height=100&width=200"
              calories={320}
              protein={18.6}
              carbs={5.9}
              fat={24.7}
              price={11.99}
              status="active"
            />
            <MealCard
              title="Charred Veggie and Goat Cheese Salad"
              description="Grilled vegetables with creamy goat cheese on a bed of mixed greens"
              image="/placeholder.jpg?height=100&width=200"
              calories={290}
              protein={12.4}
              carbs={8.2}
              fat={22.8}
              price={10.99}
              status="active"
            />
            <MealCard
              title="Mediterranean Bowl"
              description="Falafel, hummus, tabbouleh, and roasted vegetables with tahini dressing"
              image="/placeholder.jpg?height=100&width=200"
              calories={450}
              protein={15.2}
              carbs={48.5}
              fat={22.3}
              price={13.99}
              status="active"
            />
            <MealCard
              title="Protein Power Pack"
              description="Grilled chicken, quinoa, roasted sweet potatoes, and steamed broccoli"
              image="/placeholder.jpg?height=100&width=200"
              calories={520}
              protein={42.8}
              carbs={38.2}
              fat={18.5}
              price={14.99}
              status="active"
            />
            <MealCard
              title="Vegan Buddha Bowl"
              description="Quinoa, roasted chickpeas, avocado, and mixed vegetables with tahini dressing"
              image="/placeholder.jpg?height=100&width=200"
              calories={480}
              protein={18.2}
              carbs={52.5}
              fat={24.8}
              price={12.99}
              status="active"
            />
          </div>
        </TabsContent>
        <TabsContent value="recommended" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MealCard
              title="Keto Chorizo Shakshuka"
              description="Spicy chorizo and eggs baked in a rich tomato sauce with feta cheese"
              image="/placeholder.jpg?height=100&width=200"
              calories={380}
              protein={14.5}
              carbs={7.8}
              fat={28.7}
              price={12.99}
              status="active"
            />
            <MealCard
              title="Protein Power Pack"
              description="Grilled chicken, quinoa, roasted sweet potatoes, and steamed broccoli"
              image="/placeholder.jpg?height=100&width=200"
              calories={520}
              protein={42.8}
              carbs={38.2}
              fat={18.5}
              price={14.99}
              status="active"
            />
            <MealCard
              title="Mediterranean Bowl"
              description="Falafel, hummus, tabbouleh, and roasted vegetables with tahini dressing"
              image="/placeholder.jpg?height=100&width=200"
              calories={450}
              protein={15.2}
              carbs={48.5}
              fat={22.3}
              price={13.99}
              status="active"
            />
          </div>
        </TabsContent>
        <TabsContent value="popular" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MealCard
              title="Protein Power Pack"
              description="Grilled chicken, quinoa, roasted sweet potatoes, and steamed broccoli"
              image="/placeholder.jpg?height=100&width=200"
              calories={520}
              protein={42.8}
              carbs={38.2}
              fat={18.5}
              price={14.99}
              status="active"
            />
            <MealCard
              title="Keto Chorizo Shakshuka"
              description="Spicy chorizo and eggs baked in a rich tomato sauce with feta cheese"
              image="/placeholder.jpg?height=100&width=200"
              calories={380}
              protein={14.5}
              carbs={7.8}
              fat={28.7}
              price={12.99}
              status="active"
            />
            <MealCard
              title="Vegan Buddha Bowl"
              description="Quinoa, roasted chickpeas, avocado, and mixed vegetables with tahini dressing"
              image="/placeholder.jpg?height=100&width=200"
              calories={480}
              protein={18.2}
              carbs={52.5}
              fat={24.8}
              price={12.99}
              status="active"
            />
          </div>
        </TabsContent>
        <TabsContent value="new" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MealCard
              title="Mediterranean Bowl"
              description="Falafel, hummus, tabbouleh, and roasted vegetables with tahini dressing"
              image="/placeholder.jpg?height=100&width=200"
              calories={450}
              protein={15.2}
              carbs={48.5}
              fat={22.3}
              price={13.99}
              status="active"
            />
            <MealCard
              title="Vegan Buddha Bowl"
              description="Quinoa, roasted chickpeas, avocado, and mixed vegetables with tahini dressing"
              image="/placeholder.jpg?height=100&width=200"
              calories={480}
              protein={18.2}
              carbs={52.5}
              fat={24.8}
              price={12.99}
              status="active"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

