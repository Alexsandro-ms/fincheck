import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";

import { authService } from "../../../app/services/authService";
import { SignupParams } from "../../../app/services/authService/signup";
import toast from "react-hot-toast";
import { useAuth } from "../../../app/hooks/useAuth";

const schema = z.object({
    name: z.string().nonempty("O nome é obrigatório"),
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

export function useRegisterController() {
    const {
        handleSubmit: hookFormHandleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const { isLoading, mutateAsync } = useMutation({
        mutationFn: async (data: SignupParams) => {
            return authService.signup(data);
        },
    });

    const { signin } = useAuth();

    const handleSubmit = hookFormHandleSubmit(async (data) => {
        try {
            const { accessToken } = await mutateAsync(data);
            signin(accessToken);
        } catch {
            toast.error("Ocorreu um erro ao tentar criar sua conta");
        }
    });

    return { handleSubmit, register, errors, isLoading };
}
