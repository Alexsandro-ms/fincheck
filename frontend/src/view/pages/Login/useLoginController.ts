import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { authService } from "../../../app/services/authService";
import { SigninParams } from "../../../app/services/authService/signin";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../../app/hooks/useAuth";

const schema = z.object({
    email: z
        .string()
        .nonempty("O e-mail é obrigatório")
        .email("O e-mail é inválido"),
    password: z
        .string()
        .nonempty("A senha é obrigatória")
        .min(8, "A senha deve ter no mínimo 8 caracteres"),
});

type FormData = z.infer<typeof schema>; // Define o tipo de dados do formulário com base no esquema Zod

export function useLoginController() {
    const {
        handleSubmit: hookFormHandleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const { isLoading, mutateAsync } = useMutation({
        mutationFn: async (data: SigninParams) => {
            return authService.signin(data);
        },
    });

    const { signin } = useAuth();

    const handleSubmit = hookFormHandleSubmit(async (data) => {
        try {
            const { accessToken } = await mutateAsync(data);
            signin(accessToken);
        } catch {
            toast.error("Credenciais inválidas");
        }
    });

    return { handleSubmit, register, errors, isLoading };
}
