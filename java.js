const displayArea = document.getElementById("displayArea");

function getInputValue() {
  const inputField = document.getElementById("inputField");
  const inputValue = inputField.value.trim();

  return inputValue;
}

function clearInput() {
  const inputField = document.getElementById("inputField");

  inputField.value = "";
}

function formatDate(date) {
  // Получаем день, месяц и год
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
  const year = date.getFullYear();

  // Форматируем строку
  return `${day}-${month}-${year}`;
}



function addItem(itemText) {
  const newItem = document.createElement("div");
  newItem.className = "task-item";
  newItem.textContent = itemText;

  displayArea.appendChild(newItem);


  const dateItem = document.createElement('div')
  dateItem.className = 'date-item'
 
  const currentDate = new Date();
  dateItem.textContent = formatDate(currentDate)
 

  newItem.appendChild(dateItem)

  const deleteButton = document.createElement('button')
  deleteButton.className = "delete-item";
  deleteButton.textContent = ('Delete');

  newItem.appendChild(deleteButton)

  deleteButton.addEventListener("click", function () {
    newItem.remove();
  });
}

const addButton = document.querySelector("button");

addButton.addEventListener("click", function () {
  const inputValue = getInputValue();

  if (inputValue.length) {
    addItem(inputValue);
    clearInput();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputValue = getInputValue();

    if (inputValue.length) {
      addItem(inputValue);
      clearInput();
    }
  }
});



