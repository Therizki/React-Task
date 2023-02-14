import React from "react";
import PriorityLevel from "./priorityLevel.jsx";

// import "../assets/style/";

export default class PriorityScale extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="scale">
        <PriorityLevel
          key="1"
          value={1}
          priorityLevelChanged={this.props.priorityLevelChanged}
          isOnHandler={this.isOnHandler}
          level={this.props.level}
        />
        <PriorityLevel
          key="2"
          value={2}
          priorityLevelChanged={this.props.priorityLevelChanged}
          isOnHandler={this.isOnHandler}
          level={this.props.level}
        />
        <PriorityLevel
          key="3"
          value={3}
          priorityLevelChanged={this.props.priorityLevelChanged}
          isOnHandler={this.isOnHandler}
          level={this.props.level}
        />
        <PriorityLevel
          key="4"
          value={4}
          priorityLevelChanged={this.props.priorityLevelChanged}
          isOnHandler={this.isOnHandler}
          level={this.props.level}
        />
        <PriorityLevel
          key="5"
          value={5}
          priorityLevelChanged={this.props.priorityLevelChanged}
          isOnHandler={this.isOnHandler}
          level={this.props.level}
        />
        <PriorityLevel
          key="6"
          value={6}
          priorityLevelChanged={this.props.priorityLevelChanged}
          isOnHandler={this.isOnHandler}
          level={this.props.level}
        />
        ({this.props.level})
      </div>
    );
  }
}
