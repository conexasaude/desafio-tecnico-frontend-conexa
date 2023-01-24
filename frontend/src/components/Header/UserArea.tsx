import { useAuth } from "../../context/auth";

interface UserAreaProps {
  name: string;
}

export function UserArea({ name }: UserAreaProps) {
  const { logout } = useAuth();

  return (
    <div className="flex gap-2 items-center w-full text-end justify-end">
      <p className="w-full invisible md:visible">Olá, {name}</p>
      <div className="w-20">
        <button className="default w-20" onClick={() => logout()}>
          Sair
        </button>
      </div>
    </div>
  );
}
