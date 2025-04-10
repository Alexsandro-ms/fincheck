import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<"button"> {
    children: string;
    isLoading?: boolean;
}

export function Button({
    className,
    isLoading,
    disabled,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(
                "bg-[#087F5B] flex items-center justify-center hover:bg-[#099268] disabled:bg-gray-100 px-6 h-12 rounded-2xl text-white font-medium disabled:text-gray-400 disabled:cursor-not-allowed transition-all",
                className
            )}
            disabled={disabled || isLoading}
        >
            {!isLoading && children}
            {isLoading && <Spinner className="w-6 h-6" />}
        </button>
    );
}
