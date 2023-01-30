import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AnyObjectSchema } from "yup";
import Lazy from "yup/lib/Lazy";

export function useFormResolver(schema: AnyObjectSchema | Lazy<any, unknown>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return { register, handleSubmit, errors, control, setValue };
}
