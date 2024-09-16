import { formatDate } from '../utils/formatDate.js';

export function addItem(itemText: string, displayArea: HTMLElement | null) {
  const newItem = document.createElement("div");
  newItem.className = "task-item";
  newItem.textContent = itemText;

  displayArea?.appendChild(newItem);

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
}
    