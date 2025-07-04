import { Logo } from "../../components/Logo";
import UserMenu from "../../components/UserMenu";
import Accounts from "./components/Accounts";
import { DashboardContextProvider } from "./components/DashboardContext";
import { Fab } from "./components/Fab";
import Transactions from "./components/Transactions";

export function DashboardPage() {
    return (
        <DashboardContextProvider>
            <div className="w-full h-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4 ">
                <header className="h-12 items-center justify-between flex">
                    <Logo className="h-6 text-[#087F5B]" />
                    <UserMenu />
                </header>
                <main className="flex-1 flex flex-col md:flex-row gap-4 max-h-full">
                    <div className="w-full md:w-1/2">
                        <Accounts />
                    </div>
                    <div className="w-full md:w-1/2">
                        <Transactions />
                    </div>
                </main>
                <Fab />
            </div>
        </DashboardContextProvider>
    );
}
