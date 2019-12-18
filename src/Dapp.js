import './App.css';
import Game from './components/Game';

import React from "react";

import { MyWeb3Consumer } from './Web3Context';


const Dapp = (props) => (
  <MyWeb3Consumer>
    {({ loaded, tokenContract, squaresContract }) => {
      if (!loaded) {
        return (<div>Loading contracts from Context</div>)
      }
      console.log(loaded, tokenContract)
      return (
        <div className="App">
          <h1>Football Squares Dapp context!</h1>
          <div>
            <Game token={tokenContract} footballContract={squaresContract} gid={props.gid} />
          </div>
        </div>
      )
    }}
  </MyWeb3Consumer>
);



export default Dapp;
