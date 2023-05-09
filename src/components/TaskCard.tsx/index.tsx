import React, { ReactNode } from "react";
import { TaskListProps } from "../AddTask";
import { AiFillEdit } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { RiDeleteBin3Line } from "react-icons/ri";
import { DeleteDialog, ChangeTaskStatusDialog } from "../utils/Dialog";
import Styles from "./TaskCard.module.css";

export interface TaskCardProps extends TaskListProps {
  children?: ReactNode;
  id: string;
  time: string;
  description: string;
  status: "completed" | "pending" | "in progress";
}

const TaskCard = ({
  id,
  description,
  time,
  status,
  taskList,
  setTaskList,
  task,
  setTask,
}: TaskCardProps) => {
  // const handleUpdateTaskStatus = () => {
  //   const foundTask = taskList.find((task) => task?.id === id);
  //   if (foundTask) {
  //     foundTask.status = "completed";
  //     setTaskList([...taskList]);
  //   }
  // };

  const modal = (dialogId: string) => {
    return document.getElementById(dialogId) as HTMLDialogElement;
  };

  const handleUpdateTaskDescription = () => {
    const task = taskList.find((task) => task?.id === id);
    if (task) {
      // setTask(task?.description);
    }
  };

  return (
    <div
      className={[
        Styles.container,
        status === "pending"
          ? Styles.pending
          : status === "in progress"
          ? Styles.in_progress
          : Styles.completed,
      ].join(" ")}
    >
      <div className={Styles.details}>
        <div
          style={{
            width: "90%",
            padding: "0 5px",
          }}
        >
          <p className={Styles.task}>{description}</p>
        </div>
        <hr className={Styles.hr} />
        <div className={Styles.cta}>
          <RiDeleteBin3Line
            onClick={() => modal("delete").showModal()}
            className={[Styles.icon, Styles.delete].join(" ")}
          />
          <DeleteDialog
            id={id}
            taskList={taskList}
            setTaskList={setTaskList}
            dialogId="delete"
          />
          <AiFillEdit
            onClick={handleUpdateTaskDescription}
            className={[Styles.icon, Styles.edit].join(" ")}
          />
          <MdPendingActions
            onClick={() => modal("changeStatus").showModal()}
            className={[Styles.icon, Styles.update].join(" ")}
          />
          <ChangeTaskStatusDialog
            task={task}
            setTask={setTask}
            id={id}
            dialogId="edit"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      </div>
      <hr
        style={{
          margin: "0",
          padding: "0",
        }}
      />
      <div
        style={{
          height: "25px",
        }}
      >
        <p>{time}</p>
      </div>
    </div>
  );
};

export default TaskCard;
