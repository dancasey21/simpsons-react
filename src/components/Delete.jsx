import React, { Component } from "react";
import SimpsonsItem from "./SimpsonsItem";

class Delete extends Component {
  render() {
    return this.props.simpsons.map((item, index) => {
      return (
        <SimpsonsItem
          {...item}
          onLike={this.props.onLike}
          onDeleteItem={this.props.onDeleteItem}
          index={index}
        />
      );
    });
  }
}

export default Delete;
