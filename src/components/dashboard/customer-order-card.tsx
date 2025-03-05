import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"

interface OrderItem {
  name: string
  quantity: number
}

interface CustomerOrderCardProps {
  orderNumber: string
  orderDate: string
  items: OrderItem[]
  total: number
  status: "pending" | "confirmed" | "processing" | "delivered" | "cancelled"
  deliveryDate: string
}

export function CustomerOrderCard({
  orderNumber,
  orderDate,
  items,
  total,
  status,
  deliveryDate,
}: CustomerOrderCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "confirmed":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "processing":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      case "delivered":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "cancelled":
        return "bg-red-100 text-red-800 hover:bg-red-200"
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold">{orderNumber}</h3>
            <p className="text-sm text-muted-foreground">Ordered on {orderDate}</p>
          </div>
          <Badge className={getStatusColor()}>{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-1">
          <div className="text-sm font-medium">Items:</div>
          <ul className="space-y-1 text-sm">
            {items.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span className="text-muted-foreground">x{item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex justify-between font-medium">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="mt-2 text-sm">
          <span className="text-muted-foreground">Delivery: {deliveryDate}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          View Details
        </Button>
        {status === "delivered" ? (
          <Button size="sm">Reorder</Button>
        ) : status !== "cancelled" ? (
          <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive/10">
            Cancel
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  )
}

