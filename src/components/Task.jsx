import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/todos/actions";
import "../assets/styles/components/Task.scss";
import iconDelete from "../assets/static/icon-delete.png";

const Task = (props) => {
  console.log("Task:::", props);
  const { task } = props;

  const handleClick = (event) => {
    event.preventDefault();
    console.log("onClick::::", task.id);
    props.deleteTodo(task.id);
  };

  return (
    <div id="task">
      <div className="task__list-container">
        <div className="task__radio"></div>
        <p className="task__text">{task.text}</p>
      </div>
      <img
        className="task__icon-delete"
        onClick={(e) => handleClick(e)}
        src={iconDelete}
        alt="Delete"
      />
    </div>
  );
};

const mapDispatchToProps = {
  deleteTodo,
};

export default connect(null, mapDispatchToProps)(Task);
