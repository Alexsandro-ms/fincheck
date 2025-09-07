import { z } from "zod";
import { useDashboard } from "../../components/DashboardContext/useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { bankAccountService } from "../../../../../app/services/bankAccountService";

const schema = z.object({
    initialBalance: z.string().nonempty("Saldo inicial é obrigatório"),
    name: z.string().nonempty("Nome da conta é obrigatório"),
    type: z.enum(["CHECKING", "INVESTMENT", "CASH"]),
    color: z.string().nonempty("Cor é obrigatória"),
});

type FormData = z.infer<typeof schema>;

export function useNewAccountModalController() {
    const { isNewAccountModalOpen, closeNewAccountModal, openNewAccountModal } =
        useDashboard();

    const {
        register,
        handleSubmit: hookFormSubmit,
        formState: { errors },
        control,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {},
    });

    const { isLoading, mutateAsync } = useMutation(bankAccountService.create);

    const handleSubmit = hookFormSubmit(async (data) => {
        try {
            console.log(data.initialBalance);
            // await mutateAsync({
            //     ...data,
            //     initialBalance: 0,
            // });
        } catch {
            //toast.error("Erro ao criar conta");
        }
    });

    return {
        isNewAccountModalOpen,
        closeNewAccountModal,
        openNewAccountModal,
        register,
        errors,
        handleSubmit,
        control,
    };
}
