import React, { Component } from "react";
import axios from "axios";
import Delete from "./Delete";

class Interface extends Component {
  state = { simpsons: [] };

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    this.setState({ simpsons: data });
  };

  onDeleteItem = (id) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.id === id);
    simpsons.splice(index, 1);
    this.setState({ simpsons });
  };

  onLike = (id) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.id === id);
    simpsons[index].like = !simpsons[index].like;
    this.setState({ simpsons });
  };

  onSort = (e) => {
    this.setState({ sortSelection: e.target.value });
  };

  render() {
    const { userInput } = this.props;
    const filteredData = this.state.simpsons.filter((item) => {
      return item.character
        .toLowerCase()
        .includes(userInput ? userInput.toLowerCase() : "");
    });

    const { simpsons } = this.state;
    let totalLikes = 0;
    simpsons.forEach((item) => {
      if (!item.like) {
        totalLikes++;
      }
    });

    console.log(filteredData);
    console.log(userInput);
    if (!this.state.simpsons) {
      return <p>Loading....</p>;
    }
    return (
      <>
        <Delete
          simpsons={filteredData}
          onDeleteItem={this.onDeleteItem}
          onLike={this.onLike}
          userInput={this.userInput}
          totalLikes={totalLikes}
        />
      </>
    );
  }
}

export default Interface;
