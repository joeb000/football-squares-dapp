import React, { Component } from "react";
import { MyWeb3Consumer } from "../../Web3Context"
import "./index.css"
class GetProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      imageURL: null,
      profileLoaded: false,
    }
    this.getProfile()
  }

  getProfile = async () => {
    let response = await fetch('http://api.decentprofile.com/profiles/address/' + this.props.address)
    let data = await response.json()
    console.log(data, "x")
    this.setState({
      name: data.name,
      imageURL: "http://api.decentprofile.com/images/" + data.image,
      profileLoaded: true
    })
  };

  render() {
    if (!this.state.profileLoaded) {
      return (<div>loading..</div>)
    }
    if (this.state.isEmptyAddress) {
      return (
        <div className="empty-address-div">
          <span>?</span>
        </div>
      );
    }
    return (
      <div className="profile-div">
        <span>Name: {this.state.name}</span>
        <img className="profile-card-image"
          src={this.state.imageURL}
          alt="new"
        />
      </div>
    );
  }
}


const ProfileData = (props) => (
  <MyWeb3Consumer>
    {({ loaded, tokenContract }) => {
      if (!loaded) {
        return (<div></div>)
      }
      return (
        <GetProfile tokenContract={tokenContract} address={window.ethereum.selectedAddress} />
      )
    }}
  </MyWeb3Consumer>
);

export default ProfileData;