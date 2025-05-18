import { ExitIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "./DropdownMenu";
import { useAuth } from "../../app/hooks/useAuth";

export default function UserMenu() {
    const { signout } = useAuth();
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <div className="bg-[#E6FCF5] rounded-full w-12 h-12 flex items-center justify-center border-[0.5px] border-[#087f5b]">
                    <span className="text-sm tracking-[-0.5px] font-medium text-[#087f5b]">
                        AL
                    </span>
                </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-32">
                <DropdownMenu.Item
                    className="flex items-center justify-between"
                    onSelect={signout}
                >
                    Sair
                    <ExitIcon className="w-4 h-4" />
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
}
