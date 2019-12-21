import React from 'react';
import "./index.css"

export default class WinnerPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.submitTransaction = this.submitTransaction.bind(this);
    }

    submitTransaction = async () => {
        const gameId = this.props.gid
        this.props.squaresContract.methods.claimReward(gameId).send({ from: window.ethereum.selectedAddress });
    };

  render() {
    const showHideClassName = this.props.show ? 'winnerPanel' : 'winnerPanel hide';
    return (
      <div className={showHideClassName}>
          <span>Good job, you won!</span>
        <button onClick={this.submitTransaction}>
          Claim Winnings
        </button>
    </div>
    );
  }
}
