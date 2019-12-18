import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../redux/todos/actions";
import "../assets/styles/components/Task.scss";
import iconDelete from "../assets/static/icon-delete.png";
import iconCheck from "../assets/static/icon-checked.png";

const Task = (props) => {
  const { task } = props;

  const [iconClass, setIconClass] = useState("task__icon-delete hide");

  const handleClick = (event) => {
    event.preventDefault();
    props.deleteTodo(task.id);
  };

  const handleMouseEnter = () => {
    setIconClass("task__icon-delete");
  };

  const handleMouseLeave = () => {
    setIconClass("task__icon-delete hide");
  };

  const handleRadioClick = (e) => {
    e.preventDefault();
    props.editTodo(task.id, {
      checked: !task.checked,
    });
  };

  return (
    <div id="task" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="task__list-container">
        {task.checked ? (
          <img
            className="task__icon-check"
            onClick={(e) => handleRadioClick(e)}
            src={iconCheck}
            alt="Check"
          />
        ) : (
          <div className="task__radio" onClick={(e) => handleRadioClick(e)}></div>
        )}

        <p className="task__text">{task.text}</p>
      </div>
      <img className={iconClass} onClick={(e) => handleClick(e)} src={iconDelete} alt="Delete" />
    </div>
  );
};

const mapDispatchToProps = {
  deleteTodo,
  editTodo,
};

export default connect(null, mapDispatchToProps)(Task);
