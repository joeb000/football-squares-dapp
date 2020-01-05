import React, { Component } from "react";
import { MyWeb3Consumer } from "../../Web3Context"

class ReadBalance extends Component {

  constructor(props) {
    super(props);
    this.state = {
        balance: -1
    }
    this.getBalance()
  }

  getBalance = async () => {
    let b = await this.props.tokenContract.methods.balanceOf(window.ethereum.selectedAddress).call();
    this.setState({balance: b})
  };

  render() {
    if (this.state.balance===-1) {
        return (<div></div>)
    }
    return (
        <div className="balance-div" onClick={this.props.onClick}>balance: {this.state.balance}</div>
    );
  }
}


const Balance = (props) => (
  <MyWeb3Consumer>
    {({ refresh, loaded, tokenContract }) => {
      if (!loaded) {
        return (<div></div>)
      }
      return (
       
          <ReadBalance tokenContract={tokenContract} onClick={refresh}/>

      )
    }}
  </MyWeb3Consumer>
);

export default Balance;