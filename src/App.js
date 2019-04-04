import React, { Component } from "react";
import Movie from "./components/movies";
import Navbar from "./components/navigation";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <Movie />
      </div>
    );
  }
}

export default App;
