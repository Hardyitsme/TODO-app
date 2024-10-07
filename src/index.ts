import "./styles.css";
import { openModal } from "./components/Modal/Modal";
import { createItemForm } from "./components/CreateItemForm/CreateItemForm";

const addButton: HTMLButtonElement | null =
  document.querySelector(".addButtonItem");

addButton?.addEventListener("click", function () {
  const createItemFormHTML = createItemForm();

  openModal({ title: "Создание задачи", children: createItemFormHTML });

  addButton.blur();
});
