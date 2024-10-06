import { formatDate } from "../../../utils/formatDate";
import { deleteTodoItem, TodoItem } from "../TodoList";
import "./TaskItem.css";

const editIcon = `<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 485.219 485.22" style="enable-background:new 0 0 485.219 485.22;" xml:space="preserve"><g> <path d="M467.476,146.438l-21.445,21.455L317.35,39.23l21.445-21.457c23.689-23.692,62.104-23.692,85.795,0l42.886,42.897 C491.133,84.349,491.133,122.748,467.476,146.438z M167.233,403.748c-5.922,5.922-5.922,15.513,0,21.436 c5.925,5.955,15.521,5.955,21.443,0L424.59,189.335l-21.469-21.457L167.233,403.748z M60,296.54c-5.925,5.927-5.925,15.514,0,21.44 c5.922,5.923,15.518,5.923,21.443,0L317.35,82.113L295.914,60.67L60,296.54z M338.767,103.54L102.881,339.421 c-11.845,11.822-11.815,31.041,0,42.886c11.85,11.846,31.038,11.901,42.914-0.032l235.886-235.837L338.767,103.54z M145.734,446.572c-7.253-7.262-10.749-16.465-12.05-25.948c-3.083,0.476-6.188,0.919-9.36,0.919 c-16.202,0-31.419-6.333-42.881-17.795c-11.462-11.491-17.77-26.687-17.77-42.887c0-2.954,0.443-5.833,0.859-8.703 c-9.803-1.335-18.864-5.629-25.972-12.737c-0.682-0.677-0.917-1.596-1.538-2.338L0,485.216l147.748-36.986 C147.097,447.637,146.36,447.193,145.734,446.572z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;
const deleteIcon = `<svg width="24" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 96 96" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="m24,78c0,4.968 4.029,9 9,9h30c4.968,0 9-4.032 9-9l6-48h-60l6,48zm33-39h6v39h-6v-39zm-12,0h6v39h-6v-39zm-12,0h6v39h-6v-39zm43.5-21h-19.5c0,0-1.344-6-3-6h-12c-1.659,0-3,6-3,6h-19.5c-2.487,0-4.5,2.013-4.5,4.5s0,4.5 0,4.5h66c0,0 0-2.013 0-4.5s-2.016-4.5-4.5-4.5z"/> </svg>`;

export function createTodoListItem({ title: itemText, id }: TodoItem) {
  const newItem = document.createElement("div");
  newItem.classList.add("task-item");

  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("task-item-title-wrapper");

  const title = document.createElement("div");
  title.classList.add("task-item-title");
  title.textContent = itemText;

  const dateItem = document.createElement("div");
  dateItem.className = "task-item-date";
  const currentDate = new Date();
  dateItem.textContent = formatDate(currentDate);

  titleWrapper.appendChild(title);
  titleWrapper.appendChild(dateItem);

  newItem.appendChild(titleWrapper);

  const actionsWrapper = document.createElement("div");
  actionsWrapper.classList.add("task-item-actions-wrapper");

  const deleteButton = document.createElement("div");
  deleteButton.innerHTML = deleteIcon;
  deleteButton.className = "task-item-actions-wrapper-item";

  const editButton = document.createElement("div");
  editButton.innerHTML = editIcon;
  editButton.className = "task-item-actions-wrapper-item";

  actionsWrapper.appendChild(editButton);
  actionsWrapper.appendChild(deleteButton);

  newItem.appendChild(actionsWrapper);

  deleteButton.addEventListener("click", function () {
    deleteTodoItem(id);
  });

  return newItem;
}
