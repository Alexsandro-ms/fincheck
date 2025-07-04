import { PlusIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "../../../../components/DropdownMenu";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { BankAccountIcon } from "../../../../components/icons/BankAccountIcon";

export function Fab() {
    return (
        <div className="fixed bottom-4 right-4">
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <button className="text-white w-12 h-12 bg-[#087F5B] rounded-full flex items-center justify-center cursor-pointer">
                        <PlusIcon className="w-6 h-6" />
                    </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content>
                    <DropdownMenu.Item className="gap-2">
                        <CategoryIcon type="income" />
                        Nova Receita
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="gap-2">
                        <CategoryIcon type="expense" />
                        Nova Despesa
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="gap-2">
                        <BankAccountIcon />
                        Nova Conta
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    );
}
