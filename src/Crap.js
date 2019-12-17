import './App.css';
import Game from './components/Game';

import React from "react";

import { MyWeb3Consumer } from './Web3Context';


const IsLoaded = ({ tokenContract, squaresContract }) => {
  console.log(tokenContract)
  if (!tokenContract || !squaresContract) {
    return (
      <div>Still waiting</div>
    )
  }
  return (
    <div className="App">
      <h1>Football Squares Dapp context!</h1>
      <Game token={tokenContract} footballContract={squaresContract} gid={"0x642a12a804ba73b46993bc72264d1cee70c8a834d890795ee716a1f5826b87ac"} />
    </div>
  )
};


const Crap = (props) => (
  <MyWeb3Consumer>
    {({ loaded, tokenContract, squaresContract }) => (
      <div className="App">
        <h1>Football Squares Dapp context!</h1>
        <div>
          {loaded && tokenContract && squaresContract ? <Game token={tokenContract} footballContract={squaresContract} gid={props.gid} /> : <div>M</div>}
        </div>
      </div>


    )}
  </MyWeb3Consumer>
);



export default Crap;
