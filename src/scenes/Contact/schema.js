import { z } from "zod";

export const verifyForm = z.object({
    name: z.string().min(2, "Insira um nome"),
    email: z.string().email("Insira um email válido"),
    message: z
        .string()
        .min(10, "Insira pelo menos 10 caracteres")
        .max(2000, "Limite de 2000 caracteres"),
});
