import React, { Component } from "react";

class Tapper extends Component {

  constructor(props) {
    super(props);
  }

  submitTransaction = async () => {
    console.log("tap")
    this.props.faucetContract.methods.tap().send({ from: window.ethereum.selectedAddress });
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
    {({ loaded, faucetContract }) => {
      if (!loaded) {
        return (<div>Loading contracts from Context</div>)
      }
      return (
        <div className="faucet-page">
          <h1>Football Token Faucet</h1>
          <div>Welcome to the "Football Token" Faucet, Football token is an ERC20 token which is the default token for paying for squares. Tap this faucet to get 1000 football token.</div>
          <Tapper faucetContract={faucetContract} />
        </div>
      )
    }}
  </MyWeb3Consumer>
);

export default Faucet;