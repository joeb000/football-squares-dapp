import React from 'react';
import Board from '../Board'

 export default class Game extends React.Component {

    constructor(props) {
      
      super(props);
      this.state = {
        gameData: null,
        sqVals: []
      };
      this.checkBalance()
    }
  
    handleClick(i) {
     
    }

    checkBalance = async () => {

      //console.log(this.props.gid)
      //console.log(this.props.footballContract)
      ///console.log("stz", this.contextType)

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


      let sqVals = []
      for (let i = 0; i < 100; i++) {
        const a = await this.props.footballContract.methods.getSquareValue(this.props.gid, i).call();
        sqVals.push(a)
      }


      this.setState({
        columns: cols,
        rows,
        sqVals
      });
    }
  
    render() {
      return (
        <div className="game">
          <GameMeta gameData={this.state.gameData}/>
          <div className="game-board">
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
  