import React from "react";
import Button from "./Button";
import { TaskProps } from "../TaskSection/index";

interface ModalProps {
  id?: string;
  dialogId?: string;
  taskList?: TaskProps[];
  setTaskList?: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  task?: TaskProps;
  setTask?: React.Dispatch<React.SetStateAction<TaskProps>>;
}

const modal = (dialogId: string) => {
  return document.getElementById(dialogId) as HTMLDialogElement;
};

export const DeleteDialog = ({
  id,
  dialogId,
  taskList,
  setTaskList,
}: ModalProps) => {
  const handleDeleteTask = () => {
    const newTaskList = taskList?.filter((task) => task?.id !== id);
    if (newTaskList && setTaskList) {
      setTaskList(newTaskList);
    }
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
        <Button onClick={handleDeleteTask}>Yes, sure!</Button>
        <Button onClick={() => (dialogId ? modal(dialogId).close() : "")}>
          No
        </Button>
      </div>
    </dialog>
  );
};

export const ChangeTaskStatusDialog = ({
  task,
  setTask,
  taskList,
  setTaskList,
  id,
}: ModalProps) => {
  const handleChangeTaskStatus = (
    status: "pending" | "in progress" | "completed"
  ) => {
    // const task = taskList?.find((task) => task?.id === id);
    const updatedTaskList: any = taskList?.map((taskItem) =>
      taskItem?.id === id
        ? setTask &&
          setTask({
            id: taskItem?.id,
            description: taskItem?.description,
            status: status,
            time: taskItem?.time,
          })
        : taskItem
    );
    setTaskList && setTaskList(updatedTaskList);

    console.log({ taskList, id });
    modal("changeStatus").close();
  };

  console.log({ newTest: task });

  return (
    <dialog id="changeStatus">
      <p
        style={{
          textAlign: "right",
          fontSize: "4rem",
          margin: "0",
          fontFamily: "sans-serif",
          cursor: "pointer",
          padding: "0",
        }}
        onClick={() => modal("changeStatus").close()}
      >
        X
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "2rem",
          }}
        >
          What is the status of this task?
        </p>
        <Button
          disabled={task?.status === "pending"}
          onClick={() => handleChangeTaskStatus("pending")}
        >
          Pending
        </Button>
        <Button
          disabled={task?.status === "in progress"}
          onClick={() => handleChangeTaskStatus("in progress")}
        >
          In progress
        </Button>
        <Button
          disabled={task?.status === "completed"}
          onClick={() => handleChangeTaskStatus("completed")}
        >
          Completed
        </Button>
      </div>
    </dialog>
  );
};
