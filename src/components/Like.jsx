import React, { Component } from "react";

class Like extends Component {
  render() {
    const { item, id, onLike } = this.props;

    return (
      <div key={id} className={item ? "unlike" : "like"}>
        <button onClick={() => onLike(id)}>Like</button>
      </div>
    );
  }
}

export default Like;
