import React, { Component } from "react";
import Interface from "./components/Interface";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = { userInput: "" };

  onUserInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <>
        <header>
          <Header onUserInput={this.onUserInput} totalLikes={this.totalLikes} />
        </header>
        <main>
          <Interface userInput={this.state.userInput} />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
