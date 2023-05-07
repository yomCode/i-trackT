import React from "react";
import Styles from "./Styles.module.css";

interface FormElements extends HTMLFormControlsCollection {
  task: HTMLInputElement;
}

interface SubmitTaskFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const AddTask = () => {
  const handleAddTask = (e: React.FormEvent<SubmitTaskFormElement>) => {
    e.preventDefault();
    const task: string = e.currentTarget.elements.task.value;
    console.log(task);
  };

  return (
    <div className={Styles.container}>
      <form className={Styles.add_task} onSubmit={handleAddTask}>
        <input type="text" name="task" placeholder="add task" />
        <button className="btn-success" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
