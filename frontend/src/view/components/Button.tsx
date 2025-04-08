import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
    label: string;
}

export function Button({ className, label, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(
                "bg-[#087F5B] hover:bg-[#099268] disabled:bg-gray-100 px-6 h-12 rounded-2xl text-white font-medium disabled:text-gray-400 disabled:cursor-not-allowed transition-all",
                className
            )}
        >
            {label}
        </button>
    );
}
