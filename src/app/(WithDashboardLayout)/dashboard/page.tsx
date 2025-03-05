"use client"

import { useAuth } from "@/src/components/auth/auth-provider"
import { CustomerDashboard } from "@/src/components/dashboard/customer-dashboard"
import { ProviderDashboard } from "@/src/components/dashboard/provider-dashboard"

export default function DashboardPage() {
  const { user } = useAuth()
  const isCustomer = user?.role === "customer"

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Plan Your Week</h1>
          <p className="text-sm text-muted-foreground">December 12, 2018 - December 19, 2018</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm font-medium">
            <span className="text-muted-foreground">Goals</span>
            <span className="ml-2 text-accent">This week</span>
          </div>
          <div className="text-sm font-medium">
            <span className="text-muted-foreground">Calories</span>
            <span className="ml-2">14k</span>
          </div>
          <div className="text-sm font-medium">
            <span className="text-muted-foreground">Carbs</span>
            <span className="ml-2 text-[hsl(var(--carbs))]">1540</span>
          </div>
          <div className="text-sm font-medium">
            <span className="text-muted-foreground">Fats</span>
            <span className="ml-2 text-[hsl(var(--fat))]">600</span>
          </div>
          <div className="text-sm font-medium">
            <span className="text-muted-foreground">Protein</span>
            <span className="ml-2 text-[hsl(var(--protein))]">1250</span>
          </div>
        </div>
      </div>

      {isCustomer ? <CustomerDashboard /> : <ProviderDashboard />}
    </div>
  )
}

