import React, { ReactNode } from "react";
import { TaskListProps } from "../AddTask";
import { AiFillEdit } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { RiDeleteBin3Line } from "react-icons/ri";

import Styles from "./TaskCard.module.css";
import Button from "../utils/Button";

// interface ModalProps {
//   children?: ReactNode;
//   open: boolean;
// }

// export const Modal = ({ children }: ModalProps) => {
//   return <dialog>{children}</dialog>;
// };

interface TaskCardProps extends TaskListProps {
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
  const [dialogId, setDialogId] = React.useState<string>("");

  const handleDeleteTask = () => {
    const newTaskList = taskList.filter((task) => task?.id !== id);
    setTaskList(newTaskList);
  };

  const handleUpdateTaskStatus = () => {
    const foundTask = taskList.find((task) => task?.id === id);
    if (foundTask) {
      foundTask.status = "completed";
      setTaskList([...taskList]);
    }
  };

  const modal = (dialogId: string) => {
    return document.getElementById(dialogId) as HTMLDialogElement;
  };

  const handleUpdateTaskDescription = () => {
    const task = taskList.find((task) => task?.id === id);
    if (task) {
      setTask(task?.description);
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
              <Button onClick={() => modal("delete").close()}>No</Button>
            </div>
          </dialog>

          <AiFillEdit
            onClick={handleUpdateTaskDescription}
            className={[Styles.icon, Styles.edit].join(" ")}
          />
          <MdPendingActions
            onClick={handleUpdateTaskStatus}
            className={[Styles.icon, Styles.update].join(" ")}
          />
        </div>
      </div>
      <hr />
      <div>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default TaskCard;
