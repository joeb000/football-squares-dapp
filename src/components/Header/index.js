import React from 'react';
import './index.css';
import { Link } from "@reach/router"

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
      <Link to="/">Home</Link>
      </header>
    </div>
  );
}

export default Header;
