import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodos } from "../redux/todos/actions";
import "../assets/styles/components/Home.scss";
import Banner from "../components/Banner";
import AddTask from "../components/AddTask";
import Task from "../components/Task";

class Home extends Component {
  constructor(props) {
    super(props);

    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    const today = new Date();
    const day = days[today.getDay()];
    const month = months[today.getMonth()];
    const currentDay = `${day}, ${today.getDay()} de ${month}`;

    this.state = {
      currentDay,
      currentTime: today.toLocaleTimeString().slice(0, 5),
    };
  }

  componentDidMount() {
    const { getTodos } = this.props;
    getTodos();

    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString().slice(0, 5),
      });
    }, 1000);
  }

  render() {
    const { todos } = this.props;
    const { currentDay, currentTime } = this.state;

    return (
      <section id="home">
        <div className="home__banner-container">
          <Banner currentDay={currentDay} currentTime={currentTime} />
        </div>
        <div className="home__add-task-container">
          <AddTask />
        </div>
        <div className="home__todos-container">
          {todos.data && todos.data.map((task) => <Task key={task.id} task={task} />)}
          {!todos.data && (
            <span className="home__todos-text">No has añadido ninguna tarea hasta ahora</span>
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  getTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
