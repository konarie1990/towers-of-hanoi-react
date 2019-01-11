import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div data-stack="1">
          <div data-block="100" />
          <div data-block="75" />
          <div data-block="50" />
          <div data-block="25" />
        </div>
        <div data-stack="2" />
        <div data-stack="3" />
      </div>
    );
  }
}

export default App;
