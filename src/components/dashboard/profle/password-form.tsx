"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from 'lucide-react'
import { useAuth } from "@/context/auth/auth-provider"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { updatePassword } from "@/services/AuthServices"
import { toast } from "sonner"

// Define the password validation schema
const passwordSchema = z.object({
    currentPassword: z.string().min(1, "Current password is required"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
})

type FormValues = z.infer<typeof passwordSchema>

export function PasswordForm() {
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [error, setError] = useState("")

    // Initialize react-hook-form
    const form = useForm<FormValues>({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            password: "",
            currentPassword: "",
        },
    })

    const onSubmit = async (data: FormValues) => {
        const toastId = toast.loading("Updating password...")
        try {
            const response = await updatePassword(data)
            if (!response?.success) {
                toast.error(response?.message, { id: toastId })
            } else {
                toast.success(response?.message, { id: toastId })
                form.reset()
            }
        } catch (err) {
            toast.error("Failed to update password. Please try again.", { id: toastId })
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>
                    Update your password to keep your account secure
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="currentPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Current Password</FormLabel>
                                    <div className="relative">
                                        <FormControl>
                                            <Input
                                                type={showCurrentPassword ? "text" : "password"}
                                                {...field}
                                            />
                                        </FormControl>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                        >
                                            {showCurrentPassword ? (
                                                <EyeOff className="h-4 w-4 text-muted-foreground" />
                                            ) : (
                                                <Eye className="h-4 w-4 text-muted-foreground" />
                                            )}
                                            <span className="sr-only">
                                                {showCurrentPassword ? "Hide password" : "Show password"}
                                            </span>
                                        </Button>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>New Password</FormLabel>
                                    <div className="relative">
                                        <FormControl>
                                            <Input
                                                type={showNewPassword ? "text" : "password"}
                                                {...field}
                                            />
                                        </FormControl>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                        >
                                            {showNewPassword ? (
                                                <EyeOff className="h-4 w-4 text-muted-foreground" />
                                            ) : (
                                                <Eye className="h-4 w-4 text-muted-foreground" />
                                            )}
                                            <span className="sr-only">
                                                {showNewPassword ? "Hide password" : "Show password"}
                                            </span>
                                        </Button>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Password must be at least 8 characters long
                                    </p>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {error && <p className="text-sm text-destructive">{error}</p>}
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                <Button
                    type="submit"
                    disabled={isLoading}
                    onClick={form.handleSubmit(onSubmit)}
                >
                    {isLoading ? "Updating..." : "Update Password"}
                </Button>
            </CardFooter>
        </Card>
    )
}