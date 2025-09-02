import { useDashboard } from "../../components/DashboardContext/useDashboard";

export function useNewTransactionModalController() {
    const {
        isNewTransactionModal,
        closeNewTransactionModal,
        newTransactionType,
    } = useDashboard();

    return {
        isNewTransactionModal,
        closeNewTransactionModal,
        newTransactionType,
    };
}
