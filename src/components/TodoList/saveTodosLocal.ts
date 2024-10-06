import { TodoItem } from "./TodoList"

export function saveTodosLocal(todos: TodoItem[]) {
    window.localStorage.setItem('todos', JSON.stringify(todos))
}

export function getTodosItemLocal() {
    return JSON.parse(window.localStorage.getItem('todos') ?? '[]')
}

