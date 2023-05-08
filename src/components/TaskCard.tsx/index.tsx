import React, { ReactNode } from "react";

import { AiFillEdit } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { RiDeleteBin3Line } from "react-icons/ri";

import Styles from "./TaskCard.module.css";

const TaskCard = () => {
  const date = new Date();
  const time: string = `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
  const [status, setStatus] = React.useState<
    "completed" | "pending" | "in-progress"
  >("in-progress");

  return (
    <div
      className={[
        Styles.container,
        status === "pending"
          ? Styles.pending
          : status === "in-progress"
          ? Styles.in_progress
          : Styles.completed,
      ].join(" ")}
    >
      <div className={Styles.details}>
        <p className={Styles.task}>task 1</p>
        <div className={Styles.cta}>
          <RiDeleteBin3Line
            className={[Styles.icon, Styles.delete].join(" ")}
          />
          <AiFillEdit className={[Styles.icon, Styles.edit].join(" ")} />
          <MdPendingActions
            className={[Styles.icon, Styles.update].join(" ")}
          />
        </div>
      </div>
      <div>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default TaskCard;
