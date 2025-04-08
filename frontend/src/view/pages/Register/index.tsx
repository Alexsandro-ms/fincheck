import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useRegisterController } from "./useRegisterController";

export function RegisterPage() {
    const { errors, handleSubmit, register } = useRegisterController();
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
                        to="/login"
                        className="text-[#087F5B] tracking-[-0.5px] font-medium"
                    >
                        Fazer Login
                    </Link>
                </p>
            </header>

            <form
                onSubmit={handleSubmit}
                className="mt-[60px] flex flex-col gap-4"
            >
                <Input
                    placeholder="Nome"
                    error={errors.name?.message}
                    {...register("name")}
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    error={errors.email?.message}
                    {...register("email")}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    error={errors.password?.message}
                    {...register("password")}
                />
                <Button type="submit" label="Criar conta" className="mt-2" />
            </form>
        </>
    );
}
