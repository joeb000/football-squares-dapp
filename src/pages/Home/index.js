import React, { Component } from "react";
import Events from "../../components/Events"
class Home extends Component {

    render() {
        return (
          <div className="home-page">
            <h1>Football Squares Dapp!</h1>
            <div>Welcome to the football squares dapp. Still a work in progress. Check out the contracts at https://github.com/joeb000/eth-football-squares</div>
            <Events/>
          </div>
        );
      }
}
    
    export default Home;