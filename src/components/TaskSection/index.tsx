import React from "react";

import TaskCard from "../TaskCard.tsx";
import Button from "../utils/Button";
import Styles from "./Styles.module.css";

export interface TaskProps {
  id: string;
  description: string;
  status: "completed" | "pending" | "in progress";
  time: string;
}

interface TaskListProps {
  taskList: TaskProps[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

interface TaskSectionProps extends TaskListProps {
  sectionName: string;
  task: TaskProps;
  setTask: React.Dispatch<React.SetStateAction<TaskProps>>;
}

const Todo = ({
  taskList,
  setTaskList,
  task,
  setTask,
  sectionName,
}: TaskSectionProps) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.container_primary}>
        <h3>
          {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}{" "}
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
            {
              taskList?.filter((task) => task?.status === sectionName).length
            }{" "}
          </span>
        </h3>
        <Button
          backgroundColor={
            sectionName === "pending"
              ? "#f3b30f"
              : sectionName === "in progress"
              ? "#0f6af3"
              : "#00b300"
          }
        >
          Clear all
        </Button>
      </div>
      <hr />
      <div className={Styles.container_secondary}>
        {taskList
          ?.filter((todo) => todo?.status === sectionName)
          .map((todo) => {
            return (
              <TaskCard
                key={todo?.id}
                description={todo?.description}
                time={todo?.time}
                id={todo?.id}
                status={todo?.status}
                taskList={taskList}
                setTaskList={setTaskList}
                task={task}
                setTask={setTask}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Todo;
