import React, { Component } from "react";

import Dropzone from "../Dropzone"
import "./index.css"
class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            showOther: false,
            uploadFile: null,
            address: null,
            uploading: false,
            uploadProgress: {},
            successfullUploaded: false
        };

        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
    }


    componentDidMount() {
        if (window.ethereum.selectedAddress && !this.state.address) {
            this.setState({address: window.ethereum.selectedAddress})
        }
    }

    componentDidUpdate() {
        if (window.ethereum.selectedAddress && !this.state.address) {
            this.setState({address: window.ethereum.selectedAddress})
        }
    }

    onFilesAdded(files) {
        console.log("FILE ADd")
        this.setState({ uploadFile: files })
    }


    sendRequest(file) {
        return new Promise((resolve, reject) => {
          const req = new XMLHttpRequest();
    
          req.upload.addEventListener("load", event => {
            const copy = { ...this.state.uploadProgress };
            copy[file.name] = { state: "done", percentage: 100 };
            this.setState({ uploadProgress: copy });
            resolve(req.response);
          });
    
          req.upload.addEventListener("error", event => {
            const copy = { ...this.state.uploadProgress };
            copy[file.name] = { state: "error", percentage: 0 };
            this.setState({ uploadProgress: copy });
            reject(req.response);
          });
    
          const formData = new FormData();
          console.log(file)
          formData.append("picture", file, file.name);
          formData.append("name", this.state.name);
          formData.append("address", this.state.address);

          req.open("POST", "http://api.decentprofile.com/profiles/upload");
          req.send(formData);
        });
      }


    handleChange(event) {
        if (event.target.name === "token") {
            if (event.target.value === "other") {
                this.setState({ showOther: true });
            } else {
                this.setState({ showOther: false });
            }
        }
        this.setState({ [event.target.name]: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        //this.submitTransaction()
        console.log(this.state)
        await this.sendRequest(this.state.uploadFile[0])
    }

    submitTransaction = async () => {
        const { token, price, days, home, away } = this.state
        const day = 60 * 60 * 24
        const date = Date.now() + (day * days)
        const meta = home + " | " + away
        this.props.squaresContract.methods.createGame(token, price, date, meta).send({ from: window.ethereum.selectedAddress });
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input name="name" type="text" onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                    address:
            <input name="away" type="text" onChange={this.handleChange} value={this.state.address} size="48" disabled="true" />
                </label>
                <br></br>
                <Dropzone
                    onFilesAdded={this.onFilesAdded}
                    disabled={this.state.uploading || this.state.successfullUploaded}
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default CreateForm;