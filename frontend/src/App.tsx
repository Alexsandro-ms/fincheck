import { Toaster } from "react-hot-toast";
import { Router } from "./router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./app/contexts/authContext";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
});

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Router />
                <Toaster />
            </AuthProvider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}
