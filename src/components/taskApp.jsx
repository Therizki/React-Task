import React from "react";
import AddTask from "./addTask.jsx";
import Done from "./done.jsx";
import Todo from "./todo.jsx";
import "../assets/style/taskApp.css";
import tasks from "../data/tasksData";

/*
 define root component
*/
export default class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: [],
      todo: [],
    };
    this.taskPriorityChange = this.taskPriorityChange.bind(this);
    this.taskDone = this.taskDone.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  componentDidMount() {
    const tasksWithPriority = tasks.map((task) => {
      return { ...task, priority: 1 };
    });
    this.setState({
      todo: tasksWithPriority,
    });
  }

  taskPriorityChange(value, id) {
    const copyTodo = [...this.state.todo];
    const updatedTask = copyTodo.filter((task) => id === task.id);
    updatedTask[0].priority = value;
    this.setState({
      todo: copyTodo,
    });
  }

  taskDone(id) {
    const copyTodo = [...this.state.todo];
    const taskFinished = copyTodo.filter((task) => id === task.id);
    const updatedTasks = copyTodo.filter((task) => id !== task.id);
    const doneUpdated = [...this.state.done, ...taskFinished];
    this.setState({
      done: doneUpdated,
      todo: updatedTasks,
    });
  }

  addTask(newTask) {
    const copyTodo = [...this.state.todo];
    const updatedTodo = [...copyTodo, newTask];
    this.setState({
      todo: updatedTodo,
    });
  }

  render() {
    return (
      <div className="taskApp">
        <AddTask
          addTask={this.addTask}
          done={this.state.done}
          todo={this.state.todo}
        />
        <Todo
          todo={this.state.todo}
          taskPriorityChange={this.taskPriorityChange}
          taskDone={this.taskDone}
        />
        <Done done={this.state.done} />
      </div>
    );
  }
}
