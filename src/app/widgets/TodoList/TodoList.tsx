import { List } from "antd";
import { TodoItem } from "./TodoItem";
import { TodoItemModel } from "../../../entities/todo/model";
import styles from "./TodoList.module.scss"; 

export interface Props {
  todos: TodoItemModel[];
}

export const TodoList = ({ todos }: Props) => {
  return (
    <List className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todoItem={todo} />
      ))}
    </List>
  );
};
