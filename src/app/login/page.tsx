"use client"

import type React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAuth } from "@/context/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Utensils } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useState } from "react"
import { loginValidationSchema } from "./loginValidationSchema"
import { toast } from "sonner"
import { loginUser } from "@/services/AuthServices"

// Form validation schema

type FormValues = z.infer<typeof loginValidationSchema>

export default function LoginPage() {
  const router = useRouter()
  const [authError, setAuthError] = useState("")
  
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirectPath')

  // Initialize react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: "tamimmahmud0@gmail.com",
      password: "securepassword",
    },
  })

  const [isSubmitting, setIsSubmitting] = useState(form.formState.isSubmitting);
  const { user, setIsLoading } = useAuth();
  if (user) router.push("/dashboard");

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    const toastId = toast.loading("Logging in...")

    try {
      const res = await loginUser(data);
      if (res?.success) {
        setIsLoading(true);
        toast.success("Successfully logged in.", { id: toastId })
        router.push(redirect || "/dashboard");
      }
    } catch (err) {
      setAuthError("Invalid email or password")
      toast.error("Failed logged in.", { id: toastId })
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center space-y-20">
      <Link href="/" className=" flex items-center text-5xl">
        <Utensils className="h-12 w-12 text-primary" />
        <span className="ml-2 font-bold">NutriMeal</span>
      </Link>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Enter your email to sign in to your account</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="name@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link href="/forgot-password" className="text-sm text-primary underline-offset-4 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {authError && <p className="text-sm text-destructive">{authError}</p>}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </Form>

        <p className="px-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline underline-offset-4 hover:text-primary">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}