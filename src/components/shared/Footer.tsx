import Link from "next/link";

const Footer = () => {
    return (

        <footer className="py-6 border-t md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-sm leading-loose text-center text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} NutriMeal. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <Link href="/privacy" className="text-sm underline text-muted-foreground underline-offset-4">
                        Privacy
                    </Link>
                    <Link href="/contact" className="text-sm underline text-muted-foreground underline-offset-4">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;