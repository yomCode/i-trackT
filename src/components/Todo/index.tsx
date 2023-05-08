import React, { useState } from "react";

import TaskCard from "../TaskCard.tsx";
import Button from "../utils/Button";
import Styles from "./Styles.module.css";

interface TaskProps {
  id: string;
  task: string;
  status: "completed" | "pending" | "in-progress";
  time: string;
}

interface TaskListProps {
  taskList: TaskProps[];
}

const Todo = ({ taskList }: TaskListProps) => {
  const count = 10;
  return (
    <div className={Styles.container}>
      <div className={Styles.container_primary}>
        <h3>
          Todo{" "}
          <span
            style={{
              border: "3px solid #f5f5f5",
              padding: "0.5rem 1rem",
              borderRadius: "50%",
              marginLeft: "1rem",
              backgroundColor: "#dfdfdf",
              color: "#4e4f4f",
            }}
          >
            {" "}
            {taskList?.length}{" "}
          </span>
        </h3>
        <Button backgroundColor="#0f6af3">Clear all</Button>
      </div>
      <hr />
      <div className={Styles.container_secondary}>
        {taskList?.map((task) => {
          return <TaskCard />;
        })}
      </div>
    </div>
  );
};

export default Todo;
