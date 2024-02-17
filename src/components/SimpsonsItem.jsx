import React, { Component } from "react";
import Like from "./Like";

class SimpsonsItem extends Component {
  render() {
    const {
      id,
      character,
      characterDirection,
      image,
      quote,
      onDeleteItem,
      onLike,
      item,
    } = this.props;

    return (
      <>
        <div key={id}>
          <div>
            <h1>{character}</h1>
          </div>
          <div>
            <img src={image} alt={character} />
          </div>
          <div>
            <p>{quote}</p>
          </div>
          <div>
            <button onClick={() => onDeleteItem(id)}>Delete</button>
          </div>
          <div>
            <Like item={item} onLike={onLike} />
          </div>
        </div>
      </>
    );
  }
}

export default SimpsonsItem;
