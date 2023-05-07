import React from "react";
import Button from "../utils/Button";
import Styles from "./Styles.module.css";

type Task = "todo" | "in_progress" | "done";

interface TaskProps {
  id: string;
  task: string;
  status: Task;
  date: Date;
}

const Todo = () => {
  const tasks = [{}];
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
            }}
          >
            {" "}
            {count}{" "}
          </span>
        </h3>
        <Button backgroundColor="#0f6af3">Clear all</Button>
      </div>
      <hr />
      <div>
        {tasks?.map((task) => {
          return (
            <div className={Styles.container_secondary}>
              <p>{}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
