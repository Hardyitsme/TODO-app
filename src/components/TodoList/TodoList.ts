import { getTodosItemLocal, saveTodosLocal } from "./saveTodosLocal";
import { createTodoListItem } from "./TaskItem/TaskItem";


export interface TodoItem {
  title: string;
  create_date: Date;
  description?: string;
  isComplete: boolean;
  id: number;
}

type CreateTodoItemArgs = Omit<TodoItem, "isComplete" | "id">;

let todos: TodoItem[] = getTodosItemLocal();

export const renderTodos = (todos: TodoItem[]) => {
  const displayArea = document.getElementById("displayArea");
  displayArea!.innerHTML = "";

  todos.forEach(function (todoItem) {
    const newTodoItem = createTodoListItem(todoItem);
    displayArea?.appendChild(newTodoItem);
  });

  saveTodosLocal(todos)
};

export const deleteTodoItem = (todoId: number) => {
  todos = todos.filter((todo) => todo.id !== todoId)
  renderTodos(todos)
}

export const addTodoListItem = (todo: CreateTodoItemArgs) => {
  todos.push({ ...todo, isComplete: false, id: todos.length + 1 });
  renderTodos(todos);
};

// const editTodoListItem = (id: string, newTodoArgs: TodoItem) => {
  //   const neededTodoIndex = todos.findIndex((todo) => todo.id === id);
  //   todos[neededTodoIndex] = newTodoArgs;
  //   renderTodos();
  // };
  
renderTodos(todos)