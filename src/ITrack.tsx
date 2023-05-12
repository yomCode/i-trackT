import React, { useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskSection from "./components/TaskSection";

interface TaskProps {
  id: string;
  description: string;
  status: string;
  time: string;
}

const ITrack = () => {
  const [taskList, setTaskList] = React.useState<TaskProps[]>(
    JSON.parse(localStorage.getItem("taskList") ?? "[]")
  );
  const [task, setTask] = React.useState<TaskProps>({
    id: "",
    description: "",
    status: "",
    time: "",
  });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const sectionData = [
    { name: "pending" },
    { name: "in progress" },
    { name: "completed" },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        marginBottom: "20rem",
      }}
    >
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      {sectionData?.map((section) => {
        return (
          <TaskSection
            taskList={taskList}
            setTaskList={setTaskList}
            sectionName={section.name}
            task={task}
            setTask={setTask}
          />
        );
      })}
    </div>
  );
};

export default ITrack;
