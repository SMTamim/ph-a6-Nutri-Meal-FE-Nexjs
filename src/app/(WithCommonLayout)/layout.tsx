import Footer from "@/src/components/shared/Footer";
import Header from "@/src/components/shared/Header";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <div className="flex flex-col min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default CommonLayout;