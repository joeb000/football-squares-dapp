import React, { Component } from "react";
import { Link } from "@reach/router"

import icon from '../../img/metamask-icon.png'

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

            <section className="component__info">
              <div className="container-fluid component__info--container">
                <div className="row component__info--row title-row">
                  <div className="col-12 component__info--col">
                    <h2 className="section-title">How Does It Work?</h2>
                    <hr className="section-title-decorate"/>
                  </div>
                </div>
                <div className="row component__info--row column-row">
                  <div className="col-4 component__info--col">
                    <img className="info-icon" src={icon} alt={"metamask icon"}/>
                    <h3 className="column-title">Requires MetaMask</h3>
                    <p>Bacon ipsum dolor amet jowl salami andouille ham. Ground round bacon ribeye pastrami rump, meatball picanha short loin cow kevin ham. Tail buffalo beef ribs ham hock strip steak prosciutto. Picanha rump frankfurter pork belly filet mignon. Capicola leberkas brisket turkey pastrami. Corned beef porchetta kevin ham.</p>
                  </div>
                  <div className="col-4 component__info--col">
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <h3 className="column-title">Invite Friends!</h3>
                    <p>Bacon ipsum dolor amet jowl salami andouille ham. Ground round bacon ribeye pastrami rump, meatball picanha short loin cow kevin ham. Tail buffalo beef ribs ham hock strip steak prosciutto. Picanha rump frankfurter pork belly filet mignon. Capicola leberkas brisket turkey pastrami. Corned beef porchetta kevin ham.</p>
                  </div>
                  <div className="col-4 component__info--col">
                    <i class="fa fa-trophy" aria-hidden="true"></i>
                    <h3 className="column-title">Join Current Games!</h3>
                    <p>Bacon ipsum dolor amet jowl salami andouille ham. Ground round bacon ribeye pastrami rump, meatball picanha short loin cow kevin ham. Tail buffalo beef ribs ham hock strip steak prosciutto. Picanha rump frankfurter pork belly filet mignon. Capicola leberkas brisket turkey pastrami. Corned beef porchetta kevin ham.</p>
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