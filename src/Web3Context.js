import React, { Component } from "react";
import getWeb3 from "./getWeb3";
import TokenContract from "./contracts/rinkeby/FootballToken.json";
import FootballContract from "./contracts/rinkeby/Football.json";

const Context = React.createContext();


export class MyWeb3Provider extends Component {
  constructor(props) {
    console.log("CONSTRUCT")
    super(props);
    this.state = {
      loaded: false,
      gameList: []
    }
  }
  
  setLoaded() {
    this.setState({
      loaded: true
    })
  }

  addGameToList(gameEvent) {
    //let game = event.returned
    this.setState({
      games: gameEvent
    })
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
      const deployedNetwork = TokenContract.networks['4'];
      const tokenContract = new web3.eth.Contract(
        TokenContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      const fbdeployedNetwork = FootballContract.networks['4'];

      const squaresContract = new web3.eth.Contract(
        FootballContract.abi,
        fbdeployedNetwork && fbdeployedNetwork.address,
      );

      console.log(this.state)

      squaresContract.events.GameCreated({
        fromBlock: 0
      }, (error, event) => {
        console.log(event)
        console.log(this.state)

        let {gameId, owner, token, metadata} = event.returnValues
        let g = {gameId, owner, token, metadata}
        console.log(gameId)
        
        this.setState({ gameList: [...this.state.gameList, g] }) //simple value

      })

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