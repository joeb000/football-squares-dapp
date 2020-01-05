import React, { Component } from "react";
import Form from "../../components/Form"
import { MyWeb3Consumer } from "../../Web3Context"

class Create extends Component {

  componentDidMount = async () => {
    console.log("create component", this.props.tokenContract.options)
  }

  render() {
    return (
      <div>
        <section className="section-padding">
        <Form squaresContract={this.props.squaresContract} defaultTokenAddress={this.props.tokenContract.options.address} defaultTokenName="Football Token"/>
        </section>
      </div>
    );
  }
}

const CreateGame = (props) => (
  <MyWeb3Consumer>
    {({ loaded, tokenContract, squaresContract }) => {
      if (!loaded) {
        return (<div>Loading form</div>)
      }
      return (
        <div className="create-page">
        <h1>Create New Game</h1>
        <div>Fill out the form below to create a new game</div>
        <Create tokenContract={tokenContract} squaresContract={squaresContract} />
      </div>
      )
    }}
  </MyWeb3Consumer>
);


export default CreateGame;