import { formatDate } from "../../utils/formatDate";
import "./TaskItem.css";

export function createTodoListItem(itemText: string) {
  const newItem = document.createElement("div");
  newItem.className = "task-item";
  newItem.textContent = itemText;

  const dateItem = document.createElement("div");
  dateItem.className = "date-item";

  const currentDate = new Date();
  dateItem.textContent = formatDate(currentDate);

  newItem.appendChild(dateItem);

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-item";
  deleteButton.textContent = "Delete";

  newItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    newItem.remove();
  });

  return newItem;
}
