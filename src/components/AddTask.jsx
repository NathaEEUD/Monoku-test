import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "../redux/todos/actions";
import "../assets/styles/components/AddTask.scss";

const AddTask = (props) => {
  console.log("AddTask:::", props);

  const [form, setValues] = useState("");
  const [buttonClass, setButtonClass] = useState("add-task__form-button hide");

  const handleInput = (event) => {
    setValues(event.target.value);
    console.log("handleinput::::", form);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonClass("add-task__form-button");
    if (form !== "") {
      console.log("handleinput::::", form);
      props.createTodo({ text: form });
      setValues("");
    }
  };

  const handleFocus = () => {
    setButtonClass("add-task__form-button");
  };

  // const handleBlur = () => {
  //   setButtonClass("add-task__form-button hide");
  // };

  return (
    <div id="add-task">
      <span className="add-task__header">Añade las tareas que deseas realizar</span>

      <form className="add-task__form" onSubmit={handleSubmit}>
        <input
          name="text"
          className="input"
          type="text"
          value={form}
          placeholder="Eje: Comprar materiales para trabajar"
          onChange={(e) => handleInput(e)}
          onFocus={handleFocus}
        />
        <button type="submit" className={buttonClass}>
          Añadir Tarea
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  createTodo,
};

export default connect(null, mapDispatchToProps)(AddTask);
