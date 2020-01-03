import React, { Component } from "react";
import Box from "3box"

class BoxProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
        loaded: false,
        profile: null
    }
    this.load()
  }

  load = async () => {
    const profile = await Box.getProfile(window.ethereum.selectedAddress)
    console.log(profile)
    this.setState({profile, loaded: true})
  };

  render() {
    if (!this.state.loaded) {
        return (<div>Box not loaded</div>)
    }
    return (
        <div className="balance-div">balance: {this.state.balance}</div>
    );
  }
}

export default BoxProfile;