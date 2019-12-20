import React, { Component } from "react";


class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: null,
            home: null,
            away: null,
            days: null,
            token: null,
            price: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value)
    }

    handleSubmit(event) {
        
        console.log('A name was submitted: ',this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Home Team:
            <input name="home" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                    Away Team:
            <input name="away" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br></br>

                <label>
                    Game Date Time:
            <input name="days" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br></br>

                <label>
                    Reward Token:
                <select name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="">Other...</option>
                </select><span>&nbsp;&nbsp;&nbsp; OR &nbsp;&nbsp;&nbsp;</span> 
                 <input type="text" value={this.state.value} onChange={this.handleChange} />
                 </label>
                <br></br>
                <label>
                Square Price:
            <input name="price" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br></br>
                <input type="submit" value="Submit" /> 
            </form>
        );
    }
}
export default CreateForm;