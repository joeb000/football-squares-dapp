import React from 'react';
import Board from '../Board'
  
 export default class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sqVals: []
      };
      this.checkBalance()
    }
  
    handleClick(i) {
     
    }

    checkBalance = async () => {
      console.log(this.props.gid)
      console.log(this.props.footballContract)
      const response = await this.props.token.methods.balanceOf(this.props.accounts[0]).call();
      console.log(response)
      const cols = await this.props.footballContract.methods.getGameColumns(this.props.gid).call();
      console.log(cols)
      const rows = await this.props.footballContract.methods.getGameRows(this.props.gid).call();
      console.log(rows)

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
  