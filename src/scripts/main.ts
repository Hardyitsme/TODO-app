import { getInputValue, clearInput } from './inputUtils.js';
import { addItem } from './taskManager.js';
import '../index.js'

const displayArea = document.getElementById("displayArea");
const addButton = document.querySelector("button");

addButton?.addEventListener("click", function () {
  const inputValue = getInputValue();

  if (inputValue.length) {
    addItem(inputValue, displayArea);
    clearInput();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputValue = getInputValue();

    if (inputValue.length) {
      addItem(inputValue, displayArea);
      clearInput();
    }
  }
});

