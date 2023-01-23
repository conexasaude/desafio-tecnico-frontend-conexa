interface UserAreaProps {
  name: string;
}

export function UserArea({ name }: UserAreaProps) {
  return (
    <div className="flex gap-2 items-center">
      <p>Olá, {name}</p>
      <button className="default w-20">Sair</button>
    </div>
  );
}
