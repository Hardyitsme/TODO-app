import { getInputValue, clearInput } from "./inputUtils.js";

import "../index.js";
import { createTodoListItem } from "../components/TaskItem/TaskItem.js";

const displayArea = document.getElementById("displayArea");
const addButton = document.querySelector("button");

addButton?.addEventListener("click", function () {
  const inputValue = getInputValue();

  if (inputValue.length) {
    const newItem = createTodoListItem(inputValue);
    displayArea?.appendChild(newItem);
    clearInput();
  }
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
