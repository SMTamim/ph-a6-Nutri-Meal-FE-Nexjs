"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { useAuth } from "@/context/auth/auth-provider"
import { OrderCard } from "@/components/dashboard/order-card"
import { CustomerOrderCard } from "@/components/dashboard/customer-order-card"

export default function OrdersPage() {
  const { user } = useAuth()
  const isCustomer = user?.role === "customer"

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{isCustomer ? "My Orders" : "Orders"}</h1>
        <p className="text-muted-foreground">
          {isCustomer ? "Track and manage your meal orders" : "Manage customer orders and deliveries"}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search orders..." className="w-full pl-8" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {isCustomer ? (
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Orders</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <CustomerOrderCard
                orderNumber="ORD-2023-1234"
                orderDate="March 4, 2024"
                items={[
                  { name: "Keto Chorizo Shakshuka", quantity: 1 },
                  { name: "Low Carb Spicy Baked Eggs", quantity: 1 },
                  { name: "Charred Veggie Salad", quantity: 1 },
                ]}
                total={42.97}
                status="delivered"
                deliveryDate="March 5, 2024"
              />
              <CustomerOrderCard
                orderNumber="ORD-2023-1235"
                orderDate="March 5, 2024"
                items={[
                  { name: "Mediterranean Bowl", quantity: 1 },
                  { name: "Greek Salad", quantity: 1 },
                  { name: "Hummus Platter", quantity: 1 },
                ]}
                total={39.97}
                status="processing"
                deliveryDate="March 7, 2024"
              />
              <CustomerOrderCard
                orderNumber="ORD-2023-1236"
                orderDate="March 6, 2024"
                items={[
                  { name: "Protein Power Pack", quantity: 3 },
                  { name: "Berry Smoothie", quantity: 3 },
                ]}
                total={54.94}
                status="confirmed"
                deliveryDate="March 8, 2024"
              />
            </div>
          </TabsContent>
          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <CustomerOrderCard
                orderNumber="ORD-2023-1235"
                orderDate="March 5, 2024"
                items={[
                  { name: "Mediterranean Bowl", quantity: 1 },
                  { name: "Greek Salad", quantity: 1 },
                  { name: "Hummus Platter", quantity: 1 },
                ]}
                total={39.97}
                status="processing"
                deliveryDate="March 7, 2024"
              />
              <CustomerOrderCard
                orderNumber="ORD-2023-1236"
                orderDate="March 6, 2024"
                items={[
                  { name: "Protein Power Pack", quantity: 3 },
                  { name: "Berry Smoothie", quantity: 3 },
                ]}
                total={54.94}
                status="confirmed"
                deliveryDate="March 8, 2024"
              />
            </div>
          </TabsContent>
          <TabsContent value="past" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <CustomerOrderCard
                orderNumber="ORD-2023-1234"
                orderDate="March 4, 2024"
                items={[
                  { name: "Keto Chorizo Shakshuka", quantity: 1 },
                  { name: "Low Carb Spicy Baked Eggs", quantity: 1 },
                  { name: "Charred Veggie Salad", quantity: 1 },
                ]}
                total={42.97}
                status="delivered"
                deliveryDate="March 5, 2024"
              />
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
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
                customerName="Michael Brown"
                orderDate="Yesterday, 11:45 AM"
                items={[
                  { name: "Grilled Salmon", quantity: 2 },
                  { name: "Roasted Vegetables", quantity: 2 },
                  { name: "Sweet Potato Mash", quantity: 1 },
                ]}
                total={56.95}
                status="delivered"
              />
            </div>
          </TabsContent>
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
            </div>
          </TabsContent>
          <TabsContent value="confirmed" className="space-y-4">
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
            </div>
          </TabsContent>
          <TabsContent value="delivered" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <OrderCard
                customerName="Michael Brown"
                orderDate="Yesterday, 11:45 AM"
                items={[
                  { name: "Grilled Salmon", quantity: 2 },
                  { name: "Roasted Vegetables", quantity: 2 },
                  { name: "Sweet Potato Mash", quantity: 1 },
                ]}
                total={56.95}
                status="delivered"
              />
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}

