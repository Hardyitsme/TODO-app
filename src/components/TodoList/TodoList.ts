import { createTodoListItem } from "../TaskItem/TaskItem";


interface TodoItem {
  title: string;
  create_date: Date;
  description?: string;
  isComplete: boolean;
  id: string;
}

const todos: TodoItem[] = [];

const renderTodos = () => {
  const displayArea = document.getElementById("displayArea");

  todos.forEach(function (todoItem) {
    const newTodoItem = createTodoListItem(todoItem.title);


  });
};

export const addTodoListItem = (todo: TodoItem) => {
  todos.push(todo);
  renderTodos();
};


const editTodoListItem = (id: string, newTodoArgs: TodoItem) => {
  const neededTodoIndex = todos.findIndex((todo) => todo.id === id);
  todos[neededTodoIndex] = newTodoArgs;
  renderTodos();
};
