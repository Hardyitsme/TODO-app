import "./Notification.css";

export function Notification(text: string) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent = text;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}
