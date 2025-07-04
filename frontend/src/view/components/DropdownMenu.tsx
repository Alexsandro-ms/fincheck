import React from "react";
import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "../../app/utils/cn";

export function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
    return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
}
export function DropdownMenuTrigger({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <RdxDropdownMenu.Trigger
            className="outline-none cursor-pointer"
            asChild
        >
            {children}
        </RdxDropdownMenu.Trigger>
    );
}

interface DropdownMenuContentProps {
    children: React.ReactNode;
    className?: string;
}

export function DropdownMenuContent({
    children,
    className,
}: DropdownMenuContentProps) {
    return (
        <RdxDropdownMenu.Portal>
            <RdxDropdownMenu.Content
                className={cn(
                    "rounded-2xl p-2 bg-white space-y-2 shadow-[0_11px_20px_0_rgba(0,0,0,0.1)] z-50",
                    "animate-slide-up-and-fade",
                    "animate-slide-down-and-fade",
                    className
                )}
            >
                {children}
            </RdxDropdownMenu.Content>
        </RdxDropdownMenu.Portal>
    );
}

interface DropdownMenuItemProps {
    children: React.ReactNode;
    className?: string;
    onSelect?(): void;
}

export function DropdownMenuItem({
    children,
    className,
    onSelect,
}: DropdownMenuItemProps) {
    return (
        <RdxDropdownMenu.Item
            className={cn(
                "min-h-[40px] outline-none flex items-center py-2 px-4 text-[#343A40] text-sm data-[highlighted]:bg-gray-50 rounded-2xl transition-colors cursor-pointer",
                className
            )}
            onSelect={onSelect}
        >
            {children}
        </RdxDropdownMenu.Item>
    );
}

export const DropdownMenu = {
    Root: DropdownMenuRoot,
    Trigger: DropdownMenuTrigger,
    Content: DropdownMenuContent,
    Item: DropdownMenuItem,
};
