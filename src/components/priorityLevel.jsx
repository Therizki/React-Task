import React from "react";

import "../assets/style/priorityLevel.css";

export default class PriorityLevel extends React.Component {
  constructor(props) {
    super(props);
    this.clickHundler = this.clickHundler.bind(this);
  }

  clickHundler() {
    this.props.priorityLevelChanged(this.props.value);
  }

  isOnHandler() {
    const level = this.props.level;
    const value = this.props.value;
    return value <= level ? "on" : "off";
  }

  render() {
    return (
      <div
        className={"level " + this.isOnHandler()}
        onClick={this.clickHundler}
      ></div>
    );
  }
}
