import React from 'react';
import { Link } from "@reach/router"

import Balance from "../Balance"

import logo from '../../img/squares-logo-mock.png'

function Header() {
  return (
    
    <div>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
          <a className="navbar-brand" href="/"><img className="nav-logo" src={logo} alt={"logo"}/> </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

            <div className="navbar-nav">
              
              <Link className="nav-item nav-link" to="/create"><button className="btn-primary">Create A Game</button></Link>
              <Link className="nav-item nav-link" to="/list"><button className="btn-tertiary">Join A Game</button></Link>
              <Link className="nav-item nav-link" to="/faucet"><button className="btn-tertiary">Faucet</button></Link>

            </div>
          </div>
          <div className="balance-tab">
            <Balance />
          </div>
        </nav>
      </header>
    </div>

  );
}

export default Header;
