import { TodoItemModel } from "./model";

const sleep = (ms: number) => {
  return new Promise((res) => {
    setTimeout(() => res(true), ms);
  });
};

export const todoApi = {
  saveTodos: async (todos: TodoItemModel[]) => {
    await sleep(1000);
    window.localStorage.setItem("todos", JSON.stringify(todos));
  },
  getTodos: async () => {
    await sleep(1000);

    return JSON.parse(window.localStorage.getItem("todos") ?? "[]").map(
      (todoItem: TodoItemModel) => ({
        ...todoItem,
        create_date: new Date(todoItem.create_date),
      })
    );
  },
};
