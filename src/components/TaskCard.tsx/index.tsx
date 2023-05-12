import React, { ReactNode } from "react";
import { TaskListProps } from "../AddTask";
import { AiFillEdit } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { RiDeleteBin3Line } from "react-icons/ri";
// import { DeleteDialog, ChangeTaskStatusDialog } from "../utils/Dialog";
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
  const modal = (dialogId: string) => {
    return document.getElementById(dialogId) as HTMLDialogElement;
  };

  const handleUpdateTaskDescription = () => {
    const foundTask = taskList.find((task) => task?.id === id);
    if (foundTask) {
      setTask(foundTask);
    }
  };

  const handleDeleteTask = () => {
    const newTaskList = taskList?.filter((task) => task?.id !== id);
    if (newTaskList && setTaskList) {
      setTaskList(newTaskList);
    }
  };

  const handleChangeTaskStatus = () => {
    const updatedTaskList = taskList?.map((task: TaskProps) => {
      if (task?.id === id) {
        return {
          id: task?.id,
          description: task?.description,
          time: task?.time,
          status: "completed",
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
            // onClick={() => modal("delete").showModal()}
            onClick={handleDeleteTask}
            className={[Styles.icon, Styles.delete].join(" ")}
          />
          {/* <DeleteDialog
            id={id}
            taskList={taskList}
            setTaskList={setTaskList}
            dialogId="delete"
            deleteTask={handleDeleteTask}
          /> */}
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
              <Button onClick={() => modal("delete").close()}>No</Button>
            </div>
          </dialog>
          <AiFillEdit
            onClick={handleUpdateTaskDescription}
            className={[Styles.icon, Styles.edit].join(" ")}
          />
          <MdPendingActions
            // onClick={() => modal("changeStatus").showModal()}
            onClick={handleChangeTaskStatus}
            className={[Styles.icon, Styles.update].join(" ")}
          />
          {/* <ChangeTaskStatusDialog
            task={task}
            setTask={setTask}
            id={task?.id}
            dialogId="edit"
            taskList={taskList}
            setTaskList={setTaskList}

          /> */}
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
