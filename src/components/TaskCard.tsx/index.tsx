import React, { ReactNode, useRef } from "react";
import { TaskListProps } from "../AddTask";
import { AiFillEdit } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { RiDeleteBin3Line } from "react-icons/ri";
import Styles from "./TaskCard.module.css";
import Button from "../utils/Button";
import { TaskProps } from "../TaskSection";

export interface TaskCardProps extends TaskListProps {
  children?: ReactNode;
  id: string;
  time: string;
  description: string;
  status: string;
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
  const deleteDialogRef = useRef<HTMLDialogElement>(null);
  const statusDialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = (ref: React.RefObject<HTMLDialogElement>) => {
    ref.current && ref.current.showModal();
  };

  const closeDialog = (ref: React.RefObject<HTMLDialogElement>) => {
    ref.current && ref.current.close();
  };

  const handleUpdateTaskDescription = () => {
    const addTaskInput = document.getElementById("task");
    const foundTask = taskList?.find((task) => task?.id === id);
    if (foundTask) {
      setTask(foundTask);
    }
    window.scrollTo(0, 0);
    addTaskInput?.focus();
  };

  const handleDeleteTask = () => {
    const newTaskList = taskList?.filter((task) => task?.id !== id);
    if (newTaskList && setTaskList) {
      setTaskList(newTaskList);
    }
    closeDialog(deleteDialogRef);
  };

  const handleChangeTaskStatus = (status: string) => {
    const updatedTaskList = taskList?.map((task: TaskProps) => {
      if (task?.id === id) {
        return {
          id: task?.id,
          description: task?.description,
          time: task?.time,
          status: status,
        };
      } else {
        return task;
      }
    });
    setTaskList(updatedTaskList);
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
            onClick={() => openDialog(deleteDialogRef)}
            className={[Styles.icon, Styles.delete].join(" ")}
          />
          <dialog ref={deleteDialogRef}>
            <p>Are you sure you want to delete this task?</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <Button onClick={handleDeleteTask}>Yes, sure!</Button>
              <Button onClick={() => closeDialog(deleteDialogRef)}>No</Button>
            </div>
          </dialog>
          <AiFillEdit
            onClick={handleUpdateTaskDescription}
            className={[Styles.icon, Styles.edit].join(" ")}
          />
          <MdPendingActions
            onClick={() => openDialog(statusDialogRef)}
            className={[Styles.icon, Styles.update].join(" ")}
          />

          <dialog ref={statusDialogRef}>
            <p
              style={{
                marginLeft: "75%",
                fontSize: "1.5rem",
                margin: "0",
                fontFamily: "sans-serif",
                cursor: "pointer",
                padding: "0",
                color: "red",
                borderBottom: "1px solid red",
                width: "fit-content",
              }}
              onClick={() => closeDialog(statusDialogRef)}
            >
              Close(X)
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
                  fontSize: "1.5rem",
                }}
              >
                What is the status of this task?
              </p>
              <Button
                disabled={status === "pending"}
                onClick={() => handleChangeTaskStatus("pending")}
              >
                Pending
              </Button>
              <Button
                disabled={status === "in progress"}
                onClick={() => handleChangeTaskStatus("in progress")}
              >
                In progress
              </Button>
              <Button
                disabled={status === "completed"}
                onClick={() => handleChangeTaskStatus("completed")}
              >
                Completed
              </Button>
            </div>
          </dialog>
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
