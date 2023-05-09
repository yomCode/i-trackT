import React from "react";
import Button from "./Button";
import { TaskProps } from "../TaskSection/index";

interface ModalProps {
  id: string;
  dialogId: string;
  taskList: TaskProps[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

export const DeleteDialog = ({
  id,
  dialogId,
  taskList,
  setTaskList,
}: ModalProps) => {
  const handleDeleteTask = () => {
    const newTaskList = taskList.filter((task) => task?.id !== id);
    setTaskList(newTaskList);
  };

  const modal = () => {
    return document.getElementById(dialogId) as HTMLDialogElement;
  };

  return (
    <dialog id="delete">
      <p>Are you sure you want to delete this task?</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Button onClick={handleDeleteTask}>Yes</Button>
        <Button onClick={() => modal().close()}>No</Button>
      </div>
    </dialog>
  );
};
