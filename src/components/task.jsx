import React from "react";

import "../assets/style/task.css";
import "../assets/style/doneButton.css";
import PriorityScale from "./priorityScale.jsx";
import DoneButton from "./doneButton.jsx";

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.priorityLevelChanged = this.priorityLevelChanged.bind(this);
  }

  priorityLevelChanged(value) {
    this.props.taskPriorityChange(value, this.props.id);
  }
  render() {
    return (
      <div className="task">
        <div className="info">
          {this.props.description}({this.props.duration}min)
        </div>
        <PriorityScale
          nbLevels={6}
          level={this.props.priority}
          priorityLevelChanged={this.priorityLevelChanged}
        />
        <DoneButton taskDone={this.props.taskDone} taskId={this.props.id} />
      </div>
    );
  }
}
