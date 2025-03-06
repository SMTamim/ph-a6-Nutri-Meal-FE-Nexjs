"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/context/auth/auth-provider"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

// Define form validation schema
const formSchema = z.object({
    name: z.string().min(2, "Business name must be at least 2 characters"),
    address: z.string().min(5, "Address must be at least 5 characters"),
})

type FormValues = z.infer<typeof formSchema>

export function ProviderProfileForm() {
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState(false)

    // Initialize React Hook Form
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: user?.name || "",
            address: "",
        },
    })

    const onSubmit = async (values: FormValues) => {
        setIsLoading(true)

        try {
            const response = await fetch(`/api/users/${user}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })

            if (!response.ok) {
                throw new Error("Failed to update profile")
            }

            toast({
                title: "Profile updated",
                description: "Your business information has been updated successfully.",
            })
        } catch (err) {
            toast({
                title: "Error",
                description: "Failed to update profile. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>Update your business details and contact information</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="/placeholder.svg" alt={user?.name || "Business"} />
                                <AvatarFallback>{user?.name?.charAt(0) || "B"}</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <Button variant="outline" size="sm" className="w-fit" type="button">
                                    Change Logo
                                </Button>
                                <p className="text-sm text-muted-foreground">JPG, GIF or PNG. Max size of 3MB.</p>
                            </div>
                        </div>

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Business Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Business Address</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <CardFooter className="px-0">
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Saving..." : "Save Changes"}
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}