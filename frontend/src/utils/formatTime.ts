export function formatTime(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
