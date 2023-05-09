import React from "react";

import Button from "../utils/Button";
import Styles from "./Styles.module.css";

interface FormElements extends HTMLFormControlsCollection {
  task: HTMLInputElement;
}

interface SubmitTaskFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

interface TaskProps {
  id: string;
  description: string;
  status: "completed" | "pending" | "in progress";
  time: string;
}

export interface TaskListProps {
  taskList: TaskProps[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  task: TaskProps;
  setTask: React.Dispatch<React.SetStateAction<TaskProps>>;
}

const AddTask = ({ taskList, setTaskList, task, setTask }: TaskListProps) => {
  const handleAddTask = (e: React.FormEvent<SubmitTaskFormElement>) => {
    e.preventDefault();
    const date = new Date();
    const id: string = date.getTime().toString();
    const description: string = e.currentTarget.elements.task.value;
    const status: "completed" | "pending" | "in progress" = "pending";
    const time: string = `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
    const newTask: TaskProps = { id, description, status, time };
    console.log({ newTask });

    setTaskList([...taskList, newTask]);
    e.currentTarget.reset();
  };

  return (
    <div className={Styles.container}>
      <form className={Styles.add_task} onSubmit={handleAddTask}>
        <input
          type="text"
          name="task"
          placeholder="add task"
          autoComplete="off"
          // value={task?.description}
          // onChange={(e) => setTask( e.target.value)}
        />
        <Button backgroundColor="#03b056"> Add </Button>
      </form>
    </div>
  );
};

export default AddTask;
