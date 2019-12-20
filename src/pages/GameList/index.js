import Events from '../../components/Events';
import React from "react";
import { MyWeb3Consumer } from '../../Web3Context';

const Dapp = (props) => (
  <MyWeb3Consumer>
    {({ loaded, tokenContract, squaresContract }) => {
      if (!loaded) {
        return (<div>Loading contracts from Context</div>)
      }
      return (
        <div className="App">
          <h1>Football Squares Active Games</h1>
          <div>
            <Events />
          </div>
        </div>
      )
    }}
  </MyWeb3Consumer>
);

export default Dapp;
