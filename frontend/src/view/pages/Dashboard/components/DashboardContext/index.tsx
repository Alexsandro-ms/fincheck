import { createContext, useCallback, useState } from "react";

interface DashboardContextValuer {
    areValuesVisible: boolean;
    isNewAccountModalOpen: boolean;
    isNewTransactionModal: boolean;
    newTransactionType: "INCOME" | "EXPENSE" | null;
    toggleValuesVisibility(): void;
    openNewAccountModal: () => void;
    closeNewAccountModal: () => void;
    openNewTransactionModal: (type: "INCOME" | "EXPENSE") => void;
    closeNewTransactionModal: () => void;
}

export const DashboardContext = createContext({} as DashboardContextValuer);

export function DashboardContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [areValuesVisible, setAreValuesVisible] = useState(true);
    const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(true);
    const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);
    const [newTransactionType, setIsNewTransactionType] = useState<
        "INCOME" | "EXPENSE" | null
    >(null);

    const toggleValuesVisibility = useCallback(() => {
        setAreValuesVisible((prevState) => !prevState);
    }, []);

    const openNewAccountModal = useCallback(() => {
        setIsNewAccountModalOpen(true);
    }, []);

    const closeNewAccountModal = useCallback(() => {
        setIsNewAccountModalOpen(false);
    }, []);

    const openNewTransactionModal = useCallback(
        (type: "INCOME" | "EXPENSE") => {
            setIsNewTransactionType(type);
            setIsNewTransactionModal(true);
        },
        []
    );

    const closeNewTransactionModal = useCallback(() => {
        setIsNewTransactionType(null);
        setIsNewTransactionModal(false);
    }, []);

    return (
        <DashboardContext.Provider
            value={{
                areValuesVisible,
                toggleValuesVisibility,
                isNewAccountModalOpen,
                openNewAccountModal,
                closeNewAccountModal,
                isNewTransactionModal,
                openNewTransactionModal,
                closeNewTransactionModal,
                newTransactionType,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
}
