"use client"

import { getCurrentUser } from "@/services/AuthServices"
import { IDecodedUser } from "@/types"
import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"


type AuthContextType = {
  user: IDecodedUser | null
  logout: () => void
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IDecodedUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsLoading(false);
  }

  useEffect(() => {
    handleUser();
  }, [isLoading])



  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, logout, isLoading, setIsLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

