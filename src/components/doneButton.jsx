import React from "react";

import "../assets/style/doneButton.css";
import doneImg from "../assets/images/done__img.png";

export default class DoneButton extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.taskDone(this.props.taskId);
  }
  render() {
    return (
      <div className="doneButton" onClick={this.clickHandler}>
        <img src={doneImg} alt="" style={{ width: "15px" }} />
      </div>
    );
  }
}
