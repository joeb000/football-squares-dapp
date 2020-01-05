import Game from '../../components/Game';
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
          <section className="section-padding">
          <h1>Football Squares Dapp context!</h1>
          <div>
            <Game tokenContract={tokenContract} footballContract={squaresContract} gid={props.gid} /> 
          </div>
          </section>
        </div>
      )
    }}
  </MyWeb3Consumer>
);

export default Dapp;
