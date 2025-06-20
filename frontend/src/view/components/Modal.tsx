import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../app/utils/cn";
import { Cross2Icon } from "@radix-ui/react-icons";

interface ModalProps {
    open: boolean;
    children: React.ReactNode;
    title: string;
    rightAction?: React.ReactNode;
    onClose?(): void;
}

export function Modal({
    children,
    title,
    rightAction,
    open,
    onClose,
}: ModalProps) {
    return (
        <Dialog.Root open={open} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay
                    className={cn(
                        "fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    )}
                />
                <Dialog.Title hidden />

                <Dialog.Content
                    className={cn(
                        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-[51] outline-none shadow-[0_11px_20px_0_rgba(0,0,0,0.1),0_3px_6px_-4px_rgba(0,0,0,0.1)]",
                        "data-[state=open]:animate-contentShow w-full max-w-[400px]"
                    )}
                >
                    <Dialog.Description className="sr-only">
                        {title}
                    </Dialog.Description>
                    <header className="h-12 flex items-center justify-between text-[#343A40]">
                        <button
                            className="w-12 h-12 flex items-center justify-between outline-none cursor-pointer"
                            onClick={onClose}
                        >
                            <Cross2Icon className="w-6 h-6" />
                        </button>
                        <span className="text-lg tracking-[-1px] font-bold">
                            {title}
                        </span>
                        <div className="w-12 h-12 flex items-center justify-center">
                            {rightAction}
                        </div>
                    </header>
                    <div>{children}</div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
