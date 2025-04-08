import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

    const handleSubmit = hookFormHandleSubmit((data) => {
        // Aqui você pode adicionar a lógica para lidar com o envio do formulário
        console.log("Formulário enviado com sucesso!", data);
    });

    return { handleSubmit, register, errors };
}
