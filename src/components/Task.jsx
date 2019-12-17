import React from "react";
import "../assets/styles/components/Task.scss";

const Task = (props) => {
  console.log("Task:::", props);
  const { task } = props;

  return (
    <div id="task">
      <h1>Task</h1>
      {task._id}
    </div>
  );
};

export default Task;
