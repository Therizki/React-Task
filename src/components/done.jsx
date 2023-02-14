import React from "react";
import DoneTask from "./doneTask.jsx";

import "../assets/style/tasklist.css";
import "../style/style.css";

export default class Done extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plus: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      plus: !prevState.plus,
    }));
  }
  render() {
    const operatorSymbol = this.state.plus
      ? "+(" + this.props.done.length + ")"
      : "-";
    return (
      <div className="tasklist">
        <span>Tâches terminées</span>
        <button onClick={this.handleClick}>{operatorSymbol} </button>
        {this.state.plus
          ? ""
          : this.props.done.map((task) => <DoneTask key={task.id} {...task} />)}
      </div>
    );
  }
}
