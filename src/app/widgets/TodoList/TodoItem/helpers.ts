export function formatDate(date: Date) {
  const minut = date.getMinutes().toString().padStart(2, "0");
  const hour = date.getHours().toString();
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${hour}:${minut}, ${day}/${month}/${year}`;
}
