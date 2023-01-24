export function EmpityAppointments() {
  return (
    <div className="space-y-10 flex flex-col w-full max-w-lg">
      <img src="/certification.svg" alt="" className="self-end" />
      <p className="max-w-[200px] text-center font-medium text-gray-500 self-center">
        Não há nenhuma consulta agendada
      </p>
      <img src="/plant.svg" className="self-start" />
    </div>
  );
}
