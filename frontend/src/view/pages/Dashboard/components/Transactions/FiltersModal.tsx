import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../components/Modal";
import { Button } from "../../../../components/Button";
import { useFiltersModal } from "./useFiltersModal";
import { cn } from "../../../../../app/utils/cn";

interface FiltersModalProps {
    open: boolean;
    onClose(): void;
}

const mockedAccount = [
    {
        id: "1",
        name: "Nubank",
    },
    {
        id: "2",
        name: "XP Investimentos",
    },
    {
        id: "3",
        name: "Dinheiro",
    },
];

export function FiltersModal({ open, onClose }: FiltersModalProps) {
    const {
        handleSelectBankAccount,
        selectedBankAccountId,
        selectedYear,
        handleChangeYear,
    } = useFiltersModal();
    return (
        <Modal open={open} onClose={onClose} title="Filtros">
            <div>
                <span className="text-lg tracking-[-1px] font-bold text-[#343A40]">
                    Conta
                </span>
                <div className="space-y-2">
                    {mockedAccount.map((account) => (
                        <button
                            onClick={() => handleSelectBankAccount(account.id)}
                            key={account.id}
                            className={cn(
                                "hover:bg-gray-50 p-2 rounded-2xl w-full text-left text-[#343A40] cursor-pointer transition-colors",
                                account.id === selectedBankAccountId &&
                                    "!bg-[#E9ECEF]"
                            )}
                        >
                            {account.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-10 text-[#343A40] ">
                <span className="text-lg tracking-[-1px] font-bold">Ano</span>
                <div className="mt-2 w-52 flex items-center justify-between">
                    <button
                        className="w-12 h-12 flex items-center justify-center cursor-pointer"
                        onClick={() => handleChangeYear(-1)}
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <div className="flex-1 text-center">
                        <span className="font-medium text-sm tracking-[-0.5px]">
                            {selectedYear}
                        </span>
                    </div>
                    <button
                        className="w-12 h-12 flex items-center justify-center cursor-pointer"
                        onClick={() => handleChangeYear(1)}
                    >
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <Button className="w-full mt-10 cursor-pointer">
                Aplicar filtros
            </Button>
        </Modal>
    );
}
