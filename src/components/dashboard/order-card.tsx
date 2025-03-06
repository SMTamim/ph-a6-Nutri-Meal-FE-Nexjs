import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface OrderItem {
  name: string
  quantity: number
}

interface OrderCardProps {
  customerName: string
  orderDate: string
  items: OrderItem[]
  total: number
  status: "pending" | "confirmed" | "delivered" | "cancelled"
}

export function OrderCard({ customerName, orderDate, items, total, status }: OrderCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "confirmed":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
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
          <CardTitle className="text-lg">{customerName}</CardTitle>
          <Badge className={getStatusColor()}>{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{orderDate}</p>
      </CardHeader>
      <CardContent className="pb-2">
        <ul className="space-y-1 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.name}</span>
              <span className="text-muted-foreground">x{item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between font-medium">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {status === "pending" ? (
          <>
            <Button variant="outline" size="sm">
              Decline
            </Button>
            <Button size="sm">Accept</Button>
          </>
        ) : (
          <>
            <Button variant="outline" size="sm">
              Details
            </Button>
            <Button size="sm">Track</Button>
          </>
        )}
      </CardFooter>
    </Card>
  )
}

