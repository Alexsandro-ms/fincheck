import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

    const handleSubmit = hookFormHandleSubmit((data) => {
        console.log("Formulário enviado com sucesso!", data);
    });

    return { handleSubmit, register, errors };
}
