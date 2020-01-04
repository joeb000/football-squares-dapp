import React from 'react';
import "./index.css"
import ProfileCard from "../ProfileCard"

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      <ProfileCard address={props.value} />
    </button>
  );
}

function SquareLabel(props) {
  return (
      <button className="square-label">
        {props.value}
      </button>
  );
}

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squareGrid: []
    };
  }
  componentDidUpdate = async () => {
    if (this.props.columnLabels && this.props.rowLabels && this.state.squareGrid.length === 0) {
      this.createSquareGrid()
    }
  }

  createSquareGrid() {
    let arr = []
    arr.push(["X", "label"])
    this.props.columnLabels.forEach(l => {
      arr.push([l, "label"])
    });
    let rowlabelI = 0
    for (let i = 0; i < 100; i++) {
      if (i % 10 === 0) {
        arr.push([this.props.rowLabels[rowlabelI], "label"])
        rowlabelI++;
      }
      arr.push([i, "normal"])
    }
    this.setState({ squareGrid: arr })
  }

  renderSquare(n, type, uniqueI) {

    if (type === "label") {
      return (
        <SquareLabel
          key={uniqueI.toString()}
          value={n}
        />
      );
    }

    //get the value in the Football contract
    //let x = 10 * c + r
    let addr = this.props.squares[n]

    // if (addr && /^0x[a-fA-F0-9]{40}$/.test(addr)) {
    //   addr = addr.slice(0, 4) + ".." + addr.slice(38)
    // }
    return (
      <Square
        key={uniqueI.toString()}
        value={addr}
        onClick={() => this.props.onClick(n)}
      />
    );
  }


  render() {
    if (this.state.squareGrid.length === 0) {
      return (
        <div className="square-grid">Loading the board, wait a few seconds...</div>
      )
    }
    return (
      <div className="square-grid">
        {this.state.squareGrid.map((v, idx) => {
          if (v) {
            return (
              this.renderSquare(v[0], v[1], idx)
            )
          } else return null

        })}
      </div>
    );
  }
}