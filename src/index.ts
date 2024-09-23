import "./styles.css";


import { openModal } from "./components/Modal/Modal";
import { CreateItemForm } from "./components/CreateItemForm/CreateItemForm";
import { createTodoListItem } from "./components/TaskItem/TaskItem";

const displayArea = document.getElementById("displayArea");

function getInputValue() {
  const inputField = document.getElementById("inputField") as HTMLInputElement;
  const inputValue = inputField.value.trim();

  return inputValue;
}

function clearInput() {
  const inputField = document.getElementById("inputField") as HTMLInputElement;

  inputField.value = "";
}

const addButton = document.querySelector("button");

addButton?.addEventListener("click", function () {
  const newItem = CreateItemForm();

  openModal({ title: "Создание задачи", children: newItem });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputValue = getInputValue();

    if (inputValue.length) {
      const newItem = createTodoListItem(inputValue);
      displayArea?.appendChild(newItem);
      clearInput();
    }
  }
});
