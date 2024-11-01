import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import styles from "./TodoUtem.module.scss";
import { formatDate } from "./helpers";
import { Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import { TodoItemModel } from "../../../../entities/todo/model";
import { deleteTodo } from "../../../../entities/todo/store";

export interface Props {
  todoItem: TodoItemModel;
}

export const TodoItem = ({ todoItem }: Props) => {
  const navigate = useNavigate();
  const formatedDate = formatDate(todoItem.create_date);

  const deleteTodoHandler = () => deleteTodo(todoItem.id);

  return (
    <div className={styles.todoItem}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperTitle}>
          <div className={styles.taskItemTitle}>
            {todoItem.title} <Tag color="green">Завершен</Tag>
          </div>
          <div className={styles.taskItemDate}>{formatedDate}</div>
        </div>

        <div className={styles.actionWrapper}>
          <div
            onClick={() => navigate("/TodoDetailPage")}
            className={styles.actionWrapperItem}
          >
            <EditOutlined />
          </div>

          <div onClick={deleteTodoHandler} className={styles.actionWrapperItem}>
            <DeleteOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};
