import React, { Component } from "react";
import getWeb3 from "./getWeb3";
import TokenContract from "./contracts/local/FootballToken.json";
import FootballContract from "./contracts/local/Football.json";

const Context = React.createContext();


export class MyWeb3Provider extends Component {
  state = {
    loaded: false
  }
  async componentDidMount() {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();

      console.log("networkId", typeof networkId, networkId)
      const deployedNetwork = TokenContract.networks['5777'];
      const tokenContract = new web3.eth.Contract(
        TokenContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      const fbdeployedNetwork = FootballContract.networks['5777'];

      const squaresContract = new web3.eth.Contract(
        FootballContract.abi,
        fbdeployedNetwork && fbdeployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      console.log("set ctx state", this.state.loaded)
      this.setState({ web3, accounts, squaresContract, tokenContract }, this.setLoaded);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }

  }

  setLoaded() {
    this.setState({
      loaded: true
    })
  }


  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }

}

export const MyWeb3Consumer = Context.Consumer;

export default Context