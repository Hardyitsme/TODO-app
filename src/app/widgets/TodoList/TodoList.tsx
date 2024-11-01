import { List } from "antd";
import { TodoItem } from "./TodoItem";
import { TodoItemModel } from "../../../entities/todo/model";

export interface Props {
  todos: TodoItemModel[];
}

export const TodoList = ({ todos }: Props) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todoItem={todo} />
      ))}
    </List>
  );
};
