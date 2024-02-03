import React, { Component } from "react";
import SimpsonsItem from "./SimpsonsItem";

class Simpsons extends Component {
  render() {
    return this.props.simpsons.map((item, index) => {
      return (
        <SimpsonsItem
          {...item}
          onDeleteItem={this.props.onDeleteItem}
          index={index}
        />
      );
    });
  }
}

export default Simpsons;
