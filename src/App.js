import React, { Component } from "react";
import axios from "axios";
import Simpsons from "./components/Simpsons";

class App extends Component {
  state = {};

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

  render() {
    console.log(this.state);

    if (!this.state.simpsons) {
      return <p>Loading....</p>;
    }
    return (
      <Simpsons
        simpsons={this.state.simpsons}
        onDeleteItem={this.onDeleteItem}
      />
    );
  }
}

export default App;
