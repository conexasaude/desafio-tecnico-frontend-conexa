import { useAuth } from "../../context/auth";

export interface UserAreaProps {
  name: string;
}

export function UserArea({ name }: UserAreaProps) {
  const { logout } = useAuth();

  return (
    <div className="flex gap-2 items-center w-full text-end justify-end space-x-5">
      <p className="w-full hidden md:block">Olá, {name}</p>
      <div className="w-20">
        <button className="default w-20" onClick={() => logout()}>
          Sair
        </button>
      </div>
    </div>
  );
}
