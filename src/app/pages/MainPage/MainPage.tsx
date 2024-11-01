import { $todos, loadTodosFx } from "../../../entities/todo/store";
import { CreateTodoWidget } from "../../widgets/CreateTodo/CreateTodoWidget";
import { TodoList } from "../../widgets/TodoList";
import styles from "./Main.module.scss";
import { useUnit } from "effector-react";

export const MainPage = () => {
  const [todos, isLoading] = useUnit([$todos, loadTodosFx.pending]);

  return (
    <>
      <div className={styles.box}>
        <div className={styles.navbar}>
          <CreateTodoWidget />
        </div>

        {isLoading ? (
          // Вынести
          <div className={styles.loading}>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
            <div className={styles.block}></div>
          </div>
        ) : (
          <TodoList todos={todos} />
        )}
      </div>
    </>
  );
};
