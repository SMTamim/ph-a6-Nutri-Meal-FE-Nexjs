"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Plus, Filter } from "lucide-react"
import Link from "next/link"
import { MealCard } from "@/components/dashboard/meal-card"

export default function MenuPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Menu Management</h1>
          <p className="text-muted-foreground">Manage your meal offerings and update your menu</p>
        </div>
        <Link href="/dashboard/menu/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Meal
          </Button>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search meals..." className="w-full pl-8" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Meals</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
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
              status="draft"
            />
          </div>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
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
          </div>
        </TabsContent>
        <TabsContent value="draft" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MealCard
              title="Vegan Buddha Bowl"
              description="Quinoa, roasted chickpeas, avocado, and mixed vegetables with tahini dressing"
              image="/placeholder.jpg?height=100&width=200"
              calories={480}
              protein={18.2}
              carbs={52.5}
              fat={24.8}
              price={12.99}
              status="draft"
            />
          </div>
        </TabsContent>
        <TabsContent value="archived" className="space-y-4">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-muted-foreground">No archived meals found</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

