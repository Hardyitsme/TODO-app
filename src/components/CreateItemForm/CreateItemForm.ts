
import { closeModal } from "../Modal/Modal";
import { addTodoListItem } from "../TodoList/TodoList";


export function CreateItemForm() {
  const ItemForm = document.createElement("div");

  const input = document.createElement("input");
  input.placeholder = "Введите название задачи";
  input.classList.add("input");
  ItemForm.appendChild(input);


  const inputDescription = document.createElement('input')
  inputDescription.placeholder = 'Укажите описание задачи'
  inputDescription.classList.add('input_Description')
  ItemForm.appendChild(inputDescription)


  const AddButton = document.createElement("button");
  AddButton.classList.add("Add_Button");
  AddButton.textContent = "Создать задачу";
  ItemForm.appendChild(AddButton);

  AddButton.addEventListener("click", function () {
    addTodoListItem({
      title: input.value,
      create_date: new Date,
      description: inputDescription.value,
    })
    closeModal()
  });

  return ItemForm;
}
