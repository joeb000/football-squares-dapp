import React, { Component } from "react";
import { Link } from "@reach/router"
class Home extends Component {

    render() {
        return (

          <div>
            <section className="component__hero">
              <div className="container-fluid component__hero--container">
                <div className="row component__hero--row">
                  <div className="col-lg-7 col-12 component__hero--col col-left">
                    <div className="hero-overlay">
                      <div className="hero-copy-container">
                        <h1 className="hero-header">Welcome To Squares!</h1>
                        <hr className="text-decorate"/>
                        <p className="hero-subcopy">The football squares dapp. Still a work in progress. Check out the contracts at https://github.com/joeb000/eth-football-squares</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-12 component__hero--col col-right">
                    <div className="hero-sidebar-copy-container">
                      <h2 className="hero-sidebar-header">Start Playing!</h2>
                      <hr className="text-decorate-sidebar"/>
                      <div className="hero-sidebar-button-container">
                        <Link to="/create" className="btn-primary">Create A Game</Link>
                        <Link to="/list" className="btn-tertiary">Join A Game</Link>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </section>
            {/* <Events/> */}
          </div>

        );
      }
}

export default Home;