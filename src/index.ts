import "./styles.css";
import { openModal } from "./components/Modal/Modal";
import { CreateItemForm } from "./components/CreateItemForm/CreateItemForm";

const addButton: HTMLButtonElement | null = document.querySelector(".addButtonItem");

addButton?.addEventListener("click", function () {
  const newItem = CreateItemForm();

  openModal({ title: "Создание задачи", children: newItem });

  addButton.blur()
});
