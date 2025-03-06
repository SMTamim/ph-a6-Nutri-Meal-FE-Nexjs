"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/context/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight, Home, LogOut, Menu, ShoppingBag, User, Utensils, X } from "lucide-react"
import { useState } from "react"
import { logoutUser } from "@/services/AuthServices"
import { useRouter } from "next/navigation"

export function DashboardSidebar() {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser();
    logout();
    router.push("/dashboard");

  }
  const links = [
    { href: "/dashboard", label: "Overview", icon: Home },
    { href: "/dashboard/meal-plans", label: "Meal Planner", icon: Calendar },
    { href: "/dashboard/measurements", label: "Measurements", icon: ChevronRight },
    { href: "/dashboard/shop", label: "Shop", icon: ShoppingBag },
    { href: "/dashboard/profile", label: "Profile", icon: User },
  ]

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed right-4 top-4 z-40 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-background transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col border-r">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2">
              <Utensils className="h-5 w-5 text-[hsl(var(--carbs))]" />
              <span className="text-lg font-semibold">Plans Meals</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-2 text-sm">
              {links.map((link) => {
                const Icon = link.icon
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive ? "bg-accent text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="border-t p-4">
            <Button variant="outline" className="w-full justify-start hover:bg-red-500" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span className="font-medium">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

