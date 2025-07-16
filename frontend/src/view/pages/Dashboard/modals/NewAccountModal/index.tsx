import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { useNewAccountModalController } from "./NewAccountModalController";

export function NewAccountModal() {
    const { closeNewAccountModal, isNewAccountModalOpen } =
        useNewAccountModalController();
    return (
        <Modal
            title="Nova Conta"
            open={isNewAccountModalOpen ?? false}
            onClose={closeNewAccountModal}
        >
            <InputCurrency />
        </Modal>
    );
}
