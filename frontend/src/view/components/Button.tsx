import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
    label: string;
}

export function Button({ label, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className="bg-[#087F5B] hover:bg-[#099268] disabled:bg-gray-100 px-6 h-12 rounded-2xl text-white font-medium disabled:text-gray-400 disabled:cursor-not-allowed transition-all"
        >
            {label}
        </button>
    );
}
