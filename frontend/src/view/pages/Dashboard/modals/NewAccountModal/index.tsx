import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import Select from "../../../../components/Select";
import { useNewAccountModalController } from "./NewAccountModalController";

export function NewAccountModal() {
    const { closeNewAccountModal, isNewAccountModalOpen } =
        useNewAccountModalController();
    return (
        <Modal
            title="Nova Conta"
            open={isNewAccountModalOpen}
            onClose={closeNewAccountModal}
        >
            <form>
                <div>
                    <span className="text-[#868E96] tracking-[-0.5px] text-xl">
                        Saldo
                    </span>
                    <div className="flex items-center gap-2">
                        <span className="text-[#868E96] tracking-[-0.5px] text-lg">
                            R$
                        </span>
                        <InputCurrency />
                    </div>
                </div>
                <div className="mt-10 flex flex-col gap-4">
                    <Input
                        name="name"
                        type="text"
                        placeholder="Nome da Conta"
                    />

                    <Select
                        placeholder="Tipo"
                        options={[
                            { value: "CHECKING", label: "Conta Corrente" },
                            { value: "INVESTMENT", label: "Investimentos" },
                            { value: "CASH", label: "Dinheiro Físico" },
                        ]}
                    />
                    <ColorsDropdownInput />
                </div>
            </form>
        </Modal>
    );
}
