import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
    name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ placeholder, id, name, ...props }, ref) => {
        const inputId = id ?? name;
        return (
            <div className="relative">
                <input
                    ref={ref}
                    name={name}
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
);
