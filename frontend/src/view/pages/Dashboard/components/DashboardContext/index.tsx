import { createContext, useCallback, useState } from "react";

interface DashboardContextValuer {
    areValuesVisible: boolean;
    toggleValuesVisibility(): void;
}

export const DashboardContext = createContext({} as DashboardContextValuer);

export function DashboardContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [areValuesVisible, setAreValuesVisible] = useState(true);
    const toggleValuesVisibility = useCallback(() => {
        setAreValuesVisible((prevState) => !prevState);
    }, []);
    return (
        <DashboardContext.Provider
            value={{ areValuesVisible, toggleValuesVisibility }}
        >
            {children}
        </DashboardContext.Provider>
    );
}
