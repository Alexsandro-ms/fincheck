import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
    name: string;
}

export function Input({ placeholder, id, name, ...props }: InputProps) {
    const inputId = id ?? name;
    return (
        <div className="relative">
            <input
                {...props}
                id={inputId}
                className="w-full bg-white rounded-lg border outline-none border-gray-500 px-3 h-[52px] text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all"
                placeholder=" "
            />
            <label
                htmlFor={inputId}
                className="absolute transition-all top-2 left-[13px] text-xs pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5"
            >
                {placeholder}
            </label>
        </div>
    );
}
