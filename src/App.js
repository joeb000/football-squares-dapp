import React from 'react';
import Header from './components/Header';

import './App.css';
import { Router } from "@reach/router"
import Home from "./pages/Home"
import Dapp from "./Dapp"
import CreateGame from "./pages/CreateGame"
import { MyWeb3Provider } from "./Web3Context"
function App() {
  return (
    <div>
      <MyWeb3Provider>
        <Header />
        <Router>
          <Home path="/" />
          <Dapp path="game/:gid" />
          <CreateGame path="/create" />
        </Router>
      </MyWeb3Provider>
    </div>

  );
}

export default App;