import { createContext, useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/usersService";
import toast from "react-hot-toast";
import LaunchScreen from "../../view/components/LaunchScreen";

interface AuthContextValue {
    signedIn: boolean;
    signin(accessToken: string): void;
    signout(): void;
}

export const AuthContext = createContext<AuthContextValue>(
    {} as AuthContextValue
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [signedIn, setSignedIn] = useState<boolean>(() => {
        const storedAccessToken = localStorage.getItem(
            localStorageKeys.ACCESS_TOKEN
        );
        return !!storedAccessToken;
    });

    const { isError, isFetching, isSuccess, remove } = useQuery({
        queryKey: ["users", "me"],
        queryFn: () => usersService.me(),
        retry: false,
        refetchOnWindowFocus: false,
        enabled: signedIn,
        staleTime: Infinity,
    });

    const signin = useCallback((accessToken: string) => {
        localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

        setSignedIn(true);
    }, []);

    const signout = useCallback(() => {
        localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
        remove();
        setSignedIn(false);
    }, [remove]);

    useEffect(() => {
        if (isError) {
            toast.error("Sua sessão expirou. Faça login novamente.");
            signout();
        }
    }, [isError, signout]);

    return (
        <AuthContext.Provider
            value={{ signedIn: isSuccess && signedIn, signin, signout }}
        >
            {isFetching ? <LaunchScreen /> : children}
        </AuthContext.Provider>
    );
}
