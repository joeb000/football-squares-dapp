import React from 'react';
import Board from '../Board'
import Modal from '../SquareClickModal'
import "./index.css"
import OwnerPanel from '../OwnerPanel';
import WinnerPanel from '../WinnerPanel';

export default class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameData: null,
      sqVals: [],
      show: false,
      showWinnerPanel: false
    };
    this.handleClick = this.handleClick.bind(this);

  }

  async componentDidMount() {
    this.checkBalance()
  }

  handleClick(i) {
    console.log(i)
    if (i === 0) {
      this.checkBalance()
    } else {
      this.showModal(i)
    }
  }

  submitTransaction = async () => {
    let allowed = await this.props.tokenContract.methods.allowance(window.ethereum.selectedAddress, this.props.footballContract.options.address).call();
    if (parseInt(allowed) < parseInt(this.state.gameData.squarePrice)) {
      this.props.tokenContract.methods.approve(this.props.footballContract.options.address, this.state.gameData.squarePrice).send({ from: window.ethereum.selectedAddress });
    }
    this.props.footballContract.methods.pickSquareValue(this.props.gid, this.state.clickedSquare).send({ from: window.ethereum.selectedAddress });
  };

  showModal = (i) => {
    this.setState({ show: true, clickedSquare: i });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  showOwner = () => {
    this.setState({ showOwnerPanel: true });
  };

  showWinner = () => {
    this.setState({ showWinnerPanel: true });
  };

  checkBalance = async () => {
    console.log('balancecheck')
    //const response = await this.contextType.token.methods.balanceOf(this.props.accounts[0]).call();
    const cols = await this.props.footballContract.methods.getGameColumns(this.props.gid).call();
    //console.log(cols)
    const rows = await this.props.footballContract.methods.getGameRows(this.props.gid).call();
    //console.log(rows)

    const data = await this.props.footballContract.methods.games(this.props.gid).call();

    if (data.owner.toLowerCase() === window.ethereum.selectedAddress.toLowerCase()) {
      this.showOwner()
    }


    const winnerAddress = await this.props.footballContract.methods.getSquareValue(this.props.gid, parseInt(data.winningSquareNumber)).call()


    if (winnerAddress.toLowerCase() === window.ethereum.selectedAddress.toLowerCase()) {
      this.showWinner()
    }
    this.setState({
      gameData: data
    })

    const a = await this.props.footballContract.methods.getGameSquareValues(this.props.gid).call();
    this.setState({
      columns: cols,
      rows,
      sqVals: a
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
          <WinnerPanel
            squaresContract={this.props.footballContract}
            gid={this.props.gid}
            seletedSquare={-1}
            show={this.state.showWinnerPanel} />
          <Board
            contract={this.props.footballContract}
            gid={this.props.gid}
            columnLabels={this.state.columns}
            rowLabels={this.state.rows}
            squares={this.state.sqVals}
            onClick={i => this.handleClick(i)}
          />
          <OwnerPanel
            squaresContract={this.props.footballContract}
            gid={this.props.gid}
            seletedSquare={-1}
            show={this.state.showOwnerPanel} />
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
        <br></br>
        <label>Phase: </label>{props.gameData.phase}
      </div>
    );
  }
  return (
    <div className="game-meta">
      <span>Loading meta properties...</span>
    </div>
  );
}
