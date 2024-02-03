import React, { Component } from "react";

class SimpsonsItem extends Component {
  render() {
    const { id, character, characterDirection, image, quote, onDeleteItem } =
      this.props;

    return (
      <div key={id}>
        <h1>{character}</h1>
        <img src={image} alt={character} />
        <p>{quote}</p>
        <button onClick={() => onDeleteItem(id)}>Delete</button>
      </div>
    );
  }
}

export default SimpsonsItem;
