import { useDashboard } from "../../components/DashboardContext/useDashboard";

export function useNewAccountModalController() {
    const { isNewAccountModalOpen, closeNewAccountModal, openNewAccountModal } =
        useDashboard();

    return { isNewAccountModalOpen, closeNewAccountModal, openNewAccountModal };
}
