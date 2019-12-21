import React from 'react';
import "./index.css"

export default class OwnerPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.submitTransaction = this.submitTransaction.bind(this);
    }

    submitTransaction = async () => {
        const gameId = this.props.gid
        this.props.squaresContract.methods.shuffleGame(gameId).send({ from: window.ethereum.selectedAddress });
    };

  render() {
    const showHideClassName = this.props.show ? 'ownerPanel' : 'ownerPanel hide';
    return (
      <div className={showHideClassName}>
        <button onClick={this.submitTransaction}>
          Set Rows
        </button>
        <WinnerForm gid={this.props.gid} squaresContract={this.props.squaresContract} selectedSquare={this.props.selectedSquare}/>
    </div>
    );
  }
}


class WinnerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.submitTransaction()
    }

    submitTransaction = async () => {
        const gameId = this.props.gid
        this.props.squaresContract.methods.setWinner(gameId, this.state.winner).send({ from: window.ethereum.selectedAddress });
    };
    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Winning Square:
            <input name="winner" value={this.props.selectedSquare} type="number" onChange={this.handleChange} />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
