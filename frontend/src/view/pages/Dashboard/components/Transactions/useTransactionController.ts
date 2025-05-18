import { useDashboard } from "../DashboardContext/useDashboard";

export function useTransactionController() {
    const { areValuesVisible } = useDashboard();

    return {
        areValuesVisible,
        isInitialLodaing: false,
        isLoading: false,
        transactions: [],
    };
}
