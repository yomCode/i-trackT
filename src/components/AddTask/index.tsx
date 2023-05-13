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
  status: string;
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
    e.currentTarget.focus();

    if (task?.id) {
      if (task?.description) {
        const updatedList: any = taskList.map((taskItem) =>
          task?.id === taskItem?.id
            ? {
                id: taskItem?.id,
                description: e.currentTarget.elements.task.value,
                status: taskItem?.status,
                time: taskItem?.time,
              }
            : taskItem
        );
        setTaskList(updatedList);
        setTask({ id: "", description: "", status: "", time: "" });
      }
    } else {
      if (task?.description) {
        const date = new Date();
        const id: string = date.getTime().toString();
        const description: string = e.currentTarget.elements.task.value;
        const status: string = "pending";
        const time: string = `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
        const newTask: TaskProps = { id, description, status, time };

        setTaskList([...taskList, newTask]);
        setTask({ id: "", description: "", status: "pending", time: "" });
      }
    }
  };

  return (
    <div className={Styles.container}>
      <form className={Styles.add_task} onSubmit={handleAddTask}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="add task"
          autoComplete="off"
          value={task && task?.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <Button backgroundColor="#03b056">
          {" "}
          {task?.id ? "Update" : "Add"}{" "}
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
