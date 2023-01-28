import { FieldValues, UseFormRegister } from "react-hook-form";

export interface OptionsProps {
  label: string;
  value: unknown;
}

export interface SelectProps {
  registerName?: string;
  formRegister?: UseFormRegister<FieldValues>;
  options: OptionsProps[];
}

export function Select({ options, formRegister, registerName, ...rest }: SelectProps) {
  return (
    <label className="flex flex-col appearance-none rounded-md w-full" {...rest}>
      <select
        className="flex text-center appearance-none border-[1px] border-gray-200 p-4 w-full font-normal text-md"
        placeholder="paciente"
        {...(formRegister ? formRegister(registerName) : [])}
      >
        <option value="" disabled selected>
          Paciente
        </option>

        {options.map((option) => (
          <option className="appearance-none" value={JSON.stringify(option.value)}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
