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
      isEmptyAddress: false,
      isUnknownAddress: false
    }
    //this.getProfile()
  }

  componentDidMount = async () => {

    if (this.props.address && /^0x[a-fA-F0-9]{40}$/.test(this.props.address)) {
      let shortenedAddress = this.props.address.slice(0, 4) + ".." + this.props.address.slice(38)
      this.setState({ shortenedAddress })
    }
    if (this.props.address === "0x0000000000000000000000000000000000000000") {
      console.log("empyt")
      this.setState({
        isEmptyAddress: true,
        profileLoaded: true
      })
    } else {


      let response = await fetch('https://api.decentprofile.com/profiles/address/' + this.props.address)
      if (response.status !== 200) {
        this.setState({
          isUnknownAddress: true,
          profileLoaded: true
        })
        return
      }
      let data = await response.json()
      this.setState({
        name: data.name,
        imageURL: "https://api.decentprofile.com/images/" + data.image,
        profileLoaded: true
      })
    }
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
    if (this.state.isUnknownAddress) {
      return (
        <div className="unknown-address-div">
          <span>{this.state.shortenedAddress}</span>
        </div>
      );
    }
    return (
      <div className="profile-div">
        <span>{this.state.name}</span>
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

export default GetProfile;