import React from 'react';
import { Link } from "@reach/router"

import logo from '../../img/squares-logo-mock.png'

function Header() {
  return (
    
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"><img className="nav-logo" src={logo} alt={"logo"}/> </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/create"><button className="btn-primary">Create A Game</button></Link>
              <Link className="nav-item nav-link" to="/"><button className="btn-tertiary">Join A Game</button></Link>
            </div>
          </div>
        </nav>
      </header>
    </div>

  );
}

export default Header;
