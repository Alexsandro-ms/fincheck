import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function RegisterPage() {
    return (
        <>
            <header className="flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold text-[#212529] tracking-[-1px]">
                    Crie sua conta
                </h1>
                <p className="space-x-2">
                    <span className="text-[#495057] tracking-[-0.5px]">
                        Já possui uma conta?
                    </span>
                    <Link
                        to="/register"
                        className="text-[#087F5B] tracking-[-0.5px] font-medium"
                    >
                        Fazer Login
                    </Link>
                </p>
            </header>

            <form className="mt-[60px] flex flex-col gap-4">
                <Input name="name" type="name" placeholder="Nome" />
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Password" />
                <Button type="submit" label="Criar" />
            </form>
        </>
    );
}
