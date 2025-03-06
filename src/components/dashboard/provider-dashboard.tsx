"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, ShoppingBag, Utensils, Users } from "lucide-react"
import Link from "next/link"
import { OrderCard } from "@/components/dashboard/order-card"

export function ProviderDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          <ShoppingBag className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">45</div>
          <p className="text-xs text-muted-foreground">+12 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <p className="text-xs text-muted-foreground">+4 from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$3,240</div>
          <p className="text-xs text-muted-foreground">+8% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Meals</CardTitle>
          <Utensils className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">18</div>
          <p className="text-xs text-muted-foreground">In your current menu</p>
        </CardContent>
      </Card>

      <div className="col-span-full">
        <Tabs defaultValue="pending">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="pending">Pending Orders</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Deliveries</TabsTrigger>
            </TabsList>
            <Link href="/dashboard/orders">
              <Button variant="outline" size="sm">
                View All Orders
              </Button>
            </Link>
          </div>
          <TabsContent value="pending" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <OrderCard
                customerName="John Smith"
                orderDate="Today, 9:30 AM"
                items={[
                  { name: "Keto Chorizo Shakshuka", quantity: 1 },
                  { name: "Low Carb Spicy Baked Eggs", quantity: 1 },
                  { name: "Charred Veggie Salad", quantity: 1 },
                ]}
                total={42.97}
                status="pending"
              />
              <OrderCard
                customerName="Sarah Johnson"
                orderDate="Today, 10:15 AM"
                items={[
                  { name: "Vegan Buddha Bowl", quantity: 2 },
                  { name: "Quinoa Stuffed Peppers", quantity: 1 },
                ]}
                total={38.98}
                status="pending"
              />
              <OrderCard
                customerName="Michael Brown"
                orderDate="Today, 11:45 AM"
                items={[
                  { name: "Grilled Salmon", quantity: 2 },
                  { name: "Roasted Vegetables", quantity: 2 },
                  { name: "Sweet Potato Mash", quantity: 1 },
                ]}
                total={56.95}
                status="pending"
              />
            </div>
          </TabsContent>
          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <OrderCard
                customerName="Emily Davis"
                orderDate="Tomorrow, 10:00 AM - 12:00 PM"
                items={[
                  { name: "Mediterranean Bowl", quantity: 1 },
                  { name: "Greek Salad", quantity: 1 },
                  { name: "Hummus Platter", quantity: 1 },
                ]}
                total={39.97}
                status="confirmed"
              />
              <OrderCard
                customerName="David Wilson"
                orderDate="Tomorrow, 10:00 AM - 12:00 PM"
                items={[
                  { name: "Protein Power Pack", quantity: 3 },
                  { name: "Berry Smoothie", quantity: 3 },
                ]}
                total={54.94}
                status="confirmed"
              />
              <OrderCard
                customerName="Jessica Martinez"
                orderDate="Tomorrow, 2:00 PM - 4:00 PM"
                items={[
                  { name: "Chicken Teriyaki", quantity: 2 },
                  { name: "Vegetable Stir Fry", quantity: 2 },
                  { name: "Brown Rice", quantity: 2 },
                ]}
                total={62.94}
                status="confirmed"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Menu Management</CardTitle>
          <CardDescription>Manage your meal offerings and update your menu</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div>
              <p>
                You have <strong>18 active meals</strong> in your current menu.
              </p>
              <p className="text-sm text-muted-foreground">Last updated 2 days ago</p>
            </div>
            <div className="flex gap-2 sm:ml-auto">
              <Link href="/dashboard/menu">
                <Button variant="outline">View Menu</Button>
              </Link>
              <Link href="/dashboard/menu/new">
                <Button>Add New Meal</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

