import * as yup from "yup";
import validator from "validator";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Formato invalido")
    .required("Digite o e-mail")
    .test(
      "is-valid",
      (message) => "inválido",
      (value) => (value ? validator.isEmail(value) : new yup.ValidationError("E-mail inválido"))
    ),
  password: yup.string().required("Digite a senha"),
});
