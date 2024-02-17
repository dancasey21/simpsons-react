import React, { Component } from "react";
import Search from "./Search";

class Header extends Component {
  state = {};

  render() {
    const { totalLikes, onUserInput } = this.props;
    return (
      <div>
        <h1 className="header">The Simpsons</h1>
        <Search onUserInput={onUserInput} />
        <h3>Total Like: {totalLikes}</h3>
      </div>
    );
  }
}

export default Header;
