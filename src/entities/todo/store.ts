import { generateId } from "./../../utils/generateId";
import { createEffect, createEvent, createStore } from "effector";
import { ProgressTypes, TodoItemModel } from "./model";
import { todoApi } from "./api";


const initialValue: TodoItemModel[] = [];

export const deleteTodo = createEvent<string>();
export const editTodo = createEvent<TodoItemModel>();

export const createTodo = createEvent<{
  title: string;
  description: string;
}>();

export const loadTodosFx = createEffect(async () => {
  const todos = await todoApi.getTodos();

  if (todos.length > 0) {
    return todos;
  }

  return initialValue;
});

export const $todos = createStore<TodoItemModel[]>(initialValue)
  .on(deleteTodo, (todos, idToDelete) => {
    const updatedTodos = todos.filter(({ id }) => idToDelete !== id);
    todoApi.saveTodos(updatedTodos);
    return updatedTodos;
  })
  .on(editTodo, (todos, newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) {
        return { ...todo, ...newTodo };
      }

      return todo;
    });
    todoApi.saveTodos(updatedTodos);
    return updatedTodos;
  })
  .on(createTodo, (todos, { title, description }) => {
    const newId = generateId();
    const newTodo = {
      title,
      description,
      create_date: new Date(),
      progress_type: ProgressTypes.IN_DEVELOPMENT,
      id: newId,
      critical_level: 2,
    };
    const updatedTodos = [...todos, newTodo];
    todoApi.saveTodos(updatedTodos);
    return updatedTodos;
  })
  .on(loadTodosFx.doneData, (_, todos) => todos);

$todos.watch((todos) => {
  if (todos.length) {
    todoApi.saveTodos(todos);
  }
});
