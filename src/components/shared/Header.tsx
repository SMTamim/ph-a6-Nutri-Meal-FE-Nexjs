"use client";

import { LogOut, Utensils } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth/auth-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logoutUser } from "@/services/AuthServices";


const Header = () => {

    const { user, logout } = useAuth();
    const handleLogout = async () => {
        await logoutUser();
        logout();
    }

    return (
        <header className="border-b">
            <div className="container flex items-center justify-between h-16 py-4">
                <Link href={'/'}>
                    <div className="flex items-center gap-2">
                        <Utensils className="h-6 w-6 text-[hsl(var(--carbs))]" />
                        <span className="text-xl font-bold">NutriMeal</span>
                    </div>
                </Link>
                <nav className="items-center hidden gap-6 md:flex">
                    <Link href="/" className="text-sm font-medium">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-medium">
                        How It Works
                    </Link>
                    <Link href="/meals" className="text-sm font-medium">
                        Meal Plans
                    </Link>
                </nav>
                {!user ? (
                    <div className="flex items-center gap-4">
                        <Link href="/login">
                            <Button variant="outline">Log In</Button>
                        </Link>
                        <Link href="/signup">
                            <Button>Sign Up</Button>
                        </Link>
                    </div>
                ) : (
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Manage Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={'/dashboard'}>Dashboard</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer hover:bg-red-500">
                                <LogOut />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}



            </div>
        </header>
    );
};

export default Header;