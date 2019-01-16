import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [4, 3, 2, 1],
      b: [],
      c: [],
      activeBlock: null,
      myText: "Towers of Hanoi",
      counter: 0
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
    // win logic should stop anything below from running by just returning
    if (this.winLogic()) {
      return;
    }
    // grabs the active block and displays
    if (this.blockSelect()) {
      return;
    }

    if (!this.state.activeBlock) {
      let lastPiece = parseInt(currentStack.slice(currentStack.length - 1));
      this.setState({
        activeBlock: lastPiece
      });
      // source stack
      const newStack = currentStack.filter(num => {
        console.log(num + " num", lastPiece + " lastPiece");

        return num !== lastPiece;
      });
      if (stack === "a") {
        this.setState({ a: newStack });
        // counter to display number of moves
        this.setState({ counter: this.state.counter + 1 });
      }
      if (stack === "b") {
        this.setState({ b: newStack });
        // counter to display number of moves
        this.setState({ counter: this.state.counter + 1 });
      }
      if (stack === "c") {
        this.setState({ c: newStack });
        // counter to display number of moves
        this.setState({ counter: this.state.counter + 1 });
      }
      console.log(newStack + " newStack");
    } else {
      // dropping piece destination stack
      console.log(this.state.activeBlock + " activeBlock");
      console.log(currentStack);
      if (this.moveLogic(this.state.activeBlock, currentStack) === true) {
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
      }
      console.log(currentStack);
      // if win logic is detected "you win!!!" is displayed in place of game title and gameplay stops
      if (this.winLogic()) {
        this.setState({ myText: "You Win!!!" });
      }
    }
  };

  moveLogic = (block, endStack) => {
    console.log(`${block} moveLogic block`);
    if (endStack.length === 0) {
      console.log(endStack + " endStack");
      return true;
    } else {
      let bottomBlock = endStack[endStack.length - 1];
      console.log("​App -> moveLogic -> bottomBlock", bottomBlock);
      if (block < bottomBlock) {
        return true;
      }
    }
  };

  winLogic = () => (this.state.c.length === 4 ? true : false);
  // because of the functionality of the game (click on stack, top block goes into memory) once a block is clicked, there is no indication of what block you are currently holding - to fix this I took the active block grab the and display it in a small window below the board -
  blockSelect = () => {
    // Active Block
    if (this.state.activeBlock) {
      return;
    }
  };

  // reset game state
  resetGame = () =>
    this.setState({
      a: [4, 3, 2, 1],
      b: [],
      c: [],
      activeBlock: null,
      myText: "Towers of Hanoi",
      counter: 0
    });

  render() {
    return (
      <div className="pageContainer">
        {this.state.myText}
        <div className="dataStackContainer">
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
        <div className="dataDisplay">
          <div className="counterDisplay">
            {this.state.counter} {" Moves"}
            <div />
          </div>
          <div className="blockSelect">
            {"Active Block "}
            <div data-block={this.state.activeBlock * 25} />
            <div />
          </div>

          <button className="resetButton" onClick={() => this.resetGame()}>
            RESET
          </button>
        </div>
      </div>
    );
  }
}

export default App;
