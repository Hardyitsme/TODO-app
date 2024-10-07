import { TodoItem } from "./../TodoList/TodoList";
import { editTodoListItem } from "../TodoList/TodoList";

export function editItemForm(todoItem: TodoItem) {
  const itemForm = document.createElement("div");

  const input = document.createElement("input");
  input.value = todoItem.title;
  input.classList.add("input");
  itemForm.appendChild(input);

  const inputDescription = document.createElement("input");
  inputDescription.value = todoItem.description ?? "";
  inputDescription.classList.add("input_Description");
  itemForm.appendChild(inputDescription);

  const editButton = document.createElement("button");
  editButton.classList.add("Edit_Button");
  editButton.textContent = "Изменить задачу";
  itemForm.appendChild(editButton);

  editButton.addEventListener("click", function () {
    editTodoListItem({
      ...todoItem,
      description: inputDescription.value,
      title: input.value,
    });
  });

  return itemForm;
}
