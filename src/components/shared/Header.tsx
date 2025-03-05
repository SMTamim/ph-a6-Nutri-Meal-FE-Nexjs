import { Utensils } from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";

const Header = () => {
    return (
        <header className="border-b">
            <div className="container flex items-center justify-between h-16 py-4">
                <div className="flex items-center gap-2">
                    <Utensils className="h-6 w-6 text-[hsl(var(--carbs))]" />
                    <span className="text-xl font-bold">NutriMeal</span>
                </div>
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
                    <Link href="/pricing" className="text-sm font-medium">
                        Pricing
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="outline">Log In</Button>
                    </Link>
                    <Link href="/signup">
                        <Button>Sign Up</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;