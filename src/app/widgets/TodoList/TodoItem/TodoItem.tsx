import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import styles from "./TodoItem.module.scss"
import { formatDate } from "./helpers";
import { Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import { ProgressTypes, TodoItemModel } from "../../../../entities/todo/model";
import { deleteTodo } from "../../../../entities/todo/store";

export interface Props {
  todoItem: TodoItemModel;
}

const statusMap = {
  [ProgressTypes.CLOSE]: { color: "green", text: "CLOSE" },
  [ProgressTypes.IN_DEVELOPMENT]: { color: "blue", text: "В работе" },
  [ProgressTypes.PAUSED]: { color: "orange", text: "PAUSED" },
};

export const TodoItem = ({ todoItem }: Props) => {
  const navigate = useNavigate();
  const formatedDate = formatDate(todoItem.create_date);

  const deleteTodoHandler = () => deleteTodo(todoItem.id);

  const status = statusMap[todoItem.progress_type] || {
    color: "blue",
    text: "В работе",
  };

  return (
    <div className={styles.todoItem}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperTitle}>
          <div className={styles.taskItemTitle}>
            {todoItem.title} <Tag color={status.color}>{status.text}</Tag>
          </div>
          <div className={styles.taskItemDate}>{formatedDate}</div>
        </div>

        <div className={styles.actionWrapper}>
          <div
            onClick={() => navigate(`/TodoDetailPage/${todoItem.id}`)}
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
