import { formatCurrency } from "../../../../app/utils/formatCurrency";
import { BankAccountTypeIcon } from "../../../components/icons/BankAccountTypeIcon";

interface AccountCardProps {
    color: string;
    name: string;
    balance: number;
    type: "CASH" | "CHECKING" | "INVESTMENT";
}

export default function AccountCard({
    balance,
    color,
    name,
    type,
}: AccountCardProps) {
    return (
        <div
            className="p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between border-b-4 border-teal-950"
            style={{ borderColor: color }}
        >
            <div>
                <BankAccountTypeIcon type={type} />
                <span className="text-[#343A40] font-medium tracking-[-0.5px] mt-4 block">
                    {name}
                </span>
            </div>
            <div className="">
                <span className="text-[#343A40] font-medium tracking-[-0.5px] block">
                    {formatCurrency(balance)}
                </span>
                <small className="text-[#868E96] text-sm">Saldo atual</small>
            </div>
        </div>
    );
}
