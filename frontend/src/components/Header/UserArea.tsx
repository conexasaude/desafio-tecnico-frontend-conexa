interface UserAreaProps {
  name: string;
}

export function UserArea({ name }: UserAreaProps) {
  return (
    <div className="flex gap-2 items-center w-full text-end justify-end">
      <p className="w-full invisible md:visible">Olá, {name}</p>
      <div className="w-20">
        <button className="default">Sair</button>
      </div>
    </div>
  );
}
