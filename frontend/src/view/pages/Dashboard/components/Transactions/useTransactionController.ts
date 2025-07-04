import { useState } from "react";
import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionController() {
    const { areValuesVisible } = useDashboard();

    const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(true);

    function handleOpenFiltersModal() {
        setIsFiltersModalOpen(true);
    }

    function handleCloseFiltersModal() {
        setIsFiltersModalOpen(false);
    }

    return {
        areValuesVisible,
        isInitialLodaing: false,
        isLoading: false,
        transactions: [],
        handleOpenFiltersModal,
        handleCloseFiltersModal,
        isFiltersModalOpen,
    };
}
