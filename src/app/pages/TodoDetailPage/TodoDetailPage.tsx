import { Select } from "antd";
import { TodoProgressTypeText } from "./constants";
import styles from "./TodoDetailPage.module.scss";
import { $todos, editTodo } from "../../../entities/todo/store";
import { useUnit } from "effector-react";
import CommetsTodo from "../../widgets/CommentList/Comment/Comment";

interface Props {
  todoId: string;
}

export const TodoDetailPage = ({ todoId }: Props) => {
  const todos = useUnit($todos);

  const todo = todos.find((todo) => todo.id === todoId);

  if (!todo) {
    return <h2>Не нашли задачу по заданному айдишнику</h2>;
  }

  return (
    <div className={styles.todoDetailContainer}>
      <div className={styles.todoSection}>
        <h1 className={styles.todoTitle}>Задача: {todo.title}</h1>
      </div>

      <div className={styles.todoSection}>
        <div className={styles.todoSectionTitle}>Время создания задачи:</div>
        <div>{todo.create_date.toLocaleString()}</div>
      </div>

      <div className={styles.todoSection}>
        <div className={styles.todoSectionTitle}>Статус задачи:</div>
        <div className={styles.todoStatusContainer}>
          <div className={styles.todoStatus}>
            {TodoProgressTypeText[todo.progress_type]}
          </div>

          <Select
            defaultValue={todo.critical_level}
            className={styles.todoCritical}
            onChange={(critical_level) => editTodo({ ...todo, critical_level })}
            value={todo.critical_level}
            options={[
              { value: 1 },
              { value: 2 },
              { value: 3 },
              { value: 4 },
              { value: 5 },
            ]}
          />
        </div>
      </div>

      <div className={styles.todoSection}>
        <div className={styles.todoSectionTitle}>Описание задачи:</div>
        <div className={styles.todoDescription}>{todo.description}</div>
      </div>

      <CommetsTodo />
    </div>
  );
};
