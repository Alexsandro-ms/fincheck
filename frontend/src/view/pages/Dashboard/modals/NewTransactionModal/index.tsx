import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import Select from "../../../../components/Select";
import { useNewTransactionModalController } from "./useNewTransactionModal";

export function NewTransactionModal() {
    const {
        isNewTransactionModal,
        closeNewTransactionModal,
        newTransactionType,
    } = useNewTransactionModalController();

    const isExpense = newTransactionType === "EXPENSE";

    return (
        <Modal
            title={isExpense ? "Nova Despesa" : "Nova Receita"}
            open={isNewTransactionModal}
            onClose={closeNewTransactionModal}
        >
            <form>
                <div>
                    <span className="text-[#868E96] tracking-[-0.5px] text-xl">
                        Valor {isExpense ? "da Despesa" : "da Receita"}
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
                        placeholder={
                            isExpense ? "Nome da Despesa" : "Nome da Receita"
                        }
                    />

                    <Select
                        placeholder="Categoria"
                        options={[
                            { value: "CHECKING", label: "Conta Corrente" },
                            { value: "INVESTMENT", label: "Investimentos" },
                            { value: "CASH", label: "Dinheiro Físico" },
                        ]}
                    />
                    <Select
                        placeholder={isExpense ? "Pagar com" : "Receber em"}
                        options={[
                            { value: "CHECKING", label: "Conta Corrente" },
                            { value: "INVESTMENT", label: "Investimentos" },
                            { value: "CASH", label: "Dinheiro Físico" },
                        ]}
                    />
                </div>
            </form>
        </Modal>
    );
}
