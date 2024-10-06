import { createTodoListItem } from "./TaskItem/TaskItem";


interface TodoItem {
  title: string;
  create_date: Date;
  description?: string;
  isComplete: boolean;
  id: number;
}

type CreateTodoItemArgs = Omit<TodoItem, "isComplete" | "id">;

const todos: TodoItem[] = [];

export const renderTodos = () => {
  const displayArea = document.getElementById("displayArea");
  displayArea!.innerHTML = "";

  todos.forEach(function (todoItem) {
    const newTodoItem = createTodoListItem(todoItem.title);
    displayArea?.appendChild(newTodoItem);
  });
};

export const addTodoListItem = (todo: CreateTodoItemArgs) => {
  todos.push({ ...todo, isComplete: false, id: todos.length + 1 });
  renderTodos();
};

// const editTodoListItem = (id: string, newTodoArgs: TodoItem) => {
//   const neededTodoIndex = todos.findIndex((todo) => todo.id === id);
//   todos[neededTodoIndex] = newTodoArgs;
//   renderTodos();
// };
