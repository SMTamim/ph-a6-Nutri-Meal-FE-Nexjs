"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useAuth } from "@/context/auth/auth-provider"
import { CustomerProfileForm } from "@/components/dashboard/profle/customer-profile-form"
import { ProviderProfileForm } from "@/components/dashboard/profle/provider-profile-form"
import { PasswordForm } from "@/components/dashboard/profle/password-form"

export default function ProfilePage() {
    const { user } = useAuth()
    const isCustomer = user?.role === "customer"

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
                <p className="text-muted-foreground">Manage your account settings and preferences</p>
            </div>

            <Tabs defaultValue="general" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    {isCustomer && <TabsTrigger value="preferences">Preferences</TabsTrigger>}
                    {!isCustomer && <TabsTrigger value="business">Business</TabsTrigger>}
                </TabsList>

                <TabsContent value="general">{isCustomer ? <CustomerProfileForm /> : <ProviderProfileForm />}</TabsContent>

                <TabsContent value="password">
                    <PasswordForm />
                </TabsContent>

                {isCustomer && (
                    <TabsContent value="preferences">
                        <Card>
                            <CardHeader>
                                <CardTitle>Dietary Preferences</CardTitle>
                                <CardDescription>
                                    Set your dietary preferences to help us recommend meals that match your needs
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Diet Type</h3>
                                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                        {[
                                            "Standard",
                                            "Vegetarian",
                                            "Vegan",
                                            "Keto",
                                            "Paleo",
                                            "Mediterranean",
                                            "Low-Carb",
                                            "High-Protein",
                                        ].map((diet) => (
                                            <div key={diet} className="flex items-center space-x-2">
                                                <Switch id={`diet-${diet.toLowerCase()}`} />
                                                <Label htmlFor={`diet-${diet.toLowerCase()}`}>{diet}</Label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Allergies & Restrictions</h3>
                                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                        {["Gluten", "Dairy", "Nuts", "Shellfish", "Eggs", "Soy", "Fish", "Peanuts"].map((allergy) => (
                                            <div key={allergy} className="flex items-center space-x-2">
                                                <Switch id={`allergy-${allergy.toLowerCase()}`} />
                                                <Label htmlFor={`allergy-${allergy.toLowerCase()}`}>{allergy}</Label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Calorie Target</h3>
                                    <div className="grid gap-2">
                                        <Label htmlFor="calorie-target">Daily Calorie Target</Label>
                                        <Input id="calorie-target" type="number" placeholder="2000" className="max-w-xs" />
                                        <p className="text-sm text-muted-foreground">
                                            We'll use this to recommend meals that fit your calorie goals
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Macro Preferences</h3>
                                    <div className="grid gap-4 sm:grid-cols-3">
                                        <div className="grid gap-2">
                                            <Label htmlFor="protein-percentage">Protein (%)</Label>
                                            <Input id="protein-percentage" type="number" placeholder="30" className="max-w-xs" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="carbs-percentage">Carbs (%)</Label>
                                            <Input id="carbs-percentage" type="number" placeholder="45" className="max-w-xs" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="fat-percentage">Fat (%)</Label>
                                            <Input id="fat-percentage" type="number" placeholder="25" className="max-w-xs" />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save Preferences</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                )}

                {!isCustomer && (
                    <TabsContent value="business">
                        <Card>
                            <CardHeader>
                                <CardTitle>Business Information</CardTitle>
                                <CardDescription>Manage your business details and cuisine specialties</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Cuisine Specialties</h3>
                                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                        {[
                                            "Italian",
                                            "Mexican",
                                            "Asian",
                                            "Mediterranean",
                                            "American",
                                            "Indian",
                                            "French",
                                            "Middle Eastern",
                                        ].map((cuisine) => (
                                            <div key={cuisine} className="flex items-center space-x-2">
                                                <Switch id={`cuisine-${cuisine.toLowerCase()}`} />
                                                <Label htmlFor={`cuisine-${cuisine.toLowerCase()}`}>{cuisine}</Label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Business Hours</h3>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                                            <div key={day} className="flex items-center justify-between">
                                                <Label htmlFor={`hours-${day.toLowerCase()}`}>{day}</Label>
                                                <div className="flex items-center gap-2">
                                                    <Input
                                                        id={`hours-${day.toLowerCase()}-open`}
                                                        type="time"
                                                        defaultValue="09:00"
                                                        className="w-24"
                                                    />
                                                    <span>to</span>
                                                    <Input
                                                        id={`hours-${day.toLowerCase()}-close`}
                                                        type="time"
                                                        defaultValue="17:00"
                                                        className="w-24"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Business Description</h3>
                                    <div className="grid gap-2">
                                        <Textarea
                                            id="business-description"
                                            placeholder="Tell customers about your business, specialties, and what makes your meals unique..."
                                            className="min-h-[150px]"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Delivery Options</h3>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="flex items-center space-x-2">
                                            <Switch id="delivery-option-standard" defaultChecked />
                                            <Label htmlFor="delivery-option-standard">Standard Delivery</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Switch id="delivery-option-express" />
                                            <Label htmlFor="delivery-option-express">Express Delivery</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Switch id="delivery-option-pickup" />
                                            <Label htmlFor="delivery-option-pickup">Pickup Available</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Switch id="delivery-option-catering" />
                                            <Label htmlFor="delivery-option-catering">Catering Services</Label>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save Business Information</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                )}
            </Tabs>
        </div>
    )
}

