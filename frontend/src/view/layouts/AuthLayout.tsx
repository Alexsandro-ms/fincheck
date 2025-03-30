import { Outlet } from "react-router-dom";
import illustration from "../../assets/illustration.png";
import { Logo } from "../components/Logo";

export function AuthLayout() {
    return (
        <div className="flex w-full h-full">
            <div className="w-full h-full gap-16 flex items-center justify-center flex-col lg:w-1/2">
                <Logo className="h-6 text-[#ADB5BD]" />
                <div className="w-full max-w-[504px] px-8">
                    <Outlet />
                </div>
            </div>
            <div className="w-1/2 h-full p-8 mx-8 jutify-center items-center relative hidden lg:flex">
                <img
                    src={illustration}
                    alt="ilustração do dashboard"
                    className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-4xl"
                />
                <div className="max-w-[656px] bottom-8 bg-white p-10 absolute rounded-b-4xl ">
                    <Logo className="text-[#087F5B] h-8" />
                    <p className="text-[#495057] font-medium text-xl mt-6">
                        Gerencie suas finanças pessoais de uma forma simples com
                        o fincheck, e o melhor, totalmente de graça!
                    </p>
                </div>
            </div>
        </div>
    );
}
