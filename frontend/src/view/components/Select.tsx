import {
    ChevronDownIcon,
    ChevronUpIcon,
    CrossCircledIcon,
} from "@radix-ui/react-icons";
import * as RdxSelect from "@radix-ui/react-select";
import { useState } from "react";
import { cn } from "../../app/utils/cn";

interface SelectProps {
    className?: string;
    error?: string;
    placeholder?: string;
    value?: string;
    onChange?(value: string): void;
    options: {
        value: string;
        label: string;
    }[];
}

export default function Select({
    className,
    placeholder,
    error,
    options,
    value,
    onChange,
}: SelectProps) {
    const [selectValue, setSelectValue] = useState(value);

    function handleSelect(value: string) {
        setSelectValue(value);
        onChange?.(value);
    }

    return (
        <div>
            <div className="relative h-[52px]">
                <label
                    className={cn(
                        "absolute z-10 top-1/2 left-3 pointer-events-none text-gray-700 -translate-y-1/2",
                        selectValue &&
                            "text-xs left-[13px] top-2 transition-all translate-y-0"
                    )}
                >
                    {placeholder}
                </label>
                <RdxSelect.Root value={value} onValueChange={handleSelect}>
                    <RdxSelect.Trigger
                        className={cn(
                            "w-full bg-white rounded-lg border outline-none border-gray-500 px-3 h-[52px] text-gray-800 focus:border-gray-800 transition-all text-left relative pt-4",
                            error && "!border-red-700",
                            className
                        )}
                    >
                        <RdxSelect.Value />
                        <RdxSelect.Icon className="absolute right-3 top-1/2 -translate-y-1/2">
                            <ChevronDownIcon className="w-6 h-6 text-[#343A40]" />
                        </RdxSelect.Icon>
                    </RdxSelect.Trigger>
                    <RdxSelect.Portal>
                        <RdxSelect.Content className="z-[99] overflow-hidden rounded-2xl bg-white border border-[#ADB5BD] shadow-[0px_11px_20px_rgba(0,0,0,0.1)]">
                            <RdxSelect.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800">
                                <ChevronUpIcon />
                            </RdxSelect.ScrollUpButton>

                            <RdxSelect.Viewport>
                                {options.map((option) => (
                                    <RdxSelect.Item
                                        key={option.value}
                                        value={option.value}
                                        className="p-2 text-gray-800 text-sm data-[state=checked]:font-bold outline-none data-highlighted:bg-gray-50 rounded-lg transition-colors"
                                    >
                                        <RdxSelect.ItemText>
                                            {option.label}
                                        </RdxSelect.ItemText>
                                    </RdxSelect.Item>
                                ))}
                            </RdxSelect.Viewport>

                            <RdxSelect.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800">
                                <ChevronDownIcon />
                            </RdxSelect.ScrollDownButton>
                        </RdxSelect.Content>
                    </RdxSelect.Portal>
                </RdxSelect.Root>
            </div>

            {error && (
                <div className="flex gap-2 items-center mt-2 text-red-900">
                    <CrossCircledIcon />
                    <span className="">{error}</span>
                </div>
            )}
        </div>
    );
}
