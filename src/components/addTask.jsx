import React from "react";

import "../assets/style/addtask.css";

export default class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      duration: 10,
      newTask: {},
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const todoLength = this.props.todo.length;
    const doneLength = this.props.done.length;
    const totalTasks = todoLength + doneLength;
    const newTaskId = "T" + (totalTasks + 1);
    const newTask = {
      id: newTaskId,
      description: this.state.description,
      duration: parseInt(this.state.duration),
      priority: 1,
    };
    this.props.addTask(newTask);
    this.setState({
      description: "",
      duration: 10,
    });
  }

  render() {
    return (
      <div className="addTask">
        <input
          type="text"
          id="description"
          placeholder="description"
          value={this.state.description}
          onChange={(event) =>
            this.setState({ description: event.target.value })
          }
        />
        <input
          type="number"
          id="duration"
          min="0"
          value={this.state.duration}
          onChange={(event) => this.setState({ duration: event.target.value })}
        />
        mn
        <button onClick={this.clickHandler}>add</button>
      </div>
    );
  }
}
