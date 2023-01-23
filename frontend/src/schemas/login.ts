import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required("Digite o e-mail"),
  password: yup
    .string()
    .min(8, "No mínimo 8 caracteres")
    .max(32, "No máximo 32 caracteres")
    .required("Digite a senha"),
});
