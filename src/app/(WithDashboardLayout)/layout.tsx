import type React from "react"
import { DashboardSidebar } from "@/src/components/dashboard/sidebar"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export default async function DashboardLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }
) {
    // In a real app, we would check the session server-side
    // For this demo, we'll just check if there's a cookie
    const cookieStore = await cookies()
    const hasUser = cookieStore.has("user")

    // if (!hasUser) {
    //   redirect("/login")
    // }

    return (
        <div className="flex flex-col min-h-screen md:flex-row">
            <DashboardSidebar />
            <div className="flex-1 md:ml-64">
                <div className="container p-4 md:p-8">{children}</div>
            </div>
        </div>
    )
}

