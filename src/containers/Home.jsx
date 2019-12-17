import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodos } from "../redux/todos/actions";
import "../assets/styles/components/Home.scss";
import Banner from "../components/Banner";
import Task from "../components/Task";

class Home extends Component {
  componentDidMount() {
    const { getTodos } = this.props;
    getTodos();
  }

  render() {
    console.log("Home:::", this.props);
    const { todos } = this.props;

    return (
      <section id="home">
        <div className="home__banner-container">
          <Banner />
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
