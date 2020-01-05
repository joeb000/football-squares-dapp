import React, { Component } from "react";
import { MyWeb3Consumer } from "../../Web3Context"

class Tapper extends Component {

  submitTransaction = async () => {
    this.props.faucetContract.methods.tap().send({ from: window.ethereum.selectedAddress });
    this.props.tokenContract.methods.approve(this.props.squaresContract._address, 10000000).send({ from: window.ethereum.selectedAddress });
  };

  render() {
    return (
      <div className="tap-button-div">
        <button onClick={() => this.submitTransaction()}>
          TAP IT
        </button>
      </div>
    );
  }
}


const Faucet = (props) => (
  <MyWeb3Consumer>
    {({ loaded, faucetContract, tokenContract, squaresContract }) => {
      if (!loaded) {
        return (<div>Loading contracts from Context</div>)
      }
      return (
        <div className="faucet-page">
          <section className="section-padding">
          <h1>Football Token Faucet</h1>
          <div>Welcome to the "Football Token" Faucet, Football token is an ERC20 token which is the default token for paying for squares. Tap this faucet to get 1000 football token.</div>
          <Tapper faucetContract={faucetContract} tokenContract={tokenContract} squaresContract={squaresContract}/>
          </section>
        </div>
      )
    }}
  </MyWeb3Consumer>
);

export default Faucet;