import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TempSpace from './misc/TempSpace';

import './App.css';
import { Router } from "@reach/router"
import Home from "./pages/Home"
import Faucet from "./pages/Faucet"
import GamePage from "./pages/GamePage"
import GameList from "./pages/GameList"
import CreateGame from "./pages/CreateGame"
import Scratch from "./pages/Scratch"

import { MyWeb3Provider } from "./Web3Context"
function App() {
  return (
    <div className="app-class">
      <MyWeb3Provider>
        <Header />
        <TempSpace  />
        <Router>
          <Home path="/" />
          <GamePage path="game/:gid" />
          <CreateGame path="/create" />
          <Faucet path="/faucet" />
          <GameList path="/list" />
          <Scratch path="/scratch" />
        </Router>
        <Footer />
      </MyWeb3Provider>
    </div>

  );
}

export default App;