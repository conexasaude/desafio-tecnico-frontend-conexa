import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required("Digite o e-mail"),
  password: yup.string().required("Digite a senha"),
});
