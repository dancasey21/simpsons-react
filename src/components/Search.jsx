import React, { Component } from "react";

class Search extends Component {
  render() {
    const { onUserInput } = this.props;

    return (
      <div className="search">
        <input
          onInput={onUserInput}
          type="text"
          id="search"
          name="search"
          placeholder="Search Character"
        />
      </div>
    );
  }
}

export default Search;
