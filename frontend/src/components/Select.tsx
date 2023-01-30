import { FieldValues, UseFormRegister } from "react-hook-form";

export interface OptionsProps {
  label: string;
  value: unknown;
}

export interface SelectProps {
  options: OptionsProps[];
  onChange: () => void;
}

export function Select({ options, onChange, ...rest }: SelectProps) {
  return (
    <label className="flex flex-col appearance-none rounded-md w-full" {...rest}>
      <select
        className="flex text-center border-[1px] bg-primary p-4 w-full font-normal text-md text-white"
        placeholder="paciente"
        onChange={onChange}
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
