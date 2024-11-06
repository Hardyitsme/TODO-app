import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { useEffect } from "react";
import { loadTodosFx } from "../entities/todo/store";

import "./App.module.scss"

export const App = () => {
  useEffect(() => {
    loadTodosFx();

  }, []);

  return (
    <>
      <Routes>
        <Route path="*" element={<MainPage />} />
        {/* <Route path="/todoDetailPage/:id" element={<TodoDetailPage />} /> */}
      </Routes>
    </>
  );
};
