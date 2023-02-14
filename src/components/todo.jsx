import React from "react";

import "../assets/style/tasklist.css";
import Task from "./task.jsx";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    };
    this.findTask = this.findTask.bind(this);
  }

  findTask(str) {
    const copyTodo = [...this.props.todo];
    const tasksFounded = copyTodo.filter((task) =>
      task.description.includes(str)
    );
    return tasksFounded;
  }

  render() {
    const totalDuration = this.props.todo.reduce(
      (acc, task) => acc + task.duration,
      0
    );
    const tasksFoundedList = this.findTask(this.state.filter);
    return (
      <div className="tasklist">
        <h3>Tâches en cours</h3>
        <input
          type="text"
          id="filter"
          placeholder="filter"
          value={this.state.filter}
          onChange={(event) => this.setState({ filter: event.target.value })}
        />
        <p>
          Il ya {this.props.todo.length} tâches en cours. Pour une durée en{" "}
          {totalDuration} min
        </p>
        {tasksFoundedList
          .sort((a, b) => (a.priority > b.priority ? -1 : 1))
          .map((task) => (
            <Task
              key={task.id}
              {...task}
              taskDone={this.props.taskDone}
              taskPriorityChange={this.props.taskPriorityChange}
            />
          ))}
      </div>
    );
  }
}
