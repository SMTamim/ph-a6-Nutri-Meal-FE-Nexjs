import { AuthProvider } from "../context/auth/auth-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default Providers;