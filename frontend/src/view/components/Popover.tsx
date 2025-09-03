import * as RdxPopover from "@radix-ui/react-popover";
import React from "react";
import { cn } from "../../app/utils/cn";

export function PopoverRoot({ children }: { children: React.ReactNode }) {
    return <RdxPopover.Root>{children}</RdxPopover.Root>;
}
export function PopoverTrigger({ children }: { children: React.ReactNode }) {
    return (
        <RdxPopover.Trigger className="cursor-pointer" asChild>
            {children}
        </RdxPopover.Trigger>
    );
}

interface PopoverContentProps {
    children: React.ReactNode;
    className?: string;
}

export function PopoverContent({ children, className }: PopoverContentProps) {
    return (
        <RdxPopover.Portal>
            <RdxPopover.Content
                className={cn(
                    "rounded-2xl p-2 bg-white space-y-2 shadow-[0_11px_20px_0_rgba(0,0,0,0.1)] z-[99] p-4",
                    "animate-slide-up-and-fade",
                    "animate-slide-down-and-fade",
                    className
                )}
            >
                {children}
            </RdxPopover.Content>
        </RdxPopover.Portal>
    );
}

export const Popover = {
    Root: PopoverRoot,
    Trigger: PopoverTrigger,
    Content: PopoverContent,
};
