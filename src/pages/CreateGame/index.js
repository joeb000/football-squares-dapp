import React, { Component } from "react";
import Form from "../../components/Form"
class CreateGame extends Component {

    render() {
        return (
          <div className="create-page">
            <h1>Create New Game</h1>
            <div>Fill out the form below to create a new game</div>
            <Form />
          </div>
        );
      }
}
    
    export default CreateGame;