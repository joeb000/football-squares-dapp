import './App.css';
import Game from './components/Game';
import getWeb3 from "./getWeb3";

import React, { Component } from "react";
import TokenContract from "./contracts/local/FootballToken.json";
import FootballContract from "./contracts/local/Football.json";


class Dapp extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      console.log(networkId)
      const deployedNetwork = TokenContract.networks['5777'];
      const instance = new web3.eth.Contract(
        TokenContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      const fbdeployedNetwork = FootballContract.networks['5777'];

      const footballContract = new web3.eth.Contract(
        FootballContract.abi,
        fbdeployedNetwork && fbdeployedNetwork.address,
      );

      const gameId = '0x642a12a804ba73b46993bc72264d1cee70c8a834d890795ee716a1f5826b87ac'
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance, footballContract, gameId}, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;
    console.log(accounts)
    // Stores a given value, 5 by default.
    //await contract.methods.mint(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.balanceOf('0x342fe81f80ad854a3aa3c1dc2937999a49d9a8bd').call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    if (!this.state.contract || !this.state.footballContract) {
      return <div>No contract...</div>;
    }
    return (
      <div className="App">
        <h1>Football Squares Dapp!</h1>
        <div>The stored value is: {this.state.storageValue}</div>
        <Game token={this.state.contract} footballContract={this.state.footballContract} gid={this.state.gameId} accounts={this.state.accounts}/>
      </div>
    );
  }
}

export default Dapp;
