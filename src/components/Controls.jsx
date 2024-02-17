import React, { Component } from "react";

class Controls extends Component {
  render() {
    const { onSort } = this.props;
    return (
      <div>
        <select onChange={onSort}>
          <option value="Name:A-Z">A-Z</option>
          <option value="Name:Z-A">Z-A</option>
        </select>
      </div>
    );
  }
}

export default Controls;
