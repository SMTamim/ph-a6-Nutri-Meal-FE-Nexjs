"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  name: string
  email: string
  role: "customer" | "provider"
} | null

type AuthContextType = {
  user: User
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string, role: "customer" | "provider") => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // This would be an API call in a real app
      // For demo purposes, we'll simulate a successful login
      const mockUser = {
        id: "user-1",
        name: email.split("@")[0],
        email,
        role: email.includes("provider") ? "provider" : ("customer" as "customer" | "provider"),
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (name: string, email: string, password: string, role: "customer" | "provider") => {
    setIsLoading(true)
    try {
      // This would be an API call in a real app
      // For demo purposes, we'll simulate a successful signup
      const mockUser = {
        id: "user-" + Math.floor(Math.random() * 1000),
        name,
        email,
        role,
      }

      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
    } catch (error) {
      console.error("Signup failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

