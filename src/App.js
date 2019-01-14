import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [4, 3, 2, 1],
      b: [],
      c: [],
      activeBlock: null
    };
  }

  movePiece = stack => {
    let currentStack = "";
    if (stack === "a") {
      currentStack = this.state.a;
    }
    if (stack === "b") {
      currentStack = this.state.b;
    }
    if (stack === "c") {
      currentStack = this.state.c;
    }
    // grabbing the last item in the array/stack
    // console.log(currentStack.slice(currentStack.length - 1).join(""));
    console.log("activeBlock " + this.state.activeBlock);

    if (!this.state.activeBlock) {
      let lastPiece = parseInt(
        currentStack.slice(currentStack.length - 1).join("")
      );
      this.setState({
        activeBlock: lastPiece
      });
      let newStack = currentStack.filter(num => {
        console.log(num + " num", lastPiece + " lastPiece");

        return num !== lastPiece;
      });
      if (stack === "a") {
        this.setState({ a: newStack });
      }
      if (stack === "b") {
        this.setState({ b: newStack });
      }
      if (stack === "c") {
        this.setState({ c: newStack });
      }
      console.log(newStack + " newStack");
    } else {
      console.log(this.state.activeBlock + " activeBlock");
      console.log(currentStack);
      currentStack.push(this.state.activeBlock);
      if (stack === "a") {
        this.setState({ a: currentStack });
      }
      if (stack === "b") {
        this.setState({ b: currentStack });
      }
      if (stack === "c") {
        this.setState({ c: currentStack });
      }
      this.setState({
        activeBlock: 0
      });
      console.log(currentStack);
    }
  };

  render() {
    return (
      <div>
        <div key={"a"} data-stack="a" onClick={() => this.movePiece("a")}>
          {this.state.a.map(num => {
            return <div key={num * 25} data-block={num * 25} />;
          })}
        </div>
        <div key={"b"} data-stack="b" onClick={() => this.movePiece("b")}>
          {this.state.b.map(num => {
            return <div key={num * 25} data-block={num * 25} />;
          })}
        </div>
        <div key={"c"} data-stack="c" onClick={() => this.movePiece("c")}>
          {this.state.c.map(num => {
            return <div key={num * 25} data-block={num * 25} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
