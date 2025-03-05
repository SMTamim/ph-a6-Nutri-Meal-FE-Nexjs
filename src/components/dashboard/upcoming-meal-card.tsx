import Image from "next/image"

interface UpcomingMealCardProps {
  title: string
  type: string
  image: string
  calories: number
  protein: number
  carbs: number
  fat: number
  deliveryDate: string
}

export function UpcomingMealCard({ title, type, image, calories, protein, carbs, fat }: UpcomingMealCardProps) {
  return (
    <div className="relative">
      <div className="relative h-[300px] w-full">
        <Image src={image || "/placeholder.jpg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <div className="text-sm font-medium uppercase tracking-wider">{type}</div>
          <h3 className="mt-1 text-xl font-semibold">{title}</h3>
          <div className="mt-4 flex space-x-6">
            <div>
              <div className="text-sm font-medium text-white/60">Calories</div>
              <div className="text-lg font-medium">{calories}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-white/60">Protein</div>
              <div className="text-lg font-medium text-[hsl(var(--protein))]">{protein}g</div>
            </div>
            <div>
              <div className="text-sm font-medium text-white/60">Carbs</div>
              <div className="text-lg font-medium text-[hsl(var(--carbs))]">{carbs}g</div>
            </div>
            <div>
              <div className="text-sm font-medium text-white/60">Fat</div>
              <div className="text-lg font-medium text-[hsl(var(--fat))]">{fat}g</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

