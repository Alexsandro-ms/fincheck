import { Logo } from "./Logo";
import { Spinner } from "./Spinner";

export default function LaunchScreen() {
    return (
        <div className="bg-[#087F5B] fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="items-center flex flex-col gap-4">
                <Logo className="h-10 text-white animate-bounce" />
                <Spinner />
            </div>
        </div>
    );
}
