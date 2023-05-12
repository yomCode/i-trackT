import React from "react";
// import Button from "./Button";
import { TaskProps } from "../TaskSection/index";

interface ModalProps {
  id?: string;
  dialogId?: string;
  taskList?: TaskProps[];
  setTaskList?: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  task?: TaskProps;
  setTask?: React.Dispatch<React.SetStateAction<TaskProps>>;
  deleteTask?: () => void;
}

// const modal = (dialogId: string) => {
//   return document.getElementById(dialogId) as HTMLDialogElement;
// };

export const DeleteDialog = ({ dialogId, deleteTask }: ModalProps) => {
  // const handleDeleteTask = () => {
  //   return deleteTask ? deleteTask() : "";
  // };
  // return (
  //     <dialog>
  //       <p>Are you sure you want to delete this task?</p>
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //           gap: "1rem",
  //         }}
  //       >
  //         <Button onClick={handleDeleteTask}>Yes, sure!</Button>
  //         <Button onClick={() => (dialogId ? modal(dialogId).close() : "")}>
  //           No
  //         </Button>
  //       </div>
  //     </dialog>
  //   );
  // };
  // export const ChangeTaskStatusDialog = ({ task, setTask, id }: ModalProps) => {
  //   // const handleChangeTaskStatus = (newStatus: string, id: any) => {
  //   //   const taskList = JSON.parse(localStorage.getItem("taskList") || "[]");
  //   //   const foundTask = taskList?.find(
  //   //     (foundTask: { id: any }) => foundTask?.id === id
  //   //   );
  //   //   modal("changeStatus").close();
  //   // };
  //   return (
  //     <dialog id="changeStatus">
  //       <p
  //         style={{
  //           textAlign: "right",
  //           fontSize: "4rem",
  //           margin: "0",
  //           fontFamily: "sans-serif",
  //           cursor: "pointer",
  //           padding: "0",
  //         }}
  //         onClick={() => modal("changeStatus").close()}
  //       >
  //         X
  //       </p>
  //       <div
  //         style={{
  //           display: "flex",
  //           flexDirection: "column",
  //           gap: "1rem",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <p
  //           style={{
  //             fontSize: "2rem",
  //           }}
  //         >
  //           What is the status of this task?
  //         </p>
  //         <Button
  //           disabled={task?.status === "pending"}
  //           onClick={() => handleChangeTaskStatus("pending", id)}
  //         >
  //           Pending
  //         </Button>
  //         <Button
  //           disabled={task?.status === "in progress"}
  //           onClick={() => handleChangeTaskStatus("in progress", id)}
  //         >
  //           In progress
  //         </Button>
  //         <Button
  //           disabled={task?.status === "completed"}
  //           onClick={() => handleChangeTaskStatus("completed", id)}
  //         >
  //           Completed
  //         </Button>
  //       </div>
  //     </dialog>
  // );
  // };
};
