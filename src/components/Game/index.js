import React from 'react';
import Board from '../Board'
import Modal from '../SquareClickModal'
import "./index.css"

export default class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameData: null,
      sqVals: [],
      show: false
    };
    this.checkBalance()
  }

  handleClick(i) {
    console.log(i)
    this.showModal(i)
  }

  submitTransaction = async () => {
    this.props.footballContract.methods.pickSquareValue(this.props.gid, this.state.clickedSquare).send({ from: window.ethereum.selectedAddress });
  };

  showModal = (i) => {
    console.log("showing modal")
    this.setState({ show: true, clickedSquare: i });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  checkBalance = async () => {
    //const response = await this.contextType.token.methods.balanceOf(this.props.accounts[0]).call();
    const cols = await this.props.footballContract.methods.getGameColumns(this.props.gid).call();
    //console.log(cols)
    const rows = await this.props.footballContract.methods.getGameRows(this.props.gid).call();
    //console.log(rows)

    const data = await this.props.footballContract.methods.games(this.props.gid).call();
    console.log("data", data)


    this.setState({
      gameData: data
    })

    const a = await this.props.footballContract.methods.getGameSquareValues(this.props.gid).call();
    this.setState({
      columns: cols,
      rows,
      sqVals:a
    });
  }

  render() {
    return (
      <div className="game">
        <GameMeta gameData={this.state.gameData} />
        <div className="game-board">
          <Modal name="square-modal" show={this.state.show} handleClose={this.hideModal}>
            <span>LOL</span>
            <button onClick={x => this.submitTransaction(x)}>
              Submit
            </button>
          </Modal>
          <Board
            contract={this.props.footballContract}
            gid={this.props.gid}
            columnLabels={this.state.columns}
            rowLabels={this.state.rows}
            squares={this.state.sqVals}
            onClick={i => this.handleClick(i)}
          />
        </div>
      </div>
    );
  }
}

function GameMeta(props) {
  if (props.gameData) {
    return (
      <div className="game-meta">
        <label>Name (meta):</label>{props.gameData.meta}
        <br></br>
        <label>Owner:</label>{props.gameData.owner}
        <br></br>
        <label>Token:</label>{props.gameData.erc20RewardToken}
        <br></br>
        <label>Price per square:</label>{props.gameData.squarePrice}
        <br></br>
        <label>Total tokens in pot:</label>{props.gameData.totalPot}
      </div>
    );
  }
  return (
    <div className="game-meta">
      Loading meta properties...
          </div>
  );
}
