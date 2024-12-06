import { Avatar, Layout, Menu, theme, Typography } from "antd";
import { useUnit } from "effector-react";
import { $todos, loadTodosFx } from "../../../entities/todo/store";
import styles from "./MainPage.module.scss";
import Sider from "antd/es/layout/Sider";
import { CreateTodoWidget } from "../../widgets/CreateTodo/CreateTodoWidget";
import { Loading } from "../../widgets/Loading/Loading";
import { useState } from "react";
import { TodoDetailPage } from "../TodoDetailPage/TodoDetailPage";
import { NothingSelectedTodo } from "../../widgets/NothingSelectedTodo/NothingSelectedTodo";


export const MainPage = () => {
  const [pickedTodoId, setPickedTodoId] = useState<null | string>(null);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [todos, isLoading] = useUnit([$todos, loadTodosFx.pending]);

  return (
    <Layout
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Layout.Header className={styles.baseHeader}>
        <Typography className={styles.todo_list_title}>TODO-LIST</Typography>

        <Avatar
          size="large"
          src="https://sun9-7.userapi.com/s/v1/ig2/GcAJRpZ-yzqB7JokCQUCU-pvRUIUmt1vdBRmfoMbg0XcjAmYvVVO1gA0ndN6SO5_96H1pyM_HVNxS33afnvPe3Pg.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,558x744&from=bu&u=xrTM5o7_FnEk36lz2hFBdsDXasV42DzXzURFWUo2NSM&cs=558x744"
        />
      </Layout.Header>

      <Layout style={{ display: "flex", flex: 1 }}>
        <Sider style={{ background: colorBgContainer }} width={300}>
          {isLoading ? (
            <Loading />
          ) : (
            <Menu
              mode="inline"
              style={{ height: "100%" }}
              items={[
                ...todos.map((item) => ({
                  key: item.id,
                  label: (
                    <span className={styles.menuText}> {item.title} </span>
                  ),
                  onClick: (selectedTodo: any) =>
                    setPickedTodoId(
                      todos.find((todo) => todo.id === selectedTodo.key)?.id ??
                        null
                    ),
                })),
                {
                  key: "add",
                  label: "Добавить задачу",
                },
              ]}
            />
          )}
        </Sider>

        <Layout style={{ padding: "0 24px", flex: 1 }}>
          <Layout.Content style={{ minHeight: 280 }}>
            <div className={styles.box}>
              <div className={styles.navbar}>
                <CreateTodoWidget />
              </div>

              {pickedTodoId ? (
                <TodoDetailPage todoId={pickedTodoId} />
              ) : (
                <NothingSelectedTodo />
              )}
            </div>
          </Layout.Content>
        </Layout>
      </Layout>

      <Layout.Footer className={styles.footer}>
        Huesos Design 😾{new Date().getFullYear()} Created by HZ team
      </Layout.Footer>
    </Layout>
  );
};
