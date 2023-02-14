import React from "react";

import "../assets/style/tasklist.css";

export default class DoneTask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="task">
        {this.props.description}({this.props.duration}min) (priority:
        {this.props.priority})
      </div>
    );
  }
}
