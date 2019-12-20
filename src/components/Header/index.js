import React from 'react';
import './index.css';
import { Link } from "@reach/router"

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
      <Link to="/">Home</Link> |
      <Link to="/create">Create</Link> |
      <Link to="/Faucet">Faucet</Link>
      <div className="filler-div">
        <div className="balance-div">balance here</div>
      </div>
      </header>
    </div>
  );
}

export default Header;
