import { TodoItemModel } from "../../../entities/todo/model";
import { TodoProgressTypeText } from "./constants";
import styles from "./TodoDetailPage.module.scss";

interface Props {
  todo: TodoItemModel;
}

export const TodoDetailPage = ({ todo }: Props) => (
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
      <div className={styles.todoStatus}>{TodoProgressTypeText[todo.progress_type]}</div>
    </div>

    <div className={styles.todoSection}>
      <div className={styles.todoSectionTitle}>Описание задачи:</div>
      <div className={styles.todoDescription}>{todo.description}</div>
    </div>
  </div>
);
