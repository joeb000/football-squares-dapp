import React, { Component } from "react";
import "./index.css"
class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            home: null,
            away: null,
            days: null,
            token: null,
            price: null,
            showOther: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name==="token") {
            if (event.target.value==="other") {
                this.setState({ showOther: true });
            } else {
                this.setState({ showOther: false });
            }
        }
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.submitTransaction()
    }

    submitTransaction = async () => {
        const { token, price, days, home, away } = this.state
        const day = 60*60*24
        const date = Date.now() + (day*days)
        const meta = home + " | " + away
        this.props.squaresContract.methods.createGame(token, price, date, meta).send({ from: window.ethereum.selectedAddress });
    };
    

    render() {
        const showHideClassName = this.state.showOther ? 'normal' : 'hide';
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Home Team:
            <input name="home" type="text" onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                    Away Team:
            <input name="away" type="text" onChange={this.handleChange} />
                </label>
                <br></br>

                <label>
                    Game Date Time:
            <input name="days" type="number" onChange={this.handleChange} />
                </label>
                <br></br>

                <label>
                    <span>Reward Token:</span>
                    <select name="token" onChange={this.handleChange}>
                        <option value="">Please Select...</option>
                        <option value={this.props.defaultTokenAddress}>{this.props.defaultTokenName}</option>
                        <option value="other">Other...</option>
                    </select>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <input className={showHideClassName} name="otherToken" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                    Square Price:
            <input name="price" type="number" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default CreateForm;