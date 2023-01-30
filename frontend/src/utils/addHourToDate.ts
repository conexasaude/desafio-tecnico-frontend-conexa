export function addHourToDate(date: Date, hour: string) {
  const arrHour = hour.split(":").map((pos) => Number(pos));
  const timestamp = new Date(date).setHours(arrHour[0], arrHour[1]);
  return new Date(timestamp);
}
