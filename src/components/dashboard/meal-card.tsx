import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { MoreHorizontal, Edit, Trash, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"

interface MealCardProps {
  title: string
  description: string
  image: string
  calories: number
  protein: number
  carbs: number
  fat: number
  price: number
  status: "active" | "draft" | "archived"
}

export function MealCard({ title, description, image, calories, protein, carbs, fat, price, status }: MealCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "draft":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "archived":
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <Card>
      <div className="relative">
        <div className="relative h-48 w-full">
          <Image src={image || "/placeholder.jpg"} alt={title} fill className="rounded-t-lg object-cover" />
        </div>
        <Badge className={`absolute right-2 top-2 ${getStatusColor()}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="-mt-1 -mr-2">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                View
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-4 gap-2 text-center text-sm">
          <div>
            <div className="font-medium">{calories}</div>
            <div className="text-xs text-muted-foreground">kcal</div>
          </div>
          <div>
            <div className="font-medium">{protein}g</div>
            <div className="text-xs text-muted-foreground">Protein</div>
          </div>
          <div>
            <div className="font-medium">{carbs}g</div>
            <div className="text-xs text-muted-foreground">Carbs</div>
          </div>
          <div>
            <div className="font-medium">{fat}g</div>
            <div className="text-xs text-muted-foreground">Fat</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="text-lg font-bold">${price.toFixed(2)}</div>
        <Link href={`/dashboard/menu/${title.toLowerCase().replace(/\s+/g, "-")}`}>
          <Button variant="outline" size="sm">
            Edit
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

