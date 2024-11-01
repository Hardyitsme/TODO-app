import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { TodoDetailPage } from "./pages/TodoDetailPage/TodoDetailPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { useEffect } from "react";
import { loadTodosFx } from "../entities/todo/store";

export const App = () => {
  useEffect(() => {
    loadTodosFx();
  }, []);

  return (
    <>
      <h1 className={styles.title}>TODO LIST</h1>

      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/todoDetailPage" element={<TodoDetailPage />} />
      </Routes>
    </>
  );
};
