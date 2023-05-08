import React from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Todo from "./components/Todo";

interface TaskProps {
  id: string;
  task: string;
  status: "completed" | "pending" | "in-progress";
  time: string;
}

const ITrack = () => {
  const [taskList, setTaskList] = React.useState<TaskProps[]>([]);

  return (
    <>
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <Todo taskList={taskList} />
    </>
  );
};

export default ITrack;
