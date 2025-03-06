"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/context/auth/auth-provider"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { getMe, updateMyData } from "@/services/AuthServices"
import { IUserData } from "@/types/apiResponse.types"
import { toast } from "sonner"

// Define form schema with Zod
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    address: z.string().min(5, { message: "Please enter a valid address" }),
})

type FormValues = z.infer<typeof formSchema>

export function CustomerProfileForm() {
    const { user: authUser } = useAuth()
    const [user, setUser] = useState<IUserData | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: authUser?.name || "",
            address: "",
        },
    })

    const getMyself = async () => {
        const user = await getMe();
        setUser(user);
        form.reset({
            name: user?.name || "",
            address: user?.address || "",
        });
    }

    useEffect(() => {
        getMyself();
    }, [isLoading])


    const onSubmit = async (data: FormValues) => {
        const toastId = toast.loading("Updating profile...");
        try {
            const response = await updateMyData(data);
            if (!response) {
                toast.error("Failed to update profile. Please try again.", { id: toastId })
            }
            if (response?._id) {
                form.reset({
                    name: response?.name || "",
                    address: response?.address || "",
                })
            }
        } catch (err) {
            toast.error("Failed to update profile. Please try again.", { id: toastId })
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details and delivery address</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="/placeholder.svg" alt={authUser?.name || "User"} />
                                <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <Button variant="outline" size="sm" className="w-fit" type="button">
                                    Change Avatar
                                </Button>
                                <p className="text-sm text-muted-foreground">JPG, GIF or PNG. Max size of 3MB.</p>
                            </div>
                        </div>

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
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
                                    <FormLabel>Address</FormLabel>
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