import { useState } from "react";
import { Button, Modal, Input } from "antd";
import styles from "./CreateTodoWidget.module.scss";
import { createTodo } from "../../../entities/todo/store";


export const CreateTodoWidget = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);

  const onCloseModalHandler = () => setIsShowModal(false);
  const onOpenModalHandler = () => setIsShowModal(true);

  const createTaskHandler = () => {
    createTodo({title, description});
    onCloseModalHandler();

    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Modal
        open={isShowModal}
        onCancel={onCloseModalHandler}
        title={"Создание задачи"}
        cancelText={"Закрыть"}
        footer={
          <Button disabled={!title} onClick={createTaskHandler} type="primary">
            Создать
          </Button>
        }
      >
        {" "}
        <div className={styles.itemForm}>
          <Input
            placeholder="Название задачи"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            minLength={1}
          />
          <Input
            placeholder="Описание задачи"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            minLength={1}
          />
        </div>
      </Modal>

      <div>
        <Button onClick={onOpenModalHandler} type="primary">
          Создать задачу
        </Button>
      </div>
    </>
  );
};
