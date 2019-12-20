import React from 'react';
import './index.css';
import { Link } from "@reach/router"
import Balance from "../Balance"
function Header() {
  return (
    <div className="Header">
      <header className="App-header">
      <Link to="/">Home</Link> |
      <Link to="/create">Create</Link> |
      <Link to="/faucet">Faucet</Link>
      <Balance/>
      </header>
    </div>
  );
}

export default Header;
