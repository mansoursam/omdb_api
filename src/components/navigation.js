import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1>
          <span className="text-danger">O</span>MDb API{" "}
          <i className="fas fa-film text-danger fa-2x" />
        </h1>
      </nav>
    );
  }
}
export default Navbar;
