import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodos } from "../redux/todos/actions";
import "../assets/styles/components/Home.scss";
import Banner from "../components/Banner";
import Task from "../components/Task";

class Home extends Component {
  constructor(props) {
    super(props);

    const today = new Date();

    this.state = {
      currentDay: today.toLocaleDateString(),
      currentTime: today.toLocaleTimeString(),
    };
  }

  componentDidMount() {
    const { getTodos } = this.props;
    getTodos();

    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
    }, 60000);
  }

  render() {
    console.log("Home:::", this.props);
    const { todos } = this.props;
    const { currentDay, currentTime } = this.state;

    return (
      <section id="home">
        <div className="home__banner-container">
          <Banner currentDay={currentDay} currentTime={currentTime} />
        </div>
        <div className="home__todos-container">
          {todos.data && todos.data.map((task) => <Task key={task._id} task={task} />)}
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
